<template>
    <div id="log">
        <div class="mui-content">
            <form id='login-form' class="mui-input-group">
                <div class="mui-input-row">
                    <label>账号</label>
                    <input id='account' type="text" v-model="name" class="mui-input-clear mui-input" placeholder="请输入账号">
                </div>
                <div class="mui-input-row">
                    <label>密码</label>
                    <input id='password' type="password" v-model="password" class="mui-input-clear mui-input" placeholder="请输入密码">
                </div>
            </form>

            <div class="mui-content-padded">
                <button @click='login' type="button" class="mui-btn mui-btn-block mui-btn-primary">登录</button>
                <div class="link-area"><router-link to="/Mine/register">注册账号</router-link> <span class="spliter">|</span> <a id='forgetPassword'>忘记密码</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "login",
        data:function () {
            return {name:'',password:'',data:''}
        },
        methods:{
            login(){
                this.$axios.post('http://127.0.0.1:5000/login', {
                    name:this.name,password:this.password
                })
                    .then((response)=> {
                        this.data=response.data;
                        if(this.data.length!=0){
                            this.$toast('登录成功！');
                            localStorage.setItem("name",this.name);
                            localStorage.setItem("password",this.password);
                            this.$store.commit('changeLogin','/Mine/index')
                            this.$emit('getStatus','ok');
                            this.setting=true;
                            this.log=false;
                            location.href='#/Mine/index';
                            return 0;
                        }
                        this.$toast('账号或密码错误');
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }
        },

    }
</script>

<style scoped>
    .link-area{
        text-align: center;
    }
    .mui-content{
        padding-top: 20px;
    }
</style>