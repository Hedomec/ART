<?php
    use Psr\Http\Message\ServerRequestInterface as Request;
    use Psr\Http\Message\ResponseInterface as Response;	 
    //Api-Rest: user (Post, get, get(id), patch(id), delete(id))
	$app->group('/user', function(){
        $this->post('', function(Request $req, Response $res){
            try{
                if(isset($_SESSION['IdRol']) && $_SESSION['IdRol'] == 1){
                    $input = $req->getParsedBody();
                    $sql1 = "Select User_Name, Password from user where User_Name = '". $input['User_Name']. "';";
                    $db = getConn();
                    $statement = $db->query($sql1);
                    $userexist = $statement->fetchAll(PDO::FETCH_OBJ);
                    if(count($userexist) > 0){
                        return $this->response->withJson(array("error"=>"Nombre de usuario en uso, por favor use otro"));
                    }else{
                        $sql2 = "Insert into user(Id_Role,User_Name,First_Name,Last_Name,Date_Created,Password) values ('".$input["Id_Role"]."','".$input["User_Name"]."','".$input["First_Name"]."','".$input["Last_Name"]."','".date("Y-m-d")."','".md5($input["Password"])."')";
                        $statement2 = $db->query($sql2);
                        echo json_encode($input);
                        //return $this->response->withJson(array("ok"=>"Usuario registrado correctamente"));
                    }
                }else{
                    return $this->response->withJson(array("error"=>"Acceso negado"));
                }
            }catch(Exception $e){
                echo '{"error":{"text":' . $e->getMessage() . '}}';
            }
        });
        $this->get('',function(Request $req, Response $res){
            try{
                if(isset($_SESSION['IdRol']) && $_SESSION['IdRol'] == 1){
                    $sql = "Select Id_User,Id_Role, User_Name, First_Name, Last_Name, Date_Created from User;";
                    $db = getConn();
                    $statement = $db->query($sql);
                    $data = $statement->fetchAll(PDO::FETCH_OBJ);
                    echo json_encode($data);
                }else{
                    return $this->response->withJson(array("error"=>"Acceso negado"));
                }
            }catch(Exception $e){
                echo '{"error":{"text":' . $e->getMessage() . '}}';
            }
        });
        $this->get('/{id}', function(Request $req, Response $res){
            try{
                $id = $req->getAttribute('id');
                if(isset($_SESSION['IdRol']) && $_SESSION['IdRol'] == 1){
                    $sql = "Select Id_User, User_Name, First_Name, Last_Name, Date_Created from User where Id_User = ".$id.";";
                    $db = getConn();
                    $statement = $db->query($sql);
                    $data = $statement->fetchAll(PDO::FETCH_OBJ);
                    echo json_encode($data[0]);
                }else{
                    return $this->response->withJson(array("error"=>"Acceso negado"));
                }
            }catch(Exception $e){
                echo '{"error":{"text":' . $e->getMessage() . '}}';
            }
        });
             
        $this->patch('/{id}', function (Request $req, Response $res){
            try{
                $id = $req->getAttribute('id');
                $input = $req->getParsedBody();
                if(isset($_SESSION['IdRol']) && $_SESSION['IdRol'] == 1){
                    $sql = "Update user Set Id_Role =".$input["Id_Role"].", User_Name = '".$input["User_Name"]."',First_Name = '".$input["First_Name"]."', Last_Name = '".$input["Last_Name"]."', Date_Created = '".$input["Date_Created"]."', Password = '".md5($input["Password"])."' where user.Id_User = '".$id."';";
                    //echo $sql;
                    $db = getConn();
                    $db->query($sql);
                    echo json_encode($input);
                }else{
                    return $this->response->withJson(array("error"=>"Acceso negado"));
                }
            }catch(Exception $e){
                echo '{"error":{"text":' . $e->getMessage() . '}}';
            }
        });
        $this->delete('/{id}', function (Request $req, Response $res){
            try{
                $id = $req->getAttribute('id');
                if(isset($_SESSION['IdRol']) && $_SESSION['IdRol'] == 1){
                    $sql = "Delete from user where user.Id_User = ".$id.";";
                    $db = getConn();
                    $db->query($sql);
                }else{
                    return $this->response->withJson(array("error"=>"Acceso negado"));
                }
            }catch(Exception $e){
                echo '{"error":{"text":' . $e->getMessage() . '}}';
            }
        });
	});
?>