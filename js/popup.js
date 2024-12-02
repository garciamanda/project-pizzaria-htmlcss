const foodBoxes = document.querySelectorAll('.cardapio-content');
const modal = document.querySelector('.modal-carrinho');
const modalImage = modal.querySelector('.modal-pizzas');

foodBoxes.forEach(box => {
  box.addEventListener('click', function () {
    const imgSrc = box.querySelector('.img-cardapio').getAttribute('src'); 
    modalImage.setAttribute('src', imgSrc);
    openModal();
  });
});

function openModal() {
  modal.classList.add('active');
}

function closeModal() {
  modal.classList.remove('active');
}

