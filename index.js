const fs = require('fs');
const inquirer = require('inquirer');

// Function to prompt the user for input
function promptUser() {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter three characters for the text:',
      validate: function(input) {
        return input.length <= 3 ? true : 'Please enter up to three characters.';
      }
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter the text color :'
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Select a shape:',
      choices: ['circle', 'triangle', 'square']
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter the shape color :'
    }
  ]);
}