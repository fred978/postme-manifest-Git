let MAIN;
let MODAL_POST;
let BTN_SHOW_POST;
let BTN_CANCEL_POST;

// Funciones
const showPostModal = () => {
    MAIN.style.display = 'none';
    MODAL_POST.style.display = 'block';
    setTimeout(() => {
        MODAL_POST.style.transform = 'translateY(0)';
    }, 1);
};

const closePostModal = () => {
    MAIN.style.display = 'block';
    MODAL_POST.style.transform = 'translateY(100vh)';
};

// Acciones cuando se cargue el DOM, nos aseguramos que se cargue todo
window.addEventListener('load', async () => {
    MAIN = document.querySelector('#main');
    MODAL_POST = document.querySelector('#modal-post-section');
    BTN_SHOW_POST = document.querySelector('#show-form-button');
    BTN_SHOW_POST.addEventListener('click', showPostModal);
    BTN_CANCEL_POST = document.querySelector('#btn-post-cancel');
    BTN_CANCEL_POST.addEventListener('click', closePostModal);

    if ('serviceWorker' in navigator) {
        try {
            const response = await navigator.serviceWorker.register('sw.js');
            if (response) {
                console.info('Service worker registrado');
            }
        } catch (error) {
            console.error('Error registering service worker:', error);
        }
    }
});
