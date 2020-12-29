<template>
  <div class="list2">
    <!-- <comHead></comHead> -->
    <div class="list2-container">
      <div class="mbx">
        当前位置：<span @click="$router.push('/portal')">首页</span> > <span>列表</span>
      </div>
      <div class="list2-section">
        <div class="nr_left">
          <div>
            <p class="nr_left_top">
              <img src="@/assets/img/nr_left_top.png" alt="">
              <span>机构简介</span>
            </p>
            <ul class="nr_left_List">
              <li v-for="item in nr_left_list" :key="item.id" :class="organSelec * 1 === item.id * 1 ? 'nr_navActive' : ''" @click="changeOrgan(item.id, item.path)">
                {{ item.title }}
              </li>
            </ul>
          </div>
        </div>
        <!-- <div class="nr_right"> -->
        <nuxt />
        <!-- </div> -->
      </div>
    </div>
    <!-- <comFoot></comFoot> -->
  </div>
</template>
<script>
// import comHead from './../../components/common/head'
// import comFoot from './../../components/common/foot'
export default {
  data () {
    return {
      nr_left_list: [
        { id: 1, title: '领导机构', path: '/newsOpen' },
        { id: 2, title: '组织机构', path: '/newsOpen/gzcx' }
      ],
      organSelec: 1
    }
  },
  // components: {
  //   comHead,
  //   comFoot
  // },
  methods: {
    changeOrgan (index, path) {
      this.organSelec = index
      this.$router.push(path)
    }
  }
}
</script>
<style lang="scss">
.list2 {
  .list2-container {
    width: 1000px;
    margin: 0 auto;
    .mbx {
      margin: 10px 0;
      line-height: 40px;
      font-size: 18px;
      font-weight: 400;
      span {
        cursor: pointer;
      }
      span:hover {
        color: #f00;
      }
    }
    .list2-section {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      .nr_left {
        width: 225px;
        .nr_left_top {
          display: flex;
          align-items: center;
          justify-content: center;
          line-height: 64px;
          background: #0247a2;
          text-align: center;
          color: #fff;
          font-size: 20px;
          border-top-left-radius: 5px;
          border-top-right-radius: 5px;
          > img {
            margin: 0 5px;
          }
        }
        > span {
          font-size: 20px;
          color: #fff;
        }
        .nr_left_List {
          border: 1px solid #ccc;
          border-bottom: 2px solid #0247a2;
          li {
            font-size: 20px;
            padding-left: 10px;
            line-height: 60px;
            vertical-align: middle;
            list-style-type: none;
            text-align: center;
            border-bottom: 1px solid #fff;
            cursor: pointer;
          }
          .nr_navActive {
            color: #cc0001;
          }
          li:hover {
            color: #cc0001;
          }
        }
      }
      .nr_right {
        width: 755px;
        background: #fafafa;
        > ul {
          padding: 30px;
          margin-bottom: 30px;
          overflow: auto;
          li {
            float: left;
            width: 140px;
            margin: 15px 16px;
            min-height: 290px;
            > img {
              width: 133px;
              height: 168px;
              padding: 1px;
              border: 1px solid #ddd;
              box-shadow: 2px 4px 3px #eee;
            }
            > p {
              margin: 10px 0;
              text-align: center;
              font-size: 20px;
              font-weight: bold;
              color: #333;
              background: url(./../assets/img/list2-right.png) no-repeat 20px center;
            }
            > span {
              display: inline-block;
              width: 140px;
              margin: 0 auto;
              text-align: center;
              font-size: 18px;
              color: #717171;
            }
          }
          li:first-child {
            padding-right: 360px;
          }
          li:nth-child(3) {
            padding-right: 322px;
          }
        }
        > p {
          padding: 0 30px;
          margin-bottom: 30px;
          font-size: 20px;
          line-height: 1.6
        }
      }
    }
  }
}
</style>
