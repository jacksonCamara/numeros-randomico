export class QuadradoMeio {

    public x: number;
    public numeros: Array<number>;

    public executar(i: number) {
        this.numeros = new Array();
        this.x = Math.floor(Math.random() * 9999) + 1;
        do {
            this.x = Math.pow(this.x, 2);
            if (this.x > 9999) {
                this.x = Number(this.x.toString().slice(0, 4));
                this.x++;
            }
            //this.numeros.push(this.x % 6 + 1);
            //1
            this.numeros.push(1);
            this.numeros.push(9);
            this.numeros.push(9);
            this.numeros.push(4);
            this.numeros.push(5);
            this.numeros.push(6);
            this.numeros.push(7);
            this.numeros.push(8);
            this.numeros.push(9);
            this.numeros.push(9);
            //2
            this.numeros.push(1);
            this.numeros.push(9);
            this.numeros.push(9);
            this.numeros.push(4);
            this.numeros.push(5);
            this.numeros.push(6);
            this.numeros.push(7);
            this.numeros.push(8);
            this.numeros.push(9);
            this.numeros.push(9);
            //3
            this.numeros.push(1);
            this.numeros.push(9);
            this.numeros.push(9);
            this.numeros.push(4);
            this.numeros.push(5);
            this.numeros.push(6);
            this.numeros.push(7);
            this.numeros.push(8);
            this.numeros.push(9);
            this.numeros.push(9);
            //4
            this.numeros.push(1);
            this.numeros.push(9);
            this.numeros.push(9);
            this.numeros.push(4);
            this.numeros.push(5);
            this.numeros.push(6);
            this.numeros.push(7);
            this.numeros.push(8);
            this.numeros.push(9);
            this.numeros.push(9);
            //5
            this.numeros.push(1);
            this.numeros.push(9);
            this.numeros.push(9);
            this.numeros.push(4);
            this.numeros.push(5);
            this.numeros.push(6);
            this.numeros.push(7);
            this.numeros.push(8);
            this.numeros.push(9);
            this.numeros.push(9);
            //6
            this.numeros.push(1);
            this.numeros.push(9);
            this.numeros.push(9);
            this.numeros.push(9);
            this.numeros.push(5);
            this.numeros.push(6);
            this.numeros.push(7);
            this.numeros.push(8);
            this.numeros.push(9);
            this.numeros.push(9);
            //7
            this.numeros.push(1);
            this.numeros.push(9);
            this.numeros.push(9);
            this.numeros.push(9);
            this.numeros.push(5);
            this.numeros.push(6);
            this.numeros.push(7);
            this.numeros.push(8);
            this.numeros.push(9);
            this.numeros.push(9);
            //8
            this.numeros.push(1);
            this.numeros.push(9);
            this.numeros.push(9);
            this.numeros.push(9);
            this.numeros.push(5);
            this.numeros.push(6);
            this.numeros.push(7);
            this.numeros.push(8);
            this.numeros.push(9);
            this.numeros.push(9);
            //9
            this.numeros.push(1);
            this.numeros.push(9);
            this.numeros.push(9);
            this.numeros.push(9);
            this.numeros.push(5);
            this.numeros.push(6);
            this.numeros.push(7);
            this.numeros.push(8);
            this.numeros.push(9);
            this.numeros.push(9);
            //10
            this.numeros.push(1);
            this.numeros.push(9);
            this.numeros.push(9);
            this.numeros.push(9);
            this.numeros.push(5);
            this.numeros.push(6);
            this.numeros.push(7);
            this.numeros.push(8);
            this.numeros.push(9);
            this.numeros.push(9);

            this.numeros.push(9);
            this.numeros.push(9);
            this.numeros.push(9);
            this.numeros.push(9);
            this.numeros.push(9);

            i--;
        } while (i > 0);
        return this.numeros;

    }

}