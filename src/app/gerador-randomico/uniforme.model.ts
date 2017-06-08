
export class Uniforme {
    public esperados(observados: Array<number>): Array<number> {
        let frequenciaEsp: Array<number> = new Array();
        
        observados.forEach(o => {
            frequenciaEsp.push(1 / observados.length);
        })
        return frequenciaEsp;
    }
}