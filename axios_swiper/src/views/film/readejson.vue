<template>
    <div>
        this is nowplaying.vue  page
        <ul>
            <li v-for="data in planlist" :key="data">
                {{data.id}}
                {{data.planname}}
                {{data.schedule}}
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
export default {
    
    data(){
        return{    
            planlist :plan
        }
    },  
    components:{
        exceltable
    }   
}
</script>

<style lang="scss" scoped>
    
</style>