import _ from "underscore"

/**
 * This function create a new deck
 * @param {Array<string>} cardTypes example ['C', 'D', 'H', 'S']
 * @param {Array<String>} specialTypes example ['A', 'J', 'Q', 'K']
 * @returns {Array<String>} Return a new deck
 */

export const crearDeck = (cardTypes, specialTypes) => {

    if (!cardTypes || cardTypes.length === 0) throw new Error('El tipo de carta es obligatorio');
    if (!specialTypes || specialTypes.length === 0) throw new Error('El tipo de carta es obligatorio');

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
