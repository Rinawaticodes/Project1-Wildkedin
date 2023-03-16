const toggleMenuBtn = document.querySelector(".btn");
const subMenu = document.querySelector(".sub-menu");

    
toggleMenuBtn.addEventListener("click", function(){
    subMenu.classList.toggle("active");
})