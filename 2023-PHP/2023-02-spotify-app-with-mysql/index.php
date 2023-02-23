<?php include("includes/header.php"); ?>

<h1 class="pageHeading">You Might Also Like</h1>

<div class="gridviewContainer">
    <?php 
        $albumQuery = mysqli_query($con, "SELECT * FROM albums ORDER BY RAND() LIMIT 10");

        while($row = mysqli_fetch_array($albumQuery)) {

            echo (
                "<div class='gridviewItem'>
                    <a href='album.php?id=" . $row['id'] . "'>
                        <img src='" . $row['artworkPath'] . "'>
                
                        <div class='gridviewInfo'>
                            " . $row['title'] . "
                        </div>
                    </a>
                </div>");
        }
    ?>
</div>


<?php include("includes/footer.php"); ?>