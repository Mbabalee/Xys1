
   var i = 0
  var imgs = [
  'g1.jpg','g3.jpg','g2.jpg'
  ]
  
function shw() {
  document.slide.src = imgs[i]
if (i < imgs.length-1) {
  i++
} else {
  i = 0
}
}
 setInterval(shw,3000)
 
 var e = 0
 var imgs1 = []
   imgs1[0]='j1.jpg'
   imgs1[1]='j3.jpg'
   imgs1[2]='j2.jpg'
   imgs1[3]='j0.jpg'
   imgs1[4]='j11.jpg'
   imgs1[5]='j9.jpg'
   imgs1[6]='j4.jpg'

 
 function shw1() {
   document.slide1.src = imgs1[e]
   if (e < imgs1.length-1) {
     e++
   } else {
     e = 0
   }
 }
  setInterval(shw1,3000)
