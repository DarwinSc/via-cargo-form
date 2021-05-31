import {useEffect, useState} from "react"
import * as R from "ramda";

import Component from "./SenderDataForm";


const defaultFormData = {
  senderFullName: '',
  senderAddress: '',
  senderAddressNumber: '',
  senderDepartmentNumber: '',
  senderAdditionalData: '',
  senderNationalId: '',
  senderPhone: '',
  senderEmail: '',
};

const Container = props => {
  const [errors, setErrors] = useState({}),
    [formData, setFormData] = useState(defaultFormData),
    [submitDisabled, setSubmitDisabled] = useState(true);

  useEffect(() => {
    if (checkIfFormIsComplete() && getAndCleanErrors()) {
      setSubmitDisabled(false)
      resetErrorsHandler();
    } else {
      setSubmitDisabled(true)
    }
  }, [formData])

  const formDataHandler = (key, value) => setFormData({
      ...formData,
      [key]: value
    }),
    errorsHandler = (key, value) => setErrors({
      ...errors,
      [key]: value
    }),
    resetErrorsHandler = () => setErrors({});

  const senderFullNameHandler = e => {
    const value = R.pathOr(null, ['target', 'value'], e);
    errorsHandler('senderFullName', !value && 'No debe ser vacio')
    formDataHandler('senderFullName', value);
  }

  const getAndCleanErrors = () => {
      const lol = R.filter(f => f, errors);
      return R.isEmpty(lol);
    },
    checkIfFormIsComplete = () => {
      let allFormDataSuccess = true;

      Object.entries(formData).forEach(([key, value]) => {
        if (defaultFormData[key] === value)
          allFormDataSuccess = false;
      });

      return allFormDataSuccess;
    }

  console.log('formData: ', formData)

  return (
    <Component
      {...props}
      errors={errors}

      submitDisabled={submitDisabled}
      senderFullName={formData.senderFullName}
      senderFullNameHandler={senderFullNameHandler}
    />
  );
};

export default Container;
