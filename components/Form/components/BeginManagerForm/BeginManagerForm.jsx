import React from "react";

const BeginManagerForm = props => {
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
          onKeyPress={props.originPostalCodeHandler}
          value={props.originPostalCode}
        />
        <br/>
      </div>

      <div className="form-group form-group col-md-3 col-lg-12">
        <p className="formulario">Código postal de destino*</p>

        <input
          type="text"
          placeholder="Ej.: 1000, 1002, 1085"
          className="form-control"
          onKeyPress={props.receptorPostalCodeHandler}
          value={props.receptorPostalCode}
        />
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
          onKeyPress={props.numberPackagesHandler}
          value={props.numberPackages}
        />
        <br/>

      </div>
      <div className="form-group form-group col-md-3 col-lg-4">
        <p className="formulario">Peso en kg*</p>
        <input
          type="Text"
          placeholder="Ej.: 1; 1.5; 2"
          className="form-control"
          onKeyPress={props.weightInKgHandler}
          value={props.weightInKg}
        />
        <br/>

      </div>
      <div className="form-group form-group col-md-3 col-lg-4">
        <p className="formulario">Altura en cm*</p>
        <input
          type="number"
          placeholder="Ej.: 5; 10; 20"
          className="form-control"
          onKeyPress={props.heightInCmHandler}
          value={props.heightInCm}
        />
        <br/>

      </div>
      <div className="form-group form-group col-md-3 col-lg-4">
        <p className="formulario">Anchura en cm*</p>
        <input
          type="number"
          placeholder="Ej.: 5; 10; 20"
          className="form-control"
          onKeyPress={props.widthInCmHandler}
          value={props.widthInCm}
        />
        <br/>

      </div>

      <div className="form-group form-group col-md-3 col-lg-4">
        <p className="formulario">Profundidad en cm*</p>
        <input
          type="number"
          placeholder="Ej.: 5; 10; 20"
          className="form-control"
          onKeyPress={props.depthInCmHandler}
          value={props.depthInCm}
        />
        <br/>

      </div>
      <div className="form-group form-group col-md-3 col-lg-4">
        <p className="formulario">Valor declarado*</p>

        <input
          type="number"
          placeholder="Valor en AR$"
          className="form-control"
          onKeyPress={props.declaredValueHandler}
          value={props.declaredValue}
        />
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
          value="Pago en origen"
          defaultChecked={props.dispatchForm === "Pago en origen"}
          onClick={props.dispatchFormHandler}
        /> Pago en origen

      </div>
      <div className="form-group form-group col-md-3 col-lg-2">

        <input
          name="envio"
          type="radio"
          id="destino"
          value="Pago en destino"
          defaultChecked={props.dispatchForm === "Pago en destino"}
          onClick={props.dispatchFormHandler}
        /> Pago en destino

      </div>
      <div className="form-group form-group col-md-3 col-lg-8">


      </div>
      <br/>
      <br/>

      <div className="form-group form-group col-md-3 col-lg-12"><br/>

        <input
          name="enviar"
          type="submit"
          id="enviar"
          title="Enviar"
          value="Siguiente"
          className="btn btn-primary btn-md"
        />
      </div>


    </div>
  );
};

export default BeginManagerForm;
