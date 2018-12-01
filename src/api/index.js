/**
 * Created by 29671 on 2018/11/30.
 */
import ajax from './ajax'
export const requestHomeInfo = ()=> ajax('/dataHome')
export const requestClassifyInfo = ()=> ajax('/classify')
export const requestFaricInfo = ()=> ajax('/fabric')
export const requestSwiperImg = ()=> ajax('/swiper_img')
