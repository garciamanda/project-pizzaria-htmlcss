

// Dados das pizzas
const pizzas = {
  "Pizza de Chocolate": {
    descricao: "Delicioso molho de tomates italianos rústicos coberto com camadas de mozzarella cremosa, burrata e pesto de manjericão fresco.",
    preco: 30.25,
    imagem: "./images/pizza(8).jpg",
    ingredientes: ["Mozzarella", "Burrata", "Pesto", "Molho de tomate", "Chocolate", "Frango", "Cebola", "Orégano", "Molho de tomate"]
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
    imagem: "./images/pizza(5).jpeg",
    ingredientes: ["Frango", "Cebola", "Orégano", "Molho de tomate"]
  }

};

// Elementos do modal
const modalCarrinho = document.querySelector('.modal-carrinho');

const modalImage = modalCarrinho.querySelector('.modal-pizzas');
const modalNome = modalCarrinho.querySelector('.pizza-nome');
const modalDescricao = modalCarrinho.querySelector('.pizza-descricao');
const modalPreco = modalCarrinho.querySelector('.pizza-preco');
const ingredientesList = modalCarrinho.querySelector('.ingredientes-list');

// Funções de abrir e fechar modais
function openModal(modal) {
  modal.classList.add('active');
}



function closeModal(modal) {
  modal.classList.remove('active');
}

// Fecha modal ao clicar fora dele
window.addEventListener('click', function (event) {
  if (event.target === modalCarrinho) {
    closeModal(modalCarrinho);
  } 
});



// Abre "modal-carrinho" ao clicar nas divs fora de #cardapio-pizzas-separadas
document.querySelectorAll('.cardapio-content:not(#cardapio-separadas)').forEach((box) => {
  box.addEventListener('click', function () {
    const pizzaNome = box.querySelector('.nome-cardapio').innerText;
    const pizza = pizzas[pizzaNome];

    if (pizza) {
      // Atualiza os dados do modal-carrinho
      modalCarrinho.querySelector('.pizza-nome').innerText = pizzaNome;
      modalCarrinho.querySelector('.pizza-descricao').innerText = pizza.descricao;
      modalCarrinho.querySelector('.pizza-preco').innerText = `R$ ${pizza.preco.toFixed(2)}`;
      modalCarrinho.querySelector('.modal-pizzas').setAttribute('src', pizza.imagem);

      // Atualiza os ingredientes
      const ingredientesList = modalCarrinho.querySelector('.ingredientes-list');
      ingredientesList.innerHTML = "";
      pizza.ingredientes.forEach((ingrediente) => {
        const div = document.createElement('div');
        div.className = 'ingrediente-item';
        div.innerHTML = `
          <span>${ingrediente}</span>
          <input type="checkbox" />
        `;
        ingredientesList.appendChild(div);
      });

      openModal(modalCarrinho);
    }
  });
});








const saboresList = document.querySelector('.sabores-list');
const sabores = [
  {
    nome: "Pizza de Calabresa",
    descricao: "A clássica pizza de calabresa, com fatias suculentas, cebolas fresquinhas e uma pitada de orégano, perfeita para os amantes de sabores intensos.",
    preco: 30.25,
    imagem: "./images/pizza(6).jpg"
  },
  {
    nome: "Aliche",
    descricao: "Molho de tomate italiano artesanal, filés de anchova importado e parmesão",
    preco: 90.00,
    imagem: "aliche.jpg"
  },
  {
    nome: "Aliche",
    descricao: "Molho de tomate italiano artesanal, filés de anchova importado e parmesão",
    preco: 90.00,
    imagem: "aliche.jpg"
  },
  {
    nome: "Aliche",
    descricao: "Molho de tomate italiano artesanal, filés de anchova importado e parmesão",
    preco: 90.00,
    imagem: "aliche.jpg"
  }
];

// Preenche os sabores no modal
sabores.forEach(sabor => {
  const div = document.createElement('div');
  div.className = 'sabor-item';
  div.innerHTML = `
    <img src="${sabor.imagem}" alt="${sabor.nome}">
    <div class="sabor-item-content">
      <span class="sabor-item-title">${sabor.nome}</span>
      <span class="sabor-item-descricao">${sabor.descricao}</span>
      <span class="sabor-item-preco">+ R$ ${sabor.preco.toFixed(2)}</span>
    </div>
    <input type="radio" name="sabor" value="${sabor.nome}">
  `;
  saboresList.appendChild(div);
});

// Selecione as divs de id "cardapio-separadas" dentro da div de id "cardapio-pizzas-separadas"
const cardapioSeparadas = document.querySelectorAll('#cardapio-pizzas-separadas #cardapio-separadas');

function openModalCarrinhoSabores() {
  modal.classList.add('active');
}

function closeModalCarrinhoSabores() {
  modal.classList.remove('active');
}

// Adicione um evento de clique às divs de id "cardapio-separadas"
cardapioSeparadas.forEach((cardapio) => {
  cardapio.addEventListener('click', () => {
    // Abra o modal-carrinho-sabores
    const modalCarrinhoSabores = document.querySelector('.modal-carrinho-sabores');
    modalCarrinhoSabores.style.display = 'block';
    
  });

 
});


