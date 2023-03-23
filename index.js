
/*  Body */


//rina popup start
let popup = document.getElementById("popup");

        function openPopup(){
            popup.classList.add("open-popup");
        }
        function closePopup(){
            popup.classList.remove("open-popup");
        }
//rina popup end
/*  Button

const buttons = document.getElementsByClassName('compteur');

const compteurs = document.getElementById('nombreClics');

for (let i = 0; i < buttons.length; i++) {
    console.log(i, buttons[i])
  buttons[i].addEventListener('click', () => {
        buttons[i].style.color = '#f37335';
        compteurs.value++
      })
    }

*/


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
    "resources/promoWilder/Julien.jpg",
    "https://github.com/JulienBenoit7",
    "https://www.linkedin.com/in/julien-benoit-0bb741145/",
  
  ),
  new Wilder(
    "Alexandre Oudin",
    "j'ai choisi le métier de développeur car c'est un métier que je peux faire avec mes handicaps et que la technologie ma passionne sous tous les angles",
    "resources/promoWilder/AlexandreO.jpg",
    "https://github.com/dragowolf51",
    "https://www.linkedin.com/in/alexandre-oudin-b66b98236/",
    
  ),
  new Wilder(
    "Flavien Jovic",   
    "Je souhaite me réorienter vers le développement web afin de trouver un travail éthique et stimulant intellectuellement.",
    "resources/promoWilder/Flavien.jpeg",
    "https://github.com/FlavienJovic",
    "https://www.linkedin.com/in/flavien-jovic-4348681b2/",
  ),
  new Wilder(
    "Adlan Khaliev",  
    "J’ai choisi ce métier car il permet de créer des outils qui servent au monde, de travailler à distance, de travailler en tant qu’artisan de façon autonome.",
    "resources/promoWilder/Adlan.jpg",
    "https://github.com/khaliev",
    "https://www.linkedin.com/in/adlan-khaliev-a2465825a/",
  
  ),
  new Wilder(
    "Ahmed El Amri",  
    "Je compte continuer en alternance, pour continuer à apprendre tout en étant encadré par des dev expérimenter.Avoir une première expérience dans le domaine, et décrocher mon titre.",
    "resources/promoWilder/Ahmed.jpeg",
    "https://github.com/kirikouu78130",
    "https://www.linkedin.com/in/ahmed-el-amri-702083263/",
  
  ),
  new Wilder(
    "Alexandre Pompidou",  
    " Je veux faire ce métier par passions.",
    "resources/promoWilder/ALexandreP.jpeg",
    "https://github.com/Alex-5110",
    "https://www.linkedin.com/in/alexandre-pompidou-13a467223/",
  
  ),
  new Wilder(
    "Aurélien Carenjot",  
    "Je préfère le contact et le sociable au travail en remote même si le cliché du dev montre le contraire",
    "resources/promoWilder/Aurelien.jpg",
    "https://github.com/Carenjot",
    "https://www.linkedin.com/in/aur%C3%A9lien-carenjot-5b55b5162/",
  
  ),
  new Wilder(
    "Aylin Noiret",  
    "Après la formation, j’aimerai faire une alternance pour peaufiner mes compétences et me perfectionner dans le domaine.e",
    "resources/promoWilder/Aylin.JPG",
    "https://github.com/Nayxl",
    "https://www.linkedin.com/in/aylin-noiret-5370a6269/",
  
  ),
  new Wilder(
    "Célia Kleczynski",  
    "J'ai choisi le métier de développeur parce que c'est un domaine qui m'intéressais depuis toujours.",
    "resources/promoWilder/Celia.jpeg",
    "https://github.com/CeliaKlc",
    "https://www.linkedin.com/in/c%C3%A9lia-kleczynski-4b556b268/",
  
  ),
  new Wilder(
    "Christophe Dubois",  
    "J ai choisie le métier de développeur car j'adore utilisé la logique informatique et humaine pour codée des programmes , on apprends des choses nouvelles tout les jours et la réussite de celle ci est très satisfaisante. ",
    "resources/promoWilder/Christophe.jpg",
    "https://github.com/tetsuya51",
    "https://www.linkedin.com/in/christophe-dubois-217452186/",
  
  ),
  new Wilder(
    "Elodie Jehl",  
    "C'est un métier d'avenir, qui permet d'intervenir dans beaucoup de domaines différents. Il permet également de créer des choses à partir de rien, d'améliorer de l'existant et d'aider des populations.",
    "resources/promoWilder/Elodie.png",
    "https://github.com/Elodie0530",
    "",
  
  ),
  new Wilder(
    "Enzo Andre",  
    "Mon projet est de demarrer une alternance de 1 an puis trouver un travail pour me lancer dans la vie active",
    "resources/promoWilder/Enzo.jpg",
    "https://github.com/Enzo-adr5",
    "https://www.linkedin.com/in/enzo-andre-7ba6a7269/",
  
  ),
  new Wilder(
    "Maximilien Thiry",  
    "(Pour l'argent Pardi )  C'est un métier que je trouve intéressant ou tu dois te poser des questions sur comment tu peux faire et aussi le pouvoir de Créer.. Aussi pour voyager.",
    "resources/promoWilder/Maximilien.jpeg",
    "https://github.com/zeitounmax",
    "https://www.linkedin.com/in/maximilienthiry/",
  
  ),
  new Wilder(
    "Florian Geron",  
    "J'ai choisi le métier de développeur car j'ai déjà été en étude de production graphique et je souhaite ajouter des compétences à mon profil.",
    "resources/promoWilder/Florian.jpeg",
    "https://github.com/Kika051",
    "https://www.linkedin.com/in/florian-geron-613042224/",
  
  ),
  new Wilder(
    "Mohamed Berkoussi",  
    "J'aime le métier de dév. web car il me permet de créer des projets intéressants et interactifs en utilisant mes compétences en codage, de travailler en équipe avec des autres dév. et de bénéficier de nombreuses opportunités de carrière.",
    "resources/promoWilder/MohamedB.jpg",
    "https://github.com/Mohamed4900",
    "https://www.linkedin.com/in/mohamed-berkoussi4900/",
  
  ),
  new Wilder(
    "Mohamed Maach",  
    "Ma reconversion professionnelle du génie énergétique au développement web est motivée par la passion pour la technologie et la création de produits numériques.",
    "resources/promoWilder/MohamedM.jpeg",
    "https://github.com/Maachino",
    "https://www.linkedin.com/in/mmaach/",
  
  ),
  new Wilder(
    "Nassim Cheikh Rouhou",  
    "Le remote est un bon moyen de gérer son temps et ainsi avoir du temps pour ses occupations",
    "resources/promoWilder/Nassim.jpeg",
    "https://github.com/nassimcr",
    "https://www.linkedin.com/in/nassim-cheikh-rouhou-3866ab269/",
  
  ),
  new Wilder(
    "Nils Caqueux",  
    " J'ai grandi dans l'informatique",
    "resources/promoWilder/Nils.jpg",
    "https://github.com/OkamiAka",
    "https://www.linkedin.com/in/nils-caqueux-ba0a45233/",
  
  ),
  new Wilder(
    "Pacôme Barthe",  
    "J'adore la programmation, j'apprend plein chose et ont peut tout faire",
    "resources/promoWilder/Pacome.jpeg",
    "https://github.com/CrazyEqic",
    "",
  
  ),
  new Wilder(
    "Ni Kadek Rina Wati",  
    "Je voudrais travailler dans une entreprise internationale qui me permet de se former dans un cadre diversifié et inclusif et de de comprendre les différentes cultures, coutumes et stéréotypes.",
    "resources/promoWilder/Rina.jpeg",
    "https://github.com/Rinawaticodes",
    "https://www.linkedin.com/in/ni-kadek-rina-wati-04799276/",
  
  ),
  new Wilder(
    "Justine Merlin",  
    "Je souhaite continuer de travailler avec des personnes passionnantes !",
    "resources/promoWilder/Justine.jpeg",
    "https://github.com/Justine-Merlin",
    "https://www.linkedin.com/in/justine-merlin-developer/",
  
  ),
  new Wilder(
    "Romain Guillemot",  
    "Ça s'est passé un peu par hasard, mais je me suis senti bien dans ce métier, et je continue d'apprendre tous les jours",
    "resources/promoWilder/Romain.jpeg",
    "https://github.com/rocambille",
    "https://www.linkedin.com/in/rguillemot/",
  
  ),
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
          <h1>${wilder.name} <img src=${wilder.img} alt="" /></h1>
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

  wilderList.sort((a, b) => 0.5-Math.random()) ;
  let hexagones = "";
  
  for (let i = 0; i < wilderList.length; i++) {
    if (filter == null || wilderList[i].desc.toLowerCase().includes(filter.toLowerCase())) {
      hexagones += createHexagone(wilderList[i]);
    }
  }

  return hexagones;
}

// adlan search start

document.querySelector(".search-input")?.addEventListener("change", () => {
  const filter = document.querySelector(".search-input").value;
  document.querySelector(".hexagones").innerHTML = createAllHexagones(filter);
});

// adlan search end
document.querySelector(".hexagones").innerHTML = createAllHexagones();
