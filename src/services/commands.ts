#! /usr/bin/env node
import { Command } from 'commander';
import { argv }    from 'process';
import format      from '../configs/format';
import sorts       from '../configs/sorts';
import RssParser   from '../controllers/RssParser';

const availableFormats: string = Object.keys(format.formats).join(', ');
const availableSorts:   string = Object.keys(sorts).join(', ');

const program = new Command();

program
    .version('1.0.0')
    .description('RSS parser');

program
    .option('-f, --format [format]', `add the specified output format (choices: ${availableFormats})`, format.defualt)
    .option('-s, --sort [by]', `sort list by (choices: ${ availableSorts })`)

program
    .command('parse')
    .description('RSS parser')
    .action(async () => {
        try {
            const rssParser = new RssParser(program.opts().format, program.opts().sort);
            const response = await rssParser.parse();
            response.forEach(item => {
                console.info(item)
            })
        } catch (error) {
            console.error(error);
            return;
        }
    });

program.parse(argv);