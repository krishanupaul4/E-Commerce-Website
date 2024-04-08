var MenuItems=document.getElementById("MenuItems");

MenuItems.style.maxHeight="0px";

function menutoggle(){
    if(MenuItems.style.maxHeight=="0px"){
        MenuItems.style.maxHeight="200px";
    }else{
        MenuItems.style.maxHeight="0px";
    }
}

var c=document.querySelector("i");

c.addEventListener("click",funcart);

var cont=document.querySelector(".cartspace");



var sum=0;

function funcart(){
   
    if(document.querySelector(".cartspace").style.height=="0px"){
        document.querySelector(".cartspace").style.height="200px";
        document.querySelector(".cartspace p").style.display="block";
        document.querySelector(".head").style.display="block";

    }
    else{
        document.querySelector(".cartspace").style.height="0px";
        document.querySelector(".cartspace p").style.display="none";
        document.querySelector(".head").style.display="none";
    }
}

document.querySelector(".p1btn").addEventListener("click",callboth1);
document.querySelector(".p2btn").addEventListener("click",callboth2);
document.querySelector(".p3btn").addEventListener("click",callboth3);
document.querySelector(".p4btn").addEventListener("click",callboth4);
document.querySelector(".p5btn").addEventListener("click",callboth5);
document.querySelector(".p6btn").addEventListener("click",callboth6);
document.querySelector(".p7btn").addEventListener("click",callboth7);
document.querySelector(".p8btn").addEventListener("click",callboth8);
document.querySelector(".p9btn").addEventListener("click",callboth9);



function callboth1(){
    funone();
    funtwo();
}



function funone(){
    var v=document.querySelector("span");
    var t=parseInt(v.textContent);
    document.querySelector("span").innerHTML=t+1;
    alert("Item added to cart")
  
}

function funtwo(){
    var newele = document.createElement("p");
    newele.textContent="watch 1 ------------- Price: "+"$200"; 
    var z=document.getElementById('total');
    z.innerHTML="$"+(sum+=200);
    cont.insertBefore(newele,cont.firstChild);
}

function callboth2(){
    funone();
    funthree();
}

function funthree(){
    var newele2 = document.createElement("p");
    newele2.textContent="watch 2 ------------- Price: "+"$100"; 
    cont.insertBefore(newele2,cont.firstChild);

    var z=document.getElementById('total');
    z.innerHTML="$"+(sum+=100);
}

function callboth3(){
    funone();
    funfour();
}

function funfour(){
    var newele2 = document.createElement("p");
    newele2.textContent="watch 3 ------------- Price: "+"$200"; 
    cont.insertBefore(newele2,cont.firstChild);

    var z=document.getElementById('total');
    z.innerHTML="$"+(sum+=200);
}

function callboth4(){
    funone();
    funfive();
}

function funfive(){
    var newele2 = document.createElement("p");
    newele2.textContent="shoe 1 ------------- Price: "+"$3000"; 
    cont.insertBefore(newele2,cont.firstChild);

    var z=document.getElementById('total');
    z.innerHTML="$"+(sum+=3000);
}

function callboth5(){
    funone();
    funsix();
}

function funsix(){
    var newele2 = document.createElement("p");
    newele2.textContent="shoe 2 ------------- Price: "+"$1200"; 
    cont.insertBefore(newele2,cont.firstChild);

    var z=document.getElementById('total');
    z.innerHTML="$"+(sum+=1200);
}

function callboth6(){
    funone();
    funseven();
}

function funseven(){
    var newele2 = document.createElement("p");
    newele2.textContent="Shoe 3 ------------- Price: "+"$1700"; 
    cont.insertBefore(newele2,cont.firstChild);

    var z=document.getElementById('total');
    z.innerHTML="$"+(sum+=1200);
}

function callboth7(){
    funone();
    funeight();
}

function funeight(){
    var newele2 = document.createElement("p");
    newele2.textContent="Tshirt 1 ------------- Price: "+"$1000"; 
    cont.insertBefore(newele2,cont.firstChild);

    var z=document.getElementById('total');
    z.innerHTML="$"+(sum+=1000);
}

function callboth8(){
    funone();
    funnine();
}

function funnine(){
    var newele2 = document.createElement("p");
    newele2.textContent="Tshirt 2 ------------- Price: "+"$700"; 
    cont.insertBefore(newele2,cont.firstChild);

    var z=document.getElementById('total');
    z.innerHTML="$"+(sum+=700);
}

function callboth9(){
    funone();
    funten();
}

function funten(){
    var newele2 = document.createElement("p");
    newele2.textContent="Tshirt 3 ------------- Price: "+"$900"; 
    cont.insertBefore(newele2,cont.firstChild);

    var z=document.getElementById('total');
    z.innerHTML="$"+(sum+=900);
}

