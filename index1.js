// fonction qui cree un delai
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// fonction asynchrone qui affiche un message apres un delai
const asyncFunction = async () => {
    await delay(1000);
    console.log("Hello");
};

// fonction async qui itère sur un tableau avec un délai
const iterateWithAsyncAwait = async (array) => {
    for (const value of array) {
        await delay(1000);
        console.log(value);
    }
};

// appel de la fonction
asyncFunction();

// exemple d'appel de iterateWithAsyncAwait
const values = [1, 2, 3, 4, 5];
iterateWithAsyncAwait(values);

// fin du fichier index1.js
