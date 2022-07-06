<?php

	// Формируем массив для JSON ответа
    $result = array(
    	'input1' => $_POST["input1"],
    	'input2' => $_POST["input2"],
        'select1' => $_POST["select1"],  
        'select2' => $_POST["select2"], 
        'select3' => $_POST["select3"], 
        'select4' => $_POST["select4"], 
        'select5' => $_POST["select5"],               
        ); 

    // Переводим массив в JSON
    echo json_encode($result); 
  
?>