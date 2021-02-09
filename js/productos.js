
//variables

const banner = document.querySelector('#banner')
const samsungBtn = document.querySelector('#samsung_btn')
const motorolaBtn = document.querySelector('#motorola_btn')
const iphoneBtn = document.querySelector('#apple_btn')
const samsung = document.getElementById('samsung')
const apple = document.getElementById('apple')
const motorola = document.getElementById('motorola')
const brands = document.querySelectorAll('.cards')


//eventos


samsungBtn.addEventListener('click', mostrarSamsung)
motorolaBtn.addEventListener('click', mostrarMotorola)
iphoneBtn.addEventListener('click', mostrarApple)

irArriba.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})

//funciones

function mostrarSamsung() {
    if (samsung.style.display = 'none') {
        samsung.style.display = 'block'
        motorola.style.display = 'none'
        apple.style.display = 'none'
        // window.scrollTo({
        //     top: 1709,
        //     behavior: 'smooth'
        // })
    }
}

function mostrarMotorola() {
    if (motorola.style.display = 'none') {
        motorola.style.display = 'block'
        samsung.style.display = 'none'
        apple.style.display = 'none'
    }
}
function mostrarApple() {
    if (apple.style.display = 'none') {
        apple.style.display = 'block'
        samsung.style.display = 'none'
        motorola.style.display = 'none'
    }
}


