"use strict"
/*
Strict mode to feature wprowadzony w ES5,
która pozwala uruchamić skrypty w bardziej restrykcyjnym
trybie - tak zwanym "strict mode".
Tryb ten eliminuje niektóre "ciche" błędy
(takie, które nie są sygnalizowane przez przeglądarkę),
lepiej sygnalizuje powszechne błędy
oraz niebezpieczne operacje.
Domyślnie tryb ten jest wyłączony. Aby go włączyć,
na początku naszego kodu musimy użyć zapisu "use strict"
*/






















// const i let
/*

let temp = 20;
const weather = 'snow';
temp = 30;
console.log(temp, 'temp');
console.log(weather, 'weather');
// weather = "rain";
const cat;

*/















// Tablice i obiekty

// let birds = ["Hailey", "Iga", 'Asia'];
// let turtle = {
//   name: "William",
//   age: 30
// }

// const cats = ["Felix", "Benny", "Johnny", "Kitty"];
// const dog = {
//   name: "Rex",
//   age: 5
// };





// dog.name = "Bulldog";
// console.log(dog.name, 'dog.name');


















// /*

// if (1) {
//   var cat1 = 'felix';        // zakres funkcyjny
// }
// console.log(cat1, 'cat1');
// */


















// if (1) {
//   var cat1 = 'felix';        // zakres funkcyjny
//   let cat2 = 'johnny';   // zakres blokowy
//   const cat3 = 'asterix';     // zakres blokowy
//   {
//     var cat4 = 'hellokitty';
//     let cat5 = 'danny';
//   }
//   console.log(cat5, 'cat5')
// }







// for (let dogCounter = 0; dogCounter < 5; dogCounter += 1) {

//   console.log(dogCounter, 'dogCounter');
// }



























// fat arrow funkcje strzałkowe

/*
// brak parametrów
() => { ... }
function() { ... }

// jeden parametr, identyfikator
x => { ... }
function (x) { ... }

// kilka parametrów
(x, y) => { ... }
function (x, y) { ... }
*/




// bez return


// const dog = {
//   name: 'Rex'
// };

// const getName = (dog) => dog.name;
// console.log(getName(dog));

// // oldway
// const getNameOld = function () {
//   return dog.name
// };
// console.log(getNameOld(), 'old');












/*
// this
const dog = {
  name: 'Rex',
  getName: () => this.name,
  getOldName: function () {
    return this.name
  },
  getThis: () => this,
  getOldThis: function () {
    return this;
  }
};

console.log(dog.getName(), 'getName');
// console.log(dog.getOldName(), 'getOldName');
// console.log(dog.getThis(), 'getThis');
// console.log(dog.getOldThis(), 'getOldThis');
// console.log(this, 'parent')

*/










/*
// ARRAY

const cats = [
  {
    name: 'Felix',
    age: 2
  },
  {
    name: 'Roxie',
    age: 4
  },
]

const getCatNamesES6 = () => cats.map(cat => cat.name);

// old way
function getCatNames() {
  return cats.map(function () {
    return cat.name;
  })
}

// console.log(getCatNames());
// console.log(getCatNamesES6(), 'es6');
*/



























// Spread operator 3 kropki operator reszty
// Tablice

/*

const cats = ["Felix", "Benny", "Johnny", "Kitty"];
const dogs = ["Australian Shepherd", "American Bulldog", "Beagle", "Bohemian Shepherd"];

const farmAnimals = ["Ben", ...cats, "Hilary"];
console.log(farmAnimals);





// const getAllAnimals = () => {
//   return [...cats, ...dogs];
// };
// console.log(getAllAnimals());

*/












// String interpolation
/*
const presenter = {
  name: 'Piotr',
  query: 'api/getName'
};
const callToApiOld = 'https://media30.pl/' + presenter.query + '/Piotr'

const callToApi = `https://media30.pl/${presenter.query}/Piotr`;

console.log(callToApiOld, 'callToApiOld');
console.log(callToApi, 'callToApi');

*/



/*

// Destrukturyzacja
const variables = {
  key: '574382h543',
  a: 1,
  b: 4,
  c: 5,
  d: 7,
  e: 3,
  f: 8,
  g: 3
};
const a = variables.a;
const b = variables.b;
const c = variables.c;
const d = variables.d;

console.log(a, 'a - old');
console.log(b, 'b - old');
console.log(c, 'c - old');
console.log(d, 'd - old');




// const { g: fajneG, e, f } = variables;

// console.log(fajneG, 'fajneg');
// console.log(e, f, 'e f');

*/





/*
// Dynamiczne nazwy właściwości

const superNazwa = 'crazyMan';

const presenter = {
  name: 'Piotr',
  query: 'api/getName',
  ["XYZ" + superNazwa]: '101010',
  [superNazwa + 'funny']: function () {
    console.log(this);
  }
};

*/








/*
// definiowanie metod
const presenter2 = {
  name: 'Max',
  query: 'api/getName',
  getCos: () => {
    console.log(this);
  },
  getThis() {
    console.log(this);
  }
};
*/









/*

// klasy


class Shape {
  constructor(id, x, y) {
    this.id = id
    this.move(x, y)
  }
  move(x, y) {
    this.x = x
    this.y = y
  }
}

const mojShape = new Shape('214', 1, 4);
console.log(mojShape)
mojShape.move(100, 100)

*/







/*
// Symbol
// Każdy symbol zwrócony przez Symbol() jest unikalny.
// Symbol powinien być użyty jako identyfikator własności obiektu,
// został zaprojektowany jedynie w tym celu.

const symbol1 = Symbol();
const symbol2 = Symbol(42);
const symbol3 = Symbol('foo');

console.log(typeof symbol1);
// expected output: "symbol"

console.log(symbol2 === 42);
// expected output: false

console.log(symbol3.toString());
// expected output: "Symbol(foo)"

console.log(Symbol('foo') === Symbol('foo'));
// expected output: false



const variables = {
  key: Symbol("variables"),
  a: 1,
  b: 4,
  c: 5,
  d: 7,
  e: 3,
  f: 8,
  g: 3
};
console.log(variables)

*/










/*
// For of

const cats = ["Felix", "Benny", "Johnny", "Kitty"];

for (const cat of cats) {
  console.log(`Imię: ${cat}`);
  if (cat === "Benny") break;

}
*/






// Generatory
/*

function* cats() {
  yield "Felix";
  document.body.innerHTML = "Benny";
  yield "Benny";
  yield "Johnny";
  yield "Kitty";
  yield 1;
  yield 2;
  yield 3;
};


const myIterator = cats();
console.log(myIterator.next());
// console.log(myIterator.next());
// console.log(myIterator.next());
// console.log(myIterator.throw("Hey hey"));
// console.log(myIterator.return("HelloKitty"));
// console.log(myIterator.next());

// for (const cat of cats()) {
//   console.log(cat);
//   if (cat === 'Johnny') break;
// }
// console.log('done');

*/






// Set i Map

//new Map([iterable])
// Iterable jest tablicą lub innym iterowalnym obiektem, 
// którego elementy są parami typu klucz-wartość 
// (np. 2 elementowa tablica)


/*

const myMap = new Map();

myMap.set('mazowieckie', '5.3');
myMap.set('slaskie', '4.5');
myMap.set('wielkopolskie', '3.4');
myMap.set('małopolskie', '3.3');

console.log(myMap.get("slaskie"))

// length
// console.log(myMap.size);

// clear
// myMap.clear();
// console.log(myMap);

// delete
// myMap.delete("slaskie");
// get

// has
// console.log(myMap.has("slaskie"));
// keys()

// console.log(myMap.keys());

// values()

*/



/*
// Set
//Obiekt Set umożliwia przechowywanie unikalnych wartości każdego typu
// new Set([iterable]); -> tore

const animals = new Set(["Rex"]);
animals.add("Filemon");
animals.add("Bonifacy");
console.log(animals.has("Bonifacy"))

// animals.add({ a: 1, b: 2 });

// animals.add(["ja", "wy", "oni", "my"]);


animals.add(() => { return "szminka" });
// console.log(animals)

*/






/*
// Nowe metody
// const found = [1, 3, 4, 2].find(x => x >= 2);
// const found = [1, 3, 4, 2].find(x => x === 4);
// const fonudIndex = [1, 3, 4, 2].findIndex(x => x === 4); // 2
// console.log(found);
// console.log(fonudIndex);


const repeatBe = "be".repeat(4)
console.log(repeatBe);
//  startsWith, endsWith
// isNaN, isFinite
// Number.isSafeInteger(2)
// console.log(Math.trunc(-0.1)) // -0
*/




/*
// Formatowanie Daty i Czasu wg kraju


const l10nUSD = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" })
const l10nGBP = new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP" })
const convertIt = new Intl.NumberFormat("pl-PL", { style: "currency", currency: "PLN" })

console.log(l10nUSD.format(100200300.40), "USD")
l10nGBP.format(100200300.40)
console.log(convertIt.format(100200300.40));

const l10nEN = new Intl.DateTimeFormat("en-US")
const convertTime = new Intl.DateTimeFormat("pl-PL")
console.log(convertTime.format(new Date().getTime()))


*/









/*
// Promise

new Promise((resolve, reject) => {
  // zrob cos co trwa jakis czas a potem wywolaj resolve/reject
  fetch('https://api.covid19api.com/summary')
    .then(response => response.json()).then(data => {
      console.log(data);
      resolve(data);
    });
}).then(result => {
  console.log("result");
  return result;
}, err => console.log("error"))
  .then(result => result.Global)
  .then(Global => console.log(Global))

*/




// ------> ES7 <-------


// operator potęgowania **


// includes


































// ------> ES7 <-------
// padStart, padEnd










/*
// Object.values
const variables = {
  key: '574382h543',
  a: 1,
  b: 4,
  c: 5,
  d: 7,
  e: 3,
  f: 8,
  g: 3,
  myObj: {
    name: 'Giovanni',
    age: 44
  }
};

console.log(Object.keys(variables));
// console.log(Object.values(variables)); // new
// console.log(Object.entries(variables)); // new

// */








// Async functions

/*
function getDataFromApi() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("wpadnij na media30.pl");
    }, 2000); // call to api
  });
}
async function sayHello() {
  const textFromApi = await getDataFromApi();
  console.log(`Message: ${textFromApi}`);
}
sayHello();

*/







// ----> ES9 <-----


// .finally()

/*
new Promise((resolve, reject) => {
  // zrob cos co trwa jakis czas a potem wywolaj resolve/reject
  fetch('https://api.covid19api.com/summary')
  .then(response => response.json()).then(data => {
    console.log(data);
    resolve(data);
  });
}).then(result => {
  console.log("result");
  return result;
}, err => console.log("error"))
.then(result => result.Global)
.then(Global => console.log(Global))
.finally(() => console.log("Koniec, niewazne czy error czy sukces"))

*/












// rest operator in objects

/*
const variables = {
  key: '574382h543',
  a: 1,
  b: 4,
  c: 5,
  d: 7,
  e: 3,
  f: 8,
  g: 3
};
// api, ktore zwraca zmienne za kazdym razem z nowym id

// oldWay
const myVariablesOld = Object.assign({}, variables);
myVariablesOld.key = "12345";

const myVariables = {
  ...variables,
  key: '12345'
}

console.log(myVariablesOld, 'myVariablesOld');
console.log(myVariables, 'myVariables');

*/











// Dodatkowe rzeczy z Regexpem
/*
const regexToCutHTMLTags = /(<([^>]+)>)/ig;
const textWithHTML = `
<div class="container">
  <b>Hejhogrubo</b>
  <p>test</p>
</div>
`;
const result = textWithHTML.replace(regexToCutHTMLTags, "");

console.log(result);
*/














// ------> ES10 <------


// flat() and flatmap()

// const cats = ["Felix", "Benny", "Johnny", "Kitty"];
// const tab = [cats, 1, 2, 3, 4, ["hej", 1, 4]]



// tab.flatMap(item => {

//   return item + 1;
//   })











// String.trimstart() and String.trimend()











/*

// variables.fromentries();
// działanie odwrotne do Object.entries

const variables = {
  key: '574382h543',
  a: 1,
  b: 4,
  c: 5,
  d: 7,
  e: 3,
  f: 8,
  g: 3
};


const tabuj = Object.entries(variables);
const fromTabuj = Object.fromEntries(tabuj);



// uwaga
// parametry musza miec rozne klucze

*/





// .toString() zwraca kod zrodlowy


















// --> ES 2020 <--


// BigInt
// typeof duzaLiczba
// n



// globalThis 
// Ale jeśli używasz webworkera, tylko self działałoby, 
// a jeśli używasz Node.js, mają one 
// osobny obiekt o nazwie global i nie możesz uzyskać dostępu do window.
// console.log(globalThis);





// nullish Coalescing Operator oraz Optional Chaining Operator
/*
const farm = {
  dog: {
    age: 12,
  }
}
const getName = farm.dog.name || 'Wściekły pies';
console.log(getName);



// if (farm.dog.name) {
//   console.log(farm.dog.name);
// }


let person = {
  profile: {
    name: 'Piotrs'
  }
};

console.log(person?.profile?.name ?? "Anonymous"); // person.profile is undefined
console.log(person?.profile?.name ?? "Anonymous");
console.log(person?.profile?.age ?? 18);

*/



/*
const promise3 = fetch('https://api.covid19api.com/summary').then(response => response.json()).then(data => console.log(data));
const promise4 = fetch('https://cat-fact.herokuapp.com/facts').then(response => response.json()).then(data => console.log(data));
const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'foo'));
const promises = [promise1, promise2, promise3, promise4];

Promise.allSettled(promises).
  then((results) => results.forEach((result) => console.log(result)));

*/