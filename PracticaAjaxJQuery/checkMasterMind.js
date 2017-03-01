$(document).ready(inicio);

function inicio(){
    $(".opcions").hide();
    $("#start").click(start);
}
function start (){
    $(".opcions>div").click(clickBolitas);
    $("#crea_password>.opcions").show();
    $("#set_password").click(setPassword);
}

function clickBolitas(){ 
    var color = $(this).attr("color") | 0;
    color = (color+1)%4;
    var nomColor;
    switch(color){
        case 0:
            nomColor= "red";
            break;
        case 1:
            nomColor= "yellow";
            break;
        case 2:
            nomColor= "green";
            break;
        case 3:
            nomColor= "black";
            break;
    }
    //$(this).css("backgroung-color", nomColor);
    $(this).css({"background-color": nomColor});
    $(this).attr("color", color);
}

function setPassword(){
    var op1 = $("#pas1").attr("color");
    var op2 = $("#pas2").attr("color");
    var op3 = $("#pas3").attr("color");
    var op4 = $("#pas4").attr("color");
    $.ajax({
       type: "POST",
       url: "checkMasterMind.php",
       dataType: "json",
       data: {op:"setPassword", "op1": op1, "op2": op2, "op3": op3, "op4": op4},
       success: function (respJSON){
           console.log(respJSON.op1+" "+respJSON.op2);
          $("#crear_password").hide();
          $("#find_password>.opcions").show();
       }
    });
}