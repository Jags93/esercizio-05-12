class User {
  constructor(firstname, lastname, age, location) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    this.location = location;
  }

  ageUser(nuovoUser) {
    return this.age === nuovoUser.age
      ? `${this.firstname} ha la stessa età di ${nuovoUser.firstname}`
      : this.age > nuovoUser.age
      ? `${this.firstname} è più vecchio di ${nuovoUser.firstname}`
      : `${this.firstname} è più giovane di ${nuovoUser.firstname}`;
  }
}

const user1 = new User("Ajeje", "Brajorf", 38, "Catania");
const user2 = new User("Giacomo", "Poretti", 32, "Milano");

const confontoEtà = user1.ageUser(user2);
console.log(confontoEtà);



const Pet{
    constructor(petName, ownerNAme, species, breed ) {
        this.petName = petName;
        this.ownerNAme = ownerNAme;
        this.species = species
        this.breed = breed

    }
}



