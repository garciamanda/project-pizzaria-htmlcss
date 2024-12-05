
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
  },
  "Pizza de Morango": {
    descricao: "Delicioso molho de tomates italianos rústicos coberto com camadas de mozzarella cremosa, burrata e pesto de manjericão fresco.",
    preco: 30.25,
    imagem: "./images/pizza(8).jpg",
    ingredientes: ["Mozzarella", "Burrata", "Pesto", "Molho de tomate", "Chocolate", "Frango", "Cebola", "Orégano", "Molho de tomate"]
  },
  "Pizza de MM": {
    descricao: "Delicioso molho de tomates italianos rústicos coberto com camadas de mozzarella cremosa, burrata e pesto de manjericão fresco.",
    preco: 30.25,
    imagem: "./images/pizza(8).jpg",
    ingredientes: ["Mozzarella", "Burrata", "Pesto", "Molho de tomate", "Chocolate", "Frango", "Cebola", "Orégano", "Molho de tomate"]
  }

};

const entradas = {
  "Pão de alho recheado com queijo": {
    descricao: "O Pão de Alho Recheado com Queijo combina pão crocante, queijos derretidos e manteiga de alho, assados até dourar. Simples e irresistível!",
    preco: 15.00,
    imagem: "./images/entrada(1).jpg",
  }
}




const modalCarrinho = document.querySelector('.modal-carrinho');


const modalImage = modalCarrinho.querySelector('.modal-pizzas');
const modalNome = modalCarrinho.querySelector('.pizza-nome');
const modalDescricao = modalCarrinho.querySelector('.pizza-descricao');
const modalPreco = modalCarrinho.querySelector('.pizza-preco');
const ingredientesList = modalCarrinho.querySelector('.ingredientes-list');


function openModal(modal) {

  scrollPosition = window.scrollY;


  document.body.style.overflow = 'hidden';


  modal.classList.add('active');
}

function closeModal(modal) {

  document.body.style.overflow = '';


  window.scrollTo(0, scrollPosition);


  modal.classList.remove('active');
}



window.addEventListener('click', function (event) {
  if (event.target === modalCarrinho) {
    closeModal(modalCarrinho);
  }
});




document.querySelectorAll('#cardapio-principal .cardapio-content').forEach((box) => {
  box.addEventListener('click', function () {
    const pizzaNome = box.querySelector('.nome-cardapio').innerText;
    const pizza = pizzas[pizzaNome];

    if (pizza) {

      modalCarrinho.querySelector('.pizza-nome').innerText = pizzaNome;
      modalCarrinho.querySelector('.pizza-descricao').innerText = pizza.descricao;
      modalCarrinho.querySelector('.pizza-preco').innerText = `R$ ${pizza.preco.toFixed(2)}`;
      modalCarrinho.querySelector('.modal-pizzas').setAttribute('src', pizza.imagem);


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
  },
  {
    nome: "Pizza de Morango",
    descricao: "Delicioso molho de tomates italianos rústicos coberto com camadas de mozzarella cremosa, burrata e pesto de manjericão fresco.",
    preco: 30.25,
    imagem: "./images/pizza(8).jpg",
  },
  {
    nome: "Pizza de MM",
    descricao: "Delicioso molho de tomates italianos rústicos coberto com camadas de mozzarella cremosa, burrata e pesto de manjericão fresco.",
    preco: 30.25,
    imagem: "./images/pizza(8).jpg",
  }
];





const cardapioSeparadas = document.querySelectorAll('#cardapio-pizzas-separadas #cardapio-separadas');

const cardapioSeparadasEntradas = document.querySelectorAll('#cardapio-entradas #cardapio-content-entradas');

const cardapioSeparadasDoces = document.querySelectorAll('#cardapio-pizzas-doces #cardapio-content-doces');


const modalCarrinhoSabores = document.querySelector('.modal-carrinho-sabores');


let scrollPosition = 0;

cardapioSeparadas.forEach((cardapio) => {
  cardapio.addEventListener('click', () => {
    const pizzaNome = cardapio.querySelector('.nome-cardapio').innerText;
    const pizzaDescricao = cardapio.querySelector('.descricao-cardapio').innerText;
    const pizzaPreco = cardapio.querySelector('.preco-cardapio').innerText;
    const pizzaImagem = cardapio.querySelector('img').getAttribute('src');


    modalCarrinhoSabores.querySelector('.pizza-nome').innerText = pizzaNome;
    modalCarrinhoSabores.querySelector('.pizza-descricao').innerText = pizzaDescricao;
    modalCarrinhoSabores.querySelector('.pizza-preco').innerText = pizzaPreco;
    modalCarrinhoSabores.querySelector('.modal-pizzas').setAttribute('src', pizzaImagem);


    openModalCarrinhoSabores();
  });
});


cardapioSeparadasDoces.forEach((cardapio) => {
  cardapio.addEventListener('click', () => {
    const pizzaDoceNome = cardapio.querySelector('.nome-cardapio').innerText;
    const pizzaDoceDescricao = cardapio.querySelector('.descricao-cardapio').innerText;
    const pizzaDocePreco = cardapio.querySelector('.preco-cardapio').innerText;
    const pizzaDoceImagem = cardapio.querySelector('img').getAttribute('src');


    modalCarrinhoSabores.querySelector('.pizza-nome').innerText = pizzaDoceNome;
    modalCarrinhoSabores.querySelector('.pizza-descricao').innerText = pizzaDoceDescricao;
    modalCarrinhoSabores.querySelector('.pizza-preco').innerText = pizzaDocePreco;
    modalCarrinhoSabores.querySelector('.modal-pizzas').setAttribute('src', pizzaDoceImagem);


    openModalCarrinhoSabores();
  });
});

// const docesLista = document.querySelector('.sabores-list');
// pizzasdoces.forEach(doce => {
//   const div = document.createElement('div');
//   div.className = 'doce-item';
//   div.innerHTML = `
//     <img src="${doce.imagem}" alt="${doce.nome}">
//     <div class="doce-item-content">
//       <span class="doce-item-title">${doce.nome}</span>
//       <span class="doce-item-descricao">${doce.descricao}</span>
//       <span class="doce-item-preco">+ R$ ${doce.preco.toFixed(2)}</span>
//     </div>
//     <input type="radio" name="sabor" value="${doce.nome}">
//   `;
//   docesLista.appendChild(div);
// });


function openModalCarrinhoSabores() {
  scrollPosition = window.scrollY;
  openModal(modalCarrinhoSabores);
}

function closeModalCarrinhoSabores() {
  closeModal(modalCarrinhoSabores);
}



function updateCartSubtotal() {
  const subtotal = cart.reduce((total, item) => total + item.totalPrice, 0);
  cartSubtotalElement.innerText = `R$ ${subtotal.toFixed(2)}`;

  cartHeader.innerText = `Cart (${cart.length} items)`;

}





const saboresLista = document.querySelector('.sabores-list');
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
  saboresLista.appendChild(div);
});

function addToCartSabores(saborNome) {
  const sabor = sabores.find(s => s.nome === saborNome);

  const totalPrice = sabor.preco;


  const existingItem = cart.find(item => item.nome === sabor.nome);

  if (existingItem) {

    existingItem.quantidade++;
    existingItem.totalPrice = existingItem.quantidade * totalPrice;
  } else {

    cart.push({
      nome: sabor.nome,
      ingredientes: [],
      imagem: sabor.imagem,
      totalPrice: totalPrice,
      quantidade: 1,
    });
  }

  renderCartItems();
}





function renderCartItems() {
  cartItemsContainer.innerHTML = "";

  cart.forEach((item, index) => {
    const cartItem = document.createElement('div');
    cartItem.className = 'cart-item';
    cartItem.innerHTML = `
      <div class="cart-item-left">
        <img src="${item.imagem}" alt="${item.nome}" class="cart-item-image">
        <div class="cart-item-info">
          <h4>${item.nome}</h4>
          <p>${item.ingredientes.join(", ")}</p>
          <p>R$ ${item.totalPrice.toFixed(2)}</p>
        </div>
      </div>
      <div class="cart-item-right">
        <button class="edit-btn" onclick="editCartItem(${index})">Editar</button>
        <button class="remove-btn" onclick="removeCartItem(${index})">Remover</button>
      </div>
    `;
    cartItemsContainer.appendChild(cartItem);
  });

  updateCartSubtotal();
}



function editCartItem(index) {
  const item = cart[index];
  modalNome.innerText = item.nome;
  modalDescricao.innerText = item.descricao;
  modalPreco.innerText = `R$ ${item.totalPrice.toFixed(2)}`;
  modalImage.setAttribute("src", item.imagem);

  ingredientesList.innerHTML = "";
  openModal(modalCarrinho);

  document.querySelector(".add-to-cart").style.display = "none";
  document.querySelector(".confirmar-alteracoes").style.display = "block";

  document.querySelector(".confirmar-alteracoes").onclick = function () {
    cart.splice(index, 1);
    renderCartItems();
    closeModal(modalCarrinho);
  };
}

function removeCartItem(index) {
  cart.splice(index, 1);
  renderCartItems();
}

window.addEventListener('click', function (event) {
  if (event.target === modalCarrinhoSabores) {
    closeModalCarrinhoSabores();
  }
});

const cart = [];
const cartItemsContainer = document.getElementById('cart-items');
const cartSubtotalElement = document.getElementById('cart-subtotal');
const cartHeader = document.querySelector('.cart-header span');


function updateCartSubtotal() {
  const subtotal = cart.reduce((total, item) => total + item.totalPrice, 0);
  cartSubtotalElement.innerText = `R$ ${subtotal.toFixed(2)}`;

  cartHeader.innerText = `Cart (${cart.length} items)`;

}


function renderCartItems() {
  cartItemsContainer.innerHTML = "";

  cart.forEach((item, index) => {
    const cartItem = document.createElement('div');
    cartItem.className = 'cart-item';
    cartItem.innerHTML = `
      <div class="cart-item-left">
        <img src="${item.imagem}" alt="${item.nome}" class="cart-item-image">
        <div class="cart-item-info">
          <h4>${item.nome}</h4>
          <p>${item.ingredientes.join(", ")}</p>
          <p>R$ ${item.totalPrice.toFixed(2)}</p>
        </div>
      </div>
      <div class="cart-item-right">
        <!-- Exibe a quantidade ao lado dos botões -->
        <span class="quantity">Quantidade: ${item.quantidade}</span>
        <button class="edit-btn" onclick="editCartItem(${index})">Editar</button>
        <button class="remove-btn" onclick="removeCartItem(${index})">Remover</button>
      </div>
    `;
    cartItemsContainer.appendChild(cartItem);
  });

  updateCartSubtotal();
}



function addToCart(pizzaNome, ingredientesSelecionados) {
  const pizza = pizzas[pizzaNome];

  const totalPrice = pizza.preco + ingredientesSelecionados.length * 5;

  // Verifica se a pizza já está no carrinho
  const existingItem = cart.find(item => item.nome === pizzaNome &&
    JSON.stringify(item.ingredientes) === JSON.stringify(ingredientesSelecionados));

  if (existingItem) {
    // Se já estiver no carrinho, incrementa a quantidade
    existingItem.quantidade++;
    existingItem.totalPrice = existingItem.quantidade * totalPrice;
  } else {
    // Se não estiver no carrinho, adiciona o item com quantidade 1
    cart.push({
      nome: pizzaNome,
      ingredientes: ingredientesSelecionados,
      imagem: pizza.imagem,
      totalPrice: totalPrice,
      quantidade: 1, // Inicializa a quantidade como 1
    });
  }

  renderCartItems(); // Re-renderiza o carrinho após adicionar ou atualizar o item
}






function editCartItem(index) {
  const item = cart[index];
  const pizza = pizzas[item.nome];

  modalNome.innerText = item.nome;
  modalDescricao.innerText = pizza.descricao;
  modalPreco.innerText = `R$ ${item.totalPrice.toFixed(2)}`;
  modalImage.setAttribute("src", pizza.imagem);

  ingredientesList.innerHTML = "";
  pizza.ingredientes.forEach(ingrediente => {
    const div = document.createElement("div");
    div.className = "ingrediente-item";
    div.innerHTML = `
      <span>${ingrediente}</span>
      <input type="checkbox" ${item.ingredientes.includes(ingrediente) ? "checked" : ""} />
    `;
    ingredientesList.appendChild(div);
  });

  openModal(modalCarrinho);



  document.querySelector(".add-to-cart").style.display = "none";
  document.querySelector(".confirmar-alteracoes").style.display = "block";


  document.querySelector(".confirmar-alteracoes").onclick = function () {
    cart.splice(index, 1);

    const selecionados = Array.from(
      modalCarrinho.querySelectorAll(".ingredientes-list input:checked")
    ).map(checkbox => checkbox.parentElement.querySelector('span').innerText);

    addToCart(item.nome, selecionados);

    closeModal(modalCarrinho);

    document.querySelector(".add-to-cart").style.display = "block";
    document.querySelector(".confirmar-alteracoes").style.display = "none";

    renderCartItems();
  };

}





function removeCartItem(index) {
  cart.splice(index, 1);
  renderCartItems();
}



document.querySelector(".add-to-cart").addEventListener("click", () => {
  const pizzaNome = modalNome.innerText;


  const ingredientesSelecionados = Array.from(
    modalCarrinho.querySelectorAll(".ingredientes-list input:checked")
  ).map(checkbox => checkbox.parentElement.querySelector('span').innerText);


  addToCart(pizzaNome, ingredientesSelecionados);
  closeModal(modalCarrinho);
});


let saborSelecionado = null;

document.querySelectorAll('.sabor-item input[type="radio"]').forEach(radio => {
  radio.addEventListener('change', function () {
    saborSelecionado = this.value;
    console.log(`Sabor selecionado: ${saborSelecionado}`);
  });
});


document.querySelector('.add-to-cart-sabores').addEventListener('click', function () {
  if (saborSelecionado) {
    addToCartSabores(saborSelecionado);
    closeModalCarrinhoSabores();
  }
});






// document.querySelectorAll('.sabor-item input[type="radio"]').forEach(radio => {
//   radio.addEventListener('change', function () {
//     const saborNome = this.value;
//     addToCartSabores(saborNome);
//     closeModalCarrinhoSabores();
//   });
// });

const modalCarrinhoEntradas = document.querySelector('.modal-carrinho-entradas');

document.querySelectorAll('#cardapio-content-entradas').forEach((box) => {
  box.addEventListener('click', function () {
    const entradaNome = box.querySelector('.nome-cardapio').innerText;
    const entrada = entradas[entradaNome];

    if (entrada) {

      modalCarrinhoEntradas.querySelector('.pizza-nome').innerText = entradaNome;
      modalCarrinhoEntradas.querySelector('.pizza-descricao').innerText = entrada.descricao;
      modalCarrinhoEntradas.querySelector('.pizza-preco').innerText = `R$ ${entrada.preco.toFixed(2)}`;
      modalCarrinhoEntradas.querySelector('.modal-pizzas').setAttribute('src', entrada.imagem);


      openModal(modalCarrinhoEntradas);
    }
  });
});



window.addEventListener('click', function (event) {
  if (event.target === modalCarrinhoEntradas) {
    closeModal(modalCarrinhoEntradas);
  }
});



