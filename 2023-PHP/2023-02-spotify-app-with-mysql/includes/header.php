<?php 
include("includes/config.php");

//session_destroy();

if(isset($_SESSION['userLoggedIn'])) {
    $userLoggedIn = $_SESSION['userLoggedIn'];
} else {
    header("Location: register.php");
}

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="assets/css/index.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css">


</head>

<body>
    <div class="mainContainer">
        <div class="topContainer">
            <?php include("includes/navbarContainer.php"); ?>
            <div class="mainviewContainer">
                <div class="mainContent">