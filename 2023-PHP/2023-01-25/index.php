<!DOCTYPE html>
<html>
<body>

<form action="upload.php" method="post" enctype="multipart/form-data">
  Select image to upload:
  <input type="file" name="fileToUpload" id="fileToUpload">
  <input type="submit" value="Upload Image" name="submit">
</form>

</body>
</html>



<?php
// // fopen("file", "w") w - write, visada ištrins esamus duomenis ir įrašys ant viršaus

// $myfile = fopen("newfile.txt", "w") or die("Unable to open file!");

// $txtToWrite = "Eivydas Gricius\n";
// fwrite($myfile, $txtToWrite);

// $txtToWrite = "29\n";
// fwrite($myfile, $txtToWrite);
// fclose($myfile);


// // fopen("file", "a") a - append, papildys esamus duomenis ir neištrins senų
// $myfile = fopen("newfile.txt", "a") or die("Unable to open file!");

// $txtToWrite = "Eivydas Gricius\n";
// fwrite($myfile, $txtToWrite);

// $txtToWrite = "29\n";
// fwrite($myfile, $txtToWrite);
// fclose($myfile);
?>

