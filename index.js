const readline = require('readline');
const { red, green, blue } = require('colorette');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const choixPossibles = ['pierre', 'feuille', 'ciseaux'];

let scoreJoueur = 0;
let scoreOrdi = 0;
const historique = [];

function comparer(choixJoueur, choixOrdi) {
  if (choixJoueur === choixOrdi) {
    return 'Egalité !';
  } else if (choixJoueur === 'pierre') {
    return (choixOrdi === 'ciseaux') ? choixJoueur : choixOrdi;
  } else if (choixJoueur === 'feuille') {
    return (choixOrdi === 'pierre') ? choixJoueur : choixOrdi;
  } else if (choixJoueur === 'ciseaux') {
    return (choixOrdi === 'feuille') ? choixJoueur : choixOrdi;
  }
}

function jouer() {
  const choixOrdi = choixPossibles[Math.floor(Math.random() * 3)];

  console.log(`Score : Joueur ${scoreJoueur} - ${scoreOrdi} Ordinateur`);
  console.log('\n');
  rl.question('Choisissez-vous pierre, feuille, ou ciseaux ? ', (choixJoueur) => {
    const resultat = comparer(choixJoueur, choixOrdi);

   
    console.log(`Score : Joueur ${scoreJoueur} - ${scoreOrdi} Ordinateur`);
    console.log(`\nVous avez choisi: ${choixJoueur}`);
    console.log(`L'ordinateur a choisi: ${choixOrdi}`);
    console.log(`\n${resultat === 'Egalité !' ? red(resultat) : (resultat === choixJoueur ? green('Gagné !') : blue('Perdu !'))}\n`);

    historique.push({
      choixJoueur,
      choixOrdi,
      resultat
    });

    if (scoreJoueur < 2 && scoreOrdi < 2) {
      jouer();
    } else {
      const message = (scoreOrdi === scoreJoueur) ? 'Égalité !' :
                      (scoreOrdi > scoreJoueur) ? 'Perdu !' :
                      'Gagné !';
      console.log(`\n${message} Votre score: ${scoreJoueur}, ordinateur: ${scoreOrdi}`);

      console.log('\nHistorique des tours :');
      historique.forEach((tour, index) => {
        console.log(`Tour ${index + 1}: Vous avez choisi ${tour.choixJoueur}, l'ordinateur a choisi ${tour.choixOrdi}, ${tour.resultat}`);
      });

      rl.close();
    }

    if (resultat === choixJoueur) {
      scoreJoueur++;
    } else if (resultat !== 'Egalité !') {
      scoreOrdi++;
    }
  });
}

jouer();