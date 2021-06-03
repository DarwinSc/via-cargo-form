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

        <p>*Los valores de cotización son únicamente informativos y están sujetos a variaciones según cargo por manejo, peso y/o medida reales registradas en el momento del retira.</p>

        <p>**En todos los casos el acondicionamiento del embalaje de las piezas es responsabilidad del remitente.</p>

        <p>* Toda operación tiene un costo mínimo y fijo de $ , en concepto de flete por el retiro a domicilio de encomienda y gastos de servicio.
        </p>
        <div className="form-group row form-group col-md-3 col-lg-2"><br/>

          <a 
          id="enviar2"
          className={`btn btn-primary btn-md ${props.submitDisabled && 'disabled'}`}
          href="#collapseThree1"
          data-toggle="collapse"
          onClick={props.nextStepHandler} 
          >
            Siguiente
          </a>
          <br/>
          <br/>
        <a
          className="btn btn-secondary"
          data-toggle="collapse"
          href={`#${props.previousNameAction}`}
        >
          Volver atrás
        </a>
        </div>

      </div>

    </div>
  );
};

export default TypeServiceForm;
