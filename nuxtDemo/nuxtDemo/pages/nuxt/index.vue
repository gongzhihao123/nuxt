<template>
  <div class="nuxt-index">
    <div class="bread">
      <div class="bread-create">
        <breadcrumb
          :bread-list="breadList"
        />
        <div class="create-nuxt">
          <el-button
            type="primary"
            size="mini"
            @click="createMonitor()"
          >
            创建监控
          </el-button>
          <el-button
            size="mini"
          >
            切换老版本
          </el-button>
        </div>
      </div>
    </div>
    <div class="nuxt-container">
      <monitor-list
        :project-list="projectList"
        @editorMonitor="editorMonitor"
      />
    </div>
    <create-monitor
      v-if="flag"
      :monitor-show="monitorShow"
      :is-editor="isEditor"
      :monitor-con="monitorCon"
      :title="title"
      @monitorModel="monitorModel"
      @getProjectList="getProjectList"
    />
    <create-task
      :show-modal="showModal"
      @hiddenModal="hiddenModal"
    />
    <loading
      :loading="isShow"
    />
  </div>
</template>

<script>
import InitPage from '~/components/InitPageNuxt'
import Breadcrumb from '~/components/common/Breadcrumb'
import cfg from '~/config'
import api from '~/service/api'
import Loading from '~/components/common/Loading'
import MonitorList from '~/components/nuxt/MonitorList'
import CreateMonitor from '~/components/nuxt/CreateMonitor'
import CreateTask from '~/components/nuxt/CreateTask'
export default {
  name: 'Index',
  head: {
    title: '云测测试企业|测试专用|测试报告'
  },
  components: {
    Breadcrumb,
    Loading,
    MonitorList,
    CreateMonitor,
    CreateTask
  },
  mixins: [InitPage],
  data () {
    return {
      breadList: [
        {
          name: 'Testin企业版',
          path: cfg.ITESTIN.hostname,
          id: 1
        },
        {
          name: '',
          path: cfg.ITESTIN.href,
          id: 2
        },
        {
          name: '项目列表',
          id: 3
        }
      ],
      projectList: [],
      isShow: true,
      monitorShow: false,
      // 监控基本信息
      monitorCon: {},
      flag: false,
      // 新建任务状态
      showModal: false,
      // 编辑状态
      isEditor: false,
      title: null
    }
  },
  computed: {},
  created () {
    this.getBreads()
    this.getProjectList()
  },
  methods: {
    // 面包屑
    getBreads () {
      api.bread.getBread().then(res => {
        this.breadList = [
          {
            name: res.pname,
            path: '',
            id: 2
          },
          {
            name: '项目列表',
            id: 3
          }
        ]
      })
    },
    // 项目列表
    getProjectList () {
      api.nuxt.getProjectList().then(res => {
        this.projectList = res
        this.isShow = false
      }).catch(() => {
        this.isShow = false
      })
    },
    // 创建监控项目
    createMonitor () {
      this.flag = true
      this.monitorShow = true
      this.isEditor = false
      this.title = '创建监控'
      // this.showModal = true
    },
    // 监控项目弹框状态
    monitorModel (status) {
      this.monitorCon = {}
      this.monitorShow = status
      this.flag = status
    },
    // 编辑监控任务
    editorMonitor (data, flag) {
      this.monitorShow = true
      this.monitorCon = data
      this.flag = flag
      this.isEditor = true
      this.title = '编辑监控'
    },
    // 任务新建状态
    hiddenModal (status) {
      this.showModal = status
    }
  }
}
</script>

<style scoped lang="less">
  .nuxt-index {
    background: #ffffff;
    padding-bottom: 20px;
    .bread {
      box-shadow: 1px 1px 3px 0 rgba(34,58,156,.07);
      .bread-create {
        width: 1200px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .create-nuxt {
        }
      }
    }
    .nuxt-container {
      width: 1200px;
      margin: 0 auto;
    }
  }
</style>
