export class CongruenteMultiplicativo {

    public x: number = 0;
    public xAnt: number = 0;
    public a: number = Math.floor(Math.random() * 100) + 1;
    public m: number = Math.floor(Math.random() * 100) + 1;
    public numeros: Array<number>;

    public executar(i: number) {
        this.numeros = new Array();
        this.xAnt = Math.floor(Math.random() * this.m) + 1;
        do {
            this.x = ((this.a * this.xAnt) % this.m);
            this.xAnt = this.x;
            this.numeros.push(this.x);
            i--;
        } while (i > 0);
        return this.numeros;
    }
}