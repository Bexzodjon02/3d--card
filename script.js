const block = document.querySelector(".container")
const card = document.querySelector(".card")

const image = document.querySelector("img")
const circle = document.querySelector(".circle")
const title = document.querySelector("h3")
const text = document.querySelector("p")
const btns = document.querySelector(".btn-box")
const link = document.querySelector("a")
// console.log(image,circle,title,text,btns,link);

block.addEventListener('mousemove', (e) =>{
    const mouseX = e.clientX
    const mouseY = e.clientY
    
    const windowWidth = window.innerWidth
    const windowHeight = window.innerHeight
    
    const x = windowWidth / 2 - mouseX
    const y = windowHeight / 2 - mouseY
    
    card.style.transform = `rotateX(${y / 1}deg) rotateY(${x / 1}deg)`
    card.style.transition = `2s`
    
    image.style.transform = 'translateZ(50px) rotate(45deg)'
    circle.style.transform = 'translateZ(-30px) scale(0.8)'
    title.style.transform = `translateZ(50px)`
    text.style.transform = `translateZ(25px)`
    btns.style.transform = `translateZ(35px)`
    link.style.transform = `translateZ(100px)`
})

block.addEventListener('mouseleave', () =>{
    card.style.transform = `rotateX(0deg) rotateY(0deg)`
    card.style.transition = `0.5s`
    
    image.style.transform = 'translateZ(0px) rotate(0deg)'
    circle.style.transform = 'translateZ(0px) scale(1)'
    title.style.transform = `translateZ(0px)`
    text.style.transform = `translateZ(0px)`
    btns.style.transform = `translateZ(5px)`
    link.style.transform = `translateZ(0px)`
})