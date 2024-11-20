<?php
session_start();
include 'config.php';

if (!isset($_SESSION['email'])) {
    header("Location: index.php");
    exit();
}

$email = $_SESSION['email'];


$query = "SELECT nome, email, avatar FROM usuarios WHERE email = ?";
$stmt = $conexao->prepare($query);
$stmt->bind_param("s", $email);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    $user = $result->fetch_assoc();
} else {
    echo "Usuário não encontrado.";
    exit();
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
    <link rel="stylesheet" type="text/css" href="./css/dadoscadastrais.css">
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
            <a href="#footer" style="--i:4">Contatos</a>

            <?php if (isset($_SESSION['email'])): ?>
                <div class="user-info">
                    <?php if (!empty($_SESSION['avatar']) && file_exists($_SESSION['avatar'])): ?>
                        <!-- Exibe o avatar do usuário -->
                        <img height="50" src="<?php echo htmlspecialchars($_SESSION['avatar']); ?>" alt="Avatar"
                            onclick="openMenu()">
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

    <main class="main-content">

        <div class="container">

            <form class="" action="php/edit.php" method="post" enctype="multipart/form-data">

                <h2 class="">Edit Profile</h2><br>
                <!-- error -->
                <?php if (isset($_GET['error'])) { ?>
                    <div class="alert alert-danger" role="alert">
                        <?php echo $_GET['error']; ?>
                    </div>
                <?php } ?>

                <!-- success -->
                <?php if (isset($_GET['success'])) { ?>
                    <div class="alert alert-success" role="alert">
                        <?php echo $_GET['success']; ?>
                    </div>
                <?php } ?>
                <div class="mb-3">
                    <label class="form-label">Usuário</label>
                    <input type="text" class="form-control" name="nome" value="<?= $user['nome'] ?>">
                </div>

                <div class="mb-3">
                    <label class="form-label">Email</label>
                    <input type="email" class="form-control" name="email" value="<?= $user['email'] ?>">
                </div>
                <div class="mb-3">
                    <label class="form-label">Nova Senha</label>
                    <input type="password" class="form-control" name="new_password" placeholder="Enter new password">
                </div>

                <div class="mb-3">
                    <label class="form-label">Confirme Nova Senha</label>
                    <input type="password" class="form-control" name="confirm_password"
                        placeholder="Confirm new password">
                </div>

                <div class="mb-3">
                    <label class="form-label">Foto de Perfil</label>
                    <input type="file" class="form-control" name="avatar">
                    <div class="avatar-div">
                        <img src="<?= $user['avatar'] ?>" class="rounded-circle" style="width: 70px">
                    </div>

                    <input type="hidden" name="old_avatar" value="<?= $user['avatar'] ?>">
                </div>



                <button type="submit" class="btn">Update</button>
                <a href="index.php" class="link-home">Home</a>
            </form>
        </div>
    </main>

    <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
    <script src="https://unpkg.com/swiper@8/swiper-bundle.min.js"></script>
    <script type="text/javascript" src="./js/script.js"></script>
    <script type="text/javascript" src="./js/cep.js"></script>
</body>

</html>