import { Mark, DeckColor } from "./enums";
export function CreateDeck() {
    let deck = [];
    let mark = Object.values(Mark);
    let deck_color = Object.values(DeckColor);
    for (let m of mark) {
        for (let dc of deck_color) {
            let cards = {
                color: dc,
                mark: m,
                getString() {
                    return this.color + this.mark;
                }
            };
            deck.push(cards);
        }
    }
    let joker = {
        type: 'small',
        getString() {
            return "joker";
        }
    };
    deck.push(joker);
    joker = {
        type: 'small',
        getString() {
            return "JOKER";
        }
    };
    deck.push(joker);
    return deck;
}
export function PrintDeck(deck) {
    let str = '';
    let result = '\n';
    deck.forEach((item, index) => {
        str += item.getString() + '\t';
        if ((index + 1) % 4 === 0) {
            str += result;
        }
    });
    console.log(str);
}
