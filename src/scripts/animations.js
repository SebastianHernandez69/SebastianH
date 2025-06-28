import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

document.addEventListener("DOMContentLoaded", () => {
  const smoother = ScrollSmoother.create({
    wrapper: '#smooth-wrapper',
    content: '#smooth-content',
    smooth: 1.2,
    effects: true
  });

  const techTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".scroll-content",
      start: "top bottom",
      end: "bottom top", 
      scrub: 1,   
      markers: false,      
    }
  });

  techTimeline
  .to(".fond-circle", {
    y: -40,
    opacity: 0,
    duration: 0.8,
    stagger: 0.3,
    ease: "power3.out",
  })
  .to(".hero-text", {
    y: -40,
    opacity: 0,
    duration: 0.7,
    stagger: 0.3,
    ease: "power3.out",
  }, "<")
  .to(".contact-button", {
    y: -40,
    opacity: 0,
    duration: 0.8,
    stagger: 0.3,
    ease: "power3.out",
  })
  .to(".hero-arrow", {
    y: -40,
    opacity: 0,
    duration: 0.8,
    stagger: 0.3,
    ease: "power3.out",
  }, "<")
  .from(".tech-item", {
    y: 40,
    opacity: 0,
    stagger: 0.15,
    duration: 0.6,
    ease: "power3.out",
  }, "<")
  .from(".project-card", {
    y: 40,
    opacity: 0,
    stagger: 0.15,
    duration: 0.6,
    ease: "power3.out",
  }, "<");


  const projectContainer = document.querySelector('.horizontal-scroll-wrapper');

  let pContainerWith = projectContainer.offsetWidth;

  if(projectContainer){
    
    const scrollAmount = pContainerWith - window.innerWidth;

    const tween = gsap.to(projectContainer, {
      x: () => -scrollAmount,
      duration: 3,
      ease: "none",
    });

    ScrollTrigger.create({
      trigger: "#projects",
      start: "top top",
      end: "+=" + scrollAmount,
      pin: true,
      scrub: 1,
      animation: tween,
      markers: false,
    })
  }

  const aboutTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: "#about",
      start: "top bottom",
      end: "+=500", 
      scrub: 1,
      markers: false,
    }
  });

  aboutTimeline
    .from("#about .about-title", {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    })
    .from("#about .about-info", {
      x: -50,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    }, "<")
    .from("#about .about-image", {
      x: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    }, "<");

});


















// gsap.utils.toArray('.sticky-title').forEach((title, index) => {
//   let container = title.parentElement;
//   let content = title.parentElement.nextElementSibling;

//   ScrollTrigger.create({
//     trigger: title.parentElement,
//     start: "top top",
//     endTrigger: content,
//     end: "bottom top",
//     pin: container,
//     pinSpacing: false,
//     scrub: true,
//   });
// });

// gsap.from(".tech-item", {
//   y: 40,
//   opacity: 0,
//   duration: 0.6,
//   stagger: 0.15, // Más suave y fluido
//   ease: "power3.out",
//   scrollTrigger: {
//     trigger: ".scroll-content", // Usa el contenedor común
//     start: "top 80%",
//     toggleActions: "play none none reverse"
//   }
// });