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
<div class="row">
    <div class="col-3 text-center">
        

        <h1 class="justify-content-between align-items-center mt-2">
        <i class="bi bi-twitter fs-1 text-primary me-2"></i>Sveiki, <?= $user->name; ?> 
        <div>
            <a href="?page=account&action=history" class="btn btn-primary rounded-pill fw-semibold ms-1 me-1">Home</a>
            <a href="?page=account&action=new-transfer" class="btn btn-primary rounded-pill fw-semibold">New Message</a>
            <a href="./" class="btn btn-outline-primary rounded-pill fw-semibold">Log Out</a>
        </div>
        </h1>
        <div class="d-grid">
            <div class="fs-4 mb-4 btn btn-light rounded-pill">Home</div>
            <div class="fs-4 mb-4 btn btn-light rounded-pill">Explore</div>
            <div class="fs-4 mb-4 btn btn-light rounded-pill">Notifications</div>
            <div class="fs-4 mb-4 btn btn-light rounded-pill">Messages</div>
            <div class="fs-4 mb-4 btn btn-light rounded-pill">Bookmarks</div>
            <div class="fs-4 mb-4 btn btn-light rounded-pill">Twitter Blue</div>
            <div class="fs-4 mb-4 btn btn-light rounded-pill">Profile</div>
            <div class="fs-4 mb-4 btn btn-light rounded-pill">More</div>
        </div>
        
    
    </div>
    <div class="col-6">
        <?php if(isset($_GET['message'])) : ?>
            <div class="alert alert-<?= $_GET['status'] ?>">
                <?= $_GET['message'] ?>
            </div>
        <?php endif; ?>
        
            <div class="d-grid mt-5 bg-body-tertiary p-4 rounded-5 text-left">
                <div>
                    <h3>Home</h3>
                </div>
                    <?php foreach ($user_data as $value) {
                        $value->history;    
                    }
                    ?>
                <div>
                    <?php for ($i = 0; $i < count($user->history); $i++) : ?>
                        <div class="d-grid ">
                            <div class="fs-6 mb-3 border rounded-5 border-dark-subtle">
                                <div class="p-3 ms-1 me-1 pb-1 fw-semibold">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <span class="fs-5"><?= $value->history[$i]->from; ?></span>
                                        <span class="text-body-tertiary"><?= $value->history[$i]->date; ?></span>
                                    </div>
                                </div>
                                <div class="m-3 mt-0 mb-0 text-center">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </div>
                                <div class="p-3 fs-6 text-start fw-semibold text-body-secondary">
                                </div>
                                <div class="d-flex justify-content-between ms-5 me-5 mb-2">
                                    <i class="bi bi-heart-fill text-danger"></i>
                                    <i class="bi bi-share-fill text-primary"></i>
                                    <i class="bi bi-chat"></i>
                                    <i class="bi bi-diagram-3-fill text-success "></i>
                                </div>
                            </div>
                        </div>
                    <?php endfor ?>
                </div>

            </div>   
    </div>
    <div class="col-3">
        <form class="d-flex mt-5 bg-body-tertiary p-4 rounded-5" role="search">
            <button class="btn" type="submit"><i class="bi bi-search"></i></button>
            <input class="form-control me-2 bg-transparent rounded-pill" type="search" placeholder="Search" aria-label="Search">
        </form>
        <?php if($action === 'new-transfer') : ?>
            <form method="POST" class="mt-5 bg-body-tertiary p-4 rounded-5" style="max-width: 500px">
                <div class="mb-3">
                    <label class="fs-5 mb-1">Nauja žinutė</label>
                    <select name="recipient" class="form-control">
                        <?php foreach($recipients as $account) : ?>
                            <option value="<?= $account->id ?>"><?= $account->name . ' ' . $account->last_name ?></option>

                        <?php endforeach; ?>
                    </select>
                </div>
                <div class="mb-3">
                    <label class="fs-5 mb-1">Tekstas</label>
                    <input type="number" step="0.01" name="amount" class="form-control" />
                </div>
                <button class="btn btn-primary">Siųsti</button>
            </form>
        <?php endif; ?>
        <div class="d-grid mt-5 bg-body-tertiary p-4 rounded-5 text-left">
            <h4 class=>Trends for you</h4>
            <div class="fs-4 mb-2 btn btn-light rounded-pill text-start">Home</div>
            <div class="fs-4 mb-2 btn btn-light rounded-pill text-start">Explore</div>
            <div class="fs-4 mb-2 btn btn-light rounded-pill text-start">Notifications</div>
            <div class="fs-4 mb-2 btn btn-light rounded-pill text-start">Messages</div>
            <div class="fs-4 mb-2 btn btn-light rounded-pill text-start">Bookmarks</div>
            <div class="fs-4 mb-2 btn btn-light rounded-pill text-start">Twitter Blue</div>
            <div class="fs-4 mb-2 btn btn-light rounded-pill text-start">Profile</div>
            <div class="fs-4 mb-2 btn btn-light rounded-pill text-start">More</div>
        </div> 
    </div>
</div>








