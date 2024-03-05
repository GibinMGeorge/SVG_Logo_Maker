import fs from 'fs';
import inquirer from 'inquirer';

// Function to prompt the user for input
const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter three characters for the text:',
      validate: input => input.length <= 3 ? true : 'Please enter up to three characters.'
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
};

// Function to generate the SVG code based on user input
// Function to generate the SVG code based on user input
const generateSVG = data => {
  let shapeSVG;
  switch (data.shape) {
    case 'circle':
      shapeSVG = `<circle cx="150" cy="100" r="80" fill="${data.shapeColor}" />`;
      break;
    case 'triangle':
      shapeSVG = `<polygon points="150,18 244,182 56,182" fill="${data.shapeColor}" />`;
      break;
    case 'square':
      shapeSVG = `<rect x="50" y="50" width="200" height="200" fill="${data.shapeColor}" />`;
      break;
    default:
      shapeSVG = `<rect width="100%" height="100%" fill="${data.shapeColor}" />`;
  }
  
  return `<svg width="300" height="200">
    ${shapeSVG}
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="48" fill="${data.textColor}">${data.text}</text>
  </svg>`;
};


// Function to write the SVG code to a file
const writeSVGToFile = svg => {
  fs.writeFile('example/logo.svg', svg, err => { 
    if (err) {
      console.error('Error writing SVG file:', err);
    } else {
      console.log('Generated logo.svg');
    }
  });
};

// Main function
const main = async () => {
  try {
    // Prompt the user for input
    const userInput = await promptUser();

    // Generate the SVG code
    const svg = generateSVG(userInput);

    // Write the SVG code to a file
    writeSVGToFile(svg);
  } catch (error) {
    console.error('Error:', error);
  }
};

// Call the main function
main();
