

function licenseBadge(license) {
  if (license !== "None") {
    return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  } else {
    return ".";
  }
}

function licenseType(license) {
    
    if (license === 'MIT') {
      return "[MIT License Link](https://opensource.org/licenses/MIT)";
    } else if (license === 'ISC') {
      return "[ISC License Link](https://opensource.org/licenses/ISC)";
    } else if (license === 'GNU') {
      return "[GNU License Link](https://opensource.org/licenses/lgpl-3.0.html)";
    } else {
      return ".";
    }
};


// function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  return `# ${data.name}
  ${licenseBadge(data.license)}

  ${licenseType(data.license)}
  

  ## Description

  ${data.description}


  ## Table of Contents

  * [Installation](#installation)

  * [Usage](#usage)

  * [Contributions](#contributions)

  * [Tests](#tests)

  * [Questions](#questions)

  ## Installation

  To install, run the following command:

  ${data.installation}

  ## Usage

  ${data.usage}
  
  ## Contributions

  ${data.contributions}

  ## Tests

  To test run the following command:

  ${data.tests}

  ## Questions

  If you have questions about the project or an open issue, you can contact me at ${data.email}.  You can see more of my repo's at https://github.com/${data.github}/.

  

  `;
}

module.exports = generateMarkdown;
