/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

/*-------------------------------- Functions --------------------------------*/

/*-----Grab/Select the correct element W/querySelector & make sure you selected the correct element via CONSOLE LOG-----*/
/*-----Modify text, style, create new elements-----*/
/*-----ADD EVENT LISTENER & TEST IT OUT VIA CONSOLE.DIR-----*/
/*-----ADD ADDTL Variables and Functions AS NECESSARY----- */
/*----- What I want to do is create the clicking of each number to = each number, 
create some math equations with what happens when 
you add, subtract, multiply, and divide info, 
and then I want to have that input show up on the screen.
So I think I need to create separate functions for each number and 
separate function for each + - * / ---------*/

/* <id="calculator"> */ 
// class="row">
// class "display">
// class="button number"
// class="button operator"
// class="button equals"
// const buttonnumberElement = document.querySelector('.button-number') //null for this 
// console.dir(buttonnumberElement);//null for this so that means did wrong element
//(for the above code... I was thinking class/ids were both in CSS & HTML and that's 
// why the code was null because button operator wasn't a class. Button is.)

// #calculator 
// .row 
// .button

// I think maybe I don't fully understand the html for this calculator lesson and why it was written that way. Div class confuses me. I get that divs are dividers of content. And that class is a grouping of things. I just don't get why they would make individual numbers in a class together when they are each with individual values.... I wonder why they aren't Ids instead so that each individual number has a different value so that it's easier to calculate. I was planning on creating a math equation through the Dom to manipulate the numbers once they were clicked on. But the way the html was written, it makes it more confusing the way I want to manipulate the dom.
//I've been doing this coding step by step with the lesson and keep getting error messages.




const calculatorElement = document.querySelector('#calculator');
console.dir(calculatorElement);

const rowElement = document.querySelector('.row');
console.dir(rowElement);

const displayElement = document.querySelector('.display');
console.dir(displayElement);

const buttonNumberElement = document.querySelector('.button number')
console.dir(buttonNumberElement);

const buttonOperatorElement = document.querySelector('.button operator')
console.dir(buttonNumberElement);

const buttonEqualsElement = document.querySelector('.button equals')
console.dir(buttonNumberElement);

