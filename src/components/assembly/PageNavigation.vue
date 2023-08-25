<!-- eslint-disable vue/no-parsing-error -->
<template>
    <div class="section-header "
         :style="{background:assemblyData.bgColor}">
        <!-- menu-of-mobile -->
        <div class="sub-header-container ">
            <div class="wrapper">
                <!-- 移动版 -->
                <div class="menu-of-mobile">
                  <div class="W100">
                    <div class="p0 ml10">

                    </div>
                  </div>
                </div>
                <div class="mt8">
                    <a href="">
                        <img class="logoImage"
                             :src="assemblyData.logoImage">
                    </a>
                </div>
                <div :class="'menu-list-wrapper'">
                    <div class="menu-list"
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
                                <!-- background: rgb(255, 255, 255); -->
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
                                <div>我的账户</div>
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
    };
  },
  mounted() {
    console.info("导航栏=-=-=", this.assembly);
    this.assemblyData = JSON.parse(JSON.stringify(this.assembly.content));
  },
  methods: {},
};
</script>


<style lang="scss" scoped>
.section-header {
  background: rgb(255, 246, 247);
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
      // 移动样式
      .menu-of-mobile {
        display: block;
      }
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
            .first-menu-item + .pc-sub-menu {
              opacity: 1;
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
@media screen and (min-width: 768px) {
  // .section-header {
  //   min-height: 0px !important;
  // }
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