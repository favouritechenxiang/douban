<template>
    <div>
        <routerhead></routerhead>
        <img class="imggif" src="../../static/img/pic01.gif" v-if="arr.length<=0">
        <div v-else>
            <div>
                <div class="title">
                    <h2>{{arr[0].title}}</h2>
                    <p><span>{{arr[0].loc_name}}</span></p>
                </div>
                <img :src=arr[0].image>    
            </div>
       

            <div class="time">
                <span class="hour">时间:</span>
                <ul class="uls">
                    <li><span>{{arr[0].begin_time}}</span></li>
                    <li><span>{{arr[0].end_time}}</span></li>
                </ul>
            </div>

            <div class="time top">
                <span class="hour">地点:</span>
                <ul class="uls address">
                    <div><span>{{arr[0].address}}</span></div>
                </ul>
            </div>

            <div class="time top end">
                <span class="hour">费用:</span>
                <ul class="uls address">
                    <div class="free"><span>{{arr[0].fee_str}}</span></div>
                </ul>
            </div>

            <div class="time top end">
                <span class="hour">类型:</span>
                <ul class="uls address">
                    <div class="free"><span>{{arr[0].category_name}}</span></div>
                </ul>
            </div>

            <div class="time top end">
                <span class="hour hours">起始时间:</span>
                <ul class="uls address">
                    <div class="free"><span>桥福当代美术馆</span></div>
                </ul>
            </div>

            <div id="ullist">
                <a href="#" v-for="(v,i) in arrs" :key="i">{{v}}</a>
            </div>
            <h2 class="active">活动详情</h2>
            <p class="pass">
                {{arr[0].content}}
            </p>
        </div>
        
        <detail-bottom></detail-bottom>
    </div>
</template>

<script>
import routerhead from '../components/group/routerhead'
import detailBottom from '../components/group/detailBottom'
export default {
    components:{
        routerhead,
        detailBottom
    },
    data(){
        return{
            numid:'',
            arr:[],
            obj:"",
            arrs:[]
        }
    },
    created(){
        //接收路由传过来的id
        this.numid = this.$route.query.id
        console.log(this.numid);//打印id
        setTimeout(() => {
            this.axios({
            method:"get",
            url:"/shouyes"
        }).then((ok)=>{
            //过滤id
            this.arr = ok.data.filter((v,i)=>{
                if(v.id==this.numid){
                    return v                  
                }
            }),
             console.log(this.arr);
             this.obj = this.arr[0].tags;
             this.arrs = this.obj.split(",");
             console.log(this.arrs);
        })
        }, 1000);
    }
}
</script>

<style scoped>
    div{
        font-size: 0;
    }
    template{
        font-family: sans-serif;
    }
    .title{
        width: 3.51rem;
        height: 0.50rem;
        margin: 0.24rem auto;
    }
    h2{
        font-size: 0.168rem;
    }
    .title p{
       
        width: 0.31rem;
        height: 0.22rem;
        background: #ff8263;
        border-radius: 0.02rem;
        padding: 0.013rem 0.006rem;
        margin-top: 0.02rem;
        text-align: center;
    }
    .title span{
        font-size: 0.12rem;
        color: #ffffff;
        font-weight: bolder;
        line-height: 0.22rem;
    }
    img{
        display: block;
        width:2.64rem;
        height: 3.7083rem;
        margin: auto;
    }
    .time{
        width: 3.31rem;
        margin: 0.2rem auto 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .time .hour{
        width: 0.39rem;
        height: 0.21rem;
        font-size: 0.14rem;
        color: #666666;
    }
   .uls{
       width: 3.11rem;
   }
    li{
        width: 100%;
        height: 0.18rem;
        float: right;
        margin-top: 0.05rem;
    }
    li span{
        font-size: 0.14rem;
        margin-left: 0.1rem;
    }
    .address{
        margin-bottom: 0.2rem;
    }
   
    .address span{
        font-size: 0.14rem;
        margin-left: 0;
    }
     .address div{
        height: 0.18rem;
        padding-left: 0.05rem;
    }

    .free{
        margin-top: 0.158rem;
        height: 0.4rem;
    }
    .end{
        margin-bottom: 0;
        height: 0.4rem;
        margin-top: 0;
    }
    .end .hours{
        width: 0.7rem;
    }
    #ullist{
        width: 3.51rem;
        height: 0.9rem;
        margin: auto;
        margin-top: 0.2rem;
    }
    #ullist a{
        text-decoration: none;
        float: left;
        font-size: 0.15rem;
        padding: 0.1rem 0.14rem;
        color: #494949;
        margin-left:0.1rem;
        border-radius: 0.3rem;
        background:#f5f5f5;
        margin-bottom: 0.2rem;
    }
    .active{
        width: 3.51rem;
        height: 0.19rem;
        color: #007722;
        margin: 0.4rem auto;
        padding-left: 0.25rem;
    }
    .pass{
        width: 3.51rem;
        margin: auto;
        font-size: 0.14rem;
    }
    .imggif{
        width: 0.8rem;
        height: 0.8rem;
    }
</style>