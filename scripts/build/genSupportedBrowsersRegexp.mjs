#!/usr/bin/env zx

const browserslist = require('browserslist');
await browserslist.clearCaches();

$.verbose = false;

console.log(chalk.green('start generating supportedBrowsers regexp...'));

const reg = await $`browserslist-useragent-regexp --allowHigherVersions`;

const data = `export const supportedBrowsers =
    // eslint-disable-next-line security/detect-unsafe-regex, regexp/no-dupe-disjunctions, regexp/no-super-linear-backtracking, regexp/optimal-quantifier-concatenation, regexp/no-useless-non-capturing-group, regexp/no-useless-range
    ${reg.stdout.replace(/\r\n|\r|\n/g, '')};
`;

fs.writeFile('./src/server/middlewares/utils/supportedBrowsers.ts', data, { encoding: 'utf-8' });
