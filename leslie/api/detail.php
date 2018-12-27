<?php
        $servername = "localhost";
        $username = "root";
        $password = "";
        $dbname = 'object';
        // 创建连接
        $conn = new mysqli($servername, $username, $password, $dbname);
        // 检测连接
        if ($conn->connect_error) {
            die("连接失败: " . $conn->connect_error);
        } 
        //查询前设置编码，防止输出乱码
        $conn->set_charset('utf8');
//      echo "连接成功";
		
		$gid = isset($_GET["gid"])? $_GET["gid"]: 5;//先问有没qty，获取qty或者5条
		//编写sql语句	
    //获取查询结果集
//  $result = $conn->query($sql);
	$result = $conn->query('select * from goodslist where id="'.$gid.'"');
    //使用查询结果集
    //得到数组
    $row = $result->fetch_all(MYSQLI_ASSOC);

    //释放查询结果集，避免资源浪费
    $result->close();

    //把结果输出到前台
    echo json_encode($row);

    // 关闭数据库，避免资源浪费
    $conn->close();	
?>