<!-- eslint-disable vue/multi-word-component-names -->
<template >
    <el-row class="design-box-left">
        <div>
        </div>
        <el-row class="HaMi">
            <div v-for="(item,index) in menu"
                 :key="index"
                 @click="cut(index,1)"
                 class="mb20 design_content ">
                <div :class="{'active':(item.id==menu_id)}"></div>
                <el-image :src="item.id==menu_id?item.highlight_icon:item.icon"></el-image>
                <div>{{ item.title }}</div>
            </div>
        </el-row>
        <el-row class="sections-wrap "
                v-show="menu_id!=-1">
            <div class="flex">

                <div :class="menu_id != 1 ?'visible':'section-select-category' ">
                    <!--设置标题  -->
                    <div v-if="menu_id == 2"
                         class="gcEPdA borB">全局设置</div>
                    <div v-for="(item,index) in sub_menu_temp[menu_id]"
                         :key="index"
                         @click="cut({id:item.id,index},2)"
                         :class="{'draggable-active':(sub_menu_id==item.id)}">
                        <div class="relative"
                             :class="menu_id != 1?'borB product-template':'resource_item'">
                            <!-- 前缀 -->
                            <span v-if="item.prefix"
                                  class="iconfont ml25 mr8"
                                  style="color:#CCD0D7">&#xe60e;</span>
                            <!-- 图标 -->
                            <span class=" pr16"
                                  :class="{'pl20':(menu_id!=0),'pl45':(menu_id==0&&!item.prefix)}"
                                  v-if="item.iconfont">
                                <span class="iconfont fs24">{{item.iconfont}}</span>
                            </span>
                            <!-- 图片 -->
                            <el-image v-if="item.icon"
                                      :src="sub_menu_id!=item.id?item.icon:item.highlight_icon"
                                      class="w20 pl14 pr14"
                                      style="padding-top: 17%;"></el-image>
                            <span class="section-name">
                                {{ item.title }}
                            </span>
                            <!-- 后缀:眼睛 -->
                            <i class="view-btn el-icon-view"
                               v-if="menu_id==0 && item.isShow"></i>
                            <!-- 选中边框 -->
                            <div class="active_bar"
                                 v-if="menu_id==1 && sub_menu_id == item.id">
                            </div>

                        </div>

                    </div>
                    <!-- 装修添加内容 -->
                    <div class="section-select"
                         @click="addResource()"
                         v-if="menu_id == 0">
                        <span class="plus iconfont">&#xeaf3;</span>
                        <span class="ml16">添加内容</span>
                    </div>

                </div>
                <div class="section-select-preview "
                     v-if="menu_id == 1">
                    <div v-for="(item,index) in sub_menu_temp[menu_id][sub_menu_index].children"
                         :key="index">
                        <div class="flex mt10">{{item.title}}</div>
                        <div v-for="(_item,_inx) in item.content"
                             @click="addContent(item,_item)"
                             :key="index+'_'+_inx"
                             style="margin: 16px 0;">
                            <el-image :src="_item.img"
                                      class="W100 hand"></el-image>
                        </div>
                    </div>

                </div>
            </div>

        </el-row>
    </el-row>
</template>
<script>
export default {
  data() {
    return {
      menu_id: -1,
      sub_menu_id: -1,
      sub_menu_index: 0,
      menu: [
        {
          id: 0,
          title: "装修",
          highlight_icon:
            "https://intl-image.yzcdn.cn/images/i18n-b/store/forward.png",
          icon: "https://intl-image.yzcdn.cn/images/i18n-b/store/edit.png",
        },
        {
          id: 1,
          title: "资源库",
          highlight_icon:
            "https://intl-image.yzcdn.cn/images/i18n-b/store/add-components_active.png",
          icon: "https://intl-image.yzcdn.cn/images/i18n-b/store/add-components.png",
        },
        {
          id: 2,
          title: "设置",
          highlight_icon:
            "https://intl-image.yzcdn.cn/images/i18n-b/store/global_active.png",
          icon: "https://intl-image.yzcdn.cn/images/i18n-b/store/global.png",
        },
      ],
      sub_menu_temp: this.$store.state.sub_menu_temp,
    };
  },
  mounted() {
    this.$emit("pageArr", this.sub_menu_temp[0]);
  },
  methods: {
    cut(data, type) {
      if (type == 1) {
        this.menu_id = data == this.menu_id ? -1 : data;
        if (data == 1) {
          this.sub_menu_id = this.sub_menu_temp[1][0].id;
          this.sub_menu_index = 0;
        }
      } else if (type == 2) {
        this.sub_menu_id = data.id;
        this.sub_menu_index = this.sub_menu_id == -1 ? 0 : data.index;
        if (this.menu_id == 0) {
          this.menu_id = -1;
          this.$emit("selectAssembly", {
            type: "Aside",
            data: this.sub_menu_temp[0][data.index],
          });
        }
      }
    },
    addResource() {
      this.menu_id = 1;
      this.sub_menu_id = this.sub_menu_temp[1][0].id;
      this.sub_menu_index = 0;
    },
    addContent(item) {
      let data = {
        ...item,
        isShow: true,
        prefix: false,
        id: this.sub_menu_temp[0].length,
      };
      data.content = null;
      this.sub_menu_temp[0].push(data);
      this.menu_id = 0;
      this.cut({ index: data.id }, 2);
    },
  },
};
</script>
<style lang="scss" scoped>
.design-box-left {
  display: flex;
  background-color: #f1f3f5;
  position: relative;
  z-index: 1 !important;
  height: 100%;
  .HaMi {
    width: 76px;
    margin: 12px;
    background: #fff;
    border-radius: 4px;
    // display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    .design_content {
      position: relative;
    }
    .design_content:hover {
      cursor: pointer;
    }
    .el-image {
      width: 32px;
      height: 32px;
      margin: 16px 0 13px;
    }
    .active:after {
      width: 14px;
      height: 14px;
      background-color: #fff;
      position: absolute;
      right: -21px;
      top: 50%;
      content: "";
      -webkit-transform: translateY(-50%) rotate(45deg);
      transform: translateY(-50%) rotate(45deg);
    }
  }
  .sections-wrap {
    position: absolute;
    height: calc(100% - 24px);
    z-index: 1;
    left: 103px;
    width: auto;
    margin: 12px 0;
    box-shadow: 60px 0 100px rgba(0, 0, 0, 0.08);
    border-radius: 4px;
    overflow: hidden;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    background: #fff;

    .visible {
      background: #fff;
      overflow-y: auto;
      width: 280px;
      height: 100vh;
      overflow: auto;
    }
    .section-select {
      display: flex;
      -ms-flex-align: center;
      align-items: center;
      padding: 20px 24px 28px 45px;
      background: #fff;
      color: #476cf0;
      cursor: pointer;
      .plus {
        font-weight: 600;
        font-size: 16px;
        background: rgba(71, 108, 240, 0.1);
        padding: 5px 6px;
      }
    }
    .section-select-category {
      width: 180px;
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      flex-direction: column;
      padding-top: 4px;
    }
  }
  .product-template:hover {
    background: rgba(21, 91, 212, 0.05);
  }

  .resource_item {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    height: 48px;
    line-height: 48px;
    cursor: pointer;
  }
  .product-template {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    height: 64px;
    line-height: 64px;
    cursor: pointer;
    .section-name {
      font-size: 16px;
      line-height: 1.2;
      // color: #15161b;
      max-width: 100%;
      text-overflow: ellipsis;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }
    .view-btn {
      position: absolute;
      right: 30px;
      visibility: visible;
      width: 16px;
      height: 16px;
    }
  }
  .draggable-active {
    color: #476cf0 !important;
  }
  .gcEPdA {
    height: 64px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    background: rgb(255, 255, 255);
    font-family: PingFangSC-Semibold;
    font-size: 16px;
    color: rgb(21, 22, 27);
    padding-bottom: 8px;
  }
  .section-select-preview {
    background-color: #f7f8fa;
    width: 270px;
    padding-left: 12px;
    padding-top: 16px;
    box-sizing: border-box;
    overflow-y: auto;
    overflow-x: hidden;
    border-radius: 4px;
    height: calc(100vh - 10px);
  }

  .active_bar {
    transition: 0.5s;
    position: absolute;
    right: 0px;
    top: 28%;
    width: 3px;
    height: 15px;
    background: #155bd4;
    margin-left: 7px;
  }
}
</style>