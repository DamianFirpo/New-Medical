<?php
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');
  header('Access-Control-Allow-Origin: *');
  
  $servername = "localhost";
  $username = "root";
  $password = "";
  $dbname = "newmedical-users";
  
  $conn = new mysqli($servername, $username, $password, $dbname);
  
  if ($conn->connect_error) {
      die("Connection failed: " . $conn->connect_error);
  }
  
  $usuario = $_POST['usuario'];
  $password = $_POST['password'];
  $edad = $_POST['edad'];
  $dni = $_POST['dni'];
  
  $sql = "INSERT INTO usuarios (usuario, password, edad, dni)
  VALUES ('$usuario', '$password', '$edad', '$dni')";
  
  if ($conn->query($sql) === TRUE) {
      $response_array['status'] = 'success';
      $response_array['message'] = 'Usuario guardado correctamente';
      echo json_encode($response_array);
  } else {
      $response_array['status'] = 'error';
      $response_array['message'] = 'Error al guardar el usuario: ' . $conn->error;
      echo json_encode($response_array);
  }
  
  $conn->close();
?>
