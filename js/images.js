const imagenes = [
    'img/1.png',
    'img/2.png',
    'img/3.png',
    'img/4.png',
    'img/5.png',
    'img/6.png',
    'img/7.png',
    'img/8.png',
    'img/9.png',
    'img/10.png',
    'img/11.png',
    'img/12.gif'
];

function obtenerImagenAleatoria() {
    const indice = Math.floor(Math.random() * imagenes.length);
    return imagenes[indice];
}
const botonCambiar = document.getElementById('cambiarImagenBtn');
const imagenMagica = document.getElementById('imagenMagica');

botonCambiar.addEventListener('click', () => {
    imagenMagica.src = obtenerImagenAleatoria();
});

//-------------------------------------------

const imagenAuto = document.getElementById('imagenAuto');

imagenAuto.src = obtenerImagenAleatoria();

setInterval(() => {
    imagenAuto.src = obtenerImagenAleatoria();
}, 100)

//-------------------------------------------

const modeButton = document.getElementById('modeButton');
const body = document.body;

let mode = 'original';

modeButton.addEventListener('click', () => {
    if (mode === 'original') {
        body.classList.add('dark-mode');
        modeButton.textContent = 'Dark';
        mode = 'dark';
    } else if (mode === 'dark') {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        modeButton.textContent = 'Light';
        mode = 'light';
    } else if (mode === 'light') {
        body.classList.remove('light-mode');
        modeButton.textContent = 'Mode';
        mode = 'original';
    }
});