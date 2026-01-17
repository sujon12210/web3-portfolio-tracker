const { getPortfolio } = require("./tracker");

async function start() {
  const data = await getPortfolio();
  console.log("Portfolio Value:");
  console.log(data);
}

start();
