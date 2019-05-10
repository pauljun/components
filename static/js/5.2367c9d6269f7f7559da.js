webpackJsonp([5],{mjX8:function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=a("K1/g"),i=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("section",{staticClass:"content element-doc"},[a("h2",{attrs:{id:"xiang-mu-ji-ben-qing-kuang-jie-shao"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#xiang-mu-ji-ben-qing-kuang-jie-shao","aria-hidden":"true"}},[t._v("¶")]),t._v(" 项目基本情况介绍")]),t._v(" "),a("ul",[a("li",[t._v("项目主体由vue-cli3.0脚手架搭建")]),t._v(" "),a("li",[t._v("采用vue + element + vue-router + axios等相关基本库构成")]),t._v(" "),a("li",[t._v("项目中尽量采用es6的语法糖作为编写手段")]),t._v(" "),a("li",[t._v("项目有严格的eslint检查规范，请在提交之前进行严格的检查，不要放过任何一个警告")])]),t._v(" "),a("h2",{attrs:{id:"xiang-mu-zhun-bei-he-qi-dong"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#xiang-mu-zhun-bei-he-qi-dong","aria-hidden":"true"}},[t._v("¶")]),t._v(" 项目准备和启动")]),t._v(" "),a("h3",{attrs:{id:"1.-la-qu-dai-ma"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#1.-la-qu-dai-ma","aria-hidden":"true"}},[t._v("¶")]),t._v(" 1. 拉取代码")]),t._v(" "),a("pre",[a("code",{staticClass:"language-shell"},[t._v("git clone git@192.168.2.3:wuzhe/video_structure_vue.git\n")])]),t._v(" "),a("h3",{attrs:{id:"2.-jin-ru-mu-lu-an-zhuang-xiang-guan-yi-lai"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#2.-jin-ru-mu-lu-an-zhuang-xiang-guan-yi-lai","aria-hidden":"true"}},[t._v("¶")]),t._v(" 2.进入目录安装相关依赖")]),t._v(" "),a("pre",[a("code",{staticClass:"language-shell"},[t._v("cd *dir*\nnpm install( 如果安装有cnpm建议使用cnpm )\n")])]),t._v(" "),a("h3",{attrs:{id:"3.-qi-dong-kai-fa-huan-jing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#3.-qi-dong-kai-fa-huan-jing","aria-hidden":"true"}},[t._v("¶")]),t._v(" 3.启动开发环境")]),t._v(" "),a("pre",[a("code",{staticClass:"language-shell"},[t._v("npm run start 或 npm run serve\n* 开发环境为热部署环境，无需关闭重启窗口，改动将热部署对应窗口\n* 本地开发接口代理设置和本地开发端口设置均在vue.config.js中\n")])]),t._v(" "),a("h3",{attrs:{id:"4.-da-bao-bian-yi-fa-bu-xiang-mu"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#4.-da-bao-bian-yi-fa-bu-xiang-mu","aria-hidden":"true"}},[t._v("¶")]),t._v(" 4.打包编译发布项目")]),t._v(" "),a("pre",[a("code",{staticClass:"language-shell"},[t._v("npm run build\n* 建议交由指定人员进行，对于已经可以部署到现场的项目建议去掉map文件，加快性能\n")])]),t._v(" "),a("h2",{attrs:{id:"xiang-mu-ji-ben-jie-gou"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#xiang-mu-ji-ben-jie-gou","aria-hidden":"true"}},[t._v("¶")]),t._v(" 项目基本结构")]),t._v(" "),a("pre",[a("code",[t._v("│  package-lock.json\n│  package.json\t\t\t\t依赖等相关配置文件\n│  .eslintrc.js\t\t\t\t\teslint检查规则，项目统一\n│  vue.config.js\t\t\t\tvue项目相关配置文件\n├─dis\t\t\t\t\t\t项目打包成品目录\n├─public\t\t\t\t\t\t项目依赖的静态不编译资源，该文件夹资源不会进过webpack打包\n│      favicon.ico\n│      index.html\t\t\t\t整个项目的index.html页面，文件中<%= BASE_URL %> 将会打包转义成项目根目录\n└─src\t\t\t\t\t\t源码目录\n    │  App.vue\t\t\t\t\t项目根vue\n    │  main.js\t\t\t\t\t项目入口js\n    │  router.js\t\t\t\t\t项目路由\n    │  store.js\t\t\t\t\tvuex文件，暂未使用\n    ├─assets\t\t\t\t\t项目中使用的资源，建议将图标等放在此处，可有效防止404的现象\n    │      logo.png\n    │      ......\n    ├─common\t\t\t\t\t公共使用相关文件 todo\n    │      tools.js\n    ├─components\t\t\t\t公共使用组件\t内部结构todo\n    │      menu.vue\n    └─views\t\t\t\t\t分模块的页面vue，即component中根据设计的合计界面\n           login.vue\n           ......\n")])]),t._v(" "),a("h2",{attrs:{id:"zhu-yi-shi-xiang"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#zhu-yi-shi-xiang","aria-hidden":"true"}},[t._v("¶")]),t._v(" 注意事项")]),t._v(" "),a("ul",[a("li",[t._v("通过main.js中的设置项目中已经将"),a("strong",[t._v("tools模块")]),t._v("放到"),a("strong",[t._v("this.tools")]),t._v("属性下")]),t._v(" "),a("li",[t._v("通过main.js中的设置项目中已经将"),a("strong",[t._v("service模块")]),t._v("放到"),a("strong",[t._v("this._services")]),t._v("属性下")]),t._v(" "),a("li",[t._v("无论首页或者模块，建议与初始化展示不相关的文件、模块均使用赖加载的形式加载到项目中")]),t._v(" "),a("li",[t._v("@ 符号在项目中可以直接指向src目录，即 @/main.js = src/main.js 该方法可以方便的在目录层级深的时候找到文件")]),t._v(" "),a("li",[t._v("文件结构也是编写代码的一部分，文件架构上也希望能够有所层级区分")])]),t._v(" "),a("h2",{attrs:{id:"dai-ma-gui-fan"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dai-ma-gui-fan","aria-hidden":"true"}},[t._v("¶")]),t._v(" 代码规范")]),t._v(" "),a("p",[t._v("遵循eslint验证方式，支持以下写法，欢迎补充:")]),t._v(" "),a("ul",[a("li",[t._v('不建议使用双"", 双引号统一改成单引号')]),t._v(" "),a("li",[t._v("制表符长度使用 tab 默认为4个")]),t._v(" "),a("li",[t._v("建议使用vscode进行开发，进行统一格式化验证")]),t._v(" "),a("li",[t._v("尽量解决控制台警告报错信息")]),t._v(" "),a("li",[t._v("单个组件代码量控制在300行以内，特殊表单，工具类库代码量可不做强制要求")]),t._v(" "),a("li",[t._v("所有组件props传值，如果props只有一个值，一行也写完，如果props超过一个值，请换行写，方便代码审阅, 如下图：")])]),t._v(" "),a("pre",[a("code",[t._v("# 单个props值\n<el-row class='h-100'>\n\n# 多个props值\n<el-form\n    class='plr-10 form-full-style h-left-condition'\n    ref='form'\n    :model='vidParam'\n    label-width='80px'\n    label-position='left'\n    :rules='rules'\n    hide-required-asterisk\n>\n")])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("单个组件尽量写注释，每个组件头部建议备注开发者姓名以及开始时间和代码更新时间， 方法统一使用注释，写出方法参数备注。")]),t._v(" "),a("pre",[a("code",[t._v("# 头部注释\n\x3c!--\n\t@title 人像布控\n\t@author wwj\n\t@time 2019-3-15 10:58\n\t@desc 人像布控管理\n\t@modify 2019-3-15 10:58 by xxxx\n--\x3e\n\n# data注释\n  data() {\n    return {\n      // vid提交数据\n      vidParam: {\n        type: 'add',\t\t\t\t//add:添加 edit: 编辑 \n        taskName: '',\t\t\t\t//任务名称\n      }\n    }\n  }\n  \n# 方法注释\n/**\n * @desc 获取循环模式\n * @param {String} code 关键字\n*/\ngetadTimeType(code) {\n    \n}\n\n")])])])])])}],!1,null,null,null);n.default=i.exports}});