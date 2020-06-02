var inquirer = require("inquirer");
var fs = require("fs");
var gen = require("./utils/generateMarkdown")

const questions = [
    {
        type: "input",
        message: "What is your user name?",
        name: "username"
    }, {
        type: "input",
        message: "What is your email?",
        name: "email"
    }, {
        type: "input",
        message: "What is the name of your project?",
        name: "title"
    }, {
        type: "input",
        message: "Please provide a short description of your project.",
        name: "description"
    }, {
        type: "input",
        message: "How will it be installed? (Leave blank if not applicable.)",
        name: "installation",
        default: "This repository does not require installation."
    }, {
        type: "input",
        message: "What is this repository for?",
        name: "usage"
    }, {
        type: "input",
        message: "Does this repository require licensing?",
        name: "license"
    }, {
        type: "input",
        message: "How would someone contribute? (leave blank if not applicable.)",
        name: "contributing",
        default: "This repository does not require contribution."
    }
];

function writeToFile(fileName, data) {
}

function init() {
    inquirer.prompt(questions)
    .then()
}

init();
