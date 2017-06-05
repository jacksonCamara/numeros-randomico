import * as Estat from 'probability-distributions'; //http://statisticsblog.com/probability-distributions/
import * as Simple from 'simple-statistics'; //https://simplestatistics.org/docs/
import * as Chi from 'chi-squared-test'; //https://www.npmjs.com/package/chi-squared-test

export class ChiQuadrado {



    public numeros: Array<number> = new Array();
    public esperados: Array<number> = new Array();
    //public pd:any;

    constructor(numeros: Array<number>) {
        this.numeros = numeros;




        let ii: number;
        let i: number = (1 / numeros.length) * 100;
        for (ii = numeros.length - 1; ii >= 0; ii--) {
            this.esperados[ii] = i;
        }
        /* 
                    this.numeros.push(1);
                     this.numeros.push(2);
                     this.numeros.push(3);
                     this.numeros.push(4);
                     this.numeros.push(5);
                     */
    }

    public executar() {
        let chi: number;
        let chiSimple: any;
        console.log(this.numeros);
        console.log(this.esperados);
        //console.log(Estat.rchisq());
        //chi = Chi(this.numeros, this.esperados, 1);
        // chiSimple = Simple.chiSquaredGoodnessOfFit(this.numeros, Simple.poissonDistribution, 0.01);
        //chiSimple = Simple.chiSquaredGoodnessOfFit(this.numeros, Simple.binomialDistribution, 0.01);
        console.log("teste do jack")
        console.log(Simple);
        console.log("teste do jack")
        try {
            chiSimple = Simple.chiSquaredGoodnessOfFit(this.numeros, Simple.poissonDistribution, 0.01);
        } catch (erro) {
            console.log("Não foi possível fazer a analise com o poisson")
        }
        console.log(chiSimple);
    }
}