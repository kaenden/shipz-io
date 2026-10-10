(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=e=>Math.round(e*1e3/30),t=.05,n={sandal:0,viking:1,english:2,jonka:3,merchant:4,fort:5,goldShip:6,shark:7,kraken:8},r={ball:0,arrow:1,axe:2,rocket:3},i={[r.ball]:{speed:42,radius:.7},[r.arrow]:{speed:38,radius:.6},[r.axe]:{speed:32,radius:.8},[r.rocket]:{speed:46,radius:.8}},a={fullSalvo:0,rocketRain:1,berserk:2},o=Math.PI/180,s={[n.sandal]:{label:`Sandal`,weaponName:`Gülle`,maxHp:90,radius:2.4,handling:{maxSpeed:16.2,accel:65,decel:32,turnRate:9.5,turnThrottle:.65,cruise:.3},weapon:{projectile:r.ball,count:1,spread:0,range:26,damage:9,reload:1,interval:.35,muzzle:2.6},ram:.4,super:null},[n.viking]:{label:`Viking`,weaponName:`Balta`,maxHp:180,radius:2.8,handling:{maxSpeed:18.4,accel:76,decel:35,turnRate:10.5,turnThrottle:.7,cruise:.3},weapon:{projectile:r.axe,count:3,spread:40*o,range:15,damage:7,reload:.75,interval:.55,muzzle:2.8},ram:1.6,super:{kind:a.berserk,name:`Berserker Hücumu`,projectile:r.axe,count:0,spread:0,range:0,damage:0}},[n.english]:{label:`İngiliz`,weaponName:`Gülle`,maxHp:210,radius:3.2,handling:{maxSpeed:13.6,accel:50,decel:26,turnRate:7.4,turnThrottle:.62,cruise:.3},weapon:{projectile:r.ball,count:3,spread:9*o,range:34,damage:11,reload:1.5,interval:.95,muzzle:3.2},ram:.4,super:{kind:a.fullSalvo,name:`Tam Salvo`,projectile:r.ball,count:12,spread:70*o,range:40,damage:9}},[n.jonka]:{label:`Jonka`,weaponName:`Ateş Oku`,maxHp:165,radius:2.9,handling:{maxSpeed:15.6,accel:63,decel:30,turnRate:9,turnThrottle:.66,cruise:.3},weapon:{projectile:r.arrow,count:5,spread:36*o,range:23,damage:5,reload:1,interval:.7,muzzle:3},ram:.4,super:{kind:a.rocketRain,name:`Roket Yağmuru`,projectile:r.rocket,count:8,spread:26*o,range:46,damage:5}},[n.merchant]:{label:`Tüccar`,weaponName:``,maxHp:80,radius:3,handling:{maxSpeed:10.5,accel:32,decel:16,turnRate:4.5,turnThrottle:.5,cruise:0},weapon:null,ram:.3,super:null},[n.fort]:{label:`Kale`,weaponName:`Kale Topu`,maxHp:380,radius:5,handling:{maxSpeed:0,accel:0,decel:0,turnRate:0,turnThrottle:0,cruise:0},weapon:{projectile:r.ball,count:2,spread:8*o,range:30,damage:8,reload:2,interval:1.6,muzzle:5.5},ram:0,super:null},[n.goldShip]:{label:`Hazine Gemisi`,weaponName:``,maxHp:420,radius:3.8,handling:{maxSpeed:9,accel:24,decel:12,turnRate:3,turnThrottle:.5,cruise:0},weapon:null,ram:.3,super:null},[n.shark]:{label:`Köpekbalığı`,weaponName:`Isırık`,maxHp:45,radius:1.8,handling:{maxSpeed:16,accel:60,decel:30,turnRate:8,turnThrottle:.7,cruise:.2},weapon:null,ram:.75,ramName:`Isırık`,super:null},[n.kraken]:{label:`Kraken`,weaponName:`Dokunaç`,maxHp:2200,radius:7,handling:{maxSpeed:0,accel:0,decel:0,turnRate:0,turnThrottle:0,cruise:0},weapon:null,ram:0,super:null}},c=1e3,l=c*3,u=1.6,d=1.1,f=2.3;function p(e){return s[e]??s[n.sandal]}var m=.04,h=1.5;function g(e){return Math.min(h,1+(Math.max(1,e)-1)*m)}function _(e,t){return p(e).radius*g(t)}function v(e){return 1/Math.sqrt(g(e))}var y=[{x:90,y:90,r:13,style:`lighthouse`},{x:255,y:76,r:17,style:`jungle`},{x:305,y:84,r:16,style:`rock`},{x:465,y:95,r:21,style:`volcano`},{x:155,y:210,r:5,style:`rock`},{x:172,y:222,r:4,style:`rock`},{x:190,y:208,r:6,style:`rock`},{x:162,y:240,r:6,style:`rock`},{x:185,y:245,r:4,style:`rock`},{x:203,y:230,r:5,style:`rock`},{x:150,y:262,r:4,style:`rock`},{x:175,y:265,r:5,style:`rock`},{x:200,y:262,r:4,style:`rock`},...b(385,228,22,9,[150,190,230,270,310,350,30],`jungle`),{x:82,y:276,r:6,style:`rock`},{x:114,y:310,r:5,style:`rock`},{x:452,y:314,r:5,style:`rock`},{x:490,y:268,r:4,style:`rock`},{x:175,y:340,r:14,style:`temple`},{x:385,y:326,r:6,style:`skull`},{x:70,y:466,r:9,style:`palm`},{x:110,y:496,r:8,style:`palm`},{x:106,y:458,r:6,style:`palm`},{x:140,y:478,r:5,style:`palm`},{x:178,y:492,r:5,style:`rock`},{x:205,y:515,r:4,style:`rock`},...b(285,490,20,5,[30,90,150,210,270],`palm`),{x:448,y:460,r:4,style:`rock`},{x:488,y:492,r:5,style:`rock`}];function b(e,t,n,r,i,a){return i.map(i=>({x:Math.round((e+Math.cos(i*Math.PI/180)*n)*10)/10,y:Math.round((t+Math.sin(i*Math.PI/180)*n)*10)/10,r,style:a}))}var x=[{name:`Fener Adası`,x:90,y:90,r:36},{name:`Dar Boğaz`,x:280,y:80,r:32},{name:`Volkan Adası`,x:465,y:95,r:44},{name:`Kayalık Labirent`,x:177,y:237,r:40},{name:`Korsan Koyu`,x:385,y:228,r:36},{name:`Sis Körfezi`,x:95,y:290,r:50},{name:`Şeytan Girdabı`,x:280,y:300,r:32},{name:`Kurukafa Kalesi`,x:470,y:290,r:32},{name:`Tapınak Adası`,x:175,y:340,r:34},{name:`Canavar İskeleti`,x:385,y:340,r:32},{name:`Palmiye Adaları`,x:100,y:478,r:38},{name:`Sisli Koy`,x:190,y:500,r:38},{name:`Mercan Adası`,x:285,y:490,r:30},{name:`Batık Gemiler`,x:465,y:475,r:38}],S={graveyard:{x:465,y:475},lagoon:{x:285,y:490,r:17},cove:{x:385,y:232,r:13},skeleton:{x:385,y:326}};function C(e,t){for(let n=0;n<x.length;n++){let r=x[n];if((e-r.x)**2+(t-r.y)**2<r.r*r.r)return n}return-1}var w=[{name:`Kuzey Akıntısı`,points:[[24,190],[140,160],[280,178],[420,155],[536,175]],width:10,speed:7},{name:`Güney Akıntısı`,points:[[536,380],[420,400],[280,382],[140,402],[24,382]],width:10,speed:7}],T={x:280,y:300,r:30,spin:7,pull:2.4};function E(e,t,n){n.x=0,n.y=0;let r=e-T.x,i=t-T.y,a=Math.sqrt(r*r+i*i);if(a<T.r&&a>1e-6){let e=1-a/T.r,t=T.spin*e*Math.min(1,a/4);return n.x+=-i/a*t-r/a*T.pull*e,n.y+=r/a*t-i/a*T.pull*e,n}for(let r of w){let i=r.points,a=r.width,o=0,s=0;for(let n=0;n<i.length-1;n++){let[r,c]=i[n],[l,u]=i[n+1],d=l-r,f=u-c,p=d*d+f*f,m=Math.max(0,Math.min(1,((e-r)*d+(t-c)*f)/p)),h=Math.hypot(e-(r+d*m),t-(c+f*m));if(h<a){a=h;let e=Math.sqrt(p);o=d/e,s=f/e}}if(a<r.width){let e=r.speed*(1-(a/r.width)**2);n.x+=o*e,n.y+=s*e}}return n}var D=[{x:95,y:290,r:50},{x:190,y:500,r:38}],O=1.5;function k(e,t){for(let n of D)if((e-n.x)**2+(t-n.y)**2<n.r*n.r)return!0;return!1}function A(e,t,n,r,i){return i||!k(n,r)||(n-e)**2+(r-t)**2<196}var j={x:470,y:290,range:30},ee=[{x:S.graveyard.x,y:S.graveyard.y,r:30,weight:3},{x:T.x,y:T.y,r:7,weight:2},{x:S.lagoon.x,y:S.lagoon.y,r:11,weight:2},{x:S.cove.x,y:S.cove.y,r:9,weight:3},{x:S.skeleton.x,y:S.skeleton.y+14,r:16,weight:2},{x:95,y:290,r:42,weight:2},{x:190,y:500,r:32,weight:1},{x:177,y:237,r:30,weight:1}];function M(e,t,n=0){for(let r of y){let i=e-r.x,a=t-r.y,o=r.r+n;if(i*i+a*a<o*o)return!0}return!1}function te(e,t,n,r,i){let a=i;for(let i of y){let o=e-i.x,s=t-i.y,c=o*n+s*r,l=o*o+s*s-i.r*i.r;if(l<=0)return 0;let u=c*c-l;if(c>0||u<0)continue;let d=-c-Math.sqrt(u);d<a&&(a=d)}return a}var ne=Math.round(d*30),re=.85,ie={x:0,y:0},ae=1e3,oe=[0,400,900],se=[``,`YARIM YOL`,`TAM YOL!`],N=10,ce=25,le=.3,ue=.6,de=ae/(Math.PI/2),fe=.06,pe=.2;function me(e){return e>=oe[2]?2:+(e>=oe[1])}function he(e,t){return 1+t*e/2}var ge=Math.PI*2,_e=256,ve=(e,t,n)=>e<t?t:e>n?n:e;function ye(e){return e=(e+Math.PI)%ge,e<0&&(e+=ge),e-Math.PI}function P(e){return ge/_e*e}function be(e){let t=Math.round(e/ge*_e)%_e;return t<0?t+_e:t}function xe(e,t){return Math.max(1,Math.round(e.interval*30*100/t))}function Se(e,t){return Math.max(1,Math.round(c*t/(100*e.reload*30)))}function F(e,t,n){return e<t?Math.min(e+n,t):Math.max(e-n,t)}function Ce(e,t,n){let r=p(e.kind),i=r.handling,o=P(t.aim??0),s=0;t.act&&r.super&&e.charge>=100&&(e.charge-=100,e.shots=e.shots+1&255,s|=2,r.super.kind===a.berserk&&(e.boostTicks=ne,e.heading+=ye(o-e.heading)));let u=r.weapon;u&&(e.fireCd>0&&e.fireCd--,e.ammo<3e3&&(e.ammo=Math.min(l,e.ammo+Se(u,e.reloadPct))),t.fire&&e.fireCd===0&&e.ammo>=1e3&&(e.ammo-=c,e.fireCd=xe(u,e.ratePct),e.shots=e.shots+1&255,s|=1));let d=e.boostTicks>0,m=i.maxSpeed*(e.speedPct/100)*v(e.level),h=m*he(me(e.cruise),i.cruise)*(d?f:1),g=t.dirX/100,_=t.dirY/100,b=Math.min(1,Math.hypot(g,_)),x=d?h:0;if(!d&&b>.12){let t=ye(Math.atan2(_,g)-e.heading),r=i.turnRate*n,a=ve(t,-r,r);e.heading+=a;let o=Math.max(0,Math.cos(t-a));x=h*b*(i.turnThrottle+(1-i.turnThrottle)*o),Math.abs(t)<le&&b>=ue&&(e.cruise=Math.min(ae,e.cruise+N));let s=Math.abs(a)-fe;s>0&&(e.cruise=Math.max(0,e.cruise-Math.round(s*de)))}else d||(e.cruise=Math.max(0,e.cruise-ce));let S=!d&&e.speed>=m,C=x>e.speed?i.accel*(d?4:S?pe:1):i.decel;e.speed=F(e.speed,x,C*n),d&&e.boostTicks--,E(e.x,e.y,ie);let w=ve(e.x+(Math.cos(e.heading)*e.speed+ie.x)*n,4,556),T=ve(e.y+(Math.sin(e.heading)*e.speed+ie.y)*n,4,556);for(let t of y){let n=w-t.x,i=T-t.y,a=t.r+r.radius*.8,o=n*n+i*i;if(o<a*a){let r=Math.sqrt(o)||1e-6;w=t.x+n/r*a,T=t.y+i/r*a,e.speed*=re,e.cruise=0}}return e.x=w,e.y=T,s}var I={none:0,treasure:1,goldShip:2,sharks:3,kraken:4,eruption:5,pearls:6},we={[I.none]:{icon:``,name:``,start:``},[I.treasure]:{icon:`💰`,name:`Hazine`,start:`💰 Hazine düşüyor! Yeri haritada`},[I.goldShip]:{icon:`⛵`,name:`Hazine Gemisi`,start:`⛵ Hazine gemisi göründü — batır, ganimeti kap!`},[I.sharks]:{icon:`🦈`,name:`Köpekbalıkları`,start:`🦈 Köpekbalığı sürüsü! Yaklaşanı ısırırlar`},[I.kraken]:{icon:`🐙`,name:`Kraken`,start:`🐙 KRAKEN uyandı! Kırmızı halkadan kaç, batırana dev ganimet`},[I.eruption]:{icon:`🌋`,name:`Volkan`,start:`🌋 Volkan patlıyor! Lav yağıyor, düştüğü yerde değerli taş`},[I.pearls]:{icon:`🦪`,name:`İnciler`,start:`🦪 İnci bereketi: lagün, koy ve batıklarda inci var`}},L={crate:0,coin:1,chest:2,pearl:3,repair:4,gem:5},R={firstAfter:20,gap:18,gapSpread:14,maxActive:2,weights:{[I.treasure]:3,[I.goldShip]:2,[I.sharks]:3,[I.kraken]:2,[I.eruption]:2,[I.pearls]:2},treasure:{countdown:8,linger:30,chest:24,coins:8,coinValue:4},goldShip:{maxSeconds:80,loot:70},sharks:{count:5,seconds:60,loot:5},kraken:{seconds:100,loot:110,chest:35,reach:44,every:2.2,perVolley:2,damage:22,radius:5.5,warning:1.2},eruption:{seconds:15,every:.4,near:30,far:85,damage:20,radius:4.5,warning:1.4,gemChance:.5,gemValue:6},pearls:{count:6,value:8,seconds:45}},z={tentacle:0,lava:1},B={loot:45,respawn:45},Te={count:7,heal:30},Ee=[0,0,12,30,60,115,195,300,440,610,810,1050,1330,1660,2040,2500],De=Ee.length-1;function Oe(e){return Ee[Math.min(Math.max(e,1),De)]}function ke(e){let t=1;for(;t<De&&e>=Ee[t+1];)t++;return t}function Ae(e){return e<=3?Ne.crate:e<=5?2:1}var je=[{from:1,name:`Miço`},{from:3,name:`Tayfa`},{from:5,name:`Lostromo`},{from:7,name:`Kaptan`},{from:10,name:`Amiral`},{from:13,name:`Korsan Kralı`}];function Me(e){let t=je[0].name;for(let n of je)e>=n.from&&(t=n.name);return t}var Ne={crate:3,merchant:20,kill:10,killPerLevel:3,bullyGap:3},Pe={perLevel:.06,max:.5},Fe={minLevel:5,lootMul:1.5,killXp:25};function Ie(e){return e<=6?1:e<=10?.5:.25}var Le={hp:.06,damage:.04,heal:.15},Re=.4;function ze(){return{hpMul:1,speedPct:100,cooldownMul:1,fireRate:1,damageMul:1,rangeMul:1,regen:0,extraProjectiles:0,ramMul:1,chargeMul:1,armor:0,superMul:1,lifesteal:0}}var Be=[`A`,`B`,`C`];function Ve(e){return e+2}var He=[n.viking,n.english,n.jonka];function Ue(e){return He.includes(e)}var We=(e,t,n)=>({title:e,text:t,apply:n}),Ge=(e,t)=>We(e,`+%${t} can`,e=>{e.hpMul+=t/100}),Ke=(e,t)=>We(e,`+%${t} hasar`,e=>{e.damageMul+=t/100}),qe=(e,t)=>We(e,`+%${t} hız`,e=>{e.speedPct+=t}),Je=(e,t)=>We(e,`+%${t} menzil`,e=>{e.rangeMul+=t/100}),Ye=e=>We(e,`Cephane %15 hızlı dolar`,e=>{e.cooldownMul*=.85}),Xe=e=>We(e,`Atışlar arası bekleme −%40`,e=>{e.fireRate/=.6}),Ze=(e,t)=>We(e,`Süper %${t} hızlı dolar`,e=>{e.chargeMul+=t/100}),Qe=e=>We(e,`Saniyede 3 can onarır`,e=>{e.regen+=3}),$e=e=>We(e,`Alınan hasar −%10`,e=>{e.armor+=.1}),et=e=>We(e,`Verdiğin hasarın %12'si can olur`,e=>{e.lifesteal+=.12}),tt=e=>We(e,`Süper hasarı +%30`,e=>{e.superMul+=.3}),nt=(e,t,n)=>We(e,`+${t} ${n}`,e=>{e.extraProjectiles+=t}),rt=(e,t)=>We(e,`+%${t} çarpma hasarı`,e=>{e.ramMul+=t/100}),it={[n.viking]:[[Ge(`Kalın Kalkanlar`,20),Ke(`Keskin Baltalar`,15),qe(`Kürekçiler`,8)],[rt(`Demir Mahmuz`,40),nt(`Çift Balta`,1,`balta`),Ye(`Hızlı Kollar`)],[Ze(`Savaş Narası`,25),et(`Kan Dökücü`),$e(`Zırhlı Pruva`)],[Ge(`Ağır Gövde`,25),Je(`Uzun Sap`,15),qe(`Rüzgâr Ruhu`,10)],[Qe(`Usta Tayfa`),Xe(`Seri Balta`),rt(`Koç Başı`,60)],[Ge(`Ejder Kanı`,30),nt(`Balta Yağmuru`,2,`balta`),Ze(`Öfke`,35)]],[n.english]:[[Ge(`Meşe Gövde`,20),Ke(`Ağır Gülle`,15),Je(`Dürbün`,15)],[nt(`Ek Top`,1,`gülle`),Ye(`Hızlı Dolum`),$e(`Bakır Kaplama`)],[Ze(`Talimli Topçular`,25),Qe(`Usta Tayfa`),qe(`Yelken Takımı`,10)],[Ge(`Kale Gövde`,25),Ke(`Zincirli Gülle`,20),Je(`Gözcü Kulesi`,15)],[tt(`Barut Fıçıları`),nt(`Ek Top II`,1,`gülle`),Xe(`Seri Atış`)],[Ge(`Amiral Gemisi`,30),Ke(`Ağır Salvo`,20),nt(`Çifte Batarya`,2,`gülle`)]],[n.jonka]:[[Ge(`Bambu Zırh`,20),Ke(`Ateşli Oklar`,15),qe(`Yelpaze Yelken`,8)],[nt(`Geniş Yelpaze`,2,`ok`),Ye(`Hızlı Dolum`),Je(`Uzun Yay`,15)],[Ze(`Ejder Ruhu`,25),Qe(`Şifacı`),qe(`Kaçak Rüzgâr`,10)],[Ge(`Lake Gövde`,25),Ke(`Yanıcı Reçine`,20),et(`Can Çalan Oklar`)],[tt(`Roket Ustası`),Xe(`Seri Ok`),$e(`Bambu Kalkan`)],[Ge(`İmparator Jonkası`,30),Ke(`Ateş Fırtınası`,20),Ye(`Hızlı Dolum II`)]]};function at(){return[,,,,,,].fill(0)}function ot(e){let t=at();if(!Array.isArray(e))return t;for(let n=0;n<6;n++){let r=Number(e[n]);Number.isInteger(r)&&r>=0&&r<=2&&(t[n]=r)}return t}function st(e,t,n){if(n<2||!Ue(e))return null;let r=n-2;return r>=6?null:it[e][r][t[r]??0]}function ct(){return at().map(()=>Math.floor(Math.random()*3))}var lt=1e3,ut=1001,dt=1002,ft=1003,pt=1004,mt=1005,ht=1006,gt=1007,_t=1008,vt=1009,yt=1010,bt=1011,xt=1012,St=1013,Ct=1014,wt=1015,Tt=1016,Et=1017,Dt=1018,Ot=1020,kt=35902,At=35899,jt=1021,Mt=1022,Nt=1023,Pt=1026,Ft=1027,It=1028,Lt=1029,Rt=1030,zt=1031,Bt=1033,Vt=33776,Ht=33777,Ut=33778,Wt=33779,Gt=35840,Kt=35841,qt=35842,Jt=35843,Yt=36196,Xt=37492,Zt=37496,Qt=37488,$t=37489,en=37490,tn=37491,nn=37808,rn=37809,an=37810,on=37811,sn=37812,cn=37813,ln=37814,un=37815,dn=37816,fn=37817,pn=37818,mn=37819,hn=37820,gn=37821,_n=36492,vn=36494,yn=36495,bn=36283,xn=36284,Sn=36285,Cn=36286,wn=2300,Tn=2301,En=2302,Dn=2303,On=2400,kn=2401,An=2402,jn=3200,Mn=`srgb`,Nn=`srgb-linear`,Pn=`linear`,Fn=`srgb`,In=7680,Ln=35044,Rn=35048,zn=2e3;function Bn(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Vn(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Hn(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function Un(){let e=Hn(`canvas`);return e.style.display=`block`,e}var Wn={};function Gn(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function Kn(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function V(...e){e=Kn(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function H(...e){e=Kn(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function qn(...e){let t=e.join(` `);t in Wn||(Wn[t]=!0,V(...e))}function Jn(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var Yn={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},Xn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},Zn=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),Qn=Math.PI/180,$n=180/Math.PI;function er(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Zn[e&255]+Zn[e>>8&255]+Zn[e>>16&255]+Zn[e>>24&255]+`-`+Zn[t&255]+Zn[t>>8&255]+`-`+Zn[t>>16&15|64]+Zn[t>>24&255]+`-`+Zn[n&63|128]+Zn[n>>8&255]+`-`+Zn[n>>16&255]+Zn[n>>24&255]+Zn[r&255]+Zn[r>>8&255]+Zn[r>>16&255]+Zn[r>>24&255]).toLowerCase()}function tr(e,t,n){return Math.max(t,Math.min(n,e))}function nr(e,t){return(e%t+t)%t}function rr(e,t,n){return(1-n)*e+n*t}function ir(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}function ar(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}var U=class e{static{e.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=tr(this.x,e.x,t.x),this.y=tr(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=tr(this.x,e,t),this.y=tr(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(tr(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(tr(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},or=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:V(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tr(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},W=class e{static{e.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(cr.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(cr.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=tr(this.x,e.x,t.x),this.y=tr(this.y,e.y,t.y),this.z=tr(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=tr(this.x,e,t),this.y=tr(this.y,e,t),this.z=tr(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(tr(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return sr.copy(this).projectOnVector(e),this.sub(sr)}reflect(e){return this.sub(sr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(tr(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},sr=new W,cr=new or,G=class e{static{e.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return qn(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(lr.makeScale(e,t)),this}rotate(e){return qn(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(lr.makeRotation(-e)),this}translate(e,t){return qn(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(lr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},lr=new G,ur=new G().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),dr=new G().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function fr(){let e={enabled:!0,workingColorSpace:Nn,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=mr(e.r),e.g=mr(e.g),e.b=mr(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=hr(e.r),e.g=hr(e.g),e.b=hr(e.b))),e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?Pn:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return qn(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return qn(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[Nn]:{primaries:t,whitePoint:r,transfer:Pn,toXYZ:ur,fromXYZ:dr,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Mn},outputColorSpaceConfig:{drawingBufferColorSpace:Mn}},[Mn]:{primaries:t,whitePoint:r,transfer:Fn,toXYZ:ur,fromXYZ:dr,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Mn}}}),e}var pr=fr();function mr(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function hr(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var gr,_r=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{gr===void 0&&(gr=Hn(`canvas`)),gr.width=e.width,gr.height=e.height;let t=gr.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=gr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=Hn(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=mr(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(mr(t[e]/255)*255):t[e]=mr(t[e]);return{data:t,width:e.width,height:e.height}}return V(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},vr=0,yr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:vr++}),this.uuid=er(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(br(r[t].image)):e.push(br(r[t]))}else e=br(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function br(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?_r.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(V(`Texture: Unable to serialize Texture.`),{})}var xr=0,Sr=new W,Cr=class e extends Xn{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=ut,i=ut,a=ht,o=_t,s=Nt,c=vt,l=e.DEFAULT_ANISOTROPY,u=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xr++}),this.uuid=er(),this.name=``,this.source=new yr(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new U(0,0),this.repeat=new U(1,1),this.center=new U(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new G,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Sr).x}get height(){return this.source.getSize(Sr).y}get depth(){return this.source.getSize(Sr).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){V(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?V(`Texture.setValues(): property '${t}' does not exist.`):r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case lt:e.x-=Math.floor(e.x);break;case ut:e.x=e.x<0?0:1;break;case dt:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case lt:e.y-=Math.floor(e.y);break;case ut:e.y=e.y<0?0:1;break;case dt:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Cr.DEFAULT_IMAGE=null,Cr.DEFAULT_MAPPING=300,Cr.DEFAULT_ANISOTROPY=1;var wr=class e{static{e.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=tr(this.x,e.x,t.x),this.y=tr(this.y,e.y,t.y),this.z=tr(this.z,e.z,t.z),this.w=tr(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=tr(this.x,e,t),this.y=tr(this.y,e,t),this.z=tr(this.z,e,t),this.w=tr(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(tr(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Tr=class extends Xn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ht,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new wr(0,0,e,t),this.scissorTest=!1,this.viewport=new wr(0,0,e,t),this.textures=[];let r=new Cr({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:ht,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new yr(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},Er=class extends Tr{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Dr=class extends Cr{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=ft,this.minFilter=ft,this.wrapR=ut,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Or=class extends Cr{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=ft,this.minFilter=ft,this.wrapR=ut,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},kr=class e{static{e.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/Ar.setFromMatrixColumn(e,0).length(),i=1/Ar.setFromMatrixColumn(e,1).length(),a=1/Ar.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Mr,e,Nr)}lookAt(e,t,n){let r=this.elements;return Ir.subVectors(e,t),Ir.lengthSq()===0&&(Ir.z=1),Ir.normalize(),Pr.crossVectors(n,Ir),Pr.lengthSq()===0&&(Math.abs(n.z)===1?Ir.x+=1e-4:Ir.z+=1e-4,Ir.normalize(),Pr.crossVectors(n,Ir)),Pr.normalize(),Fr.crossVectors(Ir,Pr),r[0]=Pr.x,r[4]=Fr.x,r[8]=Ir.x,r[1]=Pr.y,r[5]=Fr.y,r[9]=Ir.y,r[2]=Pr.z,r[6]=Fr.z,r[10]=Ir.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],j=r[10],ee=r[14],M=r[3],te=r[7],ne=r[11],re=r[15];return i[0]=a*x+o*T+s*k+c*M,i[4]=a*S+o*E+s*A+c*te,i[8]=a*C+o*D+s*j+c*ne,i[12]=a*w+o*O+s*ee+c*re,i[1]=l*x+u*T+d*k+f*M,i[5]=l*S+u*E+d*A+f*te,i[9]=l*C+u*D+d*j+f*ne,i[13]=l*w+u*O+d*ee+f*re,i[2]=p*x+m*T+h*k+g*M,i[6]=p*S+m*E+h*A+g*te,i[10]=p*C+m*D+h*j+g*ne,i[14]=p*w+m*O+h*ee+g*re,i[3]=_*x+v*T+y*k+b*M,i[7]=_*S+v*E+y*A+b*te,i[11]=_*C+v*D+y*j+b*ne,i[15]=_*w+v*O+y*ee+b*re,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=Ar.set(r[0],r[1],r[2]).length(),o=Ar.set(r[4],r[5],r[6]).length(),s=Ar.set(r[8],r[9],r[10]).length();i<0&&(a=-a),jr.copy(this);let c=1/a,l=1/o,u=1/s;return jr.elements[0]*=c,jr.elements[1]*=c,jr.elements[2]*=c,jr.elements[4]*=l,jr.elements[5]*=l,jr.elements[6]*=l,jr.elements[8]*=u,jr.elements[9]*=u,jr.elements[10]*=u,t.setFromRotationMatrix(jr),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=zn,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=zn,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Ar=new W,jr=new kr,Mr=new W(0,0,0),Nr=new W(1,1,1),Pr=new W,Fr=new W,Ir=new W,Lr=new kr,Rr=new or,zr=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(tr(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-tr(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(tr(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-tr(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(tr(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-tr(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:V(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Lr.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Lr,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Rr.setFromEuler(this),this.setFromQuaternion(Rr,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};zr.DEFAULT_ORDER=`XYZ`;var Br=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},Vr=0,Hr=new W,Ur=new or,Wr=new kr,Gr=new W,Kr=new W,qr=new W,Jr=new or,Yr=new W(1,0,0),Xr=new W(0,1,0),Zr=new W(0,0,1),Qr={type:`added`},$r={type:`removed`},ei={type:`childadded`,child:null},ti={type:`childremoved`,child:null},ni=class e extends Xn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vr++}),this.uuid=er(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new W,n=new zr,r=new or,i=new W(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new kr},normalMatrix:{value:new G}}),this.matrix=new kr,this.matrixWorld=new kr,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Br,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ur.setFromAxisAngle(e,t),this.quaternion.multiply(Ur),this}rotateOnWorldAxis(e,t){return Ur.setFromAxisAngle(e,t),this.quaternion.premultiply(Ur),this}rotateX(e){return this.rotateOnAxis(Yr,e)}rotateY(e){return this.rotateOnAxis(Xr,e)}rotateZ(e){return this.rotateOnAxis(Zr,e)}translateOnAxis(e,t){return Hr.copy(e).applyQuaternion(this.quaternion),this.position.add(Hr.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Yr,e)}translateY(e){return this.translateOnAxis(Xr,e)}translateZ(e){return this.translateOnAxis(Zr,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Wr.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Gr.copy(e):Gr.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Kr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wr.lookAt(Kr,Gr,this.up):Wr.lookAt(Gr,Kr,this.up),this.quaternion.setFromRotationMatrix(Wr),r&&(Wr.extractRotation(r.matrixWorld),Ur.setFromRotationMatrix(Wr),this.quaternion.premultiply(Ur.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(H(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Qr),ei.child=e,this.dispatchEvent(ei),ei.child=null):H(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent($r),ti.child=e,this.dispatchEvent(ti),ti.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Wr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Wr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Wr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Qr),ei.child=e,this.dispatchEvent(ei),ei.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kr,e,qr),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kr,Jr,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};ni.DEFAULT_UP=new W(0,1,0),ni.DEFAULT_MATRIX_AUTO_UPDATE=!0,ni.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ri=class extends ni{constructor(){super(),this.isGroup=!0,this.type=`Group`}},ii={type:`move`},ai=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ri,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ri,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ri,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ii)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ri;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},oi={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},si={h:0,s:0,l:0},ci={h:0,s:0,l:0};function li(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var K=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Mn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,pr.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=pr.workingColorSpace){return this.r=e,this.g=t,this.b=n,pr.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=pr.workingColorSpace){if(e=nr(e,1),t=tr(t,0,1),n=tr(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=li(i,r,e+1/3),this.g=li(i,r,e),this.b=li(i,r,e-1/3)}return pr.colorSpaceToWorking(this,r),this}setStyle(e,t=Mn){function n(t){t!==void 0&&parseFloat(t)<1&&V(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:V(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);V(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Mn){let n=oi[e.toLowerCase()];return n===void 0?V(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=mr(e.r),this.g=mr(e.g),this.b=mr(e.b),this}copyLinearToSRGB(e){return this.r=hr(e.r),this.g=hr(e.g),this.b=hr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mn){return pr.workingToColorSpace(ui.copy(this),e),Math.round(tr(ui.r*255,0,255))*65536+Math.round(tr(ui.g*255,0,255))*256+Math.round(tr(ui.b*255,0,255))}getHexString(e=Mn){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=pr.workingColorSpace){pr.workingToColorSpace(ui.copy(this),t);let n=ui.r,r=ui.g,i=ui.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=pr.workingColorSpace){return pr.workingToColorSpace(ui.copy(this),t),e.r=ui.r,e.g=ui.g,e.b=ui.b,e}getStyle(e=Mn){pr.workingToColorSpace(ui.copy(this),e);let t=ui.r,n=ui.g,r=ui.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(si),this.setHSL(si.h+e,si.s+t,si.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(si),e.getHSL(ci);let n=rr(si.h,ci.h,t),r=rr(si.s,ci.s,t),i=rr(si.l,ci.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ui=new K;K.NAMES=oi;var di=class extends ni{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zr,this.environmentIntensity=1,this.environmentRotation=new zr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},fi=new W,pi=new W,mi=new W,hi=new W,gi=new W,_i=new W,vi=new W,yi=new W,bi=new W,xi=new W,Si=new wr,Ci=new wr,wi=new wr,Ti=class e{constructor(e=new W,t=new W,n=new W){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),fi.subVectors(e,t),r.cross(fi);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){fi.subVectors(r,t),pi.subVectors(n,t),mi.subVectors(e,t);let a=fi.dot(fi),o=fi.dot(pi),s=fi.dot(mi),c=pi.dot(pi),l=pi.dot(mi),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,hi)!==null&&hi.x>=0&&hi.y>=0&&hi.x+hi.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,hi)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,hi.x),s.addScaledVector(a,hi.y),s.addScaledVector(o,hi.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return Si.setScalar(0),Ci.setScalar(0),wi.setScalar(0),Si.fromBufferAttribute(e,t),Ci.fromBufferAttribute(e,n),wi.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Si,i.x),a.addScaledVector(Ci,i.y),a.addScaledVector(wi,i.z),a}static isFrontFacing(e,t,n,r){return fi.subVectors(n,t),pi.subVectors(e,t),fi.cross(pi).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return fi.subVectors(this.c,this.b),pi.subVectors(this.a,this.b),fi.cross(pi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;gi.subVectors(r,n),_i.subVectors(i,n),yi.subVectors(e,n);let s=gi.dot(yi),c=_i.dot(yi);if(s<=0&&c<=0)return t.copy(n);bi.subVectors(e,r);let l=gi.dot(bi),u=_i.dot(bi);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(gi,a);xi.subVectors(e,i);let f=gi.dot(xi),p=_i.dot(xi);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(_i,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return vi.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(vi,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(gi,a).addScaledVector(_i,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ei=class{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Oi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Oi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Oi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,Oi):Oi.fromBufferAttribute(r,t),Oi.applyMatrix4(e.matrixWorld),this.expandByPoint(Oi);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),ki.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),ki.copy(e.boundingBox)),ki.applyMatrix4(e.matrixWorld),this.union(ki)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Oi),Oi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ii),Li.subVectors(this.max,Ii),Ai.subVectors(e.a,Ii),ji.subVectors(e.b,Ii),Mi.subVectors(e.c,Ii),Ni.subVectors(ji,Ai),Pi.subVectors(Mi,ji),Fi.subVectors(Ai,Mi);let t=[0,-Ni.z,Ni.y,0,-Pi.z,Pi.y,0,-Fi.z,Fi.y,Ni.z,0,-Ni.x,Pi.z,0,-Pi.x,Fi.z,0,-Fi.x,-Ni.y,Ni.x,0,-Pi.y,Pi.x,0,-Fi.y,Fi.x,0];return!Bi(t,Ai,ji,Mi,Li)||(t=[1,0,0,0,1,0,0,0,1],!Bi(t,Ai,ji,Mi,Li))?!1:(Ri.crossVectors(Ni,Pi),t=[Ri.x,Ri.y,Ri.z],Bi(t,Ai,ji,Mi,Li))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Oi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Oi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Di)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Di=[new W,new W,new W,new W,new W,new W,new W,new W],Oi=new W,ki=new Ei,Ai=new W,ji=new W,Mi=new W,Ni=new W,Pi=new W,Fi=new W,Ii=new W,Li=new W,Ri=new W,zi=new W;function Bi(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){zi.fromArray(e,a);let o=i.x*Math.abs(zi.x)+i.y*Math.abs(zi.y)+i.z*Math.abs(zi.z),s=t.dot(zi),c=n.dot(zi),l=r.dot(zi);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var Vi=new W,Hi=new U,Ui=0,Wi=class extends Xn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ui++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=Ln,this.updateRanges=[],this.gpuType=wt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Hi.fromBufferAttribute(this,t),Hi.applyMatrix3(e),this.setXY(t,Hi.x,Hi.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Vi.fromBufferAttribute(this,t),Vi.applyMatrix3(e),this.setXYZ(t,Vi.x,Vi.y,Vi.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Vi.fromBufferAttribute(this,t),Vi.applyMatrix4(e),this.setXYZ(t,Vi.x,Vi.y,Vi.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Vi.fromBufferAttribute(this,t),Vi.applyNormalMatrix(e),this.setXYZ(t,Vi.x,Vi.y,Vi.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Vi.fromBufferAttribute(this,t),Vi.transformDirection(e),this.setXYZ(t,Vi.x,Vi.y,Vi.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ir(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ar(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ir(t,this.array)),t}setX(e,t){return this.normalized&&(t=ar(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ir(t,this.array)),t}setY(e,t){return this.normalized&&(t=ar(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ir(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ar(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ir(t,this.array)),t}setW(e,t){return this.normalized&&(t=ar(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ar(t,this.array),n=ar(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=ar(t,this.array),n=ar(n,this.array),r=ar(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=ar(t,this.array),n=ar(n,this.array),r=ar(r,this.array),i=ar(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}},Gi=class extends Wi{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Ki=class extends Wi{constructor(e,t,n){super(new Uint32Array(e),t,n)}},qi=class extends Wi{constructor(e,t,n){super(new Float32Array(e),t,n)}},Ji=new Ei,Yi=new W,Xi=new W,Zi=class{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?Ji.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Yi.subVectors(e,this.center);let t=Yi.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(Yi,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Xi.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Yi.copy(e.center).add(Xi)),this.expandByPoint(Yi.copy(e.center).sub(Xi))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Qi=0,$i=new kr,ea=new ni,ta=new W,na=new Ei,ra=new Ei,ia=new W,aa=class e extends Xn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qi++}),this.uuid=er(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(Bn(e)?Ki:Gi)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new G().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return $i.makeRotationFromQuaternion(e),this.applyMatrix4($i),this}rotateX(e){return $i.makeRotationX(e),this.applyMatrix4($i),this}rotateY(e){return $i.makeRotationY(e),this.applyMatrix4($i),this}rotateZ(e){return $i.makeRotationZ(e),this.applyMatrix4($i),this}translate(e,t,n){return $i.makeTranslation(e,t,n),this.applyMatrix4($i),this}scale(e,t,n){return $i.makeScale(e,t,n),this.applyMatrix4($i),this}lookAt(e){return ea.lookAt(e),ea.updateMatrix(),this.applyMatrix4(ea.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ta).negate(),this.translate(ta.x,ta.y,ta.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new qi(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&V(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ei);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)H(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];na.setFromBufferAttribute(n),this.morphTargetsRelative?(ia.addVectors(this.boundingBox.min,na.min),this.boundingBox.expandByPoint(ia),ia.addVectors(this.boundingBox.max,na.max),this.boundingBox.expandByPoint(ia)):(this.boundingBox.expandByPoint(na.min),this.boundingBox.expandByPoint(na.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&H(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)H(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new W,1/0);else if(e){let n=this.boundingSphere.center;if(na.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];ra.setFromBufferAttribute(n),this.morphTargetsRelative?(ia.addVectors(na.min,ra.min),na.expandByPoint(ia),ia.addVectors(na.max,ra.max),na.expandByPoint(ia)):(na.expandByPoint(ra.min),na.expandByPoint(ra.max))}na.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)ia.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(ia));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)ia.fromBufferAttribute(a,t),o&&(ta.fromBufferAttribute(e,t),ia.add(ta)),r=Math.max(r,n.distanceToSquared(ia))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&H(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){H(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new Wi(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new W,s[e]=new W;let c=new W,l=new W,u=new W,d=new U,f=new U,p=new U,m=new W,h=new W;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new W,y=new W,b=new W,x=new W;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new Wi(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new W,i=new W,a=new W,o=new W,s=new W,c=new W,l=new W,u=new W;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ia.fromBufferAttribute(e,t),ia.normalize(),e.setXYZ(t,ia.x,ia.y,ia.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new Wi(a,r,i)}if(this.index===null)return V(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},oa=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e===void 0?0:e.length/t,this.usage=Ln,this.updateRanges=[],this.version=0,this.uuid=er()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,i=this.stride;r<i;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=er()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=er()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},sa=new W,ca=class e{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name=``,this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)sa.fromBufferAttribute(this,t),sa.applyMatrix4(e),this.setXYZ(t,sa.x,sa.y,sa.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)sa.fromBufferAttribute(this,t),sa.applyNormalMatrix(e),this.setXYZ(t,sa.x,sa.y,sa.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)sa.fromBufferAttribute(this,t),sa.transformDirection(e),this.setXYZ(t,sa.x,sa.y,sa.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=ir(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ar(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ar(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ar(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ar(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ar(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ir(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ir(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ir(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ir(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ar(t,this.array),n=ar(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ar(t,this.array),n=ar(n,this.array),r=ar(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ar(t,this.array),n=ar(n,this.array),r=ar(r,this.array),i=ar(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=i,this}clone(t){if(t===void 0){Gn(`InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return new Wi(new this.array.constructor(e),this.itemSize,this.normalized)}return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new e(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Gn(`InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},la=new W,ua=new W,da=new G,fa=class{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=la.subVectors(n,t).cross(ua.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(la),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||da.getNormalMatrix(e),r=this.coplanarPoint(la).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},pa=0,ma=class extends Xn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pa++}),this.uuid=er(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new K(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=In,this.stencilZFail=In,this.stencilZPass=In,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){V(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?V(`Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new K().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new fa().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new U().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new U().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},ha=class extends ma{constructor(e){super(),this.isSpriteMaterial=!0,this.type=`SpriteMaterial`,this.color=new K(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ga,_a=new W,va=new W,ya=new W,ba=new U,xa=new U,Sa=new kr,Ca=new W,wa=new W,Ta=new W,Ea=new U,Da=new U,Oa=new U,ka=class extends ni{constructor(e=new ha){if(super(),this.isSprite=!0,this.type=`Sprite`,ga===void 0){ga=new aa;let e=new oa(new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),5);ga.setIndex([0,1,2,0,2,3]),ga.setAttribute(`position`,new ca(e,3,0,!1)),ga.setAttribute(`uv`,new ca(e,2,3,!1))}this.geometry=ga,this.material=e,this.center=new U(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&H(`Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.`),va.setFromMatrixScale(this.matrixWorld),Sa.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ya.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&va.multiplyScalar(-ya.z);let n=this.material.rotation,r,i;n!==0&&(i=Math.cos(n),r=Math.sin(n));let a=this.center;Aa(Ca.set(-.5,-.5,0),ya,a,va,r,i),Aa(wa.set(.5,-.5,0),ya,a,va,r,i),Aa(Ta.set(.5,.5,0),ya,a,va,r,i),Ea.set(0,0),Da.set(1,0),Oa.set(1,1);let o=e.ray.intersectTriangle(Ca,wa,Ta,!1,_a);if(o===null&&(Aa(wa.set(-.5,.5,0),ya,a,va,r,i),Da.set(0,1),o=e.ray.intersectTriangle(Ca,Ta,wa,!1,_a),o===null))return;let s=e.ray.origin.distanceTo(_a);s<e.near||s>e.far||t.push({distance:s,point:_a.clone(),uv:Ti.getInterpolation(_a,Ca,wa,Ta,Ea,Da,Oa,new U),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Aa(e,t,n,r,i,a){ba.subVectors(e,n).addScalar(.5).multiply(r),i===void 0?xa.copy(ba):(xa.x=a*ba.x-i*ba.y,xa.y=i*ba.x+a*ba.y),e.copy(t),e.x+=xa.x,e.y+=xa.y,e.applyMatrix4(Sa)}var ja=new W,Ma=new W,Na=new W,Pa=new W,Fa=class{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ja)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ja.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ja.copy(this.origin).addScaledVector(this.direction,t),ja.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Ma.copy(e).add(t).multiplyScalar(.5),Na.copy(t).sub(e).normalize(),Pa.copy(this.origin).sub(Ma);let i=e.distanceTo(t)*.5,a=-this.direction.dot(Na),o=Pa.dot(this.direction),s=-Pa.dot(Na),c=Pa.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Ma).addScaledVector(Na,d),f}intersectSphere(e,t){if(e.radius<0)return null;ja.subVectors(e.center,this.origin);let n=ja.dot(this.direction),r=ja.dot(ja)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,ja)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,k,A,j,ee,M;if(y>=b&&y>=x?(w=s,D=u,A=p,M=g,s>=0?(S=c,C=l,T=d,E=f,O=m,k=h,j=_,ee=v):(S=l,C=c,T=f,E=d,O=h,k=m,j=v,ee=_)):b>=x?(w=c,D=d,A=m,M=_,c>=0?(S=l,C=s,T=f,E=u,O=h,k=p,j=v,ee=g):(S=s,C=l,T=u,E=f,O=p,k=h,j=g,ee=v)):(w=l,D=f,A=h,M=v,l>=0?(S=s,C=c,T=u,E=d,O=p,k=m,j=g,ee=_):(S=c,C=s,T=d,E=u,O=m,k=p,j=_,ee=g)),w===0)return null;let te=S/w,ne=C/w,re=1/w,ie=T-te*D,ae=E-ne*D,oe=O-te*A,se=k-ne*A,N=j-te*M,ce=ee-ne*M,le=N*se-ce*oe,ue=ie*ce-ae*N,de=oe*ae-se*ie;if(r){if(le<0||ue<0||de<0)return null}else if((le<0||ue<0||de<0)&&(le>0||ue>0||de>0))return null;let fe=le+ue+de;if(fe===0)return null;let pe=re*(le*D+ue*A+de*M);return(fe>0?pe<0:pe>0)?null:this.at(pe/fe,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ia=class extends ma{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new K(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zr,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},La=new kr,Ra=new Fa,za=new Zi,Ba=new W,Va=new W,Ha=new W,Ua=new W,Wa=new W,Ga=new W,Ka=new W,qa=new W,q=class extends ni{constructor(e=new aa,t=new Ia){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){Ga.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(Wa.fromBufferAttribute(s,e),a?Ga.addScaledVector(Wa,r):Ga.addScaledVector(Wa.sub(t),r))}t.add(Ga)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),za.copy(n.boundingSphere),za.applyMatrix4(i),Ra.copy(e.ray).recast(e.near),!(za.containsPoint(Ra.origin)===!1&&(Ra.intersectSphere(za,Ba)===null||Ra.origin.distanceToSquared(Ba)>(e.far-e.near)**2))&&(La.copy(i).invert(),Ra.copy(e.ray).applyMatrix4(La),(n.boundingBox===null||Ra.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,Ra)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=Ya(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=Ya(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=Ya(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=Ya(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function Ja(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;qa.copy(s),qa.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(qa);return l<n.near||l>n.far?null:{distance:l,point:qa.clone(),object:e}}function Ya(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,Va),e.getVertexPosition(c,Ha),e.getVertexPosition(l,Ua);let u=Ja(e,t,n,r,Va,Ha,Ua,Ka);if(u){let e=new W;Ti.getBarycoord(Ka,Va,Ha,Ua,e),i&&(u.uv=Ti.getInterpolatedAttribute(i,s,c,l,e,new U)),a&&(u.uv1=Ti.getInterpolatedAttribute(a,s,c,l,e,new U)),o&&(u.normal=Ti.getInterpolatedAttribute(o,s,c,l,e,new W),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new W,materialIndex:0};Ti.getNormal(Va,Ha,Ua,t.normal),u.face=t,u.barycoord=e}return u}var Xa=class extends Cr{constructor(e=null,t=1,n=1,r,i,a,o,s,c=ft,l=ft,u,d){super(null,a,o,s,c,l,r,i,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Za=class extends Wi{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Qa=new kr,$a=new kr,eo=[],to=new Ei,no=new kr,ro=new q,io=new Zi,ao=class extends q{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Za(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,no)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ei),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Qa),to.copy(e.boundingBox).applyMatrix4(Qa),this.boundingBox.union(to)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Zi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Qa),io.copy(e.boundingSphere).applyMatrix4(Qa),this.boundingSphere.union(io)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(ro.geometry=this.geometry,ro.material=this.material,ro.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),io.copy(this.boundingSphere),io.applyMatrix4(n),e.ray.intersectsSphere(io)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,Qa),$a.multiplyMatrices(n,Qa),ro.matrixWorld=$a,ro.raycast(e,eo);for(let e=0,n=eo.length;e<n;e++){let n=eo[e];n.instanceId=i,n.object=this,t.push(n)}eo.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Za(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Xa(new Float32Array(r*this.count),r,this.count,It,wt));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},oo=new Zi,so=new U(.5,.5),co=new W,lo=class{constructor(e=new fa,t=new fa,n=new fa,r=new fa,i=new fa,a=new fa){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=zn,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),oo.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),oo.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(oo)}intersectsSprite(e){return oo.center.set(0,0,0),oo.radius=.7071067811865476+so.distanceTo(e.center),oo.applyMatrix4(e.matrixWorld),this.intersectsSphere(oo)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(co.x=r.normal.x>0?e.max.x:e.min.x,co.y=r.normal.y>0?e.max.y:e.min.y,co.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(co)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},uo=class extends ma{constructor(e){super(),this.isLineBasicMaterial=!0,this.type=`LineBasicMaterial`,this.color=new K(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},fo=new W,po=new W,mo=new kr,ho=new Fa,go=new Zi,_o=new W,vo=new W,yo=class extends ni{constructor(e=new aa,t=new uo){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,r=t.count;e<r;e++)fo.fromBufferAttribute(t,e-1),po.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=fo.distanceTo(po);e.setAttribute(`lineDistance`,new qi(n,1))}else V(`Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),go.copy(n.boundingSphere),go.applyMatrix4(r),go.radius+=i,e.ray.intersectsSphere(go)===!1)return;mo.copy(r).invert(),ho.copy(e.ray).applyMatrix4(mo);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=this.isLineSegments?2:1,l=n.index,u=n.attributes.position;if(l!==null){let n=Math.max(0,a.start),r=Math.min(l.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=l.getX(i),r=l.getX(i+1),a=bo(this,e,ho,s,n,r,i);a&&t.push(a)}if(this.isLineLoop){let i=l.getX(r-1),a=l.getX(n),o=bo(this,e,ho,s,i,a,r-1);o&&t.push(o)}}else{let n=Math.max(0,a.start),r=Math.min(u.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=bo(this,e,ho,s,i,i+1,i);n&&t.push(n)}if(this.isLineLoop){let i=bo(this,e,ho,s,r-1,n,r-1);i&&t.push(i)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function bo(e,t,n,r,i,a,o){let s=e.geometry.attributes.position;if(fo.fromBufferAttribute(s,i),po.fromBufferAttribute(s,a),n.distanceSqToSegment(fo,po,_o,vo)>r)return;_o.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(_o);if(!(c<t.near||c>t.far))return{distance:c,point:vo.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}var xo=new W,So=new W,Co=class extends yo{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type=`LineSegments`}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let e=0,r=t.count;e<r;e+=2)xo.fromBufferAttribute(t,e),So.fromBufferAttribute(t,e+1),n[e]=e===0?0:n[e-1],n[e+1]=n[e]+xo.distanceTo(So);e.setAttribute(`lineDistance`,new qi(n,1))}else V(`LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}},wo=class extends yo{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type=`LineLoop`}},To=class extends Cr{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Eo=class extends Cr{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Do=class extends Cr{constructor(e,t,n=Ct,r,i,a,o=ft,s=ft,c,l=Pt,u=1){if(l!==1026&&l!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:u},r,i,a,o,s,l,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new yr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Oo=class extends Do{constructor(e,t=Ct,n=301,r,i,a=ft,o=ft,s,c=Pt){let l={width:e,height:e,depth:1},u=[l,l,l,l,l,l];super(e,e,t,n,r,i,a,o,s,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ko=class extends Cr{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ao=class e extends aa{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new qi(c,3)),this.setAttribute(`normal`,new qi(l,3)),this.setAttribute(`uv`,new qi(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new W;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},jo=class e extends aa{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new W,l=new U;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new qi(a,3)),this.setAttribute(`normal`,new qi(o,3)),this.setAttribute(`uv`,new qi(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Mo=class e extends aa{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new qi(u,3)),this.setAttribute(`normal`,new qi(d,3)),this.setAttribute(`uv`,new qi(f,2));function _(){let a=new W,_=new W,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new U,m=new W,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},No=class e extends Mo{constructor(e=1,t=1,n=32,r=1,i=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,i,a,o),this.type=`ConeGeometry`,this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:i,thetaStart:a,thetaLength:o}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Po=class e extends aa{constructor(e=[],t=[],n=1,r=0){super(),this.type=`PolyhedronGeometry`,this.parameters={vertices:e,indices:t,radius:n,detail:r};let i=[],a=[];o(r),c(n),l(),this.setAttribute(`position`,new qi(i,3)),this.setAttribute(`normal`,new qi(i.slice(),3)),this.setAttribute(`uv`,new qi(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(e){let n=new W,r=new W,i=new W;for(let a=0;a<t.length;a+=3)f(t[a+0],n),f(t[a+1],r),f(t[a+2],i),s(n,r,i,e)}function s(e,t,n,r){let i=r+1,a=[];for(let r=0;r<=i;r++){a[r]=[];let o=e.clone().lerp(n,r/i),s=t.clone().lerp(n,r/i),c=i-r;for(let e=0;e<=c;e++)e===0&&r===i?a[r][e]=o:a[r][e]=o.clone().lerp(s,e/c)}for(let e=0;e<i;e++)for(let t=0;t<2*(i-e)-1;t++){let n=Math.floor(t/2);t%2==0?(d(a[e][n+1]),d(a[e+1][n]),d(a[e][n])):(d(a[e][n+1]),d(a[e+1][n+1]),d(a[e+1][n]))}}function c(e){let t=new W;for(let n=0;n<i.length;n+=3)t.x=i[n+0],t.y=i[n+1],t.z=i[n+2],t.normalize().multiplyScalar(e),i[n+0]=t.x,i[n+1]=t.y,i[n+2]=t.z}function l(){let e=new W;for(let t=0;t<i.length;t+=3){e.x=i[t+0],e.y=i[t+1],e.z=i[t+2];let n=h(e)/2/Math.PI+.5,r=g(e)/Math.PI+.5;a.push(n,1-r)}p(),u()}function u(){for(let e=0;e<a.length;e+=6){let t=a[e+0],n=a[e+2],r=a[e+4];Math.max(t,n,r)>.9&&Math.min(t,n,r)<.1&&(t<.2&&(a[e+0]+=1),n<.2&&(a[e+2]+=1),r<.2&&(a[e+4]+=1))}}function d(e){i.push(e.x,e.y,e.z)}function f(t,n){let r=t*3;n.x=e[r+0],n.y=e[r+1],n.z=e[r+2]}function p(){let e=new W,t=new W,n=new W,r=new W,o=new U,s=new U,c=new U;for(let l=0,u=0;l<i.length;l+=9,u+=6){e.set(i[l+0],i[l+1],i[l+2]),t.set(i[l+3],i[l+4],i[l+5]),n.set(i[l+6],i[l+7],i[l+8]),o.set(a[u+0],a[u+1]),s.set(a[u+2],a[u+3]),c.set(a[u+4],a[u+5]),r.copy(e).add(t).add(n).divideScalar(3);let d=h(r);m(o,u+0,e,d),m(s,u+2,t,d),m(c,u+4,n,d)}}function m(e,t,n,r){r<0&&e.x===1&&(a[t]=e.x-1),n.x===0&&n.z===0&&(a[t]=r/2/Math.PI+.5)}function h(e){return Math.atan2(e.z,-e.x)}function g(e){return Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.detail)}},Fo=class e extends Po{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=1/n,i=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-n,0,-r,n,0,r,-n,0,r,n,-r,-n,0,-r,n,0,r,-n,0,r,n,0,-n,0,-r,n,0,-r,-n,0,r,n,0,r];super(i,[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type=`DodecahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},Io=class{constructor(){this.type=`Curve`,this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){V(`Curve: .getPoint() not implemented.`)}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),i+=n.distanceTo(r),t.push(i),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,i=n.length,a;a=t||e*n[i-1];let o=0,s=i-1,c;for(;o<=s;)if(r=Math.floor(o+(s-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)s=r-1;else{s=r;break}if(r=s,n[r]===a)return r/(i-1);let l=n[r],u=n[r+1]-l,d=(a-l)/u;return(r+d)/(i-1)}getTangent(e,t){let n=1e-4,r=e-n,i=e+n;r<0&&(r=0),i>1&&(i=1);let a=this.getPoint(r),o=this.getPoint(i),s=t||(a.isVector2?new U:new W);return s.copy(o).sub(a).normalize(),s}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new W,r=[],i=[],a=[],o=new W,s=new kr;for(let t=0;t<=e;t++){let n=t/e;r[t]=this.getTangentAt(n,new W)}i[0]=new W,a[0]=new W;let c=Number.MAX_VALUE,l=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),i[0].crossVectors(r[0],o),a[0].crossVectors(r[0],i[0]);for(let t=1;t<=e;t++){if(i[t]=i[t-1].clone(),a[t]=a[t-1].clone(),o.crossVectors(r[t-1],r[t]),o.length()>2**-52){o.normalize();let e=Math.acos(tr(r[t-1].dot(r[t]),-1,1));i[t].applyMatrix4(s.makeRotationAxis(o,e))}a[t].crossVectors(r[t],i[t])}if(t===!0){let t=Math.acos(tr(i[0].dot(i[e]),-1,1));t/=e,r[0].dot(o.crossVectors(i[0],i[e]))>0&&(t=-t);for(let n=1;n<=e;n++)i[n].applyMatrix4(s.makeRotationAxis(r[n],t*n)),a[n].crossVectors(r[n],i[n])}return{tangents:r,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:`Curve`,generator:`Curve.toJSON`}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Lo=class extends Io{constructor(e=0,t=0,n=1,r=1,i=0,a=Math.PI*2,o=!1,s=0){super(),this.isEllipseCurve=!0,this.type=`EllipseCurve`,this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=i,this.aEndAngle=a,this.aClockwise=o,this.aRotation=s}getPoint(e,t=new U){let n=t,r=Math.PI*2,i=this.aEndAngle-this.aStartAngle,a=Math.abs(i)<2**-52;for(;i<0;)i+=r;for(;i>r;)i-=r;i<2**-52&&(i=a?0:r),this.aClockwise===!0&&!a&&(i===r?i=-r:i-=r);let o=this.aStartAngle+e*i,s=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let e=Math.cos(this.aRotation),t=Math.sin(this.aRotation),n=s-this.aX,r=c-this.aY;s=n*e-r*t+this.aX,c=n*t+r*e+this.aY}return n.set(s,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Ro=class extends Lo{constructor(e,t,n,r,i,a){super(e,t,n,n,r,i,a),this.isArcCurve=!0,this.type=`ArcCurve`}};function zo(){let e=0,t=0,n=0,r=0;function i(i,a,o,s){e=i,t=o,n=-3*i+3*a-2*o-s,r=2*i-2*a+o+s}return{initCatmullRom:function(e,t,n,r,a){i(t,n,a*(n-e),a*(r-t))},initNonuniformCatmullRom:function(e,t,n,r,a,o,s){let c=(t-e)/a-(n-e)/(a+o)+(n-t)/o,l=(n-t)/o-(r-t)/(o+s)+(r-n)/s;c*=o,l*=o,i(t,n,c,l)},calc:function(i){let a=i*i,o=a*i;return e+t*i+n*a+r*o}}}var Bo=new W,Vo=new W,Ho=new zo,Uo=new zo,Wo=new zo,Go=class extends Io{constructor(e=[],t=!1,n=`centripetal`,r=.5){super(),this.isCatmullRomCurve3=!0,this.type=`CatmullRomCurve3`,this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new W){let n=t,r=this.points,i=r.length,a=(i-+!this.closed)*e,o=Math.floor(a),s=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:s===0&&o===i-1&&(o=i-2,s=1);let c,l;this.closed||o>0?c=r[(o-1)%i]:(Vo.subVectors(r[0],r[1]).add(r[0]),c=Vo);let u=r[o%i],d=r[(o+1)%i];if(this.closed||o+2<i?l=r[(o+2)%i]:(Bo.subVectors(r[i-1],r[i-2]).add(r[i-1]),l=Bo),this.curveType===`centripetal`||this.curveType===`chordal`){let e=this.curveType===`chordal`?.5:.25,t=c.distanceToSquared(u)**+e,n=u.distanceToSquared(d)**+e,r=d.distanceToSquared(l)**+e;n<1e-4&&(n=1),t<1e-4&&(t=n),r<1e-4&&(r=n),Ho.initNonuniformCatmullRom(c.x,u.x,d.x,l.x,t,n,r),Uo.initNonuniformCatmullRom(c.y,u.y,d.y,l.y,t,n,r),Wo.initNonuniformCatmullRom(c.z,u.z,d.z,l.z,t,n,r)}else this.curveType===`catmullrom`&&(Ho.initCatmullRom(c.x,u.x,d.x,l.x,this.tension),Uo.initCatmullRom(c.y,u.y,d.y,l.y,this.tension),Wo.initCatmullRom(c.z,u.z,d.z,l.z,this.tension));return n.set(Ho.calc(s),Uo.calc(s),Wo.calc(s)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new W().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Ko(e,t,n,r,i){let a=(r-t)*.5,o=(i-n)*.5,s=e*e,c=e*s;return(2*n-2*r+a+o)*c+(-3*n+3*r-2*a-o)*s+a*e+n}function qo(e,t){let n=1-e;return n*n*t}function Jo(e,t){return 2*(1-e)*e*t}function Yo(e,t){return e*e*t}function Xo(e,t,n,r){return qo(e,t)+Jo(e,n)+Yo(e,r)}function Zo(e,t){let n=1-e;return n*n*n*t}function Qo(e,t){let n=1-e;return 3*n*n*e*t}function $o(e,t){return 3*(1-e)*e*e*t}function es(e,t){return e*e*e*t}function ts(e,t,n,r,i){return Zo(e,t)+Qo(e,n)+$o(e,r)+es(e,i)}var ns=class extends Io{constructor(e=new U,t=new U,n=new U,r=new U){super(),this.isCubicBezierCurve=!0,this.type=`CubicBezierCurve`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new U){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(ts(e,r.x,i.x,a.x,o.x),ts(e,r.y,i.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},rs=class extends Io{constructor(e=new W,t=new W,n=new W,r=new W){super(),this.isCubicBezierCurve3=!0,this.type=`CubicBezierCurve3`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new W){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(ts(e,r.x,i.x,a.x,o.x),ts(e,r.y,i.y,a.y,o.y),ts(e,r.z,i.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},is=class extends Io{constructor(e=new U,t=new U){super(),this.isLineCurve=!0,this.type=`LineCurve`,this.v1=e,this.v2=t}getPoint(e,t=new U){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new U){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},as=class extends Io{constructor(e=new W,t=new W){super(),this.isLineCurve3=!0,this.type=`LineCurve3`,this.v1=e,this.v2=t}getPoint(e,t=new W){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new W){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},os=class extends Io{constructor(e=new U,t=new U,n=new U){super(),this.isQuadraticBezierCurve=!0,this.type=`QuadraticBezierCurve`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new U){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(Xo(e,r.x,i.x,a.x),Xo(e,r.y,i.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ss=class extends Io{constructor(e=new W,t=new W,n=new W){super(),this.isQuadraticBezierCurve3=!0,this.type=`QuadraticBezierCurve3`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new W){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(Xo(e,r.x,i.x,a.x),Xo(e,r.y,i.y,a.y),Xo(e,r.z,i.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},cs=class extends Io{constructor(e=[]){super(),this.isSplineCurve=!0,this.type=`SplineCurve`,this.points=e}getPoint(e,t=new U){let n=t,r=this.points,i=(r.length-1)*e,a=Math.floor(i),o=i-a,s=r[a===0?a:a-1],c=r[a],l=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(Ko(o,s.x,c.x,l.x,u.x),Ko(o,s.y,c.y,l.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new U().fromArray(n))}return this}},ls=Object.freeze({__proto__:null,ArcCurve:Ro,CatmullRomCurve3:Go,CubicBezierCurve:ns,CubicBezierCurve3:rs,EllipseCurve:Lo,LineCurve:is,LineCurve3:as,QuadraticBezierCurve:os,QuadraticBezierCurve3:ss,SplineCurve:cs}),us=class extends Io{constructor(){super(),this.type=`CurvePath`,this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?`LineCurve`:`LineCurve3`;this.curves.push(new ls[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),i=0;for(;i<r.length;){if(r[i]>=n){let e=r[i]-n,a=this.curves[i],o=a.getLength(),s=o===0?0:1-e/o;return a.getPointAt(s,t)}i++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,i=this.curves;r<i.length;r++){let a=i[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,s=a.getPoints(o);for(let e=0;e<s.length;e++){let r=s[e];n&&n.equals(r)||(t.push(r),n=r)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(new ls[n.type]().fromJSON(n))}return this}},ds=class extends us{constructor(e){super(),this.type=`Path`,this.currentPoint=new U,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new is(this.currentPoint.clone(),new U(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let i=new os(this.currentPoint.clone(),new U(e,t),new U(n,r));return this.curves.push(i),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,i,a){let o=new ns(this.currentPoint.clone(),new U(e,t),new U(n,r),new U(i,a));return this.curves.push(o),this.currentPoint.set(i,a),this}splineThru(e){let t=new cs([this.currentPoint.clone()].concat(e));return this.curves.push(t),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,i,a){let o=this.currentPoint.x,s=this.currentPoint.y;return this.absarc(e+o,t+s,n,r,i,a),this}absarc(e,t,n,r,i,a){return this.absellipse(e,t,n,n,r,i,a),this}ellipse(e,t,n,r,i,a,o,s){let c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(e+c,t+l,n,r,i,a,o,s),this}absellipse(e,t,n,r,i,a,o,s){let c=new Lo(e,t,n,r,i,a,o,s);if(this.curves.length>0){let e=c.getPoint(0);e.equals(this.currentPoint)||this.lineTo(e.x,e.y)}this.curves.push(c);let l=c.getPoint(1);return this.currentPoint.copy(l),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},fs=class extends ds{constructor(e){super(e),this.uuid=er(),this.type=`Shape`,this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(new ds().fromJSON(n))}return this}};function ps(e,t,n=2){let r=t&&t.length,i=r?t[0]*n:e.length,a=ms(e,0,i,n,!0),o=[];if(!a||a.next===a.prev)return o;let s,c,l;if(r&&(a=xs(e,t,a,n)),e.length>80*n){s=e[0],c=e[1];let t=s,r=c;for(let a=n;a<i;a+=n){let n=e[a],i=e[a+1];n<s&&(s=n),i<c&&(c=i),n>t&&(t=n),i>r&&(r=i)}l=Math.max(t-s,r-c),l=l===0?0:32767/l}return gs(a,o,n,s,c,l,0),o}function ms(e,t,n,r,i){let a;if(i===Gs(e,t,n,r)>0)for(let i=t;i<n;i+=r)a=Hs(i/r|0,e[i],e[i+1],a);else for(let i=n-r;i>=t;i-=r)a=Hs(i/r|0,e[i],e[i+1],a);return a&&Ps(a,a.next)&&(Us(a),a=a.next),a}function hs(e,t){if(!e)return e;t||=e;let n=e,r;do if(r=!1,!n.steiner&&(Ps(n,n.next)||Ns(n.prev,n,n.next)===0)){if(Us(n),n=t=n.prev,n===n.next)break;r=!0}else n=n.next;while(r||n!==t);return t}function gs(e,t,n,r,i,a,o){if(!e)return;!o&&a&&Es(e,r,i,a);let s=e;for(;e.prev!==e.next;){let c=e.prev,l=e.next;if(a?vs(e,r,i,a):_s(e))t.push(c.i,e.i,l.i),Us(e),e=l.next,s=l.next;else if(e=l,e===s){o?o===1?(e=ys(hs(e),t),gs(e,t,n,r,i,a,2)):o===2&&bs(e,t,n,r,i,a):gs(hs(e),t,n,r,i,a,1);break}}}function _s(e){let t=e.prev,n=e,r=e.next;if(Ns(t,n,r)>=0)return!1;let i=t.x,a=n.x,o=r.x,s=t.y,c=n.y,l=r.y,u=Math.min(i,a,o),d=Math.min(s,c,l),f=Math.max(i,a,o),p=Math.max(s,c,l),m=r.next;for(;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=d&&m.y<=p&&js(i,s,a,c,o,l,m.x,m.y)&&Ns(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function vs(e,t,n,r){let i=e.prev,a=e,o=e.next;if(Ns(i,a,o)>=0)return!1;let s=i.x,c=a.x,l=o.x,u=i.y,d=a.y,f=o.y,p=Math.min(s,c,l),m=Math.min(u,d,f),h=Math.max(s,c,l),g=Math.max(u,d,f),_=Os(p,m,t,n,r),v=Os(h,g,t,n,r),y=e.prevZ,b=e.nextZ;for(;y&&y.z>=_&&b&&b.z<=v;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&js(s,u,c,d,l,f,y.x,y.y)&&Ns(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&js(s,u,c,d,l,f,b.x,b.y)&&Ns(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=_;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&js(s,u,c,d,l,f,y.x,y.y)&&Ns(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=v;){if(b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&js(s,u,c,d,l,f,b.x,b.y)&&Ns(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function ys(e,t){let n=e;do{let r=n.prev,i=n.next.next;!Ps(r,i)&&Fs(r,n,n.next,i)&&zs(r,i)&&zs(i,r)&&(t.push(r.i,n.i,i.i),Us(n),Us(n.next),n=e=i),n=n.next}while(n!==e);return hs(n)}function bs(e,t,n,r,i,a){let o=e;do{let e=o.next.next;for(;e!==o.prev;){if(o.i!==e.i&&Ms(o,e)){let s=Vs(o,e);o=hs(o,o.next),s=hs(s,s.next),gs(o,t,n,r,i,a,0),gs(s,t,n,r,i,a,0);return}e=e.next}o=o.next}while(o!==e)}function xs(e,t,n,r){let i=[];for(let n=0,a=t.length;n<a;n++){let o=ms(e,t[n]*r,n<a-1?t[n+1]*r:e.length,r,!1);o===o.next&&(o.steiner=!0),i.push(ks(o))}i.sort(Ss);for(let e=0;e<i.length;e++)n=Cs(i[e],n);return n}function Ss(e,t){let n=e.x-t.x;return n===0&&(n=e.y-t.y,n===0&&(n=(e.next.y-e.y)/(e.next.x-e.x)-(t.next.y-t.y)/(t.next.x-t.x))),n}function Cs(e,t){let n=ws(e,t);if(!n)return t;let r=Vs(n,e);return hs(r,r.next),hs(n,n.next)}function ws(e,t){let n=t,r=e.x,i=e.y,a=-1/0,o;if(Ps(e,n))return n;do{if(Ps(e,n.next))return n.next;if(i<=n.y&&i>=n.next.y&&n.next.y!==n.y){let e=n.x+(i-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(e<=r&&e>a&&(a=e,o=n.x<n.next.x?n:n.next,e===r))return o}n=n.next}while(n!==t);if(!o)return null;let s=o,c=o.x,l=o.y,u=1/0;n=o;do{if(r>=n.x&&n.x>=c&&r!==n.x&&As(i<l?r:a,i,c,l,i<l?a:r,i,n.x,n.y)){let t=Math.abs(i-n.y)/(r-n.x);zs(n,e)&&(t<u||t===u&&(n.x>o.x||n.x===o.x&&Ts(o,n)))&&(o=n,u=t)}n=n.next}while(n!==s);return o}function Ts(e,t){return Ns(e.prev,e,t.prev)<0&&Ns(t.next,e,e.next)<0}function Es(e,t,n,r){let i=e;do i.z===0&&(i.z=Os(i.x,i.y,t,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,Ds(i)}function Ds(e){let t,n=1;do{let r=e,i;e=null;let a=null;for(t=0;r;){t++;let o=r,s=0;for(let e=0;e<n&&(s++,o=o.nextZ,o);e++);let c=n;for(;s>0||c>0&&o;)s!==0&&(c===0||!o||r.z<=o.z)?(i=r,r=r.nextZ,s--):(i=o,o=o.nextZ,c--),a?a.nextZ=i:e=i,i.prevZ=a,a=i;r=o}a.nextZ=null,n*=2}while(t>1);return e}function Os(e,t,n,r,i){return e=(e-n)*i|0,t=(t-r)*i|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function ks(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function As(e,t,n,r,i,a,o,s){return(i-o)*(t-s)>=(e-o)*(a-s)&&(e-o)*(r-s)>=(n-o)*(t-s)&&(n-o)*(a-s)>=(i-o)*(r-s)}function js(e,t,n,r,i,a,o,s){return(e!==o||t!==s)&&As(e,t,n,r,i,a,o,s)}function Ms(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!Rs(e,t)&&(zs(e,t)&&zs(t,e)&&Bs(e,t)&&(Ns(e.prev,e,t.prev)||Ns(e,t.prev,t))||Ps(e,t)&&Ns(e.prev,e,e.next)>0&&Ns(t.prev,t,t.next)>0)}function Ns(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function Ps(e,t){return e.x===t.x&&e.y===t.y}function Fs(e,t,n,r){let i=Ls(Ns(e,t,n)),a=Ls(Ns(e,t,r)),o=Ls(Ns(n,r,e)),s=Ls(Ns(n,r,t));return!!(i!==a&&o!==s||i===0&&Is(e,n,t)||a===0&&Is(e,r,t)||o===0&&Is(n,e,r)||s===0&&Is(n,t,r))}function Is(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function Ls(e){return e>0?1:e<0?-1:0}function Rs(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&Fs(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function zs(e,t){return Ns(e.prev,e,e.next)<0?Ns(e,t,e.next)>=0&&Ns(e,e.prev,t)>=0:Ns(e,t,e.prev)<0||Ns(e,e.next,t)<0}function Bs(e,t){let n=e,r=!1,i=(e.x+t.x)/2,a=(e.y+t.y)/2;do n.y>a!=n.next.y>a&&n.next.y!==n.y&&i<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;while(n!==e);return r}function Vs(e,t){let n=Ws(e.i,e.x,e.y),r=Ws(t.i,t.x,t.y),i=e.next,a=t.prev;return e.next=t,t.prev=e,n.next=i,i.prev=n,r.next=n,n.prev=r,a.next=r,r.prev=a,r}function Hs(e,t,n,r){let i=Ws(e,t,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function Us(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function Ws(e,t,n){return{i:e,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Gs(e,t,n,r){let i=0;for(let a=t,o=n-r;a<n;a+=r)i+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return i}var Ks=class{static triangulate(e,t,n=2){return ps(e,t,n)}},qs=class e{static area(e){let t=e.length,n=0;for(let r=t-1,i=0;i<t;r=i++)n+=e[r].x*e[i].y-e[i].x*e[r].y;return n*.5}static isClockWise(t){return e.area(t)<0}static triangulateShape(e,t){let n=[],r=[],i=[];Js(e),Ys(n,e);let a=e.length;t.forEach(Js);for(let e=0;e<t.length;e++)r.push(a),a+=t[e].length,Ys(n,t[e]);let o=Ks.triangulate(n,r);for(let e=0;e<o.length;e+=3)i.push(o.slice(e,e+3));return i}};function Js(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function Ys(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}var Xs=class e extends aa{constructor(e=new fs([new U(.5,.5),new U(-.5,.5),new U(-.5,-.5),new U(.5,-.5)]),t={}){super(),this.type=`ExtrudeGeometry`,this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],i=[];for(let t=0,n=e.length;t<n;t++){let n=e[t];a(n)}this.setAttribute(`position`,new qi(r,3)),this.setAttribute(`uv`,new qi(i,2)),this.computeVertexNormals();function a(e){let a=[],o=t.curveSegments===void 0?12:t.curveSegments,s=t.steps===void 0?1:t.steps,c=t.depth===void 0?1:t.depth,l=t.bevelEnabled===void 0||t.bevelEnabled,u=t.bevelThickness===void 0?.2:t.bevelThickness,d=t.bevelSize===void 0?u-.1:t.bevelSize,f=t.bevelOffset===void 0?0:t.bevelOffset,p=t.bevelSegments===void 0?3:t.bevelSegments,m=t.extrudePath,h=t.UVGenerator===void 0?Zs:t.UVGenerator,g,_=!1,v,y,b,x;if(m){g=m.getSpacedPoints(s),_=!0,l=!1;let e=m.isCatmullRomCurve3?m.closed:!1;v=m.computeFrenetFrames(s,e),y=new W,b=new W,x=new W}l||(p=0,u=0,d=0,f=0);let S=e.extractPoints(o),C=S.shape,w=S.holes;if(!qs.isClockWise(C)){C=C.reverse();for(let e=0,t=w.length;e<t;e++){let t=w[e];qs.isClockWise(t)&&(w[e]=t.reverse())}}function T(e){let t=e[0];for(let n=1;n<=e.length;n++){let r=n%e.length,i=e[r],a=i.x-t.x,o=i.y-t.y,s=a*a+o*o,c=Math.max(Math.abs(i.x),Math.abs(i.y),Math.abs(t.x),Math.abs(t.y));s<=10000000000000001e-36*c*c?(e.splice(r,1),n--):t=i}}T(C),w.forEach(T);let E=w.length,D=C;for(let e=0;e<E;e++){let t=w[e];C=C.concat(t)}function O(e,t,n){return t||H(`ExtrudeGeometry: vec does not exist`),e.clone().addScaledVector(t,n)}let k=C.length;function A(e,t,n){let r,i,a,o=e.x-t.x,s=e.y-t.y,c=n.x-e.x,l=n.y-e.y,u=o*o+s*s,d=o*l-s*c;if(Math.abs(d)>2**-52){let d=Math.sqrt(u),f=Math.sqrt(c*c+l*l),p=t.x-s/d,m=t.y+o/d,h=n.x-l/f,g=n.y+c/f,_=((h-p)*l-(g-m)*c)/(o*l-s*c);r=p+o*_-e.x,i=m+s*_-e.y;let v=r*r+i*i;if(v<=2)return new U(r,i);a=Math.sqrt(v/2)}else{let e=!1;o>2**-52?c>2**-52&&(e=!0):o<-(2**-52)?c<-(2**-52)&&(e=!0):Math.sign(s)===Math.sign(l)&&(e=!0),e?(r=-s,i=o,a=Math.sqrt(u)):(r=o,i=s,a=Math.sqrt(u/2))}return new U(r/a,i/a)}let j=[];for(let e=0,t=D.length,n=t-1,r=e+1;e<t;e++,n++,r++)n===t&&(n=0),r===t&&(r=0),j[e]=A(D[e],D[n],D[r]);let ee=[],M,te=j.concat();for(let e=0,t=E;e<t;e++){let t=w[e];M=[];for(let e=0,n=t.length,r=n-1,i=e+1;e<n;e++,r++,i++)r===n&&(r=0),i===n&&(i=0),M[e]=A(t[e],t[r],t[i]);ee.push(M),te=te.concat(M)}let ne;if(p===0)ne=qs.triangulateShape(D,w);else{let e=[],t=[];for(let n=0;n<p;n++){let r=n/p,i=u*Math.cos(r*Math.PI/2),a=d*Math.sin(r*Math.PI/2)+f;for(let t=0,n=D.length;t<n;t++){let n=O(D[t],j[t],a);N(n.x,n.y,-i),r===0&&e.push(n)}for(let e=0,n=E;e<n;e++){let n=w[e];M=ee[e];let o=[];for(let e=0,t=n.length;e<t;e++){let t=O(n[e],M[e],a);N(t.x,t.y,-i),r===0&&o.push(t)}r===0&&t.push(o)}}ne=qs.triangulateShape(e,t)}let re=ne.length,ie=d+f;for(let e=0;e<k;e++){let t=l?O(C[e],te[e],ie):C[e];_?(b.copy(v.normals[0]).multiplyScalar(t.x),y.copy(v.binormals[0]).multiplyScalar(t.y),x.copy(g[0]).add(b).add(y),N(x.x,x.y,x.z)):N(t.x,t.y,0)}for(let e=1;e<=s;e++)for(let t=0;t<k;t++){let n=l?O(C[t],te[t],ie):C[t];_?(b.copy(v.normals[e]).multiplyScalar(n.x),y.copy(v.binormals[e]).multiplyScalar(n.y),x.copy(g[e]).add(b).add(y),N(x.x,x.y,x.z)):N(n.x,n.y,c/s*e)}for(let e=p-1;e>=0;e--){let t=e/p,n=u*Math.cos(t*Math.PI/2),r=d*Math.sin(t*Math.PI/2)+f;for(let e=0,t=D.length;e<t;e++){let t=O(D[e],j[e],r);N(t.x,t.y,c+n)}for(let e=0,t=w.length;e<t;e++){let t=w[e];M=ee[e];for(let e=0,i=t.length;e<i;e++){let i=O(t[e],M[e],r);_?N(i.x,i.y+g[s-1].y,g[s-1].x+n):N(i.x,i.y,c+n)}}}ae(),oe();function ae(){let e=r.length/3;if(l){let e=0,t=k*e;for(let e=0;e<re;e++){let n=ne[e];ce(n[2]+t,n[1]+t,n[0]+t)}e=s+p*2,t=k*e;for(let e=0;e<re;e++){let n=ne[e];ce(n[0]+t,n[1]+t,n[2]+t)}}else{for(let e=0;e<re;e++){let t=ne[e];ce(t[2],t[1],t[0])}for(let e=0;e<re;e++){let t=ne[e];ce(t[0]+k*s,t[1]+k*s,t[2]+k*s)}}n.addGroup(e,r.length/3-e,0)}function oe(){let e=r.length/3,t=0;se(D,t),t+=D.length;for(let e=0,n=w.length;e<n;e++){let n=w[e];se(n,t),t+=n.length}n.addGroup(e,r.length/3-e,1)}function se(e,t){let n=e.length;for(;--n>=0;){let r=n,i=n-1;i<0&&(i=e.length-1);for(let e=0,n=s+p*2;e<n;e++){let n=k*e,a=k*(e+1);le(t+r+n,t+i+n,t+i+a,t+r+a)}}}function N(e,t,n){a.push(e),a.push(t),a.push(n)}function ce(e,t,i){ue(e),ue(t),ue(i);let a=r.length/3,o=h.generateTopUV(n,r,a-3,a-2,a-1);de(o[0]),de(o[1]),de(o[2])}function le(e,t,i,a){ue(e),ue(t),ue(a),ue(t),ue(i),ue(a);let o=r.length/3,s=h.generateSideWallUV(n,r,o-6,o-3,o-2,o-1);de(s[0]),de(s[1]),de(s[3]),de(s[1]),de(s[2]),de(s[3])}function ue(e){r.push(a[e*3+0]),r.push(a[e*3+1]),r.push(a[e*3+2])}function de(e){i.push(e.x),i.push(e.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Qs(t,n,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new ls[i.type]().fromJSON(i)),new e(r,t.options)}},Zs={generateTopUV:function(e,t,n,r,i){let a=t[n*3],o=t[n*3+1],s=t[r*3],c=t[r*3+1],l=t[i*3],u=t[i*3+1];return[new U(a,o),new U(s,c),new U(l,u)]},generateSideWallUV:function(e,t,n,r,i,a){let o=t[n*3],s=t[n*3+1],c=t[n*3+2],l=t[r*3],u=t[r*3+1],d=t[r*3+2],f=t[i*3],p=t[i*3+1],m=t[i*3+2],h=t[a*3],g=t[a*3+1],_=t[a*3+2];return Math.abs(s-u)<Math.abs(o-l)?[new U(o,1-c),new U(l,1-d),new U(f,1-m),new U(h,1-_)]:[new U(s,1-c),new U(u,1-d),new U(p,1-m),new U(g,1-_)]}};function Qs(e,t,n){if(n.shapes=[],Array.isArray(e))for(let t=0,r=e.length;t<r;t++){let r=e[t];n.shapes.push(r.uuid)}else n.shapes.push(e.uuid);return n.options=Object.assign({},t),t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}var $s=class e extends Po{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type=`OctahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},ec=class e extends aa{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new qi(p,3)),this.setAttribute(`normal`,new qi(m,3)),this.setAttribute(`uv`,new qi(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},tc=class e extends aa{constructor(e=.5,t=1,n=32,r=1,i=0,a=Math.PI*2){super(),this.type=`RingGeometry`,this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:i,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);let o=[],s=[],c=[],l=[],u=e,d=(t-e)/r,f=new W,p=new U;for(let e=0;e<=r;e++){for(let e=0;e<=n;e++){let r=i+e/n*a;f.x=u*Math.cos(r),f.y=u*Math.sin(r),s.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,l.push(p.x,p.y)}u+=d}for(let e=0;e<r;e++){let t=e*(n+1);for(let e=0;e<n;e++){let r=e+t,i=r,a=r+n+1,s=r+n+2,c=r+1;o.push(i,a,c),o.push(a,s,c)}}this.setIndex(o),this.setAttribute(`position`,new qi(s,3)),this.setAttribute(`normal`,new qi(c,3)),this.setAttribute(`uv`,new qi(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},nc=class e extends aa{constructor(e=new fs([new U(0,.5),new U(-.5,-.5),new U(.5,-.5)]),t=12){super(),this.type=`ShapeGeometry`,this.parameters={shapes:e,curveSegments:t};let n=[],r=[],i=[],a=[],o=0,s=0;if(Array.isArray(e)===!1)c(e);else for(let t=0;t<e.length;t++)c(e[t]),this.addGroup(o,s,t),o+=s,s=0;this.setIndex(n),this.setAttribute(`position`,new qi(r,3)),this.setAttribute(`normal`,new qi(i,3)),this.setAttribute(`uv`,new qi(a,2));function c(e){let o=r.length/3,c=e.extractPoints(t),l=c.shape,u=c.holes;qs.isClockWise(l)===!1&&(l=l.reverse());for(let e=0,t=u.length;e<t;e++){let t=u[e];qs.isClockWise(t)===!0&&(u[e]=t.reverse())}let d=qs.triangulateShape(l,u);for(let e=0,t=u.length;e<t;e++){let t=u[e];l=l.concat(t)}for(let e=0,t=l.length;e<t;e++){let t=l[e];r.push(t.x,t.y,0),i.push(0,0,1),a.push(t.x,t.y)}for(let e=0,t=d.length;e<t;e++){let t=d[e],r=t[0]+o,i=t[1]+o,a=t[2]+o;n.push(r,i,a),s+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return rc(t,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}return new e(r,t.curveSegments)}};function rc(e,t){if(t.shapes=[],Array.isArray(e))for(let n=0,r=e.length;n<r;n++){let r=e[n];t.shapes.push(r.uuid)}else t.shapes.push(e.uuid);return t}var ic=class e extends aa{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new W,d=new W,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new qi(p,3)),this.setAttribute(`normal`,new qi(m,3)),this.setAttribute(`uv`,new qi(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},ac=class e extends aa{constructor(e=1,t=.4,n=12,r=48,i=Math.PI*2,a=0,o=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:i,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);let s=[],c=[],l=[],u=[],d=new W,f=new W,p=new W;for(let s=0;s<=n;s++){let m=a+s/n*o;for(let a=0;a<=r;a++){let o=a/r*i;f.x=(e+t*Math.cos(m))*Math.cos(o),f.y=(e+t*Math.cos(m))*Math.sin(o),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(o),d.y=e*Math.sin(o),p.subVectors(f,d).normalize(),l.push(p.x,p.y,p.z),u.push(a/r),u.push(s/n)}}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*e+t-1,i=(r+1)*(e-1)+t-1,a=(r+1)*(e-1)+t,o=(r+1)*e+t;s.push(n,i,o),s.push(i,a,o)}this.setIndex(s),this.setAttribute(`position`,new qi(c,3)),this.setAttribute(`normal`,new qi(l,3)),this.setAttribute(`uv`,new qi(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}},oc=class e extends aa{constructor(e=new ss(new W(-1,-1,0),new W(-1,1,0),new W(1,1,0)),t=64,n=1,r=8,i=!1){super(),this.type=`TubeGeometry`,this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:i};let a=e.computeFrenetFrames(t,i);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new W,s=new W,c=new U,l=new W,u=[],d=[],f=[],p=[];m(),this.setIndex(p),this.setAttribute(`position`,new qi(u,3)),this.setAttribute(`normal`,new qi(d,3)),this.setAttribute(`uv`,new qi(f,2));function m(){for(let e=0;e<t;e++)h(e);h(i===!1?t:0),_(),g()}function h(i){l=e.getPointAt(i/t,l);let c=a.normals[i],f=a.binormals[i];for(let e=0;e<=r;e++){let t=e/r*Math.PI*2,i=Math.sin(t),a=-Math.cos(t);s.x=a*c.x+i*f.x,s.y=a*c.y+i*f.y,s.z=a*c.z+i*f.z,s.normalize(),d.push(s.x,s.y,s.z),o.x=l.x+n*s.x,o.y=l.y+n*s.y,o.z=l.z+n*s.z,u.push(o.x,o.y,o.z)}}function g(){for(let e=1;e<=t;e++)for(let t=1;t<=r;t++){let n=(r+1)*(e-1)+(t-1),i=(r+1)*e+(t-1),a=(r+1)*e+t,o=(r+1)*(e-1)+t;p.push(n,i,o),p.push(i,a,o)}}function _(){for(let e=0;e<=t;e++)for(let n=0;n<=r;n++)c.x=e/t,c.y=n/r,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(t){return new e(new ls[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function sc(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(lc(i))i.isRenderTargetTexture?(V(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(lc(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function cc(e){let t={};for(let n=0;n<e.length;n++){let r=sc(e[n]);for(let e in r)t[e]=r[e]}return t}function lc(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function uc(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function dc(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:pr.workingColorSpace}var fc={clone:sc,merge:cc},pc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,hc=class extends ma{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pc,this.fragmentShader=mc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=sc(e.uniforms),this.uniformsGroups=uc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new K().setHex(r.value);break;case`v2`:this.uniforms[n].value=new U().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new W().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new wr().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new G().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new kr().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},gc=class extends hc{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},_c=class extends ma{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type=`MeshLambertMaterial`,this.color=new K(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new K(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new U(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zr,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},vc=class extends ma{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=jn,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},yc=class extends ma{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function bc(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function xc(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var Sc=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},Cc=class extends Sc{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:On,endingEnd:On}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case kn:i=e,o=2*t-n;break;case An:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case kn:a=e,s=2*n-t;break;case An:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},wc=class extends Sc{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},Tc=class extends Sc{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Ec=class extends Sc{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=kc(n,t,g,y,r);i[p]=Dc(x,o,_,b,m)}return i}};function Dc(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function Oc(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function kc(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=Dc(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=Oc(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var Ac=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=bc(t,this.TimeBufferType),this.values=bc(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:bc(e.times,Array),values:bc(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),xc(e.settings)&&(n.settings={inTangents:bc(e.settings.inTangents,Array),outTangents:bc(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Tc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new wc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Cc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ec(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case wn:t=this.InterpolantFactoryMethodDiscrete;break;case Tn:t=this.InterpolantFactoryMethodLinear;break;case En:t=this.InterpolantFactoryMethodSmooth;break;case Dn:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return V(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return wn;case this.InterpolantFactoryMethodLinear:return Tn;case this.InterpolantFactoryMethodSmooth:return En;case this.InterpolantFactoryMethodBezier:return Dn}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;xc(this.settings)&&(jc(this.settings.inTangents,e),jc(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(H(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(H(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){H(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){H(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&Vn(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){H(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===En,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,xc(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function jc(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}Ac.prototype.ValueTypeName=``,Ac.prototype.TimeBufferType=Float32Array,Ac.prototype.ValueBufferType=Float32Array,Ac.prototype.DefaultInterpolation=Tn;var Mc=class extends Ac{constructor(e,t,n){super(e,t,n)}};Mc.prototype.ValueTypeName=`bool`,Mc.prototype.ValueBufferType=Array,Mc.prototype.DefaultInterpolation=wn,Mc.prototype.InterpolantFactoryMethodLinear=void 0,Mc.prototype.InterpolantFactoryMethodSmooth=void 0;var Nc=class extends Ac{constructor(e,t,n,r){super(e,t,n,r)}};Nc.prototype.ValueTypeName=`color`;var Pc=class extends Ac{constructor(e,t,n,r){super(e,t,n,r)}};Pc.prototype.ValueTypeName=`number`;var Fc=class extends Sc{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)or.slerpFlat(i,0,a,c-o,a,c,s);return i}},Ic=class extends Ac{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Fc(this.times,this.values,this.getValueSize(),e)}};Ic.prototype.ValueTypeName=`quaternion`,Ic.prototype.InterpolantFactoryMethodSmooth=void 0;var Lc=class extends Ac{constructor(e,t,n){super(e,t,n)}};Lc.prototype.ValueTypeName=`string`,Lc.prototype.ValueBufferType=Array,Lc.prototype.DefaultInterpolation=wn,Lc.prototype.InterpolantFactoryMethodLinear=void 0,Lc.prototype.InterpolantFactoryMethodSmooth=void 0;var Rc=class extends Ac{constructor(e,t,n,r){super(e,t,n,r)}};Rc.prototype.ValueTypeName=`vector`;var zc=class extends ni{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new K(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Bc=class extends zc{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(ni.DEFAULT_UP),this.updateMatrix(),this.groundColor=new K(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Vc=new kr,Hc=new W,Uc=new W,Wc=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new U(512,512),this.mapType=vt,this.map=null,this.mapPass=null,this.matrix=new kr,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new lo,this._frameExtents=new U(1,1),this._viewportCount=1,this._viewports=[new wr(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Hc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Hc),Uc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Uc),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){Vc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Vc,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Vc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Gc=new W,Kc=new or,qc=new W,Jc=class extends ni{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new kr,this.projectionMatrix=new kr,this.projectionMatrixInverse=new kr,this.coordinateSystem=zn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Gc,Kc,qc),qc.x===1&&qc.y===1&&qc.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Gc,Kc,qc.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Gc,Kc,qc),qc.x===1&&qc.y===1&&qc.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Gc,Kc,qc.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Yc=new W,Xc=new U,Zc=new U,Qc=class extends Jc{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=$n*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Qn*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return $n*2*Math.atan(Math.tan(Qn*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Yc.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Yc.x,Yc.y).multiplyScalar(-e/Yc.z),Yc.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Yc.x,Yc.y).multiplyScalar(-e/Yc.z)}getViewSize(e,t){return this.getViewBounds(e,Xc,Zc),t.subVectors(Zc,Xc)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Qn*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},$c=class extends Jc{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},el=class extends Wc{constructor(){super(new $c(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},tl=class extends zc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(ni.DEFAULT_UP),this.updateMatrix(),this.target=new ni,this.shadow=new el}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},nl=-90,rl=1,il=class extends ni{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Qc(nl,rl,e,t);r.layers=this.layers,this.add(r);let i=new Qc(nl,rl,e,t);i.layers=this.layers,this.add(i);let a=new Qc(nl,rl,e,t);a.layers=this.layers,this.add(a);let o=new Qc(nl,rl,e,t);o.layers=this.layers,this.add(o);let s=new Qc(nl,rl,e,t);s.layers=this.layers,this.add(s);let c=new Qc(nl,rl,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},al=class extends Qc{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},ol=`\\[\\]\\.:\\/`,sl=RegExp(`[\\[\\]\\.:\\/]`,`g`),cl=`[^\\[\\]\\.:\\/]`,ll=`[^`+ol.replace(`\\.`,``)+`]`,ul=`((?:WC+[\\/:])*)`.replace(`WC`,cl),dl=`(WCOD+)?`.replace(`WCOD`,ll),fl=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,cl),pl=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,cl),ml=RegExp(`^`+ul+dl+fl+pl+`$`),hl=[`material`,`materials`,`bones`,`map`],gl=class{constructor(e,t,n){let r=n||_l.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},_l=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(sl,``)}static parseTrackName(e){let t=ml.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);hl.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){V(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){H(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){H(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){H(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){H(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){H(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){H(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){H(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;H(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){H(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){H(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};_l.Composite=gl,_l.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},_l.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},_l.prototype.GetterByBindingType=[_l.prototype._getValue_direct,_l.prototype._getValue_array,_l.prototype._getValue_arrayElement,_l.prototype._getValue_toArray],_l.prototype.SetterByBindingTypeAndVersioning=[[_l.prototype._setValue_direct,_l.prototype._setValue_direct_setNeedsUpdate,_l.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[_l.prototype._setValue_array,_l.prototype._setValue_array_setNeedsUpdate,_l.prototype._setValue_array_setMatrixWorldNeedsUpdate],[_l.prototype._setValue_arrayElement,_l.prototype._setValue_arrayElement_setNeedsUpdate,_l.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[_l.prototype._setValue_fromArray,_l.prototype._setValue_fromArray_setNeedsUpdate,_l.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var vl=new kr,yl=class{constructor(e,t,n=0,r=1/0){this.ray=new Fa(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Br,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):H(`Raycaster: Unsupported camera type: `+t.type)}setFromXRController(e){return vl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(vl),this}intersectObject(e,t=!0,n=[]){return xl(e,this,n,t),n.sort(bl),n}intersectObjects(e,t=!0,n=[]){for(let r=0,i=e.length;r<i;r++)xl(e[r],this,n,t);return n.sort(bl),n}};function bl(e,t){return e.distance-t.distance}function xl(e,t,n,r){let i=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(i=!1),i===!0&&r===!0){let r=e.children;for(let e=0,i=r.length;e<i;e++)xl(r[e],t,n,!0)}}(class e{static{e.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}});var Sl=class extends Co{constructor(e=10,t=10,n=4473924,r=8947848){n=new K(n),r=new K(r);let i=t/2,a=e/t,o=e/2,s=[],c=[];for(let e=0,l=0,u=-o;e<=t;e++,u+=a){s.push(-o,0,u,o,0,u),s.push(u,0,-o,u,0,o);let t=e===i?n:r;t.toArray(c,l),l+=3,t.toArray(c,l),l+=3,t.toArray(c,l),l+=3,t.toArray(c,l),l+=3}let l=new aa;l.setAttribute(`position`,new qi(s,3)),l.setAttribute(`color`,new qi(c,3));let u=new uo({vertexColors:!0,toneMapped:!1});super(l,u),this.type=`GridHelper`}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}};function Cl(e,t,n,r){let i=wl(r);switch(n){case jt:return e*t;case It:return e*t/i.components*i.byteLength;case Lt:return e*t/i.components*i.byteLength;case Rt:return e*t*2/i.components*i.byteLength;case zt:return e*t*2/i.components*i.byteLength;case Mt:return e*t*3/i.components*i.byteLength;case Nt:return e*t*4/i.components*i.byteLength;case Bt:return e*t*4/i.components*i.byteLength;case Vt:case Ht:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Ut:case Wt:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Kt:case Jt:return Math.max(e,16)*Math.max(t,8)/4;case Gt:case qt:return Math.max(e,8)*Math.max(t,8)/2;case Yt:case Xt:case Qt:case $t:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Zt:case en:case tn:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case nn:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case rn:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case an:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case on:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case sn:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case cn:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case ln:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case un:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case dn:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case fn:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case pn:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case mn:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case hn:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case gn:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case _n:case vn:case yn:return Math.ceil(e/4)*Math.ceil(t/4)*16;case bn:case xn:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Sn:case Cn:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function wl(e){switch(e){case vt:case yt:return{byteLength:1,components:1};case xt:case bt:case Tt:return{byteLength:2,components:1};case Et:case Dt:return{byteLength:2,components:4};case Ct:case St:case wt:return{byteLength:4,components:1};case kt:case At:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`186`}})),typeof window<`u`&&(window.__THREE__?V(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`186`);function Tl(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function El(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var Dl={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},J={common:{diffuse:{value:new K(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new G},alphaMap:{value:null},alphaMapTransform:{value:new G},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new G}},envmap:{envMap:{value:null},envMapRotation:{value:new G},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new G}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new G}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new G},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new G},normalScale:{value:new U(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new G},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new G}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new G}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new G}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new K(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new W},probesMax:{value:new W},probesResolution:{value:new W}},points:{diffuse:{value:new K(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new G},alphaTest:{value:0},uvTransform:{value:new G}},sprite:{diffuse:{value:new K(16777215)},opacity:{value:1},center:{value:new U(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new G},alphaMap:{value:null},alphaMapTransform:{value:new G},alphaTest:{value:0}}},Ol={basic:{uniforms:cc([J.common,J.specularmap,J.envmap,J.aomap,J.lightmap,J.fog]),vertexShader:Dl.meshbasic_vert,fragmentShader:Dl.meshbasic_frag},lambert:{uniforms:cc([J.common,J.specularmap,J.envmap,J.aomap,J.lightmap,J.emissivemap,J.bumpmap,J.normalmap,J.displacementmap,J.fog,J.lights,{emissive:{value:new K(0)},envMapIntensity:{value:1}}]),vertexShader:Dl.meshlambert_vert,fragmentShader:Dl.meshlambert_frag},phong:{uniforms:cc([J.common,J.specularmap,J.envmap,J.aomap,J.lightmap,J.emissivemap,J.bumpmap,J.normalmap,J.displacementmap,J.fog,J.lights,{emissive:{value:new K(0)},specular:{value:new K(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Dl.meshphong_vert,fragmentShader:Dl.meshphong_frag},standard:{uniforms:cc([J.common,J.envmap,J.aomap,J.lightmap,J.emissivemap,J.bumpmap,J.normalmap,J.displacementmap,J.roughnessmap,J.metalnessmap,J.fog,J.lights,{emissive:{value:new K(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Dl.meshphysical_vert,fragmentShader:Dl.meshphysical_frag},toon:{uniforms:cc([J.common,J.aomap,J.lightmap,J.emissivemap,J.bumpmap,J.normalmap,J.displacementmap,J.gradientmap,J.fog,J.lights,{emissive:{value:new K(0)}}]),vertexShader:Dl.meshtoon_vert,fragmentShader:Dl.meshtoon_frag},matcap:{uniforms:cc([J.common,J.bumpmap,J.normalmap,J.displacementmap,J.fog,{matcap:{value:null}}]),vertexShader:Dl.meshmatcap_vert,fragmentShader:Dl.meshmatcap_frag},points:{uniforms:cc([J.points,J.fog]),vertexShader:Dl.points_vert,fragmentShader:Dl.points_frag},dashed:{uniforms:cc([J.common,J.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Dl.linedashed_vert,fragmentShader:Dl.linedashed_frag},depth:{uniforms:cc([J.common,J.displacementmap]),vertexShader:Dl.depth_vert,fragmentShader:Dl.depth_frag},normal:{uniforms:cc([J.common,J.bumpmap,J.normalmap,J.displacementmap,{opacity:{value:1}}]),vertexShader:Dl.meshnormal_vert,fragmentShader:Dl.meshnormal_frag},sprite:{uniforms:cc([J.sprite,J.fog]),vertexShader:Dl.sprite_vert,fragmentShader:Dl.sprite_frag},background:{uniforms:{uvTransform:{value:new G},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Dl.background_vert,fragmentShader:Dl.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new G}},vertexShader:Dl.backgroundCube_vert,fragmentShader:Dl.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Dl.cube_vert,fragmentShader:Dl.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Dl.equirect_vert,fragmentShader:Dl.equirect_frag},distance:{uniforms:cc([J.common,J.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Dl.distance_vert,fragmentShader:Dl.distance_frag},shadow:{uniforms:cc([J.lights,J.fog,{color:{value:new K(0)},opacity:{value:1}}]),vertexShader:Dl.shadow_vert,fragmentShader:Dl.shadow_frag}};Ol.physical={uniforms:cc([Ol.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new G},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new G},clearcoatNormalScale:{value:new U(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new G},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new G},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new G},sheen:{value:0},sheenColor:{value:new K(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new G},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new G},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new G},transmissionSamplerSize:{value:new U},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new G},attenuationDistance:{value:0},attenuationColor:{value:new K(0)},specularColor:{value:new K(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new G},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new G},anisotropyVector:{value:new U},anisotropyMap:{value:null},anisotropyMapTransform:{value:new G}}]),vertexShader:Dl.meshphysical_vert,fragmentShader:Dl.meshphysical_frag};var kl={r:0,b:0,g:0},Al=new kr,jl=new G;jl.set(-1,0,0,0,1,0,0,0,1);function Ml(e,t,n,r,i,a){let o=new K(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new q(new Ao(1,1,1),new hc({name:`BackgroundCubeMaterial`,uniforms:sc(Ol.backgroundCube.uniforms),vertexShader:Ol.backgroundCube.vertexShader,fragmentShader:Ol.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Al.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(jl),l.material.toneMapped=pr.getTransfer(i.colorSpace)!==Fn,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new q(new ec(2,2),new hc({name:`BackgroundMaterial`,uniforms:sc(Ol.background.uniforms),vertexShader:Ol.background.vertexShader,fragmentShader:Ol.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=pr.getTransfer(i.colorSpace)!==Fn,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(kl,dc(e)),n.buffers.color.setClear(kl.r,kl.g,kl.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function Nl(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function Pl(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function Fl(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(V(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&V(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function Il(e){let t=this,n=null,r=0,i=!1,a=!1,o=new fa,s=new G,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var Ll=4,Rl=6,zl=20,Bl=256,Vl=new $c,Hl=new K,Ul=null,Wl=0,Gl=0,Kl=!1,ql=new W,Jl=new W,Yl=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=ql}=i;Ul=this._renderer.getRenderTarget(),Wl=this._renderer.getActiveCubeFace(),Gl=this._renderer.getActiveMipmapLevel(),Kl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ul,Wl,Gl),this._renderer.xr.enabled=Kl,e.scissorTest=!1,Ql(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ul=this._renderer.getRenderTarget(),Wl=this._renderer.getActiveCubeFace(),Gl=this._renderer.getActiveMipmapLevel(),Kl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ht,minFilter:ht,generateMipmaps:!1,type:Tt,format:Nt,colorSpace:Nn,depthBuffer:!1},r=Zl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zl(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Xl(r)),this._blurMaterial=eu(r,e,t),this._ggxMaterial=$l(r,e,t)}return r}_compileMaterial(e){let t=new q(new aa,e);this._renderer.compile(t,Vl)}_sceneToCubeUV(e,t,n,r,i){let a=new Qc(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(Hl),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new q(new Ao,new Ia({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(Hl),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;Ql(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=nu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=tu());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;Ql(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,Vl)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-Ll?n-d+Ll:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,Ql(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,Vl),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,Ql(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,Vl)}_blur(e,t,n,r){let i=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,i,t,n,a),this._blurPass(i,e,n,n,a)}_blurPass(e,t,n,r,i){let a=this._renderer,o=this._blurMaterial,s=this._lodMeshes[r];s.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=i,c.mipInt.value=this._lodMax-n;let l=this._sizeLods[r];Ql(t,3*l*(r>this._lodMax-Ll?r-this._lodMax+Ll:0),4*(this._cubeSize-l),3*l,2*l),a.setRenderTarget(t),a.render(s,Vl)}};function Xl(e){let t=[],n=[],r=e,i=e-Ll+1+Rl;for(let e=0;e<i;e++){let e=2**r;t.push(e);let i=1/(e-2),a=-i,o=1+i,s=[a,a,o,a,o,o,a,a,o,o,a,o],c=new Float32Array(108),l=new Float32Array(108);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];c.set(r,18*e);for(let t=0;t<6;t++){let n=s[t*2]*2-1,r=s[t*2+1]*2-1;e===0?Jl.set(1,r,n):e===1?Jl.set(-n,1,-r):e===2?Jl.set(-n,r,1):e===3?Jl.set(-1,r,-n):e===4?Jl.set(-n,-1,r):Jl.set(n,r,-1),Jl.toArray(l,(e*6+t)*3)}}let u=new aa;u.setAttribute(`position`,new Wi(c,3)),u.setAttribute(`outputDirection`,new Wi(l,3)),n.push(new q(u,null)),r>Ll&&r--}return{lodMeshes:n,sizeLods:t}}function Zl(e,t,n){let r=new Er(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function Ql(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function $l(e,t,n){return new hc({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:Bl,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ru(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function eu(e,t,n){return new hc({name:`SphericalGaussianBlur`,defines:{SAMPLES:zl,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:ru(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function tu(){return new hc({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:ru(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function nu(){return new hc({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ru(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function ru(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var iu=class extends Er{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new To(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ao(5,5,5),i=new hc({name:`CubemapFromEquirect`,uniforms:sc(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new q(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=ht),new il(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function au(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new iu(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new Yl(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new Yl(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function ou(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&qn(`WebGLRenderer: `+e+` extension not supported.`),t}}}function su(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0||(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++),t}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?Ki:Gi)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function cu(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function lu(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:H(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function uu(e,t,n){let r=new WeakMap,i=new wr;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new Dr(h,p,m,u);g.type=wt,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new U(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function du(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var fu={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function pu(e,t,n,r,i,a){let o=new Er(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=new aa;l.setAttribute(`position`,new qi([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute(`uv`,new qi([0,2,0,0,2,0],2));let u=new gc({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new q(l,u),f=new $c(-1,1,1,-1,0,1),p=null,m=null,h=!1,g,_=null,v=[],y=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<v.length;n++){let r=v[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){v=e,y=v.length>0&&v[0].isRenderPass===!0;let t=o.width,n=o.height;v.length>0&&s===null&&(s=new Er(t,n,{type:Tt,depthBuffer:!1,stencilBuffer:!1}),c=new Er(t,n,{type:Tt,depthBuffer:!1,stencilBuffer:!1}));for(let e=0;e<v.length;e++){let r=v[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(h||e.toneMapping===0&&v.length===0)return!1;if(_=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return y===!1&&e.setRenderTarget(o),g=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return y},this.end=function(e,t){e.toneMapping=g,h=!0;let n=o,r=s;for(let i=0;i<v.length;i++){let a=v[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(p!==e.outputColorSpace||m!==e.toneMapping){p=e.outputColorSpace,m=e.toneMapping,u.defines={},pr.getTransfer(p)===`srgb`&&(u.defines.SRGB_TRANSFER=``);let t=fu[m];t&&(u.defines[t]=``),u.needsUpdate=!0}u.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(_),e.render(d,f),_=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var mu=new Cr,hu=new Do(1,1),gu=new Dr,_u=new Or,vu=new To,yu=[],bu=[],xu=new Float32Array(16),Su=new Float32Array(9),Cu=new Float32Array(4);function wu(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=yu[i];if(a===void 0&&(a=new Float32Array(i),yu[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Tu(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Eu(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Du(e,t){let n=bu[t];n===void 0&&(n=new Int32Array(t),bu[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Ou(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function ku(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Tu(n,t))return;e.uniform2fv(this.addr,t),Eu(n,t)}}function Au(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Tu(n,t))return;e.uniform3fv(this.addr,t),Eu(n,t)}}function ju(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Tu(n,t))return;e.uniform4fv(this.addr,t),Eu(n,t)}}function Mu(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Tu(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Eu(n,t)}else{if(Tu(n,r))return;Cu.set(r),e.uniformMatrix2fv(this.addr,!1,Cu),Eu(n,r)}}function Nu(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Tu(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Eu(n,t)}else{if(Tu(n,r))return;Su.set(r),e.uniformMatrix3fv(this.addr,!1,Su),Eu(n,r)}}function Pu(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Tu(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Eu(n,t)}else{if(Tu(n,r))return;xu.set(r),e.uniformMatrix4fv(this.addr,!1,xu),Eu(n,r)}}function Fu(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Iu(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Tu(n,t))return;e.uniform2iv(this.addr,t),Eu(n,t)}}function Lu(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Tu(n,t))return;e.uniform3iv(this.addr,t),Eu(n,t)}}function Ru(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Tu(n,t))return;e.uniform4iv(this.addr,t),Eu(n,t)}}function zu(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Bu(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Tu(n,t))return;e.uniform2uiv(this.addr,t),Eu(n,t)}}function Vu(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Tu(n,t))return;e.uniform3uiv(this.addr,t),Eu(n,t)}}function Hu(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Tu(n,t))return;e.uniform4uiv(this.addr,t),Eu(n,t)}}function Uu(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(hu.compareFunction=n.isReversedDepthBuffer()?518:515,a=hu):a=mu,n.setTexture2D(t||a,i)}function Wu(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||_u,i)}function Gu(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||vu,i)}function Ku(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||gu,i)}function qu(e){switch(e){case 5126:return Ou;case 35664:return ku;case 35665:return Au;case 35666:return ju;case 35674:return Mu;case 35675:return Nu;case 35676:return Pu;case 5124:case 35670:return Fu;case 35667:case 35671:return Iu;case 35668:case 35672:return Lu;case 35669:case 35673:return Ru;case 5125:return zu;case 36294:return Bu;case 36295:return Vu;case 36296:return Hu;case 35678:case 36198:case 36298:case 36306:case 35682:return Uu;case 35679:case 36299:case 36307:return Wu;case 35680:case 36300:case 36308:case 36293:return Gu;case 36289:case 36303:case 36311:case 36292:return Ku}}function Ju(e,t){e.uniform1fv(this.addr,t)}function Yu(e,t){let n=wu(t,this.size,2);e.uniform2fv(this.addr,n)}function Xu(e,t){let n=wu(t,this.size,3);e.uniform3fv(this.addr,n)}function Zu(e,t){let n=wu(t,this.size,4);e.uniform4fv(this.addr,n)}function Qu(e,t){let n=wu(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function $u(e,t){let n=wu(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function ed(e,t){let n=wu(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function td(e,t){e.uniform1iv(this.addr,t)}function nd(e,t){e.uniform2iv(this.addr,t)}function rd(e,t){e.uniform3iv(this.addr,t)}function id(e,t){e.uniform4iv(this.addr,t)}function ad(e,t){e.uniform1uiv(this.addr,t)}function od(e,t){e.uniform2uiv(this.addr,t)}function sd(e,t){e.uniform3uiv(this.addr,t)}function cd(e,t){e.uniform4uiv(this.addr,t)}function ld(e,t,n){let r=this.cache,i=t.length,a=Du(n,i);Tu(r,a)||(e.uniform1iv(this.addr,a),Eu(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?hu:mu;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function ud(e,t,n){let r=this.cache,i=t.length,a=Du(n,i);Tu(r,a)||(e.uniform1iv(this.addr,a),Eu(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||_u,a[e])}function dd(e,t,n){let r=this.cache,i=t.length,a=Du(n,i);Tu(r,a)||(e.uniform1iv(this.addr,a),Eu(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||vu,a[e])}function fd(e,t,n){let r=this.cache,i=t.length,a=Du(n,i);Tu(r,a)||(e.uniform1iv(this.addr,a),Eu(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||gu,a[e])}function pd(e){switch(e){case 5126:return Ju;case 35664:return Yu;case 35665:return Xu;case 35666:return Zu;case 35674:return Qu;case 35675:return $u;case 35676:return ed;case 5124:case 35670:return td;case 35667:case 35671:return nd;case 35668:case 35672:return rd;case 35669:case 35673:return id;case 5125:return ad;case 36294:return od;case 36295:return sd;case 36296:return cd;case 35678:case 36198:case 36298:case 36306:case 35682:return ld;case 35679:case 36299:case 36307:return ud;case 35680:case 36300:case 36308:case 36293:return dd;case 36289:case 36303:case 36311:case 36292:return fd}}var md=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=qu(t.type)}},hd=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=pd(t.type)}},gd=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},_d=/(\w+)(\])?(\[|\.)?/g;function vd(e,t){e.seq.push(t),e.map[t.id]=t}function yd(e,t,n){let r=e.name,i=r.length;for(_d.lastIndex=0;;){let a=_d.exec(r),o=_d.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){vd(n,l===void 0?new md(s,e,t):new hd(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new gd(s),vd(n,e)),n=e}}}var bd=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);yd(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function xd(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Sd=37297,Cd=0;function wd(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var Td=new G;function Ed(e){pr._getMatrix(Td,pr.workingColorSpace,e);let t=`mat3( ${Td.elements.map(e=>e.toFixed(4))} )`;switch(pr.getTransfer(e)){case Pn:return[t,`LinearTransferOETF`];case Fn:return[t,`sRGBTransferOETF`];default:return V(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function Dd(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+wd(e.getShaderSource(t),r)}return i}function Od(e,t){let n=Ed(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var kd={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function Ad(e,t){let n=kd[t];return n===void 0?(V(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var jd=new W;function Md(){return pr.getLuminanceCoefficients(jd),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${jd.x.toFixed(4)}, ${jd.y.toFixed(4)}, ${jd.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function Nd(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(Id).join(`
`)}function Pd(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function Fd(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Id(e){return e!==``}function Ld(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Rd(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var zd=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bd(e){return e.replace(zd,Hd)}var Vd=new Map;function Hd(e,t){let n=Dl[t];if(n===void 0){let e=Vd.get(t);if(e!==void 0)n=Dl[e],V(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return Bd(n)}var Ud=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wd(e){return e.replace(Ud,Gd)}function Gd(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function Kd(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var qd={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function Jd(e){return qd[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var Yd={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function Xd(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:Yd[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var Zd={302:`ENVMAP_MODE_REFRACTION`};function Qd(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:Zd[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var $d={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function ef(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:$d[e.combine]||`ENVMAP_BLENDING_NONE`}function tf(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function nf(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=Jd(n),l=Xd(n),u=Qd(n),d=ef(n),f=tf(n),p=Nd(n),m=Pd(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Id).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Id).join(`
`),_.length>0&&(_+=`
`)):(g=[Kd(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(Id).join(`
`),_=[Kd(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:Dl.tonemapping_pars_fragment,n.toneMapping===0?``:Ad(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,Dl.colorspace_pars_fragment,Od(`linearToOutputTexel`,n.outputColorSpace),Md(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(Id).join(`
`)),o=Bd(o),o=Ld(o,n),o=Rd(o,n),s=Bd(s),s=Ld(s,n),s=Rd(s,n),o=Wd(o),s=Wd(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=xd(i,i.VERTEX_SHADER,y),S=xd(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=Dd(i,x,`vertex`),n=Dd(i,S,`fragment`);H(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):V(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new bd(i,h),T=Fd(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,Sd)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Cd++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var rf=0,af=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new of(e),t.set(e,n)),n}},of=class{constructor(e){this.id=rf++,this.code=e,this.usedTimes=0}};function sf(e){return e===1030||e===37490||e===36285}function cf(e,t,n,r,i,a){let o=new Br,s=new af,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&V(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,O,k,A;if(C){let e=Ol[C];D=e.vertexShader,O=e.fragmentShader}else{D=i.vertexShader,O=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),k=e.id,A=t.id}let j=e.getRenderTarget(),ee=e.state.buffers.depth.getReversed(),M=h.isInstancedMesh===!0,te=h.isBatchedMesh===!0,ne=!!i.map,re=!!i.matcap,ie=!!x,ae=!!i.aoMap,oe=!!i.lightMap,se=!!i.bumpMap&&i.wireframe===!1,N=!!i.normalMap,ce=!!i.displacementMap,le=!!i.emissiveMap,ue=!!i.metalnessMap,de=!!i.roughnessMap,fe=i.anisotropy>0,pe=i.clearcoat>0,me=i.dispersion>0,he=i.retroreflectivity>0,ge=i.iridescence>0,_e=i.sheen>0,ve=i.transmission>0,ye=fe&&!!i.anisotropyMap,P=pe&&!!i.clearcoatMap,be=pe&&!!i.clearcoatNormalMap,xe=pe&&!!i.clearcoatRoughnessMap,Se=ge&&!!i.iridescenceMap,F=ge&&!!i.iridescenceThicknessMap,Ce=_e&&!!i.sheenColorMap,I=_e&&!!i.sheenRoughnessMap,we=!!i.specularMap,L=!!i.specularColorMap,R=!!i.specularIntensityMap,z=ve&&!!i.transmissionMap,B=ve&&!!i.thicknessMap,Te=!!i.gradientMap,Ee=!!i.alphaMap,De=i.alphaTest>0,Oe=!!i.alphaHash,ke=!!i.extensions,Ae=0;i.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Ae=e.toneMapping);let je={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:O,defines:i.defines,customVertexShaderID:k,customFragmentShaderID:A,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:te,batchingColor:te&&h._colorsTexture!==null,instancing:M,instancingColor:M&&h.instanceColor!==null,instancingMorph:M&&h.morphTexture!==null,outputColorSpace:j===null?e.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:pr.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:ne,matcap:re,envMap:ie,envMapMode:ie&&x.mapping,envMapCubeUVHeight:S,aoMap:ae,lightMap:oe,bumpMap:se,normalMap:N,displacementMap:ce,emissiveMap:le,normalMapObjectSpace:N&&i.normalMapType===1,normalMapTangentSpace:N&&i.normalMapType===0,packedNormalMap:N&&i.normalMapType===0&&sf(i.normalMap.format),metalnessMap:ue,roughnessMap:de,anisotropy:fe,anisotropyMap:ye,clearcoat:pe,clearcoatMap:P,clearcoatNormalMap:be,clearcoatRoughnessMap:xe,dispersion:me,retroreflection:he,iridescence:ge,iridescenceMap:Se,iridescenceThicknessMap:F,sheen:_e,sheenColorMap:Ce,sheenRoughnessMap:I,specularMap:we,specularColorMap:L,specularIntensityMap:R,transmission:ve,transmissionMap:z,thicknessMap:B,gradientMap:Te,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Ee,alphaTest:De,alphaHash:Oe,combine:i.combine,mapUv:ne&&m(i.map.channel),aoMapUv:ae&&m(i.aoMap.channel),lightMapUv:oe&&m(i.lightMap.channel),bumpMapUv:se&&m(i.bumpMap.channel),normalMapUv:N&&m(i.normalMap.channel),displacementMapUv:ce&&m(i.displacementMap.channel),emissiveMapUv:le&&m(i.emissiveMap.channel),metalnessMapUv:ue&&m(i.metalnessMap.channel),roughnessMapUv:de&&m(i.roughnessMap.channel),anisotropyMapUv:ye&&m(i.anisotropyMap.channel),clearcoatMapUv:P&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:be&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:F&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:I&&m(i.sheenRoughnessMap.channel),specularMapUv:we&&m(i.specularMap.channel),specularColorMapUv:L&&m(i.specularColorMap.channel),specularIntensityMapUv:R&&m(i.specularIntensityMap.channel),transmissionMapUv:z&&m(i.transmissionMap.channel),thicknessMapUv:B&&m(i.thicknessMap.channel),alphaMapUv:Ee&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(N||fe),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(ne||Ee),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&N===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ee,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ae,decodeVideoTexture:ne&&i.map.isVideoTexture===!0&&pr.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:le&&i.emissiveMap.isVideoTexture===!0&&pr.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:ke&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(ke&&i.extensions.multiDraw===!0||te)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return je.vertexUv1s=c.has(1),je.vertexUv2s=c.has(2),je.vertexUv3s=c.has(3),c.clear(),je}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=Ol[t];n=fc.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new nf(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function lf(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function uf(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function df(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function ff(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||uf),r.length>1&&r.sort(t||df),i.length>1&&i.sort(t||df)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function pf(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new ff,e.set(t,[i])):n>=r.length?(i=new ff,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function mf(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new W,color:new K};break;case`SpotLight`:n={position:new W,direction:new W,color:new K,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new W,color:new K,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new W,skyColor:new K,groundColor:new K};break;case`RectAreaLight`:n={color:new K,position:new W,halfWidth:new W,halfHeight:new W}}return e[t.id]=n,n}}}function hf(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new U};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new U};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new U,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var gf=0;function _f(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function vf(e){let t=new mf,n=hf(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new W);let i=new W,a=new kr,o=new kr;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(_f);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=J.LTC_FLOAT_1,r.rectAreaLTC2=J.LTC_FLOAT_2):(r.rectAreaLTC1=J.LTC_HALF_1,r.rectAreaLTC2=J.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=gf++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function yf(e){let t=new vf(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function bf(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new yf(e),t.set(n,[a])):r>=i.length?(a=new yf(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var xf=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Sf=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Cf=[new W(1,0,0),new W(-1,0,0),new W(0,1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1)],wf=[new W(0,-1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1),new W(0,-1,0),new W(0,-1,0)],Tf=new kr,Ef=new W,Df=new W;function Of(e,t,n){let r=new lo,i=new U,a=new U,o=new wr,s=new vc,c=new yc,l={},u=n.maxTextureSize,d={0:1,1:0,2:2},f=new hc({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new U},radius:{value:4}},vertexShader:xf,fragmentShader:Sf}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new aa;m.setAttribute(`position`,new Wi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let h=new q(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let _=this.type;this.render=function(t,n,s){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||t.length===0)return;this.type===2&&(V(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.state;f.setBlending(0),f.buffers.depth.getReversed()===!0?f.buffers.color.setClear(0,0,0,0):f.buffers.color.setClear(1,1,1,1),f.buffers.depth.setTest(!0),f.setScissorTest(!1);let p=_!==this.type;p&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){V(`WebGLShadowMap:`,l,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let m=d.getFrameExtents();i.multiply(m),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/m.x),i.x=a.x*m.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/m.y),i.y=a.y*m.y,d.mapSize.y=a.y));let h=e.state.buffers.depth.getReversed();if(d.camera._reversedDepth=h,d.map===null||p===!0){if(d.map!==null&&(d.map.depthTexture!==null&&(d.map.depthTexture.dispose(),d.map.depthTexture=null),d.map.dispose()),this.type===3){if(l.isPointLight){V(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}d.map=new Er(i.x,i.y,{format:Rt,type:Tt,minFilter:ht,magFilter:ht,generateMipmaps:!1}),d.map.texture.name=l.name+`.shadowMap`,d.map.depthTexture=new Do(i.x,i.y,wt),d.map.depthTexture.name=l.name+`.shadowMapDepth`,d.map.depthTexture.format=Pt,d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=ft,d.map.depthTexture.magFilter=ft}else l.isPointLight?(d.map=new iu(i.x),d.map.depthTexture=new Oo(i.x,Ct)):(d.map=new Er(i.x,i.y),d.map.depthTexture=new Do(i.x,i.y,Ct)),d.map.depthTexture.name=l.name+`.shadowMap`,d.map.depthTexture.format=Pt,this.type===1?(d.map.depthTexture.compareFunction=h?518:515,d.map.depthTexture.minFilter=ht,d.map.depthTexture.magFilter=ht):(d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=ft,d.map.depthTexture.magFilter=ft);d.camera.updateProjectionMatrix()}d.map.isWebGLCubeRenderTarget!==!0&&(d.map.width!==i.x||d.map.height!==i.y)&&d.map.setSize(i.x,i.y);let g=d.map.isWebGLCubeRenderTarget?6:d.getViewportCount();l.isPointLight!==!0&&d.updateMatrices(l,s);for(let t=0;t<g;t++){let i=d.getCamera(t);if(l.isPointLight){let e=d.camera,n=d.matrix,r=l.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),Ef.setFromMatrixPosition(l.matrixWorld),e.position.copy(Ef),Df.copy(e.position),Df.add(Cf[t]),e.up.copy(wf[t]),e.lookAt(Df),e.updateMatrixWorld(),n.makeTranslation(-Ef.x,-Ef.y,-Ef.z),Tf.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),d._frustum.setFromProjectionMatrix(Tf,e.coordinateSystem,e.reversedDepth)}if(d.map.isWebGLCubeRenderTarget)e.setRenderTarget(d.map,t),e.clear();else{t===0&&(e.setRenderTarget(d.map),e.clear());let n=d.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),f.viewport(o)}r=d.getFrustum(t),b(n,s,i,l,this.type)}d.isPointLightShadow!==!0&&this.type===3&&v(d,s),d.needsUpdate=!1}_=this.type,g.needsUpdate=!1,e.setRenderTarget(c,l,d)};function v(n,r){let a=t.update(h);f.defines.VSM_SAMPLES!==n.blurSamples&&(f.defines.VSM_SAMPLES=n.blurSamples,p.defines.VSM_SAMPLES=n.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),n.mapPass===null?n.mapPass=new Er(i.x,i.y,{format:Rt,type:Tt}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),f.uniforms.shadow_pass.value=n.map.depthTexture,f.uniforms.resolution.value.set(n.map.width,n.map.height),f.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,f,h,null),p.uniforms.shadow_pass.value=n.mapPass.texture,p.uniforms.resolution.value.set(n.map.width,n.map.height),p.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,p,h,null)}function y(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,x)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function b(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=y(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=y(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)b(c[e],i,a,o,s)}function x(e){e.target.removeEventListener(`dispose`,x);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function kf(e,t){function n(){let t=!1,n=new wr,r=null,i=new wr(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?ue(e.DEPTH_TEST):de(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=Yn[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?ue(e.STENCIL_TEST):de(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new K(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,ee=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),M=!1,te=0,ne=e.getParameter(e.VERSION);ne.indexOf(`WebGL`)===-1?ne.indexOf(`OpenGL ES`)!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),M=te>=2):(te=parseFloat(/^WebGL (\d)/.exec(ne)[1]),M=te>=1);let re=null,ie={},ae=e.getParameter(e.SCISSOR_BOX),oe=e.getParameter(e.VIEWPORT),se=new wr().fromArray(ae),N=new wr().fromArray(oe);function ce(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let le={};le[e.TEXTURE_2D]=ce(e.TEXTURE_2D,e.TEXTURE_2D,1),le[e.TEXTURE_CUBE_MAP]=ce(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[e.TEXTURE_2D_ARRAY]=ce(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),le[e.TEXTURE_3D]=ce(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),ue(e.DEPTH_TEST),o.setFunc(3),ye(!1),P(1),ue(e.CULL_FACE),_e(0);function ue(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function de(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function fe(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function pe(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function me(t){return h!==t&&(e.useProgram(t),h=t,!0)}let he={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};he[103]=e.MIN,he[104]=e.MAX;let ge={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function _e(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(de(e.BLEND),g=!1);else if(g===!1&&(ue(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:H(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:H(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:H(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:H(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}}else a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(he[n],he[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(ge[r],ge[i],ge[o],ge[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function ve(t,n){t.side===2?de(e.CULL_FACE):ue(e.CULL_FACE);let r=t.side===1;n&&(r=!r),ye(r),t.blending===1&&t.transparent===!1?_e(0):_e(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),xe(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?ue(e.SAMPLE_ALPHA_TO_COVERAGE):de(e.SAMPLE_ALPHA_TO_COVERAGE)}function ye(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function P(t){t===0?de(e.CULL_FACE):(ue(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function be(t){t!==k&&(M&&e.lineWidth(t),k=t)}function xe(t,n,r){t?(ue(e.POLYGON_OFFSET_FILL),(A!==n||j!==r)&&(A=n,j=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):de(e.POLYGON_OFFSET_FILL)}function Se(t){t?ue(e.SCISSOR_TEST):de(e.SCISSOR_TEST)}function F(t){t===void 0&&(t=e.TEXTURE0+ee-1),re!==t&&(e.activeTexture(t),re=t)}function Ce(t,n,r){r===void 0&&(r=re===null?e.TEXTURE0+ee-1:re);let i=ie[r];i===void 0&&(i={type:void 0,texture:void 0},ie[r]=i),(i.type!==t||i.texture!==n)&&(re!==r&&(e.activeTexture(r),re=r),e.bindTexture(t,n||le[t]),i.type=t,i.texture=n)}function I(){let t=ie[re];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function we(){try{e.compressedTexImage2D(...arguments)}catch(e){H(`WebGLState:`,e)}}function L(){try{e.compressedTexImage3D(...arguments)}catch(e){H(`WebGLState:`,e)}}function R(){try{e.texSubImage2D(...arguments)}catch(e){H(`WebGLState:`,e)}}function z(){try{e.texSubImage3D(...arguments)}catch(e){H(`WebGLState:`,e)}}function B(){try{e.compressedTexSubImage2D(...arguments)}catch(e){H(`WebGLState:`,e)}}function Te(){try{e.compressedTexSubImage3D(...arguments)}catch(e){H(`WebGLState:`,e)}}function Ee(){try{e.texStorage2D(...arguments)}catch(e){H(`WebGLState:`,e)}}function De(){try{e.texStorage3D(...arguments)}catch(e){H(`WebGLState:`,e)}}function Oe(){try{e.texImage2D(...arguments)}catch(e){H(`WebGLState:`,e)}}function ke(){try{e.texImage3D(...arguments)}catch(e){H(`WebGLState:`,e)}}function Ae(t){return d[t]===void 0?e.getParameter(t):d[t]}function je(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function Me(t){se.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),se.copy(t))}function Ne(t){N.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),N.copy(t))}function Pe(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Fe(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function Ie(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},re=null,ie={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new K(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,se.set(0,0,e.canvas.width,e.canvas.height),N.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:ue,disable:de,bindFramebuffer:fe,drawBuffers:pe,useProgram:me,setBlending:_e,setMaterial:ve,setFlipSided:ye,setCullFace:P,setLineWidth:be,setPolygonOffset:xe,setScissorTest:Se,activeTexture:F,bindTexture:Ce,unbindTexture:I,compressedTexImage2D:we,compressedTexImage3D:L,texImage2D:Oe,texImage3D:ke,pixelStorei:je,getParameter:Ae,updateUBOMapping:Pe,uniformBlockBinding:Fe,texStorage2D:Ee,texStorage3D:De,texSubImage2D:R,texSubImage3D:z,compressedTexSubImage2D:B,compressedTexSubImage3D:Te,scissor:Me,viewport:Ne,reset:Ie}}function Af(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),l=new U,u=new WeakMap,d=new Set,f,p=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function h(e,t){return m?new OffscreenCanvas(e,t):Hn(`canvas`)}function g(e,t,n){let r=1,i=we(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);f===void 0&&(f=h(n,a));let o=t?h(n,a):f;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),V(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&V(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function _(e){return e.generateMipmaps}function v(t){e.generateMipmap(t)}function y(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function b(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];V(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||V(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?Pn:pr.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function x(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,V(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function S(e,t){return _(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function C(e){let t=e.target;t.removeEventListener(`dispose`,C),T(t),t.isVideoTexture&&u.delete(t),t.isHTMLTexture&&d.delete(t)}function w(e){let t=e.target;t.removeEventListener(`dispose`,w),D(t)}function T(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=p.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&E(e),Object.keys(i).length===0&&p.delete(n)}r.remove(e)}function E(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=p.get(i);delete a[n.__cacheKey],o.memory.textures--}function D(t){let n=r.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),r.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=r.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(i[t])}r.remove(t)}let O=0;function k(){O=0}function A(){return O}function j(e){O=e}function ee(){let e=O;return e>=i.maxTextures&&V(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+i.maxTextures),O+=1,e}function M(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function te(t,i){let a=r.get(t);if(t.isVideoTexture&&Ce(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)V(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)V(`WebGLRenderer: Texture marked for update but image is incomplete`);else{de(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function ne(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?de(a,t,i):(t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i))}function re(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?de(a,t,i):n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function ie(t,i){let a=r.get(t);t.isCubeDepthTexture!==!0&&t.version>0&&a.__version!==t.version?fe(a,t,i):n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let ae={[lt]:e.REPEAT,[ut]:e.CLAMP_TO_EDGE,[dt]:e.MIRRORED_REPEAT},oe={[ft]:e.NEAREST,[pt]:e.NEAREST_MIPMAP_NEAREST,[mt]:e.NEAREST_MIPMAP_LINEAR,[ht]:e.LINEAR,[gt]:e.LINEAR_MIPMAP_NEAREST,[_t]:e.LINEAR_MIPMAP_LINEAR},se={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function N(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&V(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,ae[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,ae[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,ae[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,oe[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,oe[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,se[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function ce(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,C));let i=n.source,a=p.get(i);a===void 0&&(a={},p.set(i,a));let s=M(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&E(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function le(e,t,n){return Math.floor(Math.floor(e/n)/t)}function ue(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=le(n.start,r.width,4),c=le(t.start,r.width,4);n.start<=i+1&&a===c&&le(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function de(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=ce(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let f=r.get(u);if(u.version!==f.__version||l===!0){if(n.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&o.image instanceof ImageBitmap)){let t=pr.getPrimaries(pr.workingColorSpace),r=o.colorSpace===``?null:pr.getPrimaries(o.colorSpace),i=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment);let t=g(o.image,!1,i.maxTextureSize);t=I(o,t);let r=a.convert(o.format,o.colorSpace),p=a.convert(o.type),m=b(o.internalFormat,r,p,o.normalized,o.colorSpace,o.isVideoTexture);N(c,o);let h,y=o.mipmaps,C=o.isVideoTexture!==!0,w=f.__version===void 0||l===!0,T=u.dataReady,E=S(o,t);if(o.isDepthTexture)m=x(o.format===Ft,o.type),w&&(C?n.texStorage2D(e.TEXTURE_2D,1,m,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,null));else if(o.isDataTexture){if(y.length>0){C&&w&&n.texStorage2D(e.TEXTURE_2D,E,m,y[0].width,y[0].height);for(let t=0,i=y.length;t<i;t++)h=y[t],C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data);o.generateMipmaps=!1}else C?(w&&n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height),T&&ue(o,t,r,p)):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,t.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){C&&w&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,y[0].width,y[0].height,t.depth);for(let i=0,a=y.length;i<a;i++)if(h=y[i],o.format!==1023){if(r!==null){if(C){if(T){if(o.layerUpdates.size>0){let t=Cl(h.width,h.height,o.format,o.type);for(let a of o.layerUpdates){let o=h.data.subarray(a*t/h.data.BYTES_PER_ELEMENT,(a+1)*t/h.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,h.width,h.height,1,r,o)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,h.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,h.data,0,0)}else V(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else C?T&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,p,h.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,r,p,h.data);o.layerUpdates.size>0&&o.clearLayerUpdates()}else{C&&w&&n.texStorage2D(e.TEXTURE_2D,E,m,y[0].width,y[0].height);for(let t=0,i=y.length;t<i;t++)h=y[t],o.format===1023?C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data):r===null?V(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):C?T&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,h.data):n.compressedTexImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,h.data)}}else if(o.isDataArrayTexture){if(C){if(w&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,t.width,t.height,t.depth),T){if(o.layerUpdates.size>0){let i=Cl(t.width,t.height,o.format,o.type);for(let a of o.layerUpdates){let o=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,r,p,o)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,m,t.width,t.height,t.depth,0,r,p,t.data)}else if(o.isData3DTexture)C?(w&&n.texStorage3D(e.TEXTURE_3D,E,m,t.width,t.height,t.depth),T&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)):n.texImage3D(e.TEXTURE_3D,0,m,t.width,t.height,t.depth,0,r,p,t.data);else if(o.isFramebufferTexture){if(w){if(C)n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<E;t++)n.texImage2D(e.TEXTURE_2D,t,m,i,a,0,r,p,null),i>>=1,a>>=1}}}else if(o.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),d.add(o),n.onpaint=e=>{let t=e.changedElements;for(let e of d)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(y.length>0){if(C&&w){let t=we(y[0]);n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height)}for(let t=0,i=y.length;t<i;t++)h=y[t],C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,p,h):n.texImage2D(e.TEXTURE_2D,t,m,r,p,h);o.generateMipmaps=!1}else if(C){if(w){let r=we(t);n.texStorage2D(e.TEXTURE_2D,E,m,r.width,r.height)}T&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,p,t)}else n.texImage2D(e.TEXTURE_2D,0,m,r,p,t);_(o)&&v(c),f.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function fe(t,o,s){if(o.image.length!==6)return;let c=ce(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=pr.getPrimaries(pr.workingColorSpace),r=o.colorSpace===``?null:pr.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=g(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=I(o,m[e]);let h=m[0],y=a.convert(o.format,o.colorSpace),x=a.convert(o.type),C=b(o.internalFormat,y,x,o.normalized,o.colorSpace),w=o.isVideoTexture!==!0,T=u.__version===void 0||c===!0,E=l.dataReady,D=S(o,h);N(e.TEXTURE_CUBE_MAP,o);let O;if(f){w&&T&&n.texStorage2D(e.TEXTURE_CUBE_MAP,D,C,h.width,h.height);for(let t=0;t<6;t++){O=m[t].mipmaps;for(let r=0;r<O.length;r++){let i=O[r];o.format===1023?w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,y,x,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,y,x,i.data):y===null?V(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):w?E&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,y,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,i.data)}}}else{if(O=o.mipmaps,w&&T){O.length>0&&D++;let t=we(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,D,C,t.width,t.height)}for(let t=0;t<6;t++)if(p){w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,y,x,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,m[t].width,m[t].height,0,y,x,m[t].data);for(let r=0;r<O.length;r++){let i=O[r].image[t].image;w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,y,x,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,i.width,i.height,0,y,x,i.data)}}else{w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,y,x,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,y,x,m[t]);for(let r=0;r<O.length;r++){let i=O[r];w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,y,x,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,y,x,i.image[t])}}}_(o)&&v(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function pe(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=b(o.internalFormat,d,f,o.normalized,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),F(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,Se(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function me(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=x(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;F(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Se(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Se(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=b(o.internalFormat,c,l,o.normalized,o.colorSpace);F(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Se(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Se(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function he(t,i,o){let c=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let l=r.get(i.depthTexture);if(l.__renderTarget=i,(!l.__webglTexture||i.depthTexture.image.width!==i.width||i.depthTexture.image.height!==i.height)&&(i.depthTexture.image.width=i.width,i.depthTexture.image.height=i.height,i.depthTexture.needsUpdate=!0),c){if(l.__webglInit===void 0&&(l.__webglInit=!0,i.depthTexture.addEventListener(`dispose`,C)),l.__webglTexture===void 0){l.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,l.__webglTexture),N(e.TEXTURE_CUBE_MAP,i.depthTexture);let t=a.convert(i.depthTexture.format),r=a.convert(i.depthTexture.type),o;i.depthTexture.format===1026?o=e.DEPTH_COMPONENT24:i.depthTexture.format===1027&&(o=e.DEPTH24_STENCIL8);for(let n=0;n<6;n++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,o,i.width,i.height,0,t,r,null)}}else te(i.depthTexture,0);let u=l.__webglTexture,d=Se(i),f=c?e.TEXTURE_CUBE_MAP_POSITIVE_X+o:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)F(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)F(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function ge(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)he(i.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?he(i.__webglFramebuffer[0],t,0):he(i.__webglFramebuffer,t,0)}}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),me(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),me(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function _e(t,n,i){let a=r.get(t);n!==void 0&&pe(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&ge(t)}function ve(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,w);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&F(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=b(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=Se(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),me(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),N(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps&&i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)pe(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else pe(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);_(i)&&v(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),N(c,a),pe(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),_(a)&&v(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),N(r,i),i.mipmaps&&i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)pe(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else pe(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);_(i)&&v(r),n.unbindTexture()}t.depthBuffer&&ge(t)}function ye(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(_(a)){let t=y(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),v(t),n.unbindTexture()}}}let P=[],be=[];function xe(t){if(t.samples>0){if(F(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer);let f=t.texture.mipmaps;f&&f.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(P.length=0,be.length=0,P.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&(P.push(l),be.push(l),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,be)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,P))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function Se(e){return Math.min(i.maxSamples,e.samples)}function F(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function Ce(e){let t=o.render.frame;u.get(e)!==t&&(u.set(e,t),e.update())}function I(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(pr.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&V(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):H(`WebGLTextures: Unsupported texture color space:`,n)),t}function we(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(l.width=e.naturalWidth||e.width,l.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(l.width=e.displayWidth,l.height=e.displayHeight):(l.width=e.width,l.height=e.height),l}this.allocateTextureUnit=ee,this.resetTextureUnits=k,this.getTextureUnits=A,this.setTextureUnits=j,this.setTexture2D=te,this.setTexture2DArray=ne,this.setTexture3D=re,this.setTextureCube=ie,this.rebindTextures=_e,this.setupRenderTarget=ve,this.updateRenderTargetMipmap=ye,this.updateMultisampleRenderTarget=xe,this.setupDepthRenderbuffer=ge,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=F,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function jf(e,t){function n(n,r=``){let i,a=pr.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var Mf=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Nf=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Pf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ko(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new hc({vertexShader:Mf,fragmentShader:Nf,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new q(new ec(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ff=class extends Xn{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=typeof XRWebGLBinding<`u`,h=new Pf,g={},_=t.getContextAttributes(),v=null,y=null,b=[],x=[],S=new U,C=null,w=null,T=new Qc;T.viewport=new wr;let E=new Qc;E.viewport=new wr;let D=[T,E],O=new al,k=null,A=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=b[e];return t===void 0&&(t=new ai,b[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=b[e];return t===void 0&&(t=new ai,b[e]=t),t.getGripSpace()},this.getHand=function(e){let t=b[e];return t===void 0&&(t=new ai,b[e]=t),t.getHandSpace()};function j(e){let t=x.indexOf(e.inputSource);if(t===-1)return;let n=b[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function ee(){r.removeEventListener(`select`,j),r.removeEventListener(`selectstart`,j),r.removeEventListener(`selectend`,j),r.removeEventListener(`squeeze`,j),r.removeEventListener(`squeezestart`,j),r.removeEventListener(`squeezeend`,j),r.removeEventListener(`end`,ee),r.removeEventListener(`inputsourceschange`,M);for(let e=0;e<b.length;e++){let t=x[e];t!==null&&(x[e]=null,b[e].disconnect(t))}k=null,A=null,h.reset();for(let e in g)delete g[e];if(e.setRenderTarget(v),f=null,d=null,u=null,r=null,y=null,N.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(S.width,S.height,!1),w!==null){let e=w.camera;e.fov=w.fov,e.zoom=w.zoom,e.updateProjectionMatrix(),w=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&V(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&V(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(v=e.getRenderTarget(),r.addEventListener(`select`,j),r.addEventListener(`selectstart`,j),r.addEventListener(`selectend`,j),r.addEventListener(`squeeze`,j),r.addEventListener(`squeezestart`,j),r.addEventListener(`squeezeend`,j),r.addEventListener(`end`,ee),r.addEventListener(`inputsourceschange`,M),_.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(S),m&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;_.depth&&(o=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=_.stencil?Ft:Pt,a=_.stencil?Ot:Ct);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new Er(d.textureWidth,d.textureHeight,{format:Nt,type:vt,depthTexture:new Do(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Er(f.framebufferWidth,f.framebufferHeight,{format:Nt,type:vt,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),N.setContext(r),N.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function M(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=x.indexOf(n);r>=0&&(x[r]=null,b[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=x.indexOf(n);if(r===-1){for(let e=0;e<b.length;e++)if(e>=x.length){x.push(n),r=e;break}else if(x[e]===null){x[e]=n,r=e;break}if(r===-1)break}let i=b[r];i&&i.connect(n)}}let te=new W,ne=new W;function re(e,t,n){te.setFromMatrixPosition(t.matrixWorld),ne.setFromMatrixPosition(n.matrixWorld);let r=te.distanceTo(ne),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function ie(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;h.texture!==null&&(h.depthNear>0&&(t=h.depthNear),h.depthFar>0&&(n=h.depthFar)),O.near=E.near=T.near=t,O.far=E.far=T.far=n,(k!==O.near||A!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),k=O.near,A=O.far),O.layers.mask=e.layers.mask|6,T.layers.mask=O.layers.mask&-5,E.layers.mask=O.layers.mask&-3;let i=e.parent,a=O.cameras;ie(O,i);for(let e=0;e<a.length;e++)ie(a[e],i);a.length===2?re(O,T,E):O.projectionMatrix.copy(T.projectionMatrix),w===null&&e.isPerspectiveCamera&&(w={camera:e,fov:e.fov,zoom:e.zoom}),ae(e,O,i)};function ae(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=$n*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(d!==null||f!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(O)},this.getCameraTexture=function(e){return g[e]};let oe=null;function se(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let i=!1;t.length!==O.cameras.length&&(O.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(f!==null)a=f.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(y,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(y))}let o=D[n];o===void 0&&(o=new Qc,o.layers.enable(n),o.viewport=new wr,D[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(O.matrix.copy(o.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),i===!0&&O.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&m){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&h.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&m){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=g[n];e||(e=new ko,g[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<b.length;e++){let t=x[e],n=b[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}oe&&oe(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let N=new Tl;N.setAnimationLoop(se),this.setAnimationLoop=function(e){oe=e},this.dispose=function(){}}},If=new kr,Lf=new G;Lf.set(-1,0,0,0,1,0,0,0,1);function Rf(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,dc(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(If.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(Lf),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function zf(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return H(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?V(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):V(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var Bf=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Vf=null;function Hf(){return Vf===null&&(Vf=new Xa(Bf,16,16,Rt,Tt),Vf.name=`DFG_LUT`,Vf.minFilter=ht,Vf.magFilter=ht,Vf.wrapS=ut,Vf.wrapT=ut,Vf.generateMipmaps=!1,Vf.needsUpdate=!0),Vf}var Uf=class{constructor(e={}){let{canvas:t=Un(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=vt}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);p=n.getContextAttributes().alpha}else p=a;let m=f,h=new Set([Bt,zt,Lt]),g=new Set([vt,Ct,xt,Ot,Et,Dt]),_=new Uint32Array(4),v=new Int32Array(4),y=new W,b=null,x=null,S=[],C=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,E=!1,D=null,O=null,k=null,A=null;this._outputColorSpace=Mn;let j=0,ee=0,M=null,te=-1,ne=null,re=new wr,ie=new wr,ae=null,oe=new K(0),se=0,N=t.width,ce=t.height,le=1,ue=null,de=null,fe=new wr(0,0,N,ce),pe=new wr(0,0,N,ce),me=!1,he=new lo,ge=!1,_e=!1,ve=new kr,ye=new W,P=new wr,be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},xe=!1;function Se(){return M===null?le:1}let F=n;function Ce(e,n){return t.getContext(e,n)}let I,we,L,R,z,B,Te,Ee,De,Oe,ke,Ae,je,Me,Ne,Pe,Fe,Ie,Le,Re,ze,Be,Ve;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r186`),t.addEventListener(`webglcontextlost`,We,!1),t.addEventListener(`webglcontextrestored`,Ge,!1),t.addEventListener(`webglcontextcreationerror`,Ke,!1),F===null){let t=`webgl2`;if(F=Ce(t,e),F===null)throw Ce(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}He()}catch(e){throw t.removeEventListener(`webglcontextlost`,We,!1),t.removeEventListener(`webglcontextrestored`,Ge,!1),t.removeEventListener(`webglcontextcreationerror`,Ke,!1),H(`WebGLRenderer: `+e.message),e}function He(){I=new ou(F),I.init(),ze=new jf(F,I),we=new Fl(F,I,e,ze),L=new kf(F,I),we.reversedDepthBuffer&&d&&L.buffers.depth.setReversed(!0),O=F.createFramebuffer(),k=F.createFramebuffer(),A=F.createFramebuffer(),R=new lu(F),z=new lf,B=new Af(F,I,L,z,we,ze,R),Te=new au(T),Ee=new El(F),Be=new Nl(F,Ee),De=new su(F,Ee,R,Be),Oe=new du(F,De,Ee,Be,R),Ie=new uu(F,we,B),Ne=new Il(z),ke=new cf(T,Te,I,we,Be,Ne),Ae=new Rf(T,z),je=new pf,Me=new bf(I),Fe=new Ml(T,Te,L,Oe,p,s),Pe=new Of(T,Oe,we),Ve=new zf(F,R,we,L),Le=new Pl(F,I,R),Re=new cu(F,I,R),R.programs=ke.programs,T.capabilities=we,T.extensions=I,T.properties=z,T.renderLists=je,T.shadowMap=Pe,T.state=L,T.info=R}m!==1009&&(w=new pu(m,t.width,t.height,o,r,i));let Ue=new Ff(T,F);this.xr=Ue,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let e=I.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=I.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return le},this.setPixelRatio=function(e){e!==void 0&&(le=e,this.setSize(N,ce,!1))},this.getSize=function(e){return e.set(N,ce)},this.setSize=function(e,n,r=!0){Ue.isPresenting?V(`WebGLRenderer: Can't change size while VR device is presenting.`):(N=e,ce=n,t.width=Math.floor(e*le),t.height=Math.floor(n*le),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(N*le,ce*le).floor()},this.setDrawingBufferSize=function(e,n,r){N=e,ce=n,le=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(m===1009)H(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){V(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}w.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(re)},this.getViewport=function(e){return e.copy(fe)},this.setViewport=function(e,t,n,r){e.isVector4?fe.set(e.x,e.y,e.z,e.w):fe.set(e,t,n,r),L.viewport(re.copy(fe).multiplyScalar(le).round())},this.getScissor=function(e){return e.copy(pe)},this.setScissor=function(e,t,n,r){e.isVector4?pe.set(e.x,e.y,e.z,e.w):pe.set(e,t,n,r),L.scissor(ie.copy(pe).multiplyScalar(le).round())},this.getScissorTest=function(){return me},this.setScissorTest=function(e){L.setScissorTest(me=e)},this.setOpaqueSort=function(e){ue=e},this.setTransparentSort=function(e){de=e},this.getClearColor=function(e){return e.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor(...arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(M!==null){let t=M.texture.format;e=h.has(t)}if(e){let e=M.texture.type,t=g.has(e),n=Fe.getClearColor(),r=Fe.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(_[0]=i,_[1]=a,_[2]=o,_[3]=r,F.clearBufferuiv(F.COLOR,0,_)):(v[0]=i,v[1]=a,v[2]=o,v[3]=r,F.clearBufferiv(F.COLOR,0,v))}else r|=F.COLOR_BUFFER_BIT}t&&(r|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&F.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),D=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,We,!1),t.removeEventListener(`webglcontextrestored`,Ge,!1),t.removeEventListener(`webglcontextcreationerror`,Ke,!1),Fe.dispose(),je.dispose(),Me.dispose(),z.dispose(),Te.dispose(),Oe.dispose(),Be.dispose(),Ve.dispose(),ke.dispose(),Ue.dispose(),Ue.removeEventListener(`sessionstart`,$e),Ue.removeEventListener(`sessionend`,et),tt.stop()};function We(e){e.preventDefault(),Gn(`WebGLRenderer: Context Lost.`),E=!0}function Ge(){Gn(`WebGLRenderer: Context Restored.`),E=!1;let e=R.autoReset,t=Pe.enabled,n=Pe.autoUpdate,r=Pe.needsUpdate,i=Pe.type;He(),R.autoReset=e,Pe.enabled=t,Pe.autoUpdate=n,Pe.needsUpdate=r,Pe.type=i}function Ke(e){H(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function qe(e){let t=e.target;t.removeEventListener(`dispose`,qe),Je(t)}function Je(e){Ye(e),z.remove(e)}function Ye(e){let t=z.get(e).programs;t!==void 0&&(t.forEach(function(e){ke.releaseProgram(e)}),e.isShaderMaterial&&ke.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=be);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=dt(e,t,n,r,i);L.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=De.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;Be.setup(i,r,s,n,c);let h,g=Le;if(c!==null&&(h=Ee.get(c),g=Re,g.setIndex(h)),i.isMesh)r.wireframe===!0?(L.setLineWidth(r.wireframeLinewidth*Se()),g.setMode(F.LINES)):g.setMode(F.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),L.setLineWidth(e*Se()),i.isLineSegments?g.setMode(F.LINES):i.isLineLoop?g.setMode(F.LINE_LOOP):g.setMode(F.LINE_STRIP)}else i.isPoints?g.setMode(F.POINTS):i.isSprite&&g.setMode(F.TRIANGLES);if(i.isBatchedMesh){if(I.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Ee.get(c).bytesPerElement:1,o=z.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(F,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function Xe(e,t,n,r){D!==null&&e.isNodeMaterial&&D.setObject(r,e),ge===!0&&Ne.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,st(e,t,r),e.side=0,e.needsUpdate=!0,st(e,t,r),e.side=2):st(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),D!==null&&D.renderStart(e,t,n),x=Me.get(n),x.init(t),C.push(x),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),x.setupLights(),D!==null&&D.updateLights(x.state.lightsArray),_e=this.localClippingEnabled,ge=Ne.init(this.clippingPlanes,_e),ge===!0&&Ne.setGlobalState(this.clippingPlanes,t),D!==null&&Pe.render(x.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];Xe(o,n,t,e),r.add(o)}else Xe(i,n,t,e),r.add(i)}}),x=C.pop(),D!==null&&D.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=z.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}I.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let Ze=null;function Qe(e){Ze&&Ze(e)}function $e(){tt.stop()}function et(){tt.start()}let tt=new Tl;tt.setAnimationLoop(Qe),typeof self<`u`&&tt.setContext(self),this.setAnimationLoop=function(e){Ze=e,Ue.setAnimationLoop(e),e===null?tt.stop():tt.start()},Ue.addEventListener(`sessionstart`,$e),Ue.addEventListener(`sessionend`,et),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){H(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(E===!0)return;D!==null&&D.renderStart(e,t);let n=Ue.enabled===!0&&Ue.isPresenting===!0,r=w!==null&&(M===null||n)&&w.begin(T,M);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),Ue.enabled===!0&&Ue.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Ue.cameraAutoUpdate===!0&&Ue.updateCamera(t),t=Ue.getCamera()),e.isScene===!0&&e.onBeforeRender(T,e,t,M),x=Me.get(e,C.length),x.init(t),x.state.textureUnits=B.getTextureUnits(),C.push(x),ve.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),he.setFromProjectionMatrix(ve,zn,t.reversedDepth),_e=this.localClippingEnabled,ge=Ne.init(this.clippingPlanes,_e),b=je.get(e,S.length),b.init(),S.push(b),Ue.enabled===!0&&Ue.isPresenting===!0){let e=T.xr.getDepthSensingMesh();e!==null&&nt(e,t,-1/0,T.sortObjects)}nt(e,t,0,T.sortObjects),b.finish(),D!==null&&D.updateLights(x.state.lightsArray),T.sortObjects===!0&&b.sort(ue,de),xe=Ue.enabled===!1||Ue.isPresenting===!1||Ue.hasDepthSensing()===!1,xe&&Fe.addToRenderList(b,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ge===!0&&Ne.beginShadows();let i=x.state.shadowsArray;if(Pe.render(i,e,t),ge===!0&&Ne.endShadows(),(r&&w.hasRenderPass())===!1){let n=b.opaque,r=b.transmissive;if(x.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];it(n,r,e,a)}xe&&Fe.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];rt(b,e,n,n.viewport)}}else r.length>0&&it(n,r,e,t),xe&&Fe.render(e),rt(b,e,t)}M!==null&&ee===0&&(B.updateMultisampleRenderTarget(M),B.updateRenderTargetMipmap(M)),r&&w.end(T),e.isScene===!0&&e.onAfterRender(T,e,t),Be.resetDefaultState(),te=-1,ne=null,C.pop(),C.length>0?(x=C[C.length-1],B.setTextureUnits(x.state.textureUnits),ge===!0&&Ne.setGlobalState(T.clippingPlanes,x.state.camera)):x=null,S.pop(),b=S.length>0?S[S.length-1]:null,D!==null&&D.renderEnd()};function nt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)x.pushLightProbeGrid(e);else if(e.isLight)x.pushLight(e),e.castShadow&&x.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||e.intersectsFrustum(he)){r&&P.setFromMatrixPosition(e.matrixWorld).applyMatrix4(ve);let i=Oe.update(e),a=e.material;a.visible&&b.push(e,i,a,n,P.z,null,t)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||e.intersectsFrustum(he))){let i=Oe.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),P.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),P.copy(e.boundingSphere.center)),P.applyMatrix4(e.matrixWorld).applyMatrix4(ve)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&b.push(e,i,c,n,P.z,s,t)}}else a.visible&&b.push(e,i,a,n,P.z,null,t)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)nt(i[e],t,n,r)}function rt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;x.setupLightsView(n),ge===!0&&Ne.setGlobalState(T.clippingPlanes,n),r&&L.viewport(re.copy(r)),i.length>0&&at(i,t,n),a.length>0&&at(a,t,n),o.length>0&&at(o,t,n),L.buffers.depth.setTest(!0),L.buffers.depth.setMask(!0),L.buffers.color.setMask(!0),L.setPolygonOffset(!1)}function it(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(x.state.transmissionRenderTarget[r.id]===void 0){let e=I.has(`EXT_color_buffer_half_float`)||I.has(`EXT_color_buffer_float`);x.state.transmissionRenderTarget[r.id]=new Er(1,1,{generateMipmaps:!0,type:e?Tt:vt,minFilter:_t,samples:Math.max(4,we.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:pr.workingColorSpace})}let a=x.state.transmissionRenderTarget[r.id],o=r.viewport||re;a.setSize(o.z*T.transmissionResolutionScale,o.w*T.transmissionResolutionScale);let s=T.getRenderTarget(),c=T.getActiveCubeFace(),l=T.getActiveMipmapLevel();T.setRenderTarget(a),T.getClearColor(oe),se=T.getClearAlpha(),se<1&&T.setClearColor(16777215,.5),T.clear(),xe&&Fe.render(n);let u=T.toneMapping;T.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),x.setupLightsView(r),ge===!0&&Ne.setGlobalState(T.clippingPlanes,r),at(e,n,r),B.updateMultisampleRenderTarget(a),B.updateRenderTargetMipmap(a),I.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,ot(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(B.updateMultisampleRenderTarget(a),B.updateRenderTargetMipmap(a))}T.setRenderTarget(s,c,l),T.setClearColor(oe,se),d!==void 0&&(r.viewport=d),T.toneMapping=u}function at(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&ot(o,t,n,s,l,c)}}function ot(e,t,n,r,i,a){D!==null&&i.isNodeMaterial&&D.setObject(e,i),e.onBeforeRender(T,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(T,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=2):T.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(T,t,n,r,i,a)}function st(e,t,n){t.isScene!==!0&&(t=be);let r=z.get(e),i=x.state.lights,a=x.state.shadowsArray,o=i.state.version,s=ke.getParameters(e,i.state,a,t,n,x.state.lightProbeGridArray),c=ke.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Te.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,qe),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return lt(e,s),d}else s.uniforms=ke.getUniforms(e),D!==null&&e.isNodeMaterial&&D.build(e,n,s),e.onBeforeCompile(s,T),d=ke.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Ne.uniform),lt(e,s),r.needsLights=pt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=x.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function ct(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=bd.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function lt(e,t){let n=z.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function ut(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];y.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(y))return n}return null}function dt(e,t,n,r,i){t.isScene!==!0&&(t=be),B.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=M===null?T.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:pr.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Te.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(h=T.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=z.get(r),y=x.state.lights;if(ge===!0&&(_e===!0||e!==ne)){let t=e===ne&&r.id===te;Ne.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Ne.numPlanes||v.numIntersection!==Ne.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=x.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let S=v.currentProgram;b===!0&&(S=st(r,t,i),D&&r.isNodeMaterial&&D.onUpdateProgram(r,S,v));let C=!1,w=!1,E=!1,O=S.getUniforms(),k=v.uniforms;if(L.useProgram(S.program)&&(C=!0,w=!0,E=!0),r.id!==te&&(te=r.id,w=!0),v.needsLights){let e=ut(x.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,w=!0)}if(C||ne!==e){L.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),O.setValue(F,`projectionMatrix`,e.projectionMatrix),O.setValue(F,`viewMatrix`,e.matrixWorldInverse);let t=O.map.cameraPosition;t!==void 0&&t.setValue(F,ye.setFromMatrixPosition(e.matrixWorld)),we.logarithmicDepthBuffer&&O.setValue(F,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&O.setValue(F,`isOrthographic`,e.isOrthographicCamera===!0),ne!==e&&(ne=e,w=!0,E=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&O.setValue(F,`sunShadowMap`,y.state.sunShadowMap,B),y.state.directionalShadowMap.length>0&&O.setValue(F,`directionalShadowMap`,y.state.directionalShadowMap,B),y.state.spotShadowMap.length>0&&O.setValue(F,`spotShadowMap`,y.state.spotShadowMap,B),y.state.pointShadowMap.length>0&&O.setValue(F,`pointShadowMap`,y.state.pointShadowMap,B)),i.isSkinnedMesh){O.setOptional(F,i,`bindMatrix`),O.setOptional(F,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),O.setValue(F,`boneTexture`,e.boneTexture,B))}i.isBatchedMesh&&(O.setOptional(F,i,`batchingTexture`),O.setValue(F,`batchingTexture`,i._matricesTexture,B),O.setOptional(F,i,`batchingIdTexture`),O.setValue(F,`batchingIdTexture`,i._indirectTexture,B),O.setOptional(F,i,`batchingColorTexture`),i._colorsTexture!==null&&O.setValue(F,`batchingColorTexture`,i._colorsTexture,B));let A=n.morphAttributes;if((A.position!==void 0||A.normal!==void 0||A.color!==void 0)&&Ie.update(i,n,S),(w||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,O.setValue(F,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(k.envMapIntensity.value=t.environmentIntensity),k.dfgLUT!==void 0&&(k.dfgLUT.value=Hf()),w){if(O.setValue(F,`toneMappingExposure`,T.toneMappingExposure),v.needsLights&&ft(k,E),a&&r.fog===!0&&Ae.refreshFogUniforms(k,a),Ae.refreshMaterialUniforms(k,r,le,ce,x.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;k.probesSH.value=e.texture,k.probesMin.value.copy(e.boundingBox.min),k.probesMax.value.copy(e.boundingBox.max),k.probesResolution.value.copy(e.resolution)}bd.upload(F,ct(v),k,B)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(bd.upload(F,ct(v),k,B),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&O.setValue(F,`center`,i.center),O.setValue(F,`modelViewMatrix`,i.modelViewMatrix),O.setValue(F,`normalMatrix`,i.normalMatrix),O.setValue(F,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];Ve.update(n,S),Ve.bind(n,S)}}return S}function ft(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function pt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return ee},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(e,t,n){let r=z.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),z.get(e.texture).__webglTexture=t,z.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=z.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){M=e,j=t,ee=n;let r=null,i=!1,a=!1;if(e){let o=z.get(e);if(o.__useDefaultFramebuffer!==void 0){L.bindFramebuffer(F.FRAMEBUFFER,o.__webglFramebuffer),re.copy(e.viewport),ie.copy(e.scissor),ae=e.scissorTest,L.viewport(re),L.scissor(ie),L.setScissorTest(ae),te=-1;return}if(o.__webglFramebuffer===void 0)B.setupRenderTarget(e);else if(o.__hasExternalTextures)B.rebindTextures(e,z.get(e.texture).__webglTexture,z.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&z.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);B.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=z.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&B.useMultisampledRTT(e)===!1?z.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,re.copy(e.viewport),ie.copy(e.scissor),ae=e.scissorTest}else re.copy(fe).multiplyScalar(le).floor(),ie.copy(pe).multiplyScalar(le).floor(),ae=me;if(n!==0&&(r=O),L.bindFramebuffer(F.FRAMEBUFFER,r)&&L.drawBuffers(e,r),L.viewport(re),L.scissor(ie),L.setScissorTest(ae),i){let r=z.get(e.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=z.get(e.textures[t]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=z.get(e.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,t.__webglTexture,n)}te=-1};function mt(e){let t=z.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=we.textureFormatReadable(e.format),t.__typeReadable=we.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){H(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=z.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){L.bindFramebuffer(F.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+s);let u=mt(o);if(u.__formatReadable===!1){H(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){H(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&F.readPixels(t,n,r,i,ze.convert(c),ze.convert(l),a)}finally{let e=M===null?null:z.get(M).__webglFramebuffer;L.bindFramebuffer(F.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=z.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){L.bindFramebuffer(F.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+s);let d=mt(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,f),F.bufferData(F.PIXEL_PACK_BUFFER,a.byteLength,F.STREAM_READ),F.readPixels(t,n,r,i,ze.convert(l),ze.convert(u),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let p=M===null?null:z.get(M).__webglFramebuffer;L.bindFramebuffer(F.FRAMEBUFFER,p);let m=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Jn(F,m,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,f),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,a),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(f),F.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;B.setTexture2D(e,0),F.copyTexSubImage2D(F.TEXTURE_2D,n,0,0,o,s,i,a),L.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=ze.convert(t.format),_=ze.convert(t.type),v;t.isData3DTexture?(B.setTexture3D(t,0),v=F.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(B.setTexture2DArray(t,0),v=F.TEXTURE_2D_ARRAY):(B.setTexture2D(t,0),v=F.TEXTURE_2D),L.activeTexture(F.TEXTURE0),L.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,t.flipY),L.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),L.pixelStorei(F.UNPACK_ALIGNMENT,t.unpackAlignment);let y=L.getParameter(F.UNPACK_ROW_LENGTH),b=L.getParameter(F.UNPACK_IMAGE_HEIGHT),x=L.getParameter(F.UNPACK_SKIP_PIXELS),S=L.getParameter(F.UNPACK_SKIP_ROWS),C=L.getParameter(F.UNPACK_SKIP_IMAGES);L.pixelStorei(F.UNPACK_ROW_LENGTH,h.width),L.pixelStorei(F.UNPACK_IMAGE_HEIGHT,h.height),L.pixelStorei(F.UNPACK_SKIP_PIXELS,l),L.pixelStorei(F.UNPACK_SKIP_ROWS,u),L.pixelStorei(F.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=z.get(e),r=z.get(t),h=z.get(n.__renderTarget),g=z.get(r.__renderTarget);L.bindFramebuffer(F.READ_FRAMEBUFFER,h.__webglFramebuffer),L.bindFramebuffer(F.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,z.get(e).__webglTexture,i,d+n),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,z.get(t).__webglTexture,a,m+n)),F.blitFramebuffer(l,u,o,s,f,p,o,s,F.DEPTH_BUFFER_BIT,F.NEAREST);L.bindFramebuffer(F.READ_FRAMEBUFFER,null),L.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||z.has(e)){let n=z.get(e),r=z.get(t);L.bindFramebuffer(F.READ_FRAMEBUFFER,k),L.bindFramebuffer(F.DRAW_FRAMEBUFFER,A);for(let e=0;e<c;e++)w?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,n.__webglTexture,i),T?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,r.__webglTexture,a),i===0?T?F.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):F.copyTexSubImage2D(v,a,f,p,l,u,o,s):F.blitFramebuffer(l,u,o,s,f,p,o,s,F.COLOR_BUFFER_BIT,F.NEAREST);L.bindFramebuffer(F.READ_FRAMEBUFFER,null),L.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?F.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?F.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):F.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):F.texSubImage2D(F.TEXTURE_2D,a,f,p,o,s,g,_,h);L.pixelStorei(F.UNPACK_ROW_LENGTH,y),L.pixelStorei(F.UNPACK_IMAGE_HEIGHT,b),L.pixelStorei(F.UNPACK_SKIP_PIXELS,x),L.pixelStorei(F.UNPACK_SKIP_ROWS,S),L.pixelStorei(F.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&F.generateMipmap(v),L.unbindTexture()},this.initRenderTarget=function(e){z.get(e).__webglFramebuffer===void 0&&B.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?B.setTextureCube(e,0):e.isData3DTexture?B.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?B.setTexture2DArray(e,0):B.setTexture2D(e,0),L.unbindTexture()},this.resetState=function(){j=0,ee=0,M=null,L.reset(),Be.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=pr._getDrawingBufferColorSpace(e),t.unpackColorSpace=pr._getUnpackColorSpace()}};function Wf(e,t=!1){let n=e[0].index!==null,r=new Set(Object.keys(e[0].attributes)),i=new Set(Object.keys(e[0].morphAttributes)),a={},o={},s=e[0].morphTargetsRelative,c=new aa,l=0;for(let u=0;u<e.length;++u){let d=e[u],f=0;if(n!==(d.index!==null))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.`),null;for(let e in d.attributes){if(!r.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure "`+e+`" attribute exists among all geometries, or in none of them.`),null;a[e]===void 0&&(a[e]=[]),a[e].push(d.attributes[e]),f++}if(f!==r.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of attributes.`),null;if(s!==d.morphTargetsRelative)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. .morphTargetsRelative must be consistent throughout all geometries.`),null;for(let e in d.morphAttributes){if(!i.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`.  .morphAttributes must be consistent throughout all geometries.`),null;o[e]===void 0&&(o[e]=[]),o[e].push(d.morphAttributes[e])}if(t){let e;if(n)e=d.index.count;else if(d.attributes.position!==void 0)e=d.attributes.position.count;else return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. The geometry must have either an index or a position attribute`),null;c.addGroup(l,e,u),l+=e}}if(n){let t=0,n=[];for(let r=0;r<e.length;++r){let i=e[r].index;for(let e=0;e<i.count;++e)n.push(i.getX(e)+t);t+=e[r].attributes.position.count}c.setIndex(n)}for(let e in a){let t=Gf(a[e]);if(!t)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` attribute.`),null;c.setAttribute(e,t)}for(let e in o){let t=o[e][0].length;if(t!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[e]=[];for(let n=0;n<t;++n){let t=[];for(let r=0;r<o[e].length;++r)t.push(o[e][r][n]);let r=Gf(t);if(!r)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` morphAttribute.`),null;c.morphAttributes[e].push(r)}}}return c}function Gf(e){let t,n,r,i=-1,a=0;for(let o=0;o<e.length;++o){let s=e[o];if(t===void 0&&(t=s.array.constructor),t!==s.array.constructor)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.`),null;if(n===void 0&&(n=s.itemSize),n!==s.itemSize)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.`),null;if(r===void 0&&(r=s.normalized),r!==s.normalized)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.`),null;if(i===-1&&(i=s.gpuType),i!==s.gpuType)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes.`),null;a+=s.count*n}let o=new t(a),s=new Wi(o,n,r),c=0;for(let t=0;t<e.length;++t){let r=e[t];if(r.isInterleavedBufferAttribute){let e=c/n;for(let t=0,i=r.count;t<i;t++)for(let i=0;i<n;i++){let n=r.getComponent(t,i);s.setComponent(t+e,i,n)}}else o.set(r.array,c);c+=r.count*n}return i!==void 0&&(s.gpuType=i),s}var Kf=14862735,qf=5216842,Jf=6795343,Yf=9143160,Xf=7235422,Zf=9067051,Qf=4169274,$f=5917250,ep=4008733,tp=16052714,np=13121835,rp=3981776,ip=15266036,ap=14274484,op=15261900,sp=S.graveyard,cp=S.lagoon,lp=18,up=5.5,dp=13,fp=class{constructor(e,t){this.scene=e,this.material=t,this.lanes=[],this.whirl=[],this.puffs=[],this.smoke=[],this.smokeAt=new W,this.beam=null,this.gulls=[],this.whales=[],this.fins=[],this.pods=[],this.podPool=[],this.nextPod=8,this.beacon=new ri,this.dummy=new ni,this.rand=Sp(7),this.erupting=!1;let n=new ri;this.buildShallows();for(let e of y)this.buildIsland(n,e);this.buildWrecks(n),this.buildSkeleton(n),this.buildHut(n);let r=new q(new Mo(5.2,6,1.4,10),this.material(Xf));r.position.set(j.x,.3,j.y),n.add(r),pp(n,e),this.buildCurrents(),this.buildWhirlpool(),this.buildFog(),this.fortRing=new q(new tc(j.range-.3,j.range+.3,96).rotateX(-Math.PI/2),new Ia({color:16730682,transparent:!0,opacity:.32,depthWrite:!1})),this.fortRing.position.set(j.x,.07,j.y),e.add(this.fortRing),this.beaconPillar=new Ia({color:16765518,transparent:!0,opacity:.35,depthWrite:!1,side:2});let i=new q(new Mo(1.4,1.4,40,16,1,!0).translate(0,20,0),this.beaconPillar);this.beaconRing=new q(new tc(6,7,48).rotateX(-Math.PI/2),new Ia({color:16765518,transparent:!0,opacity:.6,depthWrite:!1})),this.beaconRing.position.y=.08,this.beacon.add(i,this.beaconRing),this.beacon.visible=!1,e.add(this.beacon),this.buildFauna()}setEruption(e){this.erupting=e}setFortAlive(e){this.fortRing.visible=e}setBeacon(e){this.beacon.visible=e!==null,e&&this.beacon.position.set(e.x,0,e.y)}update(e,t,n,r){for(let t of this.lanes)this.updateLane(t,e);this.whirl[0]&&(this.whirl[0].rotation.y=-e*.6,this.whirl[1].rotation.y=-e*1.4);for(let t of this.puffs){let i=Math.sin(e*.15+t.phase)*2;t.sprite.position.set(t.x+i,t.height,t.y+Math.cos(e*.12+t.phase)*2);let a=Math.hypot(t.x-n,t.y-r);t.material.opacity=t.base*(.1+.9*xp(8,24,a))}let i=this.erupting?1.8:1;this.smoke.forEach(({sprite:t,material:n},r)=>{let a=(e*.22*i+r/this.smoke.length)%1;t.position.set(this.smokeAt.x+a*4,this.smokeAt.y+a*11*i,this.smokeAt.z-a*2),t.scale.setScalar((2.5+a*7)*i),n.opacity=(this.erupting?.85:.55)*(1-a),n.color.setHex(this.erupting?3814706:9276038)}),this.beam&&(this.beam.rotation.y=e*.9),this.beacon.visible&&(this.beaconPillar.opacity=.3+Math.sin(e*4)*.12,this.beaconRing.scale.setScalar(1+e*.8%1*.5)),this.updateFauna(e,t,n,r)}buildShallows(){let e=y.map(e=>new jo(e.r+4+e.r*.25,40).rotateX(-Math.PI/2).translate(e.x,0,e.y));e.push(new jo(cp.r+6,40).rotateX(-Math.PI/2).translate(cp.x,0,cp.y));let t=new q(Wf(e),new Ia({color:rp,transparent:!0,opacity:.4,depthWrite:!1}));t.position.y=.03,this.scene.add(t)}buildIsland(e,t){let{r:n,style:r}=t,i=this.rand,a=new ri;a.position.set(t.x,0,t.y),e.add(a);let o=(e,t,n,r,i)=>{let o=new q(e,typeof t==`number`?this.material(t):t);return o.position.set(n,r,i),a.add(o),o},s=(e,t)=>{let n=o(new ic(e,18,10,0,Math.PI*2,0,Math.PI/2),t,0,1.05,0);n.scale.y=.45};if(r===`skull`){o(new Mo(n,n*1.15,1.2,12),Xf,0,.2,0),o(new ic(n*1.1,16,10),op,0,1.6,0).scale.set(1,.75,1.15);for(let e of[-1,1])o(new ic(n*.27,10,6),2762018,e*n*.36,4.4,n*.66);o(new ic(n*.13,8,5),2762018,0,3.4,n*.98),o(new Ao(n*1.1,.8,n*.5),op,0,.9,n*1.05)}else if(r===`rock`){o(new Mo(n,n*1.1,1.6,14),Xf,0,.3,0);let e=n>10?6:3;for(let t=0;t<e;t++){let e=n*(.3+i()*.25),r=i()*Math.PI*2,a=i()*n*.5,s=o(new Fo(e,0),t%2?Yf:Xf,Math.cos(r)*a,.9+e*.4,Math.sin(r)*a);s.scale.y=.8+i()*(n>10?1.1:.5),s.rotation.set(i()*3,i()*3,i()*3)}}else switch(o(new Mo(n,n*1.08,1.4,28),Kf,0,.4,0),r){case`jungle`:s(n*.72,qf);for(let e=0;e<4;e++){let e=i()*Math.PI*2;this.palm(a,Math.cos(e)*n*.62,Math.sin(e)*n*.62,4+i()*1.5)}o(new Fo(n*.22),Yf,n*.3,2.2,-n*.2);break;case`palm`:{s(n*.55,Jf);let e=n>=8?2:1;for(let t=0;t<e;t++){let e=i()*Math.PI*2;this.palm(a,Math.cos(e)*n*.3,Math.sin(e)*n*.3,3.2+i()*1.4)}break}case`volcano`:{let e=n*.5;o(new Mo(n*.26,n*.88,e,20),$f,0,1.1+e/2,0);let r=new _c({color:16742938,emissive:16730624});o(new Mo(n*.22,n*.22,.3,14),r,0,1.15+e,0);for(let t of[.6,2.4,4.1]){let i=o(new Ao(.5,e*1.05,.35),r,Math.cos(t)*n*.5,1.1+e*.48,Math.sin(t)*n*.5);i.rotation.set(0,-t,.82),i.rotation.order=`YXZ`}this.smokeAt.set(t.x,1.4+e,t.y),this.buildSmoke();break}case`temple`:{o(new Mo(n*.78,n*.8,.3,24),qf,0,1.2,0),o(new Ao(n*1.05,.5,n*.8),ap,0,1.55,0);let e=[5,5,2.4,5,1.4,5,5,3.2];e.forEach((t,r)=>{let i=r/e.length*Math.PI*2;o(new Mo(.55,.65,t,8),ap,Math.cos(i)*n*.42,1.8+t/2,Math.sin(i)*n*.32)}),o(new Ao(n*.95,.7,1.5),ap,0,7.1,-n*.32);let t=o(new Mo(.55,.55,4.5,8),ap,n*.25,1.75,n*.62);t.rotation.z=Math.PI/2,t.rotation.y=.5;break}case`lighthouse`:{s(n*.7,qf);let e=n*.2,r=-n*.15;o(new Mo(.9,1.3,8,14),tp,e,5.1,r),o(new Mo(1.08,1.17,1,14),np,e,3.4,r),o(new Mo(.96,1.04,1,14),np,e,6.6,r),o(new Mo(1.35,1.35,.3,14),2894892,e,9.2,r),o(new ic(.75,12,8),new _c({color:16773800,emissive:16765518}),e,9.9,r),o(new No(1.15,1.1,12),np,e,10.8,r),this.buildBeam(t.x+e,9.9,t.y+r);break}}}palm(e,t,n,r){let i=this.rand,a=new ri;a.position.set(t,1.1,n),a.rotation.y=i()*Math.PI*2,e.add(a);let o=new ri;o.rotation.z=-(.12+i()*.2),a.add(o);let s=new q(new Mo(.18,.28,r,6),this.material(Zf));s.position.y=r/2,o.add(s);for(let e=0;e<6;e++){let t=new ri;t.position.y=r,t.rotation.y=e*Math.PI/3+i()*.4,o.add(t);let n=new q(new Ao(2.3,.08,.55),this.material(Qf));n.position.set(1,-.25,0),n.rotation.z=-.38,t.add(n)}}buildBeam(e,t,n){let r=new ri;r.position.set(e,t,n);let i=new ri;i.rotation.z=-.1,r.add(i);let a=new Ia({color:16772778,transparent:!0,opacity:.13,depthWrite:!1,side:2}),o=new No(2.4,22,16,1,!0).translate(0,-11,0).rotateZ(Math.PI/2);i.add(new q(o,a),new q(o.clone().rotateY(Math.PI),a)),this.beam=r,this.scene.add(r)}buildSmoke(){let e=yp();for(let t=0;t<7;t++){let t=new ha({map:e,color:9276038,transparent:!0,depthWrite:!1}),n=new ka(t);this.smoke.push({sprite:n,material:t}),this.scene.add(n)}}buildWrecks(e){let t=Sp(31),n=0;for(let r=0;r<40&&n<7;r++){let r=t()*Math.PI*2,i=7+t()*24,a=sp.x+Math.cos(r)*i,o=sp.y+Math.sin(r)*i;if(M(a,o,5))continue;n++;let s=new ri;s.position.set(a,0,o),s.rotation.y=t()*Math.PI*2,e.add(s);let c=new q(new Ao(6,1.5,2.2),this.material(ep));if(c.position.y=-.35,c.rotation.set(.35+t()*.3,0,.18+t()*.2),s.add(c),t()<.75){let e=new q(new Mo(.12,.16,4+t()*2,6),this.material(4863524));e.position.set(t()*2-1,1.6,.3),e.rotation.set(.5+t()*.5,0,t()*.6-.3),s.add(e);let n=new q(new ec(1.5,1.2),this.material(10130568,!0));n.position.set(e.position.x,2.6,1.2),n.rotation.set(.5,.4,.2),s.add(n)}}}buildSkeleton(e){let{x:t,y:n}=S.skeleton,r=this.material(op);for(let i=0;i<9;i++){let a=new q(new Ao(1.4,.9,1.6),r);a.position.set(t,.1,n+9+i*4.2),e.add(a)}[7.5,7.5,7,6.2,5.2,4.2].forEach((i,a)=>{let o=new q(new ac(i,.42,6,18,Math.PI),r);o.position.set(t,-1,n+11+a*5.6),e.add(o)})}buildHut(e){let{x:t,y:n}=S.cove,r=new ri;r.position.set(t,0,n-26),e.add(r);let i=new q(new Ao(3.2,2,2.6),this.material(8016432));i.position.y=3;let a=new q(new No(2.6,1.8,4),this.material(5913120));a.position.y=4.9,a.rotation.y=Math.PI/4;let o=new q(new Mo(.08,.08,4.5,6),this.material(3811866));o.position.set(2.4,4.2,0);let s=new q(new ec(1.8,1.1),this.material(1447446,!0));s.position.set(3.3,5.9,0),r.add(i,a,o,s)}buildCurrents(){let e=new Ia({color:10479871,transparent:!0,opacity:.12,depthWrite:!1}),t=hp(),n=new Ia({color:16777215,transparent:!0,opacity:.42,depthWrite:!1,side:2});for(let r of w){let i=r.points.map(([e,t])=>[e,t]),a=[0];for(let e=1;e<i.length;e++)a.push(a[e-1]+Math.hypot(i[e][0]-i[e-1][0],i[e][1]-i[e-1][1]));let o=a[a.length-1],s=new q(mp(i,r.width*.85),e);s.position.y=.035,this.scene.add(s);let c=[-r.width*.38,r.width*.38],l=new ao(t,n,Math.ceil(o/8)*c.length);l.frustumCulled=!1,this.scene.add(l),this.lanes.push({points:i,lengths:a,total:o,speed:r.speed,mesh:l,spacing:8,rows:c})}}updateLane(e,t){let n=Math.ceil(e.total/e.spacing),r=0;for(let i=0;i<e.rows.length;i++)for(let a=0;a<n;a++){let n=(a*e.spacing+i*e.spacing*.5+t*e.speed*.9)%e.total,[o,s,c]=gp(e,n),l=Math.min(1,n/12,(e.total-n)/12);this.dummy.position.set(o-Math.sin(c)*e.rows[i],.06,s+Math.cos(c)*e.rows[i]),this.dummy.rotation.set(0,-c,0),this.dummy.scale.setScalar(Math.max(.01,l)),this.dummy.updateMatrix(),e.mesh.setMatrixAt(r++,this.dummy.matrix)}e.mesh.count=r,e.mesh.instanceMatrix.needsUpdate=!0}buildWhirlpool(){let e=new q(new jo(T.r+3,64).rotateX(-Math.PI/2),new Ia({map:bp(5,.5),transparent:!0,depthWrite:!1})),t=new q(new jo(T.r*.45,48).rotateX(-Math.PI/2),new Ia({map:bp(3,.75),transparent:!0,depthWrite:!1}));e.position.set(T.x,.04,T.y),t.position.set(T.x,.045,T.y),this.whirl.push(e,t),this.scene.add(e,t)}buildFog(){let e=yp(),t=Sp(11);for(let n of D){let r=new q(new jo(n.r*1.15,48).rotateX(-Math.PI/2),new Ia({map:e,color:ip,transparent:!0,opacity:.55,depthWrite:!1}));r.position.set(n.x,.08,n.y),this.scene.add(r);for(let r=0;r<34;r++){let r=t()*Math.PI*2,i=Math.sqrt(t())*n.r*.88,a=new ha({map:e,color:ip,transparent:!0,depthWrite:!1,opacity:.5}),o=new ka(a);o.scale.setScalar(15+t()*12),o.renderOrder=5,this.scene.add(o),this.puffs.push({sprite:o,material:a,base:.4+t()*.25,x:n.x+Math.cos(r)*i,y:n.y+Math.sin(r)*i,height:2+t()*4,phase:t()*10})}}}buildFauna(){let e=Sp(23),t=this.material(16777215),n=y.filter(e=>e.r>=12&&e.style!==`rock`).map(e=>({x:e.x,y:e.y,r:e.r}));n.push({x:S.cove.x,y:S.cove.y,r:16});for(let r of n)for(let n=0;n<2;n++){let n=new ri;n.add(new q(new Ao(.7,.18,.22),t));let i=[];for(let e of[-1,1]){let r=new ri,a=new q(new Ao(.34,.04,1.1),t);a.position.z=e*.58,r.add(a),r.userData.side=e,n.add(r),i.push(r)}this.scene.add(n),this.gulls.push({root:n,wings:i,cx:r.x,cy:r.y,r:r.r+2+e()*5,height:8+e()*3,speed:(.45+e()*.35)*(e()<.5?-1:1),angle:e()*Math.PI*2})}let r=this.material(3821411);for(let[n,i,a,o]of[[365,112,16,0],[520,340,14,9],[55,422,14,4],[330,538,14,13]]){let s=new ri,c=new q(new ic(1,16,10),r);c.scale.set(5,1.3,1.8);let l=new ri;l.add(new q(new Ao(.4,.18,3.4),r)),l.position.x=-4.6;let u=[];for(let e=0;e<9;e++){let e=new q(new ic(.35,6,4),t);u.push(e),s.add(e)}s.add(c,l),s.visible=!1,this.scene.add(s),this.whales.push({root:s,body:c,tail:l,spout:u,cx:n,cy:i,r:a,angle:e()*Math.PI*2,speed:.12,offset:o})}let i=new fs;i.moveTo(0,0),i.lineTo(2.2,0),i.lineTo(.25,2.3),i.closePath();let a=new nc(i);for(let[t,n]of[[11,.5],[18,-.38],[25,.3]]){let r=new q(a,this.material(3095108,!0));this.scene.add(r),this.fins.push({mesh:r,r:t,speed:n,angle:e()*Math.PI*2})}let o=this.material(7180200);for(let e=0;e<3;e++){let e=new ri,t=new q(new ic(1,10,6),o);t.scale.set(1.5,.45,.45);let n=new q(new No(.25,.6,4),o);n.position.set(-.1,.5,0);let r=new q(new Ao(.25,.08,.9),o);r.position.x=-1.5,e.add(t,n,r),e.visible=!1,this.scene.add(e),this.podPool.push(e)}}updateFauna(e,t,n,r){for(let n of this.gulls){n.angle+=n.speed*t;let r=n.cx+Math.cos(n.angle)*n.r,i=n.cy+Math.sin(n.angle)*n.r;n.root.position.set(r,n.height+Math.sin(e*1.3+n.angle)*.4,i);let a=n.angle+(n.speed>0?Math.PI/2:-Math.PI/2);n.root.rotation.set(Math.sign(n.speed)*.35,-a,0,`YXZ`);let o=Math.sin(e*9+n.angle*5)*.55;for(let e of n.wings)e.rotation.x=o*e.userData.side}for(let n of this.whales){n.angle+=n.speed*t;let r=(e+n.offset)%lp/lp;if(r>.42)n.root.visible=!1;else if(n.root.visible=!0,n.root.position.set(n.cx+Math.cos(n.angle)*n.r,0,n.cy+Math.sin(n.angle)*n.r),n.root.rotation.y=-(n.angle+Math.PI/2),r<.3){let e=r/.3;n.body.position.y=-1.6+Math.sin(Math.PI*e)*1.25,n.tail.position.y=n.body.position.y,n.tail.rotation.z=0,n.spout.forEach((t,r)=>{let i=(e-.08)/.45,a=(i*2+r/n.spout.length)%1;t.visible=i>0&&i<1,t.position.set(3.2+(r%3-1)*.3*a,n.body.position.y+1.2+a*5-a*a*2.5,(r%2?1:-1)*a*.6),t.scale.setScalar(.6+a*.8)})}else{let e=(r-.3)/.12;n.body.position.y=-2.5,n.tail.position.y=-1.2+Math.sin(Math.PI*e)*2.8,n.tail.rotation.z=-Math.sin(Math.PI*e)*.9;for(let e of n.spout)e.visible=!1}}for(let e of this.fins)e.angle+=e.speed*t*12/e.r,e.mesh.position.set(sp.x+Math.cos(e.angle)*e.r,0,sp.y+Math.sin(e.angle)*e.r),e.mesh.rotation.y=-(e.angle+(e.speed>0?Math.PI/2:-Math.PI/2));if(e>this.nextPod&&this.pods.length===0){this.nextPod=e+22+Math.random()*16;let t=Math.random()*Math.PI*2,i=n+Math.cos(t)*20,a=r+Math.sin(t)*20,o=t+Math.PI/2+(Math.random()-.5)*.8,s=Math.cos(o),c=Math.sin(o),l=up*dp;!k(i,a)&&!M(i,a,6)&&!M(i+s*l*.5,a+c*l*.5,6)&&!M(i+s*l,a+c*l,6)&&this.pods.push({members:this.podPool,x:i-s*l*.5,y:a-c*l*.5,dx:s,dy:c,born:e})}for(let t of this.pods){let n=e-t.born;t.members.forEach((e,r)=>{let i=n*dp-r*2.4,a=(r-1)*1.6,o=(n*.75+r*.31)%1,s=o<.42;if(e.visible=n<up&&s,!s)return;let c=Math.sin(Math.PI*o/.42);e.position.set(t.x+t.dx*i-t.dy*a,-.5+c*1.9,t.y+t.dy*i+t.dx*a),e.rotation.set(0,-Math.atan2(t.dy,t.dx),Math.cos(Math.PI*o/.42)*.7,`YXZ`)})}if(this.pods.length&&e-this.pods[0].born>up){for(let e of this.podPool)e.visible=!1;this.pods.length=0}}};function pp(e,t){e.updateMatrixWorld(!0);let n=new Map;e.traverse(e=>{if(!(e instanceof q))return;let t=e.geometry.index?e.geometry.toNonIndexed():e.geometry.clone();t.applyMatrix4(e.matrixWorld);let r=e.material;n.has(r)||n.set(r,[]),n.get(r).push(t),e.geometry.dispose()});for(let[e,r]of n){let n=Wf(r);n&&t.add(new q(n,e));for(let e of r)e.dispose()}}function mp(e,t){let n=[],r=[];e.forEach(([i,a],o)=>{let[s,c]=e[Math.max(0,o-1)],[l,u]=e[Math.min(e.length-1,o+1)],d=Math.hypot(l-s,u-c)||1,f=-(u-c)/d,p=(l-s)/d;if(n.push(i+f*t,0,a+p*t,i-f*t,0,a-p*t),o>0){let e=(o-1)*2;r.push(e,e+2,e+1,e+1,e+2,e+3)}});let i=new aa;return i.setAttribute(`position`,new qi(n,3)),i.setIndex(r),i}function hp(){let e=new fs;return e.moveTo(.8,0),e.lineTo(-.4,1.2),e.lineTo(-.85,1.2),e.lineTo(.25,0),e.lineTo(-.85,-1.2),e.lineTo(-.4,-1.2),e.closePath(),new nc(e).rotateX(-Math.PI/2)}function gp(e,t){let n=1;for(;n<e.lengths.length-1&&e.lengths[n]<t;)n++;let[r,i]=e.points[n-1],[a,o]=e.points[n],s=(t-e.lengths[n-1])/(e.lengths[n]-e.lengths[n-1]);return[r+(a-r)*s,i+(o-i)*s,Math.atan2(o-i,a-r)]}function _p(e,t){let n=document.createElement(`canvas`);n.width=n.height=e,t(n.getContext(`2d`),e);let r=new Eo(n);return r.colorSpace=Mn,r}var vp=null;function yp(){return vp??=_p(128,(e,t)=>{let n=e.createRadialGradient(t/2,t/2,0,t/2,t/2,t/2);n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.5,`rgba(255,255,255,0.55)`),n.addColorStop(1,`rgba(255,255,255,0)`),e.fillStyle=n,e.fillRect(0,0,t,t)}),vp}function bp(e,t){return _p(512,(n,r)=>{let i=r/2,a=n.createRadialGradient(i,i,0,i,i,i);a.addColorStop(0,`rgba(3,22,38,0.95)`),a.addColorStop(.45,`rgba(8,52,80,0.6)`),a.addColorStop(1,`rgba(27,116,160,0)`),n.fillStyle=a,n.fillRect(0,0,r,r),n.lineCap=`round`;for(let r=0;r<e;r++){n.beginPath();for(let a=0;a<=90;a++){let o=a/90,s=r*Math.PI*2/e+(1-o)*Math.PI*2*t*2,c=10+o*(i-18);a===0?n.moveTo(i+Math.cos(s)*c,i+Math.sin(s)*c):n.lineTo(i+Math.cos(s)*c,i+Math.sin(s)*c)}n.strokeStyle=`rgba(215,245,255,0.42)`,n.lineWidth=9,n.stroke()}n.beginPath(),n.arc(i,i,i-10,0,Math.PI*2),n.strokeStyle=`rgba(255,255,255,0.3)`,n.lineWidth=8,n.stroke()})}function xp(e,t,n){let r=Math.max(0,Math.min(1,(n-e)/(t-e)));return r*r*(3-2*r)}function Sp(e){return()=>{e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var Cp=60,wp=2.4,Tp=Math.PI/180*68,Ep=40,Dp=.3,Op=90,kp=256,Ap=512,jp=48,Mp=700,Np={[r.ball]:2236962,[r.arrow]:16752704,[r.axe]:12107976,[r.rocket]:16728112},Pp=new K(6219775),Fp=class{constructor(e,t=1){this.zoom=t,this.scene=new di,this.camera=new Qc(Ep,1,1,1e3),this.ships=new Map,this.focus=new W(280,0,280),this.focusInitialized=!1,this.selfId=null,this.trailsVisible=!1,this.projected=new W,this.cameraOffset=new W,this.raycaster=new yl,this.seaPlane=new fa(new W(0,1,0),0),this.pointer=new U,this.hit=new W,this.materials=new Map,this.dummy=new ni,this.tint=new K,this.shieldGeometry=new ic(4.6,16,10,0,Math.PI*2,0,Math.PI/2),this.shieldMaterial=new Ia({color:10479615,transparent:!0,opacity:.22,depthWrite:!1}),this.ringGeometry=new tc(4.6,5.2,40).rotateX(-Math.PI/2),this.ringMaterial=new Ia({color:16765518,transparent:!0,opacity:.75}),this.aimMaterial=new Ia({color:16777215,transparent:!0,opacity:.2,side:2,depthWrite:!1}),this.aimKey=``,this.rangeMaterial=new Ia({color:16777215,transparent:!0,opacity:.16,depthWrite:!1}),this.rangeRadius=0,this.effectRing=new tc(.7,1,24).rotateX(-Math.PI/2),this.wakeGeometry=(()=>{let e=new fs;return e.moveTo(0,.9),e.lineTo(-6,3.4),e.lineTo(-6,2.6),e.lineTo(-.6,.35),e.lineTo(-4.5,.35),e.lineTo(-4.5,-.35),e.lineTo(-.6,-.35),e.lineTo(-6,-2.6),e.lineTo(-6,-3.4),e.lineTo(0,-.9),e.closePath(),new nc(e).rotateX(-Math.PI/2)})(),this.effectBall=new ic(1,12,8),this.lootMeshes=new Map,this.strikeFx=[],this.strikeGeometry={ring:new tc(.92,1,40).rotateX(-Math.PI/2),fill:new jo(1,40).rotateX(-Math.PI/2),ball:new ic(1.1,10,8),tentacle:new oc(new Go([new W(0,-1,0),new W(.3,2.5,0),new W(-.4,5,.3),new W(.6,7,1.4)]),12,.7,7,!1)},this.strikeMaterials={ring:new Ia({color:16726831,transparent:!0,opacity:.85,depthWrite:!1}),fill:new Ia({color:16733488,transparent:!0,opacity:.42,depthWrite:!1}),ball:new _c({color:16742938,emissive:16730624}),tentacle:new _c({color:9060256})},this.clock=0,this.projectileMeshes=new Map,this.projectileCounts=new Map,this.effects=[],this.renderer=new Uf({antialias:window.devicePixelRatio<2,powerPreference:`high-performance`}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.canvas=this.renderer.domElement,e.appendChild(this.canvas),this.scene.background=new K(736604),this.scene.add(new Bc(14676479,734544,1.8));let n=new tl(16777215,1.6);n.position.set(40,90,30),this.scene.add(n),this.buildSea(),this.seascape=new fp(this.scene,(e,t)=>this.material(e,t));let i=Wf([new Ao(1.8,.5,.6),new Ao(.6,.5,1.8)]),a=[[L.crate,new Ao(1.5,1.1,1.5),this.material(10119738)],[L.coin,new Mo(.9,.9,.35,12),new _c({color:16763955,emissive:5583616})],[L.chest,new Ao(2.6,1.6,1.8),new _c({color:14263094,emissive:5911040})],[L.pearl,new ic(.75,14,10),new _c({color:16447231,emissive:6974096})],[L.repair,i,new _c({color:4054148,emissive:875052})],[L.gem,new $s(.9),new _c({color:16730682,emissive:9050632})]];for(let[e,t,n]of a){let r=Lp(t,n,kp);this.lootMeshes.set(e,r),this.scene.add(r)}this.projectileMeshes.set(r.ball,Lp(new ic(.55,8,6),new _c({color:16777215}),Ap)),this.projectileMeshes.set(r.arrow,Lp(new Ao(1.4,.2,.2),new Ia({color:16777215}),Ap)),this.projectileMeshes.set(r.axe,Lp(new Ao(.75,.22,.75),new _c({color:16777215}),Ap)),this.projectileMeshes.set(r.rocket,Lp(new No(.45,1.7,8).rotateZ(-Math.PI/2),new Ia({color:16777215}),Ap));for(let e of this.projectileMeshes.values())this.scene.add(e);this.aimMesh=new q(new aa,this.aimMaterial),this.aimMesh.visible=!1,this.aimMesh.renderOrder=1,this.rangeMesh=new q(new aa,this.rangeMaterial),this.rangeMesh.visible=!1,this.scene.add(this.aimMesh,this.rangeMesh),this.buildEffectPool(),this.resize(),addEventListener(`resize`,()=>this.resize())}setTrailsVisible(e){this.trailsVisible=e;for(let t of this.ships.values())t.trail.visible=e,t.trailCount=0}addShip(e,t){let n=new ri,r=this.buildModel(t.kind,t.hue,t.self);n.add(r);let i=new q(this.shieldGeometry,this.shieldMaterial);if(i.visible=!1,n.add(i),t.self){this.selfId=e;let t=new q(this.ringGeometry,this.ringMaterial);t.position.y=.05,n.add(t)}let a=new Float32Array(270),o=new aa;o.setAttribute(`position`,new Wi(a,3).setUsage(Rn)),o.setDrawRange(0,0);let s=new yo(o,new uo({color:t.self?16765518:16777215}));s.frustumCulled=!1,s.visible=this.trailsVisible;let c=new Ia({color:16777215,transparent:!0,opacity:0,depthWrite:!1,side:2}),l=new q(this.wakeGeometry,c);l.position.set(-2.6,.07,0),l.visible=!1,n.add(l);let u={root:n,model:r,kind:t.kind,hue:t.hue,self:t.self,shield:i,bobPhase:Math.random()*Math.PI*2,level:0,scale:1,popAt:-1,lastTime:0,trail:s,trailPositions:a,trailCount:0,wake:l,wakeMaterial:c,wakeLength:0};n.visible=!1,this.scene.add(n,s),this.ships.set(e,u)}removeShip(e){let t=this.ships.get(e);t&&(this.scene.remove(t.root,t.trail),t.trail.geometry.dispose(),t.trail.material.dispose(),this.ships.delete(e),this.selfId===e&&(this.selfId=null))}hideShip(e){let t=this.ships.get(e);t&&(t.root.visible=!1)}updateShip(e,t,r,i,a,o,s,c,l=0){let u=this.ships.get(e);if(!u)return;let d=g(c);u.level===0||c<u.level?u.scale=d:c>u.level&&(u.popAt=a),u.level=c;let f=Math.min(.1,Math.max(0,a-u.lastTime));u.lastTime=a,u.scale+=(d-u.scale)*(1-Math.exp(-4*f));let p=u.popAt>=0?Dp*Math.exp(-5*(a-u.popAt)):0;u.root.scale.setScalar(u.scale*(1+p)),o!==u.kind&&(u.root.remove(u.model),u.kind=o,u.model=this.buildModel(o,u.hue,u.self),u.root.add(u.model)),u.root.visible=!0,u.shield.visible=s,u.root.position.set(t,o===n.fort?0:Math.sin(a*2.2+u.bobPhase)*.08,r),u.wakeLength+=(l-u.wakeLength)*(1-Math.exp(-4*f)),u.wake.visible=u.wakeLength>.05,u.wake.visible&&(u.wake.scale.set(.6+u.wakeLength*.7,1,.8+u.wakeLength*.25),u.wakeMaterial.opacity=Math.min(.75,u.wakeLength*.38)*(.85+Math.sin(a*9+u.bobPhase)*.15)),u.model.userData.tentacles?.forEach((e,t)=>{e.rotation.x=Math.sin(a*1.7+t*1.3)*.3}),u.root.rotation.y=-i,this.trailsVisible&&zp(u,t,r)}follow(e,t,n){if(!this.focusInitialized)this.focus.set(e,0,t),this.focusInitialized=!0;else{let r=1-Math.exp(-7*n);this.focus.x+=(e-this.focus.x)*r,this.focus.z+=(t-this.focus.z)*r}this.camera.position.copy(this.focus).add(this.cameraOffset),this.camera.lookAt(this.focus)}showAim(e,t,n,r,i){let a=`${r.inner.toFixed(1)}|${r.range.toFixed(1)}|${r.half.toFixed(3)}`;if(a!==this.aimKey){this.aimKey=a;let e=Math.max(r.half,Math.atan2(.8,r.range));this.aimMesh.geometry.dispose(),this.aimMesh.geometry=new tc(r.inner,r.range,24,1,-e,e*2).rotateX(Math.PI/2)}this.aimMesh.position.set(e,.08,t),this.aimMesh.rotation.y=-n,this.aimMaterial.opacity=i?.34:.12,this.aimMesh.visible=!0}hideAim(){this.aimMesh.visible=!1}showRange(e,t,n){Math.abs(n-this.rangeRadius)>.01&&(this.rangeRadius=n,this.rangeMesh.geometry.dispose(),this.rangeMesh.geometry=new tc(n-.15,n+.15,72).rotateX(-Math.PI/2)),this.rangeMesh.position.set(e,.06,t),this.rangeMesh.visible=!0}hideRange(){this.rangeMesh.visible=!1}setFortAlive(e){this.seascape.setFortAlive(e)}setBeacon(e){this.seascape.setBeacon(e)}setEruption(e){this.seascape.setEruption(e)}addStrike(e,t,n,r,i){let a=this.strikeFx.find(e=>!e.group.visible);if(!a){let e=new ri,t=new q(this.strikeGeometry.ring,this.strikeMaterials.ring),n=new q(this.strikeGeometry.fill,this.strikeMaterials.fill),r=new q(this.strikeGeometry.ball,this.strikeMaterials.ball),i=new q(this.strikeGeometry.tentacle,this.strikeMaterials.tentacle);t.position.y=.12,n.position.y=.11,t.name=`ring`,e.add(t,n,r,i),this.scene.add(e),a={group:e,fill:n,ball:r,tentacle:i,x:0,y:0,r:1,kind:0,born:0,land:0,landed:!1},this.strikeFx.push(a)}Object.assign(a,{x:e,y:t,r:n,kind:r,born:performance.now(),land:Math.max(i,performance.now()+100),landed:!1}),a.group.position.set(e,0,t),a.group.getObjectByName(`ring`).scale.setScalar(n),a.group.visible=!0}get hasFocus(){return this.focusInitialized}groundAt(e,t){return this.pointer.set(e/this.canvas.clientWidth*2-1,-(t/this.canvas.clientHeight)*2+1),this.raycaster.setFromCamera(this.pointer,this.camera),this.raycaster.ray.intersectPlane(this.seaPlane,this.hit)?{x:this.hit.x,y:this.hit.z}:null}selfOnScreen(){let e=this.selfId?this.ships.get(this.selfId):null;return!e||!e.root.visible?null:this.toScreen(e.root.position.x,e.root.position.z,0)}toScreen(e,t,n){return this.projected.set(e,n,t).project(this.camera),this.projected.z>1?null:{x:(this.projected.x*.5+.5)*this.canvas.clientWidth,y:(-this.projected.y*.5+.5)*this.canvas.clientHeight}}drawLoot(e,t){for(let e of this.lootMeshes.values())e.count=0;for(let n of e){let e=this.lootMeshes.get(n.kind)??this.lootMeshes.get(L.crate);if(e.count>=kp)continue;let r=n.x*.37+n.y*.21,i=n.kind===L.coin,a=n.kind===L.chest||n.kind===L.pearl||n.kind===L.gem;this.dummy.position.set(n.x,(a?.7:.35)+Math.sin(t*2+r)*(a?.3:.15),n.y),this.dummy.rotation.set(i?Math.PI/2:0,t*(i||a?2:.4)+r,0),this.dummy.updateMatrix(),e.setMatrixAt(e.count++,this.dummy.matrix)}for(let e of this.lootMeshes.values())e.instanceMatrix.needsUpdate=!0}beginProjectiles(){this.projectileCounts.clear()}drawProjectile(e){let t=this.projectileMeshes.get(e.kind);if(!t)return;let n=this.projectileCounts.get(e.kind)??0;n>=Ap||(this.projectileCounts.set(e.kind,n+1),this.dummy.position.set(e.x,e.height,e.y),this.dummy.rotation.set(0,-e.angle,0),this.dummy.updateMatrix(),t.setMatrixAt(n,this.dummy.matrix),t.setColorAt(n,e.mine?Pp:this.tint.setHex(Np[e.kind]??16777215)))}endProjectiles(){for(let[e,t]of this.projectileMeshes)t.count=this.projectileCounts.get(e)??0,t.instanceMatrix.needsUpdate=!0,t.instanceColor&&(t.instanceColor.needsUpdate=!0)}spawnEffect(e,t,n){let r=this.effects.find(e=>!e.mesh.visible)??this.effects.reduce((e,t)=>t.age/t.life>e.age/e.life?t:e),i=Ip[e];r.age=0,r.life=i.life,r.scale=i.scale,r.material.color.setHex(i.color),r.mesh.geometry=i.ring?this.effectRing:this.effectBall,r.mesh.position.set(t,i.ring?.1:1,n),r.mesh.scale.setScalar(i.scale*.3),r.mesh.visible=!0}render(e){this.clock+=e,this.seascape.update(this.clock,e,this.focus.x,this.focus.z),this.updateStrikes();for(let t of this.effects){if(!t.mesh.visible)continue;t.age+=e;let n=t.age/t.life;n>=1?t.mesh.visible=!1:(t.mesh.scale.setScalar(t.scale*(.3+n*.9)),t.material.opacity=.85*(1-n))}this.renderer.render(this.scene,this.camera)}updateStrikes(){let e=performance.now();for(let t of this.strikeFx){if(!t.group.visible)continue;let n=Math.min(1,(e-t.born)/Math.max(1,t.land-t.born));t.fill.scale.setScalar(t.r*Math.max(.05,n)),t.fill.visible=!t.landed;let r=t.kind===z.lava,i=Math.max(0,(n-.35)/.65);t.ball.visible=r&&!t.landed&&i>0,t.ball.position.set(0,30*(1-i)+.5,0),!t.landed&&e>=t.land&&(t.landed=!0,this.spawnEffect(`blast`,t.x,t.y),this.spawnEffect(r?`flash`:`splash`,t.x,t.y));let a=(e-t.land)/Mp;t.tentacle.visible=!r&&t.landed&&a<1,t.tentacle.visible&&t.tentacle.scale.set(1,Math.max(.01,Math.sin(Math.PI*a)),1),t.group.getObjectByName(`ring`).visible=!t.landed,t.landed&&a>=1&&(t.group.visible=!1)}}buildEffectPool(){for(let e=0;e<jp;e++){let e=new Ia({color:16777215,transparent:!0,depthWrite:!1}),t=new q(this.effectRing,e);t.visible=!1,this.scene.add(t),this.effects.push({mesh:t,material:e,age:0,life:1,scale:1})}}buildModel(e,t,r){let i=r?16774358:new K().setHSL(t/255,.65,.55).getHex(),a=new ri,o=(e,t,n,r)=>(e.position.set(t,n,r),a.add(e),e),s=(e,t,n,r)=>new q(new Ao(e,t,n),this.material(r)),c=e=>new q(new Mo(.12,.15,e,6),this.material(5978654)),l=(e,t,n)=>new q(new ec(e,t).rotateY(Math.PI/2),this.material(n,!0));switch(e){case n.viking:{let e=this.material(7029795);a.add(new q(Rp(7.4,1.9),e)),o(new q(new No(.75,2.9,6).rotateZ(-Math.PI/2),this.material(4870487)),4.95,.3,0),o(s(.4,.95,1.55,13214247),3.55,.35,0);let t=o(s(.45,2.1,.42,7029795),3.35,1.75,0);t.rotation.z=-.35,o(s(1.05,.55,.5,7029795),3.85,2.75,0),o(s(.35,.35,.52,13214247),4.3,2.75,0);let n=o(s(.38,1.5,.38,7029795),-3.5,1.35,0);n.rotation.z=.45,o(c(4.6),.2,2.9,0),o(l(3.8,3,i),.35,3.2,0),o(l(3.82,.6,16777215),.38,3.6,0);for(let e=0;e<5;e++){let t=e%2?15913323:i;for(let n of[-1,1])o(new q(new Mo(.4,.4,.15,10).rotateX(Math.PI/2),this.material(t)),-2.4+e*1.1,.8,n)}break}case n.english:{let e=7.8,t=3.3,n=2893344;a.add(new q(Rp(e,t,{round:!0}),this.material(n))),a.add(new q(Rp(e*1.02,t*1.06,{round:!0,depth:.22,top:.62}),this.material(14200906)));for(let e of[-2.1,-.9,.3])for(let t of[-1,1])o(s(.42,.32,.08,1118481),e,.2,t*1.67);let r=-2.95;o(s(1.7,1.1,t*.82,n),r,1.25,0);for(let e of[-1,1])o(s(1.72,.18,.12,14200906),r,1.88,e*t*.41);o(s(.12,.18,t*.84,14200906),-3.75,1.88,0);let u=o(new q(new Mo(.07,.1,2.6,6),this.material(5978654)),4.45,1.15,0);u.rotation.z=-Math.PI/2+.3;for(let[e,t,n]of[[-1.5,4.6,2.6],[.6,5.6,3.2],[2.4,4.4,2.3]])o(c(t),e,.7+t/2,0),o(l(n,t*.55,16052194),e+.15,.9+t*.55,0);o(l(.9,.6,i),.75,6.7,.5);break}case n.jonka:a.add(new q(Rp(7,2.8),this.material(8010530))),o(s(1.8,1.4,2.6,8010530),-2.6,1.3,0);for(let[e,t]of[[-.6,4.6],[1.8,3.8]]){o(c(t),e,.7+t/2,0),o(l(3,t*.75,i),e+.15,1.2+t*.5,0);for(let n=0;n<4;n++)o(s(.08,.08,3.05,3809296),e+.2,.9+t*.2+t*.18*n,0)}break;case n.fort:{let e=10130570;o(new q(new Mo(3.1,3.6,4.4,10),this.material(e)),0,3,0);for(let t=0;t<8;t++){let n=t/8*Math.PI*2;o(s(.9,.8,.9,e),Math.cos(n)*2.75,5.6,Math.sin(n)*2.75)}for(let e of[0,2.1,4.2]){let t=o(new q(new Mo(.28,.36,2,8).rotateZ(Math.PI/2),this.material(1842204)),Math.cos(e)*3.3,4.2,Math.sin(e)*3.3);t.rotation.y=-e}o(new q(new Mo(.07,.07,3.2,6),this.material(3811866)),0,6.8,0),o(l(1.7,1.1,1447446),.85,7.8,0).rotation.y=Math.PI/2,o(s(.08,.42,.42,15921906),.85,7.85,.02).rotation.y=Math.PI/2;break}case n.shark:{let e=this.material(6255488);o(new q(new ic(1,12,8),e),0,-.1,0).scale.set(2.3,.55,.75),o(new q(new No(.45,1.4,4),e),-.2,.75,0);let t=o(s(.3,1,.12,6255488),-2.3,.25,0);t.rotation.z=.5;break}case n.kraken:{let e=this.material(9060256),t=o(new q(new ic(6,20,14,0,Math.PI*2,0,Math.PI/2),e),0,-.5,0);t.scale.y=.85;for(let e of[-1,1])o(new q(new ic(1.1,12,8),this.material(16774338)),3.6,2.6,e*1.9),o(new q(new ic(.55,10,6),this.material(1118481)),4.4,2.8,e*1.9);let n=[];for(let t=0;t<8;t++){let r=t/8*Math.PI*2+.2,i=new ri;i.position.set(Math.cos(r)*7,-.6,Math.sin(r)*7),i.rotation.y=-r;let o=new q(new ac(2.2,.55,6,14,Math.PI),e);o.rotation.y=Math.PI/2,i.add(o),a.add(i),n.push(i)}a.userData.tentacles=n;break}case n.goldShip:{let e=new _c({color:14725690,emissive:6963712});a.add(new q(Rp(8.6,3.8,{round:!0}),e)),a.add(new q(Rp(8.8,4,{round:!0,depth:.2,top:.6}),this.material(16773560)));for(let[e,t]of[[-2.4,.7],[-2.4,-.7],[-.9,0]])o(s(1.1,.9,1.1,9067044),e,1.15,t);for(let[e,t]of[[-.2,5.4],[2.2,4.4]])o(c(t),e,.7+t/2,0),o(l(3.4,t*.55,16775136),e+.15,.9+t*.55,0);o(l(1,.7,16765518),-.05,6.6,.55);break}case n.merchant:a.add(new q(Rp(6.6,3.2),this.material(11569754))),o(s(1.2,1,1.2,9071162),-1.4,1.2,.6),o(s(1.2,1,1.2,9071162),-1.4,1.2,-.6),o(s(1.2,1,1.2,9071162),-.1,1.2,0),o(c(4.2),1.2,2.8,0),o(l(3.2,2.6,15260864),1.35,3,0);break;default:a.add(new q(Rp(5.8,2.4),this.material(9067059))),o(c(4.2),.3,2.6,0),o(l(3.4,3,i),.45,2.9,0)}return a}material(e,t=!1){let n=`${e}:${t}`,r=this.materials.get(n);return r||(r=new _c({color:e,side:t?2:0}),this.materials.set(n,r)),r}resize(){let e=this.canvas.parentElement?.clientWidth??innerWidth,t=this.canvas.parentElement?.clientHeight??innerHeight;this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix();let n=Ep/2*(Math.PI/180),r=2*Math.tan(n)*this.camera.aspect,i=Math.sin(Tp)*(1/Math.tan(Tp-n)-1/Math.tan(Tp+n)),a=Math.min(Cp/Math.min(r,i),Cp*wp/Math.max(r,i));this.cameraOffset.set(0,Math.sin(Tp),Math.cos(Tp)).multiplyScalar(a*this.zoom),this.camera.far=a*this.zoom*3,this.camera.updateProjectionMatrix(),this.focusInitialized&&(this.camera.position.copy(this.focus).add(this.cameraOffset),this.camera.lookAt(this.focus))}buildSea(){let e=new q(new ec(2240,2240).rotateX(-Math.PI/2),new _c({color:1002091}));e.position.set(280,-.02,280);let t=new q(new ec(560,560).rotateX(-Math.PI/2),new _c({color:1799328}));t.position.set(280,0,280);let n=new Sl(560,28,9425919,9425919),r=n.material;r.transparent=!0,r.opacity=.13,n.position.set(280,.05,280);let i=new wo(new aa().setFromPoints([new W(0,.05,0),new W(560,.05,0),new W(560,.05,560),new W(0,.05,560)]),new uo({color:16777215}));this.scene.add(e,t,n,i)}},Ip={splash:{color:15267583,life:.5,scale:2.2,ring:!0},blast:{color:16752704,life:.35,scale:2.4,ring:!1},wreck:{color:16769184,life:.9,scale:9,ring:!0},levelup:{color:16765518,life:1.1,scale:18,ring:!0},flash:{color:16773544,life:.45,scale:7,ring:!1}};function Lp(e,t,n){let r=new ao(e,t,n);return r.instanceMatrix.setUsage(Rn),r.count=0,r.frustumCulled=!1,r}function Rp(e,t,n={}){let{round:r=!1,depth:i=1,top:a=.7}=n,o=e/2,s=t/2,c=new fs;if(c.moveTo(-o,-s*.9),r){let e=o-t*.85;c.lineTo(e,-s),c.quadraticCurveTo(o-t*.08,-s,o,0),c.quadraticCurveTo(o-t*.08,s,e,s)}else{let e=o-t*.75;c.lineTo(e,-s),c.lineTo(o,0),c.lineTo(e,s)}c.lineTo(-o,s*.9),c.closePath();let l=new Xs(c,{depth:i,bevelEnabled:!1});return l.rotateX(Math.PI/2),l.translate(0,a,0),l.computeVertexNormals(),l}function zp(e,t,n){let r=e.trailPositions;e.trailCount===Op&&(r.copyWithin(0,3),e.trailCount--);let i=e.trailCount*3;r[i]=t,r[i+1]=.3,r[i+2]=n,e.trailCount++;let a=e.trail.geometry;a.setDrawRange(0,e.trailCount),a.attributes.position.needsUpdate=!0}var Bp=18,Vp=52,Hp=6,Up=class e{constructor(t){this.hooks=t,this.dirX=0,this.dirY=0,this.act=!1,this.aim=null,this.aiming=null,this.pendingAct=null,this.dragAim=null,this.keys=new Set,this.mouseX=0,this.mouseY=0,this.stickX=0,this.stickY=0,this.stickActive=!1,this.releaseStick=()=>{},addEventListener(`keydown`,e=>{this.keys.add(e.code),(e.code===`Space`||e.code===`KeyE`)&&!e.repeat&&(e.preventDefault(),this.pendingAct={aim:null})}),addEventListener(`keyup`,e=>this.keys.delete(e.code)),addEventListener(`blur`,()=>this.keys.clear()),addEventListener(`pointermove`,e=>{e.pointerType===`mouse`&&(this.mouseX=e.clientX,this.mouseY=e.clientY)}),addEventListener(`pointerdown`,e=>{e.pointerType!==`mouse`||e.button!==2||e.target.closest?.(`button, #menu`)||(this.mouseX=e.clientX,this.mouseY=e.clientY,this.pendingAct={aim:this.mouseAim()})}),addEventListener(`contextmenu`,e=>e.preventDefault()),e.isTouchDevice()&&this.createStick()}static isTouchDevice(){return`ontouchstart`in window||navigator.maxTouchPoints>0}bindAimStick(e){let t=null,n=0,r=0,i=!1,a=()=>{t=null,i=!1,this.dragAim=null,e.classList.remove(`held`)};e.addEventListener(`pointerdown`,a=>{a.preventDefault(),a.stopPropagation(),t===null&&(t=a.pointerId,e.setPointerCapture(a.pointerId),n=a.clientX,r=a.clientY,i=!1,e.classList.add(`held`))}),e.addEventListener(`pointermove`,e=>{if(e.pointerId!==t)return;let a=e.clientX-n,o=e.clientY-r;Math.hypot(a,o)>Bp?(i=!0,this.dragAim=this.screenDirection(a,o)):i&&(this.dragAim=null)}),e.addEventListener(`pointerup`,e=>{e.pointerId===t&&(i?this.dragAim!==null&&(this.pendingAct={aim:this.dragAim}):this.pendingAct={aim:null},a())}),e.addEventListener(`pointercancel`,e=>{e.pointerId===t&&a()})}update(){this.act=this.pendingAct!==null,this.aim=this.pendingAct?.aim??null,this.pendingAct=null,this.aiming=this.dragAim===null?null:{angle:this.dragAim};let e=0,t=0,n=this.axis([`KeyA`,`ArrowLeft`],[`KeyD`,`ArrowRight`]),r=this.axis([`KeyW`,`ArrowUp`],[`KeyS`,`ArrowDown`]);if(n!==0||r!==0){let i=Math.hypot(n,r);e=n/i,t=r/i}else this.stickActive&&(e=this.stickX,t=this.stickY);this.dirX=Math.round(e*100),this.dirY=Math.round(t*100)}mouseAim(){let e=this.hooks.groundAt(this.mouseX,this.mouseY);if(!e)return null;let t=this.hooks.selfPosition();return Math.atan2(e.y-t.y,e.x-t.x)}screenDirection(e,t){let n=this.hooks.selfOnScreen(),r=Math.hypot(e,t)||1;if(n){let i=this.hooks.groundAt(n.x,n.y),a=this.hooks.groundAt(n.x+e/r*100,n.y+t/r*100);if(i&&a)return Math.atan2(a.y-i.y,a.x-i.x)}return Math.atan2(t,e)}axis(e,t){let n=e.some(e=>this.keys.has(e));return n===t.some(e=>this.keys.has(e))?0:n?-1:1}createStick(){let e=document.createElement(`div`);e.id=`stick-zone`,e.innerHTML=`<div class="stick-base"></div><div class="stick-knob"></div>`,document.body.appendChild(e);let t=e.querySelector(`.stick-base`),n=e.querySelector(`.stick-knob`),r=null,i=0,a=0,o=(e,t,n)=>{e.style.transform=`translate(${t}px, ${n}px)`},s=()=>{r!==null&&e.hasPointerCapture?.(r)&&e.releasePointerCapture(r),r=null,this.stickActive=!1,this.stickX=0,this.stickY=0,e.classList.remove(`on`)};this.releaseStick=s;let c=(e,r)=>{let s=e-i,c=r-a,l=Math.hypot(s,c);l>Vp&&(i=e-s/l*Vp,a=r-c/l*Vp,s=e-i,c=r-a,l=Vp),o(t,i,a),o(n,i+s,a+c);let u=Math.max(0,Math.min(1,(l-Hp)/14));this.stickX=l>0?s/l*u:0,this.stickY=l>0?c/l*u:0,this.stickActive=u>0};e.addEventListener(`pointerdown`,t=>{t.pointerType!==`mouse`&&r===null&&(t.preventDefault(),r=t.pointerId,e.setPointerCapture(t.pointerId),i=t.clientX,a=t.clientY,e.classList.add(`on`),c(t.clientX,t.clientY))}),e.addEventListener(`pointermove`,e=>{e.pointerId===r&&c(e.clientX,e.clientY)});for(let t of[`pointerup`,`pointercancel`,`lostpointercapture`])e.addEventListener(t,e=>{e.pointerId===r&&s()});addEventListener(`blur`,s),document.addEventListener(`visibilitychange`,()=>{document.hidden&&s()})}resetStick(){this.releaseStick()}},Wp=3e3,Gp=128,Kp=class{constructor(e,t){this.timeline=e,this.effect=t,this.flying=[],this.draw={kind:0,x:0,y:0,angle:0,height:0,mine:!1},this.ownFired=new Map,this.links=new Map}addOwn(e,t,n){this.ownFired.set(t,n),this.spawn(e.kind,e.range,e.shots,-1,t,n,!0)}ownFromServer(e,t,n){let r=this.ownFired.get(e.n);if(r!==void 0&&t-r<Wp){this.links.set(e.v,e.n),this.links.size>Gp&&this.links.delete(this.links.keys().next().value);return}let i=e.p.slice();for(let e=0;e<i.length;e+=3)i[e]+=n.x,i[e+1]+=n.y;this.spawn(e.k,e.r,i,e.v,-1,t,!0)}addVolley(e,t){this.spawn(e.k,e.r,e.p,e.v,-1,this.timeline.showAt(e.t),t)}confirmHit(e){let t=this.links.get(e.v),n=t===void 0?this.flying.find(t=>t.volley===e.v&&t.index===e.i):this.flying.find(n=>n.own===t&&n.index===e.i);if(!n)return!1;let r=(e.x-n.x)*n.dx+(e.y-n.y)*n.dy;return n.end=Math.max(0,Math.min(n.end,r+.5)),n.hit=!0,!0}spawn(e,t,n,r,a,o,s){let c=i[e];for(let i=0;i<n.length/3;i++){let l=n[i*3],u=n[i*3+1],d=n[i*3+2],f=Math.cos(d),p=Math.sin(d);this.flying.push({volley:r,own:a,mine:s,index:i,kind:e,x:l,y:u,dx:f,dy:p,speed:c.speed,start:o,end:te(l,u,f,p,t),hit:!1})}}update(e,t){for(let[t,n]of this.ownFired)e-n>Wp&&this.ownFired.delete(t);let n=0;for(let i of this.flying){let a=(e-i.start)/1e3*i.speed;if(a<0){this.flying[n++]=i;continue}if(a>=i.end){this.effect(i.hit?`blast`:`splash`,i.x+i.dx*i.end,i.y+i.dy*i.end);continue}let o=a/Math.max(i.end,1);this.draw.kind=i.kind,this.draw.mine=i.mine,this.draw.x=i.x+i.dx*a,this.draw.y=i.y+i.dy*a,this.draw.angle=Math.atan2(i.dy,i.dx),this.draw.height=i.kind===r.ball||i.kind===r.axe?1.2+Math.sin(Math.PI*o)*2.2:1.4,t(this.draw),this.flying[n++]=i}this.flying.length=n}},qp={[a.fullSalvo]:`TAM SALVO`,[a.rocketRain]:`ROKET`,[a.berserk]:`HÜCUM`},Jp=700,Yp={dealt:900,taken:1100,callout:1500,gain:1100},Xp=10,Zp=450,Qp=26,$p=46,em=`
  #hud { position: fixed; inset: 0; pointer-events: none; z-index: 3; font-family: system-ui, -apple-system, "Segoe UI", sans-serif; }
  #hud .label { position: absolute; left: 0; top: 0; transform: translate(-50%, -100%); text-align: center; white-space: nowrap; will-change: transform; }
  #hud .label .name { font-size: 12px; font-weight: 700; color: #fff; text-shadow: 0 1px 2px #000c; }
  #hud .label .name b { display: inline-block; min-width: 16px; margin-right: 4px; padding: 0 4px; border-radius: 6px; background: #000a; color: #ffd24e; }
  #hud .label .bar { position: relative; width: 46px; height: 5px; margin: 2px auto 0; border-radius: 3px; background: #0009; overflow: hidden; }
  #hud .label .bar .fill { position: relative; height: 100%; background: #6be36b; transform-origin: left; }
  /* What was just lost stays white for a moment, then drains: you see each chunk of damage. */
  #hud .label .bar .trail { position: absolute; inset: 0; background: #fff; transform-origin: left; transition: transform .45s ease-in .3s; }
  #hud .label.leader .name::before { content: "👑"; margin-right: 3px; font-size: 15px; }
  #hud .label.leader .name { color: #ffd24e; }
  #hud .label.threat .name { color: #ff6b5a; }
  /* Off-screen leader / sea event: an arrow on the screen edge pointing at it. */
  #hud .edge { --tint: #ffd24e; position: absolute; left: 0; top: 0; display: none; pointer-events: none; will-change: transform; }
  #hud .edge.event { --tint: #6ff0c8; }
  #hud .edge.show { display: block; }
  #hud .edge i { position: absolute; left: -15px; top: -15px; width: 30px; height: 30px; border-radius: 50%;
    background: var(--tint); box-shadow: 0 2px 8px #0008; font-style: normal; font-size: 16px; line-height: 30px; text-align: center; }
  /* The pointer: a triangle on the badge's rim, turned toward its target. */
  #hud .edge b { position: absolute; left: 0; top: 0; width: 0; height: 0; transform: rotate(var(--angle)); }
  #hud .edge b::after { content: ""; position: absolute; left: 13px; top: -9px; border: 9px solid transparent; border-left: 14px solid var(--tint);
    filter: drop-shadow(0 1px 2px #0009); }
  #hud .edge span { position: absolute; top: 18px; white-space: nowrap; transform: translateX(var(--shift, -50%));
    font: 800 11px system-ui, sans-serif; color: var(--tint); text-shadow: 0 1px 3px #000; }

  #hud .minimap { position: absolute; left: calc(10px + env(safe-area-inset-left)); top: calc(40px + env(safe-area-inset-top));
    width: 96px; height: 96px; border-radius: 10px; box-shadow: 0 2px 8px #0006; }
  #hud.desktop .minimap { width: 128px; height: 128px; }
  /* A place's name as you sail in. */
  /* Below our ship: the top of the screen belongs to the level-up banner and the feed. */
  #hud .place { position: absolute; left: 50%; top: 66%; transform: translateX(-50%); text-align: center; white-space: nowrap; opacity: 0; pointer-events: none; }
  #hud .place.show { animation: place 2.8s ease-out forwards; }
  #hud .place b { display: block; font: 900 20px system-ui, sans-serif; letter-spacing: 2px; color: #fff; text-shadow: 0 2px 0 #0007, 0 0 12px #0009; }
  #hud .place span { display: block; margin-top: 2px; font: 800 13px system-ui, sans-serif; color: #ffd24e; text-shadow: 0 1px 3px #000; }
  @keyframes place {
    0% { opacity: 0; transform: translate(-50%, 8px); }
    12% { opacity: 1; transform: translate(-50%, 0); }
    78% { opacity: 1; }
    100% { opacity: 0; }
  }
  /* Inside a fog bank: misty edges. */
  #hud .fogveil { position: absolute; inset: 0; pointer-events: none; opacity: 0; transition: opacity .8s;
    background: radial-gradient(ellipse at center, transparent 40%, #e6eef3aa 100%); }
  #hud .fogveil.on { opacity: 1; }
  #hud .label.threat .name b { background: #a3170c; color: #fff; }
  #hud .float { position: absolute; left: 0; top: 0; pointer-events: none; white-space: nowrap; font-weight: 900;
    will-change: transform, opacity; text-shadow: 0 2px 0 #000a, 0 0 6px #000a; }
  #hud .float.dealt { font-size: 18px; color: #fff; }
  #hud .float.taken { font-size: 22px; color: #ff4a3a; }
  #hud .float.callout { font-size: 15px; color: #ffb347; letter-spacing: .5px; }
  #hud .float.gain { font-size: 14px; color: #ffe9a0; }
  #hud .float.gain.big { font-size: 21px; color: #ffd24e; }
  #hud .hurt { position: absolute; inset: 0; pointer-events: none; opacity: 0; transition: opacity .55s ease-out;
    background: radial-gradient(ellipse at center, transparent 55%, #ff1e1e99 100%); }
  #hud .hurt.on { transition: none; }
  #hud .label.heal .bar { box-shadow: 0 0 0 1px #b6ffb6, 0 0 8px #6be36b; }
  #hud .label.self .bar { width: 58px; height: 6px; }
  #hud .label .ammo { display: flex; gap: 2px; justify-content: center; margin-top: 2px; }
  #hud .label .ammo i { width: 18px; height: 5px; border-radius: 2px; background: #0009; overflow: hidden; }
  #hud .label .ammo i b { display: block; height: 100%; background: #ff9d2e; transform-origin: left; }
  #hud .label .ammo i.full b { background: #ffb347; box-shadow: 0 0 4px #ffb347; }
  #hud .label.npc .name { color: #e8dcc0; font-weight: 600; }
  /* Gears under the ammo: two chevrons, lit as the hull picks up way. */
  #hud .label .gear { display: flex; gap: 1px; justify-content: center; margin-top: 2px; }
  #hud .label .gear i { width: 13px; height: 8px; background: #ffffff38; clip-path: polygon(0 0, 45% 0, 100% 50%, 45% 100%, 0 100%, 55% 50%); }
  #hud .label .gear i.on { background: #6ff0c8; filter: drop-shadow(0 0 3px #6ff0c8); }

  #hud .board { position: absolute; right: calc(8px + env(safe-area-inset-right)); top: calc(8px + env(safe-area-inset-top));
    min-width: 132px; padding: 5px 9px; border-radius: 10px; background: #0009; font-size: 11px; color: #eaf6ff; }
  #hud .board div { display: flex; justify-content: space-between; gap: 10px; }
  #hud .board .me { color: #ffd24e; font-weight: 700; }
  #hud .board .title { font-weight: 800; margin-bottom: 2px; opacity: .8; }

  #hud .feed { position: absolute; left: calc(10px + env(safe-area-inset-left)); top: calc(144px + env(safe-area-inset-top)); font-size: 12px; }
  #hud.desktop .feed { top: calc(176px + env(safe-area-inset-top)); }
  #hud .feed div { width: fit-content; margin-bottom: 3px; padding: 3px 9px; border-radius: 8px; background: #0008; color: #fff; transition: opacity .6s; }

  #hud .xp { position: absolute; left: 50%; bottom: calc(8px + env(safe-area-inset-bottom)); transform: translateX(-50%);
    width: min(360px, 46vw); height: 16px; border-radius: 8px; background: #000a; overflow: hidden; }
  #hud .xp .fill { position: absolute; inset: 0; background: linear-gradient(90deg, #ffb300, #ffd24e); transform-origin: left; transform: scaleX(0); transition: transform .25s; }
  #hud .xp.up { box-shadow: 0 0 0 2px #ffd24e, 0 0 18px #ffd24e; }
  #hud .levelup { position: absolute; left: 50%; top: 26%; transform: translate(-50%, -50%); text-align: center;
    white-space: nowrap; pointer-events: none; opacity: 0; }
  #hud .levelup.show { animation: levelup 2.4s ease-out forwards; }
  #hud .levelup b { display: block; font: 900 36px/1 system-ui, sans-serif; letter-spacing: 1px; color: #ffd24e;
    text-shadow: 0 3px 0 #b5651d, 0 6px 16px #000b; }
  #hud .levelup span { display: block; margin-top: 6px; font: 800 16px system-ui, sans-serif; color: #fff; text-shadow: 0 1px 4px #000; }
  #hud .levelup span + span { margin-top: 2px; font-size: 12px; font-weight: 700; opacity: .85; }
  @keyframes levelup {
    0% { opacity: 0; transform: translate(-50%, -50%) scale(.55); }
    10% { opacity: 1; transform: translate(-50%, -50%) scale(1.12); }
    18% { transform: translate(-50%, -50%) scale(1); }
    80% { opacity: 1; transform: translate(-50%, -50%); }
    100% { opacity: 0; transform: translate(-50%, -70%); }
  }
  #hud .xp span { position: relative; display: block; text-align: center; font: 700 11px/16px system-ui, sans-serif; color: #fff; text-shadow: 0 1px 2px #000; white-space: nowrap; }

  #hud .super { position: absolute; right: calc(20px + env(safe-area-inset-right)); bottom: calc(34px + env(safe-area-inset-bottom));
    width: 88px; height: 88px; border-radius: 50%; pointer-events: auto; touch-action: none; cursor: pointer;
    color: #fff; font: 800 12px system-ui, sans-serif; text-shadow: 0 1px 2px #000; transition: transform .08s;
    border: 3px solid #ffffff55; background: conic-gradient(#ffd24e var(--charge), #000a 0); }
  #hud .super.ready { border-color: #ffd24e; box-shadow: 0 0 18px #ffd24e; animation: pulse 0.9s infinite alternate; }
  #hud .super:disabled { opacity: .45; cursor: default; }
  #hud .held { transform: scale(0.93); }
  @keyframes pulse { to { transform: scale(1.06); } }
  #hud.desktop .super { width: 80px; height: 80px; }
  /* In the harbour (menu) only the sea and the ships show. */
  #hud.harbour .xp, #hud.harbour .super, #hud.harbour .label.self, #hud.harbour .minimap, #hud.harbour .fogveil { display: none; }
  #hud.desktop .super::after { content: "Space"; position: absolute; left: 0; right: 0; bottom: -16px; font-size: 10px; opacity: .7; }

  @media (max-height: 500px), (max-width: 700px) {
    #hud .board { min-width: 112px; padding: 4px 8px; font-size: 10px; }
    #hud .board div:nth-child(n+5) { display: none; }
    #hud .feed { font-size: 11px; }
    #hud .feed div:nth-child(n+3) { display: none; }
  }
  @media (max-height: 500px) {
    #hud .super { bottom: calc(24px + env(safe-area-inset-bottom)); width: 72px; height: 72px; }
    #hud .minimap, #hud.desktop .minimap { width: 76px; height: 76px; }
    #hud .feed, #hud.desktop .feed { top: calc(122px + env(safe-area-inset-top)); }
    #hud .place { top: 62%; }
  }
`,tm=class{constructor(e){this.root=document.createElement(`div`),this.labelLayer=document.createElement(`div`),this.labels=new Map,this.board=document.createElement(`div`),this.feedBox=document.createElement(`div`),this.xp=document.createElement(`div`),this.levelBox=document.createElement(`div`),this.xpGlow=0,this.superButton=document.createElement(`button`),this.boardKey=``,this.floats=[],this.hurtEdge=document.createElement(`div`),this.bounty=new nm(`leader`,`👑`),this.eventMarkers=[new nm(`event`,`💰`),new nm(`event`,`💰`)],this.minimap=document.createElement(`canvas`),this.minimapBase=null,this.placeBox=document.createElement(`div`),this.fogVeil=document.createElement(`div`);let t=document.createElement(`style`);t.textContent=em,document.head.appendChild(t),this.root.id=`hud`,this.root.classList.toggle(`desktop`,!e),this.board.className=`board`,this.feedBox.className=`feed`;let n=this.xp;n.className=`xp`,n.innerHTML=`<div class="fill"></div><span></span>`,this.xpFill=n.querySelector(`.fill`),this.xpText=n.querySelector(`span`),this.levelBox.className=`levelup`,this.superButton.className=`super`,this.superButton.disabled=!0,this.hurtEdge.className=`hurt`,this.minimap.className=`minimap`,this.placeBox.className=`place`,this.fogVeil.className=`fogveil`,this.root.append(this.fogVeil,this.hurtEdge,this.bounty.el,...this.eventMarkers.map(e=>e.el),this.labelLayer,this.minimap,this.board,this.feedBox,n,this.levelBox,this.placeBox,this.superButton),this.root.classList.add(`harbour`),document.body.appendChild(this.root)}setPlaying(e){this.root.classList.toggle(`harbour`,!e)}setLabel(e,t,n){let r=this.labels.get(e);if(!t){r&&(r.root.style.display=`none`);return}if(!r){let t=document.createElement(`div`);t.className=`label${n.self?` self`:``}${n.npc?` npc`:``}`,t.innerHTML=`<div class="name"></div><div class="bar"><i class="trail"></i><div class="fill"></div></div>`+(n.self?`<div class="ammo">${`<i><b></b></i>`.repeat(3)}</div><div class="gear"><i></i><i></i></div>`:``),r={root:t,name:t.querySelector(`.name`),fill:t.querySelector(`.bar .fill`),trail:t.querySelector(`.bar .trail`),pips:[...t.querySelectorAll(`.ammo i`)],gears:[...t.querySelectorAll(`.gear i`)],key:``,hp:n.hp,healUntil:0},this.labelLayer.appendChild(t),this.labels.set(e,r)}let i=`${n.name}|${n.level}|${n.compact}`;r.key!==i&&(r.key=i,r.name.innerHTML=n.compact?``:n.npc?im(n.name):`<b>${n.level}</b>${n.self?``:im(n.name)}`);let a=performance.now();n.hp>r.hp&&(r.healUntil=a+Jp),r.hp=n.hp,r.root.classList.toggle(`heal`,a<r.healUntil);let o=n.maxHp>0?Math.max(0,Math.min(1,n.hp/n.maxHp)):0;r.fill.style.transform=`scaleX(${o})`,r.trail.style.transform=`scaleX(${o})`,r.root.classList.toggle(`threat`,!!n.threat),r.root.classList.toggle(`leader`,!!n.leader),r.fill.style.background=o>.5?`#6be36b`:o>.25?`#ffc84a`:`#ff5a4a`,n.ammo!==void 0&&r.pips.forEach((e,t)=>{let r=Math.max(0,Math.min(1,(n.ammo-t*c)/c));e.firstElementChild.style.transform=`scaleX(${r})`,e.classList.toggle(`full`,r>=1)}),n.gear!==void 0&&r.gears.forEach((e,t)=>e.classList.toggle(`on`,n.gear>t)),r.root.style.display=``,r.root.style.transform=`translate(${t.x.toFixed(1)}px, ${t.y.toFixed(1)}px) translate(-50%, -100%)`}float(e,t,n,r=``){let i=performance.now(),a=t===`gain`?`+`:`-`;if(t!==`callout`){let r=this.floats.find(n=>n.id===e&&n.style===t&&i-n.born<Zp);if(r){r.amount+=n,r.el.textContent=`${a}${r.amount}`,r.el.classList.toggle(`big`,t===`gain`&&r.amount>=Xp);return}}let o=document.createElement(`div`);o.className=`float ${t}${t===`gain`&&n>=Xp?` big`:``}`,o.textContent=t===`callout`?r:`${a}${n}`,this.labelLayer.appendChild(o);let s=new Set(this.floats.filter(t=>t.id===e).map(e=>e.slot)),c=0;for(;s.has(c);)c++;this.floats.push({el:o,id:e,style:t,amount:n,born:i,slot:c})}updateFloats(e){let t=performance.now(),n=0;for(let r of this.floats){let i=(t-r.born)/Yp[r.style],a=e(r.id);if(i>=1||!a){r.el.remove();continue}let o=a.y-26-r.slot*Qp-i*$p,s=i<.12?1.35-i*3:1;r.el.style.opacity=String(i<.7?1:(1-i)/.3),r.el.style.transform=`translate(${a.x.toFixed(1)}px, ${o.toFixed(1)}px) translate(-50%, -100%) scale(${s.toFixed(2)})`,this.floats[n++]=r}this.floats.length=n}setBounty(e,t,n){this.bounty.set(e,t,n)}setEventMarker(e,t,n,r,i){this.eventMarkers[e]?.set(t,n,i,r)}get eventMarkerCount(){return this.eventMarkers.length}showPlace(e,t){this.placeBox.innerHTML=`<b>${im(e.toLocaleUpperCase(`tr`))}</b>${t?`<span>${im(t)}</span>`:``}`,this.placeBox.classList.remove(`show`),this.placeBox.offsetWidth,this.placeBox.classList.add(`show`)}setFog(e){this.fogVeil.classList.toggle(`on`,e)}drawMinimap(e,t){let n=this.minimap,r=n.clientWidth;if(!r)return;let i=Math.min(2,devicePixelRatio||1),a=Math.round(r*i);n.width!==a&&(n.width=n.height=a,this.minimapBase=rm(a));let o=n.getContext(`2d`),s=a/560;o.clearRect(0,0,a,a),o.drawImage(this.minimapBase,0,0),o.fillStyle=e.fortAlive?`#ff5a4a`:`#6b6b6b`,o.fillRect(j.x*s-3*i,j.y*s-3*i,6*i,6*i),o.textAlign=`center`,o.textBaseline=`middle`,o.font=`${Math.round(10*i)}px system-ui, sans-serif`;for(let n of e.events){let e=4+t*2%1*4;o.beginPath(),o.arc(n.x*s,n.y*s,e*i,0,Math.PI*2),o.strokeStyle=`#6ff0c8`,o.lineWidth=1.5*i,o.stroke(),o.fillText(we[n.kind]?.icon??``,n.x*s,n.y*s)}if(e.leader&&(o.beginPath(),o.arc(e.leader.x*s,e.leader.y*s,3.2*i,0,Math.PI*2),o.fillStyle=`#ffd24e`,o.fill(),o.strokeStyle=`#000a`,o.lineWidth=i,o.stroke()),e.self){let{x:t,y:n,heading:r}=e.self;o.save(),o.translate(t*s,n*s),o.rotate(r),o.beginPath(),o.moveTo(5*i,0),o.lineTo(-3.5*i,3.2*i),o.lineTo(-3.5*i,-3.2*i),o.closePath(),o.fillStyle=`#fff`,o.fill(),o.strokeStyle=`#000b`,o.lineWidth=i,o.stroke(),o.restore()}}hurt(e){this.hurtEdge.classList.add(`on`),this.hurtEdge.style.opacity=String(Math.min(.9,.3+e)),this.hurtEdge.offsetWidth,this.hurtEdge.classList.remove(`on`),this.hurtEdge.style.opacity=`0`}removeLabel(e){this.labels.get(e)?.root.remove(),this.labels.delete(e)}setProgress(e,t,n,r){this.xpFill.style.transform=`scaleX(${r?1:Math.max(0,Math.min(1,n))})`,this.xpText.textContent=`Sv ${e} · ${Me(e)} · ${s[t]?.label??``}`}setSuper(e,t){let n=s[e]?.super?.kind,r=n!==void 0,i=r&&t>=100;this.superButton.disabled=!i,this.superButton.classList.toggle(`ready`,i),this.superButton.style.setProperty(`--charge`,`${r?t/100*100:0}%`);let a=r?qp[n]:``;this.superButton.textContent!==a&&(this.superButton.textContent=a)}showLevelUp(e,t){this.levelBox.innerHTML=`<b>SEVİYE ${e}</b>${t.map(e=>`<span>${im(e)}</span>`).join(``)}`,this.levelBox.classList.remove(`show`),this.levelBox.offsetWidth,this.levelBox.classList.add(`show`),this.xp.classList.add(`up`),clearTimeout(this.xpGlow),this.xpGlow=window.setTimeout(()=>this.xp.classList.remove(`up`),1200)}setBoard(e){let t=e.map(e=>`${e.name}${e.level}${e.score}${e.self}${e.leader}`).join(`|`);t!==this.boardKey&&(this.boardKey=t,this.board.innerHTML=`<div class="title">LİDERLER</div>`+e.map((e,t)=>`<div class="${e.self?`me`:``}"><span>${t+1}. ${e.leader?`👑 `:``}${im(e.name)}</span><span>${e.score}</span></div>`).join(``))}feed(e){let t=document.createElement(`div`);for(t.textContent=e,this.feedBox.prepend(t);this.feedBox.children.length>4;)this.feedBox.lastElementChild.remove();setTimeout(()=>{t.style.opacity=`0`},3500),setTimeout(()=>t.remove(),4200)}},nm=class{constructor(e,t){this.el=document.createElement(`div`),this.text=``,this.icon=t,this.el.className=`edge ${e}`,this.el.innerHTML=`<b></b><i>${t}</i><span></span>`}set(e,t,n,r=this.icon){if(this.el.classList.toggle(`show`,e!==null),!e)return;this.el.style.transform=`translate(${e.x.toFixed(1)}px, ${e.y.toFixed(1)}px)`,this.el.style.setProperty(`--angle`,`${t.toFixed(3)}rad`);let i=innerWidth/3;this.el.style.setProperty(`--shift`,e.x<i?`-15px`:e.x>innerWidth-i?`calc(-100% + 15px)`:`-50%`),n!==this.text&&(this.text=n,this.el.querySelector(`span`).textContent=n),r!==this.icon&&(this.icon=r,this.el.querySelector(`i`).textContent=r)}};function rm(e){let t=document.createElement(`canvas`);t.width=t.height=e;let n=t.getContext(`2d`),r=e/560,i=e/100;n.fillStyle=`#0c4766e0`,n.beginPath(),n.roundRect(0,0,e,e,e/96*10),n.fill(),n.strokeStyle=`#9fe8ff70`,n.lineWidth=2.2*i,n.lineCap=`round`,n.lineJoin=`round`;for(let e of w){n.beginPath(),e.points.forEach(([e,t],i)=>i?n.lineTo(e*r,t*r):n.moveTo(e*r,t*r)),n.stroke();let[t,a]=e.points[e.points.length-2],[o,s]=e.points[e.points.length-1],c=Math.atan2(s-a,o-t);n.beginPath(),n.moveTo(o*r+Math.cos(c)*3*i,s*r+Math.sin(c)*3*i),n.lineTo(o*r+Math.cos(c+2.5)*4*i,s*r+Math.sin(c+2.5)*4*i),n.lineTo(o*r+Math.cos(c-2.5)*4*i,s*r+Math.sin(c-2.5)*4*i),n.closePath(),n.fillStyle=`#9fe8ffa0`,n.fill()}n.lineWidth=1.4*i,n.strokeStyle=`#cfefff90`;for(let e of[1,.6,.25])n.beginPath(),n.arc(T.x*r,T.y*r,T.r*r*e,0,Math.PI*2),n.stroke();for(let e of D)n.beginPath(),n.arc(e.x*r,e.y*r,e.r*r,0,Math.PI*2),n.fillStyle=`#e8f0f455`,n.fill();for(let e of y)n.beginPath(),n.arc(e.x*r,e.y*r,Math.max(1.2*i,e.r*r),0,Math.PI*2),n.fillStyle=e.style===`rock`?`#9a948a`:e.style===`volcano`?`#8a6a52`:`#e2c98f`,n.fill();return t}function im(e){return e.replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e])}var am=`shipz.profile.v1`,om=class{constructor(){this.data=sm()}get kind(){return Ue(this.data.kind)?this.data.kind:n.viking}set kind(e){this.data.kind=e,this.save()}get points(){return this.data.points}addPoints(e){e<=0||(this.data.points+=e,this.save())}build(e){return ot(this.data.builds[e])}isUnlocked(e,t,n){return n===0||!!this.data.unlocked[e]?.[t]?.[n]}choose(e,t,n){if(!this.isUnlocked(e,t,n)){let r=Ve(t);if(this.data.points<r)return!1;this.data.points-=r;let i=this.data.unlocked[e]??=Array.from({length:6},()=>[!0,!1,!1]);i[t][n]=!0}let r=this.build(e);return r[t]=n,this.data.builds[e]=r,this.save(),!0}save(){try{localStorage.setItem(am,JSON.stringify(this.data))}catch{}}};function sm(){let e={kind:n.viking,points:0,builds:{},unlocked:{}};try{let t=JSON.parse(localStorage.getItem(am)??`null`);if(!t||typeof t!=`object`)return e;let n={kind:Number(t.kind),points:Math.max(0,Math.floor(Number(t.points))||0),builds:{},unlocked:{}};for(let e of He){n.builds[e]=ot(t.builds?.[e]??at());let r=t.unlocked?.[e];Array.isArray(r)&&(n.unlocked[e]=Array.from({length:6},(e,t)=>[!0,!!r[t]?.[1],!!r[t]?.[2]]))}return n}catch{return e}}var cm=255,lm=213,Y;(function(e){e[e.ADD=128]=`ADD`,e[e.REPLACE=0]=`REPLACE`,e[e.DELETE=64]=`DELETE`,e[e.DELETE_AND_MOVE=96]=`DELETE_AND_MOVE`,e[e.MOVE_AND_ADD=160]=`MOVE_AND_ADD`,e[e.DELETE_AND_ADD=192]=`DELETE_AND_ADD`,e[e.CLEAR=10]=`CLEAR`,e[e.REVERSE=15]=`REVERSE`,e[e.MOVE=32]=`MOVE`,e[e.DELETE_BY_REFID=33]=`DELETE_BY_REFID`,e[e.ADD_BY_REFID=129]=`ADD_BY_REFID`})(Y||={}),Symbol.metadata??=Symbol.for(`Symbol.metadata`);function um(e){Object.defineProperty(e,Symbol.metadata,{value:void 0,writable:!0,configurable:!0,enumerable:!1})}var dm=(function(){return typeof globalThis<`u`?globalThis:typeof global<`u`?global:typeof self<`u`?self:typeof window<`u`?window:{}})();if(typeof Symbol==`function`&&typeof Symbol.for!=`function`){let e=`colyseus.symbolRegistry`,t=dm[e]||(dm[e]=Object.create(null));Symbol.for=function(e){return t[e]||(t[e]=Symbol(e))},Symbol.keyFor=function(e){for(let n in t)if(t[n]===e)return n}}var X=Symbol.for(`$refId`),fm=`~track`,pm=`~encoder`,mm=`~decoder`,hm=`~filter`,gm=`~getByIndex`,_m=`~deleteByIndex`,vm=`~resyncPrune`,Z=Symbol.for(`$changes`),Q=Symbol.for(`$childType`),ym=Symbol.for(`$proxyTarget`),bm=`~onEncodeEnd`,xm=`~reset`,Sm=`~onDecodeEnd`,Cm=Symbol.for(`$values`),wm=`~builder`,Tm=`~descriptors`,Em=`~__encodeDescriptor`,Dm=`~encoders`,Om=`~__numFields`,km=`~__refTypeFieldIndexes`,Am=`~__viewFieldIndexes`,jm=`$__fieldIndexesByViewTag`,Mm=`~__unreliableFieldIndexes`,Nm=`~__patchOnlyFieldIndexes`,Pm=`~__fullSyncSkipIndexes`,Fm=`~__fullStateOnlyFieldIndexes`,Im=`~__streamFieldIndexes`,Lm=`~__streamPriorities`;try{new TextEncoder}catch{}var Rm=new ArrayBuffer(8),zm=new Int32Array(Rm),Bm=new Float32Array(Rm),Vm=new Float64Array(Rm),Hm=new BigInt64Array(Rm),Um=typeof Buffer<`u`&&Buffer.byteLength?Buffer.byteLength:function(e,t){for(var n=0,r=0,i=0,a=e.length;i<a;i++)n=e.charCodeAt(i),n<128?r+=1:n<2048?r+=2:n<55296||n>=57344?r+=3:(i++,r+=4);return r};function Wm(e,t,n){for(var r=0,i=0,a=t.length;i<a;i++)r=t.charCodeAt(i),r<128?e[n.offset++]=r:r<2048?(e[n.offset]=192|r>>6,e[n.offset+1]=128|r&63,n.offset+=2):r<55296||r>=57344?(e[n.offset]=224|r>>12,e[n.offset+1]=128|r>>6&63,e[n.offset+2]=128|r&63,n.offset+=3):(i++,r=65536+((r&1023)<<10|t.charCodeAt(i)&1023),e[n.offset]=240|r>>18,e[n.offset+1]=128|r>>12&63,e[n.offset+2]=128|r>>6&63,e[n.offset+3]=128|r&63,n.offset+=4)}function Gm(e,t,n){e[n.offset++]=t&255}function Km(e,t,n){e[n.offset++]=t&255}function qm(e,t,n){e[n.offset++]=t&255,e[n.offset++]=t>>8&255}function Jm(e,t,n){e[n.offset++]=t&255,e[n.offset++]=t>>8&255}function Ym(e,t,n){e[n.offset++]=t&255,e[n.offset++]=t>>8&255,e[n.offset++]=t>>16&255,e[n.offset++]=t>>24&255}function Xm(e,t,n){let r=t>>24,i=t>>16,a=t>>8,o=t;e[n.offset++]=o&255,e[n.offset++]=a&255,e[n.offset++]=i&255,e[n.offset++]=r&255}function Zm(e,t,n){let r=Math.floor(t/2**32);Xm(e,t>>>0,n),Xm(e,r,n)}function Qm(e,t,n){let r=t/2**32|0;Xm(e,t>>>0,n),Xm(e,r,n)}function $m(e,t,n){Hm[0]=BigInt.asIntN(64,t),Ym(e,zm[0],n),Ym(e,zm[1],n)}function eh(e,t,n){Hm[0]=BigInt.asIntN(64,t),Ym(e,zm[0],n),Ym(e,zm[1],n)}function th(e,t,n){Bm[0]=t,Ym(e,zm[0],n)}function nh(e,t,n){Vm[0]=t,Ym(e,zm[0],n),Ym(e,zm[1],n)}function rh(e,t,n){e[n.offset++]=+!!t}function ih(e,t,n){t||=``;let r=Um(t,`utf8`),i=0;if(r<32)e[n.offset++]=r|160,i=1;else if(r<256)e[n.offset++]=217,e[n.offset++]=r,i=2;else if(r<65536)e[n.offset++]=218,Jm(e,r,n),i=3;else if(r<4294967296)e[n.offset++]=219,Xm(e,r,n),i=5;else throw Error(`String too long`);return Wm(e,t,n),i+r}function ah(e,t,n){return isNaN(t)?ah(e,0,n):isFinite(t)?t===(t|0)?t>=0?t<128?(e[n.offset++]=t&255,1):t<256?(e[n.offset++]=204,e[n.offset++]=t&255,2):t<65536?(e[n.offset++]=205,Jm(e,t,n),3):t<4294967296?(e[n.offset++]=206,Xm(e,t,n),5):(e[n.offset++]=207,Qm(e,t,n),9):t>=-32?(e[n.offset++]=224|t+32,1):t>=-128?(e[n.offset++]=208,Gm(e,t,n),2):t>=-32768?(e[n.offset++]=209,qm(e,t,n),3):t>=-2147483648?(e[n.offset++]=210,Ym(e,t,n),5):(e[n.offset++]=211,Zm(e,t,n),9):Math.abs(t)<=34028235e31&&(Bm[0]=t,Math.abs(Math.abs(Bm[0])-Math.abs(t))<1e-4)?(e[n.offset++]=202,th(e,t,n),5):(e[n.offset++]=203,nh(e,t,n),9):ah(e,t>0?2**53-1:-(2**53-1),n)}var oh={int8:Gm,uint8:Km,int16:qm,uint16:Jm,int32:Ym,uint32:Xm,int64:Zm,uint64:Qm,bigint64:$m,biguint64:eh,float32:th,float64:nh,boolean:rh,string:ih,number:ah,utf8Write:Wm,utf8Length:Um},sh=new ArrayBuffer(8),ch=new Int32Array(sh),lh=new Float32Array(sh),uh=new Float64Array(sh),dh=new BigUint64Array(sh),fh=new BigInt64Array(sh);function ph(e,t,n){n>e.length-t.offset&&(n=e.length-t.offset);for(var r=``,i=0,a=t.offset,o=t.offset+n;a<o;a++){var s=e[a];if(!(s&128))r+=String.fromCharCode(s);else if((s&224)==192)r+=String.fromCharCode((s&31)<<6|e[++a]&63);else if((s&240)==224)r+=String.fromCharCode((s&15)<<12|(e[++a]&63)<<6|e[++a]&63);else if((s&248)==240)i=(s&7)<<18|(e[++a]&63)<<12|(e[++a]&63)<<6|e[++a]&63,i>=65536?(i-=65536,r+=String.fromCharCode((i>>>10)+55296,(i&1023)+56320)):r+=String.fromCharCode(i);else{console.error(`decode.utf8Read(): Invalid byte `+s+` at offset `+a+`. Skip to end of string: `+(t.offset+n));break}}return t.offset+=n,r}function mh(e,t){return hh(e,t)<<24>>24}function hh(e,t){return e[t.offset++]}function gh(e,t){return _h(e,t)<<16>>16}function _h(e,t){return e[t.offset++]|e[t.offset++]<<8}function vh(e,t){return e[t.offset++]|e[t.offset++]<<8|e[t.offset++]<<16|e[t.offset++]<<24}function yh(e,t){return vh(e,t)>>>0}function bh(e,t){return ch[0]=vh(e,t),lh[0]}function xh(e,t){return ch[0]=vh(e,t),ch[1]=vh(e,t),uh[0]}function Sh(e,t){let n=yh(e,t);return vh(e,t)*2**32+n}function Ch(e,t){let n=yh(e,t);return yh(e,t)*2**32+n}function wh(e,t){return ch[0]=vh(e,t),ch[1]=vh(e,t),fh[0]}function Th(e,t){return ch[0]=vh(e,t),ch[1]=vh(e,t),dh[0]}function Eh(e,t){return hh(e,t)>0}function Dh(e,t){let n=e[t.offset++],r;return n<192?r=n&31:n===217?r=hh(e,t):n===218?r=_h(e,t):n===219&&(r=yh(e,t)),ph(e,t,r)}function Oh(e,t){let n=e[t.offset++];if(n<128)return n;if(n===202)return bh(e,t);if(n===203)return xh(e,t);if(n===204)return hh(e,t);if(n===205)return _h(e,t);if(n===206)return yh(e,t);if(n===207)return Ch(e,t);if(n===208)return mh(e,t);if(n===209)return gh(e,t);if(n===210)return vh(e,t);if(n===211)return Sh(e,t);if(n>223)return(255-n+1)*-1}function kh(e,t){let n=e[t.offset];return n<192&&n>160||n===217||n===218||n===219}var Ah={utf8Read:ph,int8:mh,uint8:hh,int16:gh,uint16:_h,int32:vh,uint32:yh,float32:bh,float64:xh,int64:Sh,uint64:Ch,bigint64:wh,biguint64:Th,boolean:Eh,string:Dh,number:Oh,stringCheck:kh},jh={},Mh=new Map;function Nh(e,t){t.constructor&&(Object.prototype.hasOwnProperty.call(t,`constructor`)&&t.constructor[Symbol.metadata]==null&&um(t.constructor),Mh.set(t.constructor,e),jh[e]=t),t.encode&&(oh[e]=t.encode),t.decode&&(Ah[e]=t.decode)}function Ph(e){return jh[e]}var Fh="ArraySchema does not support streaming — positional ops (splice / unshift / reverse) shift subsequent indexes, so holding ADDs back for a later tick under `maxPerTick` would desync the decoder. Use `t.stream(X)` (stable monotonic positions) or `t.map(X).stream()` (stable keys) instead.";function Ih(){return{pendingByView:new Map,sentByView:new Map,broadcastPending:new Set,sentBroadcast:new Set,broadcastDeletes:new Set,maxPerTick:32}}function Lh(e){return e._stream??=Ih()}function Rh(e,t,n){t.activeViews.size===0&&Lh(e).broadcastPending.add(n)}function zh(e,t,n,r){let i=e._stream;if(i===void 0)return!0;let a=!1;return i.broadcastPending.delete(r)?a=!0:i.sentBroadcast.delete(r)&&i.broadcastDeletes.add(r),t.forEachActiveView(e=>{let t=i.pendingByView.get(e.id);if(t?.has(r)){t.delete(r),a=!0;return}let o=i.sentByView.get(e.id);if(o?.has(r)){o.delete(r);let t=e.changes.get(n);t===void 0&&(t=new Map,e.changes.set(n,t)),t.set(r,Y.DELETE)}}),a}function Bh(e,t,n){let r=e._stream;if(r!==void 0){r.broadcastPending.clear();for(let e of r.sentBroadcast)r.broadcastDeletes.add(e);r.sentBroadcast.clear(),t.forEachActiveView(e=>{r.pendingByView.get(e.id)?.clear();let t=r.sentByView.get(e.id);if(t!==void 0&&t.size>0){let r=e.changes.get(n);r===void 0&&(r=new Map,e.changes.set(n,r));for(let e of t)r.set(e,Y.DELETE);t.clear()}})}}function Vh(e,t){let n=e._stream?.pendingByView;if(n===void 0)return!1;for(let[e,r]of n)if(r.size>0&&t.activeViews.get(e)?.deref()!==void 0)return!0;return!1}function Hh(e){let t=e._stream;return t!==void 0&&(t.broadcastPending.size>0||t.broadcastDeletes.size>0)}function Uh(e,t,n){let r=Lh(e),i=r.pendingByView.get(t);i===void 0&&(i=new Set,r.pendingByView.set(t,i)),i.add(n)}function Wh(e,t){let n=e._stream;n!==void 0&&(n.pendingByView.delete(t),n.sentByView.delete(t),n.priorityByView?.delete(t))}var Gh={8:`uint8`,16:`uint16`,32:`uint32`};function Kh(e){if(typeof e!=`object`||!e)throw Error(`t.quantized(): options object with { min, max } is required.`);let{min:t,max:n}=e;if(typeof t!=`number`||typeof n!=`number`||!(n>t)||!Number.isFinite(t)||!Number.isFinite(n))throw Error(`t.quantized(): require finite min < max (got min=${t}, max=${n}).`);let r=e.bits??16;if(r!==8&&r!==16&&r!==32)throw Error(`t.quantized(): bits must be 8, 16 or 32 (got ${r}).`);let i=e.mode??`clamp`;if(i!==`clamp`&&i!==`wrap`)throw Error(`t.quantized(): mode must be "clamp" or "wrap" (got ${JSON.stringify(i)}).`);let a=i===`wrap`,o=2**r;return{min:t,max:n,bits:r,wrap:a,wire:Gh[r],range:n-t,span:a?o:t===-n?o-2:o-1}}function qh(e){return typeof e==`object`&&!!e&&e.quantized!==void 0}function Jh(e,t){if(e.wrap){if(!Number.isFinite(t))return 0;let n=e.range,r=(t-e.min)%n;r<0&&(r+=n);let i=e.span;return Math.floor(r/n*i+.5)%i}if(t!==t)return 0;let n=t<e.min?e.min:t>e.max?e.max:t;return Math.floor((n-e.min)/e.range*e.span+.5)}function Yh(e,t){return e.min+t/e.span*e.range}function Xh(e){let t=oh[e.wire];return(n,r,i)=>t(n,Jh(e,r),i)}function Zh(e,t,n){let r=Ah[e.wire];return Yh(e,r(t,n))}var Qh=class e{types={};schemas=new Map;hasFilters=!1;static inheritedTypes=new Map;static cachedContexts=new Map;static register(t){let n=Object.getPrototypeOf(t);if(n!==sv){let r=e.inheritedTypes.get(n);r||(r=new Set,e.inheritedTypes.set(n,r)),r.add(t)}}static cache(t){let n=e.cachedContexts.get(t);return n||(n=new e(t),e.cachedContexts.set(t,n)),n}constructor(e){e&&this.discoverTypes(e)}has(e){return this.schemas.has(e)}get(e){return this.types[e]}add(e,t=this.schemas.size){return!this.schemas.has(e)&&(this.types[t]=e,e[Symbol.metadata]??ag.initialize(e),this.schemas.set(e,t),!0)}getTypeId(e){return this.schemas.get(e)}discoverTypes(t){if(!this.add(t))return;e.inheritedTypes.get(t)?.forEach(e=>{this.discoverTypes(e)});let n=t;for(;(n=Object.getPrototypeOf(n))&&n!==sv&&n!==Function.prototype;)this.discoverTypes(n);let r=t[Symbol.metadata];(r[Am]||r[Im])&&(this.hasFilters=!0);for(let e in r){let t=r[e].type;if(typeof t!=`string`&&!qh(t)){if(typeof t==`function`)this.discoverTypes(t);else{let e=Object.values(t)[0];if(typeof e==`string`)continue;this.discoverTypes(e)}}}}debug(){return`TypeContext ->\n\tSchema types: ${this.schemas.size}\n\thasFilters: ${this.hasFilters}`}},$h=63;function eg(e){let t=typeof Object.keys(e)[0]==`string`&&Ph(Object.keys(e)[0]);return{complexTypeKlass:t,childType:t?Object.values(e)[0]:e}}function tg(e){if(Array.isArray(e))return{array:tg(e[0])};if(qh(e))return typeof e.quantized.wire==`string`?e:{quantized:Kh(e.quantized)};if(e.type!==void 0)return e.type;if(ng(e))return Object.keys(e).every(t=>typeof e[t]==`string`)?`string`:`number`;if(typeof e==`object`&&e){let t=Object.keys(e).find(e=>jh[e]!==void 0);if(t)return e[t]=tg(e[t]),e}return e}function ng(e){if(typeof e==`function`&&e[Symbol.metadata])return!1;let t=Object.keys(e),n=t.filter(e=>/\d+/.test(e));return!!(n.length>0&&n.length===t.length/2&&e[e[n[0]]]==n[0]||t.length>0&&t.every(t=>typeof e[t]==`string`&&e[t]===t))}var rg=[km,Mm,Nm,Pm,Fm,Im,Dm];function ig(e,t,n){e[t]||Object.defineProperty(e,t,{value:[],enumerable:!1,configurable:!0,writable:!0}),e[t].push(n)}var ag={addField(e,t,n,r,i){if(t>=$h)throw Error(`Can't define field '${n}'.\nSchema instances may only have up to ${$h} fields.`);e[t]=Object.assign(e[t]||{},{type:tg(r),index:t,name:n}),Object.defineProperty(e,Tm,{value:e[Tm]||{},enumerable:!1,configurable:!0}),i?e[Tm][n]=i:e[Tm][n]={value:void 0,writable:!0,enumerable:!0,configurable:!0},Object.defineProperty(e,Om,{value:t,enumerable:!1,configurable:!0}),Object.defineProperty(e,n,{value:t,enumerable:!1,configurable:!0}),typeof e[t].type!=`string`&&!qh(e[t].type)&&(e[km]===void 0&&Object.defineProperty(e,km,{value:[],enumerable:!1,configurable:!0}),e[km].push(t));let a=e[t].type;if(a&&typeof a==`object`&&a.stream!==void 0){if(a.array!==void 0)throw Error(Fh);e[t].stream=!0,e[Im]||Object.defineProperty(e,Im,{value:[],enumerable:!1,configurable:!0,writable:!0}),e[Im].includes(t)||e[Im].push(t);let i=r?.priority;typeof i==`function`&&ag.setStreamPriority(e,n,i)}},setTag(e,t,n){let r=e[t],i=e[r];if(i.tag=n,e[Am]||(Object.defineProperty(e,Am,{value:[],enumerable:!1,configurable:!0}),Object.defineProperty(e,jm,{value:{},enumerable:!1,configurable:!0})),e[Am].push(r),n<0)e[jm][n]||(e[jm][n]=[]),e[jm][n].push(r);else for(let t=n;t>0;t&=t-1){let n=t&-t;e[jm][n]||(e[jm][n]=[]),e[jm][n].push(r)}},setUnreliable(e,t){let n=e[t];if(typeof e[n].type!=`string`)throw Error(`@unreliable cannot be applied to ref-type field "${t}". For ref-type fields, mark each primitive sub-field with @unreliable instead. See README "Limitations and best practices".`);e[n].unreliable=!0,e[Mm]||Object.defineProperty(e,Mm,{value:[],enumerable:!1,configurable:!0,writable:!0}),e[Mm].push(n)},setPatchOnly(e,t){let n=e[t];if(e[n].fullStateOnly)throw Error(`field "${t}" cannot be both patchOnly and fullStateOnly — those are the only two delivery channels, so the field would never reach a client.`);e[n].patchOnly=!0,ig(e,Nm,n),ig(e,Pm,n)},setDeprecated(e,t){let n=e[t];e[n].deprecated=!0,ig(e,Pm,n),Object.defineProperty(e,n,{value:e[n],enumerable:!1,configurable:!0})},setFullStateOnly(e,t){let n=e[t];if(e[n].patchOnly)throw Error(`field "${t}" cannot be both patchOnly and fullStateOnly — those are the only two delivery channels, so the field would never reach a client.`);e[n].fullStateOnly=!0,ig(e,Fm,n)},setStream(e,t){let n=e[t];e[n].stream=!0,e[Im]||Object.defineProperty(e,Im,{value:[],enumerable:!1,configurable:!0,writable:!0}),e[Im].push(n)},setStreamPriority(e,t,n){let r=e[t];e[Lm]||Object.defineProperty(e,Lm,{value:{},enumerable:!1,configurable:!0,writable:!0}),e[Lm][r]=n},getStreamPriority(e,t){return e?.[Lm]?.[t]},defineField(e,t,n,r,i){let a=tg(i),{complexTypeKlass:o,childType:s}=eg(a);ag.addField(t,n,r,a,nv(r,n,s,o)),t[Tm][r]&&Object.defineProperty(e.prototype,r,t[Tm][r]),(typeof a==`string`||qh(a))&&(t[Dm]||Object.defineProperty(t,Dm,{value:[],enumerable:!1,configurable:!0,writable:!0}),t[Dm][n]=typeof a==`string`?oh[a]:Xh(a.quantized))},setFields(e,t){let n=e.prototype.constructor;Qh.register(n);let r=Object.getPrototypeOf(n),i=r&&r[Symbol.metadata],a=ag.initialize(n);n[`~track`]||(n[fm]=sv[fm]),n[`~encoder`]||(n[pm]=sv[pm]),n[`~decoder`]||(n[mm]=sv[mm]),n.prototype.toJSON||(n.prototype.toJSON=sv.prototype.toJSON);let o=a[`~__numFields`]??(i&&i[`~__numFields`])??-1;o++,a[Dm]||Object.defineProperty(a,Dm,{value:i?.[Dm]?[...i[Dm]]:[],enumerable:!1,configurable:!0,writable:!0});for(let e in t){if(a[e]!==void 0)throw Error(`@colyseus/schema: Duplicate '${e}' definition on '${n.name||`(anonymous)`}'.`);ag.defineField(n,a,o,e,t[e]),o++}return e},isDeprecated(e,t){return e[t].deprecated===!0},initialize(e){let t=Object.getPrototypeOf(e),n=t[Symbol.metadata],r=e[Symbol.metadata]??Object.create(null);if(t!==sv&&r===n&&(r=Object.create(null),n)){Object.setPrototypeOf(r,n),Object.defineProperty(r,Om,{value:n[Om],enumerable:!1,configurable:!0,writable:!0}),n[Am]!==void 0&&(Object.defineProperty(r,Am,{value:[...n[Am]],enumerable:!1,configurable:!0,writable:!0}),Object.defineProperty(r,jm,{value:{...n[jm]},enumerable:!1,configurable:!0,writable:!0}));for(let e of rg){let t=n[e];t!==void 0&&Object.defineProperty(r,e,{value:[...t],enumerable:!1,configurable:!0,writable:!0})}Object.defineProperty(r,Tm,{value:{...n[Tm]},enumerable:!1,configurable:!0,writable:!0})}return Object.defineProperty(e,Symbol.metadata,{value:r,writable:!1,configurable:!0}),r},isValidInstance(e){return e.constructor[Symbol.metadata]&&Object.prototype.hasOwnProperty.call(e.constructor[Symbol.metadata],`~__numFields`)},getFields(e){let t=e[Symbol.metadata],n={};for(let e=0;e<=t[Om];e++)n[t[e].name]=t[e].type;return n},hasViewTagAtIndex(e,t){return e?.[Am]?.includes(t)},hasUnreliableAtIndex(e,t){return e?.[Mm]?.includes(t)},hasPatchOnlyAtIndex(e,t){return e?.[Nm]?.includes(t)},hasFullStateOnlyAtIndex(e,t){return e?.[Fm]?.includes(t)},hasStreamAtIndex(e,t){return e?.[Im]?.includes(t)}},og=(e,t,n)=>e(t,n),sg=class{dirtyLow=0;dirtyHigh=0;ops;constructor(e){this.ops=new Uint8Array(Math.max(e+1,1))}record(e,t){let n=this.ops[e];n===0?this.ops[e]=t:(n===Y.DELETE||n===Y.ADD&&t===Y.DELETE_AND_ADD)&&(this.ops[e]=Y.DELETE_AND_ADD),e<32?this.dirtyLow|=1<<e:this.dirtyHigh|=1<<e-32}recordDelete(e,t){this.ops[e]=t,e<32?this.dirtyLow|=1<<e:this.dirtyHigh|=1<<e-32}recordRaw(e,t){this.record(e,t)}operationAt(e){let t=this.ops[e];return t===0?void 0:t}setOperationAt(e,t){this.ops[e]=t}forEach(e){this.forEachWithCtx(e,og)}forEachWithCtx(e,t){let n=this.dirtyLow,r=this.dirtyHigh,i=this.ops;for(;n!==0;){let r=n&-n,a=31-Math.clz32(r);n^=r,t(e,a,i[a])}for(;r!==0;){let n=r&-r,a=31-Math.clz32(n)+32;r^=n,t(e,a,i[a])}}size(){return lg(this.dirtyLow)+lg(this.dirtyHigh)}has(){return(this.dirtyLow|this.dirtyHigh)!==0}reset(){this.dirtyLow=0,this.dirtyHigh=0,this.ops.fill(0)}},cg=class{dirty=new Map;pureOps=[];record(e,t){let n=this.dirty.get(e);n===void 0?this.dirty.set(e,t):(n===Y.DELETE||n===Y.ADD&&t===Y.DELETE_AND_ADD)&&this.dirty.set(e,Y.DELETE_AND_ADD)}recordDelete(e,t){this.dirty.set(e,t)}recordRaw(e,t){this.dirty.set(e,t)}recordPure(e){this.pureOps.push([this.dirty.size,e])}operationAt(e){return this.dirty.get(e)}setOperationAt(e,t){this.dirty.has(e)&&this.dirty.set(e,t)}forEach(e){this.forEachWithCtx(e,og)}forEachWithCtx(e,t){let n=this.pureOps;if(n.length>0){let r=0,i=0;for(let[a,o]of this.dirty){for(;r<n.length&&n[r][0]<=i;){let i=n[r++][1];t(e,-i,i)}t(e,a,o),i++}for(;r<n.length;){let i=n[r++][1];t(e,-i,i)}}else for(let[n,r]of this.dirty)t(e,n,r)}size(){return this.dirty.size+this.pureOps.length}has(){return this.dirty.size>0||this.pureOps.length>0}reset(){this.dirty.clear(),this.pureOps.length=0}shift(e){let t=new Map;for(let[n,r]of this.dirty)t.set(n+e,r);this.dirty=t}};function lg(e){return e-=e>>>1&1431655765,e=(e&858993459)+(e>>>2&858993459),(e+(e>>>4)&252645135)*16843009>>>24}function ug(e){if(e===void 0)return 0;let t=0;for(let n=0,r=e.length;n<r;n++){let r=e[n];r<32&&(t|=1<<r)}return t}function dg(e){let t=[],n=[],r=[],i=[],a=e?.[Om];if(a===void 0)return{names:t,types:n,tags:r,encoders:i};let o=e[Dm];for(let s=0;s<=a;s++){let a=e[s];a===void 0?(t[s]=void 0,n[s]=void 0,r[s]=void 0,i[s]=void 0):(t[s]=a.name,n[s]=a.type,r[s]=a.tag,i[s]=o?.[s])}return{names:t,types:n,tags:r,encoders:i}}function fg(e){let t=e.constructor;if(Object.prototype.hasOwnProperty.call(t,Em))return t[Em];let n=t[Symbol.metadata],r=ag.isValidInstance(e),i=(n?.[Am]?.length??0)>0,a=dg(n),o=r&&!i?void 0:t[hm],s={encoder:t[pm],filter:o,metadata:n,isSchema:r,filterBitmask:r?ug(n?.[Am]):0,hasAnyFullStateOnly:(n?.[Fm]?.length??0)>0,hasAnyUnreliable:(n?.[Mm]?.length??0)>0,hasAnyStream:(n?.[Im]?.length??0)>0,hasAnyView:i,fullStateOnlyBitmask:ug(n?.[Fm]),unreliableBitmask:ug(n?.[Mm]),streamBitmask:ug(n?.[Im]),names:a.names,types:a.types,tags:a.tags,encoders:a.encoders};return Object.defineProperty(t,Em,{value:s,enumerable:!1,writable:!0,configurable:!0}),s}function pg(e,t,n){e.parentRef&&(e.parentRef[Z]===t[Z]||_g(e,(e,n)=>e[Z]===t[Z]))?e._parentIndex=n:e.parentRef===void 0?(e.parentRef=t,e._parentIndex=n):(e.extraParents={ref:e.parentRef,index:e._parentIndex,next:e.extraParents},e.parentRef=t,e._parentIndex=n)}function mg(e,t,n){if(e.extraParents===void 0)e._parentIndex=n;else if(e.parentRef[Z]===t[Z])e._parentIndex=n;else for(let r=e.extraParents;r!==void 0;r=r.next)if(r.ref[Z]===t[Z]){r.index=n;return}}function hg(e,t){if(e.parentRef&&e.parentRef[Z]===t[Z])return e.extraParents?(e.parentRef=e.extraParents.ref,e._parentIndex=e.extraParents.index,e.extraParents=e.extraParents.next):(e.parentRef=void 0,e._parentIndex=void 0),!0;let n=e.extraParents,r=null;for(;n;){if(n.ref[Z]===t[Z])return r?r.next=n.next:e.extraParents=n.next,!0;r=n,n=n.next}return e.parentRef===void 0}function gg(e,t){if(e.parentRef!==void 0&&t(e.parentRef,e._parentIndex))return{ref:e.parentRef,index:e._parentIndex};for(let n=e.extraParents;n!==void 0;n=n.next)if(t(n.ref,n.index))return{ref:n.ref,index:n.index}}function _g(e,t){if(e.parentRef!==void 0&&t(e.parentRef,e._parentIndex))return!0;for(let n=e.extraParents;n!==void 0;n=n.next)if(t(n.ref,n.index))return!0;return!1}function vg(e,t){if(e.parentRef&&e.parentRef[Z]===t[Z])return e._parentIndex;for(let n=e.extraParents;n!==void 0;n=n.next)if(n.ref[Z]===t[Z])return n.index}function yg(e){let t=[];e.parentRef&&t.push({ref:e.parentRef,index:e._parentIndex});let n=e.extraParents;for(;n;)t.push({ref:n.ref,index:n.index}),n=n.next;return t}function bg(e,t,n){let r=t.refTarget;if(t.isArray){let t=r.items,i=t[n];if(i!==void 0&&i[Z]===e)return!0;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(r!==void 0&&r[Z]===e)return!0}return!1}let i=t.getValue(n);return i!==void 0&&i[Z]===e}var xg=(e,t)=>{e.isFieldUnreliable(t)?e.ensureUnreliableRecorder().record(t,Y.ADD):e.record(t,Y.ADD)},Sg=(e,t)=>e(t);function Cg(e,t){wg(e,t,Sg)}function wg(e,t,n){let r=e.refTarget;if(r[Q]!==void 0){if(e.isPatchOnly)return;if(Array.isArray(r.items)){let e=r.items;for(let r=0,i=e.length;r<i;r++)e[r]!==void 0&&n(t,r)}else if(r.journal!==void 0)for(let[e,i]of r.journal.keyByIndex)r.$items.has(i)&&n(t,e);else if(r.$items!==void 0)for(let e of r.$items.keys())n(t,e)}else{let i=e.metadata;if(!i)return;let a=i[`~__numFields`]??-1,o=i[Pm],s=e.encDescriptor.names;for(let e=0;e<=a;e++){let i=s[e];i===void 0||o&&o.includes(e)||r[i]!=null&&n(t,e)}}}function Tg(e,t,n,r){Eg(e,t,n),!e.isFullStateOnly&&(e.has()&&e.root?.enqueueChangeTree(e),e.unreliableRecorder?.has()&&e.root?.enqueueUnreliable(e),!e.has()&&!e.unreliableRecorder?.has()&&e.root?.enqueueChangeTree(e))}function Eg(e,t,n){if(!t)return;let r=t[Z],i=!r._isSchema,a;i?(t=r.parent,n=r.parentIndex,a=t?.[Z].metadata):a=r.metadata;let o=(a?.[Nm]?.includes(n)?$g:0)|(a?.[Fm]?.includes(n)?e_:0),s=r.flags&a_|o,c=e.flags;if(e.flags=c|s,s&~c&e_&&(e.reset(),e.unreliableRecorder?.reset()),!e.root?.types?.hasFilters)return;let l=a?.[Am]?.includes(n)??!1,u=a?.[Im]?.includes(n)??!1,d=r.isFiltered||l||u;if(e.isFiltered=d,u&&!i){e.isStreamCollection=!0;let t=Lh(e.ref);if(t.priority===void 0){let e=ag.getStreamPriority(a,n);e!==void 0&&(t.priority=e)}e.root?.registerStream(e.ref)}if(d){let t=Og(e);e.isVisibilitySharedWithParent=r.isFiltered&&t&&!u&&(!l||i&&a[n].tag!==q_)}}function Dg(e){let t=e.pendingFilterRefresh;for(let e=0;e<t.length;e++){let n=t[e];(n.flags&r_)!==0&&kg(n)}t.length=0}function Og(e){return e._isSchema||typeof e.refTarget[Q]!=`string`}function kg(e){e.flags&=~r_;let t=e.root;if(t===void 0||e.parentRef===void 0)return;let n=Og(e),r=Pg(e,e.parentRef,e._parentIndex,n);for(let t=e.extraParents;t!==void 0&&r!==Ng;t=t.next)r|=Pg(e,t.ref,t.index,n);if(r===0)return;e.isVisibilitySharedWithParent=(r&Mg)!==0;let i=(r&jg)===0;i!==e.isFiltered&&(e.isFiltered=i,!i&&!e.isFullStateOnly&&(e.forEachLiveWithCtx(e,xg),e.has()&&t.enqueueChangeTree(e),e.unreliableRecorder?.has()&&t.enqueueUnreliable(e)),e.forEachChildWithCtx(e,Fg))}var Ag=1,jg=2,Mg=4,Ng=7;function Pg(e,t,n,r){let i=t[Z];if(i.root!==e.root||!bg(e,i,n))return 0;i.flags&r_&&kg(i);let a=Ag;if(i._isSchema)i.encDescriptor.tags[n]!==void 0||i.isFieldStream(n)||(i.isFiltered?r&&(a|=Mg):a|=jg);else if(!i.isFiltered)a|=jg;else if(r&&!i.isStreamCollection){let e=i.parent?.[Z];(e?._isSchema?e.encDescriptor.tags[i.parentIndex]:void 0)!==q_&&(a|=Mg)}return a}var Fg=(e,t,n)=>{kg(t)};function Ig(e,t,n,r){let i=e.subscribedViews;if(i===void 0)return;let a=e.isStreamCollection,o=a?e.ref:void 0,s=a?void 0:n[Z];for(let e=0,n=i.length;e<n;e++){let n=i[e];for(;n!==0;){let c=n&-n;n^=c;let l=e*32+(31-Math.clz32(c)),u=r.activeViews.get(l)?.deref();u===void 0?i[e]&=~c:a?Uh(o,l,t):s!==void 0&&u.markVisible(s)}}}function Lg(e,t){e.root=t;let n=t.add(e);Tg(e,e.parent,e.parentIndex),n&&Vg(e,t,Hg)}function Rg(e,t,n,r){if(e.addParent(t,r),!n)return;let i=n.add(e);n!==e.root&&(e.root=n,Tg(e,t,r));let a=t?.[Z];if(a!==void 0&&a.subscribedViews!==void 0&&t[Q]!==void 0&&Ig(a,r,e.ref,n),i){let t=Ug[Wg];t===void 0&&(t={parentRef:void 0,root:void 0},Ug[Wg]=t),t.parentRef=e.ref,t.root=n,Wg++,Vg(e,t,Gg),Wg--}}function zg(e,t){Vg(e,t,Bg)}function Bg(e,t,n){e(t,n)}function Vg(e,t,n){let r=e.refTarget;if(r[Q]){if(typeof r[Q]!=`string`){let e=r.items;if(e!==void 0)for(let r=0,i=e.length;r<i;r++){let i=e[r];i&&n(t,i[Z],r)}else{let e=r.$items,i=r._collectionIndexes;for(let r of e.keys()){let a=e.get(r);a&&n(t,a[Z],i?.[r]??r)}}}}else{let i=e.metadata?.[km];if(!i)return;let a=e.encDescriptor.names;for(let e=0,o=i.length;e<o;e++){let o=i[e],s=r[a[o]];s&&n(t,s[Z],o)}}}function Hg(e,t,n){t.root===e?e.add(t):t.setRoot(e)}var Ug=[],Wg=0;function Gg(e,t,n){t.root===e.root?(e.root.add(t),e.root.moveNextToParent(t)):t.setParent(e.parentRef,e.root,n)}function Kg(e,t,n){let r=(n&3)<<3;return n<4?e>>>r&255:t>>>r&255}var qg=(e,t,n)=>e(t,n);function Jg(){return{next:void 0,tail:void 0,nextPosition:0}}var Yg=1,Xg=2,Zg=4,Qg=8,$g=16,e_=32,t_=64,n_=128,r_=256,i_=512,a_=48,o_=class{ref;refTarget;get isArray(){return this.refTarget!==this.ref}metadata;encDescriptor;root;parentRef;_parentIndex;extraParents;flags=Zg;_fullSyncGen=0;_isSchema=!1;dirtyLow=0;dirtyHigh=0;opsLow=0;opsHigh=0;ops;collDirty;collPureOps;unreliableRecorder;paused=!1;changesNode;unreliableChangesNode;visibleViews;tagViews;subscribedViews;get isFiltered(){return(this.flags&Yg)!==0}set isFiltered(e){this.flags=e?this.flags|Yg:this.flags&-2}get isVisibilitySharedWithParent(){return(this.flags&Xg)!==0}set isVisibilitySharedWithParent(e){this.flags=e?this.flags|Xg:this.flags&-3}get isNew(){return(this.flags&Zg)!==0}set isNew(e){this.flags=e?this.flags|Zg:this.flags&-5}get isUnreliable(){return(this.flags&Qg)!==0}set isUnreliable(e){this.flags=e?this.flags|Qg:this.flags&-9}get isPatchOnly(){return(this.flags&$g)!==0}set isPatchOnly(e){this.flags=e?this.flags|$g:this.flags&-17}get isFullStateOnly(){return(this.flags&e_)!==0}set isFullStateOnly(e){this.flags=e?this.flags|e_:this.flags&-33}get isStreamCollection(){return(this.flags&t_)!==0}set isStreamCollection(e){this.flags=e?this.flags|t_:this.flags&-65}get needsRestage(){return(this.flags&n_)!==0}set needsRestage(e){this.flags=e?this.flags|n_:this.flags&-129}get hasFilteredFields(){return this.isFiltered||this.encDescriptor.hasAnyView}ensureUnreliableRecorder(){return this.unreliableRecorder===void 0&&(this.unreliableRecorder=this._isSchema?new sg(this.metadata?.[`~__numFields`]??0):new cg),this.unreliableRecorder}isFieldUnreliable(e){let t=this.encDescriptor;return t.hasAnyUnreliable?e<32?!!(t.unreliableBitmask&1<<e):ag.hasUnreliableAtIndex(this.metadata,e):!1}isFieldFullStateOnly(e){if(this.isFullStateOnly)return!0;let t=this.encDescriptor;return t.hasAnyFullStateOnly?e<32?!!(t.fullStateOnlyBitmask&1<<e):ag.hasFullStateOnlyAtIndex(this.metadata,e):!1}isFieldStream(e){let t=this.encDescriptor;return t.hasAnyStream?e<32?!!(t.streamBitmask&1<<e):ag.hasStreamAtIndex(this.metadata,e):!1}constructor(e,t=e){this.ref=e,this.refTarget=t;let n=fg(e);this.encDescriptor=n,this.metadata=n.metadata;let r=n.isSchema;if(this._isSchema=r,this.ops=void 0,this.collDirty=void 0,this.collPureOps=void 0,r){let e=this.metadata?.[`~__numFields`]??0;e>7&&(this.ops=new Uint8Array(e+1))}else this.collDirty=new Map}_opAt(e){let t=this.ops;if(t!==void 0)return t[e];let n=(e&3)<<3;return e<4?this.opsLow>>>n&255:this.opsHigh>>>n&255}_opPut(e,t){let n=this.ops;if(n!==void 0){n[e]=t;return}let r=(e&3)<<3,i=~(255<<r);e<4?this.opsLow=this.opsLow&i|t<<r:this.opsHigh=this.opsHigh&i|t<<r}_markDirty(e){e<32?this.dirtyLow|=1<<e:this.dirtyHigh|=1<<e-32}record(e,t){if(this._isSchema){let n=this._opAt(e);n===0?this._opPut(e,t):(n===Y.DELETE||n===Y.ADD&&t===Y.DELETE_AND_ADD)&&this._opPut(e,Y.DELETE_AND_ADD),this._markDirty(e)}else{let n=this.collDirty,r=n.get(e),i;i=r===void 0?t:r===Y.DELETE||r===Y.ADD&&t===Y.DELETE_AND_ADD?Y.DELETE_AND_ADD:r,n.set(e,i)}}recordDelete(e,t){this._isSchema?(this._opPut(e,t),this._markDirty(e)):this.collDirty.set(e,t)}recordRaw(e,t){this._isSchema?(this._opPut(e,t),this._markDirty(e)):this.collDirty.set(e,t)}recordPure(e){if(this._isSchema)throw Error(`ChangeTree (Schema): pure operations are not supported`);(this.collPureOps??=[]).push([this.collDirty.size,e])}operationAt(e){if(this._isSchema){let t=this._opAt(e);return t===0?void 0:t}return this.collDirty.get(e)}setOperationAt(e,t){if(this._isSchema)this._opPut(e,t);else{let n=this.collDirty;n.has(e)&&n.set(e,t)}}forEach(e){this.forEachWithCtx(e,qg)}forEachWithCtx(e,t){if(this._isSchema){let n=this.dirtyLow,r=this.dirtyHigh,i=this.ops;if(i!==void 0){for(;n!==0;){let r=n&-n,a=31-Math.clz32(r);n^=r,t(e,a,i[a])}for(;r!==0;){let n=r&-r,a=31-Math.clz32(n)+32;r^=n,t(e,a,i[a])}}else{let r=this.opsLow,i=this.opsHigh;for(;n!==0;){let a=n&-n,o=31-Math.clz32(a);n^=a,t(e,o,Kg(r,i,o))}}return}let n=this.collDirty,r=this.collPureOps;if(r!==void 0&&r.length>0){let i=0,a=0;for(let[o,s]of n){for(;i<r.length&&r[i][0]<=a;){let n=r[i++][1];t(e,-n,n)}t(e,o,s),a++}for(;i<r.length;){let n=r[i++][1];t(e,-n,n)}}else for(let[r,i]of n)t(e,r,i)}size(){return this._isSchema?lg(this.dirtyLow)+lg(this.dirtyHigh):this.collDirty.size+(this.collPureOps?.length??0)}has(){return this._isSchema?(this.dirtyLow|this.dirtyHigh)!==0:this.collDirty.size>0||this.collPureOps!==void 0&&this.collPureOps.length>0}reset(){this._isSchema?(this.dirtyLow=0,this.dirtyHigh=0,this.ops===void 0?(this.opsLow=0,this.opsHigh=0):this.ops.fill(0)):(this.collDirty.clear(),this.collPureOps!==void 0&&(this.collPureOps.length=0),this.flags&=-513)}recycle(){if(this.root!==void 0)throw Error(`@colyseus/schema: cannot recycle an attached ChangeTree (${this.ref?.constructor?.name}). Remove the instance from its parent collection before releasing it to a pool.`);this.reset(),this.unreliableRecorder?.reset(),this.flags=132,this._fullSyncGen=0,this.parentRef=void 0,this._parentIndex=void 0,this.extraParents=void 0,this.changesNode=void 0,this.unreliableChangesNode=void 0,this.paused=!1,this.visibleViews=void 0,this.tagViews=void 0,this.subscribedViews=void 0}insertAt(e,t){if(this._isSchema)throw Error(`ChangeTree (Schema): insertAt is not supported`);let n=this.collDirty,r=new Map,i=!this.paused&&!this.isFullStateOnly;if(e>0)for(let[t,i]of n)t<e&&r.set(t,i);if(i)for(let n=0;n<t;n++)r.set(e+n,Y.ADD);for(let[i,a]of n)i>=e&&r.set(i+t,a);this.collDirty=r,i&&this.root?.enqueueChangeTree(this)}removeAt(e,t){if(this._isSchema)throw Error(`ChangeTree (Schema): removeAt is not supported`);let n=this.collDirty,r=e+t,i=!1;for(let e of n.keys())if(e>=r){i=!0;break}if(!i){for(let t=e;t<r;t++)n.delete(t);return}let a=new Map;for(let[i,o]of n)i<e?a.set(i,o):i>=r&&a.set(i-t,o);this.collDirty=a}unshift(e){this.insertAt(0,e)}setRoot(e){Lg(this,e)}setParent(e,t,n){Rg(this,e,t,n)}forEachChild(e){zg(this,e)}forEachChildWithCtx(e,t){Vg(this,e,t)}forEachLive(e){Cg(this,e)}forEachLiveWithCtx(e,t){wg(this,e,t)}operation(e){this.paused||this.isFullStateOnly||(this.recordPure(e),this.root?.enqueueChangeTree(this))}_routeAndRecord(e,t,n){if(!(this.paused||this.isFieldFullStateOnly(e))){if(this.isFieldUnreliable(e)&&!this.isNew){let r=this.ensureUnreliableRecorder();n?r.recordRaw(e,t):r.record(e,t),this.root?.enqueueUnreliable(this)}else n?this.recordRaw(e,t):this.record(e,t),this.root?.enqueueChangeTree(this)}}change(e,t=Y.ADD){this._routeAndRecord(e,t,!1)}indexedOperation(e,t){this._routeAndRecord(e,t,!0)}getChange(e){return this.operationAt(e)}pause(){this.paused=!0}resume(){this.paused=!1}untracked(e){let t=this.paused;this.paused=!0;try{return e()}finally{this.paused=t}}markDirty(e,t=Y.ADD){let n=this.paused;this.paused=!1;try{this.change(e,t)}finally{this.paused=n}}getValue(e,t=!1){return this.refTarget[gm](e,t)}delete(e,t){if(e===void 0){try{throw Error(`@colyseus/schema ${this.ref.constructor.name}: trying to delete non-existing index '${e}'`)}catch(e){console.warn(e)}return}if(this.paused||this.isFieldFullStateOnly(e))return this.getValue(e);let n=this.isFieldUnreliable(e)&&!this.isNew;n?this.ensureUnreliableRecorder().recordDelete(e,t??Y.DELETE):this.recordDelete(e,t??Y.DELETE);let r=this.getValue(e);return r&&r[Z]&&this.root?.remove(r[Z]),n?this.root?.enqueueUnreliable(this):this.root?.enqueueChangeTree(this),r}endEncode(){this.reset(),this.changesNode=void 0,this._isSchema||this.refTarget[bm]?.(),this.isNew=!1}endEncodeUnreliable(){this.unreliableRecorder?.reset(),this.unreliableChangesNode=void 0,this._isSchema||this.refTarget[bm]?.()}discard(){this._isSchema||this.refTarget[bm]?.(),this.reset(),this.unreliableRecorder?.reset()}discardAll(){let e=e=>{if(e<0)return;let t=this.getValue(e);t&&t[Z]&&t[Z].discardAll()};this.forEach(e),this.unreliableRecorder?.forEach(e),this.discard()}get changed(){return this.has()||(this.unreliableRecorder?.has()??!1)}get parent(){return this.parentRef}get parentIndex(){return this._parentIndex}addParent(e,t){pg(this,e,t)}setParentIndex(e,t){mg(this,e,t)}removeParent(e=this.parent){return hg(this,e)}findParent(e){return gg(this,e)}hasParent(e){return _g(this,e)}indexInParent(e){return vg(this,e)}getAllParents(){return yg(this)}},s_=class{ref;root=void 0;parentRef=void 0;paused=!1;isNew=!1;flags=0;constructor(e){this.ref=e}change(){}delete(){}indexedOperation(){}operation(){}setParent(){}addParent(){}setParentIndex(){}removeParent(){return!1}getChange(){return 0}discard(){}discardAll(){}pause(){}resume(){}untracked(e){return e()}markDirty(){}forEachChild(e){let t=this.ref;if(t[Q]){if(typeof t[Q]!=`string`)for(let[n,r]of t.entries())r&&e(r[Z],t._collectionIndexes?.[n]??n);return}let n=t.constructor?.[Symbol.metadata];if(!n)return;let r=n[km]??[];for(let i=0;i<r.length;i++){let a=r[i],o=t[n[a].name];o&&e(o[Z],a)}}forEachChildWithCtx(e,t){this.forEachChild((n,r)=>t(e,n,r))}forEachLive(){}forEachLiveWithCtx(){}forEach(){}};function c_(e){return new s_(e)}function l_(e,t=e){Object.defineProperty(e,Z,{value:c_(t),enumerable:!1,writable:!0})}function u_(e,t,n,r,i,a,o){o===void 0?typeof n==`string`?oh[n]?.(t,r,a):n[Symbol.metadata]==null?oh.number(t,r[X],a):(oh.number(t,r[X],a),(i&Y.ADD)===Y.ADD&&e.tryEncodeTypeId(t,n,r.constructor,a)):o(t,r,a)}var d_=function(e,t,n,r,i,a,o,s){if(t[a.offset++]=(r|i)&255,i===Y.DELETE)return;let c=n.encDescriptor,l=n.ref,u=l[Cm][r]??l[c.names[r]];u_(e,t,c.types[r],u,i,a,c.encoders[r])},f_=function(e,t,n,r,i,a){if(t[a.offset++]=i&255,oh.number(t,r,a),i===Y.DELETE)return;let o=n.ref;if((i&Y.ADD)===Y.ADD){let e=o.$indexes.get(r);oh.string(t,e,a)}u_(e,t,o[Q],o[gm](r),i,a)},p_=function(e,t,n,r,i,a){if(t[a.offset++]=i&255,oh.number(t,r,a),i===Y.DELETE)return;let o=n.ref;u_(e,t,o[Q],o[gm](r),i,a)},m_=function(e,t,n,r,i,a,o,s){let c=n.refTarget,l=c[Q],u=typeof l!=`string`,d=s&&n.isFiltered&&u,f;if(d){let e=c.tmpItems[r];if(!e)return;if(f=e[X],i===Y.DELETE)i=Y.DELETE_BY_REFID;else if((i&Y.ADD)===Y.ADD)i=Y.ADD_BY_REFID;else if((i&Y.MOVE)===Y.MOVE)return}else if(i===Y.DELETE&&u){let e=c.tmpItems[r];if(!e)return;f=e[X],i=Y.DELETE_BY_REFID}else f=r;t[a.offset++]=i&255,oh.number(t,f,a),i!==Y.DELETE&&i!==Y.DELETE_BY_REFID&&u_(e,t,l,c[gm](r,o),i,a)};function h_(e,t,n,r,i,a,o){let s=e.resyncVisited,c=s.get(e.currentRefId);if(c===void 0&&s.set(e.currentRefId,c=new Set),c.add(r),i!==void 0&&n===Y.ADD&&i!==a){let n=i[X];n!==void 0&&(e.root.removeRef(n),o?.push({ref:t,refId:e.currentRefId,op:Y.DELETE,dynamicIndex:r,value:void 0,previousValue:i}))}}function g_(e,t){let n=e.resyncVisited;n.has(t)||n.set(t,new Set)}function __(e,t){e.resyncDamaged?console.warn(`@colyseus/schema: resync sweep skipped — parts of the payload could not be decoded. Stale entries may persist until the next resync.`):v_(e,e.state,new Set,t)}function v_(e,t,n,r){let i=t[X];if(i===void 0||n.has(i))return;n.add(i);let a=t.constructor[Symbol.metadata],o=a?.[km];if(o===void 0)return;let s=a[Nm];for(let i=0;i<o.length;i++){let c=o[i];if(s!==void 0&&s.includes(c))continue;let l=a[c],u=t[l.name];u&&(sv.is(l.type)?v_(e,u,n,r):y_(e,u,n,r))}}function y_(e,t,n,r){let i=t[ym]??t,a=i[X];if(a===void 0||n.has(a))return;n.add(a);let o=e.resyncVisited.get(a);if(o===void 0)return;let s=e.root;i[vm](o,(e,n)=>{r?.push({ref:t,refId:a,op:Y.DELETE,dynamicIndex:n,value:void 0,previousValue:e});let i=e?.[X];i!==void 0&&s.removeRef(i)},t=>{sv.isSchema(t)&&v_(e,t,n,r)})}var b_=-1,x_={Map:1,Array:2,Set:3,Collection:4,Stream:5};function S_(e,t,n,r,i,a,o,s,c){let l=e.root,u;if((t&Y.DELETE)===Y.DELETE){let e=i?.[X];e!==void 0&&l.removeRef(e),t!==Y.DELETE_AND_ADD&&n[_m](r),u=void 0}if(t!==Y.DELETE){if(typeof a==`string`)u=Ah[a](o,s);else if(qh(a))u=Zh(a.quantized,o,s);else if(sv.is(a)){let n=Ah.number(o,s);if(u=l.refs.get(n),(t&Y.ADD)===Y.ADD){let r=e.getInstanceType(o,s,a);u||=e.createInstanceOfType(r),l.addRef(n,u,u!==i||t===Y.DELETE_AND_ADD&&u===i)}}else{let n=Ph(Object.keys(a)[0]),r=Ah.number(o,s);e.resyncVisited!==null&&g_(e,r);let d=l.refs.has(r)?i||l.refs.get(r):n.constructor.initializeForDecoder();if(u=d.clone(!0),u[Q]=Object.values(a)[0],i){let e=i[X];if(e!==void 0&&r!==e){(t&Y.DELETE)!==Y.DELETE&&l.removeRef(e);let n=i.entries(),r;for(;(r=n.next())&&!r.done;){let[t,n]=r.value;typeof n==`object`&&(e=n[X]),c?.push({ref:i,refId:e,op:Y.DELETE,field:t,value:void 0,previousValue:n})}}}l.addRef(r,u,d!==i||t===Y.DELETE_AND_ADD&&d===i)}}return u}var C_=function(e,t,n,r,i){let a=t[n.offset++],o=r.constructor[Symbol.metadata],s=a>>6<<6,c=a%(s||255),l=o[c];if(l===void 0)return console.warn(`@colyseus/schema: field not defined at`,{index:c,ref:r.constructor.name,metadata:o}),b_;let u=l.deprecated===!0,d=u?void 0:r[gm](c),f=S_(e,s,r,c,d,l.type,t,n,i);u||(f!=null&&(r[l.name]=f),d!==f&&i?.push({ref:r,refId:e.currentRefId,op:s,field:l.name,value:f,previousValue:d}))},w_=function(e,t,n,r,i){let a=r[ym]??r,o=t[n.offset++];if(o===Y.CLEAR){e.removeChildRefs(a,i),a.clear();return}let s=Ah.number(t,n),c=a[Q],l=a.constructor.COLLECTION_KIND,u;(o&Y.ADD)===Y.ADD?l===x_.Map?(u=Ah.string(t,n),a.setIndex(s,u)):u=s:u=a.getIndex(s);let d=a[gm](s),f=S_(e,o,r,s,d,c,t,n,i);if(e.resyncVisited!==null&&h_(e,r,o,u,d,f,i),f!=null)switch(l){case x_.Map:a.$items.set(u,f);break;case x_.Array:a.$setAt(s,f,e.resyncVisited!==null&&o===Y.ADD?Y.REPLACE:o);break;case x_.Set:case x_.Collection:case x_.Stream:a.$items.has(s)||(a.$items.set(s,f),typeof a.$refId==`number`&&s>=a.$refId&&(a.$refId=s+1));break;default:console.warn(`@colyseus/schema: missing COLLECTION_KIND on ${a.constructor?.name} — item at index ${s} was not stored.`)}d!==f&&i?.push({ref:r,refId:e.currentRefId,op:o,dynamicIndex:u,value:f,previousValue:d})},T_=function(e,t,n,r,i){let a=r[ym]??r,o=t[n.offset++],s;if(o===Y.CLEAR){e.removeChildRefs(a,i),a.clear();return}if(o===Y.REVERSE){a.items.reverse();return}if(o===Y.DELETE_BY_REFID){let o=Ah.number(t,n),c=e.root.refs.get(o);if(c===void 0||(e.root.removeRef(o),s=a.findIndex(e=>e===c),s===-1))return;a[_m](s),i?.push({ref:r,refId:e.currentRefId,op:Y.DELETE,dynamicIndex:s,value:void 0,previousValue:c});return}if(o===Y.ADD_BY_REFID){let r=Ah.number(t,n),i=e.root.refs.get(r);i&&(s=a.findIndex(e=>e===i)),(s===-1||s===void 0)&&(s=a.length)}else s=Ah.number(t,n);let c=a[Q],l=s,u=a.items[s],d=S_(e,o,r,s,u,c,t,n,i);e.resyncVisited!==null&&h_(e,r,o,s,u,d,i),d!=null&&d!==u&&a.$setAt(s,d,e.resyncVisited!==null&&o===Y.ADD?Y.REPLACE:o),u!==d&&i?.push({ref:r,refId:e.currentRefId,op:o,dynamicIndex:l,value:d,previousValue:u})},E_=class extends Error{};function D_(e,t,n,r){if(!(e instanceof t))throw new E_(`a '${t.name}' was expected, but '${e&&e.constructor.name}' was provided in ${n.constructor.name}#${r}`)}var O_=(e,t)=>{let n=e.toString(),r=t.toString();return n<r?-1:+(n>r)},k_={get:(e,t)=>typeof t!=`symbol`&&!isNaN(t)?e.items[t]:Reflect.get(e,t),set:(e,t,n)=>{if(typeof t!=`symbol`&&!isNaN(t)){if(n==null)e.$deleteAt(t);else{let r;if(n[Z]){D_(n,e[Q],e,t);let i=e.items[t];e.isMovingItems?(r=e.$wireIndex(Number(t)),i===void 0?n[Z].isNew&&e[Z].indexedOperation(r,Y.ADD):n[Z].isNew?e[Z].indexedOperation(r,Y.MOVE_AND_ADD):(e[Z].getChange(r)&Y.DELETE)===Y.DELETE?e[Z].indexedOperation(r,Y.DELETE_AND_MOVE):e[Z].indexedOperation(r,Y.MOVE),n[Z].setParent(e,e[Z].root,r)):r=e.$changeAt(Number(t),n),i!==void 0&&i[Z].root?.remove(i[Z])}else r=e.$changeAt(Number(t),n);e.items[t]=n,r!==void 0&&(e.tmpItems[r]=n)}return!0}return Reflect.set(e,t,n)},deleteProperty:(e,t)=>(typeof t==`number`?e.$deleteAt(t):delete e[t],!0),has:(e,t)=>typeof t!=`symbol`&&!isNaN(Number(t))?Reflect.has(e.items,t):Reflect.has(e,t)},A_=class e{[Z];[X];[ym];[Q];items=[];tmpItems=[];deletedIndexes=[];isMovingItems=!1;_needsCompaction=!1;static[pm]=m_;static[mm]=T_;static COLLECTION_KIND=x_.Array;static[hm](e,t,n){if(!n)return!0;let r=e[ym]??e;return typeof r[Q]==`string`||n.isChangeTreeVisible(r.tmpItems[t]?.[Z])}static is(e){return Array.isArray(e)||e.array!==void 0}static from(t){return new e(...Array.from(t))}constructor(...e){this[Q]=void 0,this[ym]=this;let t=new Proxy(this,k_);return Object.defineProperty(this,Z,{value:new o_(t,this),enumerable:!1,writable:!0}),e.length>0&&this.push(...e),t}static initializeForDecoder(){let t=Object.create(e.prototype);t.items=[],t.isMovingItems=!1,t._needsCompaction=!1,t[Q]=void 0,t[ym]=t;let n=new Proxy(t,k_);return l_(t,n),n}set length(e){e===0?this.clear():e<this.items.length?this.splice(e,this.length-e):console.warn(`ArraySchema: can't set .length to a higher value than its length.`)}get length(){return this.items.length}pauseTracking(){this[Z].pause()}resumeTracking(){this[Z].resume()}untracked(e){return this[Z].untracked(e)}get isTrackingPaused(){return this[Z].paused}push(...e){let t=this[ym],n=t.items,r=t.tmpItems,i=t[Z],a=t[Q],o=r.length;for(let s=0,c=e.length;s<c;s++,o++){let c=e[s];if(c==null)return;typeof c==`object`&&a&&D_(c,a,t,s),i.indexedOperation(o,Y.ADD),n.push(c),r.push(c),c[Z]?.setParent(this,i.root,o)}return o}pop(){let e=this[ym],t=e.tmpItems,n=e.deletedIndexes,r=-1;for(let e=t.length-1;e>=0;e--)if(n[e]!==!0){r=e;break}if(r<0)return;let i=e.$isUnsentAdd(r);return e[Z].delete(r),i?e.$cancelAdd(r):n[r]=!0,e.items.pop()}at(e){return e<0&&(e+=this.length),this.items[e]}$wireIndex(e){let t=this.deletedIndexes;if(t.length===0)return e;let n=this.tmpItems,r=0;for(let i=0;i<n.length;i++)if(t[i]!==!0){if(r===e)return i;r++}return n.length+(e-r)}$isUnsentAdd(e){let t=this[Z];return!(t.flags&576)&&!t.paused&&typeof this[Q]!=`string`&&t.operationAt(e)===Y.ADD}$cancelAdd(e,t=!0){let n=this[Z],r=this.tmpItems[e];this.tmpItems.splice(e,1),this.deletedIndexes.length>0&&this.deletedIndexes.splice(e,1),n.removeAt(e,1);let i=r?.[Z];i!==void 0&&i.root===void 0&&i.removeParent(this),t&&this.$reindexChildren(e)}$reindexChildren(e,t){if(!this[Z].hasFilteredFields||typeof this[Q]==`string`)return;let n=this.tmpItems,r=n.length;if(t!==void 0)for(;e<r&&n[e]===t[e];)e++;for(let t=e;t<r;t++)n[t]?.[Z]?.setParentIndex(this,t)}$changeAt(e,t){if(t==null){console.error("ArraySchema items cannot be null nor undefined; Use `splice(index, 1)` instead.");return}if(this.items[e]===t)return;let n=this.items[e]===void 0?Y.ADD:typeof t==`object`?Y.DELETE_AND_ADD:Y.REPLACE,r=this.$wireIndex(e),i=this[Z];return i.change(r,n),t[Z]?.setParent(this,i.root,r),r}$deleteAt(e,t){this[Z].delete(this.$wireIndex(e),t)}$setAt(e,t,n){n===Y.ADD&&this.items[e]!==void 0?this.items.splice(e,0,t):n===Y.DELETE_AND_MOVE?(this.items.splice(e,1),this.items[e]=t):(e>this.items.length&&(this._needsCompaction=!0),this.items[e]=t)}clear(){let e=this[ym];if(e.items.length===0)return;let t=e[Z];t.forEachChild((e,n)=>{t.root?.remove(e)}),t.discard(),t.operation(Y.CLEAR),e.items.length=0,e.tmpItems.length=0}[xm](){let e=this[ym]??this,t=e[Z];if(t.isStreamCollection)throw Error(`@colyseus/schema: cannot reset a streamed ArraySchema (pooling not supported).`);let n=e.items;for(let e=0;e<n.length;e++)n[e]?.[xm]?.();e.items.length=0,e.tmpItems.length=0,e.deletedIndexes.length=0,t.recycle(),e[X]=void 0}concat(...t){return new e(...this.items.concat(...t))}join(e){return this.items.join(e)}reverse(){let e=this[ym],t=e[Z];if(t.has()||e.deletedIndexes.length>0){let t=e.items.slice().reverse();return this.clear(),this.push(...t),this}return t.operation(Y.REVERSE),e.items.reverse(),e.tmpItems.reverse(),e.$reindexChildren(0),this}shift(){let e=this[ym],t=e.items;if(t.length===0)return;let n=e[Z],r=e.deletedIndexes,i=0;for(;r[i]===!0;)i++;let a=e.$isUnsentAdd(i);return n.delete(i,Y.DELETE),a?e.$cancelAdd(i):r[i]=!0,t.shift()}slice(t,n){let r=new e;return r.push(...this.items.slice(t,n)),r}sort(e=O_){let t=this[ym];t.isMovingItems=!0;let n=t[Z];return t.items.sort(e).forEach((e,t)=>n.change(t,Y.REPLACE)),t.tmpItems.sort(e),t.$reindexChildren(0),t.isMovingItems=!1,this}splice(e,t,...n){let r=this[ym],i=r[Z],a=r.items,o=r.tmpItems,s=r.deletedIndexes,c=a.length,l=o.length,u=n.length,d=[];for(let e=0;e<l;e++)s[e]!==!0&&d.push(e);let f;if(c>e){t===void 0&&(t=c-e);for(let n=e;n<e+t;n++){let e=d[n],t=r.$isUnsentAdd(e);i.delete(e,Y.DELETE),t?(f??=[]).push(e):s[e]=!0}}else t=0;if(u>0){let a=d[e]??c,l=Math.min(u,t);for(let e=0;e<l;e++){let t=a+e,r,c=f===void 0?-1:f.indexOf(t);c===-1?r=s[t]?Y.DELETE_AND_ADD:Y.ADD:(f.splice(c,1),r=Y.ADD),i.indexedOperation(t,r),o[t]=n[e],s[t]=!1,n[e][Z]?.setParent(this,i.root,t)}let p=u-l;if(p>0){let e=a+l;i.insertAt(e,p);for(let t=0;t<p;t++)n[l+t][Z]?.setParent(this,i.root,e+t);s.length>0&&s.splice(e,0,...Array(p).fill(!1)),o.splice(e,0,...n.slice(l)),r.$reindexChildren(e+p)}}if(f!==void 0&&f.length>0){for(let e=f.length-1;e>=0;e--)r.$cancelAdd(f[e],!1);r.$reindexChildren(f[0])}return i.root?.enqueueChangeTree(i),a.splice(e,t,...n)}unshift(...e){let t=this[ym],n=t[Z];n.unshift(e.length);for(let t=0;t<e.length;t++)e[t]?.[Z]?.setParent(this,n.root,t);let r=t.deletedIndexes;return r.length>0&&r.unshift(...Array(e.length).fill(!1)),t.tmpItems.unshift(...e),t.$reindexChildren(e.length),t.items.unshift(...e)}indexOf(e,t){return this.items.indexOf(e,t)}lastIndexOf(e,t=this.length-1){return this.items.lastIndexOf(e,t)}every(e,t){return this.items.every(e,t)}some(e,t){return this.items.some(e,t)}forEach(e,t){return this.items.forEach(e,t)}map(e,t){return this.items.map(e,t)}filter(e,t){return this.items.filter(e,t)}reduce(e,t){return this.items.reduce(e,t)}reduceRight(e,t){return this.items.reduceRight(e,t)}find(e,t){return this.items.find(e,t)}findIndex(e,t){return this.items.findIndex(e,t)}fill(e,t,n){throw Error(`ArraySchema#fill() not implemented`)}copyWithin(e,t,n){throw Error(`ArraySchema#copyWithin() not implemented`)}toString(){return this.items.toString()}toLocaleString(){return this.items.toLocaleString()}[Symbol.iterator](){return this.items[Symbol.iterator]()}static get[Symbol.species](){return e}[Symbol.unscopables];entries(){return this.items.entries()}keys(){return this.items.keys()}values(){return this.items.values()}includes(e,t){return this.items.includes(e,t)}flatMap(e,t){throw Error(`ArraySchema#flatMap() is not supported.`)}flat(e){throw Error(`ArraySchema#flat() is not supported.`)}findLast(){return this.items.findLast.apply(this.items,arguments)}findLastIndex(...e){return this.items.findLastIndex.apply(this.items,arguments)}with(t,n){let r=this.items.slice();return t<0&&(t+=this.length),r[t]=n,new e(...r)}toReversed(){return this.items.slice().reverse()}toSorted(e){return this.items.slice().sort(e)}toSpliced(e,t,...n){return this.items.toSpliced.apply(copy,arguments)}shuffle(){return this.move(e=>{let t=this.items.length;for(;t!=0;){let e=Math.floor(Math.random()*t);t--,[this[t],this[e]]=[this[e],this[t]]}})}move(e){return this.isMovingItems=!0,e(this),this.isMovingItems=!1,this}[gm](e,t=!1){let n=this[ym]??this;return t||n.deletedIndexes[e]?n.items[e]:n.tmpItems[e]||n.items[e]}[_m](e){let t=this[ym]??this;t.items[e]=void 0,t._needsCompaction=!0}[bm](){let e=this.tmpItems;this.tmpItems=this.items.slice(),this.deletedIndexes.length>0&&(this.$reindexChildren(0,e),this.deletedIndexes.length=0)}[Sm](){let e=this[ym]??this;e._needsCompaction&&(e._needsCompaction=!1,e.items=e.items.filter(e=>e!==void 0))}[vm](e,t,n){let r=this[ym]??this,i=r.items,a=!1;for(let o=0;o<i.length;o++){let s=i[o];e.has(o)?n(s):(a=!0,t(s,o),r[_m](o))}a&&r[Sm]()}toArray(){return this.items.slice(0)}toJSON(){return this.toArray().map(e=>typeof e.toJSON==`function`?e.toJSON():e)}clone(t){let n;return t?(n=new e,n.push(...this.items)):n=new e(...this.map(e=>e[Z]?e.clone():e)),n}};Nh(`array`,{constructor:A_});var j_=class{keyByIndex=new Map;indexByKey=Object.create(null);nextIndex=0;snapshots;indexOf(e){let t=this.indexByKey[e];return t===void 0?void 0:t}assign(e){let t=this.nextIndex++;return this.indexByKey[e]=t,this.keyByIndex.set(t,e),t}snapshot(e,t){(this.snapshots??=new Map).set(e,t)}forgetSnapshot(e){this.snapshots?.delete(e)}snapshotAt(e){return this.snapshots?.get(e)}setIndex(e,t){this.keyByIndex.set(e,t),this.indexByKey[t]=e}keyOf(e){return this.keyByIndex.get(e)}cleanupAfterEncode(){if(this.snapshots!==void 0){for(let[e]of this.snapshots){let t=this.keyByIndex.get(e);t!==void 0&&(delete this.indexByKey[t],this.keyByIndex.delete(e))}this.snapshots.clear()}}reset(){this.indexByKey=Object.create(null),this.keyByIndex.clear(),this.snapshots?.clear(),this.nextIndex=0}},M_=class e{[Z];[X];childType;[Q];$items=new Map;journal=new j_;_stream;get maxPerTick(){return this._stream?.maxPerTick??32}set maxPerTick(e){(this._stream??=Ih()).maxPerTick=e}get priority(){return this._stream?.priority}set priority(e){(this._stream??=Ih()).priority=e}get $indexes(){return this.journal.keyByIndex}get _collectionIndexes(){return this.journal.indexByKey}static[pm]=f_;static[mm]=w_;static COLLECTION_KIND=x_.Map;static[hm](e,t,n){if(!n||typeof e[Q]==`string`)return!0;let r=e[`~getByIndex`](t)??e.journal.snapshotAt(t);return n.isChangeTreeVisible(r[Z])}static is(e){return e.map!==void 0}constructor(t){if(Object.defineProperty(this,Z,{value:new o_(this),enumerable:!1,writable:!0}),this[Q]=void 0,t){if(t instanceof Map||t instanceof e)t.forEach((e,t)=>this.set(t,e));else for(let e in t)this.set(e,t[e])}}static initializeForDecoder(){let t=Object.create(e.prototype);return t.$items=new Map,t.journal=new j_,t[Q]=void 0,l_(t),t}[Symbol.iterator](){return this.$items[Symbol.iterator]()}get[Symbol.toStringTag](){return this.$items[Symbol.toStringTag]}static get[Symbol.species](){return e}set(e,t){if(t==null)throw Error(`MapSchema#set('${e}', ${t}): trying to set ${t} value on '${e}'.`);typeof t==`object`&&this[Q]&&D_(t,this[Q],this,e),e=e.toString();let n=this[Z],r=t[Z]!==void 0,i=this.journal,a=i.indexOf(e),o;if(a!==void 0){o=Y.REPLACE;let n=this.$items.get(e);if(n===t)return;r&&(o=Y.DELETE_AND_ADD,n!==void 0&&n[Z].root?.remove(n[Z])),i.snapshotAt(a)!==void 0&&i.forgetSnapshot(a)}else a=i.assign(e),o=Y.ADD;return this.$items.set(e,t),o===Y.ADD&&n.isStreamCollection?n.root!==void 0&&Rh(this,n.root,a):n.change(a,o),r&&t[Z].setParent(this,n.root,a),this}get(e){return this.$items.get(e)}getOrInsert(e,t){return this.$items.has(e)?this.$items.get(e):(this.set(e,t),t)}getOrInsertComputed(e,t){if(this.$items.has(e))return this.$items.get(e);let n=t(e);return this.set(e,n),n}delete(e){if(!this.$items.has(e))return!1;let t=this.journal.indexOf(e),n=this.$items.get(e),r=this[Z];if(r.isStreamCollection){let i=r.root,a=!1;return i!==void 0&&(a=zh(this,i,this[X],t)),n?.[Z]!==void 0&&i?.remove(n[Z]),this.$items.delete(e),a||this.journal.snapshot(t,n),!0}return this.journal.snapshot(t,n),r.delete(t),this.$items.delete(e)}clear(){let e=this[Z];e.discard(),e.forEachChild((t,n)=>{e.root?.remove(t)}),this.journal.reset(),this.$items.clear(),e.operation(Y.CLEAR)}[xm](){let e=this[Z];if(e.isStreamCollection)throw Error(`@colyseus/schema: cannot reset a streamed MapSchema (pooling not supported).`);this.$items.forEach(e=>e?.[xm]?.()),this.$items.clear(),this.journal.reset(),e.recycle(),this[X]=void 0}has(e){return this.$items.has(e)}forEach(e){this.$items.forEach(e)}entries(){return this.$items.entries()}keys(){return this.$items.keys()}values(){return this.$items.values()}get size(){return this.$items.size}pauseTracking(){this[Z].pause()}resumeTracking(){this[Z].resume()}untracked(e){return this[Z].untracked(e)}get isTrackingPaused(){return this[Z].paused}setIndex(e,t){this.journal.setIndex(e,t)}getIndex(e){return this.journal.keyOf(e)}[gm](e){let t=this.journal.keyOf(e);return t===void 0?void 0:this.$items.get(t)}[_m](e){let t=this.journal.keyOf(e);t!==void 0&&(this.$items.delete(t),this.journal.keyByIndex.delete(e))}[vm](e,t,n){let r=null;if(this.$items.forEach((i,a)=>{e.has(a)?n(i):((r??=new Set).add(a),t(i,a))}),r!==null){r.forEach(e=>{this.$items.delete(e),delete this.journal.indexByKey[e]});let e=[];this.journal.keyByIndex.forEach((t,n)=>{r.has(t)&&e.push(n)});for(let t=0;t<e.length;t++)this.journal.keyByIndex.delete(e[t])}}[bm](){this.journal.cleanupAfterEncode()}_dropView(e){Wh(this,e)}_unregister(){}toJSON(){return Object.fromEntries(Array.from(this,([e,t])=>[e,typeof t.toJSON==`function`?t.toJSON():t]))}clone(t){let n;return t?n=Object.assign(new e,this):(n=new e,this.forEach((e,t)=>{e[Z]?n.set(t,e.clone()):n.set(t,e)})),n}};Nh(`map`,{constructor:M_});var N_=class e{[Z];[X];[Q];$items=new Map;deletedItems={};$refId=0;_stream;get maxPerTick(){return this._stream?.maxPerTick??32}set maxPerTick(e){(this._stream??=Ih()).maxPerTick=e}get priority(){return this._stream?.priority}set priority(e){(this._stream??=Ih()).priority=e}static[pm]=p_;static[mm]=w_;static COLLECTION_KIND=x_.Collection;static[hm](e,t,n){return!n||typeof e[Q]==`string`||n.isChangeTreeVisible((e[`~getByIndex`](t)??e.deletedItems[t])[Z])}static is(e){return e.collection!==void 0}constructor(e){Object.defineProperty(this,Z,{value:new o_(this),enumerable:!1,writable:!0}),this[Q]=void 0,e&&e.forEach(e=>this.add(e))}static initializeForDecoder(){let t=Object.create(e.prototype);return t.$items=new Map,t.deletedItems={},t.$refId=0,t[Q]=void 0,l_(t),t}add(e){let t=this.$refId++,n=this[Z];return this.$items.set(t,e),n.isStreamCollection?n.root!==void 0&&Rh(this,n.root,t):n.change(t),e[Z]!==void 0&&e[Z].setParent(this,n.root,t),t}at(e){let t=Array.from(this.$items.keys())[e];return this.$items.get(t)}entries(){return this.$items.entries()}delete(e){let t=this.$items.entries(),n,r;for(;(r=t.next())&&!r.done;)if(e===r.value[1]){n=r.value[0];break}if(n===void 0)return!1;let i=this[Z];if(i.isStreamCollection){let e=i.root,t=this.$items.get(n);return e!==void 0&&zh(this,e,this[X],n),t?.[Z]!==void 0&&e?.remove(t[Z]),this.deletedItems[n]=t,this.$items.delete(n)}return this.deletedItems[n]=i.delete(n),this.$items.delete(n)}clear(){let e=this[Z];e.discard(),e.forEachChild((t,n)=>{e.root?.remove(t)}),this.$items.clear(),e.operation(Y.CLEAR)}[xm](){let e=this[Z];if(e.isStreamCollection)throw Error(`@colyseus/schema: cannot reset a streamed CollectionSchema (pooling not supported).`);this.$items.forEach(e=>e?.[xm]?.()),this.$items.clear(),this.deletedItems={},this.$refId=0,e.recycle(),this[X]=void 0}has(e){return Array.from(this.$items.values()).some(t=>t===e)}forEach(e){this.$items.forEach((t,n,r)=>e(t,n,this))}values(){return this.$items.values()}get size(){return this.$items.size}pauseTracking(){this[Z].pause()}resumeTracking(){this[Z].resume()}untracked(e){return this[Z].untracked(e)}get isTrackingPaused(){return this[Z].paused}[Symbol.iterator](){return this.$items.values()}setIndex(e,t){}getIndex(e){return e}[gm](e){return this.$items.get(e)}[_m](e){this.$items.delete(e)}[vm](e,t,n){let r=null;if(this.$items.forEach((i,a)=>{e.has(a)?n(i):((r??=[]).push(a),t(i,a))}),r!==null)for(let e=0;e<r.length;e++)this[_m](r[e])}[bm](){for(let e in this.deletedItems)delete this.deletedItems[e]}_dropView(e){Wh(this,e)}_unregister(){}toArray(){return Array.from(this.$items.values())}toJSON(){let e=[];return this.forEach((t,n)=>{e.push(typeof t.toJSON==`function`?t.toJSON():t)}),e}clone(t){let n;return t?n=Object.assign(new e,this):(n=new e,this.forEach(e=>{e[Z]?n.add(e.clone()):n.add(e)})),n}};Nh(`collection`,{constructor:N_});var P_=class e{[Z];[X];[Q];$items=new Map;deletedItems={};$refId=0;_stream;get maxPerTick(){return this._stream?.maxPerTick??32}set maxPerTick(e){(this._stream??=Ih()).maxPerTick=e}get priority(){return this._stream?.priority}set priority(e){(this._stream??=Ih()).priority=e}static[pm]=p_;static[mm]=w_;static COLLECTION_KIND=x_.Set;static[hm](e,t,n){return!n||typeof e[Q]==`string`||n.isVisible((e[`~getByIndex`](t)??e.deletedItems[t])[Z])}static is(e){return e.set!==void 0}constructor(e){Object.defineProperty(this,Z,{value:new o_(this),enumerable:!1,writable:!0}),this[Q]=void 0,e&&e.forEach(e=>this.add(e))}static initializeForDecoder(){let t=Object.create(e.prototype);return t.$items=new Map,t.deletedItems={},t.$refId=0,t[Q]=void 0,l_(t),t}add(e){if(this.has(e))return!1;let t=this.$refId++,n=this[Z];return this.$items.set(t,e),n.isStreamCollection?n.root!==void 0&&Rh(this,n.root,t):n.change(t,Y.ADD),e[Z]!==void 0&&e[Z].setParent(this,n.root,t),t}entries(){return this.$items.entries()}delete(e){let t=this.$items.entries(),n,r;for(;(r=t.next())&&!r.done;)if(e===r.value[1]){n=r.value[0];break}if(n===void 0)return!1;let i=this[Z];if(i.isStreamCollection){let e=i.root,t=this.$items.get(n);return e!==void 0&&zh(this,e,this[X],n),t?.[Z]!==void 0&&e?.remove(t[Z]),this.deletedItems[n]=t,this.$items.delete(n)}return this.deletedItems[n]=i.delete(n),this.$items.delete(n)}clear(){let e=this[Z];e.discard(),this.$items.clear(),e.operation(Y.CLEAR)}[xm](){let e=this[Z];if(e.isStreamCollection)throw Error(`@colyseus/schema: cannot reset a streamed SetSchema (pooling not supported).`);this.$items.forEach(e=>e?.[xm]?.()),this.$items.clear(),this.deletedItems={},this.$refId=0,e.recycle(),this[X]=void 0}has(e){let t=this.$items.values(),n=!1,r;for(;(r=t.next())&&!r.done;)if(e===r.value){n=!0;break}return n}forEach(e){this.$items.forEach((t,n,r)=>e(t,n,this))}values(){return this.$items.values()}get size(){return this.$items.size}pauseTracking(){this[Z].pause()}resumeTracking(){this[Z].resume()}untracked(e){return this[Z].untracked(e)}get isTrackingPaused(){return this[Z].paused}[Symbol.iterator](){return this.$items.values()}setIndex(e,t){}getIndex(e){return e}[gm](e){return this.$items.get(e)}[_m](e){this.$items.delete(e)}[vm](e,t,n){let r=null;if(this.$items.forEach((i,a)=>{e.has(a)?n(i):((r??=[]).push(a),t(i,a))}),r!==null)for(let e=0;e<r.length;e++)this[_m](r[e])}[bm](){for(let e in this.deletedItems)delete this.deletedItems[e]}_dropView(e){Wh(this,e)}_unregister(){}toArray(){return Array.from(this.$items.values())}toJSON(){let e=[];return this.forEach((t,n)=>{e.push(typeof t.toJSON==`function`?t.toJSON():t)}),e}clone(t){let n;return t?n=Object.assign(new e,this):(n=new e,this.forEach(e=>{e[Z]?n.add(e.clone()):n.add(e)})),n}};Nh(`set`,{constructor:P_});var F_=class e{[Z];[X];[Q];$items=new Map;$nextPosition=0;_itemIndex=new Map;_stream;get maxPerTick(){return this._stream?.maxPerTick??32}set maxPerTick(e){(this._stream??=Ih()).maxPerTick=e}get priority(){return this._stream?.priority}set priority(e){(this._stream??=Ih()).priority=e}static $isStream=!0;static[pm]=p_;static[mm]=w_;static COLLECTION_KIND=x_.Stream;static[hm](e,t,n){if(!n)return!0;let r=e[gm](t);return r!==void 0&&n.isVisible(r[Z])}static is(e){return e&&e.stream!==void 0}constructor(){Object.defineProperty(this,Z,{value:new o_(this),enumerable:!1,writable:!0}),this[Q]=void 0}static initializeForDecoder(){let t=Object.create(e.prototype);return t.$items=new Map,t.$nextPosition=0,t._itemIndex=new Map,t[Q]=void 0,l_(t),t}add(e){if(this._itemIndex.has(e))return-1;let t=this.$nextPosition++;this.$items.set(t,e),this._itemIndex.set(e,t);let n=this[Z].root;return e[Z]!==void 0&&e[Z].setParent(this,n,t),n!==void 0&&Rh(this,n,t),t}remove(e){let t=this._itemIndex.get(e);if(t===void 0)return!1;this._itemIndex.delete(e),this.$items.delete(t);let n=this[Z].root;return n!==void 0&&(zh(this,n,this[X],t),e[Z]!==void 0&&n.remove(e[Z])),!0}has(e){return this._itemIndex.has(e)}clear(){let e=this[Z].root;if(e!==void 0){Bh(this,e,this[X]);for(let t of this.$items.values())t[Z]!==void 0&&e.remove(t[Z])}this.$items.clear(),this._itemIndex.clear()}forEach(e){for(let[t,n]of this.$items)e(n,t,this)}values(){return this.$items.values()}entries(){return this.$items.entries()}[Symbol.iterator](){return this.$items.values()}get size(){return this.$items.size}get length(){return this.$items.size}setIndex(e,t){}getIndex(e){return e}[gm](e){return this.$items.get(e)}[_m](e){let t=this.$items.get(e);t!==void 0&&(this._itemIndex.delete(t),this.$items.delete(e))}[vm](){}[bm](){}toArray(){return Array.from(this.$items.values())}toJSON(){let e=[];return this.forEach(t=>{e.push(typeof t?.toJSON==`function`?t.toJSON():t)}),e}clone(t){if(t)return Object.assign(new e,this);let n=new e;return n.maxPerTick=this.maxPerTick,this.forEach(e=>{n.add(typeof e?.clone==`function`?e.clone():e)}),n}_dropView(e){Wh(this,e)}_unregister(){}};Nh(`stream`,{constructor:F_});var I_=class{[wm]=!0;_type;_default=void 0;_hasDefault=!1;_view=void 0;_unreliable=!1;_patchOnly=!1;_deprecated=!1;_deprecatedThrows=!0;_fullStateOnly=!1;_stream=!1;_optional=!1;_noSync=!1;_streamPriority=void 0;constructor(e){this._type=e}default(e){return this._default=e,this._hasDefault=!0,this}view(e){return this._view=e??-1,this}unreliable(){return this._unreliable=!0,this}patchOnly(){return this._patchOnly=!0,this}fullStateOnly(){return this._fullStateOnly=!0,this}noSync(){return this._noSync=!0,this}stream(){let e=this._type;if(e&&typeof e==`object`&&e.array!==void 0)throw Error(Fh);return this._stream=!0,this}priority(e){return this._streamPriority=e,this}deprecated(e=!0){return this._deprecated=!0,this._deprecatedThrows=e,this}optional(){return this._optional=!0,this}toDefinition(){return{type:this._type,default:this._default,hasDefault:this._hasDefault,view:this._view,unreliable:this._unreliable,patchOnly:this._patchOnly,deprecated:this._deprecated,deprecatedThrows:this._deprecatedThrows,fullStateOnly:this._fullStateOnly,stream:this._stream,optional:this._optional,noSync:this._noSync,streamPriority:this._streamPriority}}};function L_(e){return e!=null&&e[wm]===!0}function R_(e){return(()=>new I_(e))}function z_(e){if(L_(e)){let t=e._type,n=typeof t==`string`?`use the type name instead: t.array("${t}")`:`collections accept a Schema class or a primitive type name ("string", "number", …)`;throw Error(`t.array/map/set/collection(): a t.* builder is not a valid element type — ${n}.`)}return e}var B_=(e=>new I_({array:z_(e)})),V_=(e=>new I_({map:z_(e)})),H_=(e=>new I_({set:z_(e)})),U_=(e=>new I_({collection:z_(e)})),W_=(e=>{let t=new I_({stream:z_(e)});return t._stream=!0,t}),G_=(e=>new I_(e));function K_(e){return new I_({quantized:Kh(e)})}var $=Object.freeze({string:R_(`string`),number:R_(`number`),boolean:R_(`boolean`),int8:R_(`int8`),uint8:R_(`uint8`),int16:R_(`int16`),uint16:R_(`uint16`),int32:R_(`int32`),uint32:R_(`uint32`),int64:R_(`int64`),uint64:R_(`uint64`),float32:R_(`float32`),float64:R_(`float64`),bigint64:R_(`bigint64`),biguint64:R_(`biguint64`),ref:G_,array:B_,map:V_,set:H_,collection:U_,stream:W_,quantized:K_,angle:e=>K_({min:0,max:Math.PI*2,mode:`wrap`,bits:e?.bits??16})}),q_=-1;function J_(e=q_){return function(t,n){let r=ag.initialize(t.constructor);ag.setTag(r,n,e)}}function Y_(e,t){let n=ag.initialize(e.constructor);ag.setUnreliable(n,t)}function X_(e,t){let n=ag.initialize(e.constructor);ag.setPatchOnly(n,t)}var Z_={number:`number`,int8:`number`,uint8:`number`,int16:`number`,uint16:`number`,int32:`number`,uint32:`number`,int64:`number`,uint64:`number`,float32:`number`,float64:`number`,bigint64:`bigint`,biguint64:`bigint`,string:`string`,boolean:`boolean`};function Q_(e,t,n){let r=Z_[n],i=n===`string`,a=n===`boolean`;return function(n){let o=this[Cm],s=o[t];if(n!==s){if(n!=null){if(!a&&r!==void 0&&typeof n!==r&&!(i&&n===null)){let t=n&&n.constructor?` (${n.constructor.name})`:``;throw new E_(`a '${r}' was expected, but '${JSON.stringify(n)}'${t} was provided in ${this.constructor.name}#${e}`)}this.constructor[fm](this[Z],t,Y.ADD)}else s!=null&&this[Z].delete(t);o[t]=n}}}function $_(e,t,n){return function(r){let i=this[Cm],a=i[t];if(r!==a){if(r!=null){D_(r,n,this,e);let i=this[Z],o=this.constructor;a!=null&&a[Z]?(i.root?.remove(a[Z]),o[fm](i,t,Y.DELETE_AND_ADD)):o[fm](i,t,Y.ADD),r[Z]?.setParent(this,i.root,t)}else a!=null&&this[Z].delete(t);i[t]=r}}}function ev(e,t,n,r){let i=r.constructor===A_,a=r.constructor===M_;return function(e){let r=this[Cm],o=r[t];if(e!==o){if(e!=null){if(i&&!(e instanceof A_)){let t=new A_;t[Q]=n,t.push(...e),e=t}else if(a&&!(e instanceof M_)){let t=new M_;if(t[Q]=n,e instanceof Map)e.forEach((e,n)=>t.set(n,e));else for(let n in e)t.set(n,e[n]);e=t}else e[Q]=n;let r=this[Z],s=this.constructor;o!=null&&o[Z]?(r.root?.remove(o[Z]),s[fm](r,t,Y.DELETE_AND_ADD)):s[fm](r,t,Y.ADD),e[Z]?.setParent(this,r.root,t)}else o!=null&&this[Z].delete(t);r[t]=e}}}function tv(e,t,n){return function(r){let i=this[Cm],a=i[t];if(r!=null){if(typeof r!=`number`)throw new E_(`a 'number' was expected, but '${JSON.stringify(r)}' was provided in ${this.constructor.name}#${e}`);if(r=Yh(n,Jh(n,r)),r===a)return;this.constructor[fm](this[Z],t,Y.ADD)}else{if(r===a)return;a!=null&&this[Z].delete(t)}i[t]=r}}function nv(e,t,n,r){let i;return i=r?ev(e,t,n,r):typeof n==`string`?Q_(e,t,n):qh(n)?tv(e,t,n.quantized):$_(e,t,n),{get:function(){return this[Cm][t]},set:i,enumerable:!0,configurable:!0}}function rv(e=!0){return function(t,n){let r=ag.initialize(t.constructor);ag.setDeprecated(r,n),e&&(r[Tm]??={},r[Tm][n]={get:function(){throw Error(`${n} is deprecated.`)},set:function(e){},enumerable:!1,configurable:!0},Object.defineProperty(t,n,r[Tm][n]))}}function iv(e){if(e&&typeof e==`object`){if(e.array!==void 0)return()=>new A_;if(e.map!==void 0)return()=>new M_;if(e.set!==void 0)return()=>new P_;if(e.collection!==void 0)return()=>new N_;if(e.stream!==void 0)return()=>new F_}else if(typeof e==`function`&&sv.is(e)&&(!e.prototype.initialize||e.prototype.initialize.length===0))return()=>new e}function av(e,t,n=sv){if(typeof e!=`object`||!e)throw Error(`schema(): first argument must be a fields object (got ${typeof e}).`);let r={},i={},a={},o={},s=(e,t)=>{typeof t==`function`?o[e]=t:t&&typeof t.clone==`function`?o[e]=()=>t.clone():a[e]=t},c=(e,t)=>{if(t.hasDefault)s(e,t.default);else if(!t.optional){let n=iv(t.type);n&&(o[e]=n)}},l={},u=[],d=[],f={},p=[],m=[],h={},g=[];for(let n in e){let a=e[n];if(L_(a)){let e=a.toDefinition();if(e.noSync){if(e.view!==void 0||e.unreliable||e.patchOnly||e.fullStateOnly||e.stream)throw Error(`schema(${t?`'${t}'`:``}): field '${n}' uses .noSync() together with a sync-only modifier (.view/.unreliable/.patchOnly/.fullStateOnly/.stream). A local-only field cannot be synchronized.`);c(n,e);continue}if(e.patchOnly&&e.fullStateOnly)throw Error(`schema(${t?`'${t}'`:``}): field '${n}' uses .patchOnly() together with .fullStateOnly(). Those are the only two delivery channels, so the field would never reach a client — use .noSync() if that is intended.`);let i=tg(e.type);if(typeof i==`function`&&!sv.is(i))throw Error(`schema(${t?`'${t}'`:``}): field '${n}' is a synced ref to non-Schema class '${i.name||`(anonymous)`}' — use .noSync(), or Metadata.setFields().`);r[n]=i,e.view!==void 0&&(l[n]=e.view),e.unreliable&&u.push(n),e.patchOnly&&d.push(n),e.deprecated&&(f[n]=e.deprecatedThrows),e.fullStateOnly&&p.push(n),e.stream&&m.push(n),e.streamPriority!==void 0&&(h[n]=e.streamPriority),e.optional&&g.push(n),c(n,e)}else if(typeof a==`function`)sv.is(a)?(r[n]=tg(a),(!a.prototype.initialize||a.prototype.initialize.length===0)&&(o[n]=()=>new a)):i[n]=a;else throw Error(`schema(${t?`'${t}'`:``}): field '${n}' must be a t.* builder, Schema subclass, or method (got ${typeof a}).`)}let _=e=>{for(let t in a)e[t]=a[t];for(let t in o)e[t]=o[t]()},v=()=>{let e={};return _(e),e},y=e=>{let t=Object.keys(r),n={};for(let r in e)t.includes(r)||(n[r]=e[r]);return n},b=typeof i.initialize==`function`,x=i.initialize??n._initialize,S=class extends n{constructor(...e){let t=e[0];t===void 0?(super(),_(this)):super(Object.assign(v(),b?y(t):t)),x&&new.target===S&&x.apply(this,e)}};t&&Object.defineProperty(S,"name",{value:t}),ag.setFields(S,r),S._getDefaultValues=v,S._initialize=x,Object.assign(S.prototype,i);for(let e in l)J_(l[e])(S.prototype,e);for(let e of u)Y_(S.prototype,e);for(let e of d)X_(S.prototype,e);for(let e in f)rv(f[e])(S.prototype,e);if(p.length>0||m.length>0){let e=S[Symbol.metadata];for(let t of p)ag.setFullStateOnly(e,t);for(let t of m)ag.setStream(e,t);for(let t in h)ag.setStreamPriority(e,t,h[t])}if(g.length>0){let e=S[Symbol.metadata];for(let t of g)e[e[t]].optional=!0}return S.extend=(e,t)=>av(e,t,S),S}function ov(e){return Array(e).fill(0).map((t,n)=>n===e-1?`└─ `:`   `).join(``)}var sv=class e{static[pm]=d_;static[mm]=C_;[X];[Cm];static initialize(e){Object.defineProperty(e,Z,{value:new o_(e),enumerable:!1,writable:!0}),e[Cm]=[]}static initializeForDecoder(){let e=Object.create(this.prototype);return l_(e),e[Cm]=[],e}static reset(e){let t=e?.[Z];if(t===void 0||typeof t.recycle!=`function`)throw Error(`@colyseus/schema: Schema.reset() requires a tracked (encoder-side) instance.`);if(t.extraParents!==void 0)throw Error(`@colyseus/schema: cannot reset a shared instance (${e.constructor.name}) with multiple parents.`);e[xm]()}[xm](){let e=this.constructor[Symbol.metadata]?.[km]??[],t=this[Cm];for(let n=0;n<e.length;n++)t[e[n]]?.[xm]?.();this[Z].recycle(),this[X]=void 0}static is(e){let t=e[Symbol.metadata];return typeof t==`object`&&!!t}static isSchema(e){return typeof e?.assign==`function`}static[fm](e,t,n=Y.ADD){e.change(t,n)}static[hm](e,t,n){let r=e.constructor[Symbol.metadata][t]?.tag;return n===void 0?r===void 0:r===void 0?!0:r===q_?n.isChangeTreeVisible(e[Z]):n.hasTagOnTree(e[Z],r)}constructor(t){e.initialize(this),t&&e.assignProps(this,t)}assign(t){return e.assignProps(this,t),this}static assignProps(e,t){let n=e.constructor[Symbol.metadata];if(n&&n[`~__numFields`]!==void 0)for(let r=0;r<=n[Om];r++){let i=n[r];if(!i)continue;let a=t[i.name];a!==void 0&&(e[i.name]=a)}let r=Object.keys(t);for(let i=0;i<r.length;i++){let a=r[i];n&&n[a]!==void 0||(e[a]=t[a])}}restore(t){let n=this.constructor[Symbol.metadata];for(let r in n){let i=n[r],a=i.name,o=i.type,s=t[a];if(s!=null){if(typeof o==`string`)this[a]=s;else if(e.is(o)){let e=new o;e.restore(s),this[a]=e}else if(typeof o==`object`){let t=Object.keys(o)[0],n=o[t];if(t===`map`){let t=this[a];for(let r in s)if(e.is(n)){let e=new n;e.restore(s[r]),t.set(r,e)}else t.set(r,s[r])}else if(t===`array`){let t=this[a];for(let r=0;r<s.length;r++)if(e.is(n)){let e=new n;e.restore(s[r]),t.push(e)}else t.push(s[r])}}}}return this}setDirty(e,t){let n=this.constructor[Symbol.metadata];this[Z].change(n[n[e]].index,t)}pauseTracking(){this[Z].pause()}resumeTracking(){this[Z].resume()}untracked(e){return this[Z].untracked(e)}get isTrackingPaused(){return this[Z].paused}clone(){let t=Object.create(this.constructor.prototype);e.initialize(t);let n=this.constructor[Symbol.metadata];for(let e in n){let r=n[e].name;t[r]=typeof this[r]==`object`&&typeof this[r]?.clone==`function`?this[r].clone():this[r]}return t}toJSON(){let e={},t=this.constructor[Symbol.metadata];for(let n in t){let r=t[n],i=r.name;!r.deprecated&&this[i]!==null&&this[i]!==void 0&&(e[i]=typeof this[i].toJSON==`function`?this[i].toJSON():this[i])}return e}discardAllChanges(){this[Z].discardAll()}[gm](e){let t=this.constructor[Symbol.metadata];return this[t[e].name]}[_m](e){let t=this.constructor[Symbol.metadata];this[t[e].name]=void 0}static debugRefIds(e,t=!1,n=0,r,i=``){let a=t?` - ${JSON.stringify(e.toJSON())}`:``,o=e[Z],s=e[X],c=r?r.root:o.root,l=c?.refCount?.[s]>1?` [×${c.refCount[s]}]`:``,u=`${ov(n)}${i}${e.constructor.name} (refId: ${s})${l}${a}\n`;return o.forEachChild((i,a)=>{let o=a;typeof a==`number`&&e.$indexes&&(o=e.$indexes.get(a)??a);let s=e.forEach!==void 0&&o!==void 0?`["${o}"]: `:``;u+=this.debugRefIds(i.ref,t,n+1,r,s)}),u}static debugRefIdEncodingOrder(e,t=`allChanges`){let n=[],r=e[Z];if(t===`changes`){let e=r.root.changes?.next;for(;e;)e.changeTree&&n.push(e.changeTree.ref[X]),e=e.next;return n}let i=t===`allFilteredChanges`,a=new Set,o=e=>{a.has(e)||(a.add(e),e.isFiltered===i&&n.push(e.ref[X]),e.forEachChild((e,t)=>o(e)))};return o(r),n}static debugRefIdsFromDecoder(e){return this.debugRefIds(e.state,!1,0,e)}static debugChanges(e,t=!1){let n=e[Z],r=t?`allChanges`:`changes`,i=`${e.constructor.name} (${e[X]}) -> .${r}:\n`;return t?n.forEachLive(e=>{i+=`- [${e}]: ADD (${JSON.stringify(n.getValue(Number(e),!0))})\n`}):n.forEach((e,t)=>{e<0||!t||(i+=`- [${e}]: ${Y[t]} (${JSON.stringify(n.getValue(Number(e),!1))})\n`)}),i}};um(sv);var cv={value:0,enumerable:!1,writable:!0},lv=class{types;nextUniqueId=0;refCount={};changeTrees={};changes=Jg();unreliableChanges=Jg();pendingFilterRefresh=[];enqueueFilterRefresh(e){this.types.hasFilters&&(e.flags&r_||(e.flags|=r_,this.pendingFilterRefresh.push(e)))}_nodePool=[];_nextViewId=0;_freeViewIds=[];acquireViewId(){return this._freeViewIds.length>0?this._freeViewIds.pop():this._nextViewId++}releaseViewId(e){this._freeViewIds.push(e)}activeViews=new Map;streamTrees=new Set;registerView(e){this.activeViews.set(e.id,new WeakRef(e))}unregisterView(e){this.activeViews.delete(e.id);let t=e.id;for(let e of this.streamTrees)e._dropView(t)}forEachActiveView(e){for(let[t,n]of this.activeViews){let r=n.deref();if(r===void 0){this.activeViews.delete(t);for(let e of this.streamTrees)e._dropView(t)}else e(r)}}registerStream(e){this.streamTrees.add(e)}unregisterStream(e){this.streamTrees.delete(e)}constructor(e,t=0){this.types=e,this.nextUniqueId=t}add(e){let t=e.ref;t[X]===void 0&&(cv.value=this.nextUniqueId++,Object.defineProperty(t,X,cv));let n=t[X],r=this.changeTrees[n]===void 0;r&&(this.changeTrees[n]=e);let i=this.refCount[n];return(i===0||e.needsRestage)&&(e.needsRestage=!1,e.forEachLiveWithCtx(e,xg)),this.refCount[n]=(i||0)+1,i>0&&this.enqueueFilterRefresh(e),r}remove(e){let t=e.ref[X],n=this.refCount[t]-1;if(n<=0){if(e.root=void 0,delete this.changeTrees[t],e.isStreamCollection){let t=e.ref;t._unregister?.(),this.unregisterStream(t)}this.removeFromQueue(e),this.removeFromUnreliableQueue(e),this.refCount[t]=0,e.forEachChild((t,n)=>{t.removeParent(e.ref)&&(t.parentRef===void 0||t.parentRef&&this.refCount[t.ref[X]]>0?this.remove(t):t.parentRef&&this.moveNextToParent(t))})}else this.refCount[t]=n,this.enqueueFilterRefresh(e),this.recursivelyMoveNextToParent(e);return n}recursivelyMoveNextToParent(e){this.moveNextToParent(e),e.forEachChild((e,t)=>this.recursivelyMoveNextToParent(e))}moveNextToParent(e){e.changesNode&&this._moveNextToParentInList(this.changes,e,e.changesNode,`changesNode`),e.unreliableChangesNode&&this._moveNextToParentInList(this.unreliableChanges,e,e.unreliableChangesNode,`unreliableChangesNode`)}_moveNextToParentInList(e,t,n,r){let i=t.parent;if(!i||!i[Z])return;let a=i[Z][r];a&&a!==n&&(n.position>a.position||(n.prev?n.prev.next=n.next:e.next=n.next,n.next?n.next.prev=n.prev:e.tail=n.prev,n.prev=e.tail,n.next=void 0,e.tail.next=n,e.tail=n,n.position=e.nextPosition++))}enqueueChangeTree(e,t=e.changesNode){t||(e.changesNode=this._appendToList(this.changes,e))}enqueueUnreliable(e,t=e.unreliableChangesNode){t||(e.unreliableChangesNode=this._appendToList(this.unreliableChanges,e))}_appendToList(e,t){let n=this._nodePool,r;return n.length>0?(r=n.pop(),r.changeTree=t,r.next=void 0,r.prev=void 0):r={changeTree:t,next:void 0,prev:void 0,position:0},e.next?(r.prev=e.tail,e.tail.next=r,e.tail=r):(e.nextPosition=0,e.next=r,e.tail=r),r.position=e.nextPosition++,r}releaseNode(e){e.changeTree=void 0,e.prev=void 0,e.next=void 0,this._nodePool.push(e)}removeFromQueue(e){return this._removeNode(this.changes,e,e.changesNode,`changesNode`)}removeFromUnreliableQueue(e){return this._removeNode(this.unreliableChanges,e,e.unreliableChangesNode,`unreliableChangesNode`)}_removeNode(e,t,n,r){return!n||n.changeTree!==t?!1:(n.prev?n.prev.next=n.next:e.next=n.next,n.next?n.next.prev=n.prev:e.tail=n.prev,t[r]=void 0,this.releaseNode(n),!0)}};function uv(e,t){if(t===-1||t>=e.length)return!1;let n=e.length-1;for(let r=t;r<n;r++)e[r]=e[r+1];return e.length=n,!0}function dv(e,t,n){let r=~n,i=e.changeTrees;for(let e in i){let n=i[e],a=n.visibleViews;a!==void 0&&t<a.length&&(a[t]&=r);let o=n.subscribedViews;o!==void 0&&t<o.length&&(o[t]&=r);let s=n.tagViews;s!==void 0&&s.forEach(e=>{t<e.length&&(e[t]&=r)})}}new FinalizationRegistry(({root:e,id:t,slot:n,bit:r})=>{dv(e,n,r),e.activeViews.delete(t);for(let n of e.streamTrees)n._dropView(t);e.releaseViewId(t)});var fv=-1;function pv(e){e.structSwitchEmitted||=(e.shouldEmitSwitch&&(e.buffer[e.it.offset++]=255,oh.number(e.buffer,e.ref[X],e.it)),!0)}function mv(e,t){_v(e,t,Y.ADD)}function hv(e,t){if(t._fullSyncGen!==e.gen){if(t._fullSyncGen=e.gen,!e.hasView||e.view.isChangeTreeVisible(t)){let n=t.encDescriptor;e.changeTree=t,e.ref=t.ref,e.encoder=n.encoder,e.filter=n.filter,e.metadata=n.metadata,e.treeIsFiltered=t.isFiltered,e.isSchema=n.isSchema,e.filterBitmask=n.filterBitmask,e.tags=n.tags,e.structSwitchEmitted=!1,e.shouldEmitSwitch=e.hasView||e.it.offset>e.initialOffset||t!==e.rootChangeTree,t.isArray&&t.collDirty.size>0&&(t.flags|=i_),wg(t,e,mv)}Vg(t,e,gv)}}function gv(e,t,n){hv(e,t)}function _v(e,t,n){if(t<0){if(e.treeIsFiltered!==e.emitFiltered)return;pv(e),e.buffer[e.it.offset++]=Math.abs(t)&255;return}if((e.isSchema?e.treeIsFiltered||(t<32?!!(e.filterBitmask&1<<t):e.tags[t]!==void 0):e.treeIsFiltered)!==e.emitFiltered)return;let r=e.isEncodeAll?Y.ADD:n;r!==void 0&&(e.filter===void 0||e.filter(e.ref,t,e.view))&&(pv(e),e.encoder(e.self,e.buffer,e.changeTree,t,r,e.it,e.isEncodeAll,e.hasView,e.metadata))}function vv(e,t){let n=new Uint8Array(e.length+t.length);return n.set(e,0),n.set(t,e.length),n}var yv=class e{static BUFFER_SIZE=16384;sharedBuffer=new Uint8Array(e.BUFFER_SIZE);context;state;root;constructor(e,t){this.context=Qh.cache(e.constructor),this.root=t??new lv(this.context),this.setState(e)}setState(e){this.state=e,this.state[Z].setRoot(this.root)}_encodeCtx={self:void 0,buffer:void 0,it:void 0,changeTree:void 0,ref:void 0,encoder:void 0,filter:void 0,metadata:void 0,view:void 0,isEncodeAll:!1,hasView:!1,treeIsFiltered:!1,isSchema:!1,emitFiltered:!1,filterBitmask:0,tags:void 0,structSwitchEmitted:!1,isRootTree:!1,shouldEmitSwitch:!1,gen:0,initialOffset:0,rootChangeTree:void 0};_fullSyncGen=0;encode(e={offset:0},t,n=this.sharedBuffer,r=e.offset){return this._encodeChannel(e,t,n,r,!1)}encodeUnreliable(e={offset:0},t,n=this.sharedBuffer,r=e.offset){return this._encodeChannel(e,t,n,r,!0)}_encodeChannel(e,t,n,r,i){this.root.pendingFilterRefresh.length>0&&Dg(this.root);let a=t!==void 0,o=this.state[Z],s=this._encodeCtx;s.self=this,s.buffer=n,s.it=e,s.view=t,s.isEncodeAll=!1,s.hasView=a,s.emitFiltered=a;let c=i?this.root.unreliableChanges:this.root.changes;for(;c=c.next;){let n=c.changeTree;if(a&&!t.isChangeTreeVisible(n))continue;let l=i?n.unreliableRecorder:n;if(!l||!l.has())continue;let u=n.encDescriptor;s.changeTree=n,s.ref=n.ref,s.encoder=u.encoder,s.filter=u.filter,s.metadata=u.metadata,s.treeIsFiltered=n.isFiltered,s.isSchema=u.isSchema,s.filterBitmask=u.filterBitmask,s.tags=u.tags,s.structSwitchEmitted=!1,s.isRootTree=n===o,s.shouldEmitSwitch=a||e.offset>r||!s.isRootTree,l.forEachWithCtx(s,_v)}return!i&&!a&&this._isStreamBroadcastMode&&this._emitStreamBroadcast(n,e),e.offset>n.byteLength?(n=this._resizeBuffer(n,e.offset),e.offset=r,this._encodeChannel(e,t,n,r,i)):n.subarray(0,e.offset)}encodeFullSync(e,t,n,r,i=e.offset){this.root.pendingFilterRefresh.length>0&&Dg(this.root);let a=r!==void 0,o=this.state[Z],s=this._encodeCtx;return s.self=this,s.buffer=t,s.it=e,s.view=r,s.isEncodeAll=!0,s.hasView=a,s.emitFiltered=n,s.gen=++this._fullSyncGen,s.initialOffset=i,s.rootChangeTree=o,hv(s,o),e.offset>t.byteLength?(t=this._resizeBuffer(t,e.offset),e.offset=i,this.encodeFullSync(e,t,n,r,i)):t.subarray(0,e.offset)}_resizeBuffer(t,n){let r=Math.ceil(n/e.BUFFER_SIZE)*e.BUFFER_SIZE;console.warn(`@colyseus/schema buffer overflow. Encoded state is higher than default BUFFER_SIZE. Use the following to increase default BUFFER_SIZE:

    import { Encoder } from "@colyseus/schema";
    Encoder.BUFFER_SIZE = ${Math.round(r/1024)} * 1024; // ${Math.round(r/1024)} KB
`);let i=new Uint8Array(r);return i.set(t),t===this.sharedBuffer&&(this.sharedBuffer=i),i}encodeAll(e={offset:0},t=this.sharedBuffer){return this.encodeFullSync(e,t,!1)}encodeAllView(e,t,n,r=this.sharedBuffer){let i=n.offset;return r=this.encodeFullSync(n,r,!0,e,i),vv(r.subarray(0,t),r.subarray(i,n.offset))}ensureCapacity(t,n){if(n+e.BUFFER_SIZE<=t.byteLength)return t;let r=Math.ceil((n+e.BUFFER_SIZE)/e.BUFFER_SIZE)*e.BUFFER_SIZE,i=new Uint8Array(r);return i.set(t.subarray(0,n)),t===this.sharedBuffer&&(this.sharedBuffer=i),i}encodeView(e,t,n,r=this.sharedBuffer){let i=n.offset;this._emitStreamPriority(e);for(let t of e.changes.keys()){let i=e.changes.get(t),a=this.root.changeTrees[t];if(a===void 0){e.changes.delete(t);continue}if(i.size===0)continue;let o=a.encDescriptor,s=o.encoder,c=o.metadata,l=a.ref,u=a.refTarget;r=this.ensureCapacity(r,n.offset),r[n.offset++]=255,oh.number(r,l[X],n);for(let[t,o]of i){let i;if(t===fv){let e=u.tmpItems,t=u.deletedIndexes;for(let i=0;i<e.length;i++)e[i]!==void 0&&t[i]!==!0&&s(this,r,a,i,Y.ADD,n,!1,!0,c);continue}if(typeof t==`number`)i=t;else{let n=t.indexInParent(l);if(n===void 0)continue;if(i=n,o===Y.ADD&&a.getChange(i)===Y.DELETE){e.changes.delete(t.ref[X]);continue}}let d=u[`~getByIndex`](i)!==void 0&&o||Y.DELETE;s(this,r,a,i,d,n,!1,!0,c)}}return e.changes.clear(),r=this.encode(n,e,r),vv(r.subarray(0,t),r.subarray(i,n.offset))}encodeUnreliableView(e,t,n,r=this.sharedBuffer){let i=n.offset;return r=this.encodeUnreliable(n,e,r,i),vv(r.subarray(0,t),r.subarray(i,n.offset))}_emitStreamBroadcast(e,t){let n=this.root.streamTrees;for(let r of n){let n=r,i=n[Z],a=n[X];if(a===void 0)continue;let o=n._stream,s=o.broadcastDeletes,c=o.broadcastPending,l=o.sentBroadcast,u=s.size>0,d=c.size>0,f=i.encDescriptor,p=f.encoder,m=f.metadata;if(u||d){if(e[t.offset++]=255,oh.number(e,a,t),u){for(let n of s)p(this,e,i,n,Y.DELETE,t,!1,!1,m);s.clear()}let r=o.maxPerTick,d=[],f=0,h=[];for(let a of c){if(f>=r)break;let o=n[gm](a);o===void 0?h.push(a):(p(this,e,i,a,Y.ADD,t,!1,!1,m),l.add(a),d.push(o),h.push(a),f++)}for(let e of h)c.delete(e);for(let n of d){let r=n[Z];if(r===void 0)continue;let i=n[X];if(i===void 0)continue;e[t.offset++]=255,oh.number(e,i,t);let a=r.encDescriptor,o=a.encoder,s=a.metadata;r.forEachLive(n=>{ag.hasUnreliableAtIndex(s,n)||o(this,e,r,n,Y.ADD,t,!1,!1,s)})}}for(let r of l){let i=n[gm](r);if(i===void 0)continue;let a=i[Z];if(a===void 0||!a.has())continue;let o=i[X];if(o===void 0)continue;e[t.offset++]=255,oh.number(e,o,t);let s=a.encDescriptor,c=s.encoder,l=s.metadata;a.forEach((n,r)=>{n<0||ag.hasUnreliableAtIndex(l,n)||c(this,e,a,n,r,t,!1,!1,l)})}}}_emitStreamPriority(e){let t=this.root.streamTrees;if(t.size===0)return;let n=e.id;for(let r of t){let t=r,i=t._stream,a=i.pendingByView.get(n);if(a===void 0||a.size===0)continue;let o=i.priorityByView?.get(n),s=o!==void 0,c=i.priority,l=i.maxPerTick,u=[],d=[];if(s||c!==void 0){let n=[],r=[],i=0;for(let u of a){let a=t[gm](u);if(a===void 0){d.push(u);continue}let f=s?o(a):c(e,a);if(i<l){let e=i++;for(;e>0&&r[e-1]<f;)r[e]=r[e-1],n[e]=n[e-1],e--;r[e]=f,n[e]=u}else if(f>r[l-1]){let e=l-1;for(;e>0&&r[e-1]<f;)r[e]=r[e-1],n[e]=n[e-1],e--;r[e]=f,n[e]=u}}for(let e=0;e<i;e++)u.push(n[e])}else for(let e of a){if(u.length>=l)break;u.push(e)}for(let e of d)a.delete(e);let f=u.length,p=i.sentByView.get(n);p===void 0&&(p=new Set,i.sentByView.set(n,p));for(let n=0;n<f;n++){let r=u[n],i=t[gm](r);if(i===void 0){a.delete(r);continue}e._addImmediate(i);let o=i[Z];if(o!==void 0){let t=i[X],n=e.changes.get(t);n===void 0&&(n=new Map,e.changes.set(t,n));let r=o.metadata;o.forEachLive(e=>{ag.hasUnreliableAtIndex(r,e)||n.set(e,Y.ADD)})}a.delete(r),p.add(r)}}}discardChanges(){let e=this.root.changes,t=e.next,n=this.root;for(;t;){let e=t.next;t.changeTree.endEncode(),n.releaseNode(t),t=e}e.next=void 0,e.tail=void 0}discardUnreliableChanges(){let e=this.root.unreliableChanges,t=e.next,n=this.root;for(;t;){let e=t.next;t.changeTree.endEncodeUnreliable(),n.releaseNode(t),t=e}e.next=void 0,e.tail=void 0}tryEncodeTypeId(e,t,n,r){let i=this.context.getTypeId(t),a=this.context.getTypeId(n);a===void 0?console.warn(`@colyseus/schema WARNING: Class "${n.name}" is not registered on TypeRegistry - Please either tag the class with @entity or define a @type() field.`):i!==a&&(e[r.offset++]=213,oh.number(e,a,r))}get hasChanges(){return this.root.changes.next!==void 0||this._hasStreamBacklog()}get _isStreamBroadcastMode(){return this.root.activeViews.size===0&&this.root.streamTrees.size>0}_hasStreamBacklog(){let e=this.root;if(e.streamTrees.size===0)return!1;let t=e.activeViews.size===0;for(let n of e.streamTrees)if(t?Hh(n):Vh(n,e))return!0;return!1}get hasUnreliableChanges(){return this.root.unreliableChanges.next!==void 0}},bv=class extends Error{constructor(e){super(e),this.name=`DecodingWarning`}},xv={value:0,enumerable:!1,writable:!0},Sv=class{refs=new Map;refCount={};deletedRefs=new Set;callbacks={};nextUniqueId=0;getNextUniqueId(){return this.nextUniqueId++}addRef(e,t,n=!0){this.refs.set(e,t),t[X]===void 0?(xv.value=e,Object.defineProperty(t,X,xv)):t[X]!==e&&(t[X]=e),n&&(this.refCount[e]=(this.refCount[e]||0)+1),this.deletedRefs.has(e)&&this.deletedRefs.delete(e)}removeRef(e){let t=this.refCount[e];if(t===void 0)try{throw new bv(`trying to remove refId that doesn't exist: `+e)}catch(e){console.warn(e)}else if(t===0)try{let t=this.refs.get(e);throw new bv(`trying to remove refId '${e}' with 0 refCount (${t.constructor.name}: ${JSON.stringify(t)})`)}catch(e){console.warn(e)}else(this.refCount[e]=t-1)<=0&&this.deletedRefs.add(e)}clearRefs(){this.refs.clear(),this.deletedRefs.clear(),this.callbacks={},this.refCount={}}garbageCollectDeletedRefs(){this.deletedRefs.forEach(e=>{if(this.refCount[e]>0)return;let t=this.refs.get(e),n=t.constructor[Symbol.metadata];if(n!=null)for(let e in n){let r=t[n[e].name];if(typeof r==`object`&&r){let e=r[X];e!==void 0&&!this.deletedRefs.has(e)&&this.removeRef(e)}}else typeof t[Q]==`function`&&Array.from(t.values()).forEach(e=>{let t=e[X];t!==void 0&&!this.deletedRefs.has(t)&&this.removeRef(t)});this.refs.delete(e),delete this.refCount[e],delete this.callbacks[e]}),this.deletedRefs.clear()}addCallback(e,t,n){if(e===void 0){let e=typeof t==`number`?Y[t]:t;throw Error(`Can't addCallback on '${e}' (refId is undefined)`)}return this.callbacks[e]||(this.callbacks[e]={}),this.callbacks[e][t]||(this.callbacks[e][t]=[]),this.callbacks[e][t].push(n),()=>this.removeCallback(e,t,n)}removeCallback(e,t,n){let r=this.callbacks?.[e]?.[t]?.indexOf(n);r!==void 0&&r!==-1&&uv(this.callbacks[e][t],r)}},Cv=class{context;state;root;currentRefId=0;triggerChanges;resyncVisited=null;resyncDamaged=!1;constructor(e,t){this.setState(e),this.context=t||new Qh(e.constructor)}setState(e){this.state=e,this.root=new Sv,this.root.addRef(0,e)}decode(e,t={offset:0},n=this.state){let r=this.triggerChanges===void 0?null:[],i=this.root,a=e.byteLength,o=n.constructor[mm];for(this.currentRefId=0;t.offset<a;)if(e[t.offset]==cm){t.offset++,n[Sm]?.();let r=Ah.number(e,t),s=i.refs.get(r);s?(n=s,o=n.constructor[mm],this.currentRefId=r):(console.error(`"refId" not found: ${r}`,{previousRef:n,previousRefId:this.currentRefId}),console.warn(`Please report this issue to the developers.`),this.skipCurrentStructure(e,t,a))}else o(this,e,t,n,r)===b_&&(console.warn(`@colyseus/schema: definition mismatch`),this.skipCurrentStructure(e,t,a));return n[Sm]?.(),this.resyncVisited!==null&&__(this,r),r!==null&&this.triggerChanges?.(r),i.garbageCollectDeletedRefs(),r}decodeResync(e,t={offset:0}){this.resyncVisited=new Map,this.resyncDamaged=!1;try{return this.decode(e,t)}finally{this.resyncVisited=null}}skipCurrentStructure(e,t,n){this.resyncVisited!==null&&(this.resyncDamaged=!0);let r={offset:t.offset};for(;t.offset<n&&!(e[t.offset]===cm&&(r.offset=t.offset+1,this.root.refs.has(Ah.number(e,r))));)t.offset++}getInstanceType(e,t,n){let r;if(e[t.offset]===lm){t.offset++;let n=Ah.number(e,t);r=this.context.get(n)}return r||n}createInstanceOfType(e){return e.initializeForDecoder()}removeChildRefs(e,t){let n=typeof e[Q]!=`string`,r=e[X];e.forEach((i,a)=>{t?.push({ref:e,refId:r,op:Y.DELETE,field:a,value:void 0,previousValue:i}),n&&this.root.removeRef(i[X])})}},wv=av({min:$.float64(),max:$.float64(),bits:$.uint8(),mode:$.uint8()},`QuantizedDescriptor`),Tv=av({name:$.string(),type:$.string(),referencedType:$.number(),childPrimitive:$.string(),quantized:$.ref(wv).optional()},`ReflectionField`),Ev=av({id:$.number(),extendsId:$.number(),fields:$.array(Tv)},`ReflectionType`),Dv=av({types:$.array(Ev),rootType:$.number()},`Reflection`);Dv.encode=function(e,t={offset:0}){let n=e.context,r=new Dv,i=new yv(r),a=n.schemas.get(e.state.constructor);a>0&&(r.rootType=a);let o=new Set,s={},c=e=>{if(e.extendsId===void 0||o.has(e.extendsId)){o.add(e.id),r.types.push(e);let t=s[e.id];t!==void 0&&(delete s[e.id],t.forEach(e=>c(e)))}else s[e.extendsId]===void 0&&(s[e.extendsId]=[]),s[e.extendsId].push(e)};n.schemas.forEach((e,t)=>{let r=new Ev;r.id=Number(e);let i=Object.getPrototypeOf(t);i!==sv&&(r.extendsId=n.schemas.get(i));let a=t[Symbol.metadata];if(a!==i[Symbol.metadata]){let e=a[`~__numFields`]??-1;for(let t=0;t<=e;t++){let e=a[t];if(e===void 0)continue;let i=e.name;if(!Object.prototype.hasOwnProperty.call(a,i))continue;let o=new Tv;o.name=i;let s;if(typeof e.type==`string`)s=e.type;else if(qh(e.type)){let t=e.type.quantized;s=`quantized`;let n=new wv;n.min=t.min,n.max=t.max,n.bits=t.bits,n.mode=+!!t.wrap,o.quantized=n}else{let t;sv.is(e.type)?(s=`ref`,t=e.type):(s=Object.keys(e.type)[0],typeof e.type[s]==`string`?o.childPrimitive=e.type[s]:t=e.type[s]),o.referencedType=t?n.getTypeId(t):-1}o.type=s,r.fields.push(o)}}c(r)});for(let e in s)s[e].forEach(e=>r.types.push(e));return i.encodeAll(t).slice(0,t.offset)},Dv.decode=function(e,t){let n=new Dv;new Cv(n).decode(e,t);let r=new Qh;n.types.forEach(e=>{let t=r.get(e.extendsId)??sv,n=class extends t{};Qh.register(n),r.add(n,e.id)},{});let i=(e,t,n)=>{t.fields.forEach((t,i)=>{let a=n+i;if(t.quantized!==void 0){let n=t.quantized;ag.addField(e,a,t.name,{quantized:Kh({min:n.min,max:n.max,bits:n.bits,mode:n.mode===1?`wrap`:`clamp`})})}else if(t.referencedType!==void 0){let n=t.type,i=r.get(t.referencedType)??t.childPrimitive;n===`ref`?ag.addField(e,a,t.name,i):ag.addField(e,a,t.name,{[n]:i})}else ag.addField(e,a,t.name,t.type)})};return n.types.forEach(e=>{let t=r.get(e.id),a=ag.initialize(t),o=[],s=e;do o.push(s),s=n.types.find(e=>e.id===s.extendsId);while(s);let c=0;o.reverse().forEach(e=>{i(a,e,c),c+=e.fields.length})}),new Cv(new(r.get(n.rootType||0)),r)},Dv.makeEncodable=function(e){let t=e[Symbol.metadata];if(!t)return e;let n=t[Om];if(n===void 0)return e;for(let r=0;r<=n;r++){let n=t[r];n&&ag.defineField(e,t,r,n.name,n.type)}return Object.prototype.hasOwnProperty.call(e,Em)&&delete e[Em],e};function Ov(e){let t=e.root,n=t.callbacks,r=new WeakMap,i;e.triggerChanges=function(e){let t=new Set;for(let r=0,i=e.length;r<i;r++){let i=e[r],a=i.refId,o=i.ref,s=n[a];if(s){if((i.op&Y.DELETE)===Y.DELETE&&sv.isSchema(i.previousValue)){let e=n[i.previousValue[X]]?.[Y.DELETE];for(let t=e?.length-1;t>=0;t--)e[t]()}if(sv.isSchema(o)){if(!t.has(a)){let e=s?.[Y.REPLACE];for(let t=e?.length-1;t>=0;t--)e[t]()}if(s.hasOwnProperty(i.field)){let e=s[i.field];for(let t=e?.length-1;t>=0;t--)e[t](i.value,i.previousValue)}}else{if((i.op&Y.DELETE)===Y.DELETE){if(i.previousValue!==void 0){let e=s[Y.DELETE];for(let t=e?.length-1;t>=0;t--)e[t](i.previousValue,i.dynamicIndex??i.field)}if((i.op&Y.ADD)===Y.ADD){let e=s[Y.ADD];for(let t=e?.length-1;t>=0;t--)e[t](i.value,i.dynamicIndex??i.field)}}else if((i.op&Y.ADD)===Y.ADD&&i.previousValue!==i.value){let e=s[Y.ADD];for(let t=e?.length-1;t>=0;t--)e[t](i.value,i.dynamicIndex??i.field)}if(i.value!==i.previousValue&&(i.value!==void 0||i.previousValue!==void 0)){let e=s[Y.REPLACE];for(let t=e?.length-1;t>=0;t--)e[t](i.value,i.dynamicIndex??i.field)}}t.add(a)}}};function a(e,n){let s=n.instance?.constructor[Symbol.metadata]||e,c=n.instance&&typeof n.instance.forEach==`function`||e&&!sv.is(e);if(s&&!c){let e=function(e,a,o,s){return s&&n.instance[a]!==void 0&&!r.has(i)&&o(n.instance[a],void 0),t.addCallback(e[X],a,o)};return new Proxy({listen:function(t,a,o=!0){if(n.instance)return e(n.instance,t,a,o);{let s=()=>{};return n.onInstanceAvailable((n,c)=>{s=e(n,t,a,o&&c&&!r.has(i))}),()=>s()}},onChange:function(e){return t.addCallback(n.instance[X],Y.REPLACE,e)},bindTo:function(e,r){return r||=Object.keys(s).map(e=>s[e].name),t.addCallback(n.instance[X],Y.REPLACE,()=>{r.forEach(t=>e[t]=n.instance[t])})}},{get(e,t){let r=s[s[t]];if(r){let e=n.instance?.[t];return a(r.type,{instance:e?.[X]!==void 0&&e,parentInstance:n.instance,onInstanceAvailable:(r=>{let i=o(n.instance).listen(t,(e,t)=>{r(e,!1),i?.()},!1);e?.[X]!==void 0&&r(e,!0)})})}return e[t]},has(e,t){return s[t]!==void 0},set(e,t,n){throw Error(`not allowed`)},deleteProperty(e,t){throw Error(`not allowed`)}})}{let e=function(e,n,a){return a&&e.forEach((e,t)=>n(e,t)),t.addCallback(e[X],Y.ADD,(e,t)=>{r.set(n,!0),i=n,n(e,t),r.delete(n),i=void 0})},a=function(e,n){return t.addCallback(e[X],Y.DELETE,n)},o=function(e,n){return t.addCallback(e[X],Y.REPLACE,n)};return new Proxy({onAdd:function(t,a=!0){if(n.instance)return e(n.instance,t,a&&!r.has(i));if(n.onInstanceAvailable){let o=()=>{};return n.onInstanceAvailable((n,s)=>{o=e(n,t,a&&s&&!r.has(i))}),()=>o()}},onRemove:function(e){if(n.instance)return a(n.instance,e);if(n.onInstanceAvailable){let t=()=>{};return n.onInstanceAvailable(n=>{t=a(n,e)}),()=>t()}},onChange:function(e){if(n.instance)return o(n.instance,e);if(n.onInstanceAvailable){let t=()=>{};return n.onInstanceAvailable(n=>{t=o(n,e)}),()=>t()}}},{get(e,t){if(!e[t])throw Error(`Can't access '${t}' through callback proxy. access the instance directly.`);return e[t]},has(e,t){return e[t]!==void 0},set(e,t,n){throw Error(`not allowed`)},deleteProperty(e,t){throw Error(`not allowed`)}})}}function o(e){return a(void 0,{instance:e})}return o}function kv(e,t){e.triggerChanges=t}var Av=class{decoder;uniqueRefIds=new Set;isTriggering=!1;constructor(e){this.decoder=e,this.decoder.triggerChanges=this.triggerChanges.bind(this)}get callbacks(){return this.decoder.root.callbacks}get state(){return this.decoder.state}addCallback(e,t,n){return this.decoder.root.addCallback(e,t,n)}addCallbackOrWaitCollectionAvailable(e,t,n,r,i=!0){let a=()=>{},o=()=>a(),s=e[t];if(!s||s[X]===void 0){let i;return i=this.addCallback(e[X],t,(e,t)=>{e!=null&&(i(),a=this.addCallback(e[X],n,r))}),a=i,o}return i&&=this.isTriggering===!1,n===Y.ADD&&i&&s.forEach((e,t)=>{r(e,t)}),this.addCallback(s[X],n,r)}listen(...e){return typeof e[0]==`string`?this.listenInstance(this.state,e[0],e[1],e[2]):this.listenInstance(e[0],e[1],e[2],e[3])}listenInstance(e,t,n,r=!0){r&&=this.isTriggering===!1;let i=e[t];return r&&i!=null&&n(i,void 0),this.addCallback(e[X],t,n)}onChange(...e){if(e.length===2&&typeof e[0]!=`string`){let t=e[0],n=e[1];return this.addCallback(t[X],Y.REPLACE,n)}return typeof e[0]==`string`?this.addCallbackOrWaitCollectionAvailable(this.state,e[0],Y.REPLACE,e[1]):this.addCallbackOrWaitCollectionAvailable(e[0],e[1],Y.REPLACE,e[2])}onAdd(...e){return typeof e[0]==`string`?this.addCallbackOrWaitCollectionAvailable(this.state,e[0],Y.ADD,e[1],e[2]!==!1):this.addCallbackOrWaitCollectionAvailable(e[0],e[1],Y.ADD,e[2],e[3]!==!1)}onRemove(...e){return typeof e[0]==`string`?this.addCallbackOrWaitCollectionAvailable(this.state,e[0],Y.DELETE,e[1]):this.addCallbackOrWaitCollectionAvailable(e[0],e[1],Y.DELETE,e[2])}bindTo(e,t,n,r=!0){let i=e.constructor[Symbol.metadata];n||=Object.keys(i).filter(e=>!isNaN(Number(e))).map(e=>i[e].name);let a=()=>{for(let r of n){let n=e[r];n!==void 0&&(t[r]=n)}};return r&&a(),this.addCallback(e[X],Y.REPLACE,a)}triggerChanges(e){this.uniqueRefIds.clear(),this.isTriggering=!0;for(let t=0,n=e.length;t<n;t++){let n=e[t],r=n.refId,i=n.ref,a=this.callbacks[r];if(a){if((n.op&Y.DELETE)===Y.DELETE&&sv.isSchema(n.previousValue)){let e=n.previousValue[X],t=this.callbacks[e]?.[Y.DELETE];if(t)for(let e=t.length-1;e>=0;e--)try{t[e]()}catch(e){console.error(e)}}if(sv.isSchema(i)){if(!this.uniqueRefIds.has(r)){let e=a[Y.REPLACE];if(e)for(let t=e.length-1;t>=0;t--)try{e[t]()}catch(e){console.error(e)}}let e=a[n.field];if(e)for(let t=e.length-1;t>=0;t--)try{e[t](n.value,n.previousValue)}catch(e){console.error(e)}}else{let e=n.dynamicIndex??n.field;if((n.op&Y.DELETE)===Y.DELETE){if(n.previousValue!==void 0){let t=a[Y.DELETE];if(t)for(let r=t.length-1;r>=0;r--)try{t[r](n.previousValue,e)}catch(e){console.error(e)}}if((n.op&Y.ADD)===Y.ADD){let t=a[Y.ADD];if(t)for(let r=t.length-1;r>=0;r--)try{t[r](n.value,e)}catch(e){console.error(e)}}}else if((n.op&Y.ADD)===Y.ADD&&n.previousValue!==n.value){let t=a[Y.ADD];if(t)for(let r=t.length-1;r>=0;r--)try{t[r](n.value,e)}catch(e){console.error(e)}}if(n.value!==n.previousValue){let t=a[Y.REPLACE];if(t)for(let r=t.length-1;r>=0;r--)try{t[r](e,n.value)}catch(e){console.error(e)}}}this.uniqueRefIds.add(r)}}this.isTriggering=!1}},jv={get(e){if(e instanceof Cv)return new Av(e);if(`decoder`in e.serializer)return new Av(e.serializer.decoder);throw Error(`Invalid room or decoder`)},getLegacy(e){if(e instanceof Cv)return Ov(e);if(`decoder`in e.serializer)return Ov(e.serializer.decoder);throw Error(`Invalid room or decoder`)},getRawChanges(e,t){return kv(e,t)}};Nh(`map`,{constructor:M_}),Nh(`array`,{constructor:A_}),Nh(`set`,{constructor:P_}),Nh(`collection`,{constructor:N_}),av({dirX:$.int8(),dirY:$.int8(),act:$.uint8(),fire:$.uint8(),aim:$.uint8()});var Mv=()=>$.quantized({min:0,max:560,bits:16}),Nv=av({x:Mv(),y:Mv(),heading:$.float32(),speed:$.float32(),kind:$.uint8(),speedPct:$.uint8(),boostTicks:$.uint8(),cruise:$.uint16().default(0),charge:$.uint8(),ammo:$.uint16().default(l),fireCd:$.uint8().default(0),reloadPct:$.uint16().default(100),ratePct:$.uint16().default(100),shots:$.uint8().default(0),rangePct:$.uint16().default(100),extraShots:$.uint8().default(0),hp:$.uint16(),maxHp:$.uint16(),level:$.uint8(),xp:$.uint16(),alive:$.boolean(),shielded:$.boolean(),name:$.string(),bot:$.boolean(),npc:$.boolean(),hue:$.uint8()}),Pv=av({x:Mv(),y:Mv(),value:$.uint8(),kind:$.uint8().default(0)}),Fv=av({kind:$.uint8(),x:$.uint16(),y:$.uint16(),tick:$.uint32().default(0),ship:$.string().default(``)}),Iv=av({tick:$.uint32().default(0),leader:$.string().default(``),ships:$.map(Nv),loot:$.map(Pv),events:$.map(Fv)}),Lv=[`Barbarossa`,`Kara Murat`,`Mavi Dalga`,`Fırtına`,`Martı`,`Pala`,`Kum Saati`,`Deniz Kızı`,`Tuzlu Su`,`Köpük`,`Yelkenci`,`Kaptan Kanca`,`Rüzgar Gülü`,`Lodos`,`Poyraz`,`Mercan`,`İstavrit`,`Hamsi`,`Çapa`,`Pusula`];function Rv(e){let t=Lv.filter(t=>!e.has(t));return t.length>0?t[Math.floor(Math.random()*t.length)]:`Korsan ${100+Math.floor(Math.random()*900)}`}var zv=30,Bv=10,Vv=50,Hv=70,Uv=.3,Wv=3,Gv=12,Kv=.3,qv=12,Jv=.14,Yv=1.6,Xv=260,Zv=1.5,Qv=1.5,$v=2,ey=10,ty=.45,ny=.5,ry=.75,iy=.75,ay=300,oy=22,sy=.6,cy=10,ly=.1,uy=40,dy=70,fy={hunters:new Map,leader:``,revealed:new Set,fresh:new Set,beacons:[],strikes:[]},py=3,my={x:0,y:0},hy=class{constructor(){this.input={dirX:0,dirY:0,act:0,fire:0,aim:0},this.goal={type:`wander`},this.wanderX=280,this.wanderY=280,this.rethink=0,this.orbit=Math.random()<.5?1:-1,this.aimError=0,this.triggerIn=0,this.superWait=0,this.superPatience=Zv+Math.random()*Qv,this.curious=Math.random()<iy}get huntId(){return this.goal.type===`hunt`?this.goal.id:null}think(e,t,n,r,i,a=fy){this.rethink-=i,this.triggerIn-=i,this.rethink<=0&&(this.rethink=Kv,this.aimError=(Math.random()*2-1)*Jv,this.choose(e,t,n,r,a));let o=this.wanderX,s=this.wanderY,c=.85;this.input.act=0,this.superWait=t.charge>=100?this.superWait+i:0,this.input.fire=0;let l=this.goal;if(l.type===`loot`){let e=r.get(l.id);e?(o=e.x,s=e.y):this.rethink=0}else if(l.type===`hunt`||l.type===`flee`){let e=n.get(l.id);!e||!e.alive?this.rethink=0:l.type===`flee`?(o=t.x+(t.x-e.x),s=t.y+(t.y-e.y),c=1,this.shoot(t,e)):([o,s,c]=this.attackPosition(t,e),this.shoot(t,e),this.superWait>=this.superPatience&&this.wantsSuper(t,e)&&(this.input.act=1,this.superPatience=Zv+Math.random()*Qv))}else Math.hypot(o-t.x,s-t.y)<Bv&&this.pickWaypoint();for(let e of a.strikes){let n=Math.hypot(t.x-e.x,t.y-e.y);if(n<e.r+py){let r=n>.01?n:1;o=t.x+(t.x-e.x)/r*20,s=t.y+(t.y-e.y)/r*20,c=1;break}}return Sy(this.input,t,o,s,c),this.input}choose(e,t,r,i,a){let{hunters:o,leader:s}=a,c=null,l=1/0,u=null,d=1/0;for(let[i,f]of r){if(i===e||!f.alive)continue;let r=Math.hypot(f.x-t.x,f.y-t.y),p=i===s;if(r>Vv*(p?Yv:1)||!A(t.x,t.y,f.x,f.y,a.revealed.has(i))||(!f.npc&&r<l&&(l=r,c=i),f.shielded||a.fresh.has(i)))continue;let m=f.kind===n.fort;if(m&&t.hp<t.maxHp*sy)continue;let h=!f.bot&&!f.npc;if(h&&t.level-f.level>=Wv)continue;let g=(o.get(i)??0)-+(this.huntId===i);if(h&&g>=$v)continue;let _=r+(f.npc?-15:0)+(h?Gv:0)+(p?-40:(f.level-t.level)*6)+g*ey+(m?cy:0);_<d&&(d=_,u=i)}if(c&&t.hp<t.maxHp*Uv){this.goal={type:`flee`,id:c};return}if(u){this.goal={type:`hunt`,id:u};return}if(this.curious){let e=null,n=ay;for(let r of a.beacons){let i=Math.hypot(r.x-t.x,r.y-t.y);i<n&&(n=i,e=r)}if(e&&n>oy){this.goal={type:`wander`},this.wanderX=e.x,this.wanderY=e.y;return}}let f=s&&s!==e?r.get(s):void 0;if(f?.alive&&this.curious&&!a.fresh.has(s)&&Math.hypot(f.x-t.x,f.y-t.y)<Xv){this.goal={type:`wander`},this.wanderX=f.x,this.wanderY=f.y;return}let p=null,m=Hv,h=t.hp<t.maxHp*.6;for(let[e,n]of i){let r=n.kind===L.crate?0:n.kind===L.repair?h?30:-1e3:15,i=Math.hypot(n.x-t.x,n.y-t.y)-r;i<m&&(m=i,p=e)}p?this.goal={type:`loot`,id:p}:(this.goal.type!==`wander`&&this.pickWaypoint(),this.goal={type:`wander`})}attackPosition(e,t){let r=t.x-e.x,i=t.y-e.y,a=Math.hypot(r,i)||1,o=p(e.kind).weapon;if(e.kind===n.viking||!o){let e=Math.min(1.2,a/30);return[t.x+Math.cos(t.heading)*t.speed*e,t.y+Math.sin(t.heading)*t.speed*e,1]}let s=o.range*(e.rangePct/100)*ry,c=Math.max(-1,Math.min(1,(a-s)/8)),l=-i/a*this.orbit*(1-Math.abs(c))+r/a*c,u=r/a*this.orbit*(1-Math.abs(c))+i/a*c;return[e.x+l*20,e.y+u*20,.85]}shoot(e,t){let n=p(e.kind).weapon;if(!n)return;let r=Math.hypot(t.x-e.x,t.y-e.y),[a,o]=by(t,r/i[n.projectile].speed);this.input.aim=be(Math.atan2(o-e.y,a-e.x)+this.aimError),r<=n.range*(e.rangePct/100)*.95&&this.triggerIn<=0&&e.ammo>=1e3&&!t.shielded&&(this.input.fire=1,this.triggerIn=ty+Math.random()*ny)}wantsSuper(e,t){if(e.charge<100)return!1;let r=Math.hypot(t.x-e.x,t.y-e.y);switch(e.kind){case n.viking:return r<22;case n.jonka:return r<38;case n.english:return r<32;default:return!1}}pickWaypoint(){for(let e=0;e<8;e++)if(this.wanderX=zv+Math.random()*500,this.wanderY=zv+Math.random()*500,!y.some(e=>Math.hypot(e.x-this.wanderX,e.y-this.wanderY)<e.r+8))return}},gy=class{constructor(){this.cooldown=1}think(e,t,n,r,a){this.cooldown-=r;let o=p(t.kind).weapon;if(this.cooldown>0||!o)return null;let s=null,c=o.range*.95;for(let[r,i]of n){if(r===e||!i.alive||i.npc||i.shielded)continue;let n=Math.hypot(i.x-t.x,i.y-t.y);n<c&&A(t.x,t.y,i.x,i.y,a.has(r))&&(c=n,s=i)}if(!s)return null;this.cooldown=o.interval;let[l,u]=by(s,c/i[o.projectile].speed);return Math.atan2(u-t.y,l-t.x)+(Math.random()*2-1)*ly}},_y=class{constructor(e,t){this.homeX=e,this.homeY=t,this.input={dirX:0,dirY:0,act:0,fire:0,aim:0},this.angle=Math.random()*Math.PI*2,this.rethink=0,this.preyId=null}think(e,t,n,r,i){if(this.rethink-=r,this.rethink<=0){this.rethink=Kv,this.preyId=null;let r=uy;for(let[a,o]of n){if(a===e||!o.alive||o.npc||o.shielded||i.fresh.has(a)||Math.hypot(o.x-this.homeX,o.y-this.homeY)>dy)continue;let n=Math.hypot(o.x-t.x,o.y-t.y);n<r&&A(t.x,t.y,o.x,o.y,i.revealed.has(a))&&(r=n,this.preyId=a)}}let a=this.preyId?n.get(this.preyId):void 0;if(a?.alive){let[e,n]=by(a,.3);Sy(this.input,t,e,n,1)}else this.angle+=r*.5,Sy(this.input,t,this.homeX+Math.cos(this.angle)*14,this.homeY+Math.sin(this.angle)*14,.6);return this.input}},vy=class{constructor(){this.cooldown=2}think(e,t,n,r,i){if(this.cooldown-=r,this.cooldown>0)return[];this.cooldown=R.kraken.every;let a=[];for(let[r,o]of n){if(r===e||!o.alive||o.npc||o.shielded)continue;let n=Math.hypot(o.x-t.x,o.y-t.y);n<R.kraken.reach&&A(t.x,t.y,o.x,o.y,i.has(r))&&a.push({ship:o,d:n})}return a.sort((e,t)=>e.d-t.d),a.slice(0,R.kraken.perVolley).map(({ship:e})=>by(e,R.kraken.warning*.5))}},yy=class{constructor(e,t){this.destX=e,this.destY=t,this.input={dirX:0,dirY:0,act:0,fire:0,aim:0}}arrived(e){return Math.hypot(this.destX-e.x,this.destY-e.y)<Bv*1.5}think(e,t,n){let r=this.destX-t.x,i=this.destY-t.y,a=Math.hypot(r,i)||1,o=r/a,s=i/a;for(let[r,i]of n){if(r===e||!i.alive||i.npc)continue;let n=t.x-i.x,a=t.y-i.y,c=Math.hypot(n,a);c<24&&c>0&&(o+=n/c*.5,s+=a/c*.5)}return Sy(this.input,t,t.x+o*30,t.y+s*30,1),this.input}};function by(e,t){return E(e.x,e.y,my),[e.x+(Math.cos(e.heading)*e.speed+my.x)*t,e.y+(Math.sin(e.heading)*e.speed+my.y)*t]}var xy=class{constructor(){this.input={dirX:0,dirY:0,act:0,fire:0,aim:0},this.wanderX=280,this.wanderY=280}think(e,t,n){let r=0,i=0;for(let[a,o]of n){if(a===e||!o.alive||o.npc)continue;let n=t.x-o.x,s=t.y-o.y,c=Math.hypot(n,s);c<32&&c>0&&(r+=n/c,i+=s/c)}return r!==0||i!==0?(Sy(this.input,t,t.x+r*30,t.y+i*30,1),this.input):(Math.hypot(this.wanderX-t.x,this.wanderY-t.y)<Bv&&(this.wanderX=zv+Math.random()*500,this.wanderY=zv+Math.random()*500),Sy(this.input,t,this.wanderX,this.wanderY,.6),this.input)}};function Sy(e,t,n,r,i){let a=n-t.x,o=r-t.y,s=Math.hypot(a,o);if(s<.001){e.dirX=0,e.dirY=0;return}a/=s,o/=s;for(let e of y){let n=t.x-e.x,r=t.y-e.y,i=Math.hypot(n,r)-e.r;if(i<qv){let e=(qv-i)/qv,t=Math.hypot(n,r)||1;a+=n/t*e*1.5,o+=r/t*e*1.5}}let c=Math.hypot(a,o)||1;e.dirX=Math.round(a/c*i*100),e.dirY=Math.round(o/c*i*100)}var Cy=y.find(e=>e.style===`volcano`),wy=class{constructor(e){this.host=e,this.running=new Map,this.seq=0,this.shipSeq=0,this.nextIn=R.firstAfter,this.spots=[],this.lastShip=``,e.state.events.clear()}get beacons(){return this.spots}tick(e){if(this.nextIn-=e,this.nextIn<=0&&this.running.size<R.maxActive){let e=this.pick();e&&this.start(e)&&(this.nextIn=R.gap+Math.random()*R.gapSpread)}for(let t of[...this.running.values()])this.update(t,e);this.spots=[...this.running.values()].map(e=>({x:e.view.x,y:e.view.y}))}prune(){for(let e of[...this.host.state.events.keys()])this.running.has(e)||this.host.state.events.delete(e)}taken(e){for(let t of this.running.values())t.loot.delete(e)}start(e){switch(e){case I.treasure:{let[t,n]=this.host.openWater(40);return this.open(e,t,n,R.treasure.linger).view.tick=this.host.state.tick+Math.round(R.treasure.countdown*30),!0}case I.goldShip:{let t=Math.floor(Math.random()*4),n=()=>60+Math.random()*440,[r,i,a,o]=t===0?[12,n(),548,n()]:t===1?[548,n(),12,n()]:t===2?[n(),12,n(),548]:[n(),548,n(),12];if(M(r,i,6))return!1;let s=this.open(e,r,i,R.goldShip.maxSeconds),c=this.host.launch(this.shipId(`gold`),`Hazine Gemisi`,`gold`,r,i,{x:a,y:o});return s.ships.add(this.lastShip),s.view.ship=this.lastShip,c.heading=Math.atan2(o-i,a-r),!0}case I.sharks:{let[t,n]=this.host.openWater(40);if(M(t,n,12))return!1;let r=this.open(e,t,n,R.sharks.seconds);for(let e=0;e<R.sharks.count;e++){let i=e/R.sharks.count*Math.PI*2;this.host.launch(this.shipId(`shark`),`Köpekbalığı`,`shark`,t+Math.cos(i)*5,n+Math.sin(i)*5,{x:t,y:n}),r.ships.add(this.lastShip)}return!0}case I.kraken:{let[t,n]=this.host.openWater(60);if(M(t,n,24)||Math.hypot(t-j.x,n-j.y)<j.range+40||Math.hypot(t-T.x,n-T.y)<T.r+30)return!1;let r=this.open(e,t,n,R.kraken.seconds);return this.host.launch(this.shipId(`kraken`),`Kraken`,`kraken`,t,n,{x:t,y:n}),r.ships.add(this.lastShip),r.view.ship=this.lastShip,!0}case I.eruption:return this.open(e,Cy.x,Cy.y,R.eruption.seconds),!0;case I.pearls:{let t=this.open(e,S.lagoon.x,S.lagoon.y,R.pearls.seconds),n=[{x:S.lagoon.x,y:S.lagoon.y,r:10},{x:S.cove.x,y:S.cove.y,r:8},{x:S.graveyard.x,y:S.graveyard.y,r:26}];for(let e=0;e<R.pearls.count;e++){let r=n[e%n.length];for(let e=0;e<8;e++){let e=Math.random()*Math.PI*2,n=Math.sqrt(Math.random())*r.r,i=r.x+Math.cos(e)*n,a=r.y+Math.sin(e)*n;if(!M(i,a,2)){t.loot.add(this.host.dropLoot(i,a,L.pearl,R.pearls.value));break}}}return!0}}return!1}update(e,t){let n=this.host.state;switch(e.left-=t,e.kind){case I.treasure:e.view.tick>0?n.tick>=e.view.tick&&this.dropTreasure(e):(e.left<=0||e.loot.size===0)&&this.close(e);return;case I.goldShip:case I.kraken:{let t=n.ships.get(e.view.ship);if(!t||!t.alive||e.left<=0||e.kind===I.goldShip&&this.host.arrived(e.view.ship)){this.close(e);return}this.follow(e,t.x,t.y);return}case I.sharks:{let t=0,r=0;for(let i of[...e.ships]){let a=n.ships.get(i);!a||!a.alive?(this.host.removeShip(i),e.ships.delete(i)):(t+=a.x,r+=a.y)}if(e.ships.size===0||e.left<=0){this.close(e);return}this.follow(e,t/e.ships.size,r/e.ships.size);return}case I.eruption:{let n=R.eruption;for(e.next-=t;e.next<=0&&e.left>0;){e.next+=n.every;for(let e=0;e<6;e++){let e=Math.random()*Math.PI*2,t=n.near+Math.random()*(n.far-n.near),r=Cy.x+Math.cos(e)*t,i=Cy.y+Math.sin(e)*t;if(!(r<6||i<6||r>554||i>554||M(r,i,2))){this.host.strike(r,i,n.radius,n.damage,n.warning,`volcano`,z.lava,Math.random()<n.gemChance);break}}}e.left<=0&&this.close(e);return}case I.pearls:(e.left<=0||e.loot.size===0)&&this.close(e);return}}dropTreasure(e){let t=R.treasure,{x:n,y:r}=e.view;e.loot.add(this.host.dropLoot(n,r,L.chest,t.chest));for(let i=0;i<t.coins;i++){let a=i/t.coins*Math.PI*2,o=n+Math.cos(a)*7,s=r+Math.sin(a)*7;M(o,s,1)||e.loot.add(this.host.dropLoot(o,s,L.coin,t.coinValue))}e.view.tick=0,e.left=t.linger}pick(){let e=new Set([...this.running.values()].map(e=>e.kind)),t=Object.entries(R.weights).map(([e,t])=>[Number(e),t]).filter(([t])=>!e.has(t)),n=t.reduce((e,[,t])=>e+t,0),r=Math.random()*n;for(let[e,n]of t)if(r-=n,r<0)return e;return t[0]?.[0]??null}open(e,t,n,r){let i=`e${++this.seq}`,a=new Fv({kind:e,x:Math.round(t),y:Math.round(n),tick:0,ship:``});this.host.state.events.set(i,a);let o={id:i,kind:e,left:r,loot:new Set,ships:new Set,next:0,view:a};return this.running.set(i,o),o}close(e){for(let t of e.ships)this.host.removeShip(t);this.host.state.events.delete(e.id),this.running.delete(e.id)}follow(e,t,n){let r=Math.round(t),i=Math.round(n);e.view.x!==r&&(e.view.x=r),e.view.y!==i&&(e.view.y=i)}shipId(e){return this.lastShip=`${e}-${++this.shipSeq}`,this.lastShip}};function Ty(e,t){let n=p(e.kind).weapon;if(!n)return null;let r=n.count+e.extraShots,i=n.count>1?n.spread*(r/n.count):n.spread;return{kind:n.projectile,range:n.range*(e.rangePct/100),shots:Dy(e,t,r,i,n.muzzle)}}function Ey(e,t){let n=p(e.kind),r=n.super;return!r||r.kind===a.berserk?null:{kind:r.projectile,range:r.range*(e.rangePct/100),shots:Dy(e,t,r.count,r.spread,n.radius)}}function Dy(e,t,n,r,i){let a=[];for(let o=0;o<n;o++){let s=t+(n>1?r*(o/(n-1)-.5):0);a.push(e.x+Math.cos(s)*i,e.y+Math.sin(s)*i,s)}return a}var Oy={gun:0,super:1,ram:2},ky={human:n.viking,bot:n.viking,merchant:n.merchant,fort:n.fort,gold:n.goldShip,shark:n.shark,kraken:n.kraken},Ay=new Set([`gold`,`shark`,`kraken`]),jy={volcano:`Volkan`},My=e=>e===n.fort||e===n.kraken,Ny=40,Py=.35,Fy=30,Iy=14,Ly=3,Ry=45,zy=8e3,By=3,Vy=1.2,Hy=1.2,Uy=.35,Wy=8,Gy=20,Ky=16,qy={dirX:0,dirY:0,act:0,fire:0,aim:0},Jy=class{constructor(e,t){this.state=e,this.events=t,this.runtime=new Map,this.projectiles=[],this.volleySeq=0,this.lootSeq=0,this.botSeq=0,this.now=0,this.revealed=new Set,this.fresh=new Set,this.strikes=[],this.sea={hunters:new Map,leader:``,revealed:this.revealed,fresh:this.fresh,beacons:[],strikes:this.strikes},this.adoptRestoredShips();for(let e=0;e<6;e++)this.state.ships.has(`npc-${e}`)||this.addShip(`npc-${e}`,`Tüccar`,`merchant`);this.state.ships.has(`fort`)||this.addShip(`fort`,`Kurukafa Kalesi`,`fort`),this.topUpCrates(),this.director=new wy(this.seaHost())}adoptRestoredShips(){this.adoptStrays();for(let e of this.state.loot.keys()){let t=Number(/^l(\d+)$/.exec(e)?.[1]);t>this.lootSeq&&(this.lootSeq=t)}}addPlayer(e,t){let n=typeof t==`string`?t.trim().slice(0,Ky):``;return this.addShip(e,n||`Kaptan`,`human`)}removeShip(e){this.runtime.delete(e),this.state.ships.delete(e)}setAdrift(e,t){let n=this.runtime.get(e);n&&(n.adrift=t)}get humans(){let e=0;for(let t of this.runtime.values())t.role===`human`&&e++;return e}fillBots(){let e=this.humans,t=Math.max(0,Math.min(20-e,30-e)),n=[...this.runtime.entries()].filter(([,e])=>e.role===`bot`).map(([e])=>e);for(let e=n.length;e<t;e++){let e=new Set([...this.state.ships.values()].map(e=>e.name));this.addShip(`bot-${++this.botSeq}`,Rv(e),`bot`)}n.sort((e,t)=>(this.state.ships.get(e)?.xp??0)-(this.state.ships.get(t)?.xp??0));for(let e=n.length;e>t;e--)this.removeShip(n[n.length-e])}spawn(e,t,n){let r=this.state.ships.get(e),i=this.runtime.get(e);r&&i&&!r.alive&&i.role===`human`&&(Ue(Number(t))&&(i.kind=Number(t)),i.build=ot(n),this.reset(r,i))}adoptStrays(){let e=null;for(let[t,n]of this.state.ships)this.runtime.has(t)||(e??=[]).push([t,n]);for(let[t,r]of e??[]){if(r.kind===n.goldShip||r.kind===n.shark||r.kind===n.kraken){this.state.ships.delete(t);continue}let e=r.kind===n.fort?`fort`:r.npc?`merchant`:r.bot?`bot`:`human`,i=this.newRuntime(e);Ue(r.kind)&&(i.kind=r.kind),i.adrift=e===`human`,this.runtime.set(t,i);let a=Number(/^bot-(\d+)$/.exec(t)?.[1]);a>this.botSeq&&(this.botSeq=a)}this.director?.prune()}tick(t,n){this.adoptStrays(),this.state.tick++,this.now=e(this.state.tick);let r=this.state.ships,i=new Map;this.revealed.clear(),this.fresh.clear();for(let[e,t]of this.runtime){let n=t.brain instanceof hy&&r.get(e)?.alive?t.brain.huntId:null;n&&i.set(n,(i.get(n)??0)+1),t.revealLeft>0&&this.revealed.add(e),t.grace>0&&this.fresh.add(e)}this.sea.hunters=i,this.sea.leader=this.state.leader,this.sea.beacons=this.director.beacons;for(let[e,i]of r){let a=this.runtime.get(e),o=a.role===`human`?n(e):void 0;if(!i.alive){if(o)for(let e of o);}else if(a.role===`human`){if(a.adrift)Ce(i,qy,t);else if(o)for(let n of o){let r=Ce(i,n,t);r&&this.fire(e,i,a,r,n.aim??0)}}else if(a.brain instanceof hy){let n=a.brain.think(e,i,r,this.state.loot,t,this.sea),o=Ce(i,n,t);o&&this.fire(e,i,a,o,n.aim??0)}else if(a.brain instanceof xy||a.brain instanceof yy)Ce(i,a.brain.think(e,i,r),t);else if(a.brain instanceof _y)Ce(i,a.brain.think(e,i,r,t,this.sea),t);else if(a.brain instanceof gy){let n=a.brain.think(e,i,r,t,this.revealed);n!==null&&this.fireFort(e,i,n)}else if(a.brain instanceof vy){let n=R.kraken;for(let[o,s]of a.brain.think(e,i,r,t,this.revealed))this.strike(o,s,n.radius,n.damage,n.warning,e,z.tentacle,!1)}}this.collide(t),this.advanceProjectiles(t),this.landStrikes(),this.collectLoot(),this.discover(),this.upkeep(t),this.director.tick(t)}fire(e,t,n,r,i){let a=P(i);if(r&2){let i=r&1?t.shots-1&255:t.shots,o=Ey(t,a),s=p(t.kind).super;o&&s&&this.launch(e,i,o,Math.round(s.damage*n.mods.damageMul*n.mods.superMul),Oy.super)}if(r&1){let r=Ty(t,a),i=p(t.kind).weapon;r&&i&&this.launch(e,t.shots,r,Math.max(1,Math.round(i.damage*n.mods.damageMul)),Oy.gun)}t.shielded&&(t.shielded=!1,n.shieldLeft=0),n.revealLeft=O}fireFort(e,t,n){let r=Ty(t,n),i=p(t.kind).weapon;r&&i&&(t.shots=t.shots+1&255,this.launch(e,t.shots,r,i.damage,Oy.gun))}launch(e,t,{kind:n,range:r,shots:a},o,s){let c=++this.volleySeq,l=i[n];for(let t=0;t<a.length/3;t++){let n=a[t*3],i=a[t*3+1],u=a[t*3+2],d=Math.cos(u),f=Math.sin(u);this.projectiles.push({volley:c,index:t,owner:e,x:n,y:i,dx:d,dy:f,speed:l.speed,radius:l.radius,left:te(n,i,d,f,r),damage:o,blow:s})}this.events.volley({v:c,o:e,n:t,s:+(s===Oy.super),k:n,t:this.now,r:Xy(r),p:a.map(Xy)})}advanceProjectiles(e){let t=this.state.ships,n=0;for(let r of this.projectiles){let i=Math.min(r.speed*e,r.left),a=null,o=null,s=i;for(let[e,n]of t){if(e===r.owner||!n.alive||n.shielded)continue;let t=Yy(r.x,r.y,r.dx,r.dy,i,n.x,n.y,_(n.kind,n.level)+r.radius);t!==null&&t<s&&(s=t,a=e,o=n)}if(r.x+=r.dx*s,r.y+=r.dy*s,r.left-=s,a&&o){let t=Math.round(this.now-(1-s/Math.max(i,1e-6))*e*1e3),n=this.hitAmount(a,o,r.damage,r.owner);this.events.hit({v:r.volley,i:r.index,a:r.owner,s:a,d:n,x:Xy(r.x),y:Xy(r.y),t}),this.damage(a,o,n,r.owner,r.blow)}else r.left>1e-6&&(this.projectiles[n++]=r)}this.projectiles.length=n}collide(e){let t=[...this.state.ships.entries()].filter(([,e])=>e.alive);for(let t of this.runtime.values())for(let[n,r]of t.ramCooldowns)r-e<=0?t.ramCooldowns.delete(n):t.ramCooldowns.set(n,r-e);for(let e=0;e<t.length;e++)for(let n=e+1;n<t.length;n++){let[r,i]=t[e],[a,o]=t[n],s=_(i.kind,i.level),c=_(o.kind,o.level),l=o.x-i.x,u=o.y-i.y,d=Math.hypot(l,u);if(d>=s+c||d===0)continue;let f=l/d,p=u/d,m=s+c-d,h=My(i.kind)?0:My(o.kind)?1:c/(s+c);i.x-=f*m*h,i.y-=p*m*h,o.x+=f*m*(1-h),o.y+=p*m*(1-h),this.ram(r,i,a,o,f,p),this.ram(a,o,r,i,-f,-p)}}ram(e,t,n,r,i,a){let o=(Math.cos(t.heading)*i+Math.sin(t.heading)*a)*t.speed;if(o<Ly)return;let s=this.runtime.get(e);if(s.ramCooldowns.has(n))return;s.ramCooldowns.set(n,Vy);let c=t.boostTicks>0?2:1,l=Math.min(Ry,Math.round(o*p(t.kind).ram*s.mods.ramMul*c));t.speed*=.5,t.cruise=0;let u=l>0?this.hitAmount(n,r,l,e):0;u>0&&(this.events.hit({v:0,i:0,a:e,s:n,d:u,x:Xy((t.x+r.x)/2),y:Xy((t.y+r.y)/2),t:this.now}),this.damage(n,r,u,e,Oy.ram))}hitAmount(e,t,n,r){if(!t.alive||t.shielded)return 0;let i=this.runtime.get(e),a=this.state.ships.get(r),o=a?t.level-a.level:0,s=o>0?1+Math.min(Pe.max,o*Pe.perLevel):1;return Math.max(1,Math.round(n*s*(1-i.mods.armor)))}damage(e,t,n,r,i){if(!t.alive||t.shielded||n<=0)return;let a=this.runtime.get(e);a.lastHitBy=r,a.lastBlow=i,a.calm=0,t.hp=Math.max(0,t.hp-n);let o=this.state.ships.get(r),s=o?.name??jy[r];if(a.role===`human`&&s){let e=a.recent.get(r);e&&this.now-e.at<zy?(e.damage+=n,e.at=this.now):a.recent.set(r,{name:s,damage:n,at:this.now})}let c=this.runtime.get(r);c&&c.grace>0&&(a.role===`human`||a.role===`bot`)&&(c.grace=0),o&&c&&o.alive&&(p(o.kind).super&&(o.charge=Math.min(100,o.charge+Math.round(n*u*c.mods.chargeMul))),c.mods.lifesteal>0&&(o.hp=Math.min(o.maxHp,o.hp+Math.round(n*c.mods.lifesteal)))),t.hp<=0&&this.sink(e,t,r)}sink(e,t,n){let r=this.runtime.get(e),i=this.state.ships.get(n);t.alive=!1,t.speed=0;let a=this.state.leader===e;a&&(this.state.leader=``);let o=r.role===`human`||r.role===`bot`,s=r.role===`merchant`?Ne.merchant:r.role===`fort`?B.loot:r.role===`gold`?R.goldShip.loot:r.role===`shark`?R.sharks.loot:r.role===`kraken`?R.kraken.loot:Math.floor((Math.floor(t.xp*Re)+4)*(a?Fe.lootMul:1)),c=r.role===`kraken`?R.kraken.chest:o&&s>=Ny?Math.round(s*Py):0;if(c>0&&this.dropLoot(t.x,t.y,L.chest,c),this.spillCoins(t.x,t.y,o?s-c:s,o?8:14),i&&i.alive&&o){let e=i.level-t.level>=Ne.bullyGap?.5:1;this.grantXp(n,i,Math.round((Ne.kill+Ne.killPerLevel*t.level)*e)+(a?Fe.killXp:0))}if(this.events.sunk({s:e,k:i?n:null,sn:t.name,kn:i?.name??``,l:+!!a,x:Xy(t.x),y:Xy(t.y),t:this.now}),r.role===`human`){let a=[...r.recent.values()].filter(e=>this.now-e.at<zy).sort((e,t)=>t.damage-e.damage).slice(0,By).map(e=>[e.name,e.damage]);this.events.dead(e,{by:i?.name??jy[n]??`deniz`,kind:i?.kind??-1,how:r.lastBlow,level:t.level,hits:a}),r.recent.clear()}else Ay.has(r.role)||(r.respawnLeft=r.role===`fort`?B.respawn:4)}collectLoot(){for(let[e,t]of this.state.ships){if(!t.alive||t.npc)continue;let n=_(t.kind,t.level)+Hy;for(let[r,i]of this.state.loot)Math.abs(i.x-t.x)>n||Math.abs(i.y-t.y)>n||Math.hypot(i.x-t.x,i.y-t.y)>n||i.kind===L.repair&&t.hp>=t.maxHp||(this.state.loot.delete(r),this.director.taken(r),i.kind===L.repair?t.hp=Math.min(t.maxHp,t.hp+Math.round(t.maxHp*i.value/100)):this.grantXp(e,t,i.kind===L.crate?Ae(t.level):i.value))}}discover(){for(let[e,t]of this.state.ships){if(!t.alive||t.npc)continue;let n=C(t.x,t.y);if(n<0)continue;let r=this.runtime.get(e),i=1<<n;r.found&i||(r.found|=i,this.grantXp(e,t,3),r.role===`human`&&this.events.found?.(e,{p:n,xp:3}))}}grantXp(e,t,n){t.xp=Math.min(65535,t.xp+n);let r=ke(t.xp),i=this.runtime.get(e);for(;t.level<r;)t.level++,i.mods.hpMul+=Le.hp*Ie(t.level),i.mods.damageMul+=Le.damage*Ie(t.level),st(t.kind,i.build,t.level)?.apply(i.mods),this.applyModifiers(t,i),t.hp=Math.min(t.maxHp,t.hp+Math.round(t.maxHp*Le.heal))}applyModifiers(e,t){let n=Math.round(p(e.kind).maxHp*t.mods.hpMul);e.hp=Math.min(n,e.hp+Math.max(0,n-e.maxHp)),e.maxHp=n,e.speedPct=t.mods.speedPct,e.reloadPct=Math.min(1e3,Math.round(100/t.mods.cooldownMul)),e.ratePct=Math.min(1e3,Math.round(100*t.mods.fireRate)),e.rangePct=Math.min(1e3,Math.round(100*t.mods.rangeMul)),e.extraShots=Math.min(20,t.mods.extraProjectiles)}crownLeader(){let e=``,t=-1;for(let[n,r]of this.state.ships)!r.alive||r.npc||r.level<Fe.minLevel||r.xp>t&&(t=r.xp,e=n);e!==this.state.leader&&(this.state.leader=e)}upkeep(e){this.crownLeader();for(let[n,r]of this.state.ships){let i=this.runtime.get(n);if(i.revealLeft>0&&(i.revealLeft-=e),i.grace>0&&(i.grace-=e),!r.alive){i.respawnLeft>=0&&(i.respawnLeft-=e,i.respawnLeft<0&&this.reset(r,i));continue}i.shieldLeft>0&&(i.shieldLeft-=e,i.shieldLeft<=0&&(r.shielded=!1)),i.calm+=e;let a=i.role!==`fort`&&i.role!==`gold`&&i.role!==`kraken`,o=i.mods.regen+(a&&i.calm>=5?r.maxHp*t:0);if(o>0&&r.hp<r.maxHp){i.regenCarry+=o*e;let t=Math.floor(i.regenCarry);t>0&&(r.hp=Math.min(r.maxHp,r.hp+t),i.regenCarry-=t)}}this.topUpCrates()}topUpCrates(){let e=0,t=0;for(let n of this.state.loot.values())n.kind===L.crate?e++:n.kind===L.repair&&t++;for(;e<70;e++){let[e,t]=Math.random()<Uy?this.richWater():this.openWater(8);this.dropLoot(e,t,L.crate,Ne.crate)}for(;t<Te.count;t++){let[e,t]=this.openWater(20);this.dropLoot(e,t,L.repair,Te.heal)}}richWater(){let e=ee.reduce((e,t)=>e+t.weight,0),t=Math.random()*e,n=ee.find(e=>(t-=e.weight)<0)??ee[0];for(let e=0;e<10;e++){let e=Math.random()*Math.PI*2,t=Math.sqrt(Math.random())*n.r,r=Zy(n.x+Math.cos(e)*t),i=Zy(n.y+Math.sin(e)*t);if(!M(r,i,2))return[r,i]}return this.openWater(8)}spillCoins(e,t,n,r=8){let i=[],a=Math.max(1,Math.min(r,Math.ceil(n/6))),o=n;for(let r=0;r<a;r++){let s=Math.max(1,Math.min(255,r===a-1?o:Math.round(n/a)));o-=s;let c=r/a*Math.PI*2+Math.random()*.6,l=2+Math.random()*5,u=Zy(e+Math.cos(c)*l),d=Zy(t+Math.sin(c)*l);M(u,d,1)||i.push(this.dropLoot(u,d,L.coin,s))}return i}dropLoot(e,t,n,r){let i=`l${++this.lootSeq}`;return this.state.loot.set(i,new Pv({x:Zy(e),y:Zy(t),value:Math.max(1,Math.min(255,Math.round(r))),kind:n})),i}seaHost(){return{state:this.state,launch:(e,t,n,r,i,a)=>{let o=this.addShip(e,t,n),s=this.runtime.get(e);return n===`gold`&&(s.brain=new yy(a.x,a.y)),n===`shark`&&(s.brain=new _y(a.x,a.y)),o.x=r,o.y=i,o},removeShip:e=>this.removeShip(e),dropLoot:(e,t,n,r)=>this.dropLoot(e,t,n,r),strike:(e,t,n,r,i,a,o,s)=>this.strike(e,t,n,r,i,a,o,s),openWater:e=>this.openWater(e),arrived:e=>{let t=this.runtime.get(e)?.brain,n=this.state.ships.get(e);return t instanceof yy&&n!==void 0&&t.arrived(n)}}}strike(e,t,n,r,i,a,o,s){let c=this.now+Math.round(i*1e3);this.strikes.push({x:e,y:t,r:n,damage:r,at:c,by:a,kind:o,gem:s}),this.events.strike?.({x:Xy(e),y:Xy(t),r:n,t:c,k:o})}landStrikes(){let e=0;for(let t of this.strikes)if(t.at>this.now)this.strikes[e++]=t;else{for(let[e,n]of this.state.ships){if(!n.alive||e===t.by||My(n.kind)||Math.hypot(n.x-t.x,n.y-t.y)>t.r+_(n.kind,n.level))continue;let r=this.hitAmount(e,n,t.damage,t.by);r<=0||(this.events.hit({v:0,i:0,a:t.by,s:e,d:r,x:Xy(n.x),y:Xy(n.y),t:this.now}),this.damage(e,n,r,t.by,Oy.gun))}t.gem&&!M(t.x,t.y,1)&&this.dropLoot(t.x,t.y,L.gem,R.eruption.gemValue)}this.strikes.length=e}addShip(e,t,n){let r=new Nv({x:280,y:280,heading:0,speed:0,kind:ky[n],speedPct:100,boostTicks:0,cruise:0,charge:0,ammo:l,fireCd:0,reloadPct:100,ratePct:100,shots:0,rangePct:100,extraShots:0,hp:1,maxHp:1,level:1,xp:0,alive:!1,shielded:!1,name:t,bot:n!==`human`,npc:n!==`human`&&n!==`bot`,hue:Math.floor(Math.random()*256)}),i=this.newRuntime(n);return this.runtime.set(e,i),this.state.ships.set(e,r),n!==`human`&&this.reset(r,i),r}newRuntime(e){return{role:e,mods:ze(),shieldLeft:0,respawnLeft:-1,regenCarry:0,calm:0,lastHitBy:null,ramCooldowns:new Map,recent:new Map,lastBlow:Oy.gun,kind:ky[e],build:at(),brain:e===`bot`?new hy:e===`merchant`?new xy:e===`fort`?new gy:e===`kraken`?new vy:e===`gold`?new yy(280,280):e===`shark`?new _y(280,280):null,adrift:!1,found:0,revealLeft:0,grace:0}}reset(e,t){let[n,r]=t.role===`fort`?[j.x,j.y]:this.spawnPoint();t.mods=ze(),t.respawnLeft=-1,t.lastHitBy=null,t.recent.clear(),t.regenCarry=0,t.calm=0,t.found=0,t.revealLeft=0,t.grace=t.role===`human`?Gy:0,t.role===`bot`&&(t.kind=He[Math.floor(Math.random()*He.length)],t.build=ct()),e.kind=t.kind,e.x=n,e.y=r,e.heading=Math.random()*Math.PI*2,e.speed=0,e.speedPct=100,e.boostTicks=0,e.cruise=0,e.charge=0,e.ammo=l,e.fireCd=0,e.reloadPct=100,e.ratePct=100,e.rangePct=100,e.extraShots=0,e.level=1,e.xp=0,e.maxHp=p(e.kind).maxHp,e.hp=e.maxHp,e.alive=!0,e.shielded=t.role===`human`||t.role===`bot`,t.shieldLeft=e.shielded?3:0}spawnPoint(){let e=this.openWater(Fy),t=-1/0;for(let n=0;n<Iy;n++){let[n,r]=this.openWater(Fy);if(Math.hypot(n-j.x,r-j.y)<j.range+Wy||Math.hypot(n-T.x,r-T.y)<T.r+Wy)continue;let i=1/0;for(let e of this.state.ships.values()){if(!e.alive)continue;let t=Math.hypot(e.x-n,e.y-r)/(1+e.level*.15);i=Math.min(i,t)}i>t&&(t=i,e=[n,r])}return e}openWater(e){for(let t=0;t<30;t++){let t=e+Math.random()*(560-e*2),n=e+Math.random()*(560-e*2);if(!M(t,n,6))return[t,n]}return[e,e]}get projectileCount(){return this.projectiles.length}giveXp(e,t){let n=this.state.ships.get(e);n&&this.grantXp(e,n,t)}startEvent(e){for(let t=0;t<100;t++)if(this.director.start(I[e]))return}get pendingStrikes(){return this.strikes}unshield(e){let t=this.state.ships.get(e),n=this.runtime.get(e);t&&n&&(t.shielded=!1,n.shieldLeft=0,n.grace=0)}};function Yy(e,t,n,r,i,a,o,s){let c=e-a,l=t-o,u=c*c+l*l-s*s;if(u<=0)return 0;let d=c*n+l*r;if(d>0)return null;let f=d*d-u;if(f<0)return null;let p=-d-Math.sqrt(f);return p<=i?p:null}var Xy=e=>Math.round(e*100)/100,Zy=e=>Math.min(558,Math.max(2,e)),Qy={[n.viking]:`Hızlı · yakın dövüş · çarpma`,[n.english]:`Ağır zırh · uzun menzil`,[n.jonka]:`Dengeli · geniş ok yelpazesi`},$y=`
  #menu { position: fixed; inset: 0; z-index: 6; display: none; overflow-y: auto; -webkit-overflow-scrolling: touch;
    background: linear-gradient(180deg, #06243acc, #06243a99 40%, #06243ae6); color: #eaf6ff;
    font-family: system-ui, -apple-system, "Segoe UI", sans-serif; touch-action: pan-y; }
  #menu.show { display: block; }
  #menu .wrap { box-sizing: border-box; max-width: 560px; min-height: 100%; margin: 0 auto; display: flex; flex-direction: column;
    gap: 14px; justify-content: center; padding: calc(16px + env(safe-area-inset-top)) 16px calc(18px + env(safe-area-inset-bottom)); }
  #menu h1 { margin: 0; text-align: center; font: 900 clamp(34px, 9vw, 52px)/1 system-ui, sans-serif; letter-spacing: 1px;
    color: #ffd24e; text-shadow: 0 3px 0 #b5651d, 0 6px 14px #0008; }
  #menu .death { padding: 10px 14px; border-radius: 12px; background: #5a1a12d9; text-align: center; }
  #menu .death b { display: block; font-size: 20px; color: #ff9a7b; }
  #menu .death strong { color: #fff; }
  #menu .death .recap { margin-top: 4px; font-size: 12px; opacity: .85; }
  #menu .death .recap em { font-style: normal; font-weight: 800; color: #ff9a7b; }
  #menu .death .sub { margin-top: 4px; font-size: 12px; opacity: .7; }
  #menu .points { align-self: center; padding: 5px 12px; border-radius: 999px; background: #0009; font-weight: 700; font-size: 13px; }
  #menu .points span { color: #ffd24e; }
  #menu .ships { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; }
  #menu .ship { padding: 10px 8px; border-radius: 14px; border: 2px solid #ffffff30; background: #0b2a40e6; color: #fff;
    text-align: left; cursor: pointer; font: 12px/1.3 system-ui, sans-serif; }
  #menu .ship.on { border-color: #ffd24e; box-shadow: 0 0 0 2px #ffd24e55, 0 6px 16px #0007; background: #12405ee6; }
  #menu .ship b { display: block; font-size: 16px; margin-bottom: 2px; }
  #menu .ship i { display: block; font-style: normal; opacity: .75; min-height: 2.6em; }
  #menu .stat { display: flex; align-items: center; gap: 6px; margin-top: 5px; font-size: 10px; opacity: .9; }
  #menu .stat em { flex: 0 0 38px; font-style: normal; }
  #menu .stat u { flex: 1; height: 5px; border-radius: 3px; background: #ffffff22; overflow: hidden; text-decoration: none; }
  #menu .stat u s { display: block; height: 100%; background: #6bd0ff; }
  #menu button.big { padding: 15px; border: 0; border-radius: 14px; background: #ffd24e; color: #1a1205; cursor: pointer;
    font: 900 20px system-ui, sans-serif; letter-spacing: .5px; box-shadow: 0 4px 0 #b5861d; }
  #menu button.big:active { transform: translateY(2px); box-shadow: 0 2px 0 #b5861d; }
  #menu button.plain { padding: 11px; border: 2px solid #ffffff40; border-radius: 12px; background: #0b2a40e6; color: #fff;
    cursor: pointer; font: 800 15px system-ui, sans-serif; }
  #menu .note { text-align: center; font-size: 12px; opacity: .7; }
  #menu .head { display: flex; align-items: center; justify-content: space-between; gap: 8px; }
  #menu .head h2 { margin: 0; font-size: 20px; }
  #menu .back { padding: 8px 12px; border: 0; border-radius: 10px; background: #0009; color: #fff; cursor: pointer; font: 700 14px system-ui, sans-serif; }
  #menu .tier { display: grid; grid-template-columns: 40px repeat(3, 1fr); gap: 6px; align-items: stretch; }
  #menu .tier > span { align-self: center; font-weight: 800; font-size: 12px; color: #ffd24e; text-align: center; }
  #menu .opt { position: relative; padding: 7px 6px 7px 8px; border-radius: 10px; border: 2px solid #ffffff25; background: #0b2a40e6;
    color: #fff; text-align: left; cursor: pointer; font: 11px/1.25 system-ui, sans-serif; }
  #menu .opt b { display: block; font-size: 12px; margin-bottom: 2px; }
  #menu .opt sup { position: absolute; right: 5px; top: 4px; font-size: 10px; font-weight: 800; opacity: .6; }
  #menu .opt.on { border-color: #ffd24e; background: #12405ee6; box-shadow: 0 0 0 2px #ffd24e40; }
  #menu .opt.locked { opacity: .55; }
  #menu .opt.locked .cost { display: block; margin-top: 3px; font-weight: 800; color: #ffd24e; }
  #menu .opt .cost { display: none; }
  #menu .opt.denied { animation: deny .3s; }
  @keyframes deny { 25% { transform: translateX(-4px); } 75% { transform: translateX(4px); } }
  @media (max-height: 520px) {
    #menu .wrap { gap: 8px; }
    #menu h1 { font-size: 30px; }
    #menu .ship i { min-height: 0; }
    #menu button.big { padding: 10px; }
  }
`,eb=class{constructor(e,t){this.profile=e,this.sail=t,this.root=document.createElement(`div`),this.view=`main`,this.death=null;let n=document.createElement(`style`);n.textContent=$y,document.head.appendChild(n),this.root.id=`menu`,this.root.addEventListener(`pointerdown`,e=>e.stopPropagation()),document.body.appendChild(this.root),addEventListener(`keydown`,e=>{this.visible&&(e.code===`Enter`?this.setSail():this.view===`main`&&[`Digit1`,`Digit2`,`Digit3`].includes(e.code)&&(this.profile.kind=He[Number(e.code.slice(5))-1],this.render()))})}get visible(){return this.root.classList.contains(`show`)}show(e){this.death=e,this.view=`main`,this.render(),this.root.classList.add(`show`)}hide(){this.root.classList.remove(`show`)}setSail(){let e=this.profile.kind;this.hide(),this.sail(e,this.profile.build(e))}render(){this.root.innerHTML=`<div class="wrap">${this.view===`main`?this.mainView():this.treeView()}</div>`,this.root.querySelector(`[data-sail]`)?.addEventListener(`click`,()=>this.setSail()),this.root.querySelector(`[data-tree]`)?.addEventListener(`click`,()=>{this.view=`tree`,this.render()}),this.root.querySelector(`[data-back]`)?.addEventListener(`click`,()=>{this.view=`main`,this.render()}),this.root.querySelectorAll(`[data-kind]`).forEach(e=>e.addEventListener(`click`,()=>{this.profile.kind=Number(e.dataset.kind),this.render()})),this.root.querySelectorAll(`[data-tier]`).forEach(e=>e.addEventListener(`click`,()=>{this.profile.choose(this.profile.kind,Number(e.dataset.tier),Number(e.dataset.option))?this.render():(e.classList.remove(`denied`),e.offsetWidth,e.classList.add(`denied`))}))}mainView(){let e=this.profile.kind,t=e=>Math.max(...He.map(e)),n=t(e=>s[e].maxHp),r=t(e=>s[e].handling.maxSpeed),i=t(e=>s[e].weapon?.range??0),a=He.map(t=>{let a=s[t],o=(e,t)=>`<div class="stat"><em>${e}</em><u><s style="width:${Math.round(Math.min(1,t)*100)}%"></s></u></div>`;return`<button class="ship${t===e?` on`:``}" data-kind="${t}">
        <b>${a.label}</b><i>${Qy[t]}</i>
        ${o(`Can`,a.maxHp/n)}${o(`Hız`,a.handling.maxSpeed/r)}${o(`Menzil`,(a.weapon?.range??0)/i)}
        </button>`}).join(``);return`<h1>SHIPZ.IO</h1>${this.death?this.deathView(this.death):``}
      <div class="points">Seviye puanı: <span>${this.profile.points}</span></div>
      <div class="ships">${a}</div>
      <button class="plain" data-tree>Gelişim Ağacı · ${s[e].label}</button>
      <button class="big" data-sail>${this.death?`YENİDEN YELKEN AÇ`:`YELKEN AÇ`}</button>
      <div class="note">Toplar otomatik ateş eder · süper dolunca butona bas<br>Düz git: vites atarsın (Yarım yol → Tam yol) · dönünce yavaşlarsın<br>Büyüyen gemi yavaşlar · 👑 lider herkesin hedefi<br>Haritayı gez: yeni yer = keşif XP · 💰 etkinlikler haritada<br>Maçta atladığın her seviye = 1 puan</div>`}deathView(e){let t=e.kind>=0?p(e.kind):null,n=t?e.how===Oy.super?t.super?.name??``:e.how===Oy.ram?t.ramName??`Çarpma`:t.weaponName:``;return`<div class="death"><b>Batırıldın!</b><div>${t?`<strong>${tb(e.by)}</strong> (${t.label})${n?` · ${tb(n)} ile`:``}`:tb(e.by)}</div>${e.hits.length>1?`<div class="recap">Son saniyelerde: ${e.hits.map(([e,t])=>`${tb(e)} <em>${t}</em>`).join(` · `)}</div>`:``}<div class="sub">seviye ${e.level}${e.level>1?` · +${e.level-1} puan`:``}</div></div>`}treeView(){let e=this.profile.kind,t=this.profile.build(e),n=it[e].map((n,r)=>{let i=n.map((n,i)=>{let a=this.profile.isUnlocked(e,r,i);return`<button class="${[`opt`,t[r]===i?`on`:``,a?``:`locked`].join(` `)}" data-tier="${r}" data-option="${i}"><sup>${Be[i]}</sup>
          <b>${tb(n.title)}</b>${tb(n.text)}<span class="cost">🔒 ${Ve(r)} puan</span></button>`}).join(``);return`<div class="tier"><span>Sv ${2+r}</span>${i}</div>`}).join(``);return`<div class="head"><button class="back" data-back>← Geri</button><h2>${s[e].label} ağacı</h2>
        <div class="points">Puan: <span>${this.profile.points}</span></div></div>
      ${n}
      <div class="note">Seviye atladıkça seçtiğin gelişme kendiliğinden uygulanır. Seçmediğin yerde A geçerli.<br>
        Kilitli seçeneğe dokununca puanınla açılır.</div>
      <button class="big" data-sail>YELKEN AÇ</button>`}};function tb(e){return e.replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e])}function nb(e,t){t.length=0;for(let[n,r]of e.events)t.push({id:n,kind:r.kind,x:r.x,y:r.y,ship:r.ship,countdown:r.tick>0?Math.max(0,(r.tick-e.tick)/30):0});return t}var rb=1/30,ib=.25,ab=20,ob=class{constructor(t){this.selfId=`you`,this.aimLag=rb,this.state=new Iv,this.sink=null,this.last=-1,this.accumulator=0,this.alpha=0,this.previous=new Map,this.current=new Map,this.known=new Set,this.eventViews=[],this.battle=new Jy(this.state,{volley:e=>{this.sink?.projectiles.addVolley(e,e.o===this.selfId),this.sink?.fired(e.o),e.s&&this.sink?.superFired(e.o,performance.now())},hit:e=>{this.sink?.hit(e,performance.now()),!(e.v!==0&&this.sink?.projectiles.confirmHit(e))&&this.sink?.effect(`blast`,e.x,e.y,performance.now())},sunk:e=>this.sink?.sunk(e),dead:(e,t)=>{e===this.selfId&&this.sink?.dead(t)},found:(e,t)=>{e===this.selfId&&this.sink?.found(t)},strike:t=>this.sink?.strike(t,performance.now()+t.t-e(this.state.tick))}),this.battle.addPlayer(this.selfId,t),this.battle.fillBots(),this.self=this.state.ships.get(this.selfId),this.ships=this.state.ships,this.loot=this.state.loot,this.debug={battle:this.battle,state:this.state},this.capture(this.current)}get leaderId(){return this.state.leader}get seaEvents(){return nb(this.state,this.eventViews)}get own(){return this.self}start(e){this.sink=e,this.syncMembership()}advance(e,t){for(this.last<0&&(this.last=e),this.accumulator=Math.min(this.accumulator+(e-this.last)/1e3,ib),this.last=e;this.accumulator>=rb;){this.accumulator-=rb,[this.previous,this.current]=[this.current,this.previous];let e=t();this.battle.tick(rb,t=>t===this.selfId?[e]:void 0),this.capture(this.current),this.syncMembership()}this.alpha=this.accumulator/rb}pose(e,t,n){let r=this.current.get(e);if(!r)return null;let i=this.previous.get(e),a=i&&Math.hypot(r.x-i.x,r.y-i.y)<ab?this.alpha:1,o=i??r;return n.x=o.x+(r.x-o.x)*a,n.y=o.y+(r.y-o.y)*a,n.heading=o.heading+(r.heading-o.heading)*a,n.speed=o.speed+(r.speed-o.speed)*a,n}showAt(){return performance.now()}spawn(e,t){this.battle.spawn(this.selfId,e,t)}status(){return`${this.state.ships.size} gemi · sunucusuz test`}afterFrame(){}capture(e){for(let[t,n]of this.state.ships){let r=e.get(t);r||(r={x:0,y:0,heading:0,speed:0},e.set(t,r)),r.x=n.x,r.y=n.y,r.heading=n.heading,r.speed=n.speed}}syncMembership(){if(this.sink){for(let[e,t]of this.state.ships)this.known.has(e)||(this.known.add(e),this.sink.shipAdded(e,t));for(let e of this.known)this.state.ships.has(e)||(this.known.delete(e),this.previous.delete(e),this.current.delete(e),this.sink.shipRemoved(e))}}},sb=`modulepreload`,cb=function(e,t){return new URL(e,t).href},lb={},ub=function(e){return e.pathname.endsWith(`.css`)},db=function(e,t,n){if(t in e)return e[t];let r=n();if(!r){e[t]=void 0;return}let i=r.then(()=>{e[t]=void 0},n=>{throw e[t]=void 0,n});return e[t]=i,i},fb=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e,i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?new URL(import.meta.resolve(e)):new URL(e,import.meta.url)}r=o(t.map(t=>{t=cb(t,n);let r=s(t),i=ub(r);return db(lb,r.href,()=>{if(e===void 0){e={all:new Set,styles:new Set};let t=document.getElementsByTagName(`link`);for(let n=t.length-1;n>=0;n--){let r=t[n];e.all.add(r.href),r.rel===`stylesheet`&&e.styles.add(r.href)}}if((i?e.styles:e.all).has(r.href))return;let t=document.createElement(`link`);if(t.rel=i?`stylesheet`:sb,i||(t.as=`script`),t.crossOrigin=``,t.href=r.href,a&&t.setAttribute(`nonce`,a),document.head.appendChild(t),i)return new Promise((e,n)=>{t.addEventListener(`load`,e),t.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${r}`)))})})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},pb=new URLSearchParams(location.search),mb=pb.has(`online`)||pb.has(`server`),hb=pb.has(`lab`),gb=7,_b=5,vb=3,yb=10,bb=3e3,xb=34,Sb=150,Cb=110,wb=.1,Tb=`fort`,Eb=10,Db=document.getElementById(`status`),Ob=document.getElementById(`hint`);function kb(){let e=pb.get(`server`);return e?(/^\w+:\/\//.test(e)?e:`wss://${e}`).replace(/^http/,`ws`).replace(/\/+$/,``):`${location.protocol===`https:`?`wss`:`ws`}://${location.host}`}async function Ab(){let e=hb&&Number(pb.get(`cam`))||1,t=new Fp(document.getElementById(`game`),e),r=Up.isTouchDevice();Ob.textContent=r?`Ekranı sürükle: dümen · toplar otomatik ateş eder · süper dolunca butona dokun (sürükle = nişan)`:`WASD: dümen · toplar otomatik ateş eder · Space: süper (sağ tık: imlece doğru)`,Ob.style.display=`none`;let o=`Kaptan ${100+Math.floor(Math.random()*900)}`,s=mb?await(await fb(async()=>{let{OnlineLink:e}=await import(`./online-Csi0iW8q.js`);return{OnlineLink:e}},[],import.meta.url)).OnlineLink.connect({endpoint:kb(),name:o,lab:hb?document.getElementById(`lab`):null,setTrails:e=>t.setTrailsVisible(e),inspector:pb.has(`debug`)}):new ob(o),c=s.self,l=new Kp(s,(e,n,r)=>t.spawnEffect(e,n,r)),u=new tm(r),m=new om,h=new Up({selfOnScreen:()=>t.selfOnScreen(),selfPosition:()=>({x:s.own.x,y:s.own.y}),groundAt:(e,n)=>t.groundAt(e,n)});h.bindAimStick(u.superButton);let _=0,y=-1,b=!1,S=!1,w=m.build(m.kind),T=1,D=!1,j=new eb(m,(e,t)=>{w=t,T=1,_=0,y=-1,b=!1,s.spawn(e,t),D||(D=!0,Ob.style.display=``,setTimeout(()=>{Ob.style.display=`none`},yb*1e3))});j.show(null);let ee=new Map,M=new Map,te=new Map,ne=new Map,re={x:0,y:0};function ie(e,t){let n=s.own.kind,r=p(n),o=s.own.x,l=s.own.y,u=e===`super`?r.super:r.weapon,d=e===`super`&&r.super?.kind===a.berserk,m=d?N(n):(u?.range??0)*(c.rangePct/100),h=d?r.handling.maxSpeed*f:i[(u??r.weapon)?.projectile??0].speed,g=null,_=m+t;for(let e of ee.values()){if(e.shielded)continue;let t=Math.hypot(e.x-o,e.y-l);t<_&&(g=e,_=t)}if(!g)return null;let v=_/h+s.aimLag;return E(g.x,g.y,re),Math.atan2(g.y+(Math.sin(g.heading)*g.speed+re.y)*v-l,g.x+(Math.cos(g.heading)*g.speed+re.x)*v-o)}function ae(){let e=s.own.kind,t=p(e),n=t.radius+.6;return t.super?t.super.kind===a.berserk?{inner:n,range:N(e),half:0}:{inner:n,range:t.super.range*(c.rangePct/100),half:t.super.spread/2}:null}function oe(){return(p(s.own.kind).weapon?.range??0)*(c.rangePct/100)}function N(e){let t=p(e).handling;return t.maxSpeed*(c.speedPct/100)*v(c.level)*he(me(s.own.cruise),t.cruise)*f*d}function ce(e,n){let r=innerWidth,i=innerHeight,a=t.toScreen(e,n,0);if(a&&a.x>0&&a.x<r&&a.y>0&&a.y<i)return null;let o=Math.atan2(n-s.own.y,e-s.own.x),c=r/2,l=i/2,u=Math.cos(o),d=Math.sin(o),f=u>0?(r-xb-c)/u:u<0?(xb-c)/u:1/0,p=d>0?(i-Cb-l)/d:d<0?(Sb-l)/d:1/0,m=Math.min(f,p);return{at:{x:c+u*m,y:l+d*m},angle:o}}function le(){let e=s.leaderId?ee.get(s.leaderId):void 0,t=s.leaderId?s.ships.get(s.leaderId):void 0,n=c.alive&&e&&t&&s.leaderId!==s.selfId?ce(e.x,e.y):null;u.setBounty(n?.at??null,n?.angle??0,t?`${t.name} · Sv ${t.level}`:``)}function ue(e){if(e.ship){let t=s.ships.get(e.ship);return t?.alive?ee.get(e.ship)??{x:t.x,y:t.y}:null}return{x:e.x,y:e.y}}function de(e){let t=s.own,n=c.alive?[...e].sort((e,n)=>Math.hypot(e.x-t.x,e.y-t.y)-Math.hypot(n.x-t.x,n.y-t.y)):[];for(let e=0;e<u.eventMarkerCount;e++){let r=n[e],i=r?ce(r.x,r.y):null;if(!r||!i){u.setEventMarker(e,null,0,``,``);continue}let a=we[r.event.kind],o=Math.round(Math.hypot(r.x-t.x,r.y-t.y));u.setEventMarker(e,i.at,i.angle,a.icon,r.event.countdown>0?`${a.name} · ${Math.ceil(r.event.countdown)} sn`:`${a.name} · ${o} m`)}}let fe=new Map,pe=new Set;function ge(e){let n=new Set,r=null,i=!1;for(let a of e){n.add(a.id);let e=fe.get(a.id);e||(e={kind:a.kind,dropped:!1},fe.set(a.id,e),a.ship&&pe.delete(a.ship),u.feed(we[a.kind]?.start??``)),a.kind===I.treasure&&(r={x:a.x,y:a.y},a.countdown===0&&!e.dropped&&(e.dropped=!0,u.feed(`💰 Hazine düştü!`),t.spawnEffect(`levelup`,a.x,a.y))),a.kind===I.eruption&&(i=!0),e.ship=a.ship}for(let[e,t]of fe){if(n.has(e))continue;let r=t.ship;t.kind===I.goldShip&&r&&!pe.has(r)&&u.feed(`⛵ Hazine gemisi kaçtı`),t.kind===I.kraken&&r&&!pe.has(r)&&u.feed(`🐙 Kraken derinlere daldı`),fe.delete(e)}t.setBeacon(r),t.setEruption(i)}function _e(){if(!c.alive)return;let e=C(s.own.x,s.own.y);e!==y&&(e>=0&&_&1<<e&&u.showPlace(x[e].name,``),y=e);let t=k(s.own.x,s.own.y);t!==S&&(u.setFog(t),t&&!b&&(b=!0,u.feed(`🌫 Sis: uzaktan görünmezsin · ateş edince görünürsün`)),S=t)}let ve={dirX:0,dirY:0,act:0,fire:0,aim:0};function ye(){h.update();let e=c.alive,t=e&&h.act,n=e&&!c.shielded?ie(`fire`,0):null;return ve.dirX=e?h.dirX:0,ve.dirY=e?h.dirY:0,ve.fire=n===null?0:1,ve.act=+!!t,t?ve.aim=be(h.aim??ie(`super`,vb)??s.own.heading):n!==null&&(ve.aim=be(n)),ve}s.start({projectiles:l,effect:(e,n,r,i)=>jb(i,()=>t.spawnEffect(e,n,r)),hit:(e,t)=>{e.s===s.selfId?jb(t,()=>{u.float(s.selfId,`taken`,e.d),u.hurt(e.d/Math.max(1,c.maxHp)*4),te.set(e.a,performance.now()+bb)}):e.a===s.selfId&&jb(t,()=>u.float(e.s,`dealt`,e.d))},fired:e=>{ne.set(e,performance.now()+O*1e3)},strike:(e,n)=>t.addStrike(e.x,e.y,e.r,e.k,n),found:e=>{_|=1<<e.p,y=e.p;let t=x[e.p];t&&u.showPlace(t.name,`📍 Keşif · +${e.xp} XP`)},superFired:(e,t)=>{let n=p(s.ships.get(e)?.kind??0).super?.name;n&&jb(t,()=>u.float(e,`callout`,0,`${n.toLocaleUpperCase(`tr`)}!`))},sunk:e=>{jb(e.s===s.selfId?performance.now():s.showAt(e.t),()=>t.spawnEffect(`wreck`,e.x,e.y));let r=s.ships.get(e.s)?.kind,i=e.k===s.selfId;(r===n.goldShip||r===n.kraken)&&pe.add(e.s),r===n.goldShip?u.feed(i?`💰 Hazine gemisini batırdın!`:e.kn?`💰 ${e.kn} hazine gemisini batırdı`:`💰 Hazine gemisi battı`):r===n.kraken?u.feed(i?`🐙 KRAKEN'İ BATIRDIN!`:e.kn?`🐙 ${e.kn} Kraken'i batırdı!`:`🐙 Kraken battı!`):r===n.shark||(r===n.fort?u.feed(i?`🏰 Kurukafa Kalesi'ni düşürdün!`:e.kn?`🏰 ${e.kn} kaleyi düşürdü`:`🏰 Kale düştü`):e.l&&e.kn?u.feed(e.k===s.selfId?`👑 Lideri batırdın: ${e.sn}!`:`👑 ${e.kn} lideri batırdı: ${e.sn}`):e.k===s.selfId&&u.feed(`⚔ ${e.sn} batırıldı!`))},dead:e=>{Ob.style.display=`none`,h.resetStick(),j.show(e)},shipAdded:(e,n)=>t.addShip(e,{kind:n.kind,hue:n.hue,self:e===s.selfId}),shipRemoved:e=>{t.removeShip(e),u.removeLabel(e),ee.delete(e),M.delete(e),te.delete(e),ne.delete(e)},disconnected:()=>{Db.textContent=`Bağlantı koptu — sayfayı yenile`}});let P={x:0,y:0,heading:0,speed:0},xe=performance.now(),Se=0,F=!1,Ce=!1,L=0,R=0,z=0,B=new Map;function Te(e){let n=Math.min(.1,(e-xe)/1e3);xe=e,s.advance(e,ye);let r=e/1e3;for(let[n,i]of s.ships){if(n===s.selfId)continue;if(!i.alive||!s.pose(n,e,P)||c.alive&&!A(s.own.x,s.own.y,P.x,P.y,(ne.get(n)??0)>e)){t.hideShip(n),u.setLabel(n,null,Mb(i,!1)),ee.delete(n),M.delete(n);continue}ee.set(n,{x:P.x,y:P.y,heading:P.heading,speed:P.speed,shielded:i.shielded}),t.updateShip(n,P.x,P.y,P.heading,r,i.kind,i.shielded,i.level,me(i.cruise));let a=t.toScreen(P.x,P.y,gb*g(i.level));a?M.set(n,a):M.delete(n),u.setLabel(n,a,{...Mb(i,!1),threat:(te.get(n)??0)>e,leader:n===s.leaderId})}if(c.alive&&s.pose(s.selfId,e,P)){let e=me(s.own.cruise);t.updateShip(s.selfId,P.x,P.y,P.heading,r,s.own.kind,c.shielded,c.level,e);let i=t.toScreen(P.x,P.y,gb*g(c.level));i?M.set(s.selfId,i):M.delete(s.selfId),u.setLabel(s.selfId,i,{...Mb(c,!0),ammo:s.own.ammo,gear:e,leader:s.leaderId===s.selfId}),e>z&&se[e]&&u.float(s.selfId,`callout`,0,se[e]),z=e,t.follow(P.x,P.y,n),t.showRange(P.x,P.y,oe());let a=h.aiming,o=a&&ae();a&&o?t.showAim(P.x,P.y,a.angle,o,!0):t.hideAim()}else t.hideShip(s.selfId),t.hideAim(),t.hideRange(),u.setLabel(s.selfId,null,Mb(c,!0)),M.delete(s.selfId),t.hasFocus||t.follow(280,280,n);if(c.alive!==F&&(u.setPlaying(c.alive),c.alive&&(T=c.level),R=c.xp),F=c.alive,c.alive&&c.xp>R&&u.float(s.selfId,`gain`,c.xp-R),R=c.xp,c.alive&&c.level>T){for(let e=T+1;e<c.level;e++){let t=st(c.kind,w,e);u.feed(`⬆ Seviye ${e}${t?` · ${t.title}`:``}`)}let n=st(c.kind,w,c.level),r=Me(c.level),i=r!==Me(T);u.showLevelUp(c.level,[...i?[`🎖 Yeni rütbe: ${r}`]:[],...n?[`${n.title} · ${n.text}`]:[],`+%${Math.round(Le.hp*100)} can · +%${Math.round(Le.damage*100)} hasar · gemi büyüdü`]),i&&u.feed(`🎖 Rütbe: ${r}`),s.pose(s.selfId,e,P)&&(t.spawnEffect(`levelup`,P.x,P.y),t.spawnEffect(`flash`,P.x,P.y)),m.addPoints(c.level-T),T=c.level}u.updateFloats(e=>M.get(e)??null),le();let i=s.seaEvents;ge(i),_e();let a=[];for(let e of i){let t=ue(e);t&&a.push({event:e,...t})}de(a);let o=s.ships.get(Tb)?.alive??!1;if(t.setFortAlive(o),L-=n,L<=0){L=wb;let e=s.leaderId&&s.leaderId!==s.selfId?ee.get(s.leaderId)??null:null;u.drawMinimap({self:c.alive?{x:s.own.x,y:s.own.y,heading:s.own.heading}:null,leader:e,events:a.map(e=>({kind:e.event.kind,x:e.x,y:e.y})),fortAlive:o},r)}let d=s.leaderId===s.selfId&&c.alive;d&&!Ce&&u.feed(`👑 Lider sensin — herkes peşinde!`),Ce=d,t.drawLoot(s.loot.values(),r),t.beginProjectiles(),l.update(e,e=>t.drawProjectile(e)),t.endProjectiles(),t.render(n);let f=c.level,p=Oe(f),_=Oe(f+1);if(u.setProgress(f,c.kind,(c.xp-p)/Math.max(1,_-p),f>=De),u.setSuper(s.own.kind,s.own.charge),Se-=n,Se<=0){Se=.5;for(let[e,t]of s.ships){if(t.npc||e===s.selfId)continue;let n=B.get(e)??0,r=je.filter(e=>t.alive&&t.level>=e.from).length-1;r>n&&je[r].from>=Eb&&u.feed(`🎖 ${t.name} artık ${je[r].name}!`),B.set(e,Math.max(0,r))}u.setBoard([...s.ships].filter(([,e])=>!e.npc&&e.alive).sort(([,e],[,t])=>t.xp-e.xp).slice(0,_b).map(([e,t])=>({name:t.name,level:t.level,score:t.xp,self:e===s.selfId,leader:e===s.leaderId})))}Db.textContent=s.status(),s.afterFrame(n),requestAnimationFrame(Te)}requestAnimationFrame(Te)}function jb(e,t){setTimeout(t,Math.max(0,e-performance.now()))}function Mb(e,t){return{name:e.name,level:e.level,hp:e.hp,maxHp:e.maxHp,self:t,npc:e.npc,compact:e.kind===n.shark}}Ab().catch(e=>{console.error(e),Db.textContent=mb?`Sunucuya bağlanılamadı`:`Oyun başlatılamadı`});export{fg as _,Z as a,e as b,Cm as c,yv as d,ag as f,oh as g,Ah as h,Ty as i,jv as l,sv as m,nb as n,Om as o,Dv as p,Ey as r,X as s,fb as t,Cv as u,P as v,Ce as y};