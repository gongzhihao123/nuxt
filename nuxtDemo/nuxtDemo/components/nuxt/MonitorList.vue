<template>
  <div class="monitor-list">
    <el-table
      :data="projectList"
      :header-row-style="headerRowStyle"
      :cell-style="cellStyle"
      stripe
      style="width: 100%"
    >
      <el-table-column
        prop="name"
        align="center"
        label="监控名称"
      />
      <el-table-column
        prop="descr"
        align="center"
        label="监控描述"
      />
      <el-table-column
        prop="creatorName"
        align="center"
        label="创建人"
      />
      <el-table-column
        align="center"
        label="创建时间"
      >
        <template slot-scope="scope">
          {{ scope.row.createtime }}
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        label="服务时间"
      >
        <template slot-scope="scope">
          {{ scope.row.totaltime }}天
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        label="操作"
        width="250"
      >
        <template slot-scope="scope">
          <el-button
            type="text"
            style="color: rgb(103, 194, 58);"
            @click="goToReport(scope.row.id, scope.row.name)"
          >
            查看报告
          </el-button>
          <el-button
            type="text"
          >
            任务详情
          </el-button>
          <el-button
            type="text"
            @click="editorMonitor(scope.row)"
          >
            编辑
          </el-button>
          <el-button
            type="text"
            style="color: rgb(245, 108, 108);"
          >
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import InitPage from '~/components/InitPageReport'
import api from '~/service/api'
export default {
  name: 'MonitorList',
  mixins: [InitPage],
  props: {
    projectList: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  methods: {
    cellStyle () {
      return {
        padding: '15px 0'
      }
    },
    headerRowStyle () {
      return {
        padding: '15px 0',
        background: '#ffffff'
      }
    },
    goToReport (id, name) {
      let obj = {
        mpid: id
      }
      api.nuxt.getMonitorDetailList(obj).then(res => {
        console.log(res, name, 1111)
      })
    },
    // 编辑监控
    editorMonitor (data) {
      this.$emit('editorMonitor', data, true)
    }
  }
}
</script>

<style scoped lang="less">
.monitor-list {
  margin-top: 20px;
}
</style>
