<template>
  <div>
    <!-- 导航栏显示在 首页，通讯录，发现页面，只是标题文字不一样 高度46px -->
    <!-- 固定在底部 -->
    <van-nav-bar :title="message" :fixed="true">
      <!--点击显示下拉菜单-->
      <template #right>
        <!-- 点击显示下拉菜单 -->
        <van-icon name="add-o" size="18" color="black" @click="add" />
      </template>
    </van-nav-bar>
    <nav ref="listRef">
      <ul>
        <!-- 点击跳转到发起群聊页面 -->
        <li @click="gotoGroupChat">
          <div class="icon">
            <van-icon name="chat" size="20px" />
          </div>
          <div class="text">发起群聊</div>
        </li>
        <!-- 点击跳转到发起群聊页面 -->
        <li @click="gotoAddFriend">
          <div class="icon">
            <van-icon name="add" size="20px" />
          </div>
          <div class="text">添加朋友</div>
        </li>
        <!-- 点击跳转到扫一扫页面 -->
        <li @click="gotoScan">
          <div class="icon">
            <van-icon name="enlarge" size="20px" />
          </div>
          <div class="text">扫一扫</div>
        </li>
        <!-- 点击跳转到收付款页面 -->
        <li @click="gotoPay">
          <div class="icon">
            <van-icon name="wechat-pay" size="20px" />
          </div>
          <div class="text">收付款</div>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    sign: {
      default: "微信",
    },
  },
  data() {
    return {
      message: this.sign,
    };
  },
  methods: {
    //如果下拉菜单为none就显示下拉菜单
    add() {
      if (this.$refs.listRef.style.display == "block") {
        this.$refs.listRef.style.display = "none";
      } else {
        this.$refs.listRef.style.display = "block";
      }
    },
    //点击搜索框跳转到搜索页面
    gotoSearch() {
      this.$router.push("/search");
    },
    //点击下拉菜单的发起群聊跳转到发起群聊页面
    gotoGroupChat() {
      this.$router.push("/group");
    },
    //点击下拉菜单里的添加好友跳转到添加好友页面
    gotoAddFriend() {
      this.$router.push("/add");
    },
    //点击下拉菜单里的扫一扫跳转到扫一扫页面
    gotoScan() {
      this.$router.push("/scan");
    },
    //点击下拉菜单里的收付款跳转到添加收付款页面
    gotoPay() {
      this.$router.push("/pay");
    },
  },
};
</script>

<style scoped>
.van-nav-bar {
  background-color: WhiteSmoke;
}
/* 下拉菜单的样式 */
nav {
  background-color: #49484b;
  position: absolute;
  z-index: 999;
  right: 0;
  display: none;
  border-radius: 5px;
  width: 130px;
}
nav ul {
  list-style-type: none;
}
nav li {
  color: whitesmoke;
  font-size: 10px;
  border-top: 1px solid whitesmoke;
  margin: 0 0 10px 0;
}
nav li:first-child {
  border-top: none;
}
/* 下拉菜单字体和图标 */
.text {
  margin: 5px 0 5px 40px;
}
.icon {
  position: absolute;
  left: 10px;
  margin: 5px 0 5px;
}
</style>