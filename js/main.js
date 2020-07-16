
alert("Bienvenue dans le jeu du pendu !");

// VARIABLES

const regex = /[A-Z]/g;
const WORDS = ["voiture", "moto", "velo", "piscine", "maison"];

//-----------///////////////////////////////FONCTIONS///////////////////////////////////////////------------//

// Jouer, regles, quitter
function welcome() {
    let startGame = prompt(`Entrez :\n (p) pour jouer \n (r) pour avoir les regles \n (q) pour quitter`);
    if (startGame === "p") {
        game();
    } else if (startGame === "r") {
        alert("Le but du jeu est simple : deviner toute les lettres qui doivent composer un mot, avec un nombre de chance limitée à 7 tentatives. A chaque fois que le joueur devine une lettre, celle-ci est affichée. Dans le cas contraire, le dessin d'un pendu se met à apparaître…");
        welcome()
    } else if (startGame === "q") {
        alert(`bye`);
    } else {
        welcome()
    }
}
//REPLAY
function replay() {
    let answerUser = prompt("Voulez vous rejouer ? (oui ou non)")
    if(answerUser === "oui"){
    game();
    }
    else{
    alert("merci d'avoir joué, aurevoir")
    }   
}
//Choose random word into WORDS
function choiceRandomWord (){
    let randomWord = Math.floor(Math.random() * Math.floor(WORDS.length));
    return WORDS[randomWord];
}

// String to array with split method
function splitRandomWordInArray(randomWord) {
    let arrayWord = randomWord.split('');
    return arrayWord;    
}

// Change all index on array with (_)
function showHiddenLetter (randomWord){
    let hiddenLetter = [];
    for (let i = 0; i < randomWord.length; i++){
        hiddenLetter[i] = " _ ";
    }
    return hiddenLetter;
}

// Chech the userValue (just one letter)
function justOneLetter (oneLetter) {
    while(oneLetter.length > 1 && oneLetter.match(regex)) {
        oneLetter = prompt("Il faut rentrer une seule lettre !");
    }
    return oneLetter;
}

//----------/////////////////////////////////////////////////////////////////////////---------------//
function game(){
    let randomWord = choiceRandomWord(WORDS);
    let arrayWord = splitRandomWordInArray(randomWord);
    let hiddenLetter = showHiddenLetter(randomWord);
    let wordInProgress = 0; //the word is find ?
    let life = 7; //Life points


    while(life > 0) {

        let userChoice = justOneLetter(prompt(`Points de vie restants : ${life} \n\n${hiddenLetter}\n\nSaisis une lettre !`));
        if (arrayWord.includes(userChoice))  {
            for (var i = 0; i < arrayWord.length; i ++) {
                if (userChoice.toLowerCase() === arrayWord[i]) {
                    hiddenLetter[i] = userChoice.toLowerCase();
                    wordInProgress ++;    
                }
            }
        }
        else {
            life --;
        }
        if(wordInProgress === arrayWord.length){
            alert("Félicitation tu as gagné !");
            break
        }
        else if (life === 0) {
            alert("Perdu !");
        }
    }
    replay();
}
welcome();
game();
