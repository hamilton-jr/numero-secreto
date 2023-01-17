export function validacao(fala,menorValor,maiorValor,numeroSecreto){
    const falaEmInteiro = parseInt(fala);
    console.log(falaEmInteiro);

    if (isNaN(falaEmInteiro)){       
        document.getElementById("msgErro").innerHTML = "Erro: O chute não é um número";       
    }
    else if(falaEmInteiro<menorValor || falaEmInteiro>maiorValor)
    {
        document.getElementById("msgErro").innerHTML = `Erro: O chute deve ser entre ${menorValor} e ${maiorValor}`; 
    }
    else if (falaEmInteiro==numeroSecreto)
    {
        document.body.innerHTML = `
        <h2>Você acertou !</h2>
        <h3>O Número secreto era ${numeroSecreto}</h3>
        <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>    
        `
        this.terminou=true;
    }
    else if(falaEmInteiro<numeroSecreto){
        document.getElementById("msgErro").innerHTML = `O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i>`;       
    }
    else if(falaEmInteiro>numeroSecreto){
        document.getElementById("msgErro").innerHTML = `O número secreto é menor <i class="fa-solid fa-arrow-down-long"></i>`;              
    }
}
