<template>
<!--当前用户{{$store.state.loginInfo}}-->
    <div class="stamp" v-show="stamp" style="height: 14vw;background-color: salmon;line-height: 14vw;text-align: center;z-index: 2" >
        查询条件
    </div>
    <div class="container">

        <div>
            <p style="height: 20px;line-height: 20px;text-align: center">天气很好</p>
            <p style="height: 20px;line-height: 20px;text-align: center">天气很好</p>
            <p style="height: 20px;line-height: 20px;text-align: center">天气很好</p>
            <p style="height: 20px;line-height: 20px;text-align: center">天气很好</p>
            <p style="height: 20px;line-height: 20px;text-align: center">天气很好</p>
            <div  v-show="!stamp" style="height: 14vw;background-color: salmon;line-height: 14vw;text-align: center">
                查询条件
            </div>
            <ul>
                <template v-for="(item,index) in count">
                    <li>{{item}}</li>
                </template>
            </ul>
            <div class="pullup-tips">
                <div v-if="!isPullUpLoad">
                    <span>Pull up and load more</span>
                </div>
                <div v-else>
                    <span >Loading...</span>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import BScroll from '@better-scroll/core';
    import Pullup from '@better-scroll/pull-up';
    BScroll.use(Pullup)
    export default {
        name: "mine",
        data(){
            return{
                loginInfo:{},
                count:40,
                bs:null,
                isPullUpLoad:false,
                stamp:false
            }
        },
        created() {
            this.loginInfo=JSON.parse(sessionStorage.getItem("loginInfo"));
            console.log("mine created .....");

        },
        unmounted() {
            console.log("mine unounted .....");
        },
        mounted() {
            this.bs = new BScroll(".container", {
                // ...... 详见配置项
                pullUpLoad: true
            });
            this.bs.on('scrollEnd', (position) => {

                if (position.y<=-100){
                    this.stamp=true;
                }else{
                    this.stamp=false;
                }
                console.log(position.x,position.y,this.stamp);
            });
            //监听往上推事件
            this.bs.on('pullingUp', this.pullingUpHandler);
        },
        methods:{
            pullingUpHandler() {
                this.isPullUpLoad = true;
                setTimeout(()=>{
                    this.count+=5;

                    setTimeout(()=>{
                        //上一次往上推结束了
                        this.bs.finishPullUp();

                        //告诉BetterScroll重新计算高度
                        this.bs.refresh();
                        this.isPullUpLoad = false
                    },200);

                },1000);
                // await this.requestData()



            },
        },
    }
</script>

<style scoped>
.container{
    width: 100%;
    height: 100%;
    background-color: skyblue;
}
li{
    height: 40px;
    line-height: 40px;
    text-align: center;
}
.pullup-tips{
    padding: 20px;
    text-align: center;
    color: #999;
}
.stamp{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
}

</style>