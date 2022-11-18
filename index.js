// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'Hello! Welcome to the Pro README Generator! To start, Please enter your full name:',
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
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter an email address for questions regarding your work!');
                return false;
            }
        }

    },
    {
        type: 'input',
        name: 'description',
        message: "Enter your project description here:",
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('It is essential to provide a description of your project..');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Instructions for installation',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('Provide instructions for installation');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'usage Instructions:',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Provide instructions for usage.');
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmLicenses',
        message: 'Would you like to include a license?',
        default: false
    },
    { 
        type: 'list',
        name: 'licenses',
        message: 'What license would you like to include?',
        choices: ['MIT, GPL'],
        when: ({confirmLicenses}) => {
            if (confirmLicenses) {
                return true;
            } else {
                return false;
            }
        }
    }
];


// TODO: Create a function to write README file
const writeToFile = data => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', data, err => {
            // will reject the promise and send the err to .catch() method
            if (err) {
                reject (err);
                // will return out of the finction to make sure the promise doesnt continue to execute
                return;
            }
            //resolve promise and send successful data to the .then() method
            resolve({
                ok:true,
                message: console.log('Your README is in the "dist" folder.')
            });
        })
    })
}

// TODO: Create a function to initialize app
const init = () => {
    return inquirer.prompt(questions);
}
// Function call to initialize app
init() 
  .then(userInput => {
    return generateMarkdown(userInput);
})
.then(readmeInfo => {
    return writeToFile(readmeInfo);
})
.catch(err => {
    console.log(err);
})

