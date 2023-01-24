<?php
$string = "Hello World of PHP";
$vowelsSearch = array("a", "e", "i", "o", "u", "A", "E", "I", "O", "U");
$onlyconsonants = str_replace($vowelsSearch, "", $string);

echo $onlyconsonants;
echo '<br/>';
echo '<br/>';

$stringArray = str_split($string);
print_r($stringArray);
echo '<br/>';
$stringArray[0] = 'CC';
echo '<br/>';
print_r($stringArray);

echo '<br/>';




for ($i=0; $i < count($stringArray); $i++) {
    if ($stringArray[$i] === 'e') {
        $stringArray[$i] = 'X';
    } 
}

$newString = implode($stringArray);
echo $newString;



// Sugeneruokite masyvą iš 30 elementų (indeksai nuo 0 iki 29), kurių reikšmės yra atsitiktiniai skaičiai nuo 5 iki 25.

echo '<br/>';
echo '<h2>1 ir 2 užduotis</h2>';
echo '<br/>';

$array = [];
$arrayLetters = ['A', 'B', 'C', 'D'];

for ($i = 0; $i <= 50; $i++ ) {
    $randNum = rand(0, 3);
    $array[$i] = $arrayLetters[$randNum];
    echo 'Random number is: ' . $randNum . ' and letter: ' . $arrayLetters[$randNum] . '<br/>';
    
}

$stringFromArray = implode(", ", $array);
echo $stringFromArray;

// Nupieškite kvadratą iš “*”, kurio kraštines sudaro 100 “*”. Panaudokite css stilių, kad kvadratas ekrane atrodytų kvadratinis. Nupieštam kvadratui nupieškite raudonas įstrižaines.

echo '<br/>';
echo '<h2>4 užduotis</h2>';
echo '<br/>';

$row = '<span style="letter-spacing: 20px; font-size: 2rem;">'; 

for ($i = 0; $i < 20; $i++) {
    for ($j = 0; $j < 20; $j++) {
        $row .= '*';
    }
    $row .= '<br/>';
}

$row .= '</span><br/>';

echo $row;
?>