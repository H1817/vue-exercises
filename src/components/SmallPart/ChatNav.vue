<template>
  <div>
    <!-- 聊天室公共头部 -->
    <van-nav-bar :title="message" :fixed="true">
      <!-- 左侧图标点击返回 -->
      <template #left>
        <van-icon
          name="arrow-left"
          size="20px"
          color="black"
          @click="onClickLeft"
        />
      </template>
      <!-- 右侧图标，没有绑定事件 -->
      <template #right>
        <van-icon name="more-o" size="20px" color="black" />
      </template>
    </van-nav-bar>
  </div>
</template>

<script>
export default {
  //自定义属性传值，默认值:发起群聊
  props: {
    sign: {
      default: "微信团队",
    },
  },
  //转存自定义属性里的值
  data() {
    return {
      message: this.sign,
    };
  },
  //返回前一个页面
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
.van-nav-bar {
  background-color: WhiteSmoke;
}
</style>