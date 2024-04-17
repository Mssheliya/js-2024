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
//console.log(str3.indexOf("Hello", 2)); // 12, 2nd "Hello" is found at the position 12 

//*5-includes,
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

//*9-endsWith()
//The endsWith() method of String values determines whether a string ends with the characters of this string, returning true or false as appropriate.
let str9 = "Iam a Indian, stay in Maharashtra"
//console.log(str9.endsWith("Maharashtra")); //true
//console.log(str9.endsWith("maharashtra")); //false (it is Case--Sensitive)
//console.log(str9.endsWith("Indian")); //false
//console.log(str9.endsWith("Indian", 12)); //true

//*10-lastIndexOf()
//The lastIndexOf() method of String values searches this string and returns the index of the last occurrence of the specified substring. 
//It takes an optional starting position and returns the last occurrence of the specified substring at an index less than or equal 
//to the specified number.
let str10 = "Hello World Hello from India";
//console.log(str10.lastIndexOf("Hello")); //12
//console.log(str10.lastIndexOf("hello")); //-1 (Eror:- Case-Sensetive)

//*11-padStart()
//The padStart() method of String values pads this string with another string (multiple times, if needed) until the resulting string 
//reaches the given length. The padding is applied from the start of this string.
let str11 = "7506303563";
//console.log(str11.padStart(str11.length+4,"*")); //****7506303563
//console.log(str11.padStart(14,"*")); //****7506303563
//let slicestr = str11.slice(-4);
//console.log(slicestr); //3563
//console.log(slicestr.padStart(str11.length, "*")); //******3563

//*12-padEnd()
//The padEnd() method of String values pads this string with a given string (repeated, if needed) so that the resulting string 
//reaches a given length. The padding is applied from the end of this string.
let str12 = "7506303563";
//console.log(str12.padEnd(str12.length+4, "*")); //7506303563****
//console.log(str12.padEnd(14, "*")); //7506303563****
//let slicestr = str12.slice(0, 4);
//console.log(slicestr); //7506
//console.log(slicestr.padEnd(str12.length, "*")); //7506******

//*13-slice()
//The slice() method of String values extracts a section of this string and returns it as a new string, without modifying the original string.
let str13 = "my name is Ali, i am Indian";
//console.log(str13.slice(21)); //Indian
//console.log(str13.slice(3, 14)); //name is Ali
//console.log(str13.slice(-6)); //Indian
//console.log(str13.slice(-12, -7)); //i am

//*14-split()
//The split() method of String values takes a pattern and divides this string into an ordered list of substrings by searching for the pattern,
//puts these substrings into an array, and returns the array.
let str14 = "Hey Doe how old are you"
//console.log(str14.split(" ")); //[ 'Hey', 'Doe', 'how', 'old', 'are', 'you' ]
//console.log(str14.split("")); //{'H', 'e', 'y', ' ', 'D','o', 'e', ' ', 'h', 'o','w', ' ', 'o', 'l', 'd',' ', 'a', 'r', 'e', ' ','y', 'o', 'u']
//console.log(str14.split()); //[ 'Hey', 'Doe', 'how', 'old', 'are', 'you' ]

//*15-replace()
//The replace() method of String values returns a new string with one, some, or all matches of a pattern replaced by a replacement.
//The original string is left unchanged.
let str15 = "my name is mustafa"
//console.log(str15.replace("mustafa","Ali")); //my name is Ali
//console.log(str15.replace(" ","*")); //my*name

//*16-replaceAll()
//The replaceAll() method of String values returns a new string with all matches of a pattern replaced by a replacement.
//The original string is left unchanged.
let str16 = "my name is mustafa, and my brother name is AD"
//console.log(str16.replaceAll("my", "your")); //your name is mustafa, and your brother name is AD
//console.log(str16.replaceAll(" ", "*")); //my*name*is*mustafa,*and*my*brother*name*is*AD

//*17-repeat()
//The repeat() method of String values constructs and returns a new string which contains the specified number of copies of this string, concatenated together.
let str17 = "name"
//console.log(str17.repeat(3)); //namenamename
//console.log("*".repeat(3)); //***

//*18-trim()
//The trim() method of String values removes whitespace from both ends of this string and returns a new string, without modifying the original string.
//To return a new string with whitespace trimmed from just one end, use trimStart() or trimEnd().
const str18 = '   Hello world!   ';
//console.log(str18); //   Hello world!   *
//console.log(str18.trim()); //Hello world!
