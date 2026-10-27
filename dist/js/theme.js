const root=document.documentElement;
const toggle=document.getElementById('theme-toggle');
const preference=matchMedia('(prefers-color-scheme: light)');
let manual=false;
function apply(theme){root.dataset.theme=theme;const light=theme==='light';toggle.textContent=light?'☾':'☀';toggle.setAttribute('aria-label',light?'Switch to dark mode':'Switch to light mode');toggle.title=light?'Switch to dark mode':'Switch to light mode';toggle.setAttribute('aria-pressed',String(light));document.querySelector('meta[name="theme-color"]').content=light?'#f3f1eb':'#151b20';}
apply(preference.matches?'light':'dark');
toggle.addEventListener('click',()=>{manual=true;apply(root.dataset.theme==='light'?'dark':'light');});
preference.addEventListener('change',event=>{if(!manual)apply(event.matches?'light':'dark');});
