import * as Simple from 'simple-statistics'; //https://simplestatistics.org/docs/
export class Triangular {
    public esperados(observados: Array<number>) {
        let esperados: Array<number>;
        let minima: number;
        let maxima: number;
        let moda: number;
        moda = Simple.mode(observados);
        console.log("moda: " + moda);
        minima = Simple.min(observados);
        console.log("min: " + minima);
        maxima = Simple.max(observados);
        console.log("max: " + maxima);

        return esperados;
    }
}