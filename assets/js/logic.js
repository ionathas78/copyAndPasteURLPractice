let pages = [];
let addresses = [];
let currentPage = null;
let pageIndex = -1;
let currentIndex = -1;
let initialPage = window.location.pathname;
let isUpdating = false;

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
            addresses.pop()
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
        currentIndex--;
        while (contentArticle.lastChild) {
            contentArticle.removeChild(contentArticle.lastChild);
        }
        contentArticle.appendChild(pages[currentIndex]);

        isUpdating = true;
            addressBar.value = addresses[currentIndex];
        isUpdating = false;
    }
}

function nextPage() {
    if (currentIndex < pageIndex) {
        currentIndex++;
        while (contentArticle.lastChild) {
            contentArticle.removeChild(contentArticle.lastChild);
        }
        contentArticle.appendChild(pages[currentIndex]);

        isUpdating = true;
            addressBar.value = addresses[currentIndex];
        isUpdating = false;
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

    addresses.push("https://github.com");

    for (let i = 0; i < pCount; i++) {
        pTags.push(document.createElement("p"));
    }
    pTags[0].innerHTML = "URL stands for Uniform Resource Locator. It looks like this: <span class='link-text'>www.puppydogs.com</span>. " +
                            "A URL is like an address that tells your browser where to find the web page you want.";
    pTags[1].innerHTML = "A full URL includes a prefix before the address called the protocol, like <span class='link-text'>http://www.kitty.cats.be</span>. " +
                            "This tells your browser how to read the file at the indicated address.";
    pTags[2].innerHTML = "HTTP means HyperText Transfer Protocol, but it's not the only one you'll find on the web. " +
                            "FTP stands for File Transfer Protocol, like <span class='link-text'>ftp://www.bunnyrabbits.net</span>. " +
                            "You often use FTP to connect to file servers, directories where programs and data are stored.";
    pTags[3].innerHTML = "The part of the address after the 'www' at the beginning is called the 'domain'. In <span class='link-text'>www.dragonpictures.com</span>, " +
                            "the domain is dragonpictures.com.";
    pTags[4].innerHTML = "A web address doesn't have to start with 'www', either. <span class='link-text'>mail.hissingsnakes.io</span> is another valid web address. " +
                            "Since it starts with 'mail', it probably goes to the domain's mail server.";
    pTags[5].innerHTML = "If a web address has a slash ('/') in it, like this: <span class='link-text'>https://my.swordpage.net/images/01</span>, that usually means it goes " +
                            "somewhere other than the website's main page. Unless it says 'index' after the slash. That's typically the same as the main page.";
    pTags[6].innerHTML = "Web addresses can't have spaces in them. They can, however, have dashes or underscores: <span class='link-text'>http://scariest-page_ever.com</span> is a valid web address.";
    pTags[7].innerHTML = "Some web addresses have other characters at the end, like question marks (?) and percent signs (%). These are " +
                            "usually called queries: <span class='link-text'>http://www.mypictures.net/gallery?search_term=mouse%type=jpg</span>. Queries generally start with a question mark (?) " +
                            "and are separated with percent signs (%). If you remove the query from the URL, it may change the behavior of the web page.";

    for (let j = 0; j < pCount; j++) {
        currentPage.appendChild(pTags[j]);
    }
    return currentPage;
}

function setPuppyPage() {
    let iCount = 4;
    let altText = "Dog picture";
    let headerText = "Dogs";
    currentPage = document.createElement("div");
    let iTags = [];
    for (let i = 0; i < iCount; i++) {
        iTags.push(document.createElement("img"));
    }

    let hTag = document.createElement("h1");
    hTag.textContent = headerText;
    hTag.style.fontSize = "3em";
    hTag.style.textDecoration = "underline";

    iTags[0].setAttribute("src", "assets/images/puppy0.jpeg");
    iTags[0].setAttribute("alt", altText);

    iTags[1].setAttribute("src", "assets/images/puppy1.jpeg");
    iTags[1].setAttribute("alt", altText);

    iTags[2].setAttribute("src", "assets/images/puppy2.jpeg");
    iTags[2].setAttribute("alt", altText);

    iTags[3].setAttribute("src", "assets/images/puppy3.jpeg");
    iTags[3].setAttribute("alt", altText);

    currentPage.appendChild(hTag);
    for (let j = 0; j < iCount; j++) {
        currentPage.appendChild(iTags[j]);
    }
    return currentPage;
}

function setKittyPage() {
    let iCount = 4;
    let altText = "Cat picture";
    let headerText = "Cats";
    currentPage = document.createElement("div");
    iTags = [];
    for (let i = 0; i < iCount; i++) {
        iTags.push(document.createElement("img"));
    }

    let hTag = document.createElement("h1");
    hTag.textContent = headerText;
    hTag.style.fontSize = "3em";
    hTag.style.textDecoration = "underline";

    iTags[0].setAttribute("src", "assets/images/kitty0.jpeg");
    iTags[0].setAttribute("alt", altText);

    iTags[1].setAttribute("src", "assets/images/kitty1.jpeg");
    iTags[1].setAttribute("alt", altText);

    iTags[2].setAttribute("src", "assets/images/kitty2.jpeg");
    iTags[2].setAttribute("alt", altText);

    iTags[3].setAttribute("src", "assets/images/kitty3.jpeg");
    iTags[3].setAttribute("alt", altText);

    currentPage.appendChild(hTag);
    for (let j = 0; j < iCount; j++) {
        currentPage.appendChild(iTags[j]);
    }
    return currentPage;
}

function setBunnyPage() {
    let iCount = 4;
    let altText = "Rabbit picture";
    let headerText = "Rabbits";
    currentPage = document.createElement("div");
    iTags = [];
    for (let i = 0; i < iCount; i++) {
        iTags.push(document.createElement("img"));
    }

    let hTag = document.createElement("h1");
    hTag.textContent = headerText;
    hTag.style.fontSize = "3em";
    hTag.style.textDecoration = "underline";

    iTags[0].setAttribute("src", "assets/images/bunny0.jpeg");
    iTags[0].setAttribute("alt", altText);

    iTags[1].setAttribute("src", "assets/images/bunny1.jpeg");
    iTags[1].setAttribute("alt", altText);

    iTags[2].setAttribute("src", "assets/images/bunny2.jpeg");
    iTags[2].setAttribute("alt", altText);

    iTags[3].setAttribute("src", "assets/images/bunny3.jpeg");
    iTags[3].setAttribute("alt", altText);

    currentPage.appendChild(hTag);
    for (let j = 0; j < iCount; j++) {
        currentPage.appendChild(iTags[j]);
    }
    return currentPage;
}

function setDragonPage() {
    let iCount = 4;
    let altText = "Dragon picture";
    let headerText = "Dragons";
    currentPage = document.createElement("div");
    iTags = [];
    for (let i = 0; i < iCount; i++) {
        iTags.push(document.createElement("img"));
    }

    let hTag = document.createElement("h1");
    hTag.textContent = headerText;
    hTag.style.fontSize = "3em";
    hTag.style.textDecoration = "underline";

    iTags[0].setAttribute("src", "assets/images/dragon0.jpeg");
    iTags[0].setAttribute("alt", altText);

    iTags[1].setAttribute("src", "assets/images/dragon1.jpeg");
    iTags[1].setAttribute("alt", altText);

    iTags[2].setAttribute("src", "assets/images/dragon2.jpeg");
    iTags[2].setAttribute("alt", altText);

    iTags[3].setAttribute("src", "assets/images/dragon3.jpeg");
    iTags[3].setAttribute("alt", altText);

    currentPage.appendChild(hTag);
    for (let j = 0; j < iCount; j++) {
        currentPage.appendChild(iTags[j]);
    }
    return currentPage;
}

function setSnakePage() {
    let iCount = 4;
    let altText = "Snake picture";
    let headerText = "Snakes";
    currentPage = document.createElement("div");
    iTags = [];
    for (let i = 0; i < iCount; i++) {
        iTags.push(document.createElement("img"));
    }

    let hTag = document.createElement("h1");
    hTag.textContent = headerText;
    hTag.style.fontSize = "3em";
    hTag.style.textDecoration = "underline";

    iTags[0].setAttribute("src", "assets/images/snake0.jpeg");
    iTags[0].setAttribute("alt", altText);

    iTags[1].setAttribute("src", "assets/images/snake1.jpeg");
    iTags[1].setAttribute("alt", altText);

    iTags[2].setAttribute("src", "assets/images/snake2.jpeg");
    iTags[2].setAttribute("alt", altText);

    iTags[3].setAttribute("src", "assets/images/snake3.jpeg");
    iTags[3].setAttribute("alt", altText);

    currentPage.appendChild(hTag);
    for (let j = 0; j < iCount; j++) {
        currentPage.appendChild(iTags[j]);
    }
    return currentPage;
}

function setSwordPage() {
    let iCount = 4;
    let altText = "Sword picture";
    let headerText = "Swords";
    currentPage = document.createElement("div");
    iTags = [];
    for (let i = 0; i < iCount; i++) {
        iTags.push(document.createElement("img"));
    }

    let hTag = document.createElement("h1");
    hTag.textContent = headerText;
    hTag.style.fontSize = "3em";
    hTag.style.textDecoration = "underline";

    iTags[0].setAttribute("src", "assets/images/sword0.jpeg");
    iTags[0].setAttribute("alt", altText);

    iTags[1].setAttribute("src", "assets/images/sword1.jpeg");
    iTags[1].setAttribute("alt", altText);

    iTags[2].setAttribute("src", "assets/images/sword2.jpeg");
    iTags[2].setAttribute("alt", altText);

    iTags[3].setAttribute("src", "assets/images/sword3.jpeg");
    iTags[3].setAttribute("alt", altText);

    currentPage.appendChild(hTag);
    for (let j = 0; j < iCount; j++) {
        currentPage.appendChild(iTags[j]);
    }
    return currentPage;
}

function setScaryPage() {
    let iCount = 4;
    let altText = "Scary picture";
    let headerText = "Scares";
    currentPage = document.createElement("div");
    iTags = [];
    for (let i = 0; i < iCount; i++) {
        iTags.push(document.createElement("img"));
    }

    let hTag = document.createElement("h1");
    hTag.textContent = headerText;
    hTag.style.fontSize = "3em";
    hTag.style.textDecoration = "underline";

    iTags[0].setAttribute("src", "assets/images/scary0.jpeg");
    iTags[0].setAttribute("alt", altText);

    iTags[1].setAttribute("src", "assets/images/scary1.jpeg");
    iTags[1].setAttribute("alt", altText);

    iTags[2].setAttribute("src", "assets/images/scary2.jpeg");
    iTags[2].setAttribute("alt", altText);

    iTags[3].setAttribute("src", "assets/images/scary3.jpeg");
    iTags[3].setAttribute("alt", altText);

    currentPage.appendChild(hTag);
    for (let j = 0; j < iCount; j++) {
        currentPage.appendChild(iTags[j]);
    }
    return currentPage;
}

function setMouseJPGPage() {
    let iCount = 4;
    let altText = "Mouse picture";
    let headerText = "Gallery";
    currentPage = document.createElement("div");
    iTags = [];
    for (let i = 0; i < iCount; i++) {
        iTags.push(document.createElement("img"));
    }

    let hTag = document.createElement("h1");
    hTag.textContent = headerText;
    hTag.style.fontSize = "3em";
    hTag.style.textDecoration = "underline";

    iTags[0].setAttribute("src", "assets/images/mouse0.jpeg");
    iTags[0].setAttribute("alt", altText);

    iTags[1].setAttribute("src", "assets/images/mouse1.jpeg");
    iTags[1].setAttribute("alt", altText);

    iTags[2].setAttribute("src", "assets/images/mouse2.jpeg");
    iTags[2].setAttribute("alt", altText);

    iTags[3].setAttribute("src", "assets/images/mouse3.jpeg");
    iTags[3].setAttribute("alt", altText);

    currentPage.appendChild(hTag);
    for (let j = 0; j < iCount; j++) {
        currentPage.appendChild(iTags[j]);
    }
    return currentPage;
}

function setMouseGIFPage() {
    let iCount = 1;
    let altText = "Mouse picture";
    let headerText = "Gallery";
    currentPage = document.createElement("div");
    iTags = [];
    for (let i = 0; i < iCount; i++) {
        iTags.push(document.createElement("img"));
    }

    let hTag = document.createElement("h1");
    hTag.textContent = headerText;
    hTag.style.fontSize = "3em";
    hTag.style.textDecoration = "underline";

    iTags[0].setAttribute("src", "assets/images/mouse4.gif");
    iTags[0].setAttribute("alt", altText);

    currentPage.appendChild(hTag);
    for (let j = 0; j < iCount; j++) {
        currentPage.appendChild(iTags[j]);
    }
    return currentPage;
}

function setMousePage() {
    let iCount = 5;
    let altText = "Mouse picture";
    let headerText = "Gallery";
    currentPage = document.createElement("div");
    iTags = [];
    for (let i = 0; i < iCount; i++) {
        iTags.push(document.createElement("img"));
    }

    let hTag = document.createElement("h1");
    hTag.textContent = headerText;
    hTag.style.fontSize = "3em";
    hTag.style.textDecoration = "underline";

    iTags[0].setAttribute("src", "assets/images/mouse0.jpeg");
    iTags[0].setAttribute("alt", altText);

    iTags[1].setAttribute("src", "assets/images/mouse1.jpeg");
    iTags[1].setAttribute("alt", altText);

    iTags[2].setAttribute("src", "assets/images/mouse4.gif");
    iTags[2].setAttribute("alt", altText);

    iTags[3].setAttribute("src", "assets/images/mouse2.jpeg");
    iTags[3].setAttribute("alt", altText);

    iTags[4].setAttribute("src", "assets/images/mouse3.jpeg");
    iTags[4].setAttribute("alt", altText);

    currentPage.appendChild(hTag);
    for (let j = 0; j < iCount; j++) {
        currentPage.appendChild(iTags[j]);
    }
    return currentPage;
}


function setGalleryJPGPage() {
    let iCount = 8;
    let altText0 = "Mouse picture";
    let altText1 = "Kangaroo picture";
    let headerText = "Gallery";
    currentPage = document.createElement("div");
    iTags = [];
    for (let i = 0; i < iCount; i++) {
        iTags.push(document.createElement("img"));
    }

    let hTag = document.createElement("h1");
    hTag.textContent = headerText;
    hTag.style.fontSize = "3em";
    hTag.style.textDecoration = "underline";

    iTags[0].setAttribute("src", "assets/images/mouse0.jpeg");
    iTags[0].setAttribute("alt", altText0);

    iTags[1].setAttribute("src", "assets/images/kanga0.jpeg");
    iTags[1].setAttribute("alt", altText1);

    iTags[2].setAttribute("src", "assets/images/mouse1.jpeg");
    iTags[2].setAttribute("alt", altText0);

    iTags[3].setAttribute("src", "assets/images/kanga1.jpeg");
    iTags[3].setAttribute("alt", altText1);

    iTags[4].setAttribute("src", "assets/images/mouse2.jpeg");
    iTags[4].setAttribute("alt", altText0);

    iTags[5].setAttribute("src", "assets/images/kanga2.jpeg");
    iTags[5].setAttribute("alt", altText1);

    iTags[6].setAttribute("src", "assets/images/mouse3.jpeg");
    iTags[6].setAttribute("alt", altText0);

    iTags[7].setAttribute("src", "assets/images/kanga3.jpeg");
    iTags[7].setAttribute("alt", altText1);

    currentPage.appendChild(hTag);
    for (let j = 0; j < iCount; j++) {
        currentPage.appendChild(iTags[j]);
    }
    return currentPage;
}

function setGalleryGIFPage() {
    let iCount = 2;
    let altText0 = "Mouse picture";
    let altText1 = "Kangaroo picture";
    let headerText = "Gallery";
    currentPage = document.createElement("div");
    iTags = [];
    for (let i = 0; i < iCount; i++) {
        iTags.push(document.createElement("img"));
    }

    let hTag = document.createElement("h1");
    hTag.textContent = headerText;
    hTag.style.fontSize = "3em";
    hTag.style.textDecoration = "underline";

    iTags[0].setAttribute("src", "assets/images/mouse4.gif");
    iTags[0].setAttribute("alt", altText0);

    iTags[1].setAttribute("src", "assets/images/kanga4.gif");
    iTags[1].setAttribute("alt", altText1);

    currentPage.appendChild(hTag);
    for (let j = 0; j < iCount; j++) {
        currentPage.appendChild(iTags[j]);
    }
    return currentPage;
}

function setGalleryPage() {
    let iCount = 10;
    let altText0 = "Mouse picture";
    let altText1 = "Kangaroo picture";
    let headerText = "Gallery";
    currentPage = document.createElement("div");
    iTags = [];
    for (let i = 0; i < iCount; i++) {
        iTags.push(document.createElement("img"));
    }

    let hTag = document.createElement("h1");
    hTag.textContent = headerText;
    hTag.style.fontSize = "3em";
    hTag.style.textDecoration = "underline";

    iTags[0].setAttribute("src", "assets/images/mouse0.jpeg");
    iTags[0].setAttribute("alt", altText0);

    iTags[1].setAttribute("src", "assets/images/kanga0.jpeg");
    iTags[1].setAttribute("alt", altText1);

    iTags[2].setAttribute("src", "assets/images/mouse1.jpeg");
    iTags[2].setAttribute("alt", altText0);

    iTags[3].setAttribute("src", "assets/images/kanga1.jpeg");
    iTags[3].setAttribute("alt", altText1);

    iTags[4].setAttribute("src", "assets/images/mouse4.gif");
    iTags[4].setAttribute("alt", altText0);

    iTags[5].setAttribute("src", "assets/images/mouse2.jpeg");
    iTags[5].setAttribute("alt", altText0);

    iTags[6].setAttribute("src", "assets/images/kanga2.jpeg");
    iTags[6].setAttribute("alt", altText1);

    iTags[7].setAttribute("src", "assets/images/kanga4.gif");
    iTags[7].setAttribute("alt", altText1);

    iTags[8].setAttribute("src", "assets/images/mouse3.jpeg");
    iTags[8].setAttribute("alt", altText0);

    iTags[9].setAttribute("src", "assets/images/kanga3.jpeg");
    iTags[9].setAttribute("alt", altText1);

    currentPage.appendChild(hTag);
    for (let j = 0; j < iCount; j++) {
        currentPage.appendChild(iTags[j]);
    }
    return currentPage;
}

function setKangaJPGPage() {
    let iCount = 4;
    let altText = "Kangaroo picture";
    let headerText = "Gallery";
    currentPage = document.createElement("div");
    iTags = [];
    for (let i = 0; i < iCount; i++) {
        iTags.push(document.createElement("img"));
    }

    let hTag = document.createElement("h1");
    hTag.textContent = headerText;
    hTag.style.fontSize = "3em";
    hTag.style.textDecoration = "underline";

    iTags[0].setAttribute("src", "assets/images/kanga0.jpeg");
    iTags[0].setAttribute("alt", altText);

    iTags[1].setAttribute("src", "assets/images/kanga1.jpeg");
    iTags[1].setAttribute("alt", altText);

    iTags[2].setAttribute("src", "assets/images/kanga2.jpeg");
    iTags[2].setAttribute("alt", altText);

    iTags[3].setAttribute("src", "assets/images/kanga3.jpeg");
    iTags[3].setAttribute("alt", altText);

    currentPage.appendChild(hTag);
    for (let j = 0; j < iCount; j++) {
        currentPage.appendChild(iTags[j]);
    }
    return currentPage;
}

function setKangaGIFPage() {
    let iCount = 1;
    let altText = "Kangaroo picture";
    let headerText = "Gallery";
    currentPage = document.createElement("div");
    iTags = [];
    for (let i = 0; i < iCount; i++) {
        iTags.push(document.createElement("img"));
    }

    let hTag = document.createElement("h1");
    hTag.textContent = headerText;
    hTag.style.fontSize = "3em";
    hTag.style.textDecoration = "underline";

    iTags[0].setAttribute("src", "assets/images/kanga4.gif");
    iTags[0].setAttribute("alt", altText);

    currentPage.appendChild(hTag);
    for (let j = 0; j < iCount; j++) {
        currentPage.appendChild(iTags[j]);
    }
    return currentPage;
}

function setKangaPage() {
    let iCount = 5;
    let altText = "Kangaroo picture";
    let headerText = "Gallery";
    currentPage = document.createElement("div");
    iTags = [];
    for (let i = 0; i < iCount; i++) {
        iTags.push(document.createElement("img"));
    }

    let hTag = document.createElement("h1");
    hTag.textContent = headerText;
    hTag.style.fontSize = "3em";
    hTag.style.textDecoration = "underline";

    iTags[0].setAttribute("src", "assets/images/kanga0.jpeg");
    iTags[0].setAttribute("alt", altText);

    iTags[1].setAttribute("src", "assets/images/kanga1.jpeg");
    iTags[1].setAttribute("alt", altText);

    iTags[2].setAttribute("src", "assets/images/kanga2.jpeg");
    iTags[2].setAttribute("alt", altText);

    iTags[3].setAttribute("src", "assets/images/kanga4.gif");
    iTags[3].setAttribute("alt", altText);

    iTags[4].setAttribute("src", "assets/images/kanga3.jpeg");
    iTags[4].setAttribute("alt", altText);

    currentPage.appendChild(hTag);
    for (let j = 0; j < iCount; j++) {
        currentPage.appendChild(iTags[j]);
    }
    return currentPage;
}

/*  
    -------------------------------------------------------------------------------------------
            Events
    -------------------------------------------------------------------------------------------
*/

document.addEventListener("click", event => {
    if (isUpdating) {
        return;
    }

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
            isUpdating = true;
                addressBar.value = initialPage;
            isUpdating = false;
            
            setPage(setInitialPage());
            break;

        case lockButton:
            //  addressBar.value = "You clicked lock-button";
            if (lockButton.textContent === "🔒") {
                lockButton.textContent = "🔓";
            } else if (lockButton.textContent === "🔓") {
                lockButton.textContent = "🔒";
            }
            break;

        case starButton:
            //  addressBar.value = "You clicked star-button";
            if (starButton.textContent === "☆") {
                starButton.textContent = "★";
            } else if (starButton.textContent === "★") {
                starButton.textContent = "☆";
            }
            break;

        case optionButton:
            addressBar.value = "You clicked option-button";
            break;
        
        default:
    }
})

//  addressBar.addEventListener("paste", event => {
addressBar.addEventListener("change", event => {

    //  let pasteText = (event.clipboardData || window.clipboardData).getData('text');
    let pasteText = event.target.value.toLowerCase();

    switch (pasteText) {
        case "www.puppydogs.com":
            setPage(setPuppyPage());
            break;
        case "http://www.kitty.cats.be":
            setPage(setKittyPage());
            break;
        case "ftp://www.bunnyrabbits.net":
            setPage(setBunnyPage());
            break;
        case "www.dragonpictures.com":
            setPage(setDragonPage());
            break;
        case "mail.hissingsnakes.io":
            setPage(setSnakePage());
            break;
        case "https://my.swordpage.net/images/01":
            setPage(setSwordPage());
            break;
        case "http://scariest-page_ever.com":
            setPage(setScaryPage());
            break;
        case "http://www.mypictures.net/gallery?search_term=mouse%type=jpg":
            setPage(setMouseJPGPage());
            break;
        case "http://www.mypictures.net/gallery?search_term=mouse%type=jpeg":
            setPage(setMouseJPGPage());
            break;
        case "http://www.mypictures.net/gallery?search_term=mouse%type=gif":
            setPage(setMouseGIFPage());
            break;
        case "http://www.mypictures.net/gallery?search_term=mouse":
            setPage(setMousePage());
            break;
        case "http://www.mypictures.net/gallery?type=jpg":
            setPage(setGalleryJPGPage());
            break;
        case "http://www.mypictures.net/gallery?type=jpeg":
            setPage(setGalleryJPGPage());
            break;
        case "http://www.mypictures.net/gallery?type=gif":
            setPage(setGalleryGIFPage());
            break;    
        case "http://www.mypictures.net/gallery":
            setPage(setGalleryPage());
            break;
        case "http://www.mypictures.net/gallery?search_term=kangaroo%type=jpg":
            setPage(setKangaJPGPage());
            break;
        case "http://www.mypictures.net/gallery?search_term=kangaroo%type=jpeg":
            setPage(setKangaJPGPage());
            break;
        case "http://www.mypictures.net/gallery?search_term=kangaroo%type=gif":
            setPage(setKangaGIFPage());
            break;
        case "http://www.mypictures.net/gallery?search_term=kangaroo":
            setPage(setKangaPage());
            break;
        default:
            //  console.log(addresses, currentIndex);
            addressBar.value = addresses[currentIndex];
            return;
    }
    addresses.push(pasteText);
})
