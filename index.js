// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        method: 'Hello! Welcome to the Pro README Generator! To start, Please enter your full name:',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please input your name');
                return false;
            }
        }
    
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your username',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('You must include your link to your github repo');
                return false;
            }
        }
    },
    
    {
        type: 'input',
        name: 'title',
        message: 'Enter the title of your project',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Every project must have an interesting title. Try Again!');
                return false;
            }
        }
    }
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
