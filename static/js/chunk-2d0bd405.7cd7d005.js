(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0bd405"],{"2acc":function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"app-container"},[i("el-form",{staticStyle:{width:"400px"},attrs:{"label-position":"left","label-width":"80px"}},[i("el-form-item",{staticStyle:{width:"400px"},attrs:{label:"用户名"}},[i("el-input",{attrs:{disabled:"",value:e.$route.query.username}})],1),e._v(" "),i("el-form-item",{attrs:{label:"角色列表"}},[i("el-checkbox-group",{on:{change:e.handleCheckedCitiesChange},model:{value:e.checkedCities,callback:function(t){e.checkedCities=t},expression:"checkedCities"}},e._l(e.cities,(function(t){return i("el-checkbox",{key:t.id,attrs:{label:t.id}},[e._v(e._s(t.roleName))])})),1)],1),e._v(" "),i("el-form-item",{attrs:{label:"是否全选"}},[i("el-checkbox",{attrs:{indeterminate:e.isIndeterminate},on:{change:e.handleCheckAllChange},model:{value:e.checkAll,callback:function(t){e.checkAll=t},expression:"checkAll"}},[e._v("\n        全选\n      ")])],1),e._v(" "),i("el-form-item",[i("el-button",{staticStyle:{width:"100%"},attrs:{disabled:e.saveBtnDisabled,type:"primary"},on:{click:e.update}},[e._v("保存")])],1)],1)],1)},n=[],a={name:"UserRole",data:function(){return{checkAll:!1,checkedCities:[],cities:[],isIndeterminate:!0,userId:"",saveBtnDisabled:!1}},created:function(){this.init()},methods:{init:function(){this.$route.params.id&&(this.userId=this.$route.params.id,this.getById(this.userId))},getById:function(e){var t=this;this.$API.user.getAssign(e).then((function(e){var i=e.data.assignRoles;t.checkedCities=t.getJsonToList(i,"id"),t.cities=e.data.allRolesList}))},getJsonToList:function(e,t){for(var i=JSON.parse(JSON.stringify(e)),s=[],n=0;n<i.length;n++)s.push(i[n][t]);return s},handleCheckAllChange:function(e){this.checkedCities=e?this.cities.map((function(e){return e.id})):[],this.isIndeterminate=!1},handleCheckedCitiesChange:function(e){var t=e.length;this.checkAll=t===this.cities.length,this.isIndeterminate=t>0&&t<this.cities.length},update:function(){var e=this;this.saveBtnDisabled=!0;var t=this.checkedCities.join(",");console.log(t),this.$API.user.saveAssign(this.userId,t).then((function(t){t.success&&(e.$message({type:"success",message:"保存成功"}),e.$router.push({path:"/acl/user/list"}))}))}}},c=a,l=i("2877"),r=Object(l["a"])(c,s,n,!1,null,null,null);t["default"]=r.exports}}]);