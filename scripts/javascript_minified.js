//Javasripts combined in this minified:
//case_study_toggle.js
//fadeinscroll.js

function myFunction(){var e=document.getElementById("firstCaseStudy").src;"images/case_study_card_graphic.png"===e.innerHTML?e.innerHTML="images/case_study_description.svg":e.innerHTML="images/case_study_card_graphic.png"}let elementsArray=document.querySelectorAll(".tile");function fadeIn(){for(var e=0;e<elementsArray.length;e++){var n=elementsArray[e];n.getBoundingClientRect().top-window.innerHeight+20<0?n.classList.add("inView"):n.classList.remove("inView")}}console.log(elementsArray),window.addEventListener("scroll",fadeIn),fadeIn();