<template>
    <div class="header">
        <el-header>
            <!-- header部分 -->
            <div class="collapse-btn" @click="collapseChage">
                <i class="el-icon-menu"></i>
            </div>
            <div class="logo">商城后台管理系统</div>

            <div class="header-right">
                <div class="user-avator"><img src="../assets/user.jpg"></div> 
                <div>
                    <el-dropdown>
                        <el-button type="primary">
                            {{name}}<i class="el-icon-arrow-down el-icon--right"></i>
                        </el-button>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>修改密码</el-dropdown-item>
                            <el-dropdown-item  @click.native="loginOut">退出登录</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </div>
        </el-header>
    </div>
</template>
<script>
export default {
    data() {
        return {
            collapse: false,
            name: 'admin'
        }
    },
    computed:{
    },
    methods:{
        collapseChage:function(){
            console.log("控制左侧导航伸缩")
        },
        // 用户名下拉菜单选择事件
        loginOut:function(){
            this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });

        }
    }
}
</script>
<style >
    .header{position: relative;
        box-sizing: border-box;
        width: 100%;
        height: 60px;
        font-size: 22px;
        color: #322d34;
        border-bottom: #dbdbdb 1px solid;
    }
    .collapse-btn{
        float: left;
        padding: 0 10px;
        cursor: pointer;
        line-height: 60px;
    }
    .header .logo{
        float: left;
        width:250px;
        line-height: 60px;
        text-align: left;
    }
    .header-right{
        float: right;
        display:flex;
        height: 60px;
        align-items: center;
    }
    .user-avator{
        margin-right: 5px;
        width: 40px; 
        height:auto;
    }
    .user-avator >img{  
        width:40px;
        height:40px;
        border-radius: 50%;
        border: #bdbdbb 1px solid;
    }
    .el-button--primary{
        background: #fff;
        color: #322d34;
        border: none;
    }
    .el-button--primary:focus, .el-button--primary:hover{
        background: #fff;
        color: #322d34;
        border: none;
    }
</style>

