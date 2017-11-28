<?php 
    use Psr\Http\Message\ServerRequestInterface as Request;
    use Psr\Http\Message\ResponseInterface as Response;
    $app->group('/role', function(){
        $this->get('', function (Request $req, Response $res){
            try{
                if(isset($_SESSION["IdRol"]) && $_SESSION["IdRol"] == 1){
                    $sql = "Select * from role;";
                    $db = getConn();
                    $statement = $db->query($sql);
                    $data = $statement->fetchAll(PDO::FETCH_OBJ);
                    echo json_encode($data);
                }
            }catch(Exception $e){
                echo '{"error":{"text":' . $e->getMessage() . '}}';
            }
        });
    })
?>