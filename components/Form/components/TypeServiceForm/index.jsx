import {useState} from "react"


import Component from "./TypeServiceForm";

const servicesData = [
  {
    id: 1,
    name: 'Basica',
    title: 'Retiro/Entrega a domicilio',
    description: 'Servicio de entrega básica para envíos de hasta xxx kg. Con entrega en domicilio del destinatario*.',
    image: 'http://www.knkadvertising.com/cotizadorvc/images/basica.png',
    price: 'Campo para integrar',
    selected: true
  },
  {
    id: 2,
    name: 'Estandar',
    title: 'Retiro en domicilio / Entrega en agencia',
    description: 'Servicio de entrega básica para envíos de hasta xxx kg. Con entrega en domicilio del destinatario*.',
    image: 'http://www.knkadvertising.com/cotizadorvc/images/estandar.png',
    price: 'Campo para Integrar',
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
  };

  return (
    <Component
      {...props}
      services={services}
      typeServiceHandler={typeServiceHandler}
    />
  );
};

export default Container;
