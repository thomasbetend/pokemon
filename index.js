var cards = document.querySelector(".cards");
var healAll = document.querySelector(".healAll");
var Pokemon = /** @class */ (function () {
    function Pokemon(index, name, _currentHealth, maxHealth, scream, picture) {
        if (maxHealth === void 0) { maxHealth = 100; }
        this.index = index;
        this.name = name;
        this._currentHealth = _currentHealth;
        this.maxHealth = maxHealth;
        this.scream = scream;
        this.picture = picture;
    }
    Object.defineProperty(Pokemon.prototype, "currentHealth", {
        get: function () {
            return this._currentHealth;
        },
        set: function (_currentHealth) {
            this._currentHealth = _currentHealth;
        },
        enumerable: false,
        configurable: true
    });
    Pokemon.prototype.screaming = function () {
        if (this.currentHealth === this.maxHealth) {
            console.log(this.scream);
        }
    };
    return Pokemon;
}());
var Machine = /** @class */ (function () {
    function Machine(maxPokemons) {
        if (maxPokemons === void 0) { maxPokemons = 6; }
    }
    Machine.heal = function (pokemon) {
        setTimeout(function () {
            pokemon.currentHealth = 100;
            pokemon.screaming();
            console.log(pokemon.currentHealth);
        }, 2000);
    };
    Machine.healAll = function (pokemons) {
        setTimeout(function () {
            pokemons.forEach(function (pokemon) {
                pokemon.currentHealth = 100;
                pokemon.screaming();
                console.log(pokemon.currentHealth);
            });
        }, 2000);
    };
    return Machine;
}());
var bulbizarre = new Pokemon(1, 'Bulbizarre', 70, 100, 'Buuuuuubi !!!', "https://www.pokepedia.fr/images/thumb/e/ef/Bulbizarre-RFVF.png/250px-Bulbizarre-RFVF.png");
var carabaffe = new Pokemon(2, 'Carabaffe', 30, 100, 'Baffe dans ta gueule !!!', "https://www.pokepedia.fr/images/thumb/2/2a/Carabaffe-RFVF.png/250px-Carabaffe-RFVF.png");
var papilusion = new Pokemon(3, 'Papilusion', 40, 100, 'Papillon de lumière !!!', "https://www.pokepedia.fr/images/thumb/8/83/Papilusion-RFVF.png/250px-Papilusion-RFVF.png");
var pikachu = new Pokemon(4, 'Pikachu', 20, 100, 'Pika Pika Pique !!!', "https://www.pokepedia.fr/images/thumb/7/76/Pikachu-DEPS.png/250px-Pikachu-DEPS.png");
var grodoudou = new Pokemon(5, 'Grodoudou', 10, 100, 'Doudouche !!!', "https://www.pokepedia.fr/images/thumb/7/7e/Grodoudou-RFVF.png/250px-Grodoudou-RFVF.png");
var salameche = new Pokemon(6, 'Salameche', 60, 100, 'Mèche de feu !!!', "https://www.pokepedia.fr/images/thumb/8/89/Salam%C3%A8che-RFVF.png/250px-Salam%C3%A8che-RFVF.png");
/* const bulbizarre = new Pokemon(1, 'Bulbizarre', 100, 'Buuuuuubi !!!', "https://www.pokepedia.fr/images/thumb/e/ef/Bulbizarre-RFVF.png/250px-Bulbizarre-RFVF.png")
const carabaffe = new Pokemon(2, 'Carabaffe', 100, 'Baffe dans ta gueule !!!', "https://www.pokepedia.fr/images/thumb/2/2a/Carabaffe-RFVF.png/250px-Carabaffe-RFVF.png")
const papilusion = new Pokemon(3, 'Papilusion', 100, 'Papillon de lumière !!!', "https://www.pokepedia.fr/images/thumb/8/83/Papilusion-RFVF.png/250px-Papilusion-RFVF.png")
const pikachu = new Pokemon(4, 'Pikachu', 100, 'Pika Pika Pique !!!', "https://www.pokepedia.fr/images/thumb/7/76/Pikachu-DEPS.png/250px-Pikachu-DEPS.png")
const grodoudou = new Pokemon(5, 'Grodoudou', 100, 'Doudouche !!!', "https://www.pokepedia.fr/images/thumb/7/7e/Grodoudou-RFVF.png/250px-Grodoudou-RFVF.png")
const salameche = new Pokemon(6, 'Salameche', 100, 'Mèche de feu !!!', "https://www.pokepedia.fr/images/thumb/8/89/Salam%C3%A8che-RFVF.png/250px-Salam%C3%A8che-RFVF.png")
 */
var pokemons = [bulbizarre, carabaffe, papilusion, pikachu, grodoudou, salameche];
var createCard = function (pokemon, title, imageUrl, health, index) {
    var card = document.createElement("div");
    card.classList.add("card");
    cards.appendChild(card);
    var cardHeader = document.createElement("div");
    cardHeader.classList.add("card-header");
    card.appendChild(cardHeader);
    var cardImg = document.createElement("div");
    cardImg.style.backgroundImage = "url(".concat(imageUrl, ")");
    cardImg.classList.add("card-img");
    cardHeader.appendChild(cardImg);
    var cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    card.appendChild(cardBody);
    var cardTitle = document.createElement("h2");
    cardTitle.classList.add("card-title");
    cardTitle.textContent = "".concat(title);
    cardBody.appendChild(cardTitle);
    var healthLevel = document.createElement("div");
    healthLevel.textContent = "Health : ".concat(health);
    cardBody.appendChild(healthLevel);
    var healthBarr = document.createElement("div");
    healthBarr.style.width = "".concat(health * 1.6, "px");
    if (health <= 30) {
        healthBarr.style.backgroundColor = "red";
    }
    else if (30 < health && health <= 60) {
        healthBarr.style.backgroundColor = "orange";
    }
    else {
        healthBarr.style.backgroundColor = "green";
    }
    healthBarr.style.height = "20px";
    cardBody.appendChild(healthBarr);
    var healButton = document.createElement("button");
    healButton.classList.add("card-button");
    healButton.classList.add("poke-".concat(index));
    healButton.textContent = "Heal me, please...";
    healButton.setAttribute("type", "submit");
    cardBody.appendChild(healButton);
    healButton.addEventListener("click", function () {
        console.log("health before healing : ".concat(pokemon.currentHealth));
        Machine.heal(pokemon);
        console.log(pokemon.currentHealth);
    });
};
healAll.addEventListener("click", function () {
    Machine.healAll(pokemons);
});
pokemons.forEach(function (pokemon) {
    createCard(pokemon, pokemon.name, pokemon.picture, pokemon.currentHealth, pokemon.index);
});
console.log('youpi');
