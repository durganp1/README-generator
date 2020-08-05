function licenseBadge(license) {
  if (license !== "None") {
    return `[Github license](https://img.shields.io/badge/license-${data.license}-blue)`
  }
}

const licenseType = function(choice) {
  let licenseChoices = [{
    type: 'MIT',
    link: 'https://opensource.org/licenses/MIT'
  },
  {
    type: 'ISC',
    link: 'https://opensource.org/licenses/ISC'
    
  },
  {
    type: 'GNU',
    link: 'https://opensource.org/licenses/lgpl-3.0.html'
  },
  
  ]}


// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.name}

  ## Description

  ${data.description}

  ## License



  ## Table of Contents

  * [Installation] (#installation)

  * [Usage] (#usage)

  * [Contributions] (#contributions)

  * [Tests] (#tests)

  * [Questions] (#questions)

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

  If you have questions about the project or an open issue, you can contact me at ${data.email}.  You can see more of my repo's at [${data.github}](https://github.com${data.github}/).



  `;
}

module.exports = generateMarkdown;
