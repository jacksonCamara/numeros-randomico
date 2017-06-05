export class Fibonacci {

    public xResult: number;
    public xAnt: number;
    public xAtual: number;
    public n: number = 99;
    public numeros: Array<number>;

    public executar(i: number) {
        this.numeros = new Array();
        i = i - 2;
        this.xAnt = Math.floor(Math.random() * this.n) + 1;
        //this.xAnt = 128
        this.numeros.push(this.xAnt);
        this.xAtual = Math.floor(Math.random() * this.n) + 1;
        //this.xAtual = 509
        this.numeros.push(this.xAtual);
        do {
            this.xResult = this.xAnt % this.xAtual;
            this.numeros.push(this.xResult);
            this.xAnt = this.xAtual;
            this.xAtual = this.xResult;
            i--;
        } while (i > 0);
        return this.numeros;
    }
}