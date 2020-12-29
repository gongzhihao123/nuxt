<template>
  <div class="list1-section">
    <ul>
      <li @click="goDetail">
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
    <!-- <el-pagination
      :current-page.sync="pageNo"
      :page-size="pageSize"
      layout="prev, pager, next, jumper"
      :total="1000"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    /> -->
  </div>
</template>
<style lang="scss">
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
</style>
