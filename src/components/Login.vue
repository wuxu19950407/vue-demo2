<template>
  <div>
    <!-- <div class="round">
      <div class="biankuang">
    <h1 class="login">LOGO</h1>-->
    <h4 class="login_chn">登录</h4>
    <div class="phone">
      <img src="../assets/user.png" class="user" alt="用户">
      <input class="ipt1" type="number" placeholder="请输入手机号……">
    </div>
    <div class="phone">
      <img src="../assets/key.png" class="user" alt="密码">
      <input class="ipt1" type="password" placeholder="请输入密码……">
    </div>
    <div class="phone yzm">
      <img src="../assets/image.png" class="user" alt="验证码">
      <input class="ipt1" placeholder="请输入验证码……">
      <img src="../assets/logo.png" class="verification" alt="验证码">
    </div>
    <div class="verificationErr">! 验证码不正确</div>
    <el-button type="danger" round class="login_btn">登录</el-button>
    <!-- </div>
    </div>-->
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>


/* input框去掉type数字上下箭头 */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}


/* login样式 */
.login {
  margin: 80px 0 60px 0;
}
/* 电话号码外边框 */
.phone {
  border: 1px solid gainsboro;
  padding: 5px;
  width: 350px;
  height: 35px;
  margin: 20px auto;
  display: flex;
}
/* 验证码下端去margin */
.yzm {
  margin-bottom: 3px;
}
/* 图标大小 */
.user {
  width: 35px;
  height: 35px;
}
/* 电话、密码、验证码input框样式 */
.ipt1 {
  height: 40px;
  width: 130px;
  border: none;
  outline: none;
  margin-left: 20px;
}
/* 验证码样式 */
.verification {
  width: 140px;
  height: 35px;
}
/* 验证码错误 */
.verificationErr {
  font-size: 12px;
  color: red;
  text-align: left;
}
/* 登陆按钮 */
.el-button.is-round {
  border-radius: 30px;
  padding: 20px 97px;
  font-size: 20px;
  background-color: rgb(253, 151, 151);
  margin-top: 10px;
  border: none;
  font-weight: 550;
  letter-spacing: 2px;
}
</style>
