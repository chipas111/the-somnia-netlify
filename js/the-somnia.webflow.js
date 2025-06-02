// --- .progress-bar_code ---
gsap.registerPlugin(ScrollTrigger),document.addEventListener("DOMContentLoaded",function(){let e=document.querySelector(".menu-progress_bar"),t=document.querySelector(".menu-progress_text");ScrollTrigger.create({trigger:".app",start:"top top",end:"bottom bottom",scrub:!0,onUpdate(r){let o=r.progress;gsap.set(e,{scaleX:o}),t.textContent=Math.round(100*o)+"%"}})});

// --- .head-scene_code ---
document.addEventListener("DOMContentLoaded",function(){const holder=document.querySelector('.spline-wrapper');new IntersectionObserver(async ([entry], obs) => {if (!entry.isIntersecting) return;obs.disconnect();const { Application } = await import('https://unpkg.com/@splinetool/runtime@latest/build/runtime.js');const t = Application;let canvas=document.getElementById("canvas3d"),spline=new t(canvas),buttonPreloader=document.getElementById("button_preloader");spline.load("https://prod.spline.design/5d5FvSOJKYDZPl8Y/scene.splinecode").then(()=>{let t=spline.findObjectByName("head_container"),e=spline.findObjectByName("head_left"),o=spline.findObjectByName("head_right");spline.findObjectByName("head_wrapper");let n={maxRotationX:.15,maxRotationY:.22,smoothness:.92,returnDelay:.8,returnDuration:1.2},i={targetRotationX:0,targetRotationY:0,currentRotationX:0,currentRotationY:0,mouseX:window.innerWidth/2,mouseY:window.innerHeight/2,isActive:!1};function a(){i.tickerId&&gsap.ticker.remove(i.tickerId),i.tickerId=gsap.ticker.add(()=>{e&&o&&(i.targetRotationY=(i.mouseX/window.innerWidth-.5)*n.maxRotationY,i.targetRotationX=-((i.mouseY/window.innerHeight-.5)*n.maxRotationX),i.currentRotationX+=(i.targetRotationX-i.currentRotationX)*(1-n.smoothness),i.currentRotationY+=(i.targetRotationY-i.currentRotationY)*(1-n.smoothness),gsap.set(e.rotation,{x:i.currentRotationX,y:i.currentRotationY}),gsap.set(o.rotation,{x:i.currentRotationX,y:i.currentRotationY}))})}a();let r;if(window.addEventListener("mousemove",t=>{i.mouseX=t.clientX,i.mouseY=t.clientY,i.isActive=!0,clearTimeout(r),r=setTimeout(()=>{gsap.to(i,{targetRotationX:0,targetRotationY:0,duration:n.returnDuration,ease:"power2.inOut",onComplete(){i.isActive=!1}})},1e3*n.returnDelay)}),t){t.position.y=-100;let s={y:-100};buttonPreloader.addEventListener("click",()=>{gsap.to(s,{y:-80,duration:2,ease:"power3.out",onUpdate(){t.position.y=s.y}})}),ScrollTrigger.create({trigger:".content-section",start:"top center",end:"bottom center",onEnter(){gsap.to(s,{y:-40,duration:1.2,ease:"power2.out",onUpdate(){t.position.y=s.y}})},onLeaveBack(){gsap.to(s,{y:-80,duration:1.2,ease:"power2.out",onUpdate(){t.position.y=s.y}})}})}if(e&&o&&window.ScrollTrigger){let u=t=>t*(Math.PI/180);ScrollTrigger.create({trigger:".content-section",start:"top center",end:"bottom center",onEnter(){gsap.to(e.position,{x:-.9,duration:1.2,ease:"power2.out"}),gsap.to(o.position,{x:.9,duration:1.2,ease:"power2.out"}),gsap.to(e.rotation,{y:-u(10),duration:1.2,ease:"power2.out"}),gsap.to(o.rotation,{y:u(10),duration:1.2,ease:"power2.out"})},onLeaveBack(){gsap.to(e.position,{x:0,duration:1.2,ease:"power2.out"}),gsap.to(o.position,{x:0,duration:1.2,ease:"power2.out"}),gsap.to(e.rotation,{y:0,duration:1.2,ease:"power2.out"}),gsap.to(o.rotation,{y:0,duration:1.2,ease:"power2.out"})}}),ScrollTrigger.create({trigger:".content_wrap-static",start:"top 100%",onEnter(){gsap.timeline().to(e.position,{x:0,z:0,y:0,duration:1,ease:"expo.inOut"}).to(e.scale,{x:1,y:1,z:1,duration:1,ease:"expo.inOut"},"<").to(e.rotation,{x:0,y:0,z:0,duration:1,ease:"expo.inOut"},"<"),gsap.timeline().to(o.position,{x:0,z:0,y:0,duration:1,ease:"expo.inOut"}).to(o.scale,{x:1,y:1,z:1,duration:1,ease:"expo.inOut"},"<").to(o.rotation,{x:0,y:0,z:0,duration:1,ease:"expo.inOut"},"<")},onLeaveBack(){gsap.timeline().to(e.position,{x:-.9,z:0,y:0,duration:1,ease:"expo.inOut"}).to(e.scale,{x:1,y:1,z:1,duration:1,ease:"expo.inOut"},"<").to(e.rotation,{x:0,y:-u(10),z:0,duration:1,ease:"expo.inOut"},"<"),gsap.timeline().to(o.position,{x:.9,z:0,y:0,duration:1,ease:"expo.inOut"}).to(o.scale,{x:1,y:1,z:1,duration:1,ease:"expo.inOut"},"<").to(o.rotation,{x:0,y:u(10),z:0,duration:1,ease:"expo.inOut"},"<")}}),ScrollTrigger.create({trigger:".portal-track",start:"top center",end:"bottom center",onEnter(){gsap.timeline({delay:.1}).to(e.position,{x:-1,z:.3,y:-.5,duration:1.2,ease:"power2.out"}).to(e.scale,{x:1.5,y:1.5,z:1.5,duration:1.2,ease:"power2.out"},"<").to(e.rotation,{x:u(-5),y:u(10),z:u(20),duration:1.2,ease:"power2.out"},"<"),gsap.timeline({delay:.1}).to(o.position,{x:1,z:.3,y:-.5,duration:1.2,ease:"power2.out"}).to(o.scale,{x:1.5,y:1.5,z:1.5,duration:1.2,ease:"power2.out"},"<").to(o.rotation,{x:u(-5),y:u(-10),z:u(-20),duration:1.2,ease:"power2.out"},"<")},onLeaveBack(){gsap.timeline().to(e.position,{x:-.7,z:0,y:0,duration:1.2,ease:"power2.out"}).to(e.scale,{x:1,y:1,z:1,duration:1.2,ease:"power2.out"},"<").to(e.rotation,{x:0,y:u(-10),z:0,duration:1.2,ease:"power2.out"},"<"),gsap.timeline().to(o.position,{x:.7,z:0,y:0,duration:1.2,ease:"power2.out"}).to(o.scale,{x:1,y:1,z:1,duration:1.2,ease:"power2.out"},"<").to(o.rotation,{x:0,y:u(10),z:0,duration:1.2,ease:"power2.out"},"<")}});let $=document.querySelector(".look-button");if($&&e&&o){let p=e.position.x,_=o.position.x,d=gsap.timeline({paused:!0,defaults:{duration:2,ease:"expo.inOut"}}).to(e.position,{x:p-20},0).to(o.position,{x:_+20},0),c=!1;$.addEventListener("click",()=>{c?d.reverse():d.play(),c=!c})}}else console.warn("⚠️ head_left или head_right не найдены, либо ScrollTrigger не подключён")});}).observe(holder);});

// --- .bg-sound ---
document.addEventListener("DOMContentLoaded",()=>{let e=new Howl({src:["https://cdn.jsdelivr.net/gh/chipas111/the-somnia@dfaa7fc/bg-sound.mp3"],loop:!0,volume:.2,html5:!0}),t=!1,d=document.querySelector(".button_preloader"),n=document.querySelector(".menu_sound-wrap");d&&d.addEventListener("click",()=>{t||(e.play(),t=!0)},{once:!0}),n&&n.addEventListener("click",()=>{t?(e.pause(),t=!1,n.classList.add("muted")):(e.play(),t=!0,n.classList.remove("muted"))})});

// --- .pre-loader_animation ---
document.addEventListener("DOMContentLoaded",function(){let e={value:0},t="cubic-bezier(0.77, 0, 0.175, 1)",n=document.querySelector(".loader_number"),o=document.querySelector(".button_preloader"),r="Enter",$=!1;function l(e,t,n=1e3,o){let r="!@#$%^&*()_+-=[]{}<>?~",$=0,l=Math.round(n/50);e.style.color="#141414";let a=setInterval(()=>{let n="";for(let d=0;d<t.length;d++)n+=.5>Math.random()?r[Math.floor(Math.random()*r.length)]:t[d];e.textContent=n,++$>=l&&(clearInterval(a),e.textContent=t,o&&o())},50)}let a=gsap.timeline();a.to(e,{value:100,duration:3,ease:t,onUpdate:function t(){if(!n)return;let o=Math.round(e.value);o>=100&&!$?($=!0,l(n,r,600)):$||(n.textContent=o)}}),a.to(".button_preloader-progress",{width:"100%",duration:3,ease:t},0),a.to(".button_preloader-finished",{width:"100%",duration:1,ease:t}),a.call(()=>{o.style.pointerEvents="auto"}),o.addEventListener("mouseenter",()=>{$&&l(n,r,300)})});

// --- .stars-embed ---
document.addEventListener("DOMContentLoaded", function () {const sky = document.querySelector('.sky');window.addEventListener('mousemove', (e) => {const x = (e.clientX / window.innerWidth - 0.5) * 40;const y = (e.clientY / window.innerHeight - 0.5) * 40;sky.style.transform = `translate(${x}px, ${y}px)`;});});

// --- .contact-wrapper и .mwg_effect000 ---
window.addEventListener("DOMContentLoaded", () => {gsap.registerPlugin(InertiaPlugin);let oldX = 0, oldY = 0, deltaX = 0,deltaY = 0;const root = document.querySelector('.mwg_effect000');root.addEventListener("mousemove", (e) => {deltaX = e.clientX - oldX;deltaY = e.clientY - oldY;oldX = e.clientX;oldY = e.clientY;});root.querySelectorAll('.media').forEach(el => {el.addEventListener('mouseenter', () => {const tl = gsap.timeline({ onComplete: () => {tl.kill()}});tl.timeScale(1.2);const image = el.querySelector('img');tl.to(image, {inertia: {x: {velocity: deltaX * 30, end: 0},y: {velocity: deltaY * 30, end: 0},},});tl.fromTo(image, {rotate: 0}, {duration: 0.4,rotate:(Math.random() - 0.5) * 30, yoyo: true, repeat: 1,ease: 'power1.inOut'}, '<');});});const openBtn = document.querySelector('.menu_dots-wrapper');const menuWrap = document.querySelector('.contact-wrapper');const closeBtn = document.querySelector('.close-container');const cursor = document.querySelector('.cursor-wrapper');openBtn.addEventListener('click', () => {menuWrap.style.display = 'block';document.body.classList.add('menu--open');if (cursor) cursor.style.display = 'none';});closeBtn.addEventListener('click', () => {menuWrap.style.display = 'none';document.body.classList.remove('menu--open');if (cursor) cursor.style.display = 'flex';});});

// --- Scroll, Lenis ---
class Scroll extends Lenis{constructor(){super({duration:1.1,easing:e=>1===e?1:1-Math.pow(2,-13*e),direction:"vertical",smooth:!0,smoothTouch:!1,touchMultiplier:1.5}),this.time=0,this.isActive=!0,this.init()}init(){this.render()}render(){this.raf(this.time+=10),requestAnimationFrame(this.render.bind(this))}}window.SmoothScroll=new Scroll;const lenis=window.SmoothScroll;let scrollLocked=!1;function lockPageScroll(){scrollLocked||(scrollLocked=!0,lenis.stop(),document.documentElement.style.overflow="hidden")}function unlockPageScroll(){scrollLocked&&(scrollLocked=!1,lenis.start(),document.documentElement.style.overflow="")}let sectionLocked=!1;function checkLockTargets(){let e=document.querySelectorAll("[data-scroll-lock]"),o=.5*window.innerHeight,t=[...e].some(e=>{let t=e.getBoundingClientRect();return t.top<o&&t.bottom>o});t&&!sectionLocked?(lenis.stop(),document.documentElement.style.overflow="hidden",sectionLocked=!0):!t&&sectionLocked&&(lenis.start(),document.documentElement.style.overflow="",sectionLocked=!1),requestAnimationFrame(checkLockTargets)}requestAnimationFrame(checkLockTargets);

// --- GSAP SplitText/ScrollTrigger для анимаций ---
gsap.registerPlugin(ScrollTrigger),document.querySelectorAll(".content_wrap").forEach(e=>{let t=+e.dataset.title,r=(t-1)*100/6,o=100*t/6,a=gsap.timeline({scrollTrigger:{trigger:".content-section",start:`${r}% center`,end:`${o}% center`,scrub:.8}});a.fromTo(e,{opacity:0,scale:.5},{opacity:1,scale:1,duration:.8,ease:"power2.out"}).to({}, {duration:.8}).to(e,{opacity:0,duration:1,ease:"power2.in"}).to(e,{scale:.5,duration:.8,ease:"power2.in"})});

gsap.registerPlugin(ScrollTrigger,SplitText),document.addEventListener("DOMContentLoaded",()=>{let e=[];document.querySelectorAll("[data-typing]").forEach(t=>{let a=t.dataset.typing,o=.04,r=.05,l=0;"slow"===a?(o=.07,r=.03):"fast"===a?(o=.01,r=.01):"slow-delay"===a&&(o=.09,r=.03,l=.3);let s=new SplitText(t,{type:"words,chars"});gsap.set(s.chars,{opacity:0,display:"inline",whiteSpace:"normal"});let n=gsap.to(s.chars,{opacity:1,duration:r,stagger:o,delay:l,ease:"power1.out",paused:!0});ScrollTrigger.create({trigger:t,start:"top 55%",onEnter:()=>n.play()}),e.push(n)});let t=document.querySelector(".footer_section");if(t){let a=new IntersectionObserver((t,a)=>{t.forEach(t=>{t.isIntersecting&&(e.forEach(e=>e.play()),a.disconnect())})},{root:null,threshold:.5});a.observe(t)}});

document.addEventListener("DOMContentLoaded",async function(){
  let e=document.createElement("canvas");
  e.classList.add("transition-canvas");
  document.querySelector(".portal-section").appendChild(e);
  window.portalEffect=new PortalEffect(e);
  let t=document.querySelector(".dream-arrow.l"),
      a=document.querySelector(".dream-arrow.r"),
      c=document.querySelector(".look-button"),
      r=document.querySelector(".portal-overlay");
  document.querySelector(".portal-bg");
  let n=[
    "https://cdn.prod.website-files.com/67d67edc3ed28aa00cd5d1c0/67d6b2313ed28aa00cf64ab0_e712bc7ccf26dffa4f073752859f69ae_Red%20River.webp",
    "https://cdn.prod.website-files.com/67d67edc3ed28aa00cd5d1c0/67fdd22d8546d7fdf9609282_9910c098afd117adae1627a9995e0dee_the-island-overlay.webp",
    "https://cdn.prod.website-files.com/67d67edc3ed28aa00cd5d1c0/67fdd2b28546d7fdf960ff15_the-abys.webp"
  ],
  s=!1;
  async function l(t,a){
    if(s)return;
    s=!0,e.classList.add("active"),await window.portalEffect.setTextures(n[t],n[a]);
    let c=performance.now();
    !function t(){
      let a=performance.now(),r=Math.min((a-c)/1e3,1);
      window.portalEffect.setProgress(r),r<1?requestAnimationFrame(t):(e.classList.remove("active"),s=!1)
    }()
  }
  async function i(t){
    if(s)return;
    s=!0;
    let a=parseInt(document.querySelector(".paragraph.is-eyebrow.big")?.textContent?.split("/")[0]||"1")-1;
    if(e.classList.add("active"),t)await window.portalEffect.setTextures(n[a],n[a]);
    else{let c=(a+1)%n.length;await window.portalEffect.setTextures(n[a],n[c])}
    t?e.classList.add("expand"):e.classList.remove("expand");
    let r=t?1400:1200,l=performance.now();
    !function a(){
      let c=performance.now(),n=Math.min((c-l)/r,1);
      t?window.portalEffect.setProgress(1-n):window.portalEffect.setProgress(n),n<1?requestAnimationFrame(a):(t||e.classList.remove("active"),s=!1)
    }()
  }
  if(c){
    let o=c.onclick;
    c.onclick=null,c.addEventListener("click",async function(e){
      if(s){e.preventDefault();return}
      let t=!r.classList.contains("expand");
      i(t),o&&o.call(this,e)
    })
  }
  if(t){
    let d=t.onclick;
    t.onclick=null,t.addEventListener("click",async function(e){
      if(s){e.preventDefault();return}
      let t=parseInt(document.querySelector(".paragraph.is-eyebrow.big")?.textContent?.split("/")[0]||"1");
      l(t-1,t>1?t-2:2),d&&d.call(this,e)
    })
  }
  if(a){
    let f=a.onclick;
    a.onclick=null,a.addEventListener("click",async function(e){
      if(s){e.preventDefault();return}
      let t=parseInt(document.querySelector(".paragraph.is-eyebrow.big")?.textContent?.split("/")[0]||"1");
      l(t-1,t<3?t:0),f&&f.call(this,e)
    })
  }
  "undefined"!=typeof ScrollTrigger&&(
    gsap.registerPlugin(ScrollTrigger),
    ScrollTrigger.create({
      trigger:".portal-section",
      start:"top center",
      end:"bottom center",
      onEnter(){e.classList.add("active"),window.portalEffect.setProgress(0)},
      onLeaveBack(){e.classList.remove("active")}
    })
  );
}); 