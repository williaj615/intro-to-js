console.log('FUNctions');

let firstName = 'George';
let lastName = 'Weasley';





const sayMyName = (first, last) => {
return `${first} ${last}`;
}
console.log(sayMyName('Jasmine', 'Williams'));


//NUGGET TIME

const nuggetizer = (animal) => {
return `nugget ${animal}`;
}

const humaneNuggetizer = (animal) => {
return animal
}

const spamFactory = (literallyAnything) => {
return 'spam (lunch)';
}

console.log(nuggetizer('chicken'));
console.log(nuggetizer('octopus'));
console.log(nuggetizer('john wark'));

console.log(humaneNuggetizer('chicken'));
console.log(humaneNuggetizer('octopus'));
console.log(humaneNuggetizer('john wark'));

console.log(spamFactory('chicken'));
console.log(spamFactory('octopus'));
console.log(spamFactory('john wark'));

const printToDOM = (toPrint) => {
    document.getElementById('output').innerHTML += toPrint;
}

let bandNumber = 1

const takeNumber =  (bandName) => {
  printToDOM(`<p>${bandNumber}. ${bandName}<p>`);  // you should already have this function written from the class lecture
  bandNumber ++;
};

takeNumber('Sore Throat');
takeNumber('Trash Pandas');


// printToDOM('Jasmine');

