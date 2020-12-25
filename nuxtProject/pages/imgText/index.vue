<template>
  <div class="list3">
    <!-- <comHead></comHead> -->
    <div class="list3-container">
      <div class="mbx">
        当前位置：<span @click="$router.push('/')">首页</span> > <span>列表</span>
      </div>
      <div class="list3-section">
        <ul>
          <li>
            <p>
              <img src="@/assets/img/list3-1.jpg" alt="">
              <span>“戳穿形式主义官僚主义外衣”“戳穿形式主义官僚主义外衣”...</span>
            </p>
          </li>
          <li>
            <p>
              <img src="@/assets/img/list3-1.jpg" alt="">
              <span>“戳穿形式主义官僚主义外衣”“戳穿形式主义官僚主义外衣”...</span>
            </p>
          </li>
          <li>
            <p>
              <img src="@/assets/img/list3-1.jpg" alt="">
              <span>“戳穿形式主义官僚主义外衣”“戳穿形式主义官僚主义外衣”...</span>
            </p>
          </li>
          <li>
            <p>
              <img src="@/assets/img/list3-1.jpg" alt="">
              <span>“戳穿形式主义官僚主义外衣”“戳穿形式主义官僚主义外衣”...</span>
            </p>
          </li>
        </ul>
        <el-pagination
          :current-page="pageNo"
          :page-size="pageSize"
          layout="prev, pager, next, jumper"
          :total="1000"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
    </div>
    <!-- <comFoot></comFoot> -->
  </div>
</template>
<script>
// import comHead from '@/components/common/head'
// import comFoot from '@/components/common/foot'
export default {
  data () {
    return {
      pageNo: 1,
      pageSize: '10'
    }
  },
  // components: {
  //   comHead,
  //   comFoot
  // },
  methods: {
    handleSizeChange () {},
    handleCurrentChange () {}
  }
}
</script>
<style lang="scss">
.list3 {
  .list3-container {
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
    .list3-section {
      width: 960px;
      margin: 0 auto;
      padding: 20px;
      background: #fafafa;
      > ul {
        display: flex;
        flex-wrap: wrap;
        li {
          width: 294px;
          padding: 20px 13px;
          // border-bottom: 1px solid #e2e2e2;
          p {
            img {
              width: 294px;
              height: 190px;
            }
            span {
              display: inline-block;
              width: 268px;
              text-align: center;
              overflow: hidden; //超出的文本隐藏
              text-overflow: ellipsis; //溢出用省略号显示
              white-space: nowrap;
              font-size: 16px;
              color: #333;
            }
          }
        }
      }
      .el-pagination {
        text-align: center;
        padding: 20px 0;
        .el-pager li.active {
          color: #409eff;
          cursor: default;
        }
        .el-pager li:hover {
          color: #409eff;
        }
      }
    }
  }
}
</style>
