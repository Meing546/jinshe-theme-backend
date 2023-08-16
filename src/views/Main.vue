<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <el-row class="mainCss">
        <el-row class="design-top-menu">
            <v-header></v-header>
        </el-row>
        <el-row class="design-area">
            <v-aside style="text-align: center;"></v-aside>
            <v-browse></v-browse>
            <div class="H100">
              <v-offside></v-offside>
              </div>
        </el-row>
    </el-row>

</template>
<script>
import Header from "./Header.vue";
import Aside from "./Aside.vue";
import Browse from "./Browse.vue";
import Offside from "./Offside.vue";
export default {
  components: {
    "v-header": Header,
    "v-aside": Aside,
    "v-offside": Offside,
    "v-browse": Browse,
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.mainCss {
  margin: 0px;
  padding: 0px;
}
.design-top-menu {
  // display: flex;
  height: 64px;
  border-bottom: 1px solid #f2f3f5;
  background-color: #fff;
  box-sizing: border-box;
}
.design-area {
  display: flex;
  height: calc(100vh - 80px);
  overflow: hidden;
  position: relative;
}
</style>