
  window.addEventListener('scroll', function () {
        var scrollPosition = window.scrollY;
        var triggerPoint = 1690; // Adjust this value to change when the background should change
        var btn= document.getElementById('hirebutton')
    
        if (scrollPosition > triggerPoint) {
          btn.style.transform='scale(1)'
            document.body.classList.add('changed-background');
            document.box.classlist.add('changed-background1')
        } else {
            document.body.classList.remove('changed-background');
        }
    });
    
    var cont = document.getElementById('contact')
    var hb = document.getElementById('hirebutton')
    
    function alt(){
      cont.style.display
      ='flex'
    }
    function cxl(){
      cont.style.display='none'
    }
    var lst = document.getElementById('ul')
  var mb = document.getElementById('cac')
  
  var its = document.getElementById('intro2')
  var cx1 = document.getElementById('cx1');
  function shw(){
  lst.style.top = '55px'
  its.style.top = '40px'
  mb.style.scale='0'
  cx1.style.scale='1'
  lst.style.zIndex='1'
  lst.style.opacity='100'
  }
  function sh2(){
  lst.style.top = '0'
  its.style.top = '0'
  mb.style.scale='1'
  cx1.style.scale='0'
  lst.style.opacity='0'
  lst.style.zIndex='-1'
  
  }