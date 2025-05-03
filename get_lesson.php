<?php
$level = $_GET['level'];
$subject = $_GET['subject'];

$conn = new mysqli("localhost", "root", "", "ishuri");

$sql = "SELECT title FROM lessons WHERE education_level = ? AND subject = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ss", $level, $subject);
$stmt->execute();

$result = $stmt->get_result();
$lessons = [];
while ($row = $result->fetch_assoc()) {
    $lessons[] = $row;
}

echo json_encode($lessons);
?>
