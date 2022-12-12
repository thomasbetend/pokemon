const cards = document.querySelector(".cards")!;
const healAll = document.querySelector(".healAll")!;

class Pokemon {

    get currentHealth() {
        return this._currentHealth;
    }

    set currentHealth(_currentHealth) {
        this._currentHealth = _currentHealth;
    }

    constructor (
        public index?: number,
        public name?: string, 
        public _currentHealth?: number, 
        public maxHealth = 100,
        public scream?: string,
        public picture?: string,)  {
    }

    screaming(): void {
        if (this.currentHealth === this.maxHealth) {
            console.log(this.scream);
        }
    }

}

class Machine {

    constructor(maxPokemons = 6) {}

    static heal(pokemon: Pokemon): void {
        setTimeout(() =>{
            pokemon.currentHealth = 100;
            pokemon.screaming();
            console.log(pokemon.currentHealth);
        }, 2000)
    }

    static healAll(pokemons: Pokemon[]): void {
        setTimeout(() =>{
            pokemons.forEach(pokemon => {
                pokemon.currentHealth = 100;
                pokemon.screaming();
                console.log(pokemon.currentHealth);
            });
        }, 2000)
    }
}


const bulbizarre = new Pokemon(1, 'Bulbizarre', 70, 100, 'Buuuuuubi !!!', "https://www.pokepedia.fr/images/thumb/e/ef/Bulbizarre-RFVF.png/250px-Bulbizarre-RFVF.png")
const carabaffe = new Pokemon(2, 'Carabaffe', 30, 100, 'Baffe dans ta gueule !!!', "https://www.pokepedia.fr/images/thumb/2/2a/Carabaffe-RFVF.png/250px-Carabaffe-RFVF.png")
const papilusion = new Pokemon(3, 'Papilusion', 40, 100, 'Papillon de lumière !!!', "https://www.pokepedia.fr/images/thumb/8/83/Papilusion-RFVF.png/250px-Papilusion-RFVF.png")
const pikachu = new Pokemon(4, 'Pikachu', 20, 100, 'Pika Pika Pique !!!', "https://www.pokepedia.fr/images/thumb/7/76/Pikachu-DEPS.png/250px-Pikachu-DEPS.png")
const grodoudou = new Pokemon(5, 'Grodoudou', 10, 100, 'Doudouche !!!', "https://www.pokepedia.fr/images/thumb/7/7e/Grodoudou-RFVF.png/250px-Grodoudou-RFVF.png")
const salameche = new Pokemon(6, 'Salameche', 60, 100, 'Mèche de feu !!!', "https://www.pokepedia.fr/images/thumb/8/89/Salam%C3%A8che-RFVF.png/250px-Salam%C3%A8che-RFVF.png")


/* const bulbizarre = new Pokemon(1, 'Bulbizarre', 100, 'Buuuuuubi !!!', "https://www.pokepedia.fr/images/thumb/e/ef/Bulbizarre-RFVF.png/250px-Bulbizarre-RFVF.png")
const carabaffe = new Pokemon(2, 'Carabaffe', 100, 'Baffe dans ta gueule !!!', "https://www.pokepedia.fr/images/thumb/2/2a/Carabaffe-RFVF.png/250px-Carabaffe-RFVF.png")
const papilusion = new Pokemon(3, 'Papilusion', 100, 'Papillon de lumière !!!', "https://www.pokepedia.fr/images/thumb/8/83/Papilusion-RFVF.png/250px-Papilusion-RFVF.png")
const pikachu = new Pokemon(4, 'Pikachu', 100, 'Pika Pika Pique !!!', "https://www.pokepedia.fr/images/thumb/7/76/Pikachu-DEPS.png/250px-Pikachu-DEPS.png")
const grodoudou = new Pokemon(5, 'Grodoudou', 100, 'Doudouche !!!', "https://www.pokepedia.fr/images/thumb/7/7e/Grodoudou-RFVF.png/250px-Grodoudou-RFVF.png")
const salameche = new Pokemon(6, 'Salameche', 100, 'Mèche de feu !!!', "https://www.pokepedia.fr/images/thumb/8/89/Salam%C3%A8che-RFVF.png/250px-Salam%C3%A8che-RFVF.png")
 */

const pokemons = [bulbizarre, carabaffe, papilusion, pikachu, grodoudou, salameche];


const createCard = (pokemon: Pokemon, title: string, imageUrl: string, health: number, index: number): void => {
    const card = document.createElement("div");
    card.classList.add("card");
    cards.appendChild(card);

    const cardHeader = document.createElement("div");
    cardHeader.classList.add("card-header");
    card.appendChild(cardHeader);

    const cardImg = document.createElement("div");
    cardImg.style.backgroundImage = `url(${imageUrl})`;
    cardImg.classList.add("card-img");
    cardHeader.appendChild(cardImg);

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    card.appendChild(cardBody);

    const cardTitle = document.createElement("h2");
    cardTitle.classList.add("card-title");
    cardTitle.textContent= `${title}`;
    cardBody.appendChild(cardTitle);

    const healthLevel = document.createElement("div");
    healthLevel.textContent = `Health : ${health}`;
    cardBody.appendChild(healthLevel);
    
    const healthBarr = document.createElement("div");
    healthBarr.style.width = `${health * 1.6}px`;
    if (health <= 30) {
        healthBarr.style.backgroundColor = "red";
    } else if (30 < health && health <= 60) {
        healthBarr.style.backgroundColor = "orange";
    } else {
        healthBarr.style.backgroundColor = "green";
    } 
    healthBarr.style.height = `20px`;
    cardBody.appendChild(healthBarr);

    const healButton = document.createElement("button");
    healButton.classList.add(`card-button`);   
    healButton.classList.add(`poke-${index}`);
    healButton.textContent = "Heal me, please...";
    healButton.setAttribute("type", "submit");
    cardBody.appendChild(healButton);
    healButton.addEventListener("click", () => {
        console.log(`health before healing : ${pokemon.currentHealth}`);
        Machine.heal(pokemon);
        console.log(pokemon.currentHealth);
    });
}

healAll.addEventListener("click", () => {
    Machine.healAll(pokemons);
})

pokemons.forEach(pokemon => {
createCard(pokemon, pokemon.name!, pokemon.picture!, pokemon.currentHealth!, pokemon.index!)
});

console.log('youpi');

