import { Mark, DeckColor } from "./enums"
import { Deck, NormalCard, Card, Joker } from "./types"

// 创建Deck
export function CreateDeck ():Deck {
  let deck:Deck = []
  let mark = Object.values(Mark)
  let deck_color = Object.values(DeckColor)
  for ( let m of mark ) {
    for ( let dc of deck_color ) {
      // 由于严格类型检查，不能直接将对象push到Card类型的数组中
      let cards:NormalCard = {
        color: dc,
        mark: m,
        getString () {
          return this.color + this.mark
        }
      }
      deck.push(cards)

      // 使用类型断言

      // deck.push({
      //   color: dc,
      //   mark: m,
      //   getString () {
      //     return this.color + this.mark
      //   }
      // } as Card)
    }
  }
  let joker:Joker = {
    type: 'small',
    getString () {
      return "joker"
    }
  }
  deck.push(joker)
  joker = {
    type: 'small',
    getString () {
      return "JOKER"
    }
  }
  deck.push(joker)
  return deck
}

// 打印Deck
export function PrintDeck (deck: Deck): void {
  let str:string = ''
  let result:string = '\n'
  deck.forEach((item, index) => {
    str += item.getString() + '\t'
    if ((index + 1) % 4 === 0) {
      str += result
    }
  })
  console.log(str)
}