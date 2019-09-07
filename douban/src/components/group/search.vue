<template>
    <div>
        <div class="header">
            <div class="box">
                <a href="javascript:history.go(-1)">关闭</a>
                <input type="text" @focus="fun()" @blur="fun()">
                <img :id="bool?'imgs':''" src="../../../static/img/pic07.png">
            </div>
        </div>
        <ul class="uls">
            <li v-for="(v,i) in obj" :key="i">
                <a :href="v.url">
                    <span :style="{color:v.color}">{{v.title}}</span>
                    <p>{{v.news}}</p>
                </a>
            </li>
        </ul>
        <div class="footer">
            <router-link class="regs" to="/reg">注册账号</router-link>          
            <router-link  class="regs" to="/login">登录豆瓣</router-link>          
        </div>
        <div class="footer bottom">
            <router-link class="regs" to="/index">使用桌面版</router-link>          
            <router-link to="/dianying">使用豆瓣App</router-link>       
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            obj:[],
            bool:false
        }
    },
    created(){
        this.axios({
            method:"get",
            url:"/searches"
        }).then((ok)=>{
            // console.log(ok.data);
            this.obj = ok.data;
        })
    },
    methods:{
        fun(){
            this.bool = !this.bool;
        }
    }
}
</script>

<style scoped>
    div{
        font-size: 0;
    }
    a{
        text-decoration: none;
    }
    #imgs{
        display: none;
    }
    .header{
        height: 0.576rem;
        border-bottom: 0.01188rem solid #f3f3f3;
    }
    .box{
        width: 3.33rem;
        height: 100%;
        margin: auto;
    }
    .box input{
        float: right;
        width: 2.88rem;
        height:0.384rem;
        background: #f3f3f3;
        margin-top: 0.1rem;
        border: none;
        border-radius: 0.03rem;
    }
    .box a{
        font-size: 0.16rem;
        color: #42BD56;
        float: left;
        margin-top: 0.18rem;
    }
    .box img{
        width: 0.22rem;
        height: 0.22rem;
        position: absolute;
        top: 0.2rem;
        right: 1.53rem;
    }
    .uls{
        width: 100%;
        height: 3.74rem;
        padding-top: 0.3rem;
        box-sizing: border-box;
        flex-shrink: 0;
        flex-wrap: wrap;
        border-bottom: 0.01rem solid #f3f3f3;
    }
    li span{
        font-size: 0.24rem;
    }
    li p{
        font-size: 0.12rem;
        margin-bottom: 0.4rem;
        color:#999999;
    }
    .uls li{
       text-align: center;
       width: 33%;
       float: left;
    }
    .footer{
        width: 100%;
        height: 0.17rem;
        display: flex;
        padding: 0.15rem 0;
    }
    .footer a{
        width: 50%;
        color:#42BD56; 
        font-size: 0.15rem;
        text-align: center;
    }
    .regs{
        border-right: 0.01rem solid #e5e5e5;
    }
    .bottom{
        border-top: 0.01rem solid #f3f3f3;
        border-bottom: 0.01rem solid #f3f3f3;
    }
</style>