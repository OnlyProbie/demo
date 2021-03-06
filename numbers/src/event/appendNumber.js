import radColor from '../util/radColor';
import { getRandom } from '../util/radColor';

var divContainer = document.getElementById('divContainer');
var divCenter = document.getElementById('divCenter');

export default function (n, isPrime) {
  var span = document.createElement('span');
  var color = radColor();
  if(isPrime) {
    span.style.color = color;
    createCenterPrimeNumber(n, color);
  }
  span.innerText = n;
  divContainer.appendChild(span)
  // 产生中间的数字
  createCenterNumber(n)
}

function createCenterNumber(num) {
  divCenter.innerText = num;
}

function createCenterPrimeNumber(n, color) {
  var div  = document.createElement('div');
  div.className = 'center';
  div.style.color = color;
  div.innerText = n;
  document.body.appendChild(div);

  // 加入div后，让页面强行重新渲染
  getComputedStyle(div).left; // 只要读取某个元素的位置或者尺寸信息，页面就会重新渲染

  div.style.transform = `translate(${getRandom(-150, 150)}px, ${getRandom(-50, 50)}px)`
  div.style.opacity = '0'
}