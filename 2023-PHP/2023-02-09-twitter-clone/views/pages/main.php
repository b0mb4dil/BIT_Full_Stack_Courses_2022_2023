<?php
    if(!isset($_SESSION['user'])) {
        header('Location: ?page=login');
        exit;
    }
    echo "<pre>";
    print_r($_SESSION);
    print_r($_SERVER);
    echo "</pre>";
?>
<h1>Latest tweets</h1>