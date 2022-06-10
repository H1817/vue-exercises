<template>
  <div>
    <!-- 顶部导航栏，title为通讯录-->
    <NavBar sign="通讯录"> </NavBar>
    <Search></Search>
    <FriendsCell></FriendsCell>
    <VanBar></VanBar>
  </div>
</template>

<script>
import NavBar from "@/components/ImportPart/Public/NavBar.vue";
import Search from "@/components/SmallPart/search.vue";
import FriendsCell from "@/components/ImportPart/Friends/FriendsCell.vue";
import VanBar from "@/components/ImportPart/Public/VanBar.vue";
export default {
  components: { NavBar, Search, FriendsCell, VanBar },
};
</script>

<style scoped>
</style>