<?php
include 'db.php';

$id = $_GET['id'];

$result = $conn->query("SELECT * FROM students WHERE id=$id");
$row = $result->fetch_assoc();
?>

<form method="POST" action="update.php">
    <input type="hidden" name="id" value="<?php echo $row['id']; ?>">

    First Name: <input type="text" name="firstname" value="<?php echo $row['firstname']; ?>"><br>
    Last Name: <input type="text" name="lastname" value="<?php echo $row['lastname']; ?>"><br>
    Contact: <input type="text" name="contact" value="<?php echo $row['contact']; ?>"><br>

    <input type="submit" value="Update">
</form>