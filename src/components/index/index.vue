<template>
    <div id="app">
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in images" :key="item.id"><img :src="item.path" alt=""></mt-swipe-item>
        </mt-swipe>
        <div class="mui-content">
            <ul class="mui-table-view mui-grid-view mui-grid-9">
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a @click="order">
                    <span class="mui-icon mui-icon-home"></span>
                    <div class="mui-media-body">下单</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a @click="snack">
                    <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
                    <div class="mui-media-body">Email</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-chatbubble"></span>
                    <div class="mui-media-body">Chat</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-location"></span>
                    <div class="mui-media-body">location</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-search"></span>
                    <div class="mui-media-body">Search</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-phone"></span>
                    <div class="mui-media-body">Phone</div></a></li>
            </ul>
        </div>
    </div>
</template>

<script>
    //import {Toast} from 'mint-ui'
    export default {
        name: "index",
        data:function () {
            return {images:[]}
        },
        methods:{
          showImages(){
              this.$axios.get('http://127.0.0.1:5000/slider', {
                  params: {}
              })
                  .then((response)=> {
                      this.images=response.data;
                  })
                  .catch(function (error) {
                      console.log(error);
                  });
          },
            order(){
              // if(this.login_flag=='no'){
              //     return this.$toast('请先登录！');
              // }
              // location.href='#/Order';
                if(localStorage.getItem('name')==null){
                    this.$toast('请先登录！');
                }else {
                    //this.$route='Order';
                    location.href='#/Order';
                }
            },
            snack(){
                if(localStorage.getItem('name')==null){
                    this.$toast('请先登录！');
                }else {
                    //this.$route='Order';
                    location.href='#/snack';
                }
            }
        },
        created() {
            this.showImages();
        },
        props:["login_flag"]

    }
</script>

<style scoped>
    .mint-swipe{
   height: 180px;
    }
    img{
        height: 180px;
        width: 100%;
    }
    .mui-content>.mui-table-view:first-child{
        margin-top: 0;
    }
    .mui-grid-view.mui-grid-9{
        background-color: #fff;
    }
</style>