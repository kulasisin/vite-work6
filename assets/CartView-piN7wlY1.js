import{_ as k,r as p,o as r,c as d,b as i,a as t,F as v,f as E,t as g,w as q,g as U,d as y,e as V,h as C,i as b}from"./index-ymGICESR.js";var x={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_NAME:"maciw2",BASE_URL:"/vite-work6/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:u}=x,{VITE_NAME:m}=x,Q={data(){return{carts:{},isLoading:!0,status:{showCartLoading:""},form:{user:{name:"",email:"",tel:"",address:""},message:""},coupon_code:""}},methods:{getCart(){this.status.showCartLoading=this.carts.id;const a=`${u}/api/${m}/cart`;this.$http.get(a).then(s=>{this.carts=s.data.data,this.status.showCartLoading=""}).catch(s=>{console.log(s)})},changeCartQty(a,s=1){const n={product_id:a.product_id,qty:s};this.status.cartQtyLoading=a.id;const f=`${u}/api/${m}/cart/${a.id}`;this.$http.put(f,{data:n}).then(o=>{console.log(o),this.status.cartQtyLoading="",this.getCart()}).catch(o=>{console.log(o)})},removeCartItem(a){this.status.cartQtyLoading=a,this.status.showCartLoading=a,console.log(a);const s=`${u}/api/${m}/cart/${a}`;this.$http.delete(s).then(n=>{alert(n.data.message),this.status.cartQtyLoading="",this.status.showCartLoading="",this.getCart()}).catch(n=>{console.log(n)})},removeAllCart(a){console.log(a);const s=`${u}/api/${m}/cart`;this.$http.delete(s).then(()=>{this.getCart()}).catch(n=>{window.alert(n.data.message)})},isPhone(a){return/^(09)[0-9]{8}$/.test(a)?!0:"需要正確的電話號碼"},createOrder(){const a=this.form,s=`${u}/api/${m}/order`;this.$http.post(s,{data:a}).then(n=>{alert(n.data.message),this.$refs.form.resetForm(),this.getCart()}).catch(n=>{alert(n.response.data.message)})}},mounted(){console.log(),setTimeout(()=>{this.getCart(),this.isLoading=!1},1e3)}},M=t("h2",null,"這是購物車列表",-1),N={class:"container"},F={class:"container"},I={class:"row justify-content-center"},T={class:"col-md-6"},S={class:"table align-middle"},z=t("thead",null,[t("tr",null,[t("th"),t("th",null,"品名"),t("th",{style:{width:"180px"}},"數量/單位"),t("th",{class:"text-center"},"單價")])],-1),A=["onClick","disabled"],B={key:0,class:"fas fa-spinner fa-pulse"},D=t("div",{class:"text-success"}," 已套用優惠券 ",-1),R={class:"input-group input-group-sm"},O={class:"input-group mb-3"},$=["disabled","onClick"],H=["onClick"],P=t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-trash",viewBox:"0 0 16 16"},[t("path",{d:`M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0
                                     0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0
                                      0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z`}),t("path",{d:`M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0
                                     1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h
                                     2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1
                                     0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z`})],-1),j=[P],G=["onUpdate:modelValue","disabled"],J=["onClick"],K={class:"input-group-text",id:"basic-addon2"},W={class:"text-end"},X={key:1},Y=t("td",{class:"h4 py-4",colspan:"4"}," 購物車無商品 ",-1),Z=[Y],tt=t("td",{colspan:"3",class:"text-end"},"總計",-1),et={class:"text-end"},st={class:"my-5 row justify-content-center"},ot={class:"mb-4 text-start"},at=t("label",{for:"email",class:"form-label"},"Email",-1),lt={class:"mb-4 text-start"},nt=t("label",{for:"name",class:"form-label"},"收件人姓名",-1),it={class:"mb-4 text-start"},rt=t("label",{for:"tel",class:"form-label"},"收件人電話",-1),dt={class:"mb-4 text-start"},ct=t("label",{for:"address",class:"form-label"},"收件人地址",-1),ut={class:"mb-4 text-start"},mt=t("label",{for:"message",class:"form-label"},"留言",-1),ht=t("div",{class:"text-end"},[t("button",{class:"btn btn-danger",type:"submit"},"送出訂單")],-1);function _t(a,s,n,f,o,c){const w=p("VueLoading"),h=p("VeeField"),_=p("error-message"),L=p("VeeForm");return r(),d(v,null,[M,i(w,{active:o.isLoading},null,8,["active"]),t("div",N,[t("div",F,[t("div",I,[t("div",T,[t("table",S,[z,t("tbody",null,[o.carts.total!==0?(r(!0),d(v,{key:0},E(o.carts.carts,e=>(r(),d("tr",{key:e.id},[t("td",null,[t("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:l=>c.removeCartItem(e.id),disabled:e.id===o.status.cartQtyLoading},[e.id===o.status.showCartLoading?(r(),d("i",B)):U("",!0),y(" x ")],8,A)]),t("td",null,[y(g(e.product.title)+" ",1),D]),t("td",null,[t("div",R,[t("div",O,[e.qty>1?(r(),d("button",{key:0,typr:"button",class:"btn btn-outline-primary",disabled:e.qty===1,onClick:l=>{e.qty--,c.changeCartQty(e,e.qty)}}," - ",8,$)):(r(),d("button",{key:1,typr:"button",class:"btn btn-outline-danger",onClick:l=>c.removeCartItem(e.id)},j,8,H)),V(t("input",{min:"1",typr:"number",class:"form-control","onUpdate:modelValue":l=>e.qty=l,disabled:e.id===o.status.cartQtyLoading,readonly:""},null,8,G),[[C,e.qty]]),t("button",{typr:"button",class:"btn btn-outline-primary",onClick:l=>{e.qty++,c.changeCartQty(e,e.qty)}}," + ",8,J),t("span",K,g(e.product.unit),1)])])]),t("td",W,g(e.total),1)]))),128)):(r(),d("tr",X,Z))]),t("tfoot",null,[t("tr",null,[tt,t("td",et,g(o.carts.final_total),1)])])])])])]),t("div",st,[i(L,{ref:"form",class:"col-md-6",onSubmit:c.createOrder},{default:q(({errors:e})=>[t("div",ot,[at,i(h,{id:"email",name:"email",type:"email",class:b(["form-control",{"is-invalid":e.email}]),placeholder:"請輸入 Email",rules:"email|required",modelValue:o.form.user.email,"onUpdate:modelValue":s[0]||(s[0]=l=>o.form.user.email=l)},null,8,["class","modelValue"]),i(_,{name:"email",class:"invalid-feedback"})]),t("div",lt,[nt,i(h,{id:"name",name:"姓名",type:"text",class:b(["form-control",{"is-invalid":e.姓名}]),placeholder:"請輸入姓名",rules:"required",modelValue:o.form.user.name,"onUpdate:modelValue":s[1]||(s[1]=l=>o.form.user.name=l)},null,8,["class","modelValue"]),i(_,{name:"姓名",class:"invalid-feedback"})]),t("div",it,[rt,i(h,{id:"tel",name:"電話",type:"tel",class:b(["form-control",{"is-invalid":e.電話}]),placeholder:"請輸入電話",rules:c.isPhone,modelValue:o.form.user.tel,"onUpdate:modelValue":s[2]||(s[2]=l=>o.form.user.tel=l)},null,8,["class","rules","modelValue"]),i(_,{name:"電話",class:"invalid-feedback"})]),t("div",dt,[ct,i(h,{id:"address",name:"地址",type:"text",class:b(["form-control",{"is-invalid":e.地址}]),placeholder:"請輸入地址",rules:"required",modelValue:o.form.user.address,"onUpdate:modelValue":s[3]||(s[3]=l=>o.form.user.address=l)},null,8,["class","modelValue"]),i(_,{name:"地址",class:"invalid-feedback"})]),t("div",ut,[mt,V(t("textarea",{id:"message",class:"form-control",cols:"30",rows:"10","onUpdate:modelValue":s[4]||(s[4]=l=>o.form.message=l)},null,512),[[C,o.form.message]])]),ht]),_:1},8,["onSubmit"])])])],64)}const gt=k(Q,[["render",_t]]);export{gt as default};
