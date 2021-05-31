import React from "react";

const AddresseeDetailsForm = props => {
    return (
      <div className="card-body">
      <div className="row">
        <div className="container">
          <div className="text-left"><h3>Completá los datos del destinatario</h3>
            <p>Los campos marcados con * son obligatorios</p></div>
        </div>

        <div className="form-group col-md-3 col-lg-12">
          <br/>

          <p className="formulario">Nombre completo del destinatario*</p>

          <input 
            type="text" 
            placeholder="Nombre completo" 
            className="form-control"
            defaultValue={props.addresseeFullName}
            onChange={props.addresseeFullNameHandler}
            />
            <label className="text-danger">{props.errors.addresseeFullName}</label>
          <br/>
        </div>

        <div className="form-group form-group col-md-2 col-lg-4">
          <p className="formulario">Dirección*</p>

          <input 
            type="text" 
            placeholder="Calle" 
            className="form-control"
            defaultValue={props.addresseeDirection}
            onChange={props.addresseeDirectionHandler}
            />
            <label className="text-danger">{props.errors.addresseeDirection}</label>
          <br/>

        </div>

        <div className="form-group form-group col-md-2 col-lg-2">
          <p className="formulario">Número*</p>

          <input 
            type="text" 
            className="form-control"
            defaultValue={props.addresseeNumber}
            onChange={props.addresseeNumberHandler}
            />
            <label className="text-danger">{props.errors.addresseeNumber}</label>
          <br/>

        </div>

        <div className="form-group form-group col-md-2 col-lg-2">
          <p className="formulario">Codigo Postal*</p>

          <input 
            type="text" 
            className="form-control"
            defaultValue={props.addresseePostalCode}
            onChange={props.addresseePostalCodeHandler}
            />
            <label className="text-danger">{props.errors.addresseePostalCode}</label>
          <br/>

        </div>

        <div className="form-group form-group col-md-2 col-lg-2">
          <p className="formulario">Piso/Depto</p>

          <input 
            type="text" 
            className="form-control"
            defaultValue={props.addresseeDepartmentNumber}
            onChange={props.addresseeDepartmentNumberHandler}
            />
            <label className="text-danger">{props.errors.addresseeDepartmentNumber}</label>
          <br/>

        </div>

        <div className="form-group form-group col-md-2 col-lg-2">
          <p className="formulario">Datos adicionales</p>

          <input 
            type="text" 
            className="form-control" 
            size="50" 
            maxLength="20"
            defaultValue={props.addresseeAdditionalDara}
            onChange={props.addresseeAdditionalDaraHandler}
            />
            <label className="text-danger">{props.errors.addresseeAdditionalDara}</label>
          <br/>

        </div>
        <div className="form-group col-md-3 col-lg-4">
          <br/>

          <p className="formulario">DNI/CUIL/CUIT del destinatario*</p>

          <input 
            type="text" 
            className="form-control"
            defaultValue={props.addresseeNationalId}
            onChange={props.addresseeNationalIdHandler}
            />
            <label className="text-danger">{props.errors.addresseeNationalId}</label>
          <br/>
        </div>


        <div className="form-group col-md-3 col-lg-4">
          <br/>
          <p className="formulario">Teléfono del destinatario*</p>

          <input 
            type="text" 
            className="form-control"
            defaultValue={props.addresseePhone}
            onChange={props.addresseePhoneHandler}
            />
            <label className="text-danger">{props.errors.addresseePhone}</label>
          <br/>
        </div>


        <div className="form-group col-md-3 col-lg-4">
          <br/>
          <p className="formulario">Email del remitente*</p>

          <input 
            type="email" 
            className="form-control"
            defaultValue={props.addresseeEmail}
            onChange={props.addresseeEmailHandler}
            />
            <label className="text-danger">{props.errors.addresseeEmail}</label>
          <br/>
        </div>


        <br/>
        <br/>

        <div className="form-group form-group col-md-3 col-lg-12">

          <a
          id="enviar4" 
          className={`btn btn-primary btn-md ${props.submitDisabled && 'disabled'}`}
          href="##collapseFive1"
          data-toggle="collapse"
          
          >
            Siguiente
          </a>

        </div>

        <div className="form-group form-group col-md-3 col-lg-12">

          Volver atrás
        </div>


      </div>

    </div>
    );
};

export default AddresseeDetailsForm;
