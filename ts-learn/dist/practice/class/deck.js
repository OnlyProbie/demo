import { DeckColor, Mark } from "../enums";
import { getRandom } from "../common/util";
export class Deck {
    constructor(cards) {
        this.cards = [];
        cards ? this.cards = cards : this.init();
    }
    init() {
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
                this.cards.push(cards);
            }
        }
        let joker = {
            type: 'small',
            getString() {
                return "joker";
            }
        };
        this.cards.push(joker);
        joker = {
            type: 'small',
            getString() {
                return "JOKER";
            }
        };
        this.cards.push(joker);
    }
    print() {
        let str = '';
        let result = '\n';
        this.cards.forEach((item, index) => {
            str += item.getString() + '\t';
            if ((index + 1) % 4 === 0) {
                str += result;
            }
        });
        console.log(str);
    }
    shuffle() {
        for (let i = 0; i < this.cards.length; i++) {
            const targetIndex = getRandom(0, this.cards.length);
            const temp = this.cards[i];
            this.cards[i] = this.cards[targetIndex];
            this.cards[targetIndex] = temp;
        }
    }
    deal() {
        let player1, player2, player3, left;
        player1 = this.takeCards(17);
        player2 = this.takeCards(17);
        player3 = this.takeCards(17);
        left = new Deck(this.cards);
        return { player1, player2, player3, left };
    }
    takeCards(n) {
        const cards = [];
        for (let i = 0; i < n; i++) {
            cards.push(this.cards.shift());
        }
        return new Deck(cards);
    }
}
