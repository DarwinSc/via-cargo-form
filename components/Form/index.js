import {useState} from "react";

import Component from "./Form";


export const accordionConfig = {
  BEGIN_MANAGER: false,
  SERVICE_TYPE: false,
  SENDER_DATA: false,
  RECIPIENT_DETAILS: false,
  CHECKOUT: false,
  TO_PAY: false,
};

const Container = props => {
  const [accordion, setAccordion] = useState(accordionConfig),
    [formData, setFormData] = useState({
      deliveryData: {

      },
      typeService: {

      },
      senderData: {

      },
      receiverData: {

      }
    });

  const formDataHandler = (key, value) => setFormData({
      ...formData,
      [key]: value
    });

  /**
   * @description Receive a name of accordion option and show or hide this option.
   * @param sectionName {String}
   * @param value {Boolean}
   */
  const setAccordionHandler = (sectionName, value) => {
    setAccordion({
      ...accordionConfig,
      [sectionName]: !!value
    });
  }

  return (
    <Component
      {...props}

      formData={formData}
      formDataHandler={formDataHandler}
      accordion={accordion}
      setAccordionHandler={setAccordionHandler}
    />
  );
};

export default Container;
