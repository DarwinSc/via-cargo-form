import React, {Fragment} from "react";

const TypeServiceForm = props => {
  return (
    <div className="card-body"><br/>
      <h3>Seleccione el tipo de operación</h3><br/>
      <br/>
      <div className="row">
        {props.services && props.services.map((service, index) => {
          return (
            <Fragment key={`services-${index}`}>
              <div className="card text-center col-lg-5 col-md-4">
                <div className="card-titulo">{service.name}</div>
                <div className="card-body">
                  <h5 className="card-title">{service.title}</h5>
                  <img src={service.image} className="img-fluid" alt="Placeholder image"/>
                  <br/>
                  <br/>

                  <p className="card-text">{service.description}</p>
                  <hr className="my-4"/>
                  <h3>${service.price}</h3>

                  <input
                    type="button"
                    className={service.selected ? 'btn btn-primary' : 'btn btn-secondary'}
                    id="Seleccionar"
                    defaultValue="Seleccionar"
                    onClick={() => {
                      if (typeof props.typeServiceHandler === "function") {
                        props.typeServiceHandler(service);
                      }
                    }}
                  />
                </div>
              </div>
              {index%2===0 && (<div className="col-lg-1 col-md-4" />)}
            </Fragment>
          );
        })}
      </div>
      <br/>
      <br/>
      <div>

        <p>*Los valores de cotización son únicamente informativos y están sujetos a
          variaciones
          según cargo por manejo, peso y/o medida reales registradas en el momento de la
          venta. El valor del servicio contraentrega tiene un costo adicional que no está
          contemplado en esta cotización. El valor del envío puede variar en el momento de la
          entrega en el punto de venta.</p>

        <p>**La prima de reembolso a pagar, es del 2,5% del valor declarado. En todos los
          casos
          el acondicionamiento del embalaje de las piezas es responsabilidad del
          remitente.</p>

        <p>*** Toda operación tiene un costo mínimo y fijo de $300, en concepto de flete por
          el
          retiro a domicilio de encomienda.
        </p>
        <div className="form-group row form-group col-md-3 col-lg-2"><br/>

          <input name="enviar2" type="submit" id="enviar2" title="Enviar2" defaultValue="Siguiente"
                 className="btn btn-primary btn-md"/>
        </div>

        <a
          className="btn btn-secondary"
          data-toggle="collapse"
          href={`#${props.previousNameAction}`}
        >
          Volver atrás
        </a>
      </div>

    </div>
  );
};

export default TypeServiceForm;
