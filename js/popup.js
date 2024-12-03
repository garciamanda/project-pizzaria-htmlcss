
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




document.querySelectorAll('.cardapio-content:not(#cardapio-separadas)').forEach((box) => {
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
  }
];


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


const cardapioSeparadas = document.querySelectorAll('#cardapio-pizzas-separadas #cardapio-separadas');



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


function openModalCarrinhoSabores() {
  scrollPosition = window.scrollY;
  openModal(modalCarrinhoSabores);
}

function closeModalCarrinhoSabores() {
  closeModal(modalCarrinhoSabores);
}

// Função para adicionar ao carrinho com ingredientes
function addToCart(nome, ingredientesSelecionados, tipo) {
  let item;
  
  if (tipo === "pizza") {
    const pizza = pizzas[nome];
    const totalPrice = pizza.preco + ingredientesSelecionados.length * 5;
    
    item = {
      nome: nome,
      ingredientes: ingredientesSelecionados,
      imagem: pizza.imagem,
      totalPrice,
      tipo: "pizza", // Tipo pizza
    };
  } else if (tipo === "sabor") {
    const sabor = sabores.find(s => s.nome === nome);
    const totalPrice = sabor.preco;

    item = {
      nome: nome,
      ingredientes: [], // Não tem ingredientes adicionais no sabor
      imagem: sabor.imagem,
      totalPrice,
      tipo: "sabor", // Tipo sabor
    };
  }

  cart.push(item);
  renderCartItems();
}


// Função de edição do item do carrinho
function editCartItem(index) {
  const item = cart[index];

  if (item.tipo === "pizza") {
    // Editando uma pizza no modal-carrinho
    const pizza = pizzas[item.nome];

    // Preenchendo as informações do modal-carrinho
    modalCarrinho.querySelector('.pizza-nome').innerText = pizza.nome;
    modalCarrinho.querySelector('.pizza-descricao').innerText = pizza.descricao;
    modalCarrinho.querySelector('.pizza-preco').innerText = `R$ ${pizza.preco.toFixed(2)}`;
    modalCarrinho.querySelector('.modal-pizzas').setAttribute('src', pizza.imagem);

    // Preenche a lista de ingredientes no modal-carrinho
    const ingredientesList = modalCarrinho.querySelector('.ingredientes-list');
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

    // Confirmar alterações no modal-carrinho
    document.querySelector(".confirmar-alteracoes").onclick = function () {
      // Remove o item original do carrinho
      cart.splice(index, 1);

      // Coleta os ingredientes selecionados
      const ingredientesSelecionados = Array.from(
        modalCarrinho.querySelectorAll(".ingredientes-list input:checked")
      ).map(checkbox => checkbox.parentElement.querySelector('span').innerText);

      // Re-adiciona o item ao carrinho
      addToCart(item.nome, ingredientesSelecionados, "pizza");

      closeModal(modalCarrinho);
      document.querySelector(".add-to-cart").style.display = "block";
      document.querySelector(".confirmar-alteracoes").style.display = "none";

      renderCartItems();
    };

  } else if (item.tipo === "sabor") {
    // Editando um sabor no modal-carrinho-sabores
    const sabor = sabores.find(s => s.nome === item.nome);

    // Preenchendo as informações do modal-carrinho-sabores
    modalCarrinhoSabores.querySelector('.pizza-nome').innerText = sabor.nome;
    modalCarrinhoSabores.querySelector('.pizza-descricao').innerText = sabor.descricao;
    modalCarrinhoSabores.querySelector('.pizza-preco').innerText = `R$ ${sabor.preco.toFixed(2)}`;
    modalCarrinhoSabores.querySelector('.modal-pizzas').setAttribute('src', sabor.imagem);

    openModal(modalCarrinhoSabores);

    // Confirmar alterações no modal-carrinho-sabores
    document.querySelector(".confirmar-alteracoes").onclick = function () {
      // Remove o item original do carrinho
      cart.splice(index, 1);

      // Re-adiciona o sabor ao carrinho (sem ingredientes adicionais)
      addToCart(sabor.nome, [], "sabor");

      closeModal(modalCarrinhoSabores);
      renderCartItems();
    };
  }
}


// Função para renderizar os itens no carrinho
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

// Adicionar pizza ao carrinho
document.querySelector(".add-to-cart").onclick = function () {
  const nomePizza = modalCarrinho.querySelector('.pizza-nome').innerText;
  const ingredientesSelecionados = Array.from(
    modalCarrinho.querySelectorAll(".ingredientes-list input:checked")
  ).map(checkbox => checkbox.parentElement.querySelector('span').innerText);

  // Adiciona a pizza ao carrinho
  addToCart(nomePizza, ingredientesSelecionados, "pizza");

  // Fecha o modal após adicionar
  closeModal(modalCarrinho);
  renderCartItems();
};


// Adicionar sabor ao carrinho
document.querySelector(".add-to-cart").onclick = function () {
  const nomeSabor = modalCarrinhoSabores.querySelector('.pizza-nome').innerText;

  // Adiciona o sabor ao carrinho (sem ingredientes adicionais)
  addToCart(nomeSabor, [], "sabor");

  // Fecha o modal após adicionar
  closeModal(modalCarrinhoSabores);
  renderCartItems();
};


// const saboresLista = document.querySelector('.sabores-list');
// sabores.forEach(sabor => {
//   const div = document.createElement('div');
//   div.className = 'sabor-item';
//   div.innerHTML = `
//     <img src="${sabor.imagem}" alt="${sabor.nome}">
//     <div class="sabor-item-content">
//       <span class="sabor-item-title">${sabor.nome}</span>
//       <span class="sabor-item-descricao">${sabor.descricao}</span>
//       <span class="sabor-item-preco">+ R$ ${sabor.preco.toFixed(2)}</span>
//     </div>
//     <input type="radio" name="sabor" value="${sabor.nome}">
//   `;
//   saboresLista.appendChild(div);
// });

// function addToCartSabores(saborNome) {
//   const sabor = sabores.find(s => s.nome === saborNome);

//     const totalPrice = sabor.preco;

//   cart.push({
//     nome: sabor.nome,
//     ingredientes: [],     imagem: sabor.imagem,
//     totalPrice,
//   });

//   renderCartItems();
// }

// document.querySelectorAll('.sabor-item input[type="radio"]').forEach(radio => {
//   radio.addEventListener('change', function() {
//     const saborNome = this.value;
//     addToCartSabores(saborNome);     closeModalCarrinhoSabores();   });
// });

// function renderCartItems() {
//   cartItemsContainer.innerHTML = "";

//   cart.forEach((item, index) => {
//     const cartItem = document.createElement('div');
//     cartItem.className = 'cart-item';
//     cartItem.innerHTML = `
//       <div class="cart-item-left">
//         <img src="${item.imagem}" alt="${item.nome}" class="cart-item-image">
//         <div class="cart-item-info">
//           <h4>${item.nome}</h4>
//           <p>${item.ingredientes.join(", ")}</p>
//           <p>R$ ${item.totalPrice.toFixed(2)}</p>
//         </div>
//       </div>
//       <div class="cart-item-right">
//         <button class="edit-btn" onclick="editCartItem(${index})">Editar</button>
//         <button class="remove-btn" onclick="removeCartItem(${index})">Remover</button>
//       </div>
//     `;
//     cartItemsContainer.appendChild(cartItem);
//   });

//   updateCartSubtotal();
// }

// function updateCartSubtotal() {
//   const subtotal = cart.reduce((total, item) => total + item.totalPrice, 0);
//   cartSubtotalElement.innerText = `R$ ${subtotal.toFixed(2)}`;

//   cartHeader.innerText = `Cart (${cart.length} items)`;
// }

// function editCartItem(index) {
//   const item = cart[index];
//   modalNome.innerText = item.nome;
//   modalDescricao.innerText = item.descricao;
//   modalPreco.innerText = `R$ ${item.totalPrice.toFixed(2)}`;
//   modalImage.setAttribute("src", item.imagem);

//   ingredientesList.innerHTML = "";
//   openModal(modalCarrinho);

//   document.querySelector(".add-to-cart").style.display = "none";
//   document.querySelector(".confirmar-alteracoes").style.display = "block";

//   document.querySelector(".confirmar-alteracoes").onclick = function () {
//     cart.splice(index, 1);
//     renderCartItems();
//     closeModal(modalCarrinho);
//   };
// }

// function removeCartItem(index) {
//   cart.splice(index, 1);
//   renderCartItems();
// }

// window.addEventListener('click', function (event) {
//   if (event.target === modalCarrinhoSabores) {
//     closeModalCarrinhoSabores();
//   }
// });

// const cart = [];
// const cartItemsContainer = document.getElementById('cart-items');
// const cartSubtotalElement = document.getElementById('cart-subtotal');
// const cartHeader = document.querySelector('.cart-header span');


// function updateCartSubtotal() {
//   const subtotal = cart.reduce((total, item) => total + item.totalPrice, 0);
//   cartSubtotalElement.innerText = `R$ ${subtotal.toFixed(2)}`;

//   cartHeader.innerText = `Cart (${cart.length} items)`;

// }


// function renderCartItems() {
//   cartItemsContainer.innerHTML = "";

//   cart.forEach((item, index) => {
//     const cartItem = document.createElement('div');
//     cartItem.className = 'cart-item';
//     cartItem.innerHTML = `
//       <div class="cart-item-left">
//         <img src="${item.imagem}" alt="${item.nome}" class="cart-item-image">
//         <div class="cart-item-info">
//           <h4>${item.nome}</h4>
//           <p>${item.ingredientes.join(", ")}</p>
//           <p>R$ ${item.totalPrice.toFixed(2)}</p>
//         </div>
//       </div>
//       <div class="cart-item-right">
//         <button class="edit-btn" onclick="editCartItem(${index})">Editar</button>
//         <button class="remove-btn" onclick="removeCartItem(${index})">Remover</button>
//       </div>
//     `;
//     cartItemsContainer.appendChild(cartItem);
//   });

//   updateCartSubtotal();
// }


// function addToCart(pizzaNome, ingredientesSelecionados) {
//   const pizza = pizzas[pizzaNome];


//   const totalPrice = pizza.preco + ingredientesSelecionados.length * 5;


//   cart.push({
//     nome: pizzaNome,
//     ingredientes: ingredientesSelecionados,
//     imagem: pizza.imagem,
//     totalPrice,
//   });

//   renderCartItems();
// }



// function editCartItem(index) {
//   const item = cart[index];
//   const pizza = pizzas[item.nome];

//   modalNome.innerText = item.nome;
//   modalDescricao.innerText = pizza.descricao;
//   modalPreco.innerText = 'R$ ${pizza.preco.toFixed(2)}';
//   modalImage.setAttribute("src", pizza.imagem);

//   ingredientesList.innerHTML = "";
//   pizza.ingredientes.forEach(ingrediente => {
//     const div = document.createElement("div");
//     div.className = "ingrediente-item";
//     div.innerHTML = `
//       <span>${ingrediente}</span>
//       <input type="checkbox" ${item.ingredientes.includes(ingrediente) ? "checked" : ""} />
//     `;
//     ingredientesList.appendChild(div);
//   });

//   openModal(modalCarrinho);



//   document.querySelector(".add-to-cart").style.display = "none";
//   document.querySelector(".confirmar-alteracoes").style.display = "block";


//   document.querySelector(".confirmar-alteracoes").onclick = function () {
//     cart.splice(index, 1);

//     const selecionados = Array.from(
//       modalCarrinho.querySelectorAll(".ingredientes-list input:checked")
//     ).map(checkbox => checkbox.parentElement.querySelector('span').innerText);

//     addToCart(item.nome, selecionados);

//     closeModal(modalCarrinho);

//     document.querySelector(".add-to-cart").style.display = "block";
//     document.querySelector(".confirmar-alteracoes").style.display = "none";

//     renderCartItems();
//   };

// }





// function removeCartItem(index) {
//   cart.splice(index, 1);
//   renderCartItems();
// }



// document.querySelector(".add-to-cart").addEventListener("click", () => {
//   const pizzaNome = modalNome.innerText;


//   const ingredientesSelecionados = Array.from(
//     modalCarrinho.querySelectorAll(".ingredientes-list input:checked")
//   ).map(checkbox => checkbox.parentElement.querySelector('span').innerText);


//   addToCart(pizzaNome, ingredientesSelecionados);
//   closeModal(modalCarrinho);
// });

