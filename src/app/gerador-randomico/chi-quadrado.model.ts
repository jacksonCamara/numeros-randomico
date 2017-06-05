import * as Estat from 'probability-distributions'; //http://statisticsblog.com/probability-distributions/
import * as Simple from 'simple-statistics'; //https://simplestatistics.org/docs/
import * as Chi from 'chi-squared-test'; //https://www.npmjs.com/package/chi-squared-test

export class ChiQuadrado {
    public chiResultado: number;
    public observados: Array<number> = new Array();
    public esperados: Array<number> = new Array();
    public reducaoGrauLiberdade: number = 1;

    constructor(observados: Array<number>, esperados: Array<number>) {
        this.observados = observados;
        this.esperados = esperados;

    }

    public executar() {
        console.log(this.observados);
        console.log(this.esperados);
        try {
            let acc = 0;
            for (let i = 0; i < this.observados.length; i++) {
                acc += (Math.pow((this.observados[i] - this.esperados[i]), 2)) / this.esperados[i];
            }
            console.log(acc);
            return acc;
        } catch (erro) {
            console.log("Não foi possível fazer a analise" + erro)
        }
        /*
        try {
            this.chiResultado = Chi.chiSquaredTest(this.observados, this.esperados, this.reducaoGrauLiberdade);
            console.log(this.chiResultado)
            return this.chiResultado;
        } catch (erro) {
            console.log("Não foi possível fazer a analise" + erro)
        }
        */
    }
}