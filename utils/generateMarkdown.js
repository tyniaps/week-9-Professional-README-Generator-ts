// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {  
  if (license == 'MIT') {
    return `![license](https://img.shields.io/badge/license-MIT-orange.svg)`;

  } if (license == 'Apache 2.0') {
    return `![license](https://img.shields.io/badge/license-Apache_2.0-blue.svg)`;
 
  } if (license == 'GNU 3.0') {
  return `![license](https://img.shields.io/badge/license-GNU_3.0-green.svg)`;
 
  } if (license == 'MPL 2.0') {
  return `![license](https://img.shields.io/badge/license-MPL_2.0-purple.svg)`;
 
  } if (license == 'n/a') {
  return ` `;
  };
 }


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == 'MIT') {
    return `![license](https://img.shields.io/badge/license-MIT-orange.svg)<br>
    This project is licensed under the MIT License. Refer to (https://opensource.org/license/mit/)`;
 
  }if (license == 'Apache 2.0') {
    return `![license](https://img.shields.io/badge/license-Apache_2.0-blue.svg)<br>
    This project is licensed under the Apache License (Version 2.0). Refer to (https://opensource.org/license/apache-2-0/)`;
  
  }if (license == 'GNU 3.0') {
    return `![license](https://img.shields.io/badge/license-GNU_3.0-green.svg)<br>
    This project is licensed under the GNU General Public License (Version 3.0). Refer to (https://opensource.org/license/gpl-3-0/)`;
  
  }if (license == 'MPL 2.0') {
    return `![license](https://img.shields.io/badge/license-MPL_2.0-purple.svg)<br>
    This project is licensed under the Mozilla Public License (Version 2.0). Refer to (https://opensource.org/license/mpl-2-0/)`;
    
  }if (license == 'n/a') {
  return `n/a`;
  };
}



// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {  
//   if (license !== "n/a") {
//     return `This project is licensed under the ${license} license.`;
//   }
//     return"";
// }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}  

${renderLicenseBadge(data.license)}  

## Table of Contents
[Description](#description)<br>
[Installation](#installation)<br>
[Usage](#usage)<br>
[License](#license)<br>
[Contributors](#contributors)<br>
[Tests](#tests)<br>
[Questions](#questions)

## Description
${data.description}
## Installation
${data.installation}
## Usage
${data.usage}
## License
${renderLicenseLink(data.license)}  
## Contributors
${data.contributors}
## Tests
${data.tests}
## Questions
GitHub: [${data.github}](http://github.com/${data.github}/)<br>
Email: ${data.email}
`;
}

module.exports = generateMarkdown;
