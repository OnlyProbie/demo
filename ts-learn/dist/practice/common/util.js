export function getRandom(min, max) {
    const dec = max - min;
    return Math.floor(Math.random() * dec + min);
}
