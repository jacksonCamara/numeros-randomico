export class MultiplicativoImplementado {

    public x: number = 0;
    public xAnt: number = 0;
    public a: number = Math.pow(7, 5);
    public m: number = Math.pow(2, 31) - 1;
    public numeros: Array<number>;



    public executar(i: number, x: number, y: number) {
        this.numeros = new Array();

/*
        this.numeros.push(1);
        this.numeros.push(8);
        this.numeros.push(3);
        this.numeros.push(2);



*/

        
        this.xAnt = Math.pow(x, 2) * y;
        console.log(this.xAnt);
        do {
            this.x = ((this.a * this.xAnt) % this.m);
            this.xAnt = this.x;
            this.numeros.push(this.x % 101);
            i--;
        } while (i > 0);

        console.log(this.numeros);
        return this.numeros;
    }
}