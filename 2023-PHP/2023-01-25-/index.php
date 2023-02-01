<?php

$n = 2;
function generateRandomString($n) {
    $characters = "abcdefghijklmnopqrstuvwxyz";
    $randomString = "";
    
    
    for ($i = 0; $i < $n; $i++) {
        $index = rand(0, strlen($characters) - 1);
        $randomString .= $characters[$index];
    }
    
    // fopen("file", "a") a - append, papildys esamus duomenis ir neištrins senų
    $myfile = fopen("skaicius.txt", "a") or die("Unable to open file!");
    
    $txtToWrite = $randomString . "\n";
    fwrite($myfile, $txtToWrite);
    fclose($myfile);

    return $randomString;
}

?>

