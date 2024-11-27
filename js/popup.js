const foodBoxes = document.querySelectorAll('.cardapio-content');
const modal = document.querySelector('.modal-carrinho');

foodBoxes.forEach(box => {
  box.addEventListener('click', openModal);
});

function openModal() {
  modal.classList.add('active');
  modal.querySelector('.modal').classList.add('active');
}

function closeModal() {
  modal.classList.remove('active');
  modal.querySelector('.modal').classList.remove('active');
}