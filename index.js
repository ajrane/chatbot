const Readline = require('readline');
const Chalk = require('chalk');
const RiveScript = require('rivescript');

const bot = new RiveScript();
const rl = Readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

bot.loadFile('./training_data.rive', function(){
    //console.log("read success")
    bot.sortReplies();
    ask();
}, function(error) {
    console.log("Error reading file: " + error);
})

function ask() {
    // read data from a Readable stream one line at a time
    rl.question('You: ', (message) => {
        var reply = bot.reply('local-user', message);
        console.log(Chalk.red('Bot: ' +reply));
    });
}