function HoldingsTable({
  holdings,
  selectedIds,
  onToggle,
  onToggleAll,
}) {
  const allSelected =
    holdings.length > 0 &&
    selectedIds.size === holdings.length

  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4 shadow-sm">
      <h2 className="text-lg font-semibold mb-4 dark:text-white">
        Holdings
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full text-sm min-w-[900px]">
          <thead>
            <tr className="border-b dark:border-gray-700 text-gray-600 dark:text-gray-300">
              <th className="pb-3 text-left">
                <input
                  type="checkbox"
                  checked={allSelected}
                  onChange={onToggleAll}
                  className="w-4 h-4 cursor-pointer"
                />
              </th>

              <th className="pb-3 text-left">Asset</th>

              <th className="pb-3 text-right">
                Holdings
                <br />
                <span className="text-xs text-gray-400">
                  Current Market Rate
                </span>
              </th>

              <th className="pb-3 text-right">
                Total Current Value
              </th>

              <th className="pb-3 text-right">
                Short-Term Gain
              </th>

              <th className="pb-3 text-right">
                Long-Term Gain
              </th>

              <th className="pb-3 text-right">
                Amount to Sell
              </th>
            </tr>
          </thead>

          <tbody>
            {holdings.map((holding, index) => (
              <tr
                key={index}
                className="border-b dark:border-gray-700 last:border-0 hover:bg-gray-50 dark:hover:bg-gray-700 transition"
              >
                <td className="py-4">
                  <input
                    type="checkbox"
                    checked={selectedIds.has(index)}
                    onChange={() => onToggle(index)}
                    className="w-4 h-4 cursor-pointer"
                  />
                </td>

                <td className="py-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={holding.logo}
                      alt={holding.coin}
                      className="w-8 h-8 rounded-full object-cover"
                    />

                    <div>
                      <div className="font-medium dark:text-white">
                        {holding.coin}
                      </div>

                      <div className="text-xs text-gray-400">
                        {holding.coinName}
                      </div>
                    </div>
                  </div>
                </td>

                <td className="py-4 text-right">
                  <div className="dark:text-white">
                    {holding.totalHolding.toFixed(4)}{' '}
                    {holding.coin}
                  </div>

                  <div className="text-xs text-gray-400">
                    ${holding.currentPrice.toFixed(2)}/
                    {holding.coin}
                  </div>
                </td>

                <td className="py-4 text-right font-medium dark:text-white">
                  $
                  {(
                    holding.totalHolding *
                    holding.currentPrice
                  ).toFixed(2)}
                </td>

                <td className="py-4 text-right">
                  <div
                    className={
                      holding.stcg.gain >= 0
                        ? 'text-green-500'
                        : 'text-red-500'
                    }
                  >
                    {holding.stcg.gain >= 0 ? '+' : ''}
                    ${holding.stcg.gain.toFixed(2)}
                  </div>

                  <div className="text-xs text-gray-400">
                    {holding.stcg.balance.toFixed(4)}{' '}
                    {holding.coin}
                  </div>
                </td>

                <td className="py-4 text-right">
                  <div
                    className={
                      holding.ltcg.gain >= 0
                        ? 'text-green-500'
                        : 'text-red-500'
                    }
                  >
                    {holding.ltcg.gain >= 0 ? '+' : ''}
                    ${holding.ltcg.gain.toFixed(2)}
                  </div>

                  <div className="text-xs text-gray-400">
                    {holding.ltcg.balance.toFixed(4)}{' '}
                    {holding.coin}
                  </div>
                </td>

                <td className="py-4 text-right font-medium dark:text-white">
                  {selectedIds.has(index)
                    ? `${holding.totalHolding.toFixed(
                        4
                      )} ${holding.coin}`
                    : '-'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default HoldingsTable