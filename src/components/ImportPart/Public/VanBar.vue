<template>
  <div>
    <!-- 公共部分，底部标签栏（路由模式）固定在底部 -->
    <router-view />
    <van-tabbar route active-color="green" :fixed="true">
      <van-tabbar-item replace to="/" icon="chat">微信</van-tabbar-item>
      <van-tabbar-item replace to="/friends" icon="friends"
        >通讯录</van-tabbar-item
      >
      <van-tabbar-item replace to="/find" icon="eye">发现</van-tabbar-item>
      <van-tabbar-item replace to="/user" icon="manager">我</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.van-tabbar {
  background-color: WhiteSmoke;
}
.van-tabbar-item {
  background-color: whitesmoke;
}
</style>