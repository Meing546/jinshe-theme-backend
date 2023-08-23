<template>
    <div>
        <el-dialog :visible.sync="dialogVisible"
                   width="60%"
                   :before-close="handleClose"
                   class="imgBox">
            <span class="titleStyle">选择图片</span>
            <div class="borTop"></div>
            <div class="mb20">
                <el-button type="primary"
                           class="mt20">上传图片</el-button>
            </div>
            <div class="select-file-body">
                <div class="file-grouping">
                    <ul class="grouping-list">
                        <li v-for="item in grouping"
                            :key="item.id"
                            class="grouping-item"
                            :class="{'grouping-item-active':(item.id == groupingId)}">{{ item.name }}</li>
                    </ul>

                </div>
                <div class="select-file-body-right">
                    <div class="file-list">
                        <div class="file-item"
                             v-for="item in imgList"
                             :key="item.link">
                            <div class="file-item-thumbnail-wrapper">
                                <div class="file-item-action"
                                     :class="{'file-item-action-checked':(imageId.indexOf(item.id)!=-1)}">
                                    <el-checkbox v-model="imageId"
                                                 :label="item.id"
                                                 @input="cutimage(item)"></el-checkbox>
                                </div>
                                <div>
                                    <el-image :src="item.link"
                                              style="object-fit: contain; width: 98px;height: 98px; "></el-image>
                                </div>
                            </div>
                            <div class="file-item-name">{{ item.name }}</div>
                        </div>
                    </div>
                </div>
            </div>
            <span slot="footer"
                  class="dialog-footer">
                <el-button @click="close">取 消</el-button>
                <el-button type="primary"
                           @click="confirm">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
export default {
  data() {
    return {
      dialogVisible: true,
      groupingId: -1,
      imageId: [],
      // 分组
      grouping: [{ id: -1, name: "未分组", sum: 0 }],
      imgList: [
        {
          id: 1,
          link: "https://img01.yzcdn.cn/upload_files/2021/08/07/Fm1PAsz1rZpFaSdAaOEvJ5XrGAfd.png",
          name: "图一",
        },
        {
          id: 2,
          link: "https://img01.yzcdn.cn/upload_files/2021/08/07/FsvDUymHl7oNb4K516THr2qU4Nyz.png",
          name: "图二",
        },
        {
          id: 3,
          link: "https://img01.yzcdn.cn/upload_files/2021/08/07/Fl_x2sqPOzlo7p588wjHnHpc-Ici.png",
          name: "图三",
        },
        {
          id: 4,
          link: "https://img01.yzcdn.cn/upload_files/2021/08/19/FoSSq7vaH1OmbuRMwDm9knMQ4piO.png?width=901&height=901",
          name: "图四",
        },
        {
          id: 5,
          link: "https://img01.yzcdn.cn/upload_files/2021/08/19/FtjXrKL5Z8fEFekISojQcWrBRDgE.png?width=900&height=901",
          name: "图五",
        },
      ],
    };
  },
  mounted() {},
  methods: {
    cutimage(item) {
      this.imageId = [item.id];
    },
    confirm() {
      if (!this.imageId.length) this.$message.error("您还未选择图片!");
      let imgInfo = this.imgList.find((ele) => ele.id == this.imageId[0]);
      this.$emit("confirm", imgInfo);
    },
    close() {
      this.$emit("close");
    },
  },
};
</script>
<style scoped lang="scss">
.imgBox {
  .titleStyle {
    position: absolute;
    top: 10px;
    font-size: 18px;
    color: #323233;
    padding-bottom: 10px;
    border-bottom: 2px solid #2654ff;
  }
  .borTop {
    border-top: 1px solid #dcdee0;
  }
  .select-file-body {
    display: flex;
    min-height: 400px;
    .file-grouping {
      width: 196px;
      min-width: 196px;
      height: 100%;
      padding: 2px;
      background-color: #f7f8fa;
      .grouping-list {
        min-height: 36px;
        .grouping-item {
          padding: 0 14px;
          height: 36px;
          line-height: 36px;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          color: #969799;
        }
        .grouping-item-active {
          background-color: #f1f4fe;
          color: var(--theme-color);
        }
      }
    }
    .select-file-body-right {
      margin-bottom: 37px;
      .file-list {
        display: flex;
        flex-wrap: wrap;
        // width: 592px;
        overflow-y: auto;
        border-left: 1px solid #ebedf0;
        margin-left: 16px;
        margin-bottom: 30px;
        .file-item {
          margin-left: 16px;
          margin-bottom: 16px;
          width: 98px;
          .file-item-thumbnail-wrapper {
            width: 98px;
            height: 98px;
            position: relative;
            cursor: pointer;
            border-radius: 4px;
            border: 1px solid #f2f3f5;
            overflow: hidden;
            .file-item-action {
              visibility: hidden;
              position: absolute;
              width: 100%;
              height: 100%;
              background: rgba(0, 0, 0, 0.2);
              padding: 8px;
              box-sizing: border-box;
              border-radius: 4px;
              z-index: 1;
            }
            .file-item-action-checked {
              visibility: visible;
              border: 2px solid #476cf0;
              padding: 6px;
            }
          }
          .file-item-thumbnail-wrapper:hover .file-item-action {
            visibility: visible;
            background: rgba(0, 0, 0, 0.2) !important;
          }
          .file-item-name {
            width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            word-break: break-word;
            margin-top: 8px;
          }
        }
      }
    }
  }
}
</style>
<style lang="scss">
.imgBox {
  ul,
  ol {
    list-style: none;
  }
  .el-checkbox__label {
    display: none;
  }
}
</style>
