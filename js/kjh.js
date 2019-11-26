

var app = new Vue({

    el: "#app",
    data: {
        flag: false
    },
    methods: {
        //第一阶段。将信息发送到卓面
        aaa: function () {
            axios.get("reciever.php").then(function (response) {
                div1 = document.getElementById("div1") 

                div1.innerHTML = "";
                str = response.data;
                var i = 0;
                for (i; i < str.length; i++) {
                    document.getElementById('div1').innerHTML += "<transition><div v-cloak v-show='flag'> <span class='badge'>" + str[i].receiver + "：" + "</span>" + "<span id='input-size'>" + str[i].con + "</span></div></transition>" + "<br><br>";
                }
                // console.log(str);
                div1.scrollTop = div1.scrollHeight;

            })
        },
        //第二阶段，发送信息
        bbb: function () {
            var inp1 = document.getElementById("input1");
            var inp2 = document.getElementById("input2");
            var username = inp1.value;
            var con = inp2.value;
            inp2.value = "";
            axios.get("send.php?username=" + username + "&con=" + con).then(function (response) { })
        },
        ccc(){
            alert("ss");
        }
    },
    mounted() {
        this.flag = true;
    },
})





app.aaa()
window.onload = function () {
    setInterval("app.aaa()", 1000);
}



document.getElementById("button1").onclick = function () {

    var div1 = document.getElementById("div1");

    
    app.bbb();

}




// var ele = document.getElementById('div1');
// ele.scrollTop = ele.scrollHeight;


//     var xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = function(){
//         if(xhr.readyState==4) {

//         }
//     }
//    xhr.open("GET","send.php?username="+username+"&con="+con,true);

//     xhr.send();

// }



//axios.get("send.php?username="+username+"&con="+con).then(function(response){})




