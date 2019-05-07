const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;

  beforeEach(function () {
    park = new Park('Jurassic Park', 10);
    dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur('Velociraptor', 'carnivore', 25);
    dinosaur3 = new Dinosaur('Velociraptor', 'carnivore', 40);
  });

  it('should have a name', function (){
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park')
  });

  it('should have a ticket price', function(){
    const actual = park.price;
    assert.strictEqual(actual, 10);
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.dinosaurCount();
    assert.strictEqual(actual, 0);
  });

  it('should be able to add a dinosaur to its collection', function() {
    park.addDinosaur(dinosaur1);
    const actual = park.dinosaurCount();
    assert.strictEqual(actual, 1);
  });

  it('should be able to remove a dinosaur from its collection', function() {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.removeDinosaur(dinosaur2);
    const actual = park.dinosaurCount();
    assert.strictEqual(actual, 1);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function() {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.mostPopularDinosaur();
    const actual = park.mostPopularDinosaur();
    assert.strictEqual(actual, dinosaur1);
  });

  it('should be able to find all dinosaurs of a particular species', function() {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.findDinosaursBySpecies('Velociraptor');
    const actual = park.findDinosaursBySpecies('Velociraptor');
    assert.strictEqual(actual, 2);
  });

  it('should be able to calculate total visits per day', function () {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    const expected = 75;
    assert.strictEqual(park.visitsPerDay(), expected);
  });

  it('should be able to calculate total visits per year', function () {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    const expected = 27375;
    assert.strictEqual(park.visitsPerYear(), expected);
  });

  it('should be able to calculate revenue per year', function () {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    const expected = 273750;
    assert.strictEqual(park.revenuePerYear(), expected);
  });

  //
  // it('should be able to remove all dinosaurs of a particular species', function(){
  //   park.addDinosaur(dinosaur1);
  //   park.addDinosaur(dinosaur2);
  //   park.addDinosaur(dinosaur3);
  //   park.removeDinosaursBySpecies('Velociraptor');
  //   const actual = park.dinosaurCount();
  //   assert.strictEqual(actual, 1)
  // });

});
