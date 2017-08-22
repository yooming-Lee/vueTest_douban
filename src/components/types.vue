<template>
  <div id="movieTypes">
    <h2>分类浏览</h2>
    <div class="container">
      <ul class="clearfix">
        <li class="arrow_r" v-for="data in types">
          <a :href="baseUrl + data.url" v-html="data.title"></a>
        </li>
        <li v-if="movie"></li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: ['baseUrl', 'types', 'movie']
}
</script>
<style scoped>
h2 {
  padding-left: 1.5rem;
}

.container {
  padding: 1.5rem 0 2.5rem 1rem ;
}

.container ul {
  border-bottom: 1px solid #eee;
}

.container li {
  width: 50%;
  border-top: 1px solid #eee;
  border-right: 1px solid #eee;
  float: left;
  position: relative;
}

.container li:empty {
  height: 3.7rem;
}

.arrow_r::after {
  content: '';
  position: absolute;
  width: .85rem;
  height: .85rem;
  border-top: 1px solid #ccc;
  border-right: 1px solid #ccc;
  top: 50%;
  right: 1.5rem;
  -webkit-transform: rotate(45deg) translate(-.6rem);
  -moz-transform: rotate(45deg) translate(-.6rem);
  -ms-transform: rotate(45deg) translate(-.6rem);
  -o-transform: rotate(45deg) translate(-.6rem);
  transform: rotate(45deg) translate(-.6rem);
}

.container li a {
  display: block;
  font-size: 1.4rem;
  color: #42bd56;
  padding: 1rem;
  padding-right: 0;
}
</style>
