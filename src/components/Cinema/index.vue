<template>
    <div>
        <div class="mui-content">
            <ul class="mui-table-view mui-table-view-striped mui-table-view-condensed">
                <li v-if="orderflag" class="mui-table-view-cell">
                    <div class="mui-table">
                        <div class="mui-table-cell mui-col-xs-10">
                            <h4 class="mui-ellipsis">暂无订单！</h4>
                        </div>
                    </div>
                </li>
                <!--<li v-for="item in orders" :key="item.guid" class="mui-table-view-cell">-->
                    <!--<div class="mui-table">-->
                        <!--<div class="mui-table-cell mui-col-xs-10">-->
                            <!--<h4 class="mui-ellipsis">{{item.num}}</h4>-->
                            <!--<p class="mui-h6 mui-ellipsis">{{item.sort}}</p>-->
                        <!--</div>-->
                        <!--<div class="mui-table-cell mui-col-xs-2 mui-text-right">-->
                            <!--<span class="mui-h5">{{item.time}}</span>-->
                        <!--</div>-->
                    <!--</div>-->
                <!--</li>-->
            </ul>
        </div>

        <van-panel v-for="(item,index) in orders" :key="item.guid" :title=item.num+item.sort :desc=item.time :status=item.status>
            <div v-if="item.status=='已完成'?false:true" slot="footer" style="text-align: right;position: relative;">
                <van-button size="small" type="danger">催单</van-button>
                <van-button size="small"  type="primary" @click="confirm(item.guid,index)">确认收货</van-button>
            </div>
        </van-panel>
    </div>
</template>

<script>
    export default {
        name: "Cinema",
        data(){
            return {orders:[],username: localStorage.getItem('name'),
                orderflag:false}
        },
        methods:{
            getOrders(){
               this.$axios.get('http://127.0.0.1:5000/orders',{params:{username:this.username}})
                   .then((response)=> {
                       this.orders=response.data;
                       if(this.orders.length==0){
                           this.orderflag=true;
                       }
                   })
                   .catch(function (error) {
                       console.log(error);
                   });
            },
            confirm(guid,index){
                this.$axios.post('http://127.0.0.1:5000/confirm',{guid:guid})
                    .then((response)=> {
                       this.$toast('确认收货成功！');
                       localStorage.setItem(guid,guid);
                       this.getOrders();
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }
        },
        created() {
            this.getOrders();
        },
    }
</script>

<style scoped>
    .van-cell__title span{
        font-size: 18px;
    }
    #statu{
        position: absolute;
        right: 215px;
        bottom: 10px;
    }
    #statu p{
        font-size: 14px;
        color: red;
    }
    .van-panel__header-value{
        color: green;
    }
</style>