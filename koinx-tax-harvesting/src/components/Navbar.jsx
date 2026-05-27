function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="w-full bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4 flex items-center justify-between">
      <a href="https://koinx.com" target="_blank" rel="noreferrer">
        <span className="text-blue-600 font-bold text-2xl">KoinX</span>
        <sup className="text-blue-600 text-xs">®</sup>
      </a>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-yellow-400 text-xl"
      >
        {darkMode ? '☀️' : '🌙'}
      </button>
    </nav>
  )
}

export default Navbar