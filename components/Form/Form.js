import BeginManagerForm from "./components/BeginManagerForm";
import TypeServiceForm from "./components/TypeServiceForm";
import SenderDataForm from "./components/SenderDataForm";
import AddresseeDetailsForm from "./components/AddresseeDetailsForm";
import ConfirmDataForm from "./components/ConfirmDataForm/ConfirmDataForm";

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
          <h5 className="mb-0">
            <a 
            className="collapsed" 
            data-toggle="collapse" 
            href="#collapseFour1"
            role="button"
            aria-expanded="false" 
            aria-controls="collapseFour1"
            >
              4- Datos del
            destinatario
             </a>
             
            </h5>
        </div>
        <div 
        id="collapseFour1" 
        className="collapse" 
        role="tabpanel" 
        aria-labelledby="headingFour1"
        data-parent="#accordion1">
        
        <AddresseeDetailsForm previousNameAction="collapseThree1"/>
        </div>
      </div>

      <div className="card">
      <div className="card-header" role="tab" id="headingFive1">
          <h5 className="mb-0">
            <a className="collapsed" 
            data-toggle="collapse" 
            href="#collapseFive1"
            role="button"
            aria-expanded="false" 
            aria-controls="collapseFive1"
            >
              5- Confirma los datos
              </a>
              </h5>
        </div>
        <div 
          id="collapseFive1" 
          className="collapse" 
          role="tabpanel" 
          aria-labelledby="headingFive1"
          data-parent="#accordion1">
          <ConfirmDataForm/>
        </div>
      </div>
    
      <div className="card">
      <div className="card-header" role="tab" id="headingSix">
          <h5 className="mb-0">
            <a className="collapsed" 
            data-toggle="collapse" 
            href="#collapseSix"
            role="button"
            aria-expanded="false" 
            aria-controls="collapseSix"
            >
              6- Pago 
              </a>
              </h5>
        </div>
        <div 
          id="collapseSix" 
          className="collapse" 
          role="tabpanel" 
          aria-labelledby="headingSix"
          data-parent="#accordion1"
          >
            <br/>
            <br/>
            <div className="form-group form-group col-md-3 col-lg-12">
              <button 
                className="btn btn-primary" 
                data-toggle="modal"
                data-target="#ventanamodal"
              >
                Confirmar
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
    </div>

      
  );
};

export default Form;
