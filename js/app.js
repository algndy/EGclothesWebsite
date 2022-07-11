//Global Variables
let navElement = document.querySelector('#inner-nav-bar');
let docFragment = document.createDocumentFragment();
let navClasses = document.querySelectorAll('.section-name');

//Fill in nav bar with <li> elements
navClasses.forEach(function(navClass){
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
    });
});

/*
Set the active section.
Determine which section is being viewed while scrolling through the page.
*/
navClasses.forEach(function(elm,ind){
    document.addEventListener('scroll',function(){
    let scrollPos = document.documentElement.scrollTop;
        if(scrollPos >= navClasses[ind].offsetTop-navElement.parentElement.offsetHeight-150 && scrollPos <= navClasses[ind].offsetTop+navClasses[ind].offsetHeight)
            {
               navClasses.forEach(function(elem,i){
                   navClasses[i].classList.remove("active");
                   navBarElem[i].style.borderColor="white";
               });
                navClasses[ind].classList.add("active");
                navBarElem[ind].style.border="solid 1px";
                navBarElem[ind].style.borderColor="#00ace6";
                navBarElem[ind].style.borderRadius="30px";
            }
    });
});