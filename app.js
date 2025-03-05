/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

/*-------------------------------- Functions --------------------------------*/

/*First time ever attempting to use the DOM*/
/*Notes below for my plan of how to do this project.*/
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

/*Below are all the elements I'd like to select*/
/* <id="calculator"> */ 
// class="row">
// class "display">
// class="button number"
// class="button operator"
// class="button equals"
// const buttonnumberElement = document.querySelector('.button-number') //null for this 
// console.dir(buttonnumberElement);//null for this

// #calculator 
// .row 
// .button


const calculatorElement = document.querySelector('#calculator');
console.dir(calculatorElement);

const rowElement = document.querySelector('.row');
console.dir(rowElement);

const displayElement = document.querySelector('.display');
console.dir(displayElement);

const buttonElement = document.querySelector('.button');
console.dir(buttonElement);

// const buttonNumberElement = document.querySelector('.button number')
// console.dir(buttonNumberElement); //console null msg

// const buttonOperatorElement = document.querySelector('.button operator')
// console.dir(buttonNumberElement); ///console null msg

// const buttonEqualsElement = document.querySelector('.button equals')
// console.dir(buttonNumberElement); /console null msg

// I've been trying to get answers for all my questions for this lab 
// for the past 8 hours. I'd like to get more answers cause I want to complete this lab.
// @Keith, I can send you the questions I asked Matt via Slack. Just let me know.


//Next up, create eventListeners