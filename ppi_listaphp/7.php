<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Número par ou ímpar e Tabuada</title>
</head>
<body>
    <h1>Tabuada</h1>

    <form method="post">
        <label for="numero">Informe um número:</label>
        <input
            type="number"
            id="numero"
            name="numero"
            value="<?= isset($_POST['numero']) ? htmlspecialchars($_POST['numero']) : '' ?>"
            required
        >
        <button type="submit">Gerar tabuada</button>
    </form>

    <?php
    if (isset($_POST['numero']) && $_POST['numero'] !== '') {
        $numero = (int) $_POST['numero'];

        echo '<h2>Tabuada do ' . $numero . '</h2>'; 
        echo '<ul>';

        for ($i = 1; $i <= 10; $i++) {
            echo '<li>' . $numero . ' × ' . $i . ' = ' . ($numero * $i) . '</li>';
        }

        echo '</ul>';
    }
    ?>
</body>
</html>