const choixPossibles = ['pierre', 'feuille', 'ciseaux'];

let scoreJoueur = 0;
let scoreOrdi = 0;
const historique = [];

function comparer(choixJoueur, choixOrdi) {
  if (choixJoueur === choixOrdi) {
    return 'Egalité !';
  } else if (choixJoueur === 'pierre') {
    return (choixOrdi === 'ciseaux') ? 'Gagné !' : 'Perdu !';
  } else if (choixJoueur === 'feuille') {
    return (choixOrdi === 'pierre') ? 'Gagné !' : 'Perdu !';
  } else if (choixJoueur === 'ciseaux') {
    return (choixOrdi === 'feuille') ? 'Gagné !' : 'Perdu !';
  }
}

function jouer() {
  const choixOrdi = choixPossibles[Math.floor(Math.random() * 3)];
  const choixJoueur = choixPossibles[Math.floor(Math.random() * 3)];
  const resultat = comparer(choixJoueur, choixOrdi);

  console.log(`Tour ${historique.length + 1}: Vous avez choisi \x1b[33m${choixJoueur}\x1b[0m, l'ordinateur a choisi \x1b[33m${choixOrdi}\x1b[0m, résultat: ${resultat === 'Egalité !' ? '\x1b[33mEgalité !\x1b[0m' : (resultat === 'Gagné !' ? '\x1b[32mGagné !\x1b[0m' : '\x1b[31mPerdu !\x1b[0m')}`);

  historique.push({
    choixJoueur,
    choixOrdi,
    resultat
  });

  if (resultat === 'Gagné !') {
    scoreJoueur++;
  } else if (resultat !== 'Egalité !') {
    scoreOrdi++;
  }

  if (scoreJoueur < 2 && scoreOrdi < 2) {
    jouer();
  } else {
    const message = (scoreOrdi === scoreJoueur) ? '\x1b[33mÉgalité !\x1b[0m' :
      (scoreOrdi > scoreJoueur) ? '\x1b[31mPerdu !\x1b[0m' :
      '\x1b[32mGagné !\x1b[0m';
    console.log(`\n${message} Votre score: \x1b[36m${scoreJoueur}\x1b[0m, ordinateur: \x1b[36m${scoreOrdi}\x1b[0m`);

    console.log('\nHistorique des tours :');
        historique.forEach((tour, index) => {
      console.log(`Tour ${index + 1}: Vous avez choisi \x1b[33m${tour.choixJoueur}\x1b[0m, l'ordinateur a choisi \x1b[33m${tour.choixOrdi}\x1b[0m, résultat: ${tour.resultat === 'Egalité !' ? '\x1b[33mEgalité !\x1b[0m' : `${tour.resultat === tour.choixJoueur ? '\x1b[32m' + tour.choixOrdi + '\x1b[0m, résultat: ' + tour.resultat : '\x1b[31m' + tour.choixOrdi + '\x1b[0m, résultat: ' + tour.resultat}`}`);
    });
  }
} 

jouer();