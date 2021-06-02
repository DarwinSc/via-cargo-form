import {useEffect, useState} from "react"
import * as R from "ramda";

import Component from "./AddresseeDetailsForm";


const defaultFormData = {
    addresseeFullName: '',
    addresseeDirection: '',
    addresseeNumber: '',
    addresseePostalCode: '',
    addresseeDepartmentNumber: '',
    addresseeAdditionalDara: '',
    addresseeNationalId: '',
    addresseePhone: '',
    addresseeEmail: '',
};

const Container = props => {
    const [errors, setErrors] = useState({}),
      [formData, setFormData] = useState(defaultFormData),
      [submitDisabled, setSubmitDisabled] = useState(true);

    useEffect(() =>{
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

    const addresseeFullNameHandler = e => {
      const value = R.pathOr(null, ['target', 'value'], e);
      errorsHandler('addresseeFullName', !value && 'No debe ser vacio')
      formDataHandler('addresseeFullName', value);
    }

    const addresseeDirectionHandler = e => {
        const value = R.pathOr(null, ['target', 'value'], e);
        errorsHandler('addresseeDirection', !value && 'No debe ser vacio')
        formDataHandler('addresseeDirection', value);
      }

      const addresseeNumberHandler = e => {
        const value = R.pathOr(null, ['target', 'value'], e);
        errorsHandler('addresseeNumber', !value && 'No debe ser vacio')
        formDataHandler('addresseeNumber', value);
      }

      const addresseePostalCodeHandler = e => {
        const value = R.pathOr(null, ['target', 'value'], e);
        errorsHandler('addresseePostalCode', !value && 'No debe ser vacio')
        formDataHandler('addresseePostalCode', value);
      }

      const addresseeDepartmentNumberHandler = e => {
        const value = R.pathOr(null, ['target', 'value'], e);
        errorsHandler('addresseeDepartmentNumber', !value && 'No debe ser vacio')
        formDataHandler('addresseeDepartmentNumber', value);
      }

      const addresseeAdditionalDaraHandler = e => {
        const value = R.pathOr(null, ['target', 'value'], e);
        errorsHandler('addresseeAdditionalDara', !value && 'No debe ser vacio')
        formDataHandler('addresseeAdditionalDara', value);
      }

      const addresseeNationalIdHandler = e => {
        const value = R.pathOr(null, ['target', 'value'], e);
        errorsHandler('addresseeNationalId', !value && 'No debe ser vacio')
        formDataHandler('addresseeNationalId', value);
      }

      const addresseePhoneHandler = e => {
        const value = R.pathOr(null, ['target', 'value'], e);
        errorsHandler('addresseePhone', !value && 'No debe ser vacio')
        formDataHandler('addresseePhone', value);
      }

      const addresseeEmailHandler = e => {
        const value = R.pathOr(null, ['target', 'value'], e);
        errorsHandler('addresseeEmail', !value && 'No debe ser vacio')
        formDataHandler('addresseeEmail', value);
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
      nextStepHandler = () => props.formDataHandler('receiverData', formData);
    return (
      <Component
        {...props}
        nextStepHandler={nextStepHandler}

        submitDisabled={submitDisabled}
        addresseeFullName={formData.addresseeFullName}
        addresseeFullNameHandler={addresseeFullNameHandler}

        submitDisabled={submitDisabled}
        addresseeDirection={formData.addresseeDirection}
        addresseeDirectionHandler={addresseeDirectionHandler}

        submitDisabled={submitDisabled}
        addresseeNumber={formData.addresseeNumber}
        addresseeNumberHandler={addresseeNumberHandler}

        submitDisabled={submitDisabled}
        addresseePostalCode={formData.addresseePostalCode}
        addresseePostalCodeHandler={addresseePostalCodeHandler}

        submitDisabled={submitDisabled}
        addresseeDepartmentNumber={formData.addresseeDepartmentNumber}
        addresseeDepartmentNumberHandler={addresseeDepartmentNumberHandler}

        submitDisabled={submitDisabled}
        addresseeAdditionalDara={formData.addresseeAdditionalDara}
        addresseeAdditionalDaraHandler={addresseeAdditionalDaraHandler}

        submitDisabled={submitDisabled}
        addresseeNationalId={formData.addresseeNationalId}
        addresseeNationalIdHandler={addresseeNationalIdHandler}

        submitDisabled={submitDisabled}
        addresseePhone={formData.addresseePhone}
        addresseePhoneHandler={addresseePhoneHandler}

        submitDisabled={submitDisabled}
        addresseeEmail={formData.addresseeEmail}
        addresseeEmailHandler={addresseeEmailHandler}


        errors={errors}
      />
    );
  };


export default Container;
