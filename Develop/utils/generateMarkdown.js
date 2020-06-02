
var ghAvatar = require('gh-avatar');

function generateMarkdown(data) {
  return `
  
# ${data.title}
${generateLicenseBadge(data.license, data.url)}
## ${data.description}

Table of Contents 
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#test)
* [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## License

This project is licensed under the ${data.license} license.

## Contributing

${data.contributing}

## Questions

If you have any questions about the repo, open an issue or contact [${data.username}](https://github.com/${data.username}/) directly at ${data.email}
[avatar](${avatar(data.username)})
`;
}

function generateLicenseBadge(license, url) {
  switch (license) {
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](" + url + ")";
    case "APACHE 2.0":
      return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](" + url + ")";
    case "GPL 3.0":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](" + url + ")";
    case "BSD 3":
      return "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](" + url + ")";
    case "None":
      return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](" + url + ")";
  }
}

function avatar(avatar) {
  ghAvatar(avatar).then(avatar => {
    console.log(avatar);
    //=> 'https://avatars.githubusercontent.com/u/170270?v=3'
  })
}
module.exports = generateMarkdown;
