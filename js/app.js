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
navBarElem[0].style.cssText+="border:solid 1px #00ace6;border-radius:30px";
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


//Make the logo on the video appears with special style
let logoOnVideo = document.querySelector('.text-on-video .logo-on-video');
setTimeout(function(){                   
    logoOnVideo.style.cssText=`position:relative;opacity:0;top:30px;`;
    setTimeout(function(){
        logoOnVideo.style.cssText+=`transition:top 1s,opacity 2s;opacity:1;top:0;`;
    },300);
},0);



//function for move element from outer page right to inner page left

if(window.outerWidth<=975)
{   
    let categoryDiv = document.querySelector('#categories-slide');
    function moveItemFromRightToLeft(elem,duration){
        elem.style.cssText = `position:relative; left:${elem.offsetWidth}px;transition: left ${duration}s;`;
        
        setTimeout(function(){
            elem.style.left="0px"; 
        },1)  
    }
    moveItemFromRightToLeft(categoryDiv,1);
    
}
else if(window.outerWidth>974)
{
    let categoryDiv = document.querySelector('#categories-slide');
    function moveItemFromRightToLeft(elem,duration)
    {
        elem.style.cssText = `position:relative; left:${elem.offsetWidth}px;transition: left ${duration}s;`;
        window.addEventListener("scroll",function(eve){
            eve.preventDefault();
            if(window.scrollY >= elem.offsetTop-550)
            {
                //console.log(`${window.scrollY} , ${elem.offsetTop} `)
                elem.style.left="0px";
            }
        });
    }
    moveItemFromRightToLeft(categoryDiv,1);    
}


