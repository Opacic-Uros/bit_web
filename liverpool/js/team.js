var players = [{
        name: 'Becker',
        lastName: 'Allison',
        number: '1',
        img: 'img/allison.jpg'
    },
    {
        name: 'Trent',
        lastName: 'Alexander-Arnold',
        number: '66',
        img: 'img/arnold.jpg'
    },
    {
        name: 'Fabio',
        lastName: 'Fabinho',
        number: '3',
        img: 'img/fabinho.jpg'
    },
    {
        name: 'Roberto',
        lastName: 'Firmino',
        number: '9',
        img: 'img/firmino.jpg'
    },
    {
        name: 'Joe',
        lastName: 'Gomez',
        number: '12',
        img: 'img/gomez.jpg'
    },
    {
        name: 'Jordan',
        lastName: 'Henderson',
        number: '14',
        img: 'img/henderson.jpg'
    },
    {
        name: 'Naby',
        lastName: 'Keita',
        number: '8',
        img: 'img/keita.jpg'
    },
    {
        name: 'Sadio',
        lastName: 'Mane',
        number: '10',
        img: 'img/mane.jpg'
    },
    {
        name: 'Joel',
        lastName: 'Matip',
        number: '32',
        img: 'img/matip.jpg'
    },
    {
        name: 'James',
        lastName: 'Milner',
        number: '7',
        img: 'img/milner.jpg'
    },
    {
        name: 'Divock',
        lastName: 'Origi',
        number: '27',
        img: 'img/origi.jpg'
    },
    {
        name: 'Andy',
        lastName: 'Robertson',
        number: '26',
        img: 'img/robertson.jpg'
    },
    {
        name: 'Mohamed',
        lastName: 'Salah',
        number: '11',
        img: 'img/salah.jpg'
    },
    {
        name: 'Virgil',
        lastName: 'van Dijk',
        number: '4',
        img: 'img/vanDijk.jpg'
    },
    {
        name: 'Georginio',
        lastName: 'Wijnaldum',
        number: '5',
        img: 'img/wijnaldum.jpg'
    }
];

var randomNumber = function (numb) {
    return Math.floor(Math.random() * numb);
};

var firstTeam = document.querySelector("#sectionOne");
var secondTeam = document.querySelector("#sectionTwo");

var generatePlayer = function (data) {
    var div = document.createElement("div");
    div.className = "players";
    var image = document.createElement("img");
    var name = document.createElement("h3");
    var last = document.createElement("h3");
    var number = document.createElement("h3");
    name.textContent = data.name;
    last.textContent = data.lastName;
    number.textContent = data.number;
    image.setAttribute("src", data.img);
    div.appendChild(image);
    div.appendChild(name);
    div.appendChild(last);
    div.appendChild(number);
    firstTeam.appendChild(div);
};

var generateReserve = function (data) {
    var div = document.createElement("div");
    div.className = "reservePlayers";
    var image = document.createElement("img");
    var name = document.createElement("h3");
    var last = document.createElement("h3");
    var number = document.createElement("h3");
    name.textContent = data.name;
    last.textContent = data.lastName;
    number.textContent = data.number;
    image.setAttribute("src", data.img);
    div.appendChild(image);
    div.appendChild(name);
    div.appendChild(last);
    div.appendChild(number);
    secondTeam.appendChild(div);
};

function changePlayers() {
    var firstTeamPlayers = document.querySelectorAll("#sectionOne div");
    var randomA = randomNumber(firstTeamPlayers.length);
    secondTeam.appendChild(firstTeamPlayers[randomA]);

    var secondTeamPlayers = document.querySelectorAll("#sectionTwo div");
    var randomB = randomNumber(secondTeamPlayers.length);
    firstTeam.appendChild(secondTeamPlayers[randomB]);
}
setInterval(changePlayers, 1000);

for (var i = 0; i < players.length;) {
    var ranNum = randomNumber(players.length);
    if (players.length > 4) {
        generatePlayer(players[ranNum]);
    } else {
        generateReserve(players[ranNum]);
    }
    players.splice(ranNum, 1);
}