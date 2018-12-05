import Vue from 'vue';
import Router from 'vue-router';
import HomePages from'../pages/homePages/HomePages.vue';
import Classify from '../pages/classify/Classify.vue';
import Fabric from'../pages/fabric/Fabric.vue';
import Cart from'../pages/cart/Cart.vue';
import Person from '../pages/person/Person.vue';
import PhoneLogin from '../pages/person/PhoneLogin/PhoneLogin.vue'
import EmailLogin from'../pages/person/EmailLogin/EmailLogin.vue'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path:'/homepages',
      component:HomePages,
      meta: {
        showFooter: true}
    },
    {
      path:'/classify',
      component:Classify,
      meta: {
        showFooter: true
      }
    },
    {
      path:'/fabric',
      component:Fabric,
      meta: {
        showFooter: true
      }
    },
    {
      path:'/cart',
      component:Cart,
      meta: {
        showFooter: true
      }
    },
    {
      path:'/person',
      component:Person,
      children:[
        {
          path:'/phone_login',
          component:PhoneLogin
        },
        {
          path:'/email_login',
          component:EmailLogin
        }
      ]
    },
    {
      path:'',
      redirect:'/person'
    }
  ]
})
