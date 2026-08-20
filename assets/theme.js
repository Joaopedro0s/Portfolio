/* ═══════════════════════════════════════════════════════════
   THEME.JS — comportamento compartilhado das páginas internas
   Nav ao rolar · halo que segue o ponteiro · revelação por
   scroll (.reveal) · botão voltar ao topo.
   ═══════════════════════════════════════════════════════════ */
(function(){
  const $$ = (s,r)=> Array.from((r||document).querySelectorAll(s));

  function nav(){
    const nav = document.querySelector('.nav');
    if(!nav) return;
    const onScroll = ()=> nav.classList.toggle('is-stuck', window.scrollY > 30);
    window.addEventListener('scroll', onScroll, {passive:true});
    onScroll();
  }

  function halo(){
    const el = document.querySelector('.halo');
    if(!el) return;
    window.addEventListener('pointermove', e=>{
      el.style.setProperty('--mx', (e.clientX/window.innerWidth*100)+'%');
      el.style.setProperty('--my', (e.clientY/window.innerHeight*100)+'%');
    }, {passive:true});
  }

  function reveals(){
    const els = $$('.reveal');
    if(!els.length) return;
    if(!('IntersectionObserver' in window)){
      els.forEach(el=>el.classList.add('reveal-visible'));
      return;
    }
    const obs = new IntersectionObserver((entries)=>{
      entries.forEach((entry, i)=>{
        if(entry.isIntersecting){
          setTimeout(()=> entry.target.classList.add('reveal-visible'), i*40);
          obs.unobserve(entry.target);
        }
      });
    }, { threshold:.1, rootMargin:'0px 0px -40px 0px' });
    els.forEach(el=>obs.observe(el));
    setTimeout(()=>{
      els.forEach(el=>{
        if(el.getBoundingClientRect().top < window.innerHeight - 50) el.classList.add('reveal-visible');
      });
    }, 120);
  }

  function backToTop(){
    const btn = document.getElementById('totop');
    if(!btn) return;
    const toggle = ()=> btn.classList.toggle('is-visible', window.scrollY > 700);
    window.addEventListener('scroll', toggle, {passive:true});
    toggle();
    btn.addEventListener('click', ()=> window.scrollTo({top:0, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'}));
  }

  document.addEventListener('DOMContentLoaded', function(){
    nav(); halo(); reveals(); backToTop();
  });
})();
