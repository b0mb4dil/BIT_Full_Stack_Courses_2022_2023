<?php
    $dir = scandir(__DIR__);

    if (file_exists('foo.txt')) {
        file_put_contents('foo.txt', '1.1 file_put_contents');

        clearstatcache();

    } else {
        file_put_contents('foo.txt', '1.1 file_put_contents');
    }

    $file = fopen('foo.txt', 'r');

    while (($line = fgets($file)) !== false) {
        echo $line . '<br/>';
    };
?>