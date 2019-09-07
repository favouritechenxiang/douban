<template>
<div>
    <div class="header">
        <div class="box">
            <div class="douban">
                <router-link to="/index">豆瓣</router-link>
            </div>
            <div class="capital">
                <router-link to="/dianying">电影</router-link>
                <router-link to="/tushu">图书</router-link>
                <router-link to="/guangbo">广播</router-link>
                <router-link to="/xiaozu">小组</router-link>
                <router-link to="/sousuo">搜索</router-link>
            </div>      
        </div>
    </div>
</div>
    
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .header{
        width: 100%;
        height: 0.58rem;
        justify-content: space-between;
        align-items: center;
        border-bottom: 0.01rem solid #f3f3f3;
    }
    .douban{
        font-size: 0.28rem;
        font-weight: bolder;
    }
    .douban a{
        color:#00B600;
    }
    .box a{
        text-decoration: none;
    }
    .capital{
        font-size: 0.16rem;
        width: 2.26rem;
        height:0.21rem;
        margin-right: 0.02rem;
        display: flex;
        justify-content: space-between;
    }
    .capital a:nth-child(1){
        color: #2384E8;
    }
     .capital a:nth-child(2){
        color: #9F7860;
    }
      .capital a:nth-child(3){
        color: #E4A813;
    }
      .capital a:nth-child(4){
        color: #2AB8CC;
    }
    .box{
        width: 3.31rem;
        height: 0.58rem;
        margin: auto;
        background: white;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .nav{
        width: 3.31rem;
        height: 2rem;
        margin: auto;
        background: green;
    }
    .nav a{
        font-size: 0.12rem;
        text-decoration: none;
        color: #2AB8CC;
    }
</style>