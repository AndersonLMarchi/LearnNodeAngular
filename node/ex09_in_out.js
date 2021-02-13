process.stdout.write(`Doidera né?\n`);
process.stdin.on('data', function (data) {
    process.stdout.write(`Diz mesmo que é ${data.toString()} né piá.. Eh noix!\n`);
    process.exit();
});