<template>
    <!--头-->
    <nav-bar>
        <template v-slot:left>
            <div class="city">
                <div style="height: 3.6vw;width: 3.6vw;margin: 1vw 1vw 0 3vw;">
                    <location-icon ></location-icon>
                </div>
                <div>
                    <p style="margin: 0 1vw">广州东软大厦</p>
                </div>
                <div>
                    <font-awesome-icon :icon="['fas','caret-down']"/>
                </div>
            </div>

        </template>
    </nav-bar>
    <!--搜索-->
    <div class="box-search">
        <div class="search">
                <font-awesome-icon :icon="['fas','search']"/>
                <p>搜索饿了么商家、商品</p>
        </div>
    </div>
    <div class="foodtype">
    <ul >
        <li onclick="location.href='businessList.html'">
            <img src="../assets/img/dcfl01.png">
            <p>美食</p>
        </li>
        <li onclick="location.href='businessList.html'">
            <img src="../assets/img/dcfl02.png">
            <p>早餐</p>
        </li>
        <li onclick="location.href='businessList.html'">
            <img src="../assets/img/dcfl03.png">
            <p>跑腿代购</p>
        </li>
        <li onclick="location.href='businessList.html'">
            <img src="../assets/img/dcfl04.png">
            <p>汉堡披萨</p>
        </li>
        <li onclick="location.href='businessList.html'">
            <img src="../assets/img/dcfl05.png">
            <p>甜品饮品</p>
        </li>
        <li onclick="location.href='businessList.html'">
            <img src="../assets/img/dcfl06.png">
            <p>速食简餐</p>
        </li>
        <li onclick="location.href='businessList.html'">
            <img src="../assets/img/dcfl07.png">
            <p>地方小吃</p>
        </li>
        <li onclick="location.href='businessList.html'">
            <img src="../assets/img/dcfl08.png">
            <p>米粉面馆</p>
        </li>
        <li onclick="location.href='businessList.html'">
            <img src="../assets/img/dcfl09.png">
            <p>包子粥铺</p>
        </li>
        <li onclick="location.href='businessList.html'">
            <img src="../assets/img/dcfl10.png">
            <p>炸鸡炸串</p>
        </li>
    </ul>
    </div>
    <div class="banner">
        <h3>品质套餐</h3>
        <p>搭配齐全吃得好</p>
        <a>立即抢购 &gt;</a>
    </div>
    <!--超级会员-->
    <div class="vip">
        <div class="left">
            <img src="./../assets/img/super_member.png">
            <p><span>超级会员·</span>月享受超级权益</p>
        </div>
        <div class="right">
            立即开通 &gt;
        </div>
    </div>
    <!--推荐-->
    <div class="recommend">
        <div class="left"></div>
        <div class="title">推荐商家</div>
        <div class="right"></div>
    </div>
    <!-- 推荐方式部分 -->
    <ul class="search-filter">
        <li>综合排序<font-awesome-icon :icon="['fas','caret-down']"/></li>
        <li>距离最近</li>
        <li>销量最高</li>
        <li>筛选<font-awesome-icon :icon="['fas','filter']"/></li>
    </ul>
    <!--商品列表-->
    <ul class="list-shop">
        <li class="item" @click="handleShopDetail(1)">
            <div class="logo-box">
                <img src="../assets/img/sj01.png" height="130" width="130"/>
            </div>
            <div class="info">
                <div class="title">
                    <h1>哈哈哈哈</h1>
                    <p>·</p>
                </div>
                <div class="sale-info">
                    <div class="star">
                        <font-awesome-icon :icon="['fas','star']"/>
                        <font-awesome-icon :icon="['fas','star']"/>
                        <font-awesome-icon :icon="['fas','star']"/>
                        <font-awesome-icon :icon="['fas','star']"/>
                        <font-awesome-icon :icon="['fas','star']"/>
                        <span>4.9 月售345单</span>
                    </div>
                    <p>蜂鸟专送</p>
                </div>
                <div class="delivery">
                    <p>&#165;15起送 | &#165;3配送</p>
                    <p>3.22km | 30分钟</p>
                </div>
                <div class="tag">
                    <span>各种饺子</span>
                </div>
                <div class="activity">
                    <div class="left">
                        <div class="icon">新</div>
                        <p>饿了么新用户首单立减9元</p>
                    </div>
                    <div class="right">
                        <p>2个活动</p>
                        <font-awesome-icon :icon="['fas','caret-down']"/>
                    </div>
                </div>
                <div class="coupon">
                        <div class="icon">特</div>
                        <p>特价商品5元起</p>
                </div>
            </div>
        </li>
    </ul>
</template>

<script>
import NavBar from "@/components/NavBar";
import LocationIcon from "@/components/LocationIcon";
export default {
  name: "homeView",
  data(){
    return {

    }
  },
  components:{
      LocationIcon,
      NavBar
  },
  methods:{
      handleShopDetail(shopId){
          this.$router.push({"path":"/shop/"+shopId})
      }
  },
    created() {
        console.log("home created .....");

    },
    unmounted() {
        console.log("home unounted .....");
    },
}
</script>

<style scoped>
    .city{
        display: flex;
        flex-direction: row;

    }
    .box-search{
        height: 12vw;
        background-color: #0097FF;
    }
    .box-search .search{
        width: 90%;
        height: 9vw;
        font-family: '宋体';
        font-size: 3.4vw;
        color: lightgray;
        border-radius: 2px;
        user-select: none;
        background-color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 5vw;
    }
    .box-search .search p {
        margin-left: 1vw;
    }
    .foodtype{
        margin-top: 2vw;
    }
    .foodtype ul{
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }
    .foodtype ul li{
        width: 20%;
        text-align: center;
        font-size: 3.2vw;
        color: #666;
    }
    .foodtype li img{
        height: 10vw;
        width: 12vw;
    }
    .banner{
        width: 95%;
        height: 30vw;
        box-sizing: border-box;
        background-image: url("../assets/img/index_banner.png");
        background-size: cover;
        margin: 5px auto;
        padding: 2vw 6vw;
    }
    .banner h3{
        font-size: 4.2vw;
    }
    .banner p{
        font-size: 3.4vw;
        color: #666;
        margin: 3vw 0 4vw 0;
    }
    .banner a{
        font-size: 3vw;
        color: darkorange;
        font-weight:400 ;
    }
    /*vip*/
    .vip{
        width: 87%;
        margin: 0 auto;
        height: 12vw;
        background-color: #ffefc9;
        border-radius: 2px;
        color: #666666;
        padding: 0 4vw;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 4vw;
    }
    .vip .left{
        display: flex;
        align-items: center;
        font-size: 4vw;
    }
    .vip .left img{
        width: 6vw;
        height: 6vw;
    }
    .vip .left p span{
        font-weight: 700;
    }
    .vip .right{
        font-size: 3vw;
    }
    /*推荐*/
    .recommend{
        width: 100%;
        height: 14vw;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .recommend .left, .recommend .right{
        height: 0.2vw;
        background-color: #666666;
        width: 6vw;
    }
    .recommend .left{
        margin-right: 4vw;
    }
    .recommend .right{
        margin-left: 4vw;
    }
    .recommend .title{
        font-size: 4vw;
    }
    /*推荐方式*/
    .search-filter{
        height: 5vw;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .search-filter li{
        font-size: 3.5vw;
        color: #555;
    }
    /*列表*/
    .list-shop{

    }
    .list-shop .item{
        padding: 2.5vw;
        border-bottom: 1px solid #dddddd;
        display: flex;
        flex-direction: row;
    }
    .list-shop .item .logo-box{
        flex: 0 0 18vw;
        height: 18vw;
    }
    .list-shop .item .logo-box img{
        width: 100%;
        height: 100%;
    }
    .list-shop .item .info{
        flex: 1;
    }
    .list-shop .item .info .title{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .list-shop .item .info .title h1{
        color: #333;
        font-size: 4vw;
    }
    .list-shop .item .info .title p{
        width: 2vw;
        background-color: #716f6f;
        font-size: 4vw;
        color: white;
        text-align: center;
    }
    .list-shop .item .info .sale-info{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .list-shop .item .info .sale-info .star{
        font-size: 3.1vw;
        color: #333;
    }
    .list-shop .item .info .sale-info>p{
        background-color: #0097FF;
        font-size: 2.4vw;
        color: white;
    }
    .list-shop .item .info .delivery{
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 3.1vw;
        color: #666;
    }
    .list-shop .item .info .tag span{
        border: 1px solid #dddddd;
        font-size: 2.8vw;
        color: #666;
        padding: 2px;
        border-radius: 1px;
    }
    .list-shop .item .info .activity{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .list-shop .item .info .activity .left{
        display: flex;
        align-items: center;
        color: #666;
        font-size: 3vw;
    }
    .list-shop .item .info .activity .icon{
        width: 4vw;
        height: 4vw;
        background-color: #70bc46;
        text-align: center;
        line-height: 4vw;
        color: #fff;
    }
    .list-shop .item .info .activity .right{
        display: flex;
        align-items: center;
        font-size: 2.5vw;
        color: #999;
    }
    .list-shop .item .info .activity .right p{
        margin-right: 2px;
    }
    .list-shop .item .info .coupon{
        font-size: 3vw;
        color: #666;
        display: flex;
        align-items: center;
    }
    .list-shop .item .info .coupon .icon{
        width: 4vw;
        height: 4vw;
        background-color: #f1884f;
        text-align: center;
        line-height: 4vw;
        color: #fff;
    }
</style>