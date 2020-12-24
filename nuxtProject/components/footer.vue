<template>
  <footer>
    <div class="comFootCon">
      <img class="comFootLog" src="@/assets/img/comFootLogo.png" alt="">
      <p>
        中共怀柔区纪委、怀柔区监察委员会 版权所有
        <br>
        地址：北京市怀柔区北大街45号 邮编：101400
        <br>
        ICP备案编号：京ICP备15025097号-1
      </p>
      <a
        href="http://bszs.conac.cn/sitename?method=show&id=08E10DEEDE862E02E053022819ACFDE3"
        name="4020390a12aaf1f19712eaf2663462ff"
      >
        <img src="@/assets/img/red.png" alt="">
        360网站安全监测
      </a>
    </div>
  </footer>
</template>
<style lang="scss">
footer {
  background: #024fa9;
  padding: 40px 0;
  .comFootCon {
    width: 460px;
    padding: 0 270px;
    margin: 0 auto;
    position: relative;
    box-sizing: initial;
    .comFootLog {
      position: absolute;
      top: 10px;
      left: 125px;
    }
    > p {
      width: 460px;
      font-size: 16px;
      color: #fff;
      line-height: 40px;
      text-align: center;
    }
    > a {
      position: absolute;
      top: 10px;
      right: 114px;
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 16px;
      color: #fff;
    }
  }
}
</style>
