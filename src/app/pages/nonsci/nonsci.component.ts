import { IfStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matrix',
  templateUrl: './nonsci.component.html',
  styleUrls: ['./nonsci.component.scss']
})
export class NonsciComponent implements OnInit {

  constructor() { }

   
  ngOnInit(): void {
  }

  ops: string[] = []; //used to sotre numbers and operations for calcs
  stack: string = ''; //where user input for numbers is placed and eventually popped off into an array
  bool = true; //used to determine whether to show the user input (the stack) or not
  bool1 = false; //used to determine whether to hgihglight an operation button or not
  bool2 = false; //used to determien whether to show the answer to a calculation or not
  holder=0; //used for intermediate calculations


  public add1(){
    this.unlightButton();
    this.unlightButton1();
    this.unlightButton2();
    this.unlightButton3();
    if (this.bool2==true && this.ops[1]==null){ //used to reset calc
      this.ops = [];
      this.bool2=false;
    }
    else{
      this.bool2 = false;
    }
    this.stack=this.stack.concat('1');
  if (this.bool==false){
    this.bool=true;
    }
  }

  public add2(){
    this.unlightButton();
    this.unlightButton1();
    this.unlightButton2();
    this.unlightButton3();
    if (this.bool2==true && this.ops[1]==null){ 
      this.ops = [];
      this.bool2=false;
    }
    else{
      this.bool2 = false;
    }
    this.stack=this.stack.concat('2');
    if (this.bool==false){
    this.bool=true;
    }
  }

  public add3(){
    this.unlightButton();
    this.unlightButton1();
    this.unlightButton2();
    this.unlightButton3();
    if (this.bool2==true && this.ops[1]==null){ 
      this.ops = [];
      this.bool2=false;
    }
    else{
      this.bool2 = false;
    }
    this.stack=this.stack.concat('3');
    if (this.bool==false){
    this.bool=true;
    }
  }

  public add4(){
    this.unlightButton();
    this.unlightButton1();
    this.unlightButton2();
    this.unlightButton3();
   if (this.bool2==true && this.ops[1]==null){ 
      this.ops = [];
      this.bool2=false;
    }
    else{
      this.bool2 = false;
    }
    this.stack=this.stack.concat('4');
    if (this.bool==false){
    this.bool=true;
    }
  }

  public add5(){
    this.unlightButton();
    this.unlightButton1();
    this.unlightButton2();
    this.unlightButton3();
    if (this.bool2==true && this.ops[1]==null){ 
      this.ops = [];
      this.bool2=false;
    }
    else{
      this.bool2 = false;
    }
    this.stack=this.stack.concat('5');
    if (this.bool==false){
    this.bool=true;
    }
  }

  public add6(){
    this.unlightButton();
    this.unlightButton1();
    this.unlightButton2();
    this.unlightButton3();
    if (this.bool2==true && this.ops[1]==null){ 
      this.ops = [];
      this.bool2=false;
    }
    else{
      this.bool2 = false;
    }
    this.stack=this.stack.concat('6');
    if (this.bool==false){
    this.bool=true;
    }
  }

  public add7(){
    this.unlightButton();
    this.unlightButton1();
    this.unlightButton2();
    this.unlightButton3();
    if (this.bool2==true && this.ops[1]==null){ 
      this.ops = [];
      this.bool2=false;
    }
    else{
      this.bool2 = false;
    }
    this.stack=this.stack.concat('7');
    if (this.bool==false){
    this.bool=true;
    }
  }

  public add8(){
    this.unlightButton();
    this.unlightButton1();
    this.unlightButton2();
    this.unlightButton3();
    if (this.bool2==true && this.ops[1]==null){ 
      this.ops = [];
      this.bool2=false;
    }
    else{
      this.bool2 = false;
    }
    this.stack=this.stack.concat('8');
    if (this.bool==false){
    this.bool=true;
    }
  }

  public add9(){
    this.unlightButton();
    this.unlightButton1();
    this.unlightButton2();
    this.unlightButton3();
    if (this.bool2==true && this.ops[1]==null){ 
      this.ops = [];
      this.bool2=false;
    }
    else{
      this.bool2 = false;
    }
    this.stack=this.stack.concat('9');
    if (this.bool==false){
    this.bool=true;
    }
  }

  public add0(){
    this.unlightButton();
    this.unlightButton1();
    this.unlightButton2();
    this.unlightButton3();
    if (this.bool2==true && this.ops[1]==null){ 
      this.ops = [];
      this.bool2=false;
    }
    else{
      this.bool2 = false;
    }
    this.stack=this.stack.concat('0');
    if (this.bool==false){
    this.bool=true;
    }
  }

  public addDec(){
    this.unlightButton();
    this.unlightButton1();
    this.unlightButton2();
    this.unlightButton3();
    if (this.bool2==true && this.ops[1]==null){ 
      this.ops = [];
      this.bool2=false;
    }
    else{
      this.bool2 = false;
    }
    this.stack=this.stack.concat('.');
    if (this.bool==false){
    this.bool=true;
    }
  }

  //unhighlights the add button
  public unlightButton(){  
    const button = document.getElementById('+');
      if (this.bool1==true){
        this.stack='';
      }
    if(button!=null){
     button.style.backgroundColor='white';
     this.bool1 = false;
      }
  }

  //unhighlights the sub button
  public unlightButton1(){  
    const button = document.getElementById('-');
      if(button!=null){
     button.style.backgroundColor='white';
     this.bool1 = false;
      }
  }

  //unhighlights the mult button
  public unlightButton2(){
    const button = document.getElementById('x');
      if(button!=null){
     button.style.backgroundColor='white';
     this.bool1 = false;
      }
  }

  //unhighlights the div button
  public unlightButton3(){
    const button = document.getElementById('/');
      if(button != null){
     button.style.backgroundColor = 'white';
     this.bool1 = false;
      }
  }

  public clear(){
    this.stack = '';
    this.ops = [];
    this.bool = true;
    this.bool1 = false;
    this.bool2 = false;
    this.holder = 0;
    this.unlightButton();
    this.unlightButton1();
    this.unlightButton2();
    this.unlightButton3();
  }

  public invert(){
    if (this.stack ==''){
      this.stack = '-';
    }
    else{
      if(this.stack[0] == '-'){
        this.stack =  this.stack.substring(1);
      }
      else{
        this.stack = '-' + this.stack;
      }
    }
  }

  public percent(){
    this.stack = (+this.stack/100) as unknown as string;
  }

  public del(){
    if (this.stack!=''){
      this.stack = this.stack.slice(0,-1);
    }
  }

 
  public addList(){
    const button = document.getElementById('+');
      if(button!=null && this.bool1==false){
     button.style.backgroundColor='blue';
     this.bool1 = true;
    if (this.stack!=''){
      this.ops.push(this.stack);
      this.stack = '';
    }
    if (this.bool2 == true){
      this.bool2=false;
    }
    if (this.ops.length==3){
      this.compute1();
    }
    this.ops.push('+');
    }
}



  public subList(){
     const button = document.getElementById('-');
      if(button!=null && this.bool1==false){
     button.style.backgroundColor='blue';
     this.bool1 = true;
    if (this.stack!=''){
      this.ops.push(this.stack);
      this.stack = '';
    }
    if (this.bool2 == true){
      this.bool2=false;
    }
    if (this.ops.length==3){
      this.compute1();
    }
    this.ops.push('-');
  }
}

  public multList(){
     const button = document.getElementById('x');
      if(button!=null && this.bool1==false){
     button.style.backgroundColor='blue';
     this.bool1 = true;
    if (this.stack!=''){
      this.ops.push(this.stack);
      this.stack = '';
    }
    if (this.bool2 == true){
      this.bool2=false;
    }
    if (this.ops.length==3){
      this.compute1();
    }
    this.ops.push('x');
  }
}

  public divList(){
    const button = document.getElementById('/');
    if(button!=null && this.bool1==false){
     button.style.backgroundColor='blue';
     this.bool1 = true;
    if (this.stack!=''){
      this.ops.push(this.stack);
      this.stack = '';
    }
    if (this.bool2 == true){
      this.bool2=false;
    }
    if (this.ops.length==3){
      this.compute1();
    }
    this.ops.push('/');
  }
}



  public compute(){
    this.ops.push(this.stack);
    this.stack='';
    this.bool = false;
    this.bool1 = false;
    this.bool2 = true;
      if (this.ops[1]=='+'){
        this.holder = +this.ops[0] + +this.ops[2];
      }
      else if (this.ops[1]=='-'){
        this.holder = +this.ops[0] - +this.ops[2];
      }
      else if (this.ops[1]=='x'){
        this.holder = +this.ops[0] * +this.ops[2];
      }
      else if (this.ops[1]=='/'){
        this.holder = +this.ops[0] / +this.ops[2];
      }
      this.ops = [];
      this.ops.push(this.holder as unknown as string);
      this.holder = 0;
  }

    public compute1(){
    this.bool = false;
    this.bool1 = false;
    this.bool2 = true;
      if (this.ops[1]=='+'){
        this.holder = +this.ops[0] + +this.ops[2];
      }
      else if (this.ops[1]=='-'){
        this.holder = +this.ops[0] - +this.ops[2];
      }
      else if (this.ops[1]=='x'){
        this.holder = +this.ops[0] * +this.ops[2];
      }
      else if (this.ops[1]=='/'){
        this.holder = +this.ops[0] / +this.ops[2];
      }
      this.ops = [];
      this.ops.push(this.holder as unknown as string);
      this.holder = 0;
  }


}
