<?php
include 'db.php';

$id = $_POST['id'];
$fname = $_POST['firstname'];
$lname = $_POST['lastname'];
$contact = $_POST['contact'];

$sql = "UPDATE students SET 
        firstname='$fname',
        lastname='$lname',
        contact='$contact'
        WHERE id=$id";

if ($conn->query($sql) === TRUE) {
    echo "Updated Successfully!";
} else {
    echo "Error updating record";
}

header("Location: view.php");
?>