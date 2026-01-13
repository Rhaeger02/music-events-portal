import { useState } from 'react';

const useFormValidation = (initialValues, validationRules) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched({
      ...touched,
      [name]: true
    });
    
    // Validar campo al perder foco
    if (validationRules[name]) {
      const error = validationRules[name](values[name]);
      setErrors({
        ...errors,
        [name]: error
      });
    }
  };

  const validateForm = () => {
    let formErrors = {};
    let isValid = true;

    Object.keys(validationRules).forEach(key => {
      const error = validationRules[key](values[key]);
      if (error) {
        formErrors[key] = error;
        isValid = false;
      }
    });

    setErrors(formErrors);
    return isValid;
  };

  const resetForm = () => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
  };

  return {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    validateForm,
    resetForm,
    setIsSubmitting
  };
};

export default useFormValidation;