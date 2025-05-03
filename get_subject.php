<?php
$level = $_GET['level'];

$conn = new mysqli("localhost", "root", "", "ishuri");

$sql = "SELECT DISTINCT subject FROM lessons WHERE education_level = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $level);
$stmt->execute();

$result = $stmt->get_result();
$subjects = [];
while ($row = $result->fetch_assoc()) {
    $subjects[] = $row['subject'];
}

echo json_encode($subjects);
?>
