<template>
  <div>
    this is app vue<hr>
    <!-- <img src="@/assets/1.jpg" alt="1.jpg"> -->
    <swiper> <img src="@/assets/1.jpg" alt="1.jpg"></swiper>
    <swiper> <img src="@/assets/2.jpg" alt="2.jpg"></swiper>
    <swiper> <img src="@/assets/3.jpg" alt="3.jpg"></swiper>
    <swiper> <img src="@/assets/4.jpg" alt="4.jpg"></swiper>
  </div>
</template>

<script>
import swiper from '@/components/swiper'
export default {
  data() {
    return {
      swiperimg : [],
     
    }
  },
  methods: {
    
  },
  comments:{
    swiper
  }
}
</script>

<style>

</style>