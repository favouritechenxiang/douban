<template>
    <div class="header">
        <div class="top">
            <h2>发现好电影</h2>
            <router-link to="/dianying">更多</router-link>
        </div>
        <div class="box">
            <div class="lis">
                <div v-for="(v,i) in arra" :key="i">
                    <a :href="v.href" :style="{color:v.color}">{{v.title}}</a>                    
                </div>
                
            </div>
            <div class="lis">
                <div v-for="(v,i) in arrb" :key="i"><a :href="v.href" :style="{color:v.color}">{{v.title}}</a></div>
            </div>
        </div> 
        <h2>分类浏览</h2>    
    </div>
</template>

<script>
export default {
    data(){
        return{
            arr:[],
            arra:[],
            arrb:[]
        }
    },
    created(){
        this.axios({
            method:"get",
            url:"/goodmovies"
        }).then((ok)=>{
            // console.log(ok.data);
            this.arr = ok.data;
            for(let i=0;i<this.arr.length;i++){
                if(i<4){
                    this.arra.push(this.arr[i]);
                }else if(i>4){
                    this.arrb.push(this.arr[i]);
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
    .top{
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
       line-height: 0.38rem;
       text-decoration: none;
       font-family: sans-serif;
   }

    .box{
       height: 1.64rem; 
       overflow-x: auto;
       white-space: nowrap;
   }
    li a{
       font-size:0.14rem;
       line-height: 0.38rem;
       text-decoration: none;
       font-family: sans-serif;
   }
   li h2{
       font-size:0.168rem;
       line-height: 0.38rem;
       font-family: sans-serif;
       font-weight: 100;
   }
   .lis{
       width:100%;      
       display: flex;
       margin: 0.1rem 0.2rem;;
   }
   .lis div{
       height: 0.6rem;
       padding: 0 0.28rem;
       text-align: center;
       border: 0.01rem solid rgb(255, 172, 45);
       border-radius: 0.04rem;
       margin: 0rem 0.1rem;
   }
   .lis a{
       text-decoration: none;
       font-size: 0.16rem;
       line-height: 0.6rem;
   }
   h2{
       font-size: 0.16rem;
       font-weight: 100;
   } 
</style>