<template>
  <div>
    <div class="comhead">
      <div class="comhead-logo">
        <img src="@/assets/img/comhead-logo.png" alt="">
      </div>
      <div class="comhead-nav">
        <ul>
          <!-- <li
          v-for="(item, index) in navList"
          :key="index"
          :class="navSelectd * 1 === (index * 1) ? 'navLiActive' : ''"
          @click="changeNav(index, item.id)"
        >
          {{ item.title }}
        </li> -->
          <nuxt-link
            v-for="(item, index) in navList"
            :key="index"
            tag="li"
            :to="item.path"
            active-class="head--active"
          >
            {{ item.title }}
          </nuxt-link>
        </ul>
      </div>
      <div class="comhead-handle">
        <div class="comhead-handle-sec">
          <div>今天是{{ nowDate }} {{ nowWeek }}</div>
          <div>
            <el-input v-model="input" placeholder="请输入内容" clearable />
            <p />
          </div>
        </div>
      </div>
    </div>
    <Nuxt />
    <Footer />
  </div>
</template>
<script>
import Footer from '@/components/footer.vue'
// import Head from '@/components/head.vue'
export default {
  components: {
    // Head,
    Footer
  },
  data () {
    return {
      nowDate: '',
      nowTime: '',
      nowWeek: '',
      navList: [
        { id: 1, title: '首页', path: '/index' },
        { id: 2, title: '信息公开', path: '/newsOpen' },
        { id: 3, title: '党纪法规', path: '/list' },
        { id: 4, title: '以案说纪', path: '/list' },
        { id: 5, title: '教育基地', path: '/list' },
        { id: 6, title: '廉政视频', path: '/list' },
        { id: 7, title: '监督举报', path: '/list' }
      ],
      navSelectd: 0,
      input: ''
    }
  },
  mounted () {
    const selectIndex = sessionStorage.getItem('selectIndex')
    if (selectIndex) {
      this.navSelectd = sessionStorage.getItem('selectIndex')
    }
    this.setNowTimes()
  },
  methods: {
    // 导航选中
    changeNav (index, id) {
      this.navSelectd = index
      sessionStorage.setItem('selectIndex', index)
      switch (id) {
        case 1:
          this.$router.push('/')
          break
        case 2:
          this.$router.push('/newsOpen')
          break
        case 3:
          this.$router.push('/')
          break
        case 4:
          this.$router.push('/list/imgText')
          break
        case 5:
          this.$router.push('/list/imgText')
          break
        case 6:
          this.$router.push('/list/imgText')
          break
        case 7:
          this.$router.push('/')
          break
      }
    },
    setNowTimes () {
      const myDate = new Date()
      const wk = myDate.getDay()
      const yy = String(myDate.getFullYear())
      const mm = myDate.getMonth() + 1
      const dd = String(
        myDate.getDate() < 10 ? '0' + myDate.getDate() : myDate.getDate()
      )
      // let hou = String(
      //   myDate.getHours() < 10 ? "0" + myDate.getHours() : myDate.getHours()
      // );
      // let min = String(
      //   myDate.getMinutes() < 10
      //     ? "0" + myDate.getMinutes()
      //     : myDate.getMinutes()
      // );
      // let sec = String(
      //   myDate.getSeconds() < 10
      //     ? "0" + myDate.getSeconds()
      //     : myDate.getSeconds()
      // );
      const weeks = [
        '星期日',
        '星期一',
        '星期二',
        '星期三',
        '星期四',
        '星期五',
        '星期六'
      ]
      const week = weeks[wk]
      this.nowDate = yy + '年' + mm + '月' + dd + '日'
      // this.nowTime = hou + ":" + min + ":" + sec;
      this.nowWeek = week
    }
  }
}
</script>
<style lang="scss">
.comhead {
  box-sizing: initial;
  .comhead-logo {
    width: 100%;
    height: 130px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: url(./../assets/img/comhead-bg.jpg) no-repeat center;
    background-size: cover;
    > img {
      display: block;
      max-width: 100%;
      margin: 0 auto;
    }
  }
  .comhead-nav {
    width: 100%;
    background: #cc0001;
    ul {
      height: 65px;
      width: 1000px;
      margin: 0 auto;
      > li {
        float: left;
        width: 122px;
        padding: 0 10px;
        text-align: center;
        line-height: 65px;
        font-size: 22px;
        color: #fff;
        cursor: pointer;
      }
      li:hover {
        background: #f24041;
      }
      > .navLiActive {
        background: #f24041;
      }
    }
  }
  .comhead-handle {
    width: 100%;
    display: flex;
    justify-content: center;
    background: #e3e3e3;
    .comhead-handle-sec {
      width: 1000px;
      display: flex;
      justify-content: space-between;
      line-height: 45px;
      font-size: 16px;
      color: #333;
      div:last-child {
        display: flex;
        align-items: center;
        .el-input {
          width: 218px;
          .el-input__inner {
            height: 29px;
            margin-top: 8px;
            font-size: 16px;
          }
          .el-input__inner:focus {
            border: 1px solid #333;
          }
        }
        p {
          width: 68px;
          height: 28px;
          cursor: pointer;
          background: #b8b8b8 url(./../assets/img/search.jpg) no-repeat
            center;
        }
      }
    }
  }
}
</style>
<style scoped>
.head--active {
  background: #f24041;
}
</style>
