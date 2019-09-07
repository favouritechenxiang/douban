<template>
    <div>
        <routerhead></routerhead>
        <div class="box">
            <denglu></denglu>
        </div>
        <radio></radio>
        <radio-bottom></radio-bottom>
    </div>
</template>

<script>
import yinyong from '../components/group/yinyong'
import routerhead from '../components/group/routerhead'
import radio from '../components/group/radio'
import radioBottom from '../components/group/radioBottom'
import denglu from '../components/group/denglu'
export default {
    components:{
        yinyong,
        routerhead,
        radio,
        radioBottom,
        denglu
    }
}
</script>

<style scoped>
    .box{
        margin-top: 0.15rem;
    }
</style>