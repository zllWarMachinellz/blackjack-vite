import _ from "underscore"


export const crearDeck = (cardTypes, specialTypes) => {
    let deck = []
    
    for (let i = 2; i <= 10; i++) {
        for (let tipo of cardTypes) {
            deck.push(i + tipo);
        }
    }

    for (let tipo of cardTypes) {
        for (let esp of specialTypes) {
            deck.push(esp + tipo);
        }
    }

    deck = _.shuffle(deck);
    return deck;
}
