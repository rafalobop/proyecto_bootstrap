
//variables

const irArriba = document.querySelector('.go__up')


//eventos

irArriba.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})

//funciones

window.onscroll = function () {
    if (document.documentElement.scrollTop > 100) {
        irArriba.classList.add('show')
    } else {
        irArriba.classList.remove('show')
    }
}
