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
            <p>Entrega estándar</p>
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
              <strong>Remitente</strong>
            </p>

          </div>
        </div>
        <div className="col-md-3 col-lg-12">
          <div className="text-left">
            <h5>Nombre y apellido del remitente</h5>
            <p>Dirección 1234, Piso: 1 Depto: D</p>
            <p>Argentina, C.A.B.A. / CP1024</p>
            <p>DNI: 12.345.678 / email@gmail.com / Cel. 011-1234-5678</p>
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
            checked={props.availableSubmit}
            onClick={props.setAvailableSubmit}

          />
          <label for="accept" className="form-check-label">
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


        <div
          className="modal fade"
          id="ventanamodal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="tituloventana"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">

              <div className="modal-header">

                <img src="/images/logo-via-cargo-verde.png" alt="Placeholder image"
                     width="150" className="img-fluid"/>
                <hr/>
                <h5
                  className="card-title"
                  id="tituloventana"
                >
                  <strong>Orden confirmada</strong>
                </h5>

                <button
                  className="close"
                  data-dismiss="modal"
                  aria-label="Cerrar"
                >
                  <span aria-hidden="true">&times;</span>
                </button>

              </div>

              <div className="modal-body">
                <div className="alert alert-success">

                  <p className="card-text">Su solicitud se envió correctamente.
                    Gracias.</p>

                  <img
                    src="/images/orden-confirmada.png"
                    alt="Placeholder image"
                    width="200"
                    className="img-fluid"
                  />

                  <br/>
                  <br/>

                  <p
                    className="card-text">Estimado <strong>Nombre Cliente</strong>,</p>

                  <p className="card-text">Hemos procesado su solicitud. En breve recibirá
                    un mail con los detalles de la operación y número de
                    seguimiento.</p>

                  <p className="card-text">Gracias por confiar en <strong>Via
                    Cargo.</strong></p>

                </div>

              </div>
              <div className="modal-footer">

                <button
                  className="btn btn-primary"
                  type="button"
                  data-dismiss="modal"
                >
                  Ver
                  resumen en pdf
                </button>

              </div>

            </div>
          </div>
        </div>


      </div>

    </div>
  );
};

export default ConfirmDataForm;
