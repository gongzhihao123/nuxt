<template>
  <div class="page default">
    <section class="container">
      <Header
        :logo-url="logoUrl"
        :logo-href="logoHref"
      />
    </section>
    <div class="main el-col el-col-24">
      <!--left-menu
        v-if="isShowMenu"
        v-model="menuWidth"
      /-->
      <div
        ref="pageMain"
        class="page-main"
      >
        <nuxt />
        <tn-footer />
      </div>
    </div>
  </div>
</template>

<script>
import Header from '~/components/common/Header'
// import LeftMenu from '~/components/common/LeftMenu'
import TnFooter from '~/components/common/Footer'
import cfg from '~/config'
export default {
  components: {
    Header,
    // LeftMenu,
    TnFooter
  },
  data () {
    return {
      logoUrl: cfg.SITE_INFO.logo,
      logoHref: cfg.SITE_INFO.logoHref,
      menuWidth: 170,
      isShowMenu: true
    }
  },
  computed: {
  },
  watch: {
    '$route': function () {
      this.$refs.pageMain.scrollTop = 0
    }
  }
}
</script>

<style lang="less">
  .main {
    display: flex;
    overflow: hidden;
    padding-top: 50px;
    position: relative;
  }
</style>
