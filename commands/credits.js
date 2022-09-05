/**
This method returns the credits for who made this bot (ME) and where to contact me (with a funky little embed!)
@return my online contact info as an embed in discord
 */
module.exports = {
    name: 'credits',
    description: 'The credits to whoever made this bot (me)',

    execute(message, args, Discord) {
        const creditEmbed = new Discord.MessageEmbed()
        .setColor('#ECFC2')
        .setTitle('Credits')
        .setURL('https://github.com/varenyk1/')
        .setDescription('This is embed leads to my Github account')
        .addFields(
            {name: 'Credits', value: 'The person who coded and manages this bot is @varenyk1#8054 on discord. To see the javascript sourcecode for this bot, check my Github account. Alternatively if you need help with coding or Discord bots, message me at my Discord!'},
            {name: 'Rule 2', value: ''},
            {name: 'Rule 3', value: ''},
        )
        .setImage('https://cdn.discordapp.com/attachments/769373592902303808/1011105663952359495/IMG_8395.jpg')
        .setFooter('(Not me, it is my dog.')

        message.channel.send(creditEmbed)
    }
}