<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <el-row>
        <quill-editor class="ql-editors"
                      ref="myQuillEditor"
                      v-model="content"
                      :options="editorOption"
                      @blur="onEditorBlur($event)"
                      @focus="onEditorFocus($event)">
        </quill-editor>
    </el-row>
</template>
<script>
import { quillEditor, Quill } from "vue-quill-editor";
import ImageResize from "quill-image-resize-module"; // 引用，调整图片大小
Quill.register("modules/imageResize", ImageResize);

export default {
  components: {
    "quill-editor": quillEditor,
  },
  data() {
    return {
      quillIndex: 0,
      content: "",
      editorOption: {
        debug: "info",
        placeholder: "",
        readOnly: false,
        theme: "snow",
        modules: {
          toolbar: [
            ["bold", "italic", "underline", "strike"], // toggled buttons
            ["blockquote", "code-block"],

            [{ header: 1 }, { header: 2 }], // custom button values
            [{ list: "ordered" }, { list: "bullet" }],
            [{ script: "sub" }, { script: "super" }], // superscript/subscript
            [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
            [{ direction: "rtl" }], // text direction
            [{ size: ["ft10", "ft12", "ft14", "ft16", "ft18", "ft32"] }], // 字体大小
            [{ header: [1, 2, 3, 4, 5, 6, false] }],

            [{ color: [] }, { background: [] }], // dropdown with defaults from theme
            [{ font: [] }],
            [{ align: [] }],
            ["link", "image", "video"],
          ],
          imageResize: {
            displayStyles: {
              backgroundColor: "black",
              border: "none",
              color: "white",
            },
            modules: ["Resize", "DisplaySize", "Toolbar"],
          },
        },
      },
      messageData: {
        en: { insertion: [], content: "" },
        zh: { insertion: [], content: "" },
      },
      key: "zh",
      messages: {
        en: require("@/lang/en.json"),
        zh: require("@/lang/zh.json"),
      },
      quill: null,
      popover: false,
      insertion: [],
      themeInsertion: [],
      isRead: false,
    };
  },
  mounted() {
    this.quill = this.$refs.myQuillEditor.quill;
    this.FontAttributors();
  },
  methods: {
    getDatas(data, isRead) {
      this.content = data[this.key].content;
      this.messageData = data;
      if (isRead) this.isRead = isRead;
    },
    language(infos) {
      this.messageData[this.key].content = this.content;
      this.content = this.messageData[infos.key].content;
      this.key = infos.key;
      // this.insertion = infos.insertion;
    },
    addChoose(lable, type) {
      if (type == 1) {
        this.quill.insertText(this.quillIndex, lable.name, "link", lable.url);
      }
      if (type == 2) this.quill.insertEmbed(this.quillIndex, "text", lable);
    },

    messageDataFun(type) {
      this.messageData[this.key].content = this.content;
      this.$emit("messageDataFun", { messageData: this.messageData, type });
    },
    onEditorBlur() {
      this.quillIndex = this.quill.selection.savedRange.index;
    },
    onEditorFocus(quill) {
      if (this.isRead) quill.enable(false);
      this.quillIndex = this.quill.selection.savedRange.index;
      this.$emit("themeFocus", false);
    },
    FontAttributors() {
      // 增加字体大小配置项
      var FontAttributor = Quill.import("attributors/class/size");
      FontAttributor.whitelist = [
        "ft10",
        "ft12",
        "ft14",
        "ft16",
        "ft18",
        "ft32",
      ];
      Quill.register(FontAttributor, true);
    },
  },
};
</script>
<style lang="scss">
.insertBorder {
  border: 1px solid #dcdfe6;
  padding: 10px;
}
.ql-editors {
  height: 400px;
}

.ql-container.ql-snow {
  // height: 220px;
  // white-space: pre-wrap; /*保留空格*/
}

.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="1"]::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="1"]::before {
  content: "H1";
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="2"]::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="2"]::before {
  content: "H2";
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="3"]::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="3"]::before {
  content: "H3";
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="4"]::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="4"]::before {
  content: "H4";
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="5"]::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="5"]::before {
  content: "H5";
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="6"]::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="6"]::before {
  content: "H6";
}

.ql-snow .ql-picker.ql-size .ql-picker-label[data-value="ft10"]::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value="ft10"]::before {
  content: "10px";
}
.ql-snow .ql-picker.ql-size .ql-picker-label[data-value="ft12"]::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value="ft12"]::before {
  content: "12px";
}
.ql-snow .ql-picker.ql-size .ql-picker-label[data-value="ft14"]::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value="ft14"]::before {
  content: "14px";
}
.ql-snow .ql-picker.ql-size .ql-picker-label[data-value="ft16"]::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value="ft16"]::before {
  content: "16px";
}
.ql-snow .ql-picker.ql-size .ql-picker-label[data-value="ft18"]::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value="ft18"]::before {
  content: "18px";
}
.ql-snow .ql-picker.ql-size .ql-picker-label[data-value="ft32"]::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value="ft32"]::before {
  content: "32px";
}
.ql-size-ft10 {
  font-size: 10px;
}
.ql-size-ft12 {
  font-size: 10px;
}

.ql-size-ft14 {
  font-size: 14px;
}

.ql-size-ft16 {
  font-size: 16px;
}

.ql-size-ft18 {
  font-size: 18px;
}

.ql-size-ft32 {
  font-size: 32px;
}
</style>

