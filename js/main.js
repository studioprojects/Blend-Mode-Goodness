

document.body.addEventListener('mousemove', (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    gsap.set('.cursor', {
        x: mouseX,
        y: mouseY
    })

    gsap.to('.circle', {
        x: mouseX,
        y: mouseY,
        stagger: -0.01
    })
})

console.log('tis i pierre, the french onion seller!')