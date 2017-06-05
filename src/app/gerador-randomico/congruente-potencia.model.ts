export class CongruentePotencia {

    public x: number = 0;
    public a: number = Math.floor(Math.random() * 100) + 1;
    public m: number = Math.floor(Math.random() * 100) + 1;
    public n: number= 0;
    public numeros: Array<number>;

    
    public executar(i: number) {
        console.log(this.a);
        console.log(this.m);
        this.numeros = new Array();
        do {
            this.n = Math.floor(Math.random() * this.m) + 1;
            this.x = (Math.pow(this.a, this.n) % this.m);
            this.numeros.push(this.x % 100 + 1);
            i--;
        } while (i > 0);
        console.log(this.numeros);
        return this.numeros;
    }
}