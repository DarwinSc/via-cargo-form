import styles from "./HeaderContent.module.css";

const HeaderContent = props => {
  return (
    <div className={`${styles.jumbotron} ${styles.jumbotronFluid} text-center col-lg-12`}>
      <div className="col-md-12 offset-lg-2 col-lg-7 offset-xl-3">
        <h1 className="display-4">Mi retiro<br/>
          en domicilio<br/>
          Online</h1>
      </div>


      <div className="col-md-6 offset-lg-2 col-lg-4 offset-xl-3">
        <p className="lead">Cotizador de retiros a domicilio.
          <br/>
          La vía más rápida y segura para hacer tus envíos.</p></div>


    </div>
  );
};

export default HeaderContent;
