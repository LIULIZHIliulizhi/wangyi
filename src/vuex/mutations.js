/**
 * Created by 29671 on 2018/11/28.
 */
import {
  RECIVE_HOMEINFO,
  RECIVE_FABRICINFO,
  RECIVE_CLASSIFYINFO,
  RECIVE_BANNERIMG
}from './mutations_type'
export default {
  [RECIVE_HOMEINFO](state,{homeInfo}){
    state.homeInfo = homeInfo
  },
  [RECIVE_BANNERIMG](state,bannerImg){
    state.bannerImg = bannerImg
  },
  [RECIVE_CLASSIFYINFO](state,{classifyInfo}){
    state.classifyInfo = classifyInfo
  },
  [RECIVE_FABRICINFO](state,{fabricInfo}){
    state.fabricInfo = fabricInfo
  }
}
