'strict mode'

let imgLinks = [
    'img/aventador.jpg',
    'img/aventador2.jpg',
    'img/lambo3.jpg',
    'img/ferrari1.jpg',
    'img/ferrari2.jpg',
    'img/ferrari3.jpg'
];


const delay = 5000;
let currentIndex = 1;

setInterval(function() {
        document.getElementById('image').src = imgLinks[currentIndex];
        currentIndex++;
        if(currentIndex >= imgLinks.length) {
            currentIndex = 0;
        }
    }, delay);

let butLamb = document.getElementById('button-more');
let hiddenTextLamb = document.getElementById('hidden-text');

function showText(){
    hiddenTextLamb.classList.remove('hidden');
    butLamb.classList.add('hidden')
}

butLamb.addEventListener('click', showText)