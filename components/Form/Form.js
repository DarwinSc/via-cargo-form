import BeginManagerForm from "./components/BeginManagerForm";
import TypeServiceForm from "./components/TypeServiceForm";
import SenderDataForm from "./components/SenderDataForm";
import AddresseeDetailsForm from "./components/AddresseeDetailsForm";
import ConfirmDataForm from "./components/ConfirmDataForm";
import ToPayForm from "./components/ToPayForm";

const CollageHeader = props => (
  <a
    className="collapsed"
    data-toggle="collapse"
    href={`#${props.name}`}
    role="button"
    aria-expanded="false"
    aria-controls={`${props.name}`}
  >
    {props.text}
  </a>
);

const NormalHeader = props => (
  <div className="collapsed text-white">
    {props.text}
  </div>
);

const Form = props => {
  return (
    <div id="accordion1" role="tablist">
      <div className="card">
        <div className="card-header" role="tab" id="headingOne1">
          <h5 className="mb-0">
            {props.accordion.BEGIN_MANAGER ? (
              <CollageHeader
                name="collapseOne1"
                text="1- Comenzá a gestionar"
              />
            ) : (
              <NormalHeader
                text="1- Comenzá a gestionar"
              />
            )}
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
            <BeginManagerForm formDataHandler={props.formDataHandler} />
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header" role="tab" id="headingTwo1">
          <h5 className="mb-0">
            {props.accordion.SERVICE_TYPE ? (
              <CollageHeader
                name="collapseTwo1"
                text="2- Tipo de servicio"
              />
            ) : (
              <NormalHeader
                text="2- Tipo de servicio"
              />
            )}
          </h5>
        </div>

        <div
          id="collapseTwo1"
          className="collapse"
          role="tabpanel"
          aria-labelledby="headingTwo1"
          data-parent="#accordion1"
        >
          <TypeServiceForm
            previousNameAction="collapseOne1"
            formDataHandler={props.formDataHandler}
          />
        </div>
      </div>

      <div className="card">
        <div className="card-header" role="tab" id="headingThree1">
          <h5 className="mb-0">
            {props.accordion.SENDER_DATA ? (
              <CollageHeader
                name="collapseThree1"
                text="3- Datos del remitente"
              />
            ) : (
              <NormalHeader
                text="3- Datos del remitente"
              />
            )}
          </h5>
        </div>

        <div
          id="collapseThree1"
          className="collapse"
          role="tabpanel"
          aria-labelledby="headingThree1"
          data-parent="#accordion1"
        >
          <SenderDataForm
            previousNameAction="collapseTwo1"
            formDataHandler={props.formDataHandler}
          />
        </div>
      </div>

      <div className="card">
        <div className="card-header" role="tab" id="headingFour1">
          <h5 className="mb-0">
            {props.accordion.RECIPIENT_DETAILS ? (
              <CollageHeader
                name="collapseFour1"
                text="4- Datos del destinatario"
              />
            ) : (
              <NormalHeader
                text="4- Datos del destinatario"
              />
            )}
          </h5>
        </div>
        <div
          id="collapseFour1"
          className="collapse"
          role="tabpanel"
          aria-labelledby="headingFour1"
          data-parent="#accordion1">

          <AddresseeDetailsForm
            previousNameAction="collapseThree1"
            formDataHandler={props.formDataHandler}
          />
        </div>
      </div>

      <div className="card">
        <div className="card-header" role="tab" id="headingFive1">
          <h5 className="mb-0">
            {props.accordion.CHECKOUT ? (
              <CollageHeader
                name="collapseFive1"
                text="5- Confirma los datos"
              />
            ) : (
              <NormalHeader
                text="5- Confirma los datos"
              />
            )}
          </h5>
        </div>
        <div
          id="collapseFive1"
          className="collapse"
          role="tabpanel"
          aria-labelledby="headingFive1"
          data-parent="#accordion1">
          <ConfirmDataForm
            formDataHandler={props.formDataHandler}
            deliveryData={props.formData.deliveryData}
            senderData={props.formData.senderData}
            receiverData={props.formData.receiverData}
            typeService={props.formData.typeService}
            previousNameAction="collapseFour1"
          />
        </div>
      </div>

      {/*  last container   */}
      <div className="card">
        <div className="card-header" role="tab" id="headingSix">
          <h5 className="mb-0">
            {props.accordion.TO_PAY ? (
              <CollageHeader
                name="collapseSix"
                text="6- Pago"
              />
            ) : (
              <NormalHeader
                text="6- Pago"
              />
            )}
          </h5>
        </div>
        <div
          id="collapseSix"
          className="collapse"
          role="tabpanel"
          aria-labelledby="headingSix"
          data-parent="#accordion1"
        >
          <ToPayForm senderData={props.formData.senderData}/>
        </div>

      </div>
    </div>


  );
};

export default Form;
