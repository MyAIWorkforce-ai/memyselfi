"use client"
import { useTheme } from "./ThemeProvider"
export default function Toggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === "dark"
  return (
    <div className="flex items-center justify-center gap-3 text-lg">
      <span>Light</span>
      <button
        onClick={toggleTheme}
        className={` w-12 h-7 rounded-full flex items-center px-1 transition-colors duration-300
          ${isDark ? "bg-black" : "bg-gray-400"}
 `} >
    <div className={`  h-5 w-5 rounded-full bg-white transition-transform duration-300
            ${isDark ? "translate-x-5" : "translate-x-0"}`}  />
      </button>

    <span>Dark</span>
    </div>
  )
}
