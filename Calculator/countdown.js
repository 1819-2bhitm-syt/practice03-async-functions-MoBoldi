let counter = 11;
let timer = setInterval(() => {
    console.log(counter-1);
    counter--;
}, 1000);
setTimeout(() => {
    clearInterval(timer)
}, counter * 1000 + 100);