<template>
  <div
    class="el-row nuxt-breadcrumb"
  >
    <el-col>
      <el-breadcrumb separator=">">
        <el-breadcrumb-item><a :href="stateInfo.hostname+'/realmachine/index.htm'">Testin企业版</a></el-breadcrumb-item>
        <el-breadcrumb-item
          v-for="item in breadList"
          :key="item.id"
          :to="{ path: item.path }"
        >
          {{ item.name }}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </el-col>
  </div>
</template>

<script>
import cfg from '~/config'
export default {
  name: 'Breadcrumb',
  props: {
    breadList: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      stateInfo: cfg.ITESTIN
    }
  },
  mounted () {
  }
}
</script>

<style scoped lang="less">
  .nuxt-breadcrumb {
    width: 600px;
    padding: 18px 0;
  }
</style>
