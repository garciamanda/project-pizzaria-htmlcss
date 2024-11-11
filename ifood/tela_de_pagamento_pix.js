const nomeInput = document.getElementById('nome');
const ccvInput = document.getElementById('ccv');
const pagarButton = document.getElementById('pagarButton');


nomeInput.addEventListener('input', function() {
    this.value = this.value.toUpperCase();
});

ccvInput.addEventListener('input', function() {
    this.value = this.value.replace(/\D/g, '');
});
function goToProductPage(productId) {
    localStorage.setItem('selectedProductId', productId);
    window.location.href = 'tela_de_agradecimento.html';
}
pagarButton.addEventListener('click', function(event) {
    event.preventDefault(); // Impede o envio do formulário
    goToProductPage();
});
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
    }
  });
  function checkInputValues() {
    const nomeInput = document.getElementById('nome');
    const enderecoInput = document.getElementById('endereco');
    const bairroInput = document.getElementById('bairro');

    if (nomeInput.value.trim() !== '' && enderecoInput.value.trim() !== '' && bairroInput.value.trim() !== '') {
        goToProductPage();
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}
function onClickButton(event) {
    if (event.type === 'click' && event.button === 0) {
      console.log('Botão esquerdo do mouse foi clicado');
    }
  }
  
  // Exemplo de uso:
  const button = document.getElementById('goToProductPage');
  button.addEventListener('click', onClickButton);

  function transferValueToClipboard() {
    const value = "85985377239";
    const input = document.createElement('input');
    input.value = value;
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
    console.log('Copiado para a área de transferência!');
    alert('Copiado para a área de transferência');
  }
  
