import {useState} from "react";
import React from 'react'

import Component from "./ToPayForm"


const ToPayForm = props => {
  const [availableSubmit, setAvailableSubmit] = useState(false);

  return (
    <Component
      {...props}
      availableSubmit={availableSubmit}
      setAvailableSubmit={()=>setAvailableSubmit(!availableSubmit)}
    />
  );
};

export default ToPayForm;