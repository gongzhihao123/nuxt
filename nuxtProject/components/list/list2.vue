<template>
  <div class="list2-section2">
    <div class="list2-section2-con">
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
      <!-- <el-pagination
        :current-page.sync="pageNo"
        :page-size="pageSize"
        layout="prev, pager, next, jumper"
        :total="1000"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      /> -->
    </div>
  </div>
</template>
<style lang="scss">
.list2-section2 {
  width: 1000px;
  margin: 0 auto;
  height: 660px;
  margin-bottom: 50px;
  background: url(./../../assets/img/list2-pageBg.jpg) no-repeat center center;
  .list2-section2-con {
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
</style>
