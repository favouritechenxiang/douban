<template>
    <div class="header">
        <div class="tops">
            <div class="box">
                <h2>影院热映</h2>
                <router-link to="/dianying">更多</router-link>
            </div>
            <div class="imgs">
                <div class="imglist" v-for="(v,i) in arr" :key="i">
                    <img :src="v.images.large">
                    <h2>{{v.title}}</h2>
                    <div class="star">
                        <star :stars="v.rating.average"></star>
                    </div>
                </div>   
            </div>
        </div>


        <div class="tops">
            <div class="box">
                <h2>免费在线观影</h2>
                <router-link to="/dianying">更多</router-link>
            </div>
            <div class="imgs">
                <div class="imglist" v-for="(v,i) in arr" :key="i">
                    <img :src="v.images.large">
                    <h2>{{v.title}}</h2>
                    <div class="star">
                        <span>星星</span><span>{{v.rating.average}}</span>
                    </div>
                </div>   
            </div>
        </div>

        <div class="tops">
            <div class="box">
                <h2>新片快递</h2>
                <router-link to="/dianying">更多</router-link>
            </div>
            <div class="imgs">
                <div class="imglist" v-for="(v,i) in arr" :key="i">
                    <img :src="v.images.large">
                    <h2>{{v.title}}</h2>
                    <div class="star">
                        <span>星星</span><span>{{v.rating.average}}</span>
                    </div>
                </div>   
            </div>
        </div>
    </div>
</template>

<script>
import star from "./star"
export default {
    data(){
        return{
            obj:[],
            arr:[],
            value:3
        }
    },
    components:{
        star
    },
    created(){
        this.axios({
            method:"get",
            url:"/movies"
        }).then((ok)=>{
            // console.log(ok.data);
            this.obj = ok.data;
            for(let i=0;i<this.obj.length;i++){
                if(i>=9){
                    this.arr.push(this.obj[i]);
                }
            }
            return this.arr;
            console.log(this.arr);
        })
    }
}
</script>

<style scoped>
    div{
        font-size: 0;
    }
    .header{
      padding: 0.12rem 0.19rem;
    }
    .box{
        display: flex;
        justify-content: space-between;
        margin-bottom: 0.1rem;
    }
    .tops{
        margin-bottom: 0.12rem;
        width:100%;
        overflow: hidden;
    }
    h2{
       font-size:0.168rem;
       line-height: 0.38rem;
       font-family: sans-serif;
       font-weight: 100;
    }
    a{
       font-size:0.14rem;
       color: #42BD56;
       line-height: 0.38rem;
       text-decoration: none;
       font-family: sans-serif;
   }
   .tops img{
       width: 1.28rem;
       height: 1.80rem;
   }
   .tops .imgs{
       width: 100%;
       height: 2.64rem;
       overflow-x: auto;
       white-space: nowrap;
       display: flex;
   }
   .tops  .imglist{
       width: 1.28rem;
       height: 100%;
       margin-right: 0.05rem;
       text-align: center;
   }
   .star{
       margin-top: 0.1rem;
       display: flex;
       justify-content: space-between;
       padding-left: 0.1rem;
   }
</style>