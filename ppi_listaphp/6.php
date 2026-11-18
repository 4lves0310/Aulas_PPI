<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Número par ou ímpar</title>
</head>
<body>
    <form method="get">
        <label for="numero">Digite um número:</label>
        <input type="number" id="numero" name="numero" required>
        <button type="submit">Verificar</button>
    </form>

    <?php
    if (isset($_GET['numero']) && $_GET['numero'] !== '') {
        $numero = (int) $_GET['numero'];

        function ePar($n)
        {
            if ($n % 2 == 0) {
                echo "O número $n é par";
            } else {
                echo "O número $n é ímpar";
            }
        }

        ePar($numero);
    }
    ?>
</body>
</html>