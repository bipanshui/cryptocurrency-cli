#!/usr/bin/env node

const { program } = require("commander");

program
    .command("set")
    .description("Set API Key -- Get at https://nomics.com")
    .action(() => {
        console.log("set is working well");
    });

program
    .command("show")
    .description("Show API Key")
    .action(() => {
        console.log("Hello from show");
    });

program
    .command("remove")
    .description("Remove API Key")
    .action(() => {
        console.log("Hello from remove");
    });

program.parse(process.argv);
