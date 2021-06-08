import React from "react";

const BeginManagerForm = props => {
  let nextStepButtonProps  = {};

  if(!props.submitDisabled)
    nextStepButtonProps = {
      "href": "#collapseTwo1",
      "data-toggle": "collapse"
    }


  return (
    <div className="row">
      <div className="container">
        <div className="text-left"><h3>Completá los datos de tu envío</h3>
          <p>Los campos marcados con * son obligatorios</p></div>
      </div>

      <div className="form-group col-md-3 col-lg-12">
        <br/>
        <p className="formulario">Código postal de origen*</p>
        <input
          type="text"
          placeholder="Ej.: 1000, 1002, 1085"
          className="form-control"
          onChange={props.originPostalCodeHandler}
          defaultValue={props.originPostalCode}
        />
        {props.errors.originPostalCode && (
          <label className="text-danger">{props.errors.originPostalCode}</label>
        )}
        <br/>
      </div>

      <div className="form-group form-group col-md-3 col-lg-12">
        <p className="formulario">Código postal de destino*</p>

        <input
          type="text"
          placeholder="Ej.: 1000, 1002, 1085"
          className="form-control"
          onChange={props.receptorPostalCodeHandler}
          defaultValue={props.receptorPostalCode}
        />
        {props.errors.receptorPostalCode && (
          <label className="text-danger">{props.errors.receptorPostalCode}</label>
        )}
        <br/>
      </div>

      <div className="form-group form-group col-md-3 col-lg-12">
        <h4>Descripción del envío</h4>
      </div>
      <div className="form-group form-group col-md-3 col-lg-4">
        <p className="formulario">Cantidad de bultos*</p>
        <input
          type="number"
          placeholder="Ej.: 1; 2; 3"
          className="form-control"
          onChange={props.numberPackagesHandler}
          defaultValue={props.numberPackages}
        />
        {props.errors.numberPackages && (
          <label className="text-danger">{props.errors.numberPackages}</label>
        )}
        <br/>

      </div>
      <div className="form-group form-group col-md-3 col-lg-4">
        <p className="formulario">Peso en kg*</p>
        <input
          type="number"
          placeholder="Ej.: 1; 1.5; 2"
          className="form-control"
          onChange={props.weightInKgHandler}
          defaultValue={props.weightInKg}
        />
        {props.errors.weightInKg && (
          <label className="text-danger">{props.errors.weightInKg}</label>
        )}
        <br/>

      </div>
      <div className="form-group form-group col-md-3 col-lg-4">
        <p className="formulario">Altura en cm*</p>
        <input
          type="number"
          placeholder="Ej.: 5; 10; 20"
          className="form-control"
          onChange={props.heightInCmHandler}
          defaultValue={props.heightInCm}
        />
        {props.errors.heightInCm && (
          <label className="text-danger">{props.errors.heightInCm}</label>
        )}
        <br/>

      </div>
      <div className="form-group form-group col-md-3 col-lg-4">
        <p className="formulario">Anchura en cm*</p>
        <input
          type="number"
          placeholder="Ej.: 5; 10; 20"
          className="form-control"
          onChange={props.widthInCmHandler}
          defaultValue={props.widthInCm}
        />
        {props.errors.widthInCm && (
          <label className="text-danger">{props.errors.widthInCm}</label>
        )}
        <br/>

      </div>

      <div className="form-group form-group col-md-3 col-lg-4">
        <p className="formulario">Profundidad en cm*</p>
        <input
          type="number"
          placeholder="Ej.: 5; 10; 20"
          className="form-control"
          onChange={props.depthInCmHandler}
          defaultValue={props.depthInCm}
        />
        {props.errors.depthInCm && (
          <label className="text-danger">{props.errors.depthInCm}</label>
        )}
        <br/>

      </div>
      <div className="form-group form-group col-md-3 col-lg-4">
        <p className="formulario">Valor declarado*</p>

        <input
          type="number"
          placeholder="Valor en AR$"
          className="form-control"
          onChange={props.declaredValueHandler}
          defaultValue={props.declaredValue}
        />
        {props.errors.declaredValue && (
          <label className="text-danger">{props.errors.declaredValue}</label>
        )}
        <br/>

      </div>
      <div className="form-group form-group col-md-3 col-lg-12">
        <h4>Seleccione forma de despacho*</h4>
      </div>
      <div className="form-group form-group col-md-3 col-lg-2">

        <input
          name="envio"
          type="radio"
          id="origen"
          defaultValue="Pago en origen"
          defaultChecked={props.dispatchForm === "Pago en origen"}
          onClick={props.dispatchFormHandler}
        /> Pago en origen

      </div>
      <div className="form-group form-group col-md-3 col-lg-2">

        <input
          name="envio"
          type="radio"
          id="destino"
          defaultValue="Pago en destino"
          defaultChecked={props.dispatchForm === "Pago en destino"}
          onClick={props.dispatchFormHandler}
        /> Pago en destino

      </div>
     
      <div className="form-group form-group col-md-3 col-lg-8">
        {props.errors.dispatchForm && (
          <label className="text-danger">{props.errors.dispatchForm}</label>
        )}
      </div>
      <br/>
      <br/>
      
      <div className="form-group form-group col-md-3 col-lg-12"><br/>

        <a
          {...nextStepButtonProps}
          id="beginManagerSubmitButton"
          className="btn btn-primary btn-md text-white"
          onClick={props.nextStepHandler}
        >
          Siguiente
        </a>
      </div>

    </div>
  );
};

export default BeginManagerForm;
