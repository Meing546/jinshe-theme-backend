<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="design-box-operation">
      <!-- 导航栏 -->
      <page-notice></page-notice>
    </div>
</template>
<script>
import PageNotice from "../components/edit/PageNotice.vue"
export default {
  components:{
    "page-notice":PageNotice
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.design-box-operation {
  // display: flex;
  box-sizing: border-box;
  margin: 12px 0;
  position: relative;
  right: 12px;
  width: 280px;
  background-color: #f1f3f5;
  height: calc(100% - 24px);
  max-height: calc(100% - 24px);
  overflow: hidden;
}

</style>