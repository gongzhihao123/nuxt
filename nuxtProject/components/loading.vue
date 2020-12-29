<template>
  <div v-if="loading" class="loading">
    Loading...
  </div>
</template>
<script>
export default {
  data () {
    return {
      loading: false
    }
  },
  methods: {
    start () {
      this.loading = true
    },
    finish () {
      this.loading = false
    }
  }
}
</script>
<style scoped>
body {
   background:#4ea980;
   margin:150px;
}
.loader {
   font-size: 20px;
   width: 1em;
   height: 1em;
   border-radius: 50%;
   position: relative;
   text-indent: -9999em;
   animation: load-effect 1s infinite linear;
}
@keyframes load-effect {
  0% {
    /*
    -3em:左移3em
      2em:下移2em
      0:模糊距离0，即纯色
      .5em:外扩.5em
      #FFF:白色
    */
    box-shadow: -3em 2em 0 .5em #FFF, 0 2em 0 0 #FFF, 3em 2em 0 -.5em #FFF;
  }
  25% {
  box-shadow: -3em 2em 0 0 #FFF, 0 2em 0 -.5em #FFF, 3em 2em 0 0 #FFF;
}
  50% {
    box-shadow: -3em 2em 0 -0.5em #FFF, 0 2em 0 0 #FFF, 3em 2em 0 .5em #FFF;
  }
  75% {
    box-shadow: -3em 2em 0 0 #FFF, 0 2em 0 .5em #FFF, 3em 2em 0 0 #FFF;
  }
  100% {
    box-shadow: -3em 2em 0 .5em #FFF, 0 2em 0 0 #FFF, 3em 2em 0 -.5em #FFF;
  }
}
</style>
