<template>
    <div class="click-wrapper">
        <div class="brIhED cn-fix_1280">
            <div class="center topCenter mt40 mb40 W100">
                <div class="featured-products">
                    <div class="product-media-preview">
                        <div class="roduct-main-media-wrapper">
                            <div class="relative W100"
                                 style="z-index:2">
                                <div class="main-media">
                                    <img :src="assemblyData.product.img"
                                         class="W100"
                                         style="height: 100%;object-fit: cover;object-position: center center;">
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="media-gallery">
                                <ul class="media-list"
                                    v-show="assemblyData.displayContent.indexOf(8)!=-1">
                                    <li v-for="item in goodsInfo.media"
                                        :key="item.url"
                                        class="media-list-item ml10"
                                        :class="{'media-list-item-active':(item.url == assemblyData.product.img)}"
                                        @click="assemblyData.product.img=item.url">
                                        <img :src="item.url"
                                             style="height: 100%;object-fit: cover;">
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="products-info-container">
                        <div class="hand">
                            <div class="fw600 fs24 goodsTitle"><span>{{goodsInfo.title }}</span></div>
                            <div class="gZgzqr">
                                <div class="dpElym flex topCenter"
                                     v-if="assemblyData.displayContent.indexOf(2)!=-1">
                                    <el-rate class="mr5" v-model="rateValue"
                                             disabled></el-rate>

                                    0<span class="ml2">评价</span>
                                </div>
                                <div class="dpElym flex topCenter"
                                     v-if="assemblyData.displayContent.indexOf(7)!=-1">
                                    供货商
                                </div>
                                <div class="dpElym flex topCenter"
                                     v-if="assemblyData.displayContent.indexOf(3)!=-1">
                                    0<span class="ml2">销量</span>
                                </div>
                                <div class=" flex topCenter"
                                     v-if="assemblyData.displayContent.indexOf(4)!=-1">
                                    555<span class="ml2">可售</span>
                                </div>
                            </div>
                            <div class="featured-products-price mt20">
                                <div class="cur-price">CN¥111</div>
                                <div class="dash-discount-label ml5">5折优惠</div>
                                <div class="underlined-price"
                                     v-if="assemblyData.displayContent.indexOf(5)!=-1">CN¥222</div>
                            </div>
                            <div class="sku-line"
                                 v-if="assemblyData.displayContent.indexOf(6)!=-1">
                                <div class="sku-title">数量</div>
                                <el-input-number v-model="num"
                                                 @change="handleChange"
                                                 :min="1"
                                                 :max="10"
                                                 label="描述文字"></el-input-number>
                            </div>
                            <div class="operation-item">
                                <el-button size="medium"
                                           :class="{'W100':assemblyData.displayContent.indexOf(9)==-1}">加入购物车</el-button>
                                <el-button size="medium"
                                           v-if="assemblyData.displayContent.indexOf(9)!=-1"
                                           type="primary">立即购买</el-button>
                            </div>
                            <div class="mt40">商品详情</div>
                            <div class="mt40"
                                 v-if="assemblyData.displayContent.indexOf(10)!=-1">
                                <span v-for="(item,index) in mediaArr"
                                      :key="index"
                                      :href="item.href"
                                      :class="{'featured-products-share-item':(assemblyData.socialContact==1)}">
                                    <i class="iconfont mr10"
                                       :class="index>3?'fs26':'fs24'"
                                       :style="{color:assemblyData.displayContent.indexOf(1)!=-1?assemblyData.socialContactColor:item.color}"> {{ item.icon }}</i>
                                    <span v-if="assemblyData.socialContact==1">{{ item.name }}</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  props: {
    assembly: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  watch: {
    assembly: {
      handler(newData) {
        this.assemblyData = newData.content
          ? JSON.parse(JSON.stringify(newData.content))
          : this.assemblyData;
      },
    },
  },
  data() {
    return {
      assemblyData: {},
      goodsInfo: {},
      mediaArr: [
        { icon: "\ue755", name: "Facebook", color: "rgb(58, 90, 152)" },
        { icon: "\uea07", name: "WhatsApp", color: "rgb(76, 194, 71)" },
        { icon: "\ue607", name: "微信", color: "rgb(12, 193, 95)" },
        { icon: "\ue602", name: "Line", color: "rgb(3, 184, 3)" },
        { icon: "\ue613", name: "Twitter", color: "rgb(83, 172, 238)" },
        { icon: "\ue6a0", name: "Pinterest", color: "rgb(202, 36, 44);" },
        { icon: "\ue60d", name: "复制链接", color: "rgb(51, 51, 51)" },
      ],
      rateValue: 5,
      num: 1,
    };
  },
  mounted() {
    this.assemblyData = JSON.parse(JSON.stringify(this.assembly.content));
    this.goodsInfo = this.$store.state.productArr.find(
      (ele) => ele.goodsId == this.assemblyData.product.goodsId
    );
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.click-wrapper {
  background: #fff;
  .brIhED {
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    .product-media-preview {
      width: 520px;
      .roduct-main-media-wrapper {
        width: 100%;
        display: flex;
        -webkit-box-pack: center;
        justify-content: center;
        padding: 0px 30px;
        box-sizing: border-box;
        .main-media {
          display: flex;
          -webkit-box-align: center;
          align-items: center;
          -webkit-box-pack: center;
          justify-content: center;
        }
      }
      .media-gallery {
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        padding: 0px 24px;
        .media-list {
          width: 544px;
          display: flex;
          overflow: auto;
          margin: 12px 6px 0px;
          .media-list-item {
            position: relative;
            width: 70px;
            height: 106px;
            min-width: 70px;
            box-sizing: border-box;
            border-radius: 0;
            overflow: hidden;
            display: flex;
            -webkit-box-pack: center;
            justify-content: center;
            flex-shrink: 0;
          }
          .media-list-item-active {
            border: 2px solid #000 !important;
          }
        }
      }
    }
    .products-info-container {
      flex: 1 1 0%;
      margin-left: 24px;
      width: 0px;

      .dpElym::after {
        content: "";
        width: 1px;
        height: 12px;
        background-color: rgba(26, 26, 27, 0.2);
        margin: auto 8px;
        display: block;
      }
      .gZgzqr {
        width: 100%;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        font-size: 12px;
        line-height: 18px;
        color: rgba(26, 26, 27, 0.8);
        flex-wrap: wrap;
        flex-basis: 100%;
        font-family: Helvetica;
        font-style: normal;
        font-weight: 700;
        margin-top: 10px;
        ::v-deep .el-rate__icon {
          margin-right: 0px !important;
        }
      }
      .featured-products-price {
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        .cur-price {
          font-size: 20px;
          line-height: 28px;
          font-family: Helvetica;
          font-style: normal;
          font-weight: 700;
          color: #ff6d00;
        }
        .dash-discount-label {
          border: none;
          background: rgba(255, 109, 0, 0.08);
          height: 19px;
          padding: 0px 6px;
          line-height: 17px;
          font-weight: 400;
          color: #ff6d00;
          border-radius: 0;
          box-sizing: border-box;
          display: inline-block;
          font-size: 12px !important;
          font-family: "PingFang SC" !important;
        }
        .underlined-price {
          margin-left: 8px;
          text-decoration: line-through;
          color: rgba(26, 26, 27, 0.6);
          font-size: 16px;
          line-height: 22px;
          font-family: Helvetica;
          font-style: normal;
          font-weight: 400;
        }
      }
      .sku-line {
        margin-top: 24px;
        text-align: left;
        .sku-title {
          margin-bottom: 12px;
          font-size: 16px;
          line-height: 22px;
          font-family: Helvetica;
          font-style: normal;
          font-weight: 700;
          font-weight: var(--font-weight-body);
          color: #1a1a1b;
          margin: 16px 0px;
        }
        ::v-deep .el-input-number__decrease {
          background: #fff;
          border-right: none;
        }
        ::v-deep .el-input-number__increase {
          background: #fff;
          border-left: none;
        }
        ::v-deep .el-input-number:focus {
          border-color: #dcdfe6 !important;
        }

        ::v-deep .el-input__inner:hover {
          border-color: #dcdfe6;
        }
      }
      .operation-item {
        display: flex;
        margin-top: 24px;
        width: 100%;
        .el-button {
          width: 50%;
          height: 42px;
          border-color: #000000;
        }
        .el-button--default:hover {
          background: #fff;
          color: #000;
        }
        .el-button--primary {
          background: #000;
        }
      }
      .featured-products-share-item {
        padding: 6px 0.833333vw;
        margin-right: 0.555556vw;
        margin-top: 0.555556vw;
        cursor: pointer;
        font-size: 14px;
        font-weight: 600;
        line-height: 20px;
        letter-spacing: 1px;
        display: inline-block;
        border: 1px solid #d1d5db;
        i {
          font-size: 14px !important;
        }
      }
    }
  }
}

@media screen and (min-width: 768px) {
  .cn-fix_1280 {
    width: 100%;
    max-width: calc(1440px);
    margin: 0px auto;
    padding: 0px 80px;
    box-sizing: border-box;
  }
}
@media screen and (min-width: 1080px) {
  .brIhED {
    .featured-products {
      display: flex;
      width: 100%;
      margin: 0px auto;
      align-items: flex-start;
    }
  }
}
@media screen and (max-width: 1281px) {
  .featured-products {
    width: 100%;
    box-sizing: border-box;
    .products-info-container {
      margin-top: 16px;
      width: auto !important;
      margin: 24px !important;
    }
  }
}
@media screen and (max-width: 960px) {
  .product-media-preview {
    width: 100% !important;
    margin-right: 0px;
    .product-main-media-wrapper {
      max-width: 100%;
    }
  }
}
</style>