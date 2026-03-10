// const
const cardsSlider = document.getElementById("cards");
const cards = document.querySelectorAll(".card");

const leftArrow = document.getElementById("arrow-left");
const rightArrow = document.getElementById("arrow-right");

const scrollPlus = 241;

rightArrow.addEventListener("click", function(){

    if(cardsSlider.scrollLeft + cardsSlider.clientWidth >= cardsSlider.scrollWidth - 5){
        cardsSlider.scrollLeft = 0;
    } else{
        cardsSlider.scrollLeft += scrollPlus;
    }
});

leftArrow.addEventListener("click", function(){
    if(cardsSlider.scrollLeft <= 5){
        cardsSlider.scrollLeft = cardsSlider.scrollWidth;
    } else{
        cardsSlider.scrollLeft -= scrollPlus;
    }
});