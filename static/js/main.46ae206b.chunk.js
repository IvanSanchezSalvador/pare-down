(this["webpackJsonppare-down"]=this["webpackJsonppare-down"]||[]).push([[0],[,,,,,,,,,,,function(t,e,a){t.exports=a(26)},,,,,function(t,e,a){},function(t,e,a){},,function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){"use strict";a.r(e);var s=a(0),n=a.n(s),r=a(10),i=a.n(r),c=(a(16),a(2)),o=a(4),l=a(3),p=a(7),u=a(1),m=a(5),h=(a(17),a(6)),d=a.n(h),f=(a(19),function(t){function e(){return Object(c.a)(this,e),Object(o.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("h1",{className:"app-name"},"Pare Down for Spotify"),n.a.createElement("h2",{className:"app-name__sub"},"Create copy of your playlist pared down to number of songs you have chosen to."))}}]),e}(s.Component)),y=(a(20),function(t){function e(){return Object(c.a)(this,e),Object(o.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return 1===this.props.step?n.a.createElement("h3",{className:"step--header"},this.props.step,". Select which playlist you would like to pare down: "):2===this.props.step?n.a.createElement("h3",{className:"step--header"},this.props.step,". Personalize playlist that will be created by pare down process: "):3===this.props.step?n.a.createElement("h3",{className:"step--header"},this.props.step,". Preview your pare down process: "):null}}]),e}(s.Component)),v=(a(21),function(t){function e(){return Object(c.a)(this,e),Object(o.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return n.a.createElement("div",{className:"footer"},n.a.createElement("p",null,"Made with ",n.a.createElement("span",{style:{color:"red"}},"\u2764\ufe0f")," by",n.a.createElement("a",{href:"https://github.com/datguysheepy/pare-down"}," @datguysheepy")))}}]),e}(s.Component)),g=(a(22),function(t){function e(){return Object(c.a)(this,e),Object(o.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){var t=this,e=this.props.playlist,a=this.props.updateStep;return n.a.createElement("div",{className:"playlist",onClick:function(){return a({step:2,id:t.props.playlist.id})}},n.a.createElement("p",{className:"playlist__song-count"},"Number of songs: ",e.songsNum),n.a.createElement("div",{className:"playlist__cover"},n.a.createElement("img",{src:e.imageUrl,className:"playlist__cover--img",alt:e.name,title:e.name})),n.a.createElement("p",{className:"playlist__name"},e.name))}}]),e}(s.Component)),k=(a(23),function(t){function e(){return Object(c.a)(this,e),Object(o.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(u.a)(e,[{key:"shouldComponentUpdate",value:function(t){return this.props.iValue===t.iValue}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("p",null,this.props.num+1,". ",n.a.createElement("span",{style:{opacity:"0.6"}},this.props.track.name,".")))}}]),e}(s.Component));function b(){var t=this,e=this.props.id,a=d.a.parse(window.location.search).access_token;!0===this.state.sort?fetch("https://api.spotify.com/v1/users/".concat(this.props.userID,"/playlists/").concat(e,"?fields=name,images,tracks.total"),{headers:{Authorization:"Bearer "+a}}).then((function(t){return t.json()})).then((function(s){return t.setState({name:s.name,imageUrl:0===s.images.length?s.images.push(""):s.images[0].url,tracksNum:s.tracks.total,how:fetch("https://api.spotify.com/v1/users/".concat(t.props.userID,"/playlists/").concat(e,"/tracks?offset=").concat(s.tracks.total>100?s.tracks.total-100:0),{headers:{Authorization:"Bearer "+a}}).then((function(t){return t.json()})).then((function(e){return t.setState({tracks:e.items})}))})})):!1===this.state.sort?fetch("https://api.spotify.com/v1/users/".concat(this.props.userID,"/playlists/").concat(e),{headers:{Authorization:"Bearer "+a}}).then((function(t){return t.json()})).then((function(e){return t.setState({name:e.name,imageUrl:0===e.images.length?e.images.push(""):e.images[0].url,tracksNum:e.tracks.total,tracks:e.tracks.items})})):this.state.sort||(fetch("https://api.spotify.com/v1/users/".concat(this.props.userID,"/playlists/").concat(e,"?fields=name,images,tracks.total"),{headers:{Authorization:"Bearer "+a}}).then((function(t){return t.json()})).then((function(s){return t.setState({name:s.name,imageUrl:0===s.images.length?s.images.push(""):s.images[0].url,tracksNum:s.tracks.total,how:fetch("https://api.spotify.com/v1/users/".concat(t.props.userID,"/playlists/").concat(e,"/tracks?offset=").concat(s.tracks.total>100?s.tracks.total-100:0),{headers:{Authorization:"Bearer "+a}}).then((function(t){return t.json()})).then((function(e){return t.setState({tracks:e.items})}))})})),this.setState({sort:!1}))}var w=function(t){function e(){var t;return Object(c.a)(this,e),(t=Object(o.a)(this,Object(l.a)(e).call(this))).state={inputValue:0},b=b.bind(Object(p.a)(t)),N=N.bind(Object(p.a)(t)),t}return Object(m.a)(e,t),Object(u.a)(e,[{key:"componentDidMount",value:function(){b()}},{key:"componentWillUnmount",value:function(){console.log("a")}}]),Object(u.a)(e,[{key:"render",value:function(){var t=this,e=this.props.updateStep;return n.a.createElement("div",{id:"paredown"},n.a.createElement("div",{id:"paredown__left"},n.a.createElement("div",{id:"paredown__details"},n.a.createElement("img",{src:this.state.imageUrl,style:{width:"120px",height:"120px"},alt:this.state.name,title:this.state.name}),n.a.createElement("h1",null,this.state.name)),n.a.createElement("div",{className:"paredown__playlist"},n.a.createElement("p",{style:{textAlign:"center",fontWeight:"bold",fontSize:16}},this.state.tracksNum<=100?n.a.createElement("span",null,this.state.tracksNum," latest songs from selected playlist:"):n.a.createElement("span",null,"100 latest songs from selected playlist:")),this.state.tracks?!0===this.state.sort?this.state.tracks.map((function(e,a){return n.a.createElement(k,{track:e.track,key:a,num:a,iValue:t.state.inputValue})})):this.state.tracks.reverse().map((function(e,a){return n.a.createElement(k,{track:e.track,key:a,num:a,iValue:t.state.inputValue})})):n.a.createElement("p",null,"Sorry, couldn't find any songs in selected playlist. "))),n.a.createElement("div",{id:"paredown__right"},n.a.createElement("form",null,n.a.createElement("p",{className:"options__header"},"Pare it down to/by..."),n.a.createElement("div",{style:{textAlign:"center"}},n.a.createElement("input",{type:"number",min:"0",id:"new-num",onChange:function(e){return t.updateInputValue(e,t.state.tracksNum)}}),n.a.createElement("input",{type:"checkbox",id:"percent--btn"})),n.a.createElement("p",{id:"new-num__show"},"New playlist will have: ",this.state.inputValue," songs."),n.a.createElement("p",{className:"options__header",style:{marginTop:21}},"Add songs from selected playlist sorted by:",n.a.createElement("input",{type:"checkbox",id:"sort--btn",onClick:function(){return N()}})),n.a.createElement("div",{id:"create--btn",onClick:function(){return e({step:3,id:t.props.id,sort:t.state.sort,userTrackNum:t.state.inputValue,playlistName:t.state.name,imageUrl:t.state.imageUrl,tracksNum:t.state.tracksNum})}},"Create new playlist"))))}},{key:"updateInputValue",value:function(t,e){document.getElementById("percent--btn").checked?t.target.value<=100?this.setState({inputValue:(e*t.target.value/100).toFixed(0)}):this.setState({inputValue:e}):t.target.value<=e?this.setState({inputValue:t.target.value}):this.setState({inputValue:e})}}]),e}(s.Component);function N(){this.setState({sort:!this.state.sort}),b()}var E=a(9),j=(a(24),function(t){function e(){var t;return Object(c.a)(this,e),(t=Object(o.a)(this,Object(l.a)(e).call(this))).state={uris:[],a:[]},t}return Object(m.a)(e,t),Object(u.a)(e,[{key:"componentDidMount",value:function(){var t=this,e=this.props.userTrackNum,a=this.props.id,s=d.a.parse(window.location.search).access_token;if(s&&e>0)if(!1===this.props.sort)for(var n=0;n<e;n+=100){var r=100,i=this.props.tracksNum-(n+100);e-n<100&&(r=e-n,i=this.props.tracksNum-n-r),fetch("https://api.spotify.com/v1/playlists/".concat(a,"/tracks?fields=items(track(uri, album.images))&limit=").concat(r,"&offset=").concat(i),{headers:{Authorization:"Bearer "+s}}).then((function(t){return t.json()})).then((function(e){return t.setState((function(t){return{uris:[].concat(Object(E.a)(t.uris),[e.items.reverse().map((function(t){return t.track.uri}))]),img4:e.items.slice(0,4).map((function(t){return t.track.album.images[1].url}))}}))}))}else if(!0===this.props.sort)for(var c=0;c<e;c+=100){var o=100;e-c<100&&(o=e-c),fetch("https://api.spotify.com/v1/playlists/".concat(a,"/tracks?fields=items(track(uri, album.images))&limit=").concat(o,"&offset=").concat(c),{headers:{Authorization:"Bearer "+s}}).then((function(t){return t.json()})).then((function(e){return t.setState((function(t){return{uris:[].concat(Object(E.a)(t.uris),[e.items.map((function(t){return t.track.uri}))]),img4:e.items.slice(0,4).map((function(t){return t.track.album.images[1].url}))}}))}))}}},{key:"render",value:function(){var t=this,e=this.props.updateStep,a=this.props.userTrackNum;return n.a.createElement("div",null,0===a?n.a.createElement("p",{id:"creation-error",onClick:function(){return window.location.reload(!0)}},"Sorry, but you choose wrong number of songs in",n.a.createElement("span",{style:{color:"#fff"}}," step 2"),". Click on this text to go back to playlist selection page."):n.a.createElement("div",{id:"preview-box"},n.a.createElement("div",{id:"preview-selected"},n.a.createElement("p",{className:"preview-header"},"SELECTED PLAYLIST:"),n.a.createElement("img",{src:this.props.imageUrl,className:"preview-selected-img",alt:this.props.playlistName,title:this.props.playlistName}),n.a.createElement("p",{className:"preview-name"},"Name: ",n.a.createElement("span",{style:{opacity:.5}},this.props.playlistName)),n.a.createElement("p",{className:"preview-num"},"Num of songs: ",n.a.createElement("span",{style:{opacity:.5}},this.props.tracksNum))),n.a.createElement("div",{id:"preview-btns"},n.a.createElement("div",{id:"preview-btn--create",className:"preview-btn",onClick:function(){return e({step:4,uris:t.state.uris,playlistName:t.props.playlistName})}},"Create"),n.a.createElement("div",{id:"preview-btn--cancel",className:"preview-btn",onClick:function(){return window.location.reload(!1)}},"Cancel")),n.a.createElement("div",{id:"preview-pared"},n.a.createElement("p",{className:"preview-header"},"AFTER PARE DOWN:"),this.state.img4?this.state.img4.length<4?n.a.createElement("img",{src:this.state.img4[0],className:"preview-pared-img--big",alt:this.props.playlistName+"Pared Down",title:this.props.playlistName+"Pared Down"}):n.a.createElement("div",{id:"preview-pared-img-box"},n.a.createElement("img",{src:this.state.img4[2],className:"preview-pared-img",alt:this.props.playlistName+"Pared Down",title:this.props.playlistName+"Pared Down"}),n.a.createElement("img",{src:this.state.img4[0],className:"preview-pared-img",alt:this.props.playlistName+"Pared Down",title:this.props.playlistName+"Pared Down"}),n.a.createElement("img",{src:this.state.img4[3],className:"preview-pared-img",alt:this.props.playlistName+"Pared Down",title:this.props.playlistName+"Pared Down"}),n.a.createElement("img",{src:this.state.img4[1],className:"preview-pared-img",alt:this.props.playlistName+"Pared Down",title:this.props.playlistName+"Pared Down"})):null,n.a.createElement("p",{className:"preview-name"},"Name: ",n.a.createElement("span",{style:{opacity:.5}},this.props.playlistName," - Pared Down")),n.a.createElement("p",{className:"preview-num"},"Num of songs: ",n.a.createElement("span",{style:{opacity:.5}},a)))))}}]),e}(s.Component)),O=function(t){function e(){var t;return Object(c.a)(this,e),(t=Object(o.a)(this,Object(l.a)(e).call(this))).state={success:null},t}return Object(m.a)(e,t),Object(u.a)(e,[{key:"componentDidMount",value:function(){var t=this,e=this.props.uris,a=d.a.parse(window.location.search).access_token;a&&fetch("https://api.spotify.com/v1/users/".concat(this.props.userID,"/playlists"),{method:"POST",body:JSON.stringify({name:this.props.playlistName+" - Pared Down"}),headers:{Authorization:"Bearer "+a}}).then((function(t){return t.json()})).then((function(s){for(var n=0;n<e.length;n++)fetch("https://api.spotify.com/v1/playlists/".concat(s.id,"/tracks"),{method:"POST",body:JSON.stringify({uris:t.props.uris[n]}),headers:{Authorization:"Bearer "+a,"Content-Type":"application/json"}}).then((function(e){201===e.status&&t.setState({success:"Playlist was created!"})}))}))}},{key:"render",value:function(){return this.state.success?n.a.createElement("div",null,n.a.createElement("p",{className:"step--header"},this.state.success),n.a.createElement("div",{onClick:function(){return window.location.reload(!0)},className:"btn",style:{backgroundColor:"#333",marginTop:0,maxWidth:270}},"Pare down another playlist")):null}}]),e}(s.Component),S=(a(25),function(t){function e(){var t;return Object(c.a)(this,e),(t=Object(o.a)(this,Object(l.a)(e).call(this))).state={filterString:""},t.updateStep=t.updateStep.bind(Object(p.a)(t)),t}return Object(m.a)(e,t),Object(u.a)(e,[{key:"updateStep",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.step,a=t.id,s=t.sort,n=t.userTrackNum,r=t.playlistName,i=t.imageUrl,c=t.tracksNum,o=t.uris;this.setState({step:e,id:a,sort:s,userTrackNum:n,playlistName:r,imageUrl:i,tracksNum:c,uris:o})}}]),Object(u.a)(e,[{key:"componentDidMount",value:function(){var t=this,e=d.a.parse(window.location.search).access_token;e&&(fetch("https://api.spotify.com/v1/me",{headers:{Authorization:"Bearer "+e}}).then((function(t){return t.json()})).then((function(e){return t.setState({userID:e.id})})),fetch("https://api.spotify.com/v1/me/playlists",{headers:{Authorization:"Bearer "+e}}).then((function(t){return t.json()})).then((function(e){return t.setState({playlists:e.items.map((function(t){return 0===t.images.length&&t.images.push(""),{name:t.name,imageUrl:t.images[0].url,songsNum:t.tracks.total,id:t.id}})),step:1})})))}},{key:"render",value:function(){var t=this,e=this.state.playlists?this.state.playlists.filter((function(e){return e.name.toLowerCase().includes(t.state.filterString.toLowerCase())})):[];return n.a.createElement("div",{className:"App"},n.a.createElement(f,null),n.a.createElement(y,{step:this.state.step}),this.state.playlists&&1===this.state.step?n.a.createElement("div",{className:"playlist-grid"},e.map((function(e,a){return n.a.createElement(g,{playlist:e,step:t.state.step,key:a,userID:t.state.userID,updateStep:t.updateStep})}))):this.state.playlists&&2===this.state.step?n.a.createElement(w,{id:this.state.id,userID:this.state.userID,updateStep:this.updateStep}):this.state.playlists&&3===this.state.step?n.a.createElement(j,{id:this.state.id,sort:this.state.sort,userTrackNum:this.state.userTrackNum,userID:this.state.userID,playlistName:this.state.playlistName,imageUrl:this.state.imageUrl,tracksNum:this.state.tracksNum,updateStep:this.updateStep}):this.state.playlists&&4===this.state.step?n.a.createElement(O,{uris:this.state.uris,userID:this.state.userID,playlistName:this.state.playlistName}):n.a.createElement("div",{className:"btn",onClick:function(){window.location=window.location.href.includes("localhost")?"http://localhost:8888/login":"http://pare-down-backend.mtymon.me/login",t.setState({step:1})}},"log in with spotify"),n.a.createElement(v,null))}}]),e}(s.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}],[[11,1,2]]]);
//# sourceMappingURL=main.46ae206b.chunk.js.map