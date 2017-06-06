import { Component, OnInit } from '@angular/core';
import { Estatistica } from './estatistica.model';
import { QuadradoMeio } from './quadrado-meio.model';
import { CongruentePotencia } from './congruente-potencia.model';
import { CongruenteAdaptacao } from './congruente-adaptacao.model';
import { CongruenteMultiplicativo } from './congruente-multiplicativo.model';
import { MultiplicativoImplementado } from './multiplicativo-implementado.model';
import { Fibonacci } from './fibonacci.model';
import { ChiQuadrado } from './chi-quadrado.model';
import { Poisson } from './poisson.model';
import { Triangular } from './triangular.model';
import { Uniforme } from './uniforme.model';
import { Normal } from './normal.model';

@Component({
  selector: 'app-gerador-randomico',
  templateUrl: './gerador-randomico.component.html',
  styleUrls: ['./gerador-randomico.component.css']
})
export class GeradorRandomicoComponent implements OnInit {
  public resultado: number = 0;
  public qtdIteracoes: number;
  public numeros: Array<number>;//observados
  public esperados: Array<number>


  public estatistica: Estatistica;
  public chi: ChiQuadrado;


  constructor() { }

  ngOnInit() {
  }



  public poisson() {
    console.log("===================Gerador Aleatório Distribuição Poisson===================");
    let poisson: Poisson = new Poisson(this.qtdIteracoes);


  }

  public triangular() {
    console.log("===================Gerador Aleatório Distribuição Triangular===================");
    let triangular: Triangular = new Triangular();
    this.esperados = triangular.esperados(this.numeros);
    this.chi = new ChiQuadrado(this.numeros, this.esperados);; 

  }

  public uniforme() {
    console.log("===================Gerador Aleatório Distribuição Uniforme===================");
    let uniforme: Uniforme = new Uniforme();
    this.esperados = new Array();
    this.esperados = uniforme.esperados(this.numeros);
    this.chi = new ChiQuadrado(this.numeros, this.esperados);
  }

  public normal() {
    console.log("===================Gerador Aleatório Distribuição Normal===================");
    let normal: Normal = new Normal();
    normal.esperados(this.numeros);
    this.esperados = normal.esperados(this.numeros);
    this.chi = new ChiQuadrado(this.numeros, this.esperados);; 

  }


  public chiQuadrado() {
    console.log("===================Chi-Quadrado===================");
      this.chi.executar();
  }

  public quadradoMeio(): void {
    console.log("===================Quadrado Do Meio===================");
    this.numeros = new Array();
    let quadradoMeio: QuadradoMeio = new QuadradoMeio();
    this.numeros = quadradoMeio.executar(this.qtdIteracoes);

  }

  public congruentePotencia(): void {
    console.log("===================Congruente Potência===================");
    this.numeros = new Array();
    let congruentePotencia: CongruentePotencia = new CongruentePotencia();
    this.numeros = congruentePotencia.executar(this.qtdIteracoes);
  }

  public congruenteAdaptacao(): void {
    console.log("===================Congruente Adaptação===================");
    this.numeros = new Array();
    let congruenteAdaptacao: CongruenteAdaptacao = new CongruenteAdaptacao();
    this.numeros = congruenteAdaptacao.executar(this.qtdIteracoes);
  }

  public congruenteMultiplicativo(): void {
    console.log("===================Congruente Multiplicativo===================");
    this.numeros = new Array();
    let congruenteMultiplicativo: CongruenteMultiplicativo = new CongruenteMultiplicativo();
    this.numeros = congruenteMultiplicativo.executar(this.qtdIteracoes);
  }

  public geradorFibonacci(): void {
    console.log("===================Gerador Fibonacci===================");
    this.numeros = new Array();
    let fibonacci: Fibonacci = new Fibonacci();
    this.numeros = fibonacci.executar(this.qtdIteracoes);
  }

  public multiplicativoImplementado(): void {
    console.log("===================Congruente Multiplicativo Implementado===================");
    //console.log(event);
    this.numeros = new Array();
    let mouse: MouseEventInit = event;
    let x: number = mouse.clientX;
    let y: number = mouse.clientY;
    let multiplicativo: MultiplicativoImplementado = new MultiplicativoImplementado();
    this.numeros = multiplicativo.executar(this.qtdIteracoes, x, y);



    /*
        let xPos = x.clientX;     // Get the horizontal coordinate
        // let yPos: number = y.clientY();     // Get the vertical coordinate
        var coor = "X coords: " + xPos + ", Y coords: ";
        console.log(coor);
        //multiplicativo.executar(this.qtdIteracoes);
        */
  }




}
