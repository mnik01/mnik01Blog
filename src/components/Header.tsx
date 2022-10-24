import type { FC } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"

export const Header: FC = () => {
  const router = useRouter()
  const isHomePage = router.pathname === '/'
  return (
    <header className="flex px-3 h-[45px] items-center justify-between">
      <Link href="/">
        <div className="flex cursor-pointer hover:scale-105 transition-transform gap-1.5">
          <Image alt="logo" width={20} height={20} src='/images/heart.svg' />
          <p className={isHomePage ? "" : "-translate-y-[2px]"}>{isHomePage ? 'Главная страница' : 'mnik01'}</p>
        </div>
      </Link>
      <nav>
        <ul className="flex gap-6">
          <li>
            <Link href="/posts">
              <p className="hover:text-indigo-400 transition-colors cursor-pointer">
                Посты
              </p>
            </Link>
          </li>
          <li>
            <Link href="#Contacts">
              <p className="hover:text-indigo-400 transition-colors cursor-pointer">
                Контакты
              </p>
            </Link>
          </li>
          <li>
            <Link href="#CV">
              <p className="hover:text-indigo-400 transition-colors cursor-pointer">
                Резюме
              </p>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
