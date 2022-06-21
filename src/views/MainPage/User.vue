<template>
  <div>
    <!-- 头像，微信名，账号 -->
    <Self></Self>
    <!-- 服务，收藏，设置等单元格 -->
    <UserCell></UserCell>
    <VanBar></VanBar>
  </div>
</template>

<script>
import Self from "@/components/ImportPart/User/Head.vue";
import UserCell from "@/components/ImportPart/User/UserCell.vue";
import VanBar from "@/components/ImportPart/Public/VanBar.vue";
export default { components: { Self, UserCell, VanBar } };
</script>

<style scoped>
</style>