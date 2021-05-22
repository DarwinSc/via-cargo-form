import {useState} from "react"

import Component from "./BeginManagerForm";

const Container = props => {
  const [formData, setFormData] = useState({
      originPostalCode: '',
      receptorPostalCode: '',
      numberPackages: 0,
      weightInKg: 0,
      heightInCm: 0,
      widthInCm: 0,
      depthInCm: 0,
      declaredValue: 0,
      dispatchForm: null,
    });

  const formDataHandler = (key, value) => setFormData({
    ...formData,
    [key]: value
  });

  const originPostalCodeHandler = e => e && formDataHandler('originPostalCode', e.target.value),
    receptorPostalCodeHandler = e => e && formDataHandler('receptorPostalCode', e.target.value),
    numberPackagesHandler = e => e && formDataHandler('numberPackages', e.target.value),
    weightInKgHandler = e => e && formDataHandler('weightInKg', e.target.value),
    heightInCmHandler = e => e && formDataHandler('heightInCm', e.target.value),
    widthInCmHandler = e => e && formDataHandler('widthInCm', e.target.value),
    depthInCmHandler = e => e && formDataHandler('depthInCm', e.target.value),
    declaredValueHandler = e => e && formDataHandler('declaredValue', e.target.value),
    dispatchFormHandler = e => e && formDataHandler('dispatchForm', e.target.value);

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
    />
  );
};

export default Container;
