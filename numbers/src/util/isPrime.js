/**
 * 判断num是不是素数
 *
 * 素数：仅能被1和自身整除
 *
 * @param  {} num
 */
export default function (num) {
  for(let i = 2; i <= num - 1; i++) {
    if( num % i === 0 ) {
      // 发现 2 到 n-1 之间，有一个数能整除
      return false
    }
  }
  return true
}