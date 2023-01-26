<?php 
    require "index.php";

    $string1 = generateRandomString($n);
    $string2 = generateRandomString($n);

    echo $string1 . " - " . $string2 . "<br />";

    while ($string1 != $string2) {
        $string1 = generateRandomString($n);
        $string2 = generateRandomString($n);
        echo $string1 . " - " . $string2 . "<br />";
    }

    $myfile = fopen("skaicius.txt", "w") or die("Unable to open file!");

    $txtToWrite = ".\n";
    fwrite($myfile, $txtToWrite);
    fclose($myfile);

?>