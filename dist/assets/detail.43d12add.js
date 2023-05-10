import{c as U,n as Z,t as K,d as W,q as R,aR as J,s as Q,a as i,L as E,aM as X,I as F,w as Y,a9 as $,aa as s,ab as o,H as h,al as y,aS as G,ae as e,aj as c,aN as k,ao as b,aq as q,am as V,aD as H,aT as tt,ac as N,ad as L,D as et,af as st,aU as ot,b as j,k as at,ak as v,aV as nt,aW as ct}from"./index.aa9a37de.js";import{h as lt}from"./index.a47dc5ff.js";import{a as it,S as dt}from"./index.1c239ec3.js";import{R as rt}from"./index.9e757964.js";import{u as _t}from"./useScroll.2a7854ed.js";const[ut,I]=U("nav-bar"),mt={title:String,fixed:Boolean,zIndex:Z,border:K,leftText:String,rightText:String,leftArrow:Boolean,placeholder:Boolean,safeAreaInsetTop:Boolean};var ht=W({name:ut,props:mt,emits:["click-left","click-right"],setup(t,{emit:r,slots:l}){const n=R(),a=J(n,I),d=m=>r("click-left",m),_=m=>r("click-right",m),u=()=>l.left?l.left():[t.leftArrow&&i(F,{class:I("arrow"),name:"arrow-left"},null),t.leftText&&i("span",{class:I("text")},[t.leftText])],g=()=>l.right?l.right():i("span",{class:I("text")},[t.rightText]),T=()=>{const{title:m,fixed:P,border:p,zIndex:x}=t,A=Q(x),S=t.leftArrow||t.leftText||l.left,w=t.rightText||l.right;return i("div",{ref:n,style:A,class:[I({fixed:P}),{[X]:p,"van-safe-area-top":t.safeAreaInsetTop}]},[i("div",{class:I("content")},[S&&i("div",{class:[I("left"),E],onClick:d},[u()]),i("div",{class:[I("title"),"van-ellipsis"]},[l.title?l.title():m]),w&&i("div",{class:[I("right"),E],onClick:_},[g()])])])};return()=>t.fixed&&t.placeholder?a(T):T()}});const ft=Y(ht);function vt(t){return lt.get({url:"/detail/infos",params:{houseId:t}})}const pt={props:{titles:{type:Array,default:()=>[]}},data(){return{currentIndex:0}},emits:["tabItemClick"],methods:{itemClick(t){this.currentIndex=t,this.$emit("tabItemClick",t)},setCurrentIndex(t){this.currentIndex=t}}},yt={class:"tab-control"},$t=["onClick"];function gt(t,r,l,n,a,d){return s(),o("div",yt,[(s(!0),o(h,null,y(l.titles,(_,u)=>(s(),o("div",{key:_,class:G(["tab-control-item",{active:u===a.currentIndex}]),onClick:g=>d.itemClick(u)},[e("span",null,c(_),1)],10,$t))),128))])}const xt=$(pt,[["render",gt],["__scopeId","data-v-63dc2837"]]);const It={class:"swipe"},kt=["src"],bt={class:"indicator"},wt={class:"text"},Ct={key:0,class:"count"},Tt={__name:"detail_01-swipe",props:{swipeData:{type:Array,default:()=>[]}},setup(t){const r=t,l={};for(const _ of r.swipeData){let u=l[_.enumPictureCategory];u||(u=[],l[_.enumPictureCategory]=u),u.push(_)}const n=/【(.*?)】/i,a=_=>n.exec(_)[1],d=_=>l[_.enumPictureCategory].findIndex(g=>g===_)+1;return(_,u)=>{const g=it,T=dt;return s(),o("div",It,[i(T,{class:"swipe-list",autoplay:3e3,"indicator-color":"white"},{indicator:k(({active:m,total:P})=>[e("div",bt,[(s(),o(h,null,y(l,(p,x,A)=>{var S,w;return e("span",{key:x,class:G(["item",{active:((S=t.swipeData[m])==null?void 0:S.enumPictureCategory)==x}])},[e("span",wt,c(a(p[0].title)),1),((w=t.swipeData[m])==null?void 0:w.enumPictureCategory)==x?(s(),o("span",Ct,c(d(t.swipeData[m]))+"/"+c(p.length),1)):b("",!0)],2)}),64))])]),default:k(()=>[(s(!0),o(h,null,y(t.swipeData,(m,P)=>(s(),q(g,{class:"item"},{default:k(()=>[e("img",{src:m.url,alt:""},null,8,kt)]),_:2},1024))),256))]),_:1})])}}},St=$(Tt,[["__scopeId","data-v-1852813e"]]);const Bt={class:"infos"},Dt={class:"name"},Mt={class:"tags"},Rt={class:"comment extra"},Pt={class:"left"},At={class:"score"},Nt={class:"title"},Lt={class:"brief"},Ot={class:"right"},jt={class:"count"},Ft={class:"position extra"},Vt={class:"left address"},zt={class:"right"},Et=H(" \u5730\u56FE\xB7\u5468\u8FB9 "),Gt={__name:"detail_02-infos",props:{topInfos:{type:Object,default:()=>({})}},setup(t){return(r,l)=>{const n=F;return s(),o("div",Bt,[e("div",Dt,c(t.topInfos.houseName),1),e("div",Mt,[(s(!0),o(h,null,y(t.topInfos.houseTags,(a,d)=>(s(),o(h,{key:d},[a.tagText?(s(),o("span",{key:0,class:"item",style:V({color:a.tagText.color,background:a.tagText.background.color})},c(a.tagText.text),5)):b("",!0)],64))),128))]),e("div",Rt,[e("div",Pt,[e("span",At,c(t.topInfos.commentBrief.overall),1),e("span",Nt,c(t.topInfos.commentBrief.scoreTitle),1),e("span",Lt,c(t.topInfos.commentBrief.commentBrief),1)]),e("div",Ot,[e("span",jt,[H(c(t.topInfos.commentBrief.totalCount)+"\u6761\u8BC4\u8BBA ",1),i(n,{name:"arrow"})])])]),e("div",Ft,[e("div",Vt,c(t.topInfos.nearByPosition.address),1),e("div",zt,[Et,i(n,{name:"arrow"})])])])}}},qt=$(Gt,[["__scopeId","data-v-bbe91a40"]]);const Ht=t=>(N("data-v-21c76102"),t=t(),L(),t),Ut={class:"section"},Zt={class:"header"},Kt={class:"title"},Wt={class:"content"},Jt=Ht(()=>e("h3",null,"\u6211\u662F\u9ED8\u8BA4\u5185\u5BB9",-1)),Qt={key:0,class:"footer"},Xt={class:"more"},Yt={__name:"detail-section",props:{title:{type:String,default:"\u9ED8\u8BA4\u6807\u9898"},moreText:{type:String,default:""}},setup(t){return(r,l)=>{const n=F;return s(),o("div",Ut,[e("div",Zt,[e("h2",Kt,c(t.title),1)]),e("div",Wt,[tt(r.$slots,"default",{},()=>[Jt],!0)]),t.moreText.length?(s(),o("div",Qt,[e("span",Xt,c(t.moreText),1),i(n,{name:"arrow"})])):b("",!0)])}}},O=$(Yt,[["__scopeId","data-v-21c76102"]]);const te=t=>(N("data-v-c6f2399d"),t=t(),L(),t),ee={class:"facility"},se={class:"facility-inner"},oe={key:0,class:"item"},ae={class:"head"},ne=["src"],ce={class:"text"},le={class:"list"},ie=te(()=>e("i",{class:"icon_check icon"},null,-1)),de={__name:"detail_03-facility",props:{houseFacility:{type:Object,default:()=>({})}},setup(t){return(r,l)=>(s(),o("div",ee,[i(O,{title:"\u623F\u5C4B\u8BBE\u65BD","more-text":"\u67E5\u770B\u5168\u90E8\u8BBE\u65BD"},{default:k(()=>[e("div",se,[(s(!0),o(h,null,y(t.houseFacility.houseFacilitys,(n,a)=>{var d;return s(),o(h,{key:a},[(d=t.houseFacility.facilitySort)!=null&&d.includes(a)?(s(),o("div",oe,[e("div",ae,[e("img",{src:n.icon,alt:""},null,8,ne),e("div",ce,c(n.groupName),1)]),e("div",le,[(s(!0),o(h,null,y(n.facilitys.slice(0,4),(_,u)=>(s(),o("div",{key:u,class:"iten"},[ie,e("span",null,c(_.name),1)]))),128))])])):b("",!0)],64)}),128))])]),_:1})]))}},re=$(de,[["__scopeId","data-v-c6f2399d"]]);const _e=t=>(N("data-v-be886800"),t=t(),L(),t),ue={class:"landlord"},me={class:"intro"},he={class:"top"},fe=["src"],ve={class:"header"},pe={class:"left"},ye={class:"avatar"},$e=["src"],ge={class:"info"},xe={class:"name"},Ie={class:"tags"},ke={key:0,class:"divider"},be=_e(()=>e("div",{class:"right"},[e("div",{class:"contact"},"\u8054\u7CFB\u623F\u4E1C")],-1)),we={class:"bottom"},Ce={class:"item"},Te={class:"title"},Se={class:"score"},Be={class:"desc"},De={__name:"detail_04-landlord",props:{landlord:{type:Object,default:()=>({})}},setup(t){return(r,l)=>(s(),o("div",ue,[i(O,{title:"\u623F\u4E1C\u4ECB\u7ECD","more-text":"\u67E5\u770B\u623F\u4E1C\u4E3B\u9875"},{default:k(()=>[e("div",me,[e("div",he,[e("img",{src:t.landlord.topScroll,alt:""},null,8,fe)]),e("div",ve,[e("div",pe,[e("div",ye,[e("img",{src:t.landlord.hotelLogo,alt:""},null,8,$e)]),e("div",ge,[e("div",xe,c(t.landlord.hotelName),1),e("div",Ie,[(s(!0),o(h,null,y(t.landlord.hotelTags,(n,a)=>(s(),o("div",{class:"item",style:V({color:n.tagText.color})},[e("span",null,c(n.tagText.text),1),a!==t.landlord.hotelTags.length-1?(s(),o("span",ke,"|")):b("",!0)],4))),256))])])]),be]),e("div",we,[(s(!0),o(h,null,y(t.landlord.hotelSummary,(n,a)=>(s(),o("div",Ce,[e("div",Te,c(n.title),1),e("div",Se,c(n.introduction),1),e("div",Be,c(n.tip),1)]))),256))])])]),_:1})]))}},Me=$(De,[["__scopeId","data-v-be886800"]]);const Re=t=>(N("data-v-19aa6052"),t=t(),L(),t),Pe={class:"comment"},Ae={class:"comment-inner"},Ne={class:"header"},Le={class:"left"},Oe={class:"score"},je={class:"text"},Fe=Re(()=>e("div",{class:"line"},null,-1)),Ve={class:"info"},ze={class:"title"},Ee={class:"count"},Ge={class:"star"},qe={class:"right"},He={class:"tags"},Ue={class:"content"},Ze={class:"user"},Ke={class:"avatar"},We=["src"],Je={class:"profile"},Qe={class:"name"},Xe={class:"date"},Ye={class:"text"},ts={__name:"detail_05-comment",props:{comment:{type:Object,default:()=>({})}},setup(t){return(r,l)=>{const n=rt;return s(),o("div",Pe,[i(O,{title:"\u70ED\u95E8\u8BC4\u8BBA","more-text":`\u67E5\u770B\u5168\u90E8${t.comment.totalCount}\u6761\u8BC4\u8BBA`},{default:k(()=>[e("div",Ae,[e("div",Ne,[e("div",Le,[e("div",Oe,[e("span",je,c(t.comment.overall),1),Fe]),e("div",Ve,[e("div",ze,c(t.comment.scoreTitle),1),e("div",Ee,c(t.comment.totalCount)+"\u6761\u8BC4\u8BBA",1),e("div",Ge,[i(n,{modelValue:t.comment.overall,"onUpdate:modelValue":l[0]||(l[0]=a=>t.comment.overall=a),color:"#ff9645",size:"12",readonly:"","allow-half":""},null,8,["modelValue"])])])]),e("div",qe,[(s(!0),o(h,null,y(t.comment.subScores,(a,d)=>(s(),o("span",{key:a,class:"item"},c(a),1))),128))])]),e("div",He,[(s(!0),o(h,null,y(t.comment.commentTagVo,(a,d)=>(s(),o("span",{key:d,class:"item",style:V({color:a.color,background:a.backgroundColor})},c(a.text),5))),128))]),e("div",Ue,[e("div",Ze,[e("div",Ke,[e("img",{src:t.comment.comment.userAvatars,alt:""},null,8,We)]),e("div",Je,[e("div",Qe,c(t.comment.comment.userName),1),e("div",Xe,c(t.comment.comment.checkInDate),1)])]),e("div",Ye,c(t.comment.comment.commentDetail),1)])])]),_:1},8,["more-text"])])}}},es=$(ts,[["__scopeId","data-v-19aa6052"]]);const ss={class:"notice"},os={class:"notice-inner"},as={class:"title"},ns={class:"intro"},cs={key:0,class:"tip"},ls={__name:"detail_06-notice",props:{orderRules:{type:Array,default:()=>[]}},setup(t){return(r,l)=>(s(),o("div",ss,[i(O,{title:"\u9884\u5B9A\u987B\u77E5"},{default:k(()=>[e("div",os,[(s(!0),o(h,null,y(t.orderRules,(n,a)=>(s(),o("div",{key:a,class:"item"},[e("span",as,c(n.title),1),e("span",ns,c(n.introduction),1),n.tips?(s(),o("span",cs,"\u67E5\u770B\u8BF4\u660E")):b("",!0)]))),128))])]),_:1})]))}},is=$(ls,[["__scopeId","data-v-40f52439"]]);const ds={class:"home"},rs={__name:"detail_07-map",props:{position:{type:Object,default:()=>({})}},setup(t){const r=t,l=R();return et(()=>{const n=new BMapGL.Map(l.value),a=new BMapGL.Point(r.position.longitude,r.position.latitude);n.centerAndZoom(a,15);const d=new BMapGL.Marker(a);n.addOverlay(d)}),(n,a)=>(s(),o("div",ds,[i(O,{title:"\u4F4D\u7F6E\u5468\u8FB9","more-text":"\u67E5\u770B\u66F4\u591A\u5468\u8FB9\u4FE1\u606F"},{default:k(()=>[e("div",{class:"baidu",ref_key:"mapRef",ref:l},null,512)]),_:1})]))}},_s=$(rs,[["__scopeId","data-v-d0908ce8"]]);const us={class:"intro"},ms={class:"title"},hs={class:"content"},fs={__name:"detail_08-intro",props:{priceIntro:{type:Object,default:()=>({})}},setup(t){return(r,l)=>(s(),o("div",us,[e("h2",ms,c(t.priceIntro.title),1),e("div",hs,c(t.priceIntro.introduction),1)]))}},vs=$(fs,[["__scopeId","data-v-04e4ff45"]]);const ps=t=>(N("data-v-8c820de2"),t=t(),L(),t),ys=ps(()=>e("div",{class:"footer"},[e("img",{src:ct,alt:""}),e("div",{class:"text"},"\u5F18\u6E90\u65C5\u9014, \u6C38\u65E0\u6B62\u5883!")],-1)),$s={__name:"detail",setup(t){const r=st(),n=ot().params.id,a=R({}),d=j(()=>a.value.mainPart);vt(n).then(f=>{a.value=f.data});const _=()=>{r.back()},u=R(),{scrollTop:g}=_t(u),T=j(()=>g.value>=300),m=R({}),P=j(()=>Object.keys(m.value)),p=f=>{if(!f)return;const B=f.$el.getAttribute("name");m.value[B]=f.$el};let x=!1,A=-1;const S=f=>{const B=Object.keys(m.value)[f];let C=m.value[B].offsetTop;f!==0&&(C=C-44),x=!0,A=C,u.value.scrollTo({top:C,behavior:"smooth"})},w=R();return at(g,f=>{var z;if(f===A&&(x=!1),x)return;const D=Object.values(m.value).map(M=>M.offsetTop);let C=D.length-1;for(let M=0;M<D.length;M++)if(D[M]>f+44){C=M-1;break}(z=w.value)==null||z.setCurrentIndex(C)}),(f,B)=>{const D=ft;return s(),o("div",{class:"detail top-page",ref_key:"detailRef",ref:u},[v(T)?(s(),q(xt,{key:0,class:"tabs",titles:v(P),onTabItemClick:S,ref_key:"tabControlRef",ref:w},null,8,["titles"])):b("",!0),i(D,{title:"\u623F\u5C4B\u8BE6\u60C5","left-text":"\u65C5\u9014","left-arrow":"",onClickLeft:_}),v(d)?nt([v(d)],()=>(s(),o("div",{key:1,class:"main"},[i(St,{"swipe-data":v(d).topModule.housePicture.housePics},null,8,["swipe-data"]),i(qt,{name:"\u63CF\u8FF0",ref:p,"top-infos":v(d).topModule},null,8,["top-infos"]),i(re,{name:"\u8BBE\u65BD",ref:p,"house-facility":v(d).dynamicModule.facilityModule.houseFacility},null,8,["house-facility"]),i(Me,{name:"\u623F\u4E1C",ref:p,landlord:v(d).dynamicModule.landlordModule},null,8,["landlord"]),i(es,{name:"\u8BC4\u8BBA",ref:p,comment:v(d).dynamicModule.commentModule},null,8,["comment"]),i(is,{name:"\u987B\u77E5",ref:p,"order-rules":v(d).dynamicModule.rulesModule.orderRules},null,8,["order-rules"]),i(_s,{name:"\u5468\u8FB9",ref:p,position:v(d).dynamicModule.positionModule},null,8,["position"]),i(vs,{"price-intro":v(d).introductionModule},null,8,["price-intro"])])),B,0):b("",!0),ys],512)}}},ws=$($s,[["__scopeId","data-v-8c820de2"]]);export{ws as default};
