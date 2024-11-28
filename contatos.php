<!DOCTYPE html>
<html lang="">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" type="text/css" href="./css/contatos.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css">
  <title>Contatos</title>
  
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
      <a href="index.php" target="
      " style="--i:0">Home</a>
      <a href="#footer" style="--i:4">Feedback</a>
      <button id="btnLogin-popup" class="btnLogin-popup">Login</button>
    </nav>
  </header>

  <main>
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
          <button class="btn_feedback" id="pos">Positiva</button>
          <button class="btn_feedback" id="neg">Negativa</button>
          <button class="btn_feedback" id="sug">Sugestão</button>

          <div class="rating">
            <span class="star" data-value="1">&#9733;</span>
            <span class="star" data-value="2">&#9733;</span>
            <span class="star" data-value="3">&#9733;</span>
            <span class="star" data-value="4">&#9733;</span>
            <span class="star" data-value="5">&#9733;</span>
          </div>
          
        
          <script src="script.js"></script>
        </div>
        <form action="" method="post">

          <label for="nome">
            <input type="text" id="nome" maxlength="25" placeholder="Seu Nome:"></label><br>

          <label for="email">
            <input type="email" id="email" maxlength="40" placeholder="Seu Email:"></label>

          <textarea rows="10" cols="50" id="areatexto" placeholder="Digite sua Avaliação aqui..."></textarea>
        </form>

        <div id="botaoenviar">
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
        </div>

      </div>
    </div>
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

  
  

  <script src="./js/script.js"></script>
  <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
  <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
</body>

</html>