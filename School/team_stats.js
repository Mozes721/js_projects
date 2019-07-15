const team = {
    _players: [{
        firstName: "Pablo",
        lastName: "Sanchez",
        age: 11
    }],
    _games: [{
        opponent: "Broncos",
        teamPoints: 42,
        opponentPoints: 27
    }],

    get _players() {

    },
    get _games() {

    },
    addPlayer(firstName, lastName, age) {
        let player = {
            firstName: firstName,
            lastName: lastName,
            age: age
        };
    },
    addGame(opponent, teamPoints, opponentPoints) {
        let games = {
            opponent: opponent,
            teamPoints: teamPoints,
            opponentPoints, opponentPoints
        };
    }
}
team.addPlayer("Stephan", "Curry", 28)
team.addGame("Titans", 100, 98)
