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
                                <ul class="media-list">
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
                            <div style="font-size: 24px;"
                                 class="fw600">{{goodsInfo.title }}</div>
                            <div class="gZgzqr">
                                <div>
                                    <el-rate v-model="rateValue"
                                             disabled></el-rate>
                                </div>
                                <div class="dpElym flex topCenter">
                                    0<span class="ml5">评价</span>
                                </div>
                                <div class="dpElym flex topCenter">
                                    供货商
                                </div>
                                <div class="dpElym flex topCenter">
                                    0<span class="ml5">销量</span>
                                </div>
                                <div class=" flex topCenter">
                                    555<span class="ml5">可售</span>
                                </div>
                            </div>
                            <div class="featured-products-price mt20">
                                <div class="cur-price">CN¥111</div>
                                <div class="dash-discount-label ml5">5折优惠</div>
                                <div class="underlined-price">CN¥222</div>
                            </div>
                            <div class="sku-line">
                                <div class="sku-title">数量</div>
                                <el-input-number v-model="num"
                                                 @change="handleChange"
                                                 :min="1"
                                                 :max="10"
                                                 label="描述文字"></el-input-number>
                            </div>
                            <div class="operation-item">
                                <el-button size="medium">加入购物车</el-button>
                                <el-button size="medium"
                                           type="primary">立即购买</el-button>
                            </div>
                            <div class="mt20">商品详情</div>
                            <div class="mt20">
                                <a v-for="(item,index) in mediaArr"
                                   :key="index"
                                   :href="item.href"
                                   class="mr20">
                                    <i class="iconfont ">{{ item.icon }}</i>
                                </a>
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
        { icon: "\ue736", href: "www.twitter.com" },
        { icon: "\ue610", href: "www.Facebook.com" },
        { icon: "\ue634", href: "www.Pinterest.com" },
        { icon: "\ue88f", href: "www.Instagram.com" },
        { icon: "\uec99", href: "www.Tumblr.com" },
        { icon: "\ue646", href: "www.Snapchat.com" },
        { icon: "\ue883", href: "www.YouTube.com" },
        { icon: "\ue6b3", href: "www.Vimeo.com" },
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
</style>