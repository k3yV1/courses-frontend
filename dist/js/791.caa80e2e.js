"use strict";(self["webpackChunkcourse_frontend"]=self["webpackChunkcourse_frontend"]||[]).push([[791],{2791:function(t,e,s){s.r(e),s.d(e,{default:function(){return u}});var r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"lesson md:py-8 p-4"},[e("div",{staticClass:"container mx-auto"},[e("div",{staticClass:"lesson__wrapper"},[e("a",{staticClass:"md:hidden block mb-2 cursor-pointer",on:{click:function(e){return t.$router.go(-1)}}},[e("svg",{attrs:{fill:"#000000",height:"20px",width:"20px",version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 476.213 476.213","xml:space":"preserve"}},[e("g",{attrs:{id:"SVGRepo_bgCarrier","stroke-width":"0"}}),e("g",{attrs:{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round"}}),e("g",{attrs:{id:"SVGRepo_iconCarrier"}},[e("polygon",{attrs:{points:"476.213,223.107 57.427,223.107 151.82,128.713 130.607,107.5 0,238.106 130.607,368.714 151.82,347.5 57.427,253.107 476.213,253.107 "}})])])]),e("div",{staticClass:"lesson__box md:order-1 order-2"},[e("div",{staticClass:"box__title",domProps:{innerHTML:t._s(t.lessonData.title)}}),e("div",{ref:"lessonContent",staticClass:"box__content mt-6 px-4 py-2 border rounded-2xl overflow-y-auto h-[150px]",domProps:{innerHTML:t._s(t.lessonData.content)},on:{scroll:t.checkScroll}})]),e("div",{staticClass:"lesson__buttons md:mt-6 mt-3 flex md:flex-row flex-col md:justify-between"},[e("button",{staticClass:"md:block hidden md:w-auto w-full back bg-pink-400 opacity-90 text-white px-4 py-2 rounded hover:opacity-100",on:{click:function(e){return t.$router.go(-1)}}},[t._v("Return Back")]),e("div",{staticClass:"lesson__timer md:mb-0 mb-3"},[t._v(" Time: "+t._s(t.formatTime(t.timer))+" ")]),e("button",{staticClass:"back bg-green-700 opacity-90 text-white px-4 py-2 rounded hover:opacity-100",attrs:{disabled:t.isButtonDisabled},on:{click:t.done}},[t._v("Done")])])])])])},o=[],i=(s(560),s(8307)),n=s(408),a={data(){return{lessonData:null,isButtonDisabled:!0,timer:0,timerInterval:null}},created(){const t=i.z.flatMap((t=>t.lessons)).find((t=>t.id===+this.$route.params.id));t?(this.lessonData=t,this.startTimer()):this.$router.push({name:"404"})},beforeDestroy(){clearInterval(this.timerInterval)},computed:{...(0,n.rn)("lesson",["lesson"])},methods:{...(0,n.OI)("lesson",["COMPLETE_LESSON"]),startTimer(){this.timerInterval=setInterval((()=>{this.timer+=1}),1e3)},stopTimer(){clearInterval(this.timerInterval)},formatTime(t){const e=Math.floor(t/60),s=t%60;return`${String(e).padStart(2,"0")}:${String(s).padStart(2,"0")}`},done(){this.stopTimer(),this.COMPLETE_LESSON({completeLesson:{value:{id:this.lessonData.id,title:this.lessonData.title},results:[{timer:this.formatTime(this.timer),passDate:(new Date).toLocaleDateString()}]}}),setTimeout((()=>{this.$router.go(-1)}),1e3)},checkScroll(){const t=this.$refs.lessonContent;t&&(this.isButtonDisabled=t.scrollHeight-t.scrollTop!==t.clientHeight)}}},l=a,c=s(1001),d=(0,c.Z)(l,r,o,!1,null,"27e072a0",null),u=d.exports}}]);
//# sourceMappingURL=791.caa80e2e.js.map