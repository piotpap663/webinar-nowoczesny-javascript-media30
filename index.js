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







































































































// Set i Map

//new Map([iterable])
// Iterable jest tablicą lub innym iterowalnym obiektem, 
// którego elementy są parami typu klucz-wartość 
// (np. 2 elementowa tablica)




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




















//


















































// ----> ES9 <-----









































































const promise3 = fetch('https://api.covid19api.com/summary').then(response => response.json()).then(data => console.log(data));
const promise4 = fetch('https://cat-fact.herokuapp.com/facts').then(response => response.json()).then(data => console.log(data));
const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'foo'));
const promises = [promise1, promise2, promise3, promise4];

Promise.allSettled(promises).
  then((results) => results.forEach((result) => console.log(result)));

