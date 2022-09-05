/**
This method returns a list of resources for studying physics
@return physics resources
 */
module.exports = {
    name: 'resources phys',
    description: "a list of physics resources",
    execute(message, args){

        message.channel.send('https://www.khanacademy.org/science/physics - Khan Academy physics\nhttps://www.schoolsimplified.org/notes - notes for physics studying');

    }
}