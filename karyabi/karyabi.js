
function smoothRedirect(url) {
    const loginBox = document.querySelector('.login-box');
    loginBox.style.animation = 'fadeOut 1s ease-in-out'; 
    setTimeout(() => {
        window.location.href = url;
    }, 1000); 
}
