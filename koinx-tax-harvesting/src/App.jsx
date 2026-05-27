import { useState, useEffect, useMemo } from 'react'
import { fetchCapitalGains } from './data/capitalGainsAPI'
import { fetchHoldings } from './data/holdingsAPI'
import {
  computePreHarvesting,
  computeAfterHarvesting,
} from './utils/calculations'

import Navbar from './components/Navbar.jsx'
import DisclaimerBanner from './components/DisclaimerBanner.jsx'
import PreHarvestingCard from './components/PreHarvestingCard'
import AfterHarvestingCard from './components/AfterHarvestingCard.jsx'
import HoldingsTable from './components/HoldingsTable'

function App() {
  const [capitalGains, setCapitalGains] = useState(null)
  const [holdings, setHoldings] = useState([])
  const [selectedIds, setSelectedIds] = useState(new Set())
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    fetchCapitalGains().then((data) => {
      setCapitalGains(data.capitalGains)
    })

    fetchHoldings().then((data) => {
      setHoldings(data)
    })
  }, [])

  const handleToggle = (index) => {
    setSelectedIds((prev) => {
      const updated = new Set(prev)

      if (updated.has(index)) {
        updated.delete(index)
      } else {
        updated.add(index)
      }

      return updated
    })
  }

  const handleToggleAll = () => {
    if (selectedIds.size === holdings.length) {
      setSelectedIds(new Set())
    } else {
      setSelectedIds(new Set(holdings.map((_, i) => i)))
    }
  }

  const preHarvesting = useMemo(() => {
    if (!capitalGains) return null
    return computePreHarvesting(capitalGains)
  }, [capitalGains])

  const afterHarvesting = useMemo(() => {
    if (!capitalGains) return null

    return computeAfterHarvesting(
      capitalGains,
      holdings,
      selectedIds
    )
  }, [capitalGains, holdings, selectedIds])

  if (!preHarvesting || !afterHarvesting) {
    return (
      <div className="min-h-screen flex items-center justify-center dark:bg-gray-900 dark:text-white">
        Loading...
      </div>
    )
  }

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

        <main className="max-w-5xl mx-auto px-2 md:px-4 py-6">
          <div className="flex items-center gap-3 mb-4">
            <h1 className="text-2xl font-bold dark:text-white">
              Tax Harvesting
            </h1>

           <div className="relative group">
  <span className="text-blue-500 text-sm underline cursor-pointer">
    How it works?
  </span>

  <div className="absolute left-0 top-6 w-72 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-xl shadow-lg p-4 text-sm text-gray-600 dark:text-gray-300 z-50 hidden group-hover:block">
    <p className="font-semibold text-gray-800 dark:text-white mb-2">How Tax Harvesting Works</p>
    <p className="mb-2">Tax loss harvesting is a strategy where you sell assets at a loss to offset your capital gains and reduce your overall tax liability.</p>
    <p>Select the holdings you want to harvest below and see your updated tax savings in real time.</p>
  </div>
</div>
          </div>

          <DisclaimerBanner />

          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <PreHarvestingCard data={preHarvesting} />

            <AfterHarvestingCard
              data={afterHarvesting}
              preRealisedGains={preHarvesting.realisedGains}
            />
          </div>

          <HoldingsTable
            holdings={holdings}
            selectedIds={selectedIds}
            onToggle={handleToggle}
            onToggleAll={handleToggleAll}
          />
        </main>
      </div>
    </div>
  )
}

export default App