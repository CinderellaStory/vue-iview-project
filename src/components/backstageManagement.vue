<template>
   <div class="helloWorld">
     <Row class="menu">
      <Menu :theme="theme2" active-name="1-1" :open-names="['1']">
        <Submenu name="1">
          <template slot="title">
              <Icon type="ios-paper" />
              配置管理
          </template>
          <MenuItem name="1-1" to="/managementStaffing">管理人员配置</MenuItem>
          <MenuItem name="1-2" to="/basicInformation">基本信息配置</MenuItem>
        </Submenu>
      </Menu>
    </Row>
    <div class="content">
      <div class="headerTop">
        <Breadcrumb class="breadcrumbBox">
          <BreadcrumbItem  v-for="(item, index) in levelList" :key="index">{{item.name}}</BreadcrumbItem>
        </Breadcrumb>
        <div class="avatar">
          <p class="avatar">
            <span>您好，王颖诗</span>
            <img width="36" src="http://thirdwx.qlogo.cn/mmopen/vi_32/VpuZA6enbYCn4BzSrypjotJG19KEqx056t2vVTLzjaY7icuK5H5dDuwDAxE8PibkN03uQw5jXvZBERUaBhwABu7w/132" class="user-avatar">
          </p>
          <p class="quit" @click="quitChange">退出</p>
        </div>
      </div>
      <div class="container">
        <router-view></router-view>
      </div>
    </div>
   </div>
</template>
<script>
  export default {
    data () {
        return {
            theme2: 'dark',
            levelList:[]
        }
    },
    watch: {
      $route(to, from) {
        this.getBreadcrumb();
      }
    },
    mounted() {
      this.getBreadcrumb();
    },
    methods:{
      // 退出
      quitChange(){
        this.$router.push('/login')
      },
      getBreadcrumb() {
        let matched = this.$route.matched.filter(item => item.name)  // this.$route.matched 可以获取到一个数组，包含当前路由的所有嵌套路径片段的路由记录
        const first = matched[0]
        if (first && first.name !== '管理配置') {
          matched = [{path: '/backstageManagement', meta: { title: '管理配置' }}].concat(matched)
        }
        this.levelList = matched;
      }
    }
  }
</script>
<style scoped lang="less">
  .helloWorld{
    display: flex;
  }
  .menu .ivu-menu-dark{
    height: 100vh;
  }
  .headerTop{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 10px 20px;
    background: #fff;
  }
  .avatar{
    display: flex;
    align-items: center;
    span{
      padding-right: 15px;
    }
    img{
      border-radius: 50%;
    }
  }
  .quit{
    padding-left: 15px;
    cursor: pointer;
  }
  .content{
    width: 100%;
    background: #f0f2f5;
  }
  .breadcrumbBox{
    text-align: left;
  }
  .container{
    background: #fff;
    width: 98%;
    margin: 14px;
    height: 90vh;
  }
</style>