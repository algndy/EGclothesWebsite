//Global Variables
let navElement = document.querySelector('#inner-nav-bar');
let docFragment = document.createDocumentFragment();
let navClasses = document.querySelectorAll('.section-name');


navClasses.forEach(function(navClass){  //Fill in nav bar with <li> elements
    let newLi = document.createElement("li");
    let newA = document.createElement("a");
    newA.textContent = navClass.firstElementChild.textContent;
    newLi.appendChild(newA);
    docFragment.appendChild(newLi);
});
navElement.appendChild(docFragment);


//Clicking an item from the navigation menu, the link scroll to the appropriate section.
let navBarElem = document.querySelectorAll('#inner-nav-bar li a');
navBarElem.forEach(function(elem,ind){
    navBarElem[ind].addEventListener('click',function(event){
        event.preventDefault();
        navClasses[ind].scrollIntoView({behavior:"smooth",block:"center"});
    })
});
