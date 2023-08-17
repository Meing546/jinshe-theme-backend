<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="browse-box">
        <div class="W100">
            <div v-for="(item,index) in pageArr"
                 :key="index"
                 @click="edit(item,index)"
                 class="fJRcxb W100">
                <!-- 导航栏 -->
                <page-notice v-if="item.assembly == 'PageNotice'"
                             ref="myPageNotice"
                             :assembly="item"></page-notice>
            </div>
        </div>
    </div>
</template>
<script>
import PageNotice from "../components/assembly/PageNotice.vue";
export default {
  components: {
    "page-notice": PageNotice,
  },
  data() {
    return {
      pageArr: [],
    };
  },
  mounted() {
  },
  methods: {
    edit(item, index) {
      console.log(item, index);
    },
    getPageArr(res) {
      this.pageArr = JSON.parse(JSON.stringify(res));

    },
    callPage(res) {
      console.info("编辑123-=-=",res.data)
      if (res.assembly) {
        this.pageArr.forEach(ele => {
          if(ele.assembly == res.assembly)ele.content = res.data;
        })
        this.pageArr = JSON.parse(JSON.stringify(this.pageArr))
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.browse-box {
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  // flex-direction: column;
  -webkit-box-flex: 1;
  flex: 1;
  z-index: 0;
  margin: 0 20px;
  margin-top: 12px;
  position: relative;

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