"use strict";


// let upperIconLeft = document.querySelector("#highlights .up .icons .left");
// let upperIconRight = document.querySelector("#highlights .up .icons .right");
// let images = document.querySelectorAll(".down .items .control .item img")
// let imageBlock = document.querySelectorAll(".down .items .control .item")
// let controlImage = document.querySelector(".down .items .control")

// upperIconLeft.addEventListener("click", function() {

// })

// // upperIconRight.addEventListener("click", function() {

// //     for (const item of controlImage) {
// //         if(item.className.contains("d-none"){
// //             item.classList.remove("d-none");
// //         } else {
            
// //         }
// //     }

// //     controlImage.children[0].classList.add("d-none");
// //     controlImage.children[4].classList.remove("d-none");



// // })



// function rightSlider() {

//     imageBlock.classList.add("d-none");
//     if (imageBlock.nextElementSibling != null) {
//         imageBlock.nextElementSibling.classList.add("d-none")
//     } else {
//         imageBlock.parentNode.firstElementChild.classList.add("d-none")
//     }
// }

// function leftSlider() {
//     imageBlock.classList.add("d-none");
//     if (imageBlock.previousElementSibling != null) {
//         imageBlock.previousElementSibling.classList.add("d-none")
//     } else {
//         imageBlock.parentNode.lastElementChild.classList.add("d-none")
//     }
// }

// upperIconLeft.addEventListener("click", rightSlider);
// upperIconRight.addEventListener("click", leftSlider);


// upperIconRight.forEach(icon => {

//     icon.children[0].classList.add("d-none");
//     icon.children[4].classList.add("d-none");
    
// });





"use strict";

let upperIconLeft = document.querySelector("#highlights .up .icons .left");
let upperIconRight = document.querySelector("#highlights .up .icons .right");
let images = document.querySelectorAll(".down .items .control .item img")
let imageBlock = document.querySelectorAll(".down .items .control .item")
let controlImage = document.querySelector(".down .items .control")

function rightSlider(element) {
    element.classList.add("d-none");
    if (element.nextElementSibling != null) {
        element.nextElementSibling.classList.remove("d-none")
    } else {
        element.parentNode.firstElementChild.classList.remove("d-none")
    }
}

function leftSlider(element) {
    element.classList.add("d-none");
    if (element.previousElementSibling != null) {
        element.previousElementSibling.classList.remove("d-none")
    } else {
        element.parentNode.lastElementChild.classList.remove("d-none")
    }
}

upperIconLeft.addEventListener("click", function() {
    imageBlock.forEach(function(element) {
        leftSlider(element);
    });
});

upperIconRight.addEventListener("click", function() {
    imageBlock.forEach(function(element) {
        rightSlider(element);
    });
});









document.querySelector("#highlights .up .icons .left").addEventListener("click", slideLeft);
document.querySelector("#highlights .up .icons .right").addEventListener("click", slideRight);







