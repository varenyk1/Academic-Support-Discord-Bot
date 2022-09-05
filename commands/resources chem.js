/**
This method returns a list of resources for studying chemistry
@return chem resources
 */
module.exports = {
    name: 'resources chem',
    description: "a list of chemistry resources",
    execute(message, args){

        message.channel.send('https://www.khanacademy.org/science/chemistry - Khan Academy chemistry\nhttps://www.youtube.com/user/tdewitt451/ - Tyler DeWitt youtube channel, useful for understanding chemistry concepts\nhttps://www.youtube.com/c/Leah4sci/ - Leah4sci, organic chemistry\https://www.schoolsimplified.org/notes/ - notes for chemistry studying');

    }
}