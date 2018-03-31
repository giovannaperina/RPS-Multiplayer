/* global jQuery */
/* global firebase */

jQuery(document).ready(function($) {
    
    var players = {};
    var turn = 1;
    
    var chat = [];
    
    
    var config = {
        apiKey: "AIzaSyCU0ksk9ZIQpgnuRNsBJgsrBxZ0Tva1bDs",
        authDomain: "rps-multiplayer-4c89b.firebaseapp.com",
        databaseURL: "https://rps-multiplayer-4c89b.firebaseio.com",
        projectId: "rps-multiplayer-4c89b",
        storageBucket: "rps-multiplayer-4c89b.appspot.com",
        messagingSenderId: "985399709350"
    };
      
    firebase.initializeApp(config);
    
    var db = firebase.database();
    
    // Setting Up Firebase Objects
    var firebaseRef = db.ref(".info");
    var playersRef = db.ref("players");
    var chatRef = db.ref("chat");
    
    firebaseRef.on('value', function (snapshot) {
        console.log(snapshot.val());
    });
    
    playersRef.on('value', function (snapshot) {
        console.log(snapshot.val());
        
        players = [];
        
        snapshot.forEach(function (child) {
            players.push(child);  
        });
        
        //players = snapshot.val().players;
    });
    
    chatRef.on('value', function (snapshot) {
        //console.log(snapshot.val());
    });
    
    
    $('#user-enter').submit(function(e){
        e.preventDefault();
        var username = $('#username-input').val();
        
        if(players.length == 0) {
            
        }
    });
    
});