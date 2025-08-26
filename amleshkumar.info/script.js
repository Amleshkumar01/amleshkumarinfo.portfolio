// year
document.getElementById('y').textContent = new Date().getFullYear();

// mobile menu
const burger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav-links');
burger.addEventListener('click', () => nav.classList.toggle('show'));

// active link on click (basic)
document.querySelectorAll('.nav-links a').forEach(a=>{
  a.addEventListener('click', ()=> nav.classList.remove('show'));
});

// scroll-reveal
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){ e.target.classList.add('show'); io.unobserve(e.target); }
  });
},{threshold:.15});


const reveals = document.querySelectorAll(".reveal");
window.addEventListener("scroll", () => {
  for (let r of reveals) {
    const windowHeight = window.innerHeight;
    const elementTop = r.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      r.classList.add("show");
    }
  }
});
