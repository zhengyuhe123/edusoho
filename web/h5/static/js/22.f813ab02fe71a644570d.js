webpackJsonp([22],{oAQT:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i("mvHQ"),s=i.n(a),o=i("woOf"),r=i.n(o),n=(i("eqfM"),i("/QYm")),d=i("NyOD"),l=i("1JqO"),c=(i("NYxO"),i("mtWM")),u=i.n(c),m=i("gyMJ"),v=i("Du/2"),h={mixins:[d.a,l.a],data:function(){return{regular:!1,tipShow:!0,failTextShow:!1,imgAddress:"",btnText:"立即开启摄像头",uploadParams:{},requestStartT:"",requestEndT:"",verifiedText:"认证",errorShow:!1,scanCode:this.$route.query.loginToken||""}},mounted:function(){var e=this;1==this.$route.query.faceRegistered&&(this.verifiedText="设置");var t={type:this.$route.query.type,loginField:this.$route.query.loginField,loginToken:this.scanCode};m.a.getSessions({data:t}).then(function(t){e.regular=!0;var i=t.upload.form;e.uploadParams={sessionId:t.id,uploadUrl:i.action,uploadKey:i.params.key,uploadToken:i.params.token}}).catch(function(t){e.errorShow=!0,setTimeout(e.feedbackAction,3e3)})},methods:{polling:function(){var e=this,t=this;m.a.faceSession({query:{sessionId:this.uploadParams.sessionId},params:{loginToken:this.scanCode}}).then(function(i){if(console.log(i.status),"processing"===i.status){if(e.requestStartT?e.requestEndT=new Date:e.requestStartT=new Date,(e.requestEndT?e.requestEndT-e.requestStartT:0)>58e3)return void t.recognitionFail();setTimeout(function(){t.polling()},2e3)}else if("successed"===i.status){if(n.a.success({duration:2e3,message:"人脸识别成功"}),e.scanCode)return void setTimeout(e.feedbackAction,3e3);if(i.login){var a={avatar:{large:i.login.largeAvatar,medium:i.login.mediumAvatar,small:i.login.smallAvatar}},s=r()(i.login.user,a);e.$store.commit(v.o,{token:i.login.token,user:s})}e.afterLogin()}else if(1===i.lastFailed){if(n.a.fail({duration:2e3,message:"人脸识别"+e.verifiedText+"失败，多次不通过"}),e.scanCode)return void setTimeout(e.feedbackAction,3e3);e.failTextShow=!0,e.tipShow=!1;setTimeout(function(){e.$router.push({name:"login",query:{redirect:e.$route.query.redirect||""}})},3e3)}else e.recognitionFail()}).catch(function(t){console.log(t),5==t.code&&(e.errorShow=!0,setTimeout(e.feedbackAction,3e3))})},isWeixin:function(){return"micromessenger"==navigator.userAgent.toLowerCase().match(/MicroMessenger/i)},feedbackAction:function(){this.isWeixin()?WeixinJSBridge.call("closeWindow"):this.$router.back(-1)},recognitionFail:function(){n.a.fail({duration:2e3,message:"人脸识别"+this.verifiedText+"失败"}),this.scanCode?setTimeout(this.feedbackAction,3e3):(this.tipShow=!0,this.btnText="重新"+this.verifiedText)},openCamera:function(e){var t=this,i=e.target.files[0],a=new FileReader;a.readAsDataURL(i),a.onloadend=function(e){t.imgAddress=e.target.result,t.tipShow=!1};var o=this.uploadParams.uploadUrl,r=new FormData;r.append("file",i,i.name),r.append("token",this.uploadParams.uploadToken),r.append("key",this.uploadParams.uploadKey),u.a.post(o,r,{headers:{"Content-Type":"multipart/form-data"},interceptor:"end"}).then(function(e){var i={query:{sessionId:t.uploadParams.sessionId},params:{loginToken:t.scanCode},data:{response_body:s()(e.data),response_code:e.status}};m.a.finishUploadResult(i).then(function(e){e.success?(t.tipShow=!1,t.polling()):console.log(e.error.message)}).catch(function(e){console.log(e),5==e.code&&(t.errorShow=!0,setTimeout(t.feedbackAction,3e3))})}).catch(function(e){console.log(e)})}}},f={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"login-face-verification"},[e.errorShow?e._e():i("div",{directives:[{name:"show",rawName:"v-show",value:e.regular,expression:"regular"}]},[i("div",{directives:[{name:"show",rawName:"v-show",value:e.tipShow,expression:"tipShow"}],staticClass:"verification-tips"},[i("div",[e._v("即将进行人脸识别"+e._s(e.verifiedText))]),e._v(" "),i("div",{staticClass:"mt5"},[e._v("请将面部正对摄像头")])]),e._v(" "),e.failTextShow?e._e():i("div",{directives:[{name:"show",rawName:"v-show",value:!e.tipShow,expression:"!tipShow"}]},[i("img",{staticClass:"img-content",attrs:{src:e.imgAddress,alt:"人脸照片"}}),e._v(" "),i("div",[e._v(e._s(e.verifiedText)+"中，请稍候...")])]),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:e.failTextShow,expression:"failTextShow"}]},[e._v("人脸识别多次"+e._s(e.verifiedText)+"不通过"),i("div",{staticClass:"mt5"},[e._v("请改用其它方式"+e._s(e.verifiedText)+"或联系管理员")])]),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:e.tipShow,expression:"tipShow"}]},[i("label",{staticClass:"btn-open-camera",attrs:{for:"cameraItem"}},[e._v(e._s(e.btnText))]),e._v(" "),i("input",{staticClass:"hide",attrs:{id:"cameraItem",type:"file",accept:"image/*",capture:"user"},on:{change:e.openCamera}})])]),e._v(" "),e.errorShow?i("div",[e._v("\n    此链接已失效"),i("div",{staticClass:"mt5"},[e._v("请确认后再操作")])]):e._e()])},staticRenderFns:[]},p=i("VU/8")(h,f,!1,null,null,null);t.default=p.exports}});