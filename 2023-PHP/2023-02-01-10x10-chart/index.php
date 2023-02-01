<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container text-center fs-3" style="max-width: 720px">
        <div>
            <h2 class="mt-3">10x10 MULTIPLICATION CHART</h2>
            <?php for($i = 0; $i <= 10; $i++) : ?>
                <div class="row border-bottom border-top border-dark">
                <?php for($j = 0; $j <= 10; $j++) : ?> 
                    <?php if($i === 0 AND $j === 0) : ?>
                        <div class="col text-white bg-dark p-1"></div>
                    <?php elseif($i === 0 OR $j === 0) : ?>
                        <div class="col text-white bg-dark p-1"><?= $j+$i ?></div>
                    <?php elseif($i === $j) : ?>
                        <div  class="col p-1 border-start border-end border-dark bg-dark-subtle"><?= $i * $j ?></div>  
                    <?php else : ?>
                        <div  class="col p-1 border-start border-end border-dark"><?= $i * $j ?></div>
                    <?php endif; ?>
                <?php endfor; ?></div>
            <?php endfor; ?>
            <h4 class="mt-1">M + A + T + H =  
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-heart-fill" style="color: red" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                </svg>
            </h4>       
        </div>
    </div>
</body>
</html>