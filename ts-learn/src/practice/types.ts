// 定义deck基本类型

import { DeckColor, Mark } from "./enums";

// deck类型
export type Deck = Card[]

export interface Card {
  getString () : string
}

// deck每一项的类型
export interface NormalCard extends Card {
  color: DeckColor
  mark: Mark
}

export interface Joker extends Card {
  type: 'big' | 'small'
}

