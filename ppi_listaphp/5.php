<?php
function randomize($min, $max) {
    return rand($min, $max);
}

$min = $_GET['min'] ?? null;
$max = $_GET['max'] ?? null;
?>

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Gerar número aleatório</title>
</head>
<body>
    <form method="get">
        <label for="min">Mínimo:</label>
        <input type="number" id="min" name="min" value="<?= htmlspecialchars((string) ($min ?? '')) ?>">

        <label for="max">Máximo:</label>
        <input type="number" id="max" name="max" value="<?= htmlspecialchars((string) ($max ?? '')) ?>">

        <button type="submit">Gerar</button>
    </form>

    <?php  
    if ($min !== null && $max !== null) {
        $min = (int) $min;
        $max = (int) $max;

        echo "<p>Número gerado: " . randomize($min, $max) . "</p>";
    }
    ?>
</body>
</html>
