<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <el-row class="mainCss">
        <el-row class="design-top-menu">
            <v-header></v-header>
        </el-row>
        <el-row class="design-area">
            <el-row>
                <v-aside></v-aside>
            </el-row>
            <el-row>123</el-row>
        </el-row>
    </el-row>

</template>
<script>
import Header from "./Header.vue";
import Aside from "./Aside.vue";
export default {
  components: {
    "v-header": Header,
    "v-aside": Aside,
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