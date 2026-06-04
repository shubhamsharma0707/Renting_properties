(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const h of l.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&i(h)}).observe(document,{childList:!0,subtree:!0});function e(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(o){if(o.ep)return;o.ep=!0;const l=e(o);fetch(o.href,l)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const na="163",iu=0,$a=1,ru=2,Ac=1,su=2,On=3,Qn=0,qe=1,Fn=2,jn=0,ji=1,ja=2,Ka=3,Ja=4,ou=5,gi=100,au=101,lu=102,cu=103,hu=104,uu=200,du=201,fu=202,pu=203,Wo=204,Xo=205,mu=206,_u=207,gu=208,vu=209,xu=210,yu=211,Mu=212,Su=213,Eu=214,Tu=0,bu=1,wu=2,ws=3,Au=4,Pu=5,Cu=6,Lu=7,Pc=0,Ru=1,Iu=2,Kn=0,Du=1,Uu=2,Nu=3,Cc=4,Ou=5,Fu=6,Bu=7,Lc=300,Qi=301,tr=302,Zo=303,qo=304,Ds=306,Yo=1e3,xi=1001,$o=1002,sn=1003,zu=1004,Qr=1005,fn=1006,so=1007,yi=1008,Jn=1009,ku=1010,Hu=1011,Rc=1012,Ic=1013,er=1014,$n=1015,As=1016,Dc=1017,Uc=1018,Pr=1020,Gu=35902,Vu=1021,Wu=1022,En=1023,Xu=1024,Zu=1025,Ki=1026,Ar=1027,qu=1028,Nc=1029,Yu=1030,Oc=1031,Fc=1033,oo=33776,ao=33777,lo=33778,co=33779,Qa=35840,tl=35841,el=35842,nl=35843,Bc=36196,il=37492,rl=37496,sl=37808,ol=37809,al=37810,ll=37811,cl=37812,hl=37813,ul=37814,dl=37815,fl=37816,pl=37817,ml=37818,_l=37819,gl=37820,vl=37821,ho=36492,xl=36494,yl=36495,$u=36283,Ml=36284,Sl=36285,El=36286,ju=3200,Ku=3201,zc=0,Ju=1,Yn="",xn="srgb",ei="srgb-linear",ia="display-p3",Us="display-p3-linear",Ps="linear",ge="srgb",Cs="rec709",Ls="p3",Li=7680,Tl=519,Qu=512,td=513,ed=514,kc=515,nd=516,id=517,rd=518,sd=519,bl=35044,wl="300 es",Bn=2e3,Rs=2001;class rr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const o=this._listeners[t];if(o!==void 0){const l=o.indexOf(e);l!==-1&&o.splice(l,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const o=i.slice(0);for(let l=0,h=o.length;l<h;l++)o[l].call(this,t);t.target=null}}}const Ne=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],uo=Math.PI/180,jo=180/Math.PI;function Cr(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ne[s&255]+Ne[s>>8&255]+Ne[s>>16&255]+Ne[s>>24&255]+"-"+Ne[t&255]+Ne[t>>8&255]+"-"+Ne[t>>16&15|64]+Ne[t>>24&255]+"-"+Ne[e&63|128]+Ne[e>>8&255]+"-"+Ne[e>>16&255]+Ne[e>>24&255]+Ne[i&255]+Ne[i>>8&255]+Ne[i>>16&255]+Ne[i>>24&255]).toLowerCase()}function Ze(s,t,e){return Math.max(t,Math.min(e,s))}function od(s,t){return(s%t+t)%t}function fo(s,t,e){return(1-e)*s+e*t}function xr(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Xe(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class ne{constructor(t=0,e=0){ne.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,o=t.elements;return this.x=o[0]*e+o[3]*i+o[6],this.y=o[1]*e+o[4]*i+o[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ze(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),o=Math.sin(e),l=this.x-t.x,h=this.y-t.y;return this.x=l*i-h*o+t.x,this.y=l*o+h*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class jt{constructor(t,e,i,o,l,h,u,d,p){jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,o,l,h,u,d,p)}set(t,e,i,o,l,h,u,d,p){const m=this.elements;return m[0]=t,m[1]=o,m[2]=u,m[3]=e,m[4]=l,m[5]=d,m[6]=i,m[7]=h,m[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,o=e.elements,l=this.elements,h=i[0],u=i[3],d=i[6],p=i[1],m=i[4],v=i[7],g=i[2],y=i[5],b=i[8],E=o[0],x=o[3],_=o[6],D=o[1],A=o[4],N=o[7],$=o[2],O=o[5],U=o[8];return l[0]=h*E+u*D+d*$,l[3]=h*x+u*A+d*O,l[6]=h*_+u*N+d*U,l[1]=p*E+m*D+v*$,l[4]=p*x+m*A+v*O,l[7]=p*_+m*N+v*U,l[2]=g*E+y*D+b*$,l[5]=g*x+y*A+b*O,l[8]=g*_+y*N+b*U,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],o=t[2],l=t[3],h=t[4],u=t[5],d=t[6],p=t[7],m=t[8];return e*h*m-e*u*p-i*l*m+i*u*d+o*l*p-o*h*d}invert(){const t=this.elements,e=t[0],i=t[1],o=t[2],l=t[3],h=t[4],u=t[5],d=t[6],p=t[7],m=t[8],v=m*h-u*p,g=u*d-m*l,y=p*l-h*d,b=e*v+i*g+o*y;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/b;return t[0]=v*E,t[1]=(o*p-m*i)*E,t[2]=(u*i-o*h)*E,t[3]=g*E,t[4]=(m*e-o*d)*E,t[5]=(o*l-u*e)*E,t[6]=y*E,t[7]=(i*d-p*e)*E,t[8]=(h*e-i*l)*E,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,o,l,h,u){const d=Math.cos(l),p=Math.sin(l);return this.set(i*d,i*p,-i*(d*h+p*u)+h+t,-o*p,o*d,-o*(-p*h+d*u)+u+e,0,0,1),this}scale(t,e){return this.premultiply(po.makeScale(t,e)),this}rotate(t){return this.premultiply(po.makeRotation(-t)),this}translate(t,e){return this.premultiply(po.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let o=0;o<9;o++)if(e[o]!==i[o])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const po=new jt;function Hc(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Is(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function ad(){const s=Is("canvas");return s.style.display="block",s}const Al={};function ld(s){s in Al||(Al[s]=!0,console.warn(s))}const Pl=new jt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Cl=new jt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ts={[ei]:{transfer:Ps,primaries:Cs,toReference:s=>s,fromReference:s=>s},[xn]:{transfer:ge,primaries:Cs,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Us]:{transfer:Ps,primaries:Ls,toReference:s=>s.applyMatrix3(Cl),fromReference:s=>s.applyMatrix3(Pl)},[ia]:{transfer:ge,primaries:Ls,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Cl),fromReference:s=>s.applyMatrix3(Pl).convertLinearToSRGB()}},cd=new Set([ei,Us]),ce={enabled:!0,_workingColorSpace:ei,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!cd.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;const i=ts[t].toReference,o=ts[e].fromReference;return o(i(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return ts[s].primaries},getTransfer:function(s){return s===Yn?Ps:ts[s].transfer}};function Ji(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function mo(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ri;class hd{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ri===void 0&&(Ri=Is("canvas")),Ri.width=t.width,Ri.height=t.height;const i=Ri.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Ri}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Is("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const o=i.getImageData(0,0,t.width,t.height),l=o.data;for(let h=0;h<l.length;h++)l[h]=Ji(l[h]/255)*255;return i.putImageData(o,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Ji(e[i]/255)*255):e[i]=Ji(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let ud=0;class Gc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ud++}),this.uuid=Cr(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let h=0,u=o.length;h<u;h++)o[h].isDataTexture?l.push(_o(o[h].image)):l.push(_o(o[h]))}else l=_o(o);i.url=l}return e||(t.images[this.uuid]=i),i}}function _o(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?hd.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let dd=0;class Ye extends rr{constructor(t=Ye.DEFAULT_IMAGE,e=Ye.DEFAULT_MAPPING,i=xi,o=xi,l=fn,h=yi,u=En,d=Jn,p=Ye.DEFAULT_ANISOTROPY,m=Yn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dd++}),this.uuid=Cr(),this.name="",this.source=new Gc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=o,this.magFilter=l,this.minFilter=h,this.anisotropy=p,this.format=u,this.internalFormat=null,this.type=d,this.offset=new ne(0,0),this.repeat=new ne(1,1),this.center=new ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Lc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Yo:t.x=t.x-Math.floor(t.x);break;case xi:t.x=t.x<0?0:1;break;case $o:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Yo:t.y=t.y-Math.floor(t.y);break;case xi:t.y=t.y<0?0:1;break;case $o:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ye.DEFAULT_IMAGE=null;Ye.DEFAULT_MAPPING=Lc;Ye.DEFAULT_ANISOTROPY=1;class ve{constructor(t=0,e=0,i=0,o=1){ve.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=o}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,o){return this.x=t,this.y=e,this.z=i,this.w=o,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,o=this.z,l=this.w,h=t.elements;return this.x=h[0]*e+h[4]*i+h[8]*o+h[12]*l,this.y=h[1]*e+h[5]*i+h[9]*o+h[13]*l,this.z=h[2]*e+h[6]*i+h[10]*o+h[14]*l,this.w=h[3]*e+h[7]*i+h[11]*o+h[15]*l,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,o,l;const d=t.elements,p=d[0],m=d[4],v=d[8],g=d[1],y=d[5],b=d[9],E=d[2],x=d[6],_=d[10];if(Math.abs(m-g)<.01&&Math.abs(v-E)<.01&&Math.abs(b-x)<.01){if(Math.abs(m+g)<.1&&Math.abs(v+E)<.1&&Math.abs(b+x)<.1&&Math.abs(p+y+_-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const A=(p+1)/2,N=(y+1)/2,$=(_+1)/2,O=(m+g)/4,U=(v+E)/4,K=(b+x)/4;return A>N&&A>$?A<.01?(i=0,o=.707106781,l=.707106781):(i=Math.sqrt(A),o=O/i,l=U/i):N>$?N<.01?(i=.707106781,o=0,l=.707106781):(o=Math.sqrt(N),i=O/o,l=K/o):$<.01?(i=.707106781,o=.707106781,l=0):(l=Math.sqrt($),i=U/l,o=K/l),this.set(i,o,l,e),this}let D=Math.sqrt((x-b)*(x-b)+(v-E)*(v-E)+(g-m)*(g-m));return Math.abs(D)<.001&&(D=1),this.x=(x-b)/D,this.y=(v-E)/D,this.z=(g-m)/D,this.w=Math.acos((p+y+_-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class fd extends rr{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ve(0,0,t,e),this.scissorTest=!1,this.viewport=new ve(0,0,t,e);const o={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},i);const l=new Ye(o,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);l.flipY=!1,l.generateMipmaps=i.generateMipmaps,l.internalFormat=i.internalFormat,this.textures=[];const h=i.count;for(let u=0;u<h;u++)this.textures[u]=l.clone(),this.textures[u].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=t,this.textures[o].image.height=e,this.textures[o].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,o=t.textures.length;i<o;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Gc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Mi extends fd{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Vc extends Ye{constructor(t=null,e=1,i=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:o},this.magFilter=sn,this.minFilter=sn,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class pd extends Ye{constructor(t=null,e=1,i=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:o},this.magFilter=sn,this.minFilter=sn,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Lr{constructor(t=0,e=0,i=0,o=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=o}static slerpFlat(t,e,i,o,l,h,u){let d=i[o+0],p=i[o+1],m=i[o+2],v=i[o+3];const g=l[h+0],y=l[h+1],b=l[h+2],E=l[h+3];if(u===0){t[e+0]=d,t[e+1]=p,t[e+2]=m,t[e+3]=v;return}if(u===1){t[e+0]=g,t[e+1]=y,t[e+2]=b,t[e+3]=E;return}if(v!==E||d!==g||p!==y||m!==b){let x=1-u;const _=d*g+p*y+m*b+v*E,D=_>=0?1:-1,A=1-_*_;if(A>Number.EPSILON){const $=Math.sqrt(A),O=Math.atan2($,_*D);x=Math.sin(x*O)/$,u=Math.sin(u*O)/$}const N=u*D;if(d=d*x+g*N,p=p*x+y*N,m=m*x+b*N,v=v*x+E*N,x===1-u){const $=1/Math.sqrt(d*d+p*p+m*m+v*v);d*=$,p*=$,m*=$,v*=$}}t[e]=d,t[e+1]=p,t[e+2]=m,t[e+3]=v}static multiplyQuaternionsFlat(t,e,i,o,l,h){const u=i[o],d=i[o+1],p=i[o+2],m=i[o+3],v=l[h],g=l[h+1],y=l[h+2],b=l[h+3];return t[e]=u*b+m*v+d*y-p*g,t[e+1]=d*b+m*g+p*v-u*y,t[e+2]=p*b+m*y+u*g-d*v,t[e+3]=m*b-u*v-d*g-p*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,o){return this._x=t,this._y=e,this._z=i,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,o=t._y,l=t._z,h=t._order,u=Math.cos,d=Math.sin,p=u(i/2),m=u(o/2),v=u(l/2),g=d(i/2),y=d(o/2),b=d(l/2);switch(h){case"XYZ":this._x=g*m*v+p*y*b,this._y=p*y*v-g*m*b,this._z=p*m*b+g*y*v,this._w=p*m*v-g*y*b;break;case"YXZ":this._x=g*m*v+p*y*b,this._y=p*y*v-g*m*b,this._z=p*m*b-g*y*v,this._w=p*m*v+g*y*b;break;case"ZXY":this._x=g*m*v-p*y*b,this._y=p*y*v+g*m*b,this._z=p*m*b+g*y*v,this._w=p*m*v-g*y*b;break;case"ZYX":this._x=g*m*v-p*y*b,this._y=p*y*v+g*m*b,this._z=p*m*b-g*y*v,this._w=p*m*v+g*y*b;break;case"YZX":this._x=g*m*v+p*y*b,this._y=p*y*v+g*m*b,this._z=p*m*b-g*y*v,this._w=p*m*v-g*y*b;break;case"XZY":this._x=g*m*v-p*y*b,this._y=p*y*v-g*m*b,this._z=p*m*b+g*y*v,this._w=p*m*v+g*y*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,o=Math.sin(i);return this._x=t.x*o,this._y=t.y*o,this._z=t.z*o,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],o=e[4],l=e[8],h=e[1],u=e[5],d=e[9],p=e[2],m=e[6],v=e[10],g=i+u+v;if(g>0){const y=.5/Math.sqrt(g+1);this._w=.25/y,this._x=(m-d)*y,this._y=(l-p)*y,this._z=(h-o)*y}else if(i>u&&i>v){const y=2*Math.sqrt(1+i-u-v);this._w=(m-d)/y,this._x=.25*y,this._y=(o+h)/y,this._z=(l+p)/y}else if(u>v){const y=2*Math.sqrt(1+u-i-v);this._w=(l-p)/y,this._x=(o+h)/y,this._y=.25*y,this._z=(d+m)/y}else{const y=2*Math.sqrt(1+v-i-u);this._w=(h-o)/y,this._x=(l+p)/y,this._y=(d+m)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ze(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const o=Math.min(1,e/i);return this.slerp(t,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,o=t._y,l=t._z,h=t._w,u=e._x,d=e._y,p=e._z,m=e._w;return this._x=i*m+h*u+o*p-l*d,this._y=o*m+h*d+l*u-i*p,this._z=l*m+h*p+i*d-o*u,this._w=h*m-i*u-o*d-l*p,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,o=this._y,l=this._z,h=this._w;let u=h*t._w+i*t._x+o*t._y+l*t._z;if(u<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,u=-u):this.copy(t),u>=1)return this._w=h,this._x=i,this._y=o,this._z=l,this;const d=1-u*u;if(d<=Number.EPSILON){const y=1-e;return this._w=y*h+e*this._w,this._x=y*i+e*this._x,this._y=y*o+e*this._y,this._z=y*l+e*this._z,this.normalize(),this}const p=Math.sqrt(d),m=Math.atan2(p,u),v=Math.sin((1-e)*m)/p,g=Math.sin(e*m)/p;return this._w=h*v+this._w*g,this._x=i*v+this._x*g,this._y=o*v+this._y*g,this._z=l*v+this._z*g,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),o=Math.sqrt(1-i),l=Math.sqrt(i);return this.set(o*Math.sin(t),o*Math.cos(t),l*Math.sin(e),l*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(t=0,e=0,i=0){k.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ll.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ll.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,o=this.z,l=t.elements;return this.x=l[0]*e+l[3]*i+l[6]*o,this.y=l[1]*e+l[4]*i+l[7]*o,this.z=l[2]*e+l[5]*i+l[8]*o,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,o=this.z,l=t.elements,h=1/(l[3]*e+l[7]*i+l[11]*o+l[15]);return this.x=(l[0]*e+l[4]*i+l[8]*o+l[12])*h,this.y=(l[1]*e+l[5]*i+l[9]*o+l[13])*h,this.z=(l[2]*e+l[6]*i+l[10]*o+l[14])*h,this}applyQuaternion(t){const e=this.x,i=this.y,o=this.z,l=t.x,h=t.y,u=t.z,d=t.w,p=2*(h*o-u*i),m=2*(u*e-l*o),v=2*(l*i-h*e);return this.x=e+d*p+h*v-u*m,this.y=i+d*m+u*p-l*v,this.z=o+d*v+l*m-h*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,o=this.z,l=t.elements;return this.x=l[0]*e+l[4]*i+l[8]*o,this.y=l[1]*e+l[5]*i+l[9]*o,this.z=l[2]*e+l[6]*i+l[10]*o,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,o=t.y,l=t.z,h=e.x,u=e.y,d=e.z;return this.x=o*d-l*u,this.y=l*h-i*d,this.z=i*u-o*h,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return go.copy(this).projectOnVector(t),this.sub(go)}reflect(t){return this.sub(go.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ze(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,o=this.z-t.z;return e*e+i*i+o*o}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const o=Math.sin(e)*t;return this.x=o*Math.sin(i),this.y=Math.cos(e)*t,this.z=o*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),o=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=o,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const go=new k,Ll=new Lr;class Rr{constructor(t=new k(1/0,1/0,1/0),e=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(hn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(hn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=hn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const l=i.getAttribute("position");if(e===!0&&l!==void 0&&t.isInstancedMesh!==!0)for(let h=0,u=l.count;h<u;h++)t.isMesh===!0?t.getVertexPosition(h,hn):hn.fromBufferAttribute(l,h),hn.applyMatrix4(t.matrixWorld),this.expandByPoint(hn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),es.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),es.copy(i.boundingBox)),es.applyMatrix4(t.matrixWorld),this.union(es)}const o=t.children;for(let l=0,h=o.length;l<h;l++)this.expandByObject(o[l],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,hn),hn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(yr),ns.subVectors(this.max,yr),Ii.subVectors(t.a,yr),Di.subVectors(t.b,yr),Ui.subVectors(t.c,yr),Gn.subVectors(Di,Ii),Vn.subVectors(Ui,Di),ci.subVectors(Ii,Ui);let e=[0,-Gn.z,Gn.y,0,-Vn.z,Vn.y,0,-ci.z,ci.y,Gn.z,0,-Gn.x,Vn.z,0,-Vn.x,ci.z,0,-ci.x,-Gn.y,Gn.x,0,-Vn.y,Vn.x,0,-ci.y,ci.x,0];return!vo(e,Ii,Di,Ui,ns)||(e=[1,0,0,0,1,0,0,0,1],!vo(e,Ii,Di,Ui,ns))?!1:(is.crossVectors(Gn,Vn),e=[is.x,is.y,is.z],vo(e,Ii,Di,Ui,ns))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,hn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(hn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Rn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Rn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Rn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Rn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Rn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Rn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Rn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Rn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Rn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Rn=[new k,new k,new k,new k,new k,new k,new k,new k],hn=new k,es=new Rr,Ii=new k,Di=new k,Ui=new k,Gn=new k,Vn=new k,ci=new k,yr=new k,ns=new k,is=new k,hi=new k;function vo(s,t,e,i,o){for(let l=0,h=s.length-3;l<=h;l+=3){hi.fromArray(s,l);const u=o.x*Math.abs(hi.x)+o.y*Math.abs(hi.y)+o.z*Math.abs(hi.z),d=t.dot(hi),p=e.dot(hi),m=i.dot(hi);if(Math.max(-Math.max(d,p,m),Math.min(d,p,m))>u)return!1}return!0}const md=new Rr,Mr=new k,xo=new k;class Ir{constructor(t=new k,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):md.setFromPoints(t).getCenter(i);let o=0;for(let l=0,h=t.length;l<h;l++)o=Math.max(o,i.distanceToSquared(t[l]));return this.radius=Math.sqrt(o),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Mr.subVectors(t,this.center);const e=Mr.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),o=(i-this.radius)*.5;this.center.addScaledVector(Mr,o/i),this.radius+=o}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(xo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Mr.copy(t.center).add(xo)),this.expandByPoint(Mr.copy(t.center).sub(xo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const In=new k,yo=new k,rs=new k,Wn=new k,Mo=new k,ss=new k,So=new k;class ra{constructor(t=new k,e=new k(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,In)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=In.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(In.copy(this.origin).addScaledVector(this.direction,e),In.distanceToSquared(t))}distanceSqToSegment(t,e,i,o){yo.copy(t).add(e).multiplyScalar(.5),rs.copy(e).sub(t).normalize(),Wn.copy(this.origin).sub(yo);const l=t.distanceTo(e)*.5,h=-this.direction.dot(rs),u=Wn.dot(this.direction),d=-Wn.dot(rs),p=Wn.lengthSq(),m=Math.abs(1-h*h);let v,g,y,b;if(m>0)if(v=h*d-u,g=h*u-d,b=l*m,v>=0)if(g>=-b)if(g<=b){const E=1/m;v*=E,g*=E,y=v*(v+h*g+2*u)+g*(h*v+g+2*d)+p}else g=l,v=Math.max(0,-(h*g+u)),y=-v*v+g*(g+2*d)+p;else g=-l,v=Math.max(0,-(h*g+u)),y=-v*v+g*(g+2*d)+p;else g<=-b?(v=Math.max(0,-(-h*l+u)),g=v>0?-l:Math.min(Math.max(-l,-d),l),y=-v*v+g*(g+2*d)+p):g<=b?(v=0,g=Math.min(Math.max(-l,-d),l),y=g*(g+2*d)+p):(v=Math.max(0,-(h*l+u)),g=v>0?l:Math.min(Math.max(-l,-d),l),y=-v*v+g*(g+2*d)+p);else g=h>0?-l:l,v=Math.max(0,-(h*g+u)),y=-v*v+g*(g+2*d)+p;return i&&i.copy(this.origin).addScaledVector(this.direction,v),o&&o.copy(yo).addScaledVector(rs,g),y}intersectSphere(t,e){In.subVectors(t.center,this.origin);const i=In.dot(this.direction),o=In.dot(In)-i*i,l=t.radius*t.radius;if(o>l)return null;const h=Math.sqrt(l-o),u=i-h,d=i+h;return d<0?null:u<0?this.at(d,e):this.at(u,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,o,l,h,u,d;const p=1/this.direction.x,m=1/this.direction.y,v=1/this.direction.z,g=this.origin;return p>=0?(i=(t.min.x-g.x)*p,o=(t.max.x-g.x)*p):(i=(t.max.x-g.x)*p,o=(t.min.x-g.x)*p),m>=0?(l=(t.min.y-g.y)*m,h=(t.max.y-g.y)*m):(l=(t.max.y-g.y)*m,h=(t.min.y-g.y)*m),i>h||l>o||((l>i||isNaN(i))&&(i=l),(h<o||isNaN(o))&&(o=h),v>=0?(u=(t.min.z-g.z)*v,d=(t.max.z-g.z)*v):(u=(t.max.z-g.z)*v,d=(t.min.z-g.z)*v),i>d||u>o)||((u>i||i!==i)&&(i=u),(d<o||o!==o)&&(o=d),o<0)?null:this.at(i>=0?i:o,e)}intersectsBox(t){return this.intersectBox(t,In)!==null}intersectTriangle(t,e,i,o,l){Mo.subVectors(e,t),ss.subVectors(i,t),So.crossVectors(Mo,ss);let h=this.direction.dot(So),u;if(h>0){if(o)return null;u=1}else if(h<0)u=-1,h=-h;else return null;Wn.subVectors(this.origin,t);const d=u*this.direction.dot(ss.crossVectors(Wn,ss));if(d<0)return null;const p=u*this.direction.dot(Mo.cross(Wn));if(p<0||d+p>h)return null;const m=-u*Wn.dot(So);return m<0?null:this.at(m/h,l)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class xe{constructor(t,e,i,o,l,h,u,d,p,m,v,g,y,b,E,x){xe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,o,l,h,u,d,p,m,v,g,y,b,E,x)}set(t,e,i,o,l,h,u,d,p,m,v,g,y,b,E,x){const _=this.elements;return _[0]=t,_[4]=e,_[8]=i,_[12]=o,_[1]=l,_[5]=h,_[9]=u,_[13]=d,_[2]=p,_[6]=m,_[10]=v,_[14]=g,_[3]=y,_[7]=b,_[11]=E,_[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xe().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,o=1/Ni.setFromMatrixColumn(t,0).length(),l=1/Ni.setFromMatrixColumn(t,1).length(),h=1/Ni.setFromMatrixColumn(t,2).length();return e[0]=i[0]*o,e[1]=i[1]*o,e[2]=i[2]*o,e[3]=0,e[4]=i[4]*l,e[5]=i[5]*l,e[6]=i[6]*l,e[7]=0,e[8]=i[8]*h,e[9]=i[9]*h,e[10]=i[10]*h,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,o=t.y,l=t.z,h=Math.cos(i),u=Math.sin(i),d=Math.cos(o),p=Math.sin(o),m=Math.cos(l),v=Math.sin(l);if(t.order==="XYZ"){const g=h*m,y=h*v,b=u*m,E=u*v;e[0]=d*m,e[4]=-d*v,e[8]=p,e[1]=y+b*p,e[5]=g-E*p,e[9]=-u*d,e[2]=E-g*p,e[6]=b+y*p,e[10]=h*d}else if(t.order==="YXZ"){const g=d*m,y=d*v,b=p*m,E=p*v;e[0]=g+E*u,e[4]=b*u-y,e[8]=h*p,e[1]=h*v,e[5]=h*m,e[9]=-u,e[2]=y*u-b,e[6]=E+g*u,e[10]=h*d}else if(t.order==="ZXY"){const g=d*m,y=d*v,b=p*m,E=p*v;e[0]=g-E*u,e[4]=-h*v,e[8]=b+y*u,e[1]=y+b*u,e[5]=h*m,e[9]=E-g*u,e[2]=-h*p,e[6]=u,e[10]=h*d}else if(t.order==="ZYX"){const g=h*m,y=h*v,b=u*m,E=u*v;e[0]=d*m,e[4]=b*p-y,e[8]=g*p+E,e[1]=d*v,e[5]=E*p+g,e[9]=y*p-b,e[2]=-p,e[6]=u*d,e[10]=h*d}else if(t.order==="YZX"){const g=h*d,y=h*p,b=u*d,E=u*p;e[0]=d*m,e[4]=E-g*v,e[8]=b*v+y,e[1]=v,e[5]=h*m,e[9]=-u*m,e[2]=-p*m,e[6]=y*v+b,e[10]=g-E*v}else if(t.order==="XZY"){const g=h*d,y=h*p,b=u*d,E=u*p;e[0]=d*m,e[4]=-v,e[8]=p*m,e[1]=g*v+E,e[5]=h*m,e[9]=y*v-b,e[2]=b*v-y,e[6]=u*m,e[10]=E*v+g}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(_d,t,gd)}lookAt(t,e,i){const o=this.elements;return $e.subVectors(t,e),$e.lengthSq()===0&&($e.z=1),$e.normalize(),Xn.crossVectors(i,$e),Xn.lengthSq()===0&&(Math.abs(i.z)===1?$e.x+=1e-4:$e.z+=1e-4,$e.normalize(),Xn.crossVectors(i,$e)),Xn.normalize(),os.crossVectors($e,Xn),o[0]=Xn.x,o[4]=os.x,o[8]=$e.x,o[1]=Xn.y,o[5]=os.y,o[9]=$e.y,o[2]=Xn.z,o[6]=os.z,o[10]=$e.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,o=e.elements,l=this.elements,h=i[0],u=i[4],d=i[8],p=i[12],m=i[1],v=i[5],g=i[9],y=i[13],b=i[2],E=i[6],x=i[10],_=i[14],D=i[3],A=i[7],N=i[11],$=i[15],O=o[0],U=o[4],K=o[8],P=o[12],T=o[1],G=o[5],Q=o[9],F=o[13],tt=o[2],et=o[6],at=o[10],ct=o[14],B=o[3],ut=o[7],J=o[11],ft=o[15];return l[0]=h*O+u*T+d*tt+p*B,l[4]=h*U+u*G+d*et+p*ut,l[8]=h*K+u*Q+d*at+p*J,l[12]=h*P+u*F+d*ct+p*ft,l[1]=m*O+v*T+g*tt+y*B,l[5]=m*U+v*G+g*et+y*ut,l[9]=m*K+v*Q+g*at+y*J,l[13]=m*P+v*F+g*ct+y*ft,l[2]=b*O+E*T+x*tt+_*B,l[6]=b*U+E*G+x*et+_*ut,l[10]=b*K+E*Q+x*at+_*J,l[14]=b*P+E*F+x*ct+_*ft,l[3]=D*O+A*T+N*tt+$*B,l[7]=D*U+A*G+N*et+$*ut,l[11]=D*K+A*Q+N*at+$*J,l[15]=D*P+A*F+N*ct+$*ft,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],o=t[8],l=t[12],h=t[1],u=t[5],d=t[9],p=t[13],m=t[2],v=t[6],g=t[10],y=t[14],b=t[3],E=t[7],x=t[11],_=t[15];return b*(+l*d*v-o*p*v-l*u*g+i*p*g+o*u*y-i*d*y)+E*(+e*d*y-e*p*g+l*h*g-o*h*y+o*p*m-l*d*m)+x*(+e*p*v-e*u*y-l*h*v+i*h*y+l*u*m-i*p*m)+_*(-o*u*m-e*d*v+e*u*g+o*h*v-i*h*g+i*d*m)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const o=this.elements;return t.isVector3?(o[12]=t.x,o[13]=t.y,o[14]=t.z):(o[12]=t,o[13]=e,o[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],o=t[2],l=t[3],h=t[4],u=t[5],d=t[6],p=t[7],m=t[8],v=t[9],g=t[10],y=t[11],b=t[12],E=t[13],x=t[14],_=t[15],D=v*x*p-E*g*p+E*d*y-u*x*y-v*d*_+u*g*_,A=b*g*p-m*x*p-b*d*y+h*x*y+m*d*_-h*g*_,N=m*E*p-b*v*p+b*u*y-h*E*y-m*u*_+h*v*_,$=b*v*d-m*E*d-b*u*g+h*E*g+m*u*x-h*v*x,O=e*D+i*A+o*N+l*$;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/O;return t[0]=D*U,t[1]=(E*g*l-v*x*l-E*o*y+i*x*y+v*o*_-i*g*_)*U,t[2]=(u*x*l-E*d*l+E*o*p-i*x*p-u*o*_+i*d*_)*U,t[3]=(v*d*l-u*g*l-v*o*p+i*g*p+u*o*y-i*d*y)*U,t[4]=A*U,t[5]=(m*x*l-b*g*l+b*o*y-e*x*y-m*o*_+e*g*_)*U,t[6]=(b*d*l-h*x*l-b*o*p+e*x*p+h*o*_-e*d*_)*U,t[7]=(h*g*l-m*d*l+m*o*p-e*g*p-h*o*y+e*d*y)*U,t[8]=N*U,t[9]=(b*v*l-m*E*l-b*i*y+e*E*y+m*i*_-e*v*_)*U,t[10]=(h*E*l-b*u*l+b*i*p-e*E*p-h*i*_+e*u*_)*U,t[11]=(m*u*l-h*v*l-m*i*p+e*v*p+h*i*y-e*u*y)*U,t[12]=$*U,t[13]=(m*E*o-b*v*o+b*i*g-e*E*g-m*i*x+e*v*x)*U,t[14]=(b*u*o-h*E*o-b*i*d+e*E*d+h*i*x-e*u*x)*U,t[15]=(h*v*o-m*u*o+m*i*d-e*v*d-h*i*g+e*u*g)*U,this}scale(t){const e=this.elements,i=t.x,o=t.y,l=t.z;return e[0]*=i,e[4]*=o,e[8]*=l,e[1]*=i,e[5]*=o,e[9]*=l,e[2]*=i,e[6]*=o,e[10]*=l,e[3]*=i,e[7]*=o,e[11]*=l,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],o=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,o))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),o=Math.sin(e),l=1-i,h=t.x,u=t.y,d=t.z,p=l*h,m=l*u;return this.set(p*h+i,p*u-o*d,p*d+o*u,0,p*u+o*d,m*u+i,m*d-o*h,0,p*d-o*u,m*d+o*h,l*d*d+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,o,l,h){return this.set(1,i,l,0,t,1,h,0,e,o,1,0,0,0,0,1),this}compose(t,e,i){const o=this.elements,l=e._x,h=e._y,u=e._z,d=e._w,p=l+l,m=h+h,v=u+u,g=l*p,y=l*m,b=l*v,E=h*m,x=h*v,_=u*v,D=d*p,A=d*m,N=d*v,$=i.x,O=i.y,U=i.z;return o[0]=(1-(E+_))*$,o[1]=(y+N)*$,o[2]=(b-A)*$,o[3]=0,o[4]=(y-N)*O,o[5]=(1-(g+_))*O,o[6]=(x+D)*O,o[7]=0,o[8]=(b+A)*U,o[9]=(x-D)*U,o[10]=(1-(g+E))*U,o[11]=0,o[12]=t.x,o[13]=t.y,o[14]=t.z,o[15]=1,this}decompose(t,e,i){const o=this.elements;let l=Ni.set(o[0],o[1],o[2]).length();const h=Ni.set(o[4],o[5],o[6]).length(),u=Ni.set(o[8],o[9],o[10]).length();this.determinant()<0&&(l=-l),t.x=o[12],t.y=o[13],t.z=o[14],un.copy(this);const p=1/l,m=1/h,v=1/u;return un.elements[0]*=p,un.elements[1]*=p,un.elements[2]*=p,un.elements[4]*=m,un.elements[5]*=m,un.elements[6]*=m,un.elements[8]*=v,un.elements[9]*=v,un.elements[10]*=v,e.setFromRotationMatrix(un),i.x=l,i.y=h,i.z=u,this}makePerspective(t,e,i,o,l,h,u=Bn){const d=this.elements,p=2*l/(e-t),m=2*l/(i-o),v=(e+t)/(e-t),g=(i+o)/(i-o);let y,b;if(u===Bn)y=-(h+l)/(h-l),b=-2*h*l/(h-l);else if(u===Rs)y=-h/(h-l),b=-h*l/(h-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return d[0]=p,d[4]=0,d[8]=v,d[12]=0,d[1]=0,d[5]=m,d[9]=g,d[13]=0,d[2]=0,d[6]=0,d[10]=y,d[14]=b,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(t,e,i,o,l,h,u=Bn){const d=this.elements,p=1/(e-t),m=1/(i-o),v=1/(h-l),g=(e+t)*p,y=(i+o)*m;let b,E;if(u===Bn)b=(h+l)*v,E=-2*v;else if(u===Rs)b=l*v,E=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return d[0]=2*p,d[4]=0,d[8]=0,d[12]=-g,d[1]=0,d[5]=2*m,d[9]=0,d[13]=-y,d[2]=0,d[6]=0,d[10]=E,d[14]=-b,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let o=0;o<16;o++)if(e[o]!==i[o])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Ni=new k,un=new xe,_d=new k(0,0,0),gd=new k(1,1,1),Xn=new k,os=new k,$e=new k,Rl=new xe,Il=new Lr;class Tn{constructor(t=0,e=0,i=0,o=Tn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=o}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,o=this._order){return this._x=t,this._y=e,this._z=i,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const o=t.elements,l=o[0],h=o[4],u=o[8],d=o[1],p=o[5],m=o[9],v=o[2],g=o[6],y=o[10];switch(e){case"XYZ":this._y=Math.asin(Ze(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-m,y),this._z=Math.atan2(-h,l)):(this._x=Math.atan2(g,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(u,y),this._z=Math.atan2(d,p)):(this._y=Math.atan2(-v,l),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-v,y),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(d,l));break;case"ZYX":this._y=Math.asin(-Ze(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(g,y),this._z=Math.atan2(d,l)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(Ze(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-m,p),this._y=Math.atan2(-v,l)):(this._x=0,this._y=Math.atan2(u,y));break;case"XZY":this._z=Math.asin(-Ze(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(g,p),this._y=Math.atan2(u,l)):(this._x=Math.atan2(-m,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Rl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Rl,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Il.setFromEuler(this),this.setFromQuaternion(Il,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Tn.DEFAULT_ORDER="XYZ";class Wc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let vd=0;const Dl=new k,Oi=new Lr,Dn=new xe,as=new k,Sr=new k,xd=new k,yd=new Lr,Ul=new k(1,0,0),Nl=new k(0,1,0),Ol=new k(0,0,1),Fl={type:"added"},Md={type:"removed"},Fi={type:"childadded",child:null},Eo={type:"childremoved",child:null};class Ie extends rr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vd++}),this.uuid=Cr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ie.DEFAULT_UP.clone();const t=new k,e=new Tn,i=new Lr,o=new k(1,1,1);function l(){i.setFromEuler(e,!1)}function h(){e.setFromQuaternion(i,void 0,!1)}e._onChange(l),i._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new xe},normalMatrix:{value:new jt}}),this.matrix=new xe,this.matrixWorld=new xe,this.matrixAutoUpdate=Ie.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Oi.setFromAxisAngle(t,e),this.quaternion.multiply(Oi),this}rotateOnWorldAxis(t,e){return Oi.setFromAxisAngle(t,e),this.quaternion.premultiply(Oi),this}rotateX(t){return this.rotateOnAxis(Ul,t)}rotateY(t){return this.rotateOnAxis(Nl,t)}rotateZ(t){return this.rotateOnAxis(Ol,t)}translateOnAxis(t,e){return Dl.copy(t).applyQuaternion(this.quaternion),this.position.add(Dl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ul,t)}translateY(t){return this.translateOnAxis(Nl,t)}translateZ(t){return this.translateOnAxis(Ol,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Dn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?as.copy(t):as.set(t,e,i);const o=this.parent;this.updateWorldMatrix(!0,!1),Sr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Dn.lookAt(Sr,as,this.up):Dn.lookAt(as,Sr,this.up),this.quaternion.setFromRotationMatrix(Dn),o&&(Dn.extractRotation(o.matrixWorld),Oi.setFromRotationMatrix(Dn),this.quaternion.premultiply(Oi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Fl),Fi.child=t,this.dispatchEvent(Fi),Fi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Md),Eo.child=t,this.dispatchEvent(Eo),Eo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Dn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Dn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Dn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Fl),Fi.child=t,this.dispatchEvent(Fi),Fi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,o=this.children.length;i<o;i++){const h=this.children[i].getObjectByProperty(t,e);if(h!==void 0)return h}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const o=this.children;for(let l=0,h=o.length;l<h;l++)o[l].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sr,t,xd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sr,yd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,o=e.length;i<o;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,o=e.length;i<o;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,o=e.length;i<o;i++){const l=e[i];(l.matrixWorldAutoUpdate===!0||t===!0)&&l.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const o=this.children;for(let l=0,h=o.length;l<h;l++){const u=o[l];u.matrixWorldAutoUpdate===!0&&u.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(u=>({boxInitialized:u.boxInitialized,boxMin:u.box.min.toArray(),boxMax:u.box.max.toArray(),sphereInitialized:u.sphereInitialized,sphereRadius:u.sphere.radius,sphereCenter:u.sphere.center.toArray()})),o.maxGeometryCount=this._maxGeometryCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function l(u,d){return u[d.uuid]===void 0&&(u[d.uuid]=d.toJSON(t)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(t.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const d=u.shapes;if(Array.isArray(d))for(let p=0,m=d.length;p<m;p++){const v=d[p];l(t.shapes,v)}else l(t.shapes,d)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(t.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let d=0,p=this.material.length;d<p;d++)u.push(l(t.materials,this.material[d]));o.material=u}else o.material=l(t.materials,this.material);if(this.children.length>0){o.children=[];for(let u=0;u<this.children.length;u++)o.children.push(this.children[u].toJSON(t).object)}if(this.animations.length>0){o.animations=[];for(let u=0;u<this.animations.length;u++){const d=this.animations[u];o.animations.push(l(t.animations,d))}}if(e){const u=h(t.geometries),d=h(t.materials),p=h(t.textures),m=h(t.images),v=h(t.shapes),g=h(t.skeletons),y=h(t.animations),b=h(t.nodes);u.length>0&&(i.geometries=u),d.length>0&&(i.materials=d),p.length>0&&(i.textures=p),m.length>0&&(i.images=m),v.length>0&&(i.shapes=v),g.length>0&&(i.skeletons=g),y.length>0&&(i.animations=y),b.length>0&&(i.nodes=b)}return i.object=o,i;function h(u){const d=[];for(const p in u){const m=u[p];delete m.metadata,d.push(m)}return d}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const o=t.children[i];this.add(o.clone())}return this}}Ie.DEFAULT_UP=new k(0,1,0);Ie.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const dn=new k,Un=new k,To=new k,Nn=new k,Bi=new k,zi=new k,Bl=new k,bo=new k,wo=new k,Ao=new k;class Mn{constructor(t=new k,e=new k,i=new k){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,o){o.subVectors(i,e),dn.subVectors(t,e),o.cross(dn);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(t,e,i,o,l){dn.subVectors(o,e),Un.subVectors(i,e),To.subVectors(t,e);const h=dn.dot(dn),u=dn.dot(Un),d=dn.dot(To),p=Un.dot(Un),m=Un.dot(To),v=h*p-u*u;if(v===0)return l.set(0,0,0),null;const g=1/v,y=(p*d-u*m)*g,b=(h*m-u*d)*g;return l.set(1-y-b,b,y)}static containsPoint(t,e,i,o){return this.getBarycoord(t,e,i,o,Nn)===null?!1:Nn.x>=0&&Nn.y>=0&&Nn.x+Nn.y<=1}static getInterpolation(t,e,i,o,l,h,u,d){return this.getBarycoord(t,e,i,o,Nn)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(l,Nn.x),d.addScaledVector(h,Nn.y),d.addScaledVector(u,Nn.z),d)}static isFrontFacing(t,e,i,o){return dn.subVectors(i,e),Un.subVectors(t,e),dn.cross(Un).dot(o)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,o){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[o]),this}setFromAttributeAndIndices(t,e,i,o){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,o),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return dn.subVectors(this.c,this.b),Un.subVectors(this.a,this.b),dn.cross(Un).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Mn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Mn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,o,l){return Mn.getInterpolation(t,this.a,this.b,this.c,e,i,o,l)}containsPoint(t){return Mn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Mn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,o=this.b,l=this.c;let h,u;Bi.subVectors(o,i),zi.subVectors(l,i),bo.subVectors(t,i);const d=Bi.dot(bo),p=zi.dot(bo);if(d<=0&&p<=0)return e.copy(i);wo.subVectors(t,o);const m=Bi.dot(wo),v=zi.dot(wo);if(m>=0&&v<=m)return e.copy(o);const g=d*v-m*p;if(g<=0&&d>=0&&m<=0)return h=d/(d-m),e.copy(i).addScaledVector(Bi,h);Ao.subVectors(t,l);const y=Bi.dot(Ao),b=zi.dot(Ao);if(b>=0&&y<=b)return e.copy(l);const E=y*p-d*b;if(E<=0&&p>=0&&b<=0)return u=p/(p-b),e.copy(i).addScaledVector(zi,u);const x=m*b-y*v;if(x<=0&&v-m>=0&&y-b>=0)return Bl.subVectors(l,o),u=(v-m)/(v-m+(y-b)),e.copy(o).addScaledVector(Bl,u);const _=1/(x+E+g);return h=E*_,u=g*_,e.copy(i).addScaledVector(Bi,h).addScaledVector(zi,u)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Xc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zn={h:0,s:0,l:0},ls={h:0,s:0,l:0};function Po(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class ee{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const o=t;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=xn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ce.toWorkingColorSpace(this,e),this}setRGB(t,e,i,o=ce.workingColorSpace){return this.r=t,this.g=e,this.b=i,ce.toWorkingColorSpace(this,o),this}setHSL(t,e,i,o=ce.workingColorSpace){if(t=od(t,1),e=Ze(e,0,1),i=Ze(i,0,1),e===0)this.r=this.g=this.b=i;else{const l=i<=.5?i*(1+e):i+e-i*e,h=2*i-l;this.r=Po(h,l,t+1/3),this.g=Po(h,l,t),this.b=Po(h,l,t-1/3)}return ce.toWorkingColorSpace(this,o),this}setStyle(t,e=xn){function i(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(t)){let l;const h=o[1],u=o[2];switch(h){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,e);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,e);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(t)){const l=o[1],h=l.length;if(h===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,e);if(h===6)return this.setHex(parseInt(l,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=xn){const i=Xc[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ji(t.r),this.g=Ji(t.g),this.b=Ji(t.b),this}copyLinearToSRGB(t){return this.r=mo(t.r),this.g=mo(t.g),this.b=mo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=xn){return ce.fromWorkingColorSpace(Oe.copy(this),t),Math.round(Ze(Oe.r*255,0,255))*65536+Math.round(Ze(Oe.g*255,0,255))*256+Math.round(Ze(Oe.b*255,0,255))}getHexString(t=xn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ce.workingColorSpace){ce.fromWorkingColorSpace(Oe.copy(this),e);const i=Oe.r,o=Oe.g,l=Oe.b,h=Math.max(i,o,l),u=Math.min(i,o,l);let d,p;const m=(u+h)/2;if(u===h)d=0,p=0;else{const v=h-u;switch(p=m<=.5?v/(h+u):v/(2-h-u),h){case i:d=(o-l)/v+(o<l?6:0);break;case o:d=(l-i)/v+2;break;case l:d=(i-o)/v+4;break}d/=6}return t.h=d,t.s=p,t.l=m,t}getRGB(t,e=ce.workingColorSpace){return ce.fromWorkingColorSpace(Oe.copy(this),e),t.r=Oe.r,t.g=Oe.g,t.b=Oe.b,t}getStyle(t=xn){ce.fromWorkingColorSpace(Oe.copy(this),t);const e=Oe.r,i=Oe.g,o=Oe.b;return t!==xn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(o*255)})`}offsetHSL(t,e,i){return this.getHSL(Zn),this.setHSL(Zn.h+t,Zn.s+e,Zn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Zn),t.getHSL(ls);const i=fo(Zn.h,ls.h,e),o=fo(Zn.s,ls.s,e),l=fo(Zn.l,ls.l,e);return this.setHSL(i,o,l),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,o=this.b,l=t.elements;return this.r=l[0]*e+l[3]*i+l[6]*o,this.g=l[1]*e+l[4]*i+l[7]*o,this.b=l[2]*e+l[5]*i+l[8]*o,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Oe=new ee;ee.NAMES=Xc;let Sd=0;class Ei extends rr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sd++}),this.uuid=Cr(),this.name="",this.type="Material",this.blending=ji,this.side=Qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wo,this.blendDst=Xo,this.blendEquation=gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ee(0,0,0),this.blendAlpha=0,this.depthFunc=ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Tl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Li,this.stencilZFail=Li,this.stencilZPass=Li,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const o=this[e];if(o===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(i):o&&o.isVector3&&i&&i.isVector3?o.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ji&&(i.blending=this.blending),this.side!==Qn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Wo&&(i.blendSrc=this.blendSrc),this.blendDst!==Xo&&(i.blendDst=this.blendDst),this.blendEquation!==gi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ws&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Tl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Li&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Li&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Li&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function o(l){const h=[];for(const u in l){const d=l[u];delete d.metadata,h.push(d)}return h}if(e){const l=o(t.textures),h=o(t.images);l.length>0&&(i.textures=l),h.length>0&&(i.images=h)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const o=e.length;i=new Array(o);for(let l=0;l!==o;++l)i[l]=e[l].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Zc extends Ei{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.combine=Pc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const we=new k,cs=new ne;class on{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=bl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=$n,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return ld("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[t+o]=e.array[i+o];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)cs.fromBufferAttribute(this,e),cs.applyMatrix3(t),this.setXY(e,cs.x,cs.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)we.fromBufferAttribute(this,e),we.applyMatrix3(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)we.fromBufferAttribute(this,e),we.applyMatrix4(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)we.fromBufferAttribute(this,e),we.applyNormalMatrix(t),this.setXYZ(e,we.x,we.y,we.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)we.fromBufferAttribute(this,e),we.transformDirection(t),this.setXYZ(e,we.x,we.y,we.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=xr(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Xe(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=xr(e,this.array)),e}setX(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=xr(e,this.array)),e}setY(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=xr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=xr(e,this.array)),e}setW(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Xe(e,this.array),i=Xe(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,o){return t*=this.itemSize,this.normalized&&(e=Xe(e,this.array),i=Xe(i,this.array),o=Xe(o,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=o,this}setXYZW(t,e,i,o,l){return t*=this.itemSize,this.normalized&&(e=Xe(e,this.array),i=Xe(i,this.array),o=Xe(o,this.array),l=Xe(l,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=o,this.array[t+3]=l,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==bl&&(t.usage=this.usage),t}}class qc extends on{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Yc extends on{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class pn extends on{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Ed=0;const rn=new xe,Co=new Ie,ki=new k,je=new Rr,Er=new Rr,Re=new k;class an extends rr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ed++}),this.uuid=Cr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Hc(t)?Yc:qc)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const l=new jt().getNormalMatrix(t);i.applyNormalMatrix(l),i.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(t),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return rn.makeRotationFromQuaternion(t),this.applyMatrix4(rn),this}rotateX(t){return rn.makeRotationX(t),this.applyMatrix4(rn),this}rotateY(t){return rn.makeRotationY(t),this.applyMatrix4(rn),this}rotateZ(t){return rn.makeRotationZ(t),this.applyMatrix4(rn),this}translate(t,e,i){return rn.makeTranslation(t,e,i),this.applyMatrix4(rn),this}scale(t,e,i){return rn.makeScale(t,e,i),this.applyMatrix4(rn),this}lookAt(t){return Co.lookAt(t),Co.updateMatrix(),this.applyMatrix4(Co.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ki).negate(),this.translate(ki.x,ki.y,ki.z),this}setFromPoints(t){const e=[];for(let i=0,o=t.length;i<o;i++){const l=t[i];e.push(l.x,l.y,l.z||0)}return this.setAttribute("position",new pn(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Rr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,o=e.length;i<o;i++){const l=e[i];je.setFromBufferAttribute(l),this.morphTargetsRelative?(Re.addVectors(this.boundingBox.min,je.min),this.boundingBox.expandByPoint(Re),Re.addVectors(this.boundingBox.max,je.max),this.boundingBox.expandByPoint(Re)):(this.boundingBox.expandByPoint(je.min),this.boundingBox.expandByPoint(je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ir);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(t){const i=this.boundingSphere.center;if(je.setFromBufferAttribute(t),e)for(let l=0,h=e.length;l<h;l++){const u=e[l];Er.setFromBufferAttribute(u),this.morphTargetsRelative?(Re.addVectors(je.min,Er.min),je.expandByPoint(Re),Re.addVectors(je.max,Er.max),je.expandByPoint(Re)):(je.expandByPoint(Er.min),je.expandByPoint(Er.max))}je.getCenter(i);let o=0;for(let l=0,h=t.count;l<h;l++)Re.fromBufferAttribute(t,l),o=Math.max(o,i.distanceToSquared(Re));if(e)for(let l=0,h=e.length;l<h;l++){const u=e[l],d=this.morphTargetsRelative;for(let p=0,m=u.count;p<m;p++)Re.fromBufferAttribute(u,p),d&&(ki.fromBufferAttribute(t,p),Re.add(ki)),o=Math.max(o,i.distanceToSquared(Re))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,o=e.normal,l=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new on(new Float32Array(4*i.count),4));const h=this.getAttribute("tangent"),u=[],d=[];for(let K=0;K<i.count;K++)u[K]=new k,d[K]=new k;const p=new k,m=new k,v=new k,g=new ne,y=new ne,b=new ne,E=new k,x=new k;function _(K,P,T){p.fromBufferAttribute(i,K),m.fromBufferAttribute(i,P),v.fromBufferAttribute(i,T),g.fromBufferAttribute(l,K),y.fromBufferAttribute(l,P),b.fromBufferAttribute(l,T),m.sub(p),v.sub(p),y.sub(g),b.sub(g);const G=1/(y.x*b.y-b.x*y.y);isFinite(G)&&(E.copy(m).multiplyScalar(b.y).addScaledVector(v,-y.y).multiplyScalar(G),x.copy(v).multiplyScalar(y.x).addScaledVector(m,-b.x).multiplyScalar(G),u[K].add(E),u[P].add(E),u[T].add(E),d[K].add(x),d[P].add(x),d[T].add(x))}let D=this.groups;D.length===0&&(D=[{start:0,count:t.count}]);for(let K=0,P=D.length;K<P;++K){const T=D[K],G=T.start,Q=T.count;for(let F=G,tt=G+Q;F<tt;F+=3)_(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const A=new k,N=new k,$=new k,O=new k;function U(K){$.fromBufferAttribute(o,K),O.copy($);const P=u[K];A.copy(P),A.sub($.multiplyScalar($.dot(P))).normalize(),N.crossVectors(O,P);const G=N.dot(d[K])<0?-1:1;h.setXYZW(K,A.x,A.y,A.z,G)}for(let K=0,P=D.length;K<P;++K){const T=D[K],G=T.start,Q=T.count;for(let F=G,tt=G+Q;F<tt;F+=3)U(t.getX(F+0)),U(t.getX(F+1)),U(t.getX(F+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new on(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let g=0,y=i.count;g<y;g++)i.setXYZ(g,0,0,0);const o=new k,l=new k,h=new k,u=new k,d=new k,p=new k,m=new k,v=new k;if(t)for(let g=0,y=t.count;g<y;g+=3){const b=t.getX(g+0),E=t.getX(g+1),x=t.getX(g+2);o.fromBufferAttribute(e,b),l.fromBufferAttribute(e,E),h.fromBufferAttribute(e,x),m.subVectors(h,l),v.subVectors(o,l),m.cross(v),u.fromBufferAttribute(i,b),d.fromBufferAttribute(i,E),p.fromBufferAttribute(i,x),u.add(m),d.add(m),p.add(m),i.setXYZ(b,u.x,u.y,u.z),i.setXYZ(E,d.x,d.y,d.z),i.setXYZ(x,p.x,p.y,p.z)}else for(let g=0,y=e.count;g<y;g+=3)o.fromBufferAttribute(e,g+0),l.fromBufferAttribute(e,g+1),h.fromBufferAttribute(e,g+2),m.subVectors(h,l),v.subVectors(o,l),m.cross(v),i.setXYZ(g+0,m.x,m.y,m.z),i.setXYZ(g+1,m.x,m.y,m.z),i.setXYZ(g+2,m.x,m.y,m.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Re.fromBufferAttribute(t,e),Re.normalize(),t.setXYZ(e,Re.x,Re.y,Re.z)}toNonIndexed(){function t(u,d){const p=u.array,m=u.itemSize,v=u.normalized,g=new p.constructor(d.length*m);let y=0,b=0;for(let E=0,x=d.length;E<x;E++){u.isInterleavedBufferAttribute?y=d[E]*u.data.stride+u.offset:y=d[E]*m;for(let _=0;_<m;_++)g[b++]=p[y++]}return new on(g,m,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new an,i=this.index.array,o=this.attributes;for(const u in o){const d=o[u],p=t(d,i);e.setAttribute(u,p)}const l=this.morphAttributes;for(const u in l){const d=[],p=l[u];for(let m=0,v=p.length;m<v;m++){const g=p[m],y=t(g,i);d.push(y)}e.morphAttributes[u]=d}e.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let u=0,d=h.length;u<d;u++){const p=h[u];e.addGroup(p.start,p.count,p.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const p in d)d[p]!==void 0&&(t[p]=d[p]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const d in i){const p=i[d];t.data.attributes[d]=p.toJSON(t.data)}const o={};let l=!1;for(const d in this.morphAttributes){const p=this.morphAttributes[d],m=[];for(let v=0,g=p.length;v<g;v++){const y=p[v];m.push(y.toJSON(t.data))}m.length>0&&(o[d]=m,l=!0)}l&&(t.data.morphAttributes=o,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const u=this.boundingSphere;return u!==null&&(t.data.boundingSphere={center:u.center.toArray(),radius:u.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const o=t.attributes;for(const p in o){const m=o[p];this.setAttribute(p,m.clone(e))}const l=t.morphAttributes;for(const p in l){const m=[],v=l[p];for(let g=0,y=v.length;g<y;g++)m.push(v[g].clone(e));this.morphAttributes[p]=m}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,m=h.length;p<m;p++){const v=h[p];this.addGroup(v.start,v.count,v.materialIndex)}const u=t.boundingBox;u!==null&&(this.boundingBox=u.clone());const d=t.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const zl=new xe,ui=new ra,hs=new Ir,kl=new k,Hi=new k,Gi=new k,Vi=new k,Lo=new k,us=new k,ds=new ne,fs=new ne,ps=new ne,Hl=new k,Gl=new k,Vl=new k,ms=new k,_s=new k;class Je extends Ie{constructor(t=new an,e=new Zc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const o=e[i[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,h=o.length;l<h;l++){const u=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=l}}}}getVertexPosition(t,e){const i=this.geometry,o=i.attributes.position,l=i.morphAttributes.position,h=i.morphTargetsRelative;e.fromBufferAttribute(o,t);const u=this.morphTargetInfluences;if(l&&u){us.set(0,0,0);for(let d=0,p=l.length;d<p;d++){const m=u[d],v=l[d];m!==0&&(Lo.fromBufferAttribute(v,t),h?us.addScaledVector(Lo,m):us.addScaledVector(Lo.sub(e),m))}e.add(us)}return e}raycast(t,e){const i=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),hs.copy(i.boundingSphere),hs.applyMatrix4(l),ui.copy(t.ray).recast(t.near),!(hs.containsPoint(ui.origin)===!1&&(ui.intersectSphere(hs,kl)===null||ui.origin.distanceToSquared(kl)>(t.far-t.near)**2))&&(zl.copy(l).invert(),ui.copy(t.ray).applyMatrix4(zl),!(i.boundingBox!==null&&ui.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,ui)))}_computeIntersections(t,e,i){let o;const l=this.geometry,h=this.material,u=l.index,d=l.attributes.position,p=l.attributes.uv,m=l.attributes.uv1,v=l.attributes.normal,g=l.groups,y=l.drawRange;if(u!==null)if(Array.isArray(h))for(let b=0,E=g.length;b<E;b++){const x=g[b],_=h[x.materialIndex],D=Math.max(x.start,y.start),A=Math.min(u.count,Math.min(x.start+x.count,y.start+y.count));for(let N=D,$=A;N<$;N+=3){const O=u.getX(N),U=u.getX(N+1),K=u.getX(N+2);o=gs(this,_,t,i,p,m,v,O,U,K),o&&(o.faceIndex=Math.floor(N/3),o.face.materialIndex=x.materialIndex,e.push(o))}}else{const b=Math.max(0,y.start),E=Math.min(u.count,y.start+y.count);for(let x=b,_=E;x<_;x+=3){const D=u.getX(x),A=u.getX(x+1),N=u.getX(x+2);o=gs(this,h,t,i,p,m,v,D,A,N),o&&(o.faceIndex=Math.floor(x/3),e.push(o))}}else if(d!==void 0)if(Array.isArray(h))for(let b=0,E=g.length;b<E;b++){const x=g[b],_=h[x.materialIndex],D=Math.max(x.start,y.start),A=Math.min(d.count,Math.min(x.start+x.count,y.start+y.count));for(let N=D,$=A;N<$;N+=3){const O=N,U=N+1,K=N+2;o=gs(this,_,t,i,p,m,v,O,U,K),o&&(o.faceIndex=Math.floor(N/3),o.face.materialIndex=x.materialIndex,e.push(o))}}else{const b=Math.max(0,y.start),E=Math.min(d.count,y.start+y.count);for(let x=b,_=E;x<_;x+=3){const D=x,A=x+1,N=x+2;o=gs(this,h,t,i,p,m,v,D,A,N),o&&(o.faceIndex=Math.floor(x/3),e.push(o))}}}}function Td(s,t,e,i,o,l,h,u){let d;if(t.side===qe?d=i.intersectTriangle(h,l,o,!0,u):d=i.intersectTriangle(o,l,h,t.side===Qn,u),d===null)return null;_s.copy(u),_s.applyMatrix4(s.matrixWorld);const p=e.ray.origin.distanceTo(_s);return p<e.near||p>e.far?null:{distance:p,point:_s.clone(),object:s}}function gs(s,t,e,i,o,l,h,u,d,p){s.getVertexPosition(u,Hi),s.getVertexPosition(d,Gi),s.getVertexPosition(p,Vi);const m=Td(s,t,e,i,Hi,Gi,Vi,ms);if(m){o&&(ds.fromBufferAttribute(o,u),fs.fromBufferAttribute(o,d),ps.fromBufferAttribute(o,p),m.uv=Mn.getInterpolation(ms,Hi,Gi,Vi,ds,fs,ps,new ne)),l&&(ds.fromBufferAttribute(l,u),fs.fromBufferAttribute(l,d),ps.fromBufferAttribute(l,p),m.uv1=Mn.getInterpolation(ms,Hi,Gi,Vi,ds,fs,ps,new ne)),h&&(Hl.fromBufferAttribute(h,u),Gl.fromBufferAttribute(h,d),Vl.fromBufferAttribute(h,p),m.normal=Mn.getInterpolation(ms,Hi,Gi,Vi,Hl,Gl,Vl,new k),m.normal.dot(i.direction)>0&&m.normal.multiplyScalar(-1));const v={a:u,b:d,c:p,normal:new k,materialIndex:0};Mn.getNormal(Hi,Gi,Vi,v.normal),m.face=v}return m}class Si extends an{constructor(t=1,e=1,i=1,o=1,l=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:o,heightSegments:l,depthSegments:h};const u=this;o=Math.floor(o),l=Math.floor(l),h=Math.floor(h);const d=[],p=[],m=[],v=[];let g=0,y=0;b("z","y","x",-1,-1,i,e,t,h,l,0),b("z","y","x",1,-1,i,e,-t,h,l,1),b("x","z","y",1,1,t,i,e,o,h,2),b("x","z","y",1,-1,t,i,-e,o,h,3),b("x","y","z",1,-1,t,e,i,o,l,4),b("x","y","z",-1,-1,t,e,-i,o,l,5),this.setIndex(d),this.setAttribute("position",new pn(p,3)),this.setAttribute("normal",new pn(m,3)),this.setAttribute("uv",new pn(v,2));function b(E,x,_,D,A,N,$,O,U,K,P){const T=N/U,G=$/K,Q=N/2,F=$/2,tt=O/2,et=U+1,at=K+1;let ct=0,B=0;const ut=new k;for(let J=0;J<at;J++){const ft=J*G-F;for(let Lt=0;Lt<et;Lt++){const qt=Lt*T-Q;ut[E]=qt*D,ut[x]=ft*A,ut[_]=tt,p.push(ut.x,ut.y,ut.z),ut[E]=0,ut[x]=0,ut[_]=O>0?1:-1,m.push(ut.x,ut.y,ut.z),v.push(Lt/U),v.push(1-J/K),ct+=1}}for(let J=0;J<K;J++)for(let ft=0;ft<U;ft++){const Lt=g+ft+et*J,qt=g+ft+et*(J+1),q=g+(ft+1)+et*(J+1),nt=g+(ft+1)+et*J;d.push(Lt,qt,nt),d.push(qt,q,nt),B+=6}u.addGroup(y,B,P),y+=B,g+=ct}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Si(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function nr(s){const t={};for(const e in s){t[e]={};for(const i in s[e]){const o=s[e][i];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=o.clone():Array.isArray(o)?t[e][i]=o.slice():t[e][i]=o}}return t}function He(s){const t={};for(let e=0;e<s.length;e++){const i=nr(s[e]);for(const o in i)t[o]=i[o]}return t}function bd(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function $c(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ce.workingColorSpace}const wd={clone:nr,merge:He};var Ad=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Pd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ti extends Ei{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ad,this.fragmentShader=Pd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=nr(t.uniforms),this.uniformsGroups=bd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const o in this.uniforms){const h=this.uniforms[o].value;h&&h.isTexture?e.uniforms[o]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?e.uniforms[o]={type:"c",value:h.getHex()}:h&&h.isVector2?e.uniforms[o]={type:"v2",value:h.toArray()}:h&&h.isVector3?e.uniforms[o]={type:"v3",value:h.toArray()}:h&&h.isVector4?e.uniforms[o]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?e.uniforms[o]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?e.uniforms[o]={type:"m4",value:h.toArray()}:e.uniforms[o]={value:h}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const o in this.extensions)this.extensions[o]===!0&&(i[o]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class jc extends Ie{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xe,this.projectionMatrix=new xe,this.projectionMatrixInverse=new xe,this.coordinateSystem=Bn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const qn=new k,Wl=new ne,Xl=new ne;class Ke extends jc{constructor(t=50,e=1,i=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=o,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=jo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(uo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return jo*2*Math.atan(Math.tan(uo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){qn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(qn.x,qn.y).multiplyScalar(-t/qn.z),qn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(qn.x,qn.y).multiplyScalar(-t/qn.z)}getViewSize(t,e){return this.getViewBounds(t,Wl,Xl),e.subVectors(Xl,Wl)}setViewOffset(t,e,i,o,l,h){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=o,this.view.width=l,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(uo*.5*this.fov)/this.zoom,i=2*e,o=this.aspect*i,l=-.5*o;const h=this.view;if(this.view!==null&&this.view.enabled){const d=h.fullWidth,p=h.fullHeight;l+=h.offsetX*o/d,e-=h.offsetY*i/p,o*=h.width/d,i*=h.height/p}const u=this.filmOffset;u!==0&&(l+=t*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Wi=-90,Xi=1;class Cd extends Ie{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Ke(Wi,Xi,t,e);o.layers=this.layers,this.add(o);const l=new Ke(Wi,Xi,t,e);l.layers=this.layers,this.add(l);const h=new Ke(Wi,Xi,t,e);h.layers=this.layers,this.add(h);const u=new Ke(Wi,Xi,t,e);u.layers=this.layers,this.add(u);const d=new Ke(Wi,Xi,t,e);d.layers=this.layers,this.add(d);const p=new Ke(Wi,Xi,t,e);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,o,l,h,u,d]=e;for(const p of e)this.remove(p);if(t===Bn)i.up.set(0,1,0),i.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(t===Rs)i.up.set(0,-1,0),i.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of e)this.add(p),p.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:o}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[l,h,u,d,p,m]=this.children,v=t.getRenderTarget(),g=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;const E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,o),t.render(e,l),t.setRenderTarget(i,1,o),t.render(e,h),t.setRenderTarget(i,2,o),t.render(e,u),t.setRenderTarget(i,3,o),t.render(e,d),t.setRenderTarget(i,4,o),t.render(e,p),i.texture.generateMipmaps=E,t.setRenderTarget(i,5,o),t.render(e,m),t.setRenderTarget(v,g,y),t.xr.enabled=b,i.texture.needsPMREMUpdate=!0}}class Kc extends Ye{constructor(t,e,i,o,l,h,u,d,p,m){t=t!==void 0?t:[],e=e!==void 0?e:Qi,super(t,e,i,o,l,h,u,d,p,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ld extends Mi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},o=[i,i,i,i,i,i];this.texture=new Kc(o,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:fn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Si(5,5,5),l=new ti({name:"CubemapFromEquirect",uniforms:nr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:qe,blending:jn});l.uniforms.tEquirect.value=e;const h=new Je(o,l),u=e.minFilter;return e.minFilter===yi&&(e.minFilter=fn),new Cd(1,10,this).update(t,h),e.minFilter=u,h.geometry.dispose(),h.material.dispose(),this}clear(t,e,i,o){const l=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(e,i,o);t.setRenderTarget(l)}}const Ro=new k,Rd=new k,Id=new jt;class mi{constructor(t=new k(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,o){return this.normal.set(t,e,i),this.constant=o,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const o=Ro.subVectors(i,e).cross(Rd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(o,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Ro),o=this.normal.dot(i);if(o===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const l=-(t.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:e.copy(t.start).addScaledVector(i,l)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Id.getNormalMatrix(t),o=this.coplanarPoint(Ro).applyMatrix4(t),l=this.normal.applyMatrix3(i).normalize();return this.constant=-o.dot(l),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const di=new Ir,vs=new k;class sa{constructor(t=new mi,e=new mi,i=new mi,o=new mi,l=new mi,h=new mi){this.planes=[t,e,i,o,l,h]}set(t,e,i,o,l,h){const u=this.planes;return u[0].copy(t),u[1].copy(e),u[2].copy(i),u[3].copy(o),u[4].copy(l),u[5].copy(h),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Bn){const i=this.planes,o=t.elements,l=o[0],h=o[1],u=o[2],d=o[3],p=o[4],m=o[5],v=o[6],g=o[7],y=o[8],b=o[9],E=o[10],x=o[11],_=o[12],D=o[13],A=o[14],N=o[15];if(i[0].setComponents(d-l,g-p,x-y,N-_).normalize(),i[1].setComponents(d+l,g+p,x+y,N+_).normalize(),i[2].setComponents(d+h,g+m,x+b,N+D).normalize(),i[3].setComponents(d-h,g-m,x-b,N-D).normalize(),i[4].setComponents(d-u,g-v,x-E,N-A).normalize(),e===Bn)i[5].setComponents(d+u,g+v,x+E,N+A).normalize();else if(e===Rs)i[5].setComponents(u,v,E,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),di.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),di.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(di)}intersectsSprite(t){return di.center.set(0,0,0),di.radius=.7071067811865476,di.applyMatrix4(t.matrixWorld),this.intersectsSphere(di)}intersectsSphere(t){const e=this.planes,i=t.center,o=-t.radius;for(let l=0;l<6;l++)if(e[l].distanceToPoint(i)<o)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const o=e[i];if(vs.x=o.normal.x>0?t.max.x:t.min.x,vs.y=o.normal.y>0?t.max.y:t.min.y,vs.z=o.normal.z>0?t.max.z:t.min.z,o.distanceToPoint(vs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Jc(){let s=null,t=!1,e=null,i=null;function o(l,h){e(l,h),i=s.requestAnimationFrame(o)}return{start:function(){t!==!0&&e!==null&&(i=s.requestAnimationFrame(o),t=!0)},stop:function(){s.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(l){e=l},setContext:function(l){s=l}}}function Dd(s){const t=new WeakMap;function e(u,d){const p=u.array,m=u.usage,v=p.byteLength,g=s.createBuffer();s.bindBuffer(d,g),s.bufferData(d,p,m),u.onUploadCallback();let y;if(p instanceof Float32Array)y=s.FLOAT;else if(p instanceof Uint16Array)u.isFloat16BufferAttribute?y=s.HALF_FLOAT:y=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=s.SHORT;else if(p instanceof Uint32Array)y=s.UNSIGNED_INT;else if(p instanceof Int32Array)y=s.INT;else if(p instanceof Int8Array)y=s.BYTE;else if(p instanceof Uint8Array)y=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:g,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:u.version,size:v}}function i(u,d,p){const m=d.array,v=d._updateRange,g=d.updateRanges;if(s.bindBuffer(p,u),v.count===-1&&g.length===0&&s.bufferSubData(p,0,m),g.length!==0){for(let y=0,b=g.length;y<b;y++){const E=g[y];s.bufferSubData(p,E.start*m.BYTES_PER_ELEMENT,m,E.start,E.count)}d.clearUpdateRanges()}v.count!==-1&&(s.bufferSubData(p,v.offset*m.BYTES_PER_ELEMENT,m,v.offset,v.count),v.count=-1),d.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),t.get(u)}function l(u){u.isInterleavedBufferAttribute&&(u=u.data);const d=t.get(u);d&&(s.deleteBuffer(d.buffer),t.delete(u))}function h(u,d){if(u.isGLBufferAttribute){const m=t.get(u);(!m||m.version<u.version)&&t.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const p=t.get(u);if(p===void 0)t.set(u,e(u,d));else if(p.version<u.version){if(p.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(p.buffer,u,d),p.version=u.version}}return{get:o,remove:l,update:h}}class ir extends an{constructor(t=1,e=1,i=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:o};const l=t/2,h=e/2,u=Math.floor(i),d=Math.floor(o),p=u+1,m=d+1,v=t/u,g=e/d,y=[],b=[],E=[],x=[];for(let _=0;_<m;_++){const D=_*g-h;for(let A=0;A<p;A++){const N=A*v-l;b.push(N,-D,0),E.push(0,0,1),x.push(A/u),x.push(1-_/d)}}for(let _=0;_<d;_++)for(let D=0;D<u;D++){const A=D+p*_,N=D+p*(_+1),$=D+1+p*(_+1),O=D+1+p*_;y.push(A,N,O),y.push(N,$,O)}this.setIndex(y),this.setAttribute("position",new pn(b,3)),this.setAttribute("normal",new pn(E,3)),this.setAttribute("uv",new pn(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ir(t.width,t.height,t.widthSegments,t.heightSegments)}}var Ud=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Nd=`#ifdef USE_ALPHAHASH
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
#endif`,Od=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Fd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,kd=`#ifdef USE_AOMAP
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
#endif`,Hd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Gd=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,Vd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Wd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Xd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Zd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,qd=`#ifdef USE_IRIDESCENCE
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
#endif`,Yd=`#ifdef USE_BUMPMAP
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
#endif`,$d=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,jd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Kd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Jd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Qd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,tf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ef=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,nf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,rf=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,sf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,of=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,af=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,uf="gl_FragColor = linearToOutputTexel( gl_FragColor );",df=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,ff=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,pf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,mf=`#ifdef USE_ENVMAP
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
#endif`,_f=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,vf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Mf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Sf=`#ifdef USE_GRADIENTMAP
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
}`,Ef=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Tf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Af=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
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
#endif`,Pf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
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
	#endif
#endif`,Cf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Lf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Rf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,If=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Df=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,Uf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Nf=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Of=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ff=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Bf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Gf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Vf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Wf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Xf=`#if defined( USE_POINTS_UV )
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
#endif`,Zf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Yf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$f=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,jf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Kf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
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
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Jf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Qf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,tp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ep=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,np=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ip=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,rp=`#ifdef USE_NORMALMAP
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
#endif`,sp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,op=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ap=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,lp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,cp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,up=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,fp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,mp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_p=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,vp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,xp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,yp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Mp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Sp=`#ifdef USE_SKINNING
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
#endif`,Ep=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Tp=`#ifdef USE_SKINNING
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
#endif`,bp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ap=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Pp=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, newPeak * vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Cp=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Lp=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Rp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ip=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Up=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Np=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Op=`uniform sampler2D t2D;
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
}`,Fp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hp=`#include <common>
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
}`,Gp=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Vp=`#define DISTANCE
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
}`,Wp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Xp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Zp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qp=`uniform float scale;
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
}`,Yp=`uniform vec3 diffuse;
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
}`,$p=`#include <common>
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
}`,jp=`uniform vec3 diffuse;
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
}`,Kp=`#define LAMBERT
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
}`,Jp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,Qp=`#define MATCAP
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
}`,tm=`#define MATCAP
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
}`,em=`#define NORMAL
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
}`,nm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,im=`#define PHONG
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
}`,rm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,sm=`#define STANDARD
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
}`,om=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,am=`#define TOON
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
}`,lm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,cm=`uniform float size;
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
}`,hm=`uniform vec3 diffuse;
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
}`,um=`#include <common>
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
}`,dm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,fm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,pm=`uniform vec3 diffuse;
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
}`,$t={alphahash_fragment:Ud,alphahash_pars_fragment:Nd,alphamap_fragment:Od,alphamap_pars_fragment:Fd,alphatest_fragment:Bd,alphatest_pars_fragment:zd,aomap_fragment:kd,aomap_pars_fragment:Hd,batching_pars_vertex:Gd,batching_vertex:Vd,begin_vertex:Wd,beginnormal_vertex:Xd,bsdfs:Zd,iridescence_fragment:qd,bumpmap_pars_fragment:Yd,clipping_planes_fragment:$d,clipping_planes_pars_fragment:jd,clipping_planes_pars_vertex:Kd,clipping_planes_vertex:Jd,color_fragment:Qd,color_pars_fragment:tf,color_pars_vertex:ef,color_vertex:nf,common:rf,cube_uv_reflection_fragment:sf,defaultnormal_vertex:of,displacementmap_pars_vertex:af,displacementmap_vertex:lf,emissivemap_fragment:cf,emissivemap_pars_fragment:hf,colorspace_fragment:uf,colorspace_pars_fragment:df,envmap_fragment:ff,envmap_common_pars_fragment:pf,envmap_pars_fragment:mf,envmap_pars_vertex:_f,envmap_physical_pars_fragment:Pf,envmap_vertex:gf,fog_vertex:vf,fog_pars_vertex:xf,fog_fragment:yf,fog_pars_fragment:Mf,gradientmap_pars_fragment:Sf,lightmap_fragment:Ef,lightmap_pars_fragment:Tf,lights_lambert_fragment:bf,lights_lambert_pars_fragment:wf,lights_pars_begin:Af,lights_toon_fragment:Cf,lights_toon_pars_fragment:Lf,lights_phong_fragment:Rf,lights_phong_pars_fragment:If,lights_physical_fragment:Df,lights_physical_pars_fragment:Uf,lights_fragment_begin:Nf,lights_fragment_maps:Of,lights_fragment_end:Ff,logdepthbuf_fragment:Bf,logdepthbuf_pars_fragment:zf,logdepthbuf_pars_vertex:kf,logdepthbuf_vertex:Hf,map_fragment:Gf,map_pars_fragment:Vf,map_particle_fragment:Wf,map_particle_pars_fragment:Xf,metalnessmap_fragment:Zf,metalnessmap_pars_fragment:qf,morphinstance_vertex:Yf,morphcolor_vertex:$f,morphnormal_vertex:jf,morphtarget_pars_vertex:Kf,morphtarget_vertex:Jf,normal_fragment_begin:Qf,normal_fragment_maps:tp,normal_pars_fragment:ep,normal_pars_vertex:np,normal_vertex:ip,normalmap_pars_fragment:rp,clearcoat_normal_fragment_begin:sp,clearcoat_normal_fragment_maps:op,clearcoat_pars_fragment:ap,iridescence_pars_fragment:lp,opaque_fragment:cp,packing:hp,premultiplied_alpha_fragment:up,project_vertex:dp,dithering_fragment:fp,dithering_pars_fragment:pp,roughnessmap_fragment:mp,roughnessmap_pars_fragment:_p,shadowmap_pars_fragment:gp,shadowmap_pars_vertex:vp,shadowmap_vertex:xp,shadowmask_pars_fragment:yp,skinbase_vertex:Mp,skinning_pars_vertex:Sp,skinning_vertex:Ep,skinnormal_vertex:Tp,specularmap_fragment:bp,specularmap_pars_fragment:wp,tonemapping_fragment:Ap,tonemapping_pars_fragment:Pp,transmission_fragment:Cp,transmission_pars_fragment:Lp,uv_pars_fragment:Rp,uv_pars_vertex:Ip,uv_vertex:Dp,worldpos_vertex:Up,background_vert:Np,background_frag:Op,backgroundCube_vert:Fp,backgroundCube_frag:Bp,cube_vert:zp,cube_frag:kp,depth_vert:Hp,depth_frag:Gp,distanceRGBA_vert:Vp,distanceRGBA_frag:Wp,equirect_vert:Xp,equirect_frag:Zp,linedashed_vert:qp,linedashed_frag:Yp,meshbasic_vert:$p,meshbasic_frag:jp,meshlambert_vert:Kp,meshlambert_frag:Jp,meshmatcap_vert:Qp,meshmatcap_frag:tm,meshnormal_vert:em,meshnormal_frag:nm,meshphong_vert:im,meshphong_frag:rm,meshphysical_vert:sm,meshphysical_frag:om,meshtoon_vert:am,meshtoon_frag:lm,points_vert:cm,points_frag:hm,shadow_vert:um,shadow_frag:dm,sprite_vert:fm,sprite_frag:pm},gt={common:{diffuse:{value:new ee(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new jt}},envmap:{envMap:{value:null},envMapRotation:{value:new jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new jt},normalScale:{value:new ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0},uvTransform:{value:new jt}},sprite:{diffuse:{value:new ee(16777215)},opacity:{value:1},center:{value:new ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}}},yn={basic:{uniforms:He([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.fog]),vertexShader:$t.meshbasic_vert,fragmentShader:$t.meshbasic_frag},lambert:{uniforms:He([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new ee(0)}}]),vertexShader:$t.meshlambert_vert,fragmentShader:$t.meshlambert_frag},phong:{uniforms:He([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new ee(0)},specular:{value:new ee(1118481)},shininess:{value:30}}]),vertexShader:$t.meshphong_vert,fragmentShader:$t.meshphong_frag},standard:{uniforms:He([gt.common,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.roughnessmap,gt.metalnessmap,gt.fog,gt.lights,{emissive:{value:new ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag},toon:{uniforms:He([gt.common,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.gradientmap,gt.fog,gt.lights,{emissive:{value:new ee(0)}}]),vertexShader:$t.meshtoon_vert,fragmentShader:$t.meshtoon_frag},matcap:{uniforms:He([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,{matcap:{value:null}}]),vertexShader:$t.meshmatcap_vert,fragmentShader:$t.meshmatcap_frag},points:{uniforms:He([gt.points,gt.fog]),vertexShader:$t.points_vert,fragmentShader:$t.points_frag},dashed:{uniforms:He([gt.common,gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$t.linedashed_vert,fragmentShader:$t.linedashed_frag},depth:{uniforms:He([gt.common,gt.displacementmap]),vertexShader:$t.depth_vert,fragmentShader:$t.depth_frag},normal:{uniforms:He([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,{opacity:{value:1}}]),vertexShader:$t.meshnormal_vert,fragmentShader:$t.meshnormal_frag},sprite:{uniforms:He([gt.sprite,gt.fog]),vertexShader:$t.sprite_vert,fragmentShader:$t.sprite_frag},background:{uniforms:{uvTransform:{value:new jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$t.background_vert,fragmentShader:$t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new jt}},vertexShader:$t.backgroundCube_vert,fragmentShader:$t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$t.cube_vert,fragmentShader:$t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$t.equirect_vert,fragmentShader:$t.equirect_frag},distanceRGBA:{uniforms:He([gt.common,gt.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$t.distanceRGBA_vert,fragmentShader:$t.distanceRGBA_frag},shadow:{uniforms:He([gt.lights,gt.fog,{color:{value:new ee(0)},opacity:{value:1}}]),vertexShader:$t.shadow_vert,fragmentShader:$t.shadow_frag}};yn.physical={uniforms:He([yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new jt},clearcoatNormalScale:{value:new ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new jt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new jt},sheen:{value:0},sheenColor:{value:new ee(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new jt},transmissionSamplerSize:{value:new ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new jt},attenuationDistance:{value:0},attenuationColor:{value:new ee(0)},specularColor:{value:new ee(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new jt},anisotropyVector:{value:new ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new jt}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag};const xs={r:0,b:0,g:0},fi=new Tn,mm=new xe;function _m(s,t,e,i,o,l,h){const u=new ee(0);let d=l===!0?0:1,p,m,v=null,g=0,y=null;function b(x,_){let D=!1,A=_.isScene===!0?_.background:null;A&&A.isTexture&&(A=(_.backgroundBlurriness>0?e:t).get(A)),A===null?E(u,d):A&&A.isColor&&(E(A,1),D=!0);const N=s.xr.getEnvironmentBlendMode();N==="additive"?i.buffers.color.setClear(0,0,0,1,h):N==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,h),(s.autoClear||D)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),A&&(A.isCubeTexture||A.mapping===Ds)?(m===void 0&&(m=new Je(new Si(1,1,1),new ti({name:"BackgroundCubeMaterial",uniforms:nr(yn.backgroundCube.uniforms),vertexShader:yn.backgroundCube.vertexShader,fragmentShader:yn.backgroundCube.fragmentShader,side:qe,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function($,O,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(m)),fi.copy(_.backgroundRotation),fi.x*=-1,fi.y*=-1,fi.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(fi.y*=-1,fi.z*=-1),m.material.uniforms.envMap.value=A,m.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(mm.makeRotationFromEuler(fi)),m.material.toneMapped=ce.getTransfer(A.colorSpace)!==ge,(v!==A||g!==A.version||y!==s.toneMapping)&&(m.material.needsUpdate=!0,v=A,g=A.version,y=s.toneMapping),m.layers.enableAll(),x.unshift(m,m.geometry,m.material,0,0,null)):A&&A.isTexture&&(p===void 0&&(p=new Je(new ir(2,2),new ti({name:"BackgroundMaterial",uniforms:nr(yn.background.uniforms),vertexShader:yn.background.vertexShader,fragmentShader:yn.background.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(p)),p.material.uniforms.t2D.value=A,p.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,p.material.toneMapped=ce.getTransfer(A.colorSpace)!==ge,A.matrixAutoUpdate===!0&&A.updateMatrix(),p.material.uniforms.uvTransform.value.copy(A.matrix),(v!==A||g!==A.version||y!==s.toneMapping)&&(p.material.needsUpdate=!0,v=A,g=A.version,y=s.toneMapping),p.layers.enableAll(),x.unshift(p,p.geometry,p.material,0,0,null))}function E(x,_){x.getRGB(xs,$c(s)),i.buffers.color.setClear(xs.r,xs.g,xs.b,_,h)}return{getClearColor:function(){return u},setClearColor:function(x,_=1){u.set(x),d=_,E(u,d)},getClearAlpha:function(){return d},setClearAlpha:function(x){d=x,E(u,d)},render:b}}function gm(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},o=g(null);let l=o,h=!1;function u(T,G,Q,F,tt){let et=!1;const at=v(F,Q,G);l!==at&&(l=at,p(l.object)),et=y(T,F,Q,tt),et&&b(T,F,Q,tt),tt!==null&&t.update(tt,s.ELEMENT_ARRAY_BUFFER),(et||h)&&(h=!1,N(T,G,Q,F),tt!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(tt).buffer))}function d(){return s.createVertexArray()}function p(T){return s.bindVertexArray(T)}function m(T){return s.deleteVertexArray(T)}function v(T,G,Q){const F=Q.wireframe===!0;let tt=i[T.id];tt===void 0&&(tt={},i[T.id]=tt);let et=tt[G.id];et===void 0&&(et={},tt[G.id]=et);let at=et[F];return at===void 0&&(at=g(d()),et[F]=at),at}function g(T){const G=[],Q=[],F=[];for(let tt=0;tt<e;tt++)G[tt]=0,Q[tt]=0,F[tt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:Q,attributeDivisors:F,object:T,attributes:{},index:null}}function y(T,G,Q,F){const tt=l.attributes,et=G.attributes;let at=0;const ct=Q.getAttributes();for(const B in ct)if(ct[B].location>=0){const J=tt[B];let ft=et[B];if(ft===void 0&&(B==="instanceMatrix"&&T.instanceMatrix&&(ft=T.instanceMatrix),B==="instanceColor"&&T.instanceColor&&(ft=T.instanceColor)),J===void 0||J.attribute!==ft||ft&&J.data!==ft.data)return!0;at++}return l.attributesNum!==at||l.index!==F}function b(T,G,Q,F){const tt={},et=G.attributes;let at=0;const ct=Q.getAttributes();for(const B in ct)if(ct[B].location>=0){let J=et[B];J===void 0&&(B==="instanceMatrix"&&T.instanceMatrix&&(J=T.instanceMatrix),B==="instanceColor"&&T.instanceColor&&(J=T.instanceColor));const ft={};ft.attribute=J,J&&J.data&&(ft.data=J.data),tt[B]=ft,at++}l.attributes=tt,l.attributesNum=at,l.index=F}function E(){const T=l.newAttributes;for(let G=0,Q=T.length;G<Q;G++)T[G]=0}function x(T){_(T,0)}function _(T,G){const Q=l.newAttributes,F=l.enabledAttributes,tt=l.attributeDivisors;Q[T]=1,F[T]===0&&(s.enableVertexAttribArray(T),F[T]=1),tt[T]!==G&&(s.vertexAttribDivisor(T,G),tt[T]=G)}function D(){const T=l.newAttributes,G=l.enabledAttributes;for(let Q=0,F=G.length;Q<F;Q++)G[Q]!==T[Q]&&(s.disableVertexAttribArray(Q),G[Q]=0)}function A(T,G,Q,F,tt,et,at){at===!0?s.vertexAttribIPointer(T,G,Q,tt,et):s.vertexAttribPointer(T,G,Q,F,tt,et)}function N(T,G,Q,F){E();const tt=F.attributes,et=Q.getAttributes(),at=G.defaultAttributeValues;for(const ct in et){const B=et[ct];if(B.location>=0){let ut=tt[ct];if(ut===void 0&&(ct==="instanceMatrix"&&T.instanceMatrix&&(ut=T.instanceMatrix),ct==="instanceColor"&&T.instanceColor&&(ut=T.instanceColor)),ut!==void 0){const J=ut.normalized,ft=ut.itemSize,Lt=t.get(ut);if(Lt===void 0)continue;const qt=Lt.buffer,q=Lt.type,nt=Lt.bytesPerElement,lt=q===s.INT||q===s.UNSIGNED_INT||ut.gpuType===Ic;if(ut.isInterleavedBufferAttribute){const pt=ut.data,Nt=pt.stride,Yt=ut.offset;if(pt.isInstancedInterleavedBuffer){for(let Jt=0;Jt<B.locationSize;Jt++)_(B.location+Jt,pt.meshPerAttribute);T.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let Jt=0;Jt<B.locationSize;Jt++)x(B.location+Jt);s.bindBuffer(s.ARRAY_BUFFER,qt);for(let Jt=0;Jt<B.locationSize;Jt++)A(B.location+Jt,ft/B.locationSize,q,J,Nt*nt,(Yt+ft/B.locationSize*Jt)*nt,lt)}else{if(ut.isInstancedBufferAttribute){for(let pt=0;pt<B.locationSize;pt++)_(B.location+pt,ut.meshPerAttribute);T.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let pt=0;pt<B.locationSize;pt++)x(B.location+pt);s.bindBuffer(s.ARRAY_BUFFER,qt);for(let pt=0;pt<B.locationSize;pt++)A(B.location+pt,ft/B.locationSize,q,J,ft*nt,ft/B.locationSize*pt*nt,lt)}}else if(at!==void 0){const J=at[ct];if(J!==void 0)switch(J.length){case 2:s.vertexAttrib2fv(B.location,J);break;case 3:s.vertexAttrib3fv(B.location,J);break;case 4:s.vertexAttrib4fv(B.location,J);break;default:s.vertexAttrib1fv(B.location,J)}}}}D()}function $(){K();for(const T in i){const G=i[T];for(const Q in G){const F=G[Q];for(const tt in F)m(F[tt].object),delete F[tt];delete G[Q]}delete i[T]}}function O(T){if(i[T.id]===void 0)return;const G=i[T.id];for(const Q in G){const F=G[Q];for(const tt in F)m(F[tt].object),delete F[tt];delete G[Q]}delete i[T.id]}function U(T){for(const G in i){const Q=i[G];if(Q[T.id]===void 0)continue;const F=Q[T.id];for(const tt in F)m(F[tt].object),delete F[tt];delete Q[T.id]}}function K(){P(),h=!0,l!==o&&(l=o,p(l.object))}function P(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:u,reset:K,resetDefaultState:P,dispose:$,releaseStatesOfGeometry:O,releaseStatesOfProgram:U,initAttributes:E,enableAttribute:x,disableUnusedAttributes:D}}function vm(s,t,e){let i;function o(d){i=d}function l(d,p){s.drawArrays(i,d,p),e.update(p,i,1)}function h(d,p,m){m!==0&&(s.drawArraysInstanced(i,d,p,m),e.update(p,i,m))}function u(d,p,m){if(m===0)return;const v=t.get("WEBGL_multi_draw");if(v===null)for(let g=0;g<m;g++)this.render(d[g],p[g]);else{v.multiDrawArraysWEBGL(i,d,0,p,0,m);let g=0;for(let y=0;y<m;y++)g+=p[y];e.update(g,i,1)}}this.setMode=o,this.render=l,this.renderInstances=h,this.renderMultiDraw=u}function xm(s,t,e){let i;function o(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function l(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp";const u=l(h);u!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",u,"instead."),h=u);const d=e.logarithmicDepthBuffer===!0,p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),y=s.getParameter(s.MAX_VERTEX_ATTRIBS),b=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),E=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),_=m>0,D=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,precision:h,logarithmicDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:g,maxAttributes:y,maxVertexUniforms:b,maxVaryings:E,maxFragmentUniforms:x,vertexTextures:_,maxSamples:D}}function ym(s){const t=this;let e=null,i=0,o=!1,l=!1;const h=new mi,u=new jt,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(v,g){const y=v.length!==0||g||i!==0||o;return o=g,i=v.length,y},this.beginShadows=function(){l=!0,m(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(v,g){e=m(v,g,0)},this.setState=function(v,g,y){const b=v.clippingPlanes,E=v.clipIntersection,x=v.clipShadows,_=s.get(v);if(!o||b===null||b.length===0||l&&!x)l?m(null):p();else{const D=l?0:i,A=D*4;let N=_.clippingState||null;d.value=N,N=m(b,g,A,y);for(let $=0;$!==A;++$)N[$]=e[$];_.clippingState=N,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=D}};function p(){d.value!==e&&(d.value=e,d.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function m(v,g,y,b){const E=v!==null?v.length:0;let x=null;if(E!==0){if(x=d.value,b!==!0||x===null){const _=y+E*4,D=g.matrixWorldInverse;u.getNormalMatrix(D),(x===null||x.length<_)&&(x=new Float32Array(_));for(let A=0,N=y;A!==E;++A,N+=4)h.copy(v[A]).applyMatrix4(D,u),h.normal.toArray(x,N),x[N+3]=h.constant}d.value=x,d.needsUpdate=!0}return t.numPlanes=E,t.numIntersection=0,x}}function Mm(s){let t=new WeakMap;function e(h,u){return u===Zo?h.mapping=Qi:u===qo&&(h.mapping=tr),h}function i(h){if(h&&h.isTexture){const u=h.mapping;if(u===Zo||u===qo)if(t.has(h)){const d=t.get(h).texture;return e(d,h.mapping)}else{const d=h.image;if(d&&d.height>0){const p=new Ld(d.height);return p.fromEquirectangularTexture(s,h),t.set(h,p),h.addEventListener("dispose",o),e(p.texture,h.mapping)}else return null}}return h}function o(h){const u=h.target;u.removeEventListener("dispose",o);const d=t.get(u);d!==void 0&&(t.delete(u),d.dispose())}function l(){t=new WeakMap}return{get:i,dispose:l}}class Qc extends jc{constructor(t=-1,e=1,i=1,o=-1,l=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=o,this.near=l,this.far=h,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,o,l,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=o,this.view.width=l,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=i-t,h=i+t,u=o+e,d=o-e;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,h=l+p*this.view.width,u-=m*this.view.offsetY,d=u-m*this.view.height}this.projectionMatrix.makeOrthographic(l,h,u,d,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Yi=4,Zl=[.125,.215,.35,.446,.526,.582],vi=20,Io=new Qc,ql=new ee;let Do=null,Uo=0,No=0,Oo=!1;const _i=(1+Math.sqrt(5))/2,Zi=1/_i,Yl=[new k(1,1,1),new k(-1,1,1),new k(1,1,-1),new k(-1,1,-1),new k(0,_i,Zi),new k(0,_i,-Zi),new k(Zi,0,_i),new k(-Zi,0,_i),new k(_i,Zi,0),new k(-_i,Zi,0)];class $l{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,o=100){Do=this._renderer.getRenderTarget(),Uo=this._renderer.getActiveCubeFace(),No=this._renderer.getActiveMipmapLevel(),Oo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,o,l),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Kl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Do,Uo,No),this._renderer.xr.enabled=Oo,t.scissorTest=!1,ys(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Qi||t.mapping===tr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Do=this._renderer.getRenderTarget(),Uo=this._renderer.getActiveCubeFace(),No=this._renderer.getActiveMipmapLevel(),Oo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:As,format:En,colorSpace:ei,depthBuffer:!1},o=jl(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jl(t,e,i);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Sm(l)),this._blurMaterial=Em(l,t,e)}return o}_compileMaterial(t){const e=new Je(this._lodPlanes[0],t);this._renderer.compile(e,Io)}_sceneToCubeUV(t,e,i,o){const u=new Ke(90,1,e,i),d=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],m=this._renderer,v=m.autoClear,g=m.toneMapping;m.getClearColor(ql),m.toneMapping=Kn,m.autoClear=!1;const y=new Zc({name:"PMREM.Background",side:qe,depthWrite:!1,depthTest:!1}),b=new Je(new Si,y);let E=!1;const x=t.background;x?x.isColor&&(y.color.copy(x),t.background=null,E=!0):(y.color.copy(ql),E=!0);for(let _=0;_<6;_++){const D=_%3;D===0?(u.up.set(0,d[_],0),u.lookAt(p[_],0,0)):D===1?(u.up.set(0,0,d[_]),u.lookAt(0,p[_],0)):(u.up.set(0,d[_],0),u.lookAt(0,0,p[_]));const A=this._cubeSize;ys(o,D*A,_>2?A:0,A,A),m.setRenderTarget(o),E&&m.render(b,u),m.render(t,u)}b.geometry.dispose(),b.material.dispose(),m.toneMapping=g,m.autoClear=v,t.background=x}_textureToCubeUV(t,e){const i=this._renderer,o=t.mapping===Qi||t.mapping===tr;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Kl());const l=o?this._cubemapMaterial:this._equirectMaterial,h=new Je(this._lodPlanes[0],l),u=l.uniforms;u.envMap.value=t;const d=this._cubeSize;ys(e,0,0,3*d,2*d),i.setRenderTarget(e),i.render(h,Io)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let o=1;o<this._lodPlanes.length;o++){const l=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),h=Yl[(o-1)%Yl.length];this._blur(t,o-1,o,l,h)}e.autoClear=i}_blur(t,e,i,o,l){const h=this._pingPongRenderTarget;this._halfBlur(t,h,e,i,o,"latitudinal",l),this._halfBlur(h,t,i,i,o,"longitudinal",l)}_halfBlur(t,e,i,o,l,h,u){const d=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,v=new Je(this._lodPlanes[o],p),g=p.uniforms,y=this._sizeLods[i]-1,b=isFinite(l)?Math.PI/(2*y):2*Math.PI/(2*vi-1),E=l/b,x=isFinite(l)?1+Math.floor(m*E):vi;x>vi&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${vi}`);const _=[];let D=0;for(let U=0;U<vi;++U){const K=U/E,P=Math.exp(-K*K/2);_.push(P),U===0?D+=P:U<x&&(D+=2*P)}for(let U=0;U<_.length;U++)_[U]=_[U]/D;g.envMap.value=t.texture,g.samples.value=x,g.weights.value=_,g.latitudinal.value=h==="latitudinal",u&&(g.poleAxis.value=u);const{_lodMax:A}=this;g.dTheta.value=b,g.mipInt.value=A-i;const N=this._sizeLods[o],$=3*N*(o>A-Yi?o-A+Yi:0),O=4*(this._cubeSize-N);ys(e,$,O,3*N,2*N),d.setRenderTarget(e),d.render(v,Io)}}function Sm(s){const t=[],e=[],i=[];let o=s;const l=s-Yi+1+Zl.length;for(let h=0;h<l;h++){const u=Math.pow(2,o);e.push(u);let d=1/u;h>s-Yi?d=Zl[h-s+Yi-1]:h===0&&(d=0),i.push(d);const p=1/(u-2),m=-p,v=1+p,g=[m,m,v,m,v,v,m,m,v,v,m,v],y=6,b=6,E=3,x=2,_=1,D=new Float32Array(E*b*y),A=new Float32Array(x*b*y),N=new Float32Array(_*b*y);for(let O=0;O<y;O++){const U=O%3*2/3-1,K=O>2?0:-1,P=[U,K,0,U+2/3,K,0,U+2/3,K+1,0,U,K,0,U+2/3,K+1,0,U,K+1,0];D.set(P,E*b*O),A.set(g,x*b*O);const T=[O,O,O,O,O,O];N.set(T,_*b*O)}const $=new an;$.setAttribute("position",new on(D,E)),$.setAttribute("uv",new on(A,x)),$.setAttribute("faceIndex",new on(N,_)),t.push($),o>Yi&&o--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function jl(s,t,e){const i=new Mi(s,t,e);return i.texture.mapping=Ds,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ys(s,t,e,i,o){s.viewport.set(t,e,i,o),s.scissor.set(t,e,i,o)}function Em(s,t,e){const i=new Float32Array(vi),o=new k(0,1,0);return new ti({name:"SphericalGaussianBlur",defines:{n:vi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:oa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:jn,depthTest:!1,depthWrite:!1})}function Kl(){return new ti({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:oa(),fragmentShader:`

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
		`,blending:jn,depthTest:!1,depthWrite:!1})}function Jl(){return new ti({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:oa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:jn,depthTest:!1,depthWrite:!1})}function oa(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Tm(s){let t=new WeakMap,e=null;function i(u){if(u&&u.isTexture){const d=u.mapping,p=d===Zo||d===qo,m=d===Qi||d===tr;if(p||m){let v=t.get(u);const g=v!==void 0?v.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return e===null&&(e=new $l(s)),v=p?e.fromEquirectangular(u,v):e.fromCubemap(u,v),v.texture.pmremVersion=u.pmremVersion,t.set(u,v),v.texture;if(v!==void 0)return v.texture;{const y=u.image;return p&&y&&y.height>0||m&&y&&o(y)?(e===null&&(e=new $l(s)),v=p?e.fromEquirectangular(u):e.fromCubemap(u),v.texture.pmremVersion=u.pmremVersion,t.set(u,v),u.addEventListener("dispose",l),v.texture):null}}}return u}function o(u){let d=0;const p=6;for(let m=0;m<p;m++)u[m]!==void 0&&d++;return d===p}function l(u){const d=u.target;d.removeEventListener("dispose",l);const p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function h(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:h}}function bm(s){const t={};function e(i){if(t[i]!==void 0)return t[i];let o;switch(i){case"WEBGL_depth_texture":o=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=s.getExtension(i)}return t[i]=o,o}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const o=e(i);return o===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),o}}}function wm(s,t,e,i){const o={},l=new WeakMap;function h(v){const g=v.target;g.index!==null&&t.remove(g.index);for(const b in g.attributes)t.remove(g.attributes[b]);for(const b in g.morphAttributes){const E=g.morphAttributes[b];for(let x=0,_=E.length;x<_;x++)t.remove(E[x])}g.removeEventListener("dispose",h),delete o[g.id];const y=l.get(g);y&&(t.remove(y),l.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,e.memory.geometries--}function u(v,g){return o[g.id]===!0||(g.addEventListener("dispose",h),o[g.id]=!0,e.memory.geometries++),g}function d(v){const g=v.attributes;for(const b in g)t.update(g[b],s.ARRAY_BUFFER);const y=v.morphAttributes;for(const b in y){const E=y[b];for(let x=0,_=E.length;x<_;x++)t.update(E[x],s.ARRAY_BUFFER)}}function p(v){const g=[],y=v.index,b=v.attributes.position;let E=0;if(y!==null){const D=y.array;E=y.version;for(let A=0,N=D.length;A<N;A+=3){const $=D[A+0],O=D[A+1],U=D[A+2];g.push($,O,O,U,U,$)}}else if(b!==void 0){const D=b.array;E=b.version;for(let A=0,N=D.length/3-1;A<N;A+=3){const $=A+0,O=A+1,U=A+2;g.push($,O,O,U,U,$)}}else return;const x=new(Hc(g)?Yc:qc)(g,1);x.version=E;const _=l.get(v);_&&t.remove(_),l.set(v,x)}function m(v){const g=l.get(v);if(g){const y=v.index;y!==null&&g.version<y.version&&p(v)}else p(v);return l.get(v)}return{get:u,update:d,getWireframeAttribute:m}}function Am(s,t,e){let i;function o(v){i=v}let l,h;function u(v){l=v.type,h=v.bytesPerElement}function d(v,g){s.drawElements(i,g,l,v*h),e.update(g,i,1)}function p(v,g,y){y!==0&&(s.drawElementsInstanced(i,g,l,v*h,y),e.update(g,i,y))}function m(v,g,y){if(y===0)return;const b=t.get("WEBGL_multi_draw");if(b===null)for(let E=0;E<y;E++)this.render(v[E]/h,g[E]);else{b.multiDrawElementsWEBGL(i,g,0,l,v,0,y);let E=0;for(let x=0;x<y;x++)E+=g[x];e.update(E,i,1)}}this.setMode=o,this.setIndex=u,this.render=d,this.renderInstances=p,this.renderMultiDraw=m}function Pm(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(l,h,u){switch(e.calls++,h){case s.TRIANGLES:e.triangles+=u*(l/3);break;case s.LINES:e.lines+=u*(l/2);break;case s.LINE_STRIP:e.lines+=u*(l-1);break;case s.LINE_LOOP:e.lines+=u*l;break;case s.POINTS:e.points+=u*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function o(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:o,update:i}}function Cm(s,t,e){const i=new WeakMap,o=new ve;function l(h,u,d){const p=h.morphTargetInfluences,m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,v=m!==void 0?m.length:0;let g=i.get(u);if(g===void 0||g.count!==v){let T=function(){K.dispose(),i.delete(u),u.removeEventListener("dispose",T)};var y=T;g!==void 0&&g.texture.dispose();const b=u.morphAttributes.position!==void 0,E=u.morphAttributes.normal!==void 0,x=u.morphAttributes.color!==void 0,_=u.morphAttributes.position||[],D=u.morphAttributes.normal||[],A=u.morphAttributes.color||[];let N=0;b===!0&&(N=1),E===!0&&(N=2),x===!0&&(N=3);let $=u.attributes.position.count*N,O=1;$>t.maxTextureSize&&(O=Math.ceil($/t.maxTextureSize),$=t.maxTextureSize);const U=new Float32Array($*O*4*v),K=new Vc(U,$,O,v);K.type=$n,K.needsUpdate=!0;const P=N*4;for(let G=0;G<v;G++){const Q=_[G],F=D[G],tt=A[G],et=$*O*4*G;for(let at=0;at<Q.count;at++){const ct=at*P;b===!0&&(o.fromBufferAttribute(Q,at),U[et+ct+0]=o.x,U[et+ct+1]=o.y,U[et+ct+2]=o.z,U[et+ct+3]=0),E===!0&&(o.fromBufferAttribute(F,at),U[et+ct+4]=o.x,U[et+ct+5]=o.y,U[et+ct+6]=o.z,U[et+ct+7]=0),x===!0&&(o.fromBufferAttribute(tt,at),U[et+ct+8]=o.x,U[et+ct+9]=o.y,U[et+ct+10]=o.z,U[et+ct+11]=tt.itemSize===4?o.w:1)}}g={count:v,texture:K,size:new ne($,O)},i.set(u,g),u.addEventListener("dispose",T)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)d.getUniforms().setValue(s,"morphTexture",h.morphTexture,e);else{let b=0;for(let x=0;x<p.length;x++)b+=p[x];const E=u.morphTargetsRelative?1:1-b;d.getUniforms().setValue(s,"morphTargetBaseInfluence",E),d.getUniforms().setValue(s,"morphTargetInfluences",p)}d.getUniforms().setValue(s,"morphTargetsTexture",g.texture,e),d.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}return{update:l}}function Lm(s,t,e,i){let o=new WeakMap;function l(d){const p=i.render.frame,m=d.geometry,v=t.get(d,m);if(o.get(v)!==p&&(t.update(v),o.set(v,p)),d.isInstancedMesh&&(d.hasEventListener("dispose",u)===!1&&d.addEventListener("dispose",u),o.get(d)!==p&&(e.update(d.instanceMatrix,s.ARRAY_BUFFER),d.instanceColor!==null&&e.update(d.instanceColor,s.ARRAY_BUFFER),o.set(d,p))),d.isSkinnedMesh){const g=d.skeleton;o.get(g)!==p&&(g.update(),o.set(g,p))}return v}function h(){o=new WeakMap}function u(d){const p=d.target;p.removeEventListener("dispose",u),e.remove(p.instanceMatrix),p.instanceColor!==null&&e.remove(p.instanceColor)}return{update:l,dispose:h}}class th extends Ye{constructor(t,e,i,o,l,h,u,d,p,m){if(m=m!==void 0?m:Ki,m!==Ki&&m!==Ar)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&m===Ki&&(i=er),i===void 0&&m===Ar&&(i=Pr),super(null,o,l,h,u,d,m,i,p),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=u!==void 0?u:sn,this.minFilter=d!==void 0?d:sn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const eh=new Ye,nh=new th(1,1);nh.compareFunction=kc;const ih=new Vc,rh=new pd,sh=new Kc,Ql=[],tc=[],ec=new Float32Array(16),nc=new Float32Array(9),ic=new Float32Array(4);function sr(s,t,e){const i=s[0];if(i<=0||i>0)return s;const o=t*e;let l=Ql[o];if(l===void 0&&(l=new Float32Array(o),Ql[o]=l),t!==0){i.toArray(l,0);for(let h=1,u=0;h!==t;++h)u+=e,s[h].toArray(l,u)}return l}function Ae(s,t){if(s.length!==t.length)return!1;for(let e=0,i=s.length;e<i;e++)if(s[e]!==t[e])return!1;return!0}function Pe(s,t){for(let e=0,i=t.length;e<i;e++)s[e]=t[e]}function Ns(s,t){let e=tc[t];e===void 0&&(e=new Int32Array(t),tc[t]=e);for(let i=0;i!==t;++i)e[i]=s.allocateTextureUnit();return e}function Rm(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Im(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;s.uniform2fv(this.addr,t),Pe(e,t)}}function Dm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ae(e,t))return;s.uniform3fv(this.addr,t),Pe(e,t)}}function Um(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;s.uniform4fv(this.addr,t),Pe(e,t)}}function Nm(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ae(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Pe(e,t)}else{if(Ae(e,i))return;ic.set(i),s.uniformMatrix2fv(this.addr,!1,ic),Pe(e,i)}}function Om(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ae(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Pe(e,t)}else{if(Ae(e,i))return;nc.set(i),s.uniformMatrix3fv(this.addr,!1,nc),Pe(e,i)}}function Fm(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ae(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Pe(e,t)}else{if(Ae(e,i))return;ec.set(i),s.uniformMatrix4fv(this.addr,!1,ec),Pe(e,i)}}function Bm(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function zm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;s.uniform2iv(this.addr,t),Pe(e,t)}}function km(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;s.uniform3iv(this.addr,t),Pe(e,t)}}function Hm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;s.uniform4iv(this.addr,t),Pe(e,t)}}function Gm(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Vm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;s.uniform2uiv(this.addr,t),Pe(e,t)}}function Wm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;s.uniform3uiv(this.addr,t),Pe(e,t)}}function Xm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;s.uniform4uiv(this.addr,t),Pe(e,t)}}function Zm(s,t,e){const i=this.cache,o=e.allocateTextureUnit();i[0]!==o&&(s.uniform1i(this.addr,o),i[0]=o);const l=this.type===s.SAMPLER_2D_SHADOW?nh:eh;e.setTexture2D(t||l,o)}function qm(s,t,e){const i=this.cache,o=e.allocateTextureUnit();i[0]!==o&&(s.uniform1i(this.addr,o),i[0]=o),e.setTexture3D(t||rh,o)}function Ym(s,t,e){const i=this.cache,o=e.allocateTextureUnit();i[0]!==o&&(s.uniform1i(this.addr,o),i[0]=o),e.setTextureCube(t||sh,o)}function $m(s,t,e){const i=this.cache,o=e.allocateTextureUnit();i[0]!==o&&(s.uniform1i(this.addr,o),i[0]=o),e.setTexture2DArray(t||ih,o)}function jm(s){switch(s){case 5126:return Rm;case 35664:return Im;case 35665:return Dm;case 35666:return Um;case 35674:return Nm;case 35675:return Om;case 35676:return Fm;case 5124:case 35670:return Bm;case 35667:case 35671:return zm;case 35668:case 35672:return km;case 35669:case 35673:return Hm;case 5125:return Gm;case 36294:return Vm;case 36295:return Wm;case 36296:return Xm;case 35678:case 36198:case 36298:case 36306:case 35682:return Zm;case 35679:case 36299:case 36307:return qm;case 35680:case 36300:case 36308:case 36293:return Ym;case 36289:case 36303:case 36311:case 36292:return $m}}function Km(s,t){s.uniform1fv(this.addr,t)}function Jm(s,t){const e=sr(t,this.size,2);s.uniform2fv(this.addr,e)}function Qm(s,t){const e=sr(t,this.size,3);s.uniform3fv(this.addr,e)}function t_(s,t){const e=sr(t,this.size,4);s.uniform4fv(this.addr,e)}function e_(s,t){const e=sr(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function n_(s,t){const e=sr(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function i_(s,t){const e=sr(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function r_(s,t){s.uniform1iv(this.addr,t)}function s_(s,t){s.uniform2iv(this.addr,t)}function o_(s,t){s.uniform3iv(this.addr,t)}function a_(s,t){s.uniform4iv(this.addr,t)}function l_(s,t){s.uniform1uiv(this.addr,t)}function c_(s,t){s.uniform2uiv(this.addr,t)}function h_(s,t){s.uniform3uiv(this.addr,t)}function u_(s,t){s.uniform4uiv(this.addr,t)}function d_(s,t,e){const i=this.cache,o=t.length,l=Ns(e,o);Ae(i,l)||(s.uniform1iv(this.addr,l),Pe(i,l));for(let h=0;h!==o;++h)e.setTexture2D(t[h]||eh,l[h])}function f_(s,t,e){const i=this.cache,o=t.length,l=Ns(e,o);Ae(i,l)||(s.uniform1iv(this.addr,l),Pe(i,l));for(let h=0;h!==o;++h)e.setTexture3D(t[h]||rh,l[h])}function p_(s,t,e){const i=this.cache,o=t.length,l=Ns(e,o);Ae(i,l)||(s.uniform1iv(this.addr,l),Pe(i,l));for(let h=0;h!==o;++h)e.setTextureCube(t[h]||sh,l[h])}function m_(s,t,e){const i=this.cache,o=t.length,l=Ns(e,o);Ae(i,l)||(s.uniform1iv(this.addr,l),Pe(i,l));for(let h=0;h!==o;++h)e.setTexture2DArray(t[h]||ih,l[h])}function __(s){switch(s){case 5126:return Km;case 35664:return Jm;case 35665:return Qm;case 35666:return t_;case 35674:return e_;case 35675:return n_;case 35676:return i_;case 5124:case 35670:return r_;case 35667:case 35671:return s_;case 35668:case 35672:return o_;case 35669:case 35673:return a_;case 5125:return l_;case 36294:return c_;case 36295:return h_;case 36296:return u_;case 35678:case 36198:case 36298:case 36306:case 35682:return d_;case 35679:case 36299:case 36307:return f_;case 35680:case 36300:case 36308:case 36293:return p_;case 36289:case 36303:case 36311:case 36292:return m_}}class g_{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=jm(e.type)}}class v_{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=__(e.type)}}class x_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const o=this.seq;for(let l=0,h=o.length;l!==h;++l){const u=o[l];u.setValue(t,e[u.id],i)}}}const Fo=/(\w+)(\])?(\[|\.)?/g;function rc(s,t){s.seq.push(t),s.map[t.id]=t}function y_(s,t,e){const i=s.name,o=i.length;for(Fo.lastIndex=0;;){const l=Fo.exec(i),h=Fo.lastIndex;let u=l[1];const d=l[2]==="]",p=l[3];if(d&&(u=u|0),p===void 0||p==="["&&h+2===o){rc(e,p===void 0?new g_(u,s,t):new v_(u,s,t));break}else{let v=e.map[u];v===void 0&&(v=new x_(u),rc(e,v)),e=v}}}class bs{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const l=t.getActiveUniform(e,o),h=t.getUniformLocation(e,l.name);y_(l,h,this)}}setValue(t,e,i,o){const l=this.map[e];l!==void 0&&l.setValue(t,i,o)}setOptional(t,e,i){const o=e[i];o!==void 0&&this.setValue(t,i,o)}static upload(t,e,i,o){for(let l=0,h=e.length;l!==h;++l){const u=e[l],d=i[u.id];d.needsUpdate!==!1&&u.setValue(t,d.value,o)}}static seqWithValue(t,e){const i=[];for(let o=0,l=t.length;o!==l;++o){const h=t[o];h.id in e&&i.push(h)}return i}}function sc(s,t,e){const i=s.createShader(t);return s.shaderSource(i,e),s.compileShader(i),i}const M_=37297;let S_=0;function E_(s,t){const e=s.split(`
`),i=[],o=Math.max(t-6,0),l=Math.min(t+6,e.length);for(let h=o;h<l;h++){const u=h+1;i.push(`${u===t?">":" "} ${u}: ${e[h]}`)}return i.join(`
`)}function T_(s){const t=ce.getPrimaries(ce.workingColorSpace),e=ce.getPrimaries(s);let i;switch(t===e?i="":t===Ls&&e===Cs?i="LinearDisplayP3ToLinearSRGB":t===Cs&&e===Ls&&(i="LinearSRGBToLinearDisplayP3"),s){case ei:case Us:return[i,"LinearTransferOETF"];case xn:case ia:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[i,"LinearTransferOETF"]}}function oc(s,t,e){const i=s.getShaderParameter(t,s.COMPILE_STATUS),o=s.getShaderInfoLog(t).trim();if(i&&o==="")return"";const l=/ERROR: 0:(\d+)/.exec(o);if(l){const h=parseInt(l[1]);return e.toUpperCase()+`

`+o+`

`+E_(s.getShaderSource(t),h)}else return o}function b_(s,t){const e=T_(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function w_(s,t){let e;switch(t){case Du:e="Linear";break;case Uu:e="Reinhard";break;case Nu:e="OptimizedCineon";break;case Cc:e="ACESFilmic";break;case Fu:e="AgX";break;case Bu:e="Neutral";break;case Ou:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function A_(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(br).join(`
`)}function P_(s){const t=[];for(const e in s){const i=s[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function C_(s,t){const e={},i=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let o=0;o<i;o++){const l=s.getActiveAttrib(t,o),h=l.name;let u=1;l.type===s.FLOAT_MAT2&&(u=2),l.type===s.FLOAT_MAT3&&(u=3),l.type===s.FLOAT_MAT4&&(u=4),e[h]={type:l.type,location:s.getAttribLocation(t,h),locationSize:u}}return e}function br(s){return s!==""}function ac(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function lc(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const L_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ko(s){return s.replace(L_,I_)}const R_=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function I_(s,t){let e=$t[t];if(e===void 0){const i=R_.get(t);if(i!==void 0)e=$t[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Ko(e)}const D_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cc(s){return s.replace(D_,U_)}function U_(s,t,e,i){let o="";for(let l=parseInt(t);l<parseInt(e);l++)o+=i.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function hc(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function N_(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Ac?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===su?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===On&&(t="SHADOWMAP_TYPE_VSM"),t}function O_(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Qi:case tr:t="ENVMAP_TYPE_CUBE";break;case Ds:t="ENVMAP_TYPE_CUBE_UV";break}return t}function F_(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case tr:t="ENVMAP_MODE_REFRACTION";break}return t}function B_(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Pc:t="ENVMAP_BLENDING_MULTIPLY";break;case Ru:t="ENVMAP_BLENDING_MIX";break;case Iu:t="ENVMAP_BLENDING_ADD";break}return t}function z_(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function k_(s,t,e,i){const o=s.getContext(),l=e.defines;let h=e.vertexShader,u=e.fragmentShader;const d=N_(e),p=O_(e),m=F_(e),v=B_(e),g=z_(e),y=A_(e),b=P_(l),E=o.createProgram();let x,_,D=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,b].filter(br).join(`
`),x.length>0&&(x+=`
`),_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,b].filter(br).join(`
`),_.length>0&&(_+=`
`)):(x=[hc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,b,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+m:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+d:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(br).join(`
`),_=[hc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,b,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+p:"",e.envMap?"#define "+m:"",e.envMap?"#define "+v:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+d:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Kn?"#define TONE_MAPPING":"",e.toneMapping!==Kn?$t.tonemapping_pars_fragment:"",e.toneMapping!==Kn?w_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",$t.colorspace_pars_fragment,b_("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(br).join(`
`)),h=Ko(h),h=ac(h,e),h=lc(h,e),u=Ko(u),u=ac(u,e),u=lc(u,e),h=cc(h),u=cc(u),e.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,x=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,_=["#define varying in",e.glslVersion===wl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===wl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const A=D+x+h,N=D+_+u,$=sc(o,o.VERTEX_SHADER,A),O=sc(o,o.FRAGMENT_SHADER,N);o.attachShader(E,$),o.attachShader(E,O),e.index0AttributeName!==void 0?o.bindAttribLocation(E,0,e.index0AttributeName):e.morphTargets===!0&&o.bindAttribLocation(E,0,"position"),o.linkProgram(E);function U(G){if(s.debug.checkShaderErrors){const Q=o.getProgramInfoLog(E).trim(),F=o.getShaderInfoLog($).trim(),tt=o.getShaderInfoLog(O).trim();let et=!0,at=!0;if(o.getProgramParameter(E,o.LINK_STATUS)===!1)if(et=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,E,$,O);else{const ct=oc(o,$,"vertex"),B=oc(o,O,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(E,o.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+Q+`
`+ct+`
`+B)}else Q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Q):(F===""||tt==="")&&(at=!1);at&&(G.diagnostics={runnable:et,programLog:Q,vertexShader:{log:F,prefix:x},fragmentShader:{log:tt,prefix:_}})}o.deleteShader($),o.deleteShader(O),K=new bs(o,E),P=C_(o,E)}let K;this.getUniforms=function(){return K===void 0&&U(this),K};let P;this.getAttributes=function(){return P===void 0&&U(this),P};let T=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=o.getProgramParameter(E,M_)),T},this.destroy=function(){i.releaseStatesOfProgram(this),o.deleteProgram(E),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=S_++,this.cacheKey=t,this.usedTimes=1,this.program=E,this.vertexShader=$,this.fragmentShader=O,this}let H_=0;class G_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,o=this._getShaderStage(e),l=this._getShaderStage(i),h=this._getShaderCacheForMaterial(t);return h.has(o)===!1&&(h.add(o),o.usedTimes++),h.has(l)===!1&&(h.add(l),l.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new V_(t),e.set(t,i)),i}}class V_{constructor(t){this.id=H_++,this.code=t,this.usedTimes=0}}function W_(s,t,e,i,o,l,h){const u=new Wc,d=new G_,p=new Set,m=[],v=o.logarithmicDepthBuffer,g=o.vertexTextures;let y=o.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(P){return p.add(P),P===0?"uv":`uv${P}`}function x(P,T,G,Q,F){const tt=Q.fog,et=F.geometry,at=P.isMeshStandardMaterial?Q.environment:null,ct=(P.isMeshStandardMaterial?e:t).get(P.envMap||at),B=ct&&ct.mapping===Ds?ct.image.height:null,ut=b[P.type];P.precision!==null&&(y=o.getMaxPrecision(P.precision),y!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",y,"instead."));const J=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,ft=J!==void 0?J.length:0;let Lt=0;et.morphAttributes.position!==void 0&&(Lt=1),et.morphAttributes.normal!==void 0&&(Lt=2),et.morphAttributes.color!==void 0&&(Lt=3);let qt,q,nt,lt;if(ut){const Ce=yn[ut];qt=Ce.vertexShader,q=Ce.fragmentShader}else qt=P.vertexShader,q=P.fragmentShader,d.update(P),nt=d.getVertexShaderID(P),lt=d.getFragmentShaderID(P);const pt=s.getRenderTarget(),Nt=F.isInstancedMesh===!0,Yt=F.isBatchedMesh===!0,Jt=!!P.map,V=!!P.matcap,Xt=!!ct,Ot=!!P.aoMap,Se=!!P.lightMap,zt=!!P.bumpMap,ae=!!P.normalMap,C=!!P.displacementMap,S=!!P.emissiveMap,j=!!P.metalnessMap,it=!!P.roughnessMap,st=P.anisotropy>0,ot=P.clearcoat>0,Rt=P.iridescence>0,ht=P.sheen>0,Pt=P.transmission>0,It=st&&!!P.anisotropyMap,mt=ot&&!!P.clearcoatMap,yt=ot&&!!P.clearcoatNormalMap,kt=ot&&!!P.clearcoatRoughnessMap,Mt=Rt&&!!P.iridescenceMap,Et=Rt&&!!P.iridescenceThicknessMap,Qt=ht&&!!P.sheenColorMap,te=ht&&!!P.sheenRoughnessMap,re=!!P.specularMap,se=!!P.specularColorMap,ue=!!P.specularIntensityMap,St=Pt&&!!P.transmissionMap,R=Pt&&!!P.thicknessMap,_t=!!P.gradientMap,dt=!!P.alphaMap,At=P.alphaTest>0,Ct=!!P.alphaHash,le=!!P.extensions;let de=Kn;P.toneMapped&&(pt===null||pt.isXRRenderTarget===!0)&&(de=s.toneMapping);const me={shaderID:ut,shaderType:P.type,shaderName:P.name,vertexShader:qt,fragmentShader:q,defines:P.defines,customVertexShaderID:nt,customFragmentShaderID:lt,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:y,batching:Yt,instancing:Nt,instancingColor:Nt&&F.instanceColor!==null,instancingMorph:Nt&&F.morphTexture!==null,supportsVertexTextures:g,outputColorSpace:pt===null?s.outputColorSpace:pt.isXRRenderTarget===!0?pt.texture.colorSpace:ei,alphaToCoverage:!!P.alphaToCoverage,map:Jt,matcap:V,envMap:Xt,envMapMode:Xt&&ct.mapping,envMapCubeUVHeight:B,aoMap:Ot,lightMap:Se,bumpMap:zt,normalMap:ae,displacementMap:g&&C,emissiveMap:S,normalMapObjectSpace:ae&&P.normalMapType===Ju,normalMapTangentSpace:ae&&P.normalMapType===zc,metalnessMap:j,roughnessMap:it,anisotropy:st,anisotropyMap:It,clearcoat:ot,clearcoatMap:mt,clearcoatNormalMap:yt,clearcoatRoughnessMap:kt,iridescence:Rt,iridescenceMap:Mt,iridescenceThicknessMap:Et,sheen:ht,sheenColorMap:Qt,sheenRoughnessMap:te,specularMap:re,specularColorMap:se,specularIntensityMap:ue,transmission:Pt,transmissionMap:St,thicknessMap:R,gradientMap:_t,opaque:P.transparent===!1&&P.blending===ji&&P.alphaToCoverage===!1,alphaMap:dt,alphaTest:At,alphaHash:Ct,combine:P.combine,mapUv:Jt&&E(P.map.channel),aoMapUv:Ot&&E(P.aoMap.channel),lightMapUv:Se&&E(P.lightMap.channel),bumpMapUv:zt&&E(P.bumpMap.channel),normalMapUv:ae&&E(P.normalMap.channel),displacementMapUv:C&&E(P.displacementMap.channel),emissiveMapUv:S&&E(P.emissiveMap.channel),metalnessMapUv:j&&E(P.metalnessMap.channel),roughnessMapUv:it&&E(P.roughnessMap.channel),anisotropyMapUv:It&&E(P.anisotropyMap.channel),clearcoatMapUv:mt&&E(P.clearcoatMap.channel),clearcoatNormalMapUv:yt&&E(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:kt&&E(P.clearcoatRoughnessMap.channel),iridescenceMapUv:Mt&&E(P.iridescenceMap.channel),iridescenceThicknessMapUv:Et&&E(P.iridescenceThicknessMap.channel),sheenColorMapUv:Qt&&E(P.sheenColorMap.channel),sheenRoughnessMapUv:te&&E(P.sheenRoughnessMap.channel),specularMapUv:re&&E(P.specularMap.channel),specularColorMapUv:se&&E(P.specularColorMap.channel),specularIntensityMapUv:ue&&E(P.specularIntensityMap.channel),transmissionMapUv:St&&E(P.transmissionMap.channel),thicknessMapUv:R&&E(P.thicknessMap.channel),alphaMapUv:dt&&E(P.alphaMap.channel),vertexTangents:!!et.attributes.tangent&&(ae||st),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!et.attributes.uv&&(Jt||dt),fog:!!tt,useFog:P.fog===!0,fogExp2:!!tt&&tt.isFogExp2,flatShading:P.flatShading===!0,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:v,skinning:F.isSkinnedMesh===!0,morphTargets:et.morphAttributes.position!==void 0,morphNormals:et.morphAttributes.normal!==void 0,morphColors:et.morphAttributes.color!==void 0,morphTargetsCount:ft,morphTextureStride:Lt,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:P.dithering,shadowMapEnabled:s.shadowMap.enabled&&G.length>0,shadowMapType:s.shadowMap.type,toneMapping:de,useLegacyLights:s._useLegacyLights,decodeVideoTexture:Jt&&P.map.isVideoTexture===!0&&ce.getTransfer(P.map.colorSpace)===ge,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===Fn,flipSided:P.side===qe,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:le&&P.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:le&&P.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return me.vertexUv1s=p.has(1),me.vertexUv2s=p.has(2),me.vertexUv3s=p.has(3),p.clear(),me}function _(P){const T=[];if(P.shaderID?T.push(P.shaderID):(T.push(P.customVertexShaderID),T.push(P.customFragmentShaderID)),P.defines!==void 0)for(const G in P.defines)T.push(G),T.push(P.defines[G]);return P.isRawShaderMaterial===!1&&(D(T,P),A(T,P),T.push(s.outputColorSpace)),T.push(P.customProgramCacheKey),T.join()}function D(P,T){P.push(T.precision),P.push(T.outputColorSpace),P.push(T.envMapMode),P.push(T.envMapCubeUVHeight),P.push(T.mapUv),P.push(T.alphaMapUv),P.push(T.lightMapUv),P.push(T.aoMapUv),P.push(T.bumpMapUv),P.push(T.normalMapUv),P.push(T.displacementMapUv),P.push(T.emissiveMapUv),P.push(T.metalnessMapUv),P.push(T.roughnessMapUv),P.push(T.anisotropyMapUv),P.push(T.clearcoatMapUv),P.push(T.clearcoatNormalMapUv),P.push(T.clearcoatRoughnessMapUv),P.push(T.iridescenceMapUv),P.push(T.iridescenceThicknessMapUv),P.push(T.sheenColorMapUv),P.push(T.sheenRoughnessMapUv),P.push(T.specularMapUv),P.push(T.specularColorMapUv),P.push(T.specularIntensityMapUv),P.push(T.transmissionMapUv),P.push(T.thicknessMapUv),P.push(T.combine),P.push(T.fogExp2),P.push(T.sizeAttenuation),P.push(T.morphTargetsCount),P.push(T.morphAttributeCount),P.push(T.numDirLights),P.push(T.numPointLights),P.push(T.numSpotLights),P.push(T.numSpotLightMaps),P.push(T.numHemiLights),P.push(T.numRectAreaLights),P.push(T.numDirLightShadows),P.push(T.numPointLightShadows),P.push(T.numSpotLightShadows),P.push(T.numSpotLightShadowsWithMaps),P.push(T.numLightProbes),P.push(T.shadowMapType),P.push(T.toneMapping),P.push(T.numClippingPlanes),P.push(T.numClipIntersection),P.push(T.depthPacking)}function A(P,T){u.disableAll(),T.supportsVertexTextures&&u.enable(0),T.instancing&&u.enable(1),T.instancingColor&&u.enable(2),T.instancingMorph&&u.enable(3),T.matcap&&u.enable(4),T.envMap&&u.enable(5),T.normalMapObjectSpace&&u.enable(6),T.normalMapTangentSpace&&u.enable(7),T.clearcoat&&u.enable(8),T.iridescence&&u.enable(9),T.alphaTest&&u.enable(10),T.vertexColors&&u.enable(11),T.vertexAlphas&&u.enable(12),T.vertexUv1s&&u.enable(13),T.vertexUv2s&&u.enable(14),T.vertexUv3s&&u.enable(15),T.vertexTangents&&u.enable(16),T.anisotropy&&u.enable(17),T.alphaHash&&u.enable(18),T.batching&&u.enable(19),P.push(u.mask),u.disableAll(),T.fog&&u.enable(0),T.useFog&&u.enable(1),T.flatShading&&u.enable(2),T.logarithmicDepthBuffer&&u.enable(3),T.skinning&&u.enable(4),T.morphTargets&&u.enable(5),T.morphNormals&&u.enable(6),T.morphColors&&u.enable(7),T.premultipliedAlpha&&u.enable(8),T.shadowMapEnabled&&u.enable(9),T.useLegacyLights&&u.enable(10),T.doubleSided&&u.enable(11),T.flipSided&&u.enable(12),T.useDepthPacking&&u.enable(13),T.dithering&&u.enable(14),T.transmission&&u.enable(15),T.sheen&&u.enable(16),T.opaque&&u.enable(17),T.pointsUvs&&u.enable(18),T.decodeVideoTexture&&u.enable(19),T.alphaToCoverage&&u.enable(20),P.push(u.mask)}function N(P){const T=b[P.type];let G;if(T){const Q=yn[T];G=wd.clone(Q.uniforms)}else G=P.uniforms;return G}function $(P,T){let G;for(let Q=0,F=m.length;Q<F;Q++){const tt=m[Q];if(tt.cacheKey===T){G=tt,++G.usedTimes;break}}return G===void 0&&(G=new k_(s,T,P,l),m.push(G)),G}function O(P){if(--P.usedTimes===0){const T=m.indexOf(P);m[T]=m[m.length-1],m.pop(),P.destroy()}}function U(P){d.remove(P)}function K(){d.dispose()}return{getParameters:x,getProgramCacheKey:_,getUniforms:N,acquireProgram:$,releaseProgram:O,releaseShaderCache:U,programs:m,dispose:K}}function X_(){let s=new WeakMap;function t(l){let h=s.get(l);return h===void 0&&(h={},s.set(l,h)),h}function e(l){s.delete(l)}function i(l,h,u){s.get(l)[h]=u}function o(){s=new WeakMap}return{get:t,remove:e,update:i,dispose:o}}function Z_(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function uc(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function dc(){const s=[];let t=0;const e=[],i=[],o=[];function l(){t=0,e.length=0,i.length=0,o.length=0}function h(v,g,y,b,E,x){let _=s[t];return _===void 0?(_={id:v.id,object:v,geometry:g,material:y,groupOrder:b,renderOrder:v.renderOrder,z:E,group:x},s[t]=_):(_.id=v.id,_.object=v,_.geometry=g,_.material=y,_.groupOrder=b,_.renderOrder=v.renderOrder,_.z=E,_.group=x),t++,_}function u(v,g,y,b,E,x){const _=h(v,g,y,b,E,x);y.transmission>0?i.push(_):y.transparent===!0?o.push(_):e.push(_)}function d(v,g,y,b,E,x){const _=h(v,g,y,b,E,x);y.transmission>0?i.unshift(_):y.transparent===!0?o.unshift(_):e.unshift(_)}function p(v,g){e.length>1&&e.sort(v||Z_),i.length>1&&i.sort(g||uc),o.length>1&&o.sort(g||uc)}function m(){for(let v=t,g=s.length;v<g;v++){const y=s[v];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:e,transmissive:i,transparent:o,init:l,push:u,unshift:d,finish:m,sort:p}}function q_(){let s=new WeakMap;function t(i,o){const l=s.get(i);let h;return l===void 0?(h=new dc,s.set(i,[h])):o>=l.length?(h=new dc,l.push(h)):h=l[o],h}function e(){s=new WeakMap}return{get:t,dispose:e}}function Y_(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new k,color:new ee};break;case"SpotLight":e={position:new k,direction:new k,color:new ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new k,color:new ee,distance:0,decay:0};break;case"HemisphereLight":e={direction:new k,skyColor:new ee,groundColor:new ee};break;case"RectAreaLight":e={color:new ee,position:new k,halfWidth:new k,halfHeight:new k};break}return s[t.id]=e,e}}}function $_(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let j_=0;function K_(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function J_(s){const t=new Y_,e=$_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)i.probe.push(new k);const o=new k,l=new xe,h=new xe;function u(p,m){let v=0,g=0,y=0;for(let G=0;G<9;G++)i.probe[G].set(0,0,0);let b=0,E=0,x=0,_=0,D=0,A=0,N=0,$=0,O=0,U=0,K=0;p.sort(K_);const P=m===!0?Math.PI:1;for(let G=0,Q=p.length;G<Q;G++){const F=p[G],tt=F.color,et=F.intensity,at=F.distance,ct=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)v+=tt.r*et*P,g+=tt.g*et*P,y+=tt.b*et*P;else if(F.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(F.sh.coefficients[B],et);K++}else if(F.isDirectionalLight){const B=t.get(F);if(B.color.copy(F.color).multiplyScalar(F.intensity*P),F.castShadow){const ut=F.shadow,J=e.get(F);J.shadowBias=ut.bias,J.shadowNormalBias=ut.normalBias,J.shadowRadius=ut.radius,J.shadowMapSize=ut.mapSize,i.directionalShadow[b]=J,i.directionalShadowMap[b]=ct,i.directionalShadowMatrix[b]=F.shadow.matrix,A++}i.directional[b]=B,b++}else if(F.isSpotLight){const B=t.get(F);B.position.setFromMatrixPosition(F.matrixWorld),B.color.copy(tt).multiplyScalar(et*P),B.distance=at,B.coneCos=Math.cos(F.angle),B.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),B.decay=F.decay,i.spot[x]=B;const ut=F.shadow;if(F.map&&(i.spotLightMap[O]=F.map,O++,ut.updateMatrices(F),F.castShadow&&U++),i.spotLightMatrix[x]=ut.matrix,F.castShadow){const J=e.get(F);J.shadowBias=ut.bias,J.shadowNormalBias=ut.normalBias,J.shadowRadius=ut.radius,J.shadowMapSize=ut.mapSize,i.spotShadow[x]=J,i.spotShadowMap[x]=ct,$++}x++}else if(F.isRectAreaLight){const B=t.get(F);B.color.copy(tt).multiplyScalar(et),B.halfWidth.set(F.width*.5,0,0),B.halfHeight.set(0,F.height*.5,0),i.rectArea[_]=B,_++}else if(F.isPointLight){const B=t.get(F);if(B.color.copy(F.color).multiplyScalar(F.intensity*P),B.distance=F.distance,B.decay=F.decay,F.castShadow){const ut=F.shadow,J=e.get(F);J.shadowBias=ut.bias,J.shadowNormalBias=ut.normalBias,J.shadowRadius=ut.radius,J.shadowMapSize=ut.mapSize,J.shadowCameraNear=ut.camera.near,J.shadowCameraFar=ut.camera.far,i.pointShadow[E]=J,i.pointShadowMap[E]=ct,i.pointShadowMatrix[E]=F.shadow.matrix,N++}i.point[E]=B,E++}else if(F.isHemisphereLight){const B=t.get(F);B.skyColor.copy(F.color).multiplyScalar(et*P),B.groundColor.copy(F.groundColor).multiplyScalar(et*P),i.hemi[D]=B,D++}}_>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=gt.LTC_FLOAT_1,i.rectAreaLTC2=gt.LTC_FLOAT_2):(i.rectAreaLTC1=gt.LTC_HALF_1,i.rectAreaLTC2=gt.LTC_HALF_2)),i.ambient[0]=v,i.ambient[1]=g,i.ambient[2]=y;const T=i.hash;(T.directionalLength!==b||T.pointLength!==E||T.spotLength!==x||T.rectAreaLength!==_||T.hemiLength!==D||T.numDirectionalShadows!==A||T.numPointShadows!==N||T.numSpotShadows!==$||T.numSpotMaps!==O||T.numLightProbes!==K)&&(i.directional.length=b,i.spot.length=x,i.rectArea.length=_,i.point.length=E,i.hemi.length=D,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.pointShadow.length=N,i.pointShadowMap.length=N,i.spotShadow.length=$,i.spotShadowMap.length=$,i.directionalShadowMatrix.length=A,i.pointShadowMatrix.length=N,i.spotLightMatrix.length=$+O-U,i.spotLightMap.length=O,i.numSpotLightShadowsWithMaps=U,i.numLightProbes=K,T.directionalLength=b,T.pointLength=E,T.spotLength=x,T.rectAreaLength=_,T.hemiLength=D,T.numDirectionalShadows=A,T.numPointShadows=N,T.numSpotShadows=$,T.numSpotMaps=O,T.numLightProbes=K,i.version=j_++)}function d(p,m){let v=0,g=0,y=0,b=0,E=0;const x=m.matrixWorldInverse;for(let _=0,D=p.length;_<D;_++){const A=p[_];if(A.isDirectionalLight){const N=i.directional[v];N.direction.setFromMatrixPosition(A.matrixWorld),o.setFromMatrixPosition(A.target.matrixWorld),N.direction.sub(o),N.direction.transformDirection(x),v++}else if(A.isSpotLight){const N=i.spot[y];N.position.setFromMatrixPosition(A.matrixWorld),N.position.applyMatrix4(x),N.direction.setFromMatrixPosition(A.matrixWorld),o.setFromMatrixPosition(A.target.matrixWorld),N.direction.sub(o),N.direction.transformDirection(x),y++}else if(A.isRectAreaLight){const N=i.rectArea[b];N.position.setFromMatrixPosition(A.matrixWorld),N.position.applyMatrix4(x),h.identity(),l.copy(A.matrixWorld),l.premultiply(x),h.extractRotation(l),N.halfWidth.set(A.width*.5,0,0),N.halfHeight.set(0,A.height*.5,0),N.halfWidth.applyMatrix4(h),N.halfHeight.applyMatrix4(h),b++}else if(A.isPointLight){const N=i.point[g];N.position.setFromMatrixPosition(A.matrixWorld),N.position.applyMatrix4(x),g++}else if(A.isHemisphereLight){const N=i.hemi[E];N.direction.setFromMatrixPosition(A.matrixWorld),N.direction.transformDirection(x),E++}}}return{setup:u,setupView:d,state:i}}function fc(s){const t=new J_(s),e=[],i=[];function o(){e.length=0,i.length=0}function l(m){e.push(m)}function h(m){i.push(m)}function u(m){t.setup(e,m)}function d(m){t.setupView(e,m)}return{init:o,state:{lightsArray:e,shadowsArray:i,lights:t,transmissionRenderTarget:null},setupLights:u,setupLightsView:d,pushLight:l,pushShadow:h}}function Q_(s){let t=new WeakMap;function e(o,l=0){const h=t.get(o);let u;return h===void 0?(u=new fc(s),t.set(o,[u])):l>=h.length?(u=new fc(s),h.push(u)):u=h[l],u}function i(){t=new WeakMap}return{get:e,dispose:i}}class tg extends Ei{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ju,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class eg extends Ei{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const ng=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ig=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function rg(s,t,e){let i=new sa;const o=new ne,l=new ne,h=new ve,u=new tg({depthPacking:Ku}),d=new eg,p={},m=e.maxTextureSize,v={[Qn]:qe,[qe]:Qn,[Fn]:Fn},g=new ti({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ne},radius:{value:4}},vertexShader:ng,fragmentShader:ig}),y=g.clone();y.defines.HORIZONTAL_PASS=1;const b=new an;b.setAttribute("position",new on(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new Je(b,g),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ac;let _=this.type;this.render=function(O,U,K){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||O.length===0)return;const P=s.getRenderTarget(),T=s.getActiveCubeFace(),G=s.getActiveMipmapLevel(),Q=s.state;Q.setBlending(jn),Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const F=_!==On&&this.type===On,tt=_===On&&this.type!==On;for(let et=0,at=O.length;et<at;et++){const ct=O[et],B=ct.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",ct,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;o.copy(B.mapSize);const ut=B.getFrameExtents();if(o.multiply(ut),l.copy(B.mapSize),(o.x>m||o.y>m)&&(o.x>m&&(l.x=Math.floor(m/ut.x),o.x=l.x*ut.x,B.mapSize.x=l.x),o.y>m&&(l.y=Math.floor(m/ut.y),o.y=l.y*ut.y,B.mapSize.y=l.y)),B.map===null||F===!0||tt===!0){const ft=this.type!==On?{minFilter:sn,magFilter:sn}:{};B.map!==null&&B.map.dispose(),B.map=new Mi(o.x,o.y,ft),B.map.texture.name=ct.name+".shadowMap",B.camera.updateProjectionMatrix()}s.setRenderTarget(B.map),s.clear();const J=B.getViewportCount();for(let ft=0;ft<J;ft++){const Lt=B.getViewport(ft);h.set(l.x*Lt.x,l.y*Lt.y,l.x*Lt.z,l.y*Lt.w),Q.viewport(h),B.updateMatrices(ct,ft),i=B.getFrustum(),N(U,K,B.camera,ct,this.type)}B.isPointLightShadow!==!0&&this.type===On&&D(B,K),B.needsUpdate=!1}_=this.type,x.needsUpdate=!1,s.setRenderTarget(P,T,G)};function D(O,U){const K=t.update(E);g.defines.VSM_SAMPLES!==O.blurSamples&&(g.defines.VSM_SAMPLES=O.blurSamples,y.defines.VSM_SAMPLES=O.blurSamples,g.needsUpdate=!0,y.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new Mi(o.x,o.y)),g.uniforms.shadow_pass.value=O.map.texture,g.uniforms.resolution.value=O.mapSize,g.uniforms.radius.value=O.radius,s.setRenderTarget(O.mapPass),s.clear(),s.renderBufferDirect(U,null,K,g,E,null),y.uniforms.shadow_pass.value=O.mapPass.texture,y.uniforms.resolution.value=O.mapSize,y.uniforms.radius.value=O.radius,s.setRenderTarget(O.map),s.clear(),s.renderBufferDirect(U,null,K,y,E,null)}function A(O,U,K,P){let T=null;const G=K.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(G!==void 0)T=G;else if(T=K.isPointLight===!0?d:u,s.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0){const Q=T.uuid,F=U.uuid;let tt=p[Q];tt===void 0&&(tt={},p[Q]=tt);let et=tt[F];et===void 0&&(et=T.clone(),tt[F]=et,U.addEventListener("dispose",$)),T=et}if(T.visible=U.visible,T.wireframe=U.wireframe,P===On?T.side=U.shadowSide!==null?U.shadowSide:U.side:T.side=U.shadowSide!==null?U.shadowSide:v[U.side],T.alphaMap=U.alphaMap,T.alphaTest=U.alphaTest,T.map=U.map,T.clipShadows=U.clipShadows,T.clippingPlanes=U.clippingPlanes,T.clipIntersection=U.clipIntersection,T.displacementMap=U.displacementMap,T.displacementScale=U.displacementScale,T.displacementBias=U.displacementBias,T.wireframeLinewidth=U.wireframeLinewidth,T.linewidth=U.linewidth,K.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const Q=s.properties.get(T);Q.light=K}return T}function N(O,U,K,P,T){if(O.visible===!1)return;if(O.layers.test(U.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&T===On)&&(!O.frustumCulled||i.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,O.matrixWorld);const F=t.update(O),tt=O.material;if(Array.isArray(tt)){const et=F.groups;for(let at=0,ct=et.length;at<ct;at++){const B=et[at],ut=tt[B.materialIndex];if(ut&&ut.visible){const J=A(O,ut,P,T);O.onBeforeShadow(s,O,U,K,F,J,B),s.renderBufferDirect(K,null,F,J,O,B),O.onAfterShadow(s,O,U,K,F,J,B)}}}else if(tt.visible){const et=A(O,tt,P,T);O.onBeforeShadow(s,O,U,K,F,et,null),s.renderBufferDirect(K,null,F,et,O,null),O.onAfterShadow(s,O,U,K,F,et,null)}}const Q=O.children;for(let F=0,tt=Q.length;F<tt;F++)N(Q[F],U,K,P,T)}function $(O){O.target.removeEventListener("dispose",$);for(const K in p){const P=p[K],T=O.target.uuid;T in P&&(P[T].dispose(),delete P[T])}}}function sg(s){function t(){let R=!1;const _t=new ve;let dt=null;const At=new ve(0,0,0,0);return{setMask:function(Ct){dt!==Ct&&!R&&(s.colorMask(Ct,Ct,Ct,Ct),dt=Ct)},setLocked:function(Ct){R=Ct},setClear:function(Ct,le,de,me,Ce){Ce===!0&&(Ct*=me,le*=me,de*=me),_t.set(Ct,le,de,me),At.equals(_t)===!1&&(s.clearColor(Ct,le,de,me),At.copy(_t))},reset:function(){R=!1,dt=null,At.set(-1,0,0,0)}}}function e(){let R=!1,_t=null,dt=null,At=null;return{setTest:function(Ct){Ct?lt(s.DEPTH_TEST):pt(s.DEPTH_TEST)},setMask:function(Ct){_t!==Ct&&!R&&(s.depthMask(Ct),_t=Ct)},setFunc:function(Ct){if(dt!==Ct){switch(Ct){case Tu:s.depthFunc(s.NEVER);break;case bu:s.depthFunc(s.ALWAYS);break;case wu:s.depthFunc(s.LESS);break;case ws:s.depthFunc(s.LEQUAL);break;case Au:s.depthFunc(s.EQUAL);break;case Pu:s.depthFunc(s.GEQUAL);break;case Cu:s.depthFunc(s.GREATER);break;case Lu:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}dt=Ct}},setLocked:function(Ct){R=Ct},setClear:function(Ct){At!==Ct&&(s.clearDepth(Ct),At=Ct)},reset:function(){R=!1,_t=null,dt=null,At=null}}}function i(){let R=!1,_t=null,dt=null,At=null,Ct=null,le=null,de=null,me=null,Ce=null;return{setTest:function(he){R||(he?lt(s.STENCIL_TEST):pt(s.STENCIL_TEST))},setMask:function(he){_t!==he&&!R&&(s.stencilMask(he),_t=he)},setFunc:function(he,Qe,Ge){(dt!==he||At!==Qe||Ct!==Ge)&&(s.stencilFunc(he,Qe,Ge),dt=he,At=Qe,Ct=Ge)},setOp:function(he,Qe,Ge){(le!==he||de!==Qe||me!==Ge)&&(s.stencilOp(he,Qe,Ge),le=he,de=Qe,me=Ge)},setLocked:function(he){R=he},setClear:function(he){Ce!==he&&(s.clearStencil(he),Ce=he)},reset:function(){R=!1,_t=null,dt=null,At=null,Ct=null,le=null,de=null,me=null,Ce=null}}}const o=new t,l=new e,h=new i,u=new WeakMap,d=new WeakMap;let p={},m={},v=new WeakMap,g=[],y=null,b=!1,E=null,x=null,_=null,D=null,A=null,N=null,$=null,O=new ee(0,0,0),U=0,K=!1,P=null,T=null,G=null,Q=null,F=null;const tt=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let et=!1,at=0;const ct=s.getParameter(s.VERSION);ct.indexOf("WebGL")!==-1?(at=parseFloat(/^WebGL (\d)/.exec(ct)[1]),et=at>=1):ct.indexOf("OpenGL ES")!==-1&&(at=parseFloat(/^OpenGL ES (\d)/.exec(ct)[1]),et=at>=2);let B=null,ut={};const J=s.getParameter(s.SCISSOR_BOX),ft=s.getParameter(s.VIEWPORT),Lt=new ve().fromArray(J),qt=new ve().fromArray(ft);function q(R,_t,dt,At){const Ct=new Uint8Array(4),le=s.createTexture();s.bindTexture(R,le),s.texParameteri(R,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(R,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let de=0;de<dt;de++)R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY?s.texImage3D(_t,0,s.RGBA,1,1,At,0,s.RGBA,s.UNSIGNED_BYTE,Ct):s.texImage2D(_t+de,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ct);return le}const nt={};nt[s.TEXTURE_2D]=q(s.TEXTURE_2D,s.TEXTURE_2D,1),nt[s.TEXTURE_CUBE_MAP]=q(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),nt[s.TEXTURE_2D_ARRAY]=q(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),nt[s.TEXTURE_3D]=q(s.TEXTURE_3D,s.TEXTURE_3D,1,1),o.setClear(0,0,0,1),l.setClear(1),h.setClear(0),lt(s.DEPTH_TEST),l.setFunc(ws),zt(!1),ae($a),lt(s.CULL_FACE),Ot(jn);function lt(R){p[R]!==!0&&(s.enable(R),p[R]=!0)}function pt(R){p[R]!==!1&&(s.disable(R),p[R]=!1)}function Nt(R,_t){return m[R]!==_t?(s.bindFramebuffer(R,_t),m[R]=_t,R===s.DRAW_FRAMEBUFFER&&(m[s.FRAMEBUFFER]=_t),R===s.FRAMEBUFFER&&(m[s.DRAW_FRAMEBUFFER]=_t),!0):!1}function Yt(R,_t){let dt=g,At=!1;if(R){dt=v.get(_t),dt===void 0&&(dt=[],v.set(_t,dt));const Ct=R.textures;if(dt.length!==Ct.length||dt[0]!==s.COLOR_ATTACHMENT0){for(let le=0,de=Ct.length;le<de;le++)dt[le]=s.COLOR_ATTACHMENT0+le;dt.length=Ct.length,At=!0}}else dt[0]!==s.BACK&&(dt[0]=s.BACK,At=!0);At&&s.drawBuffers(dt)}function Jt(R){return y!==R?(s.useProgram(R),y=R,!0):!1}const V={[gi]:s.FUNC_ADD,[au]:s.FUNC_SUBTRACT,[lu]:s.FUNC_REVERSE_SUBTRACT};V[cu]=s.MIN,V[hu]=s.MAX;const Xt={[uu]:s.ZERO,[du]:s.ONE,[fu]:s.SRC_COLOR,[Wo]:s.SRC_ALPHA,[xu]:s.SRC_ALPHA_SATURATE,[gu]:s.DST_COLOR,[mu]:s.DST_ALPHA,[pu]:s.ONE_MINUS_SRC_COLOR,[Xo]:s.ONE_MINUS_SRC_ALPHA,[vu]:s.ONE_MINUS_DST_COLOR,[_u]:s.ONE_MINUS_DST_ALPHA,[yu]:s.CONSTANT_COLOR,[Mu]:s.ONE_MINUS_CONSTANT_COLOR,[Su]:s.CONSTANT_ALPHA,[Eu]:s.ONE_MINUS_CONSTANT_ALPHA};function Ot(R,_t,dt,At,Ct,le,de,me,Ce,he){if(R===jn){b===!0&&(pt(s.BLEND),b=!1);return}if(b===!1&&(lt(s.BLEND),b=!0),R!==ou){if(R!==E||he!==K){if((x!==gi||A!==gi)&&(s.blendEquation(s.FUNC_ADD),x=gi,A=gi),he)switch(R){case ji:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ja:s.blendFunc(s.ONE,s.ONE);break;case Ka:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ja:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case ji:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ja:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Ka:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ja:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}_=null,D=null,N=null,$=null,O.set(0,0,0),U=0,E=R,K=he}return}Ct=Ct||_t,le=le||dt,de=de||At,(_t!==x||Ct!==A)&&(s.blendEquationSeparate(V[_t],V[Ct]),x=_t,A=Ct),(dt!==_||At!==D||le!==N||de!==$)&&(s.blendFuncSeparate(Xt[dt],Xt[At],Xt[le],Xt[de]),_=dt,D=At,N=le,$=de),(me.equals(O)===!1||Ce!==U)&&(s.blendColor(me.r,me.g,me.b,Ce),O.copy(me),U=Ce),E=R,K=!1}function Se(R,_t){R.side===Fn?pt(s.CULL_FACE):lt(s.CULL_FACE);let dt=R.side===qe;_t&&(dt=!dt),zt(dt),R.blending===ji&&R.transparent===!1?Ot(jn):Ot(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),l.setFunc(R.depthFunc),l.setTest(R.depthTest),l.setMask(R.depthWrite),o.setMask(R.colorWrite);const At=R.stencilWrite;h.setTest(At),At&&(h.setMask(R.stencilWriteMask),h.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),h.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),S(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?lt(s.SAMPLE_ALPHA_TO_COVERAGE):pt(s.SAMPLE_ALPHA_TO_COVERAGE)}function zt(R){P!==R&&(R?s.frontFace(s.CW):s.frontFace(s.CCW),P=R)}function ae(R){R!==iu?(lt(s.CULL_FACE),R!==T&&(R===$a?s.cullFace(s.BACK):R===ru?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):pt(s.CULL_FACE),T=R}function C(R){R!==G&&(et&&s.lineWidth(R),G=R)}function S(R,_t,dt){R?(lt(s.POLYGON_OFFSET_FILL),(Q!==_t||F!==dt)&&(s.polygonOffset(_t,dt),Q=_t,F=dt)):pt(s.POLYGON_OFFSET_FILL)}function j(R){R?lt(s.SCISSOR_TEST):pt(s.SCISSOR_TEST)}function it(R){R===void 0&&(R=s.TEXTURE0+tt-1),B!==R&&(s.activeTexture(R),B=R)}function st(R,_t,dt){dt===void 0&&(B===null?dt=s.TEXTURE0+tt-1:dt=B);let At=ut[dt];At===void 0&&(At={type:void 0,texture:void 0},ut[dt]=At),(At.type!==R||At.texture!==_t)&&(B!==dt&&(s.activeTexture(dt),B=dt),s.bindTexture(R,_t||nt[R]),At.type=R,At.texture=_t)}function ot(){const R=ut[B];R!==void 0&&R.type!==void 0&&(s.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function Rt(){try{s.compressedTexImage2D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ht(){try{s.compressedTexImage3D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Pt(){try{s.texSubImage2D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function It(){try{s.texSubImage3D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function mt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function yt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function kt(){try{s.texStorage2D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Mt(){try{s.texStorage3D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Et(){try{s.texImage2D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Qt(){try{s.texImage3D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function te(R){Lt.equals(R)===!1&&(s.scissor(R.x,R.y,R.z,R.w),Lt.copy(R))}function re(R){qt.equals(R)===!1&&(s.viewport(R.x,R.y,R.z,R.w),qt.copy(R))}function se(R,_t){let dt=d.get(_t);dt===void 0&&(dt=new WeakMap,d.set(_t,dt));let At=dt.get(R);At===void 0&&(At=s.getUniformBlockIndex(_t,R.name),dt.set(R,At))}function ue(R,_t){const At=d.get(_t).get(R);u.get(_t)!==At&&(s.uniformBlockBinding(_t,At,R.__bindingPointIndex),u.set(_t,At))}function St(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),p={},B=null,ut={},m={},v=new WeakMap,g=[],y=null,b=!1,E=null,x=null,_=null,D=null,A=null,N=null,$=null,O=new ee(0,0,0),U=0,K=!1,P=null,T=null,G=null,Q=null,F=null,Lt.set(0,0,s.canvas.width,s.canvas.height),qt.set(0,0,s.canvas.width,s.canvas.height),o.reset(),l.reset(),h.reset()}return{buffers:{color:o,depth:l,stencil:h},enable:lt,disable:pt,bindFramebuffer:Nt,drawBuffers:Yt,useProgram:Jt,setBlending:Ot,setMaterial:Se,setFlipSided:zt,setCullFace:ae,setLineWidth:C,setPolygonOffset:S,setScissorTest:j,activeTexture:it,bindTexture:st,unbindTexture:ot,compressedTexImage2D:Rt,compressedTexImage3D:ht,texImage2D:Et,texImage3D:Qt,updateUBOMapping:se,uniformBlockBinding:ue,texStorage2D:kt,texStorage3D:Mt,texSubImage2D:Pt,texSubImage3D:It,compressedTexSubImage2D:mt,compressedTexSubImage3D:yt,scissor:te,viewport:re,reset:St}}function og(s,t,e,i,o,l,h){const u=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new ne,m=new WeakMap;let v;const g=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(C,S){return y?new OffscreenCanvas(C,S):Is("canvas")}function E(C,S,j){let it=1;const st=ae(C);if((st.width>j||st.height>j)&&(it=j/Math.max(st.width,st.height)),it<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const ot=Math.floor(it*st.width),Rt=Math.floor(it*st.height);v===void 0&&(v=b(ot,Rt));const ht=S?b(ot,Rt):v;return ht.width=ot,ht.height=Rt,ht.getContext("2d").drawImage(C,0,0,ot,Rt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+st.width+"x"+st.height+") to ("+ot+"x"+Rt+")."),ht}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+st.width+"x"+st.height+")."),C;return C}function x(C){return C.generateMipmaps&&C.minFilter!==sn&&C.minFilter!==fn}function _(C){s.generateMipmap(C)}function D(C,S,j,it,st=!1){if(C!==null){if(s[C]!==void 0)return s[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ot=S;if(S===s.RED&&(j===s.FLOAT&&(ot=s.R32F),j===s.HALF_FLOAT&&(ot=s.R16F),j===s.UNSIGNED_BYTE&&(ot=s.R8)),S===s.RED_INTEGER&&(j===s.UNSIGNED_BYTE&&(ot=s.R8UI),j===s.UNSIGNED_SHORT&&(ot=s.R16UI),j===s.UNSIGNED_INT&&(ot=s.R32UI),j===s.BYTE&&(ot=s.R8I),j===s.SHORT&&(ot=s.R16I),j===s.INT&&(ot=s.R32I)),S===s.RG&&(j===s.FLOAT&&(ot=s.RG32F),j===s.HALF_FLOAT&&(ot=s.RG16F),j===s.UNSIGNED_BYTE&&(ot=s.RG8)),S===s.RG_INTEGER&&(j===s.UNSIGNED_BYTE&&(ot=s.RG8UI),j===s.UNSIGNED_SHORT&&(ot=s.RG16UI),j===s.UNSIGNED_INT&&(ot=s.RG32UI),j===s.BYTE&&(ot=s.RG8I),j===s.SHORT&&(ot=s.RG16I),j===s.INT&&(ot=s.RG32I)),S===s.RGB&&j===s.UNSIGNED_INT_5_9_9_9_REV&&(ot=s.RGB9_E5),S===s.RGBA){const Rt=st?Ps:ce.getTransfer(it);j===s.FLOAT&&(ot=s.RGBA32F),j===s.HALF_FLOAT&&(ot=s.RGBA16F),j===s.UNSIGNED_BYTE&&(ot=Rt===ge?s.SRGB8_ALPHA8:s.RGBA8),j===s.UNSIGNED_SHORT_4_4_4_4&&(ot=s.RGBA4),j===s.UNSIGNED_SHORT_5_5_5_1&&(ot=s.RGB5_A1)}return(ot===s.R16F||ot===s.R32F||ot===s.RG16F||ot===s.RG32F||ot===s.RGBA16F||ot===s.RGBA32F)&&t.get("EXT_color_buffer_float"),ot}function A(C,S){return x(C)===!0||C.isFramebufferTexture&&C.minFilter!==sn&&C.minFilter!==fn?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function N(C){const S=C.target;S.removeEventListener("dispose",N),O(S),S.isVideoTexture&&m.delete(S)}function $(C){const S=C.target;S.removeEventListener("dispose",$),K(S)}function O(C){const S=i.get(C);if(S.__webglInit===void 0)return;const j=C.source,it=g.get(j);if(it){const st=it[S.__cacheKey];st.usedTimes--,st.usedTimes===0&&U(C),Object.keys(it).length===0&&g.delete(j)}i.remove(C)}function U(C){const S=i.get(C);s.deleteTexture(S.__webglTexture);const j=C.source,it=g.get(j);delete it[S.__cacheKey],h.memory.textures--}function K(C){const S=i.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let it=0;it<6;it++){if(Array.isArray(S.__webglFramebuffer[it]))for(let st=0;st<S.__webglFramebuffer[it].length;st++)s.deleteFramebuffer(S.__webglFramebuffer[it][st]);else s.deleteFramebuffer(S.__webglFramebuffer[it]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[it])}else{if(Array.isArray(S.__webglFramebuffer))for(let it=0;it<S.__webglFramebuffer.length;it++)s.deleteFramebuffer(S.__webglFramebuffer[it]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let it=0;it<S.__webglColorRenderbuffer.length;it++)S.__webglColorRenderbuffer[it]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[it]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const j=C.textures;for(let it=0,st=j.length;it<st;it++){const ot=i.get(j[it]);ot.__webglTexture&&(s.deleteTexture(ot.__webglTexture),h.memory.textures--),i.remove(j[it])}i.remove(C)}let P=0;function T(){P=0}function G(){const C=P;return C>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+o.maxTextures),P+=1,C}function Q(C){const S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function F(C,S){const j=i.get(C);if(C.isVideoTexture&&Se(C),C.isRenderTargetTexture===!1&&C.version>0&&j.__version!==C.version){const it=C.image;if(it===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(it.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Lt(j,C,S);return}}e.bindTexture(s.TEXTURE_2D,j.__webglTexture,s.TEXTURE0+S)}function tt(C,S){const j=i.get(C);if(C.version>0&&j.__version!==C.version){Lt(j,C,S);return}e.bindTexture(s.TEXTURE_2D_ARRAY,j.__webglTexture,s.TEXTURE0+S)}function et(C,S){const j=i.get(C);if(C.version>0&&j.__version!==C.version){Lt(j,C,S);return}e.bindTexture(s.TEXTURE_3D,j.__webglTexture,s.TEXTURE0+S)}function at(C,S){const j=i.get(C);if(C.version>0&&j.__version!==C.version){qt(j,C,S);return}e.bindTexture(s.TEXTURE_CUBE_MAP,j.__webglTexture,s.TEXTURE0+S)}const ct={[Yo]:s.REPEAT,[xi]:s.CLAMP_TO_EDGE,[$o]:s.MIRRORED_REPEAT},B={[sn]:s.NEAREST,[zu]:s.NEAREST_MIPMAP_NEAREST,[Qr]:s.NEAREST_MIPMAP_LINEAR,[fn]:s.LINEAR,[so]:s.LINEAR_MIPMAP_NEAREST,[yi]:s.LINEAR_MIPMAP_LINEAR},ut={[Qu]:s.NEVER,[sd]:s.ALWAYS,[td]:s.LESS,[kc]:s.LEQUAL,[ed]:s.EQUAL,[rd]:s.GEQUAL,[nd]:s.GREATER,[id]:s.NOTEQUAL};function J(C,S){if(S.type===$n&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===fn||S.magFilter===so||S.magFilter===Qr||S.magFilter===yi||S.minFilter===fn||S.minFilter===so||S.minFilter===Qr||S.minFilter===yi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,ct[S.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,ct[S.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,ct[S.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,B[S.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,B[S.minFilter]),S.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,ut[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===sn||S.minFilter!==Qr&&S.minFilter!==yi||S.type===$n&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const j=t.get("EXT_texture_filter_anisotropic");s.texParameterf(C,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,o.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function ft(C,S){let j=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",N));const it=S.source;let st=g.get(it);st===void 0&&(st={},g.set(it,st));const ot=Q(S);if(ot!==C.__cacheKey){st[ot]===void 0&&(st[ot]={texture:s.createTexture(),usedTimes:0},h.memory.textures++,j=!0),st[ot].usedTimes++;const Rt=st[C.__cacheKey];Rt!==void 0&&(st[C.__cacheKey].usedTimes--,Rt.usedTimes===0&&U(S)),C.__cacheKey=ot,C.__webglTexture=st[ot].texture}return j}function Lt(C,S,j){let it=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(it=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(it=s.TEXTURE_3D);const st=ft(C,S),ot=S.source;e.bindTexture(it,C.__webglTexture,s.TEXTURE0+j);const Rt=i.get(ot);if(ot.version!==Rt.__version||st===!0){e.activeTexture(s.TEXTURE0+j);const ht=ce.getPrimaries(ce.workingColorSpace),Pt=S.colorSpace===Yn?null:ce.getPrimaries(S.colorSpace),It=S.colorSpace===Yn||ht===Pt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,It);let mt=E(S.image,!1,o.maxTextureSize);mt=zt(S,mt);const yt=l.convert(S.format,S.colorSpace),kt=l.convert(S.type);let Mt=D(S.internalFormat,yt,kt,S.colorSpace,S.isVideoTexture);J(it,S);let Et;const Qt=S.mipmaps,te=S.isVideoTexture!==!0&&Mt!==Bc,re=Rt.__version===void 0||st===!0,se=ot.dataReady,ue=A(S,mt);if(S.isDepthTexture)Mt=s.DEPTH_COMPONENT16,S.type===$n?Mt=s.DEPTH_COMPONENT32F:S.type===er?Mt=s.DEPTH_COMPONENT24:S.type===Pr&&(Mt=s.DEPTH24_STENCIL8),re&&(te?e.texStorage2D(s.TEXTURE_2D,1,Mt,mt.width,mt.height):e.texImage2D(s.TEXTURE_2D,0,Mt,mt.width,mt.height,0,yt,kt,null));else if(S.isDataTexture)if(Qt.length>0){te&&re&&e.texStorage2D(s.TEXTURE_2D,ue,Mt,Qt[0].width,Qt[0].height);for(let St=0,R=Qt.length;St<R;St++)Et=Qt[St],te?se&&e.texSubImage2D(s.TEXTURE_2D,St,0,0,Et.width,Et.height,yt,kt,Et.data):e.texImage2D(s.TEXTURE_2D,St,Mt,Et.width,Et.height,0,yt,kt,Et.data);S.generateMipmaps=!1}else te?(re&&e.texStorage2D(s.TEXTURE_2D,ue,Mt,mt.width,mt.height),se&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,mt.width,mt.height,yt,kt,mt.data)):e.texImage2D(s.TEXTURE_2D,0,Mt,mt.width,mt.height,0,yt,kt,mt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){te&&re&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ue,Mt,Qt[0].width,Qt[0].height,mt.depth);for(let St=0,R=Qt.length;St<R;St++)Et=Qt[St],S.format!==En?yt!==null?te?se&&e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,St,0,0,0,Et.width,Et.height,mt.depth,yt,Et.data,0,0):e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,St,Mt,Et.width,Et.height,mt.depth,0,Et.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):te?se&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,St,0,0,0,Et.width,Et.height,mt.depth,yt,kt,Et.data):e.texImage3D(s.TEXTURE_2D_ARRAY,St,Mt,Et.width,Et.height,mt.depth,0,yt,kt,Et.data)}else{te&&re&&e.texStorage2D(s.TEXTURE_2D,ue,Mt,Qt[0].width,Qt[0].height);for(let St=0,R=Qt.length;St<R;St++)Et=Qt[St],S.format!==En?yt!==null?te?se&&e.compressedTexSubImage2D(s.TEXTURE_2D,St,0,0,Et.width,Et.height,yt,Et.data):e.compressedTexImage2D(s.TEXTURE_2D,St,Mt,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):te?se&&e.texSubImage2D(s.TEXTURE_2D,St,0,0,Et.width,Et.height,yt,kt,Et.data):e.texImage2D(s.TEXTURE_2D,St,Mt,Et.width,Et.height,0,yt,kt,Et.data)}else if(S.isDataArrayTexture)te?(re&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ue,Mt,mt.width,mt.height,mt.depth),se&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,mt.width,mt.height,mt.depth,yt,kt,mt.data)):e.texImage3D(s.TEXTURE_2D_ARRAY,0,Mt,mt.width,mt.height,mt.depth,0,yt,kt,mt.data);else if(S.isData3DTexture)te?(re&&e.texStorage3D(s.TEXTURE_3D,ue,Mt,mt.width,mt.height,mt.depth),se&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,mt.width,mt.height,mt.depth,yt,kt,mt.data)):e.texImage3D(s.TEXTURE_3D,0,Mt,mt.width,mt.height,mt.depth,0,yt,kt,mt.data);else if(S.isFramebufferTexture){if(re)if(te)e.texStorage2D(s.TEXTURE_2D,ue,Mt,mt.width,mt.height);else{let St=mt.width,R=mt.height;for(let _t=0;_t<ue;_t++)e.texImage2D(s.TEXTURE_2D,_t,Mt,St,R,0,yt,kt,null),St>>=1,R>>=1}}else if(Qt.length>0){if(te&&re){const St=ae(Qt[0]);e.texStorage2D(s.TEXTURE_2D,ue,Mt,St.width,St.height)}for(let St=0,R=Qt.length;St<R;St++)Et=Qt[St],te?se&&e.texSubImage2D(s.TEXTURE_2D,St,0,0,yt,kt,Et):e.texImage2D(s.TEXTURE_2D,St,Mt,yt,kt,Et);S.generateMipmaps=!1}else if(te){if(re){const St=ae(mt);e.texStorage2D(s.TEXTURE_2D,ue,Mt,St.width,St.height)}se&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,yt,kt,mt)}else e.texImage2D(s.TEXTURE_2D,0,Mt,yt,kt,mt);x(S)&&_(it),Rt.__version=ot.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function qt(C,S,j){if(S.image.length!==6)return;const it=ft(C,S),st=S.source;e.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+j);const ot=i.get(st);if(st.version!==ot.__version||it===!0){e.activeTexture(s.TEXTURE0+j);const Rt=ce.getPrimaries(ce.workingColorSpace),ht=S.colorSpace===Yn?null:ce.getPrimaries(S.colorSpace),Pt=S.colorSpace===Yn||Rt===ht?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt);const It=S.isCompressedTexture||S.image[0].isCompressedTexture,mt=S.image[0]&&S.image[0].isDataTexture,yt=[];for(let R=0;R<6;R++)!It&&!mt?yt[R]=E(S.image[R],!0,o.maxCubemapSize):yt[R]=mt?S.image[R].image:S.image[R],yt[R]=zt(S,yt[R]);const kt=yt[0],Mt=l.convert(S.format,S.colorSpace),Et=l.convert(S.type),Qt=D(S.internalFormat,Mt,Et,S.colorSpace),te=S.isVideoTexture!==!0,re=ot.__version===void 0||it===!0,se=st.dataReady;let ue=A(S,kt);J(s.TEXTURE_CUBE_MAP,S);let St;if(It){te&&re&&e.texStorage2D(s.TEXTURE_CUBE_MAP,ue,Qt,kt.width,kt.height);for(let R=0;R<6;R++){St=yt[R].mipmaps;for(let _t=0;_t<St.length;_t++){const dt=St[_t];S.format!==En?Mt!==null?te?se&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+R,_t,0,0,dt.width,dt.height,Mt,dt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+R,_t,Qt,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):te?se&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+R,_t,0,0,dt.width,dt.height,Mt,Et,dt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+R,_t,Qt,dt.width,dt.height,0,Mt,Et,dt.data)}}}else{if(St=S.mipmaps,te&&re){St.length>0&&ue++;const R=ae(yt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,ue,Qt,R.width,R.height)}for(let R=0;R<6;R++)if(mt){te?se&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+R,0,0,0,yt[R].width,yt[R].height,Mt,Et,yt[R].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+R,0,Qt,yt[R].width,yt[R].height,0,Mt,Et,yt[R].data);for(let _t=0;_t<St.length;_t++){const At=St[_t].image[R].image;te?se&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+R,_t+1,0,0,At.width,At.height,Mt,Et,At.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+R,_t+1,Qt,At.width,At.height,0,Mt,Et,At.data)}}else{te?se&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+R,0,0,0,Mt,Et,yt[R]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+R,0,Qt,Mt,Et,yt[R]);for(let _t=0;_t<St.length;_t++){const dt=St[_t];te?se&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+R,_t+1,0,0,Mt,Et,dt.image[R]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+R,_t+1,Qt,Mt,Et,dt.image[R])}}}x(S)&&_(s.TEXTURE_CUBE_MAP),ot.__version=st.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function q(C,S,j,it,st,ot){const Rt=l.convert(j.format,j.colorSpace),ht=l.convert(j.type),Pt=D(j.internalFormat,Rt,ht,j.colorSpace);if(!i.get(S).__hasExternalTextures){const mt=Math.max(1,S.width>>ot),yt=Math.max(1,S.height>>ot);st===s.TEXTURE_3D||st===s.TEXTURE_2D_ARRAY?e.texImage3D(st,ot,Pt,mt,yt,S.depth,0,Rt,ht,null):e.texImage2D(st,ot,Pt,mt,yt,0,Rt,ht,null)}e.bindFramebuffer(s.FRAMEBUFFER,C),Ot(S)?u.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,it,st,i.get(j).__webglTexture,0,Xt(S)):(st===s.TEXTURE_2D||st>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&st<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,it,st,i.get(j).__webglTexture,ot),e.bindFramebuffer(s.FRAMEBUFFER,null)}function nt(C,S,j){if(s.bindRenderbuffer(s.RENDERBUFFER,C),S.depthBuffer&&!S.stencilBuffer){let it=s.DEPTH_COMPONENT24;if(j||Ot(S)){const st=S.depthTexture;st&&st.isDepthTexture&&(st.type===$n?it=s.DEPTH_COMPONENT32F:st.type===er&&(it=s.DEPTH_COMPONENT24));const ot=Xt(S);Ot(S)?u.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ot,it,S.width,S.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,ot,it,S.width,S.height)}else s.renderbufferStorage(s.RENDERBUFFER,it,S.width,S.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,C)}else if(S.depthBuffer&&S.stencilBuffer){const it=Xt(S);j&&Ot(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,it,s.DEPTH24_STENCIL8,S.width,S.height):Ot(S)?u.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,it,s.DEPTH24_STENCIL8,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,C)}else{const it=S.textures;for(let st=0;st<it.length;st++){const ot=it[st],Rt=l.convert(ot.format,ot.colorSpace),ht=l.convert(ot.type),Pt=D(ot.internalFormat,Rt,ht,ot.colorSpace),It=Xt(S);j&&Ot(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,It,Pt,S.width,S.height):Ot(S)?u.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,It,Pt,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,Pt,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function lt(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),F(S.depthTexture,0);const it=i.get(S.depthTexture).__webglTexture,st=Xt(S);if(S.depthTexture.format===Ki)Ot(S)?u.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,it,0,st):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,it,0);else if(S.depthTexture.format===Ar)Ot(S)?u.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,it,0,st):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,it,0);else throw new Error("Unknown depthTexture format")}function pt(C){const S=i.get(C),j=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");lt(S.__webglFramebuffer,C)}else if(j){S.__webglDepthbuffer=[];for(let it=0;it<6;it++)e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[it]),S.__webglDepthbuffer[it]=s.createRenderbuffer(),nt(S.__webglDepthbuffer[it],C,!1)}else e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=s.createRenderbuffer(),nt(S.__webglDepthbuffer,C,!1);e.bindFramebuffer(s.FRAMEBUFFER,null)}function Nt(C,S,j){const it=i.get(C);S!==void 0&&q(it.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),j!==void 0&&pt(C)}function Yt(C){const S=C.texture,j=i.get(C),it=i.get(S);C.addEventListener("dispose",$);const st=C.textures,ot=C.isWebGLCubeRenderTarget===!0,Rt=st.length>1;if(Rt||(it.__webglTexture===void 0&&(it.__webglTexture=s.createTexture()),it.__version=S.version,h.memory.textures++),ot){j.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(S.mipmaps&&S.mipmaps.length>0){j.__webglFramebuffer[ht]=[];for(let Pt=0;Pt<S.mipmaps.length;Pt++)j.__webglFramebuffer[ht][Pt]=s.createFramebuffer()}else j.__webglFramebuffer[ht]=s.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){j.__webglFramebuffer=[];for(let ht=0;ht<S.mipmaps.length;ht++)j.__webglFramebuffer[ht]=s.createFramebuffer()}else j.__webglFramebuffer=s.createFramebuffer();if(Rt)for(let ht=0,Pt=st.length;ht<Pt;ht++){const It=i.get(st[ht]);It.__webglTexture===void 0&&(It.__webglTexture=s.createTexture(),h.memory.textures++)}if(C.samples>0&&Ot(C)===!1){j.__webglMultisampledFramebuffer=s.createFramebuffer(),j.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let ht=0;ht<st.length;ht++){const Pt=st[ht];j.__webglColorRenderbuffer[ht]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,j.__webglColorRenderbuffer[ht]);const It=l.convert(Pt.format,Pt.colorSpace),mt=l.convert(Pt.type),yt=D(Pt.internalFormat,It,mt,Pt.colorSpace,C.isXRRenderTarget===!0),kt=Xt(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,kt,yt,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ht,s.RENDERBUFFER,j.__webglColorRenderbuffer[ht])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(j.__webglDepthRenderbuffer=s.createRenderbuffer(),nt(j.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ot){e.bindTexture(s.TEXTURE_CUBE_MAP,it.__webglTexture),J(s.TEXTURE_CUBE_MAP,S);for(let ht=0;ht<6;ht++)if(S.mipmaps&&S.mipmaps.length>0)for(let Pt=0;Pt<S.mipmaps.length;Pt++)q(j.__webglFramebuffer[ht][Pt],C,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Pt);else q(j.__webglFramebuffer[ht],C,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);x(S)&&_(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Rt){for(let ht=0,Pt=st.length;ht<Pt;ht++){const It=st[ht],mt=i.get(It);e.bindTexture(s.TEXTURE_2D,mt.__webglTexture),J(s.TEXTURE_2D,It),q(j.__webglFramebuffer,C,It,s.COLOR_ATTACHMENT0+ht,s.TEXTURE_2D,0),x(It)&&_(s.TEXTURE_2D)}e.unbindTexture()}else{let ht=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ht=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(ht,it.__webglTexture),J(ht,S),S.mipmaps&&S.mipmaps.length>0)for(let Pt=0;Pt<S.mipmaps.length;Pt++)q(j.__webglFramebuffer[Pt],C,S,s.COLOR_ATTACHMENT0,ht,Pt);else q(j.__webglFramebuffer,C,S,s.COLOR_ATTACHMENT0,ht,0);x(S)&&_(ht),e.unbindTexture()}C.depthBuffer&&pt(C)}function Jt(C){const S=C.textures;for(let j=0,it=S.length;j<it;j++){const st=S[j];if(x(st)){const ot=C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,Rt=i.get(st).__webglTexture;e.bindTexture(ot,Rt),_(ot),e.unbindTexture()}}}function V(C){if(C.samples>0&&Ot(C)===!1){const S=C.textures,j=C.width,it=C.height;let st=s.COLOR_BUFFER_BIT;const ot=[],Rt=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ht=i.get(C),Pt=S.length>1;if(Pt)for(let It=0;It<S.length;It++)e.bindFramebuffer(s.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+It,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,ht.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+It,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,ht.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ht.__webglFramebuffer);for(let It=0;It<S.length;It++){ot.push(s.COLOR_ATTACHMENT0+It),C.depthBuffer&&ot.push(Rt);const mt=ht.__ignoreDepthValues!==void 0?ht.__ignoreDepthValues:!1;if(mt===!1&&(C.depthBuffer&&(st|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&ht.__isTransmissionRenderTarget!==!0&&(st|=s.STENCIL_BUFFER_BIT)),Pt&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ht.__webglColorRenderbuffer[It]),mt===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[Rt]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[Rt])),Pt){const yt=i.get(S[It]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,yt,0)}s.blitFramebuffer(0,0,j,it,0,0,j,it,st,s.NEAREST),d&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ot)}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Pt)for(let It=0;It<S.length;It++){e.bindFramebuffer(s.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+It,s.RENDERBUFFER,ht.__webglColorRenderbuffer[It]);const mt=i.get(S[It]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,ht.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+It,s.TEXTURE_2D,mt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ht.__webglMultisampledFramebuffer)}}function Xt(C){return Math.min(o.maxSamples,C.samples)}function Ot(C){const S=i.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Se(C){const S=h.render.frame;m.get(C)!==S&&(m.set(C,S),C.update())}function zt(C,S){const j=C.colorSpace,it=C.format,st=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||j!==ei&&j!==Yn&&(ce.getTransfer(j)===ge?(it!==En||st!==Jn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),S}function ae(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(p.width=C.naturalWidth||C.width,p.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(p.width=C.displayWidth,p.height=C.displayHeight):(p.width=C.width,p.height=C.height),p}this.allocateTextureUnit=G,this.resetTextureUnits=T,this.setTexture2D=F,this.setTexture2DArray=tt,this.setTexture3D=et,this.setTextureCube=at,this.rebindTextures=Nt,this.setupRenderTarget=Yt,this.updateRenderTargetMipmap=Jt,this.updateMultisampleRenderTarget=V,this.setupDepthRenderbuffer=pt,this.setupFrameBufferTexture=q,this.useMultisampledRTT=Ot}function ag(s,t){function e(i,o=Yn){let l;const h=ce.getTransfer(o);if(i===Jn)return s.UNSIGNED_BYTE;if(i===Dc)return s.UNSIGNED_SHORT_4_4_4_4;if(i===Uc)return s.UNSIGNED_SHORT_5_5_5_1;if(i===Gu)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===ku)return s.BYTE;if(i===Hu)return s.SHORT;if(i===Rc)return s.UNSIGNED_SHORT;if(i===Ic)return s.INT;if(i===er)return s.UNSIGNED_INT;if(i===$n)return s.FLOAT;if(i===As)return s.HALF_FLOAT;if(i===Vu)return s.ALPHA;if(i===Wu)return s.RGB;if(i===En)return s.RGBA;if(i===Xu)return s.LUMINANCE;if(i===Zu)return s.LUMINANCE_ALPHA;if(i===Ki)return s.DEPTH_COMPONENT;if(i===Ar)return s.DEPTH_STENCIL;if(i===qu)return s.RED;if(i===Nc)return s.RED_INTEGER;if(i===Yu)return s.RG;if(i===Oc)return s.RG_INTEGER;if(i===Fc)return s.RGBA_INTEGER;if(i===oo||i===ao||i===lo||i===co)if(h===ge)if(l=t.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(i===oo)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ao)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===lo)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===co)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=t.get("WEBGL_compressed_texture_s3tc"),l!==null){if(i===oo)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ao)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===lo)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===co)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Qa||i===tl||i===el||i===nl)if(l=t.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(i===Qa)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===tl)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===el)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===nl)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Bc)return l=t.get("WEBGL_compressed_texture_etc1"),l!==null?l.COMPRESSED_RGB_ETC1_WEBGL:null;if(i===il||i===rl)if(l=t.get("WEBGL_compressed_texture_etc"),l!==null){if(i===il)return h===ge?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(i===rl)return h===ge?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===sl||i===ol||i===al||i===ll||i===cl||i===hl||i===ul||i===dl||i===fl||i===pl||i===ml||i===_l||i===gl||i===vl)if(l=t.get("WEBGL_compressed_texture_astc"),l!==null){if(i===sl)return h===ge?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ol)return h===ge?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===al)return h===ge?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ll)return h===ge?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===cl)return h===ge?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===hl)return h===ge?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ul)return h===ge?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===dl)return h===ge?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===fl)return h===ge?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===pl)return h===ge?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ml)return h===ge?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===_l)return h===ge?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===gl)return h===ge?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===vl)return h===ge?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ho||i===xl||i===yl)if(l=t.get("EXT_texture_compression_bptc"),l!==null){if(i===ho)return h===ge?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===xl)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===yl)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===$u||i===Ml||i===Sl||i===El)if(l=t.get("EXT_texture_compression_rgtc"),l!==null){if(i===ho)return l.COMPRESSED_RED_RGTC1_EXT;if(i===Ml)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Sl)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===El)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Pr?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:e}}class lg extends Ke{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class wr extends Ie{constructor(){super(),this.isGroup=!0,this.type="Group"}}const cg={type:"move"};class Bo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let o=null,l=null,h=null;const u=this._targetRay,d=this._grip,p=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const E of t.hand.values()){const x=e.getJointPose(E,i),_=this._getHandJoint(p,E);x!==null&&(_.matrix.fromArray(x.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=x.radius),_.visible=x!==null}const m=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],g=m.position.distanceTo(v.position),y=.02,b=.005;p.inputState.pinching&&g>y+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&g<=y-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else d!==null&&t.gripSpace&&(l=e.getPose(t.gripSpace,i),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1));u!==null&&(o=e.getPose(t.targetRaySpace,i),o===null&&l!==null&&(o=l),o!==null&&(u.matrix.fromArray(o.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,o.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(o.linearVelocity)):u.hasLinearVelocity=!1,o.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(o.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(cg)))}return u!==null&&(u.visible=o!==null),d!==null&&(d.visible=l!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new wr;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const hg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ug=`
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

}`;class dg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const o=new Ye,l=t.properties.get(o);l.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=o}}render(t,e){if(this.texture!==null){if(this.mesh===null){const i=e.cameras[0].viewport,o=new ti({vertexShader:hg,fragmentShader:ug,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Je(new ir(20,20),o)}t.render(this.mesh,e)}}reset(){this.texture=null,this.mesh=null}}class fg extends rr{constructor(t,e){super();const i=this;let o=null,l=1,h=null,u="local-floor",d=1,p=null,m=null,v=null,g=null,y=null,b=null;const E=new dg,x=e.getContextAttributes();let _=null,D=null;const A=[],N=[],$=new ne;let O=null;const U=new Ke;U.layers.enable(1),U.viewport=new ve;const K=new Ke;K.layers.enable(2),K.viewport=new ve;const P=[U,K],T=new lg;T.layers.enable(1),T.layers.enable(2);let G=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let nt=A[q];return nt===void 0&&(nt=new Bo,A[q]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(q){let nt=A[q];return nt===void 0&&(nt=new Bo,A[q]=nt),nt.getGripSpace()},this.getHand=function(q){let nt=A[q];return nt===void 0&&(nt=new Bo,A[q]=nt),nt.getHandSpace()};function F(q){const nt=N.indexOf(q.inputSource);if(nt===-1)return;const lt=A[nt];lt!==void 0&&(lt.update(q.inputSource,q.frame,p||h),lt.dispatchEvent({type:q.type,data:q.inputSource}))}function tt(){o.removeEventListener("select",F),o.removeEventListener("selectstart",F),o.removeEventListener("selectend",F),o.removeEventListener("squeeze",F),o.removeEventListener("squeezestart",F),o.removeEventListener("squeezeend",F),o.removeEventListener("end",tt),o.removeEventListener("inputsourceschange",et);for(let q=0;q<A.length;q++){const nt=N[q];nt!==null&&(N[q]=null,A[q].disconnect(nt))}G=null,Q=null,E.reset(),t.setRenderTarget(_),y=null,g=null,v=null,o=null,D=null,qt.stop(),i.isPresenting=!1,t.setPixelRatio(O),t.setSize($.width,$.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){l=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){u=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(q){p=q},this.getBaseLayer=function(){return g!==null?g:y},this.getBinding=function(){return v},this.getFrame=function(){return b},this.getSession=function(){return o},this.setSession=async function(q){if(o=q,o!==null){if(_=t.getRenderTarget(),o.addEventListener("select",F),o.addEventListener("selectstart",F),o.addEventListener("selectend",F),o.addEventListener("squeeze",F),o.addEventListener("squeezestart",F),o.addEventListener("squeezeend",F),o.addEventListener("end",tt),o.addEventListener("inputsourceschange",et),x.xrCompatible!==!0&&await e.makeXRCompatible(),O=t.getPixelRatio(),t.getSize($),o.renderState.layers===void 0){const nt={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:l};y=new XRWebGLLayer(o,e,nt),o.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),D=new Mi(y.framebufferWidth,y.framebufferHeight,{format:En,type:Jn,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil})}else{let nt=null,lt=null,pt=null;x.depth&&(pt=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=x.stencil?Ar:Ki,lt=x.stencil?Pr:er);const Nt={colorFormat:e.RGBA8,depthFormat:pt,scaleFactor:l};v=new XRWebGLBinding(o,e),g=v.createProjectionLayer(Nt),o.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),D=new Mi(g.textureWidth,g.textureHeight,{format:En,type:Jn,depthTexture:new th(g.textureWidth,g.textureHeight,lt,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0});const Yt=t.properties.get(D);Yt.__ignoreDepthValues=g.ignoreDepthValues}D.isXRRenderTarget=!0,this.setFoveation(d),p=null,h=await o.requestReferenceSpace(u),qt.setContext(o),qt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode};function et(q){for(let nt=0;nt<q.removed.length;nt++){const lt=q.removed[nt],pt=N.indexOf(lt);pt>=0&&(N[pt]=null,A[pt].disconnect(lt))}for(let nt=0;nt<q.added.length;nt++){const lt=q.added[nt];let pt=N.indexOf(lt);if(pt===-1){for(let Yt=0;Yt<A.length;Yt++)if(Yt>=N.length){N.push(lt),pt=Yt;break}else if(N[Yt]===null){N[Yt]=lt,pt=Yt;break}if(pt===-1)break}const Nt=A[pt];Nt&&Nt.connect(lt)}}const at=new k,ct=new k;function B(q,nt,lt){at.setFromMatrixPosition(nt.matrixWorld),ct.setFromMatrixPosition(lt.matrixWorld);const pt=at.distanceTo(ct),Nt=nt.projectionMatrix.elements,Yt=lt.projectionMatrix.elements,Jt=Nt[14]/(Nt[10]-1),V=Nt[14]/(Nt[10]+1),Xt=(Nt[9]+1)/Nt[5],Ot=(Nt[9]-1)/Nt[5],Se=(Nt[8]-1)/Nt[0],zt=(Yt[8]+1)/Yt[0],ae=Jt*Se,C=Jt*zt,S=pt/(-Se+zt),j=S*-Se;nt.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(j),q.translateZ(S),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();const it=Jt+S,st=V+S,ot=ae-j,Rt=C+(pt-j),ht=Xt*V/st*it,Pt=Ot*V/st*it;q.projectionMatrix.makePerspective(ot,Rt,ht,Pt,it,st),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function ut(q,nt){nt===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(nt.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(o===null)return;E.texture!==null&&(q.near=E.depthNear,q.far=E.depthFar),T.near=K.near=U.near=q.near,T.far=K.far=U.far=q.far,(G!==T.near||Q!==T.far)&&(o.updateRenderState({depthNear:T.near,depthFar:T.far}),G=T.near,Q=T.far,U.near=G,U.far=Q,K.near=G,K.far=Q,U.updateProjectionMatrix(),K.updateProjectionMatrix(),q.updateProjectionMatrix());const nt=q.parent,lt=T.cameras;ut(T,nt);for(let pt=0;pt<lt.length;pt++)ut(lt[pt],nt);lt.length===2?B(T,U,K):T.projectionMatrix.copy(U.projectionMatrix),J(q,T,nt)};function J(q,nt,lt){lt===null?q.matrix.copy(nt.matrixWorld):(q.matrix.copy(lt.matrixWorld),q.matrix.invert(),q.matrix.multiply(nt.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(nt.projectionMatrix),q.projectionMatrixInverse.copy(nt.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=jo*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(g===null&&y===null))return d},this.setFoveation=function(q){d=q,g!==null&&(g.fixedFoveation=q),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=q)},this.hasDepthSensing=function(){return E.texture!==null};let ft=null;function Lt(q,nt){if(m=nt.getViewerPose(p||h),b=nt,m!==null){const lt=m.views;y!==null&&(t.setRenderTargetFramebuffer(D,y.framebuffer),t.setRenderTarget(D));let pt=!1;lt.length!==T.cameras.length&&(T.cameras.length=0,pt=!0);for(let Yt=0;Yt<lt.length;Yt++){const Jt=lt[Yt];let V=null;if(y!==null)V=y.getViewport(Jt);else{const Ot=v.getViewSubImage(g,Jt);V=Ot.viewport,Yt===0&&(t.setRenderTargetTextures(D,Ot.colorTexture,g.ignoreDepthValues?void 0:Ot.depthStencilTexture),t.setRenderTarget(D))}let Xt=P[Yt];Xt===void 0&&(Xt=new Ke,Xt.layers.enable(Yt),Xt.viewport=new ve,P[Yt]=Xt),Xt.matrix.fromArray(Jt.transform.matrix),Xt.matrix.decompose(Xt.position,Xt.quaternion,Xt.scale),Xt.projectionMatrix.fromArray(Jt.projectionMatrix),Xt.projectionMatrixInverse.copy(Xt.projectionMatrix).invert(),Xt.viewport.set(V.x,V.y,V.width,V.height),Yt===0&&(T.matrix.copy(Xt.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),pt===!0&&T.cameras.push(Xt)}const Nt=o.enabledFeatures;if(Nt&&Nt.includes("depth-sensing")){const Yt=v.getDepthInformation(lt[0]);Yt&&Yt.isValid&&Yt.texture&&E.init(t,Yt,o.renderState)}}for(let lt=0;lt<A.length;lt++){const pt=N[lt],Nt=A[lt];pt!==null&&Nt!==void 0&&Nt.update(pt,nt,p||h)}E.render(t,T),ft&&ft(q,nt),nt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:nt}),b=null}const qt=new Jc;qt.setAnimationLoop(Lt),this.setAnimationLoop=function(q){ft=q},this.dispose=function(){}}}const pi=new Tn,pg=new xe;function mg(s,t){function e(x,_){x.matrixAutoUpdate===!0&&x.updateMatrix(),_.value.copy(x.matrix)}function i(x,_){_.color.getRGB(x.fogColor.value,$c(s)),_.isFog?(x.fogNear.value=_.near,x.fogFar.value=_.far):_.isFogExp2&&(x.fogDensity.value=_.density)}function o(x,_,D,A,N){_.isMeshBasicMaterial||_.isMeshLambertMaterial?l(x,_):_.isMeshToonMaterial?(l(x,_),v(x,_)):_.isMeshPhongMaterial?(l(x,_),m(x,_)):_.isMeshStandardMaterial?(l(x,_),g(x,_),_.isMeshPhysicalMaterial&&y(x,_,N)):_.isMeshMatcapMaterial?(l(x,_),b(x,_)):_.isMeshDepthMaterial?l(x,_):_.isMeshDistanceMaterial?(l(x,_),E(x,_)):_.isMeshNormalMaterial?l(x,_):_.isLineBasicMaterial?(h(x,_),_.isLineDashedMaterial&&u(x,_)):_.isPointsMaterial?d(x,_,D,A):_.isSpriteMaterial?p(x,_):_.isShadowMaterial?(x.color.value.copy(_.color),x.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function l(x,_){x.opacity.value=_.opacity,_.color&&x.diffuse.value.copy(_.color),_.emissive&&x.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(x.map.value=_.map,e(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,e(_.alphaMap,x.alphaMapTransform)),_.bumpMap&&(x.bumpMap.value=_.bumpMap,e(_.bumpMap,x.bumpMapTransform),x.bumpScale.value=_.bumpScale,_.side===qe&&(x.bumpScale.value*=-1)),_.normalMap&&(x.normalMap.value=_.normalMap,e(_.normalMap,x.normalMapTransform),x.normalScale.value.copy(_.normalScale),_.side===qe&&x.normalScale.value.negate()),_.displacementMap&&(x.displacementMap.value=_.displacementMap,e(_.displacementMap,x.displacementMapTransform),x.displacementScale.value=_.displacementScale,x.displacementBias.value=_.displacementBias),_.emissiveMap&&(x.emissiveMap.value=_.emissiveMap,e(_.emissiveMap,x.emissiveMapTransform)),_.specularMap&&(x.specularMap.value=_.specularMap,e(_.specularMap,x.specularMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest);const D=t.get(_),A=D.envMap,N=D.envMapRotation;if(A&&(x.envMap.value=A,pi.copy(N),pi.x*=-1,pi.y*=-1,pi.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(pi.y*=-1,pi.z*=-1),x.envMapRotation.value.setFromMatrix4(pg.makeRotationFromEuler(pi)),x.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=_.reflectivity,x.ior.value=_.ior,x.refractionRatio.value=_.refractionRatio),_.lightMap){x.lightMap.value=_.lightMap;const $=s._useLegacyLights===!0?Math.PI:1;x.lightMapIntensity.value=_.lightMapIntensity*$,e(_.lightMap,x.lightMapTransform)}_.aoMap&&(x.aoMap.value=_.aoMap,x.aoMapIntensity.value=_.aoMapIntensity,e(_.aoMap,x.aoMapTransform))}function h(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,_.map&&(x.map.value=_.map,e(_.map,x.mapTransform))}function u(x,_){x.dashSize.value=_.dashSize,x.totalSize.value=_.dashSize+_.gapSize,x.scale.value=_.scale}function d(x,_,D,A){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.size.value=_.size*D,x.scale.value=A*.5,_.map&&(x.map.value=_.map,e(_.map,x.uvTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,e(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function p(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.rotation.value=_.rotation,_.map&&(x.map.value=_.map,e(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,e(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function m(x,_){x.specular.value.copy(_.specular),x.shininess.value=Math.max(_.shininess,1e-4)}function v(x,_){_.gradientMap&&(x.gradientMap.value=_.gradientMap)}function g(x,_){x.metalness.value=_.metalness,_.metalnessMap&&(x.metalnessMap.value=_.metalnessMap,e(_.metalnessMap,x.metalnessMapTransform)),x.roughness.value=_.roughness,_.roughnessMap&&(x.roughnessMap.value=_.roughnessMap,e(_.roughnessMap,x.roughnessMapTransform)),_.envMap&&(x.envMapIntensity.value=_.envMapIntensity)}function y(x,_,D){x.ior.value=_.ior,_.sheen>0&&(x.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),x.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(x.sheenColorMap.value=_.sheenColorMap,e(_.sheenColorMap,x.sheenColorMapTransform)),_.sheenRoughnessMap&&(x.sheenRoughnessMap.value=_.sheenRoughnessMap,e(_.sheenRoughnessMap,x.sheenRoughnessMapTransform))),_.clearcoat>0&&(x.clearcoat.value=_.clearcoat,x.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(x.clearcoatMap.value=_.clearcoatMap,e(_.clearcoatMap,x.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,e(_.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(x.clearcoatNormalMap.value=_.clearcoatNormalMap,e(_.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===qe&&x.clearcoatNormalScale.value.negate())),_.iridescence>0&&(x.iridescence.value=_.iridescence,x.iridescenceIOR.value=_.iridescenceIOR,x.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(x.iridescenceMap.value=_.iridescenceMap,e(_.iridescenceMap,x.iridescenceMapTransform)),_.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=_.iridescenceThicknessMap,e(_.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),_.transmission>0&&(x.transmission.value=_.transmission,x.transmissionSamplerMap.value=D.texture,x.transmissionSamplerSize.value.set(D.width,D.height),_.transmissionMap&&(x.transmissionMap.value=_.transmissionMap,e(_.transmissionMap,x.transmissionMapTransform)),x.thickness.value=_.thickness,_.thicknessMap&&(x.thicknessMap.value=_.thicknessMap,e(_.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=_.attenuationDistance,x.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(x.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(x.anisotropyMap.value=_.anisotropyMap,e(_.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=_.specularIntensity,x.specularColor.value.copy(_.specularColor),_.specularColorMap&&(x.specularColorMap.value=_.specularColorMap,e(_.specularColorMap,x.specularColorMapTransform)),_.specularIntensityMap&&(x.specularIntensityMap.value=_.specularIntensityMap,e(_.specularIntensityMap,x.specularIntensityMapTransform))}function b(x,_){_.matcap&&(x.matcap.value=_.matcap)}function E(x,_){const D=t.get(_).light;x.referencePosition.value.setFromMatrixPosition(D.matrixWorld),x.nearDistance.value=D.shadow.camera.near,x.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:o}}function _g(s,t,e,i){let o={},l={},h=[];const u=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function d(D,A){const N=A.program;i.uniformBlockBinding(D,N)}function p(D,A){let N=o[D.id];N===void 0&&(b(D),N=m(D),o[D.id]=N,D.addEventListener("dispose",x));const $=A.program;i.updateUBOMapping(D,$);const O=t.render.frame;l[D.id]!==O&&(g(D),l[D.id]=O)}function m(D){const A=v();D.__bindingPointIndex=A;const N=s.createBuffer(),$=D.__size,O=D.usage;return s.bindBuffer(s.UNIFORM_BUFFER,N),s.bufferData(s.UNIFORM_BUFFER,$,O),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,A,N),N}function v(){for(let D=0;D<u;D++)if(h.indexOf(D)===-1)return h.push(D),D;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(D){const A=o[D.id],N=D.uniforms,$=D.__cache;s.bindBuffer(s.UNIFORM_BUFFER,A);for(let O=0,U=N.length;O<U;O++){const K=Array.isArray(N[O])?N[O]:[N[O]];for(let P=0,T=K.length;P<T;P++){const G=K[P];if(y(G,O,P,$)===!0){const Q=G.__offset,F=Array.isArray(G.value)?G.value:[G.value];let tt=0;for(let et=0;et<F.length;et++){const at=F[et],ct=E(at);typeof at=="number"||typeof at=="boolean"?(G.__data[0]=at,s.bufferSubData(s.UNIFORM_BUFFER,Q+tt,G.__data)):at.isMatrix3?(G.__data[0]=at.elements[0],G.__data[1]=at.elements[1],G.__data[2]=at.elements[2],G.__data[3]=0,G.__data[4]=at.elements[3],G.__data[5]=at.elements[4],G.__data[6]=at.elements[5],G.__data[7]=0,G.__data[8]=at.elements[6],G.__data[9]=at.elements[7],G.__data[10]=at.elements[8],G.__data[11]=0):(at.toArray(G.__data,tt),tt+=ct.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,Q,G.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function y(D,A,N,$){const O=D.value,U=A+"_"+N;if($[U]===void 0)return typeof O=="number"||typeof O=="boolean"?$[U]=O:$[U]=O.clone(),!0;{const K=$[U];if(typeof O=="number"||typeof O=="boolean"){if(K!==O)return $[U]=O,!0}else if(K.equals(O)===!1)return K.copy(O),!0}return!1}function b(D){const A=D.uniforms;let N=0;const $=16;for(let U=0,K=A.length;U<K;U++){const P=Array.isArray(A[U])?A[U]:[A[U]];for(let T=0,G=P.length;T<G;T++){const Q=P[T],F=Array.isArray(Q.value)?Q.value:[Q.value];for(let tt=0,et=F.length;tt<et;tt++){const at=F[tt],ct=E(at),B=N%$;B!==0&&$-B<ct.boundary&&(N+=$-B),Q.__data=new Float32Array(ct.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=N,N+=ct.storage}}}const O=N%$;return O>0&&(N+=$-O),D.__size=N,D.__cache={},this}function E(D){const A={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(A.boundary=4,A.storage=4):D.isVector2?(A.boundary=8,A.storage=8):D.isVector3||D.isColor?(A.boundary=16,A.storage=12):D.isVector4?(A.boundary=16,A.storage=16):D.isMatrix3?(A.boundary=48,A.storage=48):D.isMatrix4?(A.boundary=64,A.storage=64):D.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",D),A}function x(D){const A=D.target;A.removeEventListener("dispose",x);const N=h.indexOf(A.__bindingPointIndex);h.splice(N,1),s.deleteBuffer(o[A.id]),delete o[A.id],delete l[A.id]}function _(){for(const D in o)s.deleteBuffer(o[D]);h=[],o={},l={}}return{bind:d,update:p,dispose:_}}class gg{constructor(t={}){const{canvas:e=ad(),context:i=null,depth:o=!0,stencil:l=!1,alpha:h=!1,antialias:u=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:p=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:v=!1}=t;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=h;const y=new Uint32Array(4),b=new Int32Array(4);let E=null,x=null;const _=[],D=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=xn,this._useLegacyLights=!1,this.toneMapping=Kn,this.toneMappingExposure=1;const A=this;let N=!1,$=0,O=0,U=null,K=-1,P=null;const T=new ve,G=new ve;let Q=null;const F=new ee(0);let tt=0,et=e.width,at=e.height,ct=1,B=null,ut=null;const J=new ve(0,0,et,at),ft=new ve(0,0,et,at);let Lt=!1;const qt=new sa;let q=!1,nt=!1;const lt=new xe,pt=new ne,Nt=new k,Yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Jt(){return U===null?ct:1}let V=i;function Xt(w,z){const Z=e.getContext(w,z);return Z!==null?Z:null}try{const w={alpha:!0,depth:o,stencil:l,antialias:u,premultipliedAlpha:d,preserveDrawingBuffer:p,powerPreference:m,failIfMajorPerformanceCaveat:v};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${na}`),e.addEventListener("webglcontextlost",_t,!1),e.addEventListener("webglcontextrestored",dt,!1),e.addEventListener("webglcontextcreationerror",At,!1),V===null){const z="webgl2";if(V=Xt(z,w),V===null)throw Xt(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Ot,Se,zt,ae,C,S,j,it,st,ot,Rt,ht,Pt,It,mt,yt,kt,Mt,Et,Qt,te,re,se,ue;function St(){Ot=new bm(V),Ot.init(),Se=new xm(V,Ot,t),re=new ag(V,Ot),zt=new sg(V),ae=new Pm(V),C=new X_,S=new og(V,Ot,zt,C,Se,re,ae),j=new Mm(A),it=new Tm(A),st=new Dd(V),se=new gm(V,st),ot=new wm(V,st,ae,se),Rt=new Lm(V,ot,st,ae),Et=new Cm(V,Se,S),yt=new ym(C),ht=new W_(A,j,it,Ot,Se,se,yt),Pt=new mg(A,C),It=new q_,mt=new Q_(Ot),Mt=new _m(A,j,it,zt,Rt,g,d),kt=new rg(A,Rt,Se),ue=new _g(V,ae,Se,zt),Qt=new vm(V,Ot,ae),te=new Am(V,Ot,ae),ae.programs=ht.programs,A.capabilities=Se,A.extensions=Ot,A.properties=C,A.renderLists=It,A.shadowMap=kt,A.state=zt,A.info=ae}St();const R=new fg(A,V);this.xr=R,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const w=Ot.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Ot.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return ct},this.setPixelRatio=function(w){w!==void 0&&(ct=w,this.setSize(et,at,!1))},this.getSize=function(w){return w.set(et,at)},this.setSize=function(w,z,Z=!0){if(R.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}et=w,at=z,e.width=Math.floor(w*ct),e.height=Math.floor(z*ct),Z===!0&&(e.style.width=w+"px",e.style.height=z+"px"),this.setViewport(0,0,w,z)},this.getDrawingBufferSize=function(w){return w.set(et*ct,at*ct).floor()},this.setDrawingBufferSize=function(w,z,Z){et=w,at=z,ct=Z,e.width=Math.floor(w*Z),e.height=Math.floor(z*Z),this.setViewport(0,0,w,z)},this.getCurrentViewport=function(w){return w.copy(T)},this.getViewport=function(w){return w.copy(J)},this.setViewport=function(w,z,Z,Y){w.isVector4?J.set(w.x,w.y,w.z,w.w):J.set(w,z,Z,Y),zt.viewport(T.copy(J).multiplyScalar(ct).round())},this.getScissor=function(w){return w.copy(ft)},this.setScissor=function(w,z,Z,Y){w.isVector4?ft.set(w.x,w.y,w.z,w.w):ft.set(w,z,Z,Y),zt.scissor(G.copy(ft).multiplyScalar(ct).round())},this.getScissorTest=function(){return Lt},this.setScissorTest=function(w){zt.setScissorTest(Lt=w)},this.setOpaqueSort=function(w){B=w},this.setTransparentSort=function(w){ut=w},this.getClearColor=function(w){return w.copy(Mt.getClearColor())},this.setClearColor=function(){Mt.setClearColor.apply(Mt,arguments)},this.getClearAlpha=function(){return Mt.getClearAlpha()},this.setClearAlpha=function(){Mt.setClearAlpha.apply(Mt,arguments)},this.clear=function(w=!0,z=!0,Z=!0){let Y=0;if(w){let W=!1;if(U!==null){const vt=U.texture.format;W=vt===Fc||vt===Oc||vt===Nc}if(W){const vt=U.texture.type,bt=vt===Jn||vt===er||vt===Rc||vt===Pr||vt===Dc||vt===Uc,Dt=Mt.getClearColor(),Ut=Mt.getClearAlpha(),Gt=Dt.r,Ht=Dt.g,Vt=Dt.b;bt?(y[0]=Gt,y[1]=Ht,y[2]=Vt,y[3]=Ut,V.clearBufferuiv(V.COLOR,0,y)):(b[0]=Gt,b[1]=Ht,b[2]=Vt,b[3]=Ut,V.clearBufferiv(V.COLOR,0,b))}else Y|=V.COLOR_BUFFER_BIT}z&&(Y|=V.DEPTH_BUFFER_BIT),Z&&(Y|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",_t,!1),e.removeEventListener("webglcontextrestored",dt,!1),e.removeEventListener("webglcontextcreationerror",At,!1),It.dispose(),mt.dispose(),C.dispose(),j.dispose(),it.dispose(),Rt.dispose(),se.dispose(),ue.dispose(),ht.dispose(),R.dispose(),R.removeEventListener("sessionstart",Qe),R.removeEventListener("sessionend",Ge),bn.stop()};function _t(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function dt(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const w=ae.autoReset,z=kt.enabled,Z=kt.autoUpdate,Y=kt.needsUpdate,W=kt.type;St(),ae.autoReset=w,kt.enabled=z,kt.autoUpdate=Z,kt.needsUpdate=Y,kt.type=W}function At(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Ct(w){const z=w.target;z.removeEventListener("dispose",Ct),le(z)}function le(w){de(w),C.remove(w)}function de(w){const z=C.get(w).programs;z!==void 0&&(z.forEach(function(Z){ht.releaseProgram(Z)}),w.isShaderMaterial&&ht.releaseShaderCache(w))}this.renderBufferDirect=function(w,z,Z,Y,W,vt){z===null&&(z=Yt);const bt=W.isMesh&&W.matrixWorld.determinant()<0,Dt=Nr(w,z,Z,Y,W);zt.setMaterial(Y,bt);let Ut=Z.index,Gt=1;if(Y.wireframe===!0){if(Ut=ot.getWireframeAttribute(Z),Ut===void 0)return;Gt=2}const Ht=Z.drawRange,Vt=Z.attributes.position;let ye=Ht.start*Gt,Be=(Ht.start+Ht.count)*Gt;vt!==null&&(ye=Math.max(ye,vt.start*Gt),Be=Math.min(Be,(vt.start+vt.count)*Gt)),Ut!==null?(ye=Math.max(ye,0),Be=Math.min(Be,Ut.count)):Vt!=null&&(ye=Math.max(ye,0),Be=Math.min(Be,Vt.count));const Me=Be-ye;if(Me<0||Me===1/0)return;se.setup(W,Y,Dt,Z,Ut);let ze,fe=Qt;if(Ut!==null&&(ze=st.get(Ut),fe=te,fe.setIndex(ze)),W.isMesh)Y.wireframe===!0?(zt.setLineWidth(Y.wireframeLinewidth*Jt()),fe.setMode(V.LINES)):fe.setMode(V.TRIANGLES);else if(W.isLine){let Wt=Y.linewidth;Wt===void 0&&(Wt=1),zt.setLineWidth(Wt*Jt()),W.isLineSegments?fe.setMode(V.LINES):W.isLineLoop?fe.setMode(V.LINE_LOOP):fe.setMode(V.LINE_STRIP)}else W.isPoints?fe.setMode(V.POINTS):W.isSprite&&fe.setMode(V.TRIANGLES);if(W.isBatchedMesh)fe.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else if(W.isInstancedMesh)fe.renderInstances(ye,Me,W.count);else if(Z.isInstancedBufferGeometry){const Wt=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,wn=Math.min(Z.instanceCount,Wt);fe.renderInstances(ye,Me,wn)}else fe.render(ye,Me)};function me(w,z,Z){w.transparent===!0&&w.side===Fn&&w.forceSinglePass===!1?(w.side=qe,w.needsUpdate=!0,ni(w,z,Z),w.side=Qn,w.needsUpdate=!0,ni(w,z,Z),w.side=Fn):ni(w,z,Z)}this.compile=function(w,z,Z=null){Z===null&&(Z=w),x=mt.get(Z),x.init(),D.push(x),Z.traverseVisible(function(W){W.isLight&&W.layers.test(z.layers)&&(x.pushLight(W),W.castShadow&&x.pushShadow(W))}),w!==Z&&w.traverseVisible(function(W){W.isLight&&W.layers.test(z.layers)&&(x.pushLight(W),W.castShadow&&x.pushShadow(W))}),x.setupLights(A._useLegacyLights);const Y=new Set;return w.traverse(function(W){const vt=W.material;if(vt)if(Array.isArray(vt))for(let bt=0;bt<vt.length;bt++){const Dt=vt[bt];me(Dt,Z,W),Y.add(Dt)}else me(vt,Z,W),Y.add(vt)}),D.pop(),x=null,Y},this.compileAsync=function(w,z,Z=null){const Y=this.compile(w,z,Z);return new Promise(W=>{function vt(){if(Y.forEach(function(bt){C.get(bt).currentProgram.isReady()&&Y.delete(bt)}),Y.size===0){W(w);return}setTimeout(vt,10)}Ot.get("KHR_parallel_shader_compile")!==null?vt():setTimeout(vt,10)})};let Ce=null;function he(w){Ce&&Ce(w)}function Qe(){bn.stop()}function Ge(){bn.start()}const bn=new Jc;bn.setAnimationLoop(he),typeof self<"u"&&bn.setContext(self),this.setAnimationLoop=function(w){Ce=w,R.setAnimationLoop(w),w===null?bn.stop():bn.start()},R.addEventListener("sessionstart",Qe),R.addEventListener("sessionend",Ge),this.render=function(w,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),R.enabled===!0&&R.isPresenting===!0&&(R.cameraAutoUpdate===!0&&R.updateCamera(z),z=R.getCamera()),w.isScene===!0&&w.onBeforeRender(A,w,z,U),x=mt.get(w,D.length),x.init(),D.push(x),lt.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),qt.setFromProjectionMatrix(lt),nt=this.localClippingEnabled,q=yt.init(this.clippingPlanes,nt),E=It.get(w,_.length),E.init(),_.push(E),Dr(w,z,0,A.sortObjects),E.finish(),A.sortObjects===!0&&E.sort(B,ut),this.info.render.frame++,q===!0&&yt.beginShadows();const Z=x.state.shadowsArray;if(kt.render(Z,w,z),q===!0&&yt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(R.enabled===!1||R.isPresenting===!1||R.hasDepthSensing()===!1)&&Mt.render(E,w),x.setupLights(A._useLegacyLights),z.isArrayCamera){const Y=z.cameras;for(let W=0,vt=Y.length;W<vt;W++){const bt=Y[W];Ur(E,w,bt,bt.viewport)}}else Ur(E,w,z);U!==null&&(S.updateMultisampleRenderTarget(U),S.updateRenderTargetMipmap(U)),w.isScene===!0&&w.onAfterRender(A,w,z),se.resetDefaultState(),K=-1,P=null,D.pop(),D.length>0?x=D[D.length-1]:x=null,_.pop(),_.length>0?E=_[_.length-1]:E=null};function Dr(w,z,Z,Y){if(w.visible===!1)return;if(w.layers.test(z.layers)){if(w.isGroup)Z=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(z);else if(w.isLight)x.pushLight(w),w.castShadow&&x.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||qt.intersectsSprite(w)){Y&&Nt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(lt);const bt=Rt.update(w),Dt=w.material;Dt.visible&&E.push(w,bt,Dt,Z,Nt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||qt.intersectsObject(w))){const bt=Rt.update(w),Dt=w.material;if(Y&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Nt.copy(w.boundingSphere.center)):(bt.boundingSphere===null&&bt.computeBoundingSphere(),Nt.copy(bt.boundingSphere.center)),Nt.applyMatrix4(w.matrixWorld).applyMatrix4(lt)),Array.isArray(Dt)){const Ut=bt.groups;for(let Gt=0,Ht=Ut.length;Gt<Ht;Gt++){const Vt=Ut[Gt],ye=Dt[Vt.materialIndex];ye&&ye.visible&&E.push(w,bt,ye,Z,Nt.z,Vt)}}else Dt.visible&&E.push(w,bt,Dt,Z,Nt.z,null)}}const vt=w.children;for(let bt=0,Dt=vt.length;bt<Dt;bt++)Dr(vt[bt],z,Z,Y)}function Ur(w,z,Z,Y){const W=w.opaque,vt=w.transmissive,bt=w.transparent;x.setupLightsView(Z),q===!0&&yt.setGlobalState(A.clippingPlanes,Z),vt.length>0&&Os(W,vt,z,Z),Y&&zt.viewport(T.copy(Y)),W.length>0&&Fe(W,z,Z),vt.length>0&&Fe(vt,z,Z),bt.length>0&&Fe(bt,z,Z),zt.buffers.depth.setTest(!0),zt.buffers.depth.setMask(!0),zt.buffers.color.setMask(!0),zt.setPolygonOffset(!1)}function Os(w,z,Z,Y){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(x.state.transmissionRenderTarget===null){x.state.transmissionRenderTarget=new Mi(1,1,{generateMipmaps:!0,type:Ot.has("EXT_color_buffer_half_float")||Ot.has("EXT_color_buffer_float")?As:Jn,minFilter:yi,samples:4,stencilBuffer:l});const Gt=C.get(x.state.transmissionRenderTarget);Gt.__isTransmissionRenderTarget=!0}const vt=x.state.transmissionRenderTarget;A.getDrawingBufferSize(pt),vt.setSize(pt.x,pt.y);const bt=A.getRenderTarget();A.setRenderTarget(vt),A.getClearColor(F),tt=A.getClearAlpha(),tt<1&&A.setClearColor(16777215,.5),A.clear();const Dt=A.toneMapping;A.toneMapping=Kn,Fe(w,Z,Y),S.updateMultisampleRenderTarget(vt),S.updateRenderTargetMipmap(vt);let Ut=!1;for(let Gt=0,Ht=z.length;Gt<Ht;Gt++){const Vt=z[Gt],ye=Vt.object,Be=Vt.geometry,Me=Vt.material,ze=Vt.group;if(Me.side===Fn&&ye.layers.test(Y.layers)){const fe=Me.side;Me.side=qe,Me.needsUpdate=!0,Tt(ye,Z,Y,Be,Me,ze),Me.side=fe,Me.needsUpdate=!0,Ut=!0}}Ut===!0&&(S.updateMultisampleRenderTarget(vt),S.updateRenderTargetMipmap(vt)),A.setRenderTarget(bt),A.setClearColor(F,tt),A.toneMapping=Dt}function Fe(w,z,Z){const Y=z.isScene===!0?z.overrideMaterial:null;for(let W=0,vt=w.length;W<vt;W++){const bt=w[W],Dt=bt.object,Ut=bt.geometry,Gt=Y===null?bt.material:Y,Ht=bt.group;Dt.layers.test(Z.layers)&&Tt(Dt,z,Z,Ut,Gt,Ht)}}function Tt(w,z,Z,Y,W,vt){w.onBeforeRender(A,z,Z,Y,W,vt),w.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),W.onBeforeRender(A,z,Z,Y,w,vt),W.transparent===!0&&W.side===Fn&&W.forceSinglePass===!1?(W.side=qe,W.needsUpdate=!0,A.renderBufferDirect(Z,z,Y,W,w,vt),W.side=Qn,W.needsUpdate=!0,A.renderBufferDirect(Z,z,Y,W,w,vt),W.side=Fn):A.renderBufferDirect(Z,z,Y,W,w,vt),w.onAfterRender(A,z,Z,Y,W,vt)}function ni(w,z,Z){z.isScene!==!0&&(z=Yt);const Y=C.get(w),W=x.state.lights,vt=x.state.shadowsArray,bt=W.state.version,Dt=ht.getParameters(w,W.state,vt,z,Z),Ut=ht.getProgramCacheKey(Dt);let Gt=Y.programs;Y.environment=w.isMeshStandardMaterial?z.environment:null,Y.fog=z.fog,Y.envMap=(w.isMeshStandardMaterial?it:j).get(w.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&w.envMap===null?z.environmentRotation:w.envMapRotation,Gt===void 0&&(w.addEventListener("dispose",Ct),Gt=new Map,Y.programs=Gt);let Ht=Gt.get(Ut);if(Ht!==void 0){if(Y.currentProgram===Ht&&Y.lightsStateVersion===bt)return ar(w,Dt),Ht}else Dt.uniforms=ht.getUniforms(w),w.onBuild(Z,Dt,A),w.onBeforeCompile(Dt,A),Ht=ht.acquireProgram(Dt,Ut),Gt.set(Ut,Ht),Y.uniforms=Dt.uniforms;const Vt=Y.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Vt.clippingPlanes=yt.uniform),ar(w,Dt),Y.needsLights=Or(w),Y.lightsStateVersion=bt,Y.needsLights&&(Vt.ambientLightColor.value=W.state.ambient,Vt.lightProbe.value=W.state.probe,Vt.directionalLights.value=W.state.directional,Vt.directionalLightShadows.value=W.state.directionalShadow,Vt.spotLights.value=W.state.spot,Vt.spotLightShadows.value=W.state.spotShadow,Vt.rectAreaLights.value=W.state.rectArea,Vt.ltc_1.value=W.state.rectAreaLTC1,Vt.ltc_2.value=W.state.rectAreaLTC2,Vt.pointLights.value=W.state.point,Vt.pointLightShadows.value=W.state.pointShadow,Vt.hemisphereLights.value=W.state.hemi,Vt.directionalShadowMap.value=W.state.directionalShadowMap,Vt.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Vt.spotShadowMap.value=W.state.spotShadowMap,Vt.spotLightMatrix.value=W.state.spotLightMatrix,Vt.spotLightMap.value=W.state.spotLightMap,Vt.pointShadowMap.value=W.state.pointShadowMap,Vt.pointShadowMatrix.value=W.state.pointShadowMatrix),Y.currentProgram=Ht,Y.uniformsList=null,Ht}function or(w){if(w.uniformsList===null){const z=w.currentProgram.getUniforms();w.uniformsList=bs.seqWithValue(z.seq,w.uniforms)}return w.uniformsList}function ar(w,z){const Z=C.get(w);Z.outputColorSpace=z.outputColorSpace,Z.batching=z.batching,Z.instancing=z.instancing,Z.instancingColor=z.instancingColor,Z.instancingMorph=z.instancingMorph,Z.skinning=z.skinning,Z.morphTargets=z.morphTargets,Z.morphNormals=z.morphNormals,Z.morphColors=z.morphColors,Z.morphTargetsCount=z.morphTargetsCount,Z.numClippingPlanes=z.numClippingPlanes,Z.numIntersection=z.numClipIntersection,Z.vertexAlphas=z.vertexAlphas,Z.vertexTangents=z.vertexTangents,Z.toneMapping=z.toneMapping}function Nr(w,z,Z,Y,W){z.isScene!==!0&&(z=Yt),S.resetTextureUnits();const vt=z.fog,bt=Y.isMeshStandardMaterial?z.environment:null,Dt=U===null?A.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:ei,Ut=(Y.isMeshStandardMaterial?it:j).get(Y.envMap||bt),Gt=Y.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Ht=!!Z.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Vt=!!Z.morphAttributes.position,ye=!!Z.morphAttributes.normal,Be=!!Z.morphAttributes.color;let Me=Kn;Y.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(Me=A.toneMapping);const ze=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,fe=ze!==void 0?ze.length:0,Wt=C.get(Y),wn=x.state.lights;if(q===!0&&(nt===!0||w!==P)){const Ue=w===P&&Y.id===K;yt.setState(Y,w,Ue)}let wt=!1;Y.version===Wt.__version?(Wt.needsLights&&Wt.lightsStateVersion!==wn.state.version||Wt.outputColorSpace!==Dt||W.isBatchedMesh&&Wt.batching===!1||!W.isBatchedMesh&&Wt.batching===!0||W.isInstancedMesh&&Wt.instancing===!1||!W.isInstancedMesh&&Wt.instancing===!0||W.isSkinnedMesh&&Wt.skinning===!1||!W.isSkinnedMesh&&Wt.skinning===!0||W.isInstancedMesh&&Wt.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Wt.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Wt.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Wt.instancingMorph===!1&&W.morphTexture!==null||Wt.envMap!==Ut||Y.fog===!0&&Wt.fog!==vt||Wt.numClippingPlanes!==void 0&&(Wt.numClippingPlanes!==yt.numPlanes||Wt.numIntersection!==yt.numIntersection)||Wt.vertexAlphas!==Gt||Wt.vertexTangents!==Ht||Wt.morphTargets!==Vt||Wt.morphNormals!==ye||Wt.morphColors!==Be||Wt.toneMapping!==Me||Wt.morphTargetsCount!==fe)&&(wt=!0):(wt=!0,Wt.__version=Y.version);let oe=Wt.currentProgram;wt===!0&&(oe=ni(Y,z,W));let ii=!1,tn=!1,mn=!1;const Ee=oe.getUniforms(),Ft=Wt.uniforms;if(zt.useProgram(oe.program)&&(ii=!0,tn=!0,mn=!0),Y.id!==K&&(K=Y.id,tn=!0),ii||P!==w){Ee.setValue(V,"projectionMatrix",w.projectionMatrix),Ee.setValue(V,"viewMatrix",w.matrixWorldInverse);const Ue=Ee.map.cameraPosition;Ue!==void 0&&Ue.setValue(V,Nt.setFromMatrixPosition(w.matrixWorld)),Se.logarithmicDepthBuffer&&Ee.setValue(V,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Ee.setValue(V,"isOrthographic",w.isOrthographicCamera===!0),P!==w&&(P=w,tn=!0,mn=!0)}if(W.isSkinnedMesh){Ee.setOptional(V,W,"bindMatrix"),Ee.setOptional(V,W,"bindMatrixInverse");const Ue=W.skeleton;Ue&&(Ue.boneTexture===null&&Ue.computeBoneTexture(),Ee.setValue(V,"boneTexture",Ue.boneTexture,S))}W.isBatchedMesh&&(Ee.setOptional(V,W,"batchingTexture"),Ee.setValue(V,"batchingTexture",W._matricesTexture,S));const _e=Z.morphAttributes;if((_e.position!==void 0||_e.normal!==void 0||_e.color!==void 0)&&Et.update(W,Z,oe),(tn||Wt.receiveShadow!==W.receiveShadow)&&(Wt.receiveShadow=W.receiveShadow,Ee.setValue(V,"receiveShadow",W.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Ft.envMap.value=Ut,Ft.flipEnvMap.value=Ut.isCubeTexture&&Ut.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&z.environment!==null&&(Ft.envMapIntensity.value=z.environmentIntensity),tn&&(Ee.setValue(V,"toneMappingExposure",A.toneMappingExposure),Wt.needsLights&&lr(Ft,mn),vt&&Y.fog===!0&&Pt.refreshFogUniforms(Ft,vt),Pt.refreshMaterialUniforms(Ft,Y,ct,at,x.state.transmissionRenderTarget),bs.upload(V,or(Wt),Ft,S)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(bs.upload(V,or(Wt),Ft,S),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Ee.setValue(V,"center",W.center),Ee.setValue(V,"modelViewMatrix",W.modelViewMatrix),Ee.setValue(V,"normalMatrix",W.normalMatrix),Ee.setValue(V,"modelMatrix",W.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const Ue=Y.uniformsGroups;for(let zn=0,Ve=Ue.length;zn<Ve;zn++){const Fr=Ue[zn];ue.update(Fr,oe),ue.bind(Fr,oe)}}return oe}function lr(w,z){w.ambientLightColor.needsUpdate=z,w.lightProbe.needsUpdate=z,w.directionalLights.needsUpdate=z,w.directionalLightShadows.needsUpdate=z,w.pointLights.needsUpdate=z,w.pointLightShadows.needsUpdate=z,w.spotLights.needsUpdate=z,w.spotLightShadows.needsUpdate=z,w.rectAreaLights.needsUpdate=z,w.hemisphereLights.needsUpdate=z}function Or(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return $},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(w,z,Z){C.get(w.texture).__webglTexture=z,C.get(w.depthTexture).__webglTexture=Z;const Y=C.get(w);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=Z===void 0,Y.__autoAllocateDepthBuffer||Ot.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,z){const Z=C.get(w);Z.__webglFramebuffer=z,Z.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(w,z=0,Z=0){U=w,$=z,O=Z;let Y=!0,W=null,vt=!1,bt=!1;if(w){const Ut=C.get(w);Ut.__useDefaultFramebuffer!==void 0?(zt.bindFramebuffer(V.FRAMEBUFFER,null),Y=!1):Ut.__webglFramebuffer===void 0?S.setupRenderTarget(w):Ut.__hasExternalTextures&&S.rebindTextures(w,C.get(w.texture).__webglTexture,C.get(w.depthTexture).__webglTexture);const Gt=w.texture;(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)&&(bt=!0);const Ht=C.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ht[z])?W=Ht[z][Z]:W=Ht[z],vt=!0):w.samples>0&&S.useMultisampledRTT(w)===!1?W=C.get(w).__webglMultisampledFramebuffer:Array.isArray(Ht)?W=Ht[Z]:W=Ht,T.copy(w.viewport),G.copy(w.scissor),Q=w.scissorTest}else T.copy(J).multiplyScalar(ct).floor(),G.copy(ft).multiplyScalar(ct).floor(),Q=Lt;if(zt.bindFramebuffer(V.FRAMEBUFFER,W)&&Y&&zt.drawBuffers(w,W),zt.viewport(T),zt.scissor(G),zt.setScissorTest(Q),vt){const Ut=C.get(w.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+z,Ut.__webglTexture,Z)}else if(bt){const Ut=C.get(w.texture),Gt=z||0;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,Ut.__webglTexture,Z||0,Gt)}K=-1},this.readRenderTargetPixels=function(w,z,Z,Y,W,vt,bt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Dt=C.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&bt!==void 0&&(Dt=Dt[bt]),Dt){zt.bindFramebuffer(V.FRAMEBUFFER,Dt);try{const Ut=w.texture,Gt=Ut.format,Ht=Ut.type;if(Gt!==En&&re.convert(Gt)!==V.getParameter(V.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Vt=Ht===As&&(Ot.has("EXT_color_buffer_half_float")||Ot.has("EXT_color_buffer_float"));if(Ht!==Jn&&re.convert(Ht)!==V.getParameter(V.IMPLEMENTATION_COLOR_READ_TYPE)&&Ht!==$n&&!Vt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=w.width-Y&&Z>=0&&Z<=w.height-W&&V.readPixels(z,Z,Y,W,re.convert(Gt),re.convert(Ht),vt)}finally{const Ut=U!==null?C.get(U).__webglFramebuffer:null;zt.bindFramebuffer(V.FRAMEBUFFER,Ut)}}},this.copyFramebufferToTexture=function(w,z,Z=0){const Y=Math.pow(2,-Z),W=Math.floor(z.image.width*Y),vt=Math.floor(z.image.height*Y);S.setTexture2D(z,0),V.copyTexSubImage2D(V.TEXTURE_2D,Z,0,0,w.x,w.y,W,vt),zt.unbindTexture()},this.copyTextureToTexture=function(w,z,Z,Y=0){const W=z.image.width,vt=z.image.height,bt=re.convert(Z.format),Dt=re.convert(Z.type);S.setTexture2D(Z,0),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,Z.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,Z.unpackAlignment),z.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Y,w.x,w.y,W,vt,bt,Dt,z.image.data):z.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Y,w.x,w.y,z.mipmaps[0].width,z.mipmaps[0].height,bt,z.mipmaps[0].data):V.texSubImage2D(V.TEXTURE_2D,Y,w.x,w.y,bt,Dt,z.image),Y===0&&Z.generateMipmaps&&V.generateMipmap(V.TEXTURE_2D),zt.unbindTexture()},this.copyTextureToTexture3D=function(w,z,Z,Y,W=0){const vt=Math.round(w.max.x-w.min.x),bt=Math.round(w.max.y-w.min.y),Dt=w.max.z-w.min.z+1,Ut=re.convert(Y.format),Gt=re.convert(Y.type);let Ht;if(Y.isData3DTexture)S.setTexture3D(Y,0),Ht=V.TEXTURE_3D;else if(Y.isDataArrayTexture||Y.isCompressedArrayTexture)S.setTexture2DArray(Y,0),Ht=V.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,Y.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,Y.unpackAlignment);const Vt=V.getParameter(V.UNPACK_ROW_LENGTH),ye=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Be=V.getParameter(V.UNPACK_SKIP_PIXELS),Me=V.getParameter(V.UNPACK_SKIP_ROWS),ze=V.getParameter(V.UNPACK_SKIP_IMAGES),fe=Z.isCompressedTexture?Z.mipmaps[W]:Z.image;V.pixelStorei(V.UNPACK_ROW_LENGTH,fe.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,fe.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,w.min.x),V.pixelStorei(V.UNPACK_SKIP_ROWS,w.min.y),V.pixelStorei(V.UNPACK_SKIP_IMAGES,w.min.z),Z.isDataTexture||Z.isData3DTexture?V.texSubImage3D(Ht,W,z.x,z.y,z.z,vt,bt,Dt,Ut,Gt,fe.data):Y.isCompressedArrayTexture?V.compressedTexSubImage3D(Ht,W,z.x,z.y,z.z,vt,bt,Dt,Ut,fe.data):V.texSubImage3D(Ht,W,z.x,z.y,z.z,vt,bt,Dt,Ut,Gt,fe),V.pixelStorei(V.UNPACK_ROW_LENGTH,Vt),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,ye),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Be),V.pixelStorei(V.UNPACK_SKIP_ROWS,Me),V.pixelStorei(V.UNPACK_SKIP_IMAGES,ze),W===0&&Y.generateMipmaps&&V.generateMipmap(Ht),zt.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?S.setTextureCube(w,0):w.isData3DTexture?S.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?S.setTexture2DArray(w,0):S.setTexture2D(w,0),zt.unbindTexture()},this.resetState=function(){$=0,O=0,U=null,zt.reset(),se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===ia?"display-p3":"srgb",e.unpackColorSpace=ce.workingColorSpace===Us?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class aa{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new ee(t),this.density=e}clone(){return new aa(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class vg extends Ie{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Tn,this.environmentIntensity=1,this.environmentRotation=new Tn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class oh extends Ei{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ee(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const pc=new k,mc=new k,_c=new xe,zo=new ra,Ms=new Ir;class xg extends Ie{constructor(t=new an,e=new oh){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let o=1,l=e.count;o<l;o++)pc.fromBufferAttribute(e,o-1),mc.fromBufferAttribute(e,o),i[o]=i[o-1],i[o]+=pc.distanceTo(mc);t.setAttribute("lineDistance",new pn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,o=this.matrixWorld,l=t.params.Line.threshold,h=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ms.copy(i.boundingSphere),Ms.applyMatrix4(o),Ms.radius+=l,t.ray.intersectsSphere(Ms)===!1)return;_c.copy(o).invert(),zo.copy(t.ray).applyMatrix4(_c);const u=l/((this.scale.x+this.scale.y+this.scale.z)/3),d=u*u,p=new k,m=new k,v=new k,g=new k,y=this.isLineSegments?2:1,b=i.index,x=i.attributes.position;if(b!==null){const _=Math.max(0,h.start),D=Math.min(b.count,h.start+h.count);for(let A=_,N=D-1;A<N;A+=y){const $=b.getX(A),O=b.getX(A+1);if(p.fromBufferAttribute(x,$),m.fromBufferAttribute(x,O),zo.distanceSqToSegment(p,m,g,v)>d)continue;g.applyMatrix4(this.matrixWorld);const K=t.ray.origin.distanceTo(g);K<t.near||K>t.far||e.push({distance:K,point:v.clone().applyMatrix4(this.matrixWorld),index:A,face:null,faceIndex:null,object:this})}}else{const _=Math.max(0,h.start),D=Math.min(x.count,h.start+h.count);for(let A=_,N=D-1;A<N;A+=y){if(p.fromBufferAttribute(x,A),m.fromBufferAttribute(x,A+1),zo.distanceSqToSegment(p,m,g,v)>d)continue;g.applyMatrix4(this.matrixWorld);const O=t.ray.origin.distanceTo(g);O<t.near||O>t.far||e.push({distance:O,point:v.clone().applyMatrix4(this.matrixWorld),index:A,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const o=e[i[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,h=o.length;l<h;l++){const u=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=l}}}}}const gc=new k,vc=new k;class yg extends xg{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let o=0,l=e.count;o<l;o+=2)gc.fromBufferAttribute(e,o),vc.fromBufferAttribute(e,o+1),i[o]=o===0?0:i[o-1],i[o+1]=i[o]+gc.distanceTo(vc);t.setAttribute("lineDistance",new pn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Jo extends Ei{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ee(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const xc=new xe,Qo=new ra,Ss=new Ir,Es=new k;class yc extends Ie{constructor(t=new an,e=new Jo){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,o=this.matrixWorld,l=t.params.Points.threshold,h=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ss.copy(i.boundingSphere),Ss.applyMatrix4(o),Ss.radius+=l,t.ray.intersectsSphere(Ss)===!1)return;xc.copy(o).invert(),Qo.copy(t.ray).applyMatrix4(xc);const u=l/((this.scale.x+this.scale.y+this.scale.z)/3),d=u*u,p=i.index,v=i.attributes.position;if(p!==null){const g=Math.max(0,h.start),y=Math.min(p.count,h.start+h.count);for(let b=g,E=y;b<E;b++){const x=p.getX(b);Es.fromBufferAttribute(v,x),Mc(Es,x,d,o,t,e,this)}}else{const g=Math.max(0,h.start),y=Math.min(v.count,h.start+h.count);for(let b=g,E=y;b<E;b++)Es.fromBufferAttribute(v,b),Mc(Es,b,d,o,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const o=e[i[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,h=o.length;l<h;l++){const u=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=l}}}}}function Mc(s,t,e,i,o,l,h){const u=Qo.distanceSqToPoint(s);if(u<e){const d=new k;Qo.closestPointToPoint(s,d),d.applyMatrix4(i);const p=o.ray.origin.distanceTo(d);if(p<o.near||p>o.far)return;l.push({distance:p,distanceToRay:Math.sqrt(u),point:d,index:t,face:null,object:h})}}class Ts extends Ei{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ee(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zc,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class la extends Ie{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ee(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const ko=new xe,Sc=new k,Ec=new k;class ah{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ne(512,512),this.map=null,this.mapPass=null,this.matrix=new xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new sa,this._frameExtents=new ne(1,1),this._viewportCount=1,this._viewports=[new ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Sc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Sc),Ec.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ec),e.updateMatrixWorld(),ko.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ko),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ko)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Tc=new xe,Tr=new k,Ho=new k;class Mg extends ah{constructor(){super(new Ke(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ne(4,2),this._viewportCount=6,this._viewports=[new ve(2,1,1,1),new ve(0,1,1,1),new ve(3,1,1,1),new ve(1,1,1,1),new ve(3,0,1,1),new ve(1,0,1,1)],this._cubeDirections=[new k(1,0,0),new k(-1,0,0),new k(0,0,1),new k(0,0,-1),new k(0,1,0),new k(0,-1,0)],this._cubeUps=[new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,0,1),new k(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,o=this.matrix,l=t.distance||i.far;l!==i.far&&(i.far=l,i.updateProjectionMatrix()),Tr.setFromMatrixPosition(t.matrixWorld),i.position.copy(Tr),Ho.copy(i.position),Ho.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(Ho),i.updateMatrixWorld(),o.makeTranslation(-Tr.x,-Tr.y,-Tr.z),Tc.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Tc)}}class Go extends la{constructor(t,e,i=0,o=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=o,this.shadow=new Mg}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Sg extends ah{constructor(){super(new Qc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Eg extends la{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.target=new Ie,this.shadow=new Sg}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Tg extends la{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class bg{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=bc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=bc();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function bc(){return(typeof performance>"u"?Date:performance).now()}class wg extends yg{constructor(t=10,e=10,i=4473924,o=8947848){i=new ee(i),o=new ee(o);const l=e/2,h=t/e,u=t/2,d=[],p=[];for(let g=0,y=0,b=-u;g<=e;g++,b+=h){d.push(-u,0,b,u,0,b),d.push(b,0,-u,b,0,u);const E=g===l?i:o;E.toArray(p,y),y+=3,E.toArray(p,y),y+=3,E.toArray(p,y),y+=3,E.toArray(p,y),y+=3}const m=new an;m.setAttribute("position",new pn(d,3)),m.setAttribute("color",new pn(p,3));const v=new oh({vertexColors:!0,toneMapped:!1});super(m,v),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:na}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=na);const Ag="/api";async function Pg(s){const t=new URLSearchParams({location:s.location||"Bangalore",budget:String(s.budget||2e4),type:s.type||"all",bhk:s.bhk||"all"}),e=await fetch(`${Ag}/search?${t}`);if(!e.ok){const i=await e.json().catch(()=>({}));throw new Error(i.error||`HTTP ${e.status}`)}return e.json()}function Sn(s){return s>=1e5?`₹${(s/1e5).toFixed(1)}L`:s>=1e3?`₹${(s/1e3).toFixed(0)}K`:`₹${s}`}function lh(s,t){return s<=t?"in-budget":s<=t*1.2?"near-budget":"over-budget"}function Cg(s,t=3e3){let e=document.querySelector(".toast");e||(e=document.createElement("div"),e.className="toast",document.body.appendChild(e)),e.textContent=s,e.classList.add("show"),setTimeout(()=>e.classList.remove("show"),t)}const Lg='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',Rg='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9,22 9,12 15,12 15,22"/></svg>',Ig='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>',Dg='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 4v16"/><path d="M2 8h18a2 2 0 0 1 2 2v10"/><path d="M2 17h20"/><path d="M6 8v9"/></svg>',Ug='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>';class Ng{constructor(t,e){this.container=t,this.navigate=e,this.animFrameId=null,this.scene=null,this.renderer=null,this.clock=new bg,this.budget=2e4,this.render()}render(){this.container.innerHTML=`
      <div class="landing-page">
        <canvas id="hero-canvas"></canvas>

        <div class="hero-overlay">
          <div class="hero-badge">
            <span class="glow-dot"></span>
            Real-Time Rental Data · 3D Maps · AI Insights
          </div>

          <h1 class="hero-title">
            Find Your<br/>
            <span>Perfect Home</span><br/>
            Nearby
          </h1>

          <p class="hero-subtitle">
            Search apartments, flats, PGs and houses with live rental prices,
            interactive 3D maps, and smart budget analysis.
          </p>

          <div class="glass search-form">
            <div class="form-row">
              <div class="input-group">
                <label class="input-label" for="location-input">
                  <span style="display:inline-flex;align-items:center;gap:5px;">${Lg} Location / Locality</span>
                </label>
                <input
                  id="location-input"
                  class="input-field"
                  type="text"
                  placeholder="e.g. Koramangala, Bangalore or Sector 17, Chandigarh"
                  value=""
                  autocomplete="off"
                />
              </div>

              <div class="input-group">
                <label class="input-label">
                  <span style="display:inline-flex;align-items:center;gap:5px;">${Rg} Property Type</span>
                </label>
                <div class="chip-group" id="type-chips">
                  <button class="chip active" data-value="all">All</button>
                  <button class="chip" data-value="flat">Flat</button>
                  <button class="chip" data-value="house">House</button>
                  <button class="chip" data-value="pg">PG</button>
                  <button class="chip" data-value="studio">Studio</button>
                </div>
              </div>
            </div>

            <div class="form-row">
              <div class="input-group">
                <label class="input-label">
                  <span style="display:inline-flex;align-items:center;gap:5px;">${Ig} Monthly Budget</span>
                </label>
                <div class="budget-display" id="budget-display">${Sn(this.budget)} / mo</div>
                <div class="budget-slider-row">
                  <span class="budget-label">₹5K</span>
                  <input
                    type="range"
                    class="slider"
                    id="budget-slider"
                    min="5000"
                    max="150000"
                    step="1000"
                    value="${this.budget}"
                  />
                  <span class="budget-label">₹1.5L</span>
                </div>
              </div>

              <div class="input-group">
                <label class="input-label">
                  <span style="display:inline-flex;align-items:center;gap:5px;">${Dg} BHK Configuration</span>
                </label>
                <div class="chip-group" id="bhk-chips">
                  <button class="chip active" data-value="all">Any</button>
                  <button class="chip" data-value="1">1 BHK</button>
                  <button class="chip" data-value="2">2 BHK</button>
                  <button class="chip" data-value="3">3 BHK+</button>
                </div>
              </div>
            </div>

            <div class="form-divider"></div>

            <div class="form-submit-row">
              <button class="btn btn-primary" id="search-btn" style="font-size:1rem;padding:14px 40px;">
                ${Ug}
                Search Properties
              </button>
              <span style="color:var(--text-muted);font-size:0.78rem;">Real-time data · Updated now</span>
            </div>
          </div>

          <div style="display:flex;gap:40px;margin-top:36px;animation:fadeSlideUp 0.8s 0.5s ease both;">
            <div style="text-align:center;">
              <div style="font-family:var(--font-display);font-size:1.8rem;font-weight:400;color:#fff;letter-spacing:0.01em;">50K+</div>
              <div style="font-size:0.62rem;color:rgba(160,200,240,0.45);text-transform:uppercase;letter-spacing:0.18em;margin-top:4px;">Listings</div>
            </div>
            <div style="width:1px;background:rgba(160,200,240,0.12);"></div>
            <div style="text-align:center;">
              <div style="font-family:var(--font-display);font-size:1.8rem;font-weight:400;color:var(--accent);letter-spacing:0.01em;">30+</div>
              <div style="font-size:0.62rem;color:rgba(160,200,240,0.45);text-transform:uppercase;letter-spacing:0.18em;margin-top:4px;">Cities</div>
            </div>
            <div style="width:1px;background:rgba(160,200,240,0.12);"></div>
            <div style="text-align:center;">
              <div style="font-family:var(--font-display);font-size:1.8rem;font-weight:400;color:var(--accent-bright);letter-spacing:0.01em;">Live</div>
              <div style="font-size:0.62rem;color:rgba(160,200,240,0.45);text-transform:uppercase;letter-spacing:0.18em;margin-top:4px;">Pricing</div>
            </div>
          </div>
        </div>
      </div>
    `,this.initThreeJS(),this.bindEvents()}bindEvents(){var o,l,h;const t=document.getElementById("budget-slider"),e=document.getElementById("budget-display");t==null||t.addEventListener("input",u=>{this.budget=parseInt(u.target.value),e.textContent=`${Sn(this.budget)} / mo`,this.updateSliderGradient(t)}),this.updateSliderGradient(t),(o=document.getElementById("type-chips"))==null||o.addEventListener("click",u=>{const d=u.target.closest(".chip");d&&(document.querySelectorAll("#type-chips .chip").forEach(p=>p.classList.remove("active")),d.classList.add("active"))}),(l=document.getElementById("bhk-chips"))==null||l.addEventListener("click",u=>{const d=u.target.closest(".chip");d&&(document.querySelectorAll("#bhk-chips .chip").forEach(p=>p.classList.remove("active")),d.classList.add("active"))});const i=document.getElementById("search-btn");i==null||i.addEventListener("click",()=>this.handleSearch()),(h=document.getElementById("location-input"))==null||h.addEventListener("keydown",u=>{u.key==="Enter"&&this.handleSearch()})}handleSearch(){var l,h,u,d,p;const t=(h=(l=document.getElementById("location-input"))==null?void 0:l.value)==null?void 0:h.trim();if(!t){(u=document.getElementById("location-input"))==null||u.focus();return}const e=((d=document.querySelector("#type-chips .chip.active"))==null?void 0:d.dataset.value)||"all",i=((p=document.querySelector("#bhk-chips .chip.active"))==null?void 0:p.dataset.value)||"all",o=document.getElementById("search-btn");o.disabled=!0,o.innerHTML='<div class="spinner" style="width:18px;height:18px;border-width:2px;"></div> Searching...',this.navigate("map",{location:t,budget:this.budget,type:e,bhk:i})}updateSliderGradient(t){if(!t)return;const e=+t.min,i=+t.max,l=(+t.value-e)/(i-e)*100;t.style.background=`linear-gradient(90deg, var(--accent) ${l}%, var(--border) ${l}%)`}initThreeJS(){const t=document.getElementById("hero-canvas");t&&(this.renderer=new gg({canvas:t,antialias:!0,alpha:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(t.clientWidth,t.clientHeight),this.renderer.setClearColor(528152,1),this.renderer.toneMapping=Cc,this.renderer.toneMappingExposure=.85,this.scene=new vg,this.scene.fog=new aa(528152,.02),this.camera=new Ke(50,t.clientWidth/t.clientHeight,.1,200),this.camera.position.set(0,18,38),this.camera.lookAt(0,4,0),this.addParticles(),this.addCity(),this.addLights(),this.addGround(),this.addFloatingDust(),this.animate(),this.resizeHandler=()=>this.onResize(),window.addEventListener("resize",this.resizeHandler))}addParticles(){const e=new Float32Array(4500);for(let l=0;l<1500;l++)e[l*3]=(Math.random()-.5)*300,e[l*3+1]=Math.random()*120+5,e[l*3+2]=(Math.random()-.5)*300;const i=new an;i.setAttribute("position",new on(e,3));const o=new Jo({color:11060440,size:.1,sizeAttenuation:!0,transparent:!0,opacity:.22});this.stars=new yc(i,o),this.scene.add(this.stars)}addCity(){this.buildings=new wr;const t=[{x:0,z:0,w:2,d:2,h:16,accent:!0},{x:-3,z:-1,w:1.5,d:1.5,h:12,accent:!1},{x:3,z:1,w:1.8,d:1.8,h:14,accent:!0},{x:-5,z:2,w:1.2,d:1.2,h:8,accent:!1},{x:5,z:-2,w:2,d:1.5,h:18,accent:!0},{x:7,z:2,w:1.5,d:1.5,h:10,accent:!1},{x:-7,z:-1,w:1.8,d:1.8,h:15,accent:!0},{x:9,z:-1,w:1.2,d:1.2,h:7,accent:!1},{x:-9,z:3,w:1.2,d:1.2,h:9,accent:!1},{x:2,z:-8,w:1.5,d:1.5,h:11,accent:!1},{x:-4,z:8,w:1.5,d:1.5,h:9,accent:!0},{x:8,z:6,w:1.2,d:1.2,h:7,accent:!1},{x:-8,z:-6,w:2,d:1.5,h:13,accent:!0},{x:12,z:0,w:1,d:1,h:6,accent:!1},{x:-12,z:2,w:1,d:1,h:5,accent:!1},{x:0,z:10,w:1.5,d:1.5,h:8,accent:!1},{x:6,z:-8,w:1,d:1,h:6,accent:!0},{x:-6,z:-10,w:1.2,d:1.2,h:7,accent:!1},{x:14,z:4,w:.8,d:.8,h:4,accent:!1},{x:-14,z:-4,w:.8,d:.8,h:4,accent:!1},{x:10,z:-10,w:1,d:1,h:5,accent:!1},{x:-10,z:10,w:1,d:1,h:5,accent:!0}];for(const e of t){const i=new Si(e.w,e.h,e.d),o=new Ts({color:e.accent?923688:659488,emissive:e.accent?396824:198152,emissiveIntensity:.35,roughness:.88,metalness:.12}),l=new Je(i,o);if(l.position.set(e.x,e.h/2,e.z),l.castShadow=!0,l.receiveShadow=!0,this.buildings.add(l),e.accent){const h=new Si(e.w*.6,.15,e.d*.6),u=new Ts({color:11060440,emissive:11060440,emissiveIntensity:1.6}),d=new Je(h,u);d.position.set(e.x,e.h+.08,e.z),this.buildings.add(d);const p=new Go(11060440,.5,6);p.position.set(e.x,e.h+.5,e.z),this.buildings.add(p)}this.addWindows(e)}this.scene.add(this.buildings)}addWindows(t){const e=Math.floor(t.h/1.2),i=Math.max(2,Math.floor(t.w/.7)),o=.18,l=.22;for(let h=0;h<e;h++)for(let u=0;u<i;u++){if(Math.random()>.65)continue;const d=Math.random()>.25,p=Math.random()>.5?9088204:13162736,m=new ir(o,l),v=new Ts({color:d?p:395792,emissive:d?p:0,emissiveIntensity:d?.6:0,transparent:!0,opacity:d?1:.15}),g=new Je(m,v),y=(u/(i-1)-.5)*(t.w*.7),b=.8+h*1.1;g.position.set(t.x+y,b,t.z+t.d/2+.01),this.buildings.add(g)}}addGround(){const t=new wg(80,40,923688,528152);t.position.y=0,this.scene.add(t);const e=new ir(200,200),i=new Ts({color:396308,roughness:1,metalness:0}),o=new Je(e,i);o.rotation.x=-Math.PI/2,o.receiveShadow=!0,this.scene.add(o)}addLights(){const t=new Tg(661544,2);this.scene.add(t);const e=new Eg(9087176,.45);e.position.set(-10,20,10),this.scene.add(e);const i=new Go(6328512,.8,48);i.position.set(5,20,-10),this.scene.add(i);const o=new Go(3162208,.5,36);o.position.set(-8,15,5),this.scene.add(o)}addFloatingDust(){const e=new Float32Array(750);for(let l=0;l<250;l++)e[l*3]=(Math.random()-.5)*60,e[l*3+1]=Math.random()*25,e[l*3+2]=(Math.random()-.5)*60;const i=new an;i.setAttribute("position",new on(e,3));const o=new Jo({color:11060440,size:.05,transparent:!0,opacity:.25});this.particles=new yc(i,o),this.scene.add(this.particles)}animate(){this.animFrameId=requestAnimationFrame(()=>this.animate());const t=this.clock.getElapsedTime(),e=38,i=.05;this.camera.position.x=Math.sin(t*i)*e*.3,this.camera.position.z=Math.cos(t*i)*e,this.camera.position.y=18+Math.sin(t*.08)*2,this.camera.lookAt(0,4,0),this.stars&&(this.stars.rotation.y=t*.008),this.particles&&(this.particles.rotation.y=t*.015,this.particles.position.y=Math.sin(t*.3)*.5),this.renderer.render(this.scene,this.camera)}onResize(){const t=document.getElementById("hero-canvas");if(!t||!this.renderer||!this.camera)return;const e=t.clientWidth,i=t.clientHeight;this.renderer.setSize(e,i,!1),this.camera.aspect=e/i,this.camera.updateProjectionMatrix()}destroy(){var t,e;this.animFrameId&&cancelAnimationFrame(this.animFrameId),window.removeEventListener("resize",this.resizeHandler),(t=this.renderer)==null||t.dispose(),(e=this.scene)==null||e.clear()}}var Og=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Fg(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var ta={exports:{}};/* @preserve
 * Leaflet 1.9.4, a JS library for interactive maps. https://leafletjs.com
 * (c) 2010-2023 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */(function(s,t){(function(e,i){i(t)})(Og,function(e){var i="1.9.4";function o(n){var r,a,c,f;for(a=1,c=arguments.length;a<c;a++){f=arguments[a];for(r in f)n[r]=f[r]}return n}var l=Object.create||function(){function n(){}return function(r){return n.prototype=r,new n}}();function h(n,r){var a=Array.prototype.slice;if(n.bind)return n.bind.apply(n,a.call(arguments,1));var c=a.call(arguments,2);return function(){return n.apply(r,c.length?c.concat(a.call(arguments)):arguments)}}var u=0;function d(n){return"_leaflet_id"in n||(n._leaflet_id=++u),n._leaflet_id}function p(n,r,a){var c,f,M,I;return I=function(){c=!1,f&&(M.apply(a,f),f=!1)},M=function(){c?f=arguments:(n.apply(a,arguments),setTimeout(I,r),c=!0)},M}function m(n,r,a){var c=r[1],f=r[0],M=c-f;return n===c&&a?n:((n-f)%M+M)%M+f}function v(){return!1}function g(n,r){if(r===!1)return n;var a=Math.pow(10,r===void 0?6:r);return Math.round(n*a)/a}function y(n){return n.trim?n.trim():n.replace(/^\s+|\s+$/g,"")}function b(n){return y(n).split(/\s+/)}function E(n,r){Object.prototype.hasOwnProperty.call(n,"options")||(n.options=n.options?l(n.options):{});for(var a in r)n.options[a]=r[a];return n.options}function x(n,r,a){var c=[];for(var f in n)c.push(encodeURIComponent(a?f.toUpperCase():f)+"="+encodeURIComponent(n[f]));return(!r||r.indexOf("?")===-1?"?":"&")+c.join("&")}var _=/\{ *([\w_ -]+) *\}/g;function D(n,r){return n.replace(_,function(a,c){var f=r[c];if(f===void 0)throw new Error("No value provided for variable "+a);return typeof f=="function"&&(f=f(r)),f})}var A=Array.isArray||function(n){return Object.prototype.toString.call(n)==="[object Array]"};function N(n,r){for(var a=0;a<n.length;a++)if(n[a]===r)return a;return-1}var $="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";function O(n){return window["webkit"+n]||window["moz"+n]||window["ms"+n]}var U=0;function K(n){var r=+new Date,a=Math.max(0,16-(r-U));return U=r+a,window.setTimeout(n,a)}var P=window.requestAnimationFrame||O("RequestAnimationFrame")||K,T=window.cancelAnimationFrame||O("CancelAnimationFrame")||O("CancelRequestAnimationFrame")||function(n){window.clearTimeout(n)};function G(n,r,a){if(a&&P===K)n.call(r);else return P.call(window,h(n,r))}function Q(n){n&&T.call(window,n)}var F={__proto__:null,extend:o,create:l,bind:h,get lastId(){return u},stamp:d,throttle:p,wrapNum:m,falseFn:v,formatNum:g,trim:y,splitWords:b,setOptions:E,getParamString:x,template:D,isArray:A,indexOf:N,emptyImageUrl:$,requestFn:P,cancelFn:T,requestAnimFrame:G,cancelAnimFrame:Q};function tt(){}tt.extend=function(n){var r=function(){E(this),this.initialize&&this.initialize.apply(this,arguments),this.callInitHooks()},a=r.__super__=this.prototype,c=l(a);c.constructor=r,r.prototype=c;for(var f in this)Object.prototype.hasOwnProperty.call(this,f)&&f!=="prototype"&&f!=="__super__"&&(r[f]=this[f]);return n.statics&&o(r,n.statics),n.includes&&(et(n.includes),o.apply(null,[c].concat(n.includes))),o(c,n),delete c.statics,delete c.includes,c.options&&(c.options=a.options?l(a.options):{},o(c.options,n.options)),c._initHooks=[],c.callInitHooks=function(){if(!this._initHooksCalled){a.callInitHooks&&a.callInitHooks.call(this),this._initHooksCalled=!0;for(var M=0,I=c._initHooks.length;M<I;M++)c._initHooks[M].call(this)}},r},tt.include=function(n){var r=this.prototype.options;return o(this.prototype,n),n.options&&(this.prototype.options=r,this.mergeOptions(n.options)),this},tt.mergeOptions=function(n){return o(this.prototype.options,n),this},tt.addInitHook=function(n){var r=Array.prototype.slice.call(arguments,1),a=typeof n=="function"?n:function(){this[n].apply(this,r)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(a),this};function et(n){if(!(typeof L>"u"||!L||!L.Mixin)){n=A(n)?n:[n];for(var r=0;r<n.length;r++)n[r]===L.Mixin.Events&&console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",new Error().stack)}}var at={on:function(n,r,a){if(typeof n=="object")for(var c in n)this._on(c,n[c],r);else{n=b(n);for(var f=0,M=n.length;f<M;f++)this._on(n[f],r,a)}return this},off:function(n,r,a){if(!arguments.length)delete this._events;else if(typeof n=="object")for(var c in n)this._off(c,n[c],r);else{n=b(n);for(var f=arguments.length===1,M=0,I=n.length;M<I;M++)f?this._off(n[M]):this._off(n[M],r,a)}return this},_on:function(n,r,a,c){if(typeof r!="function"){console.warn("wrong listener type: "+typeof r);return}if(this._listens(n,r,a)===!1){a===this&&(a=void 0);var f={fn:r,ctx:a};c&&(f.once=!0),this._events=this._events||{},this._events[n]=this._events[n]||[],this._events[n].push(f)}},_off:function(n,r,a){var c,f,M;if(this._events&&(c=this._events[n],!!c)){if(arguments.length===1){if(this._firingCount)for(f=0,M=c.length;f<M;f++)c[f].fn=v;delete this._events[n];return}if(typeof r!="function"){console.warn("wrong listener type: "+typeof r);return}var I=this._listens(n,r,a);if(I!==!1){var H=c[I];this._firingCount&&(H.fn=v,this._events[n]=c=c.slice()),c.splice(I,1)}}},fire:function(n,r,a){if(!this.listens(n,a))return this;var c=o({},r,{type:n,target:this,sourceTarget:r&&r.sourceTarget||this});if(this._events){var f=this._events[n];if(f){this._firingCount=this._firingCount+1||1;for(var M=0,I=f.length;M<I;M++){var H=f[M],X=H.fn;H.once&&this.off(n,X,H.ctx),X.call(H.ctx||this,c)}this._firingCount--}}return a&&this._propagateEvent(c),this},listens:function(n,r,a,c){typeof n!="string"&&console.warn('"string" type argument expected');var f=r;typeof r!="function"&&(c=!!r,f=void 0,a=void 0);var M=this._events&&this._events[n];if(M&&M.length&&this._listens(n,f,a)!==!1)return!0;if(c){for(var I in this._eventParents)if(this._eventParents[I].listens(n,r,a,c))return!0}return!1},_listens:function(n,r,a){if(!this._events)return!1;var c=this._events[n]||[];if(!r)return!!c.length;a===this&&(a=void 0);for(var f=0,M=c.length;f<M;f++)if(c[f].fn===r&&c[f].ctx===a)return f;return!1},once:function(n,r,a){if(typeof n=="object")for(var c in n)this._on(c,n[c],r,!0);else{n=b(n);for(var f=0,M=n.length;f<M;f++)this._on(n[f],r,a,!0)}return this},addEventParent:function(n){return this._eventParents=this._eventParents||{},this._eventParents[d(n)]=n,this},removeEventParent:function(n){return this._eventParents&&delete this._eventParents[d(n)],this},_propagateEvent:function(n){for(var r in this._eventParents)this._eventParents[r].fire(n.type,o({layer:n.target,propagatedFrom:n.target},n),!0)}};at.addEventListener=at.on,at.removeEventListener=at.clearAllEventListeners=at.off,at.addOneTimeEventListener=at.once,at.fireEvent=at.fire,at.hasEventListeners=at.listens;var ct=tt.extend(at);function B(n,r,a){this.x=a?Math.round(n):n,this.y=a?Math.round(r):r}var ut=Math.trunc||function(n){return n>0?Math.floor(n):Math.ceil(n)};B.prototype={clone:function(){return new B(this.x,this.y)},add:function(n){return this.clone()._add(J(n))},_add:function(n){return this.x+=n.x,this.y+=n.y,this},subtract:function(n){return this.clone()._subtract(J(n))},_subtract:function(n){return this.x-=n.x,this.y-=n.y,this},divideBy:function(n){return this.clone()._divideBy(n)},_divideBy:function(n){return this.x/=n,this.y/=n,this},multiplyBy:function(n){return this.clone()._multiplyBy(n)},_multiplyBy:function(n){return this.x*=n,this.y*=n,this},scaleBy:function(n){return new B(this.x*n.x,this.y*n.y)},unscaleBy:function(n){return new B(this.x/n.x,this.y/n.y)},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},trunc:function(){return this.clone()._trunc()},_trunc:function(){return this.x=ut(this.x),this.y=ut(this.y),this},distanceTo:function(n){n=J(n);var r=n.x-this.x,a=n.y-this.y;return Math.sqrt(r*r+a*a)},equals:function(n){return n=J(n),n.x===this.x&&n.y===this.y},contains:function(n){return n=J(n),Math.abs(n.x)<=Math.abs(this.x)&&Math.abs(n.y)<=Math.abs(this.y)},toString:function(){return"Point("+g(this.x)+", "+g(this.y)+")"}};function J(n,r,a){return n instanceof B?n:A(n)?new B(n[0],n[1]):n==null?n:typeof n=="object"&&"x"in n&&"y"in n?new B(n.x,n.y):new B(n,r,a)}function ft(n,r){if(n)for(var a=r?[n,r]:n,c=0,f=a.length;c<f;c++)this.extend(a[c])}ft.prototype={extend:function(n){var r,a;if(!n)return this;if(n instanceof B||typeof n[0]=="number"||"x"in n)r=a=J(n);else if(n=Lt(n),r=n.min,a=n.max,!r||!a)return this;return!this.min&&!this.max?(this.min=r.clone(),this.max=a.clone()):(this.min.x=Math.min(r.x,this.min.x),this.max.x=Math.max(a.x,this.max.x),this.min.y=Math.min(r.y,this.min.y),this.max.y=Math.max(a.y,this.max.y)),this},getCenter:function(n){return J((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,n)},getBottomLeft:function(){return J(this.min.x,this.max.y)},getTopRight:function(){return J(this.max.x,this.min.y)},getTopLeft:function(){return this.min},getBottomRight:function(){return this.max},getSize:function(){return this.max.subtract(this.min)},contains:function(n){var r,a;return typeof n[0]=="number"||n instanceof B?n=J(n):n=Lt(n),n instanceof ft?(r=n.min,a=n.max):r=a=n,r.x>=this.min.x&&a.x<=this.max.x&&r.y>=this.min.y&&a.y<=this.max.y},intersects:function(n){n=Lt(n);var r=this.min,a=this.max,c=n.min,f=n.max,M=f.x>=r.x&&c.x<=a.x,I=f.y>=r.y&&c.y<=a.y;return M&&I},overlaps:function(n){n=Lt(n);var r=this.min,a=this.max,c=n.min,f=n.max,M=f.x>r.x&&c.x<a.x,I=f.y>r.y&&c.y<a.y;return M&&I},isValid:function(){return!!(this.min&&this.max)},pad:function(n){var r=this.min,a=this.max,c=Math.abs(r.x-a.x)*n,f=Math.abs(r.y-a.y)*n;return Lt(J(r.x-c,r.y-f),J(a.x+c,a.y+f))},equals:function(n){return n?(n=Lt(n),this.min.equals(n.getTopLeft())&&this.max.equals(n.getBottomRight())):!1}};function Lt(n,r){return!n||n instanceof ft?n:new ft(n,r)}function qt(n,r){if(n)for(var a=r?[n,r]:n,c=0,f=a.length;c<f;c++)this.extend(a[c])}qt.prototype={extend:function(n){var r=this._southWest,a=this._northEast,c,f;if(n instanceof nt)c=n,f=n;else if(n instanceof qt){if(c=n._southWest,f=n._northEast,!c||!f)return this}else return n?this.extend(lt(n)||q(n)):this;return!r&&!a?(this._southWest=new nt(c.lat,c.lng),this._northEast=new nt(f.lat,f.lng)):(r.lat=Math.min(c.lat,r.lat),r.lng=Math.min(c.lng,r.lng),a.lat=Math.max(f.lat,a.lat),a.lng=Math.max(f.lng,a.lng)),this},pad:function(n){var r=this._southWest,a=this._northEast,c=Math.abs(r.lat-a.lat)*n,f=Math.abs(r.lng-a.lng)*n;return new qt(new nt(r.lat-c,r.lng-f),new nt(a.lat+c,a.lng+f))},getCenter:function(){return new nt((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new nt(this.getNorth(),this.getWest())},getSouthEast:function(){return new nt(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(n){typeof n[0]=="number"||n instanceof nt||"lat"in n?n=lt(n):n=q(n);var r=this._southWest,a=this._northEast,c,f;return n instanceof qt?(c=n.getSouthWest(),f=n.getNorthEast()):c=f=n,c.lat>=r.lat&&f.lat<=a.lat&&c.lng>=r.lng&&f.lng<=a.lng},intersects:function(n){n=q(n);var r=this._southWest,a=this._northEast,c=n.getSouthWest(),f=n.getNorthEast(),M=f.lat>=r.lat&&c.lat<=a.lat,I=f.lng>=r.lng&&c.lng<=a.lng;return M&&I},overlaps:function(n){n=q(n);var r=this._southWest,a=this._northEast,c=n.getSouthWest(),f=n.getNorthEast(),M=f.lat>r.lat&&c.lat<a.lat,I=f.lng>r.lng&&c.lng<a.lng;return M&&I},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(n,r){return n?(n=q(n),this._southWest.equals(n.getSouthWest(),r)&&this._northEast.equals(n.getNorthEast(),r)):!1},isValid:function(){return!!(this._southWest&&this._northEast)}};function q(n,r){return n instanceof qt?n:new qt(n,r)}function nt(n,r,a){if(isNaN(n)||isNaN(r))throw new Error("Invalid LatLng object: ("+n+", "+r+")");this.lat=+n,this.lng=+r,a!==void 0&&(this.alt=+a)}nt.prototype={equals:function(n,r){if(!n)return!1;n=lt(n);var a=Math.max(Math.abs(this.lat-n.lat),Math.abs(this.lng-n.lng));return a<=(r===void 0?1e-9:r)},toString:function(n){return"LatLng("+g(this.lat,n)+", "+g(this.lng,n)+")"},distanceTo:function(n){return Nt.distance(this,lt(n))},wrap:function(){return Nt.wrapLatLng(this)},toBounds:function(n){var r=180*n/40075017,a=r/Math.cos(Math.PI/180*this.lat);return q([this.lat-r,this.lng-a],[this.lat+r,this.lng+a])},clone:function(){return new nt(this.lat,this.lng,this.alt)}};function lt(n,r,a){return n instanceof nt?n:A(n)&&typeof n[0]!="object"?n.length===3?new nt(n[0],n[1],n[2]):n.length===2?new nt(n[0],n[1]):null:n==null?n:typeof n=="object"&&"lat"in n?new nt(n.lat,"lng"in n?n.lng:n.lon,n.alt):r===void 0?null:new nt(n,r,a)}var pt={latLngToPoint:function(n,r){var a=this.projection.project(n),c=this.scale(r);return this.transformation._transform(a,c)},pointToLatLng:function(n,r){var a=this.scale(r),c=this.transformation.untransform(n,a);return this.projection.unproject(c)},project:function(n){return this.projection.project(n)},unproject:function(n){return this.projection.unproject(n)},scale:function(n){return 256*Math.pow(2,n)},zoom:function(n){return Math.log(n/256)/Math.LN2},getProjectedBounds:function(n){if(this.infinite)return null;var r=this.projection.bounds,a=this.scale(n),c=this.transformation.transform(r.min,a),f=this.transformation.transform(r.max,a);return new ft(c,f)},infinite:!1,wrapLatLng:function(n){var r=this.wrapLng?m(n.lng,this.wrapLng,!0):n.lng,a=this.wrapLat?m(n.lat,this.wrapLat,!0):n.lat,c=n.alt;return new nt(a,r,c)},wrapLatLngBounds:function(n){var r=n.getCenter(),a=this.wrapLatLng(r),c=r.lat-a.lat,f=r.lng-a.lng;if(c===0&&f===0)return n;var M=n.getSouthWest(),I=n.getNorthEast(),H=new nt(M.lat-c,M.lng-f),X=new nt(I.lat-c,I.lng-f);return new qt(H,X)}},Nt=o({},pt,{wrapLng:[-180,180],R:6371e3,distance:function(n,r){var a=Math.PI/180,c=n.lat*a,f=r.lat*a,M=Math.sin((r.lat-n.lat)*a/2),I=Math.sin((r.lng-n.lng)*a/2),H=M*M+Math.cos(c)*Math.cos(f)*I*I,X=2*Math.atan2(Math.sqrt(H),Math.sqrt(1-H));return this.R*X}}),Yt=6378137,Jt={R:Yt,MAX_LATITUDE:85.0511287798,project:function(n){var r=Math.PI/180,a=this.MAX_LATITUDE,c=Math.max(Math.min(a,n.lat),-a),f=Math.sin(c*r);return new B(this.R*n.lng*r,this.R*Math.log((1+f)/(1-f))/2)},unproject:function(n){var r=180/Math.PI;return new nt((2*Math.atan(Math.exp(n.y/this.R))-Math.PI/2)*r,n.x*r/this.R)},bounds:function(){var n=Yt*Math.PI;return new ft([-n,-n],[n,n])}()};function V(n,r,a,c){if(A(n)){this._a=n[0],this._b=n[1],this._c=n[2],this._d=n[3];return}this._a=n,this._b=r,this._c=a,this._d=c}V.prototype={transform:function(n,r){return this._transform(n.clone(),r)},_transform:function(n,r){return r=r||1,n.x=r*(this._a*n.x+this._b),n.y=r*(this._c*n.y+this._d),n},untransform:function(n,r){return r=r||1,new B((n.x/r-this._b)/this._a,(n.y/r-this._d)/this._c)}};function Xt(n,r,a,c){return new V(n,r,a,c)}var Ot=o({},Nt,{code:"EPSG:3857",projection:Jt,transformation:function(){var n=.5/(Math.PI*Jt.R);return Xt(n,.5,-n,.5)}()}),Se=o({},Ot,{code:"EPSG:900913"});function zt(n){return document.createElementNS("http://www.w3.org/2000/svg",n)}function ae(n,r){var a="",c,f,M,I,H,X;for(c=0,M=n.length;c<M;c++){for(H=n[c],f=0,I=H.length;f<I;f++)X=H[f],a+=(f?"L":"M")+X.x+" "+X.y;a+=r?Tt.svg?"z":"x":""}return a||"M0 0"}var C=document.documentElement.style,S="ActiveXObject"in window,j=S&&!document.addEventListener,it="msLaunchUri"in navigator&&!("documentMode"in document),st=Fe("webkit"),ot=Fe("android"),Rt=Fe("android 2")||Fe("android 3"),ht=parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],10),Pt=ot&&Fe("Google")&&ht<537&&!("AudioNode"in window),It=!!window.opera,mt=!it&&Fe("chrome"),yt=Fe("gecko")&&!st&&!It&&!S,kt=!mt&&Fe("safari"),Mt=Fe("phantom"),Et="OTransition"in C,Qt=navigator.platform.indexOf("Win")===0,te=S&&"transition"in C,re="WebKitCSSMatrix"in window&&"m11"in new window.WebKitCSSMatrix&&!Rt,se="MozPerspective"in C,ue=!window.L_DISABLE_3D&&(te||re||se)&&!Et&&!Mt,St=typeof orientation<"u"||Fe("mobile"),R=St&&st,_t=St&&re,dt=!window.PointerEvent&&window.MSPointerEvent,At=!!(window.PointerEvent||dt),Ct="ontouchstart"in window||!!window.TouchEvent,le=!window.L_NO_TOUCH&&(Ct||At),de=St&&It,me=St&&yt,Ce=(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI)>1,he=function(){var n=!1;try{var r=Object.defineProperty({},"passive",{get:function(){n=!0}});window.addEventListener("testPassiveEventSupport",v,r),window.removeEventListener("testPassiveEventSupport",v,r)}catch{}return n}(),Qe=function(){return!!document.createElement("canvas").getContext}(),Ge=!!(document.createElementNS&&zt("svg").createSVGRect),bn=!!Ge&&function(){var n=document.createElement("div");return n.innerHTML="<svg/>",(n.firstChild&&n.firstChild.namespaceURI)==="http://www.w3.org/2000/svg"}(),Dr=!Ge&&function(){try{var n=document.createElement("div");n.innerHTML='<v:shape adj="1"/>';var r=n.firstChild;return r.style.behavior="url(#default#VML)",r&&typeof r.adj=="object"}catch{return!1}}(),Ur=navigator.platform.indexOf("Mac")===0,Os=navigator.platform.indexOf("Linux")===0;function Fe(n){return navigator.userAgent.toLowerCase().indexOf(n)>=0}var Tt={ie:S,ielt9:j,edge:it,webkit:st,android:ot,android23:Rt,androidStock:Pt,opera:It,chrome:mt,gecko:yt,safari:kt,phantom:Mt,opera12:Et,win:Qt,ie3d:te,webkit3d:re,gecko3d:se,any3d:ue,mobile:St,mobileWebkit:R,mobileWebkit3d:_t,msPointer:dt,pointer:At,touch:le,touchNative:Ct,mobileOpera:de,mobileGecko:me,retina:Ce,passiveEvents:he,canvas:Qe,svg:Ge,vml:Dr,inlineSvg:bn,mac:Ur,linux:Os},ni=Tt.msPointer?"MSPointerDown":"pointerdown",or=Tt.msPointer?"MSPointerMove":"pointermove",ar=Tt.msPointer?"MSPointerUp":"pointerup",Nr=Tt.msPointer?"MSPointerCancel":"pointercancel",lr={touchstart:ni,touchmove:or,touchend:ar,touchcancel:Nr},Or={touchstart:Gt,touchmove:Ut,touchend:Ut,touchcancel:Ut},w={},z=!1;function Z(n,r,a){return r==="touchstart"&&Dt(),Or[r]?(a=Or[r].bind(this,a),n.addEventListener(lr[r],a,!1),a):(console.warn("wrong event specified:",r),v)}function Y(n,r,a){if(!lr[r]){console.warn("wrong event specified:",r);return}n.removeEventListener(lr[r],a,!1)}function W(n){w[n.pointerId]=n}function vt(n){w[n.pointerId]&&(w[n.pointerId]=n)}function bt(n){delete w[n.pointerId]}function Dt(){z||(document.addEventListener(ni,W,!0),document.addEventListener(or,vt,!0),document.addEventListener(ar,bt,!0),document.addEventListener(Nr,bt,!0),z=!0)}function Ut(n,r){if(r.pointerType!==(r.MSPOINTER_TYPE_MOUSE||"mouse")){r.touches=[];for(var a in w)r.touches.push(w[a]);r.changedTouches=[r],n(r)}}function Gt(n,r){r.MSPOINTER_TYPE_TOUCH&&r.pointerType===r.MSPOINTER_TYPE_TOUCH&&De(r),Ut(n,r)}function Ht(n){var r={},a,c;for(c in n)a=n[c],r[c]=a&&a.bind?a.bind(n):a;return n=r,r.type="dblclick",r.detail=2,r.isTrusted=!1,r._simulated=!0,r}var Vt=200;function ye(n,r){n.addEventListener("dblclick",r);var a=0,c;function f(M){if(M.detail!==1){c=M.detail;return}if(!(M.pointerType==="mouse"||M.sourceCapabilities&&!M.sourceCapabilities.firesTouchEvents)){var I=ua(M);if(!(I.some(function(X){return X instanceof HTMLLabelElement&&X.attributes.for})&&!I.some(function(X){return X instanceof HTMLInputElement||X instanceof HTMLSelectElement}))){var H=Date.now();H-a<=Vt?(c++,c===2&&r(Ht(M))):c=1,a=H}}}return n.addEventListener("click",f),{dblclick:r,simDblclick:f}}function Be(n,r){n.removeEventListener("dblclick",r.dblclick),n.removeEventListener("click",r.simDblclick)}var Me=Br(["transform","webkitTransform","OTransform","MozTransform","msTransform"]),ze=Br(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),fe=ze==="webkitTransition"||ze==="OTransition"?ze+"End":"transitionend";function Wt(n){return typeof n=="string"?document.getElementById(n):n}function wn(n,r){var a=n.style[r]||n.currentStyle&&n.currentStyle[r];if((!a||a==="auto")&&document.defaultView){var c=document.defaultView.getComputedStyle(n,null);a=c?c[r]:null}return a==="auto"?null:a}function wt(n,r,a){var c=document.createElement(n);return c.className=r||"",a&&a.appendChild(c),c}function oe(n){var r=n.parentNode;r&&r.removeChild(n)}function ii(n){for(;n.firstChild;)n.removeChild(n.firstChild)}function tn(n){var r=n.parentNode;r&&r.lastChild!==n&&r.appendChild(n)}function mn(n){var r=n.parentNode;r&&r.firstChild!==n&&r.insertBefore(n,r.firstChild)}function Ee(n,r){if(n.classList!==void 0)return n.classList.contains(r);var a=zn(n);return a.length>0&&new RegExp("(^|\\s)"+r+"(\\s|$)").test(a)}function Ft(n,r){if(n.classList!==void 0)for(var a=b(r),c=0,f=a.length;c<f;c++)n.classList.add(a[c]);else if(!Ee(n,r)){var M=zn(n);Ue(n,(M?M+" ":"")+r)}}function _e(n,r){n.classList!==void 0?n.classList.remove(r):Ue(n,y((" "+zn(n)+" ").replace(" "+r+" "," ")))}function Ue(n,r){n.className.baseVal===void 0?n.className=r:n.className.baseVal=r}function zn(n){return n.correspondingElement&&(n=n.correspondingElement),n.className.baseVal===void 0?n.className:n.className.baseVal}function Ve(n,r){"opacity"in n.style?n.style.opacity=r:"filter"in n.style&&Fr(n,r)}function Fr(n,r){var a=!1,c="DXImageTransform.Microsoft.Alpha";try{a=n.filters.item(c)}catch{if(r===1)return}r=Math.round(r*100),a?(a.Enabled=r!==100,a.Opacity=r):n.style.filter+=" progid:"+c+"(opacity="+r+")"}function Br(n){for(var r=document.documentElement.style,a=0;a<n.length;a++)if(n[a]in r)return n[a];return!1}function ri(n,r,a){var c=r||new B(0,0);n.style[Me]=(Tt.ie3d?"translate("+c.x+"px,"+c.y+"px)":"translate3d("+c.x+"px,"+c.y+"px,0)")+(a?" scale("+a+")":"")}function Te(n,r){n._leaflet_pos=r,Tt.any3d?ri(n,r):(n.style.left=r.x+"px",n.style.top=r.y+"px")}function si(n){return n._leaflet_pos||new B(0,0)}var cr,hr,Fs;if("onselectstart"in document)cr=function(){Zt(window,"selectstart",De)},hr=function(){pe(window,"selectstart",De)};else{var ur=Br(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);cr=function(){if(ur){var n=document.documentElement.style;Fs=n[ur],n[ur]="none"}},hr=function(){ur&&(document.documentElement.style[ur]=Fs,Fs=void 0)}}function Bs(){Zt(window,"dragstart",De)}function zs(){pe(window,"dragstart",De)}var zr,ks;function Hs(n){for(;n.tabIndex===-1;)n=n.parentNode;n.style&&(kr(),zr=n,ks=n.style.outlineStyle,n.style.outlineStyle="none",Zt(window,"keydown",kr))}function kr(){zr&&(zr.style.outlineStyle=ks,zr=void 0,ks=void 0,pe(window,"keydown",kr))}function ca(n){do n=n.parentNode;while((!n.offsetWidth||!n.offsetHeight)&&n!==document.body);return n}function Gs(n){var r=n.getBoundingClientRect();return{x:r.width/n.offsetWidth||1,y:r.height/n.offsetHeight||1,boundingClientRect:r}}var ch={__proto__:null,TRANSFORM:Me,TRANSITION:ze,TRANSITION_END:fe,get:Wt,getStyle:wn,create:wt,remove:oe,empty:ii,toFront:tn,toBack:mn,hasClass:Ee,addClass:Ft,removeClass:_e,setClass:Ue,getClass:zn,setOpacity:Ve,testProp:Br,setTransform:ri,setPosition:Te,getPosition:si,get disableTextSelection(){return cr},get enableTextSelection(){return hr},disableImageDrag:Bs,enableImageDrag:zs,preventOutline:Hs,restoreOutline:kr,getSizedParentNode:ca,getScale:Gs};function Zt(n,r,a,c){if(r&&typeof r=="object")for(var f in r)Ws(n,f,r[f],a);else{r=b(r);for(var M=0,I=r.length;M<I;M++)Ws(n,r[M],a,c)}return this}var _n="_leaflet_events";function pe(n,r,a,c){if(arguments.length===1)ha(n),delete n[_n];else if(r&&typeof r=="object")for(var f in r)Xs(n,f,r[f],a);else if(r=b(r),arguments.length===2)ha(n,function(H){return N(r,H)!==-1});else for(var M=0,I=r.length;M<I;M++)Xs(n,r[M],a,c);return this}function ha(n,r){for(var a in n[_n]){var c=a.split(/\d/)[0];(!r||r(c))&&Xs(n,c,null,null,a)}}var Vs={mouseenter:"mouseover",mouseleave:"mouseout",wheel:!("onwheel"in window)&&"mousewheel"};function Ws(n,r,a,c){var f=r+d(a)+(c?"_"+d(c):"");if(n[_n]&&n[_n][f])return this;var M=function(H){return a.call(c||n,H||window.event)},I=M;!Tt.touchNative&&Tt.pointer&&r.indexOf("touch")===0?M=Z(n,r,M):Tt.touch&&r==="dblclick"?M=ye(n,M):"addEventListener"in n?r==="touchstart"||r==="touchmove"||r==="wheel"||r==="mousewheel"?n.addEventListener(Vs[r]||r,M,Tt.passiveEvents?{passive:!1}:!1):r==="mouseenter"||r==="mouseleave"?(M=function(H){H=H||window.event,qs(n,H)&&I(H)},n.addEventListener(Vs[r],M,!1)):n.addEventListener(r,I,!1):n.attachEvent("on"+r,M),n[_n]=n[_n]||{},n[_n][f]=M}function Xs(n,r,a,c,f){f=f||r+d(a)+(c?"_"+d(c):"");var M=n[_n]&&n[_n][f];if(!M)return this;!Tt.touchNative&&Tt.pointer&&r.indexOf("touch")===0?Y(n,r,M):Tt.touch&&r==="dblclick"?Be(n,M):"removeEventListener"in n?n.removeEventListener(Vs[r]||r,M,!1):n.detachEvent("on"+r,M),n[_n][f]=null}function oi(n){return n.stopPropagation?n.stopPropagation():n.originalEvent?n.originalEvent._stopped=!0:n.cancelBubble=!0,this}function Zs(n){return Ws(n,"wheel",oi),this}function dr(n){return Zt(n,"mousedown touchstart dblclick contextmenu",oi),n._leaflet_disable_click=!0,this}function De(n){return n.preventDefault?n.preventDefault():n.returnValue=!1,this}function ai(n){return De(n),oi(n),this}function ua(n){if(n.composedPath)return n.composedPath();for(var r=[],a=n.target;a;)r.push(a),a=a.parentNode;return r}function da(n,r){if(!r)return new B(n.clientX,n.clientY);var a=Gs(r),c=a.boundingClientRect;return new B((n.clientX-c.left)/a.x-r.clientLeft,(n.clientY-c.top)/a.y-r.clientTop)}var hh=Tt.linux&&Tt.chrome?window.devicePixelRatio:Tt.mac?window.devicePixelRatio*3:window.devicePixelRatio>0?2*window.devicePixelRatio:1;function fa(n){return Tt.edge?n.wheelDeltaY/2:n.deltaY&&n.deltaMode===0?-n.deltaY/hh:n.deltaY&&n.deltaMode===1?-n.deltaY*20:n.deltaY&&n.deltaMode===2?-n.deltaY*60:n.deltaX||n.deltaZ?0:n.wheelDelta?(n.wheelDeltaY||n.wheelDelta)/2:n.detail&&Math.abs(n.detail)<32765?-n.detail*20:n.detail?n.detail/-32765*60:0}function qs(n,r){var a=r.relatedTarget;if(!a)return!0;try{for(;a&&a!==n;)a=a.parentNode}catch{return!1}return a!==n}var uh={__proto__:null,on:Zt,off:pe,stopPropagation:oi,disableScrollPropagation:Zs,disableClickPropagation:dr,preventDefault:De,stop:ai,getPropagationPath:ua,getMousePosition:da,getWheelDelta:fa,isExternalTarget:qs,addListener:Zt,removeListener:pe},pa=ct.extend({run:function(n,r,a,c){this.stop(),this._el=n,this._inProgress=!0,this._duration=a||.25,this._easeOutPower=1/Math.max(c||.5,.2),this._startPos=si(n),this._offset=r.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){this._animId=G(this._animate,this),this._step()},_step:function(n){var r=+new Date-this._startTime,a=this._duration*1e3;r<a?this._runFrame(this._easeOut(r/a),n):(this._runFrame(1),this._complete())},_runFrame:function(n,r){var a=this._startPos.add(this._offset.multiplyBy(n));r&&a._round(),Te(this._el,a),this.fire("step")},_complete:function(){Q(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(n){return 1-Math.pow(1-n,this._easeOutPower)}}),ie=ct.extend({options:{crs:Ot,center:void 0,zoom:void 0,minZoom:void 0,maxZoom:void 0,layers:[],maxBounds:void 0,renderer:void 0,zoomAnimation:!0,zoomAnimationThreshold:4,fadeAnimation:!0,markerZoomAnimation:!0,transform3DLimit:8388608,zoomSnap:1,zoomDelta:1,trackResize:!0},initialize:function(n,r){r=E(this,r),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this._initContainer(n),this._initLayout(),this._onResize=h(this._onResize,this),this._initEvents(),r.maxBounds&&this.setMaxBounds(r.maxBounds),r.zoom!==void 0&&(this._zoom=this._limitZoom(r.zoom)),r.center&&r.zoom!==void 0&&this.setView(lt(r.center),r.zoom,{reset:!0}),this.callInitHooks(),this._zoomAnimated=ze&&Tt.any3d&&!Tt.mobileOpera&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),Zt(this._proxy,fe,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},setView:function(n,r,a){if(r=r===void 0?this._zoom:this._limitZoom(r),n=this._limitCenter(lt(n),r,this.options.maxBounds),a=a||{},this._stop(),this._loaded&&!a.reset&&a!==!0){a.animate!==void 0&&(a.zoom=o({animate:a.animate},a.zoom),a.pan=o({animate:a.animate,duration:a.duration},a.pan));var c=this._zoom!==r?this._tryAnimatedZoom&&this._tryAnimatedZoom(n,r,a.zoom):this._tryAnimatedPan(n,a.pan);if(c)return clearTimeout(this._sizeTimer),this}return this._resetView(n,r,a.pan&&a.pan.noMoveStart),this},setZoom:function(n,r){return this._loaded?this.setView(this.getCenter(),n,{zoom:r}):(this._zoom=n,this)},zoomIn:function(n,r){return n=n||(Tt.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom+n,r)},zoomOut:function(n,r){return n=n||(Tt.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom-n,r)},setZoomAround:function(n,r,a){var c=this.getZoomScale(r),f=this.getSize().divideBy(2),M=n instanceof B?n:this.latLngToContainerPoint(n),I=M.subtract(f).multiplyBy(1-1/c),H=this.containerPointToLatLng(f.add(I));return this.setView(H,r,{zoom:a})},_getBoundsCenterZoom:function(n,r){r=r||{},n=n.getBounds?n.getBounds():q(n);var a=J(r.paddingTopLeft||r.padding||[0,0]),c=J(r.paddingBottomRight||r.padding||[0,0]),f=this.getBoundsZoom(n,!1,a.add(c));if(f=typeof r.maxZoom=="number"?Math.min(r.maxZoom,f):f,f===1/0)return{center:n.getCenter(),zoom:f};var M=c.subtract(a).divideBy(2),I=this.project(n.getSouthWest(),f),H=this.project(n.getNorthEast(),f),X=this.unproject(I.add(H).divideBy(2).add(M),f);return{center:X,zoom:f}},fitBounds:function(n,r){if(n=q(n),!n.isValid())throw new Error("Bounds are not valid.");var a=this._getBoundsCenterZoom(n,r);return this.setView(a.center,a.zoom,r)},fitWorld:function(n){return this.fitBounds([[-90,-180],[90,180]],n)},panTo:function(n,r){return this.setView(n,this._zoom,{pan:r})},panBy:function(n,r){if(n=J(n).round(),r=r||{},!n.x&&!n.y)return this.fire("moveend");if(r.animate!==!0&&!this.getSize().contains(n))return this._resetView(this.unproject(this.project(this.getCenter()).add(n)),this.getZoom()),this;if(this._panAnim||(this._panAnim=new pa,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),r.noMoveStart||this.fire("movestart"),r.animate!==!1){Ft(this._mapPane,"leaflet-pan-anim");var a=this._getMapPanePos().subtract(n).round();this._panAnim.run(this._mapPane,a,r.duration||.25,r.easeLinearity)}else this._rawPanBy(n),this.fire("move").fire("moveend");return this},flyTo:function(n,r,a){if(a=a||{},a.animate===!1||!Tt.any3d)return this.setView(n,r,a);this._stop();var c=this.project(this.getCenter()),f=this.project(n),M=this.getSize(),I=this._zoom;n=lt(n),r=r===void 0?I:r;var H=Math.max(M.x,M.y),X=H*this.getZoomScale(I,r),rt=f.distanceTo(c)||1,xt=1.42,Bt=xt*xt;function Kt(be){var Jr=be?-1:1,Qh=be?X:H,tu=X*X-H*H+Jr*Bt*Bt*rt*rt,eu=2*Qh*Bt*rt,ro=tu/eu,Ya=Math.sqrt(ro*ro+1)-ro,nu=Ya<1e-9?-18:Math.log(Ya);return nu}function ke(be){return(Math.exp(be)-Math.exp(-be))/2}function Le(be){return(Math.exp(be)+Math.exp(-be))/2}function nn(be){return ke(be)/Le(be)}var We=Kt(0);function Ci(be){return H*(Le(We)/Le(We+xt*be))}function $h(be){return H*(Le(We)*nn(We+xt*be)-ke(We))/Bt}function jh(be){return 1-Math.pow(1-be,1.5)}var Kh=Date.now(),Za=(Kt(1)-We)/xt,Jh=a.duration?1e3*a.duration:1e3*Za*.8;function qa(){var be=(Date.now()-Kh)/Jh,Jr=jh(be)*Za;be<=1?(this._flyToFrame=G(qa,this),this._move(this.unproject(c.add(f.subtract(c).multiplyBy($h(Jr)/rt)),I),this.getScaleZoom(H/Ci(Jr),I),{flyTo:!0})):this._move(n,r)._moveEnd(!0)}return this._moveStart(!0,a.noMoveStart),qa.call(this),this},flyToBounds:function(n,r){var a=this._getBoundsCenterZoom(n,r);return this.flyTo(a.center,a.zoom,r)},setMaxBounds:function(n){return n=q(n),this.listens("moveend",this._panInsideMaxBounds)&&this.off("moveend",this._panInsideMaxBounds),n.isValid()?(this.options.maxBounds=n,this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds)):(this.options.maxBounds=null,this)},setMinZoom:function(n){var r=this.options.minZoom;return this.options.minZoom=n,this._loaded&&r!==n&&(this.fire("zoomlevelschange"),this.getZoom()<this.options.minZoom)?this.setZoom(n):this},setMaxZoom:function(n){var r=this.options.maxZoom;return this.options.maxZoom=n,this._loaded&&r!==n&&(this.fire("zoomlevelschange"),this.getZoom()>this.options.maxZoom)?this.setZoom(n):this},panInsideBounds:function(n,r){this._enforcingBounds=!0;var a=this.getCenter(),c=this._limitCenter(a,this._zoom,q(n));return a.equals(c)||this.panTo(c,r),this._enforcingBounds=!1,this},panInside:function(n,r){r=r||{};var a=J(r.paddingTopLeft||r.padding||[0,0]),c=J(r.paddingBottomRight||r.padding||[0,0]),f=this.project(this.getCenter()),M=this.project(n),I=this.getPixelBounds(),H=Lt([I.min.add(a),I.max.subtract(c)]),X=H.getSize();if(!H.contains(M)){this._enforcingBounds=!0;var rt=M.subtract(H.getCenter()),xt=H.extend(M).getSize().subtract(X);f.x+=rt.x<0?-xt.x:xt.x,f.y+=rt.y<0?-xt.y:xt.y,this.panTo(this.unproject(f),r),this._enforcingBounds=!1}return this},invalidateSize:function(n){if(!this._loaded)return this;n=o({animate:!1,pan:!0},n===!0?{animate:!0}:n);var r=this.getSize();this._sizeChanged=!0,this._lastCenter=null;var a=this.getSize(),c=r.divideBy(2).round(),f=a.divideBy(2).round(),M=c.subtract(f);return!M.x&&!M.y?this:(n.animate&&n.pan?this.panBy(M):(n.pan&&this._rawPanBy(M),this.fire("move"),n.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(h(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:r,newSize:a}))},stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire("viewreset"),this._stop()},locate:function(n){if(n=this._locateOptions=o({timeout:1e4,watch:!1},n),!("geolocation"in navigator))return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var r=h(this._handleGeolocationResponse,this),a=h(this._handleGeolocationError,this);return n.watch?this._locationWatchId=navigator.geolocation.watchPosition(r,a,n):navigator.geolocation.getCurrentPosition(r,a,n),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(n){if(this._container._leaflet_id){var r=n.code,a=n.message||(r===1?"permission denied":r===2?"position unavailable":"timeout");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:r,message:"Geolocation error: "+a+"."})}},_handleGeolocationResponse:function(n){if(this._container._leaflet_id){var r=n.coords.latitude,a=n.coords.longitude,c=new nt(r,a),f=c.toBounds(n.coords.accuracy*2),M=this._locateOptions;if(M.setView){var I=this.getBoundsZoom(f);this.setView(c,M.maxZoom?Math.min(I,M.maxZoom):I)}var H={latlng:c,bounds:f,timestamp:n.timestamp};for(var X in n.coords)typeof n.coords[X]=="number"&&(H[X]=n.coords[X]);this.fire("locationfound",H)}},addHandler:function(n,r){if(!r)return this;var a=this[n]=new r(this);return this._handlers.push(a),this.options[n]&&a.enable(),this},remove:function(){if(this._initEvents(!0),this.options.maxBounds&&this.off("moveend",this._panInsideMaxBounds),this._containerId!==this._container._leaflet_id)throw new Error("Map container is being reused by another instance");try{delete this._container._leaflet_id,delete this._containerId}catch{this._container._leaflet_id=void 0,this._containerId=void 0}this._locationWatchId!==void 0&&this.stopLocate(),this._stop(),oe(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._resizeRequest&&(Q(this._resizeRequest),this._resizeRequest=null),this._clearHandlers(),this._loaded&&this.fire("unload");var n;for(n in this._layers)this._layers[n].remove();for(n in this._panes)oe(this._panes[n]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},createPane:function(n,r){var a="leaflet-pane"+(n?" leaflet-"+n.replace("Pane","")+"-pane":""),c=wt("div",a,r||this._mapPane);return n&&(this._panes[n]=c),c},getCenter:function(){return this._checkIfLoaded(),this._lastCenter&&!this._moved()?this._lastCenter.clone():this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var n=this.getPixelBounds(),r=this.unproject(n.getBottomLeft()),a=this.unproject(n.getTopRight());return new qt(r,a)},getMinZoom:function(){return this.options.minZoom===void 0?this._layersMinZoom||0:this.options.minZoom},getMaxZoom:function(){return this.options.maxZoom===void 0?this._layersMaxZoom===void 0?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(n,r,a){n=q(n),a=J(a||[0,0]);var c=this.getZoom()||0,f=this.getMinZoom(),M=this.getMaxZoom(),I=n.getNorthWest(),H=n.getSouthEast(),X=this.getSize().subtract(a),rt=Lt(this.project(H,c),this.project(I,c)).getSize(),xt=Tt.any3d?this.options.zoomSnap:1,Bt=X.x/rt.x,Kt=X.y/rt.y,ke=r?Math.max(Bt,Kt):Math.min(Bt,Kt);return c=this.getScaleZoom(ke,c),xt&&(c=Math.round(c/(xt/100))*(xt/100),c=r?Math.ceil(c/xt)*xt:Math.floor(c/xt)*xt),Math.max(f,Math.min(M,c))},getSize:function(){return(!this._size||this._sizeChanged)&&(this._size=new B(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(n,r){var a=this._getTopLeftPoint(n,r);return new ft(a,a.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},getPixelWorldBounds:function(n){return this.options.crs.getProjectedBounds(n===void 0?this.getZoom():n)},getPane:function(n){return typeof n=="string"?this._panes[n]:n},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(n,r){var a=this.options.crs;return r=r===void 0?this._zoom:r,a.scale(n)/a.scale(r)},getScaleZoom:function(n,r){var a=this.options.crs;r=r===void 0?this._zoom:r;var c=a.zoom(n*a.scale(r));return isNaN(c)?1/0:c},project:function(n,r){return r=r===void 0?this._zoom:r,this.options.crs.latLngToPoint(lt(n),r)},unproject:function(n,r){return r=r===void 0?this._zoom:r,this.options.crs.pointToLatLng(J(n),r)},layerPointToLatLng:function(n){var r=J(n).add(this.getPixelOrigin());return this.unproject(r)},latLngToLayerPoint:function(n){var r=this.project(lt(n))._round();return r._subtract(this.getPixelOrigin())},wrapLatLng:function(n){return this.options.crs.wrapLatLng(lt(n))},wrapLatLngBounds:function(n){return this.options.crs.wrapLatLngBounds(q(n))},distance:function(n,r){return this.options.crs.distance(lt(n),lt(r))},containerPointToLayerPoint:function(n){return J(n).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(n){return J(n).add(this._getMapPanePos())},containerPointToLatLng:function(n){var r=this.containerPointToLayerPoint(J(n));return this.layerPointToLatLng(r)},latLngToContainerPoint:function(n){return this.layerPointToContainerPoint(this.latLngToLayerPoint(lt(n)))},mouseEventToContainerPoint:function(n){return da(n,this._container)},mouseEventToLayerPoint:function(n){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(n))},mouseEventToLatLng:function(n){return this.layerPointToLatLng(this.mouseEventToLayerPoint(n))},_initContainer:function(n){var r=this._container=Wt(n);if(r){if(r._leaflet_id)throw new Error("Map container is already initialized.")}else throw new Error("Map container not found.");Zt(r,"scroll",this._onScroll,this),this._containerId=d(r)},_initLayout:function(){var n=this._container;this._fadeAnimated=this.options.fadeAnimation&&Tt.any3d,Ft(n,"leaflet-container"+(Tt.touch?" leaflet-touch":"")+(Tt.retina?" leaflet-retina":"")+(Tt.ielt9?" leaflet-oldie":"")+(Tt.safari?" leaflet-safari":"")+(this._fadeAnimated?" leaflet-fade-anim":""));var r=wn(n,"position");r!=="absolute"&&r!=="relative"&&r!=="fixed"&&r!=="sticky"&&(n.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var n=this._panes={};this._paneRenderers={},this._mapPane=this.createPane("mapPane",this._container),Te(this._mapPane,new B(0,0)),this.createPane("tilePane"),this.createPane("overlayPane"),this.createPane("shadowPane"),this.createPane("markerPane"),this.createPane("tooltipPane"),this.createPane("popupPane"),this.options.markerZoomAnimation||(Ft(n.markerPane,"leaflet-zoom-hide"),Ft(n.shadowPane,"leaflet-zoom-hide"))},_resetView:function(n,r,a){Te(this._mapPane,new B(0,0));var c=!this._loaded;this._loaded=!0,r=this._limitZoom(r),this.fire("viewprereset");var f=this._zoom!==r;this._moveStart(f,a)._move(n,r)._moveEnd(f),this.fire("viewreset"),c&&this.fire("load")},_moveStart:function(n,r){return n&&this.fire("zoomstart"),r||this.fire("movestart"),this},_move:function(n,r,a,c){r===void 0&&(r=this._zoom);var f=this._zoom!==r;return this._zoom=r,this._lastCenter=n,this._pixelOrigin=this._getNewPixelOrigin(n),c?a&&a.pinch&&this.fire("zoom",a):((f||a&&a.pinch)&&this.fire("zoom",a),this.fire("move",a)),this},_moveEnd:function(n){return n&&this.fire("zoomend"),this.fire("moveend")},_stop:function(){return Q(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(n){Te(this._mapPane,this._getMapPanePos().subtract(n))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},_initEvents:function(n){this._targets={},this._targets[d(this._container)]=this;var r=n?pe:Zt;r(this._container,"click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",this._handleDOMEvent,this),this.options.trackResize&&r(window,"resize",this._onResize,this),Tt.any3d&&this.options.transform3DLimit&&(n?this.off:this.on).call(this,"moveend",this._onMoveEnd)},_onResize:function(){Q(this._resizeRequest),this._resizeRequest=G(function(){this.invalidateSize({debounceMoveend:!0})},this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var n=this._getMapPanePos();Math.max(Math.abs(n.x),Math.abs(n.y))>=this.options.transform3DLimit&&this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(n,r){for(var a=[],c,f=r==="mouseout"||r==="mouseover",M=n.target||n.srcElement,I=!1;M;){if(c=this._targets[d(M)],c&&(r==="click"||r==="preclick")&&this._draggableMoved(c)){I=!0;break}if(c&&c.listens(r,!0)&&(f&&!qs(M,n)||(a.push(c),f))||M===this._container)break;M=M.parentNode}return!a.length&&!I&&!f&&this.listens(r,!0)&&(a=[this]),a},_isClickDisabled:function(n){for(;n&&n!==this._container;){if(n._leaflet_disable_click)return!0;n=n.parentNode}},_handleDOMEvent:function(n){var r=n.target||n.srcElement;if(!(!this._loaded||r._leaflet_disable_events||n.type==="click"&&this._isClickDisabled(r))){var a=n.type;a==="mousedown"&&Hs(r),this._fireDOMEvent(n,a)}},_mouseEvents:["click","dblclick","mouseover","mouseout","contextmenu"],_fireDOMEvent:function(n,r,a){if(n.type==="click"){var c=o({},n);c.type="preclick",this._fireDOMEvent(c,c.type,a)}var f=this._findEventTargets(n,r);if(a){for(var M=[],I=0;I<a.length;I++)a[I].listens(r,!0)&&M.push(a[I]);f=M.concat(f)}if(f.length){r==="contextmenu"&&De(n);var H=f[0],X={originalEvent:n};if(n.type!=="keypress"&&n.type!=="keydown"&&n.type!=="keyup"){var rt=H.getLatLng&&(!H._radius||H._radius<=10);X.containerPoint=rt?this.latLngToContainerPoint(H.getLatLng()):this.mouseEventToContainerPoint(n),X.layerPoint=this.containerPointToLayerPoint(X.containerPoint),X.latlng=rt?H.getLatLng():this.layerPointToLatLng(X.layerPoint)}for(I=0;I<f.length;I++)if(f[I].fire(r,X,!0),X.originalEvent._stopped||f[I].options.bubblingMouseEvents===!1&&N(this._mouseEvents,r)!==-1)return}},_draggableMoved:function(n){return n=n.dragging&&n.dragging.enabled()?n:this,n.dragging&&n.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var n=0,r=this._handlers.length;n<r;n++)this._handlers[n].disable()},whenReady:function(n,r){return this._loaded?n.call(r||this,{target:this}):this.on("load",n,r),this},_getMapPanePos:function(){return si(this._mapPane)||new B(0,0)},_moved:function(){var n=this._getMapPanePos();return n&&!n.equals([0,0])},_getTopLeftPoint:function(n,r){var a=n&&r!==void 0?this._getNewPixelOrigin(n,r):this.getPixelOrigin();return a.subtract(this._getMapPanePos())},_getNewPixelOrigin:function(n,r){var a=this.getSize()._divideBy(2);return this.project(n,r)._subtract(a)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(n,r,a){var c=this._getNewPixelOrigin(a,r);return this.project(n,r)._subtract(c)},_latLngBoundsToNewLayerBounds:function(n,r,a){var c=this._getNewPixelOrigin(a,r);return Lt([this.project(n.getSouthWest(),r)._subtract(c),this.project(n.getNorthWest(),r)._subtract(c),this.project(n.getSouthEast(),r)._subtract(c),this.project(n.getNorthEast(),r)._subtract(c)])},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(n){return this.latLngToLayerPoint(n).subtract(this._getCenterLayerPoint())},_limitCenter:function(n,r,a){if(!a)return n;var c=this.project(n,r),f=this.getSize().divideBy(2),M=new ft(c.subtract(f),c.add(f)),I=this._getBoundsOffset(M,a,r);return Math.abs(I.x)<=1&&Math.abs(I.y)<=1?n:this.unproject(c.add(I),r)},_limitOffset:function(n,r){if(!r)return n;var a=this.getPixelBounds(),c=new ft(a.min.add(n),a.max.add(n));return n.add(this._getBoundsOffset(c,r))},_getBoundsOffset:function(n,r,a){var c=Lt(this.project(r.getNorthEast(),a),this.project(r.getSouthWest(),a)),f=c.min.subtract(n.min),M=c.max.subtract(n.max),I=this._rebound(f.x,-M.x),H=this._rebound(f.y,-M.y);return new B(I,H)},_rebound:function(n,r){return n+r>0?Math.round(n-r)/2:Math.max(0,Math.ceil(n))-Math.max(0,Math.floor(r))},_limitZoom:function(n){var r=this.getMinZoom(),a=this.getMaxZoom(),c=Tt.any3d?this.options.zoomSnap:1;return c&&(n=Math.round(n/c)*c),Math.max(r,Math.min(a,n))},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){_e(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(n,r){var a=this._getCenterOffset(n)._trunc();return(r&&r.animate)!==!0&&!this.getSize().contains(a)?!1:(this.panBy(a,r),!0)},_createAnimProxy:function(){var n=this._proxy=wt("div","leaflet-proxy leaflet-zoom-animated");this._panes.mapPane.appendChild(n),this.on("zoomanim",function(r){var a=Me,c=this._proxy.style[a];ri(this._proxy,this.project(r.center,r.zoom),this.getZoomScale(r.zoom,1)),c===this._proxy.style[a]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on("load moveend",this._animMoveEnd,this),this._on("unload",this._destroyAnimProxy,this)},_destroyAnimProxy:function(){oe(this._proxy),this.off("load moveend",this._animMoveEnd,this),delete this._proxy},_animMoveEnd:function(){var n=this.getCenter(),r=this.getZoom();ri(this._proxy,this.project(n,r),this.getZoomScale(r,1))},_catchTransitionEnd:function(n){this._animatingZoom&&n.propertyName.indexOf("transform")>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(n,r,a){if(this._animatingZoom)return!0;if(a=a||{},!this._zoomAnimated||a.animate===!1||this._nothingToAnimate()||Math.abs(r-this._zoom)>this.options.zoomAnimationThreshold)return!1;var c=this.getZoomScale(r),f=this._getCenterOffset(n)._divideBy(1-1/c);return a.animate!==!0&&!this.getSize().contains(f)?!1:(G(function(){this._moveStart(!0,a.noMoveStart||!1)._animateZoom(n,r,!0)},this),!0)},_animateZoom:function(n,r,a,c){this._mapPane&&(a&&(this._animatingZoom=!0,this._animateToCenter=n,this._animateToZoom=r,Ft(this._mapPane,"leaflet-zoom-anim")),this.fire("zoomanim",{center:n,zoom:r,noUpdate:c}),this._tempFireZoomEvent||(this._tempFireZoomEvent=this._zoom!==this._animateToZoom),this._move(this._animateToCenter,this._animateToZoom,void 0,!0),setTimeout(h(this._onZoomTransitionEnd,this),250))},_onZoomTransitionEnd:function(){this._animatingZoom&&(this._mapPane&&_e(this._mapPane,"leaflet-zoom-anim"),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom,void 0,!0),this._tempFireZoomEvent&&this.fire("zoom"),delete this._tempFireZoomEvent,this.fire("move"),this._moveEnd(!0))}});function dh(n,r){return new ie(n,r)}var ln=tt.extend({options:{position:"topright"},initialize:function(n){E(this,n)},getPosition:function(){return this.options.position},setPosition:function(n){var r=this._map;return r&&r.removeControl(this),this.options.position=n,r&&r.addControl(this),this},getContainer:function(){return this._container},addTo:function(n){this.remove(),this._map=n;var r=this._container=this.onAdd(n),a=this.getPosition(),c=n._controlCorners[a];return Ft(r,"leaflet-control"),a.indexOf("bottom")!==-1?c.insertBefore(r,c.firstChild):c.appendChild(r),this._map.on("unload",this.remove,this),this},remove:function(){return this._map?(oe(this._container),this.onRemove&&this.onRemove(this._map),this._map.off("unload",this.remove,this),this._map=null,this):this},_refocusOnMap:function(n){this._map&&n&&n.screenX>0&&n.screenY>0&&this._map.getContainer().focus()}}),fr=function(n){return new ln(n)};ie.include({addControl:function(n){return n.addTo(this),this},removeControl:function(n){return n.remove(),this},_initControlPos:function(){var n=this._controlCorners={},r="leaflet-",a=this._controlContainer=wt("div",r+"control-container",this._container);function c(f,M){var I=r+f+" "+r+M;n[f+M]=wt("div",I,a)}c("top","left"),c("top","right"),c("bottom","left"),c("bottom","right")},_clearControlPos:function(){for(var n in this._controlCorners)oe(this._controlCorners[n]);oe(this._controlContainer),delete this._controlCorners,delete this._controlContainer}});var ma=ln.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0,hideSingleBase:!1,sortLayers:!1,sortFunction:function(n,r,a,c){return a<c?-1:c<a?1:0}},initialize:function(n,r,a){E(this,a),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1,this._preventClick=!1;for(var c in n)this._addLayer(n[c],c);for(c in r)this._addLayer(r[c],c,!0)},onAdd:function(n){this._initLayout(),this._update(),this._map=n,n.on("zoomend",this._checkDisabledLayers,this);for(var r=0;r<this._layers.length;r++)this._layers[r].layer.on("add remove",this._onLayerChange,this);return this._container},addTo:function(n){return ln.prototype.addTo.call(this,n),this._expandIfNotCollapsed()},onRemove:function(){this._map.off("zoomend",this._checkDisabledLayers,this);for(var n=0;n<this._layers.length;n++)this._layers[n].layer.off("add remove",this._onLayerChange,this)},addBaseLayer:function(n,r){return this._addLayer(n,r),this._map?this._update():this},addOverlay:function(n,r){return this._addLayer(n,r,!0),this._map?this._update():this},removeLayer:function(n){n.off("add remove",this._onLayerChange,this);var r=this._getLayer(d(n));return r&&this._layers.splice(this._layers.indexOf(r),1),this._map?this._update():this},expand:function(){Ft(this._container,"leaflet-control-layers-expanded"),this._section.style.height=null;var n=this._map.getSize().y-(this._container.offsetTop+50);return n<this._section.clientHeight?(Ft(this._section,"leaflet-control-layers-scrollbar"),this._section.style.height=n+"px"):_e(this._section,"leaflet-control-layers-scrollbar"),this._checkDisabledLayers(),this},collapse:function(){return _e(this._container,"leaflet-control-layers-expanded"),this},_initLayout:function(){var n="leaflet-control-layers",r=this._container=wt("div",n),a=this.options.collapsed;r.setAttribute("aria-haspopup",!0),dr(r),Zs(r);var c=this._section=wt("section",n+"-list");a&&(this._map.on("click",this.collapse,this),Zt(r,{mouseenter:this._expandSafely,mouseleave:this.collapse},this));var f=this._layersLink=wt("a",n+"-toggle",r);f.href="#",f.title="Layers",f.setAttribute("role","button"),Zt(f,{keydown:function(M){M.keyCode===13&&this._expandSafely()},click:function(M){De(M),this._expandSafely()}},this),a||this.expand(),this._baseLayersList=wt("div",n+"-base",c),this._separator=wt("div",n+"-separator",c),this._overlaysList=wt("div",n+"-overlays",c),r.appendChild(c)},_getLayer:function(n){for(var r=0;r<this._layers.length;r++)if(this._layers[r]&&d(this._layers[r].layer)===n)return this._layers[r]},_addLayer:function(n,r,a){this._map&&n.on("add remove",this._onLayerChange,this),this._layers.push({layer:n,name:r,overlay:a}),this.options.sortLayers&&this._layers.sort(h(function(c,f){return this.options.sortFunction(c.layer,f.layer,c.name,f.name)},this)),this.options.autoZIndex&&n.setZIndex&&(this._lastZIndex++,n.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},_update:function(){if(!this._container)return this;ii(this._baseLayersList),ii(this._overlaysList),this._layerControlInputs=[];var n,r,a,c,f=0;for(a=0;a<this._layers.length;a++)c=this._layers[a],this._addItem(c),r=r||c.overlay,n=n||!c.overlay,f+=c.overlay?0:1;return this.options.hideSingleBase&&(n=n&&f>1,this._baseLayersList.style.display=n?"":"none"),this._separator.style.display=r&&n?"":"none",this},_onLayerChange:function(n){this._handlingClick||this._update();var r=this._getLayer(d(n.target)),a=r.overlay?n.type==="add"?"overlayadd":"overlayremove":n.type==="add"?"baselayerchange":null;a&&this._map.fire(a,r)},_createRadioElement:function(n,r){var a='<input type="radio" class="leaflet-control-layers-selector" name="'+n+'"'+(r?' checked="checked"':"")+"/>",c=document.createElement("div");return c.innerHTML=a,c.firstChild},_addItem:function(n){var r=document.createElement("label"),a=this._map.hasLayer(n.layer),c;n.overlay?(c=document.createElement("input"),c.type="checkbox",c.className="leaflet-control-layers-selector",c.defaultChecked=a):c=this._createRadioElement("leaflet-base-layers_"+d(this),a),this._layerControlInputs.push(c),c.layerId=d(n.layer),Zt(c,"click",this._onInputClick,this);var f=document.createElement("span");f.innerHTML=" "+n.name;var M=document.createElement("span");r.appendChild(M),M.appendChild(c),M.appendChild(f);var I=n.overlay?this._overlaysList:this._baseLayersList;return I.appendChild(r),this._checkDisabledLayers(),r},_onInputClick:function(){if(!this._preventClick){var n=this._layerControlInputs,r,a,c=[],f=[];this._handlingClick=!0;for(var M=n.length-1;M>=0;M--)r=n[M],a=this._getLayer(r.layerId).layer,r.checked?c.push(a):r.checked||f.push(a);for(M=0;M<f.length;M++)this._map.hasLayer(f[M])&&this._map.removeLayer(f[M]);for(M=0;M<c.length;M++)this._map.hasLayer(c[M])||this._map.addLayer(c[M]);this._handlingClick=!1,this._refocusOnMap()}},_checkDisabledLayers:function(){for(var n=this._layerControlInputs,r,a,c=this._map.getZoom(),f=n.length-1;f>=0;f--)r=n[f],a=this._getLayer(r.layerId).layer,r.disabled=a.options.minZoom!==void 0&&c<a.options.minZoom||a.options.maxZoom!==void 0&&c>a.options.maxZoom},_expandIfNotCollapsed:function(){return this._map&&!this.options.collapsed&&this.expand(),this},_expandSafely:function(){var n=this._section;this._preventClick=!0,Zt(n,"click",De),this.expand();var r=this;setTimeout(function(){pe(n,"click",De),r._preventClick=!1})}}),fh=function(n,r,a){return new ma(n,r,a)},Ys=ln.extend({options:{position:"topleft",zoomInText:'<span aria-hidden="true">+</span>',zoomInTitle:"Zoom in",zoomOutText:'<span aria-hidden="true">&#x2212;</span>',zoomOutTitle:"Zoom out"},onAdd:function(n){var r="leaflet-control-zoom",a=wt("div",r+" leaflet-bar"),c=this.options;return this._zoomInButton=this._createButton(c.zoomInText,c.zoomInTitle,r+"-in",a,this._zoomIn),this._zoomOutButton=this._createButton(c.zoomOutText,c.zoomOutTitle,r+"-out",a,this._zoomOut),this._updateDisabled(),n.on("zoomend zoomlevelschange",this._updateDisabled,this),a},onRemove:function(n){n.off("zoomend zoomlevelschange",this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(n){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(n.shiftKey?3:1))},_zoomOut:function(n){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(n.shiftKey?3:1))},_createButton:function(n,r,a,c,f){var M=wt("a",a,c);return M.innerHTML=n,M.href="#",M.title=r,M.setAttribute("role","button"),M.setAttribute("aria-label",r),dr(M),Zt(M,"click",ai),Zt(M,"click",f,this),Zt(M,"click",this._refocusOnMap,this),M},_updateDisabled:function(){var n=this._map,r="leaflet-disabled";_e(this._zoomInButton,r),_e(this._zoomOutButton,r),this._zoomInButton.setAttribute("aria-disabled","false"),this._zoomOutButton.setAttribute("aria-disabled","false"),(this._disabled||n._zoom===n.getMinZoom())&&(Ft(this._zoomOutButton,r),this._zoomOutButton.setAttribute("aria-disabled","true")),(this._disabled||n._zoom===n.getMaxZoom())&&(Ft(this._zoomInButton,r),this._zoomInButton.setAttribute("aria-disabled","true"))}});ie.mergeOptions({zoomControl:!0}),ie.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new Ys,this.addControl(this.zoomControl))});var ph=function(n){return new Ys(n)},_a=ln.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0},onAdd:function(n){var r="leaflet-control-scale",a=wt("div",r),c=this.options;return this._addScales(c,r+"-line",a),n.on(c.updateWhenIdle?"moveend":"move",this._update,this),n.whenReady(this._update,this),a},onRemove:function(n){n.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(n,r,a){n.metric&&(this._mScale=wt("div",r,a)),n.imperial&&(this._iScale=wt("div",r,a))},_update:function(){var n=this._map,r=n.getSize().y/2,a=n.distance(n.containerPointToLatLng([0,r]),n.containerPointToLatLng([this.options.maxWidth,r]));this._updateScales(a)},_updateScales:function(n){this.options.metric&&n&&this._updateMetric(n),this.options.imperial&&n&&this._updateImperial(n)},_updateMetric:function(n){var r=this._getRoundNum(n),a=r<1e3?r+" m":r/1e3+" km";this._updateScale(this._mScale,a,r/n)},_updateImperial:function(n){var r=n*3.2808399,a,c,f;r>5280?(a=r/5280,c=this._getRoundNum(a),this._updateScale(this._iScale,c+" mi",c/a)):(f=this._getRoundNum(r),this._updateScale(this._iScale,f+" ft",f/r))},_updateScale:function(n,r,a){n.style.width=Math.round(this.options.maxWidth*a)+"px",n.innerHTML=r},_getRoundNum:function(n){var r=Math.pow(10,(Math.floor(n)+"").length-1),a=n/r;return a=a>=10?10:a>=5?5:a>=3?3:a>=2?2:1,r*a}}),mh=function(n){return new _a(n)},_h='<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>',$s=ln.extend({options:{position:"bottomright",prefix:'<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">'+(Tt.inlineSvg?_h+" ":"")+"Leaflet</a>"},initialize:function(n){E(this,n),this._attributions={}},onAdd:function(n){n.attributionControl=this,this._container=wt("div","leaflet-control-attribution"),dr(this._container);for(var r in n._layers)n._layers[r].getAttribution&&this.addAttribution(n._layers[r].getAttribution());return this._update(),n.on("layeradd",this._addAttribution,this),this._container},onRemove:function(n){n.off("layeradd",this._addAttribution,this)},_addAttribution:function(n){n.layer.getAttribution&&(this.addAttribution(n.layer.getAttribution()),n.layer.once("remove",function(){this.removeAttribution(n.layer.getAttribution())},this))},setPrefix:function(n){return this.options.prefix=n,this._update(),this},addAttribution:function(n){return n?(this._attributions[n]||(this._attributions[n]=0),this._attributions[n]++,this._update(),this):this},removeAttribution:function(n){return n?(this._attributions[n]&&(this._attributions[n]--,this._update()),this):this},_update:function(){if(this._map){var n=[];for(var r in this._attributions)this._attributions[r]&&n.push(r);var a=[];this.options.prefix&&a.push(this.options.prefix),n.length&&a.push(n.join(", ")),this._container.innerHTML=a.join(' <span aria-hidden="true">|</span> ')}}});ie.mergeOptions({attributionControl:!0}),ie.addInitHook(function(){this.options.attributionControl&&new $s().addTo(this)});var gh=function(n){return new $s(n)};ln.Layers=ma,ln.Zoom=Ys,ln.Scale=_a,ln.Attribution=$s,fr.layers=fh,fr.zoom=ph,fr.scale=mh,fr.attribution=gh;var gn=tt.extend({initialize:function(n){this._map=n},enable:function(){return this._enabled?this:(this._enabled=!0,this.addHooks(),this)},disable:function(){return this._enabled?(this._enabled=!1,this.removeHooks(),this):this},enabled:function(){return!!this._enabled}});gn.addTo=function(n,r){return n.addHandler(r,this),this};var vh={Events:at},ga=Tt.touch?"touchstart mousedown":"mousedown",kn=ct.extend({options:{clickTolerance:3},initialize:function(n,r,a,c){E(this,c),this._element=n,this._dragStartTarget=r||n,this._preventOutline=a},enable:function(){this._enabled||(Zt(this._dragStartTarget,ga,this._onDown,this),this._enabled=!0)},disable:function(){this._enabled&&(kn._dragging===this&&this.finishDrag(!0),pe(this._dragStartTarget,ga,this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(n){if(this._enabled&&(this._moved=!1,!Ee(this._element,"leaflet-zoom-anim"))){if(n.touches&&n.touches.length!==1){kn._dragging===this&&this.finishDrag();return}if(!(kn._dragging||n.shiftKey||n.which!==1&&n.button!==1&&!n.touches)&&(kn._dragging=this,this._preventOutline&&Hs(this._element),Bs(),cr(),!this._moving)){this.fire("down");var r=n.touches?n.touches[0]:n,a=ca(this._element);this._startPoint=new B(r.clientX,r.clientY),this._startPos=si(this._element),this._parentScale=Gs(a);var c=n.type==="mousedown";Zt(document,c?"mousemove":"touchmove",this._onMove,this),Zt(document,c?"mouseup":"touchend touchcancel",this._onUp,this)}}},_onMove:function(n){if(this._enabled){if(n.touches&&n.touches.length>1){this._moved=!0;return}var r=n.touches&&n.touches.length===1?n.touches[0]:n,a=new B(r.clientX,r.clientY)._subtract(this._startPoint);!a.x&&!a.y||Math.abs(a.x)+Math.abs(a.y)<this.options.clickTolerance||(a.x/=this._parentScale.x,a.y/=this._parentScale.y,De(n),this._moved||(this.fire("dragstart"),this._moved=!0,Ft(document.body,"leaflet-dragging"),this._lastTarget=n.target||n.srcElement,window.SVGElementInstance&&this._lastTarget instanceof window.SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),Ft(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(a),this._moving=!0,this._lastEvent=n,this._updatePosition())}},_updatePosition:function(){var n={originalEvent:this._lastEvent};this.fire("predrag",n),Te(this._element,this._newPos),this.fire("drag",n)},_onUp:function(){this._enabled&&this.finishDrag()},finishDrag:function(n){_e(document.body,"leaflet-dragging"),this._lastTarget&&(_e(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null),pe(document,"mousemove touchmove",this._onMove,this),pe(document,"mouseup touchend touchcancel",this._onUp,this),zs(),hr();var r=this._moved&&this._moving;this._moving=!1,kn._dragging=!1,r&&this.fire("dragend",{noInertia:n,distance:this._newPos.distanceTo(this._startPos)})}});function va(n,r,a){var c,f=[1,4,2,8],M,I,H,X,rt,xt,Bt,Kt;for(M=0,xt=n.length;M<xt;M++)n[M]._code=li(n[M],r);for(H=0;H<4;H++){for(Bt=f[H],c=[],M=0,xt=n.length,I=xt-1;M<xt;I=M++)X=n[M],rt=n[I],X._code&Bt?rt._code&Bt||(Kt=Hr(rt,X,Bt,r,a),Kt._code=li(Kt,r),c.push(Kt)):(rt._code&Bt&&(Kt=Hr(rt,X,Bt,r,a),Kt._code=li(Kt,r),c.push(Kt)),c.push(X));n=c}return n}function xa(n,r){var a,c,f,M,I,H,X,rt,xt;if(!n||n.length===0)throw new Error("latlngs not passed");en(n)||(console.warn("latlngs are not flat! Only the first ring will be used"),n=n[0]);var Bt=lt([0,0]),Kt=q(n),ke=Kt.getNorthWest().distanceTo(Kt.getSouthWest())*Kt.getNorthEast().distanceTo(Kt.getNorthWest());ke<1700&&(Bt=js(n));var Le=n.length,nn=[];for(a=0;a<Le;a++){var We=lt(n[a]);nn.push(r.project(lt([We.lat-Bt.lat,We.lng-Bt.lng])))}for(H=X=rt=0,a=0,c=Le-1;a<Le;c=a++)f=nn[a],M=nn[c],I=f.y*M.x-M.y*f.x,X+=(f.x+M.x)*I,rt+=(f.y+M.y)*I,H+=I*3;H===0?xt=nn[0]:xt=[X/H,rt/H];var Ci=r.unproject(J(xt));return lt([Ci.lat+Bt.lat,Ci.lng+Bt.lng])}function js(n){for(var r=0,a=0,c=0,f=0;f<n.length;f++){var M=lt(n[f]);r+=M.lat,a+=M.lng,c++}return lt([r/c,a/c])}var xh={__proto__:null,clipPolygon:va,polygonCenter:xa,centroid:js};function ya(n,r){if(!r||!n.length)return n.slice();var a=r*r;return n=Sh(n,a),n=Mh(n,a),n}function Ma(n,r,a){return Math.sqrt(pr(n,r,a,!0))}function yh(n,r,a){return pr(n,r,a)}function Mh(n,r){var a=n.length,c=typeof Uint8Array<"u"?Uint8Array:Array,f=new c(a);f[0]=f[a-1]=1,Ks(n,f,r,0,a-1);var M,I=[];for(M=0;M<a;M++)f[M]&&I.push(n[M]);return I}function Ks(n,r,a,c,f){var M=0,I,H,X;for(H=c+1;H<=f-1;H++)X=pr(n[H],n[c],n[f],!0),X>M&&(I=H,M=X);M>a&&(r[I]=1,Ks(n,r,a,c,I),Ks(n,r,a,I,f))}function Sh(n,r){for(var a=[n[0]],c=1,f=0,M=n.length;c<M;c++)Eh(n[c],n[f])>r&&(a.push(n[c]),f=c);return f<M-1&&a.push(n[M-1]),a}var Sa;function Ea(n,r,a,c,f){var M=c?Sa:li(n,a),I=li(r,a),H,X,rt;for(Sa=I;;){if(!(M|I))return[n,r];if(M&I)return!1;H=M||I,X=Hr(n,r,H,a,f),rt=li(X,a),H===M?(n=X,M=rt):(r=X,I=rt)}}function Hr(n,r,a,c,f){var M=r.x-n.x,I=r.y-n.y,H=c.min,X=c.max,rt,xt;return a&8?(rt=n.x+M*(X.y-n.y)/I,xt=X.y):a&4?(rt=n.x+M*(H.y-n.y)/I,xt=H.y):a&2?(rt=X.x,xt=n.y+I*(X.x-n.x)/M):a&1&&(rt=H.x,xt=n.y+I*(H.x-n.x)/M),new B(rt,xt,f)}function li(n,r){var a=0;return n.x<r.min.x?a|=1:n.x>r.max.x&&(a|=2),n.y<r.min.y?a|=4:n.y>r.max.y&&(a|=8),a}function Eh(n,r){var a=r.x-n.x,c=r.y-n.y;return a*a+c*c}function pr(n,r,a,c){var f=r.x,M=r.y,I=a.x-f,H=a.y-M,X=I*I+H*H,rt;return X>0&&(rt=((n.x-f)*I+(n.y-M)*H)/X,rt>1?(f=a.x,M=a.y):rt>0&&(f+=I*rt,M+=H*rt)),I=n.x-f,H=n.y-M,c?I*I+H*H:new B(f,M)}function en(n){return!A(n[0])||typeof n[0][0]!="object"&&typeof n[0][0]<"u"}function Ta(n){return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),en(n)}function ba(n,r){var a,c,f,M,I,H,X,rt;if(!n||n.length===0)throw new Error("latlngs not passed");en(n)||(console.warn("latlngs are not flat! Only the first ring will be used"),n=n[0]);var xt=lt([0,0]),Bt=q(n),Kt=Bt.getNorthWest().distanceTo(Bt.getSouthWest())*Bt.getNorthEast().distanceTo(Bt.getNorthWest());Kt<1700&&(xt=js(n));var ke=n.length,Le=[];for(a=0;a<ke;a++){var nn=lt(n[a]);Le.push(r.project(lt([nn.lat-xt.lat,nn.lng-xt.lng])))}for(a=0,c=0;a<ke-1;a++)c+=Le[a].distanceTo(Le[a+1])/2;if(c===0)rt=Le[0];else for(a=0,M=0;a<ke-1;a++)if(I=Le[a],H=Le[a+1],f=I.distanceTo(H),M+=f,M>c){X=(M-c)/f,rt=[H.x-X*(H.x-I.x),H.y-X*(H.y-I.y)];break}var We=r.unproject(J(rt));return lt([We.lat+xt.lat,We.lng+xt.lng])}var Th={__proto__:null,simplify:ya,pointToSegmentDistance:Ma,closestPointOnSegment:yh,clipSegment:Ea,_getEdgeIntersection:Hr,_getBitCode:li,_sqClosestPointOnSegment:pr,isFlat:en,_flat:Ta,polylineCenter:ba},Js={project:function(n){return new B(n.lng,n.lat)},unproject:function(n){return new nt(n.y,n.x)},bounds:new ft([-180,-90],[180,90])},Qs={R:6378137,R_MINOR:6356752314245179e-9,bounds:new ft([-2003750834279e-5,-1549657073972e-5],[2003750834279e-5,1876465623138e-5]),project:function(n){var r=Math.PI/180,a=this.R,c=n.lat*r,f=this.R_MINOR/a,M=Math.sqrt(1-f*f),I=M*Math.sin(c),H=Math.tan(Math.PI/4-c/2)/Math.pow((1-I)/(1+I),M/2);return c=-a*Math.log(Math.max(H,1e-10)),new B(n.lng*r*a,c)},unproject:function(n){for(var r=180/Math.PI,a=this.R,c=this.R_MINOR/a,f=Math.sqrt(1-c*c),M=Math.exp(-n.y/a),I=Math.PI/2-2*Math.atan(M),H=0,X=.1,rt;H<15&&Math.abs(X)>1e-7;H++)rt=f*Math.sin(I),rt=Math.pow((1-rt)/(1+rt),f/2),X=Math.PI/2-2*Math.atan(M*rt)-I,I+=X;return new nt(I*r,n.x*r/a)}},bh={__proto__:null,LonLat:Js,Mercator:Qs,SphericalMercator:Jt},wh=o({},Nt,{code:"EPSG:3395",projection:Qs,transformation:function(){var n=.5/(Math.PI*Qs.R);return Xt(n,.5,-n,.5)}()}),wa=o({},Nt,{code:"EPSG:4326",projection:Js,transformation:Xt(1/180,1,-1/180,.5)}),Ah=o({},pt,{projection:Js,transformation:Xt(1,0,-1,0),scale:function(n){return Math.pow(2,n)},zoom:function(n){return Math.log(n)/Math.LN2},distance:function(n,r){var a=r.lng-n.lng,c=r.lat-n.lat;return Math.sqrt(a*a+c*c)},infinite:!0});pt.Earth=Nt,pt.EPSG3395=wh,pt.EPSG3857=Ot,pt.EPSG900913=Se,pt.EPSG4326=wa,pt.Simple=Ah;var cn=ct.extend({options:{pane:"overlayPane",attribution:null,bubblingMouseEvents:!0},addTo:function(n){return n.addLayer(this),this},remove:function(){return this.removeFrom(this._map||this._mapToAdd)},removeFrom:function(n){return n&&n.removeLayer(this),this},getPane:function(n){return this._map.getPane(n?this.options[n]||n:this.options.pane)},addInteractiveTarget:function(n){return this._map._targets[d(n)]=this,this},removeInteractiveTarget:function(n){return delete this._map._targets[d(n)],this},getAttribution:function(){return this.options.attribution},_layerAdd:function(n){var r=n.target;if(r.hasLayer(this)){if(this._map=r,this._zoomAnimated=r._zoomAnimated,this.getEvents){var a=this.getEvents();r.on(a,this),this.once("remove",function(){r.off(a,this)},this)}this.onAdd(r),this.fire("add"),r.fire("layeradd",{layer:this})}}});ie.include({addLayer:function(n){if(!n._layerAdd)throw new Error("The provided object is not a Layer.");var r=d(n);return this._layers[r]?this:(this._layers[r]=n,n._mapToAdd=this,n.beforeAdd&&n.beforeAdd(this),this.whenReady(n._layerAdd,n),this)},removeLayer:function(n){var r=d(n);return this._layers[r]?(this._loaded&&n.onRemove(this),delete this._layers[r],this._loaded&&(this.fire("layerremove",{layer:n}),n.fire("remove")),n._map=n._mapToAdd=null,this):this},hasLayer:function(n){return d(n)in this._layers},eachLayer:function(n,r){for(var a in this._layers)n.call(r,this._layers[a]);return this},_addLayers:function(n){n=n?A(n)?n:[n]:[];for(var r=0,a=n.length;r<a;r++)this.addLayer(n[r])},_addZoomLimit:function(n){(!isNaN(n.options.maxZoom)||!isNaN(n.options.minZoom))&&(this._zoomBoundLayers[d(n)]=n,this._updateZoomLevels())},_removeZoomLimit:function(n){var r=d(n);this._zoomBoundLayers[r]&&(delete this._zoomBoundLayers[r],this._updateZoomLevels())},_updateZoomLevels:function(){var n=1/0,r=-1/0,a=this._getZoomSpan();for(var c in this._zoomBoundLayers){var f=this._zoomBoundLayers[c].options;n=f.minZoom===void 0?n:Math.min(n,f.minZoom),r=f.maxZoom===void 0?r:Math.max(r,f.maxZoom)}this._layersMaxZoom=r===-1/0?void 0:r,this._layersMinZoom=n===1/0?void 0:n,a!==this._getZoomSpan()&&this.fire("zoomlevelschange"),this.options.maxZoom===void 0&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),this.options.minZoom===void 0&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}});var Ti=cn.extend({initialize:function(n,r){E(this,r),this._layers={};var a,c;if(n)for(a=0,c=n.length;a<c;a++)this.addLayer(n[a])},addLayer:function(n){var r=this.getLayerId(n);return this._layers[r]=n,this._map&&this._map.addLayer(n),this},removeLayer:function(n){var r=n in this._layers?n:this.getLayerId(n);return this._map&&this._layers[r]&&this._map.removeLayer(this._layers[r]),delete this._layers[r],this},hasLayer:function(n){var r=typeof n=="number"?n:this.getLayerId(n);return r in this._layers},clearLayers:function(){return this.eachLayer(this.removeLayer,this)},invoke:function(n){var r=Array.prototype.slice.call(arguments,1),a,c;for(a in this._layers)c=this._layers[a],c[n]&&c[n].apply(c,r);return this},onAdd:function(n){this.eachLayer(n.addLayer,n)},onRemove:function(n){this.eachLayer(n.removeLayer,n)},eachLayer:function(n,r){for(var a in this._layers)n.call(r,this._layers[a]);return this},getLayer:function(n){return this._layers[n]},getLayers:function(){var n=[];return this.eachLayer(n.push,n),n},setZIndex:function(n){return this.invoke("setZIndex",n)},getLayerId:function(n){return d(n)}}),Ph=function(n,r){return new Ti(n,r)},An=Ti.extend({addLayer:function(n){return this.hasLayer(n)?this:(n.addEventParent(this),Ti.prototype.addLayer.call(this,n),this.fire("layeradd",{layer:n}))},removeLayer:function(n){return this.hasLayer(n)?(n in this._layers&&(n=this._layers[n]),n.removeEventParent(this),Ti.prototype.removeLayer.call(this,n),this.fire("layerremove",{layer:n})):this},setStyle:function(n){return this.invoke("setStyle",n)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var n=new qt;for(var r in this._layers){var a=this._layers[r];n.extend(a.getBounds?a.getBounds():a.getLatLng())}return n}}),Ch=function(n,r){return new An(n,r)},bi=tt.extend({options:{popupAnchor:[0,0],tooltipAnchor:[0,0],crossOrigin:!1},initialize:function(n){E(this,n)},createIcon:function(n){return this._createIcon("icon",n)},createShadow:function(n){return this._createIcon("shadow",n)},_createIcon:function(n,r){var a=this._getIconUrl(n);if(!a){if(n==="icon")throw new Error("iconUrl not set in Icon options (see the docs).");return null}var c=this._createImg(a,r&&r.tagName==="IMG"?r:null);return this._setIconStyles(c,n),(this.options.crossOrigin||this.options.crossOrigin==="")&&(c.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),c},_setIconStyles:function(n,r){var a=this.options,c=a[r+"Size"];typeof c=="number"&&(c=[c,c]);var f=J(c),M=J(r==="shadow"&&a.shadowAnchor||a.iconAnchor||f&&f.divideBy(2,!0));n.className="leaflet-marker-"+r+" "+(a.className||""),M&&(n.style.marginLeft=-M.x+"px",n.style.marginTop=-M.y+"px"),f&&(n.style.width=f.x+"px",n.style.height=f.y+"px")},_createImg:function(n,r){return r=r||document.createElement("img"),r.src=n,r},_getIconUrl:function(n){return Tt.retina&&this.options[n+"RetinaUrl"]||this.options[n+"Url"]}});function Lh(n){return new bi(n)}var mr=bi.extend({options:{iconUrl:"marker-icon.png",iconRetinaUrl:"marker-icon-2x.png",shadowUrl:"marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(n){return typeof mr.imagePath!="string"&&(mr.imagePath=this._detectIconPath()),(this.options.imagePath||mr.imagePath)+bi.prototype._getIconUrl.call(this,n)},_stripUrl:function(n){var r=function(a,c,f){var M=c.exec(a);return M&&M[f]};return n=r(n,/^url\((['"])?(.+)\1\)$/,2),n&&r(n,/^(.*)marker-icon\.png$/,1)},_detectIconPath:function(){var n=wt("div","leaflet-default-icon-path",document.body),r=wn(n,"background-image")||wn(n,"backgroundImage");if(document.body.removeChild(n),r=this._stripUrl(r),r)return r;var a=document.querySelector('link[href$="leaflet.css"]');return a?a.href.substring(0,a.href.length-11-1):""}}),Aa=gn.extend({initialize:function(n){this._marker=n},addHooks:function(){var n=this._marker._icon;this._draggable||(this._draggable=new kn(n,n,!0)),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),Ft(n,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&_e(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_adjustPan:function(n){var r=this._marker,a=r._map,c=this._marker.options.autoPanSpeed,f=this._marker.options.autoPanPadding,M=si(r._icon),I=a.getPixelBounds(),H=a.getPixelOrigin(),X=Lt(I.min._subtract(H).add(f),I.max._subtract(H).subtract(f));if(!X.contains(M)){var rt=J((Math.max(X.max.x,M.x)-X.max.x)/(I.max.x-X.max.x)-(Math.min(X.min.x,M.x)-X.min.x)/(I.min.x-X.min.x),(Math.max(X.max.y,M.y)-X.max.y)/(I.max.y-X.max.y)-(Math.min(X.min.y,M.y)-X.min.y)/(I.min.y-X.min.y)).multiplyBy(c);a.panBy(rt,{animate:!1}),this._draggable._newPos._add(rt),this._draggable._startPos._add(rt),Te(r._icon,this._draggable._newPos),this._onDrag(n),this._panRequest=G(this._adjustPan.bind(this,n))}},_onDragStart:function(){this._oldLatLng=this._marker.getLatLng(),this._marker.closePopup&&this._marker.closePopup(),this._marker.fire("movestart").fire("dragstart")},_onPreDrag:function(n){this._marker.options.autoPan&&(Q(this._panRequest),this._panRequest=G(this._adjustPan.bind(this,n)))},_onDrag:function(n){var r=this._marker,a=r._shadow,c=si(r._icon),f=r._map.layerPointToLatLng(c);a&&Te(a,c),r._latlng=f,n.latlng=f,n.oldLatLng=this._oldLatLng,r.fire("move",n).fire("drag",n)},_onDragEnd:function(n){Q(this._panRequest),delete this._oldLatLng,this._marker.fire("moveend").fire("dragend",n)}}),Gr=cn.extend({options:{icon:new mr,interactive:!0,keyboard:!0,title:"",alt:"Marker",zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250,pane:"markerPane",shadowPane:"shadowPane",bubblingMouseEvents:!1,autoPanOnFocus:!0,draggable:!1,autoPan:!1,autoPanPadding:[50,50],autoPanSpeed:10},initialize:function(n,r){E(this,r),this._latlng=lt(n)},onAdd:function(n){this._zoomAnimated=this._zoomAnimated&&n.options.markerZoomAnimation,this._zoomAnimated&&n.on("zoomanim",this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(n){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&n.off("zoomanim",this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},getLatLng:function(){return this._latlng},setLatLng:function(n){var r=this._latlng;return this._latlng=lt(n),this.update(),this.fire("move",{oldLatLng:r,latlng:this._latlng})},setZIndexOffset:function(n){return this.options.zIndexOffset=n,this.update()},getIcon:function(){return this.options.icon},setIcon:function(n){return this.options.icon=n,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){if(this._icon&&this._map){var n=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(n)}return this},_initIcon:function(){var n=this.options,r="leaflet-zoom-"+(this._zoomAnimated?"animated":"hide"),a=n.icon.createIcon(this._icon),c=!1;a!==this._icon&&(this._icon&&this._removeIcon(),c=!0,n.title&&(a.title=n.title),a.tagName==="IMG"&&(a.alt=n.alt||"")),Ft(a,r),n.keyboard&&(a.tabIndex="0",a.setAttribute("role","button")),this._icon=a,n.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&Zt(a,"focus",this._panOnFocus,this);var f=n.icon.createShadow(this._shadow),M=!1;f!==this._shadow&&(this._removeShadow(),M=!0),f&&(Ft(f,r),f.alt=""),this._shadow=f,n.opacity<1&&this._updateOpacity(),c&&this.getPane().appendChild(this._icon),this._initInteraction(),f&&M&&this.getPane(n.shadowPane).appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&pe(this._icon,"focus",this._panOnFocus,this),oe(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&oe(this._shadow),this._shadow=null},_setPos:function(n){this._icon&&Te(this._icon,n),this._shadow&&Te(this._shadow,n),this._zIndex=n.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(n){this._icon&&(this._icon.style.zIndex=this._zIndex+n)},_animateZoom:function(n){var r=this._map._latLngToNewLayerPoint(this._latlng,n.zoom,n.center).round();this._setPos(r)},_initInteraction:function(){if(this.options.interactive&&(Ft(this._icon,"leaflet-interactive"),this.addInteractiveTarget(this._icon),Aa)){var n=this.options.draggable;this.dragging&&(n=this.dragging.enabled(),this.dragging.disable()),this.dragging=new Aa(this),n&&this.dragging.enable()}},setOpacity:function(n){return this.options.opacity=n,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var n=this.options.opacity;this._icon&&Ve(this._icon,n),this._shadow&&Ve(this._shadow,n)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_panOnFocus:function(){var n=this._map;if(n){var r=this.options.icon.options,a=r.iconSize?J(r.iconSize):J(0,0),c=r.iconAnchor?J(r.iconAnchor):J(0,0);n.panInside(this._latlng,{paddingTopLeft:c,paddingBottomRight:a.subtract(c)})}},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor}});function Rh(n,r){return new Gr(n,r)}var Hn=cn.extend({options:{stroke:!0,color:"#3388ff",weight:3,opacity:1,lineCap:"round",lineJoin:"round",dashArray:null,dashOffset:null,fill:!1,fillColor:null,fillOpacity:.2,fillRule:"evenodd",interactive:!0,bubblingMouseEvents:!0},beforeAdd:function(n){this._renderer=n.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},redraw:function(){return this._map&&this._renderer._updatePath(this),this},setStyle:function(n){return E(this,n),this._renderer&&(this._renderer._updateStyle(this),this.options.stroke&&n&&Object.prototype.hasOwnProperty.call(n,"weight")&&this._updateBounds()),this},bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){this._project(),this._update()},_clickTolerance:function(){return(this.options.stroke?this.options.weight/2:0)+(this._renderer.options.tolerance||0)}}),Vr=Hn.extend({options:{fill:!0,radius:10},initialize:function(n,r){E(this,r),this._latlng=lt(n),this._radius=this.options.radius},setLatLng:function(n){var r=this._latlng;return this._latlng=lt(n),this.redraw(),this.fire("move",{oldLatLng:r,latlng:this._latlng})},getLatLng:function(){return this._latlng},setRadius:function(n){return this.options.radius=this._radius=n,this.redraw()},getRadius:function(){return this._radius},setStyle:function(n){var r=n&&n.radius||this._radius;return Hn.prototype.setStyle.call(this,n),this.setRadius(r),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var n=this._radius,r=this._radiusY||n,a=this._clickTolerance(),c=[n+a,r+a];this._pxBounds=new ft(this._point.subtract(c),this._point.add(c))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},_containsPoint:function(n){return n.distanceTo(this._point)<=this._radius+this._clickTolerance()}});function Ih(n,r){return new Vr(n,r)}var to=Vr.extend({initialize:function(n,r,a){if(typeof r=="number"&&(r=o({},a,{radius:r})),E(this,r),this._latlng=lt(n),isNaN(this.options.radius))throw new Error("Circle radius cannot be NaN");this._mRadius=this.options.radius},setRadius:function(n){return this._mRadius=n,this.redraw()},getRadius:function(){return this._mRadius},getBounds:function(){var n=[this._radius,this._radiusY||this._radius];return new qt(this._map.layerPointToLatLng(this._point.subtract(n)),this._map.layerPointToLatLng(this._point.add(n)))},setStyle:Hn.prototype.setStyle,_project:function(){var n=this._latlng.lng,r=this._latlng.lat,a=this._map,c=a.options.crs;if(c.distance===Nt.distance){var f=Math.PI/180,M=this._mRadius/Nt.R/f,I=a.project([r+M,n]),H=a.project([r-M,n]),X=I.add(H).divideBy(2),rt=a.unproject(X).lat,xt=Math.acos((Math.cos(M*f)-Math.sin(r*f)*Math.sin(rt*f))/(Math.cos(r*f)*Math.cos(rt*f)))/f;(isNaN(xt)||xt===0)&&(xt=M/Math.cos(Math.PI/180*r)),this._point=X.subtract(a.getPixelOrigin()),this._radius=isNaN(xt)?0:X.x-a.project([rt,n-xt]).x,this._radiusY=X.y-I.y}else{var Bt=c.unproject(c.project(this._latlng).subtract([this._mRadius,0]));this._point=a.latLngToLayerPoint(this._latlng),this._radius=this._point.x-a.latLngToLayerPoint(Bt).x}this._updateBounds()}});function Dh(n,r,a){return new to(n,r,a)}var Pn=Hn.extend({options:{smoothFactor:1,noClip:!1},initialize:function(n,r){E(this,r),this._setLatLngs(n)},getLatLngs:function(){return this._latlngs},setLatLngs:function(n){return this._setLatLngs(n),this.redraw()},isEmpty:function(){return!this._latlngs.length},closestLayerPoint:function(n){for(var r=1/0,a=null,c=pr,f,M,I=0,H=this._parts.length;I<H;I++)for(var X=this._parts[I],rt=1,xt=X.length;rt<xt;rt++){f=X[rt-1],M=X[rt];var Bt=c(n,f,M,!0);Bt<r&&(r=Bt,a=c(n,f,M))}return a&&(a.distance=Math.sqrt(r)),a},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return ba(this._defaultShape(),this._map.options.crs)},getBounds:function(){return this._bounds},addLatLng:function(n,r){return r=r||this._defaultShape(),n=lt(n),r.push(n),this._bounds.extend(n),this.redraw()},_setLatLngs:function(n){this._bounds=new qt,this._latlngs=this._convertLatLngs(n)},_defaultShape:function(){return en(this._latlngs)?this._latlngs:this._latlngs[0]},_convertLatLngs:function(n){for(var r=[],a=en(n),c=0,f=n.length;c<f;c++)a?(r[c]=lt(n[c]),this._bounds.extend(r[c])):r[c]=this._convertLatLngs(n[c]);return r},_project:function(){var n=new ft;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,n),this._bounds.isValid()&&n.isValid()&&(this._rawPxBounds=n,this._updateBounds())},_updateBounds:function(){var n=this._clickTolerance(),r=new B(n,n);this._rawPxBounds&&(this._pxBounds=new ft([this._rawPxBounds.min.subtract(r),this._rawPxBounds.max.add(r)]))},_projectLatlngs:function(n,r,a){var c=n[0]instanceof nt,f=n.length,M,I;if(c){for(I=[],M=0;M<f;M++)I[M]=this._map.latLngToLayerPoint(n[M]),a.extend(I[M]);r.push(I)}else for(M=0;M<f;M++)this._projectLatlngs(n[M],r,a)},_clipPoints:function(){var n=this._renderer._bounds;if(this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(n))){if(this.options.noClip){this._parts=this._rings;return}var r=this._parts,a,c,f,M,I,H,X;for(a=0,f=0,M=this._rings.length;a<M;a++)for(X=this._rings[a],c=0,I=X.length;c<I-1;c++)H=Ea(X[c],X[c+1],n,c,!0),H&&(r[f]=r[f]||[],r[f].push(H[0]),(H[1]!==X[c+1]||c===I-2)&&(r[f].push(H[1]),f++))}},_simplifyPoints:function(){for(var n=this._parts,r=this.options.smoothFactor,a=0,c=n.length;a<c;a++)n[a]=ya(n[a],r)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},_containsPoint:function(n,r){var a,c,f,M,I,H,X=this._clickTolerance();if(!this._pxBounds||!this._pxBounds.contains(n))return!1;for(a=0,M=this._parts.length;a<M;a++)for(H=this._parts[a],c=0,I=H.length,f=I-1;c<I;f=c++)if(!(!r&&c===0)&&Ma(n,H[f],H[c])<=X)return!0;return!1}});function Uh(n,r){return new Pn(n,r)}Pn._flat=Ta;var wi=Pn.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return xa(this._defaultShape(),this._map.options.crs)},_convertLatLngs:function(n){var r=Pn.prototype._convertLatLngs.call(this,n),a=r.length;return a>=2&&r[0]instanceof nt&&r[0].equals(r[a-1])&&r.pop(),r},_setLatLngs:function(n){Pn.prototype._setLatLngs.call(this,n),en(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return en(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},_clipPoints:function(){var n=this._renderer._bounds,r=this.options.weight,a=new B(r,r);if(n=new ft(n.min.subtract(a),n.max.add(a)),this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(n))){if(this.options.noClip){this._parts=this._rings;return}for(var c=0,f=this._rings.length,M;c<f;c++)M=va(this._rings[c],n,!0),M.length&&this._parts.push(M)}},_updatePath:function(){this._renderer._updatePoly(this,!0)},_containsPoint:function(n){var r=!1,a,c,f,M,I,H,X,rt;if(!this._pxBounds||!this._pxBounds.contains(n))return!1;for(M=0,X=this._parts.length;M<X;M++)for(a=this._parts[M],I=0,rt=a.length,H=rt-1;I<rt;H=I++)c=a[I],f=a[H],c.y>n.y!=f.y>n.y&&n.x<(f.x-c.x)*(n.y-c.y)/(f.y-c.y)+c.x&&(r=!r);return r||Pn.prototype._containsPoint.call(this,n,!0)}});function Nh(n,r){return new wi(n,r)}var Cn=An.extend({initialize:function(n,r){E(this,r),this._layers={},n&&this.addData(n)},addData:function(n){var r=A(n)?n:n.features,a,c,f;if(r){for(a=0,c=r.length;a<c;a++)f=r[a],(f.geometries||f.geometry||f.features||f.coordinates)&&this.addData(f);return this}var M=this.options;if(M.filter&&!M.filter(n))return this;var I=Wr(n,M);return I?(I.feature=qr(n),I.defaultOptions=I.options,this.resetStyle(I),M.onEachFeature&&M.onEachFeature(n,I),this.addLayer(I)):this},resetStyle:function(n){return n===void 0?this.eachLayer(this.resetStyle,this):(n.options=o({},n.defaultOptions),this._setLayerStyle(n,this.options.style),this)},setStyle:function(n){return this.eachLayer(function(r){this._setLayerStyle(r,n)},this)},_setLayerStyle:function(n,r){n.setStyle&&(typeof r=="function"&&(r=r(n.feature)),n.setStyle(r))}});function Wr(n,r){var a=n.type==="Feature"?n.geometry:n,c=a?a.coordinates:null,f=[],M=r&&r.pointToLayer,I=r&&r.coordsToLatLng||eo,H,X,rt,xt;if(!c&&!a)return null;switch(a.type){case"Point":return H=I(c),Pa(M,n,H,r);case"MultiPoint":for(rt=0,xt=c.length;rt<xt;rt++)H=I(c[rt]),f.push(Pa(M,n,H,r));return new An(f);case"LineString":case"MultiLineString":return X=Xr(c,a.type==="LineString"?0:1,I),new Pn(X,r);case"Polygon":case"MultiPolygon":return X=Xr(c,a.type==="Polygon"?1:2,I),new wi(X,r);case"GeometryCollection":for(rt=0,xt=a.geometries.length;rt<xt;rt++){var Bt=Wr({geometry:a.geometries[rt],type:"Feature",properties:n.properties},r);Bt&&f.push(Bt)}return new An(f);case"FeatureCollection":for(rt=0,xt=a.features.length;rt<xt;rt++){var Kt=Wr(a.features[rt],r);Kt&&f.push(Kt)}return new An(f);default:throw new Error("Invalid GeoJSON object.")}}function Pa(n,r,a,c){return n?n(r,a):new Gr(a,c&&c.markersInheritOptions&&c)}function eo(n){return new nt(n[1],n[0],n[2])}function Xr(n,r,a){for(var c=[],f=0,M=n.length,I;f<M;f++)I=r?Xr(n[f],r-1,a):(a||eo)(n[f]),c.push(I);return c}function no(n,r){return n=lt(n),n.alt!==void 0?[g(n.lng,r),g(n.lat,r),g(n.alt,r)]:[g(n.lng,r),g(n.lat,r)]}function Zr(n,r,a,c){for(var f=[],M=0,I=n.length;M<I;M++)f.push(r?Zr(n[M],en(n[M])?0:r-1,a,c):no(n[M],c));return!r&&a&&f.length>0&&f.push(f[0].slice()),f}function Ai(n,r){return n.feature?o({},n.feature,{geometry:r}):qr(r)}function qr(n){return n.type==="Feature"||n.type==="FeatureCollection"?n:{type:"Feature",properties:{},geometry:n}}var io={toGeoJSON:function(n){return Ai(this,{type:"Point",coordinates:no(this.getLatLng(),n)})}};Gr.include(io),to.include(io),Vr.include(io),Pn.include({toGeoJSON:function(n){var r=!en(this._latlngs),a=Zr(this._latlngs,r?1:0,!1,n);return Ai(this,{type:(r?"Multi":"")+"LineString",coordinates:a})}}),wi.include({toGeoJSON:function(n){var r=!en(this._latlngs),a=r&&!en(this._latlngs[0]),c=Zr(this._latlngs,a?2:r?1:0,!0,n);return r||(c=[c]),Ai(this,{type:(a?"Multi":"")+"Polygon",coordinates:c})}}),Ti.include({toMultiPoint:function(n){var r=[];return this.eachLayer(function(a){r.push(a.toGeoJSON(n).geometry.coordinates)}),Ai(this,{type:"MultiPoint",coordinates:r})},toGeoJSON:function(n){var r=this.feature&&this.feature.geometry&&this.feature.geometry.type;if(r==="MultiPoint")return this.toMultiPoint(n);var a=r==="GeometryCollection",c=[];return this.eachLayer(function(f){if(f.toGeoJSON){var M=f.toGeoJSON(n);if(a)c.push(M.geometry);else{var I=qr(M);I.type==="FeatureCollection"?c.push.apply(c,I.features):c.push(I)}}}),a?Ai(this,{geometries:c,type:"GeometryCollection"}):{type:"FeatureCollection",features:c}}});function Ca(n,r){return new Cn(n,r)}var Oh=Ca,Yr=cn.extend({options:{opacity:1,alt:"",interactive:!1,crossOrigin:!1,errorOverlayUrl:"",zIndex:1,className:""},initialize:function(n,r,a){this._url=n,this._bounds=q(r),E(this,a)},onAdd:function(){this._image||(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(Ft(this._image,"leaflet-interactive"),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){oe(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},setOpacity:function(n){return this.options.opacity=n,this._image&&this._updateOpacity(),this},setStyle:function(n){return n.opacity&&this.setOpacity(n.opacity),this},bringToFront:function(){return this._map&&tn(this._image),this},bringToBack:function(){return this._map&&mn(this._image),this},setUrl:function(n){return this._url=n,this._image&&(this._image.src=n),this},setBounds:function(n){return this._bounds=q(n),this._map&&this._reset(),this},getEvents:function(){var n={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(n.zoomanim=this._animateZoom),n},setZIndex:function(n){return this.options.zIndex=n,this._updateZIndex(),this},getBounds:function(){return this._bounds},getElement:function(){return this._image},_initImage:function(){var n=this._url.tagName==="IMG",r=this._image=n?this._url:wt("img");if(Ft(r,"leaflet-image-layer"),this._zoomAnimated&&Ft(r,"leaflet-zoom-animated"),this.options.className&&Ft(r,this.options.className),r.onselectstart=v,r.onmousemove=v,r.onload=h(this.fire,this,"load"),r.onerror=h(this._overlayOnError,this,"error"),(this.options.crossOrigin||this.options.crossOrigin==="")&&(r.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),this.options.zIndex&&this._updateZIndex(),n){this._url=r.src;return}r.src=this._url,r.alt=this.options.alt},_animateZoom:function(n){var r=this._map.getZoomScale(n.zoom),a=this._map._latLngBoundsToNewLayerBounds(this._bounds,n.zoom,n.center).min;ri(this._image,a,r)},_reset:function(){var n=this._image,r=new ft(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),a=r.getSize();Te(n,r.min),n.style.width=a.x+"px",n.style.height=a.y+"px"},_updateOpacity:function(){Ve(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){this.fire("error");var n=this.options.errorOverlayUrl;n&&this._url!==n&&(this._url=n,this._image.src=n)},getCenter:function(){return this._bounds.getCenter()}}),Fh=function(n,r,a){return new Yr(n,r,a)},La=Yr.extend({options:{autoplay:!0,loop:!0,keepAspectRatio:!0,muted:!1,playsInline:!0},_initImage:function(){var n=this._url.tagName==="VIDEO",r=this._image=n?this._url:wt("video");if(Ft(r,"leaflet-image-layer"),this._zoomAnimated&&Ft(r,"leaflet-zoom-animated"),this.options.className&&Ft(r,this.options.className),r.onselectstart=v,r.onmousemove=v,r.onloadeddata=h(this.fire,this,"load"),n){for(var a=r.getElementsByTagName("source"),c=[],f=0;f<a.length;f++)c.push(a[f].src);this._url=a.length>0?c:[r.src];return}A(this._url)||(this._url=[this._url]),!this.options.keepAspectRatio&&Object.prototype.hasOwnProperty.call(r.style,"objectFit")&&(r.style.objectFit="fill"),r.autoplay=!!this.options.autoplay,r.loop=!!this.options.loop,r.muted=!!this.options.muted,r.playsInline=!!this.options.playsInline;for(var M=0;M<this._url.length;M++){var I=wt("source");I.src=this._url[M],r.appendChild(I)}}});function Bh(n,r,a){return new La(n,r,a)}var Ra=Yr.extend({_initImage:function(){var n=this._image=this._url;Ft(n,"leaflet-image-layer"),this._zoomAnimated&&Ft(n,"leaflet-zoom-animated"),this.options.className&&Ft(n,this.options.className),n.onselectstart=v,n.onmousemove=v}});function zh(n,r,a){return new Ra(n,r,a)}var vn=cn.extend({options:{interactive:!1,offset:[0,0],className:"",pane:void 0,content:""},initialize:function(n,r){n&&(n instanceof nt||A(n))?(this._latlng=lt(n),E(this,r)):(E(this,n),this._source=r),this.options.content&&(this._content=this.options.content)},openOn:function(n){return n=arguments.length?n:this._source._map,n.hasLayer(this)||n.addLayer(this),this},close:function(){return this._map&&this._map.removeLayer(this),this},toggle:function(n){return this._map?this.close():(arguments.length?this._source=n:n=this._source,this._prepareOpen(),this.openOn(n._map)),this},onAdd:function(n){this._zoomAnimated=n._zoomAnimated,this._container||this._initLayout(),n._fadeAnimated&&Ve(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),n._fadeAnimated&&Ve(this._container,1),this.bringToFront(),this.options.interactive&&(Ft(this._container,"leaflet-interactive"),this.addInteractiveTarget(this._container))},onRemove:function(n){n._fadeAnimated?(Ve(this._container,0),this._removeTimeout=setTimeout(h(oe,void 0,this._container),200)):oe(this._container),this.options.interactive&&(_e(this._container,"leaflet-interactive"),this.removeInteractiveTarget(this._container))},getLatLng:function(){return this._latlng},setLatLng:function(n){return this._latlng=lt(n),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(n){return this._content=n,this.update(),this},getElement:function(){return this._container},update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},getEvents:function(){var n={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(n.zoomanim=this._animateZoom),n},isOpen:function(){return!!this._map&&this._map.hasLayer(this)},bringToFront:function(){return this._map&&tn(this._container),this},bringToBack:function(){return this._map&&mn(this._container),this},_prepareOpen:function(n){var r=this._source;if(!r._map)return!1;if(r instanceof An){r=null;var a=this._source._layers;for(var c in a)if(a[c]._map){r=a[c];break}if(!r)return!1;this._source=r}if(!n)if(r.getCenter)n=r.getCenter();else if(r.getLatLng)n=r.getLatLng();else if(r.getBounds)n=r.getBounds().getCenter();else throw new Error("Unable to get source layer LatLng.");return this.setLatLng(n),this._map&&this.update(),!0},_updateContent:function(){if(this._content){var n=this._contentNode,r=typeof this._content=="function"?this._content(this._source||this):this._content;if(typeof r=="string")n.innerHTML=r;else{for(;n.hasChildNodes();)n.removeChild(n.firstChild);n.appendChild(r)}this.fire("contentupdate")}},_updatePosition:function(){if(this._map){var n=this._map.latLngToLayerPoint(this._latlng),r=J(this.options.offset),a=this._getAnchor();this._zoomAnimated?Te(this._container,n.add(a)):r=r.add(n).add(a);var c=this._containerBottom=-r.y,f=this._containerLeft=-Math.round(this._containerWidth/2)+r.x;this._container.style.bottom=c+"px",this._container.style.left=f+"px"}},_getAnchor:function(){return[0,0]}});ie.include({_initOverlay:function(n,r,a,c){var f=r;return f instanceof n||(f=new n(c).setContent(r)),a&&f.setLatLng(a),f}}),cn.include({_initOverlay:function(n,r,a,c){var f=a;return f instanceof n?(E(f,c),f._source=this):(f=r&&!c?r:new n(c,this),f.setContent(a)),f}});var $r=vn.extend({options:{pane:"popupPane",offset:[0,7],maxWidth:300,minWidth:50,maxHeight:null,autoPan:!0,autoPanPaddingTopLeft:null,autoPanPaddingBottomRight:null,autoPanPadding:[5,5],keepInView:!1,closeButton:!0,autoClose:!0,closeOnEscapeKey:!0,className:""},openOn:function(n){return n=arguments.length?n:this._source._map,!n.hasLayer(this)&&n._popup&&n._popup.options.autoClose&&n.removeLayer(n._popup),n._popup=this,vn.prototype.openOn.call(this,n)},onAdd:function(n){vn.prototype.onAdd.call(this,n),n.fire("popupopen",{popup:this}),this._source&&(this._source.fire("popupopen",{popup:this},!0),this._source instanceof Hn||this._source.on("preclick",oi))},onRemove:function(n){vn.prototype.onRemove.call(this,n),n.fire("popupclose",{popup:this}),this._source&&(this._source.fire("popupclose",{popup:this},!0),this._source instanceof Hn||this._source.off("preclick",oi))},getEvents:function(){var n=vn.prototype.getEvents.call(this);return(this.options.closeOnClick!==void 0?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(n.preclick=this.close),this.options.keepInView&&(n.moveend=this._adjustPan),n},_initLayout:function(){var n="leaflet-popup",r=this._container=wt("div",n+" "+(this.options.className||"")+" leaflet-zoom-animated"),a=this._wrapper=wt("div",n+"-content-wrapper",r);if(this._contentNode=wt("div",n+"-content",a),dr(r),Zs(this._contentNode),Zt(r,"contextmenu",oi),this._tipContainer=wt("div",n+"-tip-container",r),this._tip=wt("div",n+"-tip",this._tipContainer),this.options.closeButton){var c=this._closeButton=wt("a",n+"-close-button",r);c.setAttribute("role","button"),c.setAttribute("aria-label","Close popup"),c.href="#close",c.innerHTML='<span aria-hidden="true">&#215;</span>',Zt(c,"click",function(f){De(f),this.close()},this)}},_updateLayout:function(){var n=this._contentNode,r=n.style;r.width="",r.whiteSpace="nowrap";var a=n.offsetWidth;a=Math.min(a,this.options.maxWidth),a=Math.max(a,this.options.minWidth),r.width=a+1+"px",r.whiteSpace="",r.height="";var c=n.offsetHeight,f=this.options.maxHeight,M="leaflet-popup-scrolled";f&&c>f?(r.height=f+"px",Ft(n,M)):_e(n,M),this._containerWidth=this._container.offsetWidth},_animateZoom:function(n){var r=this._map._latLngToNewLayerPoint(this._latlng,n.zoom,n.center),a=this._getAnchor();Te(this._container,r.add(a))},_adjustPan:function(){if(this.options.autoPan){if(this._map._panAnim&&this._map._panAnim.stop(),this._autopanning){this._autopanning=!1;return}var n=this._map,r=parseInt(wn(this._container,"marginBottom"),10)||0,a=this._container.offsetHeight+r,c=this._containerWidth,f=new B(this._containerLeft,-a-this._containerBottom);f._add(si(this._container));var M=n.layerPointToContainerPoint(f),I=J(this.options.autoPanPadding),H=J(this.options.autoPanPaddingTopLeft||I),X=J(this.options.autoPanPaddingBottomRight||I),rt=n.getSize(),xt=0,Bt=0;M.x+c+X.x>rt.x&&(xt=M.x+c-rt.x+X.x),M.x-xt-H.x<0&&(xt=M.x-H.x),M.y+a+X.y>rt.y&&(Bt=M.y+a-rt.y+X.y),M.y-Bt-H.y<0&&(Bt=M.y-H.y),(xt||Bt)&&(this.options.keepInView&&(this._autopanning=!0),n.fire("autopanstart").panBy([xt,Bt]))}},_getAnchor:function(){return J(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}}),kh=function(n,r){return new $r(n,r)};ie.mergeOptions({closePopupOnClick:!0}),ie.include({openPopup:function(n,r,a){return this._initOverlay($r,n,r,a).openOn(this),this},closePopup:function(n){return n=arguments.length?n:this._popup,n&&n.close(),this}}),cn.include({bindPopup:function(n,r){return this._popup=this._initOverlay($r,this._popup,n,r),this._popupHandlersAdded||(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,this._popup=null),this},openPopup:function(n){return this._popup&&(this instanceof An||(this._popup._source=this),this._popup._prepareOpen(n||this._latlng)&&this._popup.openOn(this._map)),this},closePopup:function(){return this._popup&&this._popup.close(),this},togglePopup:function(){return this._popup&&this._popup.toggle(this),this},isPopupOpen:function(){return this._popup?this._popup.isOpen():!1},setPopupContent:function(n){return this._popup&&this._popup.setContent(n),this},getPopup:function(){return this._popup},_openPopup:function(n){if(!(!this._popup||!this._map)){ai(n);var r=n.layer||n.target;if(this._popup._source===r&&!(r instanceof Hn)){this._map.hasLayer(this._popup)?this.closePopup():this.openPopup(n.latlng);return}this._popup._source=r,this.openPopup(n.latlng)}},_movePopup:function(n){this._popup.setLatLng(n.latlng)},_onKeyPress:function(n){n.originalEvent.keyCode===13&&this._openPopup(n)}});var jr=vn.extend({options:{pane:"tooltipPane",offset:[0,0],direction:"auto",permanent:!1,sticky:!1,opacity:.9},onAdd:function(n){vn.prototype.onAdd.call(this,n),this.setOpacity(this.options.opacity),n.fire("tooltipopen",{tooltip:this}),this._source&&(this.addEventParent(this._source),this._source.fire("tooltipopen",{tooltip:this},!0))},onRemove:function(n){vn.prototype.onRemove.call(this,n),n.fire("tooltipclose",{tooltip:this}),this._source&&(this.removeEventParent(this._source),this._source.fire("tooltipclose",{tooltip:this},!0))},getEvents:function(){var n=vn.prototype.getEvents.call(this);return this.options.permanent||(n.preclick=this.close),n},_initLayout:function(){var n="leaflet-tooltip",r=n+" "+(this.options.className||"")+" leaflet-zoom-"+(this._zoomAnimated?"animated":"hide");this._contentNode=this._container=wt("div",r),this._container.setAttribute("role","tooltip"),this._container.setAttribute("id","leaflet-tooltip-"+d(this))},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(n){var r,a,c=this._map,f=this._container,M=c.latLngToContainerPoint(c.getCenter()),I=c.layerPointToContainerPoint(n),H=this.options.direction,X=f.offsetWidth,rt=f.offsetHeight,xt=J(this.options.offset),Bt=this._getAnchor();H==="top"?(r=X/2,a=rt):H==="bottom"?(r=X/2,a=0):H==="center"?(r=X/2,a=rt/2):H==="right"?(r=0,a=rt/2):H==="left"?(r=X,a=rt/2):I.x<M.x?(H="right",r=0,a=rt/2):(H="left",r=X+(xt.x+Bt.x)*2,a=rt/2),n=n.subtract(J(r,a,!0)).add(xt).add(Bt),_e(f,"leaflet-tooltip-right"),_e(f,"leaflet-tooltip-left"),_e(f,"leaflet-tooltip-top"),_e(f,"leaflet-tooltip-bottom"),Ft(f,"leaflet-tooltip-"+H),Te(f,n)},_updatePosition:function(){var n=this._map.latLngToLayerPoint(this._latlng);this._setPosition(n)},setOpacity:function(n){this.options.opacity=n,this._container&&Ve(this._container,n)},_animateZoom:function(n){var r=this._map._latLngToNewLayerPoint(this._latlng,n.zoom,n.center);this._setPosition(r)},_getAnchor:function(){return J(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}}),Hh=function(n,r){return new jr(n,r)};ie.include({openTooltip:function(n,r,a){return this._initOverlay(jr,n,r,a).openOn(this),this},closeTooltip:function(n){return n.close(),this}}),cn.include({bindTooltip:function(n,r){return this._tooltip&&this.isTooltipOpen()&&this.unbindTooltip(),this._tooltip=this._initOverlay(jr,this._tooltip,n,r),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},unbindTooltip:function(){return this._tooltip&&(this._initTooltipInteractions(!0),this.closeTooltip(),this._tooltip=null),this},_initTooltipInteractions:function(n){if(!(!n&&this._tooltipHandlersAdded)){var r=n?"off":"on",a={remove:this.closeTooltip,move:this._moveTooltip};this._tooltip.options.permanent?a.add=this._openTooltip:(a.mouseover=this._openTooltip,a.mouseout=this.closeTooltip,a.click=this._openTooltip,this._map?this._addFocusListeners():a.add=this._addFocusListeners),this._tooltip.options.sticky&&(a.mousemove=this._moveTooltip),this[r](a),this._tooltipHandlersAdded=!n}},openTooltip:function(n){return this._tooltip&&(this instanceof An||(this._tooltip._source=this),this._tooltip._prepareOpen(n)&&(this._tooltip.openOn(this._map),this.getElement?this._setAriaDescribedByOnLayer(this):this.eachLayer&&this.eachLayer(this._setAriaDescribedByOnLayer,this))),this},closeTooltip:function(){if(this._tooltip)return this._tooltip.close()},toggleTooltip:function(){return this._tooltip&&this._tooltip.toggle(this),this},isTooltipOpen:function(){return this._tooltip.isOpen()},setTooltipContent:function(n){return this._tooltip&&this._tooltip.setContent(n),this},getTooltip:function(){return this._tooltip},_addFocusListeners:function(){this.getElement?this._addFocusListenersOnLayer(this):this.eachLayer&&this.eachLayer(this._addFocusListenersOnLayer,this)},_addFocusListenersOnLayer:function(n){var r=typeof n.getElement=="function"&&n.getElement();r&&(Zt(r,"focus",function(){this._tooltip._source=n,this.openTooltip()},this),Zt(r,"blur",this.closeTooltip,this))},_setAriaDescribedByOnLayer:function(n){var r=typeof n.getElement=="function"&&n.getElement();r&&r.setAttribute("aria-describedby",this._tooltip._container.id)},_openTooltip:function(n){if(!(!this._tooltip||!this._map)){if(this._map.dragging&&this._map.dragging.moving()&&!this._openOnceFlag){this._openOnceFlag=!0;var r=this;this._map.once("moveend",function(){r._openOnceFlag=!1,r._openTooltip(n)});return}this._tooltip._source=n.layer||n.target,this.openTooltip(this._tooltip.options.sticky?n.latlng:void 0)}},_moveTooltip:function(n){var r=n.latlng,a,c;this._tooltip.options.sticky&&n.originalEvent&&(a=this._map.mouseEventToContainerPoint(n.originalEvent),c=this._map.containerPointToLayerPoint(a),r=this._map.layerPointToLatLng(c)),this._tooltip.setLatLng(r)}});var Ia=bi.extend({options:{iconSize:[12,12],html:!1,bgPos:null,className:"leaflet-div-icon"},createIcon:function(n){var r=n&&n.tagName==="DIV"?n:document.createElement("div"),a=this.options;if(a.html instanceof Element?(ii(r),r.appendChild(a.html)):r.innerHTML=a.html!==!1?a.html:"",a.bgPos){var c=J(a.bgPos);r.style.backgroundPosition=-c.x+"px "+-c.y+"px"}return this._setIconStyles(r,"icon"),r},createShadow:function(){return null}});function Gh(n){return new Ia(n)}bi.Default=mr;var _r=cn.extend({options:{tileSize:256,opacity:1,updateWhenIdle:Tt.mobile,updateWhenZooming:!0,updateInterval:200,zIndex:1,bounds:null,minZoom:0,maxZoom:void 0,maxNativeZoom:void 0,minNativeZoom:void 0,noWrap:!1,pane:"tilePane",className:"",keepBuffer:2},initialize:function(n){E(this,n)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView()},beforeAdd:function(n){n._addZoomLimit(this)},onRemove:function(n){this._removeAllTiles(),oe(this._container),n._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},bringToFront:function(){return this._map&&(tn(this._container),this._setAutoZIndex(Math.max)),this},bringToBack:function(){return this._map&&(mn(this._container),this._setAutoZIndex(Math.min)),this},getContainer:function(){return this._container},setOpacity:function(n){return this.options.opacity=n,this._updateOpacity(),this},setZIndex:function(n){return this.options.zIndex=n,this._updateZIndex(),this},isLoading:function(){return this._loading},redraw:function(){if(this._map){this._removeAllTiles();var n=this._clampZoom(this._map.getZoom());n!==this._tileZoom&&(this._tileZoom=n,this._updateLevels()),this._update()}return this},getEvents:function(){var n={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||(this._onMove=p(this._onMoveEnd,this.options.updateInterval,this)),n.move=this._onMove),this._zoomAnimated&&(n.zoomanim=this._animateZoom),n},createTile:function(){return document.createElement("div")},getTileSize:function(){var n=this.options.tileSize;return n instanceof B?n:new B(n,n)},_updateZIndex:function(){this._container&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(n){for(var r=this.getPane().children,a=-n(-1/0,1/0),c=0,f=r.length,M;c<f;c++)M=r[c].style.zIndex,r[c]!==this._container&&M&&(a=n(a,+M));isFinite(a)&&(this.options.zIndex=a+n(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!Tt.ielt9){Ve(this._container,this.options.opacity);var n=+new Date,r=!1,a=!1;for(var c in this._tiles){var f=this._tiles[c];if(!(!f.current||!f.loaded)){var M=Math.min(1,(n-f.loaded)/200);Ve(f.el,M),M<1?r=!0:(f.active?a=!0:this._onOpaqueTile(f),f.active=!0)}}a&&!this._noPrune&&this._pruneTiles(),r&&(Q(this._fadeFrame),this._fadeFrame=G(this._updateOpacity,this))}},_onOpaqueTile:v,_initContainer:function(){this._container||(this._container=wt("div","leaflet-layer "+(this.options.className||"")),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var n=this._tileZoom,r=this.options.maxZoom;if(n!==void 0){for(var a in this._levels)a=Number(a),this._levels[a].el.children.length||a===n?(this._levels[a].el.style.zIndex=r-Math.abs(n-a),this._onUpdateLevel(a)):(oe(this._levels[a].el),this._removeTilesAtZoom(a),this._onRemoveLevel(a),delete this._levels[a]);var c=this._levels[n],f=this._map;return c||(c=this._levels[n]={},c.el=wt("div","leaflet-tile-container leaflet-zoom-animated",this._container),c.el.style.zIndex=r,c.origin=f.project(f.unproject(f.getPixelOrigin()),n).round(),c.zoom=n,this._setZoomTransform(c,f.getCenter(),f.getZoom()),v(c.el.offsetWidth),this._onCreateLevel(c)),this._level=c,c}},_onUpdateLevel:v,_onRemoveLevel:v,_onCreateLevel:v,_pruneTiles:function(){if(this._map){var n,r,a=this._map.getZoom();if(a>this.options.maxZoom||a<this.options.minZoom){this._removeAllTiles();return}for(n in this._tiles)r=this._tiles[n],r.retain=r.current;for(n in this._tiles)if(r=this._tiles[n],r.current&&!r.active){var c=r.coords;this._retainParent(c.x,c.y,c.z,c.z-5)||this._retainChildren(c.x,c.y,c.z,c.z+2)}for(n in this._tiles)this._tiles[n].retain||this._removeTile(n)}},_removeTilesAtZoom:function(n){for(var r in this._tiles)this._tiles[r].coords.z===n&&this._removeTile(r)},_removeAllTiles:function(){for(var n in this._tiles)this._removeTile(n)},_invalidateAll:function(){for(var n in this._levels)oe(this._levels[n].el),this._onRemoveLevel(Number(n)),delete this._levels[n];this._removeAllTiles(),this._tileZoom=void 0},_retainParent:function(n,r,a,c){var f=Math.floor(n/2),M=Math.floor(r/2),I=a-1,H=new B(+f,+M);H.z=+I;var X=this._tileCoordsToKey(H),rt=this._tiles[X];return rt&&rt.active?(rt.retain=!0,!0):(rt&&rt.loaded&&(rt.retain=!0),I>c?this._retainParent(f,M,I,c):!1)},_retainChildren:function(n,r,a,c){for(var f=2*n;f<2*n+2;f++)for(var M=2*r;M<2*r+2;M++){var I=new B(f,M);I.z=a+1;var H=this._tileCoordsToKey(I),X=this._tiles[H];if(X&&X.active){X.retain=!0;continue}else X&&X.loaded&&(X.retain=!0);a+1<c&&this._retainChildren(f,M,a+1,c)}},_resetView:function(n){var r=n&&(n.pinch||n.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),r,r)},_animateZoom:function(n){this._setView(n.center,n.zoom,!0,n.noUpdate)},_clampZoom:function(n){var r=this.options;return r.minNativeZoom!==void 0&&n<r.minNativeZoom?r.minNativeZoom:r.maxNativeZoom!==void 0&&r.maxNativeZoom<n?r.maxNativeZoom:n},_setView:function(n,r,a,c){var f=Math.round(r);this.options.maxZoom!==void 0&&f>this.options.maxZoom||this.options.minZoom!==void 0&&f<this.options.minZoom?f=void 0:f=this._clampZoom(f);var M=this.options.updateWhenZooming&&f!==this._tileZoom;(!c||M)&&(this._tileZoom=f,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),f!==void 0&&this._update(n),a||this._pruneTiles(),this._noPrune=!!a),this._setZoomTransforms(n,r)},_setZoomTransforms:function(n,r){for(var a in this._levels)this._setZoomTransform(this._levels[a],n,r)},_setZoomTransform:function(n,r,a){var c=this._map.getZoomScale(a,n.zoom),f=n.origin.multiplyBy(c).subtract(this._map._getNewPixelOrigin(r,a)).round();Tt.any3d?ri(n.el,f,c):Te(n.el,f)},_resetGrid:function(){var n=this._map,r=n.options.crs,a=this._tileSize=this.getTileSize(),c=this._tileZoom,f=this._map.getPixelWorldBounds(this._tileZoom);f&&(this._globalTileRange=this._pxBoundsToTileRange(f)),this._wrapX=r.wrapLng&&!this.options.noWrap&&[Math.floor(n.project([0,r.wrapLng[0]],c).x/a.x),Math.ceil(n.project([0,r.wrapLng[1]],c).x/a.y)],this._wrapY=r.wrapLat&&!this.options.noWrap&&[Math.floor(n.project([r.wrapLat[0],0],c).y/a.x),Math.ceil(n.project([r.wrapLat[1],0],c).y/a.y)]},_onMoveEnd:function(){!this._map||this._map._animatingZoom||this._update()},_getTiledPixelBounds:function(n){var r=this._map,a=r._animatingZoom?Math.max(r._animateToZoom,r.getZoom()):r.getZoom(),c=r.getZoomScale(a,this._tileZoom),f=r.project(n,this._tileZoom).floor(),M=r.getSize().divideBy(c*2);return new ft(f.subtract(M),f.add(M))},_update:function(n){var r=this._map;if(r){var a=this._clampZoom(r.getZoom());if(n===void 0&&(n=r.getCenter()),this._tileZoom!==void 0){var c=this._getTiledPixelBounds(n),f=this._pxBoundsToTileRange(c),M=f.getCenter(),I=[],H=this.options.keepBuffer,X=new ft(f.getBottomLeft().subtract([H,-H]),f.getTopRight().add([H,-H]));if(!(isFinite(f.min.x)&&isFinite(f.min.y)&&isFinite(f.max.x)&&isFinite(f.max.y)))throw new Error("Attempted to load an infinite number of tiles");for(var rt in this._tiles){var xt=this._tiles[rt].coords;(xt.z!==this._tileZoom||!X.contains(new B(xt.x,xt.y)))&&(this._tiles[rt].current=!1)}if(Math.abs(a-this._tileZoom)>1){this._setView(n,a);return}for(var Bt=f.min.y;Bt<=f.max.y;Bt++)for(var Kt=f.min.x;Kt<=f.max.x;Kt++){var ke=new B(Kt,Bt);if(ke.z=this._tileZoom,!!this._isValidTile(ke)){var Le=this._tiles[this._tileCoordsToKey(ke)];Le?Le.current=!0:I.push(ke)}}if(I.sort(function(We,Ci){return We.distanceTo(M)-Ci.distanceTo(M)}),I.length!==0){this._loading||(this._loading=!0,this.fire("loading"));var nn=document.createDocumentFragment();for(Kt=0;Kt<I.length;Kt++)this._addTile(I[Kt],nn);this._level.el.appendChild(nn)}}}},_isValidTile:function(n){var r=this._map.options.crs;if(!r.infinite){var a=this._globalTileRange;if(!r.wrapLng&&(n.x<a.min.x||n.x>a.max.x)||!r.wrapLat&&(n.y<a.min.y||n.y>a.max.y))return!1}if(!this.options.bounds)return!0;var c=this._tileCoordsToBounds(n);return q(this.options.bounds).overlaps(c)},_keyToBounds:function(n){return this._tileCoordsToBounds(this._keyToTileCoords(n))},_tileCoordsToNwSe:function(n){var r=this._map,a=this.getTileSize(),c=n.scaleBy(a),f=c.add(a),M=r.unproject(c,n.z),I=r.unproject(f,n.z);return[M,I]},_tileCoordsToBounds:function(n){var r=this._tileCoordsToNwSe(n),a=new qt(r[0],r[1]);return this.options.noWrap||(a=this._map.wrapLatLngBounds(a)),a},_tileCoordsToKey:function(n){return n.x+":"+n.y+":"+n.z},_keyToTileCoords:function(n){var r=n.split(":"),a=new B(+r[0],+r[1]);return a.z=+r[2],a},_removeTile:function(n){var r=this._tiles[n];r&&(oe(r.el),delete this._tiles[n],this.fire("tileunload",{tile:r.el,coords:this._keyToTileCoords(n)}))},_initTile:function(n){Ft(n,"leaflet-tile");var r=this.getTileSize();n.style.width=r.x+"px",n.style.height=r.y+"px",n.onselectstart=v,n.onmousemove=v,Tt.ielt9&&this.options.opacity<1&&Ve(n,this.options.opacity)},_addTile:function(n,r){var a=this._getTilePos(n),c=this._tileCoordsToKey(n),f=this.createTile(this._wrapCoords(n),h(this._tileReady,this,n));this._initTile(f),this.createTile.length<2&&G(h(this._tileReady,this,n,null,f)),Te(f,a),this._tiles[c]={el:f,coords:n,current:!0},r.appendChild(f),this.fire("tileloadstart",{tile:f,coords:n})},_tileReady:function(n,r,a){r&&this.fire("tileerror",{error:r,tile:a,coords:n});var c=this._tileCoordsToKey(n);a=this._tiles[c],a&&(a.loaded=+new Date,this._map._fadeAnimated?(Ve(a.el,0),Q(this._fadeFrame),this._fadeFrame=G(this._updateOpacity,this)):(a.active=!0,this._pruneTiles()),r||(Ft(a.el,"leaflet-tile-loaded"),this.fire("tileload",{tile:a.el,coords:n})),this._noTilesToLoad()&&(this._loading=!1,this.fire("load"),Tt.ielt9||!this._map._fadeAnimated?G(this._pruneTiles,this):setTimeout(h(this._pruneTiles,this),250)))},_getTilePos:function(n){return n.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(n){var r=new B(this._wrapX?m(n.x,this._wrapX):n.x,this._wrapY?m(n.y,this._wrapY):n.y);return r.z=n.z,r},_pxBoundsToTileRange:function(n){var r=this.getTileSize();return new ft(n.min.unscaleBy(r).floor(),n.max.unscaleBy(r).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var n in this._tiles)if(!this._tiles[n].loaded)return!1;return!0}});function Vh(n){return new _r(n)}var Pi=_r.extend({options:{minZoom:0,maxZoom:18,subdomains:"abc",errorTileUrl:"",zoomOffset:0,tms:!1,zoomReverse:!1,detectRetina:!1,crossOrigin:!1,referrerPolicy:!1},initialize:function(n,r){this._url=n,r=E(this,r),r.detectRetina&&Tt.retina&&r.maxZoom>0?(r.tileSize=Math.floor(r.tileSize/2),r.zoomReverse?(r.zoomOffset--,r.minZoom=Math.min(r.maxZoom,r.minZoom+1)):(r.zoomOffset++,r.maxZoom=Math.max(r.minZoom,r.maxZoom-1)),r.minZoom=Math.max(0,r.minZoom)):r.zoomReverse?r.minZoom=Math.min(r.maxZoom,r.minZoom):r.maxZoom=Math.max(r.minZoom,r.maxZoom),typeof r.subdomains=="string"&&(r.subdomains=r.subdomains.split("")),this.on("tileunload",this._onTileRemove)},setUrl:function(n,r){return this._url===n&&r===void 0&&(r=!0),this._url=n,r||this.redraw(),this},createTile:function(n,r){var a=document.createElement("img");return Zt(a,"load",h(this._tileOnLoad,this,r,a)),Zt(a,"error",h(this._tileOnError,this,r,a)),(this.options.crossOrigin||this.options.crossOrigin==="")&&(a.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),typeof this.options.referrerPolicy=="string"&&(a.referrerPolicy=this.options.referrerPolicy),a.alt="",a.src=this.getTileUrl(n),a},getTileUrl:function(n){var r={r:Tt.retina?"@2x":"",s:this._getSubdomain(n),x:n.x,y:n.y,z:this._getZoomForUrl()};if(this._map&&!this._map.options.crs.infinite){var a=this._globalTileRange.max.y-n.y;this.options.tms&&(r.y=a),r["-y"]=a}return D(this._url,o(r,this.options))},_tileOnLoad:function(n,r){Tt.ielt9?setTimeout(h(n,this,null,r),0):n(null,r)},_tileOnError:function(n,r,a){var c=this.options.errorTileUrl;c&&r.getAttribute("src")!==c&&(r.src=c),n(a,r)},_onTileRemove:function(n){n.tile.onload=null},_getZoomForUrl:function(){var n=this._tileZoom,r=this.options.maxZoom,a=this.options.zoomReverse,c=this.options.zoomOffset;return a&&(n=r-n),n+c},_getSubdomain:function(n){var r=Math.abs(n.x+n.y)%this.options.subdomains.length;return this.options.subdomains[r]},_abortLoading:function(){var n,r;for(n in this._tiles)if(this._tiles[n].coords.z!==this._tileZoom&&(r=this._tiles[n].el,r.onload=v,r.onerror=v,!r.complete)){r.src=$;var a=this._tiles[n].coords;oe(r),delete this._tiles[n],this.fire("tileabort",{tile:r,coords:a})}},_removeTile:function(n){var r=this._tiles[n];if(r)return r.el.setAttribute("src",$),_r.prototype._removeTile.call(this,n)},_tileReady:function(n,r,a){if(!(!this._map||a&&a.getAttribute("src")===$))return _r.prototype._tileReady.call(this,n,r,a)}});function Da(n,r){return new Pi(n,r)}var Ua=Pi.extend({defaultWmsParams:{service:"WMS",request:"GetMap",layers:"",styles:"",format:"image/jpeg",transparent:!1,version:"1.1.1"},options:{crs:null,uppercase:!1},initialize:function(n,r){this._url=n;var a=o({},this.defaultWmsParams);for(var c in r)c in this.options||(a[c]=r[c]);r=E(this,r);var f=r.detectRetina&&Tt.retina?2:1,M=this.getTileSize();a.width=M.x*f,a.height=M.y*f,this.wmsParams=a},onAdd:function(n){this._crs=this.options.crs||n.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var r=this._wmsVersion>=1.3?"crs":"srs";this.wmsParams[r]=this._crs.code,Pi.prototype.onAdd.call(this,n)},getTileUrl:function(n){var r=this._tileCoordsToNwSe(n),a=this._crs,c=Lt(a.project(r[0]),a.project(r[1])),f=c.min,M=c.max,I=(this._wmsVersion>=1.3&&this._crs===wa?[f.y,f.x,M.y,M.x]:[f.x,f.y,M.x,M.y]).join(","),H=Pi.prototype.getTileUrl.call(this,n);return H+x(this.wmsParams,H,this.options.uppercase)+(this.options.uppercase?"&BBOX=":"&bbox=")+I},setParams:function(n,r){return o(this.wmsParams,n),r||this.redraw(),this}});function Wh(n,r){return new Ua(n,r)}Pi.WMS=Ua,Da.wms=Wh;var Ln=cn.extend({options:{padding:.1},initialize:function(n){E(this,n),d(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),Ft(this._container,"leaflet-zoom-animated")),this.getPane().appendChild(this._container),this._update(),this.on("update",this._updatePaths,this)},onRemove:function(){this.off("update",this._updatePaths,this),this._destroyContainer()},getEvents:function(){var n={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(n.zoomanim=this._onAnimZoom),n},_onAnimZoom:function(n){this._updateTransform(n.center,n.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(n,r){var a=this._map.getZoomScale(r,this._zoom),c=this._map.getSize().multiplyBy(.5+this.options.padding),f=this._map.project(this._center,r),M=c.multiplyBy(-a).add(f).subtract(this._map._getNewPixelOrigin(n,r));Tt.any3d?ri(this._container,M,a):Te(this._container,M)},_reset:function(){this._update(),this._updateTransform(this._center,this._zoom);for(var n in this._layers)this._layers[n]._reset()},_onZoomEnd:function(){for(var n in this._layers)this._layers[n]._project()},_updatePaths:function(){for(var n in this._layers)this._layers[n]._update()},_update:function(){var n=this.options.padding,r=this._map.getSize(),a=this._map.containerPointToLayerPoint(r.multiplyBy(-n)).round();this._bounds=new ft(a,a.add(r.multiplyBy(1+n*2)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),Na=Ln.extend({options:{tolerance:0},getEvents:function(){var n=Ln.prototype.getEvents.call(this);return n.viewprereset=this._onViewPreReset,n},_onViewPreReset:function(){this._postponeUpdatePaths=!0},onAdd:function(){Ln.prototype.onAdd.call(this),this._draw()},_initContainer:function(){var n=this._container=document.createElement("canvas");Zt(n,"mousemove",this._onMouseMove,this),Zt(n,"click dblclick mousedown mouseup contextmenu",this._onClick,this),Zt(n,"mouseout",this._handleMouseOut,this),n._leaflet_disable_events=!0,this._ctx=n.getContext("2d")},_destroyContainer:function(){Q(this._redrawRequest),delete this._ctx,oe(this._container),pe(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){var n;this._redrawBounds=null;for(var r in this._layers)n=this._layers[r],n._update();this._redraw()}},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){Ln.prototype._update.call(this);var n=this._bounds,r=this._container,a=n.getSize(),c=Tt.retina?2:1;Te(r,n.min),r.width=c*a.x,r.height=c*a.y,r.style.width=a.x+"px",r.style.height=a.y+"px",Tt.retina&&this._ctx.scale(2,2),this._ctx.translate(-n.min.x,-n.min.y),this.fire("update")}},_reset:function(){Ln.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(n){this._updateDashArray(n),this._layers[d(n)]=n;var r=n._order={layer:n,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=r),this._drawLast=r,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(n){this._requestRedraw(n)},_removePath:function(n){var r=n._order,a=r.next,c=r.prev;a?a.prev=c:this._drawLast=c,c?c.next=a:this._drawFirst=a,delete n._order,delete this._layers[d(n)],this._requestRedraw(n)},_updatePath:function(n){this._extendRedrawBounds(n),n._project(),n._update(),this._requestRedraw(n)},_updateStyle:function(n){this._updateDashArray(n),this._requestRedraw(n)},_updateDashArray:function(n){if(typeof n.options.dashArray=="string"){var r=n.options.dashArray.split(/[, ]+/),a=[],c,f;for(f=0;f<r.length;f++){if(c=Number(r[f]),isNaN(c))return;a.push(c)}n.options._dashArray=a}else n.options._dashArray=n.options.dashArray},_requestRedraw:function(n){this._map&&(this._extendRedrawBounds(n),this._redrawRequest=this._redrawRequest||G(this._redraw,this))},_extendRedrawBounds:function(n){if(n._pxBounds){var r=(n.options.weight||0)+1;this._redrawBounds=this._redrawBounds||new ft,this._redrawBounds.extend(n._pxBounds.min.subtract([r,r])),this._redrawBounds.extend(n._pxBounds.max.add([r,r]))}},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var n=this._redrawBounds;if(n){var r=n.getSize();this._ctx.clearRect(n.min.x,n.min.y,r.x,r.y)}else this._ctx.save(),this._ctx.setTransform(1,0,0,1,0,0),this._ctx.clearRect(0,0,this._container.width,this._container.height),this._ctx.restore()},_draw:function(){var n,r=this._redrawBounds;if(this._ctx.save(),r){var a=r.getSize();this._ctx.beginPath(),this._ctx.rect(r.min.x,r.min.y,a.x,a.y),this._ctx.clip()}this._drawing=!0;for(var c=this._drawFirst;c;c=c.next)n=c.layer,(!r||n._pxBounds&&n._pxBounds.intersects(r))&&n._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(n,r){if(this._drawing){var a,c,f,M,I=n._parts,H=I.length,X=this._ctx;if(H){for(X.beginPath(),a=0;a<H;a++){for(c=0,f=I[a].length;c<f;c++)M=I[a][c],X[c?"lineTo":"moveTo"](M.x,M.y);r&&X.closePath()}this._fillStroke(X,n)}}},_updateCircle:function(n){if(!(!this._drawing||n._empty())){var r=n._point,a=this._ctx,c=Math.max(Math.round(n._radius),1),f=(Math.max(Math.round(n._radiusY),1)||c)/c;f!==1&&(a.save(),a.scale(1,f)),a.beginPath(),a.arc(r.x,r.y/f,c,0,Math.PI*2,!1),f!==1&&a.restore(),this._fillStroke(a,n)}},_fillStroke:function(n,r){var a=r.options;a.fill&&(n.globalAlpha=a.fillOpacity,n.fillStyle=a.fillColor||a.color,n.fill(a.fillRule||"evenodd")),a.stroke&&a.weight!==0&&(n.setLineDash&&n.setLineDash(r.options&&r.options._dashArray||[]),n.globalAlpha=a.opacity,n.lineWidth=a.weight,n.strokeStyle=a.color,n.lineCap=a.lineCap,n.lineJoin=a.lineJoin,n.stroke())},_onClick:function(n){for(var r=this._map.mouseEventToLayerPoint(n),a,c,f=this._drawFirst;f;f=f.next)a=f.layer,a.options.interactive&&a._containsPoint(r)&&(!(n.type==="click"||n.type==="preclick")||!this._map._draggableMoved(a))&&(c=a);this._fireEvent(c?[c]:!1,n)},_onMouseMove:function(n){if(!(!this._map||this._map.dragging.moving()||this._map._animatingZoom)){var r=this._map.mouseEventToLayerPoint(n);this._handleMouseHover(n,r)}},_handleMouseOut:function(n){var r=this._hoveredLayer;r&&(_e(this._container,"leaflet-interactive"),this._fireEvent([r],n,"mouseout"),this._hoveredLayer=null,this._mouseHoverThrottled=!1)},_handleMouseHover:function(n,r){if(!this._mouseHoverThrottled){for(var a,c,f=this._drawFirst;f;f=f.next)a=f.layer,a.options.interactive&&a._containsPoint(r)&&(c=a);c!==this._hoveredLayer&&(this._handleMouseOut(n),c&&(Ft(this._container,"leaflet-interactive"),this._fireEvent([c],n,"mouseover"),this._hoveredLayer=c)),this._fireEvent(this._hoveredLayer?[this._hoveredLayer]:!1,n),this._mouseHoverThrottled=!0,setTimeout(h(function(){this._mouseHoverThrottled=!1},this),32)}},_fireEvent:function(n,r,a){this._map._fireDOMEvent(r,a||r.type,n)},_bringToFront:function(n){var r=n._order;if(r){var a=r.next,c=r.prev;if(a)a.prev=c;else return;c?c.next=a:a&&(this._drawFirst=a),r.prev=this._drawLast,this._drawLast.next=r,r.next=null,this._drawLast=r,this._requestRedraw(n)}},_bringToBack:function(n){var r=n._order;if(r){var a=r.next,c=r.prev;if(c)c.next=a;else return;a?a.prev=c:c&&(this._drawLast=c),r.prev=null,r.next=this._drawFirst,this._drawFirst.prev=r,this._drawFirst=r,this._requestRedraw(n)}}});function Oa(n){return Tt.canvas?new Na(n):null}var gr=function(){try{return document.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(n){return document.createElement("<lvml:"+n+' class="lvml">')}}catch{}return function(n){return document.createElement("<"+n+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}}(),Xh={_initContainer:function(){this._container=wt("div","leaflet-vml-container")},_update:function(){this._map._animatingZoom||(Ln.prototype._update.call(this),this.fire("update"))},_initPath:function(n){var r=n._container=gr("shape");Ft(r,"leaflet-vml-shape "+(this.options.className||"")),r.coordsize="1 1",n._path=gr("path"),r.appendChild(n._path),this._updateStyle(n),this._layers[d(n)]=n},_addPath:function(n){var r=n._container;this._container.appendChild(r),n.options.interactive&&n.addInteractiveTarget(r)},_removePath:function(n){var r=n._container;oe(r),n.removeInteractiveTarget(r),delete this._layers[d(n)]},_updateStyle:function(n){var r=n._stroke,a=n._fill,c=n.options,f=n._container;f.stroked=!!c.stroke,f.filled=!!c.fill,c.stroke?(r||(r=n._stroke=gr("stroke")),f.appendChild(r),r.weight=c.weight+"px",r.color=c.color,r.opacity=c.opacity,c.dashArray?r.dashStyle=A(c.dashArray)?c.dashArray.join(" "):c.dashArray.replace(/( *, *)/g," "):r.dashStyle="",r.endcap=c.lineCap.replace("butt","flat"),r.joinstyle=c.lineJoin):r&&(f.removeChild(r),n._stroke=null),c.fill?(a||(a=n._fill=gr("fill")),f.appendChild(a),a.color=c.fillColor||c.color,a.opacity=c.fillOpacity):a&&(f.removeChild(a),n._fill=null)},_updateCircle:function(n){var r=n._point.round(),a=Math.round(n._radius),c=Math.round(n._radiusY||a);this._setPath(n,n._empty()?"M0 0":"AL "+r.x+","+r.y+" "+a+","+c+" 0,"+65535*360)},_setPath:function(n,r){n._path.v=r},_bringToFront:function(n){tn(n._container)},_bringToBack:function(n){mn(n._container)}},Kr=Tt.vml?gr:zt,vr=Ln.extend({_initContainer:function(){this._container=Kr("svg"),this._container.setAttribute("pointer-events","none"),this._rootGroup=Kr("g"),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){oe(this._container),pe(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){Ln.prototype._update.call(this);var n=this._bounds,r=n.getSize(),a=this._container;(!this._svgSize||!this._svgSize.equals(r))&&(this._svgSize=r,a.setAttribute("width",r.x),a.setAttribute("height",r.y)),Te(a,n.min),a.setAttribute("viewBox",[n.min.x,n.min.y,r.x,r.y].join(" ")),this.fire("update")}},_initPath:function(n){var r=n._path=Kr("path");n.options.className&&Ft(r,n.options.className),n.options.interactive&&Ft(r,"leaflet-interactive"),this._updateStyle(n),this._layers[d(n)]=n},_addPath:function(n){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(n._path),n.addInteractiveTarget(n._path)},_removePath:function(n){oe(n._path),n.removeInteractiveTarget(n._path),delete this._layers[d(n)]},_updatePath:function(n){n._project(),n._update()},_updateStyle:function(n){var r=n._path,a=n.options;r&&(a.stroke?(r.setAttribute("stroke",a.color),r.setAttribute("stroke-opacity",a.opacity),r.setAttribute("stroke-width",a.weight),r.setAttribute("stroke-linecap",a.lineCap),r.setAttribute("stroke-linejoin",a.lineJoin),a.dashArray?r.setAttribute("stroke-dasharray",a.dashArray):r.removeAttribute("stroke-dasharray"),a.dashOffset?r.setAttribute("stroke-dashoffset",a.dashOffset):r.removeAttribute("stroke-dashoffset")):r.setAttribute("stroke","none"),a.fill?(r.setAttribute("fill",a.fillColor||a.color),r.setAttribute("fill-opacity",a.fillOpacity),r.setAttribute("fill-rule",a.fillRule||"evenodd")):r.setAttribute("fill","none"))},_updatePoly:function(n,r){this._setPath(n,ae(n._parts,r))},_updateCircle:function(n){var r=n._point,a=Math.max(Math.round(n._radius),1),c=Math.max(Math.round(n._radiusY),1)||a,f="a"+a+","+c+" 0 1,0 ",M=n._empty()?"M0 0":"M"+(r.x-a)+","+r.y+f+a*2+",0 "+f+-a*2+",0 ";this._setPath(n,M)},_setPath:function(n,r){n._path.setAttribute("d",r)},_bringToFront:function(n){tn(n._path)},_bringToBack:function(n){mn(n._path)}});Tt.vml&&vr.include(Xh);function Fa(n){return Tt.svg||Tt.vml?new vr(n):null}ie.include({getRenderer:function(n){var r=n.options.renderer||this._getPaneRenderer(n.options.pane)||this.options.renderer||this._renderer;return r||(r=this._renderer=this._createRenderer()),this.hasLayer(r)||this.addLayer(r),r},_getPaneRenderer:function(n){if(n==="overlayPane"||n===void 0)return!1;var r=this._paneRenderers[n];return r===void 0&&(r=this._createRenderer({pane:n}),this._paneRenderers[n]=r),r},_createRenderer:function(n){return this.options.preferCanvas&&Oa(n)||Fa(n)}});var Ba=wi.extend({initialize:function(n,r){wi.prototype.initialize.call(this,this._boundsToLatLngs(n),r)},setBounds:function(n){return this.setLatLngs(this._boundsToLatLngs(n))},_boundsToLatLngs:function(n){return n=q(n),[n.getSouthWest(),n.getNorthWest(),n.getNorthEast(),n.getSouthEast()]}});function Zh(n,r){return new Ba(n,r)}vr.create=Kr,vr.pointsToPath=ae,Cn.geometryToLayer=Wr,Cn.coordsToLatLng=eo,Cn.coordsToLatLngs=Xr,Cn.latLngToCoords=no,Cn.latLngsToCoords=Zr,Cn.getFeature=Ai,Cn.asFeature=qr,ie.mergeOptions({boxZoom:!0});var za=gn.extend({initialize:function(n){this._map=n,this._container=n._container,this._pane=n._panes.overlayPane,this._resetStateTimeout=0,n.on("unload",this._destroy,this)},addHooks:function(){Zt(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){pe(this._container,"mousedown",this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){oe(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){this._resetStateTimeout!==0&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(n){if(!n.shiftKey||n.which!==1&&n.button!==1)return!1;this._clearDeferredResetState(),this._resetState(),cr(),Bs(),this._startPoint=this._map.mouseEventToContainerPoint(n),Zt(document,{contextmenu:ai,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseMove:function(n){this._moved||(this._moved=!0,this._box=wt("div","leaflet-zoom-box",this._container),Ft(this._container,"leaflet-crosshair"),this._map.fire("boxzoomstart")),this._point=this._map.mouseEventToContainerPoint(n);var r=new ft(this._point,this._startPoint),a=r.getSize();Te(this._box,r.min),this._box.style.width=a.x+"px",this._box.style.height=a.y+"px"},_finish:function(){this._moved&&(oe(this._box),_e(this._container,"leaflet-crosshair")),hr(),zs(),pe(document,{contextmenu:ai,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(n){if(!(n.which!==1&&n.button!==1)&&(this._finish(),!!this._moved)){this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(h(this._resetState,this),0);var r=new qt(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));this._map.fitBounds(r).fire("boxzoomend",{boxZoomBounds:r})}},_onKeyDown:function(n){n.keyCode===27&&(this._finish(),this._clearDeferredResetState(),this._resetState())}});ie.addInitHook("addHandler","boxZoom",za),ie.mergeOptions({doubleClickZoom:!0});var ka=gn.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(n){var r=this._map,a=r.getZoom(),c=r.options.zoomDelta,f=n.originalEvent.shiftKey?a-c:a+c;r.options.doubleClickZoom==="center"?r.setZoom(f):r.setZoomAround(n.containerPoint,f)}});ie.addInitHook("addHandler","doubleClickZoom",ka),ie.mergeOptions({dragging:!0,inertia:!0,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,easeLinearity:.2,worldCopyJump:!1,maxBoundsViscosity:0});var Ha=gn.extend({addHooks:function(){if(!this._draggable){var n=this._map;this._draggable=new kn(n._mapPane,n._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on("predrag",this._onPreDragLimit,this),n.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDragWrap,this),n.on("zoomend",this._onZoomEnd,this),n.whenReady(this._onZoomEnd,this))}Ft(this._map._container,"leaflet-grab leaflet-touch-drag"),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){_e(this._map._container,"leaflet-grab"),_e(this._map._container,"leaflet-touch-drag"),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var n=this._map;if(n._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity){var r=q(this._map.options.maxBounds);this._offsetLimit=Lt(this._map.latLngToContainerPoint(r.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(r.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))}else this._offsetLimit=null;n.fire("movestart").fire("dragstart"),n.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(n){if(this._map.options.inertia){var r=this._lastTime=+new Date,a=this._lastPos=this._draggable._absPos||this._draggable._newPos;this._positions.push(a),this._times.push(r),this._prunePositions(r)}this._map.fire("move",n).fire("drag",n)},_prunePositions:function(n){for(;this._positions.length>1&&n-this._times[0]>50;)this._positions.shift(),this._times.shift()},_onZoomEnd:function(){var n=this._map.getSize().divideBy(2),r=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=r.subtract(n).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(n,r){return n-(n-r)*this._viscosity},_onPreDragLimit:function(){if(!(!this._viscosity||!this._offsetLimit)){var n=this._draggable._newPos.subtract(this._draggable._startPos),r=this._offsetLimit;n.x<r.min.x&&(n.x=this._viscousLimit(n.x,r.min.x)),n.y<r.min.y&&(n.y=this._viscousLimit(n.y,r.min.y)),n.x>r.max.x&&(n.x=this._viscousLimit(n.x,r.max.x)),n.y>r.max.y&&(n.y=this._viscousLimit(n.y,r.max.y)),this._draggable._newPos=this._draggable._startPos.add(n)}},_onPreDragWrap:function(){var n=this._worldWidth,r=Math.round(n/2),a=this._initialWorldOffset,c=this._draggable._newPos.x,f=(c-r+a)%n+r-a,M=(c+r+a)%n-r-a,I=Math.abs(f+a)<Math.abs(M+a)?f:M;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=I},_onDragEnd:function(n){var r=this._map,a=r.options,c=!a.inertia||n.noInertia||this._times.length<2;if(r.fire("dragend",n),c)r.fire("moveend");else{this._prunePositions(+new Date);var f=this._lastPos.subtract(this._positions[0]),M=(this._lastTime-this._times[0])/1e3,I=a.easeLinearity,H=f.multiplyBy(I/M),X=H.distanceTo([0,0]),rt=Math.min(a.inertiaMaxSpeed,X),xt=H.multiplyBy(rt/X),Bt=rt/(a.inertiaDeceleration*I),Kt=xt.multiplyBy(-Bt/2).round();!Kt.x&&!Kt.y?r.fire("moveend"):(Kt=r._limitOffset(Kt,r.options.maxBounds),G(function(){r.panBy(Kt,{duration:Bt,easeLinearity:I,noMoveStart:!0,animate:!0})}))}}});ie.addInitHook("addHandler","dragging",Ha),ie.mergeOptions({keyboard:!0,keyboardPanDelta:80});var Ga=gn.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(n){this._map=n,this._setPanDelta(n.options.keyboardPanDelta),this._setZoomDelta(n.options.zoomDelta)},addHooks:function(){var n=this._map._container;n.tabIndex<=0&&(n.tabIndex="0"),Zt(n,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),pe(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){if(!this._focused){var n=document.body,r=document.documentElement,a=n.scrollTop||r.scrollTop,c=n.scrollLeft||r.scrollLeft;this._map._container.focus(),window.scrollTo(c,a)}},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanDelta:function(n){var r=this._panKeys={},a=this.keyCodes,c,f;for(c=0,f=a.left.length;c<f;c++)r[a.left[c]]=[-1*n,0];for(c=0,f=a.right.length;c<f;c++)r[a.right[c]]=[n,0];for(c=0,f=a.down.length;c<f;c++)r[a.down[c]]=[0,n];for(c=0,f=a.up.length;c<f;c++)r[a.up[c]]=[0,-1*n]},_setZoomDelta:function(n){var r=this._zoomKeys={},a=this.keyCodes,c,f;for(c=0,f=a.zoomIn.length;c<f;c++)r[a.zoomIn[c]]=n;for(c=0,f=a.zoomOut.length;c<f;c++)r[a.zoomOut[c]]=-n},_addHooks:function(){Zt(document,"keydown",this._onKeyDown,this)},_removeHooks:function(){pe(document,"keydown",this._onKeyDown,this)},_onKeyDown:function(n){if(!(n.altKey||n.ctrlKey||n.metaKey)){var r=n.keyCode,a=this._map,c;if(r in this._panKeys){if(!a._panAnim||!a._panAnim._inProgress)if(c=this._panKeys[r],n.shiftKey&&(c=J(c).multiplyBy(3)),a.options.maxBounds&&(c=a._limitOffset(J(c),a.options.maxBounds)),a.options.worldCopyJump){var f=a.wrapLatLng(a.unproject(a.project(a.getCenter()).add(c)));a.panTo(f)}else a.panBy(c)}else if(r in this._zoomKeys)a.setZoom(a.getZoom()+(n.shiftKey?3:1)*this._zoomKeys[r]);else if(r===27&&a._popup&&a._popup.options.closeOnEscapeKey)a.closePopup();else return;ai(n)}}});ie.addInitHook("addHandler","keyboard",Ga),ie.mergeOptions({scrollWheelZoom:!0,wheelDebounceTime:40,wheelPxPerZoomLevel:60});var Va=gn.extend({addHooks:function(){Zt(this._map._container,"wheel",this._onWheelScroll,this),this._delta=0},removeHooks:function(){pe(this._map._container,"wheel",this._onWheelScroll,this)},_onWheelScroll:function(n){var r=fa(n),a=this._map.options.wheelDebounceTime;this._delta+=r,this._lastMousePos=this._map.mouseEventToContainerPoint(n),this._startTime||(this._startTime=+new Date);var c=Math.max(a-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(h(this._performZoom,this),c),ai(n)},_performZoom:function(){var n=this._map,r=n.getZoom(),a=this._map.options.zoomSnap||0;n._stop();var c=this._delta/(this._map.options.wheelPxPerZoomLevel*4),f=4*Math.log(2/(1+Math.exp(-Math.abs(c))))/Math.LN2,M=a?Math.ceil(f/a)*a:f,I=n._limitZoom(r+(this._delta>0?M:-M))-r;this._delta=0,this._startTime=null,I&&(n.options.scrollWheelZoom==="center"?n.setZoom(r+I):n.setZoomAround(this._lastMousePos,r+I))}});ie.addInitHook("addHandler","scrollWheelZoom",Va);var qh=600;ie.mergeOptions({tapHold:Tt.touchNative&&Tt.safari&&Tt.mobile,tapTolerance:15});var Wa=gn.extend({addHooks:function(){Zt(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){pe(this._map._container,"touchstart",this._onDown,this)},_onDown:function(n){if(clearTimeout(this._holdTimeout),n.touches.length===1){var r=n.touches[0];this._startPos=this._newPos=new B(r.clientX,r.clientY),this._holdTimeout=setTimeout(h(function(){this._cancel(),this._isTapValid()&&(Zt(document,"touchend",De),Zt(document,"touchend touchcancel",this._cancelClickPrevent),this._simulateEvent("contextmenu",r))},this),qh),Zt(document,"touchend touchcancel contextmenu",this._cancel,this),Zt(document,"touchmove",this._onMove,this)}},_cancelClickPrevent:function n(){pe(document,"touchend",De),pe(document,"touchend touchcancel",n)},_cancel:function(){clearTimeout(this._holdTimeout),pe(document,"touchend touchcancel contextmenu",this._cancel,this),pe(document,"touchmove",this._onMove,this)},_onMove:function(n){var r=n.touches[0];this._newPos=new B(r.clientX,r.clientY)},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_simulateEvent:function(n,r){var a=new MouseEvent(n,{bubbles:!0,cancelable:!0,view:window,screenX:r.screenX,screenY:r.screenY,clientX:r.clientX,clientY:r.clientY});a._simulated=!0,r.target.dispatchEvent(a)}});ie.addInitHook("addHandler","tapHold",Wa),ie.mergeOptions({touchZoom:Tt.touch,bounceAtZoomLimits:!0});var Xa=gn.extend({addHooks:function(){Ft(this._map._container,"leaflet-touch-zoom"),Zt(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){_e(this._map._container,"leaflet-touch-zoom"),pe(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(n){var r=this._map;if(!(!n.touches||n.touches.length!==2||r._animatingZoom||this._zooming)){var a=r.mouseEventToContainerPoint(n.touches[0]),c=r.mouseEventToContainerPoint(n.touches[1]);this._centerPoint=r.getSize()._divideBy(2),this._startLatLng=r.containerPointToLatLng(this._centerPoint),r.options.touchZoom!=="center"&&(this._pinchStartLatLng=r.containerPointToLatLng(a.add(c)._divideBy(2))),this._startDist=a.distanceTo(c),this._startZoom=r.getZoom(),this._moved=!1,this._zooming=!0,r._stop(),Zt(document,"touchmove",this._onTouchMove,this),Zt(document,"touchend touchcancel",this._onTouchEnd,this),De(n)}},_onTouchMove:function(n){if(!(!n.touches||n.touches.length!==2||!this._zooming)){var r=this._map,a=r.mouseEventToContainerPoint(n.touches[0]),c=r.mouseEventToContainerPoint(n.touches[1]),f=a.distanceTo(c)/this._startDist;if(this._zoom=r.getScaleZoom(f,this._startZoom),!r.options.bounceAtZoomLimits&&(this._zoom<r.getMinZoom()&&f<1||this._zoom>r.getMaxZoom()&&f>1)&&(this._zoom=r._limitZoom(this._zoom)),r.options.touchZoom==="center"){if(this._center=this._startLatLng,f===1)return}else{var M=a._add(c)._divideBy(2)._subtract(this._centerPoint);if(f===1&&M.x===0&&M.y===0)return;this._center=r.unproject(r.project(this._pinchStartLatLng,this._zoom).subtract(M),this._zoom)}this._moved||(r._moveStart(!0,!1),this._moved=!0),Q(this._animRequest);var I=h(r._move,r,this._center,this._zoom,{pinch:!0,round:!1},void 0);this._animRequest=G(I,this,!0),De(n)}},_onTouchEnd:function(){if(!this._moved||!this._zooming){this._zooming=!1;return}this._zooming=!1,Q(this._animRequest),pe(document,"touchmove",this._onTouchMove,this),pe(document,"touchend touchcancel",this._onTouchEnd,this),this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom))}});ie.addInitHook("addHandler","touchZoom",Xa),ie.BoxZoom=za,ie.DoubleClickZoom=ka,ie.Drag=Ha,ie.Keyboard=Ga,ie.ScrollWheelZoom=Va,ie.TapHold=Wa,ie.TouchZoom=Xa,e.Bounds=ft,e.Browser=Tt,e.CRS=pt,e.Canvas=Na,e.Circle=to,e.CircleMarker=Vr,e.Class=tt,e.Control=ln,e.DivIcon=Ia,e.DivOverlay=vn,e.DomEvent=uh,e.DomUtil=ch,e.Draggable=kn,e.Evented=ct,e.FeatureGroup=An,e.GeoJSON=Cn,e.GridLayer=_r,e.Handler=gn,e.Icon=bi,e.ImageOverlay=Yr,e.LatLng=nt,e.LatLngBounds=qt,e.Layer=cn,e.LayerGroup=Ti,e.LineUtil=Th,e.Map=ie,e.Marker=Gr,e.Mixin=vh,e.Path=Hn,e.Point=B,e.PolyUtil=xh,e.Polygon=wi,e.Polyline=Pn,e.Popup=$r,e.PosAnimation=pa,e.Projection=bh,e.Rectangle=Ba,e.Renderer=Ln,e.SVG=vr,e.SVGOverlay=Ra,e.TileLayer=Pi,e.Tooltip=jr,e.Transformation=V,e.Util=F,e.VideoOverlay=La,e.bind=h,e.bounds=Lt,e.canvas=Oa,e.circle=Dh,e.circleMarker=Ih,e.control=fr,e.divIcon=Gh,e.extend=o,e.featureGroup=Ch,e.geoJSON=Ca,e.geoJson=Oh,e.gridLayer=Vh,e.icon=Lh,e.imageOverlay=Fh,e.latLng=lt,e.latLngBounds=q,e.layerGroup=Ph,e.map=dh,e.marker=Rh,e.point=J,e.polygon=Nh,e.polyline=Uh,e.popup=kh,e.rectangle=Zh,e.setOptions=E,e.stamp=d,e.svg=Fa,e.svgOverlay=zh,e.tileLayer=Da,e.tooltip=Hh,e.transformation=Xt,e.version=i,e.videoOverlay=Bh;var Yh=window.L;e.noConflict=function(){return window.L=Yh,this},window.L=e})})(ta,ta.exports);var Bg=ta.exports;const $i=Fg(Bg),wc={flat:["135deg, #0c1520 0%, #142030 50%, #080f18 100%","#a8c4d8"],house:["135deg, #0e1828 0%, #182840 50%, #08101c 100%","#c8d8e8"],pg:["135deg, #101820 0%, #182030 50%, #0a1018 100%","#7898b0"],studio:["135deg, #0a1420 0%, #101c2c 50%, #080e18 100%","#d8eaf8"]};class zg{constructor(t,e,i=0){this.property=t,this.budget=e,this.index=i,this.onClick=null,this.element=this.build()}build(){var b;const t=this.property,e=typeof t.price=="number"&&!isNaN(t.price)?t.price:0,i=lh(e,this.budget),o=t.type||"flat",[l,h]=wc[o]||wc.flat,u=t.source||"curated",d=u==="google_places"?"google":u==="web_search"?"serp":"mock",p=u==="google_places"?"Google":u==="web_search"?"Web":"Curated",m=(t.name||"Property").replace(/[\u{1D400}-\u{1D7FF}]/gu,"").replace(/[^\x00-\x7F\u00C0-\u024F\u0900-\u097F₹]/g,"").replace(/\s+/g," ").trim().slice(0,48)||"Rental Property",v=t.address?t.address.replace(/https?:\/\/[^\s]+/g,"").trim().slice(0,60):"Location available on request",g=document.createElement("div");g.className="property-card",g.dataset.id=t.id,g.style.animationDelay=`${this.index*55}ms`;const y=`<svg class="placeholder-icon-svg" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M32 8 C18 20 14 38 32 56 C50 38 46 20 32 8Z" fill="${h}" opacity="0.6"/>
      <path d="M32 8 C32 8 32 56 32 56" stroke="${h}" stroke-width="1.5" opacity="0.4"/>
      <path d="M32 20 C24 24 22 34 32 40" stroke="${h}" stroke-width="1" opacity="0.3" stroke-linecap="round"/>
      <path d="M32 28 C40 32 42 42 32 48" stroke="${h}" stroke-width="1" opacity="0.3" stroke-linecap="round"/>
    </svg>`;return g.innerHTML=`
      ${t.photo?`<img class="card-image" src="${t.photo}" alt="${m}" loading="lazy"
             onerror="this.style.display='none';this.nextElementSibling.style.display='flex';" />
           <div class="card-image-placeholder" style="display:none;background:linear-gradient(${l});">
             <div class="card-placeholder-inner" style="--accent:${h};">
               ${y}
             </div>
           </div>`:`<div class="card-image-placeholder" style="background:linear-gradient(${l});">
             <div class="card-placeholder-inner" style="--accent:${h};">
               ${y}
               <span class="placeholder-type">${t.bhk||2} BHK ${o}</span>
               ${t.area?`<span class="placeholder-area">${t.area} sq ft</span>`:""}
             </div>
           </div>`}

      <div class="card-body">
        <div class="card-header">
          <div class="card-title">${m}</div>
          <div class="price-badge ${i}">
            ${e>0?`₹${e.toLocaleString("en-IN")}/mo`:"—"}
          </div>
        </div>

        <div class="card-address">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
          </svg>
          ${v}${t.distance?` · ${t.distance} km`:""}
        </div>

        <div class="card-meta">
          <span class="meta-tag">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9,22 9,12 15,12 15,22"/></svg>
            ${t.bhk||2} BHK ${o}
          </span>
          ${t.area?`<span class="meta-tag">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/></svg>
            ${t.area} sq ft</span>`:""}
          ${t.floor?`<span class="meta-tag">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>
            Floor ${t.floor}</span>`:""}
          ${t.rating?`<span class="meta-tag">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="${h}" stroke="${h}" stroke-width="1.5"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/></svg>
            ${t.rating}</span>`:""}
        </div>

        ${(b=t.amenities)!=null&&b.length?`
          <div class="card-amenities">
            ${t.amenities.slice(0,4).map(E=>`<span class="amenity-tag">${E}</span>`).join("")}
            ${t.amenities.length>4?`<span class="amenity-tag" style="color:var(--text-muted);background:transparent;">+${t.amenities.length-4}</span>`:""}
          </div>
        `:""}

        <div class="card-footer">
          <button class="btn btn-primary card-map-btn" style="font-size:0.72rem;padding:6px 12px;flex:1;">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
            View on Map
          </button>
          ${t.url?`
            <a href="${t.url}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary" style="font-size:0.72rem;padding:6px 10px;" title="Open original listing" onclick="event.stopPropagation()">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </a>
          `:""}
          ${t.contactPhone?`
            <a href="tel:${t.contactPhone}" class="btn btn-secondary" style="font-size:0.72rem;padding:6px 12px;gap:5px;" title="Call ${t.contactName||"owner"}" onclick="event.stopPropagation()">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.06 6.06l1.97-1.97a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              ${t.contactName?`<span style="max-width:60px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${t.contactName.split(" ")[0]}</span>`:"Call"}
            </a>
          `:""}
          <span class="source-badge ${d}">${p}</span>
        </div>

        ${t.deposit?`
          <div class="card-deposit">
            Deposit: <strong>₹${t.deposit.toLocaleString("en-IN")}</strong>
            &nbsp;·&nbsp;
            <span style="color:${t.available?"var(--green)":"var(--red)"};">
              ${t.available?'<svg style="display:inline;vertical-align:-2px;" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Available':'<svg style="display:inline;vertical-align:-2px;" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg> Not Available'}
            </span>
          </div>
        `:""}
      </div>
    `,g.addEventListener("click",()=>{var E;return(E=this.onClick)==null?void 0:E.call(this,this.property)}),g}}class kg{constructor(t,e,i){this.insights=t,this.budget=e,this.location=i,this.element=this.build(),this.fetchAIAdvice()}build(){var h;const t=this.insights,e=Math.min(100,t.budgetPercentile||50),i=t.marketTrend==="rising"?'<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>':'<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>',o=t.marketTrend==="rising"?"var(--amber)":"var(--green)",l=document.createElement("div");return l.className="insights-panel",l.innerHTML=`
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;">
        <div style="font-family:var(--font-body);font-size:0.85rem;font-weight:700;color:var(--text-primary);display:flex;align-items:center;gap:6px;">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
          Market Insights — ${((h=this.location)==null?void 0:h.split(",")[0])||"This Area"}
        </div>
        <div style="font-size:0.72rem;color:${o};background:rgba(212,160,74,0.1);padding:3px 10px;border-radius:4px;font-weight:600;display:flex;align-items:center;gap:4px;">
          ${i} ${t.marketTrend==="rising"?`+${t.trendPercent}% MoM`:"Stable"}
        </div>
      </div>

      <div class="insights-grid">
        <div class="insight-stat">
          <span class="value">${Sn(t.avgPrice)}</span>
          <span class="label">Avg Rent</span>
        </div>
        <div class="insight-stat">
          <span class="value">${Sn(t.minPrice)}</span>
          <span class="label">Cheapest</span>
        </div>
        <div class="insight-stat">
          <span class="value" style="color:var(--green);">${t.inBudgetCount}</span>
          <span class="label">In Budget</span>
        </div>
        <div class="insight-stat">
          <span class="value">${t.totalCount}</span>
          <span class="label">Total Found</span>
        </div>
      </div>

      <div style="margin-bottom:8px;">
        <div style="display:flex;justify-content:space-between;font-size:0.7rem;color:var(--text-muted);margin-bottom:4px;">
          <span>Your budget: ${Sn(this.budget)}</span>
          <span>Beats <strong style="color:var(--accent);">${e}%</strong> of listings</span>
        </div>
        <div class="budget-bar-wrapper">
          <div class="budget-bar-fill" style="width:${e}%;"></div>
        </div>
        <div style="display:flex;justify-content:space-between;font-size:0.65rem;color:var(--text-muted);margin-top:2px;">
          <span>${Sn(t.minPrice)}</span>
          <span>${Sn(t.maxPrice)}</span>
        </div>
      </div>

      <div style="font-size:0.74rem;color:var(--text-secondary);padding:8px 12px;background:rgba(168,196,216,0.04);border-radius:6px;border-left:2px solid rgba(168,196,216,0.35);margin-bottom:8px;display:flex;align-items:flex-start;gap:6px;">
        <svg style="flex-shrink:0;margin-top:1px;" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
        <span>${t.recommendation}</span>
      </div>

      <!-- AI Advice block -->
      <div id="ai-advice-block" style="
        display:flex;align-items:flex-start;gap:10px;
        padding:10px 12px;
        background:rgba(168,196,216,0.04);
        border:1px solid rgba(168,196,216,0.14);
        border-radius:8px;
        min-height:44px;
      ">
        <svg style="flex-shrink:0;margin-top:2px;" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--sage)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2"/><path d="M12 8v4l3 3"/></svg>
        <div id="ai-advice-text" style="font-size:0.78rem;color:var(--text-secondary);line-height:1.55;">
          <span style="color:var(--text-muted);font-style:italic;animation:pulse 1.5s ease infinite;">
            Gemini is analysing the market...
          </span>
        </div>
      </div>
    `,l}async fetchAIAdvice(){var e;const t=(e=this.element)==null?void 0:e.querySelector("#ai-advice-text");if(t)try{const i=new URLSearchParams({location:this.location,budget:String(this.budget)}),l=await(await fetch(`/api/ai-advice?${i}`)).json();if(l.error||!l.advice&&!l.tip){t.innerHTML='<span style="color:var(--text-muted);font-size:0.72rem;">AI insights unavailable — add GEMINI_API_KEY to .env</span>';return}t.innerHTML=`
        <div style="color:var(--text-primary);margin-bottom:${l.tip?"6px":"0"};">${l.advice}</div>
        ${l.tip?`
          <div style="font-size:0.72rem;color:var(--earth);display:flex;align-items:flex-start;gap:4px;margin-top:4px;">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="var(--earth)" stroke="none"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/></svg>
            <span>${l.tip}</span>
          </div>
        `:""}
      `}catch{t.innerHTML='<span style="color:var(--text-muted);font-size:0.72rem;">AI insights unavailable</span>'}}}delete $i.Icon.Default.prototype._getIconUrl;$i.Icon.Default.mergeOptions({iconRetinaUrl:"https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",iconUrl:"https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",shadowUrl:"https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png"});class Hg{constructor(t,e,i={}){this.container=t,this.navigate=e,this.params=i,this.properties=[],this.selectedId=null,this.map=null,this.markers=[],this.render(),this.loadData()}render(){this.container.innerHTML=`
      <div class="map-view">
        <!-- LEFT SIDEBAR -->
        <div class="sidebar">
          <div class="sidebar-header">
            <button class="btn btn-ghost" id="back-btn" style="padding:6px 12px;" title="Back to search">
              ← Back
            </button>
            <div class="sidebar-logo">RentRadar</div>
          </div>

          <!-- Search bar -->
          <div class="search-bar">
            <div class="search-input-wrap">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
              </svg>
              <input
                id="location-input"
                class="input-field"
                type="text"
                placeholder="Search location..."
                value="${this.params.location||""}"
              />
            </div>
            <button class="btn btn-primary" id="re-search-btn" style="padding:10px 16px;font-size:0.82rem;">Go</button>
          </div>

          <!-- Filters -->
          <div style="padding:12px 16px;border-bottom:1px solid var(--border);flex-shrink:0;">
            <div style="display:flex;gap:8px;align-items:center;margin-bottom:10px;">
              <span style="font-size:0.72rem;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.06em;white-space:nowrap;">Budget max:</span>
              <input type="range" class="slider" id="budget-filter"
                min="5000" max="150000" step="1000"
                value="${this.params.budget||2e4}" style="flex:1;"/>
              <span id="budget-filter-label" style="font-size:0.78rem;color:var(--accent);font-weight:700;white-space:nowrap;font-family:var(--font-display);">
                ${Sn(this.params.budget||2e4)}
              </span>
            </div>
            <div class="chip-group" id="type-filter" style="gap:6px;">
              <button class="chip ${!this.params.type||this.params.type==="all"?"active":""}" data-value="all" style="padding:4px 10px;font-size:0.72rem;">All</button>
              <button class="chip ${this.params.type==="flat"?"active":""}" data-value="flat"   style="padding:4px 10px;font-size:0.72rem;">Flat</button>
              <button class="chip ${this.params.type==="house"?"active":""}" data-value="house"  style="padding:4px 10px;font-size:0.72rem;">House</button>
              <button class="chip ${this.params.type==="pg"?"active":""}" data-value="pg"     style="padding:4px 10px;font-size:0.72rem;">PG</button>
              <button class="chip ${this.params.type==="studio"?"active":""}" data-value="studio" style="padding:4px 10px;font-size:0.72rem;">Studio</button>
            </div>
          </div>

          <!-- Stats -->
          <div class="stats-row" style="padding:10px 16px;">
            <div class="stat-item"><strong id="count-num">—</strong> properties</div>
            <div class="stat-item"><strong id="budget-count-num" style="color:var(--green);">—</strong> in budget</div>
            <div style="margin-left:auto;">
              <span id="data-source-badge" class="source-badge mock">curated</span>
            </div>
          </div>

          <!-- Results list -->
          <div class="results-area" id="results-area">
            ${this.renderSkeletons(5)}
          </div>
        </div>

        <!-- RIGHT: Map + Insights -->
        <div class="map-main">
          <!-- AI Insights panel -->
          <div id="insights-container"></div>

          <!-- Leaflet map -->
          <div id="map-container" style="flex:1;min-height:0;position:relative;border-radius:var(--radius-md);overflow:hidden;border:1px solid var(--border);">
            <div id="leaflet-map" style="width:100%;height:100%;"></div>
            <div class="loading-overlay" id="map-loading">
              <div class="spinner"></div>
              <div class="loading-text">Loading map & properties...</div>
            </div>
          </div>

          <!-- Legend -->
          <div style="display:flex;gap:16px;align-items:center;padding:6px 2px;flex-shrink:0;">
            <span style="font-size:0.65rem;color:var(--text-muted);letter-spacing:0.1em;text-transform:uppercase;">Legend:</span>
            <div style="display:flex;align-items:center;gap:5px;font-size:0.68rem;color:var(--green);">
              <div style="width:8px;height:8px;border-radius:50%;background:var(--green);box-shadow:0 0 5px var(--green);"></div> In budget
            </div>
            <div style="display:flex;align-items:center;gap:5px;font-size:0.68rem;color:var(--amber);">
              <div style="width:8px;height:8px;border-radius:50%;background:var(--amber);box-shadow:0 0 5px var(--amber);"></div> Slightly over
            </div>
            <div style="display:flex;align-items:center;gap:5px;font-size:0.68rem;color:var(--red);">
              <div style="width:8px;height:8px;border-radius:50%;background:var(--red);box-shadow:0 0 5px var(--red);"></div> Over budget
            </div>
            <div style="margin-left:auto;font-size:0.6rem;color:var(--text-muted);">© OpenStreetMap contributors</div>
          </div>
        </div>
      </div>
    `,this.bindEvents(),this.initMap()}renderSkeletons(t){return Array.from({length:t},()=>`
      <div style="padding:14px;border:1px solid var(--border);border-radius:var(--radius-md);overflow:hidden;">
        <div class="skeleton" style="height:130px;border-radius:8px;margin-bottom:12px;"></div>
        <div class="skeleton" style="height:14px;width:70%;margin-bottom:8px;"></div>
        <div class="skeleton" style="height:12px;width:50%;margin-bottom:12px;"></div>
        <div style="display:flex;gap:8px;">
          <div class="skeleton" style="height:24px;width:60px;border-radius:4px;"></div>
          <div class="skeleton" style="height:24px;width:60px;border-radius:4px;"></div>
        </div>
      </div>
    `).join("")}bindEvents(){var i,o,l,h;(i=document.getElementById("back-btn"))==null||i.addEventListener("click",()=>this.navigate("landing")),(o=document.getElementById("re-search-btn"))==null||o.addEventListener("click",()=>this.reSearch()),(l=document.getElementById("location-input"))==null||l.addEventListener("keydown",u=>{u.key==="Enter"&&this.reSearch()});const t=document.getElementById("budget-filter"),e=document.getElementById("budget-filter-label");t==null||t.addEventListener("input",u=>{this.params.budget=parseInt(u.target.value),e.textContent=Sn(this.params.budget),this.updateSliderGradient(t),this.refreshCards()}),this.updateSliderGradient(t),(h=document.getElementById("type-filter"))==null||h.addEventListener("click",u=>{const d=u.target.closest(".chip");d&&(document.querySelectorAll("#type-filter .chip").forEach(p=>p.classList.remove("active")),d.classList.add("active"),this.params.type=d.dataset.value,this.reSearch())})}reSearch(){var e,i;const t=(i=(e=document.getElementById("location-input"))==null?void 0:e.value)==null?void 0:i.trim();t&&(this.params.location=t,this.properties=[],document.getElementById("results-area").innerHTML=this.renderSkeletons(5),document.getElementById("map-loading").style.display="flex",this.loadData())}async loadData(){try{const t=await Pg({location:this.params.location,budget:this.params.budget,type:this.params.type,bhk:this.params.bhk});this.properties=t.properties||[],this.center=t.center,this.insights=t.insights,this.dataSource=t.dataSource,this.renderResults(),this.renderInsights(),this.updateMapCenter(),this.renderMarkers(),this.updateStats()}catch(t){console.error("Search failed:",t),Cg("Could not load properties. Is the backend running?"),document.getElementById("results-area").innerHTML=`
        <div class="no-results">
          <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
          <strong>Could not load properties</strong>
          <p>${t.message}</p>
          <p style="font-size:0.75rem;margin-top:4px;color:var(--text-muted);">Make sure backend is running: <code>npm run server</code></p>
        </div>
      `}finally{document.getElementById("map-loading").style.display="none"}}renderResults(){const t=document.getElementById("results-area");if(!t)return;const e=this.getFiltered();if(!e.length){t.innerHTML=`
        <div class="no-results">
          <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9,22 9,12 15,12 15,22"/></svg>
          <strong>No properties found</strong>
          <p>Try a broader search, different location, or increase your budget.</p>
        </div>
      `;return}t.innerHTML="",e.forEach((i,o)=>{const l=new zg(i,this.params.budget,o);l.onClick=()=>this.selectProperty(i),t.appendChild(l.element);const h=l.element.querySelector(".card-map-btn");h&&h.addEventListener("click",u=>{u.stopPropagation(),this.selectProperty(i);const d=this.markers.find(p=>{const m=p.getLatLng();return Math.abs(m.lat-i.lat)<1e-4&&Math.abs(m.lng-i.lng)<1e-4});d==null||d.openPopup()})})}refreshCards(){this.renderResults(),this.renderMarkers(),this.updateStats()}getFiltered(){let t=[...this.properties];return this.params.type&&this.params.type!=="all"&&(t=t.filter(e=>e.type===this.params.type)),t}renderInsights(){const t=document.getElementById("insights-container");if(!t||!this.insights)return;const e=new kg(this.insights,this.params.budget,this.params.location);t.innerHTML="",t.appendChild(e.element)}updateStats(){const t=this.params.budget||2e4,e=this.properties.filter(o=>o.price<=t).length,i=o=>document.getElementById(o);if(i("count-num")&&(i("count-num").textContent=this.properties.length),i("budget-count-num")&&(i("budget-count-num").textContent=e),i("data-source-badge")){const o=this.dataSource||"curated";i("data-source-badge").textContent=o,i("data-source-badge").className=`source-badge ${o.includes("google")?"google":o.includes("serp")?"serp":"mock"}`}}selectProperty(t){this.selectedId=t.id,document.querySelectorAll(".property-card").forEach(i=>i.classList.remove("selected"));const e=document.querySelector(`[data-id="${t.id}"]`);e==null||e.classList.add("selected"),e==null||e.scrollIntoView({behavior:"smooth",block:"nearest"}),this.map&&t.lat&&t.lng&&this.map.setView([t.lat,t.lng],16,{animate:!0})}initMap(){if(!document.getElementById("leaflet-map"))return;const e=this.center||{lat:12.9279,lng:77.6271};this.map=$i.map("leaflet-map",{center:[e.lat,e.lng],zoom:14,zoomControl:!0}),$i.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",{attribution:"© OpenStreetMap © CARTO",subdomains:"abcd",maxZoom:19}).addTo(this.map),document.getElementById("map-loading").style.display="none"}updateMapCenter(){!this.map||!this.center||this.map.setView([this.center.lat,this.center.lng],14,{animate:!0})}renderMarkers(){if(!this.map)return;this.markers.forEach(o=>o.remove()),this.markers=[];const t=this.params.budget||2e4,e=this.getFiltered(),i=[];e.forEach((o,l)=>{if(!o.lat||!o.lng)return;const h=lh(o.price,t),u={"in-budget":"#6aad8a","near-budget":"#b8a060","over-budget":"#b06060"}[h],d={"in-budget":"rgba(106,173,138,0.3)","near-budget":"rgba(184,160,96,0.3)","over-budget":"rgba(176,96,96,0.3)"}[h],p=$i.divIcon({className:"",html:`
          <div style="
            background:#0c1520;
            border:1px solid ${u}40;
            border-radius:14px;
            padding:3px 10px;
            font-size:11px;
            font-weight:500;
            color:${u};
            white-space:nowrap;
            box-shadow:0 4px 20px rgba(0,0,0,0.75),0 0 8px ${d};
            font-family:'Jost',sans-serif;
            letter-spacing:0.04em;
            animation:markerDrop 0.4s cubic-bezier(0.34,1.56,0.64,1) ${l*40}ms both;
            position:relative;
          ">
            ${Sn(o.price)}
            <div style="
              position:absolute;bottom:-7px;left:50%;transform:translateX(-50%);
              border:5px solid transparent;border-top-color:${u};
            "></div>
          </div>
        `,iconAnchor:[30,32],popupAnchor:[0,-32]}),m=$i.marker([o.lat,o.lng],{icon:p}).addTo(this.map).bindPopup(this.buildPopupHTML(o,u),{className:"dark-popup",maxWidth:260}).on("click",()=>this.selectProperty(o));this.markers.push(m),i.push([o.lat,o.lng])}),i.length>1&&this.map.fitBounds(i,{padding:[40,40],maxZoom:15}),this.injectPopupStyles()}buildPopupHTML(t,e){var i;return`
      <div style="font-family:'Jost',sans-serif;min-width:200px;">
        <div style="font-weight:500;font-size:0.85rem;margin-bottom:3px;color:#e8f0f8;letter-spacing:0.02em;font-family:'Playfair Display',serif;">${t.name}</div>
        <div style="font-size:0.68rem;color:#3a4a5a;margin-bottom:8px;">${t.address}</div>
        <div style="font-size:1.05rem;font-weight:500;color:${e};margin-bottom:4px;font-family:'Playfair Display',serif;letter-spacing:0.02em;">
          ₹${t.price.toLocaleString("en-IN")}/mo
        </div>
        <div style="font-size:0.68rem;color:#8090a8;">
          ${t.bhk} BHK · ${t.type}${t.area?` · ${t.area} sq ft`:""}
        </div>
        ${t.distance?`<div style="font-size:0.64rem;color:#3a4a5a;margin-top:3px;">${t.distance} km away</div>`:""}
        ${(i=t.amenities)!=null&&i.length?`
          <div style="display:flex;flex-wrap:wrap;gap:3px;margin-top:6px;">
            ${t.amenities.slice(0,3).map(o=>`<span style="font-size:0.58rem;background:rgba(168,196,216,0.08);color:#a8c4d8;padding:2px 5px;border-radius:3px;letter-spacing:0.06em;text-transform:uppercase;">${o}</span>`).join("")}
          </div>
        `:""}
        ${t.contactName?`<div style="font-size:0.64rem;color:#8090a8;margin-top:6px;border-top:1px solid rgba(168,196,216,0.1);padding-top:5px;">Contact: <strong style="color:#a8c4d8;">${t.contactName}</strong></div>`:""}
      </div>
    `}injectPopupStyles(){if(document.getElementById("leaflet-popup-style"))return;const t=document.createElement("style");t.id="leaflet-popup-style",t.textContent=`
      .dark-popup .leaflet-popup-content-wrapper {
        background: #0c1520 !important;
        border: 1px solid rgba(168,196,216,0.18) !important;
        border-radius: 10px !important;
        box-shadow: 0 12px 48px rgba(0,0,0,0.85) !important;
        color: #e8f0f8 !important;
      }
      .dark-popup .leaflet-popup-tip {
        background: #0c1520 !important;
      }
      .dark-popup .leaflet-popup-close-button {
        color: #8090a8 !important;
      }
      .leaflet-control-zoom a {
        background: #0c1520 !important;
        color: #e8f0f8 !important;
        border-color: rgba(160,200,240,0.15) !important;
      }
      .leaflet-control-zoom a:hover { background: #111e2e !important; }
      .leaflet-bar { border: 1px solid rgba(160,200,240,0.12) !important; }
      @keyframes markerDrop {
        from { opacity:0; transform: translateY(-16px) scale(0.6); }
        to   { opacity:1; transform: translateY(0) scale(1); }
      }
    `,document.head.appendChild(t)}updateSliderGradient(t){if(!t)return;const e=(+t.value-+t.min)/(+t.max-+t.min)*100;t.style.background=`linear-gradient(90deg, var(--accent) ${e}%, var(--border) ${e}%)`}destroy(){var t;(t=this.map)==null||t.remove(),this.map=null}}const Vo=document.getElementById("app");let qi=null;function ea(s,t={}){qi!=null&&qi.destroy&&qi.destroy(),Vo.innerHTML="",s==="landing"?qi=new Ng(Vo,ea):s==="map"&&(qi=new Hg(Vo,ea,t)),window.scrollTo(0,0)}ea("landing");
