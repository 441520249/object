<?php
	$phone = isset($_GET["phoneNum"])?$_GET["phoneNum"]:null;
	$Password = isset($_GET["setPassword"])?$_GET["setPassword"]:null;
	$register = isset($_GET["register"])?$_GET["register"]:false;
	$servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = 'object';
    $conn = new mysqli($servername, $username, $password, $dbname);
    if ($conn->connect_error) {
        var_dump($conn->connect_error);
    }
//  var_dump("成功")
    $conn->set_charset('utf8');
    $res = $conn->query('select * from usename where phone="'.$phone.'"');
//  $res = $conn->query('select * from student where stuname="'.$uname.'"');
//  var_dump('select * from usename where phone="'.$phone.'"');
    if($res->num_rows > 0){
        echo "该用户名已被注册";
    }else{
        if($register){
            $res = $conn->query('insert into usename (phone,password) values ("'.$phone.'","'.$Password.'")');
//          $res = $conn->query('insert into student (stuname,team,gender) values ("'.$uname.'",'.$team.',"'.$gender.'")');  
//          var_dump('insert into usename (phone,password) values ("'.$phone.'","'.$password.'")');
            if($res){
                echo "插入成功";
            }else{
                echo "插入失败";
            }
        }else{
            echo "该用户名可用";
        }
    }	
?>