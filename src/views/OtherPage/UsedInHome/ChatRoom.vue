<template>
  <div class="container">
    <ChatNav sign="荣荣荣"></ChatNav>
    <!-- 一条写死的聊天消息，包括时间， 头像， 聊天内容 -->
    <div>
      <!-- 时间 -->
      <p class="time">中午12：57</p>
      <div>
        <!-- 头像和聊天信息 -->
        <div class="img">
          <img src="@/assets/tx.png" alt="头像" />
        </div>
        <van-cell-group inset class="msg">
          <van-cell class="msg-cell" title="hello" />
        </van-cell-group>
      </div>
      <!-- 底部输入框 -->
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
.container {
  margin: 66px 0 66px 0;
}

.time {
  font-size: 5px;
  color: silver;
  text-align: center;
}
img {
  width: 45px;
  height: 45px;
}
.img {
  float: right;
  padding: 0 20px 0 0;
}
.van-cell {
  background-color: whitesmoke;
}
.msg-cell {
  width: 70%;
  float: right;
  right: 10px;
  background-color: darkgreen;
  color: whitesmoke;
  border-radius: 10px;
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