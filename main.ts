#! usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";


console.log(chalk.blue.bold("\n \tWelcome to currency convertor\n"));


// Define the list of currencies and their exchange rates
let exchange_rate: any = {
    "USD": 1, // USA currency
    "EUR": 0.9, // European currency
    "JYP": 113, // Japnese Currency
    "CAD": 1.3, // Canadian dollar
    "AUD": 1.65, //Australian dollar
    "PKR": 277.70, //Pakistani currency
    // YOU CAN ADD MORE CURRENCIES AND THEIR EXCHANGE RATES HERE
}

// prompt the user to select currencies to convert from and to
let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: "\n \tSelect the currency to convert from:\n",
        choices: ["USD" , "EUR" , "JYP" , "CAD" , "AUD" , "PKR"]
    },
    {
        name: "to_currency",
        type: "list",
        message: "\n \tSelect the currency in which you want to convert\n",
        choices: ["USD" , "EUR" , "JYP" , "CAD" , "AUD" , "PKR"]
    },
    {
        name: "amount",
        type: "input",
        message: "\n \tEnter the amount to convert\n"
    }
]);

// Perform currency conversion by using formula
let from_amount = exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount

//Formula of conversion
let base_amount = amount / from_amount
let converted_amount = base_amount * to_amount

// Display the converted ammount
console.log(chalk.yellow.bold(`\n \tCONVERTED AMOUNT = ${converted_amount.toFixed()}\n`));