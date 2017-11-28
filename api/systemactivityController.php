<?php 
    use Psr\Http\Message\ServerRequestInterface as Request;
    use Psr\Http\Message\ResponseInterface as Response;	 

    $app->group('/systemactivity', function(){
		$this->get('', function(Request $req, Response $res){
			try{
                if(isset($_SESSION['IdRol']) && $_SESSION['IdRol'] == 1){
                    $input = $req->getParsedBody();
                    $sql = "Select * from user_log";
                    //Conexion a la base de datos
                    $db = getConn();
                    //Ejecuta la sentencia
                    $statement = $db->query($sql);
                    //Guarda los datos en la varible $data
                    $data = $statement->fetchAll(PDO::FETCH_OBJ);
                    //envia los datos de $data como json para ser usado en el front-end
                    echo json_encode($data);
                }else{
                    return $this->response->withJson(array("error"=>"Acceso negado"));
                }
                
			}catch(Exception $e){
                echo '{"error":"' . $e->getMessage() . '"}';
			}
        });
        $this->get('/getcareer', function(){
			try{
                $sql = "Select * from career;";
                //Conexion a la base de datos
                $db= getConn();
                //Ejecuta la sentencia
                $statement = $db->query($sql);
                //Guarda los datos en la varible $data
                $data = $statement->fetchAll(PDO::FETCH_OBJ);
                //envia los datos de $data como json para ser usado en el front-end
				echo json_encode($data);
			}catch(Exception $e){
				echo '{"error":{"text":' . $e->getMessage() . '}}';
			}
        });
    });
    
    $app->get('/getfile/{id}', function(Request $req, Response $res){
        try {
            //atributo con el cual se identificara el archivo a mostrar
            $id = $req->getAttribute('id');
            //Sql para obtener todos lo archivos que esten asignados al id del reporte
            $sqlfile = "Select * from file where Id_Report = '" . $id . "';";  
            //Conexion a la base de datos              
            $db = getConn();
            //Ejecuta la sentencia
            $statment = $db->query($sqlfile);
            //Guarda los datos en la varible $data
            $data = $statment->fetchAll(PDO::FETCH_OBJ);
            //envia los datos de $data como json para ser usado en el front-end
            echo json_encode($data);
        } catch(PDOException $e){
            echo '{"error":{"text":' . $e->getMessage() . '}}';
        }
    });
    $app->get('/download/{file_name}', function(Request $req, Response $res){
        //atributo que se le pasara en el link
        $filename = $req->getAttribute('file_name');

        //Sql para obtener el nombre original del archivo y no el Md5
        $sql = "Select File_Name from file where File_Md5 = '".$filename."';";
        
        //Conexion a la base de datos
        $db = getConn();

        //ejecuta la sentencia
        $statement = $db->query($sql);

        //Guarda los datos
        $data = $statement->fetchAll(PDO::FETCH_OBJ);

        //Asigna los datos del primer indice de $data a download_name para ser usado despues
        $download_name = $data[0]->File_Name;

        //Determina la ruta del archivo y el archivo
        $file = '../file/' . $filename;

        //Selecciona el modo de ejecucion
        $fh = fopen($file, 'rb');

        //Descarga el archivo
        $stream = new \Slim\Http\Stream($fh);
        return $res->withHeader('Content-Type', 'image/png')
                    ->withHeader('Content-Description', 'File Transfer')
                    ->withHeader('Content-Transfer-Encoding', 'binary')
                    ->withHeader('Content-Disposition', 'attachment; filename="' . basename($download_name) . '"')
                    ->withHeader('Expires', '0')
                    ->withHeader('Cache-Control', 'must-revalidate, post-check=0, pre-check=0')
                    ->withHeader('Pragma', 'public')
                    ->withBody($stream);
    });
?>