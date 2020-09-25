class Player {
    constructor() {}

    getCount() {
        var playercountref = database.ref('playerCount');
        playercountref.on("value", function(data) {
            playerCount = data.val();
        })
    }
    updateCount(count) {
        database.ref('/').update({
          'playerCount': count
      })
    }
    update(name) {
        var index = "player" + playerCount;
        console.log(index);
        database.ref(index).set({
            name: name,
            FirstName: index,
            sNo: playerCount
        })
    }
}