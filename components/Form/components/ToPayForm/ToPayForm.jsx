import React from 'react'

const ToPayForm = props => {
    return (
        <div class="card-body">

            <div class="container">
              <div class="text-left">
                <h3>¿Cómo quiere pagar?</h3>
              </div>
              <div class="container-fluid">
                <div class="row">
                  
                  <div class="col-md-12 mt-5 text-center bg-light alto">
                      <h2> eframe First data </h2>
                  </div>
                </div>
              </div>

              </div>

            <br/>
            <div className="form-group form-group col-md-3 col-lg-12">
              <button
                className="btn btn-primary"
                data-toggle="modal"
                data-target="#ventanamodal"
              >
                Pagar
              </button>

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
                        className="card-text">
                            Estimado, {props.senderData.senderFullName}
                            
                            </p>

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
    )
}

export default ToPayForm;
