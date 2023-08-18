<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="box-operation">
        <div class="img-area">
            <el-image src="https://intl-image.yzcdn.cn/images/i18n-b/store/un-select-img.png"></el-image>
            <div class="fw600 mt12 mb12">未选中元素</div>
            <div>从左侧页面画布中选择一个元素，以在此处看其参数。</div>
        </div>
        <div class="short-cut-block">
            <div class="short-cut-title">键盘快捷键</div>
            <div v-for="(item,index) in quickArr"
                 :key="index"
                 class="short-cut-item">
                <div style="color: #15161b;">{{ item.label }}</div>
                <div style="color: #969799;">{{item.value }}</div>
            </div>
        </div>
        <div class="guide-area">
            <div class="header-content">操作引导</div>
            <div class="content">
                <span>查看装修引导</span>
                <span class="iconfont fs20 ml3">&#xe611;</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      quickArr: [
        { label: "撤销", value: "⌘+Z / Ctrl+Z" },
        { label: "恢复", value: "⌘+⇧+Z / Ctrl+Shift+Z" },
        { label: "保存", value: "⌘+S / Ctrl+S" },
        { label: "删除组件", value: "⌫ / Delete" },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.box-operation {
  height: 100% !important;
}
.img-area {
  padding: 0 20px 20px;
  text-align: center;
  background: #fff;
}
.short-cut-block {
  margin-top: 10px;
  padding: 24px 16px;
  font-size: 14px;
  text-align: left;
  background: #fff;
  .short-cut-title {
    color: #15161b;
    font-weight: 700;
    margin-bottom: 32px;
  }
  .short-cut-item {
    display: flex;
    line-height: 20px;
    -webkit-box-pack: justify;
    justify-content: space-between;
    margin-top: 16px;
  }
}
.guide-area {
  text-align: left;
  margin-top: 10px;
  // height: 40%;
  height: 100%;
  word-break: break-all;
  background: #fff;
  .header-content {
    font-weight: 700;
    padding: 24px 16px 32px;
  }
  .content {
    cursor: pointer;
    padding: 0 16px;
    color: #2654ff;
    -webkit-box-align: center;
    align-items: center;
    display: flex;
  }
}
</style>