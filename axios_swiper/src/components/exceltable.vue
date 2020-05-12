<template>
    <div>
    <v-table :columns="columns" :table-data="tableData"></v-table>
    {{w}}</div>
</template>


<script>
//导入json 文件
import plan from '@/assets/plan.json' 
// 导入 css
import 'vue-easytable/libs/themes-base/index.css'
// 导入 table 组件 和分页组件
import {VTable,VPagination} from 'vue-easytable'

// import Vue from 'vue'
// 将组件注册到全局,但是全局注册报错，使用局部注册OK

export default{
    data() {
        return {
            planlist :plan,//接受josn文件
            tableData: [
                    {"name":"test plan","tel":"156*****1987","hobby":"钢琴、书法、唱歌","address":"上海市黄浦区金陵东路569号17楼"},
                    {"name":"李伟","tel":"182*****1538","hobby":"钢琴、书法、唱歌","address":"上海市奉贤区南桥镇立新路12号2楼"},
                   
                 ],
                columns: [
                    {field: 'name', title:'测试报告', width: 100, titleAlign: 'center',columnAlign:'center'},
                    {field: 'tel', title: '手机号码', width: 260, titleAlign: 'center',columnAlign:'center'},
                    {field: 'hobby', title: '爱好', width: 330, titleAlign: 'center',columnAlign:'center'},
                    {field: 'address', title: '地址', width: 308, titleAlign: 'center',columnAlign:'left'}
                ]
        }
    },
            
    components: {
    VTable
    }
}
</script>