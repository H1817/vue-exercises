<template>
  <div>
    <!-- 顶部导航栏，title为发现-->
    <NavBar sign="发现"></NavBar>
    <CicleCell></CicleCell>
    <VanBar></VanBar>
  </div>
</template>

<script>
import NavBar from "@/components/ImportPart/Public/NavBar.vue";
import CicleCell from "@/components/ImportPart/Find/FindCell.vue";
import VanBar from "@/components/ImportPart/Public/VanBar.vue";
export default {
  components: { NavBar, CicleCell, VanBar },
};
</script>

<style scoped>
</style>