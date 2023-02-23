<?php 
    class Account {

        private $con;
        private $errorArray;

        public function __construct($con) {
            $this->con = $con;
            $this->errorArray = array();
        }

        public function login($un, $pass) {
            $pass = md5($pass);

            $query = mysqli_query($this->con, "SELECT * FROM users WHERE username='$un' AND passwords='$pass'");

            if(mysqli_num_rows($query) === 1 ) {
                return true;
            } else {
                array_push($this->errorArray, Constants::$loginFailed);
                return false;
            }
        }

        public function register($un, $fn, $ln, $em1, $em2, $pass1, $pass2) {
            $this->validateUsername($un);
            $this->validateFirstName($fn);
            $this->validateLastName($ln);
            $this->validateEmails($em1, $em2);
            $this->validatePasswords($pass1, $pass2);

            if(empty($this->errorArray)) {
                // Insert into database
                return $this->insertUserDetails($un, $fn, $ln, $em1, $pass1);
            } else {
                return false;
            }
        }

        public function getError($error) {
            if(!in_array($error, $this->errorArray)) {
                $error = "";
            }
            return "<span class='errorMessage'>$error</span>";
        }

        private function insertUserDetails($un, $fn, $ln, $em, $pass1) {
            $encryptedPass = md5($pass1);
            $profilePic = "assets/images/profile-pics/profile.png";
            $date = date("Y-m-d");

            $result = mysqli_query($this->con, "INSERT INTO users VALUES ('', '$un', '$fn', '$ln', '$em', '$encryptedPass', '$date', '$profilePic')");
            return $result;
        }

        private function validateUsername($un) {
            // Checking username length
            if(strlen($un) > 25 || strlen($un) < 5) {
                array_push($this->errorArray, Constants::$usernameCharacters);
                return;
            }

            // Checking if username already exists
            $checkUsernameQuery = mysqli_query($this->con, "SELECT username FROM users WHERE username='$un'");
            if(mysqli_num_rows($checkUsernameQuery) != 0) {
                array_push($this->errorArray, Constants::$usernameExists);
                return;
            }
        }
        private function validateFirstName($fn) {
        // Checking firstname length
            if(strlen($fn) > 25 || strlen($fn) < 2) {
                array_push($this->errorArray, Constants::$firstNameCharacters);
                return;
            }
        }
        private function validateLastName($ln) {
        // Checking firstname length
            if(strlen($ln) > 25 || strlen($ln) < 2) {
                array_push($this->errorArray, Constants::$lastNameCharacters);
                return;
            }
        }
        private function validateEmails($em1, $em2) {
            if($em1 != $em2) {
                array_push($this->errorArray, Constants::$emailsDoNotMatch);
                return;
            }

            if(!filter_var($em1, FILTER_VALIDATE_EMAIL)) {
                array_push($this->errorArray, Constants::$emailInvalid);
                return;
            }
                


            // Checking if email already exists
            $checkEmailQuery = mysqli_query($this->con, "SELECT email FROM users WHERE email='$em1'");
            if(mysqli_num_rows($checkEmailQuery) != 0) {
                array_push($this->errorArray, Constants::$emailExists);
                return;
            }

        }
        private function validatePasswords($pass1, $pass2) {
            if($pass1 != $pass2) {
                array_push($this->errorArray, Constants::$passwordsDoNotMatch);
                return;
            }
            if(preg_match('/[^A-Za-z0-9]/', $pass1)) {
                array_push($this->errorArray, Constants::$passwordNotAlphanumeric);
                return;
            }
            if(strlen($pass1) < 5) {
                array_push($this->errorArray, Constants::$passwordCharacters);
                return;
            }
            if(strlen($pass1) > 255) {
                array_push($this->errorArray, Constants::$passwordCharactersLong);
                return;
            }
        }
    }
?>