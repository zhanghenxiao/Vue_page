<template>
    <div class="tablePage">
        <!-- 参考链接 https://blog.csdn.net/youyanh/article/details/81501971 -->
        <!-- 表格-->
        <v-table 
            :columns="tableConfig.columns" 
            :table-data="tableConfig.tableData" 
            :paging-index="(pageIndex-1)*pageSize">
        </v-table>
        <!-- 分页-->
        <v-pagination 
            @page-change="pageChange" 
            @page-size-change="pageSizeChange" 
            :total="total" :page-size="pageSize" 
            :layout="['total', 'prev', 'pager', 'next', 'sizer', 'jumper']">
        </v-pagination>
    </div>
</template>

<script>
//引入数据
import tableDate from '@/assets/finishplan.js';
//导入json 文件
import plan from '@/assets/plan.json' 
// 导入 css
import 'vue-easytable/libs/themes-base/index.css'
// 导入 table 组件 和分页组件,也需要注册组件才能使用
import {VTable,VPagination} from 'vue-easytable'

export default {
    data() {
        return {
            pageIndex: 1,
            pageSize: 10,
            total:'',
            tableConfig: {
                tableData: [],
                columns: [
                    {
                        field: "id",
                        title: "编号",
                        width: 50,
                        columnAlign: "center"
                    },
                    {
                        field: "name",
                        title: "编写报告者",
                        width: 150,
                        columnAlign: "left"
                    },
                    {
                        field: "planname",
                        title: "测试报告",
                        width: 300,
                        columnAlign: "left",
                    },
 
                    {
                        field: "schedule",
                        title: "完成进度",
                        width: 50,
                        columnAlign: "center",
                    }
                ]
            }
        };
    },
    created() {
        this.getTableData();
    },
    methods: {
        getTableData() {
            this.tableConfig.tableData = tableDate.slice(
                (this.pageIndex - 1) * this.pageSize,
                this.pageIndex * this.pageSize
            );
            this.total = tableDate.length;
        },
        pageChange(pageIndex) {
            this.pageIndex = pageIndex;
            this.getTableData();
            console.log(pageIndex);
        },
        pageSizeChange(pageSize) {
            this.pageIndex = 1;
            this.pageSize = pageSize;
            this.getTableData();
        }
    },
    components:{
         VTable,
         VPagination
    }
};
</script>