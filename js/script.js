/******************************************
*****************************************/

/*** 
 * `quotes` array 
***/
let quotes = [{
    quote : "Until you've lost your reputation, you never realize what a burden it was or what freedom really is",
    source : "Margaret Mitchell."

},
{
    quote :"When I hear music, I fear no danger. I am invulnerable. I see no foe. I am related to the earliest times, and to the latest",
    source : "Henry David Thoreau."
},
{
    quote :"There are three marks of a superior man: being virtuous, he is free from anxiety; being wise, he is free from perplexity; being brave, he is free from fear",
    source : "George Eliot."
},
{
    quote : "Research is to see what everybody has seen, and to think what nobody else has thought",
    source :"Albert Szent-Gyorgyi.",
    citation : "Instagram",
    year : "2015"
},
{
    quote : "Everything You've Ever Wanted Is On The Other Side Of Fear",
    source :"George Addair.",
    citation : "braintracy.com",
    year : "2019"
}];

// console.log(quotes);


/***
 * `getRandomQuote` function
***/
function getRandomQuote(arr){

    let a;
    let b = arr.length;

    //Create a variable that generates a random number between zero and the last index in the `quotes` array
    let rand = Math.floor(Math.random() * b);

    /*
    Use the random number variable and bracket notation
    to grab a random object from the `quotes` array, and
    store it in a variable
    */
    a = arr[rand];

    //Return the variable storing the random quote object
    return a;
    
    
}

//let randomQuote = getRandomQuote(quotes);
//console.log(randomQuote);



/***
 * `printQuote` function
***/
function printQuote(){

    //Create a variable that calls the getRandomQuote() function
    let randomQuote = getRandomQuote(quotes);
    
    /*
    Create a variable that initiates your HTML string with
    the first two <p></p> elements, their classNames,
    and the quote and source properties, but leave off
    the second closing `</p>` tag for now
    */
    
    let stringReq = ' ';

    stringReq += '<p class = "quote">' + randomQuote.quote + '</p';

    stringReq += '<p class = "source">' + " - " + randomQuote.source + '</p'; 

    //first if statement to check in the object has citation property
    if ("citation" in randomQuote){

        stringReq += '<span class = "citation">'  + randomQuote.citation + '</span>';
    }

    //second if statement to check if the object has year property
    if ("year" in randomQuote){

        stringReq += '<span class = "year">' + randomQuote.year + '</span>';

    }

    document.getElementById("quote-box").innerHTML = stringReq;
                        
}


printQuote();
console.log(printQuote());



/***
 * click event listener for the print quote button
 * The code will look like the following. You need to complete it.

***/
document.getElementById('load-quote').addEventListener('click', printQuote);
