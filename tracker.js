const fs = require("fs");
const { ethers } = require("ethers");
const fetch = require("node-fetch");
const config = require("./config");

async function getPortfolio() {
  const provider = new ethers.providers.JsonRpcProvider(config.rpcUrl);
  const address = fs.readFileSync("wallets.txt", "utf8").trim();

  const balance = await provider.getBalance(address);
  const eth = ethers.utils.formatEther(balance);

  const priceUrl = "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd";
  const res = await fetch(priceUrl);
  const priceData = await res.json();

  const usdValue = (parseFloat(eth) * priceData.ethereum.usd).toFixed(2);

  return {
    wallet: address,
    ethBalance: eth,
    usdValue: usdValue
  };
}

module.exports = { getPortfolio };
