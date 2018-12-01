/**
 * Created by 29671 on 2018/11/28.
 */
import {
  requestHomeInfo,
  requestSwiperImg,
  requestFaricInfo ,
  requestClassifyInfo
}from '../api/index';
import{
  RECIVE_BANNERIMG,
  RECIVE_CLASSIFYINFO,
  RECIVE_FABRICINFO,
  RECIVE_HOMEINFO
}from './mutations_type'
export default {
  async getHomeInfo({commit}){
    const result = await requestHomeInfo()
    if(result.code===0){
      const homeInfo = result.data
      commit(RECIVE_HOMEINFO,{homeInfo})
    }
  },
  async getBannerImg({commit,cb}){
    const result = await requestSwiperImg()
    if(result.code===0){
      const bannerImg = result.data
      console.log(bannerImg)
      commit(RECIVE_BANNERIMG,{bannerImg})
      typeof cb === 'function' && cb()
    }
  }
}
