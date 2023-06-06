//Minified version of fadeinscroll.js

let elementsArray=document.querySelectorAll(".tile");function fadeIn(){for(var e=0;e<elementsArray.length;e++){var n=elementsArray[e];n.getBoundingClientRect().top-window.innerHeight+20<0?n.classList.add("inView"):n.classList.remove("inView")}}console.log(elementsArray),window.addEventListener("scroll",fadeIn),fadeIn();