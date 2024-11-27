<?php
session_start();

if (isset($_POST['submit'])) {
  include 'config.php';

  $nome = $_POST['nome'];
  $email = $_POST['email'];
  $senha = $_POST['senha'];
  $confirmSenha = $_POST['confirm-password'];


  if (empty($nome) || empty($email) || empty($senha) || empty($confirmSenha)) {
    die("Preencha todos os campos.");
  }


  if ($senha !== $confirmSenha) {
    die("As senhas não coincidem.");
  }

  $avatar = null;


  if (isset($_FILES['avatar']) && $_FILES['avatar']['error'] === UPLOAD_ERR_OK) {
    $arquivo = $_FILES['avatar'];
    $pastaAbsoluta = __DIR__ . "/uploads/";
    $pastaRelativa = "uploads/";
    $nomeArquivo = $arquivo['name'];
    $novoNome = uniqid();
    $extensao = strtolower(pathinfo($nomeArquivo, PATHINFO_EXTENSION));

    if ($extensao !== "jpg" && $extensao !== "png" && $extensao !== "jpeg") {
      die("Extensão inválida.");
    }

    $pathAbsoluto = $pastaAbsoluta . $novoNome . "." . $extensao;
    $pathRelativo = $pastaRelativa . $novoNome . "." . $extensao;

    if (is_uploaded_file($arquivo["tmp_name"])) {
      if (move_uploaded_file($arquivo["tmp_name"], $pathAbsoluto)) {
        
      } else {
        die("Erro ao salvar arquivo: " . error_get_last()['message']);
      }
    } else {
      die("Arquivo temporário não encontrado.");
    }

    $avatar = $pathRelativo;
  }


  $senha_hash = password_hash($senha, PASSWORD_BCRYPT);


  $stmt = $conexao->prepare("INSERT INTO usuarios (nome, senha, email, avatar) VALUES (?, ?, ?, ?)");
  $stmt->bind_param("ssss", $nome, $senha_hash, $email, $avatar);

  if ($stmt->execute()) {
    $_SESSION['email'] = $email;
    $_SESSION['nome'] = $nome;
    $_SESSION['avatar'] = $avatar; // Salva o avatar na sessão
  } else {
    die("Erro ao salvar no banco de dados: " . $stmt->error);
  }
}
?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Pizzaria Al Volo</title>
  <link rel="stylesheet" href="https://unpkg.com/swiper@8/swiper-bundle.min.css" />
  <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
    integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA=="
    crossorigin="anonymous" referrerpolicy="no-referrer" />
  <link href="https://fonts.googleapis.com/css2?family=Sora:wght@100..800&display=swap" rel="stylesheet" />
  <link rel="stylesheet" type="text/css" href="./css/style.css">
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
      <a href="#home" style="--i:0">Home</a>
      <a href="#footer" style="--i:4">Contatos</a>

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
        <button id="btnLogin-popup" class="btnLogin-popup"><i class='bx bx-user'></i>Login</button>
      <?php endif; ?>

      <!-- <?php if (isset($_SESSION['email'])): ?>
        <a href="sair.php" class="logout-btn">Sair</a>
      <?php endif; ?> -->


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
          <a href="#" class="sub-menu-link">
            <i class='bx bx-lock-alt' style='color:#020202'></i>
            <p>Segurança</p>
            <span>></span>
          </a>
          <a href="#" class="sub-menu-link">
            <i class='bx bxs-help-circle' style='color:#020202'></i>
            <p>Ajuda</p>
            <span>></span>
          </a>
          <a href="#" class="sub-menu-link">
            <i class='bx bx-notepad' style='color:#020202'></i>
            <p>Pedidos</p>
            <span>></span>
          </a>
          <a href="#" class="sub-menu-link">
            <i class='bx bx-credit-card' style='color:#020202'></i>
            <p>Pagamentos</p>
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

    <section class="home" id="home">
      <div class="home-content">
        <h1>Pizzaria Al Volo </h1>
        <h2>Venha conhecer nossa pizzaria</h2>
        <div class="btn">
          <button class="btnpedido" id="btnpedido">Peça Agora</button>
        </div>
      </div>
    </section>

    <section id="tranding">
      <div class="container">
        <h1 class="text-center section-heading">Cardápio Principal</h1>
      </div>
      <div class="container">
        <div class="swiper tranding-slider">
          <div class="swiper-wrapper">
            <!-- Slide-start -->
            <div class="swiper-slide tranding-slide">
              <div class="tranding-slide-img">
                <img src="images/tranding-food-1.png" alt="Tranding">
              </div>
              <div class="tranding-slide-content">
                <h1 class="food-price">R$25</h1>
                <div class="tranding-slide-content-bottom">
                  <h2 class="food-name">
                    Special Pizza
                  </h2>
                  <h3 class="food-rating">
                    <span>5</span>
                    <div class="rating">
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                    </div>
                  </h3>
                </div>
              </div>
            </div>
            <!-- Slide-end -->
            <!-- Slide-start -->
            <div class="swiper-slide tranding-slide">
              <div class="tranding-slide-img">
                <img src="images/tranding-food-2.png" alt="Tranding">
              </div>
              <div class="tranding-slide-content">
                <h1 class="food-price">R$36</h1>
                <div class="tranding-slide-content-bottom">
                  <h2 class="food-name">
                    Meat Ball
                  </h2>
                  <h3 class="food-rating">
                    <span>5</span>
                    <div class="rating">
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                    </div>
                  </h3>
                </div>
              </div>
            </div>
            <!-- Slide-end -->
            <!-- Slide-start -->
            <div class="swiper-slide tranding-slide">
              <div class="tranding-slide-img">
                <img src="images/tranding-food-3.png" alt="Tranding">
              </div>
              <div class="tranding-slide-content">
                <h1 class="food-price">R$40</h1>
                <div class="tranding-slide-content-bottom">
                  <h2 class="food-name">
                    Burger
                  </h2>
                  <h3 class="food-rating">
                    <span>5</span>
                    <div class="rating">
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                    </div>
                  </h3>
                </div>
              </div>
            </div>
            <!-- Slide-end -->
            <!-- Slide-start -->
            <div class="swiper-slide tranding-slide">
              <div class="tranding-slide-img">
                <img src="images/tranding-food-4.png" alt="Tranding">
              </div>
              <div class="tranding-slide-content">
                <h1 class="food-price">R$15</h1>
                <div class="tranding-slide-content-bottom">
                  <h2 class="food-name">
                    Frish Curry
                  </h2>
                  <h3 class="food-rating">
                    <span>5</span>
                    <div class="rating">
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                    </div>
                  </h3>
                </div>
              </div>
            </div>
            <!-- Slide-end -->
            <!-- Slide-start -->
            <div class="swiper-slide tranding-slide">
              <div class="tranding-slide-img">
                <img src="images/tranding-food-5.png" alt="Tranding">
              </div>
              <div class="tranding-slide-content">
                <h1 class="food-price">$15</h1>
                <div class="tranding-slide-content-bottom">
                  <h2 class="food-name">
                    Pane Cake
                  </h2>
                  <h3 class="food-rating">
                    <span>5</span>
                    <div class="rating">
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                    </div>
                  </h3>
                </div>
              </div>
            </div>
            <!-- Slide-end -->
            <!-- Slide-start -->
            <div class="swiper-slide tranding-slide">
              <div class="tranding-slide-img">
                <img src="images/tranding-food-6.png" alt="Tranding">
              </div>
              <div class="tranding-slide-content">
                <h1 class="food-price">R$42</h1>
                <div class="tranding-slide-content-bottom">
                  <h2 class="food-name">
                    Vanilla cake
                  </h2>
                  <h3 class="food-rating">
                    <span>5</span>
                    <div class="rating">
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                    </div>
                  </h3>
                </div>
              </div>
            </div>
            <!-- Slide-end -->
            <!-- Slide-start -->
            <div class="swiper-slide tranding-slide">
              <div class="tranding-slide-img">
                <img src="images/tranding-food-7.png" alt="Tranding">

              </div>
              <div class="tranding-slide-content">
                <h1 class="food-price">R$38</h1>
                <div class="tranding-slide-content-bottom">
                  <h2 class="food-name">
                    Straw Cake
                  </h2>
                  <h3 class="food-rating">
                    <span>5</span>
                    <div class="rating">
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                    </div>
                  </h3>
                </div>
              </div>
            </div>

            <!-- Slide-end -->
          </div>

          <div class="tranding-slider-control">
            <div class="swiper-button-prev slider-arrow">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div class="swiper-button-next slider-arrow">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>
      </div>
    </section>

  </main>




  <main class="carda-comum">
    <section class="reme" id="reme">
      <h1>Cardápio</h1>
      <div class="reme-content">
        <hr>
        <p>Pizzas</p>
        <hr>
      </div>

      <div class="cardapio">
        <!-- Começo do produto -->
        <div class="cardapio-content">
          <img
            src="./images/pizza(8).jpeg"
            alt="Pizza de Chocolate"
            class="img-cardapio" />

          <div class="detalhes">
            <p class="nome-cardapio">Pizza de Chocolate</p>
            <p class="descricao-cardapio">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni vel reiciendis nobis alias praesentium dolorum voluptatibus.</p>

            <div class="preco">
              <p class="preco-cardapio">R$ 30.25</p>
            </div>
          </div>
        </div>
        <!-- Fim do produto -->

        <!-- Começo do produto -->
        <div class="cardapio-content">
          <img
            src="./images/pizza(6).jpg"
            alt="4 Queijos"
            class="img-cardapio" />

          <div class="detalhes">
            <p class="nome-cardapio">Pizza de Calabresa</p>
            <p class="descricao-cardapio">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni vel reiciendis nobis alias praesentium dolorum voluptatibus.</p>

            <div class="preco">
              <p class="preco-cardapio">R$ 30.25</p>
            </div>
          </div>
        </div>
        <!-- Fim do produto -->

        <!-- Começo do produto -->
        <div class="cardapio-content">
          <img
            src="./images/pizza(1).jpg"
            alt="Pizza de Carne"
            class="img-cardapio" />

          <div class="detalhes">
            <p class="nome-cardapio">Pizza de Carne</p>
            <p class="descricao-cardapio">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni vel reiciendis nobis alias praesentium dolorum voluptatibus.</p>

            <div class="preco">
              <p class="preco-cardapio">R$ 30.25</p>

            </div>
          </div>
        </div>
        <!-- Fim do produto -->

        <!-- Começo do produto -->
        <div class="cardapio-content">
          <img
            src="./images/pizza(5).jpg"
            alt="Pizza de Sla"
            class="img-cardapio" />

          <div class="detalhes">
            <p class="nome-cardapio">Pizza de Sla</p>
            <p class="descricao-cardapio">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni vel reiciendis nobis alias praesentium dolorum voluptatibus.</p>

            <div class="preco">
              <p class="preco-cardapio">R$ 30.25</p>

            </div>
          </div>
        </div>
        <!-- Fim do produto -->
      </div>





      <div class="cart">
        <div class="cart-container">
          <div class="cart-header">
            <span>Cart (1 item)</span>
            <span class="close-btn">&times;</span>
          </div>

          <div id="cart-items">
            <div class="cart-item">Vazio</div>
          </div>

          <div class="cart-summary">
            <button class="CartBtn">
              <span class="IconContainer">
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512" fill="rgb(17, 17, 17)"
                  class="cart">
                  <path
                    d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z">
                  </path>
                </svg>
              </span>
              <p class="text">Add to Cart</p>
            </button>
            <p class="secure-checkout">🔒 Secure Checkout</p>
          </div>
        </div>
      </div>

      <!-- pop up carrinho-->
      <div class="modal-carrinho">
        <div class="modal">
          <h1>oi</h1>
          <div class="bts-carinho">
            <button class="FecharModal" onclick="closeModal()">fechar</button>
          </div>

        </div>
      </div>
      <!--fim pop up-->

    </section>
  </main>

  <footer>
    <div class="footer" id="footer">

      <div class="footer-logo">
        <i class='bx bxl-whatsapp' style='color:#0e0e0e'></i>
        <i class='bx bxl-instagram' style='color:#0e0e0e'></i>
        <i class='bx bxl-facebook' style='color:#0e0e0e'></i>
      </div>
    </div>
  </footer>

  <!-- Login popup -->

  <!-- Popup Login -->
  <div id="loginPopup" class="popup">
    <div class="popup-content">
      <span class="close" data-close="login">&times;</span>
      <div class="logo" id="logo-login">
        <img src="images/logo.png" alt="">
      </div>
      <h2 id="loginup">Login</h2>

      <form id="form_login" action="testLogin.php" method="POST">
        <label for="email"></label>
        <input type="text" id="username" name="email" placeholder="   Endereço de e-mail" required><br><br>

        <label for="senha"></label>
        <input type="password" id="password" name="senha" placeholder="   Senha" required><br><br>

        <div id="btn_login1">
          <input type="submit" value="Login" name="submit" id="btn_login2"></input>
          <p id="easter-egg">.</p>
          <p>Não tem uma conta? <button type="button" id="showRegisterForm">Registrar-se</button></p>
        </div>

        <div id="loginc_redes">
          <hr>
          <p style="margin: 15px;">OU</p>
          <hr>
        </div>
        <div class="login-icon">
          <button class="login-btn google">
            <img src="images/google-icon.png" alt="Google Icon">
            Login com Google</button>

          <button class="login-btn facebook">
            <img src="images/face-icon.png" alt="Facebook Icon">
            Login com Facebook</button>
        </div>
      </form>
    </div>
  </div>

  <!-- Popup Register -->

  <div id="registerPopup" class="popup">
    <div class="popup-content">
      <span class="close" data-close="register">&times;</span>
      <div class="logo" id="logo-registro">
        <img src="images/logo.png" alt="">
      </div>
      <h2 id="registro">Registro</h2>
      <form id="registroform" action="index.php" method="POST">
        <label for="nome"></label>
        <input type="text" id="usuario-reg" name="nome" placeholder="Usuario" required><br><br>

        <label for="email"></label>
        <input type="email" id="email-reg" name="email" placeholder="Email" required><br><br>

        <label for="senha"></label>
        <input type="password" id="senha-reg" name="senha" placeholder="Senha"><br><br>

        <label for="conf-reg"></label>
        <input type="password" id="conf-reg" name="confirm-password" placeholder="Confirme sua senha" required><br><br>

        <div id="btn_login1">
          <button type="submit" id="btn_login2" name="submit">Registrar-se</button>
          <p id="easter-egg">.</p>
          <p>Já tem uma conta? <button type="button" id="showLoginForm">Login</button></p>
        </div>
      </form>
    </div>
  </div>

  <!-- Login popup end -->


  <script type="text/javascript" src="./js/popup.js"></script>
  <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
  <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
  <script src="https://unpkg.com/swiper@8/swiper-bundle.min.js"></script>
  <script type="text/javascript" src="./js/script.js"></script>
  <script type="text/javascript" src="./js/cep.js"></script>
</body>




</html>