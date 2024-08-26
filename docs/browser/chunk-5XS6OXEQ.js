import{a as se,b as ce}from"./chunk-EFQRT7EN.js";import"./chunk-RECFE55V.js";import"./chunk-JCJIXIGU.js";import{A as ne,N as ie,O as oe,P as j,Q as re,S as B,U as L,W as x,X as O,Y as b,Z as ae,_ as D,b as C,e as T,ea as me,f as V,g as I,h as P,i as Q,j as X,k as R,m as K,n as Z,o as N,s as $,x as ee,z as te}from"./chunk-IJE6XXDP.js";import{h as J,i as v,k as q}from"./chunk-2I5PCLPG.js";import{Ab as A,Db as m,Fb as h,Kc as Y,Pb as a,Pc as H,Sa as f,Ta as l,Ub as G,Vb as U,W as k,Wb as W,da as p,ea as F,kb as E,la as y,ma as _,mb as w,ub as o,vb as r,wb as g}from"./chunk-X7G7GHZB.js";import"./chunk-ODN5LVDJ.js";var le=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=p({type:e,selectors:[["app-layoutpage"]],decls:13,vars:0,consts:[["color","primary",2,"background-color","#4d8571"],[1,"spacer",2,"flex","1"],[1,"mat-elevation-z2",2,"background-color","#365746","color","#fff","padding","20px"],[1,"container"],[1,"row"],[1,"col-md-12","text-center"],["href","https://mdbootstrap.com/",2,"color","#fff"]],template:function(t,s){t&1&&(o(0,"mat-toolbar",0),g(1,"span",1),r(),o(2,"mat-sidenav-container")(3,"mat-sidenav-content"),g(4,"router-outlet"),r()(),o(5,"footer",2)(6,"div",3)(7,"div",4)(8,"div",5)(9,"p"),a(10,"\xA9 2024 Derechos Reservados. Desarrollado por "),o(11,"a",6),a(12,"MDBootstrap.com"),r()()()()()())},dependencies:[J,te,ee,ne]});let n=e;return n})();function be(n,e){n&1&&(o(0,"mat-error"),a(1," Correo electr\xF3nico inv\xE1lido "),r())}function ye(n,e){n&1&&(o(0,"mat-error"),a(1," Contrase\xF1a es requerida "),r())}function _e(n,e){if(n&1){let c=A();o(0,"div",5)(1,"div",6)(2,"mat-card",7)(3,"mat-card-header")(4,"mat-card-title"),a(5,"Iniciar Sesi\xF3n"),r()(),o(6,"mat-card-content")(7,"form",8),m("ngSubmit",function(){y(c);let t=h();return _(t.onSubmit())}),o(8,"mat-form-field",7)(9,"mat-label"),a(10,"Correo"),r(),g(11,"input",9),E(12,be,2,0,"mat-error",10),r(),o(13,"mat-form-field",7)(14,"mat-label"),a(15,"Contrase\xF1a"),r(),g(16,"input",11),E(17,ye,2,0,"mat-error",10),r(),g(18,"a",12),o(19,"a",13),m("click",function(){y(c);let t=h();return _(t.forgotPassword())}),a(20,"\xBFOlvidaste la contrase\xF1a?"),r()()(),o(21,"mat-card-actions")(22,"button",14),m("click",function(){y(c);let t=h();return _(t.showLoginForm=!1)}),a(23,"Cancelar"),r(),o(24,"button",15),m("click",function(){y(c);let t=h();return _(t.onSubmit())}),a(25,"Entrar"),r()()()()()}if(n&2){let c,i,t=h();f(7),w("formGroup",t.logForm),f(5),w("ngIf",((c=t.logForm.get("email"))==null?null:c.invalid)&&((c=t.logForm.get("email"))==null?null:c.touched)),f(5),w("ngIf",((i=t.logForm.get("password"))==null?null:i.invalid)&&((i=t.logForm.get("password"))==null?null:i.touched))}}var ue=(()=>{let e=class e{constructor(i,t,s,u){this.fb=i,this.router=t,this.userService=s,this.snackBar=u,this.showLoginForm=!1,this.logForm=this.fb.group({email:["",[V.required,V.email]],password:["",V.required]})}openLoginForm(){this.showLoginForm=!0}closeLoginForm(){this.showLoginForm=!1}entrar(){if(this.logForm.invalid){this.snackBar.open("Por favor, complete todos los campos correctamente.","Cerrar",{duration:3e3,panelClass:["error-snackbar"]});return}let{email:i,password:t}=this.logForm.value;console.log(`Enviando solicitud de inicio de sesi\xF3n con: email=${i}, password=${t}`),this.userService.validateUser(i,t).subscribe(s=>{console.log("Respuesta de inicio de sesi\xF3n:",s),sessionStorage.setItem("user",JSON.stringify(s.user));let u=s.TipoUsuario,d="",S="";switch(u){case"Administrador":d="/admin/registro",S="Bienvenido Administrador!";break;case"Empleado":d="/entradas/list",S="Bienvenido Empleado!";break;default:d="/entradas/perfil",S="Bienvenido Usuario!"}this.router.navigate([d]),this.snackBar.open(S,"Cerrar",{duration:3e3,panelClass:["success-snackbar"]})},s=>{console.error("Error al iniciar sesi\xF3n:",s),this.snackBar.open("Correo o contrase\xF1a incorrectos. Por favor ingrese un usuario v\xE1lido.","Cerrar",{duration:3e3,panelClass:["error-snackbar"]})})}forgotPassword(){this.router.navigate(["/auth/recovery"])}onSubmit(){this.entrar()}};e.\u0275fac=function(t){return new(t||e)(l($),l(v),l(ie),l(oe))},e.\u0275cmp=p({type:e,selectors:[["app-registropage"]],decls:8,vars:1,consts:[[1,"overlay-container"],["mat-raised-button","",1,"overlay-button",3,"click"],["class","login-form-overlay",4,"ngIf"],[1,"container"],[1,"bienvenida"],[1,"login-form-overlay"],[1,"login-form-wrapper"],[2,"width","100%"],[3,"ngSubmit","formGroup"],["matInput","","formControlName","email","required",""],[4,"ngIf"],["matInput","","type","password","formControlName","password","required",""],[1,"spacer"],[1,"forgot-password-link",3,"click"],["mat-button","","color","warn",3,"click"],["mat-button","","color","primary","type","submit",3,"click"]],template:function(t,s){t&1&&(o(0,"div",0)(1,"button",1),m("click",function(){return s.showLoginForm=!s.showLoginForm}),a(2," Iniciar Sesi\xF3n "),r()(),E(3,_e,26,3,"div",2),o(4,"div",3)(5,"div",4)(6,"h1"),a(7,"\xA1Bienvenido al Estacionamiento UTNG!"),r()()()),t&2&&(f(3),w("ngIf",s.showLoginForm))},dependencies:[Y,C,x,ae,b,D,O,B,j,re,L,R,T,I,P,N,K,Z],styles:[`

  body[_ngcontent-%COMP%] {
    background-color: #f0f0f0;
    margin: 0;
    padding: 0;
    overflow: hidden; 

    height: 100vh;
    width: 100vw;
  }

  

  .overlay-container[_ngcontent-%COMP%] {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 101;
  }

  

  .overlay-button[_ngcontent-%COMP%] {
    position: absolute;
    top: 10px;
    left: 3vw;
    z-index: 102;
    background-color: aquamarine;
  }

  

  .login-form-overlay[_ngcontent-%COMP%] {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
    backdrop-filter: blur(5px); 

  }

  

  .login-form-wrapper[_ngcontent-%COMP%] {
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    max-width: 400px; 

    width: 100%;
    box-sizing: border-box;
  }

  

  .forgot-password-link[_ngcontent-%COMP%] {
    display: block;
    text-align: right;
    color: #666;
    cursor: pointer;
  }

  

  .container[_ngcontent-%COMP%] {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }

  

  .bienvenida[_ngcontent-%COMP%] {
    text-align: center;
    background: url("https://p16-flow-sign-va.ciciai.com/ocean-cloud-tos-us/text2img/301cc93a10b12532d21262067525ab99_1720389168227440990.png~tplv-6bxrjdptv7-image-qvalue.png?rk3s=6823e3d0&x-expires=1751925168&x-signature=p2d%2BVzItAJVj2zviFvX8kW%2FLR1Q%3D") no-repeat center center fixed;
    background-size: cover;
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    overflow: hidden;
  }`]});let n=e;return n})();var fe=(()=>{let e=class e{constructor(i){this.router=i,this.code=""}onSubmit(){this.router.navigate(["/auth/thanku"])}};e.\u0275fac=function(t){return new(t||e)(l(v))},e.\u0275cmp=p({type:e,selectors:[["app-code-verificationpage"]],decls:13,vars:1,consts:[[1,"container"],[3,"ngSubmit"],["appearance","outline"],["matInput","","type","text","name","code","required","",3,"ngModelChange","ngModel"],["mat-raised-button","","color","primary","type","submit"]],template:function(t,s){t&1&&(o(0,"div",0)(1,"mat-card")(2,"mat-card-header")(3,"mat-card-title"),a(4,"Verificaci\xF3n de C\xF3digo"),r()(),o(5,"mat-card-content")(6,"form",1),m("ngSubmit",function(){return s.onSubmit()}),o(7,"mat-form-field",2)(8,"mat-label"),a(9,"C\xF3digo de verificaci\xF3n"),r(),o(10,"input",3),W("ngModelChange",function(d){return U(s.code,d)||(s.code=d),d}),r()(),o(11,"button",4),a(12,"Verificar"),r()()()()()),t&2&&(f(10),G("ngModel",s.code))},dependencies:[C,x,b,D,O,B,j,L,R,T,I,P,N,X,Q],styles:["body[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:100vh;background-color:#f0f0f0;font-family:Arial,sans-serif;margin:0}.container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:100vh}mat-card[_ngcontent-%COMP%]{width:100%;max-width:400px;padding:20px;box-shadow:0 2px 10px #0000001a}"]});let n=e;return n})();var ge=(()=>{let e=class e{constructor(i){this.router=i}goToLogin(){this.router.navigate(["/auth/registro"])}};e.\u0275fac=function(t){return new(t||e)(l(v))},e.\u0275cmp=p({type:e,selectors:[["app-thank-youpage"]],decls:9,vars:0,consts:[[1,"container"],["mat-raised-button","","color","primary",3,"click"]],template:function(t,s){t&1&&(o(0,"div",0)(1,"mat-card")(2,"mat-card-content")(3,"h2"),a(4,"\xA1Gracias!"),r(),o(5,"p"),a(6,"Tu c\xF3digo ha sido verificado exitosamente."),r(),o(7,"button",1),m("click",function(){return s.goToLogin()}),a(8,"Volver al inicio"),r()()()())},dependencies:[C,x,b],styles:["body[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:100vh;background-color:#f0f0f0;font-family:Arial,sans-serif;margin:0}.container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:100vh}mat-card[_ngcontent-%COMP%]{width:100%;max-width:400px;padding:20px;box-shadow:0 2px 10px #0000001a}"]});let n=e;return n})();var we=[{path:"",component:le,children:[{path:"registro",component:ue},{path:"recovery",component:se},{path:"verification",component:fe},{path:"thanku",component:ge},{path:"**",redirectTo:"registro"}]}],he=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=F({type:e}),e.\u0275inj=k({imports:[q.forChild(we),q]});let n=e;return n})();var tt=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=F({type:e}),e.\u0275inj=k({imports:[H,he,me,ce]});let n=e;return n})();export{tt as AuthModule};
