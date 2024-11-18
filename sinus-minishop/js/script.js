// Code here!
// 1 change the name of Ach
const firstHoodie = document.querySelector(".art-1 h3");
firstHoodie.innerHTML = "Potato";

// change Home to start
const homeElement = document.querySelectorAll("nav a")[0];
//console.log(homeElement.innerHTML);
homeElement.innerHTML = "Start";

// cahnge contact element
const contactElement = document.querySelectorAll("nav a")[2];
contactElement.innerHTML = "Mail Us";

// change info of Fire

const fireInfo = document.querySelector(".art-2 p");
//console.log(fireInfo);
fireInfo.innerHTML = "Fire Hoodie with red color that is good for you";

// change the txt and color of button
const fireButton = document.querySelector(".art-2 button");
//console.log(fireButton);
fireButton.innerHTML = "Köpa";
fireButton.style.backgroundColor = "blue";

// change the color of the first product
const firstProduct = document.querySelectorAll(".art-1").forEach(item =>{
    item.style.backgroundColor = 'lightblue';
});

// change the address 
const addressElement = document.querySelector("footer section article:nth-of-type(2) p");
console.log(addressElement);
addressElement.innerHTML = "Teknink Hogskola <br> lundvägen 12<br> 12345 Lund";


// change the color of all p element
const pElemments = document.querySelectorAll("p").forEach(p => {
    p.style.color ="red";
});

// change the text of all button 

const buttonElements = document.querySelectorAll("button").forEach(button =>{
    button.innerHTML = "Add to Cart";
});

// add activ class to menu
const homeClass = document.querySelector("footer section article:nth-of-type(1) a:nth-of-type(1)");
homeClass.classList.add("active");
//console.log(homeClass.className);

 // remove class logo
// const logoClass = document.querySelector(".logo");
// logoClass.classList.remove("logo");
// console.log(logoClass.className);

// add new menu
const newItem = document.createElement("a");
newItem.innerHTML = "About";
newItem.href ="#";
const newMenu = document.querySelector("footer section article:nth-of-type(1)");
newMenu.appendChild(newItem);
console.log(newMenu);

// add new product
const products = document.querySelector("main");
const newproductHtml = '<article class="art-4"> <figure><img src="img/hoodie-forrest.png" allt="hoodie"></figure><h2>Sinus Hoodie</h2> <h3>Forrest</h3> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolores.</p> <button>buy</button> </article>';
console.log(newproductHtml);
products.insertAdjacentHTML("beforeend", newproductHtml);


//Event
const clickEvent = document.querySelector(".logo");
clickEvent.addEventListener("click", function(){
    console.log("I got you");
});

//listen on the article elements

const articlElement = document.querySelectorAll("article");
articlElement.forEach((article, index) =>{
    article.addEventListener("click", function(){
        if(index === 0){
            console.log("Hi Im article Ash");
        }
        else if(index === 1){
            console.log("Hi Im article Fire");
        }
        else if(index === 2){
            console.log("Hi Im article Water");
        }
        else if (index === 3){
            console.log("Hi Im article Forrest");
        }
    });

});