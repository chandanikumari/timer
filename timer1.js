const args = process.argv.slice(2);

const timer = () => {
  for (const arg of args) {
    if (!isNaN(arg) && arg >= 0) {
      setTimeout(() => {
        // print the char here
        process.stdout.write('\x07');
      }, arg * 1000);
    }
  }
};

timer(args);


