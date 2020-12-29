<template>
  <div class="portal">
    <div class="portal-title">
      <img src="@/assets/img/portal-title.jpg" alt="">
    </div>
    <!-- 消息滚动 -->
    <div class="portal-notice">
      <client-only>
        <vue-seamless-scroll
          :data="events"
          :class-option="optionSingleHeightTime"
          class="seamless-warp"
        >
          <ul class="item">
            <li v-for="(item, index) in events" :key="index">
              <span class="title" v-text="item" />
            </li>
          </ul>
        </vue-seamless-scroll>
      </client-only>
    </div>
    <!-- 轮播图 -->
    <div class="portal-carousel">
      <el-carousel :interval="5000" arrow="none">
        <el-carousel-item v-for="(item, index) in imgList" :key="index">
          <img :src="item.imgUrl" alt="">
          <p>{{ item.title }}</p>
        </el-carousel-item>
      </el-carousel>
      <div class="portal-carouselList">
        <ul>
          <li>怀柔:定制过年</li>
          <li>
            怀柔:定制过年怀柔:定制过年怀柔:定制过年怀柔:定制过年怀柔:定制过年怀柔:定制过年怀柔:定制过年怀柔:定制过年
          </li>
          <li>
            怀柔:定制过年
          </li>
        </ul>
        <span>更多+</span>
      </div>
    </div>
    <!-- 新闻 -->
    <div class="portal-news">
      <div class="portal-new-box">
        <ul>
          <dl>
            <dt>要闻要论</dt>
            <dd @click="goList()">
              更多+
            </dd>
          </dl>
          <li @click="goDetail(1)">
            <p>续写更多“春天的故事” 习近平总书记出席深续写更多“春天</p>
            <span>10-16</span>
          </li>
          <li @click="goDetail(2)">
            <p>续写更多“春天的故事” 习近平总书记出席深续写更多“春天</p>
            <span>10-16</span>
          </li>
          <li @click="goDetail(3)">
            <p>续写更多“春天的故事” 习近平总书记出席深续写更多“春天</p>
            <span>10-16</span>
          </li>
        </ul>
        <ul>
          <dl>
            <dt>要闻要论</dt>
            <dd>更多+</dd>
          </dl>
          <li>
            <p>续写更多“春天的故事” 习近平总书记出席深续写更多“春天</p>
            <span>10-16</span>
          </li>
          <li>
            <p>续写更多“春天的故事” 习近平总书记出席深续写更多“春天</p>
            <span>10-16</span>
          </li>
          <li>
            <p>续写更多“春天的故事” 习近平总书记出席深续写更多“春天</p>
            <span>10-16</span>
          </li>
        </ul>
      </div>
    </div>
    <!-- 内容展示 -->
    <div class="portal-show">
      <ul>
        <li class="showImg1">
          <img src="@/assets/img/portal-show-img1.png" alt="">
          <img src="@/assets/img/portal-show-img2.png" alt="">
        </li>
        <li class="showImg2">
          <img src="@/assets/img/portal-show-img3.jpg" alt="">
          <img src="@/assets/img/portal-show-img4.jpg" alt="">
        </li>
        <li class="showImg3">
          <img src="@/assets/img/portal-show-img5.jpg" alt="">
          <img src="@/assets/img/portal-show-img6.jpg" alt="">
          <img src="@/assets/img/portal-show-img7.jpg" alt="">
        </li>
      </ul>
      <div class="portal-show-newBox">
        <ul>
          <dl>
            <dt>通知公告</dt>
            <dd>更多+</dd>
          </dl>
          <li>
            <p>续写更多“春天的故事” 习近平总书记出席深续写更多“春天</p>
            <span>10-16</span>
          </li>
          <li>
            <p>续写更多“春天的故事” 习近平总书记出席深续写更多“春天</p>
            <span>10-16</span>
          </li>
          <li>
            <p>续写更多“春天的故事” 习近平总书记出席深续写更多“春天</p>
            <span>10-16</span>
          </li>
        </ul>
        <!-- 举报方式 -->
        <ul class="portal-report">
          <dl>
            <dt>举报方式</dt>
            <dd />
          </dl>
          <li>
            <b>来信请寄：</b>
            <i>北京市怀柔区北大街45号怀柔区纪委区监委信访室</i>
          </li>
          <li>
            <b>邮政编码：</b>
            <i>101400</i>
          </li>
          <li>
            <b>来访请到：</b>
            <i>北京市怀柔区迎宾中路21号怀柔区矛盾调处中心区纪委区监委接访窗口</i>
          </li>
          <li>
            <b>举报电话：</b>
            <i>69623596</i>
          </li>
        </ul>
      </div>
    </div>
    <!-- 公告公示 -->
    <div class="portal-public">
      <div class="portal-publicBox">
        <div class="portal-publicShow1">
          <ul>
            <dl>
              <dt>以案说纪</dt>
              <dd>更多+</dd>
            </dl>
            <li>
              <img src="@/assets/img/portal-publicShow1Img1.jpg" alt="">
            </li>
          </ul>
          <ul>
            <dl>
              <dt>以案说纪</dt>
              <dd>更多+</dd>
            </dl>
            <li>
              <img src="@/assets/img/portal-publicShow1Img2.jpg" alt="">
            </li>
          </ul>
        </div>
        <div class="portal-publicShow2">
          <div class="portal-publicShow2-top">
            <img src="@/assets/img/portal-publicShow2Img1.jpg" alt="">
            <img src="@/assets/img/portal-publicShow2Img2.jpg" alt="">
          </div>
          <div class="portal-publicShow2-bottom">
            <div class="portalVideoTitle">
              廉政视频
            </div>
            <div class="portalVideoBox">
              <dl>
                <dt>
                  <img src="@/assets/img/portalVideo1.jpg" alt="">
                </dt>
                <dd>· 微动漫丨“解字话微动漫丨“解字话微动漫丨“解字话</dd>
              </dl>
              <dl>
                <dt>
                  <img src="@/assets/img/portalVideo1.jpg" alt="">
                </dt>
                <dd>· 微动漫丨“解字话微动漫丨“解字话微动漫丨“解字话</dd>
              </dl>
              <dl>
                <dt>
                  <img src="@/assets/img/portalVideo1.jpg" alt="">
                </dt>
                <dd>· 微动漫丨“解字话微动漫丨“解字话微动漫丨“解字话</dd>
              </dl>
              <dl>
                <dt>
                  <img src="@/assets/img/portalVideo1.jpg" alt="">
                </dt>
                <dd>· 微动漫丨“解字话微动漫丨“解字话微动漫丨“解字话</dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 友情链接 -->
    <div class="links">
      <div class="links-con">
        <h2>友情链接</h2>
        <div class="linksList">
          <a href="http://www.ccdi.gov.cn/" @mouseenter="unShowLinks">
            中央纪委国家监委网站
          </a>
          <a href="http://www.bjsupervision.gov.cn/" @mouseenter="unShowLinks">
            北京纪检监察网
          </a>
          <a href="http://www.bjhrqw.gov.cn/" @mouseenter="unShowLinks">
            中共北京市怀柔区委员会
          </a>
          <a href="http://www.bjhr.gov.cn/" @mouseenter="unShowLinks">
            怀柔信息网
          </a>
          <a href="" class="linksHover" @mouseenter="showLinks">
            北京市各区纪检监察网
            <ul
              v-if="linksFlag"
              class="linksHoverList"
              @mouseleave="unShowLinks"
            >
              <li v-for="(item, index) in linksList" :key="index">
                <a :href="item.url">{{ item.title }}</a>
              </li>
            </ul>
          </a>
        </div>
      </div>
    </div>
    <!-- 微信扫码悬浮 -->
    <div v-if="scSlideFlag" class="scarnSlide">
      <div class="sc-close" @click="closeSlide">
        关闭
      </div>
      <ul>
        <li class="sc-top">
          扫码关注
        </li>
        <li>
          <img src="@/assets/img/jw-wx.jpg" alt="">
          <p>
            扫一扫二维码关注
            <br>
            “怀柔纪检监察”
            <br>
            微信
          </p>
        </li>
        <li>
          <img src="@/assets/img/jw-pt.jpg" alt="">
          <p>
            扫一扫二维码下载
            <br>
            “怀柔纪检监察
            <br>
            举报平台”App
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
// import vueSeamless from 'vue-seamless-scroll'
export default {
  // 参数的有效性查看
  validate ({ params, query }) {
    return true
  },
  // 读数据,vuex
  fetch ({ store }) {
    // eslint-disable-next-line no-console
    console.log('fetch')
    // 异步业务逻辑，读取服务器端数据提交给vuex
  },
  // 读数据，返回组件
  async asyncData ({ $axios }) {
    await $axios('/index.html').then((res) => {
      // eslint-disable-next-line no-console
      console.log('asyncData', res.data)
    })
    // 异步业务逻辑，读取服务器端数据
  },
  data () {
    return {
      nowDate: '',
      nowTime: '',
      nowWeek: '',
      // 控制动画
      animateUp: false,
      // 计时器
      intNum: null,
      // 内容
      events: [
        '1标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题1',
        '2标题标题',
        '3标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题3',
        '4标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题4',
        '5标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题5',
        '标题标题标题标'
      ],
      imgList: [
        {
          title: '白哦提意1',
          imgUrl: require('@/assets/img/banner1.jpg')
        },
        {
          title: '白哦提意2',
          imgUrl: require('@/assets/img/banner2.jpg')
        },
        {
          title: '白哦提意3',
          imgUrl: require('@/assets/img/banner3.jpg')
        }
      ],
      linksFlag: false,
      linksList: [
        {
          title: '东城区',
          url: 'http://www.dcqjw.gov.cn/'
        },
        {
          title: '西城区',
          url: 'http://www.xcjw.gov.cn/'
        },
        {
          title: '朝阳区',
          url: 'http://www.chyjw.gov.cn/'
        },
        {
          title: '海淀区',
          url: 'http://www.hdcdi.gov.cn/'
        },
        {
          title: '丰台区',
          url: 'http://www.ftjj.gov.cn/'
        },
        {
          title: '石景山区',
          url: 'http://www.bjsjs.gov.cn/'
        },
        {
          title: '门头沟区',
          url: 'http://jjw.bjmtg.gov.cn/'
        },
        {
          title: '房山区',
          url: 'http://jjjc.bjfsh.gov.cn/'
        },
        {
          title: '通州区',
          url: 'http://quwei.bjtzh.gov.cn/jjw/'
        },
        {
          title: '大兴区',
          url: 'http://dxjjjc.bjdx.gov.cn/'
        },
        {
          title: '顺义区',
          url: 'http://jwjcw.bjshy.gov.cn/'
        },
        {
          title: '昌平区',
          url: 'http://chpjw.bjchp.gov.cn/'
        },
        {
          title: '平谷区',
          url: 'http://jjw.bjpg.gov.cn/'
        },
        {
          title: '密云区',
          url: 'http://www.bjmyjw.gov.cn/'
        },
        {
          title: '延庆区',
          url: 'http://jw.bjyq.gov.cn/'
        }
      ],
      scSlideFlag: true
    }
  },
  computed: {
    optionSingleHeightTime () {
      return {
        singleHeight: 97,
        waitTime: 1500,
        step: 2
      }
    }
  },
  methods: {
    showLinks () {
      this.linksFlag = true
    },
    unShowLinks () {
      this.linksFlag = false
    },
    // 关闭二维码浮框
    closeSlide () {
      this.scSlideFlag = false
    },
    // 文章详情
    goDetail (val) {
      this.$router.push({ path: '/detail/' + val, params: { id: val } })
    },
    // 跳转列表
    goList () {
      this.$router.push({ path: '/list', params: { listId: 1 } })
    }
  }
}
</script>
<style lang="scss">
.portal {
  width: 100%;
  min-width: 1000px;
  margin: 0 auto;
  .portal-title {
    width: 1000px;
    margin: 20px auto;
  }
  .portal-notice {
    width: 1000px;
    height: 97px;
    margin: 0 auto;
    overflow: hidden;
    border: 1px solid #d3d3d3;
    box-shadow: 0 0 2px 2px #d3d3d3;
    .seamless-warp {
      height: 97px;
      overflow: hidden;
      ul {
        li {
          line-height: 97px;
          padding: 0 80px;
          font-weight: bold;
          font-size: 34px;
          color: #cc0001;
          overflow: hidden; //超出的文本隐藏
          text-overflow: ellipsis; //溢出用省略号显示
          white-space: nowrap;
        }
      }
    }
  }
  .portal-carousel {
    width: 1000px;
    margin: 20px auto 0;
    overflow: auto;
    .el-carousel {
      float: left;
      width: 540px;
      overflow: hidden;
      .el-carousel__container {
        .el-carousel__item {
          p {
            position: absolute;
            bottom: 0px;
            left: 0;
            right: 0;
            height: 40px;
            line-height: 40px;
            padding-left: 14px;
            font-size: 16px;
            color: #fff;
            background: url(./../assets/img/banner_title.png) repeat-x center;
          }
        }
      }
      .el-carousel__indicators {
        right: 0;
        left: auto;
        transform: translateX(-20%);
        > .is-active {
          button {
            background: #005cb3;
          }
        }
        .el-carousel__indicator {
          float: left;
          margin: 0 5px;
          .el-carousel__button {
            height: 10px;
            width: 10px;
            opacity: 1;
            border-radius: 50%;
          }
        }
      }
    }
    .portal-carouselList {
      width: 440px;
      float: right;
      > ul {
        li {
          height: 60px;
          padding: 15px 0;
          line-height: 35px;
          font-size: 20px;
          color: #333;
          border-top: 1px solid #d2d2d2;
          overflow: hidden; //超出文本隐藏
          text-overflow: ellipsis; //溢出省略号显示
          display: -webkit-box; //将对象作为弹性伸缩盒子
          -webkit-box-orient: vertical; //设置伸缩盒子的子元素排列方式-从上到下垂直排列
          -webkit-line-clamp: 2;
        }
        li:first-child {
          border-top: none;
        }
      }
      > span {
        display: block;
        text-align: right;
        font-size: 16px;
        cursor: pointer;
      }
    }
  }
  .portal-news {
    padding: 40px 0;
    background: #f2f2f2 url(./../assets/img/portal-news-bg.jpg) no-repeat
      center bottom;
    .portal-new-box {
      display: flex;
      justify-content: space-between;
      width: 1000px;
      margin: 0 auto;
      > ul {
        float: left;
        width: 463px;
        padding: 0 10px 10px 20px;
        background: #fff;
        > dl {
          display: flex;
          justify-content: space-between;
          height: 44px;
          margin-bottom: 10px;
          padding: 0 10px 0 20px;
          background: url(./../assets/img/portal-news-titleBg.png) repeat-x
            center bottom;
          dt {
            width: 147px;
            height: 44px;
            // padding-left: 8px;
            line-height: 44px;
            font-size: 22px;
            font-weight: bold;
            text-align: center;
            color: #fff;
            background: url(./../assets/img/portal-news.png) no-repeat left;
          }
          dd {
            line-height: 44px;
            color: #999;
            font-size: 16px;
            cursor: pointer;
          }
        }
        > li {
          display: flex;
          justify-content: space-between;
          align-items: center;
          > p {
            flex: 1;
            margin-right: 10px;
            font-size: 18px;
            color: #333;
            line-height: 40px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          > span {
            line-height: 40px;
            color: #b9b9b9;
            font-size: 18px;
          }
        }
        > li:hover {
          cursor: pointer;
          p {
            color: #cc0001;
          }
          span {
            color: #cc0001;
          }
        }
      }
    }
  }
  .portal-show {
    padding-top: 40px;
    > ul {
      width: 1000px;
      margin: 0 auto 40px;
      li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
      }
      .showImg1 {
        img {
          width: 493px;
          height: 156px;
        }
      }
      .showImg2 {
        img {
          width: 493px;
          height: 80px;
        }
      }
      .showImg3 {
        img {
          width: 324px;
          height: 80px;
        }
      }
    }
    .portal-show-newBox {
      display: flex;
      justify-content: space-between;
      width: 1000px;
      margin: 0 auto;
      > ul {
        float: left;
        width: 493px;
        padding: 0 0 10px 0;
        background: #fff;
        > dl {
          display: flex;
          justify-content: space-between;
          height: 44px;
          margin-bottom: 10px;
          padding: 0 10px 0 20px;
          background: url(./../assets/img/portal-news-titleBg.png) repeat-x
            center bottom;
          dt {
            width: 147px;
            height: 44px;
            // padding-left: 8px;
            line-height: 44px;
            font-size: 22px;
            font-weight: bold;
            text-align: center;
            color: #fff;
            background: url(./../assets/img/portal-news.png) no-repeat left;
          }
          dd {
            line-height: 44px;
            color: #999;
            font-size: 16px;
            cursor: pointer;
          }
        }
        > li {
          display: flex;
          justify-content: space-between;
          align-items: center;
          > p {
            flex: 1;
            margin-right: 10px;
            font-size: 18px;
            color: #333;
            line-height: 40px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          > span {
            line-height: 40px;
            color: #b9b9b9;
            font-size: 18px;
          }
        }
        > li:hover {
          cursor: pointer;
          p {
            color: #cc0001;
          }
          span {
            color: #cc0001;
          }
        }
      }
      .portal-report {
        float: left;
        width: 493px;
        padding: 0 0 10px 0;
        background: #fff;
        > dl {
          display: flex;
          justify-content: space-between;
          height: 44px;
          margin-bottom: 10px;
          padding: 0 10px 0 20px;
          background: url(./../assets/img/portal-news-titleBg.png) repeat-x
            center bottom;
          dt {
            width: 147px;
            height: 44px;
            // padding-left: 8px;
            line-height: 44px;
            font-size: 22px;
            font-weight: bold;
            text-align: center;
            color: #fff;
            background: url(./../assets/img/portal-news.png) no-repeat left;
          }
          dd {
            line-height: 44px;
            color: #999;
            font-size: 16px;
            cursor: pointer;
          }
        }
        > li {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin: 0 30px;
          padding: 12px 0;
          line-height: 30px;
          font-size: 20px;
          color: #333;
          border-bottom: 1px dashed #e2e2e2;
          > i {
            flex: 1;
            font-style: normal;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
          }
        }
      }
    }
  }
  .portal-public {
    width: 100%;
    padding: 40px 0;
    background: url(./../assets/img/portal-public-bg.jpg) no-repeat center;
    background-size: cover;
    .portal-publicBox {
      .portal-publicShow1 {
        width: 1000px;
        margin: 0 auto;
        // overflow: auto;
        display: flex;
        justify-content: space-between;
        > ul {
          width: 490px;
          > dl {
            display: flex;
            justify-content: space-between;
            height: 44px;
            margin-bottom: 10px;
            padding: 0 10px 0 20px;
            background: url(./../assets/img/portal-news-titleBg.png) repeat-x
              center bottom;
            dt {
              width: 147px;
              height: 44px;
              line-height: 44px;
              font-size: 22px;
              font-weight: bold;
              text-align: center;
              color: #fff;
              background: url(./../assets/img/portal-news.png) no-repeat left;
            }
            dd {
              padding-top: 15px;
              line-height: 29px;
              color: #999;
              font-size: 16px;
              cursor: pointer;
            }
          }
          > li {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 22px;
            border: 1px solid #ddd;
            img {
              width: 100%;
              height: 276px;
            }
          }
        }
      }
      .portal-publicShow2 {
        width: 1000px;
        margin: 0 auto;
        .portal-publicShow2-top {
          display: flex;
          justify-content: space-between;
          margin-top: 20px;
          img {
            width: 492px;
            height: 95px;
          }
        }
        .portal-publicShow2-bottom {
          width: 1000px;
          margin: 40px auto 0;
          display: flex;
          align-items: center;
          border: 1px solid #dcdcdc;
          .portalVideoTitle {
            width: 58px;
            height: 164px;
            padding-top: 40px;
            font-size: 30px;
            background: #024fa9;
            color: #fff;
            font-weight: bold;
            text-align: center;
            line-height: 30px;
          }
          .portalVideoBox {
            height: 178px;
            padding: 26px 30px 0 30px;
            dl {
              float: left;
              width: 190px;
              margin: 0 15px;
              text-align: center;
              dt {
                img {
                  width: 190px;
                  height: 118px;
                }
              }
              dd {
                padding-top: 14px;
                font-size: 18px;
                color: #555;
                overflow: hidden; //超出的文本隐藏
                text-overflow: ellipsis; //溢出用省略号显示
                white-space: nowrap;
              }
            }
          }
        }
      }
    }
  }
  .links {
    width: 100%;
    .links-con {
      width: 1000px;
      height: 115px;
      margin: 0 auto;
      padding: 10px 0;
      h2 {
        height: 42px;
        line-height: 42px;
        font-size: 20px;
        color: #555;
        border-bottom: 1px solid #dedede;
      }
      > .linksList {
        padding-top: 10px;
        > a {
          float: left;
          line-height: 30px;
          margin: 0 28px;
          font-size: 16px;
          color: #555;
        }
        .linksHover {
          position: relative;
          .linksHoverList {
            position: absolute;
            left: -800px;
            right: 0px;
            top: 40px;
            padding: 10px 20px;
            z-index: 99;
            background: #eeeeee;
            > li {
              float: left;
              line-height: 28px;
              text-align: center;
              width: 84px;
              > a {
                font-size: 16px;
                color: #333;
              }
            }
          }
        }
      }
    }
  }
  .scarnSlide {
    position: fixed;
    z-index: 10;
    top: 50%;
    right: 20px;
    margin-top: -160px;
    .sc-close {
      cursor: pointer;
      text-align: right;
      font-size: 12px;
      color: #333;
      background: url(./../assets/img/sc-close.jpg) no-repeat 92px center;
    }
    > ul {
      padding: 0 16px;
      border: 1px solid #dedede;
      background: #fff;
      li {
        padding: 6px 0 6px;
        > img {
          width: 82px;
          height: 82px;
          margin: 0 auto;
          display: block;
        }
        > p {
          font-size: 12px;
          line-height: 18px;
          text-align: center;
          color: #cc0001;
        }
      }
      .sc-top {
        font-size: 16px;
        color: #333;
        text-align: center;
      }
    }
  }
}
</style>
