/**
This method returns a list of resources for studying math
@return math resources
 */
module.exports = {
    name: 'resources math',
    description: "a list of mathematics resources",
    execute(message, args){

        message.channel.send('https://www.khanacademy.org/math - Khan Academy math\nhttps://www.youtube.com/c/patrickjmt/ - PatrickJMT youtube channel, all mathematics (mostly highschool)\nhttps://www.youtube.com/c/StudyPug StudyPug youtube channel, highschool math\nhttps://www.prepanywhere.com/prep/textbooks/functions-11-nelson - video solutions to all of grade 11 math\nhttps://www.schoolsimplified.org/notes - notes for math studying');

    }
}