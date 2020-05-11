<template>
    <div>
        this is comingsoon.vue  page
        <exceltable></exceltable>
    </div>
</template>

<script>
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

<style>

</style>