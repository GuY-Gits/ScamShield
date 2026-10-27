const screen=document.getElementById('boot-screen');
let dismissed=false;
const started=performance.now();
function dismiss(){if(dismissed)return;dismissed=true;screen?.remove();}
document.getElementById('boot-skip')?.addEventListener('click',dismiss);
document.addEventListener('keydown',event=>{if(event.key==='Escape')dismiss();});
// A brief opening beat makes the animation legible; Continue and Escape skip it.
window.addEventListener('scamshield-ready',()=>setTimeout(dismiss,matchMedia('(prefers-reduced-motion: reduce)').matches?0:Math.max(0,1000-(performance.now()-started))),{once:true});
// If a module or network fails, always return control to the page.
setTimeout(dismiss,5000);
