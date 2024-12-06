<?php


session_start();

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);






if (isset($_POST['submit'])) {
  include 'config.php';



  $nome = trim($_POST['nome']);
  $email = trim($_POST['email']);
  $comentario = trim($_POST['comentario']);


  $starValue = isset($_POST['starValue']) ? $_POST['starValue'] : NULL ;
  $feedbackType = isset($_POST['feedbackType']) ? $_POST['feedbackType'] : 'Não especificado';


  if (empty($nome) || empty($email) || empty($comentario)) {
    die("Por favor, preencha todos os campos.");
  }

  if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    die("Email inválido.");
  }

  $stmt = $conexao->prepare("INSERT INTO avaliacoes (nome, email, comentario, star_value, feedback_type) VALUES (?, ?, ?, ?, ?)");
  $stmt->bind_param("sssss", $nome, $email, $comentario, $starValue, $feedbackType);


  if ($stmt->execute()) {
    header("Location: feedback.php");
    exit();
  } else {
    die("Erro ao salvar feedback no banco de dados. Tente novamente mais tarde.");
  }

}

?>

<!DOCTYPE html>
<html lang="">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Feedback</title>
  <link rel="stylesheet" href="https://unpkg.com/swiper@8/swiper-bundle.min.css" />
  <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
    integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA=="
    crossorigin="anonymous" referrerpolicy="no-referrer" />
  <link href="https://fonts.googleapis.com/css2?family=Sora:wght@100..800&display=swap" rel="stylesheet" />
  <link rel="stylesheet" type="text/css" href="./css/contatos.css">
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
      <div id="sessaofeedback">
        <h1>Sessão - <br> Feedback</h1>
        <div id="icons">
          <ion-icon name="logo-facebook" id="face" class="icons"></ion-icon>
          <ion-icon name="logo-instagram" id="insta" class="icons"></ion-icon>
          <ion-icon name="logo-tiktok" id="ttk" class="icons"></ion-icon>
        </div>
      </div>

      <div id="enviarfeedback">
        <div id="caixafeedback">
          <p>Eu quero fazer uma avaliação...</p>
          <div id="btn_feedback">
            <button type="button" class="btn_feedback" id="pos" onclick="setFeedback('Positiva')">Positiva</button>
            <button type="button" class="btn_feedback" id="neg" onclick="setFeedback('Negativa')">Negativa</button>
            <button type="button" class="btn_feedback" id="sug" onclick="setFeedback('Sugestão')">Sugestão</button>

            

            <div class="rating">
              <span class="star" data-value="1">&#9733;</span>
              <span class="star" data-value="2">&#9733;</span>
              <span class="star" data-value="3">&#9733;</span>
              <span class="star" data-value="4">&#9733;</span>
              <span class="star" data-value="5">&#9733;</span>
            </div>


          </div>
          <form action="feedback.php" method="post">

            <label for="nome">
              <input type="text" name="nome" id="nome" maxlength="25" placeholder="Seu Nome:"></label><br>

            <label for="email">
              <input type="email" id="email" name="email" maxlength="40" placeholder="Seu Email:"></label>

            <textarea rows="10" cols="50" id="areatexto" name="comentario"
              placeholder="Digite sua Avaliação aqui..."></textarea>


            <input type="hidden" id="ratingValue" name="starValue" value="">
            <input type="hidden" id="feedbackType" name="feedbackType">


            <div id="botaoenviar">
              <button type="submit" name="submit" id="enviar">
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
            </div>
          </form>



        </div>
      </div>
    </section>

  </main>





  <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
  <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
  <script src="https://unpkg.com/swiper@8/swiper-bundle.min.js"></script>
  <script type="text/javascript" src="./js/feedback.js"></script>
  <script type="text/javascript" src="./js/cep.js"></script>
</body>

</html>