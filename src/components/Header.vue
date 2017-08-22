<template>
    <header class="header">
        <div class="fixedBox p_f">
            <div id="headerNav" class="headerNav flex">
                <h1>
                    <router-link :to="{name: 'HomeView'}">豆瓣</router-link>
                </h1>
                <div class="navList">
                    <ul class="clearfix">
                        <li>
                            <router-link :to="{name: 'MovieView'}">电影</router-link>
                        </li>
                        <li>
                            <router-link :to="{name: 'BookView'}">图书</router-link>
                        </li>
                        <li>
                            <a href="javascript: void(0);">广播</a>
                        </li>
                        <li>
                            <a href="javascript: void(0);">小组</a>
                        </li>
                    </ul>
                    <span class="talionNav_switch" @click="showTalion"></span>
                </div>
            </div>
        </div>
        <div id="talionNav" v-show="talion">
            <div class="searchTitle">
                <a href="javascript: void(0);" @click="hideTalion">关闭</a>
                <input type="text" id="seachInp" @focus="hideIcon">
            </div>
            <div class="talionNav_list">
                <ul class="clearfix">
                    <li>
                        <a href="/pages/movie">
                            <strong>电影</strong>
                            <span>影院热映</span>
                        </a>
                        <a href="javascript: void(0);">
                            <strong>同城</strong>
                            <span>周末活动</span>
                        </a>
                        <a href="javascript: void(0);">
                            <strong>阅读</strong>
                            <span>电子书</span>
                        </a>
                        <a href="javascript: void(0);">
                            <strong>东西</strong>
                            <span>心爱之物</span>
                        </a>
                    </li>
                    <li>
                        <a href="javascript: void(0);">
                            <strong>电视</strong>
                            <span>正在热播</span>
                        </a>
                        <a href="javascript: void(0);">
                            <strong>小组</strong>
                            <span>志趣相投</span>
                        </a>
                        <a href="javascript: void(0);">
                            <strong>游戏</strong>
                            <span>虚拟世界</span>
                        </a>
                        <a href="javascript: void(0);">
                            <strong>FM</strong>
                            <span>红心歌单</span>
                        </a>
                    </li>
                    <li>
                        <a href="/pages/book">
                            <strong>图书</strong>
                            <span>畅销排行</span>
                        </a>
                        <a href="javascript: void(0);">
                            <strong>音乐</strong>
                            <span>新碟榜</span>
                        </a>
                        <a href="javascript: void(0);">
                            <strong>应用</strong>
                            <span>玩手机</span>
                        </a>
                        <a href="javascript: void(0);">
                            <strong>市集</strong>
                            <span>购买原创</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="bottomNav">
                <div class="bottomNav_top clearfix">
                    <a href="/register">注册账号</a>
                    <a href="/login">登录豆瓣</a>
                </div>
                <div class="bottomNav_bottom clearfix">
                    <a href="javascript: void(0);">使用桌面版</a>
                    <a href="javascript: void(0);">使用豆瓣App</a>
                </div>
            </div>
        </div>
    </header>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    computed: mapGetters([
        'talion'
    ])
    ,
    methods: {
        ...mapActions([
            'showTalion',
            'hideTalion'
        ]),
        hideIcon() {
            document.querySelector("#seachInp").style.backgroundSize = 0;
        }
    }
}
</script>
<style scoped>
.header a {
    display: block;
}

.headerNav {
    height: 4rem;
    align-items: center;
    padding: 0 1.5rem;
    -webkit-box-pack: justify;
    -moz-box-pack: justify;
    -ms-box-pack: justify;
    box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -moz-box-align: center;
    -ms-box-align: center;
    box-align: center;
    border-bottom: .1rem solid #f3f3f3;
    background-color: #fff;
    white-space: nowrap;
}

.headerNav h1 {
    width: 46px;
    height: 1.84rem;
    text-indent: -99999px;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAAAsCAYAAADozd+ZAAAAAXNSR0IArs4c6QAACBZJREFUaAXtW91vFUUUP2c/bktpbe8FxA9QEhUSEF9AasQICS+YFkTRJuILvpD44oPx0Qf+AF/1gSfiA0ZMKLE0IQaTkqAmKioPGiXBkFhbFb29bW9L2/0Yz2zv3jszO7s7t9LQS52kmTlnfnNm97dnz5yZvUW4x4o7XGLiLXl9ZRRl4/ZZ6HTae3YBYm/0B9DLMHw36Kuc1tlQ5+UY3dyODqgzuBJ0uhu4I9d1FmwoFLfbNvZaVtgLgHsYgx2IaEv2mfU+nO/8Go5Uf5L0TQhOE9h7Bzq05mEb23qJ0F5gsIcI3o0InYs3aEUVyYlCug7XLXziDcHTcAhmEwADRUsTbvJ2qhj+lrjWmtE6Nxpi6336xnYXSx94UD6u787WtjTh2be2PL0M2GVg7LT6IHWz6TCL748O/b9Oy4A/M3HAP1QZ0XYaKJ1lW4gMJl8pkJgD1SO53rlQDCjWNxxzDtrpumeWeu0NQ0u1cM+Pw3npFotdayS5SaGlY3jkgcOlSVr37ovvO/ZWLoseS8n5lN9X7o5x5jWboyxGINnp4GOXOneCcPEizS9qeZAieWkzENk849ie1h/ra7hYbKLG2wQuNgb4EeFcXsrcLR9SGGO/NchIb5niVAuIjBNeLy5aa2PB1KaIa3nCEZB7eG4xxWkMSRscFmJtg8Q9vPm5W55wOt8w83BDnEo4A5QyEmY1CKftv9HDFq+x9QlnzOymDXEq4bT1lwin/q4YwzAwe9jC3E48OK82WcDybKT1/5eFGsE2ItwUl7xGVo2Wx7iDYZ1wU5siruU93PcXjLzMFBfzGteUiUzHbV7TAVY9tTS1KeJannCoVo083BgnskvtkPJ3RVXP+Y1tCtdoHFKUSVeEqAtFOh2/WLdYmoRh/UeBrJtBRoSTm8eFDq96eFs3j04XYWtz83brezi/i+UsFkyK5i0GEeGirpn26iP8pOxk5LHSJzmVPAyhIuqYJe46xR6z9uojvASuQk2gyJIYokw4pYklCdCk0NIxXE1VdTFUxcCHUN+a17jKJBxZWAbh0ybtLjfwcapdo7lp3Cr08O5Cjehahb4syxJ1/i1qKARFhIu6ZtrGHq57gs1MtGKw8147tNuNy2FsoSFoWoF9S3JLnoefBIf+Mh+UxlKkWn0e3uYKZ9ucA+UDg8rURPmWqKKQgrCzY8levvoIB6t+nh3RjfwDQ0Z5A+YojZmREHbbekluQlh1hDtheL/Cz4QiJ0QEJnm5YydsJMakKYxjeJqBu6l3hktjtAl8MOsapLWHwdUQ2HvCxpGyPJTI1NniGBqzJe6jI9qHJLtxh1KrGJ7ZJAjXpDu/kJ2tii3w5r1t8PL0dVWfK5/r2uq2udymWq7T3NtUZbbMrlIM7s/GSL2nLMY28jAcF2Sy98Z6qebn3ki/tqoVDHGTtJDGHQZ1bkhhLBzS2XEK7iGdPk+XNi5tnmx77Nvs/kYv7Ser3mz5DHnnxoYWDD1cPnNnCJtFG820cwmn4zIt4YBsSYSnjkubJ+NuWIDk4WaF4vAZGIAqMlRiOJPybJ01eiGkI2CSN+lwJrpESFEH+d9VvnB2FyfoxzDCl+sItRcudBehfzJ30anb5HiAvXW51qCPrBN8HlWfJwfe/FXL5r/LMSnhKY4i73ykEVBIZvhn3mjKUkbFMXSCuNnrl38GrcZrblMNz1yXSzhQgo8X4CJhX+MD4kL5qGOjdZD2xR/Furya4/k4FUc3c5HPo+pz5aOz4x7MLnJxtnODu7bwlziGwsi0319unF/zTgY7xeNW+iqvW09EM0AHWL+JMZsewDKGFJqaDnC0YYWOKpsKK2n4NPvSXecITofzpAqhJ/G7pDvXtY7CwQOizp8NfhRlXdu35J9i0Nu+DugH+zpsni4/hpOFgIUX6Qwh4YH0pA+SZyY8Vjsp4SK80sntcvuKummRiNypDqL5JMJt16Ef2zcKvQFjMDBVbmhSWjOVUbpOT+pt63lCkg0FI8KjOM3gimqTx3VnV89zql4nc5xmHeCv+JWm1gGdca5j+IzaRQvlDVFHD+V5Uab2l4qsFwcgoFD4q9hpO9YyEh7NRJFcVxD6deqELhWXYjdhIEeB8GwCweB7SYe4T5Tp6DXhRGK/2CYPl/YcFNdzf14njo/bZh5OaH+B/tFCU+iXvEZxPA2XZlczVbpqsPsx2gA9mgBYQYPwoa71lJLUNy8c61lwOTEmTRGCHOs1ISxtqKi/E/9UtVWXEomTZLWjXeew2UcUXZrFbTuOdVSdg+L3jH9j6odYb6N9mEJa/VyW+kehr1Lvj3FpNaWT1xbToUUEhaun0rBZerMFL8vCSuiz8JXEZTB2Cd6C+VhPZB+J27ym3H/IHS7e1L4ZNWDsSJ63sCMA75oFwrcLxMeBsh463vinBjeqjEOKkbW7AHI+7dlHnieFCn4ZtKFprDk8nPCMSigUv8/TQjsiqFKbjl0YgP7qz/SQpA/KdsFJLNSpRmodLU84WHhSvUkKF3OB5w3Gehfs1ynLcGOZ0sE//NuTn4cYjsS6rJr+4eRV6qdDQ/hKxJHNA6Js0m75kIIQvgPMOkFsHKO0L9qM0Nb7Y+lVRzwukYEhP1cJgkEYocdQpXFjlIWM0zhej9Gn3nGGbAxDNu57wRj406SjEuIl2nG+ENuiN4tnaG/HskktrgMm+JWLoZ2f21E6Rhd4AkL/Te/w1Df1ix3s2WIXYL/FrP10eLbfC9mLcKhyrd5v2oiOlp3PeCjib0ewACPwUuWm6XCO+xem/pR3YB/U6QAAAABJRU5ErkJggg==) no-repeat;
    -webkit-background-size: cover;
    background-size: cover;
}

.fixedBox {
    top: 0;
    left: 0;
    right: 0;
    /* 左右两边都要设置为0，否则宽度将没有100% */
    z-index: 99;
}

.navList * {
    display: inline-block;
}

.navList li {
    font-size: 1.5rem;
    margin-right: 1.3rem;
}

.navList li:first-of-type a {
    color: #2384e8;
}

.navList li:nth-of-type(2) a {
    color: #9f7860;
}

.navList li:nth-of-type(3) a {
    color: #e4a813;
}

.navList li:last-of-type a {
    color: #2ab8cc;
}

.talionNav_switch {
    width: 2rem;
    height: 1.5rem;
    background: url(data:image/png;base64,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) no-repeat;
    -webkit-background-size: cover;
    background-size: cover;
    vertical-align: middle;
}

#talionNav {
    width: 100%;
    height: 100%;
    background-color: #fff;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 99;
}

.searchTitle {
    height: 5.17rem;
    line-height: 5.17rem;
    border-bottom: .1rem solid #f3f3f3;
    padding: 0 1.67rem;
}

.searchTitle a {
    display: inline-block;
    font-size: 1.6rem;
    color: #42BD56;
}

.searchTitle input {
    width: 82%;
    height: 2.6rem;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAABGdBTUEAALGPC/xhBQAABUlJREFUaAXdWT1oHEcU1unHR8ih0lZEKsWVkSrLkFaVQIYkJ93JBBUp0hm7sdMJbOlAnR0ICDdJk4AL6++wi8PChXAXMG6CMSmSTpZlFy7EmWBLQvm+5c3ydrTam9nblXQeWM2bN/N+vntvZ2afuro+sVZoB0+9Xv9qd3f3W+i4WCgUBg8ODgZB82HbAm8LvC3Qz/v6+h6Wy+V/g5kc/3gDWltbO7u/v38Njpbh17Cnby8Ast7T07M4OTn51lPWabkzoKWlpRKcuQkgP0FzyUn70Yua0HUHuu5OT083j17mP+MEaHl5eRLG70H9OX8TiRJvAOxqtVpdS1zlMZkICCAKKysrt6DvNukYvR/B24BTj9C/RCpt7e3t8Z3p6u3tHURq8n26ANlv0I/hOYMn0iB7AMZ8pVKpCR2Z9x3EORnoQIp9BuIPPJUYpdvg1Uql0v2JiYmdmPlDrEaj0d9sNmcwwR9owF4AMMsA/gNS8D97zmccC4jRQJotQVEEDIx+AG+hv7//5/Hx8fc+hsza9fX1z3d2dm5gPAs7RcNnT1CI1JV2IhULCGBuw9icNgZ6GylVnpqa+tPipxqurq5+jZSsQzgSLYCZwzs1n0ophA4B4gYA/gqjZJTCyF/d3d2XAWbT8LLoAepLgGpA14jRJ9GppN0oQqepkFszun/w6N2MkbmUNRjaYxNQz0DqSL3B+HyaLb2bSk3Dr3MTdAgG4w+SZplGxthjzx+KNmhL8c+JL4rlRoaAeANAmvHQ1G0hq3dGK7VpsbGg+fSFPmmeCx0CQi5fh4C+AWxzN3NRksUascXjwLQSfLpmBq59CAi/yHeWUC3t1mzpcRqKrZpeDJ94X/RqASDemiE1rCQ/8tBU42MhxSZvH6YNi29m3LIPAMkngF684XoD0ELt0mJzQ+uJ8U1PH6JNyl3UM9hheDc7kRZjO+JbK6cCQFBiPsrM+peGOIE+YjvGt0SXAkB4+SKAcC4EN+ZEyZwmbdu2b63MmpSLADKfAK2E85iPsR3xrZVNk3L8JglbsViMXInCiWMgYmx7+WJS7rX2FQfaF3p8nHSMba/ag4lQ5J2BUq8wZwk4xjYvqs7NRCgCCNIXnDVkv9C2/crHRAAIAs+1EHYW1gBOpNm2sW0/9XEkAMQioCU0xhqAxct9KDbHtCEAeqLHregAkFQ0X6jFZ6SgoVj5k2IzrAwBzCZqDH/7WDYpxwIFv+91u8WChmbkSYstVoTChvT7NRw4EiEgnNCLkGkquQGpzihWfqTY0p/hrCrRJ68WAmKtGVG6Y0nPsjpj8TIfio1ZS/FvqCm8s3gthyEgrkSI76IL932MizgX6ixktNSUcoEUSeq0pVTwGKmpsTMZAcQqC6J0FY++Cg0AVCMPUAKGZSydanT+xzTRoWAEEBlSD5snrdoIQD2DA5mlH3VRJ2yENTmx9whgHivbXmTsxQ/hZ5H+Afqq1obI5VoKFlv76GcA6oG27UrHAqIwi/UA8LsNShRnXqy3HE4N6khANCCRyvXfKQKEn/yX8fTImF0qUImAjPIc/+HF3YwbwGNkxBXQrDS1BerQpmBA6F42ivNIwTnw9eGrl/nQPDR/wTNiNgB5Z2bAY2RMI7j7AtbwEnunCGkN7fzTGD/IJtKY15lFAIg9NNuNlDcgDS7h3/rUyy9NHtKvAOQpnieuF812QLUFSIPLmk4L6tQC4g+UBtSpBpQG1KkH5AuqIwD5gOoYQK6gOgqQCyinmwIVnZaWcKMIvgw6DhB/WBsUDu2HQ0ND33Ou41KOTpsm51SVYEZHR3cN/5Pq/wfEdlFyq1lD2AAAAABJRU5ErkJggg==) no-repeat 50% #f3f3f3;
    margin-left: .85rem;
    vertical-align: baseline;
    -webkit-background-size: 1.67rem;
    background-size: 1.67rem;
    /* 当输入框聚焦时，隐藏中间的图标：将background-size的值改为0 */
    /*-webkit-background-size: 0;
    background-size: 0;*/
}

.talionNav_list {
    padding-top: 2.1rem;
}

.talionNav_list li {
    width: 33.3%;
    float: left;
}

.talionNav_list li strong {
    display: block;
    font-size: 2.4rem;
}

.talionNav_list li a {
    text-align: center;
    margin-bottom: 2.5rem;
}

.talionNav_list li:first-of-type a:first-of-type strong {
    color: #2384e8;
}

.talionNav_list li:first-of-type a:nth-of-type(2) strong {
    color: #E6467E;
}

.talionNav_list li:first-of-type a:nth-of-type(3) strong {
    color: #A5846E;
}

.talionNav_list li:first-of-type a:last-of-type strong {
    color: #E16463;
}

.talionNav_list li:nth-of-type(2) a:first-of-type strong {
    color: #8E6ADB;
}

.talionNav_list li:nth-of-type(2) a:nth-of-type(2) strong {
    color: #2AB8D3;
}

.talionNav_list li:nth-of-type(2) a:nth-of-type(3) strong {
    color: #5774C5;
}

.talionNav_list li:nth-of-type(2) a:last-of-type strong {
    color: #40CFA9;
}

.talionNav_list li:last-of-type a:first-of-type strong {
    color: #9F7860;
}

.talionNav_list li:last-of-type a:nth-of-type(2) strong {
    color: #F48F2E;
}

.talionNav_list li:last-of-type a:nth-of-type(3) strong {
    color: #596CDD;
}

.talionNav_list li:last-of-type a:last-of-type strong {
    color: #59C16B;
}

.talionNav_list li a span {
    color: #999;
}

.bottomNav>div {
    padding-top: 1rem;
    padding-bottom: 1rem;
}

.bottomNav>div>a {
    width: 50%;
    float: left;
    font-size: 1.5rem;
    color: #42BD56;
    text-align: center;
}

.bottomNav>div:first-child {
    border-top: .1rem solid #E5E5E5;
    border-bottom: .1rem solid #E5E5E5;
}

.bottomNav>div:last-child {
    border-bottom: .1rem solid #E5E5E5;
}

.bottomNav>div>a:first-of-type {
    border-right: .1rem solid #E5E5E5;
}
</style>
