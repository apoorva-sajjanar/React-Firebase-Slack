(this.webpackJsonpreact_slack=this.webpackJsonpreact_slack||[]).push([[0],{188:function(e,t,n){},207:function(e,t,n){},211:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n(0),i=n.n(c),s=n(56),r=n.n(s),o=(n(188),n(231)),l=n(81),d=n(238),u=n(239),j=n(230),h=n(172),f=n(32),p=n(144);n(193),n(194),n(195);p.a.initializeApp({apiKey:"AIzaSyDMMppYBvwaeI0US-aMle9r979XqjXzToc",authDomain:"react-slack-e5339.firebaseapp.com",databaseURL:"https://react-slack-e5339.firebaseio.com",projectId:"react-slack-e5339",storageBucket:"react-slack-e5339.appspot.com",messagingSenderId:"891002544306",appId:"1:891002544306:web:ea5b6ba6ac845df2b829ab",measurementId:"G-GFTYJ8XR1D"}),p.a.analytics();var b=p.a,m="SET_USER",O="SET_CHANNEL",x="SET_FAVOURITECHANNEL",g="REMOVE_FAVOURITECHANNEL",v="MESSAGE",y="MESSAGE_FILE",C=function(e){return{type:m,payload:{currentUser:e}}},S=function(e){return{type:O,payload:{currentChannel:e}}},w=(n(60),Object(f.b)((function(e){return{user:e.user.currentUser}}),(function(e){return{setUser:function(t){e(C(t.photoURL))}}}))((function(e){var t=function(){b.auth().signOut().then((function(){return console.log("user signed out")}))};return e.user?Object(a.jsx)(d.a,{children:Object(a.jsx)(d.a.Column,{children:Object(a.jsxs)(d.a.Row,{className:"userinfo_grid_row",children:[Object(a.jsxs)(u.a,{inverted:!0,as:"h2",children:[Object(a.jsx)(l.a,{name:"slack"}),Object(a.jsx)(u.a.Content,{children:"Slack"})]}),Object(a.jsx)(u.a,{className:"userinfo_displayname",inverted:!0,as:"h4",children:Object(a.jsx)(j.a,{trigger:Object(a.jsxs)("span",{children:[Object(a.jsx)(h.a,{src:e.user.photoURL,avatar:!0}),e.user.displayName]}),options:[{key:"user",text:Object(a.jsxs)("span",{children:["Signed in as ",Object(a.jsx)("strong",{children:e.user.displayName})]}),disabled:!0},{key:"signout",text:Object(a.jsx)(l.a,{name:"sign-out",children:Object(a.jsx)("span",{onClick:t,children:"  Sign Out"})})}]})})]})})}):null}))),k=n(33),T=n(54),N=n(13),D=n(234),M=n(232),z=n(242),U=n(212),E=n(109),P=function(e){var t=b.database().ref("messages"),n=b.database().ref("users"),i=Object(c.useState)({}),s=Object(N.a)(i,2),r=s[0],o=s[1],l=Object(c.useState)({}),d=Object(N.a)(l,2),u=d[0],j=d[1];Object(c.useEffect)((function(){var a;e.user&&(n.child(null===(a=e.user)||void 0===a?void 0:a.uid).child("lastvisited").on("value",(function(e){o(e.val())})),t.on("value",(function(e){var t=e.val();console.log(t[-1]);var n=null===Object||void 0===Object?void 0:Object.keys(t),a={};n.forEach((function(e){Object.keys(t[e]).reduce((function(n){var c;a[e]=Object(T.a)(a[e]||[]),a[e].push(null===(c=t[e][n])||void 0===c?void 0:c.timestamp)}))})),j(a)})))}),[e.user]);return Object(a.jsxs)("div",{children:[" ",e.displayName," ",function(t){if(r&&u&&e.channel&&e.channel.id!==t){var n=r[t],c=u[t];if(c){var i=c.filter((function(e){return!n||n<e})).length;return 0===i?null:Object(a.jsx)(E.a,{color:"red",children:i})}}return null}(e.notificationChannelId),"  "]})},I=Object(f.b)((function(e){return{user:e.user.currentUser,channel:e.channel.currentChannel}}),(function(e){return{selectChannel:function(t){return e(S(t))}}}))((function(e){var t=Object(c.useState)(!1),n=Object(N.a)(t,2),i=n[0],s=n[1],r=Object(c.useState)({Name:"",Desc:""}),d=Object(N.a)(r,2),u=d[0],j=d[1],h=Object(c.useState)(!1),f=Object(N.a)(h,2),p=f[0],m=f[1],O=Object(c.useState)([]),x=Object(N.a)(O,2),g=x[0],v=x[1],y=b.database().ref("channels"),C=b.database().ref("users");Object(c.useEffect)((function(){return y.on("child_added",(function(e){v((function(t){var n=Object(T.a)(t);return n.push(e.val()),n}))})),function(){return y.off()}}),[]),Object(c.useEffect)((function(){g.length>0&&e.selectChannel(g[0])}),[e.channel?null:g]);var S=function(){s(!1)},w=function(t){E(e.user,e.channel),E(e.user,t),e.selectChannel(t)},E=function(e,t){var n=C.child(e.uid).child("lastvisited").child(t.id);n.set(b.database.ServerValue.TIMESTAMP),n.onDisconnect().set(b.database.ServerValue.TIMESTAMP)},I=function(){if(u&&u.Name&&u.Desc){var t=y.push().key,n={id:t,name:u.Name,desc:u.Desc,created_by:{name:e.user.displayName,avatar:e.user.photoURL}};m(!0),y.child(t).update(n).then((function(){j({Name:"",Desc:""}),m(!1),S(),console.log("saved")})).catch((function(e){console.log(e)}))}},_=function(e){var t=e.target;j((function(e){var n=Object(k.a)({},e);return n[t.name]=t.value,n}))};return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)(o.a.Menu,{style:{marginTop:"35px"},children:[Object(a.jsxs)(o.a.Item,{style:{fontSize:"17px"},children:[Object(a.jsxs)("span",{children:[Object(a.jsx)(l.a,{name:"exchange"}),"Channels"]}),"(",g.length,")",Object(a.jsx)("span",{style:{marginLeft:"20px"},onClick:function(){s(!0)},children:Object(a.jsx)(l.a,{name:"add circle"})})]}),function(){if(g.length>0)return g.map((function(t){return Object(a.jsx)(o.a.Item,{name:t.name,onClick:function(){w(t)},active:e.channel&&t.id===e.channel.id&&!e.channel.isFav,children:Object(a.jsx)(P,{user:e.user,channel:e.channel,notificationChannelId:t.id,displayName:"# "+t.name})},t.id)}))}()]}),Object(a.jsxs)(D.a,{open:i,onClose:S,children:[Object(a.jsx)(D.a.Header,{children:"Create Channel"}),Object(a.jsx)(D.a.Content,{children:Object(a.jsx)(M.a,{onSubmit:I,children:Object(a.jsxs)(z.a,{stacked:!0,children:[Object(a.jsx)(M.a.Input,{name:"Name",value:u.Name,onChange:_,type:"text",placeholder:"Enter Channel Name"}),Object(a.jsx)(M.a.Input,{name:"Desc",value:u.Desc,onChange:_,type:"text",placeholder:"Enter Channel Description"})]})})}),Object(a.jsxs)(D.a.Actions,{children:[Object(a.jsxs)(U.a,{loading:p,onClick:I,children:[Object(a.jsx)(l.a,{name:"checkmark"})," Save"]}),Object(a.jsxs)(U.a,{onClick:S,children:[Object(a.jsx)(l.a,{name:"remove"})," Cancel"]})]})]})]})})),_=Object(f.b)((function(e){return{user:e.user.currentUser,channel:e.channel.currentChannel}}),(function(e){return{selectChannel:function(t){return e(S(t))}}}))((function(e){var t=Object(c.useState)([]),n=Object(N.a)(t,2),i=n[0],s=n[1],r=Object(c.useState)([]),d=Object(N.a)(r,2),u=d[0],j=d[1],h=b.database().ref("users"),f=b.database().ref(".info/connected"),p=b.database().ref("status");Object(c.useEffect)((function(){return h.on("child_added",(function(e){s((function(t){var n=Object(T.a)(t),a=e.val();return a.name=a.displayName,a.id=e.key,a.isPrivatechat=!0,n.push(a),n}))})),f.on("value",(function(t){if(e.user&&t.val()){var n=p.child(e.user.uid);n.set(!0),n.onDisconnect().remove()}})),function(){h.off(),f.off()}}),[e.user]),Object(c.useEffect)((function(){return p.on("child_added",(function(e){j((function(t){var n=Object(T.a)(t);return n.push(e.key),n}))})),p.on("child_removed",(function(e){j((function(t){var n=Object(T.a)(t),a=n.indexOf(e.key);return n.splice(a,1),n}))})),function(){return p.off()}}),[i]);var m=function(t){var n=Object(k.a)({},t);n.id=x(t.id),O(e.user,e.channel),O(e.user,n),e.selectChannel(n)},O=function(e,t){var n=h.child(null===e||void 0===e?void 0:e.uid).child("lastvisited").child(t.id);n.set(b.database.ServerValue.TIMESTAMP),n.onDisconnect().set(b.database.ServerValue.TIMESTAMP)},x=function(t){var n,a,c;return(null===(n=e.user)||void 0===n?void 0:n.uid)<t?(null===(a=e.user)||void 0===a?void 0:a.uid)+t:t+(null===(c=e.user)||void 0===c?void 0:c.uid)};return Object(a.jsxs)(o.a.Menu,{style:{marginTop:"35px"},children:[Object(a.jsxs)(o.a.Item,{style:{fontSize:"17px"},children:[Object(a.jsxs)("span",{children:[Object(a.jsx)(l.a,{name:"mail"}),"Direct Messages"]}),"(",i.length-1,")"]}),function(){if(i.length>0)return i.filter((function(t){var n;return t.id!==(null===(n=e.user)||void 0===n?void 0:n.uid)})).map((function(t){return Object(a.jsxs)(o.a.Item,{name:t.name,onClick:function(){m(t)},active:e.channel&&x(t.id)===e.channel.id,children:[Object(a.jsx)(l.a,{name:"circle",color:"".concat(-1!==u.indexOf(t.id)?"green":"red")}),Object(a.jsx)(P,{user:e.user,channel:e.channel,notificationChannelId:x(t.id),displayName:"@ "+t.name})]},t.id)}))}()]})})),L=Object(f.b)((function(e){return{channel:e.channel.currentChannel,favouriteChannels:e.favouriteChannel.favouriteChannel}}),(function(e){return{selectChannel:function(t){return e(S(t))}}}))((function(e){return Object(a.jsxs)(o.a.Menu,{children:[Object(a.jsxs)(o.a.Item,{style:{fontSize:"17px"},children:[Object(a.jsxs)("span",{children:[Object(a.jsx)(l.a,{name:"star"}),"Starred"]}),"(",Object.keys(e.favouriteChannels).length,")"]}),function(){if(Object.keys(e.favouriteChannels).length>0)return Object.keys(e.favouriteChannels).map((function(t){return Object(a.jsx)(o.a.Item,{name:e.favouriteChannels[t],onClick:function(){e.selectChannel({id:t,name:e.favouriteChannels[t],isFav:!0})},active:e.channel&&t===e.channel.id&&e.channel.isFav,children:"# "+e.favouriteChannels[t]},t)}))}()]})})),A=function(){return Object(a.jsxs)(o.a,{vertical:!0,fixed:"left",borderless:!0,size:"large",className:"side_bar",children:[Object(a.jsx)(w,{}),Object(a.jsx)(L,{}),Object(a.jsx)(I,{}),Object(a.jsx)(_,{})]})},R=n(233),F=n(227),B=function(e){return Object(a.jsxs)(z.a,{clearing:!0,children:[Object(a.jsxs)(u.a,{floated:"left",fluid:"true",as:"h2",children:[Object(a.jsxs)("span",{children:[(e.isPrivatechat?"@ ":"# ")+e.channelName,!e.isPrivatechat&&Object(a.jsx)(l.a,{onClick:e.starChange,name:e.starred?"star":"star outline",color:e.starred?"yellow":"black"})]}),Object(a.jsxs)(u.a.Subheader,{children:[e.isPrivatechat?"":Object(a.jsx)(l.a,{name:"user outline"}),e.isPrivatechat?"":e.uniqueUser+" | "+e.channelDesc]})]}),Object(a.jsx)(u.a,{floated:"right",children:Object(a.jsx)(F.a,{name:"search",icon:"search",placeholder:"Search Messages",size:"mini",onChange:e.searchChange})})]})},V=n(235),W=n(229),G=n(169);W.a.locale(G);var H=new W.a,X=function(e){return Object(a.jsxs)(R.a,{children:[Object(a.jsx)(R.a.Avatar,{src:e.message.user.avatar}),Object(a.jsxs)(R.a.Content,{style:{fontSize:"15px"},className:e.ownMessage?"ownMessage":null,children:[Object(a.jsx)(R.a.Author,{children:e.message.user.name}),Object(a.jsx)(R.a.Metadata,{children:H.format(e.message.timestamp)}),Object(a.jsx)("br",{}),"image/jpeg"===e.message.contentType?Object(a.jsx)(h.a,{onLoad:e.imgLoaded,src:e.message.image,style:{width:"60%"}}):"application/vnd.openxmlformats-officedocument.wordprocessingml.document"===e.message.contentType||"application/msword"===e.message.contentType?Object(a.jsx)(V.a,{children:Object(a.jsxs)(V.a.Content,{children:[Object(a.jsx)(V.a.Description,{children:Object(a.jsxs)("a",{href:e.message.image,"data-toggle":"tooltip","data-placement":"right",title:"Click here to download",children:[Object(a.jsx)(l.a,{name:"file word"}),e.message.fileName]})}),Object(a.jsxs)(V.a.Meta,{style:{fontSize:"13px"},children:[e.message.fileSize," WORD Document"]})]})}):"application/pdf"===e.message.contentType?Object(a.jsx)(V.a,{children:Object(a.jsxs)(V.a.Content,{children:[Object(a.jsx)(V.a.Description,{children:Object(a.jsxs)("a",{href:e.message.image,target:"new","data-toggle":"tooltip","data-placement":"right",title:"Click here to view",children:[Object(a.jsx)(l.a,{name:"file pdf"}),e.message.fileName]})}),Object(a.jsxs)(V.a.Meta,{style:{fontSize:"13px"},children:[e.message.fileSize," PDF Document"]})]})}):"application/xml"===e.message.contentType||"text/xml"===e.message.contentType?Object(a.jsx)(V.a,{children:Object(a.jsxs)(V.a.Content,{children:[Object(a.jsx)(V.a.Description,{children:Object(a.jsxs)("a",{href:e.message.image,"data-toggle":"tooltip","data-placement":"right",title:"Click here to download",children:[Object(a.jsx)(l.a,{name:"file excel"}),e.message.fileName]})}),Object(a.jsxs)(V.a.Meta,{style:{fontSize:"13px"},children:[e.message.fileSize," EXCEL Document"]})]})}):"application/zip"===e.message.contentType?Object(a.jsx)(V.a,{children:Object(a.jsxs)(V.a.Content,{children:[Object(a.jsx)(V.a.Description,{children:Object(a.jsxs)("a",{href:e.message.image,"data-toggle":"tooltip","data-placement":"right",title:"Click here to download",children:[Object(a.jsx)(l.a,{name:"file archive"}),e.message.fileName]})}),Object(a.jsxs)(V.a.Meta,{style:{fontSize:"13px"},children:[e.message.fileSize," ZIP Document"]})]})}):"text/plain"===e.message.contentType?Object(a.jsx)(V.a,{children:Object(a.jsxs)(V.a.Content,{children:[Object(a.jsx)(V.a.Description,{children:Object(a.jsxs)("a",{href:e.message.image,target:"new","data-toggle":"tooltip","data-placement":"right",title:"Click here to view",children:[Object(a.jsx)(l.a,{name:"file"}),e.message.fileName]})}),Object(a.jsxs)(V.a.Meta,{style:{fontSize:"13px"},children:[e.message.fileSize," TXT Document"]})]})}):"application/ppt"===e.message.contentType||"application/vnd.openxmlformats-officedocument.presentationml.presentation"===e.message.contentType||"application/vnd.ms-powerpoint"===e.message.contentType?Object(a.jsx)(V.a,{children:Object(a.jsxs)(V.a.Content,{children:[Object(a.jsx)(V.a.Description,{children:Object(a.jsxs)("a",{href:e.message.image,"data-toggle":"tooltip","data-placement":"right",title:"Click here to download",children:[Object(a.jsx)(l.a,{name:"file powerpoint"}),e.message.fileName]})}),Object(a.jsxs)(V.a.Meta,{style:{fontSize:"13px"},children:[e.message.fileSize," PPT Document"]})]})}):"text/csv"===e.message.contentType?Object(a.jsx)(V.a,{children:Object(a.jsxs)(V.a.Content,{children:[Object(a.jsx)(V.a.Description,{children:Object(a.jsxs)("a",{href:e.message.image,"data-toggle":"tooltip","data-placement":"right",title:"Click here to download",children:[Object(a.jsx)(l.a,{name:"file excel"}),e.message.fileName]})}),Object(a.jsxs)(V.a.Meta,{style:{fontSize:"13px"},children:[e.message.fileSize," CSV Document"]})]})}):Object(a.jsx)(R.a.Text,{children:e.message.content})]})]})},q=n(153),J=n.n(q),K=function(e){var t=Object(c.useState)(null),n=Object(N.a)(t,2),i=n[0],s=n[1],r=["image/png","image/jpeg","application/msword","application/xml","text/xml","application/vnd.openxmlformats-officedocument.wordprocessingml.document","application/pdf","application/zip","text/plain","application/vnd.ms-powerpoint","application/vnd.openxmlformats-officedocument.presentationml.presentation","text/csv"];return Object(a.jsxs)(D.a,{basic:!0,open:e.open,onClose:e.onClose,children:[Object(a.jsx)(D.a.Header,{style:{color:"grey"},children:"Select File of Type ( png , jpeg, jpg, txt, docx, pdf, ppt, xml, zip )"}),Object(a.jsx)(D.a.Content,{children:Object(a.jsx)(F.a,{fluid:!0,type:"file",name:"file",onChange:function(e){var t=e.target.files[0];t&&s(t)}})}),Object(a.jsxs)(D.a.Actions,{children:[Object(a.jsxs)(U.a,{color:"green",onClick:function(){i&&r.includes(J.a.lookup(i.name))&&(e.uploadImage(i,J.a.lookup(i.name)),e.onClose(),s(null))},children:[Object(a.jsx)(l.a,{name:"checkmark"}),"ADD"]}),Object(a.jsxs)(U.a,{color:"red",onClick:e.onClose,children:[Object(a.jsx)(l.a,{name:"remove"}),"Cancel"]})]})]})},Y=n(58),Z=n.n(Y),Q=(n(201),n(171)),$=Object(f.b)((function(e){return{user:e.user.currentUser,channel:e.channel.currentChannel}}))((function(e){var t=b.database().ref("messages"),n=b.storage().ref(),i=Object(c.useState)(""),s=Object(N.a)(i,2),r=s[0],o=s[1],l=Object(c.useState)(!1),d=Object(N.a)(l,2),u=d[0],j=d[1],h=Object(c.useState)(!1),f=Object(N.a)(h,2),p=f[0],m=f[1],O=function(n,a,c,i){(r||n)&&t.child(e.channel.id).push().set(function(t,n,a,c){return{user:{avatar:e.user.photoURL,name:e.user.displayName,id:e.user.uid},content:r,contentType:n||"",fileName:c||"",fileSize:a||"",image:t||"",timestamp:b.database.ServerValue.TIMESTAMP}}(n,a,c,i)).then((function(){o(""),console.log("sent")})).catch((function(e){console.log(e)}))},x=function(e){if(console.log(e.key),"Enter"===e.key)return O()};return Object(a.jsxs)(z.a,{children:[Object(a.jsx)(F.a,{onChange:function(e){var t=e.target;o(t.value)},onKeyPress:x,name:"message",style:{width:"94%",paddingRight:"5px",paddingBottom:"10px"},value:r,placeholder:"Write Your Message",labelPosition:"right"}),Object(a.jsx)(U.a,{icon:"smile outline",onClick:function(){m(!p)},size:"medium"}),p?Object(a.jsx)(Q.a,{style:{position:"absolute",bottom:"100px",right:"20px"},onKeyPress:x,onSelect:function(e){!function(e){o(r+e.native)}(e)},emojiSize:20}):null,Object(a.jsx)(K,{uploadImage:function(e,t){var a=e.name.split(".")[1],c=e.size/1e3+" kB",i=e.name;console.log(e);var s="chat/images/".concat(Z()(),".jpg"),r="chat/Doc/".concat(Z()(),".docx"),o="chat/Doc/".concat(Z()(),".pdf"),l="chat/Doc/".concat(Z()(),".xml"),d="chat/Doc/".concat(Z()(),".zip"),u="chat/Doc/".concat(Z()(),".txt"),j="chat/Doc/".concat(Z()(),".ppt"),h="chat/Doc/".concat(Z()(),".csv");"docx"===a?n.child(r).put(e,{contentType:t}).then((function(e){e.ref.getDownloadURL().then((function(e){O(e,t,c,i)}))})).catch((function(e){console.log(e)})):"jpg"===a||"png"===a||"jpeg"===a?n.child(s).put(e,{contentType:t}).then((function(e){e.ref.getDownloadURL().then((function(e){O(e,t,c,i)}))})).catch((function(e){console.log(e)})):"pdf"===a?n.child(o).put(e,{contentType:t}).then((function(e){e.ref.getDownloadURL().then((function(e){O(e,t,c,i)}))})).catch((function(e){console.log(e)})):"xml"===a?n.child(l).put(e,{contentType:t}).then((function(e){e.ref.getDownloadURL().then((function(e){O(e,t,c,i)}))})).catch((function(e){console.log(e)})):"zip"===a?n.child(d).put(e,{contentType:t}).then((function(e){e.ref.getDownloadURL().then((function(e){O(e,t,c,i)}))})).catch((function(e){console.log(e)})):"txt"===a?n.child(u).put(e,{contentType:t}).then((function(e){e.ref.getDownloadURL().then((function(e){O(e,t,c,i)}))})).catch((function(e){console.log(e)})):"ppt"===a||"pptx"===a?(console.log(a),n.child(j).put(e,{contentType:t}).then((function(e){e.ref.getDownloadURL().then((function(e){O(e,t,c,i)}))})).catch((function(e){console.log(e)}))):"csv"===a&&(console.log(a),n.child(h).put(e,{contentType:t}).then((function(e){e.ref.getDownloadURL().then((function(e){O(e,t,c,i)}))})).catch((function(e){console.log(e)})))},open:u,onClose:function(){return j(!1)}}),Object(a.jsxs)("div",{class:"ui icon two buttons",children:[Object(a.jsx)(U.a,{icon:"send",content:"Add Reply",color:"orange",onClick:function(){O()}}),Object(a.jsx)(U.a,{icon:"upload",content:"Upload Media",color:"blue",onClick:function(){return j(!0)}})]})]})})),ee=Object(f.b)((function(e){var t;return{channel:e.channel.currentChannel,user:e.user.currentUser,favouriteChannels:e.favouriteChannel.favouriteChannel,message:null===(t=e.message)||void 0===t?void 0:t.message,messagefile:e.messageFile.messagefile}}),(function(e){return{setfavouriteChannel:function(t){return e(function(e){return{type:x,payload:{favouriteChannel:e}}}(t))},removefavouriteChannel:function(t){return e(function(e){return{type:g,payload:{favouriteChannel:e}}}(t))},SetMessage:function(t){return e(function(e){return{type:v,payload:{message:e}}}(t))},SetMessageFile:function(t){return e(function(e){return{type:y,payload:{messagefile:e}}}(t))}}}))((function(e){var t,n,i,s=b.database().ref("messages"),r=b.database().ref("users"),o=Object(c.useState)([]),l=Object(N.a)(o,2),d=l[0],u=l[1],j=Object(c.useState)(""),h=Object(N.a)(j,2),f=h[0],p=h[1],m=Object(c.useRef)();Object(c.useEffect)((function(){if(e.channel)return u([]),s.child(e.channel.id).on("child_added",(function(e){u((function(t){var n=Object(T.a)(t);return n.push(e.val()),n}))})),function(){return s.child(e.channel.id).off()}}),[e.channel]),Object(c.useEffect)((function(){if(e.user)return r.child(e.user.uid).child("favourite").on("child_added",(function(t){e.setfavouriteChannel(t.val())})),r.child(e.user.uid).child("favourite").on("child_removed",(function(t){e.removefavouriteChannel(t.val())})),function(){return r.child(e.user.uid).child("favourite").off()}}),[e.channel]),Object(c.useEffect)((function(){m.scrollIntoView({behavior:"smooth"})}),[d]);var O=function(){m.scrollIntoView({behavior:"smooth"})},x=function(){var e=new RegExp(f,"gi");return d.reduce((function(t,n){return console.log(),(n.content&&n.content.match(e)||n.user.name.match(e))&&t.push(n),t}),[])},g=function(){var t;return Object.keys(e.favouriteChannels).includes(null===(t=e.channel)||void 0===t?void 0:t.id)};return Object(a.jsxs)("div",{className:"messages",children:[Object(a.jsx)(B,{channelDesc:null===(t=e.channel)||void 0===t?void 0:t.desc,channelName:null===(n=e.channel)||void 0===n?void 0:n.name,uniqueUser:function(){var t=d.reduce((function(e,t){return e.includes(t.user.name)||e.push(t.user.name),e}),[]);return e.SetMessage(t),e.SetMessageFile(d),t.length}(),searchChange:function(e){var t=e.target;p(t.value)},isPrivatechat:null===(i=e.channel)||void 0===i?void 0:i.isPrivatechat,starChange:function(){var t=r.child(e.user.uid).child("favourite").child(e.channel.id);g()?t.remove():t.set({channelId:e.channel.id,channelName:e.channel.name})},starred:g()}),Object(a.jsx)(z.a,{className:"messagecontent",children:Object(a.jsxs)(R.a.Group,{children:[function(){var t=f?x():d;if(t.length>0)return t.map((function(n){var c,i;return Object(a.jsx)("div",{children:Object(a.jsx)(X,{messageToDisplay:t,message:n,ownMessage:(null===(c=n.user)||void 0===c?void 0:c.id)===(null===(i=e.user)||void 0===i?void 0:i.uid),imgLoaded:O},n.timestamp)})}))}(),Object(a.jsx)("div",{ref:function(e){return m=e}})]})}),Object(a.jsx)($,{})]})})),te=(n(207),n(236)),ne=Object(f.b)((function(e){return{channel:e.channel.currentChannel,user:e.user.currentUser,Message:e.Message,message:e.messageFile.messagefile}}))((function(e){var t,n,i,s,r,o,d=Object(c.useState)(0),j=Object(N.a)(d,2),f=j[0],p=j[1],b=function(e,t){var n=t.index;p(f===n?-1:n)};return Object(a.jsx)(z.a,{clearing:!0,children:Object(a.jsxs)(V.a,{children:[Object(a.jsx)(V.a.Content,{header:"Details"}),Object(a.jsxs)(V.a.Content,{extra:!0,children:["# ",null===(t=e.channel)||void 0===t?void 0:t.name]}),Object(a.jsxs)(te.a,{children:[Object(a.jsxs)(te.a.Title,{active:0===f,index:0,onClick:b,children:[Object(a.jsx)(l.a,{name:"dropdown"}),Object(a.jsx)(l.a,{name:"info"}),"About"]}),Object(a.jsx)(te.a.Content,{active:0===f,style:{paddingLeft:"25px"},children:Object(a.jsx)("p",{children:null===(n=e.channel)||void 0===n?void 0:n.desc})}),Object(a.jsxs)(te.a.Title,{active:1===f,index:1,onClick:b,children:[Object(a.jsx)(l.a,{name:"dropdown"}),Object(a.jsx)(l.a,{name:"users"})," Members ",Object(a.jsx)("span",{style:{paddingLeft:"70px"},children:e.Message.message.length})]}),Object(a.jsx)(te.a.Content,{active:1===f,style:{paddingLeft:"25px"},children:Object(a.jsx)(u.a,{as:"h4",children:e.Message?e.Message.message.map((function(e){return Object(a.jsx)("div",{style:{color:""},children:Object(a.jsx)("li",{children:e},e)},e)})):null})}),Object(a.jsxs)(te.a.Title,{active:3===f,index:3,onClick:b,children:[Object(a.jsx)(l.a,{name:"dropdown"}),Object(a.jsx)(l.a,{name:"file"}),"Files"]}),Object(a.jsx)(te.a.Content,{active:3===f,style:{paddingLeft:"25px"},children:e.message.map((function(e){return Object(a.jsx)("div",{style:{color:""},children:"image/jpeg"===e.contentType?Object(a.jsx)(V.a,{children:Object(a.jsxs)(V.a.Content,{children:[Object(a.jsx)(V.a.Description,{children:Object(a.jsx)(h.a,{src:e.image,style:{width:"100%"}})}),Object(a.jsxs)(V.a.Meta,{style:{fontSize:"13px"},children:[" Sent By  ",e.user.name," ",e.fileSize]})]})}):"application/vnd.openxmlformats-officedocument.wordprocessingml.document"===e.contentType||"application/msword"===e.contentType?Object(a.jsx)(V.a,{children:Object(a.jsxs)(V.a.Content,{children:[Object(a.jsx)(V.a.Description,{children:Object(a.jsxs)("a",{href:e.image,"data-toggle":"tooltip","data-placement":"right",title:"Click here to download",children:[Object(a.jsx)(l.a,{name:"file word"}),e.fileName]})}),Object(a.jsxs)(V.a.Meta,{style:{fontSize:"13px"},children:[" Sent By  ",e.user.name," ",e.fileSize]})]})}):"application/pdf"===e.contentType?Object(a.jsx)(V.a,{children:Object(a.jsxs)(V.a.Content,{children:[Object(a.jsx)(V.a.Description,{children:Object(a.jsxs)("a",{href:e.image,target:"new","data-toggle":"tooltip","data-placement":"right",title:"Click here to view",children:[Object(a.jsx)(l.a,{name:"file pdf"}),e.fileName]})}),Object(a.jsxs)(V.a.Meta,{style:{fontSize:"13px"},children:[" Sent By  ",e.user.name," ",e.fileSize]})]})}):"application/xml"===e.contentType||"text/xml"===e.contentType?Object(a.jsx)(V.a,{children:Object(a.jsxs)(V.a.Content,{children:[Object(a.jsx)(V.a.Description,{children:Object(a.jsxs)("a",{href:e.image,"data-toggle":"tooltip","data-placement":"right",title:"Click here to download",children:[Object(a.jsx)(l.a,{name:"file excel"}),e.fileName]})}),Object(a.jsxs)(V.a.Meta,{style:{fontSize:"13px"},children:[" Sent By  ",e.user.name," ",e.fileSize]})]})}):"application/zip"===e.contentType?Object(a.jsx)(V.a,{children:Object(a.jsxs)(V.a.Content,{children:[Object(a.jsx)(V.a.Description,{children:Object(a.jsxs)("a",{href:e.image,"data-toggle":"tooltip","data-placement":"right",title:"Click here to download",children:[Object(a.jsx)(l.a,{name:"file archive"}),e.fileName]})}),Object(a.jsxs)(V.a.Meta,{style:{fontSize:"13px"},children:[" Sent By  ",e.user.name," ",e.fileSize]})]})}):"text/plain"===e.contentType?Object(a.jsx)(V.a,{children:Object(a.jsxs)(V.a.Content,{children:[Object(a.jsx)(V.a.Description,{children:Object(a.jsxs)("a",{href:e.image,target:"new","data-toggle":"tooltip","data-placement":"right",title:"Click here to view",children:[Object(a.jsx)(l.a,{name:"file"}),e.fileName]})}),Object(a.jsxs)(V.a.Meta,{style:{fontSize:"13px"},children:[" Sent By  ",e.user.name," ",e.fileSize]})]})}):"application/ppt"===e.contentType||"application/vnd.openxmlformats-officedocument.presentationml.presentation"===e.contentType?Object(a.jsx)(V.a,{children:Object(a.jsxs)(V.a.Content,{children:[Object(a.jsx)(V.a.Description,{children:Object(a.jsxs)("a",{href:e.image,"data-toggle":"tooltip","data-placement":"right",title:"Click here to download",children:[Object(a.jsx)(l.a,{name:"file powerpoint"}),e.fileName]})}),Object(a.jsxs)(V.a.Meta,{style:{fontSize:"13px"},children:[" Sent By  ",e.user.name," ",e.fileSize]})]})}):"text/csv"===e.contentType?Object(a.jsx)(V.a,{children:Object(a.jsxs)(V.a.Content,{children:[Object(a.jsx)(V.a.Description,{children:Object(a.jsxs)("a",{href:e.image,"data-toggle":"tooltip","data-placement":"right",title:"Click here to download",children:[Object(a.jsx)(l.a,{name:"file excel"}),e.fileName]})}),Object(a.jsxs)(V.a.Meta,{style:{fontSize:"13px"},children:[" Sent By  ",e.user.name," ",e.fileSize]})]})}):null},e.timestamp)}))}),Object(a.jsxs)(te.a.Title,{active:2===f,index:2,onClick:b,children:[Object(a.jsx)(l.a,{name:"dropdown"}),Object(a.jsx)(l.a,{name:"edit"}),"Created By"]}),Object(a.jsx)(te.a.Content,{active:2===f,style:{paddingLeft:"25px"},children:Object(a.jsxs)(u.a,{as:"h3",children:[Object(a.jsx)(h.a,{size:"mini",circular:!0,src:null===(i=e.channel)||void 0===i||null===(s=i.created_by)||void 0===s?void 0:s.avatar}),null===(r=e.channel)||void 0===r||null===(o=r.created_by)||void 0===o?void 0:o.name]})})]})]})})}));var ae=function(){return Object(a.jsxs)(d.a,{columns:"equal",children:[Object(a.jsx)(A,{}),Object(a.jsx)(d.a.Column,{className:"messagepanel",children:Object(a.jsx)(ee,{})}),Object(a.jsx)(d.a.Column,{style:{paddingTop:"25px",padding:"25px"},width:4,children:Object(a.jsx)(ne,{})})]})},ce=(n(208),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,244)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),i(e),s(e)}))}),ie=n(20),se=n(53),re=n(85),oe={currentUser:null},le={messagefile:null},de={message:null},ue={currentChannel:null,loading:!0},je={favouriteChannel:{}},he=Object(re.b)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0;if(t.type===m){var n=t.payload;return e=Object(k.a)({},n)}return e},channel:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,t=arguments.length>1?arguments[1]:void 0;if(t.type===O){var n=t.payload;return(e=Object(k.a)({},n)).loading=!1,e}return e},favouriteChannel:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je,t=arguments.length>1?arguments[1]:void 0;if(t.type===x){var n=t.payload.favouriteChannel,a=Object(k.a)({},e.favouriteChannel);return a[n.channelId]=n.channelName,{favouriteChannel:a}}if(t.type===g){var c=t.payload.favouriteChannel,i=Object(k.a)({},e.favouriteChannel);return delete i[c.channelId],{favouriteChannel:i}}return e},Message:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=arguments.length>1?arguments[1]:void 0;if(t.type===v){var n=t.payload;return e=Object(k.a)({},n)}return e},messageFile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0;if(t.type===y){var n=t.payload;return e=Object(k.a)({},n)}return e}}),fe=n(237),pe=function(){var e=b.database().ref("users"),t=Object(c.useState)({userName:"",email:"",password:"",confirmpassword:""}),n=Object(N.a)(t,2),i=n[0],s=n[1],r=Object(c.useState)([]),o=Object(N.a)(r,2),l=o[0],u=o[1],j=Object(c.useState)(!1),h=Object(N.a)(j,2),f=h[0],p=h[1],m=Object(c.useState)(!1),O=Object(N.a)(m,2),x=O[0],g=O[1],v=function(e){var t=e.target;s((function(e){var n=Object(k.a)({},e);return n[t.name]=t.value,n}))},y=function(){return!i.userName.length||!i.password.length||!i.confirmpassword.length||!i.email.length},C=function(){return i.password.length<8?(u((function(e){return e.concat({message:"Password length should be greater than 8"})})),!1):i.password===i.confirmpassword||(u((function(e){return e.concat({message:"Password and Confirm Password does not match"})})),!1)},S=function(e){e&&(p(!0),e.user.updateProfile({displayName:i.userName,photoURL:"http://gravatar.com/avatar/".concat(e.user.uid,"?d=identicon")}).then((function(){p(!1),w(e)})).catch((function(e){p(!1),u((function(t){return t.concat(e)}))})))},w=function(t){p(!0),e.child(t.user.uid).set({displayName:t.user.displayName,photoURL:t.user.photoURL}).then((function(){p(!1),g(!0)})).catch((function(e){p(!1),u((function(t){return t.concat(e)}))}))};return Object(a.jsx)(d.a,{verticalAlign:"top",textAlign:"center",className:"grid-form",children:Object(a.jsxs)(d.a.Column,{style:{maxWidth:"500px"},children:[Object(a.jsx)("img",{src:"Screen-Shot-2019-01-17-at-2.29.34-PM.png",alt:"logo",style:{marginTop:"50px",width:"40%"}}),Object(a.jsx)("p",{className:"p-refreshed_page__heading",children:"Create Account"}),Object(a.jsx)("p",{className:"p-refreshed_page__sub_heading",children:"We suggest using the email address you use at work."}),Object(a.jsxs)(M.a,{onSubmit:function(e){u((function(){return[]})),g(!1),(y()?(u((function(e){return e.concat({message:"Please fill in all fields"})})),0):C())&&(p(!0),b.auth().createUserWithEmailAndPassword(i.email,i.password).then((function(e){p(!1),S(e),console.log(e)})).catch((function(e){p(!1),u((function(t){return t.concat(e)})),console.log(e)})))},children:[Object(a.jsxs)(z.a,{stacked:!0,children:[Object(a.jsx)(M.a.Input,{name:"userName",value:i.userName,icon:"user",iconPosition:"left",onChange:v,type:"text",placeholder:"User Name"}),Object(a.jsx)(M.a.Input,{name:"email",value:i.email,icon:"mail",iconPosition:"left",onChange:v,type:"email",placeholder:"User Email"}),Object(a.jsx)(M.a.Input,{name:"password",value:i.password,icon:"lock",iconPosition:"left",onChange:v,type:"password",placeholder:"User Password"}),Object(a.jsx)(M.a.Input,{name:"confirmpassword",value:i.confirmpassword,icon:"lock",iconPosition:"left",onChange:v,type:"password",placeholder:"Confirm Password"})]}),Object(a.jsx)(U.a,{disabled:f,loading:f,fluid:!0,style:{backgroundColor:"#4a154b",color:"white",fontSize:"120%"},children:"Continue"})]}),l.length>0&&Object(a.jsxs)(fe.a,{error:!0,children:[Object(a.jsx)("h3",{children:"Errors"}),l.map((function(e,t){return Object(a.jsx)("p",{children:e.message},t)}))]}),x&&Object(a.jsx)(fe.a,{success:!0,children:Object(a.jsx)("h3",{children:"Successfully Registered"})}),Object(a.jsxs)(fe.a,{children:["Already an User? ",Object(a.jsx)(se.b,{to:"/login",children:"Login "})]})]})})},be=n(156),me=n.n(be),Oe=n(170),xe=function(e){e.history;var t=Object(c.useState)({email:"",password:""}),n=Object(N.a)(t,2),i=n[0],s=n[1],r=Object(c.useState)(!1),o=Object(N.a)(r,2),l=o[0],u=o[1],j=Object(c.useState)([]),h=Object(N.a)(j,2),f=h[0],p=h[1],m=Object(c.useState)([]),O=Object(N.a)(m,2),x=O[0],g=O[1],v=Object(c.useCallback)(function(){var e=Object(Oe.a)(me.a.mark((function e(t){var n;return me.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=t.target.elements.email,e.prev=2,e.next=5,b.auth().sendPasswordResetEmail(n.value);case 5:u(!1),p(""),g((function(e){return e.concat("We have just sent you an email to change your password!")})),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(2),u(!1),g(""),p((function(t){return t.concat(e.t0)}));case 15:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),[]);return Object(a.jsx)(d.a,{verticalAlign:"top",textAlign:"center",className:"grid-form",children:Object(a.jsxs)(d.a.Column,{style:{maxWidth:"500px"},children:[Object(a.jsx)("img",{src:"Screen-Shot-2019-01-17-at-2.29.34-PM.png",alt:"logo",style:{marginTop:"50px",width:"40%"}}),Object(a.jsx)("p",{className:"p-refreshed_page__heading",children:"Forgot Passowrd"}),Object(a.jsx)("p",{className:"p-refreshed_page__sub_heading",children:"What email address are you using on Slack ?"}),Object(a.jsxs)(M.a,{onSubmit:v,children:[Object(a.jsx)(z.a,{stacked:!0,children:Object(a.jsx)(M.a.Input,{name:"email",value:i.email,icon:"mail",iconPosition:"left",onChange:function(e){var t=e.target;s((function(e){var n=Object(k.a)({},e);return n[t.name]=t.value,n}))},type:"email",placeholder:"User Email"})}),Object(a.jsx)(U.a,{disabled:l,loading:l,fluid:!0,style:{backgroundColor:"#4a154b",color:"white",fontSize:"120%"},children:"Reset My Password"})]}),f.length>0&&Object(a.jsxs)(fe.a,{error:!0,children:[Object(a.jsx)("h3",{children:"Errors"}),f.map((function(e,t){return Object(a.jsx)("p",{children:e.message},t)}))]}),x.length>0&&Object(a.jsxs)(fe.a,{success:!0,children:[Object(a.jsx)("h3",{children:"Success"}),x.map((function(e,t){return Object(a.jsx)("p",{children:e},t)}))]}),Object(a.jsxs)(fe.a,{children:["Not an User? ",Object(a.jsx)(se.b,{to:"/register",children:"Register "})]}),Object(a.jsxs)(fe.a,{children:["Already an User?  ",Object(a.jsx)(se.b,{to:"/login",children:"Login "})]})]})})},ge=function(){var e=Object(c.useState)({email:"",password:""}),t=Object(N.a)(e,2),n=t[0],i=t[1],s=Object(c.useState)(!1),r=Object(N.a)(s,2),o=r[0],l=r[1],u=Object(c.useState)([]),j=Object(N.a)(u,2),h=j[0],f=j[1],p=function(e){var t=e.target;i((function(e){var n=Object(k.a)({},e);return n[t.name]=t.value,n}))},m=function(){return!n.password.length||!n.email.length};return Object(a.jsx)(d.a,{verticalAlign:"top",textAlign:"center",className:"grid-form",children:Object(a.jsxs)(d.a.Column,{style:{maxWidth:"500px"},children:[Object(a.jsx)("img",{src:"Screen-Shot-2019-01-17-at-2.29.34-PM.png",alt:"logo",style:{marginTop:"50px",width:"40%"}}),Object(a.jsx)("p",{className:"p-refreshed_page__heading",children:"Sign in to Slack"}),Object(a.jsx)("br",{}),Object(a.jsxs)(M.a,{onSubmit:function(){f((function(){return[]})),m()&&(f((function(e){return e.concat({message:"Please fill in all fields"})})),1)||(l(!0),b.auth().signInWithEmailAndPassword(n.email,n.password).then((function(e){l(!1),console.log(e)})).catch((function(e){l(!1),f((function(t){return t.concat(e)}))})))},children:[Object(a.jsxs)(z.a,{stacked:!0,children:[Object(a.jsx)(M.a.Input,{name:"email",value:n.email,icon:"mail",iconPosition:"left",onChange:p,type:"email",placeholder:"User Email"}),Object(a.jsx)(M.a.Input,{name:"password",value:n.password,icon:"lock",iconPosition:"left",onChange:p,type:"password",placeholder:"User Password"})]}),Object(a.jsx)(U.a,{disabled:o,loading:o,fluid:!0,style:{backgroundColor:"#4a154b",color:"white",fontSize:"120%"},children:"Sign In with Email"})]}),h.length>0&&Object(a.jsxs)(fe.a,{error:!0,children:[Object(a.jsx)("h3",{children:"Errors"}),h.map((function(e,t){return Object(a.jsx)("p",{children:e.message},t)}))]}),Object(a.jsxs)(fe.a,{children:["Not an User? ",Object(a.jsx)(se.b,{to:"/register",children:"Register "})]}),Object(a.jsxs)(fe.a,{children:["Forgot Password? ",Object(a.jsx)(se.b,{to:"/forgotPassword",children:"Forgot Password "})]})]})})},ve=n(240),ye=n(228),Ce=function(e){return Object(a.jsx)(ve.a,{active:e.loading,children:Object(a.jsx)(ye.a,{size:"huge",content:"Loading..."})})},Se=Object(re.c)(he),we=Object(ie.f)(Object(f.b)((function(e){return{currentUser:e.user.currentUser,loading:e.channel.loading}}),(function(e){return{setUser:function(t){e(C(t))}}}))((function(e){return Object(c.useEffect)((function(){b.auth().onAuthStateChanged((function(t){t?(e.setUser(t),e.history.push("/")):"/forgotpassword"===e.location.pathname?(e.setUser(null),e.history.push("/forgotpassword")):(e.setUser(null),e.history.push("/login"))}))}),[]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(Ce,{loading:e.loading&&"/"===e.location.pathname}),Object(a.jsxs)(ie.c,{children:[Object(a.jsx)(ie.a,{path:"/forgotpassword",component:xe}),Object(a.jsx)(ie.a,{path:"/login",component:ge}),Object(a.jsx)(ie.a,{path:"/register",component:pe}),Object(a.jsx)(ie.a,{path:"/",component:ae})]})]})})));r.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(f.a,{store:Se,children:Object(a.jsx)(se.a,{children:Object(a.jsx)(we,{})})})}),document.getElementById("root")),ce()},60:function(e,t,n){}},[[211,1,2]]]);
//# sourceMappingURL=main.ddada333.chunk.js.map