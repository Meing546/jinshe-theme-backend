<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <el-row class="topCenter H100 PLR20">
        <el-col :span="10"
                :md="8">
            <el-row class="flex">
                <el-row class="go-back">
                    <el-image :src="return_img"
                              class="w30 h30"></el-image>
                </el-row>
                <el-row class="theme-name ">
                    <span class="theme-name-text ellipsis2">theme.name.kathy-miller</span>
                </el-row>
            </el-row>
        </el-col>
        <el-col :span="10"
                :md="12">
            <el-row class="center">
                <el-select v-model="current">
                    <el-option v-for="(item,index) in current_arr"
                               :key="index"
                               :label="item.label"
                               :value="item.value"
                               :disabled="item.value == 5"></el-option>
                </el-select>
            </el-row>
        </el-col>
        <el-col :span="4"
                :md="4">
            <el-row class="device_tool_change">
                <div v-for="(item,index) in adaptation_arr"
                     :key="index"
                     @click="cutScreen(index)">
                    <el-image :src="adaptationIndex==index+1?item.select:item.value"
                              :class="adaptationIndex == index+1?'tool-active':''">
                    </el-image>
                </div>
                <div class="active_bar"
                     :style="{'margin-left':(27+(adaptationIndex-1)*50)+'px'}">

                </div>

            </el-row>
        </el-col>
        <el-col :span="6"
                :md="5"
                class="flex-content-end">
            <el-button>预览</el-button>
            <el-button type="primary">保存</el-button>
        </el-col>

    </el-row>
</template>
<script>
export default {
  data() {
    return {
      current: 1,
      adaptationIndex: 1, //屏幕切换
      current_arr: [
        { label: "主页", value: 1 },
        { label: "商品详情页", value: 2 },
        { label: "商品分组页面", value: 3 },
        { label: "拼团分组页面", value: 4 },
        { label: "其他页面", value: 5 },
      ],
      adaptation_arr: [
        {
          value: require("@/assets/icon/computer.png"),
          select: require("@/assets/icon/computer_select.png"),
        },
        {
          value: require("@/assets/icon/phone_1.png"),
          select: require("@/assets/icon/phone_select_1.png"),
        },
        {
          value: require("@/assets/icon/iPad.png"),
          select: require("@/assets/icon/iPad_select.png"),
        },
        {
          value: require("@/assets/icon/fullscreen.png"),
          select: require("@/assets/icon/fullscreen_select.png"),
        },
      ],
      return_img: require("@/assets/icon/return.png"),
    };
  },
  methods: {
    cutScreen(index) {
      this.adaptationIndex = index + 1;
      this.$bus.$emit("adaptationIndex", this.adaptationIndex);
    },
  },
};
</script>
<style scoped lang="scss">
.go-back {
  display: flex;
  -webkit-box-pack: center;
  // justify-content: center;
  align-items: center;
  // width: 78px;
  cursor: pointer;
}
.theme-name {
  margin-right: 12px;
  -webkit-box-pack: start;
  margin-left: 5px;
  // justify-content: flex-start;
  line-height: 1.2;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  .theme-name-text {
    margin-right: 8px;
    font-size: 16px;
    color: #15161b;
    line-height: 16px;
  }
  .ellipsis2 {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
}
.design-page-select {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-flex: 1;
  flex: 1;
  -webkit-box-pack: center;
  justify-content: center;
}
.PLR20 {
  padding: 0px 20px;
  box-sizing: border-box;
}
.device_tool_change {
  display: flex;
  column-gap: 20px;
  // justify-content: center;
  position: relative;
  .el-image {
    width: 30px;
    height: 30px;
    cursor: pointer;
    position: relative;
  }
  .active_bar {
    transition: 0.5s;
    position: absolute;
    bottom: -16px;
    width: 15px;
    height: 3px;
    background: #155bd4;
    margin-left: 7px;
  }
}
</style>
