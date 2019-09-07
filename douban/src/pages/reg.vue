<template>
    <div class="header">
        <p class="title">欢迎加入豆瓣</p>
        <div class="nav">
            <div class="input-list">
                <input type="text" placeholder="邮箱" v-model="useremail">
                <input class="pwd" :type="bool?'password':'text'" placeholder="密码" v-model="userpass">
                <input type="text" placeholder="用户名" v-model="username">
                <input v-on:click="zhucefun()" class="btn" type="button" value="立即注册">
                <img :src="bool?imgurla:imgurlb" v-on:click="fun()">
            </div>           
        </div>
        <div class="zhuce">点击 [注册] 代表你已阅读并同意用户使用协议</div>
        <div class="download"><a href="#" @click="dlfun()">下载豆瓣APP</a></div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            imgurla:"static/img/pic03.png",
            imgurlb:"static/img/pic04.png",
            bool:true,
            useremail:'',
            userpass:'',
            username:'',
            arr:[]
        }       
    },
    methods:{
        fun(){
            this.bool = !this.bool;
        },
        dlfun(){
            window.location.href = "http://localhost:8080/reg#/index";
        },
        // zhucefun(){
        //     this.axios({
        //         method:"get",
        //         params:{useremail:this.useremail,userpass:this.userpass,username:this.username},
        //         url:"http://localhost:3000/zhuce"
        //     }).then((ok)=>{
        //         console.log(ok.data);
        //         this.arr = ok.data;
        //         if(this.arr.linkid==1){
        //             alert("恭喜您注册成功");
        //             window.location.href = "http://localhost:8080/reg#/login";
        //         }
        //     })
        // }
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
        height:0.46rem;
        font-size: 0.40rem;
        margin: 0.37rem 0rem;
        text-align: center;
        line-height: 0.46rem;
        color: #46BD56;
    }
    .nav{
        padding: 0.24rem 0.18rem;
    }
    .input-list{
        width:100%;
        height: 2.32rem;
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
    }
    ::-webkit-input-placeholder{
        color: #ccc;
    }
    .btn{
        margin-top: 0.15rem;
        background: #42BD56;
        text-align: center;
        color: #fff;
        font-size: 0.17rem;
        border-radius:0.05rem;
    }
    .pwd{
        border-top: none;
        border-bottom: none;
    }
    .zhuce{
        width: 100%;
        float: left;
        font-size: 0.14rem;
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
</style>