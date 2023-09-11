<template>
        <div class="icon"></div>
</template>

<script>
    export default {
        name: "LocationIcon"
    }
</script>

<style scoped>
     .icon{
        width: 100%;
        height: 100%;
        background-color: #fff;
        position: relative;
        border-radius: 50% 50% 50% 0;
        transform: rotate(-45deg);
    }
     .icon::after{
        content: '';
        width: 40%;
        height: 40%;
        margin: 30% 0 0 29%;
        background-color: #0097FF;
        position: absolute;
        border-radius: 50%;
    }
</style>