<template>
    <div class="head">
        <ul class="uls" >
            <li v-for="(v,i) in arr" :key="i">
                <a :href="v.href">{{v.title}}</a>
                <span></span>
            </li>
        </ul>
        
        <div class="end">
            <div class="footer douban">
                <a href="http://localhost:8080/#/index">
                    <img src="../../../static/img/pic06.png">
                </a>
                <div class="my">
                    <span>豆瓣</span>
                    <p>我们的精神角落</p>
                </div>
            </div>
            <div class="app">
                <a href="http://localhost:8080/#/index">去App Story 免费下载iOS客户端</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            arr:[]
        }
    },
    created(){
        this.axios({
            method:"get",
            url:"/lists"
        }).then((ok)=>{
            // console.log(ok.data);
            this.arr = ok.data;
        })
    }
}
</script>

<style scoped>
    div{
        font-size: 0;
    }
    .uls{
        overflow: hidden;
    }
    .uls li{
        width: 50%;
        height: 0.49rem;
        padding: 0 0.216rem;
        border-top: 0.01rem solid #eee;
        border-right: 0.01rem solid #eee;
        box-sizing: border-box;
        float: left;
    }
    .uls a{
        text-decoration: none;
        font-size: 0.16rem;
        color: #42BD56;
        line-height: 0.49rem;
    }
    .uls span{
        color: #ccc;
        border-right: 0.01rem solid #ccc;
        border-bottom: 0.01rem solid #ccc;
        width: 0.09rem;
        height: 0.09rem;
        transform: rotate(-45deg);
        margin-top: 0.1rem;
        float: right;
        margin-top: 0.2rem;
    }
    .end{
        width: 100%;
        height: 0.9rem;
        margin: 0.5rem 0 0.5rem 0;
    }
    .footer{       
        text-align: center;
        display: flex;
        justify-content: space-between;
    }
    .footer img{
        width: 0.57rem;
        height: 0.57rem;
    }
    .footer span{
        font-size: 0.24rem;
        color: #111111;
        float: left;
    }
    .footer p{
        font-size: 0.14rem;
        margin-left: 0.005rem;
        color: #111111;
        clear: both;
    }
    .douban{
        width: 1.70rem;
        height: 0.58rem;
        margin: auto;
    }
    .my{
        margin-top: 0.02rem;
    }
    .app{
        text-align: center;  
        margin-top: 0.15rem;
    }
    .app a{
        text-decoration: none;
        font-size: 0.15rem;
        color: #42BD56;
    }
</style>