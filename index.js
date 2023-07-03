// Your code here
// let dodger = document.querySelector("dodger");
// function moveDodgerLeft() {
//     dodger.style.left = dodger.style.left - 10
// }

// document.addEventListener("keydown", (event) => {
//     if (event.key === "a") {
//         moveDodgerLeft();
//     }
// });


// let dodger = document.getElementById("dodger");
// function moveDodgerLeft() {
//     let left = dodger.style.left
//     left = parseInt(left)

//     function moveDodgerLeft() {
//         let newPosition = dodger.style.left;
//         newPosition = parseInt(newPosition)

//         if(left > 0) {
//             return newPosition(left)
//         } else {
//             return newPosition = left
//         }
        
//     }

// }

// dodger = document.getElementById("dodger");
// function moveDodgerRight() {
//     let left = dodger.style.left;
//     left = parseInt(left)

//     moveDodgerRight()
//     let newPosition = dodger.style.left
//     newPosition = parseInt(newPosition)

//     if(left < 360) {
//         return newPosition(left)
//     } else {
//         return newPosition = left
//     }

// }


// const dodger = document.querySelector(".dodge");
// if(dodger) {
// function moveDodgerLeft() {
//     dodger.style.left = dodger.style.left - 10
// }

// }

// document.addEventListener("keydown", (event) => {
//     if(event.key === "a") {
//         moveDodgerLeft()
//     }
// });

function moveDodgerLeft() {
    const dodger = document.getElementById("dodger");
    const currentLeft = parseInt(dodger.style.left) || 0;
    const newLeft = currentLeft - 10;
    
    dodger.style.left = `${newLeft}px`;
}

function moveDodgerRight() {
    const dodger = document.getElementById("dodger");
    const currentLeft = parseInt(dodger.style.left) || 0;
    const newLeft = currentLeft + 10

    dodger.style.left = `${newLeft}px`;
    
}