import type { FC } from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import { ThemeSwitcher } from "./ThemeSwitcher"

export const Header: FC = () => {
  const router = useRouter()
  const isHomePage = router.pathname === '/'

  return (
    <header className="flex text-p dark:bg-dark dark:text-light text-sm font-inter px-3 h-[45px] items-center justify-between">
      <Link href="/">
        <div className="flex cursor-pointer hover:scale-105 transition-transform gap-1.5">
          <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.9361 5.5739C19.9361 2.54612 17.4816 0.0916748 14.4544 0.0916748C12.6166 0.0916748 10.995 0.998897 9.99995 2.38556C9.00495 0.998897 7.38329 0.0916748 5.54607 0.0916748C2.51829 0.0916748 0.0638428 2.54556 0.0638428 5.5739C0.0638428 6.00279 0.118287 6.41834 0.211621 6.8189C0.972732 11.5483 6.23107 16.5378 9.99995 17.9078C13.7683 16.5378 19.0272 11.5483 19.7872 6.81945C19.8816 6.4189 19.9361 6.00334 19.9361 5.5739Z" fill="#5DADEC"/>
          </svg>
          <p className={isHomePage ? "" : "-translate-y-[2px]"}>{isHomePage ? 'Главная страница' : 'mnik01'}</p>
        </div>
      </Link>
      <nav className="flex items-center justify-center sm:block">
        <ul className="hidden sm:flex gap-2">
          <li className="flex items-center">
            <ThemeSwitcher
              lightModeClasses="hover:text-indigo-400 hover:bg-slate-100 focus:text-indigo-400 focus:bg-slate-100"
              darkModeClasses="text-light hover:bg-stone-500  focus:bg-stone-500"
              extendClass="w-8 p-1.5 h-8 text-p"
            />
          </li>
          <li>
            <Link href="/posts">
              <div className="hover:text-indigo-400 dark:hover:bg-stone-500 dark:text-light hover:bg-slate-100 rounded-md px-3 py-2 transition-colors cursor-pointer">
                Посты
              </div>
            </Link>
          </li>
          <li>
            <Link href="#contacts">
              <div className="hover:text-indigo-400 dark:hover:bg-stone-500 dark:text-light hover:bg-slate-100 rounded-md px-3 py-2 transition-colors cursor-aointer">
                Контакты
              </div>
            </Link>
          </li>
          <li>
            <Link href="#cv">
              <div className="hover:text-indigo-400 dark:hover:bg-stone-500 dark:text-light hover:bg-slate-100 rounded-md px-3 py-2 transition-colors cursor-pointer">
                Резюме
              </div>
            </Link>
          </li>
        </ul>
        <div className="sm:hidden flex items-center gap-2">
          <ThemeSwitcher
            lightModeClasses="hover:text-indigo-400 hover:bg-slate-100 focus:text-indigo-400 focus:bg-slate-100"
            darkModeClasses="text-light hover:bg-stone-500  focus:bg-stone-500"
            extendClass="w-8 p-1.5 h-8 text-p"
          />
          <button aria-label="expand menu button" name="menu" className="flex text-p dark:text-light gap-6">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 18H21" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3 12H21" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3 6H21" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </nav>
    </header>
  )
}
