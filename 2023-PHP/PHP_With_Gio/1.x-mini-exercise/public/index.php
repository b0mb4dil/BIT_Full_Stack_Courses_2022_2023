<?php

declare(strict_types = 1);

$root = dirname(__DIR__) . DIRECTORY_SEPARATOR;

define('APP_PATH', $root . 'app' . DIRECTORY_SEPARATOR);
define('FILES_PATH', $root . 'transaction_files' . DIRECTORY_SEPARATOR);
define('VIEWS_PATH', $root . 'views' . DIRECTORY_SEPARATOR);

/* YOUR CODE (Instructions in README.md) */

require APP_PATH . 'App.php';

// Add style formatter function
require APP_PATH . 'formatter.php';

// Finding .CSV file directory
$files = getTransactionFiles(FILES_PATH);


// Putting .CSV file data into array
$dataCSV = [];
foreach($files as $file) {
    $dataCSV = array_merge($dataCSV, getTransaction($file, 'readTransaction'));
}


// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
// Jei turėtume kitą direktoriją iš kurios reiktų paimti failą, tarkime kito banko .CSV failą, kurio kitoks formatavimas, tai galėtume atlikti pagal žemiau esantį kodą:

// Finding .CSV file directory - nurodomas kitas PATH
// $files = getTransactionFiles(FILES_PATH_OTHER);


// Putting .CSV file data into array - nurodoma kita callback funkcija 'readTransactionOtherBank'
// $dataCSV = [];
// foreach($files as $file) {
//     $dataCSV = array_merge($dataCSV, getTransaction($file, 'readTransactionOtherBank'));
// }
// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑



// Calculating total amount, income, expense
$totals = calculateTotals($dataCSV);

// Adding transactions.php file into index.php
require VIEWS_PATH . 'transactions.php';




?>
