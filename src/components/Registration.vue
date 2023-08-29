<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
        <div class="mask"></div>
        <div class="">
            <div class="login_box ">
                <div class="flex borderBottom">
                    <div class="pl20 W90 fs16">{{title}}</div>
                    <div>
                        <i class="iconfont fs25 relative"
                           style="top:-10px">&#xe85c;</i>
                    </div>
                </div>
                <div class="content_box">
                    <div v-if="type == 1">
                        <div>
                            <el-input placeholder="邮箱"></el-input>
                            <el-input placeholder="密码"
                                      show-password
                                      class=" mt10"></el-input>
                        </div>
                        <div class="end mt10">忘记密码？</div>
                        <div>
                            <el-button class="mt20 mainBtn">登录</el-button>
                            <el-button class="mt10 minorBox">注册</el-button>
                        </div>
                    </div>
                    <div class="pb10"
                         v-else-if="type == 2">
                        <el-input placeholder="邮箱"></el-input>
                        <el-button class="mt20 mainBtn">重置密码</el-button>
                    </div>
                    <div class="pb10"
                         v-else>
                        <div class="flex">
                            <el-input placeholder="名字"
                                      class="mr10"></el-input>
                            <el-input placeholder="姓氏"
                                      class="m110"></el-input>
                        </div>
                        <el-input placeholder="邮箱"
                                  class="mt10"></el-input>
                        <div class="mt10 verification">
                            <el-input placeholder="验证码"
                                      class="W80"></el-input>
                            <span class="hand">获取验证码</span>
                        </div>
                        <el-input placeholder="密码"
                                  class="mt10"></el-input>
                        <el-input placeholder="新密码"
                                  class="mt10"></el-input>
                        <el-button class="mt10 mainBtn">提交</el-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      title: "密码登录",
      type: 1,
      dialogVisible: true,
    };
  },
  mounted() {},
  methods: {
    handleClose() {},
  },
};
</script>
<style lang="scss" scoped>
.mask {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  height: 100%;
  z-index: 1050;
}
.login_box {
  // animation: sway 1s linear infinite;
  // @keyframes sway {
  //   0% {
  //     transform: translateY(0);
  //   }
  //   100% {
  //     transform: translate(100px);
  //   }
  // }

  min-width: 560px;

  // width: 560px;
  transform-origin: 896.222px 79.6389px 0px;
  // padding: 24px 0px !important;
  padding-top: 24px;
  background-color: #fff;
  border-radius: 0;
  position: relative;
  display: inline-block;
  vertical-align: middle;
  text-align: initial;
  box-sizing: border-box;
  white-space: normal;
  max-width: 91% !important;
  z-index: 1051;
  .borderBottom {
    border-bottom: 1px solid #dcdee0;
    padding-bottom: 10px;
  }
  .content_box {
    padding: 24px 24px 10px 24px;
    .mainBtn {
      background: #000;
      color: #fff;
      height: 45px;
      width: 100%;
      font-size: 16px;
    }
    .minorBox {
      height: 45px;
      border: none;
      width: 100%;
      margin-left: 0;
      font-size: 16px;
    }
    .minorBox:hover {
      background: #fff;
    }
  }
}
</style>
<style lang="scss">
.content_box {
  .el-input--small {
    .el-input__inner {
      height: 50px;
      line-height: 50px;
    }
  }
  .verification {
    border: 1px solid #dcdfe6;
    .el-input__inner {
      border: none;
    }
  }
}
</style>