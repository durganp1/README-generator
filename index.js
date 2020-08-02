
const inquirer = require('inquirer');


const promptQuestions = () => {
    readMeData = [];
    return inquirer.prompt([
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
            type: 'confirm',
            name: 'confirmInstallation',
            message: 'Would you like to include installation instructions?',
            default: true
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Provide installation instructions for the Project:',
            when: ({ confirmInstallation }) => confirmInstallation
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
            type: 'confirm',
            name: 'confirmContributions',
            message: 'Would you like to add contribution guidelines for your project?',
            default: true
        },
        {
            type: 'input',
            name: 'contributions',
            message: 'Please add contribute guidelines for your project.',
            when: ({ confirmContributions }) => confirmContributions
        },
        {
            type: 'confirm',
            name: 'confirmTests',
            message: 'Would you like to add a test section?',
            default: true
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Please list test instructions',
            when: ({ confirmTests }) => confirmTests
        }
    ])
    .then(projectData => {
        readMeData.push(projectData);
        console.log(projectData);
    }) 
};

promptQuestions();


// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
