/*BUTTON POPUP*/

const popup = document.getElementById("popup");

        function openPopup(){
            popup.classList.add("open-popup");
        }
        function closePopup(){
            popup.classList.remove("open-popup");
        }

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

