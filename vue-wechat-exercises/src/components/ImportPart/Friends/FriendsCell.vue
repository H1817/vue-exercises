<template>
  <div class="container">
    <!-- 添加好友界面的单元格 -->
    <!-- 页面微信自带的四个单元格 -->
    <div class="offical-cell">
      <!-- 新的好友 -->
      <van-cell>
        <template #title>
          <span class="custom-title"
            ><img
              src="@/assets/img/new-friend.png"
              alt="new-friend"
              width="30px"
              height="30px"
            /><span class="title-name">新的朋友</span></span
          >
        </template>
      </van-cell>
      <!-- 群聊 -->
      <van-cell>
        <template #title>
          <span class="custom-title"
            ><img
              src="@/assets/img/group-chat.png"
              alt="group"
              width="30px"
              height="30px"
            /><span class="title-name">群聊</span></span
          >
        </template>
      </van-cell>
      <!-- 标签 -->
      <van-cell>
        <template #title>
          <span class="custom-title"
            ><img
              src="@/assets/img/tag.png"
              alt="tag"
              width="30px"
              height="30px"
            /><span class="title-name">标签</span></span
          >
        </template>
      </van-cell>
      <!-- 公众号 -->
      <van-cell>
        <template #title>
          <span class="custom-title"
            ><img
              src="@/assets/img/official-accounts.png"
              alt="公众号"
              width="30px"
              height="30px"
            /><span class="title-name">公众号</span></span
          >
        </template>
      </van-cell>
    </div>
    <!-- 自己的好友 -->
    <van-index-bar>
      <van-index-anchor index="r" />
      <van-cell>
        <template #title>
          <span class="custom-title"
            ><img
              src="@/assets/tx.png"
              alt="头像"
              width="30px"
              height="30px"
            /><span class="title-name">荣荣荣</span></span
          >
        </template>
      </van-cell>
      <van-index-anchor index="w" />
      <van-cell>
        <template #title>
          <span class="custom-title"
            ><img
              src="@/assets/img/wx.png"
              alt="头像"
              width="30px"
              height="30px"
            /><span class="title-name">微信团队</span></span
          >
        </template>
      </van-cell>
      <van-cell>
        <span class="font-text">一个朋友</span>
      </van-cell>
    </van-index-bar>
    <div></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  margin-bottom: 60px;
}
.van-cell {
  border-bottom: 1px solid silver;
  background-color: whitesmoke;
}

/* 最后一个单元格没有底部下划线 */
.van-cell:last-child {
  border-bottom: none;
}
/* 单元格标题 */
.title-name {
  position: absolute;
  margin: 5px 10px 10px 10px;
}
.van-cell {
  height: 50px;
}
.font-text {
  color: gray;
  font-size: 10px;
  position: absolute;
  left: 40%;
}
</style>