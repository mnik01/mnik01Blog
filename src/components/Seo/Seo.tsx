import type { FC } from "react"
import Head from 'next/head'
import { useRouter } from "next/router"
import type { SeoProps } from "./types"
import { defaultTitle } from "./constants"

export const Seo: FC<SeoProps> = ({
  title = defaultTitle,
  coverImgPath,
}) => {
  const { locale } = useRouter()

  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="description" content={locale === 'ru' ? 'Личный блок: статьи и мнения про айти, дизайн и прочее...' : "Personal blog & portfolio. Front-end, design and other..."} />

      {/* <!-- Facebook Meta Tags --> */}
      <meta property="og:url" content="https://mnik01.vercel.app/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title === defaultTitle ? defaultTitle : title} />
      <meta property="og:description" content={locale === 'ru' ? 'Личный блок: статьи и мнения про айти, дизайн и прочее...' : "Personal blog & portfolio. Front-end, design and other..."} />
      {coverImgPath || <meta property="og:image" content={title === defaultTitle ? `https://mnik01.vercel.app/api/og` : `https://mnik01.vercel.app/api/og?title=${title}`} />
      }
      {/* <!-- Twitter Meta Tags --> */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="mnik01.vercel.app" />
      <meta property="twitter:url" content="https://mnik01.vercel.app/" />
      <meta name="twitter:title" content={title === defaultTitle ? defaultTitle : title} />
      <meta name="twitter:description" content={locale === 'ru' ? 'Личный блок: статьи и мнения про айти, дизайн и прочее...' : "Personal blog & portfolio. Front-end, design and other..."} />
      {coverImgPath || <meta name="twitter:image" content={title === defaultTitle ? `https://mnik01.vercel.app/api/og` : `https://mnik01.vercel.app/api/og?title=${title}`} />
      }
    </Head>
  )
}
