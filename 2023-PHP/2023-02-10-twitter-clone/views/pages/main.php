<?php
    if(!isset($_SESSION['user'])) {
        header('Location: ?page=login');
        exit;
    }

    $data = json_decode(file_get_contents('./database.json'), true);

    if(!empty($_POST)) {
        $data['tweets'][] = [
            'message' => $_POST['tweet'],
            'created_at' => date('Y-m-d h:i:s'),
            'author' => $_SESSION['user']['id']
        ];

        file_put_contents('./database.json', json_encode($data));

        if(isset($_FILES['tweet-photo'])) {
            if(!is_dir('./uploads')) {
                mkdir('./uploads');
            }

            $filename = explode('.', $_FILES['tweet-photo']['name']);

            // if($_FILES['tweet-photo']['type']==='image/jpeg')

            move_uploaded_file($_FILES['tweet-photo']['tmp_name'], './uploads' . time());
        }
    
    }
    echo "<pre>";
    print_r($_SESSION);
    echo "</pre>";
?>
<h2>Post New Tweet</h2>
<form method="POST">
    <textarea name="tweet" class="form-control mb-3"></textarea>
    <input type="file" name="tweet-photo" class="form-control mb-3">
    <button class="btn btn-primary">Tweet</button>
</form>
<h1>Latest tweets</h1>
<?php foreach ($data['tweets'] as $tweet) :?>
    <div class="card shadow-sm mb-3">
        <div class="card-text p-2">
            <?= $tweet['message'] ?>
        </div>
        <div class="d-flex justify-content-between align-items-center p-2">
            <span><?=$tweet['author']?></span>
            <span><?=$tweet['created_at']?></span>
        </div>
    </div>
<?php endforeach?>