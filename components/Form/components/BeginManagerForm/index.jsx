import {useState, useEffect} from "react"
import * as R from "ramda"

import Component from "./BeginManagerForm";

import { accordionConfig } from "../../index";

const defaultFormData = {
  originPostalCode: '',
  receptorPostalCode: '',
  numberPackages: 0,
  weightInKg: 0,
  heightInCm: 0,
  widthInCm: 0,
  depthInCm: 0,
  declaredValue: 0,
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
    nextStepHandler = e => props.formDataHandler("deliveryData", formData);

  const originPostalCodeHandler = e => {
      const value = R.pathOr(null, ['target', 'value'], e);
      errorsHandler('originPostalCode', !value && 'No debe ser vacio')
      formDataHandler('originPostalCode', value)
    },
    receptorPostalCodeHandler = e => {
      const value = R.pathOr(null, ['target', 'value'], e);
      errorsHandler('receptorPostalCode', !value && 'No debe ser vacio')
      formDataHandler('receptorPostalCode', value)
    },
    numberPackagesHandler = e => {
      const value = R.pathOr(null, ['target', 'value'], e);
      errorsHandler('numberPackages', (!value || value <= 0) && 'Debe ser mayor a 0')
      formDataHandler('numberPackages', e.target.value)
    },
    weightInKgHandler = e => {
      const value = R.pathOr(null, ['target', 'value'], e);
      errorsHandler('weightInKg', (!value || value <= 0) && 'Debe ser mayor a 0')
      formDataHandler('weightInKg', e.target.value)
    },
    heightInCmHandler = e => {
      const value = R.pathOr(null, ['target', 'value'], e);
      errorsHandler('heightInCm', (!value || value <= 0) && 'Debe ser mayor a 0')
      formDataHandler('heightInCm', e.target.value)
    },
    widthInCmHandler = e => {
      const value = R.pathOr(null, ['target', 'value'], e);
      errorsHandler('widthInCm', (!value || value <= 0) && 'Debe ser mayor a 0')
      formDataHandler('widthInCm', e.target.value)
    },
    depthInCmHandler = e => {
      const value = R.pathOr(null, ['target', 'value'], e);
      errorsHandler('depthInCm', (!value || value <= 0) && 'Debe ser mayor a 0')
      formDataHandler('depthInCm', e.target.value)
    },
    declaredValueHandler = e => {
      const value = R.pathOr(null, ['target', 'value'], e);
      errorsHandler('declaredValue', (!value || value <= 0) && 'Debe ser mayor a 0')
      formDataHandler('declaredValue', e.target.value)
    },
    dispatchFormHandler = e => e && formDataHandler('dispatchForm', e.target.value);

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
