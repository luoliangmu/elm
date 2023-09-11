<template>

    <div class="wrapper">
        <router-view v-slot="{ Component }">

            <!--是否保持活着-->
            <keep-alive exclude="homeView">
                <component :is="Component" />
            </keep-alive>
        </router-view>
    </div>
    <tab-bar v-show="$store.state.showTabBar" :tabList="tabList"></tab-bar>
</template>

<script>
import TabBar from "@/components/TabBar";
export default {
  name:"App",
    components:{
      TabBar
    },
    data(){
      return{
          tabList:[{
              item:"首页",
              icon:"home",
              path:"/home"
          },{
              item:"发现",
              icon:"compass",
              path:"/shop/list"
          },{
              item:"订单",
              icon:"file-text",
              path:"/book/list"
          },{
              item:"我的",
              icon:"user",
              path:"/mine"
          }]
      }
    },
    created() {
      let loginInfo=sessionStorage.getItem("loginInfo");
      if (loginInfo){
          this.$store.commit("initLoginInfo",JSON.parse(loginInfo));
      }
    },
    methods:{

    }
}

</script>

<style>
    html,body,#app{
        width: 100%;
        height: 100%;
    }
  .wrapper{
      width: 100%;
      height: 100%;
      padding-bottom: 14vw;
  }
</style>
