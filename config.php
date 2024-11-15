<?php
// Definição das variáveis de conexão
$dbHost = 'localhost';      // Endereço do servidor de banco de dados
$dbUsername = 'root';       // Nome de usuário do banco de dados
$dbPassword = '123456';     // Senha do banco de dados
$dbName = 'teste';          // Nome do banco de dados

// Criação da conexão com o banco de dados
$conexao = new mysqli($dbHost, $dbUsername, $dbPassword, $dbName);

// Verificando se houve erro na conexão
if ($conexao->connect_error) {
    // Se houver erro na conexão, exibe uma mensagem personalizada
    die("Falha na conexão: " . $conexao->connect_error);
} else {
    // Se a conexão for bem-sucedida, pode-se adicionar algum código ou mensagem opcional
    // echo "Conectado ao banco de dados com sucesso!";
}
?>
