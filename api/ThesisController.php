<?php 
    use Psr\Http\Message\ServerRequestInterface as Request;
    use Psr\Http\Message\ResponseInterface as Response;	
    //Api-Rest: Report: Tesis / Trabajo Especial de grado
    $app->group('/thesis', function(){
        $this->post('', function(Request $req, Response $res){
			try{
				$input = $req->getParsedBody();				
				$sql = "Insert into report(Id_Report_Type, Id_Career, Id_User, Report_Name, Students, isApproved, Observations) values (3,'".$input["Id_Career"]."','".$_SESSION["IdUser"]."','".$input["Report_Name"]."','".$input["Students"]."','".$input["isApproved"]."','".$input["Observations"]."');";
				$db = getConn();
				$db->query($sql);
				$logsql = "Insert into user_log (Id_User, Date_Time,Event) values ('". $_SESSION["IdUser"] ."', '". date("Y-m-d H:i:s") ."','Ha registrado una tesis: ".$input["Report_Name"]."')";
				$db->query($logsql);
				$midsql = "Select max(Id_Report) as Id_Report from report;";
				$statement = $db->query($midsql);
				$data = $statement->fetchAll(PDO::FETCH_OBJ);
				$id = $data[0]->Id_Report;
				if(isset($input["Archivos"])){
					foreach($input["Archivos"] as $file){
						if(isset($file["Base64"])){
							$type_file = explode('.', $file["File_Name"]);
							$md5_name = md5(time().uniqid());
							$file_name = $type_file[0];
							base64_to_file($file["Base64"], "../file/" . $md5_name . "." . $type_file[1]);
							$sqlfileinsert = "Insert into file(Id_Report,Folder,File_Name, File_Md5) values ('".$id[0]."', '../file/','".$file["File_Name"]."','".$md5_name.".".$type_file[1]."')";
							$db->query($sqlfileinsert);
							$file["Base64"] = "";
						}
					}
				}
				echo json_encode($input);
			}catch(Exception $e){
				echo '{"error":{"text":' . $e->getMessage() . '}}';
			}
		});
		$this->get('', function(Request $req, Response $res){
			try{
				$sql = "Select Id_Report, Id_Report_Type, Id_Career, Id_User, Report_Name, Students, isApproved, Observations from report where Id_Report_Type = 3;";
				$db = getConn();
				$statement = $db->query($sql);
				$data = $statement->fetchAll(PDO::FETCH_OBJ);
				echo json_encode($data);
			}catch(Exception $e){
				echo '{"error":{"text":' . $e->getMessage() . '}}';
			}
		});
		$this->get('/{id}', function(Request $req, Response $res){
			try{
                $id = $req->getAttribute('id');
				$sql = "Select Id_Report, Id_Report_Type, Id_Career, Id_User, Report_Name, Students, isApproved, Observations from report where Id_Report = ".$id.";";
				$db = getConn();
				$statement = $db->query($sql);
				$data = $statement->fetchAll(PDO::FETCH_OBJ);
				echo json_encode($data[0]);
			}catch(Exception $e){
				echo '{"error":{"text":' . $e->getMessage() . '}}';
			}
		});
		$this->patch('/{id}', function(Request $req, Response $res){
			try{
				$id = $req->getAttribute('id');				
				$input = $req->getParsedBody();	
				$sql = "update report set Id_Career = '".$input["Id_Career"]."', Report_Name= '".$input["Report_Name"]."', Students = '".$input["Students"]."', isApproved = '".$input["isApproved"]."', Observations = '".$input["Observations"]."' where Id_Report = '".$id."';";
				$db = getConn();
				$db->query($sql);
				$logsql = "Insert into user_log (Id_User, Date_Time,Event) values ('". $_SESSION["IdUser"] ."', '". date("Y-m-d H:i:s") ."','Ha editado una tesis: ".$input["Report_Name"]."')";
				$db->query($logsql);
				if(isset($input["Archivos"])){
					foreach($input["Archivos"] as $file){
						if(isset($file["Base64"])){
							$type_file = explode('.', $file["File_Name"]);
							$md5_name = md5(time().uniqid());
							$file_name = $type_file[0];
							base64_to_file($file["Base64"], "../file/" . $md5_name . "." . $type_file[1]);
							$sqlfileinsert = "Insert into file(Id_Report,Folder,File_Name, File_Md5) values ('".$id."', '../file/','".$file["File_Name"]."','".$md5_name.".".$type_file[1]."')";
							echo $sqlfileinsert;
							$db->query($sqlfileinsert);
							$file["Base64"] = "";
						}
					}
				}
				echo json_encode($input);
			}catch(Exception $e){
				echo '{"error":{"text":' . $e->getMessage() . '}}';
			}
		});
		$this->delete('/{id}', function(Request $req, Response $res){
			try{
				$input = $req->getParsedBody();	
				$sql = "Delete from report where Id_Report = ".$id.";";
				$db = getConn();
				$db->query($sql);							
				$logsql = "Insert into user_log (Id_User, Date_Time,Event) values ('". $_SESSION["IdUser"] ."', '". date("Y-m-d H:i:s") ."','Ha Borrado una tesis')";
				$db->query($logsql);
				return $this->response->withJson(array("ok"=>"Registro eliminado."));
			}catch(Exception $e){
				echo '{"error":{"text":' . $e->getMessage() . '}}';
			}
		});
	});
	
?>