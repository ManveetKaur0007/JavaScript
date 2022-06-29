/*
    JavaScript File
    Author: Manveet Kaur
    Student Id: W0782002
    Date: 2022/06/27
    Filename: script.js
    Section: 065
*/

// Class code goes here
class ManveetKaurSecret {                               // initializing the variables 
    _secret;
    guessNumber;
    hints;
    constructor(actualFile0782002){
        this._secret = actualFile0782002;               //a variable which holds the string of the correct json file name.
        this.guessNumber = 0;                           //set to 0 as it will increment +1 till 5
        this.hints = [
            "Name of the file startes with an a",
            "Have no space in between",
            "First word with intial of lowercase",
            "Second word with intial of uppercase",
            "Add my StudentId at last"];                //variable which has 5 arrays holding the hints to guess the file name correctly.
    }
    getHint(){                                          //returns the value of the hints array at the index of guessNumber.
        if(this.guessNumber <= 5){
            $('#hints').append(this.hints);
        }
    }
    testSecret(actualFile0782002){                      
        this.guessNumber++;                             // increment the guessNumber by 1
        if(this.guessNumber>=5){
            $("#result").text = "Better Luck Next Time!"   // if the guessNumber reaches 5, update the div#result to output that user lost.
        }
        try {
            this._secret === 'actualFile0782002.json';
            $.getJSON("actualFile0782002.json", function(data){
               
                $('#result').text(data.value)
            });
            
        } catch(e) {
            console.error(e);
            return{};
             
        } 
    }
    
}

// jquery code goes here
$(function(){
     mySecret = new ManveetKaurSecret('actualFile0782002.json');    // event binding
    $("#counter").text(mySecret.guessNumber);
});

$('#guess-button').click(function()  {  
    let filename = $('#filename').val;
    let result = document.getElementById('result');
    
    if(filename != mySecret._secret)
    {mySecret.getHint()} 
    else{ mySecret.testSecret()}

 $('#counter').text(mySecret.guessNumber++)                              
});