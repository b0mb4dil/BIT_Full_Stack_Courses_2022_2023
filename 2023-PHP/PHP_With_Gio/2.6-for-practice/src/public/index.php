<?php

declare(strict_types=1);

use App\Enums\Status;
use App\PaymentGateway\Stripe\Transaction;

require __DIR__ . '/../vendor/autoload.php';



$transaction = new Transaction();

// echo $transaction::STATUS_PAID;
// echo Transaction::STATUS_PAID;

// echo $transaction::class;
// echo Transaction::class; 

$transaction->setStatus(Status::PAID);
var_dump($transaction);