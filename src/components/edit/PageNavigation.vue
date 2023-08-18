<template>
    <div class="H100">
        <div class="header">导航</div>
        <div class="operation-container">
            <div class="pb16 borB">菜单</div>
            <div v-for="(item,index) in group.content"
                 :key="index"
                 class="borB section-item">
                <span class="iconfont pl2 mr8"
                      style="color:#CCD0D7">&#xe60e;</span>
                <span class="iconfont fs20"
                      style="color:#646566">&#xe8ae;</span>
                <span class="pl16 fs16"
                      style="color:#15161b">{{ item.title }}</span>
            </div>
            <div class="borB">
                <el-dropdown trigger="click"
                             placement="bottom-end">
                    <div class="add-block-item">
                        <div><span class="plus iconfont">&#xeaf3;</span>
                            <span>添加内容</span>
                        </div>
                        <div>
                            <i class="el-icon-caret-bottom"></i>
                        </div>
                    </div>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      group: {
        content: [{ title: "HOME" }, { title: "NEW" }, { title: "121" }],
      },
    };
  },
};
</script>
<style lang="scss" scoped>
.header {
  background: #fff;
  font-size: 16px;
  color: #15161b;
  text-align: center;
  line-height: 64px;
  margin-bottom: 8px;
}
.section-item {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  height: 64px;
  line-height: 64px;
  cursor: pointer;
}
.operation-container {
  background: rgb(255, 255, 255);
  padding: 20px;
  box-sizing: border-box;
  overflow: hidden auto;
  height: calc(100% - 72px);

  &::-webkit-scrollbar {
    width: 4px;
    height: 4px;
  }
  &::-webkit-scrollbar-thumb {
    -webkit-border-radius: 4px;
    border-radius: 4px;
    background: rgba(0, 0, 0, 0.4);
  }
  ::-webkit-scrollbar-track {
    background: transparent;
    -webkit-border-radius: 2px;
    border-radius: 2px;
  }
}

.add-block-item {
  line-height: 64px;
  background: #fff;
  font-size: 16px;
  font-weight: 400;
  color: #476cf0;
  position: relative;
  -webkit-box-shadow: 0 1px 0 0 #f2f3f5;
  box-shadow: 0 1px 0 0 #f2f3f5;
  display: flex;
  justify-content: space-between;
  text-align: left;
  cursor: pointer;

  .plus {
    font-weight: 600;
    font-size: 16px;
    background: rgba(71, 108, 240, 0.1);
    padding: 4px 5px;
    margin: 0 18px 0 28px;
  }
}
</style>