import {useEffect, useState} from "react"
import * as R from "ramda";

import Component from "./SenderDataForm";


const defaultFormData = {
  senderFullName: '',
  senderAddress: '',
  senderAddressNumber: '',
  senderPostalCode: '',
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

  const senderAddressHandler = e => {
    const value = R.pathOr(null, ['target', 'value'], e);
    errorsHandler('senderAddress', !value && 'No debe ser vacio')
    formDataHandler('senderAddress', value);
  }

  const senderAddressNumberHandler = e => {
    const value = R.pathOr(null, ['target', 'value'], e);
    errorsHandler('senderAddressNumber', !value && 'No debe ser vacio')
    formDataHandler('senderAddressNumber', value);
  }

  const senderPostalCodeHandler = e => {
    const value = R.pathOr(null, ['target', 'value'], e);
    errorsHandler('senderPostalCode', !value && 'No debe ser vacio')
    formDataHandler('senderPostalCode', value);
  }

  const senderDepartmentNumberHandler = e => {
    const value = R.pathOr(null, ['target', 'value'], e);
    errorsHandler('senderDepartmentNumber', !value && 'No debe ser vacio')
    formDataHandler('senderDepartmentNumber', value);
  }

  const senderAdditionalDataHandler = e => {
    const value = R.pathOr(null, ['target', 'value'], e);
    errorsHandler('senderAdditionalData', !value && 'No debe ser vacio')
    formDataHandler('senderAdditionalData', value);
  }

  const senderNationalIdHandler = e => {
    const value = R.pathOr(null, ['target', 'value'], e);
    errorsHandler('senderNationalId', !value && 'No debe ser vacio')
    formDataHandler('senderNationalId', value);
  }

  const senderPhoneHandler = e => {
    const value = R.pathOr(null, ['target', 'value'], e);
    errorsHandler('senderPhone', !value && 'No debe ser vacio')
    formDataHandler('senderPhone', value);
  }

  const senderEmailHandler = e => {
    const value = R.pathOr(null, ['target', 'value'], e);
    errorsHandler('senderEmail', !value && 'No debe ser vacio')
    formDataHandler('senderEmail', value);
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
    },
    nextStepHandler = () => props.formDataHandler('senderData', formData);

  return (
    <Component
      {...props}
      submitDisabled={submitDisabled}

      nextStepHandler={nextStepHandler}

      senderFullName={formData.senderFullName}
      senderFullNameHandler={senderFullNameHandler}

      senderAddress={formData.senderAddress}
      senderAddressHandler={senderAddressHandler}

      senderAddressNumber={formData.senderAddressNumber}
      senderAddressNumberHandler={senderAddressNumberHandler}

      senderPostalCode={formData.senderPostalCode}
      senderPostalCodeHandler={senderPostalCodeHandler}

      senderDepartmentNumber={formData.senderDepartmentNumber}
      senderDepartmentNumberHandler={senderDepartmentNumberHandler}

      senderAdditionalData={formData.senderAdditionalData}
      senderAdditionalDataHandler={senderAdditionalDataHandler}

      senderNationalId={formData.senderNationalId}
      senderNationalIdHandler={senderNationalIdHandler}

      senderPhone={formData.senderPhone}
      senderPhoneHandler={senderPhoneHandler}

      senderEmail={formData.senderEmail}
      senderEmailHandler={senderEmailHandler}

      errors={errors}

    />
  );
};

export default Container;
