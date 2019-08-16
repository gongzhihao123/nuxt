<template>
  <div
    class="page-menu"
  >
    <div
      :class="{'isBg' : !collapsed}"
      class="menu-toggle"
      @click.prevent="collapse"
    >
      <i
        v-if="!collapsed"
        class="mrfont-pack"
        title="收起"
      />
      <i
        v-else
        class="mrfont-spread"
        title="展开"
      />
    </div>
    <el-menu
      ref="elMenu"
      :default-active="defaultActive"
      :default-openeds="defaultOpeneds"
      :text-color="textColor"
      :active-text-color="activeTextColor"
      :collapse="collapsed"
      :unique-opened="true"
      router
      class="left-menu el-menu-vertical-demo"
      @select="selected"
    >
      <el-menu-item
        :route="'/report'+search"
        index="/report"
      >
        <div
          v-if="collapsed"
          class="page-title"
        >
          <i
            class="mrfont-overview"
          />
          <em class="logogram">总览</em>
        </div>
        <i
          v-else
          class="mrfont-overview"
        />
        <span slot="title">监控总览</span>
      </el-menu-item>
      <el-menu-item
        :route="'/report/alarmManage'+search"
        index="/report/alarmManage"
      >
        <div
          v-if="collapsed"
          class="page-title"
        >
          <i class="mrfont-alarm" />
          <em class="logogram">告警</em>
        </div>
        <i
          v-else
          class="mrfont-alarm"
        />
        <span slot="title">告警管理</span>
        <em
          v-if="this.$store.state.alarmTotal !== 0"
          :class="this.$store.state.alarmTotal > 10 ? (this.$store.state.alarmTotal > 99 ? 'count' : 'count2') : 'count1'"
        >
          {{ this.$store.state.alarmTotal > 99 ? '99+' : this.$store.state.alarmTotal }}
        </em>
      </el-menu-item>
      <el-menu-item
        :route="'/report/problemLocation'+search"
        index="/report/problemLocation"
      >
        <div
          v-if="collapsed"
          class="page-title"
        >
          <i class="mrfont-location" />
          <em class="logogram">问题</em>
        </div>
        <i
          v-else
          class="mrfont-location"
        />
        <span slot="title">问题回溯</span>
      </el-menu-item>
      <el-menu-item
        :route="'/report/businessStatistic'+search"
        index="/report/businessStatistic"
      >
        <div
          v-if="collapsed"
          class="page-title"
        >
          <i class="mrfont-businesses" />
          <em class="logogram">业务</em>
        </div>
        <i
          v-else
          class="mrfont-businesses"
        />
        <span slot="title">业务统计</span>
      </el-menu-item>
      <el-menu-item
        :route="'/report/reportDetail'+search"
        index="/report/reportDetail"
      >
        <div
          v-if="collapsed"
          class="page-title"
        >
          <i class="mrfont-report" />
          <em class="logogram">报表</em>
        </div>
        <i
          v-else
          class="mrfont-report"
        />
        <span slot="title">监控报表</span>
      </el-menu-item>
      <el-menu-item
        :route="'/report/appPerform'+search"
        index="/report/appPerform"
      >
        <div
          v-if="collapsed"
          class="page-title"
        >
          <i class="mrfont-perform" />
          <em class="logogram">性能</em>
        </div>
        <i
          v-else
          class="mrfont-perform"
        />
        <span slot="title">应用性能</span>
      </el-menu-item>
      <el-submenu index="1">
        <template slot="title">
          <div
            v-if="collapsed"
            class="page-title"
          >
            <i class="mrfont-monitor" />
            <em class="logogram">任务</em>
          </div>
          <i
            v-else
            class="mrfont-monitor"
          />
          <span slot="title">任务管理</span>
        </template>
        <el-menu-item
          :route="''+search"
          index=""
          @click="taskHrefTo"
        >
          <i class="mrfont-form" />
          任务列表
        </el-menu-item>
        <el-menu-item
          :route="'/report/deviceManagement'+search"
          index="/report/deviceManagement"
        >
          <i class="mrfont-device" />
          设备管理
        </el-menu-item>
      </el-submenu>
      <el-menu-item
        :route="''+search"
        index=""
      >
        <div
          v-if="collapsed"
        >
          <el-tooltip
            class="item"
            effect="dark"
            content="返回项目"
            placement="right"
          >
            <a
              :href="href ? href : ''"
              class="page-title"
            >
              <i class="mrfont-back" />
              <em class="logogram">返回</em>
            </a>
          </el-tooltip>
        </div>
        <a
          v-else
          :href="href ? href : ''"
        >
          <i class="mrfont-back" />
          <span slot="title">返回项目</span>
        </a>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<style lang="less">
  @bg-color: #2d3338;
  .page-menu {
    /*background-color: #242a2e;*/
    .left-menu {
      padding-top: 2px;
      box-sizing: border-box;
      border-right: 0;
      .el-menu-item,
      .el-submenu__title {
        height: 60px;
        line-height: 60px;
        /*margin-bottom: 1px;*/
        border-bottom: 1px solid #F1F1F1;
      }
      .logogram {
        height: 20px;
        line-height: 20px;
        font-size: 13px;
        font-weight: 400;
        color: #ABADB3;
        font-style: normal;
      }
      .count, .count1, .count2 {
        position: absolute;
        left: 36px;
        top: 3px;
        font-style: normal;
        background: #ff633b;
        border-radius: 50%;
        text-align: center;
        color: #ffffff;
        font-size: 12px;
      }
      .count {
        padding: 2px 2px;
        line-height: 21px;
      }
      .count1 {
        padding: 2px 8px;
        line-height: 19px;
      }
      .count2 {
        padding: 2px 4px;
        line-height: 19px;
      }
      .page-title {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        padding-top: 5px;
      }
      .el-menu-item, .el-submenu__title {
        i {
          display: inline-block;
          width: 30px;
          height: 30px;
          text-align: center;
          line-height: 32px;
          font-size: 20px;
          &.el-submenu__icon-arrow {
            margin-top: -14px;
          }
        }
        a {
          color: rgb(170, 172, 173);
        }
      }
      .menu-item {
        margin-left: -20px;
        margin-right: -20px;
        padding-left: 20px;
        padding-right: 20px;
        background-color: #373d41;
        a {
          color: #aaacad;
        }
        & > .menu-text {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          & > i[class^="mrfont-"] {
            margin-right: 5px;
          }
        }
        .smallIcon {
          display: flex;
          flex-direction: column;
        }
      }
      .el-submenu.is-opened {
        .el-menu-item {
          min-width: 100%;
        }
      }
    }
    .menu-toggle {
      position: absolute;
      width: 100%;
      height: 30px;
      text-align: center;
      line-height: 30px;
      border-top: 1px solid rgba(225,233,240,1);
      left: 0;
      cursor: pointer;
      color: rgba(0,126,232,1);
      bottom: 0;
      i {
        font-size: 14px;
      }
    }
    .isBg {
      background: rgba(0,126,232,1);
      i {
        color: #ffffff;
      }
    }
    .item1 {
      .el-badge__content.is-fixed {
        right: -60px;
      }
    }
    .el-badge__content.is-fixed {
      top: 15px;
      right: 10px;
      padding: 0 5px;
      border: none;
    }
  }
  .is-active {
    .menu-item {
      /*background-color: #2d3338;*/
      a {
        color: #ffffff;
      }
    }
    &.el-menu-item, &.el-submenu  {
      position: relative;
      /*background-color: #2d3338 !important;*/
      &:after {
        content: "\20";
        display: block;
        width: 2px;
        height: 60px;
        background-color: #007ee8;
        position: absolute;
        right: 0;
        top: 0;
      }
      i {
        color: #ffffff !important;
        width: 30px;
        height: 30px;
        display: inline-block;
        background:rgba(0,126,232,1);
        -webkit-border-radius: 100%;
        -moz-border-radius: 100%;
        border-radius: 100%;
        text-align: center;
        line-height: 30px;
      }
      span {
        font-size:13px;
        font-family:PingFangSC-Medium;
        font-weight:500;
        color:rgba(24,47,61,1);
      }
    }
  }
</style>
<style scoped>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 170px;
  }
</style>
<script>
import cfg from '~/config'
import _ from 'lodash'
import { mapGetters } from 'vuex'
export default {
  name: 'LeftMenu',
  model: {
    prop: 'menuWidth',
    event: 'change'
  },
  props: {
    // 背景色
    bgColor: {
      default: '#373d41',
      type: String
    },
    // 字体颜色
    textColor: {
      default: '#AAACAD',
      type: String
    },
    // 激活时的字体颜色
    activeTextColor: {
      default: '#182F3D',
      type: String
    }
  },
  data () {
    return {
      // 默认激活某个
      defaultActive: '/',
      // 地址栏后指定参数
      mpid: 0,
      // 地址栏后所有参数
      search: '',
      href: '',
      defaultOpeneds: [],
      collapsed: true,
      menuWidth: 170,
      //  任务管理链接
      taskHref: ''
    }
  },
  computed: {
    ...mapGetters({
      currentMPInfo: 'getCurrentMPInfo',
      mpInfoState: 'getMonitorProjectInfo'
    })
  },
  watch: {
    // 修复 el-menu 点击浏览器后退按钮时无法正确激活问题
    $route (to) {
      this.$refs.elMenu.activeIndex = to.path
      this.search = '?mpid=' + this.$store.state.query.mpid + '&appid=' + this.$store.state.query.appid
    },
    currentMPInfo () {
      this.getAlarmTotal()
    }
  },
  created () {
    this.mpid = this.$router.currentRoute.mpid
    this.defaultActive = this.$router.currentRoute.path
  },
  mounted () {
    this.search = '?mpid=' + this.$store.state.query.mpid + '&appid=' + this.$store.state.query.appid
    this.href = cfg.ITESTIN.href
  },
  methods: {
    taskHrefTo () {
      if (this.mpInfoState && this.mpInfoState.mpName) {
        // this.taskHref = cfg.CM_API.host + location.search + '&name=' + this.mpInfoState.mpName
        this.taskHref = cfg.CM_API.host + '?mpid=' + this.$route.query.mpid + '&name=' + this.mpInfoState.mpName
        window.location.href = this.taskHref
      }
    },
    // 提出公共params
    getOptions () {
      let opptions = {}
      if (!_.isEmpty(this.currentMPInfo)) {
        opptions.appid = this.currentMPInfo.appInfo.appid
        opptions.packageName = this.currentMPInfo.appInfo.packageName
        opptions.syspfId = this.currentMPInfo.appInfo.syspfId
      }
      return opptions
    },
    // 处理二级菜单不收起的问题
    selected (index, indexPath) {
      this.$refs.elMenu.openedMenus = this.$refs.elMenu.openedMenus.filter(
        item => {
          return indexPath.indexOf(item) > -1
        }
      )
    },
    collapse: function () {
      this.collapsed = !this.collapsed
      if (!this.collapsed) {
        this.menuWidth = 170
      } else {
        this.menuWidth = 64
      }
      this.$emit('change', this.menuWidth)
      this.$store.commit('SET_MENU_WIDTH', this.menuWidth)
    },
    getAlarmTotal () {
      let opptions = this.getOptions()
      this.$store.dispatch('SET_ALARM_TOTAL', opptions)
    }
  }
}
</script>


