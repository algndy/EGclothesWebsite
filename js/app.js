//Global Variables
let navElement = document.querySelector('#inner-nav-bar');
let docFragment = document.createDocumentFragment();
let navClasses = document.querySelectorAll('.section-name');
let hamburger = document.querySelector('.hamburger');
//Fill in nav bar with <li> elements
navClasses.forEach(function(navClass){
    let newLi = document.createElement("li");
    let newA = document.createElement("a");
    newA.textContent = navClass.firstElementChild.textContent;
    newLi.appendChild(newA);
    docFragment.appendChild(newLi);
});
navElement.appendChild(docFragment);

hamburger.addEventListener('click',function(){
    navElement.classList.toggle("active-nav");
});
    



/*
Set the active section.
Determine which section is being viewed while scrolling through the page.
*/
navClasses.forEach(function(elm,ind){
    document.addEventListener('scroll',function(){
        if(window.scrollY >= navClasses[ind].offsetTop-navElement.parentElement.offsetHeight-150 
           && window.scrollY <= navClasses[ind].offsetTop+navClasses[ind].offsetHeight-500)
            {    
                navClasses[ind].classList.add("active");  
            }
        else
            {
                navClasses[ind].classList.remove("active");
            }
    });
});


//Clicking an item from the navigation menu, the link scroll to the appropriate section.
let navBarElem = document.querySelectorAll('#inner-nav-bar li a');
navBarElem.forEach(function(elem,ind){
    navBarElem[ind].addEventListener('click',function(event){
        event.preventDefault();
        navClasses[ind].scrollIntoView({behavior:"smooth",block:"center"});
            
    });
});


//Make the logo on the video appears with special style
let logoOnVideo = document.querySelector('.text-on-video .logo-on-video');
setTimeout(function(){                   
    logoOnVideo.style.cssText=`position:relative;opacity:0;top:30px;`;
    setTimeout(function(){
        logoOnVideo.style.cssText+=`transition:top 1s,opacity 2s;opacity:1;top:0;`;
    },1);
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
            if(window.scrollY >= elem.offsetTop-650)
            {
                elem.style.left="0px";
            }
        });
    }
    moveItemFromRightToLeft(categoryDiv,1);    
}
window.addEventListener('scroll',function(){
    let headerLogo = document.querySelector('.header-logo');
    if(window.outerWidth<821 && window.outerWidth>579 && window.scrollY>120)
    {
        headerLogo.style.display = "none";
    }
    else
    {
        headerLogo.style.display = "block";
    }
});

window.addEventListener('resize',function(){
    let headerLogo = document.querySelector('.header-logo');
    if(window.outerWidth<821 && window.outerWidth>=579 && window.scrollY>120)
    {
        headerLogo.style.display = "none";
    }
    else
    {
        headerLogo.style.display = "block";
    }
});

let slides = [...document.querySelectorAll(".slides")];
let preBtn = document.querySelector('.left-button');
let nextBtn = document.querySelector('.right-button');
let count = 1;

function cheackButton(){
    if(count==1)
    {
        nextBtn.disabled=true;
        preBtn.disabled=false;
    }
    else if(count==slides.length)
    {
        nextBtn.disabled=false;
        preBtn.disabled=true;
    } 
}


slides.forEach(function(slide,ind){
    slides[ind].style.left= 100 *ind+"%";
});

preBtn.addEventListener('click',function(e){
    e.preventDefault();
    count++;
    cheackButton();
    slides.forEach(function(slide,ind){
        slides[ind].style.left=Number((slides[ind].style.left.split("%"))[0])-100 + "%";
        
        // Number((slides[1].style.left.split("%"))[0])
    });
});
nextBtn.addEventListener('click',function(e){
    e.preventDefault();
    count--;
    cheackButton();
    slides.forEach(function(slide,ind){
        slides[ind].style.left=Number((slides[ind].style.left.split("%"))[0])+100 + "%";
    });
});
cheackButton();


