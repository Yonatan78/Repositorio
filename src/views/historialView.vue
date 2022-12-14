<template>
  <div>
 <div class="container-historial">
                <div class="card w-50">
                    <div class="card-body">
                        <h5 class="card-title">Historial viaje</h5>
                        <img src="../assets/images/Camion.jpg" alt="cargando" style="width: 150px; margin-left: 30%;">
                        <p class="card-text">  </p>
                        <div class="cont-img-historial">
                         
                        </div>
                        Conductor: Carlos Fernandez<br>
                        N. Telefono: 3124567890<br>
                        Cantidad carga: $ toneladas<br>
                        Producto: Cafe<br>
                        Especificaciones carga: Delicada<br>
                        Direcciòn partida - destino: El tambo - Popayan<br>
                        Pasajeros: 1 / Fernando Bolaños<br>
                        Valor: $ 300.000<br>
                        Calificacion viaje: <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i
                            class="bi bi-star-fill"></i><i class="bi bi-star"></i><i class="bi bi-star"></i>

                      <button class="btn btn-primary"><router-link to="/manifiestoView" style="color: white; margin: 5px;">ver mas datos</router-link></button>
                    </div>
                </div>

                <div class="card w-50">
                    <div class="card-body">
                        <h5 class="card-title">Historial viaje</h5>
                          <img src="../assets/images/Camion.jpg" alt="cargando" style="width: 150px; margin-left: 30%;">
                        <p class="card-text">  </p>
                        <div class="cont-img-historial">
        
                        </div>
                        Conductor: Carlos Fernandez<br>
                        N. Telefono: 3124567890<br>
                        Cantidad carga: $ toneladas<br>
                        Producto: Cafe<br>
                        Especificaciones carga: Delicada<br>
                        Direcciòn partida - destino: El tambo - Popayan<br>
                        Pasajeros: 1 / Fernando Bolaños<br>
                        Valor: $ 300.000<br>
                        Calificacion viaje: <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i
                            class="bi bi-star-fill"></i><i class="bi bi-star"></i><i class="bi bi-star"></i>
                      
                        <button class="btn btn-primary"><router-link to="/manifiestoView" style="color: white; margin: 5px;">ver mas datos</router-link></button>
                    </div>
                </div>
            </div>
        


    
            <div class="container-historial-1">
                <div class="card w-50">
                    <div class="card-body">
                        <h5 class="card-title">Historial viaje</h5>
                         <img src="../assets/images/Camion.jpg" alt="cargando" style="width: 150px; margin-left: 30%;">
                        <p class="card-text"></p>
                        <div class="cont-img-historial">

                        </div>
                        Conductor: Carlos Fernandez<br>
                        N. Telefono: 3124567890<br>
                        Cantidad carga: $ toneladas<br>
                        Producto: Cafe<br>
                        Especificaciones carga: Delicada<br>
                        Direcciòn partida - destino: El tambo - Popayan<br>
                        Pasajeros: 1 / Fernando Bolaños<br>
                        Valor: $ 300.000<br>
                        Calificacion viaje: <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i
                            class="bi bi-star-fill"></i><i class="bi bi-star"></i><i class="bi bi-star"></i>
                    
                        <button class="btn btn-primary"><router-link to="/manifiestoView" style="color: white; margin: 5px;">ver mas datos</router-link></button>
                    </div>
                </div>

                <div class="card w-50">
                    <div class="card-body">
                        <h5 class="card-title">Historial viaje</h5>
                         <img src="../assets/images/Camion.jpg" alt="cargando" style="width: 150px; margin-left: 30%;">
                        <p class="card-text"></p>
                        <div class="cont-img-historial">
             
                        </div>
                        Conductor: Carlos Fernandez<br>
                        N. Telefono: 3124567890<br>
                        Cantidad carga: $ toneladas<br>
                        Producto: Cafe<br>
                        Especificaciones carga: Delicada<br>
                        Direcciòn partida - destino: El tambo - Popayan<br>
                        Pasajeros: 1 / Fernando Bolaños<br>
                        Valor: $ 300.000<br>
                        Calificacion viaje:
                        <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i
                            class="bi bi-star-fill"></i><i class="bi bi-star"></i><i class="bi bi-star"></i>
                       
                       <button class="btn btn-primary"><router-link to="/manifiestoView" style="color: white; margin: 5px;">ver mas datos</router-link></button>
                    </div>
                </div>

            </div>
        

  </div>
</template>
  
  <script>
  export default {
  
  }
  </script>
  

  
  <style>
  /* ________________________________________ HISTORIAL DE VIAJES _______________________________________________________ */


.contenedor_principal_historiales{
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas:
                        "titulo_unico"
                        "contenido_unico";
}

.titulo4{
    grid-area: titulo_unico;
    text-align: center;
    font-weight: 600;
    color: black;
}

.contenedor_historial{
    grid-area: contenido_unico;

    /* Contenido interior */
    gap: 6px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(445px, 1fr));
}

/* CONTENIDO DATOS CLIENTE */

.contenedor_principal_hotorial{
    margin: 5px;
    padding: 2px;
    border: solid 2px;
    border-radius: 10px;
    border-color: rgba(86, 86, 86, 0.737);
}

.historial{
    margin: 2px;
    border: solid 1px;
    border-color: rgba(82, 76, 76, 0.466);
    border-radius: 25px;
    background-color: white;
}

#tablas-historal{
    justify-content: center;
    text-align: center;
    display: flex;
    color: black;
}

.container-historial {
    display: flex;
    margin: 10px;
    background: var(--fondo);
    
}

.container-historial-1 {
    display: flex;
    margin-left: 10px;
    margin-top: 10px;
    width: 98%;
    background: var(--fondo);
}

.img-carga-historial {
    height: 150px;
    width: 300px;
    inset-block: auto;
}

.cont-img-historial {
      text-align: center;
    }

  
  </style>