<template>
  <div class="top">
    <!-- 我的微信名、头像、微信号 -->
    <van-row>
      <van-col span="6"
        ><img src="@/assets/tx.png" alt="头像" width="65px" height="65px"
      /></van-col>
      <van-col span="16">
        <strong>荣荣荣</strong>
        <p>
          微信号：wxid_123456789 &nbsp;
          <van-icon name="qr" />
          <van-icon name="arrow" />
        </p>
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
img {
  border-radius: 5px;
}
.top {
  background-color: whitesmoke;
  padding: 50px 20px 20px 20px;
}
p {
  font-size: 15px;
  color: silver;
}
</style>