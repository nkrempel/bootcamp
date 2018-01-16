

//1Function called Dojo that takes an ID
//2Dojo function returns an object that has the click and hover method
//3click and hover register Event Listeners for the objec taht is returned by the Dojo function

class MyDojoElement {
    constructor(htmlElement){
        this.htmlElement = htmlElement
    }
    click(callback){
        this.htmlElement.addEventListener('click', callback);
    }
    hover(callback, callback2){
        this.htmlElement.addEventListener('mouseover', callback);
        this.htmlElement.addEventListener('mouseout', callback2);
    }

}


//takes an id, return some objec
//params id - type string
function Dojo(id){
   return new MyDojoElement(document.getElementById(id));

}

Dojo("someIdForSomeButton").click(function() { console.log("The button was clicked!") });
Dojo("someOtherIdForSomeOtherButton").hover(function() { console.log("The button was hovered on!") },function(){ console.log("The button is no longer hovered on!")});