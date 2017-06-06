export class Poisson {
    private iteracoes: number;
    constructor(iteracoes: number) {
        this.iteracoes = iteracoes;
    }

    public esperados(observados: Array<number>) {
        let esperados: Array<number> = new Array();
       // observados.forEach(o => {
        //    this.iteracoes * Math.pow(Math.E, this.lambda(o, o) * Math.pow(this.lambda(o,o), o )
       // })
        return esperados;
    }

    private lambda(valor: number, obs: number){
        return (valor * obs) / obs;
    }
}