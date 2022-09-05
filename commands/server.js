/**
This method returns a guide on how to navigate the discord server that this bot was made for
@return server guide
 */
module.exports = {
    name: 'server',
    description: "a guide on how to navigate the academic support discord server",
    execute(message, args){

        message.channel.send('The "Academics" channel folder has access to a channel to discuss any STEM subject.\nThe #rules channel explains rules and has a list of moderators.\nCheck the #rules channel for a more in-depth guide on roles and other public channels.');

    }
}