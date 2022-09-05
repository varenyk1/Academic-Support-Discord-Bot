/**
This method returns a list of online libraries
@return resources
 */
module.exports = {
    name: 'library',
    description: "a list of virtual library resources",
    execute(message, args){

        message.channel.send('https://archive.org - a free library of books, movies, music, software, etc (use it legally)');

    }
}