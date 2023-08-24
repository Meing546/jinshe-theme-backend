<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <!-- <div class="H100"> -->
    <div class="design-box-operation">
        <div class="H100">
            <!-- 导航栏 -->
            <page-notice v-if="curAssembly == 'PageNotice'"
                         :assembly="pageContent.content"
                         @call="returnData"></page-notice>
            <page-navigation
                         :assembly="pageContent.content" v-else-if="curAssembly == 'PageNavigation'" @call="returnData"></page-navigation>
            <Intro v-else></Intro>
        </div>
        <!-- </div> -->
    </div>
    <!-- </div> -->

</template>
<script>
import PageNotice from "../components/edit/PageNotice.vue";
import PageNavigation from "../components/edit/PageNavigation.vue";
import Intro from "../components/Intro.vue";
export default {
  components: {
    Intro,
    "page-notice": PageNotice,
    "page-navigation": PageNavigation,
  },
  data() {
    return {
      pageContent: {},
      curAssembly: "",
    };
  },
  created() {
    // 监听radioChange
    // this.$bus.$on("selectAssembly", (res) => {
    //   this.curAssembly = res.assembly;
    //   this.pageContent = res;
    // });
  },

  methods: {
    selectAssembly(res) {
      this.curAssembly = res.assembly;
      this.pageContent = res;
    },
    getPageArr(res) {
      console.info("编辑查看信息-=-=", res);
      this.pageArr = res;
    },
    returnData(data) {
      console.info("", data);
      this.$emit("callPage", { data, assembly: this.curAssembly });
    },
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