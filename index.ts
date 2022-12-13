const cards = document.querySelector(".cards")!;
const healAll = document.querySelector(".healAll")!;

class Pokemon {

    healthbar?: HTMLElement;

    constructor (
        public name: string, 
        public picture: string,
        public currentHealth: number,
        public maxHealth: number)  {}

    createHTML() {
        this.healthbar = createCard(this.name, this.picture, this.heal);
        console.log('bouh');
    }

    heal = () => {
        this.currentHealth = this.maxHealth;
        if(!this.healthbar) return;
        let currentPercent = this.currentHealth / this.maxHealth * 100;
        this.healthbar.style.width = `${currentPercent}%`;
    }

    screaming(): void {
        console.log(this.name);
    }

}

/* class Machine {

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
} */

interface Pokemon {
    name: string;
    image: string;
}


const pokemonsData = [
    {
        name: 'Bulbizarre',
        image: "https://www.pokepedia.fr/images/thumb/e/ef/Bulbizarre-RFVF.png/250px-Bulbizarre-RFVF.png",
        currentHealth: 10,
        maxHealth: 100
    },
    {
        name: 'Carabaffe',
        image: "https://www.pokepedia.fr/images/thumb/2/2a/Carabaffe-RFVF.png/250px-Carabaffe-RFVF.png",
        currentHealth: 10,
        maxHealth: 100
    }
]

/* const bulbizarre = new Pokemon(1, 'Bulbizarre', 100, 'Buuuuuulbi !!!', "https://www.pokepedia.fr/images/thumb/e/ef/Bulbizarre-RFVF.png/250px-Bulbizarre-RFVF.png")
const carabaffe = new Pokemon(2, 'Carabaffe', 100, 'Baffe dans ta gueule !!!', "https://www.pokepedia.fr/images/thumb/2/2a/Carabaffe-RFVF.png/250px-Carabaffe-RFVF.png")
const papilusion = new Pokemon(3, 'Papilusion', 100, 'Papillon de lumière !!!', "https://www.pokepedia.fr/images/thumb/8/83/Papilusion-RFVF.png/250px-Papilusion-RFVF.png")
const pikachu = new Pokemon(4, 'Pikachu', 100, 'Pika Pika Pique !!!', "https://www.pokepedia.fr/images/thumb/7/76/Pikachu-DEPS.png/250px-Pikachu-DEPS.png")
const grodoudou = new Pokemon(5, 'Grodoudou', 100, 'Doudouche !!!', "https://www.pokepedia.fr/images/thumb/7/7e/Grodoudou-RFVF.png/250px-Grodoudou-RFVF.png")
const salameche = new Pokemon(6, 'Salameche', 100, 'Mèche de feu !!!', "https://www.pokepedia.fr/images/thumb/8/89/Salam%C3%A8che-RFVF.png/250px-Salam%C3%A8che-RFVF.png")
 */

/* const bulbizarre = new Pokemon(1, 'Bulbizarre', 100, 'Buuuuuubi !!!', "https://www.pokepedia.fr/images/thumb/e/ef/Bulbizarre-RFVF.png/250px-Bulbizarre-RFVF.png")
const carabaffe = new Pokemon(2, 'Carabaffe', 100, 'Baffe dans ta gueule !!!', "https://www.pokepedia.fr/images/thumb/2/2a/Carabaffe-RFVF.png/250px-Carabaffe-RFVF.png")
const papilusion = new Pokemon(3, 'Papilusion', 100, 'Papillon de lumière !!!', "https://www.pokepedia.fr/images/thumb/8/83/Papilusion-RFVF.png/250px-Papilusion-RFVF.png")
const pikachu = new Pokemon(4, 'Pikachu', 100, 'Pika Pika Pique !!!', "https://www.pokepedia.fr/images/thumb/7/76/Pikachu-DEPS.png/250px-Pikachu-DEPS.png")
const grodoudou = new Pokemon(5, 'Grodoudou', 100, 'Doudouche !!!', "https://www.pokepedia.fr/images/thumb/7/7e/Grodoudou-RFVF.png/250px-Grodoudou-RFVF.png")
const salameche = new Pokemon(6, 'Salameche', 100, 'Mèche de feu !!!', "https://www.pokepedia.fr/images/thumb/8/89/Salam%C3%A8che-RFVF.png/250px-Salam%C3%A8che-RFVF.png")
 */

//const pokemons = [bulbizarre, carabaffe, papilusion, pikachu, grodoudou, salameche];

const createElement = (element: string, className: string, parent: Element) => {
    const child = document.createElement(element);
    child.classList.add(className);
    parent.appendChild(child);
    return child;
}

const createCard = (title: string, image: string, heal: () => void) => {
    const card = document.createElement("div");
    card.classList.add("card");
    cards.appendChild(card);

/*     createElement("div", "card", cards);
    
    createElement("div", "card-header", card);

    createElement("div", "card-header", card); */


    const cardHeader = document.createElement("div");
    cardHeader.classList.add("card-header");
    card.appendChild(cardHeader);

    const cardImg = document.createElement("div");
    cardImg.style.backgroundImage = `url(${image})`;
    cardImg.classList.add("card-img");
    cardHeader.appendChild(cardImg);

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    card.appendChild(cardBody);

    const cardTitle = document.createElement("h2");
    cardTitle.classList.add("card-title");
    cardTitle.textContent= `${title}`;
    cardBody.appendChild(cardTitle);

    const healthBar = document.createElement("div");
    healthBar.classList.add("health-bar");
    cardBody.appendChild(healthBar);

    const currentHealthBar = document.createElement("div");
    currentHealthBar.classList.add("current-health-bar");
    healthBar.appendChild(currentHealthBar);

    const buttonHeal = document.createElement("button");
    buttonHeal.classList.add("card-button");
    buttonHeal.textContent = "Heal me";
    cardBody.appendChild(buttonHeal);

    buttonHeal.addEventListener('click', () => {
        heal();
    })

    return currentHealthBar;
    
}

const pokemons: Pokemon[] = [];

pokemonsData.forEach(pokemon => {
    pokemons.push(new Pokemon(pokemon.name, pokemon.image, pokemon.currentHealth, pokemon.maxHealth));
});

pokemons.forEach((element) => {
    console.log('bouh');
    element.createHTML();
})


