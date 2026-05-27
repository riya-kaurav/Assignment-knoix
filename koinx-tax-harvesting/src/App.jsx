import { useState, useEffect, useMemo } from 'react'
import { fetchCapitalGains } from './data/capitalGainsAPI'
import { fetchHoldings } from './data/holdingsAPI'
import { computePreHarvesting, computeAfterHarvesting } from './utils/calculations'

function App() {
  const [capitalGains, setCapitalGains] = useState(null)
  const [holdings, setHoldings] = useState([])
  const [selectedIds, setSelectedIds] = useState(new Set())

  useEffect(() => {
    fetchCapitalGains().then((data) => {
      setCapitalGains(data.capitalGains)
    })

    fetchHoldings().then((data) => {
      setHoldings(data)
    })
  }, [])

  const preHarvesting = useMemo(() => {
    if (!capitalGains) return null
    return computePreHarvesting(capitalGains)
  }, [capitalGains])

  const afterHarvesting = useMemo(() => {
    if (!capitalGains) return null
    return computeAfterHarvesting(capitalGains, holdings, selectedIds)
  }, [capitalGains, holdings, selectedIds])

  if (!preHarvesting || !afterHarvesting) return <div>Loading...</div>

  return (
    <div>
      <h1>KoinX Tax Harvesting</h1>
      <p>Pre Realised Gains: {preHarvesting.realisedGains}</p>
      <p>After Realised Gains: {afterHarvesting.realisedGains}</p>
    </div>
  )
}

export default App