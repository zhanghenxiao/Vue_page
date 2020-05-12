<template>
  <div>  
      <!-- 路由容器 -->
      <swiper> 
    </swiper>
      <filmtabber></filmtabber>
      
      <router-view></router-view>
  </div>
</template>

<script>
// import nowplaying from './views/film/nowplaying'
// import comingsoon from './views/film/comingsoon'
import swiper from '@/components/swiper'
import filmtabber from './film/filmtabber'
export default {
  components:{
    // nowplaying,
    // comingsoon
    filmtabber,
    swiper
  },
}

</script>
<style>

</style>