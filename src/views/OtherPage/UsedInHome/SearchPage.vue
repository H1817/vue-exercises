<template>
  <div>
    <!-- 搜索框 -->
    <form action="/">
      <van-search
        v-model="value"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="onCancel"
      />
    </form>
    <!-- 搜索框 -->
    <div class="SearchContent">
      <p>搜索指定内容</p>
      <!-- 内容分类 -->
      <van-row type="flex" justify="space-between" ustify="space-between">
        <van-col span="6">朋友圈</van-col>
        <van-col span="6">公众号</van-col>
        <van-col span="6">小程序</van-col>
        <van-col span="6">表情</van-col>
        <van-col span="6">服务</van-col>
      </van-row>
      <!-- 最近在搜 -->
      <p>最近在搜 <van-icon name="delete-o" style="float: right" /></p>
      <span>江苏图采></span>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";

export default {
  data() {
    return {
      value: "",
    };
  },
  methods: {
    //弹出输入的内容
    onSearch(val) {
      Toast(val);
    },
    //返回
    onCancel() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
p {
  margin: 20px 0 20px 0;
  padding: 0 0 10px 0;
  color: silver;
  font-size: 10px;
  border-bottom: 0.5px solid silver;
}
.SearchContent {
  margin: 20px 20px 0 20px;
}
.van-row {
  color: darkblue;
  font-family: 黑体;
  font-size: 15px;
}
.van-col {
  margin: 10px 0 10px 0;
}

span {
  margin: 10px 0 0 0;
  color: rgb(145, 142, 142);
  font-size: 15px;
}
</style>