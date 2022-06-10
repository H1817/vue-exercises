<template>
  <div class="container">
    <!-- 我：服务 -->
    <div class="serve">
      <van-cell is-link>
        <template #title>
          <span class="box-title"> 服务</span>
        </template>
        <template #icon>
          <van-icon name="wechat-pay" color="green" size="25px" />
        </template>
      </van-cell>
    </div>
    <!-- 我：收藏，朋友圈，卡包，表情 -->
    <div class="mid-box">
      <van-cell is-link>
        <template #title>
          <span class="box-title"> 收藏</span>
        </template>
        <template #icon>
          <van-icon name="like" color="#FA5151" size="25px" />
        </template>
      </van-cell>
      <van-cell is-link>
        <template #title>
          <span class="box-title">朋友圈</span>
        </template>
        <template #icon>
          <van-icon name="photo" color="#10AEFF" size="25px" />
        </template>
      </van-cell>
      <van-cell is-link>
        <template #title>
          <span class="box-title">卡包</span>
        </template>
        <template #icon>
          <van-icon name="card" color="#10AEFF" size="25px" />
        </template>
      </van-cell>
      <van-cell is-link>
        <template #title>
          <span class="box-title"> 表情</span>
        </template>
        <template #icon>
          <van-icon name="smile" color="#FFD53F" size="25px" />
        </template>
      </van-cell>
    </div>
    <!-- 我：设置 -->
    <div class="footer-box">
      <van-cell is-link>
        <template #title>
          <span class="box-title"> &nbsp;&nbsp;设置</span>
        </template>
        <template #icon>
          <van-icon name="setting" color="#10AEFF" size="20px" />
        </template>
      </van-cell>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  margin-bottom: 60px;
}
/* 给mid-box中的单元格加底部下划线，最后一个没有下划线 */
.mid-box .van-cell {
  border-bottom: 1px solid silver;
}
.mid-box .van-cell:last-child {
  border-bottom: none;
}
.serve {
  margin: 10px 0 10px 0;
}
.van-cell {
  background-color: whitesmoke;
  height: 50px;
}
.footer-box {
  margin: 10px 0 0 0;
}
.box-title {
  margin: 5px 10px 10px 10px;
}
</style>