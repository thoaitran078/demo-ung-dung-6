const loader = document.querySelector('.loader');
const container = document.querySelector('#container');

function init() {
    setTimeout(() => {
        loader.style.opacity = 0;
        loader.style.display = 'none';

        container.style.display = 'block';
        container.style.opacity = 1;
    }, 3000);
}
init();