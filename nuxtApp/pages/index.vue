<template>
  <section class="container">
    <div class="container-carousel">
      <el-carousel :interval="3000" arrow="always">
        <el-carousel-item v-for="item in imgUrl" :key="item">
          <img :src=item alt="">
        </el-carousel-item>
      </el-carousel>
    </div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>卡片名称</span>
        <el-button style="float: right; padding: 3px 0" type="text" @click="sss">操作按钮</el-button>
      </div>
      <div v-for="o in 4" :key="o" class="text item">
        {{'列表内容 ' + o }}
      </div>
    </el-card>
    <div>
      <el-button type='primary' @click="see">按钮</el-button>
    </div>
    <div>
      <nuxt-link :to="{name: 'nav', params:{id: 1, key: 'as'}}">跳转nav</nuxt-link>
    </div>
    {{mes}}
  </section>
</template>

<script>
import url1 from '../assets/img/contain1.jpg'
import url2 from '../assets/img/contain2.jpg'
import url3 from '../assets/img/contain3.jpg'
import url4 from '../assets/img/contain4.jpg'
import axios from 'axios'

export default {
  data () {
    return {
      imgUrl: [
        url1, url2, url3, url4
      ],
      mes: ''
    }
  },
  methods: {
    async sss () {
      const url = 'health/login?account=zhouling&password=123456'
      const init = 'health/common/initPage?accessType=web'
      await axios.put(url)
      await axios.get(init)
      await axios.get('health/common/getUserInfo')
    },
    async see () {
      const res = await this.$store.dispatch('GET_STUDENT', {
        keyword: '李',
        pageNo: 1,
        pageSize: 10
      })
      return res
    }
  }
}
</script>

<style lang="scss" >
@import '~/assets/scss/variable.scss';
@import '~/assets/scss/mixin.scss';
@import '~/assets/scss/common.scss';
.container {
  .container-carousel {
    .el-carousel__item h3 {
      color: #475669;
      font-size: 18px;
      opacity: 0.75;
      line-height: 300px;
      margin: 0;
    }
    .el-carousel__item:nth-child(2n) {
      background-color: #99a9bf;
    }
    .el-carousel__item:nth-child(2n+1) {
      background-color: #d3dce6;
    }
  }
  .el-carousel {
    .el-carousel__item {
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
  }
}

</style>
