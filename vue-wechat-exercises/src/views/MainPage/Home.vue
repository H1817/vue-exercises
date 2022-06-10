<template>
  <div>
    <!-- 顶部导航栏 title为默认值-->
    <NavBar></NavBar>
    <Search></Search>
    <HomeCell></HomeCell>
    <VanBar></VanBar>
  </div>
</template>

<script>
import NavBar from "@/components/ImportPart/Public/NavBar.vue";
import Search from "@/components/SmallPart/search.vue";
import HomeCell from "../../components/ImportPart/Home/HomeCell.vue";
import VanBar from "@/components/ImportPart/Public/VanBar.vue";
export default {
  components: { NavBar, Search, HomeCell, VanBar },
};
</script>

<style scoped>
</style>