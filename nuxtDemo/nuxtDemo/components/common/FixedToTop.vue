<template>
  <div
    ref="fixedWrap"
    :style="{height: height + 'px'}"
    class="fixed-wrap"
  >
    <div
      ref="fixedBar"
      :class="{'fixed': isFixed}"
      :style="{zIndex: zIndex, left: menuWidth + 'px'}"
      class="fixed-bar"
    >
      <slot />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'FixedToTop',
  props: {
    offset: {
      default: 0,
      type: Number
    },
    zIndex: {
      default: 99,
      type: Number
    }
  },
  data () {
    return {
      height: 0,
      top: 0,
      isFixed: false
    }
  },
  computed: {
    ...mapGetters({
      menuWidth: 'getMenuWidth'
    })
  },
  mounted () {
    let offsetTop = this.$refs.fixedWrap ? this.$refs.fixedWrap.offsetTop : 0
    this.height = this.$refs.fixedBar
      ? this.getComputedStyle(this.$refs.fixedBar, 'height')
      : 0
    // this.top = offsetTop + this.offset
    this.top = offsetTop
    let pageMain = document.getElementsByClassName('page-main')[0]
    pageMain.addEventListener('scroll', this.scrollTop)
    this.$nextTick(() => {
      if (!offsetTop && this.$refs.fixedWrap) {
        offsetTop = this.$refs.fixedWrap.offsetTop
      }
      if (!this.height && this.$refs.fixedBar) {
        this.height = this.getComputedStyle(this.$refs.fixedBar, 'height')
      }
    })
  },
  methods: {
    pxToNumber (value) {
      return value ? +value.replace('px', '') : 0
    },
    getComputedStyle (el, attrName) {
      return window && el
        ? this.pxToNumber(window.getComputedStyle(el, null)[attrName])
        : ''
    },
    scrollTop () {
      let pageMain = document.getElementsByClassName('page-main')[0]
      let scrollTop =
        pageMain.pageYOffset ||
        pageMain.scrollTop ||
        document.body.scrollTop
      if (!this.isFixed && scrollTop >= this.top) {
        this.isFixed = true
      } else if (this.isFixed && scrollTop < this.top) {
        this.isFixed = false
      }
    }
  }
}
</script>

<style scoped>
  .fixed-wrap {
    background: #ffffff;
  }

  .fixed-bar.fixed {
    position: fixed;
  }
</style>
