<template>
    <div class="H100">
        <div class="edit_header">商品分组1.0
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
            <div class="mt10">
                <div class="mb10">商品数据类型</div>
                <el-select v-model="group.goodsDataType">
                    <el-option v-for="item in goodsDataTypeArr"
                               :key="item.value"
                               :value="item.value"
                               :label="item.label"></el-option>
                </el-select>
            </div>
            <div v-if="group.goodsDataType == 1">
                <div class="mt20">商品</div>
                <div class="product-list-container">
                    <div v-for="item in group.product"
                         :key="item.value"
                         class="product-item"
                         :style="{'background-image':'url('+item.img+')'}">
                        <i class="iconfont product-item-delete"
                           @click="deleteGoods(item.goodsId)">&#xe8e7;</i>
                    </div>
                </div>
                <div class="add-block-item"
                     slot="reference">
                    <div @click="zIndexPanel++"><span class="plus iconfont">&#xeaf3;</span>
                        <span>添加内容</span>
                    </div>
                </div>
            </div>
            <div v-else>
                <div class="mb10">分组</div>
                <div class="collection">
                    <el-button type="primary"
                               v-if="!group.grouping.groupingId"
                               @click="zIndexPanel+=2">选择产品</el-button>
                    <div v-else
                         class="selected-collection-wrap">
                        <div class="selected-collection-info">
                            <img class="selected-collection-cover"
                                 :src="group.grouping.img">
                            <span class="ml8">{{ group.grouping.name }}</span>
                        </div>
                        <div class="edit-button">
                            <span class="edit-item"
                                  @click.stop="zIndexPanel+=2">更改</span>
                            <span class="edit-item"
                                  @click.stop="deleteOperateItem()">删除</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt20">
                <div class="mb10">标题</div>
                <el-input v-model="group.title"></el-input>
            </div>
            <div class="mt10">
                <div class="mb10">标题大小</div>
                <div class="ranger-container">
                    <el-slider v-model="group.titleSize"
                               :max="12"
                               :min="1"
                               class="W70 mr15"></el-slider>
                    <el-input v-model="group.titleSize"
                              size="mini"
                              class="w90">
                        <template slot="prepend">H</template>
                    </el-input>
                </div>
            </div>
            <div class="mt10">
                <div class="mb10">标题对齐方式</div>
                <el-select v-model="group.titleAlignType">
                    <el-option v-for="item in alignTypeArr"
                               :key="item.value"
                               :value="item.value"
                               :label="item.label"></el-option>
                </el-select>
            </div>
            <div class="mt10">
                <div class="mb10">商品文本对齐方式</div>
                <el-select v-model="group.goodsTextAlignType">
                    <el-option v-for="item in alignTypeArr"
                               :key="item.value"
                               v-show="item.value != 3"
                               :value="item.value"
                               :label="item.label"></el-option>
                </el-select>
            </div>
            <div class="mt10">
                <div class="mb10">商品名称行数</div>
                <el-select v-model="group.goodsNameLine">
                    <el-option v-for="item in goodsNameLineArr"
                               :key="item.value"
                               :label="item.label"
                               :value="item.value"></el-option>
                </el-select>
            </div>

            <div class="mt10">
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
                <div class="mb10">每行商品数量</div>
                <div class="ranger-container">
                    <el-slider v-model="group.goodsLineNumber"
                               :max="5"
                               :min="2"
                               class="W70 mr15"></el-slider>
                    <el-input v-model="group.goodsLineNumber"
                              size="mini"
                              class="w90">
                    </el-input>
                </div>
            </div>
            <div class="mt10">
                <div class="mb10">商品展示行数</div>
                <div class="ranger-container">
                    <el-slider v-model="group.goodsShowLineNum"
                               :max="12"
                               :min="1"
                               class="W70 mr15"></el-slider>
                    <el-input v-model="group.goodsShowLineNum"
                              size="mini"
                              class="w90">
                    </el-input>
                </div>
            </div>
            <div class="mt10">
                <div class="mb10">图片比例</div>
                <el-select v-model="group.imgRatio">
                    <el-option v-for="item in imgRatioArr"
                               :key="item.value"
                               :label="item.label"
                               :value="item.value"></el-option>
                </el-select>
            </div>
            <div class="mt10">
                <div class="mb10">容器宽度</div>
                <el-select v-model="group.ContainerWidth">
                    <el-option v-for="item in ContainerWidthArr"
                               :key="item.value"
                               :label="item.label"
                               :value="item.value"></el-option>

                </el-select>
            </div>
            <div v-for="item in displayContentArr"
                 :key="item.value"
                 class="m10 mt20">
                <el-checkbox v-model="group.displayContent"
                             :label="item.value">{{ item.label }}</el-checkbox>
                <div v-if="item.value == 11 && group.displayContent.indexOf(11) != -1"
                     class="mt20">
                    <div class="left">卡片颜色</div>
                    <div class="end">
                        <el-color-picker v-model="group.cardColor"
                                         size="mini"></el-color-picker>
                    </div>
                </div>
                <div class="sub-sections "
                     v-if="[1,5].indexOf(item.value) != -1 && group.displayContent.indexOf(item.value) != -1">
                    <el-radio-group v-model="group[item.key]">
                        <div><el-radio :label="1">样式一</el-radio></div>
                        <div class=" mt10"><el-radio :label="2">样式二</el-radio></div>
                    </el-radio-group>
                    <div class="mt10"
                         v-if="item.value == 5"><el-checkbox v-model="group.displayContent"
                                     :label="12">显示“评价数量”</el-checkbox></div>
                </div>

            </div>
            <div class="mt20">
                <div class="mb10">背景样式</div>
                <el-select v-model="group.bgStyle"
                           @change="group.bgStyleValue=''">
                    <el-option v-for="item in bgStyleArr"
                               :key="item.value"
                               :value="item.value"
                               :label="item.label"></el-option>
                </el-select>
            </div>
            <div class="mt10"
                 v-if="group.bgStyle == 1">
                <div class="left">背景颜色</div>
                <div class="end">
                    <el-color-picker v-model="group.bgStyleValue"
                                     size="mini"></el-color-picker>
                </div>
            </div>
            <div class="mt10"
                 v-else-if="group.bgStyle == 3">
                <div class="mb10">背景图片</div>
                <div class="image-picker-container textCenter">
                    <el-button type="primary"
                               @click="isImageList = true"
                               v-if="!group.bgStyleValue">选择图片</el-button>
                    <div v-else
                         class="H100">
                        <div class="img-selected-box topCenter center">
                            <img :src="group.bgStyleValue"
                                 class="img-by-select">
                        </div>
                        <div class="edit-button">
                            <span class="edit-item"
                                  @click="isImageList = true">更改</span>
                            <span class="edit-item"
                                  @click="group.bgStyleValue = ''">删除</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt20">
                <div class="mb10">移动设备展示方式</div>
                <el-select v-model="group.mobileDevices">
                    <el-option v-for="item in mobileDevicesArr"
                               :key="item.value"
                               :label="item.label"
                               :value="item.value"></el-option>
                </el-select>
            </div>
            <div class="mt10 sub-sections"
                 v-if="group.mobileDevices == 3">

                <el-radio-group v-model="group.carouselStyle">
                    <div class="mt10"><el-radio :label="1">样式1</el-radio></div>
                    <div class="mt10"><el-radio :label="2">样式2</el-radio></div>
                </el-radio-group>
                <div class="mt10">
                    <el-checkbox v-model="group.isAutoplay">自动播放</el-checkbox>
                </div>
                <div class="mt20"
                     v-if="group.isAutoplay">
                    <div class="mb10">自动播放间隔</div>
                    <div class="ranger-container">
                        <el-slider v-model="group.intervalSecond"
                                   :max="5"
                                   :min="1"
                                   class="W70 mr15"></el-slider>
                        <el-input v-model="group.intervalSecond"
                                  size="mini"
                                  class="w90">
                            <template slot="append">s</template>
                        </el-input>
                    </div>
                </div>
            </div>

            <div class="menu_content_edit_panel"
                 :style="{height:zIndexPanel == 2?'100%':'0px','z-index':'100'}">
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
                         :key="item.value"
                         class="list-item">
                        <span class="item-logo">
                            <img :src="item.media[0].url"></span>
                        <span class="item-name">
                            {{ item.title }}
                        </span>
                        <el-checkbox :label="item.goodsId"
                                     @change="changeGoods"
                                     v-model="goodsArr"></el-checkbox>
                    </div>

                    <div class="footer-bottom"
                         v-if="zIndexPanel > 1">
                        <el-button @click.stop="zIndexPanel--">取消</el-button>
                        <el-button @click.stop="zIndexPanel--"
                                   type="primary">选择</el-button>
                    </div>

                </div>

            </div>
            <div class="menu_content_edit_panel"
                 :style="{height:(zIndexPanel == 3?'100%':'0px'),'z-index':'100'}">
                <div class="header flex ">
                    <div class="fw600 center W90">选择分组</div>
                    <div class="W10 pr10">
                        <i class="iconfont  fs25 fw500"
                           @click.stop="zIndexPanel=1">&#xe85c;</i>
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

                    <div v-for="item in groupingArr"
                         :key="item.index"
                         class="list-item">
                        <span class="item-logo">
                            <img :src="item.cover"></span>
                        <span class="item-name">
                            {{ item.title }}
                        </span>
                        <el-radio class="topCenter"
                                  v-model="group.grouping.groupingId"
                                  :label="item.collectionId"
                                  @input="pitchGrouping"></el-radio>
                    </div>
                    <div class="footer-bottom"
                         v-if="zIndexPanel > 1">
                        <el-button @click.stop="zIndexPanel=1">取消</el-button>
                        <el-button @click.stop="zIndexPanel=1"
                                   type="primary">选择</el-button>
                    </div>

                </div>

            </div>

        </div>
        <ImageList @confirm="getImage"
                   @close="isImageList=false"
                   v-if="isImageList"></ImageList>
    </div>
</template>
<script>
import ImageList from "../ImageList.vue";
export default {
  components: {
    ImageList,
  },

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
      isImageList: false, //图片弹窗
      goodsArr: [], //选中的商品
      group: {
        goodsDataType: 2, //指点商品数据类型
        product: [], //商品列表
        grouping: {
          //分组
          groupingId: "",
          img: "",
          name: "",
        },
        title: "", //标题
        titleSize: 7, //标题字体大小
        titleAlignType: 2, //标题对齐方式
        goodsTextAlignType: 1, //商品文本对齐方式
        goodsNameLine: -1, // 商品名称行数
        goodsNameSize: 10, //商品名称大小
        goodsMoneySize: 11, //商品金额大小
        goodsLineNumber: 4, //每行商品数量
        goodsShowLineNum: 3, //商品展示行数
        imgRatio: 1, //图片比例
        ContainerWidth: 3, //容器宽度
        displayContent: [],
        shoppingCartStyle: 1, //购物车样式
        evaluateStyle: 1, //评价样式
        cardColor: "", //卡片颜色
        bgStyle: 2, //背景样式
        bgStyleValue: "", //图片或颜色
        mobileDevices: 1, //移动设备展示方式
        carouselStyle: 1, //轮播图样式
        isAutoplay: false, //是否自动播放
        intervalSecond: 3, //自动播放间隔秒
      },
      goodsNameLineArr: [
        { label: "不限制", value: -1 },
        { label: "1行", value: 1 },
        { label: "2行", value: 2 },
        { label: "3行", value: 3 },
        { label: "4行", value: 4 },
        { label: "5行", value: 5 },
        { label: "6行", value: 6 },
      ],
      goodsDataTypeArr: [
        { label: "指定商品", value: 1 },
        { label: "商品分组", value: 2 },
      ],
      alignTypeArr: [
        { label: "左侧", value: 1 },
        { label: "居中", value: 2 },
        { label: "右侧", value: 3 },
      ],
      imgRatioArr: [
        { label: "原比例", value: 1 },
        { label: "1/1", value: 2 },
        { label: "3/2", value: 3 },
        { label: "3/3", value: 4 },
        { label: "2/3", value: 5 },
      ],

      ContainerWidthArr: [
        { label: "960px", value: 1 },
        { label: "1280px", value: 1 },
        { label: "外边距80px", value: 2 },
        { label: "全屏", value: 3 },
      ],
      displayContentArr: [
        { label: "显示“加入购物车”按钮", value: 1, key: "shoppingCartStyle" },
        { label: "显示“立即购买”按钮", value: 2 },
        { label: "显示“心愿单”按钮", value: 3 },
        { label: "显示“颜色”规格选择", value: 4 },
        { label: "显示“评价”", value: 5, key: "evaluateStyle" },
        { label: "显示“销量”", value: 6 },
        { label: "显示“供货商”", value: 7 },
        { label: "显示“划线折扣”标签", value: 8 },
        { label: "显示“查看全部”按钮", value: 9 },
        { label: "在悬停时显示第二个商品图片", value: 10 },
        { label: "启用卡片模式 ", value: 11 },
      ],
      bgStyleArr: [
        { label: "自定义颜色", value: 1 },
        { label: "无", value: 2 },
        { label: "背景图片", value: 3 },
      ],
      mobileDevicesArr: [
        { label: "一行2个(卡片)", value: 1 },
        { label: "一行1个(大图)", value: 2 },
        { label: "轮播", value: 3 },
      ],
      productArr: this.$store.state.productArr,
      groupingArr: this.$store.state.groupingArr,
    };
  },
  mounted() {},
  methods: {
    changeGoods() {
      let arr = this.productArr.filter(
        (ele) => this.goodsArr.indexOf(ele.goodsId) != -1
      );
      this.group.product = arr.map((ele) => {
        return {
          goodsId: ele.goodsId,
          name: ele.title,
          img: ele.media[0].url,
        };
      });
    },
    deleteGoods(id) {
      this.group.product = this.group.product.filter(
        (ele) => ele.goodsId != id
      );
      this.goodsArr = this.group.product.map((ele) => ele.goodsId);
    },
    deleteOperateItem() {
      this.group.grouping = {
        groupingId: "",
        img: "",
        name: "",
      };
    },
    pitchGrouping(e) {
      let info = this.groupingArr.find((ele) => e == ele.collectionId);
      this.group.grouping = {
        groupingId: info.collectionId,
        img: info.cover,
        name: info.title,
      };
    },
    getImage(item) {
      this.group.bgStyleValue = item.link;
      this.isImageList = false;
    },
  },
};
</script>
<style lang="scss" scoped>
.edit_operation_container {
  .add-block-item {
    line-height: 40px;
    background: #fff;
    font-size: 16px;
    font-weight: 400;
    color: #476cf0;
    position: relative;
    display: flex;
    justify-content: space-between;
    text-align: left;
    cursor: pointer;
    .plus {
      font-weight: 600;
      font-size: 16px;
      background: rgba(71, 108, 240, 0.1);
      padding: 4px 4px;
      margin-right: 10px;
    }
  }
  .product-list-container {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    flex-wrap: wrap;
    .product-item {
      width: calc((100% - 24px) / 4);
      height: 0;
      box-sizing: border-box;
      padding-bottom: calc((100% - 24px) / 4);
      position: relative;
      background-color: rgba(185, 191, 201, 0.12);
      margin: 0 8px 8px 0;
      background-size: cover;
      background-position: 50%;
      background-repeat: no-repeat;
    }
    .product-item-delete {
      width: 14px;
      height: 14px;
      position: absolute;
      top: -7px;
      right: -7px;
      color: rgba(21, 22, 27, 0.3);
      display: none;
    }
    .product-item:hover {
      .product-item-delete {
        display: block;
      }
    }
  }
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
  .sub-sections {
    width: 100%;
    box-sizing: border-box;
    padding: 13px;
    margin-bottom: 10px;
    background-color: #f7f8fa;
  }
  .image-picker-container {
    height: 230px;
    margin-top: 8px;
    background: #b9bfc91f;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    position: relative;
    border-radius: 2px 2px 0 0;
    border: 1px solid #ebedf0;
    cursor: pointer;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    display: flex;
    .img-selected-box {
      width: 100%;
      height: calc(100% - 40px);
      .img-by-select {
        max-height: 100%;
        max-width: 100%;
        vertical-align: middle;
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
      ::v-deep .el-checkbox__label {
        display: none;
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