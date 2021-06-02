import {useState} from "react";

import {useBeforeFirstRender} from "../../hooks";

import Component from "./Form";


const accordionConfig = {
  BEGIN_MANAGER: true,
  SERVICE_TYPE: false,
  SENDER_DATA: false,
  RECIPIENT_DETAILS: false,
  CHECKOUT: false,
  TO_PAY: false,
};

const Container = props => {
  const [accordion, setAccordion] = useState(accordionConfig);

  /**
   * @description Receive a name of accordion option and show or hide this option.
   * @param sectionName {String}
   */
  const setAccordionHandler = sectionName => {
    setAccordion({
      ...accordionConfig,
      [sectionName]: !accordion[sectionName]
    });
  }

  return (
    <Component
      {...props}
      accordion={accordion}
      setAccordionHandler={setAccordionHandler}
    />
  );
};

export default Container;
