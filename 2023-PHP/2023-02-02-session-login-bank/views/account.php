<?php
    if(!isset($_SESSION['user'])) {
        header('Location: index.php');
    }
    $user = $_SESSION['user']; 
    
    $data = json_decode(file_get_contents('database.json'));
    echo "<pre>";
    print_r($data);
    echo "</pre>";
    $action = isset($_GET['action']) ? $_GET['action'] : '';
    

    if (!empty($_POST) AND $action === 'send_money') {
    echo $_GET['balance'];
        // print_r($user);
        // echo "Before </br>";
        // $user->balance = $user->balance - $_POST['balance'];

        // echo "After </br>";
        // print_r($user);

        // $data = $user;
        

        // file_put_contents('database.json', json_encode($data));
    
        // header('Location: ?page=account');
    exit();
    }
?>
<h1 class="d-flex justify-content-between align-items-center mt-2">
    Sveiki, <?= $user->name; ?> 
    <div>
        <a href="?page=account&action=send_money" class="btn btn-secondary">Atlikti naują pavedimą</a>
        <a href="?page=account&action=send_money" class="btn btn-secondary">Išrašas</a>
    </div>
    <a href="./" class="btn btn-warning">Atsijungti</a>
</h1>

<table class="table mt-3">
    <thead>
    <tr>
        <th>#ID</th>
        <th>Vardas</th>
        <th>Pavardė</th>
        <th>Sąskaitos numeris</th>
        <th>Sąskaitos likutis</th>
    </tr>
    </thead>
    <tbody>
        <td><?= $user->id; ?></td>
        <td><?= $user->name; ?></td>
        <td><?= $user->last_name; ?></td>
        <td><?= $user->iban; ?></td>
        <td><?= $user->balance; ?>€</td>
    </tbody>
</table>

<?php if($action === 'send_money') : ?>
    <form method="POST" class="mt-5" >
        <h4>Vietinis pavedimas</h4>
        <div class="mb-3">
            <label>Mano ID</label>
            <input type="text" name="id" class="form-control text-body-tertiary" value="<?= $user->id; ?>" readonly/>
        </div>
        <div class="mb-3">
            <label>Gavėjo sąskaita</label>
            <input type="text" name="iban" class="form-control" />
        </div>
        <div class="mb-3">
            <label>Suma</label>
            <input type="number" name="balance" class="form-control" />
            <p class="text-body-tertiary fs-6">Sąskaitos likutis: <?= $user->balance; ?>€</p>
        </div>
        
        <button class="btn btn-success">Siųsti</button>
    </form>
<?php endif; ?>


