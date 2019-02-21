<template>
  <div class="hello">
    <h2 @click="click1">我是标题2</h2>

    <app-Test></app-Test>
    <h1>{{ msg }}</h1>
    <el-button  type="info" v-for="(item,index) in anniu" :key="index"  @click="log(item,index)" >{{item}}</el-button>
    <ul>
      <li>
        <a href="https://vuejs.org" target="_blank">Core Docs</a>
      </li>
      <li>
        <a href="https://forum.vuejs.org" target="_blank">Forum</a>
      </li>
      <li>
        <a href="https://chat.vuejs.org" target="_blank">Community Chat</a>
      </li>
      <li>
        <a href="https://twitter.com/vuejs" target="_blank">Twitter</a>
      </li>
      <br>
      <li>
        <a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a href="http://router.vuejs.org/" target="_blank">vue-router</a>
      </li>
      <li>
        <a href="http://vuex.vuejs.org/" target="_blank">vuex</a>
      </li>
      <li>
        <a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a>
      </li>
      <li>
        <a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a>
      </li>
    </ul>
  </div>
</template>

<script>
import Test from "./Test";
export default {
  components: {
    "app-Test": Test
  },
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      anniu: ["登录", "授权", "重置"]
    };
  },
  methods: {
    click1() {
      console.log(this.da);
      this.$router.push({
        path: "/Account"
      });
    },
    // 跳转登陆
    log(e,c) {
      console.log(e,c)
      if(e=='登录'){
        this.$router.push({
          path:'/Account'
        })
      }else if(e=='授权'){
        this.$router.push({
          path:'Account/Authorization'
        })
      }else{
        this.$router.push({
          path:'Account/Reset'
        })
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
