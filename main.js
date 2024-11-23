var menubtn = document.getElementById("menubtn");
var ex = document.getElementById("ex")

menubtn.addEventListener("click",function(){
var dropdown = document.getElementById("dropdwn")
dropdown.classList.toggle("show")
menubtn.style.display = "none"
ex.style.display = "block"


})

ex.addEventListener("click",function(){
    var dropdown = document.getElementById("dropdwn")
    dropdown.classList.toggle("show")
    menubtn.style.display = "block"
    ex.style.display = "none"

    })
    
 


