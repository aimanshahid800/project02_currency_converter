#! /usr/bin/env node
// Import the inquirer module for interactive prompts
import inquirer from "inquirer";
import chalk from "chalk";
// Define the conversion rates
let Convertion = {
  USD: {
    EUR: 0.84,
    PKR: 278.0,
    USD: 1,
  },
  EUR: {
    USD: 1.19,
    PKR: 170.0,
    EUR: 1,
  },
  PKR: {
    USD: 0.006,
    EUR: 0.0059,
    PKR: 1,
  },
};

const answer: {
  from: "PKR" | "EUR" | "USD";
  to: "PKR" | "EUR" | "USD";
  amount: number;
} = await inquirer.prompt([
  {
    type: "list",
    name: "from",
    choices: ["USD", "PKR", "EUR"],
    message: "Select the currency :",
  },
  {
    type: "list",
    name: "to",
    choices: ["USD", "PKR", "EUR"],
    message: "Select the currency which you want to convert :",
  },
  {
    type: "number",
    name: "amount",
    message: "Enter your ammount which you want to convert :",
  },
]);

const { from, to, amount } = answer;

if (from && to && amount) {
  let result = Convertion[from][to] * amount;
  console.log(
    chalk.blue("Your convertion from") +
      chalk.magenta.bold(` ${from} `) +
      chalk.blue(" to ") +
      chalk.green.bold(`${to} `) +
      chalk.blue(" is :") +
      chalk.cyan(`${result}`)
  );
} else {
  console.log(chalk.red("Invalid Input"));
}
