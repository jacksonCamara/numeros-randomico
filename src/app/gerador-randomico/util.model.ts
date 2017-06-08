export class Util {
    public frequenciaObservaveis(observados: Array<number>): Array<number> {
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

        f = f.map(m =>{
            return new FrequenciaObservaveis(m.valor, m.qtdRepetido,m.frequencia * t.length)
        })
   
       
        let frequenciaObs: Array<number> = f.map(a =>{
            return a.frequencia;
        })
        
        console.log("tamanho do t" + t.length)
        return frequenciaObs;
    }



    private frequenciaEsperados(observados: Array<number>): number {
        let esperados: Array<number> = new Array();
        observados.forEach(o => {
            esperados.push(1 / observados.length);

        })
      
        return esperados[0];
    }
}

export class FrequenciaObservaveis {
    public valor: number;
    public qtdRepetido: number;
    public frequencia: number;

    constructor(valor: number, qtdRepetido: number, frequencia: number) {
        this.valor = valor;
        this.qtdRepetido = qtdRepetido;
        this.frequencia = frequencia;
    }


}
