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
  RECIVE_HOMEINFO,
  GET_INDEX
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
  },
  async getClassifyInfo({commit,cb}){
    const result = await requestClassifyInfo()
    if(result.code===0){
      const classifyInfo = result.data
      commit(RECIVE_CLASSIFYINFO,{classifyInfo})
      typeof cb === 'function' && cb()
    }
  },
  async getFabriacInfo({commit,cb}){
    const result = await requestFaricInfo()
    if(result.code===0){
      const fabricInfo = result.data
      commit(RECIVE_FABRICINFO,{fabricInfo})
      typeof cb === 'function' && cb()
    }
  },
  getIndex({commit},{index}){
    commit(GET_INDEX,{index})
  }
}
