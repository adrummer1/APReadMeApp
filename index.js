const inquirer = require('inquirer');
const fs = require('fs');
const {generateMarkdown} = require('./utils/generateMarkdown');

const questions = [
    {
        name: 'title',
        type: 'input',
        message: 'Enter the title of your README.md file:',
    },
    {
        name: 'description',
        type: 'input',
        message: 'Enter the description of your README.md file:',
    },
    {
        name: 'installation',
        type: 'input',
        message: 'What are the steps required to install your project? Provide a step-by-step description on how to get the development environment running:',
    },
    {
        name: 'usage',
        type: 'input',
        message: 'Provide instructions and examples for use:',
    },
    {
        name: 'license',
        type: 'list',
        message: 'Select the licence you are using for your repository:',
        choices: ['MIT', 'GPLv3', 'Apache 2.0'],
    },
    {
        name: 'contributing',
        type: 'input',
        message: 'If you would like others to contribute to your project, what are the contribution guidelines?',
    },
    {
        name: 'tests',
        type: 'input',
        message: 'Provide any tests and examples on how to run them here:',
    },
    {
        name: 'question1',
        type: 'input',
        message: 'What is your github username?',
    },
    {
        name: 'question2',
        type: 'input',
        message: 'What is your email address?',
    },
]

async function promptUser() {
    try {
        const answers = await inquirer.prompt(questions);
        return answers;
        // writeToFile('README.md', answers);
    } catch (error) {
        console.error(error);
    }
}

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) => {
        if (error) {
            console.error(error);
            return;
        }
    console.log('README file was created successfully!');
    });
}

async function init() {
    let data = await promptUser();
    const fileName = 'README.md';
    const readmeContent = generateMarkdown(data);
    writeToFile(fileName, readmeContent);
}

init();
