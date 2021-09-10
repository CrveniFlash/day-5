const buttons = document.querySelectorAll('.btn')
const imgDiv = document.querySelector('.img-container')

const images = [
    'rolls-1.jpg',
    'rolls-2.jpg',
    'rolls-3.jpg',
    'rolls-4.jpg',
]

let imageNum = 0;

buttons.forEach(function(button){
    button.addEventListener('click', (e) => {
        const item = e.target.classList
        if(item.contains('next')){
            imageNum++
        }
    })
})