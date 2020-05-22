<template>
  <div class="top">
    <h3>LATTE 项目介绍</h3>
    
    <ul>
      <h4>latte设备进程</h4>
      <li>
       <h5>一代3D打印</h5>
        <video controls>
          <source src="@/assets/36.mp4" type="video/mp4">
        </video>
      </li>
      <li>
        <h5>二代3D打印</h5>
        <video controls>
          <source src="@/assets/35.mp4" type="video/mp4">
        </video>
      </li>
      <li>
        <h5>三代全金属</h5>
        <img src="@/assets/37.jpg" alt="">
      </li>
      <li></li>
    </ul>
    
    <lattevedio ></lattevedio>
  </div>
</template>

<script>
import lattevedio from '@/views/cinema/Lattevedio'
export default {
    components:{
       lattevedio 
    }
}
</script>

<style lang="scss" scoped>
.top{
  video{
    width: 80%;
    height: 300px;
  }
  ul{
    li{
        list-style-type:none
  }
  h5{
    background-color: gainsboro;
  }
  }
  
}
</style>