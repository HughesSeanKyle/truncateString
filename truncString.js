/*
Basic Algorithm Scripting: Truncate a String
Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending. 
*/

//Solution 2

function truncateString(str, num) {                                                 //1
    console.log(str.length)
    return str.length > num ? str.slice(0, num) + '...' : str;                      //2
}  
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));


//Notes
//1
/*
    This function takes in two arguments. 
        str - The sample data to truncate
        num - The lenght of sample data to truncate
*/

//2
/*
    return
    -------------
    The return ends function execution and specifies a value to be returned to the function caller.
    Source - [https://devdocs.io/javascript/statements/return]
    
    str.length > num ? 
    ----------------------
    This specifies the condition and also the true portion of the ternary operator. 
    The string.length without any modification is 43 and the input is of num is 8
    Therefore, this line says as long as the length of the string is less than the num input then this statement is true
    
    str.slice(0, num) + '...' 
    ---------------------------
    This section of code runs while the condition is still true
    The slice method will start at the zero index (in this case A) and will end at the num input index but will not include the character at the index
    (in this case 8 is the num input).  

    The slice() method extracts a section of a string and returns it as a new string, without modifying the original string.
    str.slice(beginIndex[, endIndex])
    Source - [https://devdocs.io/javascript/global_objects/string/slice];

    Once the true condition is met the elipse (...) is added at the end of the sliced string. 
    
    : str;
    --------------
    The condition is no longer true and the modified string is return. The orginal string has not been modified. 
*/

//Solution 1

/*This solution is the same as above but it just makes use of an if/else statement instead of a ternery operator*/

// function truncString (str, num) {
//     if (str.length > num) {
//         return str.slice(0, num) + '...';
//     } else {
//         return str;
//     };
// };

// console.log(truncString("A-tisket a-tasket A green and yellow basket", 8));