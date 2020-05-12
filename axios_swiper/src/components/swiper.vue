<template>
    <div class='swiper-container'>  
            <div class='swiper-wrapper'>
                <!-- <slot></slot> -->
                <div class="swiper-slide"> <img src="@/assets/5.jpg" alt="5.jpg"></div>
                <div class="swiper-slide"> <img src="@/assets/6.jpg" alt="6.jpg"></div>
                <div class="swiper-slide"> <img src="@/assets/7.jpg" alt="7.jpg"></div>
                <div class="swiper-slide"> <img src="@/assets/8.jpg" alt="8.jpg"></div>
            </div>
            <!-- 这是分页器 -->
            <div class="swiper-pagination"></div>
    </div>
</template>

<script>
import Swiper from 'swiper' //js文件
// 注意导入文件swiper 的路劲在node_modules中。。。
import 'swiper/css/swiper.min.css'  //css文件
export default {
  mounted() {
   new Swiper('.swiper-container', {
     autoplay: true,    //自动播放
     loop: true,        //循环播放
     delay: 500,       //每张图间隔秒
      //分页器
      pagination: {
        el: ".swiper-pagination"
      },
    });
  }, 
}
</script>


<style lang="scss" scoped>
.swiper-slide img{
        width: 100%;
        height: 30%;}
</style>