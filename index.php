<?php
session_start();




if (isset($_POST['submit'])) {
  include_once('config.php');

  $nome = $_POST['nome'];
  $email = $_POST['email'];
  $senha = $_POST['senha'];


  if (isset($_FILES['avatar'])) {
    $arquivo = $_FILES['avatar'];


    if ($arquivo['error']) {
      die("Erro ao enviar o arquivo");
    }

    $pasta = "uploads/";
    $nomeArquivo = $arquivo['name'];
    $novoNome = uniqid();
    $extensao = strtolower(pathinfo($nomeArquivo, PATHINFO_EXTENSION));


    if ($extensao != "jpg" && $extensao != "png" && $extensao != "jpeg") {
      die("Extensão inválida");
    }

    $path = $pasta . $novoNome . "." . $extensao;


    $deu_certo = move_uploaded_file($arquivo["tmp_name"], $path);

    if ($deu_certo) {
      $result = mysqli_query($conexao, "INSERT INTO usuarios (nome, email, senha, avatar) VALUES ('$nome', '$email', '$senha', '$path')");

      if ($result) {
        $_SESSION['email'] = $email;
        $_SESSION['avatar'] = $path;
      } else {
        die("Erro ao salvar no banco de dados: " . mysqli_error($conexao));
      }
    }
  }
}
?>


<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Fody Slider</title>
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
        <div class="user-info" >
          <img height="50" src="<?php echo $_SESSION['avatar']; ?>" alt="Avatar">
          <!-- <?php echo $_SESSION['email']; ?> -->
        </div>
        <style>
          #btnLogin-popup {
            display: none;
          }
        </style>
      <?php else: ?>
        <button id="btnLogin-popup" class="btnLogin-popup"><i class='bx bx-user'></i>Login</button>
      <?php endif; ?>
      <?php if (isset($_SESSION['email'])): ?>
        <a href="sair.php" class="logout-btn">Sair</a>
      <?php endif; ?>

    </nav>
  </header>
  <main>

    <section class="home" id="home">
      <div class="home-content">
        <h1>Pizzaria Comeu Morreu </h1>
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
      <div class="Spacing">
        <div class="food-box">
          <div class="food-text">
            <h2>Carne</h2>
          </div>
          <div class="food-img">
            <img src="images/pizza(1).jpg" alt="Food">
          </div>
        </div>
        <div class="food-box">
          <div class="food-text">
            <h2>Cogumelo</h2>
          </div>
          <div class="food-img">
            <img src="images/pizza(2).jpg" alt="Food">
          </div>
        </div>
      </div>
      <div class="Spacing">
        <div class="food-box">
          <div class="food-text">
            <h2>Mussarela</h2>
          </div>
          <div class="food-img">
            <img src="images/pizza(3).jpg" alt="Food">
          </div>
        </div>
        <div class="food-box">
          <div class="food-text">
            <h2>Abacaxi</h2>
          </div>
          <div class="food-img">
            <img src="images/pizza(4).jpg" alt="">
          </div>
        </div>
      </div>
      <div class="Spacing">
        <div class="food-box">
          <div class="food-text">
            <h2>bacon</h2>
          </div>
          <div class="food-img">
            <img src="images/pizza(5).jpg" alt="">
          </div>
        </div>
        <div class="food-box">
          <div class="food-text">
            <h2>Calabresa</h2>
          </div>
          <div class="food-img">
            <img src="images/pizza(6).jpg" alt="">
          </div>
        </div>
      </div>
      <div class="Spacing">
        <div class="food-box">
          <div class="food-text">
            <h2>Brocolis</h2>
          </div>
          <div class="food-img">
            <img src="images/pizza(7).jpg" alt="">
          </div>
        </div>
        <div class="food-box">
          <div class="food-text">
            <h2>chocolate</h2>
          </div>
          <div class="food-img">
            <img src="images/pizza(8).jpeg" alt="">
          </div>
        </div>
      </div>
      <div class="rightcolumn">
        <div class="carrinho">
          <div class="carrinho-text">
            <p>Carrinho</p>
          </div>

        </div>
    </section>
  </main>

  <footer>
    <div class="footer" id="footer">

      <div class="footer-logo">
        <i class='bx bxl-whatsapp' style='color:#0e0e0e'  ></i>
        <i class='bx bxl-instagram' style='color:#0e0e0e' ></i>
        <i class='bx bxl-facebook' style='color:#0e0e0e' ></i>
      </div>
    </div>
  </footer>

  <!-- Login popup -->

  <!-- Popup de Login -->
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
      </form>
    </div>
  </div>

  <!-- Popup de Registro -->
  <div id="registerPopup" class="popup">
    <div class="popup-content">
      <span class="close" data-close="register">&times;</span>
      <h2>Registro</h2><br>
      <form enctype="multipart/form-data" action="index.php" method="POST">
        <label for="nome">Usuário:</label>
        <input type="text" id="new-username" name="nome" required><br><br>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required><br><br>
        <label for="senha">Senha:</label>
        <input type="password" id="new-password" name="senha" required><br><br>
        <label for="confirm-password">Confirme a Senha:</label>
        <input type="password" id="confirm-password" name="confirm-password" required><br><br>
        <label for="avatar">Avatar</label>
        <input type="file" id="avatar" name="avatar"><br><br>
        <input type="submit" value="Registrar" name="submit">
      </form>
    </div>
  </div>

  <!-- Login popup end -->



  <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
  <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
  <script src="https://unpkg.com/swiper@8/swiper-bundle.min.js"></script>
  <script type="text/javascript" src="./js/script.js"></script>
  <script type="text/javascript" src="./js/cep.js"></script>
</body>

</html>