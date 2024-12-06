
const pizzas = {
  "Pizza de Chocolate": {
    descricao: "Delicioso molho de tomates italianos rústicos coberto com camadas de mozzarella cremosa, burrata e pesto de manjericão fresco.",
    preco: 30.25,
    imagem: "./images/pizza(8).jpg",
    ingredientes: ["Chocolate ao leite", "Chocolate branco", "Chocolate meio amargo", "Nutella", "Morangos frescos", "Banana", "Granulado de Chocolate", "Caspas de Chocolate", "Marshmallows", "Amêndoas Laminadas", "Nozes Caramelizadas", "Coco Ralado", "Leite Condesado", "Caramelo", "Sorvete de Creme ou Baunilha"]
  },
  "Pizza de Calabresa": {
    descricao: "A clássica pizza de calabresa, com fatias suculentas, cebolas fresquinhas e uma pitada de orégano, perfeita para os amantes de sabores intensos.",
    preco: 30.25,
    imagem: "./images/pizza(13).jpg",
    ingredientes: ["Calabresa Fatiada", "Molho de Tomate", "Mussarela", "Cebola em Rodelas", "Azeitona Preta", "Azeite de Olivia", "Pimentão", "Parmesão Ralado", "Pimenta Calabresa", "Tomate fatiado", "Cheiro-Verde", "Alho Picado", "Manjericão Fresco", "Requeijão Cremoso"]
  },
  "Pizza de Carne": {
    descricao: "Recheada com carne moída temperada, pimentões coloridos e uma camada irresistível de queijo derretido, essa é a escolha certa para quem adora um toque caseiro.",
    preco: 30.25,
    imagem: "./images/pizza(16).jpg",
    ingredientes: ["Calabresa Fatiada", "Molho de Tomate", "Mussarela", "Cebola em Rodelas", "Azeitona Preta", "Azeite de Olivia", "Pimentão", "Parmesão Ralado", "Pimenta Calabresa", "Tomate fatiado", "Cheiro-Verde", "Alho Picado", "Manjericão Fresco", "Requeijão Cremoso"]
  },
  "Pizza de Frango": {
    descricao: "Frango desfiado suculento, combinado com requeijão cremoso e um toque especial de temperos, trazendo leveza e sabor em cada fatia.",
    preco: 30.25,
    imagem: "./images/pizza(5).jpeg",
    ingredientes: ["Calabresa Fatiada", "Molho de Tomate", "Mussarela", "Cebola em Rodelas", "Azeitona Preta", "Azeite de Olivia", "Pimentão", "Parmesão Ralado", "Pimenta Calabresa", "Tomate fatiado", "Cheiro-Verde", "Alho Picado", "Manjericão Fresco", "Requeijão Cremoso"]
  },
  "Pizza de Morango": {
    descricao: "Delicioso molho de tomates italianos rústicos coberto com camadas de mozzarella cremosa, burrata e pesto de manjericão fresco.",
    preco: 30.25,
    imagem: "./images/pizza(8).jpg",
    ingredientes: ["Calabresa Fatiada", "Molho de Tomate", "Mussarela", "Cebola em Rodelas", "Azeitona Preta", "Azeite de Olivia", "Pimentão", "Parmesão Ralado", "Pimenta Calabresa", "Tomate fatiado", "Cheiro-Verde", "Alho Picado", "Manjericão Fresco", "Requeijão Cremoso"]
  },
  "Pizza de MM": {
    descricao: "Delicioso molho de tomates italianos rústicos coberto com camadas de mozzarella cremosa, burrata e pesto de manjericão fresco.",
    preco: 30.25,
    imagem: "./images/mms.jpeg",
    ingredientes: ["Calabresa Fatiada", "Molho de Tomate", "Mussarela", "Cebola em Rodelas", "Azeitona Preta", "Azeite de Olivia", "Pimentão", "Parmesão Ralado", "Pimenta Calabresa", "Tomate fatiado", "Cheiro-Verde", "Alho Picado", "Manjericão Fresco", "Requeijão Cremoso"]
  }

};

const entradas = {
  "Pão de alho recheado com queijo": {
    descricao: "O Pão de Alho Recheado com Queijo combina pão crocante, queijos derretidos e manteiga de alho, assados até dourar. Simples e irresistível!",
    preco: 15.00,
    imagem: "./images/entrada(1).jpg",
  },
  "Bruschetta Tradicional": {
    descricao: "A Bruschetta Tradicional é uma entrada italiana clássica, feita com pão tostado, tomate fresco, manjericão e azeite de oliva, finalizada com um toque de balsâmico. Simples e Gostoso!",
    preco: 10.50,
    imagem: "./images/entrada(2).jpg",
  },
  "Provolone à Milanesa": {
    descricao: "Os Mini Calzones são pequenos pastéis italianos assados, recheados com queijo derretido, presunto e ervas. Servidos com molho marinara, são uma entrada deliciosa e cheia de sabor!",
    preco: 10.50,
    imagem: "./images/entrada(3).jpg",
  },
  "Anéis de Cebola Artesanais": {
    descricao: "Os Anéis de Cebola Artesanais são uma entrada irresistível, feitos com cebolas frescas empanadas em uma massa temperada e fritas até ficarem douradas. Crocantes e perfeitos para acompanhar com molhos!",
    preco: 10.50,
    imagem: "./images/entrada(4).jpg",
  },
  "Mini Calzones": {
    descricao: "Os Mini Calzones são pequenos pastéis italianos assados, recheados com queijo derretido, presunto e ervas. Servidos com molho marinara, são uma entrada deliciosa e cheia de sabor!",
    preco: 10.50,
    imagem: "./images/entrada(5).jpg",
  },
  "Bolinho de Risoto": {
    descricao: "O Bolinho de Risoto , ou arancini, é uma entrada italiana deliciosa, feita com risoto moldado em bolinhos, recheados com queijo e fritos até ficarem dourados. Crocante por fora e cremoso por dentro!",
    preco: 10.50,
    imagem: "./images/entrada(6).jpg",
  },
  "Carpaccio de Abobrinha": {
    descricao: "O Carpaccio de Abobrinha é uma entrada leve e refrescante, feito com finas fatias de abobrinha temperadas com limão, azeite, parmesão e amêndoas tostadas. Simples e sofisticado!",
    preco: 10.50,
    imagem: "./images/entrada(7).webp",
  },
  "Tabua de Antepastos": {
    descricao: "A Tábua de Antepastos é uma entrada perfeita para compartilhar, com uma seleção de queijos, salames italianos, azeitonas, tomate seco e pães artesanais. Variedade e sabor em cada mordida!",
    preco: 10.50,
    imagem: "./images/entrada(8).webp", 
  }
}

const diversos = {
  "Fanta Laranja": {
    preco: 4.50,
    imagem: "./images/bebida(1).jpeg",
  },
  "Fanta Uva" : {
    preco: 4.50,
    imagem: "./images/bebida(2).jpeg",
  },
  "Sprite": {
    preco: 5.00,
    imagem: "./images/bebida(3).jpeg",
  },
  "Coca": {
    preco: 6.00,
    imagem: "./images/bebida(5).webp",
  }

}


const decrementBtn = document.getElementById('decrement');
const incrementBtn = document.getElementById('increment');
const counterSpan = document.getElementById('counter');
const addToCartButton = document.querySelector('.add-to-cart');


let quantity = 1;

function updateCounter() {
  counterSpan.textContent = quantity;
}

// Evento para diminuir a quantidade
decrementBtn.addEventListener('click', () => {
  if (quantity > 1) { 
    quantity--;
    updateCounter();
  }
});


incrementBtn.addEventListener('click', () => {
  quantity++;
  updateCounter();
});

// adicionar a quantidade ao carrinho

// addToCartButton.addEventListener('click', () => {
//   const pizza = pizzas[modalCarrinho.querySelector('.pizza-nome').innerText];
//   const pizzaPreco = pizza.preco * quantity;
//   const pizzaImagem = pizza.imagem;
//   const pizzaDescricao = pizza.descricao;
//   const pizzaNome = modalCarrinho.querySelector('.pizza-nome').innerText;

//   const pizzaItem = document.createElement('div');
//   pizzaItem.classList.add('pizza-item');
//   pizzaItem.innerHTML = `
//     <img src="${pizzaImagem}" alt="${pizzaNome}">
//     <h3>${pizzaNome}</h3>
//     <p>${pizzaDescricao}</p>
//     <p>Quantidade: ${quantity}</p>
//     <p>Preço: R$ ${pizzaPreco.toFixed(2)}</p>
//   `;

//   const cartItemsContainer = document.querySelector('.cart-items');
//   cartItemsContainer.appendChild(pizzaItem);

//   updateCartSubtotal();
//   closeModal(modalCarrinho);
// });


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


      modalCarrinho.querySelector('#counter').textContent = 1;
      quantity = 1; 

      openModal(modalCarrinho);
    }
  });
});








const saboresList = document.querySelector('.sabores-list');
const sabores = [
  {
    nome: "Pizza de Chocolate",
    descricao: "Delicioso molho de tomates italianos rústicos coberto com camadas de mozzarella cremosa, burrata e pesto de manjericão fresco.",
    preco: 30.25,
    imagem: "./images/pizza(8).jpg",
    ingredientes: ["Chocolate ao leite", "Chocolate branco", "Chocolate meio amargo", "Nutella", "Morangos frescos", "Banana", "Granulado de Chocolate", "Caspas de Chocolate", "Marshmallows", "Amêndoas Laminadas", "Nozes Caramelizadas", "Coco Ralado", "Leite Condesado", "Caramelo", "Sorvete de Creme ou Baunilha"]
  },
  {
    nome: "Pizza de Calabresa",
    descricao: "A clássica pizza de calabresa, com fatias suculentas, cebolas fresquinhas e uma pitada de orégano, perfeita para os amantes de sabores intensos.",
    preco: 30.25,
    imagem: "./images/pizza(13).jpg",
    ingredientes: ["Calabresa Fatiada", "Molho de Tomate", "Mussarela", "Cebola em Rodelas", "Azeitona Preta", "Azeite de Olivia", "Pimentão", "Parmesão Ralado", "Pimenta Calabresa", "Tomate fatiado", "Cheiro-Verde", "Alho Picado", "Manjericão Fresco", "Requeijão Cremoso"]
  },
  {
    nome: "Pizza de Carne",
    descricao: "Recheada com carne moída temperada, pimentões coloridos e uma camada irresistível de queijo derretido, essa é a escolha certa para quem adora um toque caseiro.",
    preco: 30.25,
    imagem: "./images/pizza(16).jpg",
    ingredientes: ["Calabresa Fatiada", "Molho de Tomate", "Mussarela", "Cebola em Rodelas", "Azeitona Preta", "Azeite de Olivia", "Pimentão", "Parmesão Ralado", "Pimenta Calabresa", "Tomate fatiado", "Cheiro-Verde", "Alho Picado", "Manjericão Fresco", "Requeijão Cremoso"]
  },
  {
    nome: "Pizza de Frango",
    descricao: "Frango desfiado suculento, combinado com requeijão cremoso e um toque especial de temperos, trazendo leveza e sabor em cada fatia.",
    preco: 30.25,
    imagem: "./images/pizza(5).jpeg",
    ingredientes: ["Calabresa Fatiada", "Molho de Tomate", "Mussarela", "Cebola em Rodelas", "Azeitona Preta", "Azeite de Olivia", "Pimentão", "Parmesão Ralado", "Pimenta Calabresa", "Tomate fatiado", "Cheiro-Verde", "Alho Picado", "Manjericão Fresco", "Requeijão Cremoso"]
  },
  {
    nome: "Pizza de Morango",
    descricao: "Delicioso molho de tomates italianos rústicos coberto com camadas de mozzarella cremosa, burrata e pesto de manjericão fresco.",
    preco: 30.25,
    imagem: "./images/pizza(8).jpg",
    ingredientes: ["Calabresa Fatiada", "Molho de Tomate", "Mussarela", "Cebola em Rodelas", "Azeitona Preta", "Azeite de Olivia", "Pimentão", "Parmesão Ralado", "Pimenta Calabresa", "Tomate fatiado", "Cheiro-Verde", "Alho Picado", "Manjericão Fresco", "Requeijão Cremoso"]
  },
  {
    nome: "Pizza de MMs",
    descricao: "Delicioso molho de tomates italianos rústicos coberto com camadas de mozzarella cremosa, burrata e pesto de manjericão fresco.",
    preco: 30.25,
    imagem: "./images/mms.jpeg",
    ingredientes: ["Calabresa Fatiada", "Molho de Tomate", "Mussarela", "Cebola em Rodelas", "Azeitona Preta", "Azeite de Olivia", "Pimentão", "Parmesão Ralado", "Pimenta Calabresa", "Tomate fatiado", "Cheiro-Verde", "Alho Picado", "Manjericão Fresco", "Requeijão Cremoso"]
  }
];





const cardapioSeparadas = document.querySelectorAll('#cardapio-pizzas-separadas #cardapio-separadas');

const cardapioSeparadasEntradas = document.querySelectorAll('#cardapio-entradas #cardapio-content-entradas');

const cardapioSeparadasDiversos = document.querySelectorAll('#cardapio-diversos #cardapio-content-diversos');

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
    
    console.log(item);

    if (!item.totalPrice || isNaN(item.totalPrice)) {
      console.error('Erro no preço total do item:', item);
    }
    if (!item.quantidade) {
      console.error('Erro na quantidade do item:', item);
    }

    const cartItem = document.createElement('div');
    cartItem.className = 'cart-item';
    cartItem.innerHTML = `
      <div class="cart-item-left">
        <!-- Exibe a imagem do item, com uma imagem padrão se não houver -->
        <img src="${item.imagem || 'default-image.jpg'}" alt="${item.nome}" class="cart-item-image">
        <div class="cart-item-info">
          <h4>${item.nome}</h4>
          <p>${item.ingredientes && item.ingredientes.length > 0 ? item.ingredientes.join(", ") : 'Sem ingredientes'}</p>
          <p>R$ ${item.totalPrice ? item.totalPrice.toFixed(2) : 'Erro no preço'}</p>
        </div>
      </div>
      <div class="cart-item-right">
        <!-- Exibe a quantidade ao lado dos botões -->
        <span class="quantity">Quantidade: ${item.quantidade ? item.quantidade : 'Erro na quantidade'}</span>
        <button class="edit-btn" onclick="editCartItem(${index})">Editar</button>
        <button class="remove-btn" onclick="removeCartItem(${index})">Remover</button>
      </div>
    `;
    cartItemsContainer.appendChild(cartItem);
  });

  updateCartSubtotal();
}






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
  const subtotal = cart.reduce((total, item) => {
    if (isNaN(item.totalPrice)) {
      console.error('Erro no preço total do item no subtotal:', item);
      return total;  
    }
    return total + item.totalPrice;
  }, 0);

  cartSubtotalElement.innerText = `R$ ${subtotal.toFixed(2)}`;

  cartHeader.innerText = `Cart (${cart.length} items)`;
}





function addToCart(nome, ingredientesSelecionados, quantity, preco, imagem) {
 
  const existingItem = cart.find(item => item.nome === nome &&
    JSON.stringify(item.ingredientes) === JSON.stringify(ingredientesSelecionados));

  const totalPrice = preco + (ingredientesSelecionados.length * 5); 
  if (existingItem) {

    existingItem.quantidade += quantity;
    existingItem.totalPrice = existingItem.quantidade * totalPrice;
  } else {

    cart.push({
      nome: nome,
      ingredientes: ingredientesSelecionados,
      imagem: imagem,
      totalPrice: totalPrice * quantity,  
      quantidade: quantity,  
    });
  }

  renderCartItems();  
  updateCartSubtotal();  
}



const trendingSlides = document.querySelectorAll('.tranding-slide');

trendingSlides.forEach((slide) => {
  slide.addEventListener('click', () => {
    const foodPrice = parseFloat(slide.querySelector('.food-price').textContent.replace("R$", "").trim());
    const foodName = slide.querySelector('.food-name').textContent;
    const foodImage = slide.querySelector('img').getAttribute('src');

  
    const ingredientesSelecionados = [];

    const quantity = 1; 
    addToCart(foodName, ingredientesSelecionados, quantity, foodPrice, foodImage);
  });
});




function editCartItem(index) {
  const item = cart[index];
  let menuItem;
  let modalParaAbrir;

 
  if (pizzas[item.nome]) {
    menuItem = pizzas[item.nome];
    modalParaAbrir = modalCarrinho;
  } else if (diversos[item.nome]) {
    menuItem = diversos[item.nome];
    modalParaAbrir = modalCarrinhoEntradas; 
  } else if (entradas[item.nome]) {
    menuItem = entradas[item.nome];
    modalParaAbrir = modalCarrinhoEntradas; 
  } else if (sabores[item.nome]) {
    menuItem = sabores[item.nome];
    modalParaAbrir = modalCarrinhoSabores;
  }
  if (!menuItem) {
    console.log("Item não encontrado!");
    return;
  }

  modalParaAbrir.querySelector('.pizza-nome').innerText = item.nome;
  modalParaAbrir.querySelector('.pizza-descricao').innerText = menuItem.descricao || "Descrição não disponível";
  modalParaAbrir.querySelector('.pizza-preco').innerText = `R$ ${item.totalPrice.toFixed(2)}`;
  modalParaAbrir.querySelector('.modal-pizzas').setAttribute("src", menuItem.imagem);

 
  ingredientesList.innerHTML = "";
  (menuItem.ingredientes || []).forEach(ingrediente => {
    const div = document.createElement("div");
    div.className = "ingrediente-item";
    div.innerHTML = `
      <span>${ingrediente}</span>
      <input type="checkbox" ${item.ingredientes.includes(ingrediente) ? "checked" : ""} />
    `;
    ingredientesList.appendChild(div);
  });

  counterSpan.textContent = item.quantidade;
  quantity = item.quantidade;

  openModal(modalParaAbrir);

  decrementBtn.onclick = function () {
    if (quantity > 1) {
      quantity--;
      counterSpan.textContent = quantity;
    }
  };

  incrementBtn.onclick = function () {
    quantity++;
    counterSpan.textContent = quantity;
  };


  document.querySelector(".confirmar-alteracoes").onclick = function () {
    
    const selecionados = Array.from(
      modalParaAbrir.querySelectorAll(".ingredientes-list input:checked")
    ).map(checkbox => checkbox.parentElement.querySelector('span').innerText);


    const novoPreco = menuItem.preco + (selecionados.length * 5); 
    cart[index] = {
      nome: item.nome,
      ingredientes: selecionados,
      imagem: menuItem.imagem,
      totalPrice: novoPreco * quantity, 
      quantidade: quantity,
    };

    closeModal(modalParaAbrir);


    renderCartItems();
  };
}







function removeCartItem(index) {
  cart.splice(index, 1);
  renderCartItems();
}



document.querySelector(".add-to-cart").addEventListener("click", () => {
  const foodName = modalNome.innerText; // Pega o nome do item selecionado (pode ser pizza ou trendingSlides)
  const foodPrice = parseFloat(modalPreco.innerText.replace("R$", "").trim()); // Pega o preço do item, removendo o "R$"

  // Verifica se é um item de trendingSlides ou uma pizza
  let ingredientesSelecionados = [];

  if (modalCarrinho.classList.contains('trending-slide-modal')) {
    // Se for um item de trendingSlides, não há ingredientes, então o array fica vazio
    ingredientesSelecionados = [];
  } else {
    // Caso contrário (se for uma pizza), pega os ingredientes selecionados no modal
    ingredientesSelecionados = Array.from(
      modalCarrinho.querySelectorAll(".ingredientes-list input:checked")
    ).map(checkbox => checkbox.parentElement.querySelector('span').innerText);
  }

  // Chama a função de adicionar ao carrinho com os dados coletados
  addToCart(foodName, ingredientesSelecionados, quantity, foodPrice, modalCarrinho.querySelector('.modal-pizzas').getAttribute('src'));

  // Fecha o modal
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
    console.log('Entrada selecionada:', entradaNome);  // Verifique se o nome da entrada é correto
    const entrada = entradas[entradaNome];

    if (entrada) {
      modalCarrinhoEntradas.querySelector('.pizza-nome').innerText = entradaNome;
      modalCarrinhoEntradas.querySelector('.pizza-descricao').innerText = entrada.descricao;
      modalCarrinhoEntradas.querySelector('.pizza-preco').innerText = `R$ ${entrada.preco.toFixed(2)}`;
      modalCarrinhoEntradas.querySelector('.modal-pizzas').setAttribute('src', entrada.imagem);

      modalCarrinhoEntradas.querySelector('#counter').textContent = 1;
      quantity = 1;

      openModal(modalCarrinhoEntradas);
    } else {
      console.log(`Entrada não encontrada: ${entradaNome}`);
    }
  });
});

function addToCartEntradas(entradaNome, quantity) {
  const entrada = entradas[entradaNome];

  if (!entrada) {
    console.log(`Entrada nao encontrada: ${entradaNome}`);
    return;
  }

  if (isNaN(entrada.preco) || entrada.preco <= 0) {
    console.log(`Preco invalido para a entrada: ${entradaNome}`);
    return;
  }

  const totalPrice = entrada.preco;

  const existingItem = cart.find(item => item.nome === entradaNome);

  if (existingItem) {
    existingItem.quantidade += quantity;
    existingItem.totalPrice = existingItem.quantidade * totalPrice;
  } else {
    cart.push({
      nome: entradaNome,
      ingredientes: [],
      imagem: entrada.imagem,
      totalPrice: totalPrice,
      quantidade: quantity,
    });
  }
  
  renderCartItems();
  updateCartSubtotal();
  closeModal(modalCarrinhoEntradas);
}




window.addEventListener('click', function (event) {
  if (event.target === modalCarrinhoEntradas) {
    closeModal(modalCarrinhoEntradas);
  }
});





document.querySelectorAll('#cardapio-content-diversos').forEach((box) => {
  box.addEventListener('click', function () {
    const diversosNome = box.querySelector('.nome-cardapio').innerText;
    console.log('Diversos selecionado:', diversosNome); 
    const diverso = diversos[diversosNome]; 

    if (diverso) {
 
      modalCarrinhoEntradas.querySelector('.pizza-nome').innerText = diversosNome;
      modalCarrinhoEntradas.querySelector('.pizza-descricao').innerText = diverso.descricao;
      modalCarrinhoEntradas.querySelector('.pizza-preco').innerText = `R$ ${diverso.preco.toFixed(2)}`;
      modalCarrinhoEntradas.querySelector('.modal-pizzas').setAttribute('src', diverso.imagem);

      modalCarrinhoEntradas.querySelector('#counter').textContent = 1;
      quantity = 1;

 
      openModal(modalCarrinhoEntradas);
    } else {
      console.log(`Diverso não encontrado: ${diversosNome}`);
    }
  });
});

function addToCartDiversos(diversosNome, quantity) {
  const diverso = diversos[diversosNome];  

  if (!diverso) {
    console.log(`Diverso não encontrado: ${diversosNome}`);
    return;
  }

  if (isNaN(diverso.preco) || diverso.preco <= 0) {
    console.log(`Preço inválido para o item: ${diversosNome}`);
    return;
  }

  const totalPrice = diverso.preco;  
  const existingItem = cart.find(item => item.nome === diversosNome);

  if (existingItem) {
 
    existingItem.quantidade += quantity;
    existingItem.totalPrice = existingItem.quantidade * totalPrice;
  } else {
   
    cart.push({
      nome: diversosNome,
      ingredientes: [], 
      imagem: diverso.imagem,
      totalPrice: totalPrice * quantity,
      quantidade: quantity,
    });
  }


  renderCartItems();
  updateCartSubtotal();
}






document.querySelector('.checkout-btn').addEventListener('click', () => {

  if (cart.length > 0) {

    window.location.href = 'telapagamento.php';
  } else {
    alert('Seu carrinho está vazio. Adicione itens antes de continuar.');
  }
});

const modalNomeEntradas = modalCarrinhoEntradas.querySelector('.pizza-nome');

document.querySelector(".add-to-cart-entradas").addEventListener("click", () => {

  const itemNome = modalCarrinhoEntradas.querySelector('.pizza-nome').innerText;
  

  if (entradas[itemNome]) {
    addToCartEntradas(itemNome, quantity);
  } else if (diversos[itemNome]) {
    addToCartDiversos(itemNome, quantity);
  } else {
    console.log(`Item não encontrado: ${itemNome}`);
  }


  closeModal(modalCarrinhoEntradas);
});



