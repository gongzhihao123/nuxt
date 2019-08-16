<template>
  <div
    v-if="loading"
    class="nuxt-loading"
  >
    <img
      src="~/assets/images/loading.gif"
      alt=""
    >
  </div>
</template>

<script>
export default {
  name: 'Loading',
  props: {
    loading: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style scoped lang="less">
.nuxt-loading {
  position: absolute;
  background: #ffffff;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2000;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 500px;
  }
}
</style>
