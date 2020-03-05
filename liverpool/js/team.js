var players = [
    { name: 'Becker', lastName: 'Allison', number: '1', img: 'img/allison.jpg' },
    { name: 'Trent', lastName: 'Alexander-Arnold', number: '66', img: 'img/arnold.jpg' },
    { name: 'Fabio', lastName: 'Fabinho', number: '3', img: 'img/fabinho.jpg' },
    { name: 'Roberto', lastName: 'Firmino', number: '9', img: 'img/firmino.jpg' },
    { name: 'Joe', lastName: 'Gomez', number: '12', img: 'img/gomez.jpg' },
    { name: 'Jordan', lastName: 'Henderson', number: '14', img: 'img/henderson.jpg' },
    { name: 'Naby', lastName: 'Keita', number: '8', img: 'img/keita.jpg' },
    { name: 'Sadio', lastName: 'Mane', number: '10', img: 'img/mane.jpg' },
    { name: 'Joel', lastName: 'Matip', number: '32', img: 'img/matip.jpg' },
    { name: 'James', lastName: 'Milner', number: '7', img: 'img/milner.jpg' },
    { name: 'Divock', lastName: 'Origi', number: '27', img: 'img/origi.jpg' },
    { name: 'Andy', lastName: 'Robertson', number: '26', img: 'img/robertson.jpg' },
    { name: 'Mohamed', lastName: 'Salah', number: '11', img: 'img/salah.jpg' },
    { name: 'Virgil', lastName: 'van Dijk', number: '4', img: 'img/vanDijk.jpg' },
    { name: 'Georginio', lastName: 'Wijandulm', number: '5', img: 'img/wijaldum.jpg' }
]

var firstSquad = document.getElementById('section-one');
var substitutes = document.getElementById('section-two');

function CreatePlayer(player) {
    var div = document.createElement('div');
    var img = document.createElement('img');
    var imgUrl = players.img;
    img.src = imgUrl + "";
    img.setAttribute('src', players.img);
    var name = document.createTextNode(players.name);
    var lastName = document.createTextNode(players.lastName);
    var number = document.createTextNode(players.number);

    div.appendChild(img);
    div.appendChild(name);
    div.appendChild(lastName);
    div.appendChild(number);

    return div;
}
function getRandomNumber(limit) {
    var number = limit * Math.random();
    number = Math.floor(number);
    return number;
}
function getPlayer(players) {
    while (players.length) {
        var ranNum = getRandomNumber(players.length);
        var player = players[players.length];
        if (players.length > 4) {
            firstSquad.appendChild(CreatePlayer(player))
        } else {
            substitutes.appendChild(CreatePlayer(player));
        }
        players.splice(ranNum, 1);
    }
}

getPlayer(players);