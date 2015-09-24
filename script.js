//ASSIGNMENT 2 Part 1
//1.	Prompts the user for their name. Find the length of characters in the person’s name.  Alert method to display the result.
/*
    var person = prompt("Please enter your name");
    alert("Person's name is "+person.length +" characters.");
*/

//2.	Prompts the user for their name. Then, prompt the user for a numeric value, find the letter in the string. Alert method to display the result.
/* 
var person1 = prompt("Please enter your name");

var guess = prompt("Pick a number from 0 to " +person1.length);
 
    alert("You chose the letter \"" +person1.charAt(guess)+"\".");
*/ 

//3.	Prompts the user for their first name. Prompt the user for their last name. Alert method to display the text "Your name is: " along with first name and last name concatenated together. You will use a concatenation operator to concatenate the literal string with the result of the String object method’s result.
/*
var first=prompt ("Enter first name: ");
var last=prompt ("Enter last name: ");

alert("Your name is "+first +" " +last.valueOf());
*/

//4.	Create an application that stores the text “The quick brown fox jumps over the lazy dog” within a variable. Then, find and display within an alert the index of the word “fox”.
/* 
var sentence="The quick brown fox jumps over the lazy dog";
alert("\"fox\" is located at index "+sentence.indexOf("fox"));
*/ 

//5.	Create an application that stores the text “The quick brown fox jumps over the lazy fox” within a variable. Alert the index of the last instance of the word “fox”.
/* 
var sntnce="The quick brown fox jumps over the lazy dog";
alert("The last instance of word \"fox\" happens at index: " +sntnce.lastIndexOf("fox"));
*/

//6. Store the text “The quick brown fox jumped over the lazy dog” in a variable. Prompt the user for their full name. Then, replace the text “the lazy dog” with the user entery. 
/*
namo = prompt("Please enter name:");
var phrase="The quick brown fox jumps over the lazy dog."
alert(phrase.replace("the lazy dog", namo.toString())); //2nd order abstraction?
*/ 

//7. Store the text “The quick brown fox jumps over the lazy dog” within a variable. Prompt the user for a word. Search for the word within the string from prompt. Use the alert to display.
/* 
var scrtSntnc = "The quick brown fox jumps over the lazy dog";
var srch = prompt("Guess if word is in Secret Sentence! hint- try a three letter word.");
if (scrtSntnc.match(srch))
{
    alert("Your guess is in Secret Sentence- \""+scrtSntnc +"\"");
}else{
    alert("too bad... ");
    };
*/

//8.  Store text “The quick brown fox jumps over the lazy dog” in old_string. Use slice(), substr(), or substring() to extract words “the lazy dog” from old_string, store in a second variable new_string. Alert display uppercase new_string.
/* 
var old_string = "The quick brown fox jumps over the lazy dog";

var new_string = old_string.substr(old_string.lastIndexOf("the"),trm old_string.length);  
    alert(new_string.toUpperCase());
*/

//9.  Store text “THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG”. Add space so that appears very similar to the text here. Use alert method to display the lowercase and trimmed result.
/*
var trmSntnc = "        THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG        ";
alert(trmSntnc + "\n"+trmSntnc.trim().toLowerCase());
*/ 

//10.  Store text “the quick brown fox jumps over the lazy dog” in a variable. User forgot to capitalize the first letter. Programmatically capitalize first letter and display alert.
/*
var punctCap = "the quick brown fox jumps over the lazy dog";
alert(punctCap.charAt(0).toUpperCase() + punctCap.substr(1,punctCap.length));
*/

            //ASSIGNMENT 2 Part 2 MATH
//1.	Prompt the user for a number. Whether they enter a negative or positive number, display the positive version of that number in the console. 
/*
    var psng = prompt("Enter pos or neg number between 1 and 9:");
    console.log(Math.abs(psng));
*/
 
//2.	Prompt user for a floating point value. Store input in a variable and round up to nearest whole number. Display the result in a console.
/*
    var deci = prompt("Enter a decimal number-");
    console.log("Your number rounded up: " +deci+ " to " +Math.ceil(deci));
*/

//3.	Prompt user for a floating point value. Store input in variable and round down to nearest whole number. Display the result in a console.
/*
        var deCi = prompt("Enter a decimal number-");
    console.log("Your number rounded down: "+deCi + 
                " to "+ Math.floor(deCi));
*/

//4.	Prompt user for 5 numbers. Ask to comma delimit each number. Store input in a variable and find largest and smallest numbers in list. Display both of those numbers within a console window.
/*
var nums = [];
var count=0;

var nums=prompt("enter 5 numbers seperated by comma:");
  
nums.sort;

 console.log("Lowest number: " +nums[0]+" and Highest number: " +nums[nums.length-1]);
*/

            //PART 2 DATE
//5.	Prompts user for number. Find square root of number and display result in a console window. 
/*
    var square=prompt("Pick number to square root:");
        sqrt = Math.sqrt(square);

    console.log("The square root is: " +sqrt);
*/

//6.	Gets current date within console window.
/*
    var tday = new Date();
     console.log(tday.toDateString());
*/

//7.	Get number of days in a month. Display that result within the console window.
/*
    var mnthQ=prompt("enter year month in this format \"yyyy-xx\"");
    console.log(mnthQ);
    var tday = new Date(mnthQ);
    console.log(tday.getMonth());

    switch (tday.getMonth()) {
        case 0:
           console.log("31 days");
            break;
        case 1:
            console.log("29 days");
            break;
        case 2:
            console.log("31 days");
            break;
        case 3:
            console.log("30 days");
            break;
        case 4:
            console.log("31 days");
            break;
        case 5:
            console.log("30 days");
            break;
        case 6:
            console.log("31 days");
            break;
        case 7:
            console.log("31 days");
            break;
        case 8:
             console.log("30 days");
            break;
        case 9:
            console.log("31 days");
            break;
        case 10:
            console.log("30 days");
            break;
        case 11:
            console.log("31 days");
            break;
}
*/

// 8.	Create an application that gets the month name from a particular date. Display that result within the console window.
/*
var  tmpV = prompt("enter number of month");
   tmpV2 = Number(tmpV);     
    
     switch((tmpV2-1)){
        case 0:
            month = "January";
           console.log(month);
            break;
        case 1:
            month = "February";    
            console.log(month);
            break;
        case 2:
            month = "March";
            console.log(month);
            break;
        case 3:
            month = "April";    
            console.log(month);
            break;
        case 4:
            month = "May";
            console.log(month);
            break;
        case 5:
            month = "June";    
            console.log(month);
            break;
        case 6:
            month = "July";
            console.log(month);
            break;
        case 7:
            month = "August";
            console.log(month);
            break;
        case 8:
            month = "September";
            console.log(month);
            break;
        case 9:
            month = "October";    
            console.log(month);
            break;
        case 10:
            month = "November";    
            console.log(month);
            break;
        case 11:
            month = "December";
            console.log(month);
            break;
}
*/

//9.	If date is  weekend. Display in console.
/*
var d = new Date();
var ckWkEnd=d.getDay();
console.log(ckWkEnd);
    if (ckWkEnd > 5){
   console.log("Yay, rest, relaxation, and fun!");}
else {console.log("Darn, not the weekend, yet!");}
*/

//10.	Gets yesterday’s day of week. 
/*
var d = new Date();
var e = d.getDay();
switch (e-1) {
    case 0:
        day = "Sunday";
        console.log(day);
        break;
    case 1:
        day = "Monday";
        console.log(day);
        break;
    case 2:
        day = "Tuesday";
        console.log(day);
        break;
    case 3:
        day = "Wednesday";
        console.log(day);
        break;
    case 4:
        day = "Thursday";
        console.log(day);
        break;
    case 5:
        day = "Friday";
        console.log(day);
        break;
    case 6:
        day = "Saturday";
        console.log(day);s
        break;
}
*/

//11.	Get current day of the week. Only first letter of day. 
/*
var d = new Date();
var e = d.getDay();
switch (e) {
    case 0:
        day = "Sunday";
        console.log(day.substr(0,1));
        break;
    case 1:
        day = "Monday";
        console.log(day.substr(0,1));
        break;
    case 2:
        day = "Tuesday";
        console.log(day.substr(0,1));
        break;
    case 3:
        day = "Wednesday";
        console.log(day.substr(0,1));
        break;
    case 4:
        day = "Thursday";
        console.log(day.substr(0,1));
        break;
    case 5:
        day = "Friday";
        console.log(day.substr(0,1));
        break;
    case 6:
        day = "Saturday";
        console.log(day.substr(0,1));s
        break;
}
*/
                // CONDITIONAL LOGIG
//12.	Application accepts two integers within two  prompts. Display larger in the console window.
/*
var arayNum = [];
var x = prompt("enter first number:");
var y = prompt("enter second number:");
arayNum.push(x);
arayNum.push(y);
arayNum.reverse();
console.log("the larger of the two numbers is: " +arayNum[0]);
*/

//13.	App. records marks for following five students. Marks determine grade. 5 students and grades should be displayed in the console window
/*
var names=[];
var marks=[]; 
var grades=[];
var grade;
for (var i=0;i<5;i++){
    var name=prompt("enter name: ");
    names.push(name);
    var mark=prompt("enter number marked correct: ");   
    marks.push(mark);

    if(mark > 89 && mark <= 100){ grade="A";
grades.push(grade);}
    else
    if(mark > 79 && mark < 90){grade="B"; grades.push(grade);}
    else
    if(mark > 69 && mark < 80){grade="C"; grades.push(grade);}
    else
    if(mark > 59 && mark){grade="D";grades.push(grade);}
        else{grade="F"; grades.push(grade);}
    
    console.log("Student: " + names[i]+ " scored " + marks[i] + " for grade "  +grades[i]+ ".");
}
*/

//14.	Create for loop that iterates from 1 to 15. Check if odd or even, and display in console.
/*
var x=0;
 
while(x<16){
    var evOd=(x%2);
    if(evOd!=1){evOd="even";}else{evOd="odd";}
    console.log("number "+x+" is "+evOd);
    x++;} 
*/

//15.	Iterate nums from 1 to 100. Multiples of 3, print "Fizz", of 5, print "Buzz". Multiples of both 3 and 5 print "FizzBuzz". 
/*
var i;
var mod1;
var mod2;
var text1 = "Fizz"; 
var text2 = "Buzz";
 
 for( i=0;i<=100;i++){
     mod1 = i % 3;
     mod2 = i % 5;
    if ( mod1 == 0 && mod2 != 0  ){console.log( text1 );}
     //else if ( mod2 == 0 && mod1 == 0 ){console.log( text1 + text2 )}
         
     else
     if ( mod2 == 0 && mod1 != 0 ) { console.log( text2 );}
     else 
         if ( mod2 == 0 && mod1 == 0 ) { console.log( text1 + text2 );}
     else if ( mod1 != 0 && mod2 != 0  ){console.log(i);}
     //else(mod1==mod2){console.log(text1 + text2);}
 }
*/

//Part 4 - The “Hitchhiker’s Guide to the Galaxy” 
//1.	Ask user if they’re ready to play. If they are, display the message “Awesome, our hero is waiting!”  If not, display message “Too bad, we’re going to play anyway because our hero desperately needs your help!” Use confirm box and check for Boolean result of clicking OK or Cancel.
/*
var ready = false;

ready = confirm("Are you ready to play My game?");

if(ready == true) {console.log("Awesome, our hero is waiting!");}
    else{console.log("Too bad, we’re going to play anyway because our hero desperately needs your help!");}
*/

//2.	Alert user to the scenario: “You are in a dark, dingy, and humid cave searching for the lost treasure of Captain Chingadera. You are disoriented, lost, hungry and extremely thirsty. You see a speck of light in the distance ahead of you, something shimmering to your right, and the sound of running water to your left. Your back is against the wall…”
/*
alert("You are in a dark, dingy, and humid cave searching for the lost treasure of Captain Chingadera. You are disoriented, lost, hungry and extremely thirsty. You see a speck of light in the distance ahead of you, something shimmering to your right, and the sound of running water to your left. Your back is against the wall…");
*/

//3.	Then prompt the user with the following message: 
/*
var str = prompt("Which direction would you like to head (please enter forward, left, or right");


//4.	Use a switch statement to check for the literal string values forward, left, and right. 

str = str.toLowerCase();
    
switch(str){
    case( "forward" ): console.log("You walk about 100 yards and safely make your way out of the cave.");
            break;
    case ( "left" ): console.log("Your thirst has gotten the better of you. You trip on a rock, hit your head, and fall into a pool of water and drown.");
            break;
    case ( "right" ): console.log("You found the gold! You walk into a small room and see thousands of gold coins, jewels, chalices, and more. You jump into the pile of gold in celebration and immediately a hidden door slams down and traps you in the room forever.");
            break;
    default: console.log("The ghost of Captain Chingadera has condemned you to eternal damnation and you shall now burn in the hot excoriation for lifeless lowlifes for not choosing the correct option….loser.")
}
*/

//5.	Finally, ask the user to rate your game on a scale of 1 to 10.  
//6.	Before you evaluate the number entered, check if user entered a valid num value. If not, default the value to 10 and proceed.
/*
var rating = prompt("Rate our game on a scale from 1 to 10: ");
     if (isNaN(rating)==true){ rating = 10;}
    if ( rating >= 6 && rating <= 10 ) {alert("Thank you, we will continue to make improvements to the game!");}
    else if( rating < 6 ){alert("Whatever, you weren’t very good at this game anyway!")}
*/

// PART 5 - The “Coin Flip” Game 
/*
var coinFlip, call, rndmRes; 
    coinFlip = Math.floor(Math.random()*10);
console.log(coinFlip);

    if (coinFlip <= 4) {rndmRes = "heads";}
        else {rndmRes = "tails"; }
            
        var call = prompt("Heads or Tails? ");
            call.toLowerCase;
//console.log(rndmRes + call);
//4.The flip was heads and you chose heads...you win!
        if (rndmRes=="heads" && call=="heads")          {alert("The flip was heads and you chose heads...you win!");}

//5.	Result is heads and the user selects tails, display the following alert: 
        else if (rndmRes == "heads" && call != "heads")
        {alert("The flip was heads but you chose tails...you lose!");}

//6.	If the result is tails and the user selects heads, display the following message within an alert: 
else if (rndmRes == "tails" && call != "tails")
        {alert("The flip was tails but you chose heads...you lose!");}

//7.	If the result is tails and the user selects tails, display the following message within an alert: 
 
    else if (rndmRes == "tails" && call == "tails")         {alert("The flip was tails and you chose tails...you win!");}
*/

//8.	Use two Math methods to get solid whole num on coinflip. Mod eval of expr in your conditional so checks for Boolean.
/*
var coinFlip, call, rndmRes; 
    coinFlip = Math.floor(Math.random()*10);
console.log(coinFlip);

    if (coinFlip <= 4) {rndmRes = true;}
        else {rndmRes = false; }
            
        var call = prompt("Heads or Tails? ");
            call.toLowerCase;
//console.log(rndmRes + call);
        if (rndmRes==true && call=="heads")          {alert("The flip was heads and you chose heads...you win!");}

  else if (rndmRes == true && call != "heads")
        {alert("The flip was heads but you chose tails...you lose!");}

else if (rndmRes == false && call != "tails")
        {alert("The flip was tails but you chose heads...you lose!");}

 
    else if (rndmRes == false && call == "tails")         {alert("The flip was tails and you chose tails...you win!");}
*/

            // 6 - “COIN FLIP” Game Redux (5 points)
 
//1.	Begin your application by declaring a variable called coinFlip. 
//2.,3.,4.,5.	Create a for loop that loops 10 times.
/*
var coinFlip;
        for (var i = 0; i < 10; i++){
             coinFlip = Math.round(Math.random();) 
          
            if (coinFlip == false ) { alert("Heads -you win!");}
            else {alert("Tails -bye,bye");
                 break;}
        }
*/

            //PART 8 Write a loop that displays the following triangle within a console window:

/*
for (var i=0;i<7;i++){
    var str1 = "";
    var str2 = "#";
    var res = str1.concat(str2);
   
    console.log(res);
    str1=res;}
*/

//Part 9 – Odd or Even? (5 points)
//Write a loop that will iterate from 0 to 15. For each iteration it will check if the current number is odd or even, and display a message in the console window. 
/*
for (var i=0; i<16; i++)
    if(i%2==0){console.log(i+" is even");}
        else{console.log(i+" is odd");}
*/



    
