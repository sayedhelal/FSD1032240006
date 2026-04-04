<?php
include 'db.php';

// Get data from form
$fname = $_POST['firstname'];
$lname = $_POST['lastname'];
$roll = $_POST['rollno'];
$pass = $_POST['password'];
$cpass = $_POST['cpassword'];
$contact = $_POST['contact'];

// Validation
if ($pass != $cpass) {
    echo "Passwords do not match!";
    exit();
}

// Insert query
$sql = "INSERT INTO students (firstname, lastname, rollno, password, contact)
        VALUES ('$fname', '$lname', '$roll', '$pass', '$contact')";

if ($conn->query($sql) === TRUE) {
    echo "Student Registered Successfully!";
} else {
    echo "Error: " . $conn->error;
}

$conn->close();
?>