const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    //toggle nav
    burger.addEventListener('click', ()=> {
        nav.classList.toggle('nav-active');
    })
    //animate links
    navLinks.forEach((link, index)=>{
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7}s`;
    })
}
navSlide();

const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo(".big-text", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 50.76937233567336, lng: 20.63463213348686},
        zoom: 14,
        mapId: '7c141854cbc93daa'
      });
}