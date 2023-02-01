(()=>{"use strict";var e,t={292:()=>{const e=window.wp.blocks,t=window.wp.element,n=window.wp.components,o=window.wp.blockEditor,l=window.wp.data,r=window.wp.i18n;function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},s.apply(this,arguments)}const a=JSON.parse('{"u2":"va/collapsible-list"}');(0,e.registerBlockType)(a.u2,{edit:function(e){let{attributes:{listItemsToShow:s},setAttributes:a,clientId:i}=e;const c=(0,o.useBlockProps)(),{min:p,max:u}=(0,l.useSelect)((e=>{const t=e("core/block-editor").getBlock(i).innerBlocks.find((e=>"core/list"==e.name));if(!t)return{min:0,max:0};const n=t.innerBlocks.length;return{max:n,min:Math.min(1,n)}}));return(0,t.createElement)("div",c,(0,t.createElement)(o.InspectorControls,null,(0,t.createElement)(n.PanelBody,null,(0,t.createElement)(n.RangeControl,{__nextHasNoMarginBottom:!0,label:(0,r.__)("Items to show"),value:s,onChange:e=>a({listItemsToShow:e}),min:p,max:u}))),(0,t.createElement)(o.InnerBlocks,{template:[["core/list"],["core/buttons",[],[["core/button",{text:"Expand",className:"clist-expand"}],["core/button",{text:"Collapse",className:"clist-collapse"}]]]],templateLock:"all"}))},save:function(e){let{attributes:{listItemsToShow:n,animateCollapse:l}}=e,r=o.useBlockProps.save();return r={...r,className:`${r.className} clist-frontend clist-hide show-${n}`},(0,t.createElement)("div",s({},r,{"data-listItemsToShow":n,"data-animateCollapse":l}),(0,t.createElement)(o.InnerBlocks.Content,null))}})}},n={};function o(e){var l=n[e];if(void 0!==l)return l.exports;var r=n[e]={exports:{}};return t[e](r,r.exports,o),r.exports}o.m=t,e=[],o.O=(t,n,l,r)=>{if(!n){var s=1/0;for(p=0;p<e.length;p++){n=e[p][0],l=e[p][1],r=e[p][2];for(var a=!0,i=0;i<n.length;i++)(!1&r||s>=r)&&Object.keys(o.O).every((e=>o.O[e](n[i])))?n.splice(i--,1):(a=!1,r<s&&(s=r));if(a){e.splice(p--,1);var c=l();void 0!==c&&(t=c)}}return t}r=r||0;for(var p=e.length;p>0&&e[p-1][2]>r;p--)e[p]=e[p-1];e[p]=[n,l,r]},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={826:0,431:0};o.O.j=t=>0===e[t];var t=(t,n)=>{var l,r,s=n[0],a=n[1],i=n[2],c=0;if(s.some((t=>0!==e[t]))){for(l in a)o.o(a,l)&&(o.m[l]=a[l]);if(i)var p=i(o)}for(t&&t(n);c<s.length;c++)r=s[c],o.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return o.O(p)},n=self.webpackChunkcollapsible_list=self.webpackChunkcollapsible_list||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var l=o.O(void 0,[431],(()=>o(292)));l=o.O(l)})();