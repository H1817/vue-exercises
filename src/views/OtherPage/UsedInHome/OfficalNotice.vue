<template>
  <div>
    <ChatNav></ChatNav>
    <div class="content">
      <p class="time">5月19日 上午10:30</p>
      <van-cell-group inset>
        <van-cell class="msg-cell" size="large">
          <template #title>
            <span>安全登录提醒</span>
            <p class="title-content">
              你的微信帐号正尝试登录一个新设备，如果登录成功本设备将会被强制退出登录。登录时间:10:30登录方式:微信密码
              如果这不是你本人的操作，你的微信密码已经泄漏。请立即进入“设置-帐号与安全-修改微信密码”，防止帐号被盗。
            </p>
            <p class="bo">详情</p>
          </template>
        </van-cell>
      </van-cell-group>

      <div>
        <img src="@/assets/img/wx.png" alt="微信团队" />
        <van-cell-group inset class="msg">
          <van-cell
            class="msg-cell"
            title="欢迎你再次回到微信。如果你在使用过程中有任何的问题或建议，记得给我发信反馈哦。"
          />
        </van-cell-group>
      </div>
    </div>
    <div class="bottom">
      <van-cell>
        <template #title>
          <van-icon name="smile-o" size="25" color="#FFD53F" />
          <input v-model="value" size="31" />
          <button>发送</button>
        </template>
      </van-cell>
    </div>
  </div>
</template>

<script>
import ChatNav from "@/components/SmallPart/ChatNav.vue";

export default {
  components: { ChatNav },
  data() {
    return {
      value: "",
    };
  },
};
</script>

<style scoped>
.msg-cell {
  background-color: whitesmoke;
  margin: 0 0 40px 0;
}
.van-cell {
  background-color: whitesmoke;
}
.time {
  font-size: 5px;
  color: silver;
  text-align: center;
}
.bo {
  font-size: 5px;
  color: darkblue;
}
.title-content {
  font-size: 5px;
  border-bottom: 1px solid silver;
}
img {
  width: 40px;
  height: 40px;
  position: absolute;
  margin: 10px 10px 0 10px;
}
.content {
  margin: 66px 0 60px 0;
}
.msg {
  margin: 0 0 0 60px;
  max-width: 70%;
}
.bottom {
  position: fixed;
  bottom: 0;
  width: 100%;
}
button {
  float: right;
  right: 10px;
}
.van-icon {
  float: left;
  left: 0;
  top: 2px;
}
</style>