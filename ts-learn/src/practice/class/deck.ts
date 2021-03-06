import { DeckColor, Mark } from "../enums";
import { Card, NormalCard, Joker } from "../types";
import { getRandom } from "../common/util"

interface PublishResult {
  player1:Deck
  player2:Deck
  player3:Deck
  left:Deck
}

export class Deck {
  private cards: Card[] = []

  constructor (cards?: Card[]) {
    cards ? this.cards = cards : this.init()
  }

  private init () {
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
        this.cards.push(cards)

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
    this.cards.push(joker)
    joker = {
      type: 'small',
      getString () {
        return "JOKER"
      }
    }
    this.cards.push(joker)
  }

  print () {
    let str:string = ''
    let result:string = '\n'
    this.cards.forEach((item, index) => {
      str += item.getString() + '\t'
      if ((index + 1) % 4 === 0) {
        str += result
      }
    })
    console.log(str)
  }

  /**
   * 洗牌
   */
  shuffle () {
    for (let i = 0; i < this.cards.length; i++) {
      const targetIndex = getRandom(0, this.cards.length)

      const temp = this.cards[i]
      this.cards[i] = this.cards[targetIndex]
      this.cards[targetIndex] = temp
    }
  }

  /**
   * 发牌
   * 发完牌后，得到的结果有4个
   */
  deal (): PublishResult {
    let player1: Deck, player2: Deck, player3: Deck, left: Deck

    player1 = this.takeCards(17)
    player2 = this.takeCards(17)
    player3 = this.takeCards(17)
    left = new Deck(this.cards)

    return {player1, player2, player3, left}
  }

  /**
   * 摸牌
   * @param n 牌数
   */
  private takeCards (n: number):Deck {
    const cards: Card[] = []
    for (let i = 0; i < n; i++) {
      cards.push(this.cards.shift() as Card)
    }
    return new Deck(cards)
  }
}