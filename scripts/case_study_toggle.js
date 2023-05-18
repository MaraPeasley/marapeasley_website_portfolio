function myFunction() {
    var x = document.getElementById("firstCaseStudy").src;
    if (x.innerHTML === "images/case_study_card_graphic.png") {
        x.innerHTML = "images/case_study_description.svg";
    } else {
        x.innerHTML = "images/case_study_card_graphic.png";
    }
}