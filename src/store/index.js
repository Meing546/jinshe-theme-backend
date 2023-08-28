import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sub_menu_temp: [
      [
        {
          id: '001',
          title: '公告栏',
          isShow: true,
          prefix: false,
          iconfont: '\ue7ab',
          assembly: 'PageNotice',
          content: {
            exhibit: [1, 2], //仅主页、固定顶部显示
            text: '<p>Mid-year limited time offer</p>', //文本
            fontSize: 11, //文字大小
            constColor: '#000000', //文本颜色
            link: '', //点击文本
            iconColor: '#000000', //图标颜色
            exhibitMedia: [1, 2], //媒体展示
            phone: '022-0123-2345', //联系电话
            bgColor: '#fff6f7', //背景色
            bgLucency: 100, //背景透明度
            width: 'full', //公告栏宽度
          },
        },
        {
          id: '002',
          title: '导航',
          isShow: false,
          prefix: false,
          iconfont: '\ue85a',
          assembly: 'PageNavigation',
          content: {
            content: [
              {
                title: 'NEW',
                type: 1, //自定义菜单
                link: '',
                openMode: 1,
                showTag: false,
                tagText: 'New',
                tagBgColor: '#FF6500',
                tagColor: '#ffffff',
                children: [
                  {
                    title: '', //标题
                    type: 1, //图标
                    img: 'https://img01.yzcdn.cn/upload_files/2021/08/07/FkIL32Xjm2GDYIYW-w0SS0zPfpuH.png',
                    link: '', //跳转链接
                    text: '', //文本
                    textFontSize: 12, //字体大小
                    alignment: 1, //对齐方式
                    trimStrip: true, //装饰条
                  },
                  {
                    type: 2, //菜单
                    title: '',
                    alignment: 1, //对齐方式
                    trimStrip: true, //装饰条
                    children: [
                      {
                        title: '',
                        link: '',
                        alignment: 1,
                        showTag: false,
                        tagBgColor: '',
                        textColor: '',
                      },
                    ],
                  },
                ],
              },
            ],
            navType: 1, //导航类型:横向导航,侧边导航
            aligningType: 1, //对齐方式:左侧,居中
            logoImage:
              'https://img01.yzcdn.cn/upload_files/2021/08/07/Fm1PAsz1rZpFaSdAaOEvJ5XrGAfd.png',
            navHeight: 80,
            width: 'full', //导航栏宽度
            mainMenu: 2, //主菜单对齐方式
            submenu: 1, //子菜单对齐方式
            openMode: 1, //子菜单打开方式
            expansionStyle: 1, //H5展开图标样式
            mainMenuGap: 16, //主菜单宽度
            menuGroups: 205, //菜单组宽度
            exhibit: [], //子菜单自适应内容宽度,上滑消失下滑出现
            bgColor: 'rgb(255, 246, 247', //背景色
            contentColor: '', //文字与图标颜色
            lucencyBg: false, //透明背景色
            slideBg: '', //滑动前背景颜色
            slideContentColor: '', //滑动前文字颜色
            submenuBg: '#ffffff', //子菜单背景
            submenuContentColor: '', //子菜单文字
            stairFontSize: 11, //一级字号
            secondFontSize: 11, //二级字号
            threeFontSize: 11, //三级
            revealIcon: [1, 2, 3, 4], //显示搜索图标
          },
        },
        {
          id: '003',
          title: '单个商品',
          isShow: true,
          prefix: true,
          iconfont: '\ue603',
        },
      ],
      [
        {
          id: '101',
          title: '产品',
          children: [
            {
              assembly: 'PageSingleCommodities',
              title: '单个商品',
              iconfont: '\ue603',
              content: [
                {
                  img: 'https://intl-image.yzcdn.cn/images/i18n-b/store/preview/featured-products.png',
                },
              ],
            },
            {
              title: '商品分组',
              content: [
                {
                  img: 'https://intl-image.yzcdn.cn/images/i18n-b/store/preview/collection.png',
                },
                {
                  img: 'https://intl-image.yzcdn.cn/images/i18n-b/store/preview/collection-v2.png',
                },
              ],
            },
          ],
          icon: 'https://intl-image.yzcdn.cn/images/i18n-b/store/img/product.png',
          highlight_icon:
            'https://intl-image.yzcdn.cn/images/i18n-b/store/img/product_active.png',
        },
        {
          id: '102',
          title: '图片',
          icon: 'https://intl-image.yzcdn.cn/images/i18n-b/store/img/picture.png',
          highlight_icon:
            'https://intl-image.yzcdn.cn/images/i18n-b/store/img/picture_active.png',
        },
        {
          id: '103',
          title: '文本',
          icon: 'https://intl-image.yzcdn.cn/images/i18n-b/store/img/text.png',
          highlight_icon:
            'https://intl-image.yzcdn.cn/images/i18n-b/store/img/text_active.png',
        },
      ],
      [
        { id: '201', title: '颜色', iconfont: '\ue678' },
        { id: '202', title: '字体', iconfont: '\ue60c' },
        { id: '203', title: '圆角', iconfont: '\ue672' },
      ],
    ],
    selectAssembly:{},
  },
  getters: {


  },
  mutations: {
    // 修改数据
    setData(state,infos){
      state[infos.key] = infos.data;
    }
  },
  actions: {},
  modules: {},
});
