<template>
    <div>
        <yinyong></yinyong>
        <tushu></tushu>
        <findmovie></findmovie>
        <mvbottom></mvbottom>
    </div>
</template>

<script>
import yinyong from '../components/group/yinyong'
import tushu from '../components/group/tushu'
import findmovie from '../components/group/findmovie'
import mvbottom from '../components/group/mvbottom'
export default {
    components:{
        yinyong,
        tushu,
        findmovie,
        mvbottom
    }
}
</script>

<style scroped>
     h2{
        font-size: 0.16rem;
    }
    span{
        font-size: 0.16rem;
    }
   
</style>