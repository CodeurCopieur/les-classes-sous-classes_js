// CLASSES

class Personne {
  constructor(nom, age){
    this.nom = nom,
    this.age = age
  }

  bienvenue(){
    return `Salut, moi c'est ${this.nom} et j'ai ${this.age} ans`;
  }
}

const person = new Personne("boss", 25);

console.log(person.bienvenue());

// SOUS-CLASSES

class Fiche extends Personne {
  constructor(nom, age, taille){
    super(nom, age);
    this.taille = taille;
  }
}

const fich = new Fiche("codwerk", 25, 186);
console.log(fich);