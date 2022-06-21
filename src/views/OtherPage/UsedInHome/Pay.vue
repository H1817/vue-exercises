<template>
  <div>
    <insideNav sign="收付款"></insideNav>
    <div class="scan">
      <van-uploader v-model="fileList" multiple />
    </div>
  </div>
</template>

<script>
import InsideNav from "@/components/SmallPart/InsideNav.vue";
export default {
  components: { InsideNav },
  data() {
    return {
      fileList: [{ url: require("@/assets/tx.png") }],
    };
  },
};
</script>

<style scoped>
.scan {
  margin: 66px 0 66px 0;
}
</style>