<template>
  <div class="articleDetail">
    <div class="articleDetail-container">
      <div class="mbx">
        当前位置：<span @click="$router.push('/portal')">首页</span> > <span>列表</span>
      </div>
      <div class="articleDetail-section">
        <div class="articleDetail-title">
          <h1>中共中央办公厅 国务院办公厅印发《党政主要领导干部和国有企事业单位主要领导人员经济责任审计规定》</h1>
          <p>
            <span>来源：中央纪委国家监委网站</span>
            <span>时间：2019年07月18日</span>
          </p>
        </div>
        <div class="articleDetail-con" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  validate ({ params, query }) {
    return typeof params.id === 'number'
  },
  data () {
    return {
      pageNo: 1,
      pageSize: '10'
    }
  },
  methods: {
    handleSizeChange () {},
    handleCurrentChange () {}
  }
}
</script>
<style lang="scss">
.articleDetail {
  width: 100%;
  padding-bottom: 30px;
  background-color: #e3e3e3;
  .articleDetail-container {
    width: 918px;
    margin: 0 auto;
    padding: 20px 40px 40px;
    background-color: #fff;
    border: 1px solid #eee;
    .mbx {
      line-height: 40px;
      font-size: 16px;
      color: #333;
      span {
        cursor: pointer;
      }
      span:hover {
        color: #f00;
      }
    }
    .articleDetail-section {
      .articleDetail-title {
        margin-bottom: 30px;
        > h1 {
            padding: 20px 0;
            text-align: center;
            color: #024fa9;
            font-size: 24px;
            border-bottom: 1px solid #eee;
            line-height: 40px;
            font-weight: 400;
        }
        > p {
          padding: 10px 0;
          text-align: center;
          line-height: 35px;
          span {
            font-size: 16px;
            color: #333;
            margin: 0 15px;
          }
        }
      }
      .articleDetail-con {}
    }
  }
}
</style>
