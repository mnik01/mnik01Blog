import type { FC } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"

export const Header: FC = () => {
  const router = useRouter()
  const isHomePage = router.pathname === '/'
  return (
    <header className="flex text-p text-sm font-inter px-3 h-[45px] items-center justify-between">
      <Link href="/">
        <a className="flex cursor-pointer hover:scale-105 transition-transform gap-1.5">
          <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.9361 5.5739C19.9361 2.54612 17.4816 0.0916748 14.4544 0.0916748C12.6166 0.0916748 10.995 0.998897 9.99995 2.38556C9.00495 0.998897 7.38329 0.0916748 5.54607 0.0916748C2.51829 0.0916748 0.0638428 2.54556 0.0638428 5.5739C0.0638428 6.00279 0.118287 6.41834 0.211621 6.8189C0.972732 11.5483 6.23107 16.5378 9.99995 17.9078C13.7683 16.5378 19.0272 11.5483 19.7872 6.81945C19.8816 6.4189 19.9361 6.00334 19.9361 5.5739Z" fill="#5DADEC"/>
          </svg>
          <p className={isHomePage ? "" : "-translate-y-[2px]"}>{isHomePage ? 'Главная страница' : 'mnik01'}</p>
        </a>
      </Link>
      <nav className="flex items-center justify-center sm:block">
        <ul className="hidden sm:flex gap-2">
          <li>
            <Link href="/posts">
              <a className="hover:text-indigo-400 hover:bg-slate-100 rounded-md px-3 py-2 transition-colors cursor-pointer">
                Посты
              </a>
            </Link>
          </li>
          <li>
            <Link href="#Contacts">
              <a className="hover:text-indigo-400 hover:bg-slate-100 rounded-md px-3 py-2 transition-colors cursor-aointer">
                Контакты
              </a>
            </Link>
          </li>
          <li>
            <Link href="#CV">
              <a className="hover:text-indigo-400 hover:bg-slate-100 rounded-md px-3 py-2 transition-colors cursor-pointer">
                Резюме
              </a>
            </Link>
          </li>
        </ul>
        <button className="flex sm:hidden gap-6">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 18H21" stroke="#37352F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M3 12H21" stroke="#37352F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M3 6H21" stroke="#37352F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </nav>
    </header>
  )
}
