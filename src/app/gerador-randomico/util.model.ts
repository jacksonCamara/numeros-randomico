export class Util {
    public frequenciaObservaveis(observados: Array<number>, numeroInicial: number, numeroFinal: number): Array<FrequenciaObservaveis> {
        let frequenciaObservaveis: Array<FrequenciaObservaveis> = new Array();
        let frequenciaEsperado: Array<number> = this.frequenciaEsperados(observados, numeroInicial, numeroFinal);
        for (let i = numeroInicial; i <= numeroFinal; i++) {
            frequenciaObservaveis.push(new FrequenciaObservaveis(i))
        }

        let cont = 0;
        frequenciaObservaveis.forEach(f => {
            cont = 0;
            observados.forEach(o => {
                if (f.valor == o) {
                    cont++;
                }
            })
            f.qtdRepetido = cont;
            f.frequencia = (cont * frequenciaEsperado[0] / (numeroFinal - numeroInicial + 1));
        })
        return frequenciaObservaveis;
    }

    public moda(observados: Array<number>): Array<number> {
        let moda: Array<number> = new Array();
        let frequenciaObservaveis: Array<FrequenciaObservaveis> = new Array();
        let maiorQtd = 0;
        let cont;

        observados.forEach(o => {
            frequenciaObservaveis.push(new FrequenciaObservaveis(o))
        })


        frequenciaObservaveis.forEach(f => {
            cont = 0;
            observados.forEach(o => {
                if (f.valor == o) {
                    cont++;
                }
            })
            f.qtdRepetido = cont;
        })

        frequenciaObservaveis.forEach(f => {
            if (maiorQtd < f.qtdRepetido) {
                maiorQtd = f.qtdRepetido
            }
        })

        frequenciaObservaveis.forEach(f => {
            if (maiorQtd == f.qtdRepetido) {
                if (!this.valorInseridoModa(f.valor, moda)) {
                    moda.push(f.valor)
                }

            }
        })
        return moda;
    }

    private valorInseridoModa(valor, array: Array<number>): boolean {
        return array.some(a =>
            a == valor
        )
    }

    private frequenciaEsperados(observados: Array<number>, numeroInicial, numeroFinal): Array<number> {
        let esperados: Array<number> = new Array();

        for (let i = numeroInicial; i <= numeroFinal; i++) {
            esperados.push(1 / (numeroFinal - numeroInicial + 1))
        }

        return esperados;
    }
}

export class FrequenciaObservaveis {
    public valor: number;
    public qtdRepetido: number;
    public frequencia: number;

    constructor(valor: number) {
        this.valor = valor;
    }
}
