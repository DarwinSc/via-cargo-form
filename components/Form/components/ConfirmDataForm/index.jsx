import {useState} from "react";
import React from 'react'

import Component from "./ConfirmDataForm"


const Container = props => {
  const [availableSubmit, setAvailableSubmit] = useState(false);
 

  return (
    <Component
      {...props}
      availableSubmit={availableSubmit}
      setAvailableSubmit={()=>setAvailableSubmit(!availableSubmit)}
    />
  );
};

export default Container;

