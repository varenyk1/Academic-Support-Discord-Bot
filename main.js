const Discord = require('discord.js');

const client = new Discord.Client({
    intents: [
      "GUILD",
      "GUILD_MESSAGES",
    ]
  })    

const prefix = '!';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}


/*
events - this following section of code will execute the 'events' (the commands) when
you ask the bot to do something in the discord chat
*/
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(" ");
    const command = args.shift().toLowerCase();

    if (command === 'credits'){
        client.commands.get('credits').execute(message, args);

    } 
    else if (command === 'help'){
        client.commands.get('help').execute(message, args);

    }
    else if (command === 'library'){
        client.commands.get('library').execute(message, args);

    }
    else if (command === 'resources bio' || command === 'rb'){
        client.commands.get('resources bio').execute(message, args);
        
    }
    else if (command === 'resources chem' || command === 'rc'){
        client.commands.get('resources chem').execute(message, args);
        
    }
    else if (command === 'resources math' || command === 'rm'){
        client.commands.get('resources math').execute(message, args);
        
    }
    else if (command === 'resources phys' || command === 'rp'){
        client.commands.get('resources phys').execute(message, args);
        
    }
    else if (command === 'server'){
        client.commands.get('server').execute(message, args);
        
    }
    else if (command === 'study'){
        client.commands.get('study').execute(message, args);
        
    }
    else if (command === 'tests'){
        client.commands.get('tests').execute(message, args);
        
    }
})


// announces when bot is online in terminal
client.once('ready', () => {
    console.log('Academic Support Bot is online!'); 
});



// client login key (pinned in Bot TESTING #notes)
client.login('token removed for privacy reasons');
