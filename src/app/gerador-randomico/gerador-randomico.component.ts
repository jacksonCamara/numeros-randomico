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
  public resultado: number;
  public qtdIteracoes: number;
  public numeros: Array<number>;//observados
  public esperados: Array<number>
  public valorInicial: number;
  public valorFinal: number;

  public estatistica: Estatistica;
  public chi: ChiQuadrado;


  constructor() { }

  ngOnInit() {
  }



  public poisson() {
    console.log("===================Poisson===================");
    let poisson: Poisson = new Poisson(this.numeros, this.valorInicial, this.valorFinal);
    this.esperados = poisson.frequenciaEsperados();
    this.chi = new ChiQuadrado(this.numeros, this.esperados, this.valorInicial, this.valorFinal);


  }

  public triangular() {
    console.log("===================Triangular===================");
    let triangular: Triangular = new Triangular(this.numeros);
    this.esperados = triangular.frequenciaEsperados();
    this.chi = new ChiQuadrado(this.numeros, this.esperados, this.valorInicial, this.valorFinal);

  }

  public uniforme() {
    console.log("===================Uniforme===================");
    let uniforme: Uniforme = new Uniforme();
    this.esperados = new Array();

    this.esperados = uniforme.frequenciaEsperados(this.numeros, this.valorInicial, this.valorFinal);
    this.chi = new ChiQuadrado(this.numeros, this.esperados, this.valorInicial, this.valorFinal);
  }

  public normal() {
    console.log("===================Normal===================");
    let normal: Normal = new Normal();
    normal.frequenciaEsperados(this.numeros);
    this.esperados = normal.frequenciaEsperados(this.numeros);
    this.chi = new ChiQuadrado(this.numeros, this.esperados, this.valorInicial, this.valorFinal);

  }


  public chiQuadrado() {
    console.log("===================Chi-Quadrado===================");
    this.resultado = this.chi.executar();
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

  }
}
