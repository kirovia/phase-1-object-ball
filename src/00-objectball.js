function gameObject() {
    let info = {
            home: {
                teamName: 'Brooklyn Nets',
                colors: ['Black', 'White'],
                players: {
                    "Alan Anderson": {number: 0, shoe: 16, points: 22, rebounds: 12, assists: 12, steals: 3, blocks: 1, slamDunks: 1},
                    "Reggie Evans": {number: 30, shoe: 14, points: 12, rebounds: 12, assists: 12, steals: 12, blocks: 12, slamDunks: 7},
                    "Brook Lopez": {number: 11, shoe: 17, points: 17, rebounds: 19, assists: 10, steals: 3, blocks: 1, slamDunks: 15},
                    "Mason Plumlee": {number: 1, shoe: 19, points: 26, rebounds: 12, assists: 6, steals: 3, blocks: 8, slamDunks: 5},
                    "Jason Terry": {number: 31, shoe: 15, points: 19, rebounds: 2, assists: 2, steals: 4, blocks: 11, slamDunks: 1}
                },
            },
            away: {
                teamName: 'Charlotte Hornets',
                colors: ['Turquoise', 'Purple'],
                players: {
                    "Jeff Adrien": {number: 4, shoe: 18, points: 10, rebounds: 1, assists: 1, steals: 2, blocks: 7, slamDunks: 2},
                    "Bismak Biyombo": {number: 0, shoe: 16, points: 12, rebounds: 4, assists: 7, steals: 7, blocks: 15, slamDunks: 10},
                    "DeSagna Diop": {number: 2, shoe: 14, points: 24, rebounds: 12, assists: 12, steals: 4, blocks: 5, slamDunks: 5},
                    "Ben Gordon": {number: 8, shoe: 15, points: 33, rebounds: 3, assists: 2, steals: 1, blocks: 1, slamDunks: 0},
                    "Brendan Haywood": {number: 33, shoe: 15, points: 6, rebounds: 12, assists: 12, steals: 22, blocks: 5, slamDunks: 12}
                },
            },
        };
    return info;
}

function numPointsScored(playerName) {
    let object = gameObject();
    let homePlayers = object.home.players;
    let awayPlayers = object.away.players;
    for (const key in homePlayers) {
        if (key === playerName) {
            return homePlayers[key]['points'];
        }
    for (const key in awayPlayers) {
        if (key === playerName) {
            return awayPlayers[key]['points'];
        }
    }
    }
};

function shoeSize(playerName) {
    let object = gameObject();
    let homePlayers = object.home.players;
    let awayPlayers = object.away.players;
    for (const key in homePlayers) {
        if (key === playerName) {
            return homePlayers[key]['shoe'];
        }
    for (const key in awayPlayers) {
        if (key === playerName) {
            return awayPlayers[key]['shoe'];
        }
    }
    }
};

function teamColors(teamNameInput) {
    let object = gameObject();
    switch (teamNameInput) {
        case object.home.teamName:
            return object.home.colors;
            break;
        case object.away.teamName:
            return object.away.colors;
            break;
        default:
            return 'error';
    }
};

function teamNames() {
    let object = gameObject();
    let homeTeam = object.home.teamName;
    let awayTeam = object.away.teamName;
    return [homeTeam, awayTeam];
};

function playerNumbers(teamNameInput) {
    let object = gameObject();
    let homeTeam = object.home.teamName;
    let homePlayers = object.home.players;
    let awayTeam = object.away.teamName;
    let awayPlayers = object.away.players;
    let myArray = [];
    if (teamNameInput === homeTeam) {
        for (const key in homePlayers) {
            myArray.push(homePlayers[key]['number']);
        }
    } else if (teamNameInput === awayTeam) {
        for (const key in awayPlayers) {
            myArray.push(awayPlayers[key]['number']);
        }
    } else {
        return 'error';
    }
    return myArray;
};

function playerStats(playerName) {
    let object = gameObject();
    let homePlayers = object.home.players;
    let awayPlayers = object.away.players;
    for (const key in homePlayers) {
        if (key === playerName) {
            return homePlayers[playerName];
        }
    }
    for (const key in awayPlayers) {
        if (key === playerName) {
            return awayPlayers[playerName];
        }
    }
};

function bigShoeRebounds() {
    let object = gameObject();
    let homePlayers = object.home.players;
    let homeShoeSizes = [];
    let awayPlayers = object.away.players;
    let awayShoeSizes = [];
    for (const key in homePlayers) {
        homeShoeSizes.push(homePlayers[key]['shoe']);
    };
    for (const key in awayPlayers) {
        awayShoeSizes.push(awayPlayers[key]['shoe']);
    };
    let biggestShoe = Math.max(...homeShoeSizes, ...awayShoeSizes);
    for (const key in homePlayers) {
        if (homePlayers[key]['shoe'] === biggestShoe) {
            return homePlayers[key]['rebounds'];
        }
    };
    for (const key in awayPlayers) {
        if (awayPlayers[key]['shoe'] === biggestShoe) {
            return awayPlayers[key]['rebounds'];
        }
    };
};

function mostPointsScored() {
    let object = gameObject();
    let homePlayers = object.home.players;
    let homePoints = [];
    let awayPlayers = object.away.players;
    let awayPoints = [];
    for (const key in homePlayers) {
        homePoints.push(homePlayers[key]['points']);
    };
    for (const key in awayPlayers) {
        awayPoints.push(awayPlayers[key]['points']);
    };
    let highestScore = Math.max(...homePoints, ...awayPoints);
    for (const key in homePlayers) {
        if (homePlayers[key]['points'] === highestScore) {
            return key;
        }
    };
    for (const key in awayPlayers) {
        if (awayPlayers[key]['points'] === highestScore) {
            return key;
        }
    };
};

function winningTeam() {
    let object = gameObject();
    let homePlayers = object.home.players;
    let homePoints = 0;
    let awayPlayers = object.away.players;
    let awayPoints = 0;
    for (const key in homePlayers) {
        homePoints += homePlayers[key]['points'];
    };
    for (const key in awayPlayers) {
        awayPoints += awayPlayers[key]['points'];
    };
    if (homePoints > awayPoints) {
        return 'Brooklyn Nets'
    } else if (awayPoints > homePoints) {
        return 'Charlotte Hornets'
    } else {
        return 'error';
    }
};

function playerWithLongestName() {
    let object = gameObject();
    let homePlayers = object.home.players;
    let awayPlayers = object.away.players;
    let lengths = [];
    for (const key in homePlayers) {
        lengths.push(key.length);
    }
    for (const key in awayPlayers) {
        lengths.push(key.length)
    }
    let longestName = Math.max(...lengths);
    for (const key in homePlayers) {
        if (key.length === longestName) {
            return key
        }
    }
    for (const key in awayPlayers) {
        if (key.length === longestName) {
            return key;
        }
    }
};

function mostSteals() {
    let object = gameObject();
    let homePlayers = object.home.players;
    let awayPlayers = object.away.players;
    let totalSteals = [];
    for (const key in homePlayers) {
        totalSteals.push(object.home.players[key]['steals']);
    }
    for (const key in awayPlayers) {
        totalSteals.push(object.away.players[key]['steals'])
    }
    let mostSteals = Math.max(...totalSteals);
    for (const key in homePlayers) {
        if (object.home.players[key]['steals'] === mostSteals) {
            return key;
        }
    }
    for (const key in awayPlayers) {
        if (object.away.players[key]['steals'] === mostSteals) {
            return key;
        }
    }
};

function doesLongNameStealATon() {
    let object = gameObject();
    let playerLongestName = playerWithLongestName();
    let playerMostSteals = mostSteals();
    return playerMostSteals === playerLongestName ? true : false;
};