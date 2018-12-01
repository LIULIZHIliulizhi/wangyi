import Vue from 'vue';
import Router from 'vue-router';
import HomePages from'../pages/homePages/HomePages.vue';
import Classify from '../pages/classify/Classify.vue';
import Fabric from'../pages/fabric/Fabric.vue';
import Cart from'../pages/cart/Cart.vue';
import Person from '../pages/person/Person.vue';

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path:'/homepages',
      component:HomePages
    },
    {
      path:'/classify',
      component:Classify
    },
    {
      path:'/fabric',
      component:Fabric
    },
    {
      path:'/cart',
      component:Cart
    },
    {
      path:'/person',
      component:Person
    },
    {
      path:'',
      redirect:'/homePages'
    }
  ]
})
