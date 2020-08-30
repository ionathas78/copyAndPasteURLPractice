let leftButton = document.getElementById("left-button");
let rightButton = document.getElementById("right-button");
let refreshButton = document.getElementById("refresh-button");
let homeButton = document.getElementById("home-button");
let lockButton = document.getElementById("lock-button");
let addressBar = document.getElementById("address-bar");
let starButton = document.getElementById("star-button");
let optionButton = document.getElementById("option-button");


document.addEventListener("click", event => {
    switch (event.target) {
        case leftButton:
            addressBar.value = "You clicked left-button";
            break;

        case rightButton:
            addressBar.value = "You clicked right-button";
            break;

        case refreshButton:
            addressBar.value = "You clicked refresh-button";
            break;

        case homeButton:
            addressBar.value = "You clicked home-button";
            break;

        case lockButton:
            addressBar.value = "You clicked lock-button";
            break;
            
        case starButton:
            addressBar.value = "You clicked star-button";
            break;

        case optionButton:
            addressBar.value = "You clicked option-button";
            break;
        
        default:
    }
})
