import{S as m,i as f}from"./assets/vendor-5b791d57.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const p=document.querySelector(".form"),h=document.querySelector(".input-name"),d=document.querySelector(".loader"),u=document.querySelector(".gallery");let c;p.addEventListener("submit",g);function g(o){o.preventDefault();const r=h.value.trim();if(r===""){l("Please enter a search query");return}const s="https://pixabay.com",n="/api/",e="42310325-d8e2b88bd4f4d7db9639050a5",t=new URLSearchParams({key:e,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}),i=`${s}${n}?${t}`;d.classList.add("visible"),fetch(i).then(a=>a.json()).then(a=>{L(a.hits)}).catch(a=>{console.error("Error fetching data:",a),l("Error fetching data. Please try again later.")}).finally(()=>{d.classList.remove("visible")})}function y(o){const{webformatURL:r,largeImageURL:s,tags:n,likes:e,views:t,comments:i,downloads:a}=o;return`
    <li class="photo">
      <div class="photo-card">
        <a class="image-link" data-lightbox="image" href="${s}">
          <img class="gallery-image" data-source="${s}" src="${r}" alt="${n}">
        </a>
      </div>
      <div class="description">
        <p class="description-item"> Likes ${e}</p>
        <p class="description-item"> Views ${t}</p>
        <p class="description-item"> Comments ${i}</p>
        <p class="description-item"> Downloads ${a}</p>
      </div>
    </li>`}function L(o){if(u.innerHTML="",o.length===0){l("Sorry, there are no images matching your search query. Please try again!");return}o.forEach(r=>{const s=y(r);u.insertAdjacentHTML("beforeend",s)}),c?c.refresh():c=new m(".image-link",{captionsData:"alt",captionDelay:250})}function l(o){f.error({title:"Error",message:o,backgroundColor:"red",messageColor:"white",messageSize:"25"})}
//# sourceMappingURL=commonHelpers.js.map
