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
              <img src="./../../assets/img/nr_left_top.png" alt="">
              <span>机构简介</span>
            </p>
            <ul class="nr_left_List">
              <li v-for="item in nr_left_list" :key="item.id" :class="organSelec * 1 === item.id * 1 ? 'nr_navActive' : ''" @click="changeOrgan(item.id)">
                {{ item.title }}
              </li>
            </ul>
          </div>
        </div>
        <div class="nr_right">
          <ul>
            <li>
              <img src="http://www.bjhrjjjc.gov.cn/hrjjjc/resource/cms/2020/01/img_pc_site/微信图片_20200103084010.png" alt="">
              <p>程海军</p>
              <span>区委常委、区纪委书记、区监委主任</span>
            </li>
            <li>
              <img src="http://www.bjhrjjjc.gov.cn/hrjjjc/resource/cms/2020/01/img_pc_site/微信图片_20200103084010.png" alt="">
              <p>程海军</p>
              <span>区委常委、区纪委书记、区监委主任</span>
            </li>
            <li>
              <img src="http://www.bjhrjjjc.gov.cn/hrjjjc/resource/cms/2020/01/img_pc_site/微信图片_20200103084010.png" alt="">
              <p>程海军</p>
              <span>区委常委、区纪委书记、区监委主任</span>
            </li>
            <li>
              <img src="http://www.bjhrjjjc.gov.cn/hrjjjc/resource/cms/2020/01/img_pc_site/微信图片_20200103084010.png" alt="">
              <p>程海军</p>
              <span>区委常委、区纪委书记、区监委主任</span>
            </li>
            <li>
              <img src="http://www.bjhrjjjc.gov.cn/hrjjjc/resource/cms/2020/01/img_pc_site/微信图片_20200103084010.png" alt="">
              <p>程海军</p>
              <span>区委常委、区纪委书记、区监委主任</span>
            </li>
            <li>
              <img src="http://www.bjhrjjjc.gov.cn/hrjjjc/resource/cms/2020/01/img_pc_site/微信图片_20200103084010.png" alt="">
              <p>程海军</p>
              <span>区委常委、区纪委书记、区监委主任</span>
            </li>
            <li>
              <img src="http://www.bjhrjjjc.gov.cn/hrjjjc/resource/cms/2020/01/img_pc_site/微信图片_20200103084010.png" alt="">
              <p>程海军</p>
              <span>区委常委、区纪委书记、区监委主任</span>
            </li>
            <li>
              <img src="http://www.bjhrjjjc.gov.cn/hrjjjc/resource/cms/2020/01/img_pc_site/微信图片_20200103084010.png" alt="">
              <p>程海军</p>
              <span>区委常委、区纪委书记、区监委主任</span>
            </li>
          </ul>
          <p>
            怀柔区第五届纪律检查委员会委员：程海军、吴宏英、魏菲、窦宪策、樊起升、王艳杰、王亚静、
            刘俊军、杜连侠、李永志、张九龙、张志远、杜连明、牛凤林、周榕立、张同发、李春月、刘景文、
            崔连元、张卫兵、任会东、金文领、刘蔚、黄鹤、孟凡大、杨同柱、寇雪峰、张文顺、唐欣
          </p>
        </div>
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
        { id: 1, title: '领导机构' },
        { id: 2, title: '组织机构' }
      ],
      organSelec: 1
    }
  },
  // components: {
  //   comHead,
  //   comFoot
  // },
  methods: {
    changeOrgan (index) {
      this.organSelec = index
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
              background: url(./../../assets/img/list2-right.png) no-repeat 20px center;
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
