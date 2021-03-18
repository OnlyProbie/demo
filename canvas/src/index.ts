export const canvas: HTMLCanvasElement = document.querySelector<HTMLCanvasElement>('#canvas')!

const context = canvas!.getContext('2d')!

context.font = '30pt Arial';
context.fillStyle = 'cornflowerblue';
context.strokeStyle = 'blue';
context.fillText('hello world', canvas.width / 2 - 150, canvas.height / 2 + 15)
context.strokeText('hello world', canvas.width / 2 - 150, canvas.height / 2 + 15)