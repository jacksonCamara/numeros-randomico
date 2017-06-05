export class CongruenteAdaptacao {

    public x: number = 0;
    public xAnt: number = 0;
    public a: number = 23;
    public b: number = 47;
    public m: number = 99;
    public numeros: Array<number>;

    public executar(i: number) {
        this.numeros = new Array();
        this.xAnt = Math.floor(Math.random() * this.m) + 1;
        do {
            this.x = ((this.a * this.xAnt + this.b) % this.m);
            this.xAnt = this.x;
            this.numeros.push(this.x);
            i--;
        } while (i > 0);
        return this.numeros;
    }
}