<template>
    <div class="header-announcement"
         v-if="Object.keys(assemblyData).length>0"
         :class="{'fixed-top':assemblyData.exhibit.indexOf(2)!=-1}">
        <div class="body-bg"
             :style="{background:assemblyData.bgColor,opacity:(assemblyData.bgLucency*0.01)}"></div>
        <ul class="announcement-body">
            <li class="body-left">
                <div :style="{'font-weight': '600',color:assemblyData.iconColor}"
                     v-if="assemblyData.phone && assemblyData.exhibitMedia.indexOf(2) != -1">
                    <span class="iconfont">&#xe655;</span>
                    <span>{{ assemblyData.phone }}</span>
                </div>
            </li>
            <li class="body-center">
                <a v-html="assemblyData.text"
                   :style="{'font-weight': '700',color:assemblyData.constColor,'font-size':fontSizeObj[assemblyData.fontSize]}">
                </a>
            </li>
            <li class="body-left-right">
                <span v-if="assemblyData.exhibitMedia.indexOf(1) != -1">
                    <a v-for="(item,index) in mediaArr"
                       :key="index"
                       :href="item.href"
                       class="mr20"
                       :style="{color:assemblyData.iconColor}">
                        <i class="iconfont ">{{ item.icon }}</i>
                    </a>
                </span>
            </li>
        </ul>

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
      // group: {
      //   exhibit: [], //仅主页、固定顶部显示
      //   text: "", //文本
      //   fontSize: 12, //文字大小
      //   constColor: "", //文本颜色
      //   link: "", //点击文本
      //   iconColor: "", //图标颜色
      //   exhibitMedia: [], //媒体展示
      //   phone: "", //联系电话
      //   bgColor: "", //背景色
      //   bgLucency: "", //背景透明度
      //   width: "", //公告栏宽度
      // },
    };
  },
  mounted() {
    this.assemblyData = JSON.parse(JSON.stringify(this.assembly.content));
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.fixed-top {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  z-index: 99;
}
.header-announcement {
  min-height: 58px;
  width: 100%;
  padding: 0px 80px;
  box-sizing: border-box;
  position: relative;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
}
//1111111111111
.body-bg {
  height: 100%;
  width: 100%;
  position: absolute;
  left: 0px;
}
.announcement-body {
  width: 100%;
  position: relative;
  display: flex;
  z-index: 1;
  -webkit-box-align: center;
  align-items: center;
  box-sizing: border-box;

  .body-left-right {
    flex: 1 1 0%;
  }
  .body-center {
    box-sizing: border-box;
    flex: 3 1 0%;
    text-align: center;
    padding: 4px 16px;
  }
}

@media screen and (max-width: 768px) {
  .header-announcement .announcement-body {
    flex-direction: column;
  }
  .header-announcement {
    min-height: 42px;
    padding: 6px 0px;
    box-sizing: border-box;
  }
  .announcement-body-left {
    text-align: center;
  }
}
</style>
<style >
ol,
ul {
  list-style: none !important;
  padding: 0;
  margin: 0;
}
a {
  text-decoration: none;
}
</style>