<template>
  <el-dialog
    :title="title"
    :visible.sync="monitorShow"
    :append-to-body="true"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
    :before-close="shutDown"
    width="35%"
  >
    <div
      class="createCss"
    >
      <label>
        <i />
        监控名称:
      </label>
      <el-input
        v-model="monitorPro.name"
        :disabled="isEditor"
        autofocus="true"
        size="mini"
        placeholder="请输入监控名称"
      />
    </div>
    <div
      class="createCss"
    >
      <label>
        监控描述:
      </label>
      <el-input
        v-model="monitorPro.descr"
        type="textarea"
        autofocus="true"
        size="mini"
        placeholder="请输入监控描述"
      />
    </div>
    <div
      class="createCss"
    >
      <label>
        监控业务范围:
      </label>
      <el-input
        v-model="monitorPro.scope"
        type="textarea"
        autofocus="true"
        size="mini"
        placeholder="请输入业务范围"
      />
    </div>
    <div
      class="createCss"
    >
      <label>
        可用性总结:
      </label>
      <el-input
        v-model="monitorPro.conclusion"
        type="textarea"
        autofocus="true"
        size="mini"
        placeholder="请输入总结"
      />
    </div>
    <span
      slot="footer"
      class="dialog-footer"
    >
      <el-button
        @click="shutDown()"
      >
        取 消
      </el-button>
      <el-button
        type="primary"
        @click="saveMonitor()"
      >
        确 定
      </el-button>
    </span>
  </el-dialog>
</template>

<script>
import api from '~/service/api'
export default {
  name: 'CreateMonitor',
  props: {
    monitorShow: {
      type: Boolean,
      default: false
    },
    monitorCon: {
      type: Object,
      default: function () {
        return {}
      }
    },
    isEditor: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      monitorPro: this.monitorCon
    }
  },
  methods: {
    shutDown () {
      this.monitorPro = {}
      this.$emit('monitorModel', false)
    },
    saveMonitor () {
      let options = {}
      if (this.monitorPro.name && this.monitorPro.name.length) {
        options.name = this.monitorPro.name
      } else {
        this.$message({
          message: '请填写监控名称',
          type: 'warning'
        })
        return false
      }
      if (this.monitorPro.desc && this.monitorPro.desc.length) {
        options.desc = this.monitorPro.desc
      }
      if (this.monitorPro.scope && this.monitorPro.scope.length) {
        options.scope = this.monitorPro.scope
      }
      if (this.monitorPro.conclusion && this.monitorPro.conclusion.length) {
        options.conclusion = this.monitorPro.conclusion
      }
      api.nuxt.buildMonitor(options).then(res => {
        if (res.code > 0) {
          this.$message({
            message: '监控任务创建成功',
            type: 'success'
          })
          this.$emit('getProjectList')
        }
        this.monitorPro = {}
        this.$emit('monitorModel', false)
      }).catch( () => {
        this.$message({
          message: '监控任务创建失败',
          type: 'error'
        })
        this.monitorPro = {}
        this.$emit('monitorModel', false)
      })
    }
  }
}
</script>

<style lang="less">
.el-dialog__body {
  padding-top: 5px;
  border-top: 1px solid #dcdde4;
}
.createCss {
  margin-top: 20px;
  label {
    width: 120px;
    text-align: right;
    float: left;
    line-height: 28px;
    i:before {
      content: '*';
      color: #f56c6c;
    }
  }
  .el-input, .el-textarea {
    width: 70%;
    padding-left: 10px;
  }
}
</style>
