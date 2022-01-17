//Task8
let myMap = new Map();
myMap.set("Indonesia", "Jakarta");
myMap.set("Russia", "Moscow");
myMap.set("Brazil", "Brasilia");
myMap.set("Turkey", "Istanbul");

myMap.forEach((values, keys) => {
      console.log(`Country - ${keys}, Capital - ${values}`);
   })