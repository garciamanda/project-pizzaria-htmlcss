
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


function openModal() {
  const modal = document.getElementById('modal-container')
  modal.classList.add('mostrar')

  modal.addEventListener('click', (e) => {
    if (e.target.id == 'modal-container' || e.target.id == "fechar") {
      modal.classList.remove('mostrar')
      localStorage.fechaModal = 'modal-container'
    }
  })
}

//login 

// document.addEventListener("DOMContentLoaded", function () {
//   var loginButton = document.getElementById('btnLogin-popup');
//   loginButton.addEventListener('click', function () {
//       window.location.href = 'login.html';
//   });
// });

// login




document.addEventListener("DOMContentLoaded", function () {
  const wrapper = document.querySelector(".wrapper");
  const loginLink = document.querySelector(".login-link");
  const registerLink = document.querySelector(".register-link");
  const iconClose = document.querySelector(".icon-close");

  registerLink.addEventListener("click", () => {
    wrapper.classList.add("active");
  });

  loginLink.addEventListener("click", () => {
    wrapper.classList.remove("active");
  });

  wrapper.classList.add("active-popup");



  iconClose.addEventListener("click", () => {
    wrapper.classList.remove("active-popup");
    window.location.href = "index.html";
  });
});







document.addEventListener('DOMContentLoaded', function () {
  const addToCartButtons = document.querySelectorAll('.button-hover-background');
  const cartItemsList = document.getElementById('cart-items');
  const cartTotalSpan = document.getElementById('cart-total');

  let cartItems = [];

  function addToCart(productTitle, productPrice) {
    const existingItem = cartItems.find(item => item.title === productTitle);

    if (existingItem) {
      existingItem.quantity++;
    } else {
      cartItems.push({
        title: productTitle,
        price: productPrice,
        quantity: 1
      });
    }

  
    renderCart();
  }


  function renderCart() {
    cartItemsList.innerHTML = '';

    cartItems.forEach(item => {
      const li = document.createElement('li');
      li.textContent = `${item.title} x ${item.quantity} - R$${(item.price * item.quantity).toFixed(2)}`;
      cartItemsList.appendChild(li);
    });

    updateCartTotal();
  }

  function updateCartTotal() {
    const total = cartItems.reduce((accumulator, item) => accumulator + (item.price * item.quantity), 0);
    cartTotalSpan.textContent = `R$${total.toFixed(2)}`;
  }

  addToCartButtons.forEach(button => {
    button.addEventListener('click', function () {
      const productContainer = this.closest('.movie-product');
      const productTitle = productContainer.querySelector('.product-title').textContent;
      const productPrice = parseFloat(productContainer.querySelector('.product-price').textContent.replace('R$', ''));

      addToCart(productTitle, productPrice);
    });
  });
});


//


const trendingSlides = document.querySelectorAll('.tranding-slide');


trendingSlides.forEach((slide) => {
  slide.addEventListener('click', () => {

    const foodPrice = slide.querySelector('.food-price').textContent;
    const foodName = slide.querySelector('.food-name').textContent;

  
    const cartItem = document.createElement('li');
    cartItem.textContent = `${foodName} - ${foodPrice}`;

  
    document.getElementById('cart-items').appendChild(cartItem);
  });
});

// Selecionando os elementos do DOM
const loginBtn = document.getElementById('btnLogin-popup');
const loginPopup = document.getElementById('loginPopup');
const registerPopup = document.getElementById('registerPopup');
const showRegisterFormBtn = document.getElementById('showRegisterForm');
const closeButtons = document.querySelectorAll('.close');

// Função para abrir o popup de login
loginBtn.addEventListener('click', function() {
  loginPopup.style.display = 'block';
});

// Função para abrir o popup de registro quando clicar em "Registrar-se" no popup de login
showRegisterFormBtn.addEventListener('click', function() {
  loginPopup.style.display = 'none';
  registerPopup.style.display = 'block';
});

// Função para fechar os popups
closeButtons.forEach(button => {
  button.addEventListener('click', function(event) {
    const popupToClose = event.target.getAttribute('data-close');
    if (popupToClose === 'login') {
      loginPopup.style.display = 'none';
    } else if (popupToClose === 'register') {
      registerPopup.style.display = 'none';
    }
  });
});

// Fechar os popups se o usuário clicar fora deles
window.addEventListener('click', function(event) {
  if (event.target == loginPopup) {
    loginPopup.style.display = 'none';
  } else if (event.target == registerPopup) {
    registerPopup.style.display = 'none';
  }
});
