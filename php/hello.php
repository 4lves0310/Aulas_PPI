<h1>
<?php
    echo "Hello Antenor";
?>
</h1>

<?php
$valor=50;
echo "<p> $valor </p>";

$nome="Antenorzinho";
echo $nome;
$array="";
$array=array();
$array=["rbeninca","docinho","romulo"];
echo "<br>";
print_r($array[0] . "<br>");
print_r($array[1] . "<br>");
print_r($array[2] . "<br>");

for($i=0;$i<=count($array); $i++){
    echo "<li> $i </li>" ;
}
echo "</ul>"
?>