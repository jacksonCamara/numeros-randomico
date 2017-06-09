import * as Estat from 'probability-distributions'; //http://statisticsblog.com/probability-distributions/
import * as Simple from 'simple-statistics'; //https://simplestatistics.org/docs/
import * as Chi from 'chi-squared-test'; //https://www.npmjs.com/package/chi-squared-test
import { Util } from './util.model';

export class ChiQuadrado {
    public chiResultado: number;
    public observados: Array<number> = new Array();
    public frequenciaEsp: Array<number> = new Array();
    public reducaoGrauLiberdade: number = 1;
    private util: Util = new Util();
    private valorInicial: number;
    private valorFinal: number;

    constructor(observados: Array<number>, frequenciaEsp: Array<number>, valorInicial: number, valorFinal: number) {
        this.observados = observados;
        this.frequenciaEsp = frequenciaEsp;
        this.valorInicial = valorInicial;
        this.valorFinal = valorFinal
    }

    public executar() {

        let frequenciaObservaveis = this.util.frequenciaObservaveis(this.observados, this.valorInicial, this.valorFinal);
        let frequenciaObs = frequenciaObservaveis.map(f=>{
            return f.frequencia;
        })
        console.log(frequenciaObs);
        console.log(this.frequenciaEsp)


        try {
            let acc = 0;
            for (let i = 0; i < frequenciaObs.length; i++) {
                //Professore => Precisa calcular o zero referente aos numeros não ocorridos
                acc += Math.pow(frequenciaObs[i] - this.frequenciaEsp[i], 2) / this.frequenciaEsp[i];
                // console.log("frequencia obs" + frequenciaObs[i] )
                // console.log("frequencia esp" + this.frequenciaEsp[i] )

            }
            console.log("acc" + acc)
            return acc;
        } catch (erro) {
            console.log("Não foi possível fazer a analise" + erro)
        }
    }
}
