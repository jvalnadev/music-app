webpackJsonp([1],{PYJo:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("4KzK"),r={data:function(){return{response:{}}},computed:{dataToFetch:function(){return{albums:function(){return Object(a["m"])({type:"albums"})}}},getInfo:function(){var t=this,e=t.response.albums,s=e.total;return[{value:s,subtitle:t.$tc("album",1===s?1:0)}]}}},i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("api-request",{staticClass:"o-view__parent",attrs:{resource:t.dataToFetch},model:{value:t.response,callback:function(e){t.response=e},expression:"response"}},[t.response.albums?s("ma-stage",{attrs:{image:t.response.albums.items[0].album.images,subtitle:t.$t("library"),title:t.$tc("album",0),info:t.getInfo}}):t._e(),t.response.albums?s("div",{staticClass:"o-view__content"},[s("ma-section",{attrs:{actions:!1}},t._l(t.response.albums.items,function(t){return s("ma-box",{key:t.album.id,attrs:{slot:"boxes",primaryid:t.album.id,image:t.album.images,title:t.album.name,artists:t.album.artists},slot:"boxes"})}))],1):t._e()],1)},n=[],o=s("XyMi"),l=!1,c=null,u=null,m=null,p=Object(o["a"])(r,i,n,l,c,u,m);e["default"]=p.exports},aomO:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("NM/j"),r=s.n(a),i=s("4KzK"),n={data:function(){return{response:{}}},computed:{lastPlayedArtist:function(){var t=this,e=t.response.history,s=r()(e.items,1),a=s[0],i=a.track.artists[0].id;return i},dataToFetch:function(){return{history:function(){return Object(i["k"])({type:"track"})}}}}},o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("api-request",{staticClass:"o-view__parent",attrs:{resource:t.dataToFetch},model:{value:t.response,callback:function(e){t.response=e},expression:"response"}},[t.response.history?s("ma-stage",{attrs:{image:t.response.history.items[0].track.album.images,subtitle:t.$t("library"),title:t.$t("recentlyplayed")}}):t._e(),t.response.history?s("div",{staticClass:"o-view__content"},[s("ma-section",{attrs:{actions:!1}},t._l(t.response.history.items,function(t,e){return s("ma-list",{key:e,attrs:{slot:"list",image:t.track.album.images,title:t.track.name,trackId:t.track.id,artists:t.track.artists,album:t.track.album,explicit:t.track.explicit,popularity:t.track.popularity,duration:t.track.duration_ms,index:e},slot:"list"})}))],1):t._e()],1)},l=[],c=s("XyMi"),u=!1,m=null,p=null,b=null,d=Object(c["a"])(n,o,l,u,m,p,b);e["default"]=d.exports},iB3c:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("4KzK"),r={data:function(){return{response:{}}},computed:{dataToFetch:function(){return{tracks:function(){return Object(a["m"])({type:"tracks"})}}},getInfo:function(){var t=this,e=t.response.tracks,s=e.total;return[{value:s,subtitle:t.$tc("track",1===s?1:0)}]}}},i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("api-request",{staticClass:"o-view__parent",attrs:{resource:t.dataToFetch},model:{value:t.response,callback:function(e){t.response=e},expression:"response"}},[t.response.tracks?s("ma-stage",{attrs:{image:t.response.tracks.items[0].track.album.images,subtitle:t.$t("library"),title:t.$tc("track",0),info:t.getInfo}}):t._e(),t.response.tracks?s("div",{staticClass:"o-view__content"},[s("ma-section",{attrs:{actions:!1}},t._l(t.response.tracks.items,function(t,e){return s("ma-list",{key:t.track.id,attrs:{slot:"list",image:t.track.album.images,title:t.track.name,trackId:t.track.id,artists:t.track.artists,album:t.track.album,explicit:t.track.explicit,popularity:t.track.popularity,duration:t.track.duration_ms,index:e},slot:"list"})}))],1):t._e()],1)},n=[],o=s("XyMi"),l=!1,c=null,u=null,m=null,p=Object(o["a"])(r,i,n,l,c,u,m);e["default"]=p.exports}});
//# sourceMappingURL=mylibrary0.1.5653c3f2.js.map