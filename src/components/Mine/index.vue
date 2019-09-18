<template>
    <div id="comtainner">
        <div id="setting" class="mui-page">
            <div class="mui-page-content">
                        <ul class="mui-table-view mui-table-view-chevron">
                            <li class="mui-table-view-cell mui-media">
                                <a class="mui-navigate-right" href="#account">
                                    <img class="mui-media-object mui-pull-left head-img" id="head-img" src="">
                                    <div class="mui-media-body">
                                        Hello MUI
                                        <p class='mui-ellipsis'>账号:hellomui</p>
                                    </div>
                                </a>
                            </li>
                        </ul>
                        <ul class="mui-table-view mui-table-view-chevron">
                            <li class="mui-table-view-cell">
                                <a href="#account" class="mui-navigate-right">账号与安全</a>
                            </li>
                        </ul>
                        <ul class="mui-table-view mui-table-view-chevron">
                            <li class="mui-table-view-cell">
                                <a href="#notifications" class="mui-navigate-right">新消息通知</a>
                            </li>
                            <li class="mui-table-view-cell">
                                <a href="#privacy" class="mui-navigate-right">隐私</a>
                            </li>
                            <li class="mui-table-view-cell">
                                <a href="#general" class="mui-navigate-right">通用</a>
                            </li>
                        </ul>
                        <ul class="mui-table-view mui-table-view-chevron">
                            <li class="mui-table-view-cell">
                                <a href="#about" class="mui-navigate-right">关于MUI <i class="mui-pull-right update">V3.1.0</i></a>
                            </li>
                        </ul>
                        <ul class="mui-table-view">
                            <li class="mui-table-view-cell" style="text-align: center;">
                                <a @click="loginOut">退出登录</a>
                            </li>
                        </ul>
            </div>
            <!--页面主内容区结束-->
        </div>
    </div>
</template>

<script>
    export default {
        name: "Mine",
        data:function () {
            return {}
        },
        methods:{
            loginOut(){
                this.$toast('用户退出登录！');
                this.$emit('getStatus','no');
                this.$store.commit('changeLogin','/Mine/login')
                localStorage.removeItem('name');
                localStorage.removeItem('password');
                location.href='#/Mine/login';
            }
        }
    }
</script>

<style scoped>
    .mui-scroll-wrapper{
        padding-top: 40px;
        padding-bottom: 41px;
        z-index: 0;
    }
</style>