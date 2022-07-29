//console.log('Am I working?');

class Gladiator{
    constructor(name, weapon){

        this.name = name;
        this.weapon = weapon;
    }

}

const testGladiator = new Gladiator('Spartacus', 'Shovel');
console.log(testGladiator);

console.log(testGladiator.name);
console.log(testGladiator.weapon);