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

          <input 
          type="text" 
          placeholder="Calle" 
          className="form-control"
          defaultValue={props.senderAddress}
          onChange={props.senderAddressHandler}
          />
          <label className="text-danger">{props.errors.senderAddress}</label>
          <br/>
        </div>
        <div className="form-group form-group col-md-2 col-lg-2">
          <p className="formulario">Número*</p>

          <input 
          type="text" 
          className="form-control"
          defaultValue={props.senderAddressNumber}
          onChange={props.senderAddressNumberHandler}
          />
          <label className="text-danger">{props.errors.senderAddressNumber}</label>
          <br/>
        </div>

        <div className="form-group form-group col-md-2 col-lg-2">
          <p className="formulario">Codigo Postal*</p>

          <input 
          type="text" 
          className="form-control"
          defaultValue={props.senderPostalCode}
          onChange={props.senderPostalCodeHandler}
          />
           <label className="text-danger">{props.errors.senderPostalCode}</label>
          <br/>
        </div>

        <div className="form-group form-group col-md-2 col-lg-2">
          <p className="formulario">Piso/Depto</p>

          <input 
          type="text" 
          className="form-control"
          defaultValue={props.senderDepartmentNumber}
          onChange={props.senderDepartmentNumberHandler}
          />
          <label className="text-danger">{props.errors.senderDepartmentNumber}</label>
          <br/>
        </div>

        <div className="form-group form-group col-md-2 col-lg-2">
          <p className="formulario">Datos adicionales</p>

          <input 
          type="text" 
          className="form-control" 
          size="50" 
          maxLength="20"
          defaultValue={props.senderAdditionalData}
          onChange={props.senderAdditionalDataHandler}
          />
          <label className="text-danger">{props.errors.senderAdditionalData}</label>
          <br/>

        </div>
        <div className="form-group col-md-3 col-lg-4">
          <br/>
          <p className="formulario">DNI/CUIL/CUIT del remitente*</p>

          <input 
          type="text" 
          className="form-control"
          defaultValue={props.senderNationalId}
          onChange={props.senderNationalIdHandler}
          />
          <label className="text-danger">{props.errors.senderNationalId}</label>
          <br/>
        </div>
        <div className="form-group col-md-3 col-lg-4">
          <br/>
          <p className="formulario">Teléfono del remitente*</p>

          <input 
          type="text"
          className="form-control"
          defaultValue={props.senderPhone}
          onChange={props.senderPhoneHandler}
          />
          <label className="text-danger">{props.errors.senderPhone}</label>
          <br/>
        </div>
        <div className="form-group col-md-3 col-lg-4">
          <br/>
          <p className="formulario">Email del remitente*</p>

          <input 
          type="tex" 
          className="form-control"
          defaultValue={props.senderEmail}
          onChange={props.senderEmailHandler}
          />
          <label className="text-danger">{props.errors.senderEmail}</label>
          <br/>
        </div>


        <br/>
        <br/>

        <div className="form-group form-group col-md-3 col-lg-12">

          <a
            id="enviar3"
            className={`btn btn-primary btn-md ${props.submitDisabled && 'disabled'}`}
            href="#collapseFour1"
            data-toggle="collapse"
            onClick={props.nextStepHandler}
          >
            Siguiente
            </a>
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
