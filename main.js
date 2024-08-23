// Module 1 
// Excercise 1.1 
// By Addison Roy

function delayedPrint(message, delay) {
    setTimeout(function() {
        console.log(message);
    }, delay);
}

sep = '------------------------------------------'

delayedPrint('Welcome to Java', 500)
delayedPrint(sep, 500)
delayedPrint('Welcome to Computer Science', 1000)
delayedPrint(sep, 1000)
delayedPrint('Programming is fun', 1000)
delayedPrint(sep, 1500)


//console.log('Welcome to Java\n')
//console.log('Welcome to Computer Science\n')
//console.log('Programming is fun\n')