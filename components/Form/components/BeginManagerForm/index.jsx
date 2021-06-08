import {useState, useEffect} from "react"
import * as R from "ramda"

import Component from "./BeginManagerForm";

import { accordionConfig } from "../../index";

const defaultFormData = {
  originPostalCode: '',
  receptorPostalCode: '',
  numberPackages: '',
  weightInKg: '',
  heightInCm: '',
  widthInCm: '',
  depthInCm: '',
  declaredValue: '',
  dispatchForm: null,
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
    resetErrorsHandler = () => setErrors({}),
    nextStepHandler = e => {
      if(submitDisabled) {
        let errors = {

        }
       
        Object.keys(formData).map((key) => {
          const value = formData[key];
          if(!value) {
            errors = {
              ...errors,
              [key]: 'Campo obligatorio'
            }
          }
        });

        if(!R.isEmpty(errors)) {
          setErrors({...errors});
        }
      } else {
        props.formDataHandler("deliveryData", formData);
      }
    }

  const originPostalCodeHandler = e => {
      const value = R.pathOr(null, ['target', 'value'], e);
      errorsHandler('originPostalCode', !value && 'Campo obligatorio')
      formDataHandler('originPostalCode', value)
    },
    receptorPostalCodeHandler = e => {
      const value = R.pathOr(null, ['target', 'value'], e);
      errorsHandler('receptorPostalCode', !value && 'Campo obligatorio')
      formDataHandler('receptorPostalCode', value)
    },
    numberPackagesHandler = e => {
      const value = R.pathOr(null, ['target', 'value'], e);
      errorsHandler('numberPackages', (!value || value <= 0) && 'Campo obligatorio')
      formDataHandler('numberPackages', e.target.value)
    },
    weightInKgHandler = e => {
      const value = R.pathOr(null, ['target', 'value'], e);
      errorsHandler('weightInKg', (!value || value <= 0) && 'Campo obligatorio')
      formDataHandler('weightInKg', e.target.value)
    },
    heightInCmHandler = e => {
      const value = R.pathOr(null, ['target', 'value'], e);
      errorsHandler('heightInCm', (!value || value <= 0) && 'Campo obligatorio')
      formDataHandler('heightInCm', e.target.value)
    },
    widthInCmHandler = e => {
      const value = R.pathOr(null, ['target', 'value'], e);
      errorsHandler('widthInCm', (!value || value <= 0) && 'Campo obligatorio')
      formDataHandler('widthInCm', e.target.value)
    },
    depthInCmHandler = e => {
      const value = R.pathOr(null, ['target', 'value'], e);
      errorsHandler('depthInCm', (!value || value <= 0) && 'Campo obligatorio')
      formDataHandler('depthInCm', e.target.value)
    },
    declaredValueHandler = e => {
      const value = R.pathOr(null, ['target', 'value'], e);
      errorsHandler('declaredValue', (!value || value <= 0) && 'Campo obligatorio')
      formDataHandler('declaredValue', e.target.value)
    },
    dispatchFormHandler = e => {
      const value = R.pathOr(null, ['target', 'value'], e);
      errorsHandler('dispatchForm', !value && 'Campo obligatorio')
      formDataHandler('dispatchForm', e.target.value);
    };

  const getAndCleanErrors = () => {
      const filterErrors = R.filter(f => f, errors);
      return R.isEmpty(filterErrors);
    },
    checkIfFormIsComplete = () => {
      let allFormDataSuccess = true;

      Object.entries(formData).forEach(([key, value]) => {
        if (defaultFormData[key] === value)
          allFormDataSuccess = false;
      });

      return allFormDataSuccess;
    }

  return (
    <Component
      {...props}
      originPostalCode={formData.originPostalCode}
      originPostalCodeHandler={originPostalCodeHandler}

      receptorPostalCode={formData.receptorPostalCode}
      receptorPostalCodeHandler={receptorPostalCodeHandler}

      numberPackages={formData.numberPackages}
      numberPackagesHandler={numberPackagesHandler}

      weightInKg={formData.weightInKg}
      weightInKgHandler={weightInKgHandler}

      heightInCm={formData.heightInCm}
      heightInCmHandler={heightInCmHandler}

      widthInCm={formData.widthInCm}
      widthInCmHandler={widthInCmHandler}

      depthInCm={formData.depthInCm}
      depthInCmHandler={depthInCmHandler}

      declaredValue={formData.declaredValue}
      declaredValueHandler={declaredValueHandler}

      dispatchForm={formData.dispatchForm}
      dispatchFormHandler={dispatchFormHandler}

      errors={errors}
      submitDisabled={submitDisabled}
      nextStepHandler={nextStepHandler}
    />
  );
};

export default Container;
