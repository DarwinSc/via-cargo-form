import React from "react";

const SenderDataForm = props => {
  return (
    <div className="card-body">
      <div className="row">
        <div className="container">
          <div className="text-left"><h3>Completá los datos del remitente</h3>
            <p>Los campos marcados con * son obligatorios</p></div>
        </div>

        <div className="form-group col-md-3 col-lg-12">
          <br/>

          <p className="formulario">Nombre completo del remitente*</p>
          <input
            type="text"
            placeholder="Nombre completo"
            className="form-control"
            defaultValue={props.senderFullName}
            onChange={props.senderFullNameHandler}
          />
          <label className="text-danger">{props.errors.senderFullName}</label>
          <br/>
        </div>

        <div className="form-group form-group col-md-2 col-lg-4">
          <p className="formulario">Dirección*</p>

          <input type="text" placeholder="Calle" className="form-control"/><br/>

        </div>
        <div className="form-group form-group col-md-2 col-lg-2">
          <p className="formulario">Número*</p>

          <input type="text" className="form-control"/><br/>

        </div>

        <div className="form-group form-group col-md-2 col-lg-2">
          <p className="formulario">Codigo Postal*</p>

          <input type="text" className="form-control"/><br/>

        </div>

        <div className="form-group form-group col-md-2 col-lg-2">
          <p className="formulario">Piso/Depto</p>

          <input type="text" className="form-control"/><br/>

        </div>

        <div className="form-group form-group col-md-2 col-lg-2">
          <p className="formulario">Datos adicionales</p>

          <input type="text" className="form-control" size="50" maxLength="20"/>
          <br/>

        </div>
        <div className="form-group col-md-3 col-lg-4">
          <br/>

          <p className="formulario">DNI/CUIL/CUIT del remitente*</p>
          <input type="text" className="form-control"/><br/>
        </div>
        <div className="form-group col-md-3 col-lg-4">
          <br/>

          <p className="formulario">Teléfono del remitente*</p>
          <input type="text" className="form-control"/><br/>
        </div>
        <div className="form-group col-md-3 col-lg-4">
          <br/>

          <p className="formulario">Email del remitente*</p>
          <input type="email" className="form-control"/><br/>
        </div>


        <br/>
        <br/>

        <div className="form-group form-group col-md-3 col-lg-12">

          <input
            name="enviar3"
            type="button"
            id="enviar3"
            title="Enviar"
            defaultValue="Siguiente"
            className={`btn btn-primary btn-md ${props.submitDisabled && 'disabled'}`}
          />
          <br/>
          <br/>
          <a
            className={`btn btn-secondary`}
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

export default SenderDataForm;
