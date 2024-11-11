<?php
    $dbHost = 'localhost';
    $dbUsername = 'root';
    $dbPassword = '123456';
    $dbName = 'teste';

    $conexao = new mysqli($dbHost, $dbUsername, $dbPassword, $dbName);
    
    /* if ($conexao ->connect_errno) {
        echo "Erro";
    }
    else {
        echo "Conectado";
    } */

?>