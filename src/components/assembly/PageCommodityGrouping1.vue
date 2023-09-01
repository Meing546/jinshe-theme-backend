<template>
    <div :style="{background:(assemblyData.bgStyleValue?assemblyData.bgStyle == 1?assemblyData.bgStyleValue: assemblyData.bgStyle==3? 'url('+assemblyData.bgStyleValue+')':'#fff':'#fff')}"
         class="cn-margin_80 content_box cn-fix_1760">
        <div class="pb40 pt40">
            <div class="titleStyle"
                 :style="{'text-align':(assemblyData.titleAlignType==1?'left': assemblyData.titleAlignType==2?'center':'right'),'font-size':fontSizeObj[assemblyData.titleSize]}">{{ assemblyData.title }}</div>
        </div>
        <div class="goods-list W100">
            <div class="goods-item-box mb40 grxPok"
                 :class="['ww'+assemblyData.goodsLineNumber]"
                 v-for="(item,index) in (productArr.length?productArr:defaultShow)"
                 :key="index">
                <a>
                    <div class="grid-info-wrap">
                        <div class="grid-info-image">
                            <div class="goods-default-img"
                                 v-if="!productArr.length">
                                <div class="default-img-box">
                                    <i class="iconfont default-img">&#xe8ba;</i>
                                </div>

                            </div>

                            <div v-else
                                 class="H100 W100">
                                <div class="default-img-box">
                                    <img :src="item.media[0].url"
                                         class="goods-img">
                                </div>
                                <div class="hover-img"></div>
                            </div>
                        </div>
                    </div>
                </a>
                <div class="goods-container"
                     :style="{background:assemblyData.displayContent.indexOf(11)!=-1?assemblyData.cardColor:''}">
                    <h3 class="goods-name"
                        :style="{'font-size':fontSizeObj[assemblyData.goodsNameSize]}"> {{item.title?item.title:"Your product's name"}}</h3>
                    <div class="ht-goods-list-price">
                        <div class="column">
                            <div class="fymRll">
                                <div class="price-sale">
                                    <span class="price-symbol"
                                          :style="{'font-size':fontSizeObj[assemblyData.goodsMoneySize]}">CN¥</span>
                                    <span class="price-symbol"
                                          :style="{'font-size':fontSizeObj[assemblyData.goodsMoneySize]}">0</span>
                                </div>
                                <div class="ml-5"
                                     style="text-decoration: line-through;color: rgba(26, 26, 27, 0.6);">
                                    <span class="price-symbol">CN¥</span>
                                    <span class="price-symbol">0</span>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div class="dash-discount-label ml5"
                         v-if="assemblyData.displayContent.indexOf(8)!=-1">5折优惠</div>
                    <div class="goods-icon-container">
                        <span class="add-wish-btn"
                              v-if="assemblyData.displayContent.indexOf(3)!=-1 ">
                            <i class="iconfont">&#xe66f;</i>
                        </span> <span class="add-wish-btn"
                              v-if="assemblyData.displayContent.indexOf(1)!=-1 && assemblyData.shoppingCartStyle == 2">
                            <i class="iconfont">&#xe603;</i>
                        </span>
                    </div>

                    <div class="bottom-container">
                        <div class="bottom-info-container">
                            <div class="bottom-info">
                                <div class="sell-comment mt5">
                                    <el-rate class="mr5"
                                             v-if="assemblyData.displayContent.indexOf(5)!=-1 && assemblyData.evaluateStyle==1"
                                             v-model="rateValue"
                                             disabled></el-rate>
                                    <span class="fw600"
                                          v-if="assemblyData.displayContent.indexOf(5)!=-1 && assemblyData.evaluateStyle==2">
                                        <i class="iconfont fs14 "
                                           style="color:rgb(255, 199, 0)">&#xeca6;</i>{{rateValue }}
                                    </span>
                                    <div class="sell-num fw600"
                                         v-if="assemblyData.displayContent.indexOf(6)!=-1">
                                        <span>0</span>
                                        <span>销量</span>
                                    </div>
                                </div>
                                <span class="vendor-name"
                                      v-if="assemblyData.displayContent.indexOf(7)!=-1">供货商</span>
                            </div>
                        </div>
                        <div class="bottom-container">
                            <div class="bottom-btn-container">
                                <div class="goods-button-medium goods-button goods-button-second "
                                     v-if="assemblyData.displayContent.indexOf(1)!=-1 && assemblyData.shoppingCartStyle == 1">加入购物车</div>
                                <div class="goods-button-medium goods-button goods-button-primary "
                                     v-if="assemblyData.displayContent.indexOf(2)!=-1">立即购买</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        <div class="view-container center"
             v-if="assemblyData.displayContent.indexOf(9) != -1">
            <a class="ui-big-button">查看全部</a>
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
    assemblyData: {
      handler(val) {
        if (val.goodsDataType == 2) {
          let grouping = this.$store.state.groupingArr.find(
            (ele) => ele.collectionId == val.grouping.groupingId
          );
          if (grouping) {
            this.productArr = this.$store.state.productArr.filter(
              (ele) => grouping.goodsList.indexOf(ele.goodsId) != -1
            );
          } else {
            this.productArr = [];
          }
        } else if (val.goodsDataType == 1) {
          console.info(val);
          if (val.product.length) {
            let goodsIdArr = val.product.map((ele) => ele.goodsId);
            this.productArr = this.$store.state.productArr.filter(
              (ele) => goodsIdArr.indexOf(ele.goodsId) != -1
            );
          } else {
            this.productArr = [];
          }
        }
        this.defaultShow = val.goodsLineNumber * val.goodsShowLineNum;
      },
      deep: true,
    },
  },
  data() {
    return {
      defaultShow: 1,
      assemblyData: {},
      rateValue: 5, //评价
      fontSizeObj: {
        1: "80px",
        2: "56px",
        3: "48px",
        4: "40px",
        5: "32px",
        6: "28px",
        7: "24px",
        8: "20px",
        9: "18px",
        10: "16px",
        11: "14px",
        12: "12px",
      },
      productArr: [],
      groupingArr: {},
    };
  },
  mounted() {
    this.assemblyData = JSON.parse(JSON.stringify(this.assembly.content));
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.content_box {
  background: #fff;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;

  .titleStyle {
    font-family: Helvetica;
    font-style: normal;
    font-weight: 700;
    color: #323233;
    margin-bottom: 40px;

    word-break: break-word;
    font-size: 24px;
    line-height: 32px;
  }

  .goods-list {
    display: flex;
    flex-flow: wrap;
    -webkit-box-pack: start;
    justify-content: flex-start;
    .goods-item-box {
      height: 100%;
      position: relative;
      display: flex;
      flex-direction: column;
      -webkit-box-pack: justify;
      justify-content: space-between;
      a {
        pointer-events: auto !important;
        .grid-info-wrap {
          width: 100%;
          position: relative;
          .grid-info-image {
            background-color: transparent;

            width: 100%;
            position: relative;
            display: flex;
            -webkit-box-align: center;
            align-items: center;
            -webkit-box-pack: center;
            justify-content: center;
            border-radius: 100;
            overflow: hidden;
            .goods-default-img {
              background-color: rgb(255, 255, 255);
              width: 100%;
              height: 0px;
              padding-top: 100%;
              position: relative;
              .default-img-box {
                width: 100%;
                height: 100%;
                -webkit-box-pack: center;
                justify-content: center;
                -webkit-box-align: center;
                align-items: center;
                display: flex;
                border: rgba(26, 26, 27, 0.08);
                background: rgba(26, 26, 27, 0.06);
                // background: red;
                box-sizing: border-box;
                flex-direction: column;
                position: absolute;
                top: 0px;
                .default-img {
                  // height: 80px;
                  font-size: 80px;
                  color: #e0e0e0;
                  font-weight: 100;
                }
              }
            }
            .goods-img {
              max-width: 100%;
              display: block;
              transition: all 0.5s ease-in-out 0s;
              opacity: 1;
              width: 100%;
              object-fit: cover !important;
            }
            .hover-img {
              opacity: 0;
              position: absolute;
              left: 0px;
              top: 0px;
              width: 100%;
              height: 100%;
              background-position: center center;
              background-size: cover;
              background-repeat: no-repeat;
              transition: all 0.5s ease-in-out 0s;
            }
          }
        }
      }
    }
  }
  .view-container {
    padding: 40px 0 40px 0;
    cursor: pointer;
    .ui-big-button {
      margin: 0px auto;
      pointer-events: none;
      font-size: 14px;
      line-height: 20px;
      padding: 12px 32px;
      box-sizing: border-box;
      width: fit-content;
      background-color: #000000;
      color: #ffffff;
      font-family: Helvetica;
      font-style: normal;
      font-weight: 500;
      height: 44px !important;
    }
  }
  .goods-container {
    .goods-name {
      width: 100%;
      font-family: 1;
      font-style: normal;
      font-weight: 700;
      color: rgb(26, 26, 27);
      text-align: left;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: auto;
      margin: 10px;
    }
    .ht-goods-list-price {
      margin-top: 4px;
      color: rgb(50, 50, 51);
      text-align: left;
      max-width: 100%;
      overflow: hidden;
      .fymRll {
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        .price-sale {
          font-size: 14px;
          line-height: 20px;
          font-family: Helvetica;
          font-style: normal;
          font-weight: 700;
          padding: 0px 10px;
          .price-symbol {
            color: rgb(50, 50, 51) !important;
            font-size: 14px;
            line-height: 20px;
            font-family: Helvetica;
            font-style: normal;
            font-weight: 700;
          }
        }
      }
    }
    .dash-discount-label {
      height: 19px;
      padding: 0px 6px;
      line-height: 17px;
      font-weight: 400;
      color: #ff6d00;
      border: 1px solid #ff6d00;
      border-radius: 0;
      box-sizing: border-box;
      display: inline-block;
      font-size: 12px !important;
      font-family: "PingFang SC" !important;
    }
    .bottom-container {
      box-sizing: border-box;
      padding-bottom: 16px;
      width: 100%;
      display: flex;
      flex-direction: column;
      -webkit-box-align: center;
      align-items: center;
      .bottom-info-container {
        box-sizing: border-box;
        padding: 0px 10px;
        width: 100%;
        .bottom-info {
          width: 100%;
          display: flex;
          flex-flow: wrap;
          -webkit-box-align: center;
          align-items: center;
          -webkit-box-pack: justify;
          justify-content: space-between;
          .sell-comment {
            max-width: 100%;
            display: flex;
            flex-wrap: wrap;
            -webkit-box-align: center;
            align-items: center;
            color: rgba(26, 26, 27, 0.6) !important;
            ::v-deep .el-rate__icon {
              margin-right: 0px !important;
            }
            .sell-num {
              max-width: 100%;
              display: flex;
              -webkit-box-align: center;
              align-items: center;
            }
            .sell-num::before {
              content: "";
              width: 2px;
              height: 2px;
              border-radius: 50%;
              margin: 0px 4px;
              background-color: rgb(26, 26, 27);
              display: inline-block;
              vertical-align: middle;
            }
          }
        }
        .vendor-name {
          max-width: 100%;
          text-overflow: ellipsis;
          overflow: hidden;
          color: rgba(26, 26, 27, 0.6) !important;
          font-weight: 600;
        }
      }
      .bottom-container {
        width: 100%;
        display: flex;
        flex-direction: column;
        -webkit-box-align: center;
        align-items: center;
        .bottom-btn-container {
          width: 100%;
          margin-top: 24px;
          display: flex;
          .goods-button {
            width: 100%;
            height: 40px;
            text-align: center;
            font-weight: 500;
            font-size: 14px;
            padding: 10px;
            box-sizing: border-box;
            background: transparent;
            cursor: pointer;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            position: relative;
            flex: 1 1 0%;
            border-radius: 0;
          }

          .goods-button-second {
            color: #000000;
            border: 1px solid #000000;
            background-color: #fff;
          }
          .goods-button-primary {
            background-color: #000000;
            color: #ffffff;
            border: none;
          }
          .goods-button + .goods-button {
            margin-left: 16px;
          }
        }
      }
    }
    .goods-icon-container {
      z-index: 10;
      display: none;
      position: absolute;
      top: 10px;
      right: 16px;
      .add-wish-btn {
        background-color: rgb(255, 255, 255);
        margin-top: 8px;
        width: 32px;
        height: 32px;
        border-radius: 6px;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
        box-shadow: rgba(51, 51, 51, 0.04) 0px 0px 8px;
        cursor: pointer;
      }
    }
  }
  .goods-item-box:hover {
    .goods-icon-container {
      display: block;
    }
  }
}
@media screen and (min-width: 768px) {
  .cn-margin_80 {
    width: 100%;
    padding: 0px 80px;
    box-sizing: border-box;
  }
}

@media screen and (max-width: 768px) {
  .grxPok {
    width: calc((100% - 16px) / 2);
    margin-right: 8px;
    margin-top: 0px;
    margin-bottom: 16px;
  }
  .cn-fix_1760 {
    width: 100%;
    padding: 0px 16px;
    box-sizing: border-box;
  }
  .bottom-btn-container {
    width: 100% !important;
    margin-top: 24px;
    display: flow !important;
    .goods-button-medium {
      height: 32px !important;
      line-height: 10px !important;
      font-size: 12px;
      padding: 8px;
    }
    .goods-button-medium + .goods-button-medium {
      margin-left: 0px !important;
      margin-top: 10px;
    }
  }
}
@media screen and (min-width: 960px) {
  .ww5 {
    width: calc((100% - (96px + 24px)) / 5);
  }
  .ww4 {
    width: calc((100% - (72px + 24px)) / 4);
  }
  .ww3 {
    width: calc((100% - (48px + 24px)) / 3);
  }
  .ww2 {
    width: calc((100% - (24px + 24px)) / 2);
  }
  .goods-item-box {
    // width: calc((100% - 48px) / 3);
    margin-right: 24px;
    margin-top: 0px;
    // margin-bottom: 40px;
    .add-wish-btn {
      width: 32px;
      height: 32px;
      border-radius: 6px;
    }
  }
}
</style>