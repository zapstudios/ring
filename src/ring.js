#! /usr/bin/env node
import yargs from "yargs";
import {hideBin} from "yargs/helpers";
import clc from 'cli-color';

/**
 * main cli function
 *
 * @version 0.1 beta
 * @TODO split into different classes
 */
export const cli = () => {

    yargs(hideBin(process.argv)).command('default', 'setup a default user for all git related projects', () => {
    }, (argv) => {
        if (!argv.name || !argv.mail || !argv.pwd) {
            console.error(clc.red('ERROR: Required arguments not met'));
        } else {
            // execute code for modifying global git files here
            console.info(clc.green('Default User "' + argv.name + '" was set, restart your CLI to take effect.'));
        }
    }).parse();

    yargs(hideBin(process.argv)).command('add', 'add a new user to your local ring configuration', () => {
    }, (argv) => {
        if (!argv.name || !argv.mail || !argv.pwd || !argv.alias) {
            console.error(clc.red('ERROR: Required arguments not met'));
        } else {
            // execute code for modifying local git files here

            console.info(clc.green('User "' + argv.alias + '" was added, restart your CLI to take effect.'));
        }
    }).parse();

    yargs(hideBin(process.argv)).command('use', 'uses an existing user from your local ring configuration', () => {
    }, (argv) => {
        if (!argv.name || !argv.mail || !argv.pwd || !argv.alias) {
            console.error(clc.red('ERROR: Required arguments not met'));
        } else {
            // execute code for modifying local git files here

            console.info(clc.green('User "' + argv.alias + '" is used for current git project.'));
        }
    }).parse();
}
