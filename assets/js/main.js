
const observer=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('aos-animate')})},{threshold:.2});
document.querySelectorAll('[data-aos]').forEach(el=>observer.observe(el));
