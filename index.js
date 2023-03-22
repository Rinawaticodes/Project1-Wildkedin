/*  Body */

/* Navbar */
const toggleMenuBtn = document.querySelector(".btn");
const subMenu = document.querySelector(".sub-menu");

    
toggleMenuBtn?.addEventListener("click", function(){
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



/* Import des Wilders */

class Wilder {
  constructor(name, desc, img, git, link) {
    this.name = name;
    this.desc = desc;
    this.img = img;
    this.git = git;
    this.link = link;
  }
}

const wilderList = [
  new Wilder(
    "Julien Benoit",  
    "C'est un métier qui peut être très bien payé.",
    "resources/Julien.jpg",
    "www.github.com",
    "www.linkedin.com",
  ),
  new Wilder(
    "Alexandre O",
    "j'ai choisi le métier de développeur car c'est un métier que je peux faire avec mes handicaps et que la technologie ma passionne sous tous les angles",
    "resources/Alexandre.jpg",
    
  ),
  new Wilder(
    "Flavien Jovic",   
    "C'est un métier qui peut être très bien payé.",
    "resources/Flavien.jpg"
  ),
  new Wilder(
    "Flavien Jovic",   
    "C'est un métier qui peut être très bien payé.",
    "resources/Flavien.jpg"
  ),
  new Wilder(
    "Flavien Jovic",   
    "C'est un métier qui peut être très bien payé.",
    "resources/Flavien.jpg"
  ),
  new Wilder(
    "Flavien Jovic",   
    "C'est un métier qui peut être très bien payé.",
    "resources/Flavien.jpg"
  ),
  new Wilder(
    "Flavien Jovic",   
    "C'est un métier qui peut être très bien payé.",
    "resources/Flavien.jpg"
  ),
  new Wilder(
    "Flavien Jovic",   
    "C'est un métier qui peut être très bien payé.",
    "resources/Flavien.jpg"
  ),
  new Wilder(
    "Flavien Jovic",   
    "C'est un métier qui peut être très bien payé.",
    "resources/Flavien.jpg"
  ),
  new Wilder(
    "Flavien Jovic",   
    "C'est un métier qui peut être très bien payé.",
    "resources/Flavien.jpg"
  ),
  new Wilder(
    "Flavien Jovic",   
    "C'est un métier qui peut être très bien payé.",
    "resources/Flavien.jpg"
  ),
  new Wilder(
    "Flavien Jovic",   
    "C'est un métier qui peut être très bien payé.",
    "resources/Flavien.jpg"
  ),
  new Wilder(
    "Flavien Jovic",   
    "C'est un métier qui peut être très bien payé.",
    "resources/Flavien.jpg"
  ),
  new Wilder(
    "Flavien Jovic",   
    "C'est un métier qui peut être très bien payé.",
    "resources/Flavien.jpg"
  ),
  new Wilder(
    "Flavien Jovic",   
    "C'est un métier qui peut être très bien payé.",
    "resources/Flavien.jpg"
  ),
  new Wilder(
    "Flavien Jovic",   
    "C'est un métier qui peut être très bien payé.",
    "resources/Flavien.jpg"
  ),
  new Wilder(
    "Flavien Jovic",   
    "C'est un métier qui peut être très bien payé.",
    "resources/Flavien.jpg"
  )
];

function createHexagone(wilder) {
  // This function should create a card item
  return `
    <li class="hex">
      <details class="modal">
        <summary class="modal-trigger">
          <div class="hexIn">
            <div class="hexLink">
              <img src=${wilder.img} alt="" />
            </div>
          </div>
        </summary>
        <div class="modal-content">
          <h1>${wilder.name}</h1>
          <p>${wilder.desc}</p>
          <div class="favIcon">
          <a href="${wilder.git}"><i class="fa-brands fa-github"></i></a>
          <a href="${wilder.link}"><i class="fa-brands fa-linkedin"></i></a>
          </div>
        </div>
      </details>
    </li>
  `;
}

function createAllHexagones(filter) {
  let hexagones = "";

  for (let i = 0; i < wilderList.length; i++) {
    if (filter == null || wilderList[i].name.startsWith(filter)) {
      hexagones += createHexagone(wilderList[i]);
    }
  }

  return hexagones;
}

document.querySelector(".search-input")?.addEventListener("change", () => {
  const filter = document.querySelector(".search-input").value;
  document.querySelector(".hexagones").innerHTML = createAllHexagones(filter);
});

document.querySelector(".hexagones").innerHTML = createAllHexagones();