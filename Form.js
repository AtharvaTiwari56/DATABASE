class Form {
    constructor() {}
    display() {
        var title = createElement('h1');
        title.html("Car Race!");
        title.position(225, 50);
        
        var inputText = createInput("Enter Your Name");
        inputText.position(220, 250);
        var submitbutton = createButton("GO!");
        submitbutton.position(225, 275);
        var submitmessage = createElement('h2');
        
        submitbutton.mousePressed(function() {
            inputText.hide();
            submitbutton.hide();
            var playername = inputText.value;
            playerCount+= 1;
            player.updateCount(playerCount);
            player.update(playername);
            submitmessage.html("Welcome, " + playername);
            submitmessage.position(225, 100);
        })
    }
}