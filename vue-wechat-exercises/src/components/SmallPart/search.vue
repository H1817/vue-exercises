<template>
  <div>
    <!-- 搜索框只在首页，通讯录页面显示 padding 10px,input高度34px-->
    <van-search
      placeholder="搜索"
      input-align="center"
      disabled
      @click="gotoSearch"
    />
  </div>
</template>

<script>
export default {
  methods: {
    gotoSearch() {
      this.$router.push("/search");
    },
  },
};
</script>

<style scoped>
.van-search {
  margin: 46px 0 0 0;
}
</style>
