const Footer = props => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-sm6 col-lg-3">
            <strong>Accesos Rápidos</strong>
            <li><a href="https://www.viacargo.com.ar/tracking">Rastrear envío / Tracking</a></li>
            <li><a href="https://www.viacargo.com.ar/agencies">Agencias</a></li>
            <li><a href="https://www.viacargo.com.ar/quote">Cotizar Envíos</a></li>
          </div>

          <div className="col-sm6 col-lg-3">
            <strong>Productos</strong>
            <li><a href="https://www.viacargo.com.ar/products">VC Personal</a></li>
            <li><a href="https://www.viacargo.com.ar/products">VC Standard</a></li>
            <li><a href="https://www.viacargo.com.ar/products">VC Plus</a></li>
            <li><a href="https://www.viacargo.com.ar/products">Vía Automática</a></li>
          </div>
          <div className="col-sm6 col-lg-3">
            <strong>Soporte</strong>
            <li><a href="https://www.viacargo.com.ar/customer-support.">Atención al cliente</a></li>
            <li><a href="https://www.viacargo.com.ar/customer-support">Reclamos</a></li>
            <br/>

            <strong>Cómo</strong>
            <li><a href="https://www.viacargo.com.ar/tips">Peso y tamaño</a></li>
            <li><a href="https://www.viacargo.com.ar/tips">Tips / Cómo empacar</a></li>

          </div>
          <div className="col-sm6 col-lg-3">
            <strong>Acerca de Vía Cargo</strong>
            <li><a href="https://www.viacargo.com.ar/know-us">Conocenos</a></li>
            <li><a href="https://www.viacargo.com.ar/contact?join">Sumate a la red</a></li>
            <li><a href="https://www.viacargo.com.ar/join-us">RR.HH.</a></li>
            <li><a href="https://www.viacargo.com.ar/contact">Acercanos tu CV</a></li>
          </div>
          <br/>
          <br/><br/>


          <div className="col-sm col-lg-3"><br/>

            <a href="https://api.whatsapp.com/send?phone=5491132727722&text=Hola">Whatsapp: 11-3272-7722</a></div>
          <div className="col-sm3 col-lg-3"><br/>

            0810-222-7722

          </div>
          <div className="col-sm col-lg-6"><br/>


          </div>

          <div className="col-sm6 col-lg-3"><br/>

            <a href="https://www.viacargo.com.ar/terms">Términos y condiciones de Servicio </a></div>

          <div className="col-sm6 col-lg-3"><br/>

            <a href="https://www.viacargo.com.ar/terms">Términos de uso de sitio web</a></div>

          <div className="col-sm6 col-lg-3"><br/>

            <a href="https://www.viacargo.com.ar/terms">Política de privacidad </a></div>
          <div className="col-sm6 col-lg-12"><br/>

            <p>Este sitio está protegido por las leyes internacionales y de Argentina de derechos de autor y marca
              registrada. ©Vía Cargo 2018. Todos los derechos reservados.

              Los derechos de propiedad intelectual y de otro tipo relativos a la información contenida en este
              sitio pertenecen a Vía Cargo.</p>
          </div>


        </div>

      </div>
    </footer>
  );
};

export default Footer;
