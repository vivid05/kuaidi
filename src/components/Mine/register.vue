<template>
    <div>
        <div class="mui-content">
            <form class="mui-input-group">
                <div class="mui-input-row">
                    <label>姓名</label>
                    <input id='account' type="text" v-model="name" class="mui-input-clear mui-input" placeholder="请输入快递信息中的姓名">
                </div>
                <div class="mui-input-row">
                    <label>密码</label>
                    <input id='password' type="password" v-model="password" class="mui-input-clear mui-input" placeholder="请输入密码">
                </div>
                <div class="mui-input-row">
                    <label>确认</label>
                    <input id='password_confirm' type="password" v-model="checkPass" class="mui-input-clear mui-input" placeholder="请确认密码">
                </div>
            </form>
            <div class="mui-content-padded">
                <button id='reg' @click="register" class="mui-btn mui-btn-block mui-btn-primary">注册</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "register",
        data:function () {
            return {name:'',password:'',checkPass:''}
        },
        methods:{
            register(){
                if(this.password!=this.checkPass){
                    return this.$toast('密码不一致！');
                }else {
                    this.$axios.post('http://127.0.0.1:5000/register',
                        {name:this.name,password:this.password})
                        .then((response)=>{
                            this.$toast('注册成功！');
                            location.href='#/login';
                        })
                }
            }
        }
    }
</script>

<style scoped>
    .mui-content{
        padding-top: 40px;
    }
</style>