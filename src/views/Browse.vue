<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="browse-box ">
        <div class="W100 ">
            <div v-for="(item,index) in pageArr"
                 :key="index"
                 @click="edit(item,index)"
                 class="fJRcxb W100 relative"
                 :class="{'active':(curAssembly == item.assembly)}">
                <div v-show="curAssembly == item.assembly">
                    <div class="wrapper-section-name">{{ item.title }}</div>
                    <div class="wrapper-section-operate white fs12"
                         v-if="['PageNotice','PageNavigation'].indexOf(item.assembly) == -1">
                        <div class="short-cut-item"><span class="iconfont">&#xe795;</span></div>
                        <div class="short-cut-item"><span class="iconfont roate180">&#xe795;</span></div>
                        <div class="short-cut-item"><span class="iconfont">&#xe622;</span></div>
                        <div class="short-cut-item"><span class="iconfont">&#xe74b;</span></div>
                    </div>
                </div>
                <!-- 公告栏 -->
                <page-notice v-if="item.assembly == 'PageNotice'"
                             ref="myPageNotice"
                             :assembly="item"></page-notice>
                <!-- 导航栏 -->
                <page-navigation v-if="item.assembly == 'PageNavigation'"
                                 @personal="personal"
                                 :assembly="item"></page-navigation>
                <!-- 单个商品 -->
                <page-dingle-commodities v-if="item.assembly == 'PageDingleCommodities'"
                                         :assembly="item"></page-dingle-commodities>
            </div>

        </div>

        <Registration v-if="isRegistration"></Registration>
    </div>
</template>
<script>
import PageNotice from "../components/assembly/PageNotice.vue";
import PageNavigation from "../components/assembly/PageNavigation.vue";
import Registration from "../components/Registration.vue";
import PageDingleCommodities from "../components/assembly/PageDingleCommodities.vue"
export default {
  components: {
    "page-notice": PageNotice,
    "page-navigation": PageNavigation,
    "page-dingle-commodities":PageDingleCommodities,
    Registration
  },
  data() {
    return {
      pageArr: [],
      curAssembly: "",
      adaptationIndex: 1,
      isRegistration:false
    };
  },
  mounted() {
    this.pageArr = this.$store.state.sub_menu_temp[0];
    console.info("打印-=-=",this.pageArr)
    window.addEventListener("message", (res) => {
      let info = res.data;
      if (info.key == "callPage") {
        this.callPage(info.params);
      }
    });
  },
  methods: {
    personal(type){
      if(type == 'account'){
        this.isRegistration = true;
      }
    },
    edit(item, index) {
      console.log(item, index);
      this.curAssembly = item.assembly;
      // 修改数据的逻辑
      window.parent.postMessage({ key: "selectAssembly", params: item }, "*");
    },
    selectAssembly(res) {
      this.curAssembly = res.assembly;
    },
    getPageArr(res) {
      this.pageArr = JSON.parse(JSON.stringify(res));
    },
    callPage(res) {
      if (res.assembly) {
        this.pageArr.forEach((ele) => {
          if (ele.assembly == res.assembly) ele.content = res.data;
        });
        this.pageArr = JSON.parse(JSON.stringify(this.pageArr));
      }
    },
  },
};
</script>
<style lang="scss" scoped>
// .h5-preview-content {
//   width: 375px !important;
//   margin-left: 40%;
//   background-color: red;
// }
.browse-box {
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  // flex-direction: column;
  -webkit-box-flex: 1;
  flex: 1;
  z-index: 0;
  // margin: 0 20px;
  // margin-top: 12px;
  position: relative;
  box-sizing: border-box;
  .fJRcxb {
    .wrapper-section-name {
      height: 23px;
      line-height: 23px;
      left: 0px;
      top: 0px;
      padding: 0px 3px;
      color: rgb(255, 255, 255);
      text-align: center;
      background: rgb(255, 109, 0);
      border-radius: 0px 0px 4px;
      display: initial;
      z-index: 200;
      position: absolute;
    }
    .wrapper-section-operate {
      position: absolute;
      z-index: 99999;
      right: 0px;
      top: 0px;
      border-radius: 0px 0px 0px 4px;
      overflow: hidden;
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      .short-cut-item {
        display: flex;
        -webkit-box-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        align-items: center;
        width: 24px;
        height: 24px;
        background-color: rgb(255, 109, 0);
        .roate180 {
          transform: rotate(180deg);
        }
      }
    }
  }
  // .fJRcxb.active.announcement-bar::after {
  //   height: 56px;
  //   position: absolute;
  //   z-index: 1001;
  //   box-sizing: border-box;
  // }
  .fJRcxb.active::after {
    pointer-events: none;
    content: "";
    display: block;
    border: 2.5px solid rgb(255, 109, 0);
    background-color: transparent;
    position: absolute;
    inset: 0px;
    z-index: 99;
  }
}
</style>