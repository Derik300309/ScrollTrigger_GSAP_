let tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.dark',
        start: 'center bottom'
    }
});
tl.from('img', { x: 200, opacity: 0, duration: 1.5 })
    .from('.content', { y: 300, opacity: 0, duration: 1.5 }, "-=1.5");