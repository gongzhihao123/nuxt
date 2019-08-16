<template>
  <section class="container">
    <h1 class="title">
      nav
    </h1>
    <div>
      <el-calendar v-model="value"></el-calendar>
    </div>
    <div></div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      value: new Date()
    }
  }
}
</script>

<style scoped>
</style>
