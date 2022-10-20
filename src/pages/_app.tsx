import '../styles/globals.css'
import type { AppType } from 'next/dist/shared/lib/utils'
import { ThemeProvider } from 'next-themes'

// core styles shared by all of react-notion-x (required)
import 'react-notion-x/src/styles.css'
// used for code syntax highlighting (optional)
import '../styles/prism-tomorrow.css'
import type { AppProps } from 'next/app'
// used for rendering equations (optional)
// import 'katex/dist/katex.min.css'

const MyApp: AppType = ({ Component, pageProps }: AppProps) => {
  return (
    <>
     <ThemeProvider attribute="class">
        <Component {...pageProps} />
     </ThemeProvider>
    </>
  )
}

export default MyApp
