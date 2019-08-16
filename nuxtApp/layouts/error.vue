<template>
  <section class="container">
    <h1 v-if="error.statusCode === 404">
      页面不存在
    </h1>
    <h1 v-else>
      应用发生错误
    </h1>
    <nuxt-link to="/">首页</nuxt-link>
  </section>
</template>
<script>
export default {
  props: ['error'],
  layout: 'blog'
}
</script>

<style scoped>
.title
{
  margin-top: 15px;
  font-size: 5em;
}
.info
{
  font-weight: 300;
  color: #9aabb1;
  margin: 0;
}
.button
{
  margin-top: 50px;
}
</style>
