<template>
  <!-- 首页下拉菜单里跳转的页面的公共头部 -->
  <div>
    <van-nav-bar :title="message" :fixed="true">
      <template #left>
        <van-icon
          name="arrow-left"
          size="20px"
          color="black"
          @click="onClickLeft"
        />
      </template>
    </van-nav-bar>
  </div>
</template>

<script>
export default {
  //自定义属性传值，默认值:发起群聊
  props: {
    sign: {
      default: "发起群聊",
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