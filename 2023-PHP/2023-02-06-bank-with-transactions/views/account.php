<?php
    if(!isset($_SESSION['user'])) {
        header('Location: index.php');
        exit;
    }

    if($_SESSION['user']->role === '1') {
        header('Location: ?page=admin');
        exit;
    }

    $user = $_SESSION['user'];

    print_r($_SESSION['user']->name); 

    $data = json_decode(file_get_contents('database.json'));
    $dataArray = json_decode(file_get_contents('database.json'));
    $id = $_SESSION['user']->id;


    // Aprašomas GET $action veikimas 
    $action = isset($_GET['action']) ? $_GET['action'] : '';

    if(!empty($_POST) AND $action === 'new-transfer') {
        $currentUser = [];
        $transferCost = 0.43;

        foreach($data as $user) {
            if($user->id === $id)
                $currentUser = $user;
        }

        foreach($data as $user) {
            if($user->id === $_POST['recipient'])
                $currentRecipient = $user;
        }

        if(($_POST['amount'] + $transferCost) > $currentUser->balance) {
            header('Location: ?page=account&message=Nepakankamas sąskaitos likutis&status=danger');
            exit;
        }

        foreach($data as $key => $user) {
            if($_POST['recipient'] === $user->id) {
                $data[$key]->balance += $_POST['amount'];
                $data[$key]->history[] = 
                [
                    "date" => date("Y-m-d H:i:s"),
                    "from" => ($_SESSION['user']->name) . " " . ($_SESSION['user']->last_name),
                    "to" => $user->name . " " . $user->last_name,
                    "received" => "1",
                    "amount" => $_POST['amount']
                ];

            }

            if($id === $user->id) {
                $data[$key]->balance -= $_POST['amount'] + 0.43;
                $data[$key]->history[] = 
                [
                    "date" => date("Y-m-d H:i:s"),
                    "from" => ($_SESSION['user']->name) . " " . ($_SESSION['user']->last_name),
                    "to" => $currentRecipient->name . " " . $currentRecipient->last_name,
                    "received" => "0",
                    "amount" => $_POST['amount']
                ];
            }
        }

        file_put_contents('database.json', json_encode($data));

        header('Location: ?page=account&message=Pavedimas sėkmingai atliktas&status=success');

        exit;
    }

    //Duomenų išfiltravimas aprašant savo ciklą
    // $recipients = [];

    // foreach($data as $user) {
    //     if($user->role != '1' AND $user->id != $id)
    //         $recipients[] = $user;
    // }

    //Duomenų filtravimas pasitelkiant funkcija

    $recipients = array_filter($data, function($user) {
        if($user->role != '1' AND $user->id != $_SESSION['user']->id)
            return $user;
    });
    

    $user_data = array_filter($data, function($user) {
        if($user->id === $_SESSION['user']->id)
            return $user;
    });
    
?>
<h1 class="d-flex justify-content-between align-items-center mt-2">
    Sveiki, <?= $user->name; ?> 
    <div>
        <a href="?page=account&action=history" class="btn btn-success">Pavedimų istorija</a>
        <a href="?page=account&action=new-transfer" class="btn btn-success">Naujas pavedimas</a>
        <a href="./" class="btn btn-warning">Atsijungti</a>
    </div>
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

<?php if(isset($_GET['message'])) : ?>
    <div class="alert alert-<?= $_GET['status'] ?>">
        <?= $_GET['message'] ?>
    </div>
<?php endif; ?>

<?php if($action === 'new-transfer') : ?>
    <form method="POST" class="mt-5" style="max-width: 500px">
        <div class="mb-3">
            <label class="fs-5 mb-1">Pavedimo gavėjas</label>
            <select name="recipient" class="form-control">
                <?php foreach($recipients as $account) : ?>
                    <option value="<?= $account->id ?>"><?= $account->name . ' ' . $account->last_name ?></option>

                <?php endforeach; ?>
            </select>
        </div>
        <div class="mb-3">
            <label class="fs-5 mb-1">Pavedimo suma</label>
            <input type="number" step="0.01" name="amount" class="form-control" />
        </div>
        <button class="btn btn-primary">Siųsti</button>
    </form>
<?php endif; ?>

<?php if($action === 'history') : ?>
    <table class="table mt-5" style="max-width: 900px">
    <thead>
        <tr>
            <th>Data</th>
            <th>Siuntėjas</th>
            <th>Gavėjas</th>
            <th>Suma</th>
        </tr>
    </thead>
    <tbody>
        <!-- <?php foreach ($user_data as $value) : ?>
            <tr>
                <td><?= $value->history; ?></td>
            </tr>
        <?php endforeach; ?> -->
        <?php for ($i = 0; $i < count($user->history); $i++) : ?>
            <tr class=<?php echo ($value->history[$i]->received ? "table-success" : "table-danger") ?>>
                <td><?= $value->history[$i]->date; ?></td>
                <td><?= $value->history[$i]->from; ?></td>
                <td><?= $value->history[$i]->to; ?></td>

                <!-- <?php if ($value->history[$i]->received) : ?>
                <td class="table-success"><?= $value->history[$i]->amount; ?></td>
                <?php else : ?>
                    <td class="table-danger"><?= $value->history[$i]->amount; ?></td>
                <?php endif ?> -->

                <td><?= $value->history[$i]->amount; ?></td>
            </tr>
        <?php endfor ?>
    </tbody>
</table>
<?php endif; ?>