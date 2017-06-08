

export class Uniforme {
    public frequenciaEsperados(observados: Array<number>, numeroInicial, numeroFinal): Array<number> {
        let esperados: Array<number> = new Array();
        observados.forEach(o => {
            esperados.push(1 / observados.length);

        })

        for (let i = numeroInicial; i <= numeroFinal; i++) {
            esperados.push(1 / (numeroFinal - numeroInicial + 1))
        }

        return esperados;
    }
}