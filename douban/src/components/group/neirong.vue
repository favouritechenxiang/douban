<template>
<div>
    <div class="section"  v-for="(v,i) in arr" :key="i" v-on:click="fun(v.id)">
        <div>
            <h3>{{v.title}}</h3>
            <p>{{v.content}}</p>
            <div><span>{{v.category_name}}</span></div>
        </div>
        <img :src="v.image">
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
            url:"/shouyes"
        }).then((data)=>{
            // console.log(data.data);
            this.arr = data.data;
        })
    },
    methods:{
        fun(i){
            this.$router.push("/xiangqing?id="+i)//路由传参
        }
    }
}
</script>


<style scoped>
    div{
        font-size: 0;
    }
    h3{
        width: 2.16rem;
        font-size: 0.16rem;
        color: #494949;
        font-family: sans-serif;
        line-height: 0.16rem;
        text-align: justify;
        font-weight: 100;
    }
    .section{
        width: 3.31rem;
        height:1.31rem;
        margin-left: 0.216rem;
        padding: 0.3rem 0;
        padding-right: 0.216rem;
        display: flex;
        justify-content: space-between;
        border-bottom: 0.01rem solid #e3e3e3;
    }
    p{
        font-size: 0.12rem;
        font-family: sans-serif; 
        width: 2.16rem;
        height: 0.36rem;
        color: #AAAAAA;
        padding: 0.12rem 0; 
        margin-bottom: 0.1rem;
        white-space: wrap;
        overflow-y: hidden;
        text-overflow:ellipsis ;    
    }
    img{
        display: block;
        width:0.84rem;
        height: 1.04rem;
    }
    span{
        font-size: 0.12rem;
        color:#AAAAAA;
    }
   
</style>