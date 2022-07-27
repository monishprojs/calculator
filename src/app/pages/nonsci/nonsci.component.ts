import { IfStmt, ThisReceiver } from '@angular/compiler';
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

  ops: string[] = []; //used to store numbers and operations for calcs
  stack: string = ''; //where user input for numbers is placed and eventually popped off into an array
  bool = true; //used to determine whether to show the user input (the stack) or not
  bool1 = false; //used to determine whether to highlight an operation button or not
  bool2 = false; //used to determine whether to show the answer to a calculation or not
  holder = 0; //used for intermediate calculations

  //adds 1 to the user input string
  public add(digit: string) {
    this.unlightAll();
    if (this.bool2 == true && this.ops[1] == null) {
      //used to reset calc
      this.ops = [];
      this.bool2 = false;
    } else {
      this.bool2 = false;
    }
    this.stack = this.stack.concat(digit);
    if (this.bool == false) {
      this.bool = true;
    }
  }


  //unlights all operator buttons
  public unlightAll() {
    this.unlightButton();
    this.unlightButton1();
    this.unlightButton2();
    this.unlightButton3();
  }

  //unhighlights the add button
  public unlightButton() {
    const button = document.getElementById('+');
    if (this.bool1 == true) {
      this.stack = '';
    }
    if (button != null) {
      button.style.backgroundColor = 'white';
      this.bool1 = false;
    }
  }

  //unhighlights the sub button
  public unlightButton1() {
    const button = document.getElementById('-');
    if (button != null) {
      button.style.backgroundColor = 'white';
      this.bool1 = false;
    }
  }

  //unhighlights the mult button
  public unlightButton2() {
    const button = document.getElementById('*');
    if (button != null) {
      button.style.backgroundColor = 'white';
      this.bool1 = false;
    }
  }

  //unhighlights the div button
  public unlightButton3() {
    const button = document.getElementById('/');
    if (button != null) {
      button.style.backgroundColor = 'white';
      this.bool1 = false;
    }
  }

  //clears everything, effectiveloy resets the calculator
  public clear() {
    this.stack = '';
    this.ops = [];
    this.bool = true;
    this.bool1 = false;
    this.bool2 = false;
    this.holder = 0;
    this.unlightAll();
  }

  //changes a number's sign
  public invert() {
    if (this.stack == '') {
      this.stack = '-';
    } else if (this.stack == '-') {
      this.stack = '';
    } else {
      if (this.stack[0] == '-') {
        this.stack = this.stack.substring(1);
      } else {
        this.stack = '-' + this.stack;
      }
    }
  }

  //turns a number into a percent
  public percent() {
    this.stack = (+this.stack / 100) as unknown as string;
  }

  //deletes the last digit added to userinput
  public del() {
    if (this.stack != '') {
      this.stack = this.stack.slice(0, -1);
    }
  }

  
  /**
   * 
   * @param operation operation used for calculation
   * stores the operation in an array, or changes the operation if desired
   */
  public operateList(operation: string) {
    const button = document.getElementById(operation);
    if (button!=null){
    if (this.bool1 == false) {
      button.style.backgroundColor = 'blue';
      this.bool1 = true;
      if (this.stack != '') {
        this.ops.push(this.stack);
        this.stack = '';
        this.bool2 = true;
      }
      if (this.ops.length == 3) {
        this.compute1();
      }
      this.ops.push(operation);
    } 
    else {
      this.ops.pop();
      this.unlightAll();
      button.style.backgroundColor = 'blue';
      this.bool1 = true;
      this.ops.push(operation);
    }
  }
  }

  //computes the answer to a basic equation
  public compute() {
    this.ops.push(this.stack);
    this.stack = '';
    this.bool = false;
    this.bool1 = false;
    this.bool2 = true;
    if (this.ops.length == 3) {
      if (this.ops[1] == '+') {
        this.holder = +this.ops[0] + +this.ops[2];
      } else if (this.ops[1] == '-') {
        this.holder = +this.ops[0] - +this.ops[2];
      } else if (this.ops[1] == '*') {
        this.holder = +this.ops[0] * +this.ops[2];
      } else if (this.ops[1] == '/') {
        this.holder = +this.ops[0] / +this.ops[2];
      }
      this.ops = [];
      this.ops.push(this.holder as unknown as string);
    } 
    else if (this.ops.length == 2) {
      this.holder = +this.ops[1];
      this.unlightAll();
      this.ops = [];
      this.ops.push(this.holder as unknown as string);
    }
  }

  //function that the operators, such as +, use to perform computations in a consecutive manner
  public compute1() {
    this.bool = false;
    this.bool1 = false;
    this.bool2 = true;
    if (this.ops[1] == '+') {
      this.holder = +this.ops[0] + +this.ops[2];
    } else if (this.ops[1] == '-') {
      this.holder = +this.ops[0] - +this.ops[2];
    } else if (this.ops[1] == '*') {
      this.holder = +this.ops[0] * +this.ops[2];
    } else if (this.ops[1] == '/') {
      this.holder = +this.ops[0] / +this.ops[2];
    }
    this.ops = [];
    this.ops.push(this.holder as unknown as string);
  }

}
