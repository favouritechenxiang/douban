<template>
    <div class="header">
        <div class="top">
            <div class="box">
                <h2>最受关注图书 | 虚构类</h2>
                <router-link to="/index">更多</router-link>
            </div>
            <div class="imgs">
                <div class="imglist" v-for="(v,i) in arra" :key="i">
                    <img :src="v.image">
                    <p>{{v.title}}</p>
                    <div class="star">
                        <span>星星</span><span>{{v.rating.average}}</span>
                    </div>
                </div>   
            </div>
        </div>


        <div class="top">
            <div class="box">
                <h2>最受关注图书 | 非虚构类</h2>
                <router-link to="/dianying">更多</router-link>
            </div>
            <div class="imgs">
                <div class="imglist" v-for="(v,i) in arrb" :key="i">
                    <img :src="v.image">
                    <p>{{v.title}}</p>
                    <div class="star">
                        <span>星星</span><span>{{v.rating.average}}</span>
                    </div>
                </div>   
            </div>
        </div>

        <div class="top">
            <div class="box">
                <h2>豆瓣纸书</h2>
                <router-link to="/dianying">更多</router-link>
            </div>

             <div class="detail">
                <img src="../../../static/img/book_zw.jpg">
                <div class="change">
                    <h4>造物</h4>
                    <span>改变世界的玩物图点改变世界的玩物图点改变世界的玩物图点</span>
                </div>              
            </div>  

            <div class="imgs">
                <div class="imglist" v-for="(v,i) in arrc" :key="i">
                    <img :src="v.image">
                    <p>{{v.title}}</p>
                    <div class="star">
                        <span>星星</span><span>{{v.rating.average}}</span>
                    </div>
                </div>   
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            arr:[],
            arra:[],
            arrb:[],
            arrc:[]
        }
    },
    created(){
        this.axios({
            method:"get",
            url:"/books"
        }).then((ok)=>{
            this.arr = ok.data;
            for(let i=0;i<this.arr.length;i++){
                if(i<9){
                    this.arra.push(this.arr[i])
                }else if(i>=9 && i<18){
                    this.arrb.push(this.arr[i])
                }else{
                    this.arrc.push(this.arr[i])
                }
            }
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
    .top{
        margin-bottom: 0.12rem;
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
   .imgs img{
       width: 1.28rem;
       height: 1.80rem;
   }
   .imgs{
       width: 100%;
       height: 2.64rem;
       overflow: auto;
       white-space: nowrap;
       display: flex;
   }
   .imglist{
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
       padding-right: 0.05rem;
   }
   span{
       font-size: 0.16rem;
   }
   p{
       font-size:0.14rem;
       text-align: center;
       margin-top: 0.1rem;
       color: #111111;
       overflow: hidden;
   }
   .detail{
       margin-bottom: 0.2rem;
       display: flex;
   }
   .detail img{
       width: 1.28rem;
       flex-shrink: 0;
       height: 1.80rem; 
   }
   .detail h4{
       font-size: 0.18rem;
       font-weight: 100;
       margin-bottom: 0.1rem;
       color: #494949;
   }
   .detail span{
       font-size:0.12rem;
       color: #9b9b9b;
   }
   .change{
       margin-left: 0.2rem;
       margin-top: 0.3rem;
   }
</style>