<?php

declare(strict_types=1);

require_once('./Transaction.php');

// Creating new object from class
$transaction = (new Transaction(100, 'Transaction 1'))
    ->addTax(8)
    ->applyDiscount(10);

$amount = $transaction->getAmount();
var_dump($amount);  
