<template>
  <div id="login">
    <div class="login_title p_r">
      <router-link :to="{name: 'HomeView'}" class="p_a">取消</router-link>
      <h1>登录豆瓣</h1>
    </div>
    <div class="login_container">
      <form action="#">
        <div>
          <input type="text" id="username" placeholder="邮箱 / 手机号 / 用户名">
        </div>
        <div>
          <input type="password" id="pwd" placeholder="密码">
        </div>
        <div>
          <input type="button" value="登录">
        </div>
      </form>
      <p class="moreLogin">使用其他方式登录 & 找回密码</p>
      <div class="wrapper">
        <a href="javascript: vold(0);">注册豆瓣账号</a>
        <a href="javascript: vold(0);">下载豆瓣App</a>
      </div>
    </div>
  </div>
</template>
<script>

</script>
<style scoped>
.login_title {
  height: 46px;
  border-bottom: 1px solid #eee;
  text-align: center;
  line-height: 46px;
}

.login_title a {
  left: 0;
  top: 0;
  width: 6rem;
  height: 100%;
  font-size: 1.5rem;
  color: #42bd56;
}

.login_title h1 {
  font-size: 1.8rem;
  font-weight: 700;
}

.login_container {
  padding: 1.25rem;
}

form div {
  height: 3.48rem;
  border: 1px solid #d7d7d7;
}

form div:first-of-type {
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

form div:nth-of-type(2) {
  margin-top: -1px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}

form div input {
  width: 100%;
  height: 100%;
  padding-left: .67rem;
  padding-right: .67rem;
  font-size: 1.5rem;
}

::-webkit-input-placeholder {
  color: #cfcccc;
}

::-moz-placeholder {
  color: #cfcccc;
}

:-moz-placeholder {
  color: #cfcccc;
}

:-ms-input-placeholder {
  color: #cfcccc;
}

form div:last-of-type {
  border: 0 none;
  background-color: #17AA52;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  margin-top: .85rem;
}

form div:last-of-type input {
  color: #fff;
  font-size: 1.6rem;
}

.moreLogin {
  margin-top: 1.25rem;
  margin-bottom: 3.34rem;
  font-size: 1.5rem;
  color: #aaa;
  text-align: center;
}

.wrapper {
  text-align: center;
  font-size: 1.5rem;
}

.wrapper a {
  color: #42bd56;
}

.wrapper a:first-of-type {
  margin-right: 1.67rem;
}
</style>
