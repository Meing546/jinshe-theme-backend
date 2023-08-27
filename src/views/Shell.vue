<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="shell_box">
        <iframe src="browse"
                style="width:500px;border: medium none;"></iframe>
    </div>
</template>
<script>
export default {
  data(){
    return{
    }
  },
  mounted(){

  },
  methods:{

  }
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