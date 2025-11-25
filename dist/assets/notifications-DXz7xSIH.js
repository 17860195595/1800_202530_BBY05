function i(){let t=document.getElementById("global-toast-container");if(!t){t=document.createElement("div"),t.id="global-toast-container",t.style.position="fixed",t.style.top="16px",t.style.left="50%",t.style.transform="translateX(-50%)",t.style.zIndex="9999",t.style.display="flex",t.style.flexDirection="column",t.style.gap="10px",document.body.appendChild(t);const e=document.createElement("style");e.textContent=`
      .global-toast{min-width:260px;max-width:88vw;padding:10px 14px;border-radius:10px;color:#fff;box-shadow:0 6px 20px rgba(0,0,0,.18);display:flex;align-items:center;gap:10px;opacity:0;transform:translateY(-8px);transition:all .25s ease}
      .global-toast.show{opacity:1;transform:translateY(0)}
      .global-toast .icon{font-size:18px}
      .global-toast.info{background:#2563eb}
      .global-toast.success{background:#16a34a}
      .global-toast.warn{background:#d97706}
      .global-toast.error{background:#dc2626}
      @media (prefers-color-scheme: dark){
        .global-toast{box-shadow:0 6px 20px rgba(0,0,0,.35)}
      }
    `,document.head.appendChild(e)}return t}function n(t,e,r=2600){const s=i(),o=document.createElement("div");o.className=`global-toast ${t||"info"}`;const a=document.createElement("span");a.className="icon",a.textContent=t==="success"?"✔":t==="warn"?"⚠":t==="error"?"✖":"ℹ";const l=document.createElement("span");l.textContent=String(e||""),o.appendChild(a),o.appendChild(l),s.appendChild(o),requestAnimationFrame(()=>o.classList.add("show"));const c=Math.max(1200,r);setTimeout(()=>{o.classList.remove("show"),setTimeout(()=>s.removeChild(o),250)},c)}function d(t,e){n("success",t,e)}function p(t,e){n("warn",t,e)}function m(t,e){n("error",t,e)}export{m as a,d as b,p as s};
