let menu = document.querySelector("#menu");
let navbar = document.querySelector('.header');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

function fun1(){
    $('#daily-report').css("display", 'block');
    $("#login_table").css('display' , 'none');
    $("#feedback-table").css('display' , 'none');
    $("#about").css('display' , 'none');
    $("#home").css('display', 'none');

}
function fun2(){
    $('#daily-report').css("display", 'none');
    $('#feedback-table').css("display", 'none');
    $("#login_table").css('display' , 'block');
    $("#about").css('display' , 'none');
    $("#home").css('display', 'none');
}
function fun3(){
    $('#daily-report').css("display", 'none');
    $('#feedback-table').css("display", 'none');
    $("#login_table").css('display' , 'none');
    $("#about").css('display' , 'block');
    $("#home").css('display', 'none');
}
function fun4(){
    $('#daily-report').css("display", 'none');
    $('#feedback-table').css("display", 'block');
    $("#login_table").css('display' , 'none');
    $("#about").css('display' , 'none');
    $("#home").css('display', 'none');
}
function fun0(){
    $('#daily-report').css("display", 'none');
    $('#feedback-table').css("display", 'none');
    $("#login_table").css('display' , 'none');
    $("#about").css('display' , 'none');
    $("#home").css('display', 'block');
}

document.querySelector('#close-btn').onclick= () =>{
  document.getElementById("alert").remove("show");
  document.getElementById("alert").remove("showAlert");
  document.getElementById("alert").toggle("hide");
}