function PreHarvestingCard({ data }) {
  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-xl p-6 flex-1">
      <h2 className="text-lg font-semibold mb-4 dark:text-white">Pre Harvesting</h2>

      <div className="grid grid-cols-3 text-sm text-gray-500 dark:text-gray-400 mb-2">
        <span></span>
        <span className="text-center font-medium">Short-term</span>
        <span className="text-center font-medium">Long-term</span>
      </div>

      <div className="grid grid-cols-3 text-sm mb-2 dark:text-gray-300">
        <span className="text-gray-600 dark:text-gray-400">Profits</span>
        <span className="text-center">$ {data.stcg.profits.toFixed(2)}</span>
        <span className="text-center">$ {data.ltcg.profits.toFixed(2)}</span>
      </div>

      <div className="grid grid-cols-3 text-sm mb-2 dark:text-gray-300">
        <span className="text-gray-600 dark:text-gray-400">Losses</span>
        <span className="text-center">- $ {data.stcg.losses.toFixed(2)}</span>
        <span className="text-center">- $ {data.ltcg.losses.toFixed(2)}</span>
      </div>

      <div className="grid grid-cols-3 text-sm font-medium border-t dark:border-gray-600 pt-2 mb-4 dark:text-gray-300">
        <span className="text-gray-600 dark:text-gray-400">Net Capital Gains</span>
        <span className="text-center">$ {data.stcgNet.toFixed(2)}</span>
        <span className="text-center">$ {data.ltcgNet.toFixed(2)}</span>
      </div>

      <div className="flex items-center gap-3 border-t dark:border-gray-600 pt-4">
        <span className="text-gray-600 dark:text-gray-400 font-medium">Realised Capital Gains:</span>
        <span className="text-2xl font-bold dark:text-white">$ {data.realisedGains.toFixed(2)}</span>
      </div>
    </div>
  )
}

export default PreHarvestingCard