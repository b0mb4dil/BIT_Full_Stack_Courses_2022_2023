<?php 
    include("includes/config.php");
    include("includes/classes/Account.php");
    include("includes/classes/Constants.php");

    $account = new Account($con);

    include("includes/handlers/register-handler.php");
    include("includes/handlers/login-handler.php");


    function getInputValue($name) {
        if(isset($_POST[$name])) {
            echo $_POST[$name];
        }
    }

?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to Spotify</title>
    <link href="assets/css/register.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css">

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
    <script src="assets/js/register.js"></script>
</head>

<body>

    <?php 
        if(isset($_POST['registerButton'])) {
            echo '<script>
                    $(document).ready(function() {
                
                        $("#loginForm").hide();
                        $("#registerForm").show();
                    });
                </script>';
        } else {
            echo '<script>
                    $(document).ready(function() {
                
                        $("#loginForm").show();
                        $("#registerForm").hide();
                    });
                </script>';
        }

    ?>


    <div class="background">
        <div class="loginContainer">
            <div class="inputContainer">
                <form id="loginForm" action="register.php" method="POST">
                    <h2>Login to your account</h2>
                    <p>
                        <?php echo $account->getError(Constants::$loginFailed); ?>
                        <label for="loginUsername">Username</label>
                        <input id="loginUsername" name="loginUsername" type="text" placeholder="Your username" required
                            value="<?php getInputValue('loginUsername') ?>">
                    </p>
                    <p>
                        <label for="loginPassword">Password</label>
                        <input id="loginPassword" name="loginPassword" type="password" placeholder="Your password"
                            required>
                    </p>
                    <button type="submit" name="loginButton">Login</button>

                    <div class="hasAccountText">
                        <span class="hideLogin">Don't have an account yet? Signup here.</span>
                    </div>
                </form>

                <form id="registerForm" action="register.php" method="POST">
                    <h2>Create your free account</h2>
                    <p>
                        <?php echo $account->getError(Constants::$usernameCharacters); ?>
                        <?php echo $account->getError(Constants::$usernameExists); ?>
                        <label for="username">Username</label>
                        <input id="username" name="username" type="text" placeholder="e.g. TomyB" required
                            value="<?php getInputValue('username') ?>">
                    </p>
                    <p>
                        <?php echo $account->getError(Constants::$firstNameCharacters); ?>
                        <label for="firstName">First name</label>
                        <input id="firstName" name="firstName" type="text" placeholder="e.g. Tom" required
                            value="<?php getInputValue('firstName') ?>">
                    </p>
                    <p>
                        <?php echo $account->getError(Constants::$lastNameCharacters); ?>
                        <label for="lastName">Last name</label>
                        <input id="lastName" name="lastName" type="text" placeholder="e.g. Bombadil" required
                            value="<?php getInputValue('lastName') ?>">
                    </p>
                    <p>
                        <?php echo $account->getError(Constants::$emailsDoNotMatch); ?>
                        <?php echo $account->getError(Constants::$emailInvalid); ?>
                        <?php echo $account->getError(Constants::$emailExists); ?>
                        <label for="email">Email</label>
                        <input id="email" name="email" type="email" placeholder="e.g. tom@gmail.com" required
                            value="<?php getInputValue('email') ?>">
                    </p>
                    <p>
                        <label for="email2">Confirm email</label>
                        <input id="email2" name="email2" type="email" placeholder="e.g. tom@gmail.com" required
                            value="<?php getInputValue('email2') ?>">
                    </p>


                    <p>
                        <?php echo $account->getError(Constants::$passwordsDoNotMatch); ?>
                        <?php echo $account->getError(Constants::$passwordNotAlphanumeric); ?>
                        <?php echo $account->getError(Constants::$passwordCharacters); ?>
                        <?php echo $account->getError(Constants::$passwordCharactersLong); ?>
                        <label for="password">Password</label>
                        <input id="password" name="password" type="password" placeholder="Your password" required
                            value="<?php getInputValue('password') ?>">
                    </p>
                    <p>
                        <label for="password2">Confirm password</label>
                        <input id="password2" name="password2" type="password" placeholder="Your password" required
                            value="<?php getInputValue('password2') ?>">
                    </p>
                    <button type="submit" name="registerButton">SIGN UP</button>

                    <div class="hasAccountText">
                        <span class="hideRegister">Already have an account yet? Login here.</span>
                    </div>
                </form>
            </div>

            <div class="loginText">
                <h1>Enjoy great music, right now</h1>
                <h2>Listen to loads of songs for free</h2>
                <ul>
                    <li><i class="bi bi-check-lg checkIcon"></i>Discover music you'll fall in love with</li>
                    <li><i class="bi bi-check-lg checkIcon"></i>Create your own playlists</li>
                    <li><i class="bi bi-check-lg checkIcon"></i>Follow artists to keep up to date</li>
                </ul>
            </div>
        </div>
    </div>
</body>

</html>