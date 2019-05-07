const Park = function (name, price, dinosaurs) {
  this.name = name;
  this.price = price;
  this.dinosaurs = [];
}

Park.prototype.dinosaurCount = function() {
  return this.dinosaurs.length;
}

Park.prototype.addDinosaur = function(dinosaur) {
  this.dinosaurs.push(dinosaur);
}

Park.prototype.removeDinosaur = function(dinosaur) {
  this.dinosaurs.pop(dinosaur);
}

Park.prototype.mostPopularDinosaur = function() {

  for (const dinosaur of this.dinosaurs) {
    if (dinosaur.guestsAttractedPerDay === 50) {
      return dinosaur
    };
  };
};

Park.prototype.findDinosaursBySpecies = function (species) {

let speciesArray = [];

  for (const dinosaur of this.dinosaurs) {
    if (dinosaur.species === species) {
      speciesArray.push(dinosaur);
    }
  }

  return speciesArray.length;
};

Park.prototype.visitsPerDay = function() {
  let dailyVisits = 0;

  for (const dinosaur of this.dinosaurs) {
    dailyVisits += dinosaur.guestsAttractedPerDay
  }
  return dailyVisits;
};

Park.prototype.visitsPerYear = function() {
  let dailyVisits = 0;

  for (const dinosaur of this.dinosaurs) {
    dailyVisits += dinosaur.guestsAttractedPerDay
  }
  return (dailyVisits * 365)
}

Park.prototype.revenuePerYear = function() {
  let dailyRevenue = 0;

  for (const dinosaur of this.dinosaurs) {
    dailyRevenue += (dinosaur.guestsAttractedPerDay * this.price)
  }
  return (dailyRevenue * 365)
}


// Park.prototype.removeDinosaursBySpecies = function (species) {
//   for (const dinosaur of this.dinosaurs) {
//     if (dinosaur.species === species) {
//       const indexOfSpecies =
//       this.dinosaurs.indexOf(dinosaur);
//       this.dinosaurs.splice(indexOfSpecies, 1);
//     }
//   }
// }








module.exports = Park;
