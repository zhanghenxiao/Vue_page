<template>
    <div>
        <div class="left_page">有不清楚的问题，需要查询
            <input type="text" v-model="list"> 
            <button @click="chage(list)">问题搜索</button>
        </div>
        <ul v-if="isshow">
            <li>
                {{log}} <br>
                {{use}}
            </li>
        </ul>
    </div>
    
</template>

<script>
import plan from '@/assets/test.json'
export default {
    data() {
        return {
            list: '',
            add : '',
            planlist :plan,
            log :'',
            use:'',
            isshow:false
        }
    },
     mounted() {
         console.log("mm",this.data)
        //  console.log("1100000")
        // if (this.use = ','){
        //     this.use = this.use.replace(',', '<br>')
        //     console.log('mounted')
        // }
    },
    methods: {
        chage(data){
            console.log(data)
            console.log(this.list)
            this.add = data
            console.log(this.add)
            // console.log(this.planlist[1].id)
            // datalist = this.planlist.map(item =>{return {'id':item.id}})
            console.log(this.planlist.length)
            for(var i=0;i<this.planlist.length;i++){
                if(this.add == this.planlist[i].id){
                    console.log("这是i",this.planlist[i].id)
                    this.log == this.planlist[i].explain
                    this.use = this.planlist[i].use
                    console.log(this.log);
                    this.isshow = true
                    break
                } 
                else{
                    this.isshow = false
                    console.log("nihao")
                }
            }
        }
    },
   
}
</script>

<style lang="scss" scoped>
.left_page{
    position: relative;
    left: 100px;
}
ul{
    list-style: none;
    li{
        background-color: gainsboro;
    }
}

</style>