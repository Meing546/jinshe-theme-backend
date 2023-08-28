<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="shell_box">
        <iframe ref="myIframe"
                src="browse"
                style="border: medium none;"
                :style="{width:(adaptationIndex==1?'100%': adaptationIndex==2?'375px': adaptationIndex=3?'800px':'')}"></iframe>

    </div>
</template>
<script>
export default {
  data() {
    return {
      adaptationIndex: 1,
    };
  },

  mounted() {
    this.$bus.$on("adaptationIndex", (index) => {
      this.adaptationIndex = index;
    });
    window.addEventListener(
      "message",
      (e) => {
        let info = e.data;
        if (info.key == "selectAssembly") {
          this.$store.commit("setData", {
            key: "selectAssembly",
            data: info.params,
          });
        }
      },
      false
    );
  },
  methods: {
    callPage(res) {
      let iframe = this.$refs.myIframe;
      if (iframe) {
        iframe.contentWindow.postMessage({
          key: "callPage",
          params: res,
        });
      }
    },
  },
};
</script>
<style scoped lang="scss">
.shell_box {
  height: calc(100% - 30px);
  display: flex;
  justify-content: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-box-flex: 1;
  flex: 1;
  z-index: 0;
  margin: 0 20px;
  margin-top: 12px;
  position: relative;
  box-sizing: border-box;
}
</style>