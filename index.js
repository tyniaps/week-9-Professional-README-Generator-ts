// TODO: Include packages needed for this application
const inquirer = require ('inquirer');
const fs = require ('fs');
const generateMarkdown = require ('./utils/generateMarkdown');
const { error } = require('console');

console.log("Welcome to the Professional README Generator")
console.log("Please answer the following questions...")

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'project-title',
        message: 'what is the title of your project? ',
    },
    {
        type: 'input',
        name: 'description',
        message: 'provide a short description of your project. use the following questions as a guide - what was your motivation/ why did you build this project? what problem does it solve? what did you learn from completing this project?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'what steps are required in order to install your project? provide a step by step guide',

    },
    {
        type: 'input',
        name: 'usage',
        message: 'provide instructions and examples for use,'
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'what can other developers use your project for? select the license relevancy to your project',
        choices: ['MIT', 'Apache-2.0', 'GPL-3.0', 'AGPL-3.0', 'MPL-2.0', 'n/a'],

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

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) => { 
        if (error) { 
        return console.log("error");
    }
    console.log("README Successfully Generated")
    console.log("You can now preview your Professional README");
});

};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        writeToFile("README.md,", generateMarkdown ((responses)));
    
    })};


// Function call to initialize app
init();
