
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require("./Develop/utils/generateMarkdown");


const promptQuestions = [
        {
            type: 'input',
            name: 'name',
            message: 'What is the title of your project? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the title of your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please give a description of your project?'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Provide installation instructions for the Project:'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please enter usage information. (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter how your project should be used!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contributions',
            message: 'What does a user need to know about contributing to your project?'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Please list test instructions',
            default: 'npm test'
        },
        {
            type: 'list',
            name: 'license',
            message: 'Choose a license for your application.',
            choices: ['MIT', 'ISC', 'GNU', 'None']
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub user name?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?'
        }

    ];


// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
    inquirer.prompt(promptQuestions)
    .then((inquirerResponses) => {
        console.log("Creating README...");
        console.log(inquirerResponses);
        writeToFile("README.md", generateMarkdown({...inquirerResponses}));
    })
}

// function call to initialize program
init();
