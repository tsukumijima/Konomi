import{d as a,m as n,u as p,_ as m,r as d,o as c,h as u}from"./index-FpRVsIfo.js";import{W as h,V as l,P as _,u as f}from"./PlayerController-vvc85HZO.js";import"./ChannelsStore-ontFDtu1.js";import"./ssrBoot-jCRg1wn1.js";import"./VDialog-5Wh86vfN.js";import"./VSwitch-uDZFic7g.js";import"./VTextField-obxb2-Tq.js";import"./VAvatar-OP_y98MJ.js";import"./VCard-op9nGAFl.js";import"./swiper-TSNIpZFQ.js";import"./CommentMuteSettings-PJw4BHb_.js";import"./VSelect-H3dWox6p.js";import"./vuedraggable.umd-pgBZ_LNM.js";import"./Twitter-0Vs2AuL1.js";import"./PlayerUtils-VNZ3821B.js";let t=null;const y=a({name:"Video-Watch",components:{Watch:h},computed:{...n(f,p)},created(){this.init()},beforeRouteUpdate(o,r,e){this.destroy().then(()=>this.init()),e()},beforeUnmount(){this.destroy()},methods:{async init(){if(this.$route.params.video_id===void 0){this.$router.push({path:"/not-found/"});return}const o=await l.fetchVideo(parseFloat(this.$route.params.video_id));if(o===null){this.$router.push({path:"/not-found/"});return}this.playerStore.recorded_program=o,t=new _("Video"),await t.init()},async destroy(){t!==null&&(await t.destroy(),t=null)}}});function $(o,r,e,i,W,V){const s=d("Watch",!0);return c(),u(s,{playback_mode:"Video"})}const z=m(y,[["render",$]]);export{z as default};