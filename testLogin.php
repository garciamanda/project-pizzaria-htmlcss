<?php
session_start();

if (isset($_POST['submit']) && !empty($_POST['email']) && !empty($_POST['senha'])) {

    include 'config.php';

    $email = $_POST['email'];
    $senha = $_POST['senha'];

    $sql = "SELECT * FROM usuarios WHERE email = '$email' AND senha = '$senha'";
    $result = $conexao->query($sql);
    
    if (mysqli_num_rows($result) < 1) {
        unset($_SESSION['email']);
        unset($_SESSION['senha']);
        unset($_SESSION['avatar']);
        unset($_SESSION['nome']);
        header('Location: index.php');
    } else {
        $user = mysqli_fetch_assoc($result);
        $_SESSION['email'] = $email;
        $_SESSION['senha'] = $senha;
        $_SESSION['avatar'] = $user['avatar'];
        $_SESSION['nome'] = $user['nome'];
        header('Location: index.php');
    }
} else {
    header('Location: index.php');
}
?>
