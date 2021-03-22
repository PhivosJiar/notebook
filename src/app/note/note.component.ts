import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})


export class NoteComponent implements OnInit {

  num1='';num2='';fuhow ='';detail_num='';
  result=0;mnum=0;
  note  :any[] = [];


  constructor() { }

  ngOnInit(): void {
    this.history("reload");
  }

  count() { //一般四則運算
    switch(this.fuhow){
      case "+":
        this.result = parseFloat(this.num1) + parseFloat(this.num2);
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


   special_count(tempfuhow:any){//特殊符號運算
    switch(tempfuhow){
      case "^":
      if(this.result !=0 ){
        this.result *= this.result;
      }
      else{
        this.result=Math.pow(parseFloat(this.num1),2);
      }
      this.sign_change(tempfuhow);
      break;
    case "√":
      this.result = Math.pow(parseFloat(this.num1),0.5);
      this.sign_change(tempfuhow);
      break;
    case "log":
      this.result = Math.log(parseFloat(this.num1));
      this.sign_change(tempfuhow);
      break;
    case "=":
 
      break;
    }
  }
  String_addition(tempnum: any){//計算細節
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

  sign_change(tempsign: any){//變更符號
    this.fuhow = tempsign;
    this.detail_num += ' ' + tempsign + ' ';
    if(this.num2 != ''){
    this.num1=(this.result).toString();
    this.num2='';
    }
  }

  onchange(){//呼叫運算邏輯
    if(this.fuhow != ''){
      this.count();
    }
    else{
      return;
    }
  }

  memory(msign:any){//M+等功能
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

  clear(){//清空資料
    this.num1='';  this.num2=''; this.fuhow ='';this.detail_num='';
    this.result=0;
  }

  history(tempfuhow:any){//歷史計算資
    switch(tempfuhow){
      case "=":
        this.note.push({'title':this.detail_num , 'value' : this.result})
        localStorage.setItem('note',JSON.stringify(this.note));
        this.detail_num=this.result.toString();
        break;
      case "reload":
        this.note=JSON.parse(localStorage.getItem("note")|| '{}');
        break;
    }
  }
}