<template>
  <div class="hello1">
    <div class="round">
      <div class="biankuang">
        <h1 class="login">LOGO</h1>
        <router-view></router-view> 
      </div>
    </div>
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
/* 背景色设置 */
.hello1 {
  position: fixed;
  width: 100%;
  height: 100%;
  background: linear-gradient(#687be5, #754ea6);
    overflow: hidden;
}

/* input框去掉type数字上下箭头 */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
/* 圆 */
.round {
  width: 650px;
  height: 650px;
  border-radius: 50%;
  margin: 50px auto 0;
  background-color: #fff;
  overflow: hidden;
  box-shadow: 0px 0px 30px rgb(54, 54, 54);

}
/* 边框 */
.biankuang {
  width: 360px;
  /* height: 170px; */
  margin: 50px auto;
}
/* login样式 */
.login {
  margin: 80px 0 60px 0;
}

</style>
