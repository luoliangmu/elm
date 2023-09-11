<template>
<ul class="tab-bar">
    <template v-for="tab in tabList">
        <li @click="jump(tab.path)" :class="{'active':tab.path==$route.path}">
            <font-awesome-icon :icon="['fas',tab.icon]"/>
            <p>{{tab.item}}</p>
        </li>
    </template>
</ul>
</template>

<script>
    export default {
        name: "TabBar",
        props:{
            tabList:{
                type:Array,
                default:[]
            }
        },
        methods:{
            jump(path){
                this.$router.push({"path":path})
            }
        }
    }
</script>

<style scoped>
.tab-bar{
    height: 14vw;
    background: #fff;
    border-top: 1px solid #ddd;
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;

}
.tab-bar li{
    color: #999;
    font-size: 3vw;
    text-align: center;

}
.active{
    color: red!important;
}
</style>