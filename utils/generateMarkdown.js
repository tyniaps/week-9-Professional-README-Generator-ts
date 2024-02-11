// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {  
  if (license !== "n/a") {
    return `![license](https://img.shields.io/badge/license-${license}-orange.svg)`;
  }
    return"";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "n/a") {
    return `(https://api.github.com/licenses/${license})`
  }
  return"";
}



// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {  
  if (license !== "n/a") {
    return $data.license `[License](#license)`
  }
    return"";
}

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
${data.license}
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
