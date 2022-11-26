const trans = require("./jp_to_nagari.json");
second({argv: process.argv[2]})

function main(options) {
    let content = options.argv;
    for (let i = 0; i < content.length; i++) {
        console.log(trans[content[i]]);
    }
}


const flip = (data) => Object.fromEntries(
    Object
      .entries(data)
      .map(([key, value]) => [value, key])
    );

function second(options) {
    let content = options.argv;
    for (let i = 0; content.length; i++) {
        console.log(flip(trans)[content[i]]);
    }
}