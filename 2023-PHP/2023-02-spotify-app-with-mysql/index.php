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



    <div class="nowPlayingBarContainer">
        <div class="nowPlayingBar">
            <div class="nowPlayingLeft">
                <div class="content">
                    <span class="albumLink">
                        <img src="assets/images/profile-pics/Gandalf-2.webp" class="albumArtwork">
                    </span>
                    <div class="trackInfo">
                        <span class="trackName">
                            <span>Happy Birthday</span>
                        </span>
                        <span class="artistName">
                            <span>Eivydas</span>
                        </span>
                    </div>
                </div>
            </div>
            <div class="nowPlayingCenter">
                <div class="content playerControls">
                    <div class="buttons">
                        <button class="controlButtons" title="Shuffle button">
                            <i class="bi bi-shuffle buttonIcon"></i>
                        </button>
                        <button class="controlButtons" title="Previous button">
                            <i class="bi bi-skip-start-fill buttonIcon"></i>
                        </button>
                        <button class="controlButtons" title="Play button">
                            <i class="bi bi-play-circle buttonIcon buttonIconPlay"></i>
                        </button>
                        <button class="controlButtons" title="Pause button" style="display: none;">
                            <i class="bi bi-pause-circle buttonIcon buttonIconPause"></i>
                        </button>
                        <button class="controlButtons" title="Next button">
                            <i class="bi bi-skip-end-fill buttonIcon"></i>
                        </button>
                        <button class="controlButtons" title="Repeat button">
                            <i class="bi bi-infinity buttonIcon"></i>
                        </button>
                    </div>
                    <div class="playbackBar">
                        <span class="progressTime current">0.00</span>
                        <div class="progressBar">
                            <div class="progressBarBg">
                                <div class="progress"></div>
                            </div>
                        </div>
                        <span class="progressTime remaining">0.00</span>
                    </div>
                </div>
            </div>
            <div class="nowPlayingRight">
                <div class="volumeBar">
                    <button class="controlButtons" title="Volume  button">
                        <i class="bi bi-volume-up buttonIcon"></i>
                    </button>
                    <button class="controlButtons" title="Mute button" style="display: none;">
                        <i class="bi bi-volume-mute-fill buttonIcon"></i>
                    </button>
                    <div class="progressBar">
                        <div class="progressBarBg">
                            <div class="progress"></div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</body>

</html>