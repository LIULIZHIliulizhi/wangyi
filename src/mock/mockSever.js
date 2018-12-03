/**
 * Created by 29671 on 2018/11/30.
 */
import Mock from 'mockjs'
import dataHome from './datahome.json';
import dataClassify from './datanav.json';
import Banner from'./swiper.json'
import datatopic from './datatopic.json';
Mock.mock('/dataHome',{code:0,data:dataHome})
Mock.mock('/classify',{code:0,data:dataClassify})
Mock.mock('/fabric',{code:0,data:datatopic})
Mock.mock('/swiper_img',{code:0,data:Banner})
