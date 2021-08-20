document.getElementById("mobile").addEventListener("click", showMobileMenu);

function showMobileMenu(){
    var pageLinks = document.getElementById("links");
    if(pageLinks.style.display==="none"){
        pageLinks.style.display = "block"
    }
    else{
        pageLinks.style.display = "none";
    }
}