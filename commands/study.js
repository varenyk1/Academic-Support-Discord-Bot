/**
This method returns a guide for studying in general
@return studying guide
 */
module.exports = {
    name: 'study',
    description: "a general guide on how to effectively study in school",
    execute(message, args){

        message.channel.send('Follow these steps to study effectively:\n1. Come to class prepared, this includes cutting out all distractions and having the previous homework finished.\n2. Take notes on every lesson, notes will ALWAYS come in helpful later on.\n3. Do all the assigned homework, read everything you can in the textbook sections for the homework questions.\n4. Communicate with peers and your teachers, if you do not understand you can always ask for help.\n\nBy following all of these steps you should always be prepared for every lesson and you will not fall behind in your classes.');

    }
}