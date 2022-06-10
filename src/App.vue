<template>
  <div>
    <router-view></router-view>
  </div>
</template>
  
<script>
import VanBar from "./components/ImportPart/Public/VanBar.vue";
export default { components: { VanBar } };
</script>

<style>
img {
  border-radius: 6%;
}
</style>