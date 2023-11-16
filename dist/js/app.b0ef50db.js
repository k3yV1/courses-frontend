(function(){"use strict";var e={3261:function(e,t,i){var s=i(7195),a=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[e.showHeader?t("header",{staticClass:"header md:relative fixed w-full z-10 md:py-6 bg-pink-400 md:p-0 p-4"},[t("Header",{staticClass:"md:block hidden"}),t("MobileHeader",{staticClass:"md:hidden block"})],1):e._e(),t("div",{staticClass:"body md:pt-0 pt-20"},[t("div",{staticClass:"container-fluid mx-auto"},[t("transition",{attrs:{name:"component-fade",mode:"out-in"}},[t("router-view")],1)],1)])])},n=[],u=(i(560),function(){var e=this,t=e._self._c;return t("div",{staticClass:"container mx-auto"},[t("div",{staticClass:"header wrapper flex items-center justify-between"},[t("div",{staticClass:"header__title"},[t("span",{staticClass:"md:text-2xl text-base text-white cursor-pointer",on:{click:function(t){return e.$router.push({name:"home"})}}},[e._v("ultralux")])]),t("div",{staticClass:"header__menu"},[t("nav",{staticClass:"menu flex flex-row gap-6"},[t("router-link",{staticClass:"text-white hover:text-pink-200",attrs:{to:{name:"courses"}}},[e._v("Courses")]),t("router-link",{staticClass:"text-white hover:text-pink-200",attrs:{to:{name:"courses-progress"}}},[e._v("Progress")])],1)]),t("div",{staticClass:"header__logout"},[t("span",{staticClass:"md:text-2xl text-base text-white cursor-pointer hover:text-pink-200",on:{click:e.logout}},[e._v("Logout")])])])])}),r=[],o=i(408),l=i(6074),c={methods:{...(0,o.OI)("auth",[l.Z.SET_AUTHENTICATION]),logout(){this[l.Z.SET_AUTHENTICATION](!1),this.$router.push({name:"sign-in"}).catch((()=>{}))}}},m=c,d=i(1001),p=(0,d.Z)(m,u,r,!1,null,"b2330910",null),v=p.exports,g=function(){var e=this,t=e._self._c;return t("div",{staticClass:"container mx-auto"},[t("div",{staticClass:"header wrapper flex items-center justify-between"},[t("div",{staticClass:"header__title"},[t("span",{staticClass:"md:text-2xl text-base text-white cursor-pointer",on:{click:function(t){return e.$router.push({name:"home"})}}},[e._v("ultralux")])]),t("div",{staticClass:"mobile-header__hamburger-menu cursor-pointer",on:{click:e.toggleMenu}},[t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"30",height:"30",viewBox:"0,0,256,256"}},[t("g",{staticStyle:{"mix-blend-mode":"normal"},attrs:{fill:"#ffffff","fill-rule":"nonzero",stroke:"none","stroke-width":"1","stroke-linecap":"butt","stroke-linejoin":"miter","stroke-miterlimit":"10","stroke-dasharray":"","stroke-dashoffset":"0","font-family":"none","font-weight":"none","font-size":"none","text-anchor":"none"}},[t("g",{attrs:{transform:"scale(5.12,5.12)"}},[t("path",{attrs:{d:"M0,9v2h50v-2zM0,24v2h50v-2zM0,39v2h50v-2z"}})])])])]),t("div",{staticClass:"mobile-header__menu min-h-screen absolute py-4 bg-pink-400 top-14 left-0 right-0 z-10",class:{active:e.isActive}},[t("nav",{staticClass:"menu"},[t("div",{staticClass:"container mx-auto p-4"},[t("div",{staticClass:"menu__box flex flex-col gap-6"},[t("router-link",{staticClass:"text-white hover:text-pink-200",attrs:{to:{name:"courses"}},on:{click:e.closeMenu}},[e._v("Courses")]),t("router-link",{staticClass:"text-white hover:text-pink-200",attrs:{to:{name:"courses-progress"}},on:{click:e.closeMenu}},[e._v("Progress")]),t("span",{staticClass:"md:text-2xl text-base text-white cursor-pointer hover:text-pink-200",on:{click:e.logoutAndCloseMenu}},[e._v("Logout")])],1)])])])])])},b=[],h={data(){return{isActive:!1}},methods:{...(0,o.OI)("auth",[l.Z.SET_AUTHENTICATION]),toggleMenu(){this.isActive=!this.isActive},closeMenu(){this.isActive=!1},logoutAndCloseMenu(){this[l.Z.SET_AUTHENTICATION](!1),this.$router.push({name:"sign-in"}).catch((()=>{}))}},watch:{$route(){this.isActive=!1}}},f=h,q=(0,d.Z)(f,g,b,!1,null,"34fc4efa",null),x=q.exports,P={components:{MobileHeader:x,Header:v},computed:{showHeader(){return!1!==this.$route.meta.showHeader}}},E=P,S=(0,d.Z)(E,a,n,!1,null,null,null),T=S.exports,C={state:{isAuthenticated:JSON.parse(localStorage.getItem("isAuthenticated")||!1)},actions:{},mutations:{[l.Z.SET_AUTHENTICATION](e,t){e.isAuthenticated=t,localStorage.setItem("isAuthenticated",JSON.stringify(t))}},getters:{},namespaced:!0},A=i(8307),y={state:{courses:[]},actions:{fakeFetchCourses({commit:e}){e(l.Z.SET_COURSES,A.z)}},mutations:{[l.Z.SET_COURSES](e,t){e.courses=t}},getters:{},namespaced:!0},w={state:{lesson:JSON.parse(localStorage.getItem("lesson"))||[]},actions:{},mutations:{COMPLETE_LESSON(e,t){const i=e.lesson.findIndex((e=>e.completeLesson.value.id===t.completeLesson.value.id));-1!==i?e.lesson[i].completeLesson.results.push({timer:t.completeLesson.results[0].timer,passDate:t.completeLesson.results[0].passDate}):e.lesson.push(t),localStorage.setItem("lesson",JSON.stringify(e.lesson))}},getters:{getCompleteLesson:e=>e.lesson},namespaced:!0};s.ZP.use(o.ZP);var k=new o.ZP.Store({modules:{auth:C,courses:y,lesson:w}}),N=i(2241);s.ZP.use(N.ZP);const _=[{path:"/",name:"home",component:()=>i.e(606).then(i.bind(i,2606)),meta:{requiresAuth:!0,showHeader:!0}},{path:"/courses",name:"courses",component:()=>i.e(443).then(i.bind(i,1230)),props:!0,meta:{showHeader:!0,requiresAuth:!0}},{path:"/courses/:id",name:"course-details",component:()=>i.e(746).then(i.bind(i,4746)),props:!0,meta:{showHeader:!0,requiresAuth:!0}},{path:"/progress",name:"courses-progress",component:()=>i.e(582).then(i.bind(i,1582)),meta:{showHeader:!0,requiresAuth:!0}},{path:"/lesson/:id",name:"lesson",component:()=>i.e(791).then(i.bind(i,2791)),props:!0,meta:{showHeader:!0,requireAuth:!0}},{path:"/sign-in",name:"sign-in",component:()=>i.e(268).then(i.bind(i,3268)),meta:{showHeader:!1,requiresAuth:!1}},{path:"/sign-up",name:"sign-up",component:()=>i.e(214).then(i.bind(i,2214)),meta:{showHeader:!1,requiresAuth:!1}}],V=new N.ZP({mode:"history",base:"/courses-frontend/",routes:_});V.beforeEach(((e,t,i)=>{e.meta.requiresAuth&&!k.state.auth.isAuthenticated?i({name:"sign-in"}):i()}));var O=V;s.ZP.config.productionTip=!1,new s.ZP({store:k,router:O,render:e=>e(T)}).$mount("#app")},8307:function(e,t,i){i.d(t,{z:function(){return s}});const s=[{id:1,content:[{id:1,title:'<span class="md:text-2xl text-base font-bold">Front-end developer</span>',subtitle:'<span class="opacity-40 text-base">5+ months * For beginners</span>',description:'<span class="text-base">A Frontend developer is responsible for creating a convenient and aesthetic appearance of a web page on different devices, and also implements animations and other interface solutions.</span>'}],lessons:[{id:1,title:'<span class="md:text-2xl text-base font-bold">Lesson 1 - Front-end developer</span>',content:'\n\t\t\t\t<p class="text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi scelerisque. Tortor pretium viverra suspendisse potenti nullam ac tortor. Lectus mauris ultrices eros in cursus turpis. Vestibulum sed arcu non odio euismod lacinia. Porta non pulvinar neque laoreet suspendisse interdum consectetur. Neque volutpat ac tincidunt vitae semper. Sit amet mauris commodo quis imperdiet massa tincidunt nunc. In metus vulputate eu scelerisque felis imperdiet proin. Tortor consequat id porta nibh. Turpis egestas maecenas pharetra convallis posuere morbi. Enim sit amet venenatis urna.</p>\n          \n          <p class="text-base mt-3">Arcu dui vivamus arcu felis bibendum ut tristique et egestas. Pellentesque habitant morbi tristique senectus et netus. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec. Volutpat maecenas volutpat blandit aliquam etiam erat velit. Eros donec ac odio tempor orci dapibus ultrices in. Tortor vitae purus faucibus ornare suspendisse. Nisl rhoncus mattis rhoncus urna neque viverra justo nec. Scelerisque viverra mauris in aliquam sem. Purus viverra accumsan in nisl nisi. Vitae ultricies leo integer malesuada nunc vel. Et tortor consequat id porta nibh. Dolor sit amet consectetur adipiscing elit. Odio ut sem nulla pharetra. Accumsan lacus vel facilisis volutpat est velit egestas dui id. Dignissim cras tincidunt lobortis feugiat vivamus at augue. Venenatis a condimentum vitae sapien pellentesque habitant morbi tristique senectus. Pharetra et ultrices neque ornare aenean. Pellentesque elit eget gravida cum sociis natoque penatibus et.</p>\n          <p class="text-base mt-3">Quam pellentesque nec nam aliquam sem. Venenatis cras sed felis eget velit. Volutpat est velit egestas dui id ornare arcu. Diam quam nulla porttitor massa. Gravida arcu ac tortor dignissim convallis aenean et tortor at. Sem viverra aliquet eget sit amet tellus cras adipiscing enim. Pretium lectus quam id leo in vitae. Pellentesque dignissim enim sit amet venenatis. Congue eu consequat ac felis donec et odio. Massa tempor nec feugiat nisl pretium fusce. Curabitur vitae nunc sed velit dignissim sodales ut. Sit amet risus nullam eget felis eget nunc. Eget velit aliquet sagittis id consectetur.</p>\n          <p class="text-base mt-3">Nulla pharetra diam sit amet nisl suscipit adipiscing bibendum. Facilisis volutpat est velit egestas dui. Enim diam vulputate ut pharetra sit amet aliquam id diam. Sagittis orci a scelerisque purus semper eget duis at. Phasellus faucibus scelerisque eleifend donec pretium. Pharetra convallis posuere morbi leo urna molestie at elementum eu. Purus gravida quis blandit turpis cursus in hac habitasse platea. At elementum eu facilisis sed odio. Dis parturient montes nascetur ridiculus mus mauris. Bibendum at varius vel pharetra vel turpis nunc. Feugiat pretium nibh ipsum consequat. Faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis.</p>',results:[]},{id:2,title:'<span class="md:text-2xl text-base font-bold">Lesson 2 - Front-end developer</span>',content:'\n\t\t\t\t<p class="text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi scelerisque. Tortor pretium viverra suspendisse potenti nullam ac tortor. Lectus mauris ultrices eros in cursus turpis. Vestibulum sed arcu non odio euismod lacinia. Porta non pulvinar neque laoreet suspendisse interdum consectetur. Neque volutpat ac tincidunt vitae semper. Sit amet mauris commodo quis imperdiet massa tincidunt nunc. In metus vulputate eu scelerisque felis imperdiet proin. Tortor consequat id porta nibh. Turpis egestas maecenas pharetra convallis posuere morbi. Enim sit amet venenatis urna.</p>\n          \n          <p class="text-base mt-3">Arcu dui vivamus arcu felis bibendum ut tristique et egestas. Pellentesque habitant morbi tristique senectus et netus. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec. Volutpat maecenas volutpat blandit aliquam etiam erat velit. Eros donec ac odio tempor orci dapibus ultrices in. Tortor vitae purus faucibus ornare suspendisse. Nisl rhoncus mattis rhoncus urna neque viverra justo nec. Scelerisque viverra mauris in aliquam sem. Purus viverra accumsan in nisl nisi. Vitae ultricies leo integer malesuada nunc vel. Et tortor consequat id porta nibh. Dolor sit amet consectetur adipiscing elit. Odio ut sem nulla pharetra. Accumsan lacus vel facilisis volutpat est velit egestas dui id. Dignissim cras tincidunt lobortis feugiat vivamus at augue. Venenatis a condimentum vitae sapien pellentesque habitant morbi tristique senectus. Pharetra et ultrices neque ornare aenean. Pellentesque elit eget gravida cum sociis natoque penatibus et.</p>\n          <p class="text-base mt-3">Quam pellentesque nec nam aliquam sem. Venenatis cras sed felis eget velit. Volutpat est velit egestas dui id ornare arcu. Diam quam nulla porttitor massa. Gravida arcu ac tortor dignissim convallis aenean et tortor at. Sem viverra aliquet eget sit amet tellus cras adipiscing enim. Pretium lectus quam id leo in vitae. Pellentesque dignissim enim sit amet venenatis. Congue eu consequat ac felis donec et odio. Massa tempor nec feugiat nisl pretium fusce. Curabitur vitae nunc sed velit dignissim sodales ut. Sit amet risus nullam eget felis eget nunc. Eget velit aliquet sagittis id consectetur.</p>\n          <p class="text-base mt-3">Nulla pharetra diam sit amet nisl suscipit adipiscing bibendum. Facilisis volutpat est velit egestas dui. Enim diam vulputate ut pharetra sit amet aliquam id diam. Sagittis orci a scelerisque purus semper eget duis at. Phasellus faucibus scelerisque eleifend donec pretium. Pharetra convallis posuere morbi leo urna molestie at elementum eu. Purus gravida quis blandit turpis cursus in hac habitasse platea. At elementum eu facilisis sed odio. Dis parturient montes nascetur ridiculus mus mauris. Bibendum at varius vel pharetra vel turpis nunc. Feugiat pretium nibh ipsum consequat. Faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis.</p>',results:[]}]},{id:2,content:[{id:2,title:'<span class="md:text-2xl text-base font-bold">Full-stack developer</span>',subtitle:'<span class="opacity-40 text-base">5+ months * For beginners</span>',description:'<span class="text-base">Fullstack developers have both front-end (client-side) and back-end (server-side) programming skills. They are able to develop a complete product from start to finish.</span>'}],lessons:[{id:3,title:'<span class="md:text-2xl text-base font-bold">Lesson 1 - Full-stack developer</span>',content:'\n\t\t\t\t<p class="text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi scelerisque. Tortor pretium viverra suspendisse potenti nullam ac tortor. Lectus mauris ultrices eros in cursus turpis. Vestibulum sed arcu non odio euismod lacinia. Porta non pulvinar neque laoreet suspendisse interdum consectetur. Neque volutpat ac tincidunt vitae semper. Sit amet mauris commodo quis imperdiet massa tincidunt nunc. In metus vulputate eu scelerisque felis imperdiet proin. Tortor consequat id porta nibh. Turpis egestas maecenas pharetra convallis posuere morbi. Enim sit amet venenatis urna.</p>\n          \n          <p class="text-base mt-3">Arcu dui vivamus arcu felis bibendum ut tristique et egestas. Pellentesque habitant morbi tristique senectus et netus. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec. Volutpat maecenas volutpat blandit aliquam etiam erat velit. Eros donec ac odio tempor orci dapibus ultrices in. Tortor vitae purus faucibus ornare suspendisse. Nisl rhoncus mattis rhoncus urna neque viverra justo nec. Scelerisque viverra mauris in aliquam sem. Purus viverra accumsan in nisl nisi. Vitae ultricies leo integer malesuada nunc vel. Et tortor consequat id porta nibh. Dolor sit amet consectetur adipiscing elit. Odio ut sem nulla pharetra. Accumsan lacus vel facilisis volutpat est velit egestas dui id. Dignissim cras tincidunt lobortis feugiat vivamus at augue. Venenatis a condimentum vitae sapien pellentesque habitant morbi tristique senectus. Pharetra et ultrices neque ornare aenean. Pellentesque elit eget gravida cum sociis natoque penatibus et.</p>\n          <p class="text-base mt-3">Quam pellentesque nec nam aliquam sem. Venenatis cras sed felis eget velit. Volutpat est velit egestas dui id ornare arcu. Diam quam nulla porttitor massa. Gravida arcu ac tortor dignissim convallis aenean et tortor at. Sem viverra aliquet eget sit amet tellus cras adipiscing enim. Pretium lectus quam id leo in vitae. Pellentesque dignissim enim sit amet venenatis. Congue eu consequat ac felis donec et odio. Massa tempor nec feugiat nisl pretium fusce. Curabitur vitae nunc sed velit dignissim sodales ut. Sit amet risus nullam eget felis eget nunc. Eget velit aliquet sagittis id consectetur.</p>\n          <p class="text-base mt-3">Nulla pharetra diam sit amet nisl suscipit adipiscing bibendum. Facilisis volutpat est velit egestas dui. Enim diam vulputate ut pharetra sit amet aliquam id diam. Sagittis orci a scelerisque purus semper eget duis at. Phasellus faucibus scelerisque eleifend donec pretium. Pharetra convallis posuere morbi leo urna molestie at elementum eu. Purus gravida quis blandit turpis cursus in hac habitasse platea. At elementum eu facilisis sed odio. Dis parturient montes nascetur ridiculus mus mauris. Bibendum at varius vel pharetra vel turpis nunc. Feugiat pretium nibh ipsum consequat. Faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis.</p>',results:[]},{id:4,title:'<span class="md:text-2xl text-base font-bold">Lesson 2 - Full-stack developer</span>',content:'\n\t\t\t\t<p class="text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi scelerisque. Tortor pretium viverra suspendisse potenti nullam ac tortor. Lectus mauris ultrices eros in cursus turpis. Vestibulum sed arcu non odio euismod lacinia. Porta non pulvinar neque laoreet suspendisse interdum consectetur. Neque volutpat ac tincidunt vitae semper. Sit amet mauris commodo quis imperdiet massa tincidunt nunc. In metus vulputate eu scelerisque felis imperdiet proin. Tortor consequat id porta nibh. Turpis egestas maecenas pharetra convallis posuere morbi. Enim sit amet venenatis urna.</p>\n          \n          <p class="text-base mt-3">Arcu dui vivamus arcu felis bibendum ut tristique et egestas. Pellentesque habitant morbi tristique senectus et netus. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec. Volutpat maecenas volutpat blandit aliquam etiam erat velit. Eros donec ac odio tempor orci dapibus ultrices in. Tortor vitae purus faucibus ornare suspendisse. Nisl rhoncus mattis rhoncus urna neque viverra justo nec. Scelerisque viverra mauris in aliquam sem. Purus viverra accumsan in nisl nisi. Vitae ultricies leo integer malesuada nunc vel. Et tortor consequat id porta nibh. Dolor sit amet consectetur adipiscing elit. Odio ut sem nulla pharetra. Accumsan lacus vel facilisis volutpat est velit egestas dui id. Dignissim cras tincidunt lobortis feugiat vivamus at augue. Venenatis a condimentum vitae sapien pellentesque habitant morbi tristique senectus. Pharetra et ultrices neque ornare aenean. Pellentesque elit eget gravida cum sociis natoque penatibus et.</p>\n          <p class="text-base mt-3">Quam pellentesque nec nam aliquam sem. Venenatis cras sed felis eget velit. Volutpat est velit egestas dui id ornare arcu. Diam quam nulla porttitor massa. Gravida arcu ac tortor dignissim convallis aenean et tortor at. Sem viverra aliquet eget sit amet tellus cras adipiscing enim. Pretium lectus quam id leo in vitae. Pellentesque dignissim enim sit amet venenatis. Congue eu consequat ac felis donec et odio. Massa tempor nec feugiat nisl pretium fusce. Curabitur vitae nunc sed velit dignissim sodales ut. Sit amet risus nullam eget felis eget nunc. Eget velit aliquet sagittis id consectetur.</p>\n          <p class="text-base mt-3">Nulla pharetra diam sit amet nisl suscipit adipiscing bibendum. Facilisis volutpat est velit egestas dui. Enim diam vulputate ut pharetra sit amet aliquam id diam. Sagittis orci a scelerisque purus semper eget duis at. Phasellus faucibus scelerisque eleifend donec pretium. Pharetra convallis posuere morbi leo urna molestie at elementum eu. Purus gravida quis blandit turpis cursus in hac habitasse platea. At elementum eu facilisis sed odio. Dis parturient montes nascetur ridiculus mus mauris. Bibendum at varius vel pharetra vel turpis nunc. Feugiat pretium nibh ipsum consequat. Faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis.</p>',results:[]}]},{id:3,content:[{id:3,title:'<span class="md:text-2xl text-base font-bold">Python developer</span>',subtitle:'<span class="opacity-40 text-base">3+ months * For beginners</span>',description:'<span class="text-base">Python developers can work in a variety of fields, from machine learning to web development. They have the knowledge needed to create, extend, and maintain programs that use Python as their primary programming language.</span>'}],lessons:[{id:5,title:'<span class="md:text-2xl text-base font-bold">Lesson 1 - Python developer</span>',content:'\n\t\t\t\t<p class="text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi scelerisque. Tortor pretium viverra suspendisse potenti nullam ac tortor. Lectus mauris ultrices eros in cursus turpis. Vestibulum sed arcu non odio euismod lacinia. Porta non pulvinar neque laoreet suspendisse interdum consectetur. Neque volutpat ac tincidunt vitae semper. Sit amet mauris commodo quis imperdiet massa tincidunt nunc. In metus vulputate eu scelerisque felis imperdiet proin. Tortor consequat id porta nibh. Turpis egestas maecenas pharetra convallis posuere morbi. Enim sit amet venenatis urna.</p>\n          \n          <p class="text-base mt-3">Arcu dui vivamus arcu felis bibendum ut tristique et egestas. Pellentesque habitant morbi tristique senectus et netus. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec. Volutpat maecenas volutpat blandit aliquam etiam erat velit. Eros donec ac odio tempor orci dapibus ultrices in. Tortor vitae purus faucibus ornare suspendisse. Nisl rhoncus mattis rhoncus urna neque viverra justo nec. Scelerisque viverra mauris in aliquam sem. Purus viverra accumsan in nisl nisi. Vitae ultricies leo integer malesuada nunc vel. Et tortor consequat id porta nibh. Dolor sit amet consectetur adipiscing elit. Odio ut sem nulla pharetra. Accumsan lacus vel facilisis volutpat est velit egestas dui id. Dignissim cras tincidunt lobortis feugiat vivamus at augue. Venenatis a condimentum vitae sapien pellentesque habitant morbi tristique senectus. Pharetra et ultrices neque ornare aenean. Pellentesque elit eget gravida cum sociis natoque penatibus et.</p>\n          <p class="text-base mt-3">Quam pellentesque nec nam aliquam sem. Venenatis cras sed felis eget velit. Volutpat est velit egestas dui id ornare arcu. Diam quam nulla porttitor massa. Gravida arcu ac tortor dignissim convallis aenean et tortor at. Sem viverra aliquet eget sit amet tellus cras adipiscing enim. Pretium lectus quam id leo in vitae. Pellentesque dignissim enim sit amet venenatis. Congue eu consequat ac felis donec et odio. Massa tempor nec feugiat nisl pretium fusce. Curabitur vitae nunc sed velit dignissim sodales ut. Sit amet risus nullam eget felis eget nunc. Eget velit aliquet sagittis id consectetur.</p>\n          <p class="text-base mt-3">Nulla pharetra diam sit amet nisl suscipit adipiscing bibendum. Facilisis volutpat est velit egestas dui. Enim diam vulputate ut pharetra sit amet aliquam id diam. Sagittis orci a scelerisque purus semper eget duis at. Phasellus faucibus scelerisque eleifend donec pretium. Pharetra convallis posuere morbi leo urna molestie at elementum eu. Purus gravida quis blandit turpis cursus in hac habitasse platea. At elementum eu facilisis sed odio. Dis parturient montes nascetur ridiculus mus mauris. Bibendum at varius vel pharetra vel turpis nunc. Feugiat pretium nibh ipsum consequat. Faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis.</p>',results:[]},{id:6,title:'<span class="md:text-2xl text-base font-bold">Lesson 2 - Python developer</span>',content:'\n\t\t\t\t<p class="text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi scelerisque. Tortor pretium viverra suspendisse potenti nullam ac tortor. Lectus mauris ultrices eros in cursus turpis. Vestibulum sed arcu non odio euismod lacinia. Porta non pulvinar neque laoreet suspendisse interdum consectetur. Neque volutpat ac tincidunt vitae semper. Sit amet mauris commodo quis imperdiet massa tincidunt nunc. In metus vulputate eu scelerisque felis imperdiet proin. Tortor consequat id porta nibh. Turpis egestas maecenas pharetra convallis posuere morbi. Enim sit amet venenatis urna.</p>\n          \n          <p class="text-base mt-3">Arcu dui vivamus arcu felis bibendum ut tristique et egestas. Pellentesque habitant morbi tristique senectus et netus. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec. Volutpat maecenas volutpat blandit aliquam etiam erat velit. Eros donec ac odio tempor orci dapibus ultrices in. Tortor vitae purus faucibus ornare suspendisse. Nisl rhoncus mattis rhoncus urna neque viverra justo nec. Scelerisque viverra mauris in aliquam sem. Purus viverra accumsan in nisl nisi. Vitae ultricies leo integer malesuada nunc vel. Et tortor consequat id porta nibh. Dolor sit amet consectetur adipiscing elit. Odio ut sem nulla pharetra. Accumsan lacus vel facilisis volutpat est velit egestas dui id. Dignissim cras tincidunt lobortis feugiat vivamus at augue. Venenatis a condimentum vitae sapien pellentesque habitant morbi tristique senectus. Pharetra et ultrices neque ornare aenean. Pellentesque elit eget gravida cum sociis natoque penatibus et.</p>\n          <p class="text-base mt-3">Quam pellentesque nec nam aliquam sem. Venenatis cras sed felis eget velit. Volutpat est velit egestas dui id ornare arcu. Diam quam nulla porttitor massa. Gravida arcu ac tortor dignissim convallis aenean et tortor at. Sem viverra aliquet eget sit amet tellus cras adipiscing enim. Pretium lectus quam id leo in vitae. Pellentesque dignissim enim sit amet venenatis. Congue eu consequat ac felis donec et odio. Massa tempor nec feugiat nisl pretium fusce. Curabitur vitae nunc sed velit dignissim sodales ut. Sit amet risus nullam eget felis eget nunc. Eget velit aliquet sagittis id consectetur.</p>\n          <p class="text-base mt-3">Nulla pharetra diam sit amet nisl suscipit adipiscing bibendum. Facilisis volutpat est velit egestas dui. Enim diam vulputate ut pharetra sit amet aliquam id diam. Sagittis orci a scelerisque purus semper eget duis at. Phasellus faucibus scelerisque eleifend donec pretium. Pharetra convallis posuere morbi leo urna molestie at elementum eu. Purus gravida quis blandit turpis cursus in hac habitasse platea. At elementum eu facilisis sed odio. Dis parturient montes nascetur ridiculus mus mauris. Bibendum at varius vel pharetra vel turpis nunc. Feugiat pretium nibh ipsum consequat. Faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis.</p>',results:[]}]},{id:4,content:[{id:4,title:'<span class="md:text-2xl text-base font-bold">Junior Python developer</span>',subtitle:'<span class="opacity-40 text-base">3+ months * For beginners</span>',description:'<span class="text-base">Python developers can work in a variety of fields, from machine learning to web development. They have the knowledge needed to create, extend, and maintain programs that use Python as their primary programming language.</span>'}],lessons:[{id:6,title:'<span class="md:text-2xl text-base font-bold">Lesson 1 - Junior Python developer</span>',content:'\n\t\t\t\t<p class="text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi scelerisque. Tortor pretium viverra suspendisse potenti nullam ac tortor. Lectus mauris ultrices eros in cursus turpis. Vestibulum sed arcu non odio euismod lacinia. Porta non pulvinar neque laoreet suspendisse interdum consectetur. Neque volutpat ac tincidunt vitae semper. Sit amet mauris commodo quis imperdiet massa tincidunt nunc. In metus vulputate eu scelerisque felis imperdiet proin. Tortor consequat id porta nibh. Turpis egestas maecenas pharetra convallis posuere morbi. Enim sit amet venenatis urna.</p>\n          \n          <p class="text-base mt-3">Arcu dui vivamus arcu felis bibendum ut tristique et egestas. Pellentesque habitant morbi tristique senectus et netus. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec. Volutpat maecenas volutpat blandit aliquam etiam erat velit. Eros donec ac odio tempor orci dapibus ultrices in. Tortor vitae purus faucibus ornare suspendisse. Nisl rhoncus mattis rhoncus urna neque viverra justo nec. Scelerisque viverra mauris in aliquam sem. Purus viverra accumsan in nisl nisi. Vitae ultricies leo integer malesuada nunc vel. Et tortor consequat id porta nibh. Dolor sit amet consectetur adipiscing elit. Odio ut sem nulla pharetra. Accumsan lacus vel facilisis volutpat est velit egestas dui id. Dignissim cras tincidunt lobortis feugiat vivamus at augue. Venenatis a condimentum vitae sapien pellentesque habitant morbi tristique senectus. Pharetra et ultrices neque ornare aenean. Pellentesque elit eget gravida cum sociis natoque penatibus et.</p>\n          <p class="text-base mt-3">Quam pellentesque nec nam aliquam sem. Venenatis cras sed felis eget velit. Volutpat est velit egestas dui id ornare arcu. Diam quam nulla porttitor massa. Gravida arcu ac tortor dignissim convallis aenean et tortor at. Sem viverra aliquet eget sit amet tellus cras adipiscing enim. Pretium lectus quam id leo in vitae. Pellentesque dignissim enim sit amet venenatis. Congue eu consequat ac felis donec et odio. Massa tempor nec feugiat nisl pretium fusce. Curabitur vitae nunc sed velit dignissim sodales ut. Sit amet risus nullam eget felis eget nunc. Eget velit aliquet sagittis id consectetur.</p>\n          <p class="text-base mt-3">Nulla pharetra diam sit amet nisl suscipit adipiscing bibendum. Facilisis volutpat est velit egestas dui. Enim diam vulputate ut pharetra sit amet aliquam id diam. Sagittis orci a scelerisque purus semper eget duis at. Phasellus faucibus scelerisque eleifend donec pretium. Pharetra convallis posuere morbi leo urna molestie at elementum eu. Purus gravida quis blandit turpis cursus in hac habitasse platea. At elementum eu facilisis sed odio. Dis parturient montes nascetur ridiculus mus mauris. Bibendum at varius vel pharetra vel turpis nunc. Feugiat pretium nibh ipsum consequat. Faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis.</p>',results:[]},{id:7,title:'<span class="md:text-2xl text-base font-bold">Lesson 2 - Junior Python developer</span>',content:'\n\t\t\t\t<p class="text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi scelerisque. Tortor pretium viverra suspendisse potenti nullam ac tortor. Lectus mauris ultrices eros in cursus turpis. Vestibulum sed arcu non odio euismod lacinia. Porta non pulvinar neque laoreet suspendisse interdum consectetur. Neque volutpat ac tincidunt vitae semper. Sit amet mauris commodo quis imperdiet massa tincidunt nunc. In metus vulputate eu scelerisque felis imperdiet proin. Tortor consequat id porta nibh. Turpis egestas maecenas pharetra convallis posuere morbi. Enim sit amet venenatis urna.</p>\n          \n          <p class="text-base mt-3">Arcu dui vivamus arcu felis bibendum ut tristique et egestas. Pellentesque habitant morbi tristique senectus et netus. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec. Volutpat maecenas volutpat blandit aliquam etiam erat velit. Eros donec ac odio tempor orci dapibus ultrices in. Tortor vitae purus faucibus ornare suspendisse. Nisl rhoncus mattis rhoncus urna neque viverra justo nec. Scelerisque viverra mauris in aliquam sem. Purus viverra accumsan in nisl nisi. Vitae ultricies leo integer malesuada nunc vel. Et tortor consequat id porta nibh. Dolor sit amet consectetur adipiscing elit. Odio ut sem nulla pharetra. Accumsan lacus vel facilisis volutpat est velit egestas dui id. Dignissim cras tincidunt lobortis feugiat vivamus at augue. Venenatis a condimentum vitae sapien pellentesque habitant morbi tristique senectus. Pharetra et ultrices neque ornare aenean. Pellentesque elit eget gravida cum sociis natoque penatibus et.</p>\n          <p class="text-base mt-3">Quam pellentesque nec nam aliquam sem. Venenatis cras sed felis eget velit. Volutpat est velit egestas dui id ornare arcu. Diam quam nulla porttitor massa. Gravida arcu ac tortor dignissim convallis aenean et tortor at. Sem viverra aliquet eget sit amet tellus cras adipiscing enim. Pretium lectus quam id leo in vitae. Pellentesque dignissim enim sit amet venenatis. Congue eu consequat ac felis donec et odio. Massa tempor nec feugiat nisl pretium fusce. Curabitur vitae nunc sed velit dignissim sodales ut. Sit amet risus nullam eget felis eget nunc. Eget velit aliquet sagittis id consectetur.</p>\n          <p class="text-base mt-3">Nulla pharetra diam sit amet nisl suscipit adipiscing bibendum. Facilisis volutpat est velit egestas dui. Enim diam vulputate ut pharetra sit amet aliquam id diam. Sagittis orci a scelerisque purus semper eget duis at. Phasellus faucibus scelerisque eleifend donec pretium. Pharetra convallis posuere morbi leo urna molestie at elementum eu. Purus gravida quis blandit turpis cursus in hac habitasse platea. At elementum eu facilisis sed odio. Dis parturient montes nascetur ridiculus mus mauris. Bibendum at varius vel pharetra vel turpis nunc. Feugiat pretium nibh ipsum consequat. Faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis.</p>',results:[]}]}]},6074:function(e,t,i){i.d(t,{Z:function(){return s}});const s={SET_AUTHENTICATION:"SET_AUTHENTICATION",SET_COURSES:"SET_COURSES",SET_LESSON:"SET_LESSON"}}},t={};function i(s){var a=t[s];if(void 0!==a)return a.exports;var n=t[s]={exports:{}};return e[s].call(n.exports,n,n.exports,i),n.exports}i.m=e,function(){var e=[];i.O=function(t,s,a,n){if(!s){var u=1/0;for(c=0;c<e.length;c++){s=e[c][0],a=e[c][1],n=e[c][2];for(var r=!0,o=0;o<s.length;o++)(!1&n||u>=n)&&Object.keys(i.O).every((function(e){return i.O[e](s[o])}))?s.splice(o--,1):(r=!1,n<u&&(u=n));if(r){e.splice(c--,1);var l=a();void 0!==l&&(t=l)}}return t}n=n||0;for(var c=e.length;c>0&&e[c-1][2]>n;c--)e[c]=e[c-1];e[c]=[s,a,n]}}(),function(){i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,{a:t}),t}}(),function(){i.d=function(e,t){for(var s in t)i.o(t,s)&&!i.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){i.f={},i.e=function(e){return Promise.all(Object.keys(i.f).reduce((function(t,s){return i.f[s](e,t),t}),[]))}}(),function(){i.u=function(e){return"js/"+(443===e?"about":e)+"."+{214:"561e0101",268:"88b9f576",443:"1395635f",582:"76b96e74",606:"36a2ca5a",746:"daa2c66b",791:"f3fc8d87"}[e]+".js"}}(),function(){i.miniCssF=function(e){return"css/"+(443===e?"about":e)+"."+{214:"897dfe15",268:"3743cd82",443:"55aee279",606:"190344ff",791:"a676c436"}[e]+".css"}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="course-frontend:";i.l=function(s,a,n,u){if(e[s])e[s].push(a);else{var r,o;if(void 0!==n)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var m=l[c];if(m.getAttribute("src")==s||m.getAttribute("data-webpack")==t+n){r=m;break}}r||(o=!0,r=document.createElement("script"),r.charset="utf-8",r.timeout=120,i.nc&&r.setAttribute("nonce",i.nc),r.setAttribute("data-webpack",t+n),r.src=s),e[s]=[a];var d=function(t,i){r.onerror=r.onload=null,clearTimeout(p);var a=e[s];if(delete e[s],r.parentNode&&r.parentNode.removeChild(r),a&&a.forEach((function(e){return e(i)})),t)return t(i)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=d.bind(null,r.onerror),r.onload=d.bind(null,r.onload),o&&document.head.appendChild(r)}}}(),function(){i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){i.p="/courses-frontend/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,i,s,a){var n=document.createElement("link");n.rel="stylesheet",n.type="text/css";var u=function(i){if(n.onerror=n.onload=null,"load"===i.type)s();else{var u=i&&("load"===i.type?"missing":i.type),r=i&&i.target&&i.target.href||t,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.type=u,o.request=r,n.parentNode&&n.parentNode.removeChild(n),a(o)}};return n.onerror=n.onload=u,n.href=t,i?i.parentNode.insertBefore(n,i.nextSibling):document.head.appendChild(n),n},t=function(e,t){for(var i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var a=i[s],n=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(n===e||n===t))return a}var u=document.getElementsByTagName("style");for(s=0;s<u.length;s++){a=u[s],n=a.getAttribute("data-href");if(n===e||n===t)return a}},s=function(s){return new Promise((function(a,n){var u=i.miniCssF(s),r=i.p+u;if(t(u,r))return a();e(s,r,null,a,n)}))},a={143:0};i.f.miniCss=function(e,t){var i={214:1,268:1,443:1,606:1,791:1};a[e]?t.push(a[e]):0!==a[e]&&i[e]&&t.push(a[e]=s(e).then((function(){a[e]=0}),(function(t){throw delete a[e],t})))}}}(),function(){var e={143:0};i.f.j=function(t,s){var a=i.o(e,t)?e[t]:void 0;if(0!==a)if(a)s.push(a[2]);else{var n=new Promise((function(i,s){a=e[t]=[i,s]}));s.push(a[2]=n);var u=i.p+i.u(t),r=new Error,o=function(s){if(i.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var n=s&&("load"===s.type?"missing":s.type),u=s&&s.target&&s.target.src;r.message="Loading chunk "+t+" failed.\n("+n+": "+u+")",r.name="ChunkLoadError",r.type=n,r.request=u,a[1](r)}};i.l(u,o,"chunk-"+t,t)}},i.O.j=function(t){return 0===e[t]};var t=function(t,s){var a,n,u=s[0],r=s[1],o=s[2],l=0;if(u.some((function(t){return 0!==e[t]}))){for(a in r)i.o(r,a)&&(i.m[a]=r[a]);if(o)var c=o(i)}for(t&&t(s);l<u.length;l++)n=u[l],i.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return i.O(c)},s=self["webpackChunkcourse_frontend"]=self["webpackChunkcourse_frontend"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=i.O(void 0,[998],(function(){return i(3261)}));s=i.O(s)})();
//# sourceMappingURL=app.b0ef50db.js.map