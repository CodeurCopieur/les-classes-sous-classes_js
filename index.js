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

//console.log(person.bienvenue());

// SOUS-CLASSES

class Fiche extends Personne {
  constructor(nom, age, taille){
    super(nom, age);
    this.taille = taille;
  }
}

const fich = new Fiche("codwerk", 25, 186);
//console.log(fich);

class User {
  constructor(username) {
    this.username = username
  }
}

const firstUser = new User("codwerk");
console.log(firstUser.username);

class userInfos {
  constructor(user){
    this._user= user; //varaiable prive qui ne peut être utiliser en dehors de la class
  }

  get name(){
    return this._user;
  }

  set new_name(update_name) {
    this._user = update_name;
  }
}


const new_infos = new userInfos("Dev");
console.log(new_infos.name);
new_infos.new_name = "Dev Front";
console.log(new_infos.name);