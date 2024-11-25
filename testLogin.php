<?php
session_start();

if (isset($_POST['submit']) && !empty($_POST['email']) && !empty($_POST['senha'])) {
    include 'config.php';

    $email = $_POST['email'];
    $senha = $_POST['senha'];

   
    $stmt = $conexao->prepare("SELECT id, nome, senha, avatar FROM usuarios WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();

   
    if ($result->num_rows === 1) {
        $user = $result->fetch_assoc();

       
        if (password_verify($senha, $user['senha'])) {
            
            $_SESSION['email'] = $email;
            $_SESSION['nome'] = $user['nome'];
            $_SESSION['avatar'] = $user['avatar'];

            
            header('Location: index.php');
            exit();
        } else {
    
            unset($_SESSION['email']);
            unset($_SESSION['nome']);
            unset($_SESSION['avatar']);
            header('Location: login.php?error=Senha ou email inválidos');
            exit();
        }
    } else {
     
        unset($_SESSION['email']);
        unset($_SESSION['nome']);
        unset($_SESSION['avatar']);
        header('Location: login.php?error=Senha ou email inválidos');
        exit();
    }
} else {

    header('Location: login.php?error=Preencha todos os campos');
    exit();
}
?>
