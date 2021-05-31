import BeginManagerForm from "./components/BeginManagerForm";
import TypeServiceForm from "./components/TypeServiceForm";
import SenderDataForm from "./components/SenderDataForm";

const Form = props => {
  return (
    <div id="accordion1" role="tablist">
      <div className="card">
        <div className="card-header" role="tab" id="headingOne1">
          <h5 className="mb-0">
            <a
              data-toggle="collapse"
              href="#collapseOne1"
              role="button"
              aria-expanded="false"
              aria-controls="collapseOne1"
              onClick={() => props.setAccordionHandler('BEGIN_MANAGER')}
            >
              1- Comenzá a gestionar
            </a>
          </h5>
        </div>

        <div
          id="collapseOne1"
          className={`collapse show`}
          role="tabpanel"
          aria-labelledby="headingOne1"
          data-parent="#accordion1"
        >
          <div className="card-body">
            <BeginManagerForm/>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header" role="tab" id="headingTwo1">
          <h5 className="mb-0">
            <a
              className="collapsed"
              data-toggle="collapse"
              href="#collapseTwo1"
              role="button"
              aria-expanded="false"
              aria-controls="collapseTwo1"
            >2- Tipo de
              servicio </a>
          </h5>
        </div>

        <div
          id="collapseTwo1"
          className="collapse"
          role="tabpanel"
          aria-labelledby="headingTwo1"
          data-parent="#accordion1"
        >
          <TypeServiceForm previousNameAction="collapseOne1"/>
        </div>
      </div>

      <div className="card">
        <div className="card-header" role="tab" id="headingThree1">
          <h5 className="mb-0">
            <a
              className="collapsed"
              data-toggle="collapse"
              href="#collapseThree1"
              role="button"
              aria-expanded="false"
              aria-controls="collapseThree1"
            >
              3- Datos del remitente
            </a>
          </h5>
        </div>

        <div
          id="collapseThree1"
          className="collapse"
          role="tabpanel"
          aria-labelledby="headingThree1"
          data-parent="#accordion1"
        >
          <SenderDataForm previousNameAction="collapseTwo1"/>
        </div>
      </div>

      <div className="card">
        <div className="card-header" role="tab" id="headingFour1">
          <h5 className="mb-0"><a className="collapsed" data-toggle="collapse" href="#collapseFour1"
                                  role="button"
                                  aria-expanded="false" aria-controls="collapseFour1">4- Datos del
            destinatario </a></h5>
        </div>
        <div id="collapseFour1" className="collapse" role="tabpanel" aria-labelledby="headingFour1"
             data-parent="#accordion1">
          <div className="card-body">
            <div className="row">
              <div className="container">
                <div className="text-left"><h3>Completá los datos del destinatario</h3>
                  <p>Los campos marcados con * son obligatorios</p></div>
              </div>

              <div className="form-group col-md-3 col-lg-12">
                <br/>

                <p className="formulario">Nombre completo del destinatario*</p>
                <input type="text" placeholder="Nombre completo" className="form-control"/><br/>
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

                <p className="formulario">DNI/CUIL/CUIT del destinatario*</p>
                <input type="text" className="form-control"/><br/>
              </div>
              <div className="form-group col-md-3 col-lg-4">
                <br/>

                <p className="formulario">Teléfono del destinatario*</p>
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

                <input name="enviar4" type="submit" id="enviar4" title="Enviar" defaultValue="Siguiente"
                       className="btn btn-primary btn-md"/>
              </div>
              <div className="form-group form-group col-md-3 col-lg-12">

                Volver atrás
              </div>


            </div>

          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header" role="tab" id="headingFive1">
          <h5 className="mb-0"><a className="collapsed" data-toggle="collapse" href="#collapseFive1"
                                  role="button"
                                  aria-expanded="false" aria-controls="collapseFive1">5- Pago </a></h5>
        </div>
        <div id="collapseFive1" className="collapse" role="tabpanel" aria-labelledby="headingFive1"
             data-parent="#accordion1">
          <div className="card-body">
            <div className="row">
              <div className="container">
                <div className="text-left"><h3>Detalle de la operación</h3>
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
                <div className="text-left"><p><strong>Descripción del envío</strong></p>

                </div>
              </div>

              <div className="col-md-3 col-lg-12">
                <div className="text-left"><h5>Retiro/Entrega a domicilio</h5>
                  <p>xxx cm x xxx cm x xxx cm</p>
                  <p>Entrega estándar</p>
                </div>
              </div>
              <div className="col-md-3 col-lg-12">
                <hr className="my-4"/>
                <div className="text-left"><p><strong>Destinatario</strong></p>

                </div>
              </div>
              <div className="col-md-3 col-lg-12">
                <div className="text-left"><h5>Nombre y apellido del destinatario</h5>
                  <p>Dirección 1234, Piso: 1 Depto: D</p>
                  <p>Argentina, C.A.B.A. / CP1024</p>
                  <p>DNI: 12.345.678 / email@gmail.com / Cel. 011-1234-5678</p>
                </div>
              </div>
              <div className="col-md-3 col-lg-12">
                <hr className="my-4"/>
                <div className="text-left"><p><strong>Remitente</strong></p>

                </div>
              </div>
              <div className="col-md-3 col-lg-12">
                <div className="text-left"><h5>Nombre y apellido del remitente</h5>
                  <p>Dirección 1234, Piso: 1 Depto: D</p>
                  <p>Argentina, C.A.B.A. / CP1024</p>
                  <p>DNI: 12.345.678 / email@gmail.com / Cel. 011-1234-5678</p>
                </div>
                <hr className="my-4"/>
              </div>
              <div className="col-md-3 col-lg-12">
                <div className="text-left"><h5>Total</h5>
                  <h3>$1.999,99*</h3>

                  <p>*Este cargo es el costo del retiro. El valor del envío se abonará con el
                    retiro o en destino.</p>
                </div>

              </div>

              <div className="row">


                <div className="form-group form-group col-md-3 col-lg-5"><br/>

                  <p className="formulario">Cupón de descuento</p>
                  <input type="text" placeholder="¿Tiene un cupón de descuento?"
                         className="form-control"/><br/>

                </div>
              </div>

              <div className="form-group form-group col-md-3 col-lg-12">

                <input name="acepto" type="radio" id="acepto"/> El contenido del envío que realizo
                está bajo mi responsabilidad.*<br/>
                <br/>


              </div>

              <div className="form-group form-group col-md-3 col-lg-12">

                <button className="btn btn-primary" data-toggle="modal"
                        data-target="#ventanamodal">
                  Pagar
                </button>

              </div>


              <div className="modal fade" id="ventanamodal" tabIndex="-1" role="dialog"
                   aria-labelledby="tituloventana" aria-hidden="true">
                <div className="modal-dialog" role="document">
                  <div className="modal-content">

                    <div className="modal-header">
                      <img src="/images/logo-via-cargo-verde.png" alt="Placeholder image"
                           width="150" className="img-fluid"/>
                      <hr/>
                      <h5 className="card-title" id="tituloventana"><strong>Orden
                        confirmada</strong></h5>
                      <button className="close" data-dismiss="modal" aria-label="Cerrar">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <div className="alert alert-success">

                        <p className="card-text">Su solicitud se envió correctamente.
                          Gracias.</p>
                        <img src="/images/orden-confirmada.png" alt="Placeholder image"
                             width="200" className="img-fluid"/>
                        <br/><br/>

                        <p className="card-text">Estimado <strong>Nombre Cliente</strong>,</p>
                        <p className="card-text">Hemos procesado su solicitud. En breve recibirá
                          un mail con los detalles de la operación y número de
                          seguimiento.</p>
                        <p className="card-text">Gracias por confiar en <strong>Via
                          Cargo.</strong></p>

                      </div>

                    </div>
                    <div className="modal-footer">
                      <button className="btn btn-primary" type="button" data-dismiss="modal"> Ver
                        resumen en pdf
                      </button>

                    </div>

                  </div>
                </div>
              </div>


            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
