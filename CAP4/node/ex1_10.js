const prompt = require("prompt-sync")()
const veloPermitida = Number(prompt("Digite a velocidade permitida:"));
const veloCondutor = Number(prompt("Digite a velocidade do Condutor: "));

const velo20porcento = (veloPermitida * 0.2);

const veloMultaGrave = (veloCondutor - veloPermitida)

if(veloCondutor <= veloPermitida){
    console.log('SEM MULTA')
} else if( veloMultaGrave >= velo20porcento){
    console.log('MULTA GRAVE')
} else{
    console.log('MULTA LEVE')
}