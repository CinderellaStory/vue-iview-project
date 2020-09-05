<template>
  <div class="">
    <!-- 管理人员配置 -->
    <!-- <iframe id="other-iframe" :src="basetConfig.genexusUrl+'/ProblemManageKBdev/servlet/com.problemmanagekb.problemconfiglists'"/> -->
    <iframe id="other-iframe" src="http://192.168.20.139:8080/ProblemManageKBdev/servlet/com.problemmanagekb.orgmanageperson?59"/>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  data() {
    return {
      basetConfig: ''
    }
  },
  created() {
    this.basetConfig = Vue.prototype.baseConfig
  }
}
</script>

<style scoped>
  #other-iframe{
    width:100%;
    height:90vh;
    border: none;
    margin: 0px;
  }
</style>
