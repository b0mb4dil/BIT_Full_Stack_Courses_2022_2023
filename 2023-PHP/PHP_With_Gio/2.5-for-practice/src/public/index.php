<?php

declare(strict_types=1);

use Ramsey\Uuid\Nonstandard\Uuid;
use Ramsey\Uuid\Rfc4122\UuidV6;
use Ramsey\Uuid\UuidFactory;

// require_once(__DIR__ . '/../app/PaymentGateway/Paddle/Customer.php');
// require_once(__DIR__ . '/../app/PaymentGateway/Paddle/CustomerProfile.php');
// require_once(__DIR__ . '/../App/PaymentGateway/Stripe/Customer.php');
// require_once(__DIR__ . '/../app/PaymentGateway/Stripe/Transaction.php');



// spl_autoload_register(function ($class) {
//     $path = __DIR__ . '/../' . lcfirst(str_replace('\\', '/', $class)) . '.php';

//     if(file_exists($path)) {
//         require $path;
//     }
// });


require __DIR__ . '/../vendor/autoload.php';

// $id = new \Ramsey\Uuid\UuidFactory();
// echo $id->uuid4();

var_dump(new App\PaymentGateway\Paddle\Customer());
echo '<br />';  
var_dump(new App\PaymentGateway\Paddle\CustomerProfile());
echo '<br />';
echo '<br />';
