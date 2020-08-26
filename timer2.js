const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');


const timer = (num) => {
  num = num * 1000;
  setTimeout(() => {
    process.stdout.write('\x07');
    console.log('beep beep!');
  }, num);
};

stdin.on('data', (key) => {
  if (key === '\u0003') {
    console.log('Thanks for using me, ciao!');
    process.exit();
  }
  if (key === '\u0062') {
    timer(0);
  }

  const numKeys = ['\u0031', '\u0032', '\u0033', '\u0034', '\u0035', '\u0036', '\u0037', '\u0038', '\u0039',];
  
  for (const char of numKeys) {
    if (key === char) {
      console.log(`setting timer for ${char} seconds`);
      timer(key);
    }
  }
});