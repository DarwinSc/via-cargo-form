import {useEffect, useState} from "react"
import * as R from "ramda";

import Component from "./AddresseeDetailsForm";


import { isValidEmail } from "../../../../utils"


const defaultFormData = {
    addresseeFullName: '',
    addresseeDirection: '',
    addresseeNumber: '',
    addresseePostalCode: '',
    //addresseeDepartmentNumber: '',
    //addresseeAdditionalDara: '',
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
      errorsHandler('addresseeFullName', !value && 'Campo obligatorio')
      formDataHandler('addresseeFullName', value);
    }

    const addresseeDirectionHandler = e => {
        const value = R.pathOr(null, ['target', 'value'], e);
        errorsHandler('addresseeDirection', !value && 'Campo obligatorio')
        formDataHandler('addresseeDirection', value);
      }

      const addresseeNumberHandler = e => {
        const value = R.pathOr(null, ['target', 'value'], e);
        errorsHandler('addresseeNumber', !value && 'Campo obligatorio')
        formDataHandler('addresseeNumber', value);
      }

      const addresseePostalCodeHandler = e => {
        const value = R.pathOr(null, ['target', 'value'], e);
        errorsHandler('addresseePostalCode', !value && 'Campo obligatorio')
        formDataHandler('addresseePostalCode', value);
      }

      const addresseeDepartmentNumberHandler = e => {
        const value = R.pathOr(null, ['target', 'value'], e);
        errorsHandler('addresseeDepartmentNumber', !value && 'Campo obligatorio')
        formDataHandler('addresseeDepartmentNumber', value);
      }

      const addresseeAdditionalDaraHandler = e => {
        const value = R.pathOr(null, ['target', 'value'], e);
        errorsHandler('addresseeAdditionalDara', !value && 'Campo obligatorio')
        formDataHandler('addresseeAdditionalDara', value);
      }

      const addresseeNationalIdHandler = e => {
        const value = R.pathOr(null, ['target', 'value'], e);
        errorsHandler('addresseeNationalId', !value && 'Campo obligatorio')
        formDataHandler('addresseeNationalId', value);
      }

      const addresseePhoneHandler = e => {
        const value = R.pathOr(null, ['target', 'value'], e);
        errorsHandler('addresseePhone', !value && 'Campo obligatorio')
        formDataHandler('addresseePhone', value);
      }

      const addresseeEmailHandler = e => {
        const value = R.pathOr(null, ['target', 'value'], e);
        console.log
        if(!value)
          errorsHandler('addresseeEmail', !value && 'Campo obligatorio')
    
        else if(!isValidEmail(value))
          errorsHandler('addresseeEmail', 'Debe ser un email valid')
        else if(isValidEmail(value))
          errorsHandler('addresseeEmail', null)
          
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
