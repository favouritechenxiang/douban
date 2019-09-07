<template>
    <div>
        <div class="box">
            <h2>{{texta}}</h2>
            <div class="section" v-for="(v,i) in obja" :key="i">
                <img :src="v.images.small"><span>{{v.title}}</span>
                <p class="people">20005人</p>
                <div class="news">
                    <p>{{v.group_topic.time}}</p>
                    <p class="time">{{v.group_topic.title}}</p>
                </div>
            </div>
        </div>
        <div class="groups">
            <a href="#">{{more}}</a>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            obja:[]
        }
    },
    props:{
        texta:{
            type:String,
            required:true
        },
        more:{
            type:String,
            required:true
        }
    },
    created(){
        this.axios({
            type:"get",
            url:"/groupa"
        }).then((ok)=>{
            console.log(ok.data);
            this.obja = ok.data;
        })
    }
}
</script>

<style scoped>
    div{
        font-size: 0;
    }
    .box{
        padding-left: 0.216rem;
        height: 3.7rem;
        padding-top: 0.168rem;
        margin-top: 0.2rem;
        overflow: auto;
    }
    h2{
        font-size: 0.168rem;
        color: #111111;
        font-weight: 100;
    }
    .section{
        width: 3.31rem;
        height: 0.77rem;
        padding: 0.18rem 0rem;
        margin-right: 0.216rem;
        border-bottom: 0.01rem solid #e8e8e8;
        position: relative;
    }
    .section span{
        font-size: 0.18rem;
        color: #111111;
        position: absolute;
        top: 0.32rem;
        left: 0.62rem;
        width: 2.1rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow:ellipsis ;
    }
    .section img{
        width: 0.48rem;
        height: 0.48rem;
    }
    .news{
        margin-top: 0.2rem;
        display: flex;
    }
    .news p{
        font-size: 0.15rem;
        color: #AAAAAA;
        flex-shrink: 0;
    }
    .news .time{
        float: right;
        font-size: 0.15rem;
        color: #AAAAAA;
        margin-left: 0.07rem;
        width: 2.36rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow:ellipsis ;
    }
    .people{
        font-size: 0.16rem;
        color: #cccccc;
        float: right;
        margin-top: 0.1rem;
    }
    .groups{
        width: 100%;
        padding: 0.18rem 0;
        text-align: center;
    }
    .groups a{
        text-decoration: none;
        font-size: 0.16rem;
        color: #42BD56;
    }
</style>