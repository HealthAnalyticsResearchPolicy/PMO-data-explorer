"use strict";function _slicedToArray(e,t){return _arrayWithHoles(e)||_iterableToArrayLimit(e,t)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function _iterableToArrayLimit(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var r=[],a=!0,n=!1,i=void 0;try{for(var s,c=e[Symbol.iterator]();!(a=(s=c.next()).done)&&(r.push(s.value),!t||r.length!==t);a=!0);}catch(e){n=!0,i=e}finally{try{a||null==c.return||c.return()}finally{if(n)throw i}}return r}}function _arrayWithHoles(e){if(Array.isArray(e))return e}!function(e,p){e.PMO=function(e){this.version="0.5.0",this.anchor=p.getElementById("cards"),this.name=e.pmoName,this.description=e.description,this.slug=e.pmoName.split(" ").join("-").toLowerCase(),this.chartData=e.estimates,this.chartsToBuild=Object.keys(e.estimates),this.container=function(){var e=p.createElement("article");return e.setAttribute("class","indicator-block indicator-".concat(this.slug)),e},this.notes=function(){if(e.trendTests)return{Notes:["Source: 2018-2019 Ontario Student Drug Use and Health Survey","Missing bars indicate an estimate is not releaseable due to small numbers"],"Trend analysis":e.trendTests,Feedback:'Your comments are welcome through our <a href="#">feedback form</a>'};return{Notes:["Source: 2018-2019 Ontario Student Drug Use and Health Survey","Missing bars indicate an estimate is not releaseable due to small numbers"],Feedback:'Your comments are welcome through our <a href="#">feedback form</a>'}},this.buildHeader=function(){var r=this,e=p.createElement("div"),t=p.createElement("h3"),a=p.createElement("p");e.setAttribute("class","indicator-header"),t.setAttribute("class","indicator-title"),a.setAttribute("class","indicator-desc"),a.insertAdjacentText("afterbegin",this.description),t.insertAdjacentText("afterbegin",this.name),e.appendChild(t),e.appendChild(a);var n=[];Object.keys(this.chartData).forEach(function(t){var e=p.createElement("button");e.setAttribute("class","byAll"==t?"btn btn-default active wb-toggle":"btn btn-default wb-toggle"),e.setAttribute("data-toggle",'{ "selector": "#'.concat(r.slug,"-").concat(t,'","group": ".chart-').concat(r.slug,'","type": "on"}')),e.insertAdjacentText("afterbegin",function(){var e="";switch(t){case"byAll":e="By Response Category";break;case"byGrade":e="By Grade";break;case"bySex":e="By Sex";break;case"byYear":e="By Year"}return e}()),n.push(e)});var i=p.createElement("div"),s=p.createElement("div"),c=p.createElement("a");c.insertAdjacentText("afterbegin","?");for(var o=0,l=Object.entries({class:"btn btn-sm btn-default overlay-lnk",href:"#options-hint","aria-controls":"options-hint",role:"button"});o<l.length;o++){var d=_slicedToArray(l[o],2),u=d[0],h=d[1];c.setAttribute(u,h)}return s.setAttribute("class","view-control"),i.setAttribute("class","view-mode-control btn-group-sm btn-group"),n.forEach(function(e,t){i.appendChild(e)}),s.appendChild(i),s.appendChild(c),e.appendChild(s),e},this.buildCharts=function(){var r=this,a=p.createElement("div");return a.setAttribute("class","indicator-chart"),Object.keys(this.chartData).forEach(function(e){var t=p.createElement("div");t.setAttribute("id","".concat(r.slug,"-").concat(e)),t.setAttribute("class","chart chart-".concat(r.slug)),"byAll"===e&&(t.className+=" on"),a.appendChild(t)}),a},this.buildNotes=function(){var e=p.createElement("div");e.setAttribute("class","indicator-footer");var t=p.createElement("div");t.setAttribute("class","wb-tabs");var c=p.createElement("div");return c.setAttribute("class","tabpanels"),Object.entries(this.notes()).forEach(function(e){var t=_slicedToArray(e,2),r=t[0],a=t[1],n=p.createElement("details");n.setAttribute("class","tab-".concat(r.toLowerCase()));var i,s=p.createElement("summary");s.insertAdjacentText("afterbegin",r),Array.isArray(a)?(n.appendChild(s),a.forEach(function(e){var t=p.createElement("p");t.insertAdjacentText("afterbegin",e),n.appendChild(t)})):((i=p.createElement("p")).insertAdjacentHTML("afterbegin",a),n.appendChild(s),n.appendChild(i)),c.appendChild(n)}),t.appendChild(c),e.appendChild(t),e},this.create=function(){var e=this.container();e.appendChild(this.buildHeader()),e.appendChild(this.buildCharts()),e.appendChild(this.buildNotes()),this.anchor.appendChild(e)}}}(window,document),function(o,s,l,d,n){var c=l.querySelector(".search-text"),e=l.querySelector(".index-container");function u(a){fetch("https://cdn.jsdelivr.net/gh/DurhamRegionHARP/PMO-data-explorer@gh-pages/_data/pmo.json").then(function(e){if(e.ok)return e.json();var t=l.getElementById("snackbar-error");t.classList.add("show"),setTimeout(function(){t.classList.remove("show")},3e3)}).then(function(e){var t={qry:function(e){var t=new RegExp(a.value,"i");if(t.test(e.pmoName)||t.test(e.category)||t.test(e.description)||t.test(e.tags.join(" ")))return e},cat:function(e){if(e.category.split(" ").join("-").toLowerCase()===a.value)return e},ind:function(e){if(e.pmoName.split(" ").join("-").toLowerCase()===a.value)return e}},r=e.indicators.filter(t[a.action]);"qry"===a.action&&function(e){var t=e.length,r=l.createElement("p"),a=t+" result"+(1===t?"":"s")+" found";0===t&&(a+='<p>Why not <a href="#">suggest</a> this topic be added?</p>');r.insertAdjacentHTML("afterbegin",a);var n=l.querySelector(".search-feedback");{var i;n?(n.removeChild(n.firstChild),n.appendChild(r),c.parentNode.appendChild(n)):((i=l.createElement("span")).setAttribute("class","search-feedback"),i.appendChild(r),c.parentNode.appendChild(i))}}(r),r.forEach(function(e){!function(e){var c=new n(e);{l.querySelector(".indicator-"+c.slug)||(c.create(),c.chartsToBuild.forEach(function(e){var t,r,a,n,i,s;t="#".concat(c.slug,"-").concat(e),r=c.chartData[e],a=r.series.map(function(e){return e.cl.map(function(e){return e[0]})}),n=r.series.map(function(e){return e.cl.map(function(e){return e[1]})}),i=r.series.map(function(e){return e.notes}),s={axisX:{showGrid:!1},axisY:{labelInterpolationFnc:function(e){return e+"%"},onlyInteger:!0},height:"250px",width:"1100px",high:100,low:0,showGridBackground:!0,seriesBarDistance:22,plugins:[d.plugins.errorBars({orientation:"vertical",confidenceLimit:{upper:a,lower:n}}),d.plugins.tooltip({tooltipFnc:function(e,t){var r="null"==e?"":"<br>".concat(e);return"".concat(t,"%").concat(r)}}),d.plugins.legend({className:"list-inline",clickable:!1}),d.plugins.ctAccessibility({caption:"OSDUHS Results",seriesHeader:"Analysis group",valueTransform:function(e){return e+"%"}})]},new d.Bar(t,r,s,[["screen and (max-width: 767px)",{width:"650px",seriesBarDistance:15,chartPadding:{right:25}}],["screen and (min-width: 768px)",{width:"680px",seriesBarDistance:22}],["screen and (min-width: 992px)",{seriesBarDistance:22,width:"900px"}],["screen and (min-width: 1200px)",{seriesBarDistance:22,width:"1100px"}]]).on("draw",function(e){"bar"===e.type&&e.element.attr({"ct:meta":this[e.seriesIndex][e.index]})}.bind(i)),o(".wb-toggle").trigger("wb-init.wb-toggle"),o(".wb-tabs").trigger("wb-init.wb-tabs")}),l.querySelector(".indicator-"+c.slug).addEventListener("click",function(e){var t;"BUTTON"===e.target.tagName&&((t=e.target.parentNode).hasChildNodes()&&t.childNodes.forEach(function(e){e.classList.remove("active")}),e.target.classList.add("active"))}))}}(e)})}).catch(function(e){console.log(e);var t=l.getElementById("snackbar-error");t.classList.add("show"),setTimeout(function(){t.classList.remove("show")},3e3)})}function h(){for(var e=l.getElementById("cards");e.firstChild;)e.removeChild(e.firstChild)}l.addEventListener("DOMContentLoaded",function(){c.addEventListener("input",function(e){var i=l.getElementById("cards");i.setAttribute("class","indicator-list"),"number"==typeof this.toId&&(clearTimeout(this.toId),this.toId=void 0),h(),this.toId=setTimeout(function(e){var t,r=e.target.value;if(!r.length)return(t=l.querySelector(".search-feedback"))&&c.parentNode.removeChild(t),void i.classList.remove("indicator-list");var a="#qry=".concat(r),n=a.substr(1).split("=");dataLayer.push({event:"query",query_string:n[1]}),s.location.hash=a,u({action:n[0],value:n[1].replace(/[.*+\-?^${}()|[\]\\]/g,"\\$&")})}.bind(this),600,e)}),e.addEventListener("click",function(e){var t,r,a;"index-link"===e.target.className&&(h(),l.getElementById("cards").setAttribute("class","indicator-list"),t=e.target.hash.substr(1).split("="),a=(r=o("#close-index")).data("toggle"),s.location.hash=e.target.hash,u({action:t[0],value:t[1]}),r.trigger("toggle.wb-toggle",a))})})}($,window,document,Chartist,PMO);
//# sourceMappingURL=bundle.js.map
