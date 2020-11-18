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
  display= null;

  valor1(event) {
    this.ValueOfOperation = this.ValueOfOperation + event;
    this.display = this.ValueOfOperation;
  }
  //Sem funcionamento Bs por enquanto.
  bs(){
    this.ValueOfOperation = this.ValueOfOperation.slice(0,-1)
    console.log(this.ValueOfOperation)
  }
  //botão = , Varios ifs para verificar a operação que deverar ser feita e dentro dela executa-la
  resultado(){
  if(this.operation === "+" && this.ValueOfOperation !== "" && this.ValueDinamyc !== ""){
    var value1 = this.ValueDinamyc;
    var value2 = this.ValueOfOperation;
    var resultado = parseInt(value1) + parseInt(value2)
    this.resul = resultado;
    this.operation = "";
    this.ValueDinamyc = "";
    this.ValueOfOperation = "";
    this.display = resultado;
    console.log("Entrei nesse condicional , e zerei as operações")
  }else if(this.operation === "-" && this.ValueOfOperation !== "" && this.ValueDinamyc !== ""){
    var value1 = this.ValueDinamyc;
    var value2 = this.ValueOfOperation;
    var resultado = parseInt(value1) - parseInt(value2)
    this.resul = resultado;
    this.display = resultado;
  }else if(this.operation === "*" && this.ValueOfOperation !== "" && this.ValueDinamyc !== ""){
    var value1 = this.ValueDinamyc;
    var value2 = this.ValueOfOperation;
    var resultado = parseInt(value1) * parseInt(value2)
    this.resul = resultado;
    this.display = resultado;
  }else if(this.operation === "/" && this.ValueOfOperation !== "" && this.ValueDinamyc !== ""){
    var value1 = this.ValueDinamyc;
    var value2 = this.ValueOfOperation;
    var resultado = parseInt(value1) / parseInt(value2)
    this.resul = resultado;
    this.display = resultado;

  }else if(this.ValueDinamyc === "" && this.operation === "+"){
    var valorResultado = this.resul
    var valorSecundario = this.ValueOfOperation
    var resultado = parseInt(valorResultado) + parseInt(valorSecundario)
    this.resul = resultado;
    this.display = resultado;
  }
  else if(this.ValueDinamyc === "" && this.operation === "-"){
    var valorResultado = this.resul
    var valorSecundario = this.ValueOfOperation
    var resultado = parseInt(valorResultado) - parseInt(valorSecundario)
    this.resul = resultado;
    this.display = resultado;
  }
  else if(this.ValueDinamyc === "" && this.operation === "*"){
    var valorResultado = this.resul
    var valorSecundario = this.ValueOfOperation
    var resultado = parseInt(valorResultado) * parseInt(valorSecundario)
    this.resul = resultado;
    this.display = resultado;
  }
  else if(this.ValueDinamyc === "" && this.operation === "/"){
    var valorResultado = this.resul
    var valorSecundario = this.ValueOfOperation
    var resultado = parseInt(valorResultado) / parseInt(valorSecundario)
    this.resul = resultado;
    this.display = resultado;
  }
  else{
    alert ('Conta inválida Cód: 200 - Sem operador.')
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
    if(this.operation === "+"){
    var valor1 = this.ValueOfOperation;
    var valor2 = this.ValueDinamyc;
    var resultado = (parseInt(valor1) / 100)* parseInt(valor2)  + parseInt(valor2);
    this.resul = resultado
    this.display = resultado
    this.ValueOfOperation = ""
    this.ValueDinamyc = ""
    }else if(this.operation === "-"){
      var valor1 = this.ValueOfOperation;
      var resultado = parseInt(valor1) / 100
      this.resul = resultado
      this.ValueOfOperation = ""
      this.ValueDinamyc = ""
      this.display = resultado
    }else if(this.operation === ""){
      var valor1 = this.ValueOfOperation;
      var resultado = parseInt(valor1) / 100
      this.resul = resultado
      this.ValueOfOperation = ""
      this.ValueDinamyc = ""
      this.display = resultado
    }else{
      alert("conta inválida")
    }
     
  }
  reverter(){
    this.resul = `-${this.ValueOfOperation}`

  }
  LimparTerminal() {
    this.resul = ""
    this.display= ""
  }
  Clean(){
    this.ValueOfOperation = ""
    this.ValueDinamyc = ""
    this.operation = ""
  }
  Display(){
    this.display = this.resul;
  }
  quadrado(){
    var quadrado = Math.pow(parseInt(this.ValueOfOperation),2)
    this.display = quadrado
    
  }

}
