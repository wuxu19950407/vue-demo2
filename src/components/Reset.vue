<template>
  <div>
    <h4 class="login_chn">重置密码</h4>
    <div class="phone">
      <img src="../assets/key.png" class="user" alt="密码">
      <input class="ipt1" type="number" placeholder="设置登录密码">
    </div>
    <div class="phone">
      <img src="../assets/key.png" class="user" alt="密码">
      <input class="ipt1" type="password" placeholder="确认登陆密码">
    </div>
    <div class="verificationErr">! 密码不一致</div>
    <el-button type="danger" round class="login_btn">保存并登录</el-button>
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
/* 两次密码不一致错误 */
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
