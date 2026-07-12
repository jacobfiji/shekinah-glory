// AOS Init
AOS.init({duration:1000,once:true,offset:100});

// Mobile Menu
const hamburger=document.getElementById('hamburger');
const navMenu=document.querySelector('.nav-menu');
hamburger?.addEventListener('click',()=>navMenu.classList.toggle('active'));
document.querySelectorAll('.nav-menu a').forEach(a=>a.addEventListener('click',()=>navMenu.classList.remove('active')));

// Header Scroll
window.addEventListener('scroll',()=>{
  document.querySelector('.header')?.classList.toggle('scrolled',window.scrollY>50);
  document.getElementById('backToTop')?.classList.toggle('show',window.scrollY>500);
});

// Back to top
document.getElementById('backToTop')?.addEventListener('click',e=>{
  e.preventDefault();
  window.scrollTo({top:0,behavior:'smooth'});
});

// Hero Slider
const slides=document.querySelectorAll('.slide');
const dotsContainer=document.querySelector('.slider-dots');
let currentSlide=0;

if(slides.length){
  slides.forEach((_,i)=>{
    const dot=document.createElement('span');
    if(i===0)dot.classList.add('active');
    dot.addEventListener('click',()=>goToSlide(i));
    dotsContainer?.appendChild(dot);
  });

  function goToSlide(n){
    slides[currentSlide].classList.remove('active');
    document.querySelectorAll('.slider-dots span')[currentSlide]?.classList.remove('active');
    currentSlide=(n+slides.length)%slides.length;
    slides[currentSlide].classList.add('active');
    document.querySelectorAll('.slider-dots span')[currentSlide]?.classList.add('active');
  }

  document.querySelector('.slider-btn.next')?.addEventListener('click',()=>goToSlide(currentSlide+1));
  document.querySelector('.slider-btn.prev')?.addEventListener('click',()=>goToSlide(currentSlide-1));
  setInterval(()=>goToSlide(currentSlide+1),6000);
}

// Newsletter
document.querySelector('.newsletter-form')?.addEventListener('submit',e=>{
  e.preventDefault();
  alert('Thank you for subscribing! God bless you.');
  e.target.reset();
});

// Amount Buttons on Give Page
document.querySelectorAll('.amount-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    document.querySelectorAll('.amount-btn').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
  });
});