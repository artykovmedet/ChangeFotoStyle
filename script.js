let box = document.querySelector('.box')
let boxOverlay = document.querySelector('.overlay-box')

box.addEventListener('mousemove', (e) => {
    boxOverlay.style.width = e.offsetX + 'px'
})
