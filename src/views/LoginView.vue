<template>
    <nav-bar>
        <template v-slot:center>
            用户登录
        </template>
    </nav-bar>
    <div class="login-box">
        <div>
            <input type="text" v-model="loginInfo.loginName" placeholder="请输入账号">
        </div>
        <div>
            <input type="password" v-model="loginInfo.password" placeholder="请输入密码">
        </div>
        <div class="login" @click="login">
            登录
        </div>
        <div class="register">
            注册
        </div>
    </div>
</template>

<script>
    import NavBar from "@/components/NavBar";
    export default {
        name: "LoginView",
        data(){
            return{
                loginInfo:{
                    loginName:"root",
                    password:"123"
                }
            }
        },
        components: {NavBar},
        methods:{
            login(){
                if(this.loginInfo.loginName.length>=3 && this.loginInfo.password.length>=3){
                    sessionStorage.setItem("loginInfo",JSON.stringify(this.loginInfo));
                    this.$store.commit("initLoginInfo",this.loginInfo);

                    this.$router.replace({"path":"/home"});
                }else{
                    alert("账号或密码错误");
                }

            }
        }
    }
</script>

<style scoped>
    .login-box{
        width: 95%;
        margin: 4vw auto;
    }
    .login-box div{
        width: 100%;
        margin-top: 4vw;
    }

    .login-box input{
        height: 6vw;
        font-size: 4vw;
        width: 100%;
        border: none;
        outline: none;
        box-sizing: border-box;
    }

    .login-box .login,.register{
        height: 10vw;
        width: 100%;
        font-size: 3.8vw;
        font-weight: 700;
        color: #fff;
        border-radius: 2px;
        line-height: 10vw;
        text-align: center;
    }
    .login-box .login{
        background-color: #38ca73;
    }
    .login-box .register{
        background-color: #666;
    }

</style>