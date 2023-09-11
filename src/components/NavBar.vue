<template>
    <div class="navBar">
        <div class="left">
            <slot name="left"></slot>
        </div>
        <div class="center">
            <slot name="center"></slot>
        </div>
        <div class="right">
            <slot name="right"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "NavBar"
    }
</script>

<style scoped>
    .navBar {
        height: 12vw;
        background-color: #0097FF;
        display: flex;
        color: white;
        font-size: 4.5vw;
        justify-content: space-between;
        align-items: center;
    }
</style>