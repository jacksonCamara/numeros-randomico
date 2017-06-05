export class QuadradoMeio {

    public x: number;
    public numeros: Array<number>;

    public executar(i: number) {
        this.numeros = new Array();
        this.x = Math.floor(Math.random() * 9999) + 1;
        do {
            this.x = Math.pow(this.x, 2);
            if (this.x > 9999) {
                this.x = Number (this.x.toString().slice(0,4));
                this.x++;
            }
            this.numeros.push(this.x % 100 + 1);
            
            i--;
        } while (i > 0);
        console.log(this.numeros);
        return this.numeros;

    }

}