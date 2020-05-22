<template>
  <div>
    <div class="header">
      <div class="logo" >
        <img src="@/assets/logo.png" alt="英业达">
      </div>
      <div class="top_meau clearfix">
        <a href="film/">首页</a>
        |
        <a href="film/">联系我们</a>
      </div>
    </div>
    <hr>
    <!-- <img src="@/assets/1.jpg" alt="1.jpg"> -->
    <router-view></router-view>
    <tabber></tabber>
    <!-- <cinema></cinema> -->
  </div>
</template>

<script>

import tabber from '@/components/tabber'
// import cinema from '@/views/Cinema'
export default {
  data() { 
    return {
    }
  },
  components:{
    tabber,
    // cinema
  
  }
}
</script>

<style lang="scss" scoped>

.header{
  // display: -webkit-flex;
  // display: flex;
  height:70px ;
}
img{
  float: left;
  background-color: antiquewhite;
  width:200px;
  height: 70px;
}

.top_meau{
  float:right;
  text-align: center;
  a{
    text-decoration: none;
  }
}




//清除浮动
.clearfix:after{
    content: ".";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
}
.clearfix{display: inline-block;}
html.clearfix{height: 1%;}
.clearfix{display:block;}

</style>