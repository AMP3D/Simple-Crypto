import Vue from 'vue';
import Decrypt from './views/decrypt.vue';
import Encrypt from './views/encrypt.vue';
import { IonicVueRouter } from '@ionic/vue';

Vue.use(IonicVueRouter);

export default new IonicVueRouter({
  base: process.env.BASE_URL,  
  routes: [
    {
      path: '/',
      redirect: '/encrypt'
    },
    {
      path: '/encrypt',
      name: 'encrypt',
      component: Encrypt
    },
    {
      path: '/decrypt',
      name: 'decrypt',
      component: Decrypt
    }
  ]
});