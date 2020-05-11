<template>
    <div>
        <!-- 声明式导航 高亮显示 -->
        <ul>
            <!-- 嵌套路由不要 ./ -->
            <router-link to="/film/nowplaying" tag="li" activeClass="active">已完成plan</router-link>
            <router-link to="/film/comingsoon" tag="li" activeClass="active">正编写plan</router-link>
        </ul>
    </div>
</template>
<style lang="scss" scoped>
    .active{
        color: red;
        border-bottom: 5px solid tan;
    }
    ul{
        list-style-type: none;
        display: flex;
        li{
            flex:1;
            height: 40px;
            line-height: 40px;
            text-align: center;
        }
    }
</style>
