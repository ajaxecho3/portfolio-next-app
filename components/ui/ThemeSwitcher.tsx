"use client"
import { MoonStar, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()


  useEffect(() => {
    setMounted(true)
  }, [])


  if (!mounted) {
    return null
  }


  return (
    <button
      className={`w-fit absolute right-5 top-2 p-1 rounded-full hover:scale-110 active:scale-100 duration-200 bg-slate-200 dark:bg-[#212933]`}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {
        theme === 'light' ? <MoonStar size={"24px"} /> : <Sun size={"24px"} />
      }
    </button>
  )
}
