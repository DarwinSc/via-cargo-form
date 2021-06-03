import {useState} from "react"


import Component from "./TypeServiceForm";

const servicesData = [
  {
    id: 1,
    name: 'Basica',
    title: 'Retiro/Entrega a domicilio',
    description: 'Servicio de entrega básica para envíos con entrega en domicilio del destinatario*.',
    image: 'http://www.knkadvertising.com/cotizadorvc/images/basica.png',
    price: '',
    selected: true
  },
  {
    id: 2,
    name: 'Estandar',
    title: 'Retiro en domicilio / Entrega en agencia',
    description: 'Servicio de entrega estándar para envíos y retiro en sucursal seleccionada*.',
    image: 'http://www.knkadvertising.com/cotizadorvc/images/estandar.png',
    price: '',
    selected: false,
  }
];

const Container = props => {
  const [services, setServices] = useState([...servicesData]);

  const typeServiceHandler = newData => {
    const data = services.map(row => {
      return {
        ...row,
        selected: row.id === newData.id
      };
    });

    setServices(data);
  },
  nextStepHandler = e => {
    const selectedService = services.find(s => s.selected);
    props.formDataHandler("typeService", selectedService)
  };

  return (
    <Component
      {...props}
      nextStepHandler={nextStepHandler}
      services={services}
      typeServiceHandler={typeServiceHandler}
    />
  );
};

export default Container;
