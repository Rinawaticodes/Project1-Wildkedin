/*  Body */

/* Navbar */
const toggleMenuBtn = document.querySelector(".btn");
const subMenu = document.querySelector(".sub-menu");

    
toggleMenuBtn.addEventListener("click", function(){
    subMenu.classList.toggle("active");
})


/*  Button */

const buttons = document.getElementsByClassName('compteur');

const compteurs = document.getElementById('nombreClics');

for (let i = 0; i < buttons.length; i++) {
    console.log(i, buttons[i])
	buttons[i].addEventListener('click', () => {
        buttons[i].style.color = '#f37335';
        compteurs.value++
      })
    }