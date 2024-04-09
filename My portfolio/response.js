var sidemeu = document.getElementById("sidemenu");
function openmenu(){
    sidemeu.style.right = "0";
}
function closemenu(){
    sidemeu.style.right ="-200px";   
} 

var theme=document.getElementById("theme");
theme.onclick=function(){
    document.body.classList.toggle("white-theme");
}
