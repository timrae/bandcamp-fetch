const bcfetch = require('../');
const util = require('util');

const tagUrl = 'https://bandcamp.com/tag/dark-ambient';

bcfetch.getReleasesByTagFilterOptions(tagUrl).then( results => {
    console.log(util.inspect(results, false, null, false));
});
