import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "@/views/HomeView";
import Mine from "@/views/Mine";
import BookListView from "@/views/book/List";
import ShopListView from "@/views/shop/List";
import ShopDetailView from "@/views/shop/Detail";
import store from '../store';
import LoginView from "@/views/LoginView";
const routes = [
  {
    path:"/",
    redirect:"/home"
  },
  {
    path:"/home",
    name:"homeView",
    component:HomeView
  },
  {
    path:"/mine",
    name:"Mine",
    component:Mine
  }
  ,
  {
    path:"/login",
    name:"loginView",
    component:LoginView
  },
  {
    path:"/shop/List",
    name:"shopListView",
    component:ShopListView
  },
  {
    path:"/shop/:id",
    name:"shopDetailView",
    component:ShopDetailView
  },
  {
    path:"/book/List",
    name:"bookListView",
    component:BookListView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to,form,next)=>{


  let toPath = to.path;
  let shopTabBarPath=["/home","/shop/list","/book/list","/mine"]

  let result = shopTabBarPath.filter((item)=>{
    return item==toPath;
  });

  if(result.length>0){
    //需要显示tabBar ?
    store.commit("changeTabBarShowStatus",true);
  }else{
    //不需要显示tabBar
    store.commit("changeTabBarShowStatus",false);
  }

  //公用资源放行
  let publicResources=["/home","/shop/list","/shop/[0-9]{1,}"];

  let sign=false;
  for(let publicResource of publicResources){
    sign = new RegExp("^"+publicResource+"$").test(toPath);
    if(sign){
      break;
    }
  }

  if(sign){
    //访问的是公共i资源
    next();
  }else{
    //是否已经登录
    let loginInfo = sessionStorage.getItem("loginInfo");
    if(loginInfo){
      //已经登录了
      //如果又来登录,需要放行
      if(toPath=="/login"){
        next({"path":"/home"});
      }else{
        next();
      }
    }else{
      //如果是来登录,需要放行
      if(toPath=="/login"){
        next();
      }else{
        //去到登录界面
        next({"path":"/login"});
      }
    }
  }
  //有些资源需要登录才能访问【除了公共的资源其他都要登录才能访问】
})
export default router
