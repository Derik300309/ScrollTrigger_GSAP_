let tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.dark',
        start: 'center bottom',
        scrub: 1
    }
});
tl.from('img', { x: 100, opacity: 0.5, duration: 1.5 })
    .from('.content', { y: 200, opacity: 0 }, "-=1.5");