<template>
  <!-- 测试输出 -->
    <div>
    <div class="indexContent" v-for="(item,index) in xin_body" :key="index">
        <div class="indexContentTitle">
          <div>{{ item.foo }}{{ item.bar }}</div>
        </div>
    </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'Login',
  data () {
    return  {
      xin_body:[],

      };
  },
  created() { 
    //
  },
  mounted () {
  //测试能否获取测试信息
  this.getTestInfo()
  },
  methods:{
    getTestInfo(){
    axios.get('http://47.99.67.112:8080/app/mock/16/example/1548918811183',{})
    .then((res) =>{
                console.log(res)
                this.xin_body = res.data.array;
              })
          .catch((error) =>{
                console.log("错误信息："+ error)       //请求失败返回的数据
              })
    }
  }
  
    // axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
    //   .then((response) =>{          //这里使用了ES6的语法
    //    this.info = response.data.bpi
    //             console.log(response)       //请求成功返回的数据
    //         })
    //   .catch((error) =>{
    //             console.log(error)       //请求失败返回的数据
    //         })
    //   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
