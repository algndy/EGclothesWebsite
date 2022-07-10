//Fill in nav bar with <li> element
let navElement = document.querySelector('#inner-nav-bar');
let docFragment = document.createDocumentFragment();
let navClasses = document.querySelectorAll('.section-name');

navClasses.forEach(function(navClass){
    let newLi = document.createElement("li");
    let newA = document.createElement("a");
    newA.textContent = navClass.firstElementChild.textContent;
    newLi.appendChild(newA);
    docFragment.appendChild(newLi);
});

navElement.appendChild(docFragment);