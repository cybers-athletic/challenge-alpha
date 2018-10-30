<?php
	echo 'Brasília: ';
	date_default_timezone_set('America/Sao_Paulo');
	$data = new DateTime('now');
	echo $data->format('H:i:s');
	echo "<br>Londres: ";
	date_default_timezone_set('Europe/London');
	$data = new DateTime('now');
	echo $data->format('H:i:s');
?>