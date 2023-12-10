"use strict";

const radio1 = document.querySelector("#r1");
const radio2 = document.querySelector("#r2");
const radio3 = document.querySelector("#r3");
const zdjecie1 = document.querySelector("#zdjecie1");
const zdjecie2 = document.querySelector("#zdjecie2");
const zdjecie3 = document.querySelector("#zdjecie3");
const baner1 = document.querySelector("#baner1");
const baner2 = document.querySelector("#baner2");
const baner3 = document.querySelector("#baner3");

if(radio1.checked){baner1.classList.remove("hidden");
baner2.classList.add("hidden");
baner3.classList.add("hidden");
};


radio1.addEventListener("change",() => {
if (radio1.checked) {baner1.classList.remove("hidden");
baner2.classList.add("hidden");
baner3.classList.add("hidden");
};}
);



radio2.addEventListener("change",() => {
    if (radio2.checked) {baner2.classList.remove("hidden");
    baner1.classList.add("hidden");
    baner3.classList.add("hidden");
};}
    );
      
     
radio3.addEventListener("change",() => {
        if (radio3.checked) {baner3.classList.remove("hidden");
        baner1.classList.add("hidden");
        baner2.classList.add("hidden");};}
        );
        
let currentBaner = 0;
const baners = document.querySelectorAll(".b_all");
const totalBaners = baners.length;
let currentRadio = 0;
const radios = document.querySelectorAll(".slider_radio_all");
const totalRadios= radios.length;

const eventChange = () => {
    for (let i=0; i<radios.length; i++) {
         radios[i].addEventListener("change",()=> {radios[i].checked;
        currentRadio = i;
    showSlide();})}};

eventChange();


const showSlide = () => {
    for (let i =0; i<baners.length; i++){
        baners[i].style.display = "none";
        radios[i].checked = false;
    }

    currentBaner = (currentBaner+1) % totalBaners;
    baners[currentBaner].style.display = "block";
    radios[currentBaner].checked = true;

};

setInterval(showSlide, 3000);
