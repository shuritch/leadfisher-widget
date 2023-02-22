const PATTERN = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
const MAX = 16;

const uid = () => {
  let milliseconds = new Date().getTime();
  let highPerformance = performance !== undefined && performance.now && performance.now() * 1000;

  return PATTERN.replace(/[xy]/g, char => {
    let random = Math.random() * MAX;

    if (milliseconds > 0) {
      random = (milliseconds + random) % MAX | 0;
      milliseconds = Math.floor(milliseconds % MAX);
    } else {
      random = (highPerformance + random) % MAX | 0;
      highPerformance = Math.floor(highPerformance % MAX);
    }

    return (char === 'x' ? random : (random & 0x3) | 0x8).toString(MAX);
  });
};

export default uid;
