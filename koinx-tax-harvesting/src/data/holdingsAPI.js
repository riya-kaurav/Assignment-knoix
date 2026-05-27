const holdingsData = [
  {
    coin: "USDC",
    coinName: "USDC",
    logo: "https://coin-images.coingecko.com/coins/images/6319/large/usdc.png?1696506694",
    currentPrice: 85.41,
    totalHolding: 0.0015339999999994802,
    averageBuyPrice: 1.5863185433764244,
    stcg: {
      balance: 0.0015339999999994802,
      gain: 0.12858552735441697
    },
    ltcg: {
      balance: 0,
      gain: 0
    }
  },
  // paste all remaining holdings from the assignment here
]

export const fetchHoldings = () => {
  return Promise.resolve(holdingsData)
}