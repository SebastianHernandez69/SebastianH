import gsap from 'gsap';

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