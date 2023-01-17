export class ReconhecimentoDeVoz {

    SpeechRecognition;
    recognition;
    terminou=false;
    fala;
    menorValor;
    maiorValor;
    numeroSecreto;
    retorno;    

    constructor (menorValor,maiorValor,numeroSecreto) {
        this.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
        this.recognition = new this.SpeechRecognition();
        this.recognition.lang = 'pt-Br';
        this.menorValor = menorValor;
        this.maiorValor = maiorValor;
        this.numeroSecreto = numeroSecreto;
    }

    ouvir() {       
        this.recognition.start();
        this.recognition.addEventListener('result',this.onSpeak);
       
        this.recognition.addEventListener('end',()=> {
            console.log(this.terminou);
            if(this.terminou==false){this.recognition.start();};
        })

        document.body.addEventListener('click', e => {
            if(e.target.id == 'jogar-novamente') {
                window.location.reload();
            }
        })
    }

    onSpeak = (e) => {
        console.log("Ouvindo...");        
        this.fala = e.results[0][0].transcript;
        console.log(this.fala);
        document.getElementById('chute').style.display = 'block';
        document.getElementById("fala").innerHTML = this.fala;
        this.validacao();         
    }

    validacao() {
        const falaEmInteiro = parseInt(this.fala);

        console.log(falaEmInteiro);
    
        if (isNaN(falaEmInteiro)){       
            document.getElementById("msgErro").innerHTML = "Erro: O chute não é um número";       
        }
        else if(falaEmInteiro<this.menorValor || falaEmInteiro>this.maiorValor)
        {
            document.getElementById("msgErro").innerHTML = `Erro: O chute deve ser entre ${this.menorValor} e ${this.maiorValor}`; 
        }
        else if (falaEmInteiro==this.numeroSecreto)
        {
            document.body.innerHTML = `
            <h2>Você acertou !</h2>
            <h3>O Número secreto era ${this.numeroSecreto}</h3>   
            <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>       
            `
            this.terminou=true;
        }
        else if(falaEmInteiro<this.numeroSecreto){
            document.getElementById("msgErro").innerHTML = `O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i>`;       
        }
        else if(falaEmInteiro>this.numeroSecreto){
            document.getElementById("msgErro").innerHTML = `O número secreto é menor <i class="fa-solid fa-arrow-down-long"></i>`;              
        }
    }       
   
}

