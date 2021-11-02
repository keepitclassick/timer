const args = process.argv.slice(2);

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


