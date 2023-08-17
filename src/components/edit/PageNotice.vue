<template>
    <div class="H100">
        <div class="header">公告栏</div>
        <div class="operation-container">
            <!-- <div class="pl24 pr24 H100"> -->
            <div class="fw600 fs16 flex mb10">公告栏</div>
            <div class="mb16">
                <el-checkbox-group v-model="group.exhibit">
                    <el-checkbox :label="1"
                                 class=" mb10">仅主页</el-checkbox>
                    <el-checkbox :label="2"
                                 class="flex">固定顶部展示</el-checkbox>
                </el-checkbox-group>
            </div>
            <div>
                <div class="mb10 ">文本</div>
                <quill-editor class="ql-editors"
                              ref="myQuillEditor"
                              v-model="group.text"
                              :options="editorOption">
                </quill-editor>

            </div>
            <div class="mt10">
                <div>文字大小</div>
                <div class="ranger-container">
                    <el-slider v-model="group.fontSize"
                               :max="12"
                               size="mini"
                               class="W70 mr15"></el-slider>
                    <el-input v-model="group.fontSize"
                              size="mini"
                              class="w90">
                        <template slot="prepend">H</template>
                    </el-input>
                </div>
            </div>
            <div class="mt20 ">
                <div class="left">文本</div>
                <div class="end">
                    <el-color-picker v-model="group.constColor"
                                     size="mini"></el-color-picker>
                </div>
            </div>
            <div class="mt20 mb20">
                <div class="mb10">链接</div>
                <el-select v-model="group.link"
                           size="small"
                           filterable
                           clearable
                           placeholder="搜索或粘贴链接">
                    <el-option v-for="(item,index) in linkArr"
                               :key="index"
                               :label="item.label"
                               :value="item.value"></el-option>
                </el-select>
                <div class="fs12 mt4"
                     style="color:#969799">可选</div>
            </div>

            <div>
                <div class="left">图标元素</div>
                <div class="end">
                    <el-color-picker v-model="group.iconColor"
                                     size="mini"></el-color-picker>
                </div>

                <el-checkbox-group v-model="group.exhibitMedia">
                    <el-checkbox :label="1"
                                 class=" mb10">显示社交媒体</el-checkbox>
                    <el-checkbox :label="2"
                                 class="flex">显示联系电话</el-checkbox>
                </el-checkbox-group>
            </div>

            <div class="mt20">
                <div class="mb10">联系电话</div>
                <el-input v-model="group.phone"
                          size="small"></el-input>
            </div>

            <div class="mt20 ">
                <div class="left">公告栏背景</div>
                <div class="end">
                    <el-color-picker v-model="group.bgColor"
                                     size="mini"></el-color-picker>
                </div>
            </div>

            <div class="mt10">
                <div>背景不透明度</div>
                <div class="ranger-container">
                    <el-slider v-model="group.bgLucency"
                               :max="100"
                               size="mini"
                               class="W70 mr15"></el-slider>
                    <el-input v-model="group.bgLucency"
                              size="mini"
                              class="w90">
                        <template slot="append">%</template>
                    </el-input>
                </div>
            </div>
            <div class="mt20 mb20">
                <div class="mb10">公告栏宽度</div>
                <el-select v-model="group.width"
                           size="small"
                           filterable
                           clearable
                           placeholder="搜索或粘贴链接">
                    <el-option v-for="(item,index) in widthArr"
                               :key="index"
                               :label="item.label"
                               :value="item.value"></el-option>
                </el-select>
            </div>
        </div>
        <!-- </div> -->
    </div>
</template>
<script>
import { quillEditor } from "vue-quill-editor";
export default {
  props: {
    assembly: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  components: {
    "quill-editor": quillEditor,
  },
  watch: {
    group: {
      handler(newVal) {
        console.info("监听-0--",newVal,this.group)
        this.$emit("call", this.group);
      },
      deep: true,
    },
  },
  data() {
    return {
      group: {
        exhibit: [], //仅主页、固定顶部显示
        text: "", //文本
        fontSize: 12, //文字大小
        constColor: "", //文本颜色
        link: "", //点击文本
        iconColor: "", //图标颜色
        exhibitMedia: [], //媒体展示
        phone: "", //联系电话
        bgColor: "", //背景色
        bgLucency: "", //背景透明度
        width: "", //公告栏宽度
      },
      widthArr: [
        { label: "全屏", value: "full" },
        { label: "960px", value: "960px" },
        { label: "1280px", value: "1280px" },
      ],
      linkArr: [
        { img: "", label: "主页", value: "home" },
        { img: "", label: "搜索", value: "search" },
      ],
      editorOption: {
        debug: "info",
        placeholder: "",
        readOnly: false,
        theme: "snow",
        modules: {
          toolbar: [
            ["bold", "italic"], // toggled buttons
          ],
        },
      },
    };
  },
  mounted() {
    this.group = JSON.parse(JSON.stringify(this.assembly));
    console.info("查看信息-=-=-", this.assembly);
  },
  methods: {},
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
.ranger-container {
  display: flex;
  line-height: 46px;
  -webkit-box-align: center;
  align-items: center;
}
</style>
<style lang="scss">
.ql-editors {
  height: 170px;
}
.ql-toolbar.ql-snow {
  background: #f7f8fa !important;
  border: 1px solid #ebedf0 !important;
}
.ql-container.ql-snow {
  border: 1px solid #ebedf0 !important;
  height: 120px;
}
.el-input-group__append,
.el-input-group__prepend {
  padding: 0 5px !important;
}
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