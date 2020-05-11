<template>
  <div>
    this is app vue<hr>
    <!-- <img src="@/assets/1.jpg" alt="1.jpg"> -->
    <swiper> 
    </swiper>
    <router-view></router-view>
    <tabber></tabber>
  </div>
</template>

<script>
import swiper from '@/components/swiper'
import tabber from '@/components/tabber'
export default {
  data() {
    return {
    }
  },
  components:{
    swiper,
    tabber
  }
}
</script>

<style>

</style>