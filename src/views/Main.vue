<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <el-row class="mainCss">
        <el-row class="design-top-menu">
            <v-header></v-header>
        </el-row>
        <el-row class="design-area">
            <v-aside style="text-align: center;"
                     @pageArr="getPageArr"
                     @selectAssembly="selectAssembly"></v-aside>

            <!-- <v-browse ref="myBrowse"
                      @selectAssembly="selectAssembly"></v-browse> -->
            <v-shell ref="myShell" @selectAssembly="selectAssembly"></v-shell>

            <v-offside ref="myOffside"
                       @callPage="callPage"></v-offside>

        </el-row>
    </el-row>

</template>
<script>
import Header from "./Header.vue";
import Aside from "./Aside.vue";
// import Browse from "./Browse.vue";
import Shell from "./Shell.vue";
import Offside from "./Offside.vue";
export default {
  components: {
    "v-header": Header,
    "v-aside": Aside,
    "v-offside": Offside,
    "v-shell": Shell,
    // "v-browse": Browse,
  },
  data() {
    return {};
  },
  methods: {
    getPageArr(res) {
      // this.$refs.myBrowse.getPageArr(res);
      this.$refs.myOffside.getPageArr(res);
    },
    callPage(res) {
      this.$refs.myShell.callPage(res);
    },
    selectAssembly(res) {
      // if (res.type == "Aside") {
        // this.$refs.myShell.selectAssembly(res.data);
      // }
      this.$refs.myOffside.selectAssembly(res.data);
    },
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