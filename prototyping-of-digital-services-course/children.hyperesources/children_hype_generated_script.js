//	HYPE.documents["children"]

(function(){(function k(){function l(a,b,d){var c=!1;null==window[a]&&(null==window[b]?(window[b]=[],window[b].push(k),a=document.getElementsByTagName("head")[0],b=document.createElement("script"),c=h,false==!0&&(c=""),b.type="text/javascript",b.src=c+"/"+d,a.appendChild(b)):window[b].push(k),c=!0);return c}var h="children.hyperesources",c="children",e="children_hype_container";if(false==!1)try{for(var f=document.getElementsByTagName("script"),
a=0;a<f.length;a++){var b=f[a].src,d=null!=b?b.indexOf("/children_hype_generated_script.js"):-1;if(-1!=d){h=b.substr(0,d);break}}}catch(n){}if(false==!1&&(a=navigator.userAgent.match(/MSIE (\d+\.\d+)/),a=parseFloat(a&&a[1])||null,a=l("HYPE_584","HYPE_dtl_584",!0==(null!=a&&10>a||false==!0)?"HYPE-584.full.min.js":"HYPE-584.thin.min.js"),false==!0&&(a=a||l("HYPE_w_584","HYPE_wdtl_584","HYPE-584.waypoints.min.js")),a))return;f=window.HYPE.documents;
if(null!=f[c]){b=1;a=c;do c=""+a+"-"+b++;while(null!=f[c]);d=document.getElementsByTagName("div");b=!1;for(a=0;a<d.length;a++)if(d[a].id==e&&null==d[a].getAttribute("HYP_dn")){var b=1,g=e;do e=""+g+"-"+b++;while(null!=document.getElementById(e));d[a].id=e;b=!0;break}if(!1==b)return}b=[];b=[{name:"hoverFrog",source:"function(hypeDocument, element, event) {//luckyde.com\nvar a = document.getElementsByClassName(\"drag\")[0];\nvar b = document.getElementsByClassName(\"collider\");\n\n\n\tvar dragger  = a,\n\t\tdoc      = document.getElementById( hypeDocument.documentId() ),\n\t\tdragable = dragger.getBoundingClientRect(),\n\t\tdragH\t = dragable.height,\n\t\tdragW\t = dragable.width + 100,\n\t\tcoordinates = {\n\t\t\tx:(event.pageX - doc.offsetLeft - dragW / 2),\n\t\t\ty:(event.pageY - doc.offsetTop - dragH / 2)\n\t\t};\n\t\t\n\tdragger.style.left = coordinates.x + \"px\";\n\tdragger.style.top  = coordinates.y + \"px\";\n\t\n\t\n\tfunction collisionFunction(a,b){\n\t//put collision action here\n\t\tb.style.opacity = \"1\";\n\t}\n\t\n\tfunction onOver(a,b){\n\t\n\t\tvar aBox = a.getBoundingClientRect(),\n\t\t\tbBox = b.getBoundingClientRect();\n\t\t\n\t\tif (aBox.left < bBox.left + bBox.width  &&\n  \t\t\taBox.left + aBox.width >  bBox.left &&\n   \t\t\taBox.top  < bBox.top + bBox.height  &&\n \t\t\tbBox.height + aBox.top > bBox.top) {\n \t\t\t\n\t   \t\tcollisionFunction(a, b);\n   \t\t} else {\n   \t\t\tb.style.opacity = \"0\";\n   \t\t}\n   \t}\n   \t   \t\n   \tfor(var i = 0; i < b.length; i++){\n   \t\tonOver( a, b[i])\n   \t}\n}",identifier:"11"},{name:"hoverOwl",source:"function(hypeDocument, element, event) {//luckyde.com\nvar a = document.getElementsByClassName(\"drag\")[1];\nvar b = document.getElementsByClassName(\"collider\");\n\n\n\tvar dragger  = a,\n\t\tdoc      = document.getElementById( hypeDocument.documentId() ),\n\t\tdragable = dragger.getBoundingClientRect(),\n\t\tdragH\t = dragable.height,\n\t\tdragW\t = dragable.width,\n\t\tcoordinates = {\n\t\t\tx:(event.pageX - doc.offsetLeft - dragW / 2),\n\t\t\ty:(event.pageY - doc.offsetTop - dragH / 2)\n\t\t};\n\t\t\n\tdragger.style.left = coordinates.x + \"px\";\n\tdragger.style.top  = coordinates.y + \"px\";\n\t\n\t\n\tfunction collisionFunction(a,b){\n\t//put collision action here\n\t\tb.style.opacity = \"1\";\n\t}\n\t\n\tfunction onOver(a,b){\n\t\n\t\tvar aBox = a.getBoundingClientRect(),\n\t\t\tbBox = b.getBoundingClientRect();\n\t\t\n\t\tif (aBox.left < bBox.left + bBox.width  &&\n  \t\t\taBox.left + aBox.width >  bBox.left &&\n   \t\t\taBox.top  < bBox.top + bBox.height  &&\n \t\t\tbBox.height + aBox.top > bBox.top) {\n \t\t\t\n\t   \t\tcollisionFunction(a, b);\n   \t\t} else {\n   \t\t\tb.style.opacity = \"0\";\n   \t\t}\n   \t}\n   \t   \t\n   \tfor(var i = 0; i < b.length; i++){\n   \t\tonOver( a, b[i])\n   \t}\n}",identifier:"23"},{name:"hoverCow",source:"function(hypeDocument, element, event) {//luckyde.com\nvar a = document.getElementsByClassName(\"drag\")[2];\nvar b = document.getElementsByClassName(\"collider\");\n\n\n\tvar dragger  = a,\n\t\tdoc      = document.getElementById( hypeDocument.documentId() ),\n\t\tdragable = dragger.getBoundingClientRect(),\n\t\tdragH\t = dragable.height,\n\t\tdragW\t = dragable.width + 100,\n\t\tcoordinates = {\n\t\t\tx:(event.pageX - doc.offsetLeft - dragW / 2),\n\t\t\ty:(event.pageY - doc.offsetTop - dragH / 2)\n\t\t};\n\t\t\n\tdragger.style.left = coordinates.x + \"px\";\n\tdragger.style.top  = coordinates.y + \"px\";\n\t\n\t\n\tfunction collisionFunction(a,b){\n\t//put collision action here\n\t\tb.style.opacity = \"1\";\n\t}\n\t\n\tfunction onOver(a,b){\n\t\n\t\tvar aBox = a.getBoundingClientRect(),\n\t\t\tbBox = b.getBoundingClientRect();\n\t\t\n\t\tif (aBox.left < bBox.left + bBox.width  &&\n  \t\t\taBox.left + aBox.width >  bBox.left &&\n   \t\t\taBox.top  < bBox.top + bBox.height  &&\n \t\t\tbBox.height + aBox.top > bBox.top) {\n \t\t\t\n\t   \t\tcollisionFunction(a, b);\n   \t\t} else {\n   \t\t\tb.style.opacity = \"0\";\n   \t\t}\n   \t}\n   \t   \t\n   \tfor(var i = 0; i < b.length; i++){\n   \t\tonOver( a, b[i])\n   \t}\n}",identifier:"46"}];d={};g={};for(a=0;a<b.length;a++)try{g[b[a].identifier]=b[a].name,d[b[a].name]=eval("(function(){return "+b[a].source+"})();")}catch(m){window.console&&window.console.log(m),d[b[a].name]=
function(){}}a=new HYPE_584(c,e,{"-2":{n:"blank.gif"},"25":{p:1,n:"safari-pinned-tab.svg",g:"59",t:"image/svg+xml"},"18":{p:1,n:"apple-touch-icon.png",g:"54",t:"@1x"},"10":{p:1,n:"Cow_2x.png",g:"44",o:true,t:"@2x"},"19":{n:"browserconfig.xml"},"11":{p:2,n:"SFX%20-%20Frog.ogg",g:"48",t:"audio/ogg"},"0":{p:1,n:"Pond.jpg",g:"5",o:true,t:"@1x"},"12":{p:2,n:"SFX%20-%20Frog.mp3",g:"48",t:"audio/mpeg"},"1":{p:1,n:"Clipboard%20Image%202017-11-23%2001%2000%2012%20PM.png",g:"7",t:"@1x"},"20":{p:1,n:"favicon-16x16.png",g:"55",t:"@1x"},"2":{p:1,n:"Frog.png",g:"9",o:true,t:"@1x"},"13":{p:2,n:"SFX%20-%20Owl%20Hooting.mp3",g:"51",t:"audio/mpeg"},"3":{p:1,n:"Frog_2x.png",g:"9",o:true,t:"@2x"},"21":{p:1,n:"favicon-32x32.png",g:"56",t:"@1x"},"14":{p:2,n:"SFX%20-%20Owl%20Hooting.ogg",g:"51",t:"audio/ogg"},"4":{p:1,n:"Tree.jpg",g:"18",t:"@1x"},"5":{p:1,n:"Owl.png",g:"20",o:true,t:"@1x"},"15":{p:2,n:"SFX%20-%20Cow%20moo.mp3",g:"52",t:"audio/mpeg"},"22":{p:1,n:"favicon.png",g:"57",o:true,t:"@1x"},"6":{p:1,n:"Owl_2x.png",g:"20",o:true,t:"@2x"},"23":{n:"manifest.json"},"16":{p:2,n:"SFX%20-%20Cow%20moo.ogg",g:"52",t:"audio/ogg"},"7":{p:1,n:"Field.jpg",g:"42",o:true,t:"@1x"},"-1":{n:"PIE.htc"},"8":{p:1,n:"Field_2x.jpg",g:"42",o:true,t:"@2x"},"24":{p:1,n:"mstile-150x150.png",g:"58",t:"@1x"},"17":{p:1,n:"android-chrome-96x96.png",g:"53",t:"@1x"},"9":{p:1,n:"Cow.png",g:"44",o:true,t:"@1x"}},h,[],d,[{n:"Pond",o:"1",X:[0]},{n:"Tree",o:"12",X:[1]},{n:"Field",o:"36",X:[2]}],[{o:"3",p:"600px",cA:false,Y:800,Z:600,L:[],c:"#FFFFFF",bY:1,d:800,U:{},T:{kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:0,b:[],a:[],f:30}},bZ:180,O:["62","63","61","60"],n:"Untitled Layout","_":0,v:{"63":{h:"9",p:"no-repeat",x:"visible",a:126,q:"100% 100%",b:159,j:"absolute",cY:"0",z:3,cP:"collider",dB:"img",d:71,k:"div",i:"frog",e:0,c:117,r:"inline",bD:"auto"},"62":{w:"",h:"5",p:"no-repeat",x:"visible",a:-41,q:"100% 100%",b:-1,j:"absolute",dB:"img",aA:{a:[{p:12,o:"48",q:false}]},z:1,k:"div",d:601,c:954,r:"inline",aP:"pointer"},"61":{h:"7",bN:{a:[{p:4,h:"11"}]},x:"visible",a:372,q:"100% 100%",b:389,j:"absolute",dB:"img",z:4,k:"div",cP:"drag",d:221,i:"iphone",p:"no-repeat",c:420,r:"inline"},"60":{b:565,z:2,K:"Solid",c:27,L:"Solid",d:15,aS:6,M:1,bD:"auto",N:1,aT:6,dB:"button",O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",aI:4,aJ:4,aK:4,aL:4,A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:{a:[{d:1.1000000000000001,p:1,g:4,f:1}]},F:"center",G:"#000000",aP:"pointer",w:"&gt;",x:"visible",I:"Solid",a:743,y:"preserve",J:"Solid"}}},{o:"17",p:"600px",cA:false,Y:800,Z:600,L:[],c:"#FFFFFF",bY:1,d:800,U:{},T:{kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:0,b:[],a:[],f:30}},bZ:180,O:["65","64","66","67"],n:"Untitled Layout","_":1,v:{"66":{h:"7",bN:{a:[{p:4,h:"23"}]},x:"visible",a:11,q:"100% 100%",b:379,j:"absolute",dB:"img",z:5,k:"div",cP:"drag",d:221,i:"phone2",p:"no-repeat",c:420,r:"inline"},"65":{w:"",h:"18",p:"no-repeat",x:"visible",a:-45,q:"100% 100%",b:0,j:"absolute",dB:"img",aA:{a:[{p:12,o:"51",q:false}]},z:2,k:"div",d:600,c:1067,r:"inline",aP:"pointer"},"64":{h:"20",bN:{a:[{p:0}]},x:"visible",a:588,q:"100% 100%",b:51,j:"absolute",dB:"img",z:4,cP:"collider",k:"div",d:79,i:"owl",p:"no-repeat",e:0,c:48,r:"inline"},"67":{b:563,z:6,K:"Solid",c:34,L:"Solid",d:15,aS:6,M:1,bD:"none",N:1,aT:6,dB:"button",O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",aI:4,aJ:4,aK:4,aL:4,A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:{a:[{d:1.1000000000000001,p:1,g:4,f:1}]},F:"center",G:"#000000",aP:"pointer",w:"&gt;",x:"visible",I:"Solid",a:729,y:"preserve",J:"Solid"}}},{o:"41",p:"600px",cA:false,Y:800,Z:600,L:[],c:"#FFFFFF",bY:1,d:800,U:{},T:{kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:0,b:[],a:[],f:30}},bZ:180,O:["70","69","68"],n:"Untitled Layout","_":2,v:{"70":{h:"42",p:"no-repeat",x:"visible",a:-22,q:"100% 100%",b:0,j:"absolute",dB:"img",aA:{a:[{p:12,o:"52",q:false}]},k:"div",z:4,d:711,c:1065,r:"inline",aP:"pointer"},"69":{h:"7",bN:{a:[{p:4,h:"46"}]},x:"visible",a:11,q:"100% 100%",b:379,j:"absolute",dB:"img",z:7,k:"div",cP:"drag",d:221,i:"iphone3",p:"no-repeat",c:420,r:"inline"},"68":{h:"44",p:"no-repeat",x:"visible",a:583,q:"100% 100%",b:437,j:"absolute",dB:"img",z:6,k:"div",cP:"collider",d:96,i:"cow",c:143,e:0,r:"inline"}}}],{},g,{},null,false,true,-1,true,true,true,false);f[c]=a.API;document.getElementById(e).setAttribute("HYP_dn",
c);a.z_o(this.body)})();})();
