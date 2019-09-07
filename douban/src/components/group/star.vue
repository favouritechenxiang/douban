<template>
    <div>
        <!-- 计算属性调用方法不加() -->
        <van-rate v-model="num" allow-half void-icon="star" void-color="#eee"/><span>{{stars}}</span>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: null
        };
    },
    props:{
        stars:{
            type:Number,
            required:true
        }
    },
    computed:{
        num() {
            return this.value = this.stars/2;
        }
    }
}
</script>

<style scoped>
    span{
        display: inline-block;
        font-size: 0.14rem;
        line-height: 0.24rem;
        margin-left: 0.2rem;
    }
</style>


<style>
    .van-icon{
        width: 0.12rem;
        line-height: 0.24rem;
        font-size: 15px;
    }
</style>