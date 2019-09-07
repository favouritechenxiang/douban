<template>
    <div class="header">
        <h1 class="title">登录豆瓣</h1>
        <div class="nav">
            <div class="input-list">
                <input type="text" placeholder="邮箱">
                <input class="pwd" :type="bool?'password':'text'" placeholder="Token">
                <input class="btn" type="buttom" value="登录">
                <img :src="bool?imgurla:imgurlb" v-on:click="fun()">
            </div>           
        </div>
        <div class="found">使用其他方式登录 & 找回密码</div>
        <div class="footer">
            <span class="reg" v-on:click="regfun()">注册豆瓣账号</span>
            <span>下载豆瓣App</span>
            <a class="back" href="javascript:history.go(-1)">取消</a>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            imgurla:"static/img/pic03.png",
            imgurlb:"static/img/pic04.png",
            bool:true
        }       
    },
    methods:{
        fun(){
            this.bool = !this.bool;
        },
        regfun(){
            window.location.href = 'http://localhost:8080/reg#/reg';
        }
    }
}
</script>

<style scoped>
    .header{
        width: 100%;
        font-size: 0;
    }
    .title{
        width: 100%;
        height:0.55rem;
        font-size: 0.18rem;
        text-align: center;
        border-bottom: 0.01rem solid #eee;
        line-height: 0.55rem;
    }
    .back{
        float: left;
        text-decoration: none;
        color: #42BD56;
        font-size: 0.15rem;
        font-weight: 100;
        margin-left: 0.2rem;
        position: absolute;
        left: 0.04rem;
        top:0.18rem;
    }
    .nav{
        padding: 0.24rem 0.18rem;
        margin-top: 0.13rem;
    }
    .input-list{
        width:100%;
        height: 1.67rem;
        margin: auto;
        position: relative;
    }
    input{
        float: left;
        padding: 0 0.09rem;
        height: 0.52rem;
        width: 3.17rem;
        border: 0.01rem solid #ccc;
        font-size: 0.15rem;
        border-top-left-radius: 0.03rem;
        border-top-right-radius: 0.03rem;
        outline: 0;
        font-family: sans-serif;
    }
    .btn{
        margin-top: 0.15rem;
        background: #17AA52;
        text-align: center;
        color: #fff;
        font-size: 0.17rem;
        border-radius:0.05rem;
    }
    .pwd{
        border-top: none;
    }
    .found{
        width: 100%;
        font-size: 0.15rem;
        color: #AAAAAA;
        text-align: center;
    }
    .download{
        width:100%; 
        margin-top: 0.6rem;
        text-align: center;       
    }
    .download a{
        text-decoration: none;
        font-size: 0.16rem;
        color: #42BD56;
    }
    img{
        width: 0.27rem;
        height: 0.27rem;
        position: absolute;
        right: 0.12rem;
        top: 0.67rem;
    }
    .footer{
        width: 100%;
        font-size: 0.15rem;
        color: #45BD56;
        text-align: center;
        font-family: sans-serif;
        margin-top: 0.45rem;
    }
    .reg{
        margin-right: 0.3rem;
    }
</style>