const cepInput = document.querySelector('#cep');
const enderecoInput = document.querySelector('#endereço');
const bairroInput = document.querySelector('#bairro');
const cidadeInput = document.querySelector('#cidade');
const messageContainer = document.querySelector('#message');

function saveToLocalStorage() {
  const data = {
    cep: cepInput.value,
    endereco: enderecoInput.value,
    bairro: bairroInput.value,
    cidade: cidadeInput.value,
  };

  localStorage.setItem('addressData', JSON.stringify(data));
  logMessage('Dados salvos no Local Storage.');
}

function isCepValid(cep) {
  const onlyNumbers = /^[0-9]+$/;
  const cepPattern = /^[0-9]{8}$/;
  const isValid = onlyNumbers.test(cep) && cepPattern.test(cep);
  logMessage(isValid ? 'CEP válido.' : 'CEP inválido.');
  return isValid;
}

function showError(message) {
  messageContainer.textContent = message;
  messageContainer.style.color = 'red';
  setTimeout(() => {
    messageContainer.textContent = '';
  }, 5000);
}

function showSuccess(message) {
  messageContainer.textContent = message;
  messageContainer.style.color = 'green';
  setTimeout(() => {
    messageContainer.textContent = '';
  }, 5000);
}

function logMessage(message) {
  console.log(`[Log] ${message}`);
}

async function fetchAddress(cep) {
  const url = `https://viacep.com.br/ws/${cep}/json/`;
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Falha na conexão com a API.');

    const data = await response.json();
    if (data.erro) throw new Error('CEP não encontrado.');

    logMessage('Endereço encontrado com sucesso.');
    return data;
  } catch (error) {
    logMessage(`Erro ao buscar o endereço: ${error.message}`);
    throw error;
  }
}

async function handleCepBlur() {
  const cep = cepInput.value.trim();

  if (!isCepValid(cep)) {
    showError('Formato de CEP inválido. Use apenas 8 dígitos.');
    return;
  }

  try {
    const addressData = await fetchAddress(cep);
    const { logradouro, bairro, localidade } = addressData;

    enderecoInput.value = logradouro || 'N/A';
    bairroInput.value = bairro || 'N/A';
    cidadeInput.value = localidade || 'N/A';

    showSuccess('Endereço preenchido com sucesso!');
    saveToLocalStorage();
  } catch (error) {
    showError('Erro ao buscar o CEP. Tente novamente.');
  }
}

function loadFromLocalStorage() {
  const storedData = localStorage.getItem('addressData');
  if (storedData) {
    const { cep, endereco, bairro, cidade } = JSON.parse(storedData);
    cepInput.value = cep;
    enderecoInput.value = endereco;
    bairroInput.value = bairro;
    cidadeInput.value = cidade;
    showSuccess('Dados carregados do Local Storage.');
  }
}

function init() {
  loadFromLocalStorage();
  cepInput.addEventListener('focusout', handleCepBlur);
  logMessage('Inicialização concluída.');
}

document.addEventListener('DOMContentLoaded', init);
