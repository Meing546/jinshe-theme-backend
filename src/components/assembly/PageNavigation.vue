<!-- eslint-disable vue/no-parsing-error -->
<template>
    <div class="PageNavigation_box">
        <div class="section-header "
             :style="{background:assemblyData.bgColor}">
            <!-- menu-of-mobile -->
            <!-- pc -->
            <div class="sub-header-container">
                <div class="wrapper">
                    <div class="mt8">
                        <i v-if="assemblyData.navType==2"
                           class="iconfont mr40 relative fs24"
                           style="top:-4px"
                           @click="isSlide=!isSlide">&#xe648;</i>
                        <a href="">
                            <img class="logoImage"
                                 :src="assemblyData.logoImage">
                        </a>
                    </div>
                    <div :class="'menu-list-wrapper'">
                        <div class="menu-list"
                             v-if="assemblyData.navType == 1"
                             :style="{ 'justify-content':(assemblyData.mainMenu == 1?'start':assemblyData.mainMenu==2?'center':'end')}">
                            <div v-for="(item,index) in assemblyData.content"
                                 :style="{padding:'0px '+assemblyData.mainMenuGap+'px'}"
                                 :key="index">
                                <div class="first-menu-item-wrapper"
                                     v-if="item.title">
                                    <div class="first-menu-item">
                                        <a :href="item.link"
                                           class="relative"
                                           :style="{color:assemblyData.contentColor}">
                                            {{item.title}}
                                            <div class="header-badge"
                                                 :style="{color:item.tagColor,background:item.tagBgColor}"
                                                 v-if="item.showTag">{{item.tagText}}</div>
                                        </a>
                                    </div>
                                    <div class="pc-sub-menu center active">
                                        <div :style="{background:assemblyData.submenuBg}"
                                             class="header-sub-menu-container first-level-header-sub-menu">
                                            <div :style="{width:assemblyData.menuGroups+'px'}"
                                                 v-for="(_item,_index) in item.children"
                                                 :key="_index">
                                                <div v-if="_item.type == 1">
                                                    <a :href="_item.link"
                                                       class="header-menu-item-text">
                                                        <img :src="_item.img"
                                                             class="header-menu-item-image" />
                                                        <div class="first-level-menu"
                                                             :style="{'text-align':(_item.alignment==2?'center':'')}">
                                                            <span v-html="_item.text"
                                                                  :style="{'border-bottom':(!_item.trimStrip?'none':''),color:assemblyData.submenuContentColor}"
                                                                  class="decorative-style h40">
                                                            </span>
                                                            <!--  :style="{color:assemblyData.submenuContentColor}" -->
                                                        </div>
                                                    </a>
                                                </div>
                                                <div v-else>
                                                    <div v-for="(ele,inx) in _item.children"
                                                         :class="{'mt16':inx!=0}"
                                                         :key="_index+'_'+inx">
                                                        <div class="header-sub-menu-box">
                                                            <a :href="ele.link"
                                                               :style="{color:assemblyData.submenuContentColor}"
                                                               class="relative">{{ ele.title }}
                                                                <div class="header-badge"
                                                                     :style="{color:ele.tagColor,background:ele.tagBgColor}"
                                                                     v-if="ele.showTag">{{ele.tagText}}</div>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="eDpfeW">
                        <div class="header-icon-container"
                             v-if="assemblyData.revealIcon.indexOf(1) != -1"><i :style="{color:assemblyData.contentColor}"
                               class="iconfont header-icon">&#xe601;</i></div>
                        <div class="header-icon-container"
                             v-if="assemblyData.revealIcon.indexOf(2) != -1">
                            <el-popover placement="bottom"
                                        popper-class="customPopper"
                                        width="40"
                                        trigger="hover">
                                <div class="personal">
                                    <div @click="personal('account')">我的账户</div>
                                    <div>我的优惠券</div>
                                    <div>消息通知</div>
                                </div>
                                <i :style="{color:assemblyData.contentColor}"
                                   class="iconfont header-icon"
                                   slot="reference">&#xe612;</i>
                            </el-popover>
                        </div>
                        <div class="header-icon-container"
                             v-if="assemblyData.revealIcon.indexOf(3) != -1"><i :style="{color:assemblyData.contentColor}"
                               class="iconfont header-icon">&#xe66f;</i></div>
                        <div class="header-icon-container"
                             v-if="assemblyData.revealIcon.indexOf(4) != -1"> <i :style="{color:assemblyData.contentColor}"
                               class="iconfont header-icon">&#xe604;</i></div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 移动 -->
        <div class="mobile-box"
             :style="{background:assemblyData.bgColor}">
            <div class="sub-header-container-mobile">
                <div class=" wrapper start">
                    <div>
                        <div class="menu-of-mobile">
                            <i class="iconfont"
                               @click="isSlide=!isSlide">&#xe648;</i>
                            <div v-if="isSlide"
                                 class="mobile-header-mask"></div>
                        </div>
                    </div>
                    <div>
                        <a href="">
                            <img class="logoImage"
                                 :src="assemblyData.logoImage">
                        </a>
                    </div>
                    <div class="jUrgfb">
                        <i class="iconfont fs24">&#xe601;</i>
                        <el-popover placement="bottom"
                                    trigger="hover">
                            <div class="mr20">
                                <div class="borB pb10 pt10 hand"
                                     v-for="(item,index) in iconArr"
                                     :key="index"
                                     v-show="index!=0">
                                    <i class="iconfont fs24">{{ item.value }}</i>
                                    <span class="ml10">{{ item.label }}</span>
                                </div>
                            </div>
                            <i class="iconfont fs30"
                               slot="reference">&#xe719;</i>
                        </el-popover>

                    </div>
                </div>
            </div>
        </div>
        <!-- 侧面 -->
        <div class="slide"
             :style="{transform: isSlide?'translateX(0%)':'translateX(-300px)'}">
            <div class="slide-container  ptb10">
                <div class="slide-container-header">
                    <i class="iconfont fs30"
                       @click="isSlide=!isSlide">&#xe85c;</i>
                </div>
                <div class="slide-left-scroll-body">
                    <div class="side-slide-left-scroll-content">
                        <div class="menu-container">
                            <div v-for="(item,index) in assemblyData.content"
                                 :key="index"
                                 class="hand menu-level-one first-menu-title p20"
                                 :class="{'sub-menu':(item.children)}">

                                <span v-if="!item.children"
                                      class="first-menu-title-text">{{ item.title }}</span>
                                <div v-else>
                                    <div class="sub-menu-title-container"
                                         @click="isSpread=!isSpread">
                                        <div class="sub-menu-title">
                                            <span class="sub-menu-title-text">{{ item.title }}</span>
                                        </div>
                                        <div class="sub-menu-icon"
                                             :style="{transform: isSpread?'rotate(180deg)':'rotate(90deg)'}">
                                            <i class="iconfont">&#xe645;</i>
                                        </div>
                                    </div>
                                    <div class="sub-menu-container mt20"
                                         :style="{height:isSpread?'auto':'0'}">

                                        <div v-for="(_item,_index) in item.children"
                                             :key="index+'_'+_index">
                                            <div v-if="_item.type == 1">
                                                <a :href="_item.link">
                                                    <img class="menu-image-item-image"
                                                         :src="_item.img" />
                                                    <div class="first-level-menu"
                                                         :style="{'text-align':(_item.alignment==2?'center':'')}">
                                                        <span v-html="_item.text"
                                                              :style="{'border-bottom':(!_item.trimStrip?'none':''),color:assemblyData.submenuContentColor}"
                                                              class="decorative-style h40">
                                                        </span>
                                                    </div>
                                                </a>
                                            </div>
                                            <div v-else>
                                                <div v-for="(ele,inx) in _item.children"
                                                     :class="{'mt16':inx!=0}"
                                                     :key="_index+'_'+inx">
                                                    <div class="header-sub-menu-box">
                                                        <a :href="ele.link"
                                                           :style="{color:assemblyData.submenuContentColor}"
                                                           class="relative">{{ ele.title }}
                                                            <div class="header-badge"
                                                                 :style="{color:ele.tagColor,background:ele.tagBgColor}"
                                                                 v-if="ele.showTag">{{ele.tagText}}</div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
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
      iconArr: [
        { label: "搜索", value: "\ue601" },
        { label: "账号", value: "\ue612" },
        { label: "心愿单", value: "\ue66f" },
        { label: "购物车", value: "\ue604" },
      ],
      isSpread: false,
      isSlide: false,
    };
  },
  mounted() {
    this.assemblyData = JSON.parse(JSON.stringify(this.assembly.content));
  },
  methods: {
    personal(type){
      this.$emit('personal',type)
    }
  },
};
</script>


<style lang="scss" scoped>
.PageNavigation_box {
  .section-header {
    height: 80px;
    z-index: initial;
    .sub-header-container {
      position: relative;
      box-sizing: border-box;
      height: 80px;
      color: rgba(0, 0, 0, 1);
      padding: 0px 80px;
      .wrapper {
        display: flex;
        box-sizing: border-box;
        -webkit-box-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        align-items: center;
        height: 100%;
        .logoImage {
          max-height: 44px !important;
        }
        .menu-list-wrapper {
          flex: 1 1 0%;
          position: relative;
          padding: 0px 24px;
          box-sizing: border-box;
          height: 100%;
          .menu-list {
            display: flex;
            flex-wrap: nowrap;
            padding: 8px 0px;
            width: 100%;
            // overflow: scroll hidden;
            -webkit-box-pack: center;
            justify-content: center;
            -webkit-box-align: center;
            align-items: center;
            height: 100%;
            box-sizing: border-box;
            position: relative;
            .first-menu-item-wrapper {
              height: 100%;
              // display: flex;
              flex-shrink: 0;
              -webkit-box-align: center;
              align-items: center;

              .header-badge {
                position: absolute;
                top: -10px;
                right: 0px;
                transform: translateX(100%);
                width: max-content;
                pointer-events: none;
                display: inline-block;
                line-height: 1;
                padding: 2px 4px;
                font-size: 11px;
                border-radius: 8px;
              }
              .first-menu-item {
                font-size: 14px;
                // line-height: 20px;
                font-family: Helvetica;
                font-style: normal;
                font-weight: 700;
                color: rgb(0, 0, 0);
                text-align: center;
                padding: 0px 16px;
                cursor: pointer;
                margin-top: 3px;
                line-height: 60px;
              }
              .pc-sub-menu {
                max-height: 0px;
                opacity: 0;
                .first-level-header-sub-menu {
                  -webkit-box-pack: center;
                  justify-content: center;
                  max-height: 0px;
                  transition: max-height 0.2s ease 0s;
                  // overflow: scroll;
                  // box-shadow: rgba(0, 0, 0, 0.04) 0px 4px 8px;

                  width: fit-content !important;
                  display: flex;
                  box-sizing: border-box;
                  gap: 40px 24px;
                  padding: 40px 80px;
                  max-height: 900px;
                  z-index: 2;
                  position: absolute;
                  top: calc(100% + 1px);
                }
              }
              .first-menu-item:hover + .pc-sub-menu {
                opacity: 1;
              }
              // .first-menu-item + .pc-sub-menu:hover {
              //   opacity: 1;
              // }
              .header-sub-menu-container {
                padding: 40px !important;
                // background-color: aqua;
                .header-menu-item-text {
                  display: block;
                  width: 100%;
                  color: rgb(68, 68, 68);
                  .header-menu-item-image {
                    display: block;
                    width: 100%;
                    margin-bottom: 16px;
                  }
                }
                .header-sub-menu-box {
                  margin-left: 0px !important;
                  padding: 0px;
                  cursor: pointer;
                  box-sizing: border-box;
                  max-width: 27.7778vw;
                  word-break: break-word;
                  font-size: 14px;
                  line-height: 20px;
                  font-weight: 400;
                }
              }
            }
          }
        }
        .eDpfeW {
          text-align: right;
          display: flex;
          -webkit-box-align: center;
          align-items: center;
          -webkit-box-pack: end;
          justify-content: flex-end;
          .header-icon-container {
            margin-left: 24px;
            display: inline-block;
            padding: 6px 0px;
            .header-icon {
              width: 24px;
              height: 24px;
              color: rgb(0, 0, 0);
              display: inline-block;
              vertical-align: bottom;
              font-size: 20px;
            }
          }
        }
      }
    }
  }

  // 移动
  .mobile-box {
    display: none;
    background: rgb(255, 246, 247);
    .sub-header-container-mobile {
      padding: 15px;
      position: relative;
      .wrapper {
        font-size: 0px;
        display: flex;
        box-sizing: border-box;
        -webkit-box-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        align-items: center;
      }
      .menu-of-mobile {
        padding: 0px;
        margin-right: 10px;
        .mobile-header-mask {
          position: fixed;
          left: 0px;
          top: 0px;
          width: 100vw;
          height: 100%;
          z-index: 100;
          background: rgba(26, 26, 27, 0.3);
          opacity: 0.3;
        }

        // text-align: right;
      }

      .logoImage {
        max-width: 200px;
        max-height: 24px;
        display: block;
      }
      .jUrgfb {
        flex: 1 1 0%;
        font-size: 20px;
        display: flex;
        -webkit-box-pack: end;
        justify-content: flex-end;
      }
    }
  }
  //弹层
  .slide {
    top: 0px;
    z-index: 600;
    left: 0px;
    width: 300px;
    height: 100vh;
    position: fixed;
    transition: all 0.2s ease-in-out 0s;
    transform: translateX(-300px);
    // transform: translateX(0%);
    overflow: hidden;
    .slide-container {
      background: rgb(255, 255, 255) !important;
      color: rgb(68, 68, 68) !important;
      height: 100%;
      .slide-container-header {
        line-height: 1;
        padding-bottom: 16px;
        border-bottom: 0px !important;
        text-align: right;
        padding: 8px 12px 0;
        box-shadow: rgb(209, 213, 219) 0px 0px 0px 0px;
        display: flex;
        -webkit-box-pack: end;
        justify-content: flex-end;
      }
      .slide-left-scroll-body {
        height: calc(100% - 40px);
        overflow: hidden scroll;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        -webkit-box-pack: start;
        justify-content: flex-start;
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
        .side-slide-left-scroll-content {
          width: 100%;
          max-height: 100%;
          margin: 24px 0px;
          .menu-container {
            text-align: left;
            background-color: rgb(255, 255, 255);
            color: rgb(68, 68, 68);
            font-weight: 500;
            .first-menu-title {
              margin-left: 0px;
              .first-menu-title-text {
                max-width: 70%;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                display: inline-block;
                cursor: pointer;
              }
            }

            .menu-level-one {
              font-size: 14px;
              color: rgb(68, 68, 68);
            }
            .sub-menu {
              .sub-menu-title-container {
                display: flex;
                -webkit-box-align: center;
                align-items: center;
                -webkit-box-pack: justify;
                justify-content: space-between;
                .sub-menu-title {
                  position: relative;
                  width: calc(100% - 28px);
                }
                .sub-menu-icon {
                  flex: 1 1 0%;
                  text-align: right;
                }
              }
              .sub-menu-container {
                transition: height 200ms ease 0s;
                overflow: hidden;
                height: 0px;
              }

              .menu-image-item-image {
                width: 100%;
                background-color: rgba(220, 222, 224, 0.2);
                text-align: center;
              }
            }
          }
        }
      }
    }
  }
  .first-level-menu {
    position: relative;
    margin-bottom: 24px;
    word-break: break-word;
    font-size: 14px;
    line-height: 20px;
    font-weight: 500;
    .decorative-style {
      display: inline-block;
      width: auto;
      border-bottom: 1px solid rgb(68, 68, 68);
      align-items: center;
      p {
        margin-bottom: 2px !important;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .mobile-box {
    display: block !important;
  }
  .section-header {
    display: none;
  }
  .slide {
    width: 300px;
  }
}
</style>
<style lang="scss">
.customPopper {
  padding: 2px !important;
  min-width: 90px !important;
  width: 90px;
  .personal {
    div {
      cursor: pointer;
      padding: 7px 5px;
    }
    div:hover {
      background: #e8e8e8;
    }
  }
}
</style>