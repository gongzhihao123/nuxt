<template>
  <div class="header">
    <div class="logo">
      <img
        :src="logoUrl"
        alt=""
      >
      <span class="monitorName">云监控</span>
    </div>
    <div class="menu">
      <div class="menu-list">
        <el-select
          v-model="projectSelect"
          placeholder="请选择项目"
          size="mini"
          @change="jump()"
        >
          <el-option
            v-for="item in projectList"
            :key="item.projectid"
            :label="item.name"
            :value="item.projectid"
          />
        </el-select>
      </div>
      <div class="select">
        <el-dropdown
          size="small"
          trigger="click"
        >
          <span class="el-dropdown-link">
            {{ userInfo.name }}<i class="el-icon-arrow-down el-icon--right" />
          </span>
          <el-dropdown-menu
            slot="dropdown"
          >
            <el-dropdown-item>
              <a :href="ITESTIN.hostname + '/enterprise/index.htm'">切换企业</a>
            </el-dropdown-item>
            <el-dropdown-item>
              <a :href="ITESTIN.hostname + '/project/index.htm'">切换项目</a>
            </el-dropdown-item>
            <el-dropdown-item>
              <a :href="ITESTIN.hostname + '/account/logout.htm'">退出</a>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
import cfg from '~/config'
import InitPage from '~/components/InitPageReport'
import {api} from '../../service'
import { mapMutations } from 'vuex'

export default {
  name: 'Header',
  mixins: [InitPage],
  props: {
    logoUrl: {
      type: String,
      default: ''
    },
    logoHref: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      list: [],
      value: '',
      ITESTIN: cfg.ITESTIN,
      userInfo: {},
      projectSelect: '',
      projectList: []
    }
  },
  created () {
    this.getUserInfo()
    this.getProjectList()
  },
  methods: {
    ...mapMutations({
      setUserInfo: 'SET_USER_INFO'
    }),
    getUserInfo () {
      api.user.getUserInfo().then(res => {
        this.userInfo = res
        this.projectSelect = res.projectid
        this.setUserInfo(res || {})
      })
    },
    getProjectList () {
      api.project.getProjectList().then(data => {
        this.projectList = data.list
      })
    },
    jump () {
      api.project.projectCut(this.projectSelect).then(() => {
        window.location.href = this.ITESTIN.href
      })
    }
  }
}
</script>
<style lang="less">
  .menu {
    .menu-list {
      .el-select {
        input {
          background: #373d41;
          border: none;
          color: #ffffff;
        }
        .el-input__suffix {
          display: none;
        }
      }
    }
  }
</style>
<style scoped lang="less">
  .header {
    width: 100%;
    height: 50px;
    background: #373d41;
    padding: 0 20px;
    display: flex;
    align-items: center;
    .logo {
      height: 25px;
      /*margin-left: 20px;*/
      display: flex;
      img {
        width: 140px;
        height: 25px;
      }
      .monitorName {
        color: #007ee8;
        margin-left: 10px;
        height: 20px;
        position: relative;
        font-weight: bold;
        font-size: 16px;
        margin-top: 6px;
        &:before {
          content: "\20";
          display: inline-block;
          width: 1px;
          height: 15px;
          background-color: white;
          opacity: 0.1;
          position: absolute;
          bottom: 0;
          left: -5px;
        }
      }
    }
    .menu {
      margin-left: 10px;
      display: flex;
      flex: 1;
      justify-content: space-between;
    }
  }
</style>
