if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let o={};const l=e=>i(e,t),c={module:{uri:t},exports:o,require:l};s[t]=Promise.all(n.map((e=>c[e]||l(e)))).then((e=>(r(...e),o)))}}define(["./workbox-1ab968a5"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-B5AAtlkJ.css",revision:null},{url:"assets/index-BlK_xchS.js",revision:null},{url:"index.html",revision:"43ee7fb25e06eb519ccf79784a88ba85"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"logo.png",revision:"1775867b9de0206eaaf3bee90fc842d3"},{url:"manifest.webmanifest",revision:"bf851a05d9b4b4219aa6dedc9acf2067"}],{}),e.cleanupOutdatedCaches()}));
