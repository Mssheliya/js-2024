//*1-Accessing characters
//*To get a character at position pos, use square brackets [pos] or call the method str.at(pos). The first character starts from the zero position:
let str1 = "Mustafa"
//console.log(str1[1]); //squarebreckets Return "u" charecter which index is 1
//console.log(str1.at(1)); //str.at(indexNo) Return "u" charecter which index is 1
//console.log(str1[-1]); //The square brackets always return undefined for negative indexes 
//console.log(str1.at(-1)); //The str.at(indexNo) method return last charecter for negative indexes 

//*2-Strings are immutable
//Strings can’t be changed in JavaScript. It is impossible to change a character.
str1[0] = "h";
//console.log(str1);

//*3-Changing the case
//Methods toLowerCase() and toUpperCase() change the case:
let str2 = "Mustafa"
// console.log(str2.toUpperCase());
// console.log(str2.toLowerCase());

//*4-indexOf()
//it looks for the substr in str, starting from the given position index number, and returns the position where the match was found or -1 - 
//if nothing can be found.
let str3 = "Hello World Hello from India";
//console.log(str3.indexOf("Hello")); // 0, because 'Hello' is found at the beginning
//console.log(str3.indexOf("hello")); // -1, not found, the search is case-sensitive
//console.log(str3.indexOf("lo")); // 2, "lo" is found at the position 2 (Hello with lo)

//*5-includes, startsWith, endsWith
//The more modern method str.includes(substr, pos) returns true/false depending on whether str contains substr within.
let str4 = "my name is mustafa";
//console.log(str4.includes("mustafa")); //true
//console.log(str4.includes("Mustafa")); //false becuse the serch is case-sensitive

//*6-charAt()
//The charAt() method of String values returns a new string consisting of the single UTF-16 code unit at the given index.
let str5 = "hello world";
//console.log(str5.charAt(1)); // "e" return "e" which is at index 1
//console.log(str5.charAt(-1)); // "" return "" when not find value or find any eror;
//console.log(str5.charAt(str5.length-3)); // "r" this will return value from last in this case return 3rd last value which is "r";

//*7-concat()
//The concat() method of String values concatenates the string arguments to this string and returns a new string.
let str6 = "hello";
let str7 = "World";
//console.log(str6.concat(" ",str7)); //hello World
//console.log("".concat(str6," ",str7)); //hello World

//*8-startsWith()
//This method lets you determine whether or not a string begins with another string. This method is case-sensitive.
let str8 = "hey i am a developer"
//console.log(str8.startsWith("he")); //true
//console.log(str8.startsWith("deve")); //false
//console.log(str8.startsWith("deve", 11)); //true