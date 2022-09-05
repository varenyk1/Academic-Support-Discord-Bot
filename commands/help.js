module.exports = {
    name: 'help',
    description: "list of commands and explains their usage",
    execute(message, args){

        message.channel.send('List of commands:\nserver - how to navigate this server\nstudy - a general guide on how to study efficiently\ntests - a guide on how to do well on tests\nlibrary - virtual libraries to access books online\nresources math (or rm) - a list of resources for studying mathematics\nresources phys (or rp) - a list of resources for studying physics\nresources chem (or rc) - a list of resources for studying chemistry\nresources bio (or rb) - a list of resources for studying bio\ncredits - credits those who worked on this bot :)');

    }
}