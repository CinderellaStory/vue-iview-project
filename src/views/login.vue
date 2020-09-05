<template>
  <div class="background-image">
    <div class="background-context">
      <p class="title">加盟商平台</p>
      <div class="background-context-next">
        <div class="background-login">
          <div class="background-user">
            <i-input v-model="userName" placeholder="请输入登录名" clearable style="width: 280px" />
          </div>
          <div class="background-pws">
            <i-input v-model="pws" type="password" password clearable placeholder="请输入密码" style="width: 280px" />
          </div>
          <!-- <p class="forgetPassword"><span @click="forgetPassword">找回密码?</span></p> -->
          <div class="background-submit" @click="loginClick">登录</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { queryLogin } from './../common/login'
export default {
  data() {
    return {
      userName:"",
      pws:""
    }
  },
  created() {

  },
  methods: {
    loginClick(){
      if (!this.userName) {
        this.$Message.error('登录名不能为空');
        return
      }
      if (!this.pws) {
        this.$Message.error('密码不能为空')
        return
      }
      const params = {
        'accountName': this.userName,
        'accountPassword': this.pws,
        'sysCode': 'qc'
      }
      queryLogin(params)
        .then((response) => {
          var status = response.data.status
          if (status === 200) {
            localStorage.setItem('franchiseeData', JSON.stringify(response.data.result))
            localStorage.setItem('franchiseeToken', JSON.stringify(response.data.result.token))
            this.$router.push('/managementStaffing')
          } else {
            this.$Message.error(response.data.result)
          }
        })
        .catch((error) => {
            this.$Message.error(error.data.result)
        })
    },
  }
}
</script>
<style scoped>
.title{
	font-size: 24px;
	padding: 40px 0;
	font-weight: bold;
	text-align: center;
}
.forgetPassword{
	text-align:right;
	padding-top:20px;
}
.forgetPassword span{
  cursor: pointer;
  color:#EA5421;
  font-size:14px;
  font-weight: bold;
}

	* {
		margin: 0;
		padding: 0;
	}
	.background-loginImage{
		top: 0px;
		width: 100%;
		height: 100%;

	}
	.background-image {
		top: 0px;
		width: 100%;
		height: 100%;
		background: #f4e8ff;
		background-repeat:no-repeat;
		position: fixed;/*头部悬浮不移动*/
	}
	.background-context{
		margin-left: auto;
		margin-right:8%;
		margin-top: 14%;
		background: #FFFFFF;
		width: 350px;
		height: 450px;
	}
	.background-context-next{
		width: 100%;
		height: 70%;
	}
	.background-login{
		width: 80%;
		height: 60%;
		margin-left: auto;
		margin-right: auto;
	}
	.background-user{
		width: 100%;
		height: 20%;
		background: #FFFFFF;
	}
	.background-pws{
		width: 100%;
		height: 20%;
		background: #FFFFFF;
		margin-top: 10%;

	}
	.background-submit{
		margin-top: 50px;
		line-height: 40px;
		width: 100%;
		height: 20%;
		text-align: center;
		font-size: 18px;
		color: #FFFFFF;
		background: #EA5421;
    cursor: pointer;
	}
	.text-user{
		width: 100%;
		height: 100%;
	}
	.text-pwd{
		width: 100%;
		height: 100%;
	}
</style>