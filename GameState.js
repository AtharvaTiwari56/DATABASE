class GameState {
    constructor(){}

    getState() {
        var gameStateref = database.ref('gameState');
        gameStateref.on("value", function(data) {
            gameState = data.val();
        });
    }
    writeState(state) {
        database.ref('/').update({
            gameState: state
        })
    }
    start() {
        if(gameState === 0) {
            player = new Player()
            player.getCount();
            form = new Form();
            form.display();
        }
    }
}