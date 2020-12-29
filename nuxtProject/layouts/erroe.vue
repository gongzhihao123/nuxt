<template>
  <div class="error">
    <h1 v-if="error.statusCode">
      {{ error.message }}
    </h1>
    <h1 v-else>
      应用发送错误
    </h1>
    <button @click="$router.replace('/index')">
      跳转首页
    </button>
  </div>
</template>
<script>
export default {
  // 接受错误参数 error：{ statusCode， message }
  // eslint-disable-next-line vue/require-prop-types
  props: ['error']
}
</script>
