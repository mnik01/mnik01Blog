import type { FC } from "react"
import { useTheme } from 'next-themes'

export const Footer: FC = () => {
  const { theme, setTheme } = useTheme()

  return <footer>
    <button
        type="button"
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className="inline-flex items-center rounded border border-transparent bg-indigo-600 px-2.5 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Toggle theme
      </button>
  </footer>
}
