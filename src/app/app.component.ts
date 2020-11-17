import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculadora Iphone';
  ValueOfOperation = "";
  ValueDinamyc = "";
  operation= null;
  resul = null;

  valor1(event) {
    this.ValueOfOperation = this.ValueOfOperation + event;
    this.resul = this.ValueOfOperation;
    console.log(this.ValueOfOperation)
  }
  bs(){
    this.ValueOfOperation = this.ValueOfOperation.slice(0,-1)
    console.log(this.ValueOfOperation)
  }
  resultado(){
  if(this.operation === "+"){
    var value1 = this.ValueDinamyc;
    var value2 = this.ValueOfOperation;
    var resultado = parseInt(value1) + parseInt(value2)
    this.resul = resultado;
    this.operation = "";
  }else if(this.operation === "-"){
    var value1 = this.ValueDinamyc;
    var value2 = this.ValueOfOperation;
    var resultado = parseInt(value1) - parseInt(value2)
    this.resul = resultado;
  }else if(this.operation === "*"){
    var value1 = this.ValueDinamyc;
    var value2 = this.ValueOfOperation;
    var resultado = parseInt(value1) * parseInt(value2)
    this.resul = resultado;
  }else if(this.operation === "/"){
    var value1 = this.ValueDinamyc;
    var value2 = this.ValueOfOperation;
    var resultado = parseInt(value1) / parseInt(value2)
    this.resul = resultado;
  }else{
    alert ('Conta inválida')
  }
  this.Clean();
  }
  soma() {
    let replicar = this.ValueOfOperation
    this.ValueDinamyc = replicar;
    this.ValueOfOperation = ""
    this.operation = "+"
  }
  subtracao() {
    let replicar = this.ValueOfOperation
    this.ValueDinamyc = replicar;
    this.ValueOfOperation = ""
    this.operation = "-"
  }
  divisao() {
    let replicar = this.ValueOfOperation
    this.ValueDinamyc = replicar;
    this.ValueOfOperation = ""
    this.operation = "/"
  }
  multiplicacao() {
    let replicar = this.ValueOfOperation
    this.ValueDinamyc = replicar;
    this.ValueOfOperation = ""
    this.operation = "*"
  }
  porcentagem(){
    var valor1 = this.ValueOfOperation;
    var resultado = parseInt(valor1) / 100
    this.resul = resultado
    this.ValueOfOperation = ""
    this.ValueDinamyc = "" 
  }
  reverter(){
    this.resul = `-${this.ValueOfOperation}`

  }
  LimparTerminal() {
    this.resul = ""
  }
  Clean(){
    this.ValueOfOperation = ""
    this.ValueDinamyc = ""
    this.operation = ""
  }

}
