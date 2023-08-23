<!-- eslint-disable vue/no-parsing-error -->
<template>

    <div class="section-header ">
        <div class="sub-header-container ">
            <div class="wrapper">
                <div class="mt8">
                    <a href="">
                        <img class="logoImage"
                             src="https://img01.yzcdn.cn/upload_files/2021/08/07/Fm1PAsz1rZpFaSdAaOEvJ5XrGAfd.png?imageView2/2/q/75/format/webp&"></img>
                    </a>
                </div>
                <div class="menu-list-wrapper">
                    <!-- 二级展开 -->
                    <div class="menu-content-list"></div>
                    <div class="menu-list">
                        <div class="first-menu-item-wrapper">
                            <div class="first-menu-item">
                                <a>
                                    HOME
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="eDpfeW">
                    <div class="header-icon-container"><i class="iconfont header-icon">&#xe601;</i></div>
                    <div class="header-icon-container">

                        <el-popover placement="bottom"
                                    popper-class="customPopper"
                                    width="40"
                                    trigger="hover">
                            <div class="personal">
                                <div >我的账户</div>
                                <div >我的优惠券</div>
                                <div >消息通知</div>
                            </div>
                            <i class="iconfont header-icon"
                               slot="reference">&#xe612;</i>
                        </el-popover>

                    </div>
                    <div class="header-icon-container"><i class="iconfont header-icon">&#xe66f;</i></div>
                    <div class="header-icon-container"><i class="iconfont header-icon">&#xe604;</i></div>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {},
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
          overflow: scroll hidden;
          -webkit-box-pack: center;
          justify-content: center;
          -webkit-box-align: center;
          align-items: center;
          height: 100%;
          box-sizing: border-box;
          position: relative;
          .first-menu-item-wrapper {
            height: 100%;
            display: flex;
            flex-shrink: 0;
            -webkit-box-align: center;
            align-items: center;
            .first-menu-item {
              font-size: 14px;
              line-height: 20px;
              font-family: Helvetica;
              font-style: normal;
              font-weight: 700;
              color: rgb(0, 0, 0);
              text-align: center;
              padding: 0px 16px;
              cursor: pointer;
              margin-top: 3px;
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
    div:hover{
      background: #e8e8e8;
    }
  }
}
</style>