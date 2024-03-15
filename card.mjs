#!/usr/bin/env node

"use strict";

import chalk from "chalk";
import boxen from "boxen";

const data = {
  name: chalk.green.bold("Szymon Kotarba"),
  github: chalk.gray("https://github.com/KoTubA"),
  linkedin: chalk.blueBright("https://www.linkedin.com/in/szymon-kotarba"),
  email: chalk.yellow("szymon.kotarba00@gmail.com"),
  npx: chalk.red("npx") + " " + chalk.white("kotuba"),

  labelName: chalk.white.bold("     Name:"),
  labelGitHub: chalk.white.bold("   GitHub:"),
  labelLinkedIn: chalk.white.bold(" LinkedIn:"),
  labelEmail: chalk.white.bold("    Email:"),
  labelCard: chalk.white.bold("     Card:"),
};

const me = boxen([`${data.labelName}  ${data.name}`, ``, `${data.labelGitHub}  ${data.github}`, `${data.labelLinkedIn}  ${data.linkedin}`, `${data.labelEmail}  ${data.email}`, ``, `${data.labelCard}  ${data.npx}`].join("\n"), {
  margin: {
    left: 3,
    right: 3,
    top: 1,
    bottom: 0,
  },
  padding: 1,
  borderStyle: "single",
  borderColor: "green",
  title: "Contact Me",
  titleAlignment: "center",
});

console.log(me);

const tip = [`    Tip: Try ${chalk.cyanBright.bold("cmd/ctrl + click")} on the links above`, ""].join("\n");
console.log(tip);

const asciiArt = `
                               .-"-.
                              /|6 6|\\
                             {/(_0_)\\}
                              _/ ^ \\_
                             (/ /^\\ \\)-'
                              ""' '""
                          ${chalk.red("Have a nice day!")}
`;

console.log(chalk.white(asciiArt));
