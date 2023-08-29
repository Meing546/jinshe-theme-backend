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
          assembly:"PageDingleCommodities",
          content: {
            product: {
              goodsId: "4429532",
              name: "名称",
              img: "https://intl-image.yzcdn.cn/images/2023/08/18/7526ee786591bd91c31d1b9f286c6712.png?mediaId=7000245342&mediaId=7000245342",
            },
            goodsImgRatio: 1, //商品图比例
            goodsNameSize: 7, //商品[名称字体大小
            goodsMoneySize: 8, //商品金额字体大小
            socialContact: 1, //社交分享按钮样式
            socialContactColor: '#000', //社交分享按钮
            displayContent: [], //显示内容
            displayDirection: 1, //略缩图展示方向
            ContainerWidth: 1, //容器宽度
          },
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
    selectAssembly: {},
    // 临时数据
    productArr: [
      {
        bizSource: 0,
        createdAt: 1693275441408,
        goodsDesc: '测试测试测试测试测试 ',
        goodsFeatureType: 'tangible',
        goodsId: 4429532,
        goodsLock: 0,
        goodsSellPoint: '',
        goodsStatus: 1,
        goodsStatusStr: 'up',
        goodsTags: [],
        goodsType: '',
        goodsUpAt: 0,
        handle: '名称',
        kdtId: 141586306,
        maxPrice: 11000,
        media: [
          {
            coverUrl:
              'https://intl-image.yzcdn.cn/images/2023/08/18/7526ee786591bd91c31d1b9f286c6712.png?w=100',
            mediaId: 7000245342,
            type: 'IMAGE',
            url: 'https://intl-image.yzcdn.cn/images/2023/08/18/7526ee786591bd91c31d1b9f286c6712.png?mediaId=7000245342&mediaId=7000245342',
          },
          {
            coverUrl:
              'https://intl-image.yzcdn.cn/images/2023/08/23/ff2d6e9e60f6a0f502352ca0cc3b7ac0.png?w=100',
            mediaId: 7000325090,
            type: 'IMAGE',
            url: 'https://intl-image.yzcdn.cn/images/2023/08/23/ff2d6e9e60f6a0f502352ca0cc3b7ac0.png?mediaId=7000325090',
          },
        ],
        minPrice: 11000,
        noInventoryRestrictions: 0,
        options: [],
        quantity: 12,
        seo: {
          metafieldsGlobalDescriptionTag: '商品详情',
          metafieldsGlobalTitleTag: '名称',
        },
        soldNum: 1,
        supportVirtualSales: 1,
        title: '名称',
        updatedAt: 1693275441408,
        variantQty: 1,
        variants: [
          {
            barcode: '2',
            compareAtPrice: 2000,
            cost: 2000,
            imageUrl:
              'https://intl-image.yzcdn.cn/images/2023/08/18/7526ee786591bd91c31d1b9f286c6712.png?mediaId=7000245342&mediaId=7000245342',
            price: 11000,
            quantity: 12,
            requiresShipping: 1,
            requiresTax: 0,
            sku: '1',
            variantId: 21549065,
            weight: '1',
            weightUnit: 'kg',
          },
        ],
        vendor: '',
        virtualSales: 1,
      },
      {
        bizSource: 0,
        createdAt: 1693270307587,
        goodsDesc: '',
        goodsFeatureType: 'tangible',
        goodsId: 4429438,
        goodsLock: 0,
        goodsSellPoint: '',
        goodsStatus: 1,
        goodsStatusStr: 'up',
        goodsTags: [],
        goodsType: '1',
        goodsUpAt: 0,
        handle: '111',
        kdtId: 141586306,
        maxPrice: 1000,
        media: [
          {
            coverUrl:
              'https://intl-image.yzcdn.cn/images/2023/08/23/ff2d6e9e60f6a0f502352ca0cc3b7ac0.png?w=100',
            mediaId: 7000325090,
            type: 'IMAGE',
            url: 'https://intl-image.yzcdn.cn/images/2023/08/23/ff2d6e9e60f6a0f502352ca0cc3b7ac0.png?mediaId=7000325090',
          },
          {
            coverUrl:
              'https://intl-image.yzcdn.cn/images/2023/08/18/7526ee786591bd91c31d1b9f286c6712.png?w=100',
            mediaId: 7000245342,
            type: 'IMAGE',
            url: 'https://intl-image.yzcdn.cn/images/2023/08/18/7526ee786591bd91c31d1b9f286c6712.png?mediaId=7000245342',
          },
        ],
        minPrice: 1000,
        noInventoryRestrictions: 0,
        options: [],
        quantity: 12,
        seo: {
          metafieldsGlobalDescriptionTag: '测试测试测试',
          metafieldsGlobalTitleTag: '111',
        },
        soldNum: 0,
        supportVirtualSales: 0,
        title: '111',
        updatedAt: 1693270307587,
        variantQty: 1,
        variants: [
          {
            barcode: '22',
            compareAtPrice: 2000,
            cost: 1000,
            imageUrl:
              'https://intl-image.yzcdn.cn/images/2023/08/23/ff2d6e9e60f6a0f502352ca0cc3b7ac0.png?mediaId=7000325090',
            price: 1000,
            quantity: 12,
            requiresShipping: 1,
            requiresTax: 0,
            sku: '12',
            variantId: 21548389,
            weight: '21',
            weightUnit: 'kg',
          },
        ],
        vendor: '2',
        virtualSales: 0,
        withVariants: 0,
      },
    ],
  },
  getters: {},
  mutations: {
    // 修改数据
    setData(state, infos) {
      state[infos.key] = infos.data;
    },
  },
  actions: {},
  modules: {},
});
