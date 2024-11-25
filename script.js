/*
1. Napište funkci first, která jako svůj parametr přijme pole a vrátí první prvek tohoto pole. Pokud pole bude prázdné, funkce vrátí undefined. Funkci otestujte s několika různými poli. 
*/

const first = (arr) => arr[0];
console.log(first([3, 2, 1]));
console.log(first([]));

/*
2. Napište funkci last, která jako svůj parametr přijme pole a vrátí poslední prvek tohoto pole. Pokud pole bude prázdné, funkce vrátí undefined. Funkci otestujte s několika různými poli. 
*/

const last = (arr) => arr[arr.length - 1];
console.log(last([3, 2, 1]));
console.log(last([]));

/*
Napište funkci middle, která jako svůj parametr přijme pole a vrátí prvek uprostřed tohoto pole. Pokud pole bude prázdné, funkce vrátí undefined. Pokud pole bude obsahovat sudý počet prvků, vrátí funkce prvek vlevo od středu.
*/

const middle = (arr) => {
  const middleIndex =
    arr.length % 2 === 0 ? arr.length / 2 - 1 : (arr.length - 1) / 2;

  return arr[middleIndex];
};
console.log(middle([4, 3, 2, 1]));
console.log(middle([3, 2, 1]));
console.log(middle([]));

/*
Napište funkci middleMean, která jako svůj parametr přijme pole a vrátí prvek uprostřed tohoto pole. Pokud pole bude prázdné, funkce vrátí undefined. Pokud pole bude obsahovat sudý počet prvků, vrátí funkce průměr dvou prvků uprostřed. Funkci otestujte s několika různými poli.
*/

const middleMean = (arr) => {
  if (arr.length === 0) {
    return undefined;
  } else if (arr.length % 2 === 0) {
    return (arr[arr.length / 2 - 1] + arr[arr.length / 2]) / 2;
  } else {
    return arr[(arr.length - 1) / 2];
  }
};
console.log(middleMean([4, 3, 2, 1]));
console.log(middleMean([3, 2, 1]));
console.log(middleMean([]));

/*
Napište funkci insert, která jako první parametr přijme pole a jako druhý parametr nějakou hodnotu. Funkce zkontroluje, zda pole již obsahuje tuto hodnotu. Pokud ano, vrátí false. Pokud ne, vloží hodnotu na konec pole a vrátí true. Funkci otestujte s několika různými poli. 
*/

const insert = (arr, value) => {
  if (arr.includes(value)) {
    return false;
  } else {
    arr.push(value);
    console.log(arr);
    return true;
  }
};
console.log(insert([4, 3, 2, 1], 4));
console.log(insert([3, 2, 1], 4));
console.log(insert([], 5));
