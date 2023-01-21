const terminalOutput = process.env.TERMINAL_OUTPUT || 'Docker Containers rule!'

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log(terminalOutput);
    await sleep(5000);
  }
}

main();
