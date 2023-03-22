class Wilder {
  constructor(name, desc, img) {
    this.name = name;
    this.desc = desc;
    this.img = img;
  }
}

const wilderList = [
  new Wilder(
    "Julien Benoit",  
    "C'est un métier qui peut être très bien payé.",
    "resources/Julien.jpg",
  
  ),
  new Wilder(
    "Alexandre O",
    "j'ais choisie le métier de développeur car c'est un métier que je peux faire avec mes handicaps et que la technologie ma passionne sous tous les angles",
    "resources/Alexandre.jpg",
    
  ),
  new Wilder(
    "Flavien Jovic",   
    "C'est un métier qui peut être très bien payé.",
    "ressources/Flavien.jpg"
  )
];

export default wilderList;