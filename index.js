var fs = require('fs');
var colors = require('colors');
var statMode = require('stat-mode');

fs.readFile('./tekst.txt', 'utf-8', function (err, data) {
    console.log('Dane przed zapisem!'.blue);
    console.log(data);
    fs.appendFile('./tekst.txt', '\n Kolejny nowy zapis!'.red, function (err) {
        if (err) throw err;
        console.log('Zapisano!'.blue);
        fs.readFile('./tekst.txt', 'utf-8', function (err, data) {
            console.log('Dane po zapisie'.yellow)
            console.log(data);
        });
    });
});


fs.readdir('./', 'utf-8', function (err, files) {
    console.log('Zawartość katalogu'.blue);
    console.log(files);
fs.writeFile('./ new.txt', files, function () {
    if (err) throw err;
    console.log('Zapisano zawartość do pliku new.txt'.green);
});
});
    

