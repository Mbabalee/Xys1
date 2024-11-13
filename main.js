var menubtn = document.getElementById("menubtn");
var ex = document.getElementById("ex")

menubtn.addEventListener("click",function(){
var dropdown = document.getElementById("dropdwn")
dropdown.classList.toggle("show")
menubtn.style.display = "none"
ex.style.opacity = 100
ex.style.display = "block"


})

ex.addEventListener("click",function(){
    var dropdown = document.getElementById("dropdwn")
    dropdown.classList.toggle("show")
    menubtn.style.display = "block"
    ex.style.opacity = 0
    ex.style.display = "none"

    })

var log = document.getElementById("log")
var reg = document.getElementById("reg")

var form = document.getElementById("forms")
var lg = document.getElementById("lgbx")
var rep = document.getElementById("regbx")



var ind = document.getElementById("ind")


log.addEventListener("click",function(){
 rep.style.display = "none"
 lg.style.display = "flex"
 ind.style.translate = "50px"
})
reg.addEventListener('click',function(){
 lg.style.display = "none"
 rep.style.display = "flex"
 ind.style.translate = "-36px"

});



