<?php

declare(strict_types = 1);

function printArray($arr) {
    echo "<pre>";
    print_r($arr);
    echo "</pre>";

}

// Your Code
// $dir = "../transaction_files";
// $dirArr = array_diff(scandir($dir), array('.', '..'));
// $tableData = [];



// function getCSV() {
//     global $dirArr;
//     global $tableData;

//     foreach($dirArr as $file) {
//         
//         if (strrchr($file, '.') === '.csv') {
//            $fileLocation = "../transaction_files/$file";
//            $openFile = fopen($fileLocation, 'r');

//             if($openFile !== false) {
//                 while (!feof($openFile) ) {
//                     $tableData[] = fgetcsv($openFile, 1000, ',');
//                 }
//             }
//             fclose($openFile);
//         }
//     }
// };

// getCSV();
// printArray($tableData);


// callable $transactionHander nurodo callback funkciją, su kuria būtų apdorojami skirtingo formato failai
function getTransactionFiles(string $dirPath): array {
    $files = [];

    foreach(scandir($dirPath) as $file) {
        // Filtering directories to not include into files array
        if (is_dir($file)) {
            continue;
        }
        
        // Checking if file type is .csv and inserting .csv file names to array
        if (strrchr($file, '.') === '.csv') {
            $files[] = $dirPath . $file;
        }
    }

    return $files;
}

function getTransaction(string $fileName, ?callable $transactionHandler = null): array {
    if (!file_exists($fileName)) {
        trigger_error('File"' . $fileName . '" does not exist.', E_USER_ERROR);
    }

    $file = fopen($fileName, 'r');

    // Discarding first line from .CSV file, because it is not a transaction
    fgetcsv($file);

    $transactions = [];

    // Čia naudojamas $transactionHandler, jei jis yra nurodytas funkcijos iššaukime
    while(($transaction = fgetcsv($file)) !== false) {
        if ($transactionHandler !== null) {
            $transaction = $transactionHandler($transaction);
        }
        $transactions[] = $transaction;
    }

    return $transactions;
}


function readTransaction(array $transactionLine): array {

    [$date, $checkNumber, $description, $amount] = $transactionLine;

    // Removing all unnecessary symbols from unformatted number. (float) means, that it will return number instead of string.
    $amount = (float) str_replace(['$', ','], '', $amount);

    return [
        'date' => $date,
        'checkNum' => $checkNumber,
        'description' => $description,
        'amount' => $amount,
    ];
}


function calculateTotals(array $transactions): array {
    $totals = ['netTotal' => 0, 'totalIncome' => 0 , 'totalExpense' => 0];
    
    foreach ($transactions as $transaction) {
        $totals['netTotal'] += $transaction['amount'];

        if ($transaction['amount'] >= 0) {
            $totals['totalIncome'] += $transaction['amount'];
        } else {
            $totals['totalExpense'] += $transaction['amount'];
        }
    }

    return $totals;
}
?>