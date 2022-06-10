<template>
  <div>
    <!-- 引入头部标签栏 -->
    <InsideNav></InsideNav>
    <van-search v-model="value" placeholder="请输入搜索关键词" />
    <van-cell title="选择一个群" />
    <van-cell title="面对面建群" />
    <van-cell title="企业微信联系人" />
    <div>
      <!-- 好友列表 -->
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
      </van-index-bar>
    </div>
  </div>
</template>

<script>
import InsideNav from "@/components/SmallPart/InsideNav.vue";
export default {
  data() {
    return {
      value: "",
    };
  },
  components: { InsideNav },
};
</script>

<style scoped>
.van-nav-bar {
  background-color: WhiteSmoke;
}
/* 单元格标题 */
.title-name {
  position: absolute;
  margin: 5px 10px 10px 10px;
}
.van-search {
  margin: 46px 0 0 0;
}
.van-cell {
  height: 40px;
}
</style>