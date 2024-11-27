
// Scroll

document.getElementById('btnpedido').addEventListener('click', function () {
  document.getElementById('tranding').scrollIntoView({ behavior: 'smooth' });
})



// Slide
var TrandingSlider = new Swiper('.tranding-slider', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});



//login 

// document.addEventListener("DOMContentLoaded", function () {
//   var loginButton = document.getElementById('btnLogin-popup');
//   loginButton.addEventListener('click', function () {
//       window.location.href = 'login.html';
//   });
// });

// login















//


// const trendingSlides = document.querySelectorAll('.tranding-slide');


// trendingSlides.forEach((slide) => {
//   slide.addEventListener('click', () => {

//     const foodPrice = slide.querySelector('.food-price').textContent;
//     const foodName = slide.querySelector('.food-name').textContent;


//     const cartItem = document.createElement('li');
//     cartItem.textContent = `${foodName} - ${foodPrice}`;


//     document.getElementById('cart-items').appendChild(cartItem);
//   });
// });

// Selecionando os elementos do DOM
const loginBtn = document.getElementById('btnLogin-popup');
const loginPopup = document.getElementById('loginPopup');
const registerPopup = document.getElementById('registerPopup');
const showRegisterFormBtn = document.getElementById('showRegisterForm');
const showLoginFormBtn = document.getElementById('showLoginForm');
const closeButtons = document.querySelectorAll('.close');

// Função para abrir o popup de login
loginBtn.addEventListener('click', function () {
  loginPopup.style.display = 'block';
});

// Função para abrir o popup de registro quando clicar em "Registrar-se" no popup de login
showRegisterFormBtn.addEventListener('click', function () {
  loginPopup.style.display = 'none';
  registerPopup.style.display = 'block';
});

showLoginFormBtn.addEventListener('click', function () {
  registerPopup.style.display = 'none';
  loginPopup.style.display = 'block';
})

// Função para fechar os popups
closeButtons.forEach(button => {
  button.addEventListener('click', function (event) {
    const popupToClose = event.target.getAttribute('data-close');
    if (popupToClose === 'login') {
      loginPopup.style.display = 'none';
    } else if (popupToClose === 'register') {
      registerPopup.style.display = 'none';
    }
  });
});

// Fechar os popups se o usuário clicar fora deles
window.addEventListener('click', function (event) {
  if (event.target == loginPopup) {
    loginPopup.style.display = 'none';
  } else if (event.target == registerPopup) {
    registerPopup.style.display = 'none';
  }
});


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

// sla


document.addEventListener("scroll", function () {
  const fixed = (y) =>
    `
    position: fixed;
    top: ${y}px;
  `

  const cartContainer = document.querySelector(".cart-container");
  const reme = document.querySelector(".reme");


  const remePosition = reme.offsetTop;
  const ScrollPosition = window.scrollY;

  if (ScrollPosition >= remePosition) cartContainer.style += fixed(ScrollPosition + 150)
});

function openMenu() {
  let subMenu = document.getElementById("subMenu");
  subMenu.classList.toggle("open-menu");
}