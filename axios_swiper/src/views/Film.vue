<template>
  <div>
      <!-- 路由容器 -->
      <filmtabber></filmtabber>
      <router-view></router-view>
          
  </div>
</template>

<script>
// import nowplaying from './views/film/nowplaying'
// import comingsoon from './views/film/comingsoon'
import filmtabber from './film/filmtabber'
export default {
  components:{
    // nowplaying,
    // comingsoon
    filmtabber
  },
}

</script>
<style>

</style>