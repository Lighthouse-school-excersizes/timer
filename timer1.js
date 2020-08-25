const userInput = process.argv.slice(2);

const timer = (userInput) => {
  for (let i = 0; i < userInput.length; i++) {
    let num = Number(userInput[i]) * 1000;
    if (num >= 0) {
      setTimeout(() => {
        process.stdout.write('\x07');
        console.log(`beeped at ${num / 1000} seconds`);
      }, num);
    }
  }
};

timer(userInput);