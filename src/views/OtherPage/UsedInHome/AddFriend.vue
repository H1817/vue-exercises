<template>
  <div>
    <InsideNav sign="添加好友"></InsideNav>
    <van-search placeholder="账号/手机号" />
    <p>我的微信号：enrong1234567</p>
  </div>
</template>

<script>
import InsideNav from "@/components/SmallPart/InsideNav.vue";
export default {
  components: { InsideNav },
};
</script>

<style scoped>
p {
  text-align: center;
  font-size: 10px;
  color: silver;
  margin: 20 0 0 0;
}
/* 搜索框离页面顶部距离 */
.van-search {
  margin: 46px 0 0 0;
}
</style>