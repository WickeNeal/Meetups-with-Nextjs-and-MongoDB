(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[37],{1662:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/new-meetup",function(){return t(3466)}])},2281:function(e,n,t){"use strict";var r=t(5893),i=t(6099),s=t.n(i);n.Z=function(e){return(0,r.jsx)("div",{className:s().card,children:e.children})}},3466:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return x}});var r=t(4051),i=t.n(r),s=t(5893),o=t(7294),c=t(9008),u=t.n(c),a=t(1163),d=t(2281),l=t(5074),p=t.n(l);var f=function(e){var n=(0,o.useRef)(),t=(0,o.useRef)(),r=(0,o.useRef)(),i=(0,o.useRef)();return(0,s.jsx)(d.Z,{children:(0,s.jsxs)("form",{className:p().form,onSubmit:function(s){s.preventDefault();var o={title:n.current.value,image:t.current.value,address:r.current.value,description:i.current.value};e.onAddMeetup(o)},children:[(0,s.jsxs)("div",{className:p().control,children:[(0,s.jsx)("label",{htmlFor:"title",children:"Meetup Title"}),(0,s.jsx)("input",{type:"text",required:!0,id:"title",ref:n})]}),(0,s.jsxs)("div",{className:p().control,children:[(0,s.jsx)("label",{htmlFor:"image",children:"Meetup Image"}),(0,s.jsx)("input",{type:"url",required:!0,id:"image",ref:t})]}),(0,s.jsxs)("div",{className:p().control,children:[(0,s.jsx)("label",{htmlFor:"address",children:"Address"}),(0,s.jsx)("input",{type:"text",required:!0,id:"address",ref:r})]}),(0,s.jsxs)("div",{className:p().control,children:[(0,s.jsx)("label",{htmlFor:"description",children:"Description"}),(0,s.jsx)("textarea",{id:"description",required:!0,rows:"5",ref:i})]}),(0,s.jsx)("div",{className:p().actions,children:(0,s.jsx)("button",{children:"Add Meetup"})})]})})};function h(e,n,t,r,i,s,o){try{var c=e[s](o),u=c.value}catch(a){return void t(a)}c.done?n(u):Promise.resolve(u).then(r,i)}function m(e){return function(){var n=this,t=arguments;return new Promise((function(r,i){var s=e.apply(n,t);function o(e){h(s,r,i,o,c,"next",e)}function c(e){h(s,r,i,o,c,"throw",e)}o(void 0)}))}}var x=function(){var e=(0,a.useRouter)();function n(){return(n=m(i().mark((function n(t){var r,s;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("/api/new-meetup",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}});case 2:return r=n.sent,n.next=5,r.json();case 5:s=n.sent,console.log(s),e.push("/");case 8:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return(0,s.jsxs)(o.Fragment,{children:[(0,s.jsxs)(u(),{children:[(0,s.jsx)("title",{children:"Add a New Meetup"}),(0,s.jsx)("meta",{name:"description",content:"Add your own meetups and create amazing networking opportunities."})]}),(0,s.jsx)(f,{onAddMeetup:function(e){return n.apply(this,arguments)}})]})}},5074:function(e){e.exports={form:"NewMeetupForm_form__dA95d",control:"NewMeetupForm_control__jRNhP",actions:"NewMeetupForm_actions__2fkck"}},6099:function(e){e.exports={card:"Card_card__73YTa"}},9008:function(e,n,t){e.exports=t(3121)},1163:function(e,n,t){e.exports=t(880)}},function(e){e.O(0,[774,888,179],(function(){return n=1662,e(e.s=n);var n}));var n=e.O();_N_E=n}]);