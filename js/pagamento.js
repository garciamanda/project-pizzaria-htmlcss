document.addEventListener('DOMContentLoaded', function () {

    const btnPix = document.getElementById('btn_pix');
    const btnCartDeb = document.getElementById('btn_cartdeb');
    const btnCartCred = document.getElementById('btn_cartcred');
    const btnDinheiro = document.getElementById('btn_dinheiro');

    const telaPix = document.getElementById('tela_pix');
    const telaCartDeb = document.getElementById('tela_cartdeb');
    const telaCartCred = document.getElementById('tela_cartcred');
    const telaDinheiro = document.getElementById('tela_dinheiro');

    const selMet = document.querySelector('.sel_met');

    function showPaymentScreen(paymentMethod) {
        selMet.style.display = 'none';
        telaPix.style.display = 'none';
        telaCartDeb.style.display = 'none';
        telaCartCred.style.display = 'none';
        telaDinheiro.style.display = 'none';

        if (paymentMethod === 'pix') {
            telaPix.style.display = 'flex';
        } else if (paymentMethod === 'cartdeb') {
            telaCartDeb.style.display = 'flex';
        } else if (paymentMethod === 'cartcred') {
            telaCartCred.style.display = 'flex';
        } else if (paymentMethod === 'dinheiro') {
            telaDinheiro.style.display = 'flex';
        }
    }

    function validateForm(formId) {
        const form = document.getElementById(formId);
        const inputs = form.querySelectorAll('input');
        let isValid = true;

        inputs.forEach(input => {
            if (!input.value.trim()) {
                input.style.border = '2px solid red';
                isValid = false;
            } else {
                input.style.border = '';
            }
        });

        return isValid;
    }

    btnPix.addEventListener('click', function () {
        showPaymentScreen('pix');
    });

    btnCartDeb.addEventListener('click', function () {
        showPaymentScreen('cartdeb');
    });

    btnCartCred.addEventListener('click', function () {
        showPaymentScreen('cartcred');
    });

    btnDinheiro.addEventListener('click', function () {
        showPaymentScreen('dinheiro');
    });

    const formDebt = document.getElementById('formdebt');
    const btnDebtSubmit = document.getElementById('enviardebt');
    btnDebtSubmit.addEventListener('click', function (event) {
        event.preventDefault();
        if (!validateForm('formdebt')) {
            alert('Por favor, preencha todos os campos obrigatórios do formulário de débito.');
        } else {
            
            popup.style.display = 'flex';
        }
    });

    const formCred = document.getElementById('formcred');
    const btnCredSubmit = document.getElementById('enviarcred');
    btnCredSubmit.addEventListener('click', function (event) {
        event.preventDefault();
        if (!validateForm('formcred')) {
            alert('Por favor, preencha todos os campos obrigatórios do formulário de crédito.');
        } else {
            
            popup.style.display = 'flex';
        }
    });

    const btnQrCode = document.getElementById('qrcode');
    const qrCodeImg = document.querySelector('.qrcode-img');
    const btnConfirmar = document.getElementById('confirmar');

    qrCodeImg.style.display = 'none';
    btnConfirmar.style.display = 'none';

    btnQrCode.addEventListener('click', function (event) {
        event.preventDefault();
        qrCodeImg.style.display = 'block';
        btnConfirmar.style.display = 'block';
    });

    const popup = document.getElementById('popup');
    const popupFinal = document.getElementById('popup-final');
    const btnPronto = document.querySelector('.btnend');
    const btnFecharFinal = document.querySelector('.btnend-final');

    btnConfirmar.addEventListener('click', function () {
        popup.style.display = 'flex';

        popup.addEventListener('click', function (event) {
            if (event.target === popup) {
                popup.style.display = 'none';
            }
        });
    });

    btnPronto.addEventListener('click', function () {
        const formEnd = document.getElementById('formend');
        const inputs = formEnd.querySelectorAll('input');
        let isValid = true;

        inputs.forEach(input => {
            if (!input.value.trim()) {
                input.style.border = '2px solid red';
                isValid = false;
            } else {
                input.style.border = '';
            }
        });

        if (isValid) {
            popup.style.display = 'none';
            popupFinal.style.display = 'flex';

            popupFinal.addEventListener('click', function (event) {
                if (event.target === popupFinal) {
                    popupFinal.style.display = 'none';
                }
            });

            btnFecharFinal.addEventListener('click', function () {
                popupFinal.style.display = 'none';
            });
        } else {
            alert('Por favor, preencha todos os campos antes de continuar.');
        }
    });

    const btnDinheiroFinalizar = document.getElementById('dinheiro');
    btnDinheiroFinalizar.addEventListener('click', function () {
        popup.style.display = 'flex';

        popup.addEventListener('click', function (event) {
            if (event.target === popup) {
                popup.style.display = 'none';
            }
        });
    });

});
