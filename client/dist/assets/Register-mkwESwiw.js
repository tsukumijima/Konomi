import{d as m,U as c,m as f,L as w,_ as g,r as n,o as h,c as _,b as t,e as o,w as a,k as V,V as v,i as y,p as C,q as B}from"./index-QtMY6I6_.js";import{H as $,N as F}from"./Navigation-39GZ_ZnP.js";import{_ as S}from"./ssrBoot-wxxiprf1.js";import{a as b,V as A}from"./VCard-GICiqLt1.js";import{V as I,c as i}from"./VTextField-IwDQE_NY.js";import{V as N}from"./VForm-a4-EwiTh.js";import"./VAvatar-MwPKYrRL.js";const k=m({name:"Register",components:{HeaderBar:$,Navigation:F},data(){return{is_form_dense:c.isSmartphoneHorizontal(),username:null,username_validation:e=>e===""||e===null?"ユーザー名を入力してください。":/^.{2,}$/.test(e)===!1?"ユーザー名は2文字以上で入力してください。":!0,password:null,password_showing:!0,password_validation:e=>e===""||e===null?"パスワードを入力してください。":/^[a-zA-Z0-9!-/:-@¥[-`{-~]{4,}$/.test(e)===!1?"パスワードは4文字以上の半角英数記号を入力してください。":!0}},computed:{...f(w)},async created(){await this.userStore.fetchUser(),this.userStore.is_logged_in&&await this.$router.replace({path:"/settings/account"})},methods:{async register(){(await this.$refs.register.validate()).valid===!1||this.username===null||this.password===null||await this.userStore.register(this.username,this.password)===!1||await this.$router.replace({path:"/settings/account"})}}}),l=e=>(C("data-v-0b5798d5"),e=e(),B(),e),U={class:"route-container"},H={class:"register-container-wrapper d-flex align-center w-100 mb-13"},x=l(()=>o("img",{class:"d-block",src:S,style:{"max-width":"250px"}},null,-1)),D=l(()=>o("h4",{class:"mt-10"},"アカウントを作成",-1));function E(e,s,T,z,R,j){const d=n("HeaderBar"),u=n("Navigation"),p=n("Icon");return h(),_("div",U,[t(d),o("main",null,[t(u),o("div",H,[t(b,{class:"register-container px-10 pt-8 pb-11 mx-auto",elevation:"10",width:"100%","max-width":"450"},{default:a(()=>[t(A,{class:"register__logo py-4 d-flex flex-column justify-center align-center"},{default:a(()=>[x,D]),_:1}),t(I),t(N,{ref:"register",onSubmit:s[4]||(s[4]=V(()=>{},["prevent"]))},{default:a(()=>[t(i,{class:"mt-12",color:"primary",variant:"outlined",placeholder:"ユーザー名",autofocus:"",density:e.is_form_dense?"compact":"default",modelValue:e.username,"onUpdate:modelValue":s[0]||(s[0]=r=>e.username=r),rules:[e.username_validation]},null,8,["density","modelValue","rules"]),t(i,{style:{"margin-top":"10px"},color:"primary",variant:"outlined",placeholder:"パスワード",density:e.is_form_dense?"compact":"default",modelValue:e.password,"onUpdate:modelValue":s[1]||(s[1]=r=>e.password=r),type:e.password_showing?"text":"password",rules:[e.password_validation],"append-inner-icon":e.password_showing?"mdi-eye":"mdi-eye-off","onClick:appendInner":s[2]||(s[2]=r=>e.password_showing=!e.password_showing)},null,8,["density","modelValue","type","rules","append-inner-icon"]),t(v,{class:"register-button mt-5",color:"secondary",variant:"flat",width:"100%",height:"56",onClick:s[3]||(s[3]=r=>e.register())},{default:a(()=>[t(p,{icon:"fluent:person-add-20-filled",class:"mr-2",height:"24"}),y("アカウントを作成 ")]),_:1})]),_:1},512)]),_:1})])])])}const O=g(k,[["render",E],["__scopeId","data-v-0b5798d5"]]);export{O as default};