import Lenis from '@studio-freight/lenis/types';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
  gsap.from(".hero-text", {
    y: 40,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out",
  });

  gsap.from(".contact-button", {
    y: 40,
    opacity: 0,
    duration: 1.5,
    stagger: 0.2,
    ease: "power3.out",
  })
});

document.addEventListener("DOMContentLoaded", () => {

  const techTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".scroll-content",
      start: "top bottom",
      end: "bottom top", 
      scrub: 1,         
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