// Dados das pizzas
const pizzas = {
  "Pizza de Chocolate": {
    descricao: "Delicioso molho de tomates italianos rústicos coberto com camadas de mozzarella cremosa, burrata e pesto de manjericão fresco.",
    preco: 30.25,
    imagem: "./images/pizza(8).jpg",
    ingredientes: ["Mozzarella", "Burrata", "Pesto", "Molho de tomate"]
  },
  "Pizza de Calabresa": {
    descricao: "A clássica pizza de calabresa, com fatias suculentas, cebolas fresquinhas e uma pitada de orégano, perfeita para os amantes de sabores intensos.",
    preco: 30.25,
    imagem: "./images/pizza(6).jpg",
    ingredientes: ["Calabresa", "Cebola", "Orégano", "Molho de tomate"]
  },
  "Pizza de Carne": {
    descricao: "Recheada com carne moída temperada, pimentões coloridos e uma camada irresistível de queijo derretido, essa é a escolha certa para quem adora um toque caseiro.",
    preco: 30.25,
    imagem: "./images/pizza(1).jpg",
    ingredientes: ["Frango", "Cebola", "Orégano", "Molho de tomate"]
  },
  "Pizza de Frango": {
    descricao: "Frango desfiado suculento, combinado com requeijão cremoso e um toque especial de temperos, trazendo leveza e sabor em cada fatia.",
    preco: 30.25,
    imagem: "./images/pizza(5).jpg",
    ingredientes: ["Frango", "Cebola", "Orégano", "Molho de tomate"]
  }
  
};

// Elementos do modal
const modal = document.querySelector('.modal-carrinho');
const modalImage = modal.querySelector('.modal-pizzas');
const modalNome = modal.querySelector('.pizza-nome');
const modalDescricao = modal.querySelector('.pizza-descricao');
const modalPreco = modal.querySelector('.pizza-preco');
const ingredientesList = modal.querySelector('.ingredientes-list');

// Abre o modal com os dados da pizza
document.querySelectorAll('.cardapio-content').forEach(box => {
  box.addEventListener('click', function () {
    const pizzaNome = box.querySelector('.nome-cardapio').innerText;
    const pizza = pizzas[pizzaNome];

    if (pizza) {
      // Atualiza os dados do modal
      modalNome.innerText = pizzaNome;
      modalDescricao.innerText = pizza.descricao;
      modalPreco.innerText = `R$ ${pizza.preco.toFixed(2)}`;
      modalImage.setAttribute('src', pizza.imagem);

      // Atualiza os ingredientes
      ingredientesList.innerHTML = ""; // Limpa os ingredientes anteriores
      pizza.ingredientes.forEach(ingrediente => {
        const div = document.createElement('div');
        div.className = 'ingrediente-item';
        div.innerHTML = `
          <span>${ingrediente}</span>
          <input type="checkbox" />
        `;
        ingredientesList.appendChild(div);
      });

      openModal();
    }
  });
});

const foodBoxes = document.querySelectorAll('.cardapio-content');

foodBoxes.forEach(box => {
  box.addEventListener('click', function () {
    openModal();
  });
});

// Funções de abrir e fechar modal
function openModal() {
  modal.classList.add('active');
}

function closeModal() {
  modal.classList.remove('active');
}


window.addEventListener('click', function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
});