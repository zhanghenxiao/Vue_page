<template>
    <div class='swiper-container'>  
            <div class='swiper-wrapper'>
            <div class="swiper-slide">
                <slot></slot>
            </div>
            <div class="swiper-pagination"></div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
            <div class="swiper-scrollbar"></div>
            </div>
    </div>
</template>

<script>
import Swiper from 'swiper'
// 注意导入文件swiper 的路劲。。。
import 'swiper/css/swiper.min.css'
// import 'swiper/dist/css/swiper.min.css'
export default {
  mounted() {
   new Swiper('.swiper-container', {
      autoplay: true,    //自动播放
      loop: true,        //循环播放
      delay: 3000,       //每张图间隔三秒
      //分页器
      pagination: {
        el: ".swiper-pagination"
      },
      //左右前进后退按钮
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    });
  },
    // mounted() {
    //     new Swiper('.ditle',{
    //         autoplay: true,    //自动播放
    //         loop:true,  //循环播放
    //         freeMode: true,
    //         delay: 3000,       //每张图间隔三秒
    //         // 这是分页器的一个初始化，使用时才初始化
    //         pagination:{
    //             el: '.swiper-pagination',
    //         },
    //         //左右前进后退按钮
    //         navigation: {
    //             nextEl: ".swiper-button-next",
    //             prevEl: ".swiper-button-prev"
    //         }
    //     })
    // }

    // name : "cookie_swiper",
    // data() {
    //     return {
            
    //     }
    // },

}
</script>


<style lang="scss" scoped>
.swiper-slide {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        // padding: 0 0.8rem;
        img {
          width: 100%;
          height: 100%;
        }
      }
</style>