function temParam(param) {
    return process.argv.indexOf(param) !== -1;
}

if (temParam('--production')) {
    console.log('Cuida aew piá que tu é mlk!');
} else {
    console.log('De boas na lagoa!');
}