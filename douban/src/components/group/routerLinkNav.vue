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
                <router-link to="/sousuo"><img src="../../../static/img/pic05.png"></router-link>
            </div>      
        </div>
    </div>

    <div class="nav">
        <div>
            <router-link to="/dianying">影院热映</router-link>
            <router-link to="/oumei">欧美新碟榜</router-link>
        </div>
        <div class="bottom">
            <router-link to="/reg">注册账号</router-link>
            <router-link to="/login">登录豆瓣</router-link> 
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
      .capital a:nth-child(5) img{
        width: 0.29rem;
        height: 0.22rem;
        margin-top: 0.02rem;
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
        height: 1.13rem;
        margin: auto;
        padding-top: 0.29rem;
    }
    .nav div{
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
    .nav a{
        width: 1.58rem;
        height: 0.52rem;
        font-size: 0.16rem;
        text-decoration: none;
        color: #494949;
        text-align: center;
        line-height: 0.52rem;
        background: #f6f6f6;
        margin:0 0.05rem;
        border-radius: 0.02rem;
    }
    .bottom{
        margin-top: 0.08rem;
    }
</style>