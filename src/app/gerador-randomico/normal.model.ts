import * as Simple from 'simple-statistics'; //https://simplestatistics.org/docs/
export class Normal{
    
    constructor(){

    }

    public frequenciaEsperados(observados: Array<number>){
        let esperados: Array<number> = new Array();
        let media, desvioPadrao, resultado: number;
        console.log(Simple)
        media = Simple.mean(observados)
        desvioPadrao = Simple.standardDeviation(observados);
        let cal: number;
        observados.forEach(o =>{
            cal =  -0,5*(Math.pow(((o - media)/desvioPadrao),2));
            esperados.push(
                (1/(desvioPadrao * Math.sqrt(2 * Math.PI)) * Math.pow(Math.E,cal))
            )

        })
        console.log(media);
        console.log(desvioPadrao);
        console.log(observados);
        return esperados;
    }
}
