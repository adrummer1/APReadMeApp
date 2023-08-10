function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  } else if (license === 'GPLv3') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
  } else if (license === 'Apache 2.0') {
    return '[![License Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  } else {
    return '';
  }
}

function renderLicenseLink(license) {
  if (license === 'MIT') {
    return 'https://opensource.org/license/mit';
  } else if (license === 'GPLv3') {
    return 'https://www.gnu.org/licenses/gpl-3.0';   
  } else if (license === 'Apache 2.0') {
    return 'https://opensource.org/license/apache-2-0/'
  } else {
    return '';
  }
}

function renderLicenseSection(license) {
  if (license === 'MIT') {
    return `
    This project is licensed under the terms of the MIT license.
    `;
  } else if (license === 'GPLv3') {
    return `
    This project is licensed under the terms of the GPLv3 license.
    `
  } else if (license === 'Apache 2.0') {
    return `
    This project is licensed under the terms of the Apache 2.0 license.
    `;
  } else {
    return '';
  }
}

function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license) 
  - [Contributing](#contributing)
  - [Tests](#tests) 
  - [Questions](#questions) 

  ## Description

  ${data.description}

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## License

  ${renderLicenseSection(data.license)}

  ## Contributing

  ${data.contributing}

  ## Tests

  ${data.tests}

  ## Questions

  My GitHub username <a href="https://github.com/${data.question1}" target="_blank">${data.question1}</a>. Feel free to contact me with any questions at ${data.question2}!

`.trim();
}

module.exports = {
  renderLicenseBadge,
  renderLicenseLink,
  renderLicenseSection,
  generateMarkdown,
};

