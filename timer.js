const args = process.argv.slice(2);

const timer = function(args) {
  for (const arg of args) {
    if ((isNaN(arg))) {
      break;
    }
    let newArgs = arg * 1000;
    if (Math.sign(arg) !== -1) {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, newArgs);
    }
  }
};

timer(args);


