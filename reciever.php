
<?php
header("Content-type:application/json;charset=utf-8");
$link= mysqli_connect("localhost","root","");

if(!$link){
    exit('数据库连接失败');
}

mysqli_set_charset($link,'utf8');

mysqli_select_db($link,'test');

$sql = "SELECT * FROM `content` ";

$obj = mysqli_query($link,$sql);


while ($rows = mysqli_fetch_assoc($obj)){
   $info[] = $rows;
}


echo json_encode($info);
