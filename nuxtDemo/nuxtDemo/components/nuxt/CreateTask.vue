<template>
  <transition name="fade">
    <div
      v-if="showModal"
      class="create-task"
    >
      <div
        class="create-modal"
        @click="hiddenModal"
      />
      <div class="create_new">
        11111111111111
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'CreateTask',
  props: {
    showModal: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    hiddenModal () {
      this.$emit('hiddenModal', false)
    }
  }
}
</script>

<style scoped lang="less">
  .create-task {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    -webkit-font-smoothing: antialiased;
    z-index: 6;

    .create-modal {
      width: calc(100% - 800px);
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }

    .create_new {
      width: 800px;
      height: 100%;
      float: right;
      background: #ffffff;
    }
  }

  .fade-enter-active, .fade-leave-active {
    transition: all .5s;
    margin-left: 0;
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
    margin-left: 100%;
  }
</style>
