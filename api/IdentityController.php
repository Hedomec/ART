<?php 
use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;	
//Api-Rest: Access (Log-In - Log-Out)
$app->group('/Identity', function(){
    $this->post('/Login', function(Request $req, Response $res){            
        try {
            $input = $req->getParsedBody();
            $sql = "Select Id_User,Id_Role,User_Name,First_Name,Last_Name,Password from user where User_Name = '".
            $input['UserName']."' and Password = '". md5($input['Password'])."';";
            //Inicio de sesion
            $db = getConn();
            $statement = $db->query($sql);
            $data = $statement->fetchAll(PDO::FETCH_OBJ);
            if(count($data) > 0){
                $_SESSION["IdUser"]= $data[0]->Id_User;
                $_SESSION["IdRol"]= $data[0]->Id_Role;
                $_SESSION["First_Name"]= $data[0]->First_Name;
                $_SESSION["Last_Name"]= $data[0]->Last_Name;
                //Log de Inicio de sesion
                $db2 = getConn();
                $now = date("Y-m-d H:i:s");
                $logsql = "Insert into user_log (Id_User, Date_Time,Event) values ('". $_SESSION["IdUser"] ."', '". $now ."','Inicio de sesion')";
                $statement = $db2->query($logsql);
                return $this->response->withJson(array("ok"=>"Acceso autorizado"));
            }else{
                return $this->response->withJson(array("error"=>"Usuario y/o contraseña incorrectos"));
            }
        } catch(Exception $e){
            echo '{"error":"' . $e->getMessage() . '"}';
        }
    });
    $this->get('/GetAppInfo', function(Request $req, Response $res){
        try{
            return $this->response->withJson(array("thisYear"=>2017,"devYear"=>2017,"appName"=>"ART","companyName"=>"UNIR","appVersion"=>"0.1","appEnvironment"=>""));
        }catch(Exception $e){
            echo '{"error":"' . $e->getMessage() . '"}';
        }
    });		
    $this->get('/GetUserInfo', function(Request $req, Response $res){
        try{
            if(isset($_SESSION['IdUser'])){
                $claims = array();
                //Administrador
                if($_SESSION['IdRol']==1){
                    $claims= array("ServicioComunitario","Pasantias","Tesis","Administration");
                }
                //Coordinador
                if($_SESSION['IdRol']==2){
                    $claims = array("ServicioComunitario","Pasantias","Tesis");
                }
                //Trabajador: Servicio Comunitario
                if($_SESSION['IdRol']==3){
                    $claims = array("ServicioComunitario");
                }
                //Trabajador: Pasantias
                if($_SESSION['IdRol']==4){
                    $claims = array("Pasantias");
                }
                //Trabajador: Tesis y Caso Clinico
                if($_SESSION['IdRol']==5){
                    $claims = array("Tesis");
                }
                return $this->response->withJson(array("isAuthenticated"=>true,"name"=>$_SESSION["Last_Name"] .", " .$_SESSION["First_Name"],"claims"=>$claims));
            }else{
                return $this->response->withJson(array("isAuthenticated"=>false,"name"=>"","claims"=>""));
            }
        }catch(Exception $e){
            echo '{"error":"' . $e->getMessage() . '"}';
        }
    });
    $this->post('/LogOff', function(Request $req, Response $res){	
        try{
            session_destroy();
            $db = getConn();
            $now = date("Y-m-d H:i:s");
            $logsql = "Insert into user_log (Id_User, Date_Time,Event) values ('". $_SESSION["IdUser"] ."', '". $now ."','Cierre de sesion')";
            $db->query($logsql);
            return $this->response->withJson(array("ok"=>"Sesion finalizada"));
        }catch(Exception $e){
            echo '{"error":"' . $e->getMessage() . '"}';
        }	            
    });
});
?>