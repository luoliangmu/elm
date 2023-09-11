<template>

    <button @click="buy(1)">购买</button>
</template>

<script>
    import debounce from "@/utils/DebounceUtil";
    export default {
        name: "List",
        data(){
            return {
                debounce:null
            }
        },
        methods:{
            sendAjax(id){
                console.log("发送ajax请求,购买id为"+id+"的产品............");
            },
            buy(id){
                this.debounce(this.sendAjax,id);
            }
        },

        created() {
            this.debounce = debounce(1000);
        }
    }
</script>

<style scoped>

</style>