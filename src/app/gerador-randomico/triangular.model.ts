import * as Simple from 'simple-statistics'; //https://simplestatistics.org/docs/
import {Util} from './util.model';

export class Triangular {
    private observados: Array<number>;
    constructor(observados: Array<number>){
        this.observados = observados;
    }
    public frequenciaEsperados() {
        let esperados: Array<number> = new Array();
        let minima: number;
        let maxima: number;
        let moda: Array<number>;
        let aux: number;
        let util:Util = new Util();
        //moda = Simple.mode(this.observados);
        moda = util.moda(this.observados);

        console.log("moda: " + moda);
        minima = Simple.min(this.observados);
        console.log("min: " + minima);
        maxima = Simple.max(this.observados);
        console.log("max: " + maxima);
/*
        this.observados.forEach(o => {
            if (minima == o) {
                if (o - minima != 0) {
                    esperados.push(2 * ((o - minima) / ((maxima - minima) * (moda - minima))))
                } else {
                    esperados.push(2 * ((0.000000000000001) / ((maxima - minima) * (moda - minima))))
                }
            } else if (o == moda) {
                esperados.push(2 / (maxima - minima));
            } else if (maxima == o) {
                if (maxima - o != 0) {
                    esperados.push(2 * ((maxima - o) / ((maxima - minima) * (moda - minima))))
                } else {
                    esperados.push(2 * ((0.000000000000001) / ((maxima - minima) * (maxima - moda))))
                }
            }
            else{
                esperados.push(0.000000000000001)
            }
        })
     
          */
             return esperados;
    }
  
}