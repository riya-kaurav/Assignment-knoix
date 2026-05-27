export const computePreHarvesting = (capitalGains) => {
  const { stcg, ltcg } = capitalGains

  const stcgNet = stcg.profits - stcg.losses
  const ltcgNet = ltcg.profits - ltcg.losses
  const realisedGains = stcgNet + ltcgNet

  return {
    stcg,
    ltcg,
    stcgNet,
    ltcgNet,
    realisedGains
  }
}

export const computeAfterHarvesting = (capitalGains, holdings, selectedIds) => {
  const stcg = { ...capitalGains.stcg }
  const ltcg = { ...capitalGains.ltcg }

  selectedIds.forEach((index) => {
    const holding = holdings[index]

    if (holding.stcg.gain > 0) {
      stcg.profits += holding.stcg.gain
    } else {
      stcg.losses += Math.abs(holding.stcg.gain)
    }

    if (holding.ltcg.gain > 0) {
      ltcg.profits += holding.ltcg.gain
    } else {
      ltcg.losses += Math.abs(holding.ltcg.gain)
    }
  })

  const stcgNet = stcg.profits - stcg.losses
  const ltcgNet = ltcg.profits - ltcg.losses
  const realisedGains = stcgNet + ltcgNet

  return {
    stcg,
    ltcg,
    stcgNet,
    ltcgNet,
    realisedGains
  }
}