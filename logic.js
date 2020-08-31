let pages = [];
let currentPage = null;
let pageIndex = -1;
let currentIndex = -1;
let initialPage = window.location.pathname;

let leftButton = document.getElementById("left-button");
let rightButton = document.getElementById("right-button");
let refreshButton = document.getElementById("refresh-button");
let homeButton = document.getElementById("home-button");
let lockButton = document.getElementById("lock-button");
let addressBar = document.getElementById("address-bar");
let starButton = document.getElementById("star-button");
let optionButton = document.getElementById("option-button");
let contentArticle = document.getElementById("content-article");


setPage(setInitialPage());


/*  
    -------------------------------------------------------------------------------------------
            Functions
    -------------------------------------------------------------------------------------------
*/

function setPage(pageToSet) {
    if (currentIndex < pageIndex) {
        for (let i = pageIndex; i > currentIndex; i--) {
            pages.pop();
        }
    }

    pageIndex++;
    currentIndex = pageIndex;
    pages.push(pageToSet);
    
    while (contentArticle.lastChild) {
        contentArticle.removeChild(contentArticle.lastChild);
    }
    contentArticle.appendChild(pageToSet);
}

function lastPage() {
    if (currentIndex > 0) {
        setPage(pages[currentIndex - 1]);
    }
}

function nextPage() {
    if (currentIndex < pageIndex) {
        setPage(pages[currentIndex + 1]);
    }
}

function setTestPage() {
    currentPage = document.createElement("div");
    currentPage.textContent = "Testing 1 2 3";
}

function setInitialPage() {
    let pCount = 8;
    currentPage = document.createElement("div");
    pTags = [];
    for (let i = 0; i < pCount; i++) {
        pTags.push(document.createElement("p"));
    }
    pTags[0].textContent = "URL stands for Uniform Resource Locator. It looks like this: www.puppydogs.com. " +
                            "A URL is like an address that tells your browser where to find the web page you want.";
    pTags[1].textContent = "A full URL includes a prefix before the address called the protocol, like http://www.kitty.cats.be. " +
                            "This tells your browser how to read the file at the indicated address.";
    pTags[2].textContent = "HTTP means HyperText Transfer Protocol, but it's not the only one you'll find on the web. " +
                            "FTP stands for File Transfer Protocol, like ftp://www.bunnyrabbits.net. " +
                            "You often use FTP to connect to file servers, directories where programs and data are stored.";
    pTags[3].textContent = "The part of the address after the 'www' at the beginning is called the 'domain'. In www.dragonpictures.com, " +
                            "the domain is dragonpictures.com.";
    pTags[4].textContent = "A web address doesn't have to start with 'www', either. mail.hissingsnakes.io is another valid web address. " +
                            "Since it starts with 'mail', it probably goes to the domain's mail server.";
    pTags[5].textContent = "If a web address has a slash ('/') in it, like this: https://my.swordpage.net/images/01, that usually means it goes " +
                            "somewhere other than the website's main page. Unless it says 'index' after the slash. That's typically the same as the main page.";
    pTags[6].textContent = "Web addresses can't have spaces in them. They can, however, have dashes or underscores: http://scariest-page_ever.com is a valid web address.";
    pTags[7].textContent = "Some web addresses have other characters at the end, like question marks (?) and percent signs (%). These are " +
                            "usually called queries: http://www.mypictures.net/gallery?search_term=dragon%type=jpg.";

    for (let j = 0; j < pCount; j++) {
        currentPage.appendChild(pTags[j]);
    }
    return currentPage;
}


/*  
    -------------------------------------------------------------------------------------------
            Events
    -------------------------------------------------------------------------------------------
*/

document.addEventListener("click", event => {
    switch (event.target) {
        case leftButton:
            //  addressBar.value = "You clicked left-button";
            lastPage();
            break;

        case rightButton:
            //  addressBar.value = "You clicked right-button";
            nextPage();
            break;

        case refreshButton:
            //  addressBar.value = "You clicked refresh-button";
            setPage(pages[currentIndex]);
            break;

        case homeButton:
            //  addressBar.value = "You clicked home-button";
            setPage(setInitialPage());
            break;

        case lockButton:
            //  addressBar.value = "You clicked lock-button";
            if (lockButton.textContent = "🔒") {
                lockButton.textContent = "🔓";
            } else if (lockButton.textContent = "🔓") {
                lockButton.textContent = "🔒";
            }
            break;

        case starButton:
            //  addressBar.value = "You clicked star-button";
            if (starButton.textContent = "☆") {
                starButton.textContent = "★";
            } else if (starButton.textContent = "★") {
                starButton.textContent = "☆";
            }
            break;

        case optionButton:
            addressBar.value = "You clicked option-button";
            break;
        
        default:
    }
})

addressBar.addEventListener("paste", event => {
    let pasteText = (event.clipboardData || window.clipboardData).getData('text');
    switch (pasteText.toLowerCase()) {
        case "https://www.puppydogs.com":
            break;
        case "www.kittycats.be":
            break;
        case "http://www.bunnyrabbits.net":
            break;
        case "mail.hissingsnakes.io":
            break;
        case "https://maps.dragonpictures.com/index":
            break;
        case "my.swordpage.net":
            break;
        case "http://scariest-page-ever.com":
            break;
        case "http://www.mypictures.net/gallery/cool_robot_pix/01":
            break;
        default:
    }
})
