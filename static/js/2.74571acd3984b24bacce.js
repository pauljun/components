webpackJsonp([2],{EHsa:function(e,t){},"l+sl":function(e,t,a){"use strict";var l=a("EHsa");a.n(l).a},uFQy:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l,n=a("Dd8w"),r=a.n(n),o={name:"fileUpload",props:{url:{type:String,require:!0},placeholder:{type:String,default:""},accept:{type:String,default:""},uploadParam:{type:Object,default:{}},autoUpload:{type:Boolean,default:!0},fileName:{type:String,default:"upfile"}},data:()=>({inputText:""}),methods:{handleBefore(e){this.$emit("closeLoading",!0)},handleExceed(e,t){this.$message.warning(`当前限制选择 1 个文件，本次选择了 ${e.length} 个文件，共选择了 ${e.length+t.length} 个文件`)},handleError(e,t){this.$emit("closeLoading",!1),this.$message.error(e)},handleSuccess(e,t){this.$emit("closeLoading",!1),this.$refs.upload.clearFiles(),0!=e.errorCode?this.$message.error(e.message):(this.inputText=t.name,this.$emit("uploadSuccess",e,t))},handleChange(e){this.inputText=e.name},submitUpload(){this.$refs.upload.submit(),this.$emit("closeLoading",!1),this.$refs.upload.clearFiles()}}},s=(a("l+sl"),a("K1/g")),i=Object(s.a)(o,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"file-upload-box"},[a("el-input",{staticClass:"upload-reset",attrs:{placeholder:e.placeholder,disabled:""},model:{value:e.inputText,callback:function(t){e.inputText=t},expression:"inputText"}}),e._v(" "),a("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{"auto-upload":e.autoUpload,accept:e.accept,name:e.fileName,data:e.uploadParam,action:e.url,"before-upload":e.handleBefore,limit:1,"show-file-list":!1,"on-exceed":e.handleExceed,"on-change":e.handleChange,"on-error":e.handleError}},[a("el-button",{staticClass:"upload-text",attrs:{slot:"trigger",size:"small",type:"primary"},slot:"trigger"},[e._v("上传")])],1)],1)},[],!1,null,null,null).exports,d={name:"component-doc",components:{"element-demo0":(l={components:{fileUpload:i},data:function(){return{uploadParam:{type:"uploadFile"}}}},r()({},l,{render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[[t("div",[t("file-upload",{attrs:{url:"http://192.168.1.15:18088/common/upload.php",uploadParam:this.uploadParam}})],1)]],2)},staticRenderFns:[]}))}},u=Object(s.a)(d,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"content element-doc"},[e._m(0),e._v(" "),e._m(1),e._v(" "),a("demo-block",[a("element-demo0",{attrs:{slot:"source"},slot:"source"}),e._v(" "),a("template",{slot:"highlight"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n  <div>\n    <file-upload url="http://192.168.1.15:18088/common/upload.php" :uploadParam="uploadParam"></file-upload>\n  </div>\n</template>\n<script>\nimport fileUpload from \'seemmo/fileupload/index.vue\'\nexport default {\n  components: {\n    fileUpload\n  },\n  data() {\n    return {\n        uploadParam:{\n            type:"uploadFile"\n        }\n    }\n  }\n}\n<\/script>\n')])])])],2),e._m(2),e._v(" "),e._m(3)],1)},[function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"fileupload"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fileupload","aria-hidden":"true"}},[this._v("¶")]),this._v(" fileUpload")])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("fileUpload 是基于element组件进行二次封装,多用户提交表单时上传文件")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"table-can-shu-shuo-ming"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#table-can-shu-shuo-ming","aria-hidden":"true"}},[this._v("¶")]),this._v(" Table 参数说明")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[e._v("参数")]),e._v(" "),a("th",[e._v("说明")]),e._v(" "),a("th",[e._v("类型")]),e._v(" "),a("th",[e._v("可选值")]),e._v(" "),a("th",[e._v("默认值")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("url")]),e._v(" "),a("td",[e._v("上传文件地址")]),e._v(" "),a("td",[e._v("Srting")]),e._v(" "),a("td",[e._v("——")]),e._v(" "),a("td",[e._v("——")])]),e._v(" "),a("tr",[a("td",[e._v("placeholder")]),e._v(" "),a("td",[e._v("输入框提示")]),e._v(" "),a("td",[e._v("String")]),e._v(" "),a("td",[e._v("——")]),e._v(" "),a("td",[e._v("——")])]),e._v(" "),a("tr",[a("td",[e._v("accept")]),e._v(" "),a("td",[e._v("接受上传的文件类型（thumbnail-mode 模式下此参数无效）")]),e._v(" "),a("td",[e._v("string")]),e._v(" "),a("td",[e._v("——")]),e._v(" "),a("td",[e._v("——")])]),e._v(" "),a("tr",[a("td",[e._v("autoUpload")]),e._v(" "),a("td",[e._v("是否在选取文件后立即进行上传")]),e._v(" "),a("td",[e._v("Boolean")]),e._v(" "),a("td",[e._v("——")]),e._v(" "),a("td",[e._v("——")])]),e._v(" "),a("tr",[a("td",[e._v("fileName")]),e._v(" "),a("td",[e._v("上传的文件字段名")]),e._v(" "),a("td",[e._v("Srting")]),e._v(" "),a("td",[e._v("——")]),e._v(" "),a("td",[e._v("——")])])])])}],!1,null,null,null);t.default=u.exports}});