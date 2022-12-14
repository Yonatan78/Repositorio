<template>
  <div>
       <div class="container-pqrs">
            <div class="card border-secondary mb-3" style="max-width: 18rem;" id="cont-pqrs-1">
                <div class="card-header"><img src="../assets/icons/usuario.svg" alt="">Sugerencia</div>
                <div class="card-body text-black">
                    <h5 class="card-title">Carlos Fernandez</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                        card's
                        content.</p>
                    <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i
                        class="bi bi-star"></i><i class="bi bi-star"></i>
                </div>
            </div>
            <div class="card border-secondary mb-3" style="max-width: 18rem;">
                <div class="card-header"><img src="../assets/icons/usuario.svg" alt="">Peticion</div>
                <div class="card-body text-black">
                    <h5 class="card-title">Carlos Fernandez</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                        card's
                        content.</p>
                    <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i
                        class="bi bi-star"></i><i class="bi bi-star"></i>
                </div>
            </div>
            <div class="card border-secondary mb-3" style="max-width: 18rem;">
                <div class="card-header"><img src="../assets/icons/usuario.svg" alt="">Queja</div>
                <div class="card-body text-black">
                    <h5 class="card-title">Carlos Fernandez</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                        card's
                        content.</p>
                    <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i
                        class="bi bi-star"></i><i class="bi bi-star"></i>
                </div>
            </div>
        </div>

        <div class="container-pqrs-1">
            <div class="card border-secondary mb-3" style="max-width: 18rem;">
                <div class="card-header"><img src="../assets/icons/usuario.svg" alt="">Sugerencia</div>
                <div class="card-body text-black">
                    <h5 class="card-title">Carlos Fernandez</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                        card's
                        content.</p>
                    <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i
                        class="bi bi-star"></i><i class="bi bi-star"></i>
                </div>
            </div>
            <div class="card border-secondary mb-3" style="max-width: 18rem;">
                <div class="card-header"><img src="../assets/icons/usuario.svg" alt="">Peticion</div>
                <div class="card-body text-black">
                    <h5 class="card-title">Carlos Fernandez</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                        card's
                        content.</p>
                    <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i
                        class="bi bi-star"></i><i class="bi bi-star"></i>
                </div>
            </div>
            <div class="card border-secondary mb-3" style="max-width: 18rem;">
                <div class="card-header"><img src="../assets/icons/usuario.svg" alt="">Queja</div>
                <div class="card-body text-black">
                    <h5 class="card-title">Carlos Fernandez</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                        card's
                        content.</p>
                    <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i
                        class="bi bi-star"></i><i class="bi bi-star"></i>
                </div>
            </div>
         
        </div>


        <div class="container-pqrs-1-2">
            <div class="card border-secondary mb-3" style="max-width: 18rem;">
                <div class="card-header"><img src="../assets/icons/usuario.svg" alt="">Sugerencia</div>
                <div class="card-body text-black">
                    <h5 class="card-title">Carlos Fernandez</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                        card's
                        content.</p>
                    <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i
                        class="bi bi-star"></i><i class="bi bi-star"></i>
                </div>
            </div>
            <div class="card border-secondary mb-3" style="max-width: 18rem;">
                <div class="card-header"><img src="../assets/icons/usuario.svg" alt="">Peticion</div>
                <div class="card-body text-black">
                    <h5 class="card-title">Carlos Fernandez</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                        card's
                        content.</p>
                    <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i
                        class="bi bi-star"></i><i class="bi bi-star"></i>
                </div>
            </div>
            <div class="card border-secondary mb-3" style="max-width: 18rem;">
                <div class="card-header"><img src="../assets/icons/usuario.svg" alt="">Queja</div>
                <div class="card-body text-black">
                    <h5 class="card-title">Carlos Fernandez</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                        card's
                        content.</p>
                    <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i
                        class="bi bi-star"></i><i class="bi bi-star"></i>
                </div>
            </div>
        </div>

  </div>

</template>
  
  <script>
  export default {
  
  }
  </script>

  
  
  <style scoped>

  /* ________________________________________ QUEJAS Y SUGERENCIAS ________________________________________ */

.contenedor_principal_quejas_y_sugerencias{
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas: 
                        "titulo_unico"
                        "contenido_unico";
}

.titulo5{
    grid-area: titulo_unico;
    text-align: center;
    font-weight: 600;
    color: black;
}

.contenedor_PQR{
    grid-area: contenido_unico;

    /* Contenido interior */
    gap: 6px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(445px, 1fr));
}

/* CONTENIDO DATOS CLIENTE */

.contenedor_principal_PQR{
    margin: 5px;
    padding: 2px;
    border: solid 2px;
    border-radius: 10px;
    border-color: rgba(86, 86, 86, 0.737);
}

.PQR{
    margin: 2px;
    border: solid 1px;
    border-color: rgba(82, 76, 76, 0.466);
    border-radius: 25px;
    background-color: white;
}

#tablas-PQR{
    justify-content: center;
    text-align: center;
    display: flex;
    color: black;
}

.container-pqrs{
    display: flex;
    margin: 10px;
    background: var(--fondo);
    justify-content: space-evenly;
    width: auto;
}

.container-pqrs-1{
    display: flex;
    margin: 10px;
    background: var(--fondo);
    justify-content: space-evenly;
}

.container-pqrs-1-2 {
    display: flex;
    margin: 10px;
    background: var(--fondo);
    justify-content: space-evenly;

}

#cont-pqrs-1{
    justify-content: space-between;
}
  
  </style>