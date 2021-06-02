import React from 'react'

const ConfirmDataForm = props => {
  return (
    <div className="card-body">
      <div className="row">
        <div className="container">
          <div className="text-left">
            <h3>Detalle de la operación</h3>
            <p>Por favor, revise cuidadosamente los datos ingresados</p></div>
        </div>

        <div className="col-md-3 col-lg-5">
          <img src="/images/box.png" alt="Via Cargo Mi retiro en domicilio Online" width="100"
               className="img-fluid"/>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <div className="col-md-3 col-lg-12">
          <div className="text-left">
            <p>
              <strong>Descripción del envío</strong>
            </p>

          </div>
        </div>

        <div className="col-md-3 col-lg-12">
          <div className="text-left">
            <h5>Retiro/Entrega a domicilio</h5>
            <p>
              {props.deliveryData.heightInCm} cm
              x {props.deliveryData.widthInCm} cm
              x {props.deliveryData.depthInCm} cm</p>
            <h4><b>Entrega estándar</b></h4>
          </div>
        </div>
        <div className="col-md-3 col-lg-12">
          <hr className="my-4"/>
          <div className="text-left">
            <p>
              <strong>Remitente</strong>
            </p>

          </div>
        </div>
        <div className="col-md-3 col-lg-12">
          <div className="text-left">
            <h5>{props.senderData.senderFullName}</h5>
            <p>
              <b>Direccion</b>: {props.senderData.senderAddress} {props.senderData.senderAddressNumber}, <b>Departamento</b>: {props.senderData.senderDepartmentNumber}
            </p>
            <p><b>Codigo postal:</b> {props.senderData.senderPostalCode}</p>
            <p>
              <b>DNI:</b> {props.senderData.senderNationalId} / <b>Email:</b> {props.senderData.senderEmail} / <b>Cel:</b>.{props.senderData.senderPhone}
            </p>
          </div>
        </div>
        <div className="col-md-3 col-lg-12">
          <hr className="my-4"/>
          <div className="text-left">
            <p>
              <strong>Destinatario</strong>
            </p>

          </div>
        </div>
        <div className="col-md-3 col-lg-12">
          <div className="text-left">
            <h5>{props.receiverData.addresseeFullName}</h5>
            <p>
              <b>Dirección:</b> {props.receiverData.addresseeDirection} {props.receiverData.addresseeNumber}  <b>Piso/Depto:</b> {props.receiverData.addresseeDepartmentNumber}

            </p>

            <p>
                <b>Codigo Postal:</b> {props.receiverData.addresseePostalCode}
            </p>
            <p>
              <b>DNI/CUIL:</b> {props.receiverData.addresseeNationalId} <b>Email:</b> {props.receiverData.addresseeEmail} <b>Cel</b> {props.receiverData.addresseePhone}
              </p>
          </div>
          <hr className="my-4"/>
        </div>
        <div className="col-md-3 col-lg-12">
          <div className="text-left">
            <h5>Total</h5>
            <h3>${props.typeService.price}</h3>

            <p>
              *Este cargo es el costo del retiro. El valor del envío se abonará con el
              retiro o en destino.
            </p>
          </div>

        </div>

        {/* <div className="row">


                <div className="form-group form-group col-md-3 col-lg-5"><br/>

                  <p className="formulario">Cupón de descuento</p>

                  <input
                    type="text"
                    placeholder="¿Tiene un cupón de descuento?"
                    className="form-control"
                  />
                  <br/>

                </div>
              </div> */}

        <div className="form-group form-group col-md-3 col-lg-12">


          <input
            className="form-check-inline"
            name="accept"
            type="checkbox"
            id="accept"
            defaultValue={props.availableSubmit}
            onClick={props.setAvailableSubmit}

          />
          <label htmlFor="accept" className="form-check-label">
            El contenido del envío que realizo
            está bajo mi responsabilidad.*
          </label>

          <br/>
          <br/>


        </div>

        <div className="form-group form-group col-md-3 col-lg-12">

          <a
            id="enviar3"
            className={`btn btn-primary btn-md ${!props.availableSubmit && 'disabled'}`}
            href="#collapseSix"
            data-toggle="collapse"
            onClick={props.nextStepHandler}
          >
            Confirmar
          </a>

        </div>


      </div>







    </div>
  );
};

export default ConfirmDataForm;
