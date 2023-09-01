<template>
    <div class="H100 ">

        <div class="edit_header">单个商品
            <el-popover placement="bottom-end"
                        class="absolute"
                        style="right: 1px;"
                        popper-class="customPopper"
                        width="40"
                        trigger="hover">
                <div class="pt10 pl10">
                    <i class="iconfont mr10">&#xe622;</i>复制
                </div>
                <div class="red pt10 pl10 pb10">
                    <i class="iconfont mr10">&#xe74b;</i>删除
                </div>
                <span slot="reference">
                    <i class="iconfont unfoldIcon">&#xe719;</i>
                </span>
            </el-popover>

        </div>
        <div class="edit_operation_container">
            <div>
                <div class="mb10">产品</div>
                <div class="collection">
                    <el-button type="primary"
                               v-if="!group.product.goodsId"
                               @click="zIndexPanel++">选择产品</el-button>
                    <div v-else
                         class="selected-collection-wrap">
                        <div class="selected-collection-info">
                            <img class="selected-collection-cover"
                                 :src="group.product.img">
                            <span class="ml8">{{ group.product.name }}</span>
                        </div>
                        <div class="edit-button">
                            <span class="edit-item"
                                  @click.stop="zIndexPanel++">更改</span>
                            <span class="edit-item"
                                  @click.stop="deleteOperateItem()">删除</span>
                        </div>
                    </div>
                </div>
                <div class="mt20">
                    <div class="mb10">商品图比例</div>
                    <el-select v-model="group.goodsImgRatio">
                        <el-option v-for="item in goodsImgRatioArr"
                                   :key="item.value"
                                   :value="item.value"
                                   :label="item.label"></el-option>
                    </el-select>
                </div>
                <div class="mt20">
                    <div class="mb10">商品名称大小</div>
                    <div class="ranger-container">
                        <el-slider v-model="group.goodsNameSize"
                                   :max="12"
                                   :min="1"
                                   class="W70 mr15"></el-slider>
                        <el-input v-model="group.goodsNameSize"
                                  size="mini"
                                  class="w90">
                            <template slot="prepend">H</template>
                        </el-input>
                    </div>
                </div>
                <div class="mt10">
                    <div class="mb10">商品金额大小</div>
                    <div class="ranger-container">
                        <el-slider v-model="group.goodsMoneySize"
                                   :max="12"
                                   :min="1"
                                   class="W70 mr15"></el-slider>
                        <el-input v-model="group.goodsMoneySize"
                                  size="mini"
                                  class="w90">
                            <template slot="prepend">H</template>
                        </el-input>
                    </div>
                </div>
                <div class="mt10">
                    <div class="mb10">社交分享按钮</div>
                    <el-select v-model="group.socialContact">
                        <el-option v-for="item in socialContactArr"
                                   :key="item.value"
                                   :label="item.label"
                                   :value="item.value"></el-option>
                    </el-select>
                </div>
                <div>
                    <div v-for="item in displayContentArr"
                         :key="item.value"
                         class="m10 mt20">
                        <el-checkbox v-model="group.displayContent"
                                     :label="item.value">{{ item.label }}</el-checkbox>
                        <div v-if="item.value == 1 && group.displayContent.indexOf(1) != -1"
                             class="mt20">
                            <div class="left">社交分享按钮颜色</div>
                            <div class="end">
                                <el-color-picker v-model="group.socialContactColor"
                                                 size="mini"></el-color-picker>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mt20">
                    <div class="mb10">缩略图展示方向</div>
                    <el-select v-model="group.displayDirection">
                        <el-option v-for="item in displayDirectionArr"
                                   :key="item.value"
                                   :value="item.value"
                                   :label="item.label"></el-option>
                    </el-select>
                </div>
                <div class="mt20">
                    <div class="mb10">容器宽度</div>
                    <el-select v-model="group.ContainerWidth">
                        <el-option v-for="item in ContainerWidthArr"
                                   :key="item.value"
                                   :value="item.value"
                                   :label="item.label"></el-option>
                    </el-select>
                </div>
            </div>
        </div>

        <div class="menu_content_edit_panel"
             :style="{height:zIndexPanel > 1?'100%':'0px'}">
            <div class="header flex ">
                <div class="fw600 center W90">单个商品</div>
                <div class="W10 pr10">
                    <i class="iconfont  fs25 fw500"
                       @click.stop="zIndexPanel--">&#xe85c;</i>
                </div>
            </div>
            <div class="operation-container p20">
                <el-input prefix-icon="el-icon-search"
                          size="medium ">
                </el-input>
                <div class="add-block-item">
                    <div>
                        <i class="plus iconfont">&#xeaf3;</i>
                        <span class="text_color ml30">添加内容</span>
                    </div>
                </div>
                <div v-for="item in productArr"
                     :key="item.index"
                     class="list-item">
                    <span class="item-logo">
                        <img :src="item.media[0].url"></span>
                    <span class="item-name">
                        {{ item.title }}
                    </span>
                    <el-radio class="topCenter"
                              v-model="group.product.goodsId"
                              :label="item.goodsId"
                              @input="pitchGoods"></el-radio>
                </div>
                <div class="footer-bottom"
                     v-if="zIndexPanel > 1">
                    <el-button @click.stop="zIndexPanel--">取消</el-button>
                    <el-button @click.stop="zIndexPanel--"
                               type="primary">选择</el-button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {

  watch: {
    group: {
      handler(newVal) {
        this.$emit("call", newVal);
      },
      deep: true,
    },
  },
  data() {
    return {
      zIndexPanel: 1,
      productArr: this.$store.state.productArr,
      group: {
        product: {
          goodsId: "4429532",
          name: "名称",
          img: "https://intl-image.yzcdn.cn/images/2023/08/18/7526ee786591bd91c31d1b9f286c6712.png?mediaId=7000245342&mediaId=7000245342",
        },
        goodsImgRatio: 1, //商品图比例
        goodsNameSize: 7, //商品[名称字体大小
        goodsMoneySize: 8, //商品金额字体大小
        socialContact: 1, //社交分享按钮样式
        socialContactColor: "#000", //社交分享按钮
        displayContent: [], //显示内容
        displayDirection: 1, //略缩图展示方向
        ContainerWidth: 1, //容器宽度
      },
      socialContactArr: [
        { label: "样式一", value: 1 },
        { label: "样式二", value: 2 },
      ],
      goodsImgRatioArr: [
        { label: "自动", value: 1 },
        { label: "1/1", value: 2 },
        { label: "3/4", value: 3 },
        { label: "2/3", value: 4 },
      ],
      displayContentArr: [
        { label: "自定义社交分享按钮颜色", value: 1 },
        { label: "显示“评价”", value: 2 },
        { label: "显示“销量”", value: 3 },
        { label: "显示“剩余库存”", value: 4 },
        { label: "显示“划线折扣”标签", value: 5 },
        { label: "显示数量选择器", value: 6 },
        { label: "显示厂商", value: 7 },
        { label: "显示缩略图", value: 8 },
        { label: "显示动态结账按钮", value: 9 },
        { label: "显示社交分享按钮", value: 10 },
      ],
      displayDirectionArr: [
        { label: "横向展示", value: 1 },
        { label: "纵向展示", value: 2 },
      ],
      ContainerWidthArr: [
        { label: "128px", value: 1 },
        { label: "外边距80px", value: 2 },
        { label: "全屏", value: 3 },
      ],
    };
  },
  mounted() {},
  methods: {
    pitchGoods(e) {
      let info = this.productArr.find((ele) => ele.goodsId == e);
      this.group.product.name = info.title;
      this.group.product.img = info.media[0].url;
      console.info(this.group.product)
    },
    deleteOperateItem() {
      this.group.product = {
        goodsId: "",
        name: "",
        img: "",
      };
    },
  },
};
</script>
<style lang="scss" scoped>
.edit_operation_container {
  .collection {
    height: 136px;
    background: rgba(185, 191, 201, 0.12);
    border-radius: 2px 2px 0 0;
    border: 1px solid #ebedf0;
    text-align: center;
    line-height: 136px;
    .selected-collection-wrap {
      .selected-collection-info {
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        height: 95px;
        box-sizing: border-box;
        padding: 16px;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
        .selected-collection-cover {
          width: 64px;
          height: 64px;
          object-fit: contain;
          background-color: #eaebef;
          border-radius: 2px;
          margin-right: 10px;
        }
      }
      .edit-button {
        background: #fff;
        height: 40px;
        display: flex;
        line-height: 40px;
        border-radius: 2px;
        border-top: 1px solid #ebedf0;
        width: 100%;
        font-size: 16px;
        cursor: pointer;
        .edit-item:first-child {
          border-right: 1px solid #ebedf0;
        }
        .edit-item {
          -webkit-box-flex: 1;
          -ms-flex: 1;
          flex: 1;
          border-bottom: 1px solid #ebedf0;
        }
      }
    }
  }

  .ranger-container {
    display: flex;
    line-height: 46px;
    -webkit-box-align: center;
    align-items: center;
  }
}
.menu_content_edit_panel {
  position: absolute;
  width: 100%;
  right: 0;
  bottom: 0;
  height: 0px;
  transition: 0.3s;
  background: #fff;
  .header {
    line-height: 64px;
    background: #fff;
    margin-bottom: 0 !important;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    color: #15161b;
    border-bottom: 1px solid #f2f3f5;
  }
  .operation-container {
    .add-block-item {
      margin-top: 20px;
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
    .section-item {
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      height: 64px;
      line-height: 64px;
      cursor: pointer;
    }

    .list-item {
      min-height: 48px;
      line-height: 48px !important;
      padding: 0 24px;
      background: #fff;
      font-size: 16px !important;
      color: #15161b;
      border-bottom: 1px solid #f2f3f5;
      border-left: 3px solid transparent;
      display: flex;
      word-break: break-all;
      .item-name {
        font-size: 16px;
        font-weight: 400;
        color: #15161b;
        line-height: 16px;
        -webkit-box-flex: 1;
        flex: 1;
        padding: 16px 0;
      }
      .item-logo {
        width: 40px;
        height: 40px;
        text-align: center;
        display: inline-block;
        margin-right: 8px;
        margin-top: 2px;
        float: left;
        img {
          max-width: 100%;
          max-height: 100%;
          fill: #b9bfc9;
          vertical-align: middle;
        }
      }
      ::v-deep .el-radio__label {
        display: none;
      }
    }
    .footer-bottom {
      position: absolute;
      bottom: 0;
      right: 0;
      text-align: right;
      -webkit-box-shadow: 0 -1px 0 0 #f2f3f5;
      box-shadow: 0 -1px 0 0 #f2f3f5;
      padding: 12px 24px;
      background: #fff;
    }
  }
}
</style>
<style lang="scss">
.customPopper {
  padding: 2px !important;
  min-width: 90px !important;
  width: 90px;
  div {
    cursor: pointer;
  }
}
</style>
