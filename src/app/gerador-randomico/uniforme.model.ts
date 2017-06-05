export class Uniforme {
    public esperados(observados: Array<number>): Array<number> {
        let esperados: Array<number> = new Array();
        observados.forEach(o => {
            esperados.push(1 / observados.length);
            //esperados.push(1);
        })
        console.log(esperados);
        return esperados;
    }
}