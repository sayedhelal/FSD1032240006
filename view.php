<?php
include 'db.php';

$sql = "SELECT * FROM students";
$result = $conn->query($sql);
?>

<h2>Student Records</h2>

<table border="1">
<tr>
    <th>ID</th>
    <th>Name</th>
    <th>Roll No</th>
    <th>Contact</th>
    <th>Actions</th>
</tr>

<?php
while($row = $result->fetch_assoc()) {
    echo "<tr>
        <td>".$row['id']."</td>
        <td>".$row['firstname']." ".$row['lastname']."</td>
        <td>".$row['rollno']."</td>
        <td>".$row['contact']."</td>
        <td>
            <a href='delete.php?id=".$row['id']."'>Delete</a> |
            <a href='edit.php?id=".$row['id']."'>Edit</a>
        </td>
    </tr>";
}
?>

</table>