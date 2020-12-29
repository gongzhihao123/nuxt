<template>
  <div class="list">
    <div class="list-container">
      <div class="mbx">
        当前位置：<span @click="$router.push('/')">首页</span> > <span>列表</span>
      </div>
      <list1 />
      <list2 />
      <list3 />
    </div>
  </div>
</template>
<script>
import list1 from '@/components/list/list1'
import list2 from '@/components/list/list2'
import list3 from '@/components/list/list3'
export default {
  components: {
    list1,
    list2,
    list3
    // comFoot
  },
  data () {
    return {
      pageflag: true,
      pageNo: 1,
      pageSize: 10
    }
  },
  methods: {
    handleSizeChange () {},
    handleCurrentChange () {},
    goDetail () {
      this.$router.push({ name: 'article-articleDetail-id', params: { id: 1 } })
    }
  },
  head () {
    // return this.$seo(this.data.title, this.data.des, [{}])
  }
}
</script>
<style lang="scss">
.list {
  .list-container {
    width: 1000px;
    margin: 0 auto;
    padding: 10px 0;
    line-height: 40px;
    .mbx {
      font-size: 18px;
      font-weight: 400;
      span {
        cursor: pointer;
      }
      span:hover {
        color: #f00;
      }
    }
  }
}
</style>
