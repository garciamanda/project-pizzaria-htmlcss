function openMenu() {
  let subMenu = document.getElementById("subMenu");
  subMenu.classList.toggle("open-menu");
}

function setFeedback(tipo) {

  document.getElementById("feedbackType").value = tipo;
  console.log("Tipo de Feedback Setado: " + tipo); 
}


const stars = document.querySelectorAll('.star');
let selectedValue = 0;


document.addEventListener('DOMContentLoaded', () => {
  const stars = document.querySelectorAll('.star');

  let selectedRating = 0;

  function highlightStars(rating) {
    stars.forEach(star => {
      star.style.color = star.dataset.value <= rating ? 'gold' : 'gray';
    });
  }

  stars.forEach(star => {
    star.addEventListener('mouseover', () => {
      highlightStars(star.dataset.value);
    });

    star.addEventListener('click', () => {
      selectedRating = star.dataset.value;
      highlightStars(selectedRating);
      console.log(`Avaliação selecionada: ${selectedRating} estrelas`);
    });

    star.addEventListener('mouseout', () => {
      highlightStars(selectedRating);
    });
  });
});


// Evento de envio do formulário
document.querySelector('form').addEventListener('submit', function (e) {
 
  if (selectedValue > 0) {
    document.getElementById('ratingValue').value = selectedValue;
  } else {
    e.preventDefault();
    alert('Por favor, selecione uma estrela!');
    return; 
  }

  
  const feedbackType = document.querySelector('.btn_feedback.btn_active');
  if (feedbackType) {
    document.getElementById('feedbackType').value = feedbackType.textContent.trim();
    console.log("Tipo de Feedback Selecionado: " + feedbackType.textContent.trim());
  } else {

    e.preventDefault();
    alert('Por favor, selecione o tipo de feedback (Positiva, Negativa, Sugestão).');
  }
});


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







function redirectToLogin() {
  window.location.href = 'index.php?showLogin=1';
}






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