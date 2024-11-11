<?php
    session_start();
    if((!isset($_SESSION['email']) == true) and (!isset($_SESSION['senha']) == true))
    {
        unset($_SESSION['email'] );
        unset($_SESSION['senha'] );
        header('Location: index.php');
    }
    $logado = $_SESSION['email'];
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <title>Document</title>

    <style>
        body{
            background-color: black;
            text-align: center;
            color: white;
        }
    </style>

</head>


<body>

    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container-fluid d-flex justify-content-between">
            <a class="navbar-brand" href="#">SISTEMA DO GN</a>
            <a href="sair.php" class="btn btn-danger">Sair</a>
        </div>
    </nav>

    <?php
        echo "<h1>Bem vindo $logado</h1>";
    ?>

</body>
</html>