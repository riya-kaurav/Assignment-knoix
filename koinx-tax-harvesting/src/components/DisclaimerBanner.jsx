import { useState } from 'react'

function DisclaimerBanner() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border border-blue-200 dark:border-blue-800 rounded-lg bg-blue-50 dark:bg-blue-900/20 mb-6">
      <button
        className="w-full flex items-center justify-between px-4 py-3 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-2 text-blue-700 font-medium">
          <span>ℹ️</span>
          <span>Important Notes & Disclaimers</span>
        </div>
        <span className="text-gray-500">{isOpen ? '▲' : '▼'}</span>
      </button>

      {isOpen && (
        <ul className="px-6 pb-4 text-sm text-gray-600 list-disc space-y-1">
          <li>Tax-loss harvesting is currently not allowed under Indian tax regulations. Please consult your tax advisor before making any decisions.</li>
          <li>Tax harvesting does not apply to derivatives or futures.</li>
          <li>Price and market value data is fetched from Coingecko, not from individual exchanges.</li>
          <li>Some countries do not have a short-term / long-term bifurcation.</li>
          <li>Only realized losses are considered for harvesting. Unrealized losses in held assets are not counted.</li>
        </ul>
      )}
    </div>
  )
}

export default DisclaimerBanner