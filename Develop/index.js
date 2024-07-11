const inquirer = require('inquirer');
const fs = require('fs');

// sets up read me generation after it recives inputs 
const generateReadMe = ({ title, discription, installation, usage, test, license, github, email, credit}) =>
`# ${title}

## Description
- ${discription}   

## Table of contents
- [Installation](#installation)
- [License](#license)
- [Usage](#usage)
- [Test](#tests)
- [Credits](#credits)
    

## Installation
- ${installation}

## License
- ${license}

## Usage
 - ${usage}

## Test
 - ${test}
   
## Credits
 - ${credit, github, email}` 
;

// prompts user for inputs
inquirer
    .prompt([
        {
            type: 'input',
            message: 'What would you like the project title to be?',
            name: 'title',
        },

        {
            type: 'input',
            message: 'What is the project discription?',
            name: 'discription',
        },

        {
            type: 'input',
            message: 'What are the installation instructions (put n/a if not applicable)',
            name: 'installation'
        },
        {
            type: 'input',
            message: 'Provide information on how to use the program?',
            name: 'usage'
        },
        {
            type: 'input',
            message: 'How to test the program instruction',
            name: 'test',
        },
        {
            type: 'list',
            message: 'What type of license does this program have?',
            name: 'license',
            choices: ['mit', 'CCO', 'bsd'],
        },
        {
            type: 'input',
            message: 'Who should be credited on this project?',
            name: 'credit',
        },
        {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'github',
        },
        {
            type: 'input',
            message: 'What is your email?',
            name: 'email',
        },
        
    ])

    // Generates readme file
    .then((answers) => {
        const readMeContent = generateReadMe(answers);

        fs.writeFile('READMEResult.md', readMeContent, (err) =>
            err ? console.log(err) : console.log('Successfully created README.md!')
        );
    });
