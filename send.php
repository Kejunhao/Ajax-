<?php
$username = $_GET["username"]; 
$con = $_GET["con"];

header("Content-type:application/json;charset=utf-8");
$link= mysqli_connect("localhost","root","");

if(!$link){
    exit('数据库连接失败');
}

mysqli_set_charset($link,'utf8');
mysqli_select_db($link,'test');


$sql ="INSERT INTO  `test`.`content` (
`receiver` ,
`con`
)
VALUES (
'$username',  '$con'
);
";

$obj = mysqli_query($link,$sql);




echo $username;
echo $con;