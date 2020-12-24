<template>
  <div class="list1">
    <!-- <comHead /> -->
    <div class="list1-container">
      <div class="mbx">
        当前位置：<span @click="$router.push('/')">首页</span> > <span>列表</span>
      </div>
      <div v-if="pageflag" class="list1-section">
        <ul>
          <li>
            <p>中共中央办公厅印发《干部选拔任用工作监督检查和责任追究办法》</p>
            <i>[2019-06-05]</i>
          </li>
          <li>
            <p>
              中共中央办公厅印发《干部选拔任用工作监督检查和责任追究办法》中共中央办公厅印发《干部选拔任用工作监督检查和责任追究办法》中共中央办公厅印发《干部选拔任用工作监督检查和责任追究办法》
            </p>
            <i>[2019-06-05]</i>
          </li>
          <li>
            <p>中共中央办公厅印发《干部选拔任用工作监督检查和责任追究办法》</p>
            <i>[2019-06-05]</i>
          </li>
          <li>
            <p>中共中央办公厅印发《干部选拔任用工作监督检查和责任追究办法》</p>
            <i>[2019-06-05]</i>
          </li>
        </ul>
        <el-pagination
          :current-page.sync="pageNo"
          :page-size="pageSize"
          layout="prev, pager, next, jumper"
          :total="1000"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
      <div v-else class="list1-section2">
        <div class="list1-section2-con">
          <ul>
            <li>
              <p>中共中央办公厅印发《干部选拔任用工作监督检查和责任追究办法》</p>
            </li>
            <li>
              <p>
                中共中央办公厅印发《干部选拔任用工作监督检查和责任追究办法》中共中央办公厅印发《干部选拔任用工作监督检查和责任追究办法》中共中央办公厅印发《干部选拔任用工作监督检查和责任追究办法》
              </p>
            </li>
            <li>
              <p>中共中央办公厅印发《干部选拔任用工作监督检查和责任追究办法》</p>
            </li>
            <li>
              <p>中共中央办公厅印发《干部选拔任用工作监督检查和责任追究办法》</p>
            </li>
          </ul>
          <el-pagination
            :current-page.sync="pageNo"
            :page-size="pageSize"
            layout="prev, pager, next, jumper"
            :total="1000"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
          />
        </div>
      </div>
    </div>
    <!-- <comFoot /> -->
  </div>
</template>
<script>
// import comHead from './../../components/common/head'
// import comFoot from './../../components/common/foot'
export default {
  // components: {
  //   comHead,
  //   comFoot
  // },
  data () {
    return {
      pageflag: false,
      pageNo: 1,
      pageSize: 10
    }
  },
  methods: {
    handleSizeChange () {},
    handleCurrentChange () {}
  }
}
</script>
<style lang="scss">
.list1 {
  .list1-container {
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
    .list1-section {
      width: 960px;
      margin: 0 auto;
      padding: 20px;
      background: #fafafa;
      > ul {
        li {
          display: flex;
          justify-content: space-between;
          line-height: 33px;
          p {
            flex: 1;
            margin-right: 30px;
            font-size: 16px;
            overflow: hidden; //超出的文本隐藏
            text-overflow: ellipsis; //溢出用省略号显示
            white-space: nowrap;
          }
          i {
            color: #b9b9b9;
            font-size: 16px;
            font-style: normal;
          }
        }
        li:before {
          content: " ";
          width: 4px;
          height: 4px;
          margin-top: 15px;
          margin-right: 10px;
          border-radius: 50%;
          background: #b4b4b4;
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
    // 带有背景图内容
    .list1-section2 {
      width: 1000px;
      margin: 0 auto;
      height: 660px;
      margin-bottom: 50px;
      background: url(./../../../assets/img/list1-pageBg.jpg) no-repeat center center;
      .list1-section2-con {
        > ul {
          width: 520px;
          margin-left: 410px;
          padding-top: 100px;
          height: 435px;
          li {
            margin: 40px 0;
            line-height: 27px;
            p {
              overflow: hidden; //超出的文本隐藏
              text-overflow: ellipsis; //溢出用省略号显示
              white-space: nowrap;
              font-size: 16px;
              color: #f00;
            }
          }
        }
        .el-pagination {
          text-align: center;
          padding: 20px 0;
          > button {
            background-color: transparent;
          }
          .el-pager {
            li {
              background-color: transparent;
            }
          }
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
}
</style>
