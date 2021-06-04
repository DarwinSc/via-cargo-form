import HeaderTopBar from '../../components/HeaderTopBar'

import Footer from '../../components/Footer'
import styles from '../../components/HeaderContent/HeaderContent.module.css'

export default function Home() {
  return (
    <>
      <HeaderTopBar/>

  <div >
    <div className={`${styles.jumbotron2} ${styles.jumbotronFluid} text-center col-lg-12`}>
        <div class="col-md-4 offset-lg-2 col-lg-7 offset-xl-3">
			<h1 class="display-4">Ahora retiramos&nbsp;</h1>
			<h1 class="display-4">tus pedidos&nbsp;</h1>
			<h1 class="display-4">en tu puerta.</h1>
        </div>
  
       <div class="col-md-4 offset-lg-2 col-lg-4 offset-xl-3">
         <br/>
		 <p class="lead">Coordina tus envíos en solo 3 pasos y ahorrá tiempo.
         		<br/>
         		<br/>
				 <ul className="navbar-nav mr-auto">
					 <li className="nav-item active">
					 <a className="nav-link btn btn-primary" href="/cotizador">Comenzar<span className="sr-only">(current)</span></a>
					 </li>
					 
				 </ul>
            
         </p>
      </div>
  	</div>
    
<div class="container">
	 <br/>
  	<div class="row"> 
	 <div class="col-md-12">
	  <div class="col-md-12 offset-lg-2 col-lg-10 offset-xl-3 col-sm-12">
		<h2 class="display-4">Retiro en domicilio</h2>
		<br/>
		<br/>
		<br/>
	  </div>
	 </div>
    </div>
		
		
   <div class="row">
	 <div class={`${styles.card}  col-md-3 offset-1`}> 
	  <div class={`${styles.cardBody}`}>
		<h5 class={`${styles.cardTitle2}`}>Cobertura</h5>
		<img src="images/cobertura.png" alt="Placeholder image" width="95" class="img-fluid"/>
		<p class={`${styles.cardText}`}>
			<strong>Capital Federal<br/> Gran Buenos Aires </strong>
		</p>		
	  </div>
	 </div>
			
	 <div class={`${styles.card}  col-md-3 offset-1`}> 
	  <div class={`${styles.cardBody}`}>
		<h5 class={`${styles.cardTitle2}`}>Horarios</h5>
		 <img src="images/horarios.png" alt="Placeholder image" width="95" class="img-fluid"/>
		  <p class={`${styles.cardText}`}>Solicitud:
			<br/>
			  Lunes a viernes antes de las 12:00
		  </p>
		  <p class={`${styles.cardText}`}>Recolección:
			<br/>
			 Lunes a viernes de 08:00 a 12:00
		  </p>
	  </div>
	 </div>
			
		 <div class={`${styles.card}  col-md-3 offset-1`}> 
			<div class={`${styles.cardBody}`}>
				<h5 class={`${styles.cardTitle2}`}>Medidas y pesos</h5>
				<img src="images/medidas.png" alt="Placeholder image" width="95" class="img-fluid"/>
				<p class={`${styles.cardText}`}>Sin restricciones</p>
			</div>
		 </div>
    </div>
		   
 </div>
  	<br/>
    <br/>

	<div class="container">
      <br/>
      <hr/>
      <br/>
      <div class="row">
        <img src="images/banner-via-cargo.png" class="img-fluid" alt="Placeholder image"/> 
      </div>
  	</div>
		
	<div class="container">
     <br/>
	 <br/>

	 <div class="row"> 
      <div class={`${styles.card2}  col-md-3 offset-1`}> 
		<div class={`${styles.cardBody}`}>
		 <h5 class={`${styles.cardTitle2}`}>Empaques</h5>
		  <hr/>
            <p class={`${styles.cardText}`}>El empaque de un producto es el contenedor que protege el envío. Sirve principalmente para preservar las condiciones propias del producto, su imagen y la descripción de uso o consumo, además de tener un diseño que evita el daño durante su manipulación. </p>
	    </div>
	  </div>
	     
	     <div class={`${styles.card2}  col-md-3 offset-1`}> 
		    <div class={`${styles.cardBody}`}>
			  <h5 class={`${styles.cardTitle2}`}>Embalaje</h5>
				<hr/>

			 <p class={`${styles.cardText}`}>El embalaje es la envoltura contenedora que permite transportar, manipular y almacenar el producto, individual o grupalmente. Su función principal es la protección y manipulación. Prepará el embalaje de manera segura y adecuada teniendo en cuenta.
            Amortiguación - Envolturas - Sellado</p>

				
	       </div>
	     </div>
		   
	     <div class={`${styles.card2}  col-md-3 offset-1`}> 
		    <div class={`${styles.cardBody}`}>
			  <h5 class={`${styles.cardTitle2}`}>Identificación</h5>
				<hr/>

			 <p class={`${styles.cardText}`}>Una vez que el producto se encuentra debidamente empacado y embalado, se debe colocar en un sitio visible de la encomienda la etiqueta que indique cómo tiene que ser manipulado y conservado. Es necesario para aclarar si requiere de algún manejo especial.</p>

				
	       </div>
	     </div>
       <div class={`${styles.card2}  col-md-3 offset-1`}> 
		    <div class={`${styles.cardBody}`}>
			  <h5 class={`${styles.cardTitle2}`}>Protección</h5>
				<hr/>

			 <p class={`${styles.cardText}`}>Es importante que el producto esté protegido de los impactos, golpes y caídas, al igual que de los agentes biológicos y climáticos que podrían presentarse durante el transporte. Recomendamos usar algunos de los siguientes materiales: metal, madera, cartón corrugado, plásticos, entre otros.</p>

				
	       </div>
	     </div>
       <div class={`${styles.card2}  col-md-3 offset-1`}> 
		    <div class={`${styles.cardBody}`}>
			  <h5 class={`${styles.cardTitle2}`}>Sujeción y agarre</h5>

			 <p class={`${styles.cardText}`}>Para su mayor seguridad, es preferible que se utilicen películas plásticas adheribles (Strech), zunchos, cintas o ganchos para sellar los empaques y embalajes, y facilitar así su transporte, manipulación y almacenamiento.</p>

				
	       </div>
	     </div>
       <div class={`${styles.card2}  col-md-3 offset-1`}> 
		    <div class={`${styles.cardBody}`}>
			  <h5 class={`${styles.cardTitle2}`}>Tiempo de envío y colecta</h5>
				<hr/>

			 <p class={`${styles.cardText}`}>Tu envío será recogido dentro de las 24 horas siguientes luego de la validación del pago. En el momento de la recolección del envío el mensajero esperará un máximo de 15 minutos para la entrega del paquete.</p>

				
	       </div>
	     </div>
		   
     </div>
      
	</div>

	<br/>
	<br/>

    <div class="container">
     <div class="row"> 
	  <div class="col-md-12">
        <div class="col-md-12 col-lg-10 offset-xl-2">
          <h2 class="display-4">Objetos de prohibida circulación</h2>
          <br/>
        </div>
      </div>
     </div>

	 <div class="row"> 
	   <div class="card2 col-md-1"> 
	   </div>
	  <div class="card2 col-md-2"> 
		<div class="card-body">
		 <h5 class="card-title">
          <img 
		  src="images/marihuana.png" 
          width="80" 
          height="80" 
          alt="No enviar Opio, Marihuana ni estupefacientes - Vía Cargo"
          />
          </h5>
		  <hr/>

		   <p class={`${styles.cardText}`}>Opio, morfina, cocaína, marihuana y ningún tipo de estupefacientes y sustancias.
		   </p>	
	    </div>
	  </div>
	     
	   <div class="card2 col-md-2"> 
		<div class="card-body">
		  <h5 class="card-title">
           <img 
			src="images/vidrio.png" 
			width="80" 
			height="80" 
			alt="No enviar vidrios - Vía Cargo"
           />
          </h5>
			<hr/>
			 <p class={`${styles.cardText}`}>Los objetos que por su naturaleza o embalaje puedan ocasionar daños a los mensajeros, o puedan manchar o deteriorar los demás envíos.</p>
	
	     </div>
	    </div>
		   
	     <div class="card2 col-md-2 "> 
		   <div class="card-body">
			  <h5 class="card-title">
			    <img 
				src="images/liquido.png" 
				width="80" 
				height="80" 
				alt="Prohibido enviar líquidos corrosivos - Vía Cargo"
				/>
        		</h5>
		 		<hr/>
				<p class={`${styles.cardText}`}>Líquidos corrosivos y sustancias venenosas, las materias grasas, los polvos colorantes y otras materias similares.</p>
	       </div>
	     </div>


		<div class="card2 col-md-2"> 
		 <div class="card-body">
		   <h5 class="card-title">
			 <img 
			 src="images/quimico.png" 
			 width="80" 
			 height="80" 
			 alt="No enviar químicos peligrosos - Vía Cargo"
			 />
			 </h5>
			 <hr/>

			 <p class={`${styles.cardText}`}>Los químicos peligrosos como corrosivos generadores de oxígeno, peróxidos,  blanqueadores, alcoholes, etc. También artículos que contengan o funcionen con base a estos elementos.</p>
	     </div>
	    </div>


		<div class="card2 col-md-2"> 
		 <div class="card-body">
			<h5 class="card-title">
			 <img 
			 src="images/armas.png" 
			 width="80" 
			 height="80" 
			 alt="No enviar armas- Vía Cargo"
			 />
			 </h5>
			 <hr/>
			 <p class={`${styles.cardText}`}>Armas, municiones y elementos bélicos de toda especie, además las máquinas para acuñar moneda, los esqueletos para billetes de bancos, salvo el caso de que se trate de envíos.</p>
	       </div>
	     </div>

		 <div class="card2 col-md-1"> 
		   
		   </div>
		   <br/>
		   <div class="card2 col-md-1"> 
		   
		   </div>
		
		 <div class="card2 col-md-2 "> 
		   <div class="card-body">
				<h5 class="card-title">
				<img 
				src="images/dinero.png" 
				width="80" 
				height="80" 
				alt="No enviar dinero en efectivo - Vía Cargo"
				/>
				</h5>
				<hr/>
				<p class={`${styles.cardText}`}>Dinero en efectivo y otros objetos de valor, como monedas, platino, oro y plata manufacturados o no, billetes representativos de moneda o cualquier otro valor al portador, piedras finas o cualquier objeto precioso.</p>
	       </div>
	     </div>

		 <div class="card2 col-md-2 "> 
		   <div class="card-body">
			  <h5 class="card-title">
			    <img 
				src="images/explosivos.png" 
				width="80" 
				height="80" 
				alt="No enviar explosivos - Vía Cargo"
				/>
				</h5>
				<hr/>

			   <p class={`${styles.cardText}`}>Material explosivo, inflamable o peligroso como municiones, fuegos artificiales, detonadores, cohetes, petardos, entre otros.</p>
	       </div>
	     </div>


		 <div class="card2 col-md-2 "> 
		   <div class="card-body">
			 <h5 class="card-title">
			    <img 
				src="images/animales.png" 
				width="80" 
				height="80" 
				alt="No enviar animales - Vía Cargo"
				/>
			</h5>
			<hr/>
			<p class={`${styles.cardText}`}>Los animales vivos y los muertos no disecados, con excepción de las abejas, las sanguijuelas y los gusanos de seda. Los parásitos y los destructores de insectos nocivos canjeados entre instituciones científicas reconocidas.</p>
	       </div>
	     </div>

			<div class="card2 col-md-2 "> 
		      <div class="card-body">
			  <h5 class="card-title">
				<img 
				src="images/gases.png" 
				width="80" 
				height="80" 
				alt="No enviar gases - Vía Cargo"
				/>
				</h5>
				<hr/>
			 	<p class={`${styles.cardText}`}>Los gases comprimidos como gas butano, de encendedor, tanques de buceo, aerosoles, desodorantes o extintores.</p>
	      	</div>
	        </div>
			<div class="card2 col-md-2 "> 
		   <div class="card-body">
			  <h5 class="card-title">
          <img 
            src="images/mercancias.png" 
            width="80" 
            height="80" 
            alt="No enviar Mercancías peligrosas - Vía Cargo"
          />
        </h5>
				<hr/>

			     <p class={`${styles.cardText}`}>Las mercancías peligrosas como motores magnetizados, dióxido de carbono sólido, baterías, bacterias, virus o material radioactivo.</p>

				
	       </div>
	     </div>
        <div class="card2 col-md-1"> 
		   
	     </div>
      </div>
      
	     </div>
      </div>

      <Footer/>
    </>
  )
}
