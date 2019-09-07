<template>
    <div>
        <router-link-nav></router-link-nav>
        <neirong></neirong>
    </div>
</template>


<script>
import routerLinkNav from '../components/group/routerLinkNav'
import neirong from '../components/group/neirong'
export default {
    components:{
        routerLinkNav,
        neirong
    }
}
</script>


<style scoped>
    h2{
        font-size: 0.16rem;
    }
</style>