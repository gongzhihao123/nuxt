<template>
  <div class="layout-project-info">
    <div class="layout-title">
      {{ monitorInfo.mpName }}
      <!-- <span class="btn-share"><i class="mrfont-share" /></span> -->
    </div>
    <FixedToTop>
      <div>
        222222222
      </div>
    </FixedToTop>
  </div>
</template>

<script>
import _ from 'lodash'
import { api } from '~/service'
import { mapGetters, mapMutations } from 'vuex'
import FixedToTop from '~/components/common/FixedToTop'
export default {
  name: 'ProjectInfo',
  components: {
    FixedToTop
  },
  data () {
    return {
      monitorInfo: {},
      // 1: 近24小时；2：近7天；3：近一个月；4：近半年；5：自定义时间
      dateList: [
        {
          label: '当前24小时',
          value: 1
        },
        {
          label: '近7天',
          value: 2
        },
        {
          label: '近30天',
          value: 3
        },
        {
          label: '近半年',
          value: 4
        }
      ],
      currentDateRange: {
        value: 1,
        dateTime: this.getNowTime()
      },
      // 当前的 appid
      currentAppId: null,
      isTrue: false
    }
  },
  computed: {
    ...mapGetters({
      currentMPInfo: 'getCurrentMPInfo',
      mpInfoState: 'getMonitorProjectInfo',
      query: 'getQuery'
    }),
    currentAppInfo () {
      let appInfo = {}
      let appList = []
      if (this.monitorInfo && this.monitorInfo.appList) {
        appList = this.monitorInfo.appList.filter(item => {
          return item.appid === this.currentAppId
        })
        if (appList.length) {
          appInfo = appList[0]
        }
      }
      return appInfo
    },
    // 当前项目信息
    currentProjectInfo () {
      return {
        period: this.currentDateRange.value,
        assignTime: this.currentDateRange.dateTime,
        appInfo: this.currentAppInfo
      }
    }
  },
  watch: {
    currentProjectInfo (val) {
      if (val.assignTime === null) {
        val.assignTime = this.getNowTime()
      }
      this.$store.dispatch('SET_SELECT_OPTIONS', {'appid': val.appInfo.appid, 'assignTime': val.dateTime})
      if ('period' in val && val.appInfo) {
        this.setCurrentMPInfo(val)
        this.$emit('change', val)
      }
    }
  },
  created () {
    if (!this.$isServer && _.isEmpty(this.currentMPInfo)) {
      this.isTrue = true
      this.getProjectInfo()
    } else if (!this.$isServer && 'period' in this.currentMPInfo) {
      // 设置已有值
      this.monitorInfo = this.mpInfoState
      this.currentDateRange.value = this.currentMPInfo.period
      this.currentDateRange.dateTime = this.currentMPInfo.assignTime
      this.currentAppId = this.currentMPInfo.appInfo.appid
    }
  },
  methods: {
    ...mapMutations({
      setCurrentMPInfo: 'SET_CURRENT_MP_INFO',
      setMonitorProjectInfo: 'SET_MONITOR_PROJECT_INFO'
    }),
    change () {
      let that = this
      this.isTrue = true
      setTimeout(function () {
        that.isTrue = false
      }, 50)
      this.$router.push({
        query: {mpid: this.query.mpid, appid: this.currentAppId}
      })
      this.$store.commit('SET_QUERY', {mpid: this.query.mpid, appid: this.currentAppId})
    },
    // 选中当前值
    handlerClickToDate (item) {
      this.currentDateRange.value = item.value
    },
    // 获取监控项目信息
    getProjectInfo () {
      api.project.getProjectInfo().then(data => {
        let currentMPInfo = {}
        if (data) {
          if (data.appList && data.appList.length) {
            data.appList.map(item => {
              if (item.appid === this.query.appid) {
                this.currentAppId = item.appid
                this.$store.commit('SET_QUERY', {mpid: this.query.mpid, appid: item.appid})
                currentMPInfo.appInfo = this.currentAppInfo
              }
            })
          }
          if ('period' in data) {
            currentMPInfo.period = data.period
          }
          this.monitorInfo = data
          this.setMonitorProjectInfo(this.monitorInfo)
          this.$emit('change', currentMPInfo)
          this.$store.commit('SET_CREATE_TIME', data.creatTime)
          this.isTrue = false
        }
      })
    },
    getNowTime () {
      /*
      * 获取整点的时间
      * 先获取当前时间凌晨 + 现在的小时
      * */
      return new Date(new Date().toLocaleDateString()).getTime() + (new Date().getHours()) * 1000 * 60 * 60 + 1000 * 60 * 60
    }
  }
}
</script>

<style lang="less">
  @white: #ffffff;
  .layout-project-info {
    .layout-body {
      min-height: 40px;
      .fixed-bar.fixed {
        padding: 0 30px;
        box-shadow: 0px 6px 9px 0px rgba(196, 211, 221, 0.2);
        background-color: @white;
        position: fixed;
        top: 50px;
        right: 0;
        left: 170px;
      }
    }
    .select-icon.el-select {
      .el-input--suffix .el-input__inner {
        padding-right: 35px;
      }
    }
  }
  .select-popper-icon {
    .el-select-dropdown__item {
      position: relative;
      &:before {
        display: none;
      }
      &:after {
        font-family: "mr-font" !important;
        font-size: 16px;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        position: absolute;
        right: 17px;
        font-weight: normal;
        color: #00c185;
      }
      &.mrfont-ios:after {
        content: "\e601";
      }
      &.mrfont-android:after {
        content: "\e67b";
      }
    }
  }
</style>

<style lang="less" scoped>
  @blue: #1081de;
  @border-color: #d1d2d3;
  @panel-border-color: #edf3f7;
  @text-base: #546571;
  @text-black: #182f3d;
  .layout-project-info {
    .layout-title {
      line-height: 22px;
      padding: 10px 44px;
      border-bottom: 1px solid @panel-border-color;
      text-align: center;
      font-size: 16px;
      font-weight: 500;
      position: relative;
      color: #ffffff;
      background: linear-gradient(90deg,rgba(45,153,243,1) 0%,rgba(15,130,244,1) 100%);
      background: -moz-linear-gradient(90deg,rgba(45,153,243,1) 0%,rgba(15,130,244,1) 100%);
      background: -o-linear-gradient(90deg,rgba(45,153,243,1) 0%,rgba(15,130,244,1) 100%);
      background: -webkit-gradient(90deg,rgba(45,153,243,1) 0%,rgba(15,130,244,1) 100%);
      .btn-share {
        position: absolute;
        right: 28px;
        color: @blue;
        cursor: pointer;
      }
    }
    .layout-operation-bar {
      display: flex;
      align-items: center;
      padding: 5px 30px;
      .cols {
        flex: 1;
      }
    }
    .layout-list {
      display: flex;
      padding-right: 10px;
      white-space: nowrap;
      color: @text-black;
      & > div + div {
        margin-left: 20px;
      }
      & > div > span {
        color: @text-base;
        font-weight: normal;
      }
    }
    .list-date-range /deep/ div.active:after {
      bottom: -8px;
    }
  }
  .app-filter {
    position: relative;
    .app-img {
      width: 14px;
      height: 14px;
      position: absolute;
      right: 20px;
      top: 8px;
      color: #00c185;
    }
  }
</style>
