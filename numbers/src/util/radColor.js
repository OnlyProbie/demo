var colors = ['#f263950', '#62efab', '#ef7658', '#ffe868', '#80e3f7', '#d781f9'];

/**
 * 产生一个 min 到 max 之间的随机数
 */
export function getRandom (min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

/**
 * 返回一个随机颜色
 */
export default function () {
  var index = getRandom(0, colors.length);
  return colors[index];
}