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
        this.frequenciaObservaveis()
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

    }

    private frequenciaObservaveis() {
        let f: Array<FrequenciaObservaveis> = new Array();
        let qtd: number = 0;
        let cont: number = 0;
        let teste: number = 0;

        this.observados.forEach(valor => {
            this.observados.forEach(b => {
                if (valor == b) {
                    qtd++;
                }
            })
            f.forEach(a => {
                if (valor != a.valor) {
                    teste++
                }
            })
            if (teste == f.length) {
                f.push(new FrequenciaObservaveis(valor, qtd, qtd * this.esperados[cont]))
            }
            cont++;
            qtd = 0;
            teste = 0;
        })
        console.log(f)
    }
}

class FrequenciaObservaveis {
    public valor: number;
    public qtdRepetido: number;
    public frequencia: number;

    constructor(valor: number, qtdRepetido: number, frequencia: number) {
        this.valor = valor;
        this.qtdRepetido = qtdRepetido;
        this.frequencia = frequencia;
    }


}