<template>
    <div id="register">
        <div class="content">
            <h1>欢迎加入豆瓣</h1>
            <form action="#">
                <div>
                    <input type="text" autocapitalize="off" autocorrect="off" placeholder="手机号 / 邮箱">
                </div>
                <div>
                    <input type="password" autocorrect="off" placeholder="密码（最少6位）">
                </div>
                <div>
                    <input type="text" autocapitalize="off" autocorrect="off" placeholder="昵称">
                </div>
                <div>
                    <button id="next">下一步</button>
                </div>
                <p>
                    <span>点击「下一步」代表你已阅读并同意</span><a href="https://accounts.douban.com/app/agreement">用户使用协议</a>
                </p>
            </form>
        </div>
        <a href="javascript: void(0);">下载豆瓣App</a>
    </div>
</template>
<script>

</script>
<style scoped>
#register {
    padding-top: 2.4rem;
}

#register > a {
    display: block;
    text-align: center;
    font-size: 1.5rem;
    color: #42bd56;
}

h1 {
    font-size: 4rem;
    text-align: center;
    font-weight: 100;
    color: #42bd56;
    margin-bottom: 2.1rem;
}

.content {
    padding: 2rem 1.67rem;
}

.content div {
    height: 3.84rem;
    border: 1px solid #d7d7d7;
}

.content div:nth-last-of-type(2),
.content div:nth-last-of-type(3) {
    margin-top: -1px;
}

.content div:first-of-type {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
}

.content div:nth-of-type(3) {
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
}

.content div:last-of-type {
    border: 0 none;
    margin-top: .85rem;
}

.content input {
    width: 100%;
    height: 100%;
    font-size: 1.5rem;
    padding-left: .8rem;
}

::-webkit-input-placeholder {
    color: #CFCCCC;
}

:-moz-placeholder {
    color: #CFCCCC;
}

::-moz-placeholder {
    color: #CFCCCC;
}

:-ms-input-placeholder {
    color: #CFCCCC;
}

.content button {
    width: 100%;
    height: 3.8rem;
    background-color: #42bd56;
    font-size: 1.6rem;
    color: #fff;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
}

.content p {
    margin-top: 1.17rem;
    margin-bottom: 1.17em;
    color: #ccc;
    font-size: 1.4rem;
    text-align: center;
}

.content p a {
    color: #ccc;
    text-decoration: underline;
}
</style>