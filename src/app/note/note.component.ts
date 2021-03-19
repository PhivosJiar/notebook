import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})


export class NoteComponent implements OnInit {

  num1='';num2='';fuhow ='';detail_num='';
  result=0;mnum=0;

  constructor() { }

  ngOnInit(): void {

  }

  count() {
    switch(this.fuhow){
      case "+":
        this.result = parseFloat(this.num1) + parseFloat(this.num2);
        // var str = 'Tom';
        // localStorage.setItem('myName',str);
        break;
      case "-":
        this.result = parseFloat(this.num1) - parseFloat(this.num2);
        break;
      case "*":
        this.result = parseFloat(this.num1) * parseFloat(this.num2);
        break;
      case "/":
        this.result = parseFloat(this.num1) / parseFloat(this.num2);
        break;
    }
  }


   special_count(tempfuhow:any){
    switch(tempfuhow){
      case "^":
      if(this.result !=0 ){
        this.result *= this.result;
      }
      else{
        this.result=Math.pow(parseFloat(this.num1),2);
      }
      break;
    case "√":
      this.result = Math.pow(parseFloat(this.num1),0.5);
      break;
    case "log":
      this.result = Math.log(parseFloat(this.num1));
      break;
    case "𝝿":
      this.result = parseFloat(this.num1) * Math.PI;
      break;
  }
}
  String_addition(tempnum: any){
    if(this.fuhow == ''){
        this.num1 += tempnum;
        this.detail_num +=tempnum;
    }
    else{
        this.num2 += tempnum;
        this.detail_num +=tempnum;
        this.onchange();
    }
  }

  sign_change(tempsign: any){
    this.fuhow = tempsign;
    this.detail_num += ' ' + tempsign + ' ';
    if(this.num2 != ''){
    this.num1=(this.result).toString();
    this.num2='';
    }
  }

  onchange(){
    if(this.fuhow != ''){
      this.count();
    }
    else{
      return;
    }
  }

  memory(msign:any){
    switch(msign){
      case '+':
        if(this.result !=0){
          this.mnum += this.result;
        }else{
          this.mnum += parseInt(this.num1);
        }
        this.result=0;this.num1='';this.num2='';this.fuhow='';this.detail_num='';
        break;
      case '-':
        if(this.result !=0){
          this.mnum -= this.result;
        }else{
          this.mnum -= parseInt(this.num1);
        }
        this.result=0;this.num1='';this.num2='';this.fuhow='';this.detail_num='';
        break;
      case 'r':
        if(this.mnum!=0){
          this.result=this.mnum;
          this.num1=(this.mnum).toString();
          this.detail_num=this.num1;
        }else{
          this.result=0;
        }
        break;
      case 'c':
        this.mnum=0;
        break;
    }
  }

  clear(){
    this.num1='';  this.num2=''; this.fuhow ='';this.detail_num='';
    this.result=0;
  }
}
