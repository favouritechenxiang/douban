<template>
    <div>
        <div class="login">
            <img src="../../../static/img/pic09.jpg"><span>请先登录</span>
            <div class="imgs">
                <img src="../../../static/img/pic11.svg">
                <img src="../../../static/img/pic10.svg">
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
    .login{
        height: 0.48rem;
        padding: 0.12rem 0.216rem;
        border-bottom: 0.02rem solid #e8e8e8;
        position: relative;
    }
    .login img{
        width: 0.48rem;
        height: 0.48rem;
        border-radius: 100%;
    }
    .login span{
        float: right;
        font-size: 0.15rem;
        color: #AAAAAA;
        margin-top: 0.16rem;
        margin-right: 2.1rem; 
    }
    .imgs{
        width: 0.8rem;
        position: absolute;
        right: 0.35rem;
        top:0.21rem;
        display: flex;
        justify-content: space-between;
    }
    .imgs img{
        width: 0.288rem;
        height: 0.288rem;
        margin-right: 0.2rem;
    }
</style>