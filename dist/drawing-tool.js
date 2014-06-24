!function(){"use strict";var t="undefined"!=typeof window?window:global;if("function"!=typeof t.require){var e={},o={},n=function(t,e){return{}.hasOwnProperty.call(t,e)},i=function(t,e){var o,n,i=[];o=/^\.\.?(\/|$)/.test(e)?[t,e].join("/").split("/"):e.split("/");for(var r=0,c=o.length;c>r;r++)n=o[r],".."===n?i.pop():"."!==n&&""!==n&&i.push(n);return i.join("/")},r=function(t){return t.split("/").slice(0,-1).join("/")},c=function(e){return function(o){var n=r(e),c=i(n,o);return t.require(c,e)}},a=function(t,e){var n={id:t,exports:{}};return o[t]=n,e(n.exports,c(t),n),n.exports},s=function(t,r){var c=i(t,".");if(null==r&&(r="/"),n(o,c))return o[c].exports;if(n(e,c))return a(c,e[c]);var s=i(c,"./index");if(n(o,s))return o[s].exports;if(n(e,s))return a(s,e[s]);throw new Error('Cannot find module "'+t+'" from "'+r+'"')},l=function(t,o){if("object"==typeof t)for(var i in t)n(t,i)&&(e[i]=t[i]);else e[t]=o},u=function(){var t=[];for(var o in e)n(e,o)&&t.push(o);return t};t.require=s,t.require.define=l,t.require.register=l,t.require.list=u,t.require.brunch=!0}}(),require.register("scripts/drawing-tool",function(t,e,o){function n(t){console.log("Drawing Tool created"),this.canvas=new fabric.Canvas(t),fabric.Object.prototype.transparentCorners=!1,this.getCanvas=function(){return this.canvas};var e=new fabric.Rect({width:200,height:100,left:500,top:150,angle:45,fill:"rgba(0,0,200,0.5)"});this.canvas.add(e);var o=this,n=new i("Selection Tool","select");n.activate=function(){console.log("items are now selectable"),this.setSelectable(!0)},n.deactivate=function(){console.log("items are no longer selectable"),this.setSelectable(!1)},n.setSelectable=function(t){o.canvas.selection=t;for(var e=o.canvas.getObjects(),n=e.length-1;n>=0;n--)e[n].selectable=t};var r=new i("Line Tool","line");r.activate=function(){console.info("implemented line tool activation function")},r.deactivate=function(){},this.tools={select:n,line:r},this.currentTool,this.chooseTool("select"),$(".btn").click(function(){var t=$(this).find("input").val();console.log("ui detected a click on "+t),o.chooseTool(t)}),console.log("drawing tool constructor finished")}n.prototype.chooseTool=function(t){var e=this.tools[t];if(void 0===e)return void console.warn('Warning! Could not find tool with selector "'+t+'"\nExiting tool chooser.');try{console.log("Choosing "+e.name+" over "+this.currentTool.name),this.currentTool.setActive(!1);var o=this.currentTool}catch(n){console.log("Choosing "+e.name)}return e.setActive(!0),this.currentTool=e,o};var i=function(t,e){this.name=t||"Tool",this.selector=e||"",this.active=!1};i.prototype.setActive=function(t){return console.info(this.name+" active? "+this.active),this.active===t?t:(this.active=t,t===!0?(console.log("Activating "+this.name),this.activate(),console.log(this.name+" has been activated")):(console.log("Deactivating "+this.name),this.deactivate(),console.log(this.name+" is no longer active")),t)},i.prototype.isActive=function(){return this.active},i.prototype.activate=function(){console.warn("unimplemented activation method")},i.prototype.deactivate=function(){console.warn("unimplemented deactivation method")},o.exports=n}),window.DrawingTool=require("scripts/drawing-tool");