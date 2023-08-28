<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <!-- <div class="H100"> -->
    <div class="design-box-operation">
        <div class="H100">
            <!-- 导航栏 -->
            <page-notice v-if="curAssembly == 'PageNotice'"
                         :assembly="pageContent.content"
                         @call="returnData"></page-notice>
            <page-navigation :assembly="pageContent.content"
                             v-else-if="curAssembly == 'PageNavigation'"
                             @call="returnData"></page-navigation>
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
  computed: {
    selectAssemblyFun() {
      return this.$store.state.selectAssembly;
    },
  },
  watch: {
    selectAssemblyFun:{
      immediate: true,
      deep: true,
      handler(val) {
        if(val)this.selectAssembly(val);
      },
    },


  },
  data() {
    return {
      pageContent: {},
      curAssembly: "",
    };
  },
  created() {

  },

  methods: {
    selectAssembly(res) {
      this.curAssembly = res.assembly;
      this.pageContent = res;
    },
    getPageArr(res) {
      this.pageArr = res;
    },
    returnData(data) {
      this.$emit("callPage", { data, assembly: this.curAssembly});
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