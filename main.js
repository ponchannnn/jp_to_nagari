const transJpNagari = require("./jp_to_nagari.json");
const transNagariJp = require("./nagari_to_jp.json");
const fs = require('fs');
let cont = fs.readFileSync("content.txt", 'utf-8');
jpToNagari({argv: process.argv[2]});
//nagariToJp({argv: process.argv[2]});

function jpToNagari(options) {
    let content = options.argv;
    if (content == undefined) content = cont;
    for (let i = 0; i < content.length; i++) {
        process.stdout.write(transJpNagari[content[i]] !== undefined? transJpNagari[content[i]] : content[i]);
    }
}


function nagariToJp(options) {
    let content = options.argv;
    if (content == undefined) content = cont;
    for (let i = 0; i < content.length; i++) {
        process.stdout.write(transNagariJp[content[i]] !== undefined? transNagariJp[content[i]] : content[i]);
    }
}