(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();let l=document.getElementById("text"),u=document.getElementById("output_text"),c=document.getElementById("counter");l.addEventListener("input",()=>{let o,t;l.value===""?(o=0,t=0,u.style.display="none"):(o=d(!1),o=o.match(/\S+/g),o=o.length,t=l.value,t=t.length),c.innerText=`words: ${o} letters:${t}`});let d=o=>{if(l.value=="")alert("please type something");else{let t=/\s+\s/g,n=l.value.replace(t," ");if(o)u.style.display="block",l.value=n;else return n}};
