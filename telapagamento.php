<?php
session_start();
?>

<!DOCTYPE html>
<html lang="">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Formas de Pagamentos</title>
  <link rel="stylesheet" href="https://unpkg.com/swiper@8/swiper-bundle.min.css" />
  <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
    integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA=="
    crossorigin="anonymous" referrerpolicy="no-referrer" />
  <link href="https://fonts.googleapis.com/css2?family=Sora:wght@100..800&display=swap" rel="stylesheet" />
  <link rel="stylesheet" type="text/css" href="./css/telapagamento.css">
  <link rel="icon" type="image/png" href="images/icon.png">
  <link rel="icon" href="images/icon.ico">

</head>

<body>
  <header class="header">
    <div class="logo" id="logo">
      <img src="images/logo.png" alt="">
    </div>

    <input type="checkbox" id="check">
    <label for="check" class="menu">
      <i class='bx bx-menu' id="menu-icon"></i>
      <i class='bx bx-x' id="close-icon"></i>
    </label>

    <nav class="navbar">
      <a href="index.php" style="--i:0">Home</a>
      <a href="feedback.php" style="--i:4">Feedback</a>

      <?php if (isset($_SESSION['email'])): ?>
        <div class="user-info">
          <?php if (!empty($_SESSION['avatar']) && file_exists($_SESSION['avatar'])): ?>
            <!-- Exibe o avatar do usuário -->
            <img height="50" src="<?php echo htmlspecialchars($_SESSION['avatar']); ?>" alt="Avatar" onclick="openMenu()">
          <?php else: ?>
            <!-- Exibe um ícone padrão caso não tenha avatar -->
            <i class="bx bxs-user-circle" style="font-size: 50px;" onclick="openMenu()"></i>
          <?php endif; ?>
        </div>
        <style>
          #btnLogin-popup {
            display: none;
          }
        </style>
      <?php else: ?>
        <button id="btnLogin-popup" class="btnLogin-popup" onclick="redirectToLogin()"><i
            class='bx bx-user'></i>Login</button>
      <?php endif; ?>




      <div class="sub-menu-wrap" id="subMenu">
        <div class="sub-menu">
          <div class="user-info">
            <?php if (!empty($_SESSION['avatar']) && file_exists($_SESSION['avatar'])): ?>
              <!-- Exibe o avatar do usuário -->
              <img height="50" src="<?php echo htmlspecialchars($_SESSION['avatar']); ?>" alt="Avatar">
            <?php else: ?>
              <!-- Exibe um ícone padrão se não houver avatar -->
              <i class="bx bx-user-circle" style="font-size: 50px; color: #333;"></i>
            <?php endif; ?>
            <h3>
              <?php if (isset($_SESSION['nome'])): ?>
                Olá, <?php echo htmlspecialchars($_SESSION['nome']); ?>!
              <?php else: ?>
                Olá, Usuário
              <?php endif; ?>
            </h3>
          </div>
          <hr>

          <a href="dadoscadastrais.php" class="sub-menu-link">
            <i class='bx bx-cog' style='color:#020202'></i>
            <p>Meus dados</p>
            <span>></span>
          </a>
          <a href="sair.php" class="sub-menu-link">
            <i class='bx bx-log-out' style='color:#020202'></i>
            <p>Sair</p>
            <span>></span>
          </a>
        </div>
      </div>


    </nav>



  </header>

  <main>
    <section class="sessao">
      <div id="btn_opcoes">
        <h1>Sessão Pagamentos</h1>

        <button class="payment-btn" id="btn_pix">
          <img src="./images/icons8-foto-96.png" alt="" class="payment-icon">
          Pix
        </button>

        <button class="payment-btn" id="btn_cartdeb">
          <img src="./images/cartao.png" alt="" class="payment-icon">
          Cartão de Débito
        </button>

        <button class="payment-btn" id="btn_cartcred">
          <img src="./images/cartao.png" alt="" class="payment-icon">
          Cartão de Crédito
        </button>

        <button class="payment-btn" id="btn_dinheiro">
          <img src="./images/dinheiro.png" alt="" class="payment-icon">
          Dinheiro
        </button>



      </div>

      <div id="tela_pay">
        <div class="sel_met">
          <h2 id="titsel">Selecione seu método de pagamento</h2>
          <img src="./images/payments.png" alt="" id="metodospay">
        </div>

        <div id="tela_pix">
          <button id="qrcode">
            <img src="./images/icons8-foto-96.png" id="img-qr">
            <p id="text">Gerar Qr-Code</p>

          </button>
          <img class="qrcode-img" src="./images/qrcode.png" alt="">
          <button class="boton-elegante" id="confirmar">Confirmar Pedido</button>
        </div>

        <div id="tela_cartdeb">
          <h2>Débito</h2>

          <form action="" id="formdebt" method="post">

            <label for="numero_cartao">
              <input type="number" class="debt" id="numero_cartao" maxlength="25"
                placeholder=" Número do cartão"></label><br>

            <div id="dataecvv">

              <label for="data_val">
                <input type="number" class="debt2" id="data_val" maxlength="40" placeholder=" Data de Validade"></label>

              <label for="cvv">
                <input type="number" class="debt2" id="cvv" maxlength="5" placeholder=" CVV"></label>

            </div>

            <label for="nome_titular">
              <input type="text" class="debt" id="numero_cartao" maxlength="25"
                placeholder=" Nome do Titular"></label><br>

            <label for="cpf">
              <input type="number" class="debt" id="cpf" maxlength="25"
                placeholder=" CPF / CNPJ do titular"></label><br>

            <label for="apelido">
              <input type="text" class="debt" id="apelido" maxlength="25"
                placeholder=" Apelido do cartão (opcional)"></label><br>

            <button class="boton-elegante" id="enviardebt">Confirmar Pedido</button>

          </form>
        </div>



        <div id="tela_cartcred">
          <h2>Crédito</h2>

          <form action="" id="formcred" method="post">

            <label for="numero_cartao">
              <input type="number" class="cred" id="numero_cartao" maxlength="25"
                placeholder=" Número do cartão"></label><br>

            <div id="dataecvv">

              <label for="data_val">
                <input type="number" class="cred2" id="data_val" maxlength="40" placeholder=" Data de Validade"></label>

              <label for="cvv">
                <input type="number" class="cred2" id="cvv" maxlength="5" placeholder=" CVV"></label>

            </div>

            <label for="nome_titular">
              <input type="text" class="cred" id="numero_cartao" maxlength="25"
                placeholder=" Nome do Titular"></label><br>

            <label for="cpf">
              <input type="number" class="cred" id="cpf" maxlength="25"
                placeholder=" CPF / CNPJ do titular"></label><br>

            <label for="apelido">
              <input type="text" class="cred" id="apelido" maxlength="25"
                placeholder=" Apelido do cartão (opcional)"></label><br>

            <button class="boton-elegante" id="enviarcred">Confirmar Pedido</button>

          </form>
        </div>


        <div id="tela_dinheiro">
          <button id="dinheiro">
            <img src="images/dinheiro.png" id="img-dinheiro">
            <p id="text">Finalizar Pedido</p>
          </button>
        </div>

        <div id="popup" class="popup-overlay">


          <!-- Popup endereço -->

          <div id="popup2" class="popup-contents">
            <div class="popup-conteudo">
              <h2>Onde você quer receber o seu pedido?</h2><br><br>

              <form action="" id="formend" method="post">
                <img src="./images/localizacao.png" id="localizacao" alt=""><br><br>

                <label for="rua">
                  <input type="text" class="endereço" id="rua" maxlength="100" placeholder=" Rua:"></label><br>

                <div id="bairroenum">

                  <label for="bairro">
                    <input type="text" class="endereço2" id="bairro" maxlength="50" placeholder=" Bairro:"></label><br>

                  <label for="numero">
                    <input type="number" class="endereço2" id="numero" maxlength="6"
                      placeholder=" Nº da casa:"></label><br>

                </div>
              </form>

              <button class="btnend">Pronto!</button>
            </div>
          </div>

        </div>

        <div id="popup-final" class="popup-overlay-final">
          <div id="popup3" class="popup-contents-final">
            <div class="popup-conteudo-final">
              <h2>Compra realizada com sucesso!</h2>
              <p>Obrigado por comprar conosco! Seu pedido está a caminho.</p>
              <br><br>
              <button class="btnend-final">Fechar</button>
            </div>
          </div>
        </div>



        <!-- <div class="tela_cartcred">
          <h2>Selecione seu método de pagamento</h2>
          <img src="/images/payments.png" alt="" id="metodospay">
      </div>

      <div class="tela_dinheiro">
          <h2>Selecione seu método de pagamento</h2>
          <img src="/images/payments.png" alt="" id="metodospay">
      </div> -->
      </div>


      <script src="script.js"></script>
      </div>
      <!-- <form action="" method="post">

          <label for="nome">
            <input type="text" id="nome" maxlength="25" placeholder="Seu Nome:"></label><br>

          <label for="email">
            <input type="email" id="email" maxlength="40" placeholder="Seu Email:"></label>

          <textarea rows="10" cols="50" id="areatexto" placeholder="Digite sua Avaliação aqui..."></textarea>
        </form> -->

      <!-- <div id="botaoenviar">
          <button id="enviar">
            <div class="svg-wrapper-1">
              <div class="svg-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path fill="currentColor"
                    d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z">
                  </path>
                </svg>
              </div>
            </div>
            <span>Enviar Feedback</span>
          </button>
        </div> -->

      </div>
      </div>
    </section>

  </main>

  <!-- <footer>
    <div id="icons">
      <ion-icon name="logo-facebook" id="face" class="icons"></ion-icon>
      <ion-icon name="logo-instagram" id="insta" class="icons"></ion-icon>
      <ion-icon name="logo-tiktok" id="ttk" class="icons"></ion-icon>
    </div>
    
    <div id="creditos">
      <p>Aqui a Amanda que manda...</p>
      <p>Amanda? dnv vc... me diz oq botar aq</p>
      <p>Amandaaaaaaaaaaa</p>
    </div>
  </footer> -->



  <script type="text/javascript" src="./js/pagamento.js"></script>
  <script src="js/script.js"></script>
  <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
  <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
</body>

</html>