import { Deck } from "./deck"

export default function initDeck () {
  const deck = new Deck()
  deck.print()
  deck.shuffle()
  deck.deal()
}