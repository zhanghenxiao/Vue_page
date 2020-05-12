<template>
  <div>
    this is app vue<hr>
    <!-- <img src="@/assets/1.jpg" alt="1.jpg"> -->
    <router-view></router-view>
    <tabber></tabber>
    <cinema></cinema>

  </div>
</template>

<script>

import tabber from '@/components/tabber'
import cinema from '@/views/Cinema'
export default {
  data() { 
    return {
    }
  },
  components:{
    tabber,
    cinema
  
  }
}
</script>

<style>

</style>