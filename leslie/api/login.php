<?php
	$phone = isset($_GET["username"])?$_GET["username"]:null;
	$Password = isset($_GET["usePassword"])?$_GET["usePassword"]:null;
	$register = isset($_GET["register"])?$_GET["register"]:false;
	$servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = 'object';
    $conn = new mysqli($servername, $username, $password, $dbname);
    if ($conn->connect_error) {
        var_dump($conn->connect_error);
    }
    $conn->set_charset('utf8');
    $res = $conn->query('select * from usename where phone="'.$phone.'"');
    if($res->num_rows > 0){
//      echo "登录成功";

    }else{
    	echo "账户密码有误";
    }
    














?>