<?php

declare(strict_types=1);

require_once('./PaymentProfile.php');
require_once('./Customer.php');
require_once('./Transaction.php');

// Creating new object from class
$transaction = new Transaction(100, 'Transaction 1');
   

var_dump($transaction->customer?->paymentProfile->id);  
