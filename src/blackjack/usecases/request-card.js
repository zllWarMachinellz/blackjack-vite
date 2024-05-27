/**
 * This function return the request card
 * @param {Array<string>} deck 
 * @returns {string} Return the card
 */

export const pedirCarta = (deck) => {
    console.log(deck);
    if (deck.length === 0) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}