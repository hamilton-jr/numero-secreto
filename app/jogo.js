const menorValor = 1;
const maiorValor = 1000;

document.getElementById("menor-valor").innerHTML = menorValor;
document.getElementById("maior-valor").innerHTML = maiorValor;

const numeroSecreto = Math.floor(menorValor + Math.random()*(maiorValor - menorValor + 1));
console.log("O número secreto é ", numeroSecreto);

import { ReconhecimentoDeVoz } from './reconhecimentoDeVoz.js';


const recDeVoz = new ReconhecimentoDeVoz(menorValor,maiorValor,numeroSecreto);

//const valid = validacao(menorValor,maiorValor,numeroSecreto);

recDeVoz.ouvir();
