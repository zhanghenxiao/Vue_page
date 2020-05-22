<template>
    <div>
    <link href="//at.alicdn.com/t/font_591689_bxvxaxdr7u9v0a4i.css" rel="stylesheet">
    <i class="iconfont icon-social_stackflow"></i>
        this is nowplaying.vue  page
         <p><span class="glyphicon glyphicon-cloud"></span></p>      
         <p><span class="glyphicon glyphicon-envelope"></span></p> 
        <ul class="top_nav">
            <li v-for="data in planlist" :key="data">
               {{data.planname}} 
            </li>
        </ul>
        <ul>
            <li v-for="(data) in planlist" :key="data">
                <div class="show_page clearfix">
                    <div class="left_page">
                        <div>
                            报告名称:{{data.planname}}
                            <hr>
                        </div>
                        报告详情：
                        {{data.explain}}
                    </div> 
                    <div class="next"> </div>
                    <div class="right_page">
                        负责人：{{data.author}}
                        <hr>
                        <div>
                            完成进度：<input :value = "data.schedule">
                            <button @click="change(data.id)">确认修改</button>
                        </div>
                    </div>     
                </div>
            </li>
        </ul>
        <exceltable></exceltable>
    </div>
     
</template>

<script>
import plan from '@/assets/plan.json'
// vue-easytable 表格组件，支持编辑 http://doc.huangsw.com/vue-easytable/app.html#/table/horizontalResize
//import axios from 'axios/dist/axios.js'
import exceltable from '@/components/exceltable'
// import 'bootstrap/dist/js/bootstrap.min.js'
// import 'bootstrap/dist/css/bootstrap.min.css'
export default {
    
    data(){
        return{    
            planlist :plan
        }
    },  
    components:{
        exceltable
    },
    methods: {
        change(data){
            console.log(data)
            this.planlist
        }
    },  
}
</script>

<style lang="scss" scoped>

.show_page{
    margin: 20px;
    width: 1200px;
    height: 200px;
    // background-color: springgreen;
    .left_page{
        position: absolute;
        left: 450px;
        float:left;
        width: 400px;
        height: 200px;
        background-color: gainsboro;
    }
    .right_page{
      float: right;
      width: 400px;
      height: 200px;
      background-color: gainsboro;
    }
}
ul{list-style: none; 
}
.top_nav{
    position: absolute;
    left: -30px;
    margin: 40px;
    display: inline;
    // background-color: aqua;
    li{
        background-color:gray;
        margin: 1px;
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