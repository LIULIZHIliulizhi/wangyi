/**
 * Created by 29671 on 2018/11/25.
 */
import Vue from 'vue'
import moment from 'moment'
Vue.filter('date-format',(value,format)=>{
  return moment(value).format(format||" h:mm:ss a")
})
