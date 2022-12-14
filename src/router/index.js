import { createRouter, createWebHashHistory } from 'vue-router'

/* Views importados*/

import ConductoresView from '../views/ConductoresView.vue'
import solicitudConductores from '../views/solicitudConductores.vue'
import datosConductor from '../views/datosConductor.vue'
import datosCliente from '../views/datosCliente.vue'
import historialView from '../views/historialView.vue'
import pqrsView from '../views/pqrsView.vue'
import signIn from '../views/signIn.vue'
import manifiestoView from '../views/manifiestoView.vue'
import perfilView from '../views/perfilView.vue'
import masDatosConductores from '../views/masDatosConductores.vue'
import datosView from '../views/datosView.vue'
import TablaSolicitudesView from '../views/TablaSolicitudesView.vue'

/* Views importados*/




const routes = [

  {
    path: '/',
    name: 'ConductoresView',
    component: ConductoresView
  },

  {
    path: '/solicitudConductores',
    name: 'solicitudConductores',
    component: solicitudConductores
    /* component: () => import(/* webpackChunkName: "about" * ) */
  },

  {
    path: '/TablaSolicitudesView',
    name: 'TablaSolicitudesView',
    component: TablaSolicitudesView
  },


  {
    path: '/datosConductor',
    name: 'datosConductor',
    component: datosConductor
  },

  {
    path: '/datosView',
    name: 'datosView',
    component: datosView
  },



  {
    path: '/datosCliente',
    name: 'datosCliente',
    component: datosCliente
  },

  {
    path: '/historialView',
    name: 'historialView',
    component: historialView
  },

  {
    path: '/pqrsView',
    name: 'pqrsView',
    component: pqrsView
  },

  {
    path: '/signIn',
    name: 'signIn',
    component: signIn
  },

  {
    path: '/manifiestoView',
    name: 'manifiestoView',
    component: manifiestoView
  },
  {
    path: '/perfilView',
    name: 'perfilView',
    component: perfilView
  },
  {
    path: '/masDatosConductores',
    name: 'masDatosConductores',
    component: masDatosConductores
  },



]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
