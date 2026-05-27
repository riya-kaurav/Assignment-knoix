function AfterHarvestingCard({ data, preRealisedGains }) {
  const savings = preRealisedGains - data.realisedGains

  return (
    <div className="bg-blue-600 rounded-xl p-6 flex-1 text-white">
      <h2 className="text-lg font-semibold mb-4">After Harvesting</h2>

      <div className="grid grid-cols-3 text-sm text-blue-200 mb-2">
        <span></span>
        <span className="text-center font-medium">Short-term</span>
        <span className="text-center font-medium">Long-term</span>
      </div>

      <div className="grid grid-cols-3 text-sm mb-2">
        <span className="text-blue-100">Profits</span>
        <span className="text-center">$ {data.stcg.profits.toFixed(2)}</span>
        <span className="text-center">$ {data.ltcg.profits.toFixed(2)}</span>
      </div>

      <div className="grid grid-cols-3 text-sm mb-2">
        <span className="text-blue-100">Losses</span>
        <span className="text-center">- $ {data.stcg.losses.toFixed(2)}</span>
        <span className="text-center">- $ {data.ltcg.losses.toFixed(2)}</span>
      </div>

      <div className="grid grid-cols-3 text-sm font-medium border-t border-blue-400 pt-2 mb-4">
        <span className="text-blue-100">Net Capital Gains</span>
        <span className="text-center">$ {data.stcgNet.toFixed(2)}</span>
        <span className="text-center">$ {data.ltcgNet.toFixed(2)}</span>
      </div>

      <div className="flex items-center gap-3 border-t border-blue-400 pt-4">
        <span className="text-blue-100 font-medium">Effective Capital Gains:</span>
        <span className="text-2xl font-bold">$ {data.realisedGains.toFixed(2)}</span>
      </div>

      {savings > 0 && (
         <div className="mt-4 bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-sm flex items-center gap-2">
    <span>🎉</span>
    <span>You are going to save upto $ {savings.toFixed(2)}</span>
  </div>
      )}
    </div>
  )
}

export default AfterHarvestingCard