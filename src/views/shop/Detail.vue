<template>
    <nav-bar>
        <template v-slot:center>
            商家详情
        </template>
    </nav-bar>
    <div class="logo-box">
        <img src="../../assets/img/sj01.png" height="130" width="130"/>
    </div>
    <div class="info">
        <h1>万家饺子（软件园E18店）</h1>
        <p>&#165;15起送 &#165;3配送</p>
        <p>各种饺子炒菜</p>
    </div>
    <ul class="list-food">
        <li class="item">
            <div class="left">
                <img src="../../assets/img/sp01.png"/>
            </div>
            <div class="right">
                <h3>纯肉鲜肉（水饺）</h3>
                <p>新鲜猪肉</p>
                <p>&#165;15</p>
            </div>
            <div class="food-right">
                <div class="left-icon">
                    <font-awesome-icon :icon="['fas','minus-circle']"/>
                </div>
                <p><span>3</span></p>
                <div class="right-icon">
                    <font-awesome-icon :icon="['fas','plus-circle']"/>
                </div>
            </div>
        </li>
        <li class="item">
            <div class="left">
                <img src="../../assets/img/sp01.png"/>
            </div>
            <div class="right">
                <h3>纯肉鲜肉（水饺）</h3>
                <p>新鲜猪肉</p>
                <p>&#165;15</p>
            </div>
            <div class="food-right">
                <div class="left-icon">
                    <font-awesome-icon :icon="['fas','minus-circle']"/>
                </div>
                <p><span>3</span></p>
                <div class="right-icon">
                    <font-awesome-icon :icon="['fas','plus-circle']"/>
                </div>
            </div>
        </li>
    </ul>
    <div class="shopping-car">
        <div class="left">
            <div class="car-info">
                <font-awesome-icon :icon="['fas','shopping-cart']"/>
                <div class="count">3</div>
            </div>
            <div class="price-info">
                <p>&#165;12.88</p>
                <p style="color: #999999;font-size: 2.8vw">另需配送费3元</p>
            </div>
        </div>
        <div class="right">
            去结算
        </div>
    </div>
</template>

<script>
    import NavBar from "@/components/NavBar";
    export default {
        name: "Detail",
        components: {NavBar}
    }
</script>

<style scoped>
    .logo-box{
        width: 40vw;
        height: 40vw;
        margin: 4vw auto;
    }
    .logo-box img{
        width: 100%;
        height: 100%;
    }

    .info{
        text-align: center;
    }
    .info h1{
        font-size: 6vw;
    }
    .info p{
        font-size: 2vw;
        color: #999999;
    }
    .list-food{
        padding: 2.5vw;
    }
    .list-food .item{
        display: flex;
        align-items: center;
    }
    .list-food .item .left{
        flex: 0 0 20vw;
        height: 20vw;
    }
    .list-food .item .left img{
        width: 100%;
        height: 100%;
    }
    .list-food .item .right{
        flex: 1;
    }
    .list-food .item .right h3{
        font-size: 3.8vw;
        color: #555;
    }
    .list-food .item .right p{
        font-size: 3vw;
        color: #888;
    }
    .list-food .item .food-right{
        display: flex;
    }
    .list-food .item .food-right p{
        margin: 0 2vw;
    }
    .list-food .item .food-right .left-icon{
        color: #999999;
    }
    .list-food .item .food-right .right-icon{
        color: #0097FF;
    }
    .shopping-car{
        height: 16vw;
        display: flex;
        align-items: center;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
    }
    .shopping-car .left{
        flex: 2;
        background-color: #505050;
        display: flex;
        align-items: center;
    }
    .shopping-car .left .car-info{
        width: 16vw;
        height: 16vw;
        box-sizing: border-box;
        background-color: #0097FF;
        font-size: 7vw;
        border-radius: 50%;
        border: 1.4vw solid #444;
        position: relative;
        text-align: center;
        line-height: 16vw;
        color: white;
        bottom: 2vw;
        left: 2vw;
    }
    .shopping-car .left .car-info .count{
        position: absolute;
        width: 5vw;
        height: 5vw;
        font-size: 3.6vw;
        background-color: red;
        color: #fff;
        border-radius: 50%;
        top: -1vw;
        right: -1vw;
        text-align: center;
        line-height: 5vw;
    }
    .shopping-car .left .price-info{
        margin-left: 2vw;
        color: white;
    }
    .shopping-car .right{
        flex: 1;
        background-color: #38ca73;
        height: 16vw;
        text-align: center;
        line-height: 16vw;
        color: white;
        font-size: 6vw;
    }
</style>