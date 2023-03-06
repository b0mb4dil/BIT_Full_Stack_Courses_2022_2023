<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>File browser</title>
</head>

<a href="../"></a>

<body>
    <ul>
        <?php
        if(isset($_GET['dir'])) {
            $newDir = $_GET['dir'];
            $scannedDir = scandir("../$newDir");
        } else {
            $scannedDir = scandir("../");
        }
        foreach ($scannedDir as $value) { ?>
        <li>
            <a href="?dir=<?php echo $value ?>"><?php echo $value ?></a>
        </li>
        <?php } ?>
    </ul>
</body>

</html>