import { Util } from "./util.model"
import { FrequenciaObservaveis } from "./util.model"
import * as Factorial from "math-factorial"

export class Poisson {
    private numeros: Array<number>;
    private util: Util = new Util();
    private numeroInicial: number;
    private numeroFinal: number;
    private frequenciaObservaveis: Array<FrequenciaObservaveis>;
    private frequenciaEsp: Array<number> = new Array();


    constructor(numeros: Array<number>, numeroInicial: number, numeroFinal: number) {
        this.numeros = numeros;
        this.numeroInicial = numeroInicial;
        this.numeroFinal = numeroFinal;
    }

    public frequenciaEsperados(): Array<number> {
        this.frequenciaObservaveis = this.util.frequenciaObservaveis(this.numeros, this.numeroInicial, this.numeroFinal);
        let n: number = this.qtdAmostraDiferentes();
        let LAMBDA: number = this.lambda();


        this.frequenciaObservaveis.forEach(f => {
            if (f.qtdRepetido > 0) {
                this.frequenciaEsp.push((n * Math.pow(Math.E, - LAMBDA) * Math.pow(LAMBDA, f.valor)) / Factorial(f.valor));
            }
        })
        console.log("frequencia dos Esperados: ")
        console.log(this.frequenciaEsp)
        return this.frequenciaEsp;
    }

    private lambda(): number {
        let acc = 0;
        let somaFrequenciaObservaveis = this.somaFrequenciaObservaveis();
        this.frequenciaObservaveis.forEach(f => {
            if (f.qtdRepetido > 0) {
                acc += (f.valor * f.frequencia) / somaFrequenciaObservaveis;
            }
        })
        console.log("lambda: " + acc)
        return acc;
    }

    private qtdAmostraDiferentes(): number {
        let cont: number = 0;
        this.frequenciaObservaveis.forEach(f => {
            if (f.qtdRepetido > 0) {
                cont++;
            }
        })
        console.log("Quantidade de Amostras Diferentes: " + cont);
        return cont;
    }

    private somaFrequenciaObservaveis() {
        let somador: number = 0;
        this.frequenciaObservaveis.forEach(f => {
            somador += f.frequencia;
        })
        console.log("Soma da frequencia dos Observaveis: " + somador);
        return somador;
    }
}