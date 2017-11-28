<?php
	session_start();
	require 'vendor/autoload.php';
	
	$app = new Slim\App();
	
	/////////////////////////////////////////////////////// API-REST ////////////////////////////////////////////////////////////
	
	include 'IdentityController.php';
	include 'UserController.php';
	include 'SCommunitaryController.php';
	include 'InternshipController.php';
	include 'ThesisController.php';
	include 'systemactivityController.php';
	include 'roleController.php';


	/////////////////////////////////////////////////////// API-REST ////////////////////////////////////////////////////////////

	
	$app->run();

	
	function getConn() {
		try{
			$dbhost="localhost";
			$dbuser="root";
			$dbpass="";
			$dbname="art_database";
			$dbh = new PDO("mysql:host=$dbhost;dbname=$dbname", $dbuser, $dbpass);
			$dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
			return $dbh;
		}catch(PDOException $e){
			echo '{"error":{"text":' . $e->getMessage() . '}}';
		}
		
		//$this->conn = new mysqli($dbhost, $dbuser, $dbpass, $dbname);
		//if(mysqli_connect_errno()){
		//	$err = array("Ha ocurrido un error al intentari conectar con la base de datos", mysqli_connect_error());
		//
		//}
	}
?>
