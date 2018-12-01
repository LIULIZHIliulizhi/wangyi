/**
 * Created by 29671 on 2018/11/30.
 */
import Mock from 'mockjs'
import dataHome from './datahome.json';
import dataClassify from './datafenlei.json';
import Banner from'./swiper.json'
import datashiwu from './datashiwu.json';
Mock.mock('/dataHome',{code:0,data:dataHome})
Mock.mock('/classify',{code:0,data:dataClassify})
Mock.mock('/fabric',{code:0,data:datashiwu.bnner})
Mock.mock('/swiper_img',{code:0,data:Banner})
