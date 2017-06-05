import * as Estat from 'probability-distributions';
//var t = require("probability-distributions");

export class Estatistica{
    public numeros: Array<number> = new Array();
    public estatistica: Array<number>;
    //public pd:any;

    constructor(numeros: Array<number>){
        this.numeros = numeros;
    }

    public executar(){
      
     console.log(Estat.rbinom(7, 12, 0.2));
     
    } 

     public aleatorioQuadradoMeio(){
    console.log("===================Gerador Aleatório Quadrado do Meio===================");


  }

public aleatorioPotencia(){
    console.log("===================Gerador Aleatório Congruente Potência===================");


  }

public aleatorioAdaptado(){
    console.log("===================Gerador Aleatório Congruente Potência Adaptado===================");


  }

public aleatorioMultiplicativo(){
    console.log("===================Gerador Aleatório Congruente Multiplicativo===================");


  }

public aleatorioPoisson(){
    console.log("===================Gerador Aleatório Distribuição Poisson===================");


  }

public aleatorioTriangular(){
    console.log("===================Gerador Aleatório Distribuição Triangular===================");


  }

public aleatorioUniforme(){
     this.estatistica= new Array();
    console.log("===================Gerador Aleatório Distribuição Uniforme===================");

    this.estatistica = Estat.rint(500, 1, 100);
    console.log(this.estatistica);

  }

public aleatorioNormal(){
    console.log("===================Gerador Aleatório Distribuição Normal===================");


  }

}

//   this.pd = new Estat();
     // console.log(this.pd.rbinom(7, 12, 0.2));
        //console.log(this.pd.rchisq(this.numeros, this.numeros.length - 1));
       // console.log(Estat.rbinom(7, 12, 0.2));
      //  console.log(Estat);
      //  console.log(Estat().rbinom(7, 12, 0.2))
      