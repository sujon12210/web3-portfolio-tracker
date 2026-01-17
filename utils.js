function formatUSD(value) {
  return "$" + Number(value).toFixed(2);
}

module.exports = { formatUSD };
