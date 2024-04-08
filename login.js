
document.querySelector(".signup").addEventListener("click",funone);

function funone(){
    document.querySelector("h2").innerHTML="Sign Up";
    document.getElementById("fname").innerHTML="Gmail";
    document.getElementById("pas").innerHTML="Enter OTP";
    document.querySelector("BUTTON").innerHTML="Send OTP";
    document.getElementById("pass").style.display="block";
    document.querySelector(".fullname2").style.display="block";
}
document.querySelector(".fp").addEventListener("click",funtwo);

function funtwo(){

    document.querySelector("h2").innerHTML="Generate Password";
    document.getElementById("fname").innerHTML="Gmail";
    document.querySelector(".fullname2").style.display="none";
    document.getElementById("pass").style.display="none";
    document.querySelector("BUTTON").innerHTML="Change Password";
}
var MenuItems=document.getElementById("MenuItems");

MenuItems.style.maxHeight="0px";

function menutoggle(){
    if(MenuItems.style.maxHeight=="0px"){
        MenuItems.style.maxHeight="200px";
    }else{
        MenuItems.style.maxHeight="0px";
    }
}