<?php 
    ob_start();
    session_start();

    $timezone = date_default_timezone_set("Europe/Vilnius");

    $con = mysqli_connect("localhost", "root", "", "music_app");

    if(mysqli_connect_errno()) {
        echo "Failed to connect to database: " . mysqli_connect_errno();
    } 
?>