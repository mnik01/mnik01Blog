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
          <Image alt="logo" width={20} height={20} src='/images/heart.svg' />
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
