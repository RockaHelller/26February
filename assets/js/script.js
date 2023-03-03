"use strict"



// let menus = document.querySelectorAll(".headers .item");
// let contents = document.querySelectorAll(".contents .item");
// let arrows = document.querySelectorAll(".headers i")
// menus.forEach(menu => {
//     menu.addEventListener("click", function(e) {
//         document.querySelector(".active-menu").classList.remove("active-menu");
//         this.classList.add("active-menu");

//         arrows.forEach(arrow => {
//             if (arrow.parentNode.classList.contains("active-menu")) {
//                 arrow.classList.remove("d-none")
//             } else{
//                 arrow.classList.add("d-none")
//             }
//         });


//         contents.forEach(content => {
//             if (this.getAttribute("data-id") == content.getAttribute("data-id")) {
//                 content.classList.remove("d-none");
//             } else {
//                 content.classList.add("d-none");
//             }
//         });

//     });
// });




let leftIcon = document.querySelector(".slider .left");
let rightIcon = document.querySelector(".slider .right");
let BottomIcons = document.querySelectorAll(".slider .slider-ft i");
let activeImage = document.querySelectorAll(".image img")

function rightSlider() {

    let activeImage = document.querySelector(".active-img")
    activeImage.classList.remove("active-img");
    if (activeImage.nextElementSibling != null) {
        activeImage.nextElementSibling.classList.add("active-img")
    } else {
        activeImage.parentNode.firstElementChild.classList.add("active-img")
    }
}

function leftSlider() {
    let activeImage = document.querySelector(".active-img")
    activeImage.classList.remove("active-img");
    if (activeImage.previousElementSibling != null) {
        activeImage.previousElementSibling.classList.add("active-img")
    } else {
        activeImage.parentNode.lastElementChild.classList.add("active-img")
    }
}






BottomIcons.forEach(icon => {
    icon.addEventListener("click", function (e) {

        activeImage.forEach(content => {
            if (this.getAttribute("data-id") == content.getAttribute("data-id")) {
                content.classList.add("active-img");
            } else {
                content.classList.remove("active-img");
            }
        });

    });
});

BottomIcons.forEach(icon => {
    icon.addEventListener("mouseover", function (e) {

        activeImage.forEach(content => {
            if (this.getAttribute("data-id") == content.getAttribute("data-id")) {
                content.classList.add("active-img");
            } else {
                content.classList.remove("active-img");
            }
        });

    });
});

rightIcon.addEventListener("click", rightSlider);
leftIcon.addEventListener("click", leftSlider);


// setInterval(rightSlider, 1000)






