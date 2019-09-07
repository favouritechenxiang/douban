<template>
    <div>
        <yinyong></yinyong>
        <denglu></denglu>
        <groupa texta="租房找室友" more="更多相关小组"></groupa>
        <groupa texta="来聊5块钱"></groupa>
        <groupa texta="来聊5块钱"></groupa>
    </div>
</template>

<script>
import yinyong from '../components/group/yinyong'
import denglu from '../components/group/denglu'
import groupa from '../components/group/groupa'
export default {
    components:{
        yinyong,
        denglu,
        groupa      
    }
}
</script>

<style scoped>
    h2{
        font-size: 0.16rem;
    }
</style>