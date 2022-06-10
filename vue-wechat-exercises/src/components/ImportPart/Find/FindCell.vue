<template>
  <div>
    <!-- 发现页朋友圈单元格 -->
    <div class="circle">
      <van-cell is-link>
        <template #title>
          <span class="box-title">
            <img
              src="@/assets/img/cicle.png"
              alt="朋友圈"
              width="25px"
              height="25px"
            /><span class="text">朋友圈</span></span
          >
        </template>
      </van-cell>
    </div>
    <!-- 贴近底部的字 -->
    <div class="bottom">
      <p>前往设置&nbsp;&nbsp;></p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/* 单元格距离页面顶部距离46+20px */
.circle {
  margin: 66px 0 20px 0;
}
.van-cell {
  background-color: whitesmoke;
}
.text {
  position: absolute;
  margin: 2px 10px 0 10px;
}
p {
  font-size: 10px;
  position: absolute;
  color: silver;
  float: bottom;
  top: 80%;
  left: 42%;
}
</style>