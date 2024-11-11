function PIX(productId) {
    localStorage.setItem('selectedProductId', productId);
    window.location.href = 'tela_de_pagamento_pix.html';
}
function Cartao(productId) {
    localStorage.setItem('selectedProductId', productId);
    window.location.href = 'tela_de_pagamento_cartão.html';
}
function Dinheiro(productId) {
    localStorage.setItem('selectedProductId', productId);
    window.location.href = 'tela_de_pagamento_dinheiro.html';
}
function Retirada(productId) {
    localStorage.setItem('selectedProductId', productId);
    window.location.href = 'retirada.html';
}
