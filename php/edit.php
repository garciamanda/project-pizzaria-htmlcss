<?php
session_start();
include '../config.php';

if (!isset($_SESSION['email'])) {
    header("Location: ../index.php");
    exit();
}

$email = $_SESSION['email'];
$nome = $_POST['nome'];
$new_email = $_POST['email'];
$old_avatar = $_POST['old_avatar'];
$avatar = $old_avatar;


if (isset($_FILES['avatar']) && $_FILES['avatar']['error'] == 0) {
    $arquivo = $_FILES['avatar'];
    $pasta = "../uploads/";
    $nomeArquivo = $arquivo['name'];
    $novoNome = uniqid();
    $extensao = strtolower(pathinfo($nomeArquivo, PATHINFO_EXTENSION));

    if (in_array($extensao, ['jpg', 'png', 'jpeg'])) {
        $path = $pasta . $novoNome . "." . $extensao;
        if (move_uploaded_file($arquivo["tmp_name"], $path)) {
            $avatar = $path;

            
            if ($old_avatar != "../uploads/default.png") {
                unlink($old_avatar);
            }
        }
    }
}


$new_password = $_POST['new_password'];
$confirm_password = $_POST['confirm_password'];

if (!empty($new_password)) {
    if ($new_password === $confirm_password) {
        
        $hashed_password = password_hash($new_password, PASSWORD_DEFAULT);
    } else {
        header("Location: ../dadoscadastrais.php?error=As senhas não coincidem.");
        exit();
    }
} else {
    $hashed_password = null; 
}


if ($hashed_password) {
    $query = "UPDATE usuarios SET nome = ?, email = ?, avatar = ?, senha = ? WHERE email = ?";
    $stmt = $conexao->prepare($query);
    $stmt->bind_param("sssss", $nome, $new_email, $avatar, $hashed_password, $email);
} else {
    $query = "UPDATE usuarios SET nome = ?, email = ?, avatar = ? WHERE email = ?";
    $stmt = $conexao->prepare($query);
    $stmt->bind_param("ssss", $nome, $new_email, $avatar, $email);
}

if ($stmt->execute()) {
    $_SESSION['email'] = $new_email;
    $_SESSION['nome'] = $nome;
    $_SESSION['avatar'] = $avatar;
    header("Location: ../dadoscadastrais.php?success=Dados atualizados com sucesso!");
} else {
    header("Location: ../dadoscadastrais.php?error=Erro ao atualizar os dados.");
}
?>
