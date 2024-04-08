document.querySelector(".heading1").addEventListener("click", funone);

var des=document.querySelector(".intro");

function funone(){
    if(des.style.display=="none"){
        des.style.display="block";
        des3.style.display="none";
        des1.style.display="none";
        des2.style.display="none";
    }
    else{
        des.style.display="none";
    }
}
document.querySelector(".heading2").addEventListener("click", funtwo);

var des1=document.querySelector(".value");

function funtwo(){
    if(des1.style.display=="none"){
        des1.style.display="block";
        des.style.display="none";
        des3.style.display="none";
        des2.style.display="none";
    }
    else{
        des1.style.display="none";
    }
}
document.querySelector(".heading3").addEventListener("click", funthree);

var des2=document.querySelector(".brand");

function funthree(){
    if(des2.style.display=="none"){
        des2.style.display="block";
        des.style.display="none";
        des1.style.display="none";
        des3.style.display="none";

    }
    else{
        des2.style.display="none";
    }
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

document.querySelector(".heading4").addEventListener("click", funfour);

var des3=document.querySelector(".recog");

function funfour(){
    if(des3.style.display=="none"){
        des3.style.display="block";
        des.style.display="none";
        des1.style.display="none";
        des2.style.display="none";

    }
    else{
        des3.style.display="none";
    }
}