/**
 * 产生一个随机数 (无法取到最大值)
 * @params min
 * @params max
 */

export function getRandom (min:number, max:number) {
  const dec = max - min
  return Math.floor(Math.random() * dec + min)
}