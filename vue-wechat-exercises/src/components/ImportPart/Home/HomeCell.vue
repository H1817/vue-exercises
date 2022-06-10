<template>
  <div>
    <!-- 自己 -->
    <van-cell @click="gotoChat">
      <!-- title插槽 带徽标的头像图片 好友名称 日期-->
      <template #title>
        <span class="custom-title">
          <van-badge>
            <img src="@/assets/tx.png" alt="头像" width="45px" height="45px" />
          </van-badge>
          <span class="title-name">荣荣荣</span>
          <span class="title-content">hello</span>
          <span class="title-time">中午12：57</span>
        </span>
      </template>
    </van-cell>
    <!-- 微信团队 -->
    <van-cell @click="gotoSee">
      <!-- title插槽 带徽标的头像图片 好友名称 日期-->
      <template #title>
        <span class="custom-title">
          <div v-show="show" class="sup">
            <van-badge dot> </van-badge>
          </div>
          <img
            src="@/assets/img/wx.png"
            alt="头像"
            width="45px"
            height="45px"
          />
          <span class="title-name">微信团队</span>
          <span class="title-content"
            >欢迎你再次回到微信。如果你在使用过程...</span
          >
          <span class="title-time">5月29日</span>
        </span>
      </template>
    </van-cell>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
    };
  },
  methods: {
    gotoChat() {
      this.$router.push("/chat");
    },
    gotoSee() {
      if ((this.show = true)) {
        this.show = false;
      }
      this.$router.push("/notice");
    },
  },
};
</script>

<style scoped>
.container {
  margin-bottom: 60px;
}
.sup {
  margin: -12px 0 40px 40px;
  position: absolute;
}
/* 使用伪类元素添加下划线 */
.van-cell::after {
  content: "";
  width: 100%;
  height: 1px;
  display: block;
  margin: 0 0 2px 55px;
  border-bottom: 1px solid silver;
}
img {
  border-radius: 10%;
}
.title-name {
  position: absolute;
  margin: 5px 10px 10px 10px;
}
.title-content {
  color: silver;
  font-size: 5px;
  position: absolute;
  margin: 25px 10px 0px 10px;
}
.title-time {
  color: silver;
  font-size: 5px;
  position: absolute;
  float: right;
  right: 20px;
  top: 10px;
}
</style>