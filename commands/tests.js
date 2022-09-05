/**
This method returns a guide for studying for tests
@return test taking guide
 */
module.exports = {
    name: 'tests',
    description: "a general guide on how to successfully prepare for all of your tests in school",
    execute(message, args){

        message.channel.send('Follow these steps to do well on your tests:\n1. Study beforehand, follow the study guide on the "study" command for more information.\n2. Start reviewing the entire subject at least a week before the test, this includes looking over homework, talking to your teachers, looking online for advanced practice, and more.\nLook at your previous assessments in the given subject to find the errors you have already made and make sure to not make those errors again.\nSleep well the night before the test, this will keep you focused the next day and will lower your stress levels.');

    }
}