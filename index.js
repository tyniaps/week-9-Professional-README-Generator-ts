// Below is the code for the packages needed for the application
const inquirer = require ('inquirer');
const fs = require ('fs');
const generateMarkdown = require ('./utils/generateMarkdown');
const { error } = require('console');

console.log("Welcome to the Professional README Generator")
console.log("Please answer the following questions...")

// Below is an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'what is the title of your project? ',
    },
    {
        type: 'input',
        name: 'description',
        message: 'provide a short description of your project (why did you build it? what problem does it solve? what did you learn?)',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'what steps are required in order to install your project? provide a step by step guide',

    },
    {
        type: 'input',
        name: 'usage',
        message: 'provide instructions and examples for use'
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'what can other developers use your project for? select the license relevant to your project',
        choices: ['MIT', 'Apache 2.0', 'GNU 3.0', 'MPL 2.0', 'n/a'],

    },
    {
        type: 'input',
        name: 'contributors',
        message: 'did you collaborate with others to complete this project? if yes, provide details of their github profiles here'
      
    },
    {
        type: 'input',
        name: 'tests',
        message: 'have you written tests for your application? list them here - dont forget to provide examples of how to run them',
    },
    {
        type: 'input',
        name: 'email',
        message: 'provide your email address so that viewers can contact you with any questions',
    },
    {

        type: 'input',
        name: 'github',
        message: 'provide your GitHub username',
    },
];

// Below is a function that will write the README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) => { 
        if (error) { 
        return console.log("error");
    }
    console.log("README Successfully Generated")
    console.log("You can now preview your Professional README");
});

};

// Below is a function that will initialize the app
function init() {
    inquirer.prompt(questions).then((responses) => {
        writeToFile("./sample/README.md", generateMarkdown ((responses)));
    
    })};


// Function call to initialize app
init();
