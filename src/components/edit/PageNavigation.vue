<template>
    <div class="H100">
        <div class="H100"
             v-if="!goMenu">
            <div class="header">导航</div>
            <div class="operation-container">
                <div class="pb16 borB">菜单</div>
                <div v-for="(item,index) in group.content"
                     :key="index"
                     class="borB section-item">
                    <span class="iconfont pl2 mr8"
                          style="color:#CCD0D7">&#xe60e;</span>
                    <span class="iconfont fs20"
                          style="color:#646566">&#xe8ae;</span>
                    <span class="pl16 fs16"
                          style="color:#15161b">{{ item.title }}</span>
                </div>
                <div class="borB">

                    <el-popover placement="bottom-end"
                                width="100"
                                trigger="manual"
                                v-model="visible">

                        <div class="block-list">
                            <div class="select-block-item">菜单导航(0/1)</div>
                            <div class="select-block-item">自定义菜单</div>
                        </div>
                        <div class="add-block-item"
                             slot="reference"
                             @click="visible = !visible">
                            <div><span class="plus iconfont">&#xeaf3;</span>
                                <span>添加内容</span>
                            </div>
                            <div>
                                <i style="color:#B9BFC9"
                                   :class="!visible?'el-icon-caret-bottom':'el-icon-caret-top'"></i>
                            </div>
                        </div>
                    </el-popover>

                </div>

                <div>
                    <div class="mt5 mb10 mt10">导航类型</div>
                    <el-select v-model="group.navType"
                               size="small">
                        <el-option v-for="item in navTypArr"
                                   :key="item.value"
                                   :label="item.label"
                                   :value="item.value"></el-option>
                    </el-select>
                </div>
                <div class="mt10">
                    <div class="logoTitle">logo设置</div>
                    <div class="pt14 mb8">logo图片</div>
                    <div class="textCenter">
                        <div class="image-picker-container">
                            <div class="img-selected-box">
                                <el-image :src="group.logoImage"
                                          class="img-by-select "></el-image>
                            </div>
                            <div class="edit-button">
                                <span class="edit-item">更改</span>
                                <sapn class="edit-item">删除</sapn>
                            </div>
                        </div>
                    </div>
                    <div class="mt24">
                        <div class="mb10">logo对齐方式</div>
                        <el-select v-model="aligningType">
                            <el-option :value="1">左侧</el-option>
                            <el-option :value="2">居中</el-option>
                        </el-select>
                    </div>
                </div>
                <div class="mt10">
                    <div class="navSet">导航栏设置</div>
                    <div class="mt10">导航栏高度</div>
                    <div class="ranger-container">
                        <el-slider v-model="group.navHeight"
                                   :max="160"
                                   :min="60"
                                   class="W70 mr15"></el-slider>
                        <el-input v-model="group.navHeight"
                                  size="mini"
                                  class="w90">
                            <template slot="append">px</template>
                        </el-input>
                    </div>

                    <div class="mt10">
                        <div class="mb10">导航栏宽度 </div>
                        <el-select v-model="group.width">
                            <el-option v-for="(item,index) in widthArr"
                                       :key="index"
                                       :label="item.label"
                                       :value="item.value"></el-option>
                        </el-select>
                    </div>
                    <div class="mt10">
                        <div>主菜单对齐方式</div>
                        <el-select v-model="group.mainMenu"
                                   class="mt10">
                            <el-option v-for="item in aligningArr"
                                       :key="item.value"
                                       :label="item.label"
                                       :value="item.value"> </el-option>
                        </el-select>
                    </div>
                    <div class="mt10">
                        <div>子菜单对齐方式</div>
                        <el-select v-model="group.submenu">
                            <el-option v-for="item in aligningArr"
                                       :key="item.value"
                                       :label="item.label"
                                       :value="item.value"
                                       v-show="item.value!=3"></el-option>
                        </el-select>
                    </div>
                    <div class="mt10">
                        <div>子菜单打开方式</div>
                        <el-select v-model="group.openMode">
                            <el-option label="下拉展开"
                                       :value="1"></el-option>
                            <el-option label="点击进入"
                                       :value="2"></el-option>
                        </el-select>
                    </div>
                    <div class="mt10">
                        <div>H5展开图标样式</div>
                        <el-select v-model="group.expansionStyle">
                            <el-option label="样式1"
                                       :value="1"></el-option>
                            <el-option label="样式2"
                                       :value="2"></el-option>
                        </el-select>
                    </div>
                    <div class="mt10">
                        <div class="lh36">主菜单间距</div>
                        <div class="ranger-container">
                            <el-slider v-model="group.mainMenuGap"
                                       :max="80"
                                       :min="16"
                                       class="W70 mr15"></el-slider>
                            <el-input v-model="group.mainMenuGap"
                                      size="mini"
                                      class="w90">
                                <template slot="append">px</template>
                            </el-input>
                        </div>
                    </div>
                    <div class="mt10">
                        <div class="lh36">菜单组间距</div>
                        <div class="ranger-container">
                            <el-slider v-model="group.menuGroups"
                                       :max="600"
                                       :min="100"
                                       class="W70 mr15"></el-slider>
                            <el-input v-model="group.menuGroups"
                                      size="mini"
                                      class="w90">
                                <template slot="append">px</template>
                            </el-input>
                        </div>
                    </div>

                    <el-checkbox-group v-model="group.exhibit">
                        <el-checkbox :label="1"
                                     class=" mb10">子菜单自适应内容宽度</el-checkbox>
                        <el-checkbox :label="2"
                                     class="flex">上滑消失下滑出现</el-checkbox>
                    </el-checkbox-group>
                </div>
                <div class="mt20">
                    <div class="navSet">导航颜色</div>
                    <div class="mt20 ">
                        <div class="left">默认背景颜色</div>
                        <div class="end">
                            <el-color-picker v-model="group.bgColor"
                                             size="mini"></el-color-picker>
                        </div>
                    </div>
                    <div class="mt20 ">
                        <div class="left">默认文字和图标颜色
                        </div>
                        <div class="end">
                            <el-color-picker v-model="group.contentColor"
                                             size="mini"></el-color-picker>
                        </div>
                    </div>
                    <div class="mt10">
                        <el-checkbox v-model="group.lucencyBg">启用透明背景</el-checkbox>
                        <div class="hint">启用后,导航将叠放在主页内容上方</div>
                    </div>

                    <div class="mt20 "
                         v-for="item in colorSet"
                         :key="item.value">
                        <div class="left">{{ item.label }}</div>
                        <div class="end">
                            <el-color-picker v-model="group[item.value]"
                                             size="mini"></el-color-picker>
                        </div>
                    </div>
                    <div class="mt20"
                         v-for="item in FontSizeArr"
                         :key="item.value">
                        <div>{{ item.label }}</div>
                        <div class="ranger-container">
                            <el-slider v-model="group[item.value]"
                                       :max="12"
                                       :min="8"
                                       class="W70 mr15"></el-slider>
                            <el-input v-model="group[item.value]"
                                      size="mini"
                                      class="w90">
                                <template slot="prepend">H</template>
                            </el-input>
                        </div>
                    </div>

                    <div class="mt10">
                        <el-checkbox-group v-model="group.revealIcon">
                            <el-checkbox v-for="item in revealIconArr"
                                         class="mt20"
                                         :label="item.value"
                                         :key="item.value">{{item.label}}</el-checkbox>
                        </el-checkbox-group>
                    </div>

                </div>
            </div>
        </div>

        <div class="H100">
            <div class="header flex pl20">
                <sapn class="iconfont fs20">&#xe61e;</sapn>
            </div>
            <div class="operation-container">

                <div class="pb16 borB">内容</div>
                <div v-for="(item,index) in group.content[contentIndex].children"
                     :key="index"
                     class="borB section-item">
                    <span class="iconfont pl2 mr8"
                          style="color:#CCD0D7">&#xe60e;</span>
                    <span class="iconfont fs20"
                          style="color:#646566"> {{item.type==1?'&#xe8e1;':'&#xe8ba;'}} </span>
                    <span class="pl16 fs16"
                          style="color:#15161b">{{ item.type==1?'图片':'菜单组'}}</span>
                </div>
                <div class="borB">
                    <el-popover placement="bottom-end"
                                width="100"
                                trigger="manual"
                                v-model="visible">

                        <div class="block-list">
                            <div class="select-block-item">菜单组</div>
                            <div class="select-block-item">图片</div>
                        </div>
                        <div class="add-block-item"
                             slot="reference"
                             @click="visible = !visible">
                            <div><span class="plus iconfont">&#xeaf3;</span>
                                <span>添加内容</span>
                            </div>
                            <div>
                                <i style="color:#B9BFC9"
                                   :class="!visible?'el-icon-caret-bottom':'el-icon-caret-top'"></i>
                            </div>
                        </div>
                    </el-popover>

                </div>

                <div>
                    <div class="navSet">设置</div>
                    <div class="mt20">
                        <div class="mb10">菜单标签</div>
                        <el-input v-model="group.content[contentIndex].children[stairIndex].title"></el-input>
                    </div>
                    <div class="mt20">
                        <div>链接</div>
                        <el-select class="mt10"
                                   v-model="group.content[contentIndex].children[stairIndex].link">
                            <el-option></el-option>
                        </el-select>
                        <div style="color:#969799">可选</div>
                    </div>

                    <div class="mt20 mb10">
                        <div class="mb10">打开方式</div>
                        <el-select v-model="group.content[contentIndex].openMode">
                            <el-option label="当前页面打开"
                                       :value="1"></el-option>
                            <el-option label="新窗口打开"
                                       :value="2"></el-option>
                        </el-select>
                    </div>
                    <div>
                        <el-checkbox v-model="group.content[contentIndex].children[stairIndex].showTag">显示标签</el-checkbox>
                    </div>

                    <el-button type="text">
                        <span calss="iconfont">&#xe74b;</span>
                        删除内容
                    </el-button>
                </div>

            </div>

        </div>

    </div>
</template>
<script>
export default {
  data() {
    return {
      goMenu: true,
      contentIndex: 1,
      stairIndex: 1,
      group: {
        content: [
          { title: "HOME" },
          {
            title: "NEW",
            type: 1,
            link: "",
            openMode: 1,
            children: [
              {
                title: "",
                type: 1,
                img: "",
                link: "",
                text: "",
                textFontSize: 12,
                alignment: 1,
                trimStrip: true,
              },
              {
                type: 2,
                children: [
                  {
                    title: "",
                    link: "",
                    alignment: 1,
                    showTag: false,
                    tagBgColor: "",
                    textColor: "",
                  },
                ],
              },
            ],
          },
          { title: "121" },
        ],
        navType: 1, //导航类型:横向导航,侧边导航
        aligningType: 1, //对齐方式:左侧,居中
        logoImage:
          "https://img01.yzcdn.cn/upload_files/2021/08/07/Fm1PAsz1rZpFaSdAaOEvJ5XrGAfd.png",
        navHeight: 80,
        width: "full", //导航栏宽度
        mainMenu: 1, //主菜单对齐方式
        submenu: 1, //子菜单对齐方式
        openMode: 1, //子菜单打开方式
        expansionStyle: 1, //H5展开图标样式
        mainMenuGap: 16, //主菜单宽度
        menuGroups: 205, //菜单组宽度
        exhibit: [], //子菜单自适应内容宽度,上滑消失下滑出现
        bgColor: "", //背景色
        contentColor: "", //文字与图标颜色
        lucencyBg: false, //透明背景色
        slideBg: "", //滑动前背景颜色
        slideContentColor: "", //滑动前文字颜色
        submenuBg: "", //子菜单背景
        submenuContentColor: "", //子菜单文字
        stairFontSize: 11, //一级字号
        secondFontSize: 11, //二级字号
        threeFontSize: 11, //三级
        revealIcon: [], //显示搜索图标
      },

      colorSet: [
        { label: "滑动前背景", value: "slideBg" },
        { label: "滑动前文字和图标", value: "slideContentColor" },
        { label: "子菜单背景", value: "submenuBg" },
        { label: "子菜单文字", value: "submenuContentColor" },
      ],
      FontSizeArr: [
        { label: "1级菜单字号", value: "stairFontSize" },
        { label: "2级菜单字号", value: "secondFontSize" },
        { label: "3级菜单字号", value: "threeFontSize" },
      ],
      revealIconArr: [
        { label: "显示搜索图标", value: 1 },
        { label: "显示个人中心图标", value: 2 },
        { label: "显示心愿单图标", value: 3 },
        { label: "显示购物车图标", value: 4 },
      ],

      navTypArr: [
        { label: "横向导航", value: 1 },
        { label: "侧边导航", value: 2 },
      ],

      widthArr: [
        { label: "全屏", value: "full" },
        { label: "960px", value: "960px" },
        { label: "1280px", value: "1280px" },
      ],
      aligningArr: [
        { label: "左侧", value: 1 },
        { label: "居中", value: 2 },
        { label: "右侧", value: 3 },
      ],
      visible: false,
    };
  },
};
</script>
<style lang="scss" scoped>
.header {
  background: #fff;
  font-size: 16px;
  color: #15161b;
  text-align: center;
  line-height: 64px;
  margin-bottom: 8px;
}
.section-item {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  height: 64px;
  line-height: 64px;
  cursor: pointer;
}
.operation-container {
  background: rgb(255, 255, 255);
  padding: 20px;
  box-sizing: border-box;
  overflow: hidden auto;
  height: calc(100% - 72px);

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
}

.add-block-item {
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

.block-list {
  .select-block-item {
    cursor: pointer;
    padding: 10px 20px;
  }
  .select-block-item:hover {
    background: rgba(0, 0, 0, 0.1);
  }
}
.logoTitle {
  line-height: 30px;
  background: #fff;
  text-align: left;
  font-weight: 600;
  color: #15161b;
  font-size: 16px;
  margin-bottom: 10px;
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
}
.img-selected-box {
  width: 100%;
  height: calc(100% - 40px);
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  display: flex;
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
.navSet {
  line-height: 30px;
  background: #fff;
  text-align: left;
  font-weight: 600;
  color: #15161b;
  font-size: 16px;
  margin-bottom: 10px;
}
.ranger-container {
  display: flex;
  line-height: 46px;
  -webkit-box-align: center;
  align-items: center;
}
.hint {
  color: #969799;
  font-size: 14px;
  line-height: 20px;
}
</style>
<style>
.el-slider__button {
  width: 12px !important;
  height: 12px !important;
}
.el-slider__bar {
  height: 4px !important;
}
.el-slider__runway {
  height: 4px !important;
}
.el-color-picker__trigger {
  width: 46px !important;
}
.el-color-picker__color {
  width: 36px !important;
}
.el-icon-close:before {
  content: "" !important;
}
.el-icon-arrow-down:before {
  content: "" !important;
}
</style>