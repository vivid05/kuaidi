<template>
    <div id="app-container">
        <mt-header  fixed :title="title">
            <mt-button @click="back" icon="back" v-if="flag" slot="left"></mt-button>
        </mt-header>

        <transition>
            <router-view @getStatus="getStatus" :login_flag="login_flag"></router-view>
        </transition>
        <div id="footer" v-if="footer_flag">
            <mt-tabbar fixed>
                <router-link to="/index" tag="a">
                    <mt-tab-item  class="tabbar" id="订单">
                        <img class="img" slot="icon" src="../images/2.png"/>
                        <span>首页</span>
                    </mt-tab-item>
                </router-link>
                <router-link to="/Cinema" tag="a">
                    <mt-tab-item  class="tabbar" id="订单">
                        <img class="img" slot="icon" src="../images/1.png"  >
                        <span>订单</span>
                    </mt-tab-item>
                </router-link >
                <router-link :to='login' tag="a">
                    <mt-tab-item  class="tabbar" id="我的">
                        <img class="img" slot="icon" src="../images/3.png" >
                        <span>我的</span>
                    </mt-tab-item>
                </router-link>
            </mt-tabbar>
        </div>

    </div>

</template>

<script>
    //import { Header } from 'mint-ui';
    export default {
        name: "app",
        data:function () {
            return {login_flag:'no',flag:false,
                title:'校园管家',footer_flag:true}
        },
        methods:{
            getStatus(msg){
                this.login_flag=msg;
            },
            back(){
                history.back(-1);
            }
        },
        created() {
            console.log(this.$store.state.url)
            this.flag = this.$route.path == "/index" ? false : true;
        },
        computed:{
            login(){
                return this.$store.state.url
            }
        },
        watch: {
            "$route.path": function(newVal) {
                if (newVal === "/index") {
                    this.title = '校园管家';
                    this.flag = false;
                    this.footer_flag=true;
                } else if(newVal==='/Order'){
                    this.title = '拿快递';
                    this.flag=true;
                    this.footer_flag=true;
                }else if(newVal=='/snack'){
                    this.flag=true;
                    this.footer_flag=false;
                }
            },   
        }
    }
</script>

<style scoped>
    #footer{
        display: table-cell;
        text-overflow: ellipsis;
        z-index: 99;
    }
    a{
        text-decoration: none;
    }
    .img{
        width: 30px;
        height: 30px;
    }
    #app-container{
        padding-top: 40px;
        padding-bottom: 50px;
        overflow-x: hidden;
    }
    .tabbar{
        padding-left: 75px;
    }
    *{
        margin: 0;
        padding: 0;
    }
    .v-enter {
        opacity: 0;
        transform: translateX(100%);
    }

    .v-leave-to {
        opacity: 0;
        transform: translateX(-100%);
        position: absolute;
    }

    .v-enter-active,
    .v-leave-active {
        transition: all 0.3s ease;
    }
    .active span{
        color: red;
    }
</style>