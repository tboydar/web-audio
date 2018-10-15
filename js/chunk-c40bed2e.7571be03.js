(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c40bed2e"],{"508e":function(e,t,n){"use strict";var i=n("61e3"),o=n.n(i);o.a},"5d39":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"panner-node"}},[n("h1",[e._v("Panner Node")]),n("button",{on:{click:e.clickHandler}},[e._v(" Play / Pause ")]),n("button",{on:{click:e.reset}},[e._v(" Reset ")]),n("div",{attrs:{id:"config"}},[n("div",{staticClass:"audio-note"},[e._m(0),n("div",{staticClass:"item"},[n("label",{attrs:{for:"frequency"}},[e._v("frequency : "),n("span",[e._v(e._s(e.frequency))])]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.frequency,expression:"frequency"}],attrs:{type:"range",min:"0",max:"1960",step:"1",id:"frequencyRange"},domProps:{value:e.frequency},on:{input:e.changeHandler,__r:function(t){e.frequency=t.target.value}}})])]),n("div",{staticClass:"audio-note"},[e._m(1),n("div",{staticClass:"item"},[n("label",{attrs:{for:"volume"}},[e._v("volume : "),n("span",[e._v(e._s(e.volume))])]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.volume,expression:"volume"}],attrs:{type:"range",min:"0",max:"5",step:"0.1",id:"volumeRange"},domProps:{value:e.volume},on:{input:e.changeHandler,__r:function(t){e.volume=t.target.value}}})])])]),n("div",{attrs:{id:"drag-area","data-role":"drag-drop-container"},on:{mouseleave:e.onMouseUp}},[n("div",{style:{left:this.dragData.listener.x+"px",top:this.dragData.listener.y+"px"},attrs:{id:"listener"},on:{mousedown:e.onMouseDown,mousemove:e.onMouseMove,mouseup:e.onMouseUp,mouseleave:e.onMouseUp}},[e._v(" 聽者 ")]),n("div",{style:{left:this.dragData.source.x+"px",top:this.dragData.source.y+"px"},attrs:{id:"source"},on:{mousedown:e.onMouseDown,mousemove:e.onMouseMove,mouseup:e.onMouseUp,mouseleave:e.onMouseUp}},[e._v(" 音源 ")])])])},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h3",[n("span",[e._v("音源")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h3",[n("span",[e._v("增益節點")])])}],a=(n("cadf"),n("551c"),n("097d"),{data:function(){var e=window.AudioContext||window.webkitAudioContext,t=new e,n=t.createOscillator(),i=t.createGain(),o=t.createPanner(),a=t.listener;return{isPlaying:!1,audioCtx:t,oscillator:n,gainNode:i,panner:o,listener:a,waveType:"triangle",frequency:440,detune:0,volume:1,draggingElem:"",dragData:{listener:{x:706,y:428},source:{x:413,y:250}}}},methods:{clickHandler:function(){this.isPlaying?this.stop():this.play(),this.isPlaying=!this.isPlaying},changeHandler:function(){this.setNoteConfig()},reset:function(){this.frequency=440,this.volume=1,this.setNoteConfig()},play:function(){this.panner.connect(this.audioCtx.destination)},stop:function(){this.panner.disconnect(this.audioCtx.destination)},setNoteConfig:function(){this.oscillator.type=this.waveType,this.oscillator.frequency.value=this.frequency,this.oscillator.detune.value=this.detune,this.gainNode.gain.value=this.volume,this.panner.setPosition(this.dragData.source.x,this.dragData.source.y,1),this.listener.setPosition(this.dragData.listener.x,this.dragData.listener.y,0)},onMouseDown:function(e){this.draggingElem=e.target.id},onMouseMove:function(e){this.draggingElem&&(this.dragData[this.draggingElem].x=e.clientX-25,this.dragData[this.draggingElem].y=e.clientY-25,this.setNoteConfig())},onMouseUp:function(){this.draggingElem=""}},mounted:function(){this.setNoteConfig(),this.panner.rolloffFactor=.1,this.oscillator.connect(this.gainNode),this.gainNode.connect(this.panner),this.oscillator.start()}}),s=a,r=(n("508e"),n("2877")),u=Object(r["a"])(s,i,o,!1,null,"33dcc5ea",null);u.options.__file="PannerNode.vue";t["default"]=u.exports},"61e3":function(e,t,n){}}]);
//# sourceMappingURL=chunk-c40bed2e.7571be03.js.map