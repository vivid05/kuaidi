<template>
    <div id="body">
        <div class="mui-content">
            <div class="mui-content-padded" style="margin: 5px;">
                <form class="mui-input-group">
                    <div class="mui-input-row">
                        <label>姓名</label>
                        <input type="text" readonly v-model="name" class="mui-input-clear" placeholder="请输入姓名">
                    </div>
                    <div class="mui-input-row">
                        <label>快递单号</label>
                        <input type="text" v-model="num" class="mui-input-clear" placeholder="请输入尾数即可">
                    </div>
                    <div class="mui-input-row">
                        <label>手机号</label>
                        <input type="text" v-model="mobile" class="mui-input-clear" placeholder="请输入手机号">
                    </div>
                    <div class="mui-input-row">
                        <label>配送地址</label>
                        <input type="text" v-model="address" class="mui-input-clear" placeholder="请输入地址">
                    </div>
                    <div class="mui-input-row">
                    <label>快递公司</label>
                    <input type="text" readonly v-model="value" class="mui-input-clear">
                    </div>
                    <mt-picker :slots="slots" @change="onValuesChange"></mt-picker>
                    <br/>
                    <br/>
                    <div class="mui-button-row">
                        <button type="button" class="mui-btn mui-btn-primary" @click="post">确认</button>&nbsp;&nbsp;
                        <button type="button" class="mui-btn mui-btn-danger" onclick="return false;">取消</button>
                    </div>
                </form>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "order",
        data:function () {
            return {slots:[
                    {
                        flex: 1,
                        values: ['顺丰', '圆通', '中通', '申通', '韵达', '邮政'],
                        className: 'slot1',
                        textAlign: 'center'
                    }],name:localStorage.getItem('name'),num:'',mobile:'',address:'',value:''
                }
        },
        components:{},
        methods:{
            onValuesChange(picker, values) {
                if (values[0] > values[1]) {
                    picker.setSlotValue(1, values[0]);
                }
                this.value=values[0];
            },
            post(){
                if(this.name==''||this.mobile==''||this.num==''||this.address==''){
                    return this.$toast("请填写完整！");
                }
                    this.$axios.post('http://127.0.0.1:5000/addOrder',{name:this.name,value:this.value,num:this.num,address:this.address})
                        .then((response=>{
                            //console.log(response);
                        }))
                        .catch(function (error) {
                            console.log(error);
                        });
                    this.$toast({
                        message:'下单成功！'
                    });
                    this.mobile=this.address=this.num='';
                //location.href='#/Cinema';
            }
        },
    }
</script>

<style scoped>
    #body{
        padding-top: 10px;
    }
    .mui-input-row{
        height: 60px;
        line-height: 60px;
    }
    .mui-input-row label{
        height: 60px;
        text-align: center;
        line-height: 40px;
    }
    .mui-input-row input{
        height: 60px;
    }
    .mui-input-row span{
        top: 21px;
    }
    .icon {
        width: 1em;
        height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }
</style>