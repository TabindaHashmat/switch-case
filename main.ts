#! /usr/bin/env node 


import inquirer from "inquirer";
import chalk from "chalk";
import { log } from "console";

//step 01


const answer : {
    numberOne: number,
    numberTwo: number,
    operator: string 

} = await inquirer.prompt([
      { type:"number",
      name: "numberOne",
      message: "Enter your First number" 
},
{
    type: "number",
    name: "numberTwo",
    message: "Enter your second number",
},
{
    type: "list",
    name:"operator",
    message: "Enter your second number",
    choices: [ "+","-","*","/"]}
])

//step 02

const { numberOne, numberTwo, operator} = answer;
let result 
switch(operator) {

case "+" : result = numberOne + numberTwo;
    break;
case "-" : result = numberOne - numberTwo;
    break;
case "*":  result = numberOne *  numberTwo;
    break;
case "/" : result = numberOne / numberTwo;
    break;
default:
    console.log("invalid operator"); 
}
console.log(`${numberOne} ${operator} ${numberTwo} = ${result}`);