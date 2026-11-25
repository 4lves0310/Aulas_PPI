<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Soma</title>
</head>
<body>
    <h1>Soma</h1>

    <form action="" method="GET">
        <label for="numeros">Informe números:</label>
        <input id="numeros" type='text' name='num'>
        <input type="submit" value="Somar">
    </form>

    <?php if (isset($_GET['num'])) {
        $arrayNumeros = explode(' ', $_GET['num']);
        $soma = 0;
        for ($i = 0; $i < count($arrayNumeros); $i++) {
            $soma += floatval($arrayNumeros[$i]);
        }
        echo "<p>A soma dos números é: " . $soma . "</p>";
    }
    ?>  
    </body>
</html>