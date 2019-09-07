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

    <div class="nav">
        <div class="spans">
            <p>每天看电好内容</p>
            <div class="right">
                <a class="a1" href="#">极速下载</a>
                <a class="a2" href="#">打开</a>
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
    div{
        font-size: 0;
    }
    .header{
        width: 100%;
        height: 0.58rem;
        justify-content: space-between;
        align-items: center;
        border-bottom: 0.01rem solid #f3f3f3;
    }
    .nav{
        width: 100%;
        height:0.44rem;
        background: url(../../../static/img/pic02.jpg) no-repeat;
        background-size: 100% 0.8rem;
        padding-top: 0.36rem;
        position: relative;
    }
    .spans{
        width: 0.98rem;
        height: 0.26rem;
        margin-left: 0.47rem;
    }
    .spans p{
        font-size: 0.14rem;
        color: #2CA532;
        line-height: 0.26rem;
    }
    .spans a{
        text-decoration: none;
        font-size: 0.13rem;
        color: #42BD56; 
    }
    .right{
        width: 1.535rem;
        height: 0.283rem;
        position: absolute;
        top:0.34rem;
        right: 0.15rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .right a{
        line-height: 0.26rem;
        font-family: sans-serif;   
    }
    .right .a1{
        width: 0.52rem;
        height: 0.26rem;
        padding: 0 0.168rem;
        background: #42BD56;
        border-radius: 0.03rem;
        color: white;
        font-weight: 700;
    }
    .right .a2{
        width: 0.26rem;
        height: 0.26rem;
        border-radius: 0.03rem;
        font-weight: 700;
        padding: 0 0.168rem;
        border: 0.0118rem solid #42BD56;
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
</style>