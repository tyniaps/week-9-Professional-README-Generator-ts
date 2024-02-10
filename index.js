// TODO: Include packages needed for this application
const inquirer = require ('inquirer')
const fs = require ('fs')
const path = require ('path')
const generateMarkdown = require ('./generateMarkdown.js')
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
        name: 'table of contents',
        message: 'provide a table of contents so that viewers of your README can easily find the information that they seek',
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
        message: 'what can other developers use your project for? select the license relevany to your project',
        choices: ['MIT', 'Apache 2.0', 'GNU', 'Mozilla', 'BSD3', 'None'],

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
        name: 'questions',
        message: 'how can users contact you if they have any questions? provide your github username and a link to your profile here',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
