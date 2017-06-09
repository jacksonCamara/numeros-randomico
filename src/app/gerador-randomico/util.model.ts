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
            f.frequencia = (cont * frequenciaEsperado[0]/(numeroFinal - numeroInicial + 1));
        })
        console.log(frequenciaObservaveis);

        return frequenciaObservaveis;
    }



    private frequenciaEsperados(observados: Array<number>, numeroInicial, numeroFinal): Array<number> {
        let esperados: Array<number> = new Array();

        for (let i = numeroInicial; i <= numeroFinal; i++) {
            console.log(i)
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




/*



  let f: Array<FrequenciaObservaveis> = new Array();
        let t: Array<FrequenciaObservaveis> = new Array();
        let qtd: number = 0;
        let cont: number = 0;
        let teste: number = 0;

        let frequenciaEsperado: number = this.frequenciaEsperados(observados)

        observados.forEach(valor => {
            observados.forEach(b => {
                if (valor == b) {
                    qtd++;
                }
            })

            f.push(new FrequenciaObservaveis(valor, qtd, qtd * frequenciaEsperado / (observados.length)))


            t.forEach(a => {
                if (valor != a.valor) {
                    teste++
                }
            })
            if (teste == t.length) {
                t.push(new FrequenciaObservaveis(valor, qtd, qtd * frequenciaEsperado))
            }
            cont++;
            qtd = 0;
            teste = 0;

        })

        f = f.map(m => {
            return new FrequenciaObservaveis(m.valor, m.qtdRepetido, m.frequencia * t.length)
        })


        let frequenciaObs: Array<number> = f.map(a => {
            return a.frequencia;
        })

        console.log("tamanho do t" + t.length)
        return frequenciaObs;
*/