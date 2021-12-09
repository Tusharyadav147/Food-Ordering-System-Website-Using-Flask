function fun1(){
    $("#btn1").css("display", 'none');
    $("#admin").css('border-bottom',"5px solid purple");
    $("#user").css('border-bottom',"none");
    $('#admin_form').css("display", 'block');
    $('#user_form').css("display", 'none');
}
function fun2(){
    $("#btn1").css("display", 'block');
    $("#user").css('border-bottom',"5px solid purple");
    $("#admin").css('border-bottom',"none");
    $('#admin_form').css("display", 'none');
    $('#user_form').css("display", 'block');
}


function fun3(){
    $('#alert').removeClass("show");
    $('#alert').removeClass("showAlert");
    $('#alert').addClass("hide");
}
