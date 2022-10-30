
// BÀI 1 
// ***đầu vào 
// 3 số nguyên 
// *** xử lí
// so sánh 3 số 
// *** đầu ra 
// xuất giá trị 3 số theo thứ tự tăng dần 
// ---------

document.getElementById("btn").onclick= function () {

    var num1 = document.getElementById("inputNum1").value * 1;
    var num2 = document.getElementById("inputNum2").value * 1;
    var num3 = document.getElementById("inputNum3").value * 1;
    
    var min = "";
    var avg = "";
    var max = "";
    var content = "";
    
    if( num1 > num2 ) {
        if (num2>num3){
            max = num1;
            avg = num2;
            min = num3;
        }else if (num1 > num3) {
            max = num1;
            avg = num3;
            min = num2;
        } else {
            max = num3;
            avg = num1;
            min = num2;
        }
    } else {
        if (num2 < num3) {
            max = num3;
            avg = num2;
            min = num1;
        } else if (num1 < num3) {
            max = num2;
            avg = num3;
            min = num1;
    
        } else {
            max = num2;
            avg = num1;
            min = num3;
        }
    }
    document.getElementById("sapxep").innerHTML = content;
    content = min + " " + avg + " " + max;
        console.log(num1, num2, num3, min, avg, max);
        document.getElementById("sapxep").innerHTML = content;
    }
    
    // BAI 2 
    // 
    document.getElementById("btnHello").onclick = function (){
        var nguoisudung = document.getElementById("who").value * 1;
        var content = "";
        switch (nguoisudung) {
            case 1:
                content = "Xin chào Bố!";
                break;
            case 2:
                content = "Xin chào Mẹ!";
                break;
            case 3:
                content = "Xin chào Anh Trai!";
                break;
            case 4:
                content = "Xin chào Em Gái!";
                break;
        }
    
    document.getElementById("chao").innerHTML = content;
    }   
    
    // BÀI 3:
    document.getElementById("btnDem").onclick= function(){
        var soThu1 = document.getElementById("soThu1").value * 1;
        var soThu2 = document.getElementById("soThu2").value * 1;   
        var soThu3 = document.getElementById("soThu3").value * 1;
        var sochan = 0;
        var sole = 0;
        var phanloai = "";
        soThu1 % 2 == 0 ? sochan = sochan + 1 : sole = sole + 1;
        soThu2 % 2 == 0 ? sochan = sochan + 1 : sole = sole + 1;
        soThu3 % 2 == 0 ? sochan = sochan + 1 : sole = sole + 1;
    
        phanloai = "có " + sochan + " số chẳn và " + sole + " số lẻ";
        document.getElementById("phanloai").innerHTML = phanloai;
    }
    
    // bài 4:
    
    document.getElementById("btncanh").onclick = function () {
 
    
    var a = document.getElementById("a").value * 1;
    var b = document.getElementById("b").value * 1;
    var c = document.getElementById("c").value * 1;

    var d = "";

    if ((a + b > c) && (a + c > b) && (c + b > a)) {
        if(( a == b && b == c && a == c )){
            d= "Hình tam giác đều";
        }
        else if( a == b || b == c || a == c){
            d = "hình tam giác cân";
        }
        else if((a * a + b * b == c * c) || (a * a + c * c == b * b) || (b * b + c * c == a * a)){
            d = "hình tam giác vuông";
        }
        else{
            d = "tam giác thường";
        }
    }
        else{
            d = "nhập sai";
        }   
        
        document.getElementById("phanloai1").innerHTML = d;
    }

