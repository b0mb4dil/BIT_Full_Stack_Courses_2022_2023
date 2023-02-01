<?php

$root = '../';

if(isset($_GET['path'])) {
    $path = $_GET['path'];
} else {
    $path = $root;
}

$files = scandir($path);

echo '<h1>File Manager</h1>';
echo '<ul>';

foreach($files as $file) {
    $fullPath = $path . '/' . $file;
    if($file == '.' || $file == '..') {
        continue;
    }
    if(is_dir($fullPath)) {
        echo "<li><a href='?path=$fullPath'>$file</a></li>";
    } else {
        echo "<li>$file</li>";
    }
}

echo '</ul>';

?>