function openMenu() {
    let subMenu = document.getElementById("subMenu");
    subMenu.classList.toggle("open-menu");
}

function redirectToLogin() {
    window.location.href = 'index.php?showLogin=1';
}

const buttons = document.querySelectorAll('.btn_feedback');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.classList.contains('btn_active')) {
      button.classList.remove('btn_active');
    } else {

      buttons.forEach(btn => btn.classList.remove('btn_active'));

      button.classList.add('btn_active');
    }
  });
});




// Selecionando os elementos do DOM
const loginBtn = document.getElementById('btnLogin-popup');



// popup de perfil de usuário
// para utilizar basta colocar o nome da função la em cima no DomContentLoaded

function openPopupSettings() {
    const avatar = document.querySelector('.user-info img');
    const profilePopup = document.getElementById('profile-popup');
    const closePopup = document.getElementById('close-popup');

    if (avatar) {
        avatar.addEventListener('click', () => {
            profilePopup.style.display = 'flex';
        });
    }

    if (closePopup) {
        closePopup.addEventListener('click', () => {
            profilePopup.style.display = 'none';
        });
    }

    window.addEventListener('click', (event) => {
        if (event.target === profilePopup) {
            profilePopup.style.display = 'none';
        }
    });
}