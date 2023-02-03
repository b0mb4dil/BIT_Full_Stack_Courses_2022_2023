<?php

    if(
        isset($_POST['login_id']) AND 
        $_POST['login_id'] != '' AND
        isset($_POST['password']) AND    
        $_POST['password'] != '' AND
        isset($_POST['name']) AND    
        $_POST['name'] != '' AND
        isset($_POST['last_name']) AND    
        $_POST['last_name'] != ''
    ) {

    //Paimame duomenis iš json failo
    $database = file_get_contents('database.json');

    //json_decode() funkcija iskonvertuoja JSON formatą į apdorojamus duomenis (masyvą, stringą, skaičių ir t.t.)
    $decoded = json_decode($database);

    $user = [
        'id' => $_POST['login_id'],
        'name' => $_POST['name'],
        'last_name' => $_POST['last_name'],
        'iban' => 'LT' . rand(),
        'password' => $_POST['password'],
        'balance' => '50'
    ];
    
    $decoded[] = $user;
    
    $users = json_encode($decoded);
    
    file_put_contents('database.json', $users);
    }
    if (!isset($_SESSION)) {
        session_start();
        }
        
        if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        $_SESSION['postdata'] = $_POST;
        unset($_POST);
        header(header('Location: ?page=login'));
        exit;
        }
        
        if (@$_SESSION['postdata']){
        $_POST=$_SESSION['postdata'];
        unset($_SESSION['postdata']);
        }
    
?>
<link href="css/login.css" rel="stylesheet">
<main class="form-signin w-100 m-auto text-center">
    <form method="POST">
        <h1 class="h3 mb-3 fw-normal">Sukurkite paskyrą</h1>

        <div class="form-floating">
            <input type="text" name="login_id" class="form-control" id="floatingInput">
            <label for="floatingInput">Prisijungimo ID</label>
        </div>
        <div class="form-floating">
            <input type="password" name="password" class="form-control rounded mt-2" id="floatingPassword">
            <label for="floatingPassword">Slaptažodis</label>
        </div>
        <div class="form-floating">
            <input type="text" name="name" class="form-control" id="floatingInput">
            <label for="floatingInput">Vardas</label>
        </div>
        <div class="form-floating">
            <input type="text" name="last_name" class="form-control mt-2" id="floatingInput">
            <label for="floatingInput">Pavardė</label>
        </div>
        

        <button class="w-100 btn btn-lg btn-primary mt-3" type="submit">Registruotis</button>
    </form>
</main>

